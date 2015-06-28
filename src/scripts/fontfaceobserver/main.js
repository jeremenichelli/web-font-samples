(function(_win, _doc, undefined) {
    'use strict';

    var observer = new _win.FontFaceObserver('Oswald');

    observer.check().then(function() {
        _doc.body.classList.add('font-loaded');           
    });
})(window, document);