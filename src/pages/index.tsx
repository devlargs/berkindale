import {
  ControlPanel,
  CorrelationChart,
  Header,
  MainTrendChart,
  TrendNavigation,
} from "@/components";
import { useChartData } from "@/store";
import { Alert, Box } from "@mui/material";
import { Inter } from "next/font/google";
import { useMemo } from "react";

const inter = Inter({ subsets: ["latin"] });

const Home = () => {
  const mainTrendData = useChartData((e) => e.mainTrendData);
  const closestCorrelation = useChartData((e) => e.closestCorrelation);

  const showChart = useMemo(() => {
    return mainTrendData && closestCorrelation.length;
  }, [mainTrendData, closestCorrelation]);

  return (
    <main className={`${inter.className}`}>
      <Header />

      <Box display="flex">
        {showChart ? (
          <Box flex="1" border="1px solid white">
            <MainTrendChart />
            <TrendNavigation />
            <CorrelationChart />
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
