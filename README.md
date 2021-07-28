<div id="intro">
  <h1>Search Select Mat Input</h1>
  <p>by  <a href="https://viniciusalmeida.dev">@viniciusalmeida.dev</a></p>
  <p>
    This is a example AND reusable component of a select input styled with Angular Material components which features a filter/search box to find options.
  </p>
</div>

<div>
  <ol>
    <h2><li id="howto">How to...</li></h2>
    <ul>
      <li>
        <h2>import to your project</h2>
        <ul>
          <li>Simple copy the <strong><a href="src/app/search-select-mat-input">search-select-mat-input</a></strong> folder into you project.</li>
          <li>Then import the <code>SearchSelectMatInputModule</code> to your component.</li>
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
            <code>[showSelectAll]="true"</code>
          </li>
          <li>
            <code>[showSelectAll]="false"</code>
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
            <code>[selectMultiple]="true"</code>
          </li>
          <li>
            <code>[selectMultiple]="false"</code>
          </li>
        </ul>
      </li>    
      <li>
        <h2>change mat input appearance</h2>
        <p>Use the <code>appearance</code> attribute as done in a mat input.</p>
        <ul>
          <li>
            <code>appearance="legacy"</code>
          </li>
          <li>
            <code>appearance="standard"</code>
          </li>
          <li>
            <code>appearance="outline"</code>
          </li>
          <li>
            <code>appearance="fill"</code>
          </li>
        </ul>
        <p>Note: Default appearance is <code>outline</code></p>
      </li>    
      <li>
        <h2>change mat input float label behavior</h2>
        <p>Use the <code>floatLabel</code> attribute as done in a mat input</p>
        <ul>
          <li>
            <code>floatLabel="auto"</code>
          </li>
          <li>
            <code>floatLabel="always"</code>
          </li>
        </ul>
      </li>
    </ul>
    <h2><li id="accessibility">Accessibility</li></h2>
    <p>Navigation through keyboard is avaliable on this component, see bellow the avaliable key navigation keys and shortcuts:</p>
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
  </ol>
</div>
