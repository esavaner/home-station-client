import { SensorRead } from "api/Status/StatusApi.model";
import Drawer from "components/Drawer";
import { useState } from "react";
import * as St from "./SensorsCard.styles";

export type SensorProps = {
  list?: SensorRead[];
  loading?: boolean;
};

const Sensors = ({ list, loading }: SensorProps) => {
  const [drawerVisible, setDrawerVisible] = useState(false);
  return (
    <>
      <Drawer
        $visible={drawerVisible}
        onClose={() => setDrawerVisible(false)}
      />
      <St.SensorsCardSt>
        {loading && <span>loading...</span>}
        {!loading && list?.length === 0 && (
          <button onClick={() => setDrawerVisible(true)}>+</button>
        )}
        {list && (
          <>
            {list.map((sensor) => (
              <span>{sensor.description}</span>
            ))}
          </>
        )}
      </St.SensorsCardSt>
    </>
  );
};

export default Sensors;
