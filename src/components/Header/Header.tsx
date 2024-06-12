import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export const Header = () => {
  return (
    <Box
      display="flex"
      p="1.5rem"
      alignItems="center"
      justifyContent="space-between"
    >
      <Typography>Matchtrends</Typography>
      <Box p="0.5 rem">2 of 10</Box>
      <Button variant="outlined">Like Ticker +</Button>
      <Button variant="outlined">Top of Book Trend: Next 10 min. +</Button>
    </Box>
  );
};
