export default ( callback, threshold, execAsap, context ) => {
    let timeout = null;

    return function debounced ( ...args ) {
        const delayed = () => {
            if ( !execAsap ) {
                callback.apply( (context || this), args );
            }

            timeout = null;
        };

        if ( timeout ) {
            clearTimeout( timeout );

        } else if ( execAsap ) {
            callback.apply( (context || this), args );
        }

        timeout = setTimeout( delayed, (threshold || 100) );
    };
};
