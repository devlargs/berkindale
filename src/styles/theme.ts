import { createTheme } from "@mui/material";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
  // components: {
  // MuiOutlinedInput: {
  //   styleOverrides: {
  //     root: {
  //       "&:hover .MuiOutlinedInput-notchedOutline": {
  //         borderColor: "gray",
  //       },
  //     },
  //   },
  // },
  // MuiInputLabel: {
  //   styleOverrides: {
  //     root: {
  //       color: "gray",
  //       "&.Mui-focused": {
  //         color: "gray",
  //       },
  //     },
  //   },
  // },
  // MuiSelect: {
  //   styleOverrides: {
  //     select: {
  //       color: "white",
  //       "&:hover": {
  //         borderColor: "red",
  //       },
  //     },
  //     root: {
  //       "& .MuiOutlinedInput-notchedOutline": {
  //         borderColor: "gray",
  //       },
  //       "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
  //         borderColor: "gray",
  //       },
  //     },
  //   },
  // },
  // },
});

export default darkTheme;
