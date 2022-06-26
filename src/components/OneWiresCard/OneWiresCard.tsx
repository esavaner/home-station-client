import { OneWireRead } from "api/Status/StatusApi.model";
import React from "react";
import { parseTemp } from "utils/utils";

import * as St from "./OneWiresCard.styles";

export type OneWireProps = {
  list?: OneWireRead[];
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
