import { Component, Inject, Input ,OnInit,inject ,SimpleChanges,OnChanges} from '@angular/core';
import { ControlContainer,FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss'],
  interpolation: ['{{' , '}}'],
  viewProviders: [{
    provide:ControlContainer,
    useFactory:()=>inject(ControlContainer, {skipSelf:true})
  }],
})
export class AddressComponent implements OnInit {
  
  @Input({required:true}) label!:string;
  @Input({required:true}) controlKey!:string;

  constructor(@Inject(ControlContainer) private parentContainer:ControlContainer){
  }

  get parentGroup(){
    return this.parentContainer.control as FormGroup;
  }


  ngOnInit(){
    this.parentGroup.addControl(this.controlKey,
    new FormGroup({
      street:new FormControl(''),
      zipCode:new FormControl('')
    }))
  }
  ngOnChanges(){

  }
}
