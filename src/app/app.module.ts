import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PositionsListComponent } from './pages/positions/positions.component';
import { SharedModule } from './shared/shared.module';
import { PositionDetailsComponent } from './pages/position-details/position-details.component';
import { PairsListComponent } from './pages/pairs/pairs.component';

@NgModule({
  declarations: [
    AppComponent,
    PositionsListComponent,
    PositionDetailsComponent,
    PairsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
