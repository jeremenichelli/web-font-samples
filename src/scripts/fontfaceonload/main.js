(function(SITE, _win, _doc, undefined) {
    'use strict';

    _win.onload = function() {
        var performanceToast = _doc.querySelector('.performance-toast-content');

        _win.FontFaceOnload("Oswald", {
            success: function() {
                // get loading time performance in milliseconds
                SITE.performance = Math.floor((_win.performance ? _win.performance.now() : Date.now) - SITE.performance);
                _doc.body.classList.add('font-loaded');

                if (performanceToast) {
                    setTimeout(function() {
                        performanceToast.setAttribute('data-time', ' ' + SITE.performance + 'ms');
                        _doc.body.classList.add('show-toast');                
                    }, 500);
                    // close when toast is clicked
                    _doc.querySelector('.performance-toast').addEventListener('click', function() {
                        _doc.body.classList.remove('show-toast'); 
                    });
                }  
            }
        });
    }
})(window.Site || {}, window, document);
