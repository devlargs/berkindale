import { COLORS } from "@/constants";
import { Box, Typography } from "@mui/material";
import { FC } from "react";

export const GrayContainer: FC<{ title: string }> = ({ title }) => {
  return (
    <Box bgcolor={COLORS.lightgray} py="0.5rem" px="1rem" borderRadius="0.5rem">
      <Typography>{title}</Typography>
    </Box>
  );
};
