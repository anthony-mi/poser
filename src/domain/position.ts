import { Asset } from "./asset";
import { Exchange } from "./exchange";
import { PositionState } from "./position-state";

export class Position {
    constructor(
        public readonly id: string,
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