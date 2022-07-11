import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreditCardComponent } from './credit-card/credit-card.component';
import { CardTemplateComponent } from './card-template/card-template.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CreditCardComponent,
    CardTemplateComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [CreditCardComponent]
})
export class PaymentsModule { }
