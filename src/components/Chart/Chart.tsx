import {
  CANDLE_STICKS_SERIES_OPTIONS,
  CHART_OPTIONS,
} from "@/constants/chartOptions";
import { Box } from "@mui/material";
import dayjs from "dayjs";
import {
  CandlestickData,
  IChartApi,
  ISeriesApi,
  Time,
  createChart,
} from "lightweight-charts";
import { FC, useEffect, useRef } from "react";

type ChartProps = {
  id: string;
  data: CandlestickData<Time>[];
};

export const Chart: FC<ChartProps> = ({ id, data }) => {
  const chartRef = useRef<IChartApi | null>(null);
  const seriesRef = useRef<ISeriesApi<"Candlestick"> | null>(null);

  useEffect(() => {
    const chartElement = document.getElementById(id) as HTMLElement;

    chartRef.current = createChart(chartElement, {
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

    seriesRef.current = chartRef.current.addCandlestickSeries({
      ...CANDLE_STICKS_SERIES_OPTIONS,
    });

    chartRef.current.timeScale().fitContent();

    const handleResize = () => {
      if (chartRef.current) {
        chartRef.current.resize(
          chartElement.clientWidth,
          chartElement.clientHeight
        );
      }
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      chartRef.current?.remove();
    };
  }, [id]);

  useEffect(() => {
    if (seriesRef.current) {
      seriesRef.current.setData(data);
      chartRef.current?.timeScale().fitContent();
    }
  }, [data]);

  return <Box height="400px" id={id} width="100%" />;
};
