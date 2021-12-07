import { Injectable } from '@angular/core';
import { Asset } from 'src/domain/asset';
import { Exchange } from 'src/domain/exchange';
import { Position } from 'src/domain/position';
import { PositionState } from 'src/domain/position-state';

@Injectable({
    providedIn: 'root'
})
export class PositionsService {
    _positions = [
        new Position(
            'c964f5bb-dd4f-46ec-9023-d5e5651a63ff',
            new Exchange(1, 'Binance'),
            new Asset(1, 'BTC'),
            new Asset(2, 'USDT'),
            new Date(),
            50000,
            PositionState.Open
        ),
        new Position(
            'f1d0c289-5c6b-43a6-92c0-9cdbe4a5fdf0',
            new Exchange(2, 'Kuna'),
            new Asset(3, 'ETH'),
            new Asset(2, 'USDT'),
            new Date(2021, 10, 5, 17, 20, 30),
            15000,
            PositionState.Open
        ),
        new Position(
            '6ce3c17c-5b82-42cb-977b-1f93af0ec2c1',
            new Exchange(1, 'Binance'),
            new Asset(3, 'ETH'),
            new Asset(1, 'BTC'),
            new Date(2021, 8, 12, 3, 15, 0),
            0.97281,
            PositionState.Closed
        ),
    ];

    get positions() {
        return this._positions;
    }
}