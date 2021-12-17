import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

import { Position } from 'src/app/domain/position.model';
import { ApiPositionService } from 'src/app/api/position/services/api-position.service';
import { ApiExchangeService } from 'src/app/api/exchange/services/api-exchange.service';
import { ApiAssetsService } from 'src/app/api/asset/services/api-assets.service';
import { ApiCandlesticksService } from 'src/app/api/exchanges/binance/candlestick/services/api-candlesticks.service';

@UntilDestroy()
@Component({
  selector: 'app-position-details',
  templateUrl: './position-details.component.html',
  styleUrls: ['./position-details.component.css']
})
export class PositionDetailsComponent implements OnInit {
  position?: Position;
  exchangeName?: string;
  baseAssetSymbol?: string;
  quoteAssetSymbol?: string;
  previousPrice?: number;
  currentPrice?: number;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private apiPositionService: ApiPositionService,
    private apiExchangeService: ApiExchangeService,
    private apiAssetsService: ApiAssetsService,
    private apiCandlesticksService: ApiCandlesticksService
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.apiPositionService.getPosition$(id)
      .subscribe(position => {
        // TODO: wrap in switchMap
        this.position = position;
        this.apiExchangeService.getExchange$(position.exchangeId)
          .subscribe(exchange => this.exchangeName = exchange.name);

        // TODO: wrap in forkJoin
        this.apiAssetsService.getAsset$(position.baseAssetId)
          .subscribe(asset => {
            this.baseAssetSymbol = asset.symbol;
            this.runPriceChecking();
          });
        this.apiAssetsService.getAsset$(position.quoteAssetId)
          .subscribe(asset => {
            this.quoteAssetSymbol = asset.symbol;
            this.runPriceChecking();
          });
      });
  }

  get isPriceRised(): boolean {
    return !!this.currentPrice && !!this.previousPrice && this.currentPrice > this.previousPrice;
  }

  private runPriceChecking() {
    if(this.baseAssetSymbol && this.quoteAssetSymbol) {
      this.apiCandlesticksService.getCandlesticks$(this.baseAssetSymbol + this.quoteAssetSymbol)
      .pipe(untilDestroyed(this))
      .subscribe(candlestick => {
        this.previousPrice = this.currentPrice;
        this.currentPrice = candlestick.k.c;
      });
    }
  }

  goBack() {
    this.location.back();
  }
}
