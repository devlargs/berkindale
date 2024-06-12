import { TICKERS } from "@/constants/tickers";
import { create } from "zustand";

export type TickerListProps = {
  value: string;
  label: string;
} | null;

type UseTickersProps = {
  tickerList: TickerListProps[];
};

export const useTickers = create<UseTickersProps>(() => ({
  tickerList: TICKERS.map((ticker) => ({
    value: ticker.symbol,
    label: ticker.symbol,
  })),
}));
