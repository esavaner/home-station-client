import ForecastCard from "components/Cards/ForecastCard";
import InfoCard from "components/Cards/InfoCard";

import { useOneCallQuery } from "hooks/OneCall";

import * as St from "./MainPage.styles";
import HeaderInfo from "components/HeaderInfo";
import AddCard from "components/Cards/AddCard";

const MainPage = () => {
  const { data: onecall, isLoading: onecallLoading } = useOneCallQuery();

  const currentLoading = {
    data: onecall?.current,
    loading: onecallLoading,
  };

  return (
    <St.Main>
      <HeaderInfo {...currentLoading} />
      <InfoCard {...currentLoading} />
      <ForecastCard data={onecall?.hourly} loading={onecallLoading} />
      {/* <Row style={{ justifyContent: "space-between", flex: 1, gap: "20px" }}>
        <OneWires list={status?.onewires} loading={statusLoading} />
        <Col>
          <CurrentCard {...currentLoading} />
          <SensorsCard list={status?.sensors} loading={statusLoading} /> 
        </Col>
      </Row> */}
      <AddCard />
    </St.Main>
  );
};

export default MainPage;
