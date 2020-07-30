import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ElementListService } from '../services/element-list.service';
import { Element } from '../model/element';

@Component({
  selector: 'app-form-preview',
  templateUrl: './form-preview.component.html',
  styleUrls: ['./form-preview.component.scss']
})
export class FormPreviewComponent implements OnInit {
  @Output() showFormPreview = new EventEmitter<Boolean>();
  // dynamicForm: FormGroup;
  elementsList: Element[];

  constructor(private elementListService: ElementListService) { }

  ngOnInit() {
    const formElements = {};
    this.elementsList = this.elementListService.getElementsList();
    console.log(this.elementsList);
    // this.elementsList.forEach((element) => {
    //   formElements[element.uniqueId] = new FormControl(element)
    // });
    // this.dynamicForm = new FormGroup(formElements);
  }

  hidePreviewForm() {
    this.showFormPreview.emit(false);
  }

}
