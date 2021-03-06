export namespace ApiGetCandlestick {
    export interface Candlestick {
        e: string; // Event type.
        E: number; // Event time.
        s: string; // Symbol.
        k: {
            t: number;    // Kline start time
            T: number;    // Kline close time.
            s: string;    // Symbol.
            i: string;    // Interval.
            f: number;    // First trade ID.
            L: number;    // Last trade ID.
            o: number;    // Open price.
            c: number;    // Close price.
            h: number;    // High price.
            l: number;    // Low price.
            v: number;    // Base asset volume.
            n: number;    // Number of trades.
            x: boolean;   // Is this kline closed?
            q: number;    // Quote asset volume.
            V: number;    // Taker buy base asset volume.
            Q: number;    // Taker buy quote asset volume.
            B: string;    // Ignore.
        }
    }
}