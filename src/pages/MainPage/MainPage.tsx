import CurrentCard from "components/CurrentCard";
import ForecastCard from "components/ForecastCard";
import InfoCard from "components/InfoCard";
import OneWires from "components/OneWiresCard";
import SensorsCard from "components/SensorsCard";
import { useOneCallQuery } from "hooks/OneCall";

import { useStatuQuery } from "hooks/Status";
import Col from "layout/Col";
import Row from "layout/Row";

import * as St from "./MainPage.styles";

const MainPage = () => {
  const { data: status, isLoading: statusLoading } = useStatuQuery();
  const { data: onecall, isLoading: onecallLoading } = useOneCallQuery();

  return (
    <St.Main>
      <InfoCard data={onecall?.current} loading={onecallLoading} />
      <Row style={{ justifyContent: "space-between", flex: 1, gap: "20px" }}>
        <OneWires list={status?.onewires} loading={statusLoading} />
        <Col>
          <CurrentCard data={onecall?.current} loading={onecallLoading} />
          <SensorsCard list={status?.sensors} loading={statusLoading} />
        </Col>
      </Row>
      <ForecastCard data={onecall?.hourly} loading={onecallLoading} />
    </St.Main>
  );
};

export default MainPage;
