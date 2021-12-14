import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';
import { switchMap } from 'rxjs';

import { Position } from 'src/app/domain/position.model';
import { PositionsService } from 'src/app/services/positions/positions.service';

@Component({
  selector: 'app-positions',
  templateUrl: './positions.component.html',
  styleUrls: ['./positions.component.css']
})
export class PositionsListComponent implements OnInit {
  positions$!: Observable<Position[]>;
  selectedPositionId: string = '';

  constructor(
    private positionsService: PositionsService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.positions$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.selectedPositionId = params.get('id')!;
        return this.positionsService.getPositions();
      })
    );
  }

  requestEdit(position: Position) {
    throw new Error('Method not implemented');
  }

  requestRemove(position: Position) {
    throw new Error('Method not implemented');
  }

}