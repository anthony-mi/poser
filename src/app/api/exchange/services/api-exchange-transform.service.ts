import { Injectable } from "@angular/core";

import { Exchange } from "src/app/domain/exchange.model";
import { ApiGetExchanges } from "../interfaces/api-get-exchanges.interface";

@Injectable({
    providedIn: 'root'
})
export class ApiExchangeTransformService {
    fromGetExchanges(response: ApiGetExchanges.Response): Exchange[] {
        return response.map(res => new Exchange(res.id, res.name));
    }

    fromGetExchange(response: ApiGetExchanges.Exchange): Exchange {
        return new Exchange(response.id, response.name);
    }
}
