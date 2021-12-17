import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';

import { Position } from 'src/app/domain/position.model';
import { PositionsTableService } from './services/positions-table.service';

import { ApplicationRoutesPath } from 'src/app/application-container/enums/application-routes-path.enum';

@Component({
  selector: 'app-positions',
  templateUrl: './positions.component.html',
  styleUrls: ['./positions.component.css']
})
export class PositionsComponent implements OnInit {
  positions$!: Observable<Position[]>;

  constructor(private positionsTableService: PositionsTableService,
              private router: Router) { }

  ngOnInit() {
    this.positions$ = this.positionsTableService.getItems$();
    this.positionsTableService.fetchPositions();
  }

  navigateTo(position: Position): void {
    this.router.navigate([`/${ApplicationRoutesPath.Positions}`, position.id]);
  }
}
