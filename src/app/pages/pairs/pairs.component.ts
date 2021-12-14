import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PairMarketData } from 'src/app/domain/pair-market-data.model';
import { PairsService } from 'src/app/services/pairs/pairs.service';

@Component({
  selector: 'app-pairs',
  templateUrl: './pairs.component.html',
  styleUrls: ['./pairs.component.css']
})
export class PairsListComponent implements OnInit {
  pairs$!: Observable<PairMarketData[]>;

  constructor(private readonly pairsService: PairsService) { }

  ngOnInit(): void {
    this.pairs$ = this.pairsService.pairs;
  }

}
