import { NgModule } from "@angular/core";

import { IconComponent } from "./components/icon/icon.component";

import { HeaderComponent } from "./components/header/header.component";
import { ButtonComponent } from "./components/buttons/button/button.component";
import { ResetButtonComponent } from "./components/buttons/reset-button/reset-button.component";
import { SubmitButtonComponent } from "./components/buttons/submit-button/submit-button.component";

import { PairsService } from "../services/pairs/pairs.service";

@NgModule({
    declarations: [
        IconComponent,
        HeaderComponent,
        ButtonComponent,
        ResetButtonComponent,
        SubmitButtonComponent
       ],
    exports: [
        IconComponent,
        HeaderComponent,
        ButtonComponent,
        ResetButtonComponent,
        SubmitButtonComponent],
    providers: [ PairsService ]
})
export class SharedModule { }
