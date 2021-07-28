import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchMatInputComponent } from './search-mat-input.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule
  ],
  declarations: [SearchMatInputComponent],
  exports: [SearchMatInputComponent]
})
export class SearchMatInputModule {}
