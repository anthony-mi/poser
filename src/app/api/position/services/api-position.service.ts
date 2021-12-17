import { Injectable } from "@angular/core";
import { BehaviorSubject, map, Observable, of } from "rxjs";
import { PositionState } from "src/app/domain/position-state.enum";
import { Position } from "src/app/domain/position.model";

import { ApiGetPositions } from "../interfaces/api-get-positions.interface";
import { ApiPositionTransformService } from "./api-position-transform.service"

@Injectable({
    providedIn: 'root'
})
export class ApiPositionService {
    positions$: BehaviorSubject<ApiGetPositions.Response> =
        new BehaviorSubject<ApiGetPositions.Response>([
            {
                id: 1,
                exchangeId: 1,
                baseAssetId: 1,
                quoteAssetId: 2,
                openedAt: new Date(),
                openPrice: 50_000,
                state: PositionState.Open
            } as ApiGetPositions.Position,
            {
                id: 2,
                exchangeId: 2,
                baseAssetId: 3,
                quoteAssetId: 2,
                openedAt: new Date(2021, 10, 5, 17, 20, 30),
                openPrice: 15_000,
                state: PositionState.Open
            } as ApiGetPositions.Position,
            {
                id: 3,
                exchangeId: 1,
                baseAssetId: 3,
                quoteAssetId: 1,
                openedAt: new Date(2021, 8, 12, 3, 15, 0),
                openPrice: 0.97281,
                state: PositionState.Closed
            } as ApiGetPositions.Position]);

    constructor(private transformService: ApiPositionTransformService) {
    }

    getPositions$(): Observable<Position[]> {
        return this.positions$
                .pipe(
                    map((positions) => this.transformService.fromGetPositions(positions))
                );
    }

    getPosition$(positionId: number): Observable<Position> {
        return this.positions$.pipe(
            map(positions => {
                const position = positions.find(p => p.id === positionId)!;
                return this.transformService.fromGetPosition(position);
            })
        )
    }

}