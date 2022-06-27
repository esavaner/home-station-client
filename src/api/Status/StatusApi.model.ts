export type Sensor = {
  pin: number;
  description: string;
  type: "window" | "rain";
};

export type SensorRead = Sensor & {
  isOn: boolean;
};

export type OneWire = {
  id: string;
  description: string;
};

export type OneWireRead = OneWire & {
  temp: number;
};

export type StatusModel = {
  time: string;
  sensors: SensorRead[];
  onewires: OneWireRead[];
};
