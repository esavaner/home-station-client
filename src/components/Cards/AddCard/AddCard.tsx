import { plus_sign } from "@esavaner/home-station";
import Icon from "components/Icon";
import * as St from "./AddCard.styles";
import ControllerDrawer from "components/ControllerDrawer";
import { useState } from "react";

const AddCard = () => {
  const [conDrawerVisible, setConDrawerVisible] = useState(false);
  return (
    <>
      <St.AddCard>
        <Icon onClick={() => setConDrawerVisible(true)} src={plus_sign} />
        Dodaj
      </St.AddCard>
      <ControllerDrawer
        visible={conDrawerVisible}
        onClose={() => setConDrawerVisible(false)}
      />
    </>
  );
};

export default AddCard;
