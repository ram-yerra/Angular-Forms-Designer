import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextComponent } from './input-text/input-text.component';
import { InputTextAreaComponent } from './input-text-area/input-text-area.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { MultiSelectComponent } from './multi-select/multi-select.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [InputTextComponent, InputTextAreaComponent, DropdownComponent, CheckboxComponent, MultiSelectComponent],
  imports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  exports: [InputTextComponent, InputTextAreaComponent, DropdownComponent, CheckboxComponent, MultiSelectComponent]
})
export class SharedResourcesModule { }
