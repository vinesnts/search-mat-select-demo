import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatOption } from '@angular/material/core';
import { MatSelect, MatSelectChange } from '@angular/material/select';
import { fromEvent, Subscription } from 'rxjs';
import { SearchMatInputComponent } from './search-mat-input/search-mat-input.component';

export interface GenericData {
  id: number;
  name: string;
}

@Component({
  selector: 'app-search-select-mat-input',
  templateUrl: './search-select-mat-input.component.html',
  styleUrls: ['./search-select-mat-input.component.scss']
})
/**
 * @author viniciusalmeida.dev
 */
export class SearchSelectMatInputComponent implements OnInit {
  keydownSubscription: Subscription;
  keyupSubscription: Subscription;
  mapKeysdown = {};

  @ViewChild('selectInput') selectInput: MatSelect;
  @ViewChild('selectAllOption') selectAllOption: MatOption;
  @ViewChild('filterInput') filterInput: SearchMatInputComponent;

  /** mat select appearance definition */
  @Input('appearance') appearance: 'fill' | 'outline' | 'standard' | 'legacy' = 'outline';
  /** mat select float label behavior  */
  @Input('floatLabel') floatLabel: 'auto' | 'always' = 'auto';
  /** mat select label/placeholder text */
  @Input('inputLabel') inputLabel: string = '';
  /** multiple selectable options or only one selectable option */
  @Input('selectMultiple') selectMultiple: boolean = true;
  /** select all option avaliability */
  @Input('showSelectAll') showSelectAll: boolean = true;
  /** select all option label, when enabled */
  @Input('selectAllLabel') selectAllLabel: string = 'Select All';
  /** filter/search input placeholder text */
  @Input('filterLabel') filterLabel: string = 'Search for an option (CTRL + S)';
  /** options to be shown on the select */
  @Input('data') data: Array<GenericData> = [];
  /** event emitted when any option is selected or deselected */
  @Output('selectionChange') selectionChange: EventEmitter<Array<GenericData>> = new EventEmitter<Array<GenericData>>();

  formGroup: FormGroup;
  lastOptionSelected: Array<string>;
  unfilteredData: Array<GenericData> = [];
  selectAllOptionValue: GenericData = {
    id: 0,
    name: 'Select All'
  };

  constructor(private fb: FormBuilder) {
    this.formGroup = this.fb.group({
      data: null,
      filter: null
    });
  }

  ngOnInit(): void {
    this.selectAllOptionValue.name = this.selectAllLabel;
    this.unfilteredData = this.data;

    this.keydownSubscription = fromEvent(document, 'keydown').subscribe(
      (e: KeyboardEvent) => {
        switch (e.key) {
          case 'Control': {
            this.mapKeysdown[e.key] = true;
            break;
          }
          case 's': {
            this.mapKeysdown[e.key] = true;
            break;
          }
        }

        if (this.mapKeysdown['Control'] && this.mapKeysdown['s']) {
          this.mapKeysdown['Control'] = false;
          this.mapKeysdown['s'] = false;

          e.preventDefault();
          this.filterInput.filterInput.nativeElement.focus();
        }
      }
    );

    this.keyupSubscription = fromEvent(document, 'keyup').subscribe(
      (e: KeyboardEvent) => {
        switch (e.key) {
          case 'Control': {
            this.mapKeysdown[e.key] = false;
          }
          case 's': {
            this.mapKeysdown[e.key] = false;
          }
        }
      }
    );
  }

  /**
   * Search in the this.data for the event string
   * @param event character or string to be searched in this.data
   */
  doFilter(event: string): void {
    let filteredData: Array<GenericData> = this.unfilteredData;
    const word: string = event ? event.toLocaleLowerCase() : '';
    if (word) {
      filteredData = this.unfilteredData.filter((d: GenericData) => {
        return d.name.toLocaleLowerCase().includes(word);
      });
    }
    this.data = filteredData;
  }

  /**
   * Unfocuses the search/filter input and focus on options below it
   */
  doExitSearchInput(): void {
    this.selectInput.focus();
  }

  /**
   * Focuses the search/filter input to start typing
   */
  doFocusFilter(): void {
    this.filterInput.filterInput.nativeElement.focus();
  }

  /**
   * Selects all options in the select
   */
  private _doSelectAll(): void {
    const selected: boolean = this.selectAllOption.selected;
    if (selected)
      this.formGroup.controls.data.patchValue([
        ...this.unfilteredData.map((d: GenericData) => d),
        this.selectAllOptionValue
      ]);
    else this.formGroup.controls.data.patchValue([]);
  }

  /** 
   * Unselects the Select All option when any other option's selected
   * when Select All option is enabled
   * */
  private _doSelectAny(): void {
    if (this.showSelectAll) {
      this.selectAllOption.deselect();
    }
  }

  /**
   * Handles the selection when any option is selected
   * Selects all or deselects the select all option
   * @param event emmitted when a option is selected
   */
  handleSelectAll(event: MatSelectChange): void {
    const target: GenericData = this._getOptionSelected(event);
    
    if (this.selectMultiple) {
      if (this.selectAllOption && target === this.selectAllOption.value) {
        this._doSelectAll();

        if (event.value.includes(this.selectAllOptionValue))
          this.selectionChange.emit(this.unfilteredData);
        else this.selectionChange.emit([]);
        return;
      } else this._doSelectAny();
    }
    this.selectionChange.emit(event.value);
  }

  /**
   * Find the selected option from a MatSelectChange event
   * @param event MatSelectChange event emitted by the MatSelect
   * @returns the selected option
   */
  private _getOptionSelected(event: MatSelectChange): GenericData {
    return event.source.options.find((option: any) => {
      if (option._active) return option;
    }).value;
  }
}
