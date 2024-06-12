import "@/styles/globals.css";
import darkTheme from "@/styles/theme";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import type { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps) => (
  <LocalizationProvider dateAdapter={AdapterDayjs}>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  </LocalizationProvider>
);

export default App;
