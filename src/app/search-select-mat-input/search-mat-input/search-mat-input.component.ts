import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

const ALLOWED_KEYS: Array<string> = [
  'Enter',
  'ArrowUp',
  'ArrowLeft',
  'ArrowDown',
  'ArrowRight'
];

@Component({
  selector: 'app-search-mat-input',
  templateUrl: './search-mat-input.component.html',
  styleUrls: ['./search-mat-input.component.scss']
})
export class SearchMatInputComponent implements OnInit {
  formGroup: FormGroup;

  @ViewChild('filterInput') filterInput: ElementRef;
  @Input('filterLabel') filterLabel: string = 'Filter option';
  @Output() onChange: EventEmitter<string> = new EventEmitter<string>();
  @Output() onExit: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private fb: FormBuilder) {
    this.formGroup = fb.group({
      filter: null
    });
  }

  ngOnInit() {}

  handleKeyup(event: KeyboardEvent): void {
    this.onChange.emit(this.formGroup.get('filter').value);
  }

  handleKeydown(event: KeyboardEvent): void {
    if (ALLOWED_KEYS.includes(event.code)) return;
    else if (event.key === 'Escape') this.onExit.emit(true);
    event.stopPropagation();
  }
}
