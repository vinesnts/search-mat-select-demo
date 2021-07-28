import { Component, VERSION } from '@angular/core';
import { BRAZILIAN_STATES } from './models/states';
import { State } from './models/states';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  states: Array<State> = BRAZILIAN_STATES;
}
