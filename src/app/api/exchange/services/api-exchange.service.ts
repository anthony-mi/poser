import { Injectable } from "@angular/core";
import { map, Observable, of } from "rxjs";
import { Exchange } from "src/app/domain/exchange.model";
import { ApiGetExchanges } from "../interfaces/api-get-exchanges.interface";
import { ApiExchangeTransformService } from "./api-exchange-transform.service";

const json = '[{"id":1,"name":"Binance"},{"id":2,"name":"Kuna"}]';
const getExchanges$ = of(JSON.parse(json) as ApiGetExchanges.Response);

@Injectable({
    providedIn: 'root'
})
export class ApiExchangeService {
    constructor(private transformService: ApiExchangeTransformService) {
    }

    getExchanges$(): Observable<Exchange[]> {
        return getExchanges$.pipe(
            map((res) => this.transformService.fromGetExchanges(res))
        );
    }

    getExchange$(exchangeId: number): Observable<Exchange> {
        return getExchanges$.pipe(
            map(res => {
                const exc = res.find(exc => exc.id === exchangeId)!;
                return this.transformService.fromGetExchange(exc);
            })
        )
    }
}