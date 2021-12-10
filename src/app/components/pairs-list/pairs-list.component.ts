import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PairMarketData } from 'src/app/domain/pair-market-data';
import { PairsService } from 'src/app/services/pairs.service';

@Component({
  selector: 'app-pairs-list',
  templateUrl: './pairs-list.component.html',
  styleUrls: ['./pairs-list.component.css']
})
export class PairsListComponent implements OnInit {
  pairs$!: Observable<PairMarketData[]>;

  constructor(private readonly pairsService: PairsService) { }

  ngOnInit(): void {
    this.pairs$ = this.pairsService.pairs;
  }

}
