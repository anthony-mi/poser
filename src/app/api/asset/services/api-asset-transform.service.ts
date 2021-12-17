import { Injectable } from "@angular/core";

import { Asset } from "src/app/domain/asset.model";
import { ApiGetAssets } from "../interfaces/api-get-assets.interface";

@Injectable({
    providedIn: 'root'
})
export class ApiAssetTransformService {
    fromGetAssets(response: ApiGetAssets.Response): Asset[] {
        return response.map(res => new Asset(res.id, res.name));
    }

    fromGetAsset(response: ApiGetAssets.Asset): Asset {
        return new Asset(response.id, response.name);
    }
}
