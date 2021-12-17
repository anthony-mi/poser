import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Shallow } from 'shallow-render';

import { Position } from 'src/app/domain/position.model'
import { PositionsComponent } from './positions.component';
import { AppModule } from 'src/app/app.module';
import { PositionState } from 'src/app/domain/position-state.enum';
import { PositionsTableService } from './services/positions-table.service';

describe('PositionsComponent', () => {
  let shallow: Shallow<PositionsComponent>;

  const position = new Position({
      id: 1,
      exchangeId: 1,
      baseAssetId: 1,
      quoteAssetId: 2,
      openedAt: new Date(2021, 10, 5, 17, 20, 30),
      openPrice: 50_000,
      state: PositionState.Open
  });

  beforeEach(() => {
    let router = jasmine.createSpyObj(['navigate']);

    let positionsTableService = jasmine.createSpyObj([
      'getItems$',
      'fetchPositions'
    ]);
    positionsTableService.getItems$ = jasmine.createSpy().and.returnValue(new BehaviorSubject([position]));
    
    shallow = new Shallow(PositionsComponent, AppModule)
      .mock(Router, router)
      .mock(PositionsTableService, positionsTableService);
  });

  it('should create', async () => {
    const { instance } = await shallow.render();
    expect(instance).toBeTruthy();
  });
});
