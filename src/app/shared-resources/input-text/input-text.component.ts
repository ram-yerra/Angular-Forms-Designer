import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss']
})
export class InputTextComponent implements OnInit {
  @Input() element: any;
  textFormGroup: FormGroup;
  
  constructor() { }

  ngOnInit() {
    const elObj = { };
    elObj[this.element.uniqueId] = new FormControl(null);
    if (this.element.required) elObj[this.element.uniqueId].setValidators(Validators.required);
    this.textFormGroup = new FormGroup(elObj);
  }

}
