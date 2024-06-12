import { Inter } from "next/font/google";
import { ControlPanel, Header } from "@/components";
import { Chart } from "@/components/Chart";
import { Alert, Box, Button, Typography } from "@mui/material";
import { useChartData, useOptions } from "@/store";
import { CandlestickData, Time } from "lightweight-charts";

const inter = Inter({ subsets: ["latin"] });

const Home = () => {
  const ticker = useOptions((e) => e.ticker);
  const mainTrendData = useChartData((e) => e.mainTrendData);
  const closestCorrelation = useChartData((e) => e.closestCorrelation);
  const [selectedCorrelation, setSelectedCorrelation] = useChartData((e) => [
    e.selectedCorrelation,
    e.setSelectedCorrelation,
  ]);

  console.log(selectedCorrelation);

  return (
    <main className={`${inter.className}`}>
      <Header />

      <Box display="flex">
        {mainTrendData && closestCorrelation.length ? (
          <Box flex="1" border="1px solid white">
            <Box p="1rem" display="flex" justifyContent="space-between">
              <Typography>{ticker?.value}</Typography>
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
            <Box
              p="1rem"
              display="flex"
              justifyContent="space-between"
              border="1px solid white"
            >
              <Button
                variant="contained"
                onClick={() => setSelectedCorrelation(selectedCorrelation - 1)}
              >
                Previous Trend
              </Button>
              <Button
                variant="contained"
                onClick={() => setSelectedCorrelation(selectedCorrelation + 1)}
              >
                Next Trend
              </Button>
            </Box>
            <Box p="1rem" display="flex" justifyContent="space-between">
              <Typography>
                {closestCorrelation[selectedCorrelation].ticker}
              </Typography>
              <Box display="flex" gap="16px">
                <Typography>
                  {closestCorrelation[selectedCorrelation].from}
                </Typography>
                <Typography>to</Typography>
                <Typography>
                  {closestCorrelation[selectedCorrelation].to}
                </Typography>
                <Typography>
                  Correlation ={" "}
                  {closestCorrelation[selectedCorrelation].correlation}
                </Typography>
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
