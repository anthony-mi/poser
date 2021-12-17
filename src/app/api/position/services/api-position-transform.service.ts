import { Injectable } from "@angular/core";

import { Position } from "src/app/domain/position.model";
import { ApiGetPositions } from "../interfaces/api-get-positions.interface";

@Injectable({
    providedIn: 'root'
})
export class ApiPositionTransformService {
    fromGetPositions(response: ApiGetPositions.Response): Position[] {
        return response.map(res => {
            return new Position({
                id: res.id,
                exchangeId: res.exchangeId,
                baseAssetId: res.baseAssetId,
                quoteAssetId: res.quoteAssetId,
                openedAt: res.openedAt,
                openPrice: res.openPrice,
                state: res.state,
                closedByOrderId: res.closedByOrderId,
                closedAt: res.closedAt,
                closePrice: res.closePrice
            });
        });
    }

    fromGetPosition(response: ApiGetPositions.Position): Position {
        return new Position({
            id: response.id,
            exchangeId: response.exchangeId,
            baseAssetId: response.baseAssetId,
            quoteAssetId: response.quoteAssetId,
            openedAt: response.openedAt,
            openPrice: response.openPrice,
            state: response.state,
            closedByOrderId: response.closedByOrderId,
            closedAt: response.closedAt,
            closePrice: response.closePrice
        });
    }
}