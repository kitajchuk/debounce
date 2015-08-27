/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var debounce = __webpack_require__( 1 );

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

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 *
	 * Debounce methods
	 * Sourced from here:
	 * http://unscriptable.com/2009/03/20/debouncing-javascript-methods/
	 *
	 * @debounce
	 * @author: kitajchuk
	 *
	 */
	(function ( factory ) {
	    
	    if ( true ) {
	        module.exports = factory();

	    } else if ( typeof window !== "undefined" ) {
	        window.debounce = factory();
	    }
	    
	})(function () {


	    /**
	     *
	     * Limit method calls
	     * @memberof! <global>
	     * @method debounce
	     * @param {function} callback The method handler
	     * @param {number} threshold The timeout delay in ms
	     * @param {boolean} execAsap Call function at beginning or end of detection period
	     *
	     */
	    var debounce = function ( callback, threshold, execAsap ) {
	        var timeout = null;
	        
	        return function debounced() {
	            var args = arguments,
	                context = this;
	            
	            function delayed() {
	                if ( !execAsap ) {
	                    callback.apply( context, args );
	                }
	                
	                timeout = null;
	            }
	            
	            if ( timeout ) {
	                clearTimeout( timeout );
	                
	            } else if ( execAsap ) {
	                callback.apply( context, args );
	            }
	            
	            timeout = setTimeout( delayed, (threshold || 100) );
	        };
	    };
	    
	    
	    return debounce;


	});

/***/ }
/******/ ]);