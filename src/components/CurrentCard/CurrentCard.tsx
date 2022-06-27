import { Current } from "api/OneCall/OneCallApi.model";
import { parseIcon, parseTemp } from "utils/utils";
import * as St from "./CurrentCard.styles";

export type CurrentCardProps = {
  data?: Current;
  loading?: boolean;
};

const CurrentCard = ({ data, loading }: CurrentCardProps) => {
  return (
    <St.CurrentCard>
      {loading && <span>loading...</span>}
      {data && (
        <>
          <St.Image src={parseIcon(data.weather)} alt="" />
          <St.Temp>{parseTemp(data.temp)}</St.Temp>
          <St.Description>{data.weather[0].main}</St.Description>
        </>
      )}
    </St.CurrentCard>
  );
};

export default CurrentCard;
