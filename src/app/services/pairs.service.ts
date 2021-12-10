import { Injectable } from "@angular/core";
import { of } from "rxjs";
import { Asset } from "../domain/asset";
import { Exchange } from "../domain/exchange";
import { PairMarketData } from "../domain/pair-market-data";

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
                new Exchange(1, 'Binance'),
                4165.45,
                -3.05,
                4319.45,
                4018.87,
                701.58 * 1_000_000,
                493_127.55 * 1_000_000)
        ];
    }

    get pairs() {
        return of(this._pairs);
    }
}

