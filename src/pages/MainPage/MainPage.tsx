import Card from "components/Card";
import Sensors from "components/Sensors/Sensors";
import { useStatuQuery } from "hooks/Status";
import Col from "layout/Col";
import Row from "layout/Row";
import { colors } from "styles/colors";

import * as St from "./MainPage.styles";

const MainPage = () => {
  const { data: status } = useStatuQuery();
  return (
    <St.Main>
      <Card $background={colors.card2} $width="100%">
        ABC
      </Card>
      <Row style={{ justifyContent: "space-between", flex: 1, gap: "20px" }}>
        <Sensors list={status?.sensors} />
        <Col>
          <Card $background={colors.card2}>ABC</Card>
          <Card $background={colors.card2}>ABC</Card>{" "}
        </Col>
      </Row>
      <Card $background={colors.card2} $width="100%">
        ABC
      </Card>
    </St.Main>
  );
};

export default MainPage;
