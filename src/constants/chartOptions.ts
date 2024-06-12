import {
  CandlestickStyleOptions,
  DeepPartial,
  SeriesOptionsCommon,
  TimeChartOptions,
} from "lightweight-charts";
import { COLORS } from "./colors";

export const CHART_OPTIONS: DeepPartial<TimeChartOptions> = {
  layout: {
    textColor: "gray",
    background: { color: COLORS.dark },
  },
  grid: {
    vertLines: {
      color: COLORS.gray,
    },
    horzLines: {
      color: COLORS.gray,
    },
  },
};

export const CANDLE_STICKS_SERIES_OPTIONS:
  | DeepPartial<CandlestickStyleOptions & SeriesOptionsCommon>
  | undefined = {
  upColor: COLORS.success,
  downColor: COLORS.danger,
  borderVisible: false,
  wickUpColor: COLORS.success,
  wickDownColor: COLORS.danger,
  priceFormat: {
    type: "price",
    minMove: 0.0000001,
  },
};
