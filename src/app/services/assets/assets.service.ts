import { Injectable } from "@angular/core";
import { of } from "rxjs";
import { Asset } from "src/app/domain/asset.model";

@Injectable({
    providedIn: 'root',
   })
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