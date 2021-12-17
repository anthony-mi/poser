import { Injectable } from "@angular/core";
import { map, Observable, of } from "rxjs";
import { Asset } from "src/app/domain/asset.model";
import { ApiGetAssets } from "../interfaces/api-get-assets.interface";
import { ApiAssetTransformService } from "./api-asset-transform.service";

const json = '[{"id":1,"name":"BTC"},{"id":2,"name":"USDT"},{"id":3,"name":"ETH"},{"id":4,"name":"DOGE"}]';
const getAssets$ = of(JSON.parse(json) as ApiGetAssets.Response);

@Injectable({
    providedIn: 'root'
})
export class ApiAssetsService {
    constructor(private transformService: ApiAssetTransformService) {
    }

    getAssets$(): Observable<Asset[]> {
        return getAssets$.pipe(
            map((res) => this.transformService.fromGetAssets(res))
        )
    }

    getAsset$(assetId: number): Observable<Asset> {
        return getAssets$.pipe(
            map(res => {
                const asset = res.find(a => a.id === assetId)!;
                return this.transformService.fromGetAsset(asset);
            })
        )
    }
}