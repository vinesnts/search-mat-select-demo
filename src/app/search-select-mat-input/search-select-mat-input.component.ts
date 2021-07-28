import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
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
export class SearchSelectMatInputComponent implements OnInit {
  keydownSubscription: Subscription;
  keyupSubscription: Subscription;
  mapKeysdown = {};

  @ViewChild('selectInput') selectInput: MatSelect;
  @ViewChild('selectAllOption') selectAllOption: MatOption;
  @ViewChild('filterInput') filterInput: SearchMatInputComponent;

  @Input('appearance') appearance: 'fill' | 'outline' | 'standard' | 'legacy' = 'outline';
  @Input('floatLabel') floatLabel: 'auto' | 'always' = 'auto';
  @Input('inputLabel') inputLabel: string = '';
  @Input('selectMultiple') selectMultiple: boolean = true;
  @Input('showSelectAll') showSelectAll: boolean = true;
  @Input('selectAllLabel') selectAllLabel: string = 'Select All';
  @Input('filterLabel') filterLabel: string = 'Search for an option (CTRL + S)';
  @Input('data') data: Array<GenericData> = [];

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

  doExitSearchInput(): void {
    this.selectInput.focus();
  }

  doFocusFilter(): void {
    this.filterInput.filterInput.nativeElement.focus();
  }

  doSelectAll(): void {
    const selected: boolean = this.selectAllOption.selected;
    if (selected)
      this.formGroup.controls.data.patchValue([
        ...this.unfilteredData.map((d: GenericData) => d),
        this.selectAllOptionValue
      ]);
    else this.formGroup.controls.data.patchValue([]);
  }

  doSelectAny(): void {
    if (this.showSelectAll) {
      this.selectAllOption.deselect();
    }
  }

  handleSelectAll(event: MatSelectChange): void {
    const target: GenericData = this._getOptionSelected(event);

    if (this.selectMultiple) {
      if (this.selectAllOption && target === this.selectAllOption.value) this.doSelectAll();
      else this.doSelectAny();
    }
  }

  private _getOptionSelected(event: MatSelectChange): GenericData {
    return event.source.options.find((option: any) => {
      if (option._active) return option;
    }).value;
  }
}
