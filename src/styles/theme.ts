import { COLORS } from "@/constants";
import { createTheme } from "@mui/material";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: "gray" }, // Custom variant name
          style: {
            background: COLORS.lightgray,

            // textTransform: "none",
            // backgroundColor: "#673ab7",
            // color: "#fff",
            "&:hover": {
              backgroundColor: COLORS.gray,
            },
            // borderRadius: 12,
            // padding: "6px 12px",
            // fontSize: "14px",
          },
        },
      ],
    },
  },
});

export default darkTheme;
