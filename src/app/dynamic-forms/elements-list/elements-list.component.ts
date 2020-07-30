import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Element } from '../model/element';
import { ElementListService } from '../services/element-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-elements-list',
  templateUrl: './elements-list.component.html',
  styleUrls: ['./elements-list.component.scss']
})
export class ElementsListComponent implements OnInit, OnDestroy {
  @Output() showAddElementForm = new EventEmitter<Boolean>();
  @Output() showFormPreview = new EventEmitter<Boolean>();
  elementsList:Element[] = [];
  updateListEventSubscription: Subscription;

  constructor(private elementListService: ElementListService) { }

  ngOnInit() {
    this.updateListEventSubscription = this.elementListService.updateListEvent.subscribe((element: Element) => {
      this.elementListService.addUpdateElement(element);
      this.elementsList = this.elementListService.getElementsList();
    });
  }

  addElement(event) {
    this.showAddElementForm.emit(true);
  }

  editElement(element: Element) {
    this.showAddElementForm.emit(true);
    this.elementListService.editElementEvent.next(element);
  }

  previewForm(event) {
    this.showFormPreview.emit(true);
  }

  ngOnDestroy() {
    this.updateListEventSubscription.unsubscribe();
  }

}
