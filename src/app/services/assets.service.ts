import { of } from "rxjs";
import { Asset } from "../domain/asset";

export class AssetsService {
    _assets = [
        new Asset(1, "BTC"),
        new Asset(2, "USDT"),
        new Asset(3, "ETH")
    ]
    constructor() { }

    getAsset(id: number) {
        return of(this._assets.find(a => a.id === id)!);
    }
}