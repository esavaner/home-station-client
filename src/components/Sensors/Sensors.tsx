import { SensorRead } from "api/Status/StatusApi.model";
import Card from "components/Card";

export type SensorProps = {
  list?: SensorRead[];
};

const Sensors = ({ list }: SensorProps) => {
  if (!list) {
    return <span>loading...</span>;
  }
  return (
    <Card>
      {list.length > 0 && (
        <>
          <h1>{list[0].temp.toFixed(2)}°C</h1>
          <h3>{list[0].description}</h3>
        </>
      )}
      {list.length > 1 && (
        <>
          {list.slice(1).map((sens) => (
            <>
              <h2>{sens.temp.toFixed(2)}°C</h2>
              <h4>{sens.description}</h4>
            </>
          ))}
        </>
      )}
    </Card>
  );
};

export default Sensors;
