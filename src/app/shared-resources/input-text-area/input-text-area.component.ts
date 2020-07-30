import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-input-text-area',
  templateUrl: './input-text-area.component.html',
  styleUrls: ['./input-text-area.component.scss']
})
export class InputTextAreaComponent implements OnInit {
  @Input() element: any;
  textAreaFormGroup: FormGroup;
  
  constructor() { }

  ngOnInit() {
    const elObj = { };
    elObj[this.element.uniqueId] = new FormControl(null);
    if (this.element.required) elObj[this.element.uniqueId].setValidators(Validators.required);
    this.textAreaFormGroup = new FormGroup(elObj);
  }

}
