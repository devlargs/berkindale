import { useOptions, useTickers } from "@/store";
import { Box, Autocomplete, TextField } from "@mui/material";

export const SymbolTicker = () => {
  const tickerList = useTickers((e) => e.tickerList);
  const [ticker, setTicker] = useOptions((e) => [e.ticker, e.setTicker]);

  return (
    <Box mt="1rem">
      <Autocomplete
        isOptionEqualToValue={(option, value) => option?.value === value?.value}
        disablePortal
        options={tickerList}
        value={ticker}
        onChange={(_, value) => setTicker(value)}
        renderInput={(params) => <TextField {...params} label="Ticker" />}
      />
    </Box>
  );
};
