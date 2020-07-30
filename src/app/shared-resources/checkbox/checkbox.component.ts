import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {
  @Input() element: any;
  checkboxFormGroup: FormGroup;
  
  constructor() { }

  ngOnInit() {
    const elObj = {};
    elObj[this.element.uniqueId] = new FormControl(null);
    if (this.element.required) elObj[this.element.uniqueId].setValidators(Validators.required);
    this.checkboxFormGroup = new FormGroup(elObj);
  }

}
