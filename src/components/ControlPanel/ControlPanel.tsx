import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { SymbolTicker } from "@/components";
import { DatePicker, TimePicker } from "@mui/x-date-pickers";

export const ControlPanel = () => {
  return (
    <Box>
      <Typography textAlign="center">Control Panel</Typography>
      <Box display="flex" flexDirection="column" gap="16px">
        <SymbolTicker />
        <DatePicker sx={{ width: "100%" }} label="Date" />
        <TimePicker sx={{ width: "100%" }} label="Time" />
      </Box>
    </Box>
  );
};
