import { Hourly } from "api/OneCall/OneCallApi.model";
import { parseIcon, parseTemp } from "utils/utils";
import * as St from "./ForecastCard.styles";

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
              <St.Humidity>{hour.humidity}%</St.Humidity>
            </St.HourPane>
          ))}
        </>
      )}
    </St.ForecastCardSt>
  );
};

export default ForecastCard;
