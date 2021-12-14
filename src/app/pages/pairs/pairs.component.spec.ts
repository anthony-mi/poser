import { of } from 'rxjs';
import { Shallow } from 'shallow-render';
import { AppModule } from 'src/app/app.module';
import { Asset } from 'src/app/domain/asset.model';
import { Exchange } from 'src/app/domain/exchange.model';
import { PairMarketData } from 'src/app/domain/pair-market-data.model';
import { PairsService } from 'src/app/services/pairs/pairs.service';
import { PairsListComponent } from './pairs.component';

describe('PairsListComponent', () => {
  let shallow: Shallow<PairsListComponent>;
  let testingPairs = [
    new PairMarketData(
        new Asset(1, "BTC"),
        new Asset(2, "USDT"),
        new Exchange(1, 'Binance'),
        49130.45,
        -2.74,
        49669.45,
        47334.87,
        568.85 * 1_000_000,
        927.882 * 1_000_000),
    new PairMarketData(
        new Asset(3, "ETH"),
        new Asset(2, "USDT"),
        new Exchange(1, 'Binance'),
        4165.45,
        -3.05,
        4319.45,
        4018.87,
        701.58 * 1_000_000,
        493_127.55 * 1_000_000)
];

  beforeEach(async () => {
    shallow =
      new Shallow(PairsListComponent, AppModule)
      .mock(PairsService, { pairs: of(testingPairs)});
  });

  // it('should call pairs', async() => {
  //   const { fixture, inject } = await shallow.render();
  //   const service = inject(PairsService);
  //   const spy = spyOnProperty(service, 'pairs', 'get');
  //   fixture.detectChanges();
  //   expect(spy).toHaveBeenCalled();
  // });

  it('should show expected count of pairs', async() => {
    const { find } = await shallow.render();
    expect(find('tr')).toHaveFound(testingPairs.length + 1); // + head row.
  });
});
