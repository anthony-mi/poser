export namespace ApiGetExchanges {
    export interface Response extends Array<Exchange> {
    }

    export interface Exchange {
        id: number,
        name: string
    }
}