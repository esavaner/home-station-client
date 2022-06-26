export const parseTemp = (temp: number) =>
  `${temp ? temp.toFixed(1) : "--"} °C`;
