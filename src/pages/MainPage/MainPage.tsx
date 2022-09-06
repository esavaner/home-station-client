import ForecastCard from "components/Cards/ForecastCard";
import InfoCard from "components/Cards/InfoCard";

import { useOneCallQuery } from "hooks/OneCall";

import * as St from "./MainPage.styles";
import HeaderInfo from "components/HeaderInfo";
import ControllerReadCard from "components/Cards/ControllerReadCard";
import { useReadQuery } from "hooks/Read/useReadQuery";
import ControllerDrawer from "components/ControllerDrawer";
import { useCallback, useState } from "react";
import { parseDate, plus_sign } from "@esavaner/home-station";
import Icon from "components/Icon";

const MainPage = () => {
  const [conDrawerVisible, setConDrawerVisible] = useState(false);
  const [editedIp, setEditedIp] = useState<string>();
  const { data: onecall, isLoading: onecallLoading } = useOneCallQuery();
  const { data: controllers, refetch } = useReadQuery();

  const currentLoading = {
    data: onecall?.current,
    loading: onecallLoading,
  };

  const close = useCallback(() => {
    setConDrawerVisible(false);
    refetch();
  }, [refetch]);

  const open = () => {
    setEditedIp(undefined);
    setConDrawerVisible(true);
  };

  const edit = (ip: string) => {
    setEditedIp(ip);
    setConDrawerVisible(true);
  };

  return (
    <St.Main>
      <St.Content>
        <HeaderInfo {...currentLoading} />
        <InfoCard {...currentLoading} />
        <ForecastCard data={onecall?.hourly} loading={onecallLoading} />
        <span>Ostatnia aktualizacja: {parseDate(controllers?.[0]?.time)}</span>
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
          onOk={close}
          con_ip={editedIp}
        />
      </St.Content>
    </St.Main>
  );
};

export default MainPage;
