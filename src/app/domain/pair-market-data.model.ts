import { Asset } from "./asset.model";
import { Exchange } from "./exchange.model";

export class PairMarketData {
    constructor(
        public readonly base: Asset,
        public readonly quote: Asset,
        public readonly exchange: Exchange,
        public readonly price: number,
        public readonly _24hChange: number,
        public readonly _24hHigh: number,
        public readonly _24hLow: number,
        public readonly _24hVolume: number,
        public readonly marketCap: number
    ) { }
}
