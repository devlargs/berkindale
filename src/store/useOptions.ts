import dayjs, { Dayjs } from "dayjs";
import { create } from "zustand";
import { TickerListProps } from "@/store";

type DateTime = Dayjs | null;

type UseOptionsProps = {
  ticker: TickerListProps;
  setTicker: (ticker: TickerListProps) => void;
  date: DateTime;
  setDate: (date: DateTime) => void;
  time: DateTime;
  setTime: (time: DateTime) => void;
};

export const useOptions = create<UseOptionsProps>((set) => ({
  ticker: {
    value: "LTH",
    label: "LTH",
  },
  setTicker: (ticker: TickerListProps) => set({ ticker }),
  date: dayjs("2023-01-26"),
  setDate: (date: DateTime) => set({ date }),
  time: dayjs("2023-01-26 14:40:00"),
  setTime: (time: DateTime) => set({ time }),
}));
