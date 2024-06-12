import { X1_BEST, X2_BEST } from "@/constants";
import { createCandlestickData } from "./createCandleStickData";

export const getChartValues = (ticker: string, date: string, time: string) => {
  const x1 = X1_BEST.find(
    (q) => q.symbol === `${ticker}:CC` && q.timestamp_at.includes(date)
  );
  const x2 = X2_BEST.find((q) => q.symbol === `${ticker}:CC`);

  if (x1 && x2) {
    return createCandlestickData(x1);
  }

  return null;
};
