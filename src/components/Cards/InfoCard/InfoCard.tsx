import * as St from "./InfoCard.styles";

import { FiWind } from "react-icons/fi";
import { RiUmbrellaFill } from "react-icons/ri";
import { GiWaterDrop } from "react-icons/gi";
import { Current, colors } from "@esavaner/home-station";
import Divider from "components/Divider";

export type InfoCardProps = {
  data?: Current;
  loading?: boolean;
};

const InfoCard = ({ data, loading }: InfoCardProps) => {
  return (
    <St.InfoCardSt $background={colors.card5}>
      {loading && <span>loading...</span>}
      {data && (
        <>
          <St.InfoPane>
            <St.Description>Wiatr</St.Description>
            <FiWind style={{ color: colors.violet }} />
            <St.Main>{data.wind_speed} km/h</St.Main>
          </St.InfoPane>
          <Divider />
          <St.InfoPane>
            <St.Description>Opady</St.Description>
            <RiUmbrellaFill style={{ color: colors.green }} />
            <St.Main>{data.rain?.["1h"] || 0} mm</St.Main>
          </St.InfoPane>
          <Divider />
          <St.InfoPane>
            <St.Description>Wilgotność</St.Description>
            <GiWaterDrop style={{ color: colors.blue }} />
            <St.Main>{data.humidity}%</St.Main>
          </St.InfoPane>
        </>
      )}
    </St.InfoCardSt>
  );
};

export default InfoCard;
