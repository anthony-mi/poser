import { NgModule } from "@angular/core";

import { IconComponent } from "./components/icon/icon.component";

import { ButtonComponent } from "./components/button/button.component";
import { ResetButtonComponent } from "./components/reset-button/reset-button.component";
import { SubmitButtonComponent } from "./components/submit-button/submit-button.component";

@NgModule({
    declarations: [IconComponent, ButtonComponent, ResetButtonComponent, SubmitButtonComponent],
    exports: [IconComponent, ButtonComponent, ResetButtonComponent, SubmitButtonComponent]
})
export class SharedModule { }
