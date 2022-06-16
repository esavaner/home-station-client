export type WindowRead = {
  pin: number;
  isOpen: boolean;
};

export type SensorRead = {
  id: string;
  temp: string;
};

export type StatusModel = {
  time: string;
  sensors: SensorRead[];
  windows: WindowRead[];
};
