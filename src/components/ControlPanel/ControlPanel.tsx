import { SymbolTicker } from "@/components";
import { DATASET, RANDOM_DATA_SET } from "@/constants";
import { useChartData, useOptions } from "@/store";
import { getChartValues, getClosestCorrelation } from "@/utils";
import { Button, Snackbar, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { DatePicker, TimePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { useEffect, useMemo, useRef, useState } from "react";

export const ControlPanel = () => {
  const [date, setDate] = useOptions((e) => [e.date, e.setDate]);
  const [time, setTime] = useOptions((e) => [e.time, e.setTime]);
  const [ticker, setTicker] = useOptions((e) => [e.ticker, e.setTicker]);
  const [isClient, setIsClient] = useState(false);
  const setCandleStickData = useChartData((e) => e.setMainTrendData);
  const setClosetCorrelation = useChartData((e) => e.setClosestCorrelation);
  const setSelectedCorrelation = useChartData((e) => e.setSelectedCorrelation);
  const [open, setOpen] = useState(false);
  const buttonRef = useRef(null);
  const [randomTicker, setRandomTicker] = useState("");

  const handleClick = () => {
    setOpen(false);
  };

  useEffect(() => {
    // Prevent hydration mismatch
    setIsClient(true);
  }, []);

  const disabled = useMemo(() => {
    return !ticker || !date || !time;
  }, [ticker, date, time]);

  const resetChart = () => {
    setClosetCorrelation([]);
    setCandleStickData(null);
    setSelectedCorrelation(0);
  };

  const onLoadNewDataset = () => {
    const selectedTicker = ticker!.value;
    const selectedDate = date!.format("YYYY-MM-DD");
    const selectedTime = time!.format("HH:mm:ss");

    const mainTrendData = getChartValues(
      selectedTicker,
      selectedDate,
      selectedTime
    );

    if (mainTrendData) {
      // TODO: typecheck this one better
      const closestCorrelation: any = getClosestCorrelation(
        mainTrendData!.correlation,
        DATASET
      );
      const closestCorrelationCandleStickData = closestCorrelation.map(
        (q: { symbol: string; timestamp_at: string }) => {
          return getChartValues(
            q.symbol.split(":CC")[0],
            q.timestamp_at.split(" ")[0],
            q.timestamp_at.split(" ")[1]
          );
        }
      );

      setClosetCorrelation(closestCorrelationCandleStickData);
      setCandleStickData(mainTrendData);
      setSelectedCorrelation(0);
    } else {
      resetChart();
      setOpen(true);
    }
  };

  const generateRandomDataset = () => {
    const randomData = RANDOM_DATA_SET;
    const randomIndex = Math.floor(Math.random() * randomData.length);
    const splittedTimestamp = randomData[randomIndex].timestamp.split(" ");
    setRandomTicker(randomData[randomIndex].ticker);

    if (randomTicker === randomData[randomIndex].ticker) {
      generateRandomDataset();
    } else {
      setTicker({
        value: randomData[randomIndex].ticker,
        label: randomData[randomIndex].ticker,
      });
      setDate(dayjs(splittedTimestamp[0]));
      setTime(dayjs(randomData[randomIndex].timestamp));
      setTimeout(() => {
        if (buttonRef.current) {
          (buttonRef.current as HTMLButtonElement).dispatchEvent(
            new MouseEvent("click", { bubbles: true })
          );
        }
      }, 200);
    }
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
            ref={buttonRef}
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

      <Typography textAlign="center" mt="2rem">
        For demo purposes
      </Typography>
      <Box margin="auto" width="70%" mt="1rem">
        <Button
          onClick={generateRandomDataset}
          variant="outlined"
          color="success"
          fullWidth
          disabled={disabled}
        >
          Random Dataset
        </Button>
      </Box>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        autoHideDuration={3000}
        onClose={handleClick}
        open={open}
        message="No data found. Please enter other options."
      />
    </Box>
  );
};
