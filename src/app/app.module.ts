import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PositionsListComponent } from './components/positions-list/positions-list.component';
import { IconComponent } from './shared/components/icon/icon.component';
import { ButtonComponent } from './shared/components/button/button.component';
import { SubmitButtonComponent } from './shared/components/submit-button/submit-button.component';
import { ResetButtonComponent } from './shared/components/reset-button/reset-button.component';

@NgModule({
  declarations: [
    AppComponent,
    PositionsListComponent,
    IconComponent,
    ButtonComponent,
    SubmitButtonComponent,
    ResetButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
