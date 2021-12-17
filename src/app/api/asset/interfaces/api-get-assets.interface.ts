export namespace ApiGetAssets {
    export interface Response extends Array<Asset> {
    }

    export interface Asset {
        id: number;
        name: string;
    }
}