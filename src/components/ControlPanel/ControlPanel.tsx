import { Button, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { SymbolTicker } from "@/components";
import { DatePicker, TimePicker } from "@mui/x-date-pickers";
import { useChartData, useOptions } from "@/store";
import { useEffect, useMemo, useState } from "react";
import { getChartValues, getClosestCorrelation } from "@/utils";
import { DATASET } from "@/constants";

export const ControlPanel = () => {
  const [date, setDate] = useOptions((e) => [e.date, e.setDate]);
  const [time, setTime] = useOptions((e) => [e.time, e.setTime]);
  const ticker = useOptions((e) => e.ticker);
  const [isClient, setIsClient] = useState(false);
  const setCandleStickData = useChartData((e) => e.setMainTrendData);

  useEffect(() => {
    // Prevent hydration mismatch
    setIsClient(true);
  }, []);

  const disabled = useMemo(() => {
    return !ticker || !date || !time;
  }, [ticker, date, time]);

  const onLoadNewDataset = () => {
    const selectedTicker = ticker!.value;
    const selectedDate = date!.format("YYYY-MM-DD");
    const selectedTime = time!.format("HH:mm:ss");

    const mainTrendData = getChartValues(
      selectedTicker,
      selectedDate,
      selectedTime
    );

    // TODO: typecheck this one better
    const closestCorrelation: any = getClosestCorrelation(
      mainTrendData!.correlation,
      DATASET
    );
    const closetCorrelationCandleStickData = closestCorrelation.map(
      (q: { symbol: string; timestamp_at: string }) => {
        return getChartValues(
          q.symbol.split(":CC")[0],
          q.timestamp_at.split(" ")[0],
          q.timestamp_at.split(" ")[1]
        );
      }
    );

    setCandleStickData(mainTrendData);
  };

  return (
    <Box>
      <Typography textAlign="center">Control Panel</Typography>
      <Box display="flex" flexDirection="column" gap="16px">
        <SymbolTicker />
        {isClient && (
          <>
            <DatePicker
              sx={{ width: "100%" }}
              label="Date"
              value={date}
              onChange={(e) => {
                setDate(e);
              }}
            />
            <TimePicker
              sx={{ width: "100%" }}
              label="Time"
              value={time}
              onChange={(e) => setTime(e)}
            />
          </>
        )}
        <Box margin="auto" width="70%">
          <Button
            onClick={onLoadNewDataset}
            variant="outlined"
            color="success"
            fullWidth
            disabled={disabled}
          >
            Load new dataset
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
