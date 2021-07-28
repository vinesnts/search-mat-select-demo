<div id="intro">
  <h1>Search Select Mat Input</h1>
  <p>by  <a href="https://viniciusalmeida.dev">@viniciusalmeida.dev</a></p>
  <p>
    This is a example AND reusable component of a select input styled with Angular Material components which features a filter/search box to find options.
  </p>
</div>

<div>
  <ol>
    <li id="howto"><h2>How to...</h2>
      <ul>
        <li>
          <h2>import to your project</h2>
          <ul>
            <li>Simple copy the <strong>search-select-mat-input</strong> folder into you project.</li>
            <li>Then import the SearchSelectMatInputModule to your component.</li>
          </ul>
        </li>
        <li>
          <h2>set the select options</h2>
          <p>Use the attribute <code>data</code>.</p>
          <p>Note: the data passed to the search-select-mat-input MUST extend from the GenericData interface avaliable in the SearchSelectMatInputComponent class.</p>
        </li>
        <li>
          <h2>set the input label</h2>
          <p>Use the attribute <code>inputLabel</code> to set the label/placeholder of the closed select input.</p>
        </li>
    
        <li>
          <h2>add the Select All/Mark All checkbox</h2>
          <p>Use the data binding attribute <code>[showSelectAll]</code> to enable showing the option.</p>
          <ul>
            <li>
              <h3><code>[showSelectAll]="true"</code></h3>
              <app-search-select-mat-input
                [data]="states"
                inputLabel="Brazilian States"
                [selectMultiple]="true"
                [showSelectAll]="true"
                selectAllLabel="Mark all"
                filterLabel="Search for a Brazilian state">
              </app-search-select-mat-input>
            </li>
            <li>
              <h3><code>[showSelectAll]="false"</code></h3>
              <app-search-select-mat-input [data]="states" inputLabel="Brazilian States" [selectMultiple]="true"
                [showSelectAll]="false" filterLabel="Search for a Brazilian state">
              </app-search-select-mat-input>
            </li>
            <li>
              <h3>Set Select All/Mark All checkbox label</h3>
              <p>Use the atribute <code>filterLabel.</code></p>
            </li>
          </ul>
        </li>
    
        <li>
          <h2>choose between a one option or multiple selector</h2>
          <p>Use the data binding attribute <code>[selectMultiple]</code> to switch between one option only or multiple selector.</p>
          <ul>
            <li>
              <h3><code>[selectMultiple]="true"</code></h3>
              <app-search-select-mat-input 
                [data]="states"
                inputLabel="Brazilian States"
                [selectMultiple]="true"
                [showSelectAll]="true"
                selectAllLabel="Mark all"
                filterLabel="Search for a Brazilian state">
              </app-search-select-mat-input>
            </li>
            <li>
              <h3><code>[selectMultiple]="false"</code></h3>
              <app-search-select-mat-input
                [data]="states"
                inputLabel="Brazilian States"
                [selectMultiple]="false"
                filterLabel="Search for a Brazilian state">
              </app-search-select-mat-input>
            </li>
          </ul>
        </li>
    
        <li>
          <h2>change mat input appearance</h2>
          <p>Use the <code>appearance</code> attribute as done in a mat input.</p>
          <ul>
            <li>
              <h3><code>appearance="legacy"</code></h3>
              <app-search-select-mat-input
                appearance="legacy"
                [data]="states"
                inputLabel="Brazilian States"
                [selectMultiple]="false"
                filterLabel="Search for a Brazilian state">
              </app-search-select-mat-input>
            </li>
            <li>
              <h3><code>appearance="standard"</code></h3>
              <app-search-select-mat-input
                appearance="standard"
                [data]="states"
                inputLabel="Brazilian States"
                [selectMultiple]="false"
                filterLabel="Search for a Brazilian state">
              </app-search-select-mat-input>
            </li>
            <li>
              <h3><code>appearance="outline"</code></h3>
              <app-search-select-mat-input 
                appearance="outline"
                [data]="states"
                inputLabel="Brazilian States"
                [selectMultiple]="true"
                [showSelectAll]="true"
                selectAllLabel="Mark all"
                filterLabel="Search for a Brazilian state">
              </app-search-select-mat-input>
            </li>
            <li>
              <h3><code>appearance="fill"</code></h3>
              <app-search-select-mat-input
                appearance="fill"
                [data]="states"
                inputLabel="Brazilian States"
                [selectMultiple]="false"
                filterLabel="Search for a Brazilian state">
              </app-search-select-mat-input>
            </li>
          </ul>
          <p>Note: Default appearance is <code>outline</code></p>
        </li>
    
        <li>
          <h2>change mat input float label behavior</h2>
          <p>Use the <code>floatLabel</code> attribute as done in a mat input</p>
          <ul>
            <li>
              <h3><code>floatLabel="auto"</code></h3>
              <app-search-select-mat-input
                floatLabel="auto"
                [data]="states"
                inputLabel="Brazilian States"
                [selectMultiple]="true"
                [showSelectAll]="true"
                selectAllLabel="Mark all"
                filterLabel="Search for a Brazilian state">
              </app-search-select-mat-input>
            </li>
            <li>
              <h3><code>floatLabel="always"</code></h3>
              <app-search-select-mat-input 
                floatLabel="always"
                [data]="states"
                inputLabel="Brazilian States"
                [selectMultiple]="false"
                filterLabel="Search for a Brazilian state">
              </app-search-select-mat-input>
            </li>
          </ul>
        </li>
      </ul>
    </li>
    <li>
      <h2>Accessibility</h2>
      Navigation through keyboard is avaliable on this component, see bellow the avaliable key navigation keys and shortcuts:
      <ul>
        <li>
          <code>enter</code>
          <ul>
            <li>Opens the select options.</li>
            <li>Selects the hovered option.</li>
          </ul>
        </li>
        <li>
          <code>up/down/left/right</code>
          <p>Navigates through the options.</p>
          <p>Note: When clicked, the filter input will blur.</p>
        </li>
        <li>
          <code>ctrl + s</code>
          <p>Focuses the filter input.</p>
          <p>Note: shift + tab won't focus the filter input, instead use ctrl + s.</p>
        </li>
        <li>
          <code>escape</code>
          <ul>
            <li>Unfocuses the filter input.</li>
            <li>Closes the select options.</li>
          </ul>
        </li>
      </ul>
      <p>Note: <code>tab</code> will NOT navigate properly inside selects overall, this either.</p>
    </li>

  </ol>

</div>