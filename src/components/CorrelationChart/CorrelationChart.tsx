import { useChartData } from "@/store";
import { Box, Typography } from "@mui/material";
import { CandlestickData, Time } from "lightweight-charts";
import { Chart } from "../Chart";
import { GrayContainer } from "../GrayContainer";

export const CorrelationChart = () => {
  const closestCorrelation = useChartData((e) => e.closestCorrelation);
  const selectedCorrelation = useChartData((e) => e.selectedCorrelation);

  return (
    <>
      <Box
        p="1rem"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography>
          {closestCorrelation[selectedCorrelation].ticker}
        </Typography>
        <Box display="flex" gap="16px" alignItems="center">
          <Typography>
            {closestCorrelation[selectedCorrelation].from}
          </Typography>
          <Typography>to</Typography>
          <Typography>{closestCorrelation[selectedCorrelation].to}</Typography>
          <GrayContainer
            title={`Correlation = ${closestCorrelation[
              selectedCorrelation
            ].correlation.toFixed(4)}`}
          />
        </Box>
      </Box>
      <Chart
        data={
          closestCorrelation[selectedCorrelation]
            .candlestickData as CandlestickData<Time>[]
        }
        id="secondary-trend"
      />
    </>
  );
};
