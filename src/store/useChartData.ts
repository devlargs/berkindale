import { create } from "zustand";

type ChartData = {
  time: number;
  open: number;
  high: number;
  low: number;
  close: number;
};

export type MainTrendDataProps = {
  candlestickData: ChartData[] | null;
  from: string;
  to: string;
};

type UseChartDataProps = {
  mainTrendData: MainTrendDataProps | null;
  setMainTrendData: (data: MainTrendDataProps | null) => void;
};

export const useChartData = create<UseChartDataProps>((set) => ({
  mainTrendData: null,
  setMainTrendData: (data) => set({ mainTrendData: data }),
}));
