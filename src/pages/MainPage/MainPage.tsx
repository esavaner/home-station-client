import { instance } from "api/api.config";
import Card from "components/Card";
import CurrentCard from "components/CurrentCard";
import InfoCard from "components/InfoCard";
import OneWires from "components/OneWiresCard";
import Sensors from "components/SensorsCard";
import { useOneCallQuery } from "hooks/OneCall";

import { useStatuQuery } from "hooks/Status";
import Col from "layout/Col";
import Row from "layout/Row";
import { colors } from "styles/colors";

import * as St from "./MainPage.styles";

const MainPage = () => {
  const { data: status, isLoading: statusLoading } = useStatuQuery();
  const { data: onecall, isLoading: onecallLoading } = useOneCallQuery();

  const call = () => {
    instance.get("/onecall").then(({ data }) => console.log(data));
  };
  return (
    <St.Main>
      <InfoCard data={onecall?.current} loading={onecallLoading} />

      <Row style={{ justifyContent: "space-between", flex: 1, gap: "20px" }}>
        {/* <Sensors list={status?.sensors} /> */}
        <OneWires list={status?.onewires} loading={statusLoading} />
        <Col>
          <CurrentCard data={onecall?.current} loading={onecallLoading} />
          <Card $background={colors.card2}>
            <button onClick={call}> call</button>
          </Card>{" "}
        </Col>
      </Row>
      <Card $background={colors.card2} $width="100%">
        ABC
      </Card>
    </St.Main>
  );
};

export default MainPage;
