import * as St from "./InfoCard.styles";
import { Current, humidity, umbrella, wind } from "@esavaner/home-station";
import Divider from "components/Divider";
import Icon from "components/Icon";

export type InfoCardProps = {
  data?: Current;
  loading?: boolean;
};

const InfoCard = ({ data }: InfoCardProps) => {
  return (
    <St.InfoCardSt>
      <St.InfoPane>
        <St.Description>Wiatr</St.Description>
        <Icon src={wind} />
        <St.Info>{data ? data.wind_speed : "-"} km/h</St.Info>
      </St.InfoPane>
      <Divider />
      <St.InfoPane>
        <St.Description>Opady</St.Description>
        <Icon src={umbrella} />
        <St.Info>{data ? data.rain?.["1h"] || 0 : "-"} mm</St.Info>
      </St.InfoPane>
      <Divider />
      <St.InfoPane>
        <St.Description>Wilgotność</St.Description>
        <Icon src={humidity} />
        <St.Info>{data ? data.humidity : "-"}%</St.Info>
      </St.InfoPane>
    </St.InfoCardSt>
  );
};

export default InfoCard;
