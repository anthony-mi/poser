import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PairsListComponent } from './components/pairs-list/pairs-list.component';
import { PositionDetailsComponent } from './components/position-details/position-details.component';
import { PositionsListComponent } from './components/positions-list/positions-list.component';

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
