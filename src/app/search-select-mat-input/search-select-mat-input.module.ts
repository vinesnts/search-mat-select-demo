import { NgModule } from '@angular/core';

import { SearchSelectMatInputComponent } from './search-select-mat-input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { SearchMatInputModule } from './search-mat-input/search-mat-input.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    SearchMatInputModule
  ],
  declarations: [SearchSelectMatInputComponent],
  exports: [SearchSelectMatInputComponent]
})
export class SearchSelectMatInputModule {}
