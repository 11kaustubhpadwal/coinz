import { FlatList, View, Image } from "react-native";
import LayoutWrapper from "../../components/LayoutWrapper";
import Button from "../../components/Button";
import Typography from "../../components/Typography";
import { HomeStyles } from "./stylesheet";
import CoinCard from "./CoinCard";
import { useGetAllCoinsQuery } from "../../react-query/queries/coins";
import InvestmentIcon from "../../assets/icons/InvestMentIcon";
import loader from "../../assets/animated/loader.gif";

const Home = () => {
  const { data, isLoading } = useGetAllCoinsQuery();

  return (
    <LayoutWrapper>
      <View style={HomeStyles.wrapper}>
        <Typography variant={"sub1"} color={"white"}>
          Welcome,
        </Typography>
        <View style={HomeStyles.divider1} />
        <Typography variant={"h4"} color={"white"}>
          Make you first Investment today
        </Typography>
        <View style={HomeStyles.divider2} />
        <Button
          variant={"outlined"}
          text={"Invest Today"}
          style={HomeStyles.button}
        />
        <View style={HomeStyles.investmentIcon}>
          <InvestmentIcon />
        </View>
      </View>
      <Typography variant={"h3"}>Trending Coins</Typography>
      {isLoading && <Image source={loader} style={HomeStyles.loader} />}
      {data && data.data.stats.total > 0 && (
        <View style={HomeStyles.listContainer}>
          <FlatList
            data={data.data.coins}
            renderItem={({ item }) => <CoinCard key={item.uuid} coin={item} />}
          />
        </View>
      )}
    </LayoutWrapper>
  );
};

export default Home;
