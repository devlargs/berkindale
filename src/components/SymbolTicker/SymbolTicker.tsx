import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
  Autocomplete,
  TextField,
} from "@mui/material";
import Papa from "papaparse";
import { useEffect, useState } from "react";

type TickerProps = {
  value: string;
  label: string;
};

export const SymbolTicker = () => {
  const [ticker, setTicker] = useState<TickerProps[]>([]);

  useEffect(() => {
    // Assuming this is an api call to get the list of tickers
    Papa.parse<{ symbol: string }>("/spreadsheets/symbols.csv", {
      download: true,
      header: true,
      complete: function (results) {
        setTicker(
          results.data.map((q) => ({
            label: q.symbol,
            value: q.symbol,
          }))
        );
      },
    });
  }, []);

  return (
    <Box mt="1rem">
      <Autocomplete
        disablePortal
        options={ticker}
        onChange={(_, v) => console.log(v)}
        renderInput={(params) => <TextField {...params} label="Ticker" />}
      />
    </Box>
  );
};
