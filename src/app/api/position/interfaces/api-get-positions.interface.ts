export namespace ApiGetPositions {
    export interface Response extends Array<Position> {
    }

    export interface Position {
        id: number,
        exchangeId: number,
        baseAssetId: number,
        quoteAssetId: number,
        openedAt: Date,
        openPrice: number,
        state: number,
        closedByOrderId?: number,
        closedAt?: Date,
        closePrice?: number
    }
}
