export type WindowRead = {
  pin: number;
  isOpen: boolean;
  description: string;
};

export type SensorRead = {
  id: string;
  temp: number;
  description: string;
};

export type StatusModel = {
  time: string;
  sensors: SensorRead[];
  windows: WindowRead[];
};
