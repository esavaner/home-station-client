import ForecastCard from "components/Cards/ForecastCard";
import InfoCard from "components/Cards/InfoCard";

import { useOneCallQuery } from "hooks/OneCall";

import * as St from "./MainPage.styles";
import HeaderInfo from "components/HeaderInfo";
import ControllerReadCard from "components/Cards/ControllerReadCard";
import { useReadQuery } from "hooks/Read/useReadQuery";
import ControllerDrawer from "components/ControllerDrawer";
import { useState } from "react";
import { Controller, ControllerRead, plus_sign } from "@esavaner/home-station";
import Icon from "components/Icon";

const MainPage = () => {
  const [conDrawerVisible, setConDrawerVisible] = useState(false);
  const [editedController, setEditedController] = useState<Controller>();
  const { data: onecall, isLoading: onecallLoading } = useOneCallQuery();
  const { data: controllers } = useReadQuery();

  const currentLoading = {
    data: onecall?.current,
    loading: onecallLoading,
  };

  const close = () => {
    setConDrawerVisible(false);
  };

  const open = () => {
    setEditedController(undefined);
    setConDrawerVisible(true);
  };

  const edit = (con: ControllerRead) => {
    setEditedController(con);
    setConDrawerVisible(true);
  };

  return (
    <St.Main>
      <HeaderInfo {...currentLoading} />
      <InfoCard {...currentLoading} />
      <ForecastCard data={onecall?.hourly} loading={onecallLoading} />
      {controllers?.map((con) => (
        <ControllerReadCard key={con.ip} controller={con} onEdit={edit} />
      ))}
      <St.AddCard>
        <Icon onClick={open} src={plus_sign} />
        Dodaj
      </St.AddCard>

      <ControllerDrawer
        visible={conDrawerVisible}
        onClose={close}
        edited={editedController}
      />
    </St.Main>
  );
};

export default MainPage;
