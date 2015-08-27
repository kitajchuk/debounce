debounce
========

> Limit method calls.



## Installation

```shell
npm install properjs-debounce --save-dev
```


## Usage
```javascript
var debounce = require( "properjs-debounce" );

// Fire callback at end of detection period
debounce(function() {
    // Do stuff here
    
}, 200 );

// Fire callback at beginning of detection period
debounce(function() {
    // Do stuff here
    
}, 200, true );
```
