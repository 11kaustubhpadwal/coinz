export interface GetAllCoinsResponse {
  status: string;
  data: Data;
}

export interface Data {
  stats: Stats;
  coins: Coin[];
}

export interface Coin {
  uuid: string;
  symbol: string;
  name: string;
  color: string;
  iconUrl: string;
  marketCap: string;
  price: string;
  btcPrice: string;
  listedAt: number;
  change: string;
  rank: number;
  sparkline: string[];
  coinrankingURL: string;
  the24HVolume: string;
}

export interface Stats {
  total: number;
  totalCoins: number;
  totalMarkets: number;
  totalExchanges: number;
  totalMarketCap: string;
  total24HVolume: string;
}

export interface GetCoinByIdResponse {
  status: string;
  data: CoinData;
}

export interface CoinData {
  coin: CoinDetails;
}

export interface CoinDetails {
  uuid: string;
  symbol: string;
  name: string;
  description: string;
  color: string;
  iconUrl: string;
  websiteUrl: string;
  links: Link[];
  supply: Supply;
  the24hVolume: string;
  marketCap: string;
  fullyDilutedMarketCap: string;
  price: string;
  btcPrice: string;
  priceAt: number;
  change: string;
  rank: number;
  numberOfMarkets: number;
  numberOfExchanges: number;
  sparkline: string[];
  allTimeHigh: AllTimeHigh;
  coinrankingUrl: string;
  lowVolume: boolean;
  listedAt: number;
  notices: Notice[];
  tags: string[];
}

export interface AllTimeHigh {
  price: string;
  timestamp: number;
}

export interface Link {
  name: string;
  url: string;
  type: string;
}

export interface Notice {
  type: string;
  value: string;
}

export interface Supply {
  confirmed: boolean;
  supplyAt: number;
  circulating: string;
  total: string;
  max: string;
}

export interface GetAllCoinsWithFiltersQueryParams {
  timePeriod: string;
  orderBy: string;
}
