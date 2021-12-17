import { Observable } from "rxjs";
import { ApiGetAssets } from "../api/asset/interfaces/api-get-assets.interface";
import { ApiAssetsService } from "../api/asset/services/api-assets.service";
import { ApiExchangeService } from "../api/exchange/services/api-exchange.service";
import { Asset } from "./asset.model";
import { Exchange } from "./exchange.model";
import { PositionState } from "./position-state.enum";

export class Position {
    public readonly id: number;
    public readonly exchangeId: number;
    public readonly baseAssetId: number;
    public readonly quoteAssetId: number;
    public readonly openedAt!: Date;
    public readonly openPrice!: number;
    public state: PositionState;
    public closedByOrderId?: Position;
    public closedAt?: Date;
    public closePrice?: number;

    constructor(
        data: Record<string, any>
        // private apiAssetsService: ApiAssetsService,
        // private apiExchangeService: ApiExchangeService
    ) {
        this.id = data['id'];
        this.exchangeId = data['exchangeId'];
        this.baseAssetId = data['baseAssetId'];
        this.quoteAssetId = data['quoteAssetId'];
        this.openedAt = data['openedAt'];
        this.openPrice = data['openPrice'];
        this.state = data['state'];
        this.closedByOrderId = data['closedByOrderId'];
        this.closedAt = data['closedAt'];
        this.closePrice = data['closePrice'];
    }

    // getExchange$(): Observable<Exchange> {
    //     return this.apiExchangeService.getExchange$(this.exchangeId);
    // }

    // getBaseAsset$(): Observable<Asset> {
    //     return this.apiAssetsService.getAsset$(this.baseAssetId);
    // }

    // getQuoteAsset$(): Observable<Asset> {
    //     return this.apiAssetsService.getAsset$(this.quoteAssetId);
    // }

    // getCurrentProfitInQuote(): number | undefined {
    //     return this.currentPrice && this.currentPrice - this.openPrice;
    // }

    // getCurrentProfitInPercents(): number | undefined {
    //     return this.currentPrice && this.openPrice / (this.currentPrice - this.openPrice);
    // }
}