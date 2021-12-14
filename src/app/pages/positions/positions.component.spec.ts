import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { PositionsListComponent } from './positions.component';

describe('PositionsListComponent', () => {
  let component: PositionsListComponent;
  let fixture: ComponentFixture<PositionsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PositionsListComponent ],
      imports: [RouterTestingModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PositionsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show expected count of positions', () => {
    const expectedCountOfPositions = 3;
    let tbody: HTMLElement = fixture.nativeElement.querySelector('tbody');
    expect(tbody.childElementCount).toEqual(expectedCountOfPositions);
  })
});
