import { Injectable } from "@angular/core";
import { of } from "rxjs";
import { Asset } from "src/app/domain/asset.model";
import { Exchange } from "src/app/domain/exchange.model";
import { PairMarketData } from "src/app/domain/pair-market-data.model";

@Injectable({
    providedIn: 'root'
})
export class PairsService {
    _pairs: Array<PairMarketData> = [];

    constructor() {
        this.initPairs();
    }

    private initPairs() {
        this._pairs = [
            new PairMarketData(
                new Asset(1, "BTC"),
                new Asset(2, "USDT"),
                new Exchange(1, 'Binance'),
                49130.45,
                -2.74,
                49669.45,
                47334.87,
                568.85 * 1_000_000,
                927.882 * 1_000_000),
            new PairMarketData(
                new Asset(3, "ETH"),
                new Asset(2, "USDT"),
                new Exchange(2, 'Kuna'),
                4165.45,
                -3.05,
                4319.45,
                4018.87,
                701.58 * 1_000_000,
                493_127.55 * 1_000_000),
            new PairMarketData(
                new Asset(4, "DOGE"),
                new Asset(2, "USDT"),
                new Exchange(1, 'Binance'),
                0.20,
                26.70,
                0.2203,
                0.1516,
                120.87 * 1_000_000,
                27_365.81 * 1_000_000)
        ];
    }

    get pairs() {
        return of(this._pairs);
    }
}

