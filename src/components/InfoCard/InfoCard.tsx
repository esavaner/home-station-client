import { Current } from "api/OneCall/OneCallApi.model";
import * as St from "./InfoCard.styles";

import { colors } from "styles/colors";
import { FiWind } from "react-icons/fi";
import { RiUmbrellaFill } from "react-icons/ri";
import { GiWaterDrop } from "react-icons/gi";

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
            <FiWind style={{ color: colors.violet }} />
            <St.Main>{data.wind_speed} km/h</St.Main>
            <St.Description>Wiatr</St.Description>
          </St.InfoPane>
          <St.Divider />
          <St.InfoPane>
            <RiUmbrellaFill style={{ color: colors.green }} />
            <St.Main>{data.rain?.["1h"] || 0} mm</St.Main>
            <St.Description>Opady</St.Description>
          </St.InfoPane>
          <St.Divider />
          <St.InfoPane>
            <GiWaterDrop style={{ color: colors.blue }} />
            <St.Main>{data.humidity}%</St.Main>
            <St.Description>Wilgotność</St.Description>
          </St.InfoPane>
        </>
      )}
    </St.InfoCardSt>
  );
};

export default InfoCard;
