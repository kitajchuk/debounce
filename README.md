ProperJS // debounce
====================

> Limit your method calls.



###Installation

```shell
npm i properjs-debounce --save-dev
```


### Usage
```javascript
import debounce from "properjs-debounce";

// Fire callback at end of detection period
const end = debounce(() => {
    // Do stuff here

}, 200 );

end();

// Fire callback at beginning of detection period
const begin = debounce(() => {
    // Do stuff here

}, 200, true );

begin();
```
