import {
  CandlestickStyleOptions,
  DeepPartial,
  SeriesOptionsCommon,
  TimeChartOptions,
} from "lightweight-charts";

export const COLORS = {
  danger: "#FF4877",
  success: "#47f0aa",
  dark: "#121212",
  gray: "#1d222a",
};

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
