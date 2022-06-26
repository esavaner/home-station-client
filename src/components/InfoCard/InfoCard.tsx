import { Current } from "api/OneCall/OneCallApi.model";
import * as St from "./InfoCard.styles";

export type InfoCardProps = {
  data?: Current;
  loading?: boolean;
};

const InfoCard = ({ data, loading }: InfoCardProps) => {
  return (
    <St.InfoCardSt>
      {loading && <span>loading...</span>}
      {data && (
        <>
          <St.InfoPane>
            <St.Main>{data.wind_speed} km/h</St.Main>
            <St.Description>Wiatr</St.Description>
          </St.InfoPane>
          <St.Divider />
          <St.InfoPane>
            <St.Main>{data.rain || 0} mm</St.Main>
            <St.Description>Opady</St.Description>
          </St.InfoPane>
          <St.Divider />
          <St.InfoPane>
            <St.Main>{data.humidity}%</St.Main>
            <St.Description>Wilgotność</St.Description>
          </St.InfoPane>
        </>
      )}
    </St.InfoCardSt>
  );
};

export default InfoCard;
