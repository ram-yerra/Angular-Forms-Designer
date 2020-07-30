import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DynamicFormsRoutingModule } from './dynamic-forms-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ElementsListComponent } from './elements-list/elements-list.component';
import { CrudElementsComponent } from './crud-elements/crud-elements.component';

import { ElementListService } from './services/element-list.service';
import { FormPreviewComponent } from './form-preview/form-preview.component';
import { SharedResourcesModule } from '../shared-resources/shared-resources.module';

@NgModule({
  declarations: [DashboardComponent, ElementsListComponent, CrudElementsComponent, FormPreviewComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DynamicFormsRoutingModule,
    SharedResourcesModule
  ],
  providers: [ElementListService]
})
export class DynamicFormsModule { }
