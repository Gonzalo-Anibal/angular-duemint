import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.css']
})
export class CreditCardComponent implements OnInit {

  cardNumber: string = '';
  cardName: string = '';
  cardExpDate: string = '';
  cardCvv: string = '';

  constructor(private fb: FormBuilder) { }

  formCard = this.fb.group({
    cardNumber: ['', [Validators.required, Validators.minLength(16), Validators.maxLength(16)]],
    cardExpDate: ['', [Validators.required]],
    cardCvv: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(3)]],
    cardName: ['', [Validators.required, Validators.minLength(2)]]
  });


  ngOnInit(): void {
    console.log("CREDITCOMPONENT");
  }

  submit() {
    if ( this.formCard.valid ) {
      console.log(this.formCard.value)
      console.log("success");
    } else {
      console.log("error");
    }
  }

}
