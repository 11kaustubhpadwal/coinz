import Typography from "../../components/Typography";
import { CoinDetailsProps } from "./types";
import LayoutWrapper from "../../components/LayoutWrapper";

const CoinDetails = ({ route }: CoinDetailsProps) => {
  return (
    <LayoutWrapper>
      <Typography variant={"h4"}>{route.params.coinId}</Typography>
    </LayoutWrapper>
  );
};

export default CoinDetails;
