import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { Element } from '../model/element';
import { ElementListService } from '../services/element-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-crud-elements',
  templateUrl: './crud-elements.component.html',
  styleUrls: ['./crud-elements.component.scss']
})
export class CrudElementsComponent implements OnInit, OnDestroy {
  @Output() showAddElementForm = new EventEmitter<Boolean>();
  elementModel:Element;
  editElementEventSubscription: Subscription;

  constructor(private elementListService: ElementListService) { }

  ngOnInit() {
    this.editElementEventSubscription = this.elementListService.editElementEvent.subscribe((element: Element) => {
      this.elementModel = this.elementListService.generateElementModel(element);
    });
    this.elementModel = this.elementListService.generateElementModel(null);
  }

  onSave(elementForm) {
    const currentElement = {...this.elementModel};
    this.elementListService.updateListEvent.next(currentElement);
    elementForm.reset();
    setTimeout(() => {
      this.elementModel = this.elementListService.generateElementModel(null);
    }, 10);    
  }

  onCancel(elementForm) {
    elementForm.reset();
    this.showAddElementForm.emit(false);
  }

  generateUniqueId() {
    return Math.random().toString(36).substr(2, 9);
  }

  ngOnDestroy() {
    this.editElementEventSubscription.unsubscribe();
  }
}
