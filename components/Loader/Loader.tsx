import { LoaderStyles } from "./stylesheet";
import { Image } from "react-native";
import loader from "../../assets/animated/loader.gif";

const Loader = () => {
  return <Image source={loader} style={LoaderStyles.main} />;
};

export default Loader;
