(function(_win, _doc) {
    'use strict';

    WebFont.load({
        google: {
            families: [ 'Oswald' ]
        },
        classes: false,
        active: function() {
            _doc.body.classList.add('font-loaded');
        }
    });
})(window, document);