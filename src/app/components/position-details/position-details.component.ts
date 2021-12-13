import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Position } from 'src/app/domain/position';
import { PositionsService } from 'src/app/services/positions.service';

@Component({
  selector: 'app-position-details',
  templateUrl: './position-details.component.html',
  styleUrls: ['./position-details.component.css']
})
export class PositionDetailsComponent implements OnInit {
  position?: Position;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private service: PositionsService
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.service.getPosition(id)
      .subscribe(position => this.position = position);
  }

  goBack() {
    this.location.back();
  }

}
