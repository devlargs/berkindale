import { useChartData } from "@/store";
import { Box, Button } from "@mui/material";

export const TrendNavigation = () => {
  const [selectedCorrelation, setSelectedCorrelation] = useChartData((e) => [
    e.selectedCorrelation,
    e.setSelectedCorrelation,
  ]);

  return (
    <Box
      p="1rem"
      display="flex"
      justifyContent="space-between"
      border="1px solid white"
    >
      <Button
        variant="gray"
        disabled={selectedCorrelation === 0}
        onClick={() => setSelectedCorrelation(selectedCorrelation - 1)}
      >
        Previous Trend
      </Button>
      <Button
        variant="gray"
        disabled={selectedCorrelation === 8}
        onClick={() => setSelectedCorrelation(selectedCorrelation + 1)}
      >
        Next Trend
      </Button>
    </Box>
  );
};
