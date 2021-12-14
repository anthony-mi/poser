import { Injectable } from '@angular/core';
import { Asset } from 'src/app/domain/asset.model';
import { Exchange } from 'src/app/domain/exchange.model';
import { Position } from 'src/app/domain/position.model';
import { PositionState } from 'src/app/domain/position-state.enum';
import { of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class PositionsService {
    _positions = [
        new Position(
            1,
            new Exchange(1, 'Binance'),
            new Asset(1, 'BTC'),
            new Asset(2, 'USDT'),
            new Date(),
            50000,
            PositionState.Open
        ),
        new Position(
            2,
            new Exchange(2, 'Kuna'),
            new Asset(3, 'ETH'),
            new Asset(2, 'USDT'),
            new Date(2021, 10, 5, 17, 20, 30),
            15000,
            PositionState.Open
        ),
        new Position(
            3,
            new Exchange(1, 'Binance'),
            new Asset(3, 'ETH'),
            new Asset(1, 'BTC'),
            new Date(2021, 8, 12, 3, 15, 0),
            0.97281,
            PositionState.Closed
        ),
    ];

    getPositions() {
        return of(this._positions);
    }

    getPosition(id: number) {
        const position = this._positions.find(p => p.id === id)!;
        return of(position);
    }
}