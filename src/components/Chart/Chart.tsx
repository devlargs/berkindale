import { Box } from "@mui/material";
import { createChart } from "lightweight-charts";
import { useEffect } from "react";
import { ControlPanel } from "../ControlPanel";

const red = "#FF4877";

export const Chart = () => {
  useEffect(() => {
    const chartOptions = {
      layout: {
        textColor: "gray",
        background: { type: "solid", color: "#121212" },
      },
      grid: {
        vertLines: {
          color: "#1d222a",
        },
        horzLines: {
          color: "#1d222a",
        },
      },
    };
    const chart = createChart(
      document.getElementById("container") as HTMLElement,
      chartOptions as any
    );
    const histogramSeries = chart.addHistogramSeries({ color: "#47f0aa" });

    const data = [
      { value: 1, time: 1642425322 },
      { value: 8, time: 1642511722 },
      { value: 10, time: 1642598122 },
      { value: 20, time: 1642684522 },
      { value: 3, time: 1642770922, color: red },
      { value: 43, time: 1642857322 },
      { value: 41, time: 1642943722, color: red },
      { value: 43, time: 1643030122 },
      { value: 56, time: 1643116522 },
      { value: 66, time: 1643202922, color: red },
    ];

    histogramSeries.setData(data as any);

    chart.timeScale().fitContent();
  }, []);

  return (
    <Box display="flex">
      <Box height="400px" id="container" width="100%" />
      <Box width="400px" p="1.5rem">
        <ControlPanel />
      </Box>
    </Box>
  );
};
