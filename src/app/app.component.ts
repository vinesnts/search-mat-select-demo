import { Component, VERSION } from '@angular/core';
import { BRAZILIAN_STATES } from './models/states';
import { State } from './models/states';
import { GenericData } from 'search-mat-select/lib/search-mat-select.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  states: Array<State> = BRAZILIAN_STATES;

  selectedOptions1: Array<GenericData> = [];

  selectionChange1(event: Array<GenericData>) {
    this.selectedOptions1 = event;
  }

  formatOptions(): string {
    return this.selectedOptions1.map(
      (option: GenericData) => option.name).join(', ');
  }
}
