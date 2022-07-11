import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import * as Payment from 'payment';

@Component({
  selector: 'app-card-template',
  templateUrl: './card-template.component.html',
  styleUrls: ['./card-template.component.css']
})
export class CardTemplateComponent implements OnInit {

  @Input() cardNumber: string = '';
  @Input() cardName: string = '';
  @Input() cardExpDate: string = '';
  @Input() cardCvv: string = '';
  @Input() acceptedCards = [];
  nextNumber: string = '';
  maxLength: number = 16;
  issuer: string = 'unknown';

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['cardNumber']){
      console.log(this.cardNumber);
      this.nextNumber = this.cardNumber?.replace(/[A-Za-z]| /g, '');
    }
    if (changes['cardName']){
      console.log(this.cardName);
      //this.valideName();
    }
    if (changes['cardExpDate']){
      // this.valideExpiry()
    };
    if (changes['cardCvv']) {
      // this.valideCVC();
    }
  }

  // valideName(): void {
  //   if (this.cardName?.length > 18) {
  //     this.cardName = this.cardName?.slice(0, 18);
  //   }
  // }

  // valideNumber(): void {
  //   this.optionsCard();
  //   this.numberCard();
  // }

  // valideExpiry(): void {
  //   if (this.cardExpDate.length > 4) {
  //     this.cardExpDate = this.cardExpDate?.slice(0, 4);
  //   }
  // }

  // valideCVC(): void {
  //   if (this.cardCvv.length > 4) {
  //     this.cardCvv = this.cardCvv?.slice(0, 4);
  //   }
  // }

  // optionsCard(): void {
  //   if (this.issuer === 'amex') {
  //     this.maxLength = 15;
  //   } else if (this.issuer === 'dinersclub') {
  //     this.maxLength = 14;
  //   } else if (['hipercard', 'mastercard', 'visa'].includes(this.issuer)) {
  //     this.maxLength = 19;
  //   }
  // }

  // numberCard(): void {
  //   this.nextNumber = this.cardNumber?.replace(/[A-Za-z]| /g, '');
  //   if (this.maxLength > 16) {
  //     this.maxLength = this.nextNumber.length <= 16 ? 16 : this.maxLength;
  //   }
  //   if (this.nextNumber.length > this.maxLength) {
  //     this.nextNumber = this.nextNumber.slice(0, this.maxLength);
  //   }
  //   while (this.nextNumber.length < this.maxLength) {
  //     this.nextNumber += '•';
  //   }
  //   if (['amex', 'dinersclub'].includes(this.issuer)) {
  //     const format = [0, 4, 10];
  //     const limit = [4, 6, 5];
  //     this.nextNumber = `${this.nextNumber.substr(
  //       format[0],
  //       limit[0]
  //     )} ${this.nextNumber.substr(
  //       format[1],
  //       limit[1]
  //     )} ${this.nextNumber.substr(format[2], limit[2])}`;
  //   } else if (this.nextNumber.length > 16) {
  //     const format = [0, 4, 8, 12];
  //     const limit = [4, 7];
  //     this.nextNumber = `${this.nextNumber.substr(
  //       format[0],
  //       limit[0]
  //     )} ${this.nextNumber.substr(
  //       format[1],
  //       limit[0]
  //     )} ${this.nextNumber.substr(
  //       format[2],
  //       limit[0]
  //     )} ${this.nextNumber.substr(format[3], limit[1])}`;
  //   } else {
  //     for (let i = 1; i < this.maxLength / 4; i++) {
  //       const space_index = i * 4 + (i - 1);
  //       this.nextNumber = `${this.nextNumber.slice(
  //         0,
  //         space_index
  //       )} ${this.nextNumber.slice(space_index)}`;
  //     }
  //   }
  // }

  // expiryCard(): string {
  //   let month = '';
  //   let year = '';
  //   if (this.cardExpDate.includes('/')) {
  //     [month, year] = this.cardExpDate.split('/');
  //   } else if (this.cardExpDate.length) {
  //     month = this.cardExpDate.substr(0, 2);
  //     year = this.cardExpDate.substr(2, 6);
  //   }
  //   while (month.length < 2) {
  //     month += '•';
  //   }
  //   if (year.length > 2) {
  //     year = year.substr(2, 4);
  //   }
  //   while (year.length < 2) {
  //     year += '•';
  //   }
  //   return `${month}/${year}`;
  // }
}
