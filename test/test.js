var debounce = require( "../debounce" );

// Fire callback at end of detection period
var end = debounce(function() {
    // Do stuff here
    console.log( "end" );
    
}, 200 );

// Fire callback at beginning of detection period
var beg = debounce(function() {
    // Do stuff here
    console.log( "beginning" );
    
}, 200, true );


end();
beg();