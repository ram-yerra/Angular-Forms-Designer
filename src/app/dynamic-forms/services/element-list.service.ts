import { Injectable } from '@angular/core';
import { Element } from '../model/element';
import { Subject } from 'rxjs';

@Injectable()
export class ElementListService {
  elementsList = [];
  updateListEvent = new Subject<Element>();
  editElementEvent = new Subject<Element>();

  addElement(element: Element) {
    this.elementsList.push(element);
    this.sortElementsList();
  }

  updateElement(element: Element) {
    const index = this.elementsList.map((el: Element) => el.uniqueId).indexOf(element.uniqueId);
    if (index !== -1) this.elementsList[index] = element;
    this.sortElementsList();
  }

  sortElementsList() {
    this.elementsList = this.elementsList.sort((a, b) => {
      return a.order - b.order;
    });
  }

  getElementsList() {
    return this.elementsList;
  }

  getElementsListLength() {
    return this.elementsList.length;
  }

  addUpdateElement(element: Element) {
    const listEl = this.elementsList.filter(el => el.uniqueId === element.uniqueId);
    if (listEl.length > 0) {
      this.updateElement(element);
    } else {
      this.addElement(element);
    }
  }

  generateUniqueId() {
    return Math.random().toString(36).substr(2, 9);
  }
  
  generateElementModel(element: Element) {
    if (!element) {
      let lastElement:Element = this.elementsList[this.elementsList.length-1];
      element = {
        visibility: true,
        required: true,
        uniqueId: this.generateUniqueId(),
        order: lastElement ? lastElement.order+1 : 0,
        fieldName: '',
        fieldType: ''
      };
    }
    return new Element(element)
  }
}
