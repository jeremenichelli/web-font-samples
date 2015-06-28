(function(_win, _doc, undefined) {
    'use strict';

    _win.FontFaceOnload("Oswald", {
        success: function() {
            _doc.body.classList.add('font-loaded');   
        }
    });
})(window, document);