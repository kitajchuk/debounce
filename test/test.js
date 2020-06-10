import debounce from "../debounce";

// Fire callback at end of detection period
const end = debounce(() => {
    // Do stuff here
    console.log( "end" );

}, 200 );

// Fire callback at beginning of detection period
const beg = debounce(() => {
    // Do stuff here
    console.log( "beginning" );

}, 200, true );


end();
beg();
