import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PositionsListComponent } from './components/positions-list/positions-list.component';
import { SharedModule } from './shared/shared.module';
import { PositionDetailsComponent } from './components/position-details/position-details.component';
import { PairsListComponent } from './components/pairs-list/pairs-list.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    PositionsListComponent,
    PositionDetailsComponent,
    PairsListComponent,
    HeaderComponent
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
