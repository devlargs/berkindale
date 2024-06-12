import {
  ControlPanel,
  GrayContainer,
  Header,
  TrendNavigation,
} from "@/components";
import { Chart } from "@/components/Chart";
import { useChartData } from "@/store";
import { Alert, Box, Typography } from "@mui/material";
import { CandlestickData, Time } from "lightweight-charts";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const Home = () => {
  const mainTrendData = useChartData((e) => e.mainTrendData);
  const closestCorrelation = useChartData((e) => e.closestCorrelation);
  const [selectedCorrelation, setSelectedCorrelation] = useChartData((e) => [
    e.selectedCorrelation,
    e.setSelectedCorrelation,
  ]);

  return (
    <main className={`${inter.className}`}>
      <Header />

      <Box display="flex">
        {mainTrendData && closestCorrelation.length ? (
          <Box flex="1" border="1px solid white">
            <Box p="1rem" display="flex" justifyContent="space-between">
              <Typography>{mainTrendData.ticker}</Typography>
              <Box display="flex" gap="16px">
                <Typography>{mainTrendData.from}</Typography>
                <Typography>to</Typography>
                <Typography>{mainTrendData.to}</Typography>
              </Box>
            </Box>

            <Chart
              data={mainTrendData.candlestickData as CandlestickData<Time>[]}
              id="main-trend"
            />
            <TrendNavigation />

            <Box p="1rem" display="flex" justifyContent="space-between">
              <Typography>
                {closestCorrelation[selectedCorrelation].ticker}
              </Typography>
              <Box display="flex" gap="16px" alignItems="center">
                <Typography>
                  {closestCorrelation[selectedCorrelation].from}
                </Typography>
                <Typography>to</Typography>
                <Typography>
                  {closestCorrelation[selectedCorrelation].to}
                </Typography>
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
          </Box>
        ) : (
          <Box flex="1" p="1rem">
            <Alert variant="filled" severity="info">
              No data found. Please load a new dataset.
            </Alert>
          </Box>
        )}
        <Box minWidth="400px" p="1.5rem">
          <ControlPanel />
        </Box>
      </Box>
    </main>
  );
};

export default Home;
