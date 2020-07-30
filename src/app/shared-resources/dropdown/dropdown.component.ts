import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {
  @Input() element: any;
  dropdownFormGroup: FormGroup;
  
  constructor() { }

  ngOnInit() {
    const elObj = { };
    elObj[this.element.uniqueId] = new FormControl(null);
    if (this.element.required) elObj[this.element.uniqueId].setValidators(Validators.required);
    this.dropdownFormGroup = new FormGroup(elObj);
  }

}
