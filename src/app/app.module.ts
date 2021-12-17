import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { PositionsComponent } from './pages/positions/positions.component';
import { PositionDetailsComponent } from './pages/position-details/position-details.component';
import { PairsListComponent } from './pages/pairs/pairs.component';

@NgModule({
  declarations: [
    AppComponent,
    PositionsComponent,
    PositionDetailsComponent,
    PairsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
