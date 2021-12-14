import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PairsListComponent } from './pages/pairs/pairs.component';
import { PositionDetailsComponent } from './pages/position-details/position-details.component';
import { PositionsListComponent } from './pages/positions/positions.component';

const routes: Routes = [
  { path: '', redirectTo: '/positions', pathMatch: 'full' },
  { path: 'positions', component: PositionsListComponent },
  { path: 'position/:id', component: PositionDetailsComponent },
  { path: 'pairs', component: PairsListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
