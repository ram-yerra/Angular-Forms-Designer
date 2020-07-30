import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-multi-select',
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.scss']
})
export class MultiSelectComponent implements OnInit {
  @Input() element: any;
  multiSelectFormGroup: FormGroup;
  
  constructor() { }

  ngOnInit() {
    const elObj = { };
    elObj[this.element.uniqueId] = new FormControl(null);
    if (this.element.required) elObj[this.element.uniqueId].setValidators(Validators.required);
    this.multiSelectFormGroup = new FormGroup(elObj);
  }

}
