import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { webSocket } from 'rxjs/webSocket';
import { ApiGetCandlestick } from "../interfaces/api-get-candlestick.interface";

@Injectable({
    providedIn: 'root'
})
export class ApiCandlesticksService {
    constructor() {
    }

    /// XXX: track each connection and change return type.
    getCandlesticks$(symbol: string): Observable<ApiGetCandlestick.Candlestick> {
        const interval = '1m';
        const wsSubject = webSocket({
            url: `wss://stream.binance.com:9443/ws/${symbol.toLowerCase()}@kline_${interval}`,
            deserializer: (event) => JSON.parse(event.data)
        });
        return wsSubject.asObservable();
    }
}