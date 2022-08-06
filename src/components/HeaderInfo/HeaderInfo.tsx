import { Current, parseTemp, parseIcon } from "@esavaner/home-station";
import LocationDrawer from "components/LocationDrawer";
import * as St from "./HeaderInfo.styles";
import { MdOutlineLocationOn } from "react-icons/md";

import { useLocationQuery } from "hooks/Location";
import { useState } from "react";
import Row from "layout/Row";
import Col from "layout/Col";

export type HeaderInfoProps = {
  data?: Current;
  loading?: boolean;
};

const HeaderInfo = ({ data, loading }: HeaderInfoProps) => {
  const [locDrawerVisible, setLocDrawerVisible] = useState(false);
  const { data: location, isLoading } = useLocationQuery();
  return (
    <>
      <St.HeaderWrap>
        <St.LocationWrap onClick={() => setLocDrawerVisible(true)}>
          {isLoading && <>Loading...</>}
          {!isLoading && location ? location.name : "Ustaw miasto"}
          <MdOutlineLocationOn />
        </St.LocationWrap>
        <St.CurrentWrap>
          {data && (
            <Row style={{ gap: 0 }}>
              <St.Image src={parseIcon(data.weather)} alt="" />
              <Col style={{ gap: 0 }}>
                <St.Temp>{parseTemp(data.temp)}</St.Temp>
                <St.Description>{data.weather[0].main}</St.Description>
              </Col>
            </Row>
          )}
        </St.CurrentWrap>
      </St.HeaderWrap>

      <LocationDrawer
        location={location}
        visible={locDrawerVisible}
        onClose={() => setLocDrawerVisible(false)}
      />
    </>
  );
};

export default HeaderInfo;
