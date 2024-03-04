// advance-forms.component.ts

import { trigger, state, style, transition, animate } from '@angular/animations';
import {  Component,ElementRef,OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-advance-forms',
  templateUrl: './advance-forms.component.html',
  styleUrls: ['./advance-forms.component.scss'],
  animations: [
    trigger('buttonOneState', [
      state('normal', style({ transform: 'scale(1)' })),
      state('scaled', style({ transform: 'scale(1.5)' })),
      transition('normal <=> scaled', animate('500ms ease-in-out')),
    ]),
    trigger('buttonTwoState', [
      state('normal', style({ opacity: 1 })),
      state('hidden', style({ opacity: 0 })),
      transition('normal <=> hidden', animate('500ms ease-in-out')),
    ]),
  ]
})
export class AdvanceFormsComponent implements OnInit {
  user: FormGroup;
  newAddress!:any;
  showModel!:boolean;
  addressArray: any = [];

  constructor() {
    this.user = new FormGroup({
      displayName: new FormControl('Rahul Gabhane')
    });
    this.showModel = false;
  }
  buttonOneState: 'normal' | 'scaled' = 'normal';
  buttonTwoState: 'normal' | 'hidden' = 'normal';

  toggleButtonOne() {
    this.buttonOneState = this.buttonOneState === 'normal' ? 'scaled' : 'normal';
  }

  toggleButtonTwo() {
    this.buttonTwoState = this.buttonTwoState === 'normal' ? 'hidden' : 'normal';
  }


  ngOnInit() {
    this.addressArray = [
      { label: 'Delivery Address', controlKey: 'deliveryAddress' },
      { label: 'Office Address', controlKey: 'officeAddress' }

    ]
  }


  submitForm() {
    console.log(this.user.value);
  }

  addAddress() {
    let address = this.newAddress
    if (!address || address=="") return;
    this.addressArray.push(this.formatAddress(address));
  }

  formatAddress(address:any) {
    const words = address.split(/\s+/).filter(Boolean);
    const controlKey = words.map((word:any, index:Number) => (index === 0 ? word.toLowerCase() : `${word[0].toUpperCase()}${word.substring(1).toLowerCase()}`)).join('');
    
    return {
      label: words.map((word:any, i:Number) => `${(i === 0) ? word[0].toUpperCase() + word.substring(1).toLowerCase() : word.toLowerCase()}`).join(' '),
      controlKey,
    };
  }
  
} 