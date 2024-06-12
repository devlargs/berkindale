import { GrayContainer } from "@/components";
import { useChartData } from "@/store";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export const Header = () => {
  const selectedCorrelation = useChartData((e) => e.selectedCorrelation);
  const mainTrendData = useChartData((e) => e.mainTrendData);

  return (
    <Box
      display="flex"
      p="1.5rem"
      alignItems="center"
      justifyContent="space-between"
    >
      <Typography variant="h5" fontWeight="bold">
        Matched Trends
      </Typography>
      {mainTrendData ? (
        <GrayContainer title={`${selectedCorrelation + 2} of 10`} />
      ) : null}
      <GrayContainer title="Top of Book Trend: Next 10 min. +" />
    </Box>
  );
};
