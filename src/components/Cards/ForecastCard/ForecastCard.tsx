import { parseIcon, parseTemp, Hourly, theme } from "@esavaner/home-station";
import * as St from "./ForecastCard.styles";
import { GiWaterDrop } from "react-icons/gi";

export type ForecastCardProps = {
  data?: Hourly[];
  loading?: boolean;
};

const ForecastCard = ({ data, loading }: ForecastCardProps) => {
  const getHour = (time: number) => {
    const date = new Date(time * 1000);
    return `${date.getHours()}:00`;
  };
  return (
    <St.ForecastCardSt>
      {loading && <span>loading...</span>}
      {data && (
        <>
          {data.map((hour) => (
            <St.HourPane key={hour.dt}>
              <St.Hour>{getHour(hour.dt)}</St.Hour>
              <St.Image src={parseIcon(hour.weather)} alt="" />
              <span>{parseTemp(hour.temp, 0)}</span>
              <St.Pop>
                <GiWaterDrop
                  style={{ color: theme.colors.blue, marginBottom: 1 }}
                />{" "}
                {(hour.pop * 100).toFixed()}%
              </St.Pop>
            </St.HourPane>
          ))}
        </>
      )}
    </St.ForecastCardSt>
  );
};

export default ForecastCard;
