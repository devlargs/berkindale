import { useChartData } from "@/store";
import { Box, Typography } from "@mui/material";
import { CandlestickData, Time } from "lightweight-charts";
import { Chart } from "../Chart";

export const MainTrendChart = () => {
  const mainTrendData = useChartData((e) => e.mainTrendData);

  return (
    <>
      <Box p="1rem" display="flex" justifyContent="space-between">
        <Typography>{mainTrendData?.ticker}</Typography>
        <Box display="flex" gap="16px">
          <Typography>{mainTrendData?.from}</Typography>
          <Typography>to</Typography>
          <Typography>{mainTrendData?.to}</Typography>
        </Box>
      </Box>

      <Chart
        data={mainTrendData?.candlestickData as CandlestickData<Time>[]}
        id="main-trend"
      />
    </>
  );
};
