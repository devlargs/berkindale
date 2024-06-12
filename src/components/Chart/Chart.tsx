import {
  CANDLE_STICKS_SERIES_OPTIONS,
  CHART_OPTIONS,
} from "@/constants/chartOptions";
import { Box } from "@mui/material";
import dayjs from "dayjs";
import { CandlestickData, Time, createChart } from "lightweight-charts";
import { FC, useEffect } from "react";

type ChartProps = {
  id: string;
  data: CandlestickData<Time>[];
};

export const Chart: FC<ChartProps> = ({ id, data }) => {
  useEffect(() => {
    const chart = createChart(document.getElementById(id) as HTMLElement, {
      ...CHART_OPTIONS,
      localization: {
        timeFormatter: (time: Date) => dayjs(time).format("HH:mm:ss"),
      },
      timeScale: {
        timeVisible: true,
        secondsVisible: true,
        tickMarkFormatter: (time: Date) => dayjs(time).format("HH:mm:ss"),
      },
    });

    const candlestickSeries = chart.addCandlestickSeries({
      ...CANDLE_STICKS_SERIES_OPTIONS,
    });

    candlestickSeries.setData(data);

    chart.timeScale().fitContent();
    window.addEventListener("resize", () => {
      chart.resize(
        document.getElementById(id)?.clientWidth as number,
        document.getElementById(id)?.clientHeight as number
      );
    });
  }, []);

  return <Box height="400px" id={id} width="100%" />;
};
