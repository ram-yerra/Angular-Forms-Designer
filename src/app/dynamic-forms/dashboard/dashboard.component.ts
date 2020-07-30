import { Component, OnInit } from '@angular/core';
import { Element } from '../model/element';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  showElementCreatorForm: Boolean = false;
  showFormPreview: Boolean = false;

  constructor() { }

  ngOnInit() {
  }

  showAddElementForm(value: boolean) {
    this.showElementCreatorForm = value;
  }

  displayFormPreview(value: boolean) {
    this.showFormPreview = value;
  }

}
