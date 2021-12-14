import { Asset } from "./asset.model";
import { Exchange } from "./exchange.model";
import { PositionState } from "./position-state.enum";

export class Position {
    constructor(
        public readonly id: number,
        public readonly exchange: Exchange,
        public readonly base: Asset,
        public readonly quote: Asset,
        public readonly openedAt: Date,
        public readonly openPrice: number,
        public state: PositionState,
        public closedBy?: Position,
        public closedAt?: Date,
        public closePrice?: number,
        public currentPrice?: number
    ) {

    }

    getCurrentProfitInQuote() {
        return this.currentPrice && this.currentPrice - this.openPrice;
    }

    getCurrentProfitInPercents() {
        return this.currentPrice && this.openPrice / (this.currentPrice - this.openPrice);
    }
}