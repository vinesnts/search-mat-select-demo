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
/**
 * @author viniciusalmeida.dev
 */
export class SearchMatInputComponent implements OnInit {
  formGroup: FormGroup;

  @ViewChild('filterInput') filterInput: ElementRef;
  /** filter input label text */
  @Input('filterLabel') filterLabel: string = 'Filter option';
  /** event emitted on any change on the filter input */
  @Output() onChange: EventEmitter<string> = new EventEmitter<string>();
  /** event emitted on escape key pressed  */
  @Output() onExit: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private fb: FormBuilder) {
    this.formGroup = fb.group({
      filter: null
    });
  }

  ngOnInit() {}

  /**
   * Emits changes on the input after last change
   */
  handleKeyup(): void {
    this.onChange.emit(this.formGroup.get('filter').value);
  }

  /**
   * Handles shortcuts on keydown
   * @param event keyboard event emitted when key is pressed down
   */
  handleKeydown(event: KeyboardEvent): void {
    if (ALLOWED_KEYS.includes(event.code)) return;
    else if (event.key === 'Escape') this.onExit.emit(true);
    event.stopPropagation();
  }
}
