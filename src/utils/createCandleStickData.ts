import { MainTrendDataProps } from "@/store";
import dayjs from "dayjs";

const DATE_FORMAT = "MMMM DD, YYYY HH:mm:ss:SSS";

export const createCandlestickData = (dataObj: any): MainTrendDataProps => {
  const initialTime = new Date(dataObj.timestamp_at);
  const values = Object.keys(dataObj)
    .filter((key) => key.startsWith("x_"))
    .map((key) => dataObj[key]);

  const candlestickData = values.map((value, index) => {
    const open = values[index - 1] || value;
    const close = value;
    const high = Math.max(open, close);
    const low = Math.min(open, close);
    const time = new Date(initialTime);
    time.setMinutes(initialTime.getMinutes() + 10 * index);

    return {
      time: +time,
      open,
      high,
      low,
      close,
    };
  });

  return {
    from: dayjs(candlestickData[0].time).format(DATE_FORMAT),
    to: dayjs(candlestickData[candlestickData.length - 2].time).format(
      DATE_FORMAT
    ),
    candlestickData,
  };
};
