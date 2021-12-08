import { Component, OnInit } from '@angular/core';
import { Position } from 'src/app/domain/position';
import { PositionsService } from 'src/app/services/positions.service';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-positions-list',
  templateUrl: './positions-list.component.html',
  styleUrls: ['./positions-list.component.css']
})
export class PositionsListComponent implements OnInit {
  private _positions: Array<Position> = [];

  get positions() {
    return this._positions;
  }

  constructor(private positionsService: PositionsService) { }

  ngOnInit(): void {
    this.positionsService
      .getPositions()
      .subscribe(positions => this._positions = positions);
  }

  requestEdit(position: Position) {
    throw new Error('Method not implemented');
  }

  requestRemove(position: Position) {
    throw new Error('Method not implemented');
  }

}
