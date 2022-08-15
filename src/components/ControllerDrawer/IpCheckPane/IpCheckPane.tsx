import Spinner from "components/Spinner";
import Button from "components/Button";
import * as St from "./IpCheckPane.styles";
import { useGetCheckIp } from "hooks/Controller/useGetCheckIp";
import { useEffect } from "react";

type Props = {
  ip?: string;
  onCheck?: () => void;
};

const IpCheckPane = ({ ip, onCheck }: Props) => {
  const { isLoading, isError, isSuccess, refetch, isFetched } =
    useGetCheckIp(ip);

  useEffect(() => {
    ip && refetch();
  }, [ip, refetch]);

  return (
    <>
      <Button disabled={isLoading} onClick={onCheck}>
        Sprawdź
      </Button>
      <span>
        {!isFetched && !isLoading && <St.Unknown />}
        {isLoading && <Spinner />}
        {isError && <St.Fail />}
        {isSuccess && <St.Success />}
      </span>
    </>
  );
};

export default IpCheckPane;
