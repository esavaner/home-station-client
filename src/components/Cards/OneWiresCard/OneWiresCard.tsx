import { parseTemp } from "@esavaner/home-station";
import React from "react";

import * as St from "./OneWiresCard.styles";

export type OneWireProps = {
  list?: any[];
  loading?: boolean;
};

const OneWires = ({ list = [], loading }: OneWireProps) => {
  return (
    <St.WireCard>
      {loading && <span>loading...</span>}
      {list.map((sens) => (
        <React.Fragment key={sens.id}>
          <St.Description>{sens.description}</St.Description>
          <St.Temp>{parseTemp(sens.temp)}</St.Temp>
        </React.Fragment>
      ))}
    </St.WireCard>
  );
};

export default OneWires;
