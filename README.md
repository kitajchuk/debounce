debounce
========

> Limit method calls.



## Installation

```shell
npm install properjs-debounce
```


## Usage
```javascript
// Fire callback at end of detection period
debounce(function() {
    // Do stuff here
    
}, 200 );

// Fire callback at beginning of detection period
debounce(function() {
    // Do stuff here
    
}, 200, true );
```
