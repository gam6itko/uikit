(function(core) {

    var uikit;

    if (typeof define == 'function' && define.amd) { // AMD

        define('uikit', function(){

            uikit.load = function(res, req, onload, config) {

                var resources = res.split(','),
                    load = [],
                    i,
                    base = (config.config && config.config.uikit && config.config.uikit.base ? config.config.uikit.base : '').replace(/\/+$/g, '');

                if (!base) {
                    throw new Error('Please define base path to UIkit in the requirejs config.');
                }

                for (i = 0; i < resources.length; i += 1) {
                    var resource = resources[i].replace(/\./g, '/');
                    load.push(base+'/components/'+resource);
                }

                req(load, function() {
                    onload(uikit);
                });
            };

            return uikit;
        });
    } else if ( typeof module === "object" && typeof module.exports === "object" ) {
        module.exports = core(require('jquery'));
    } else {
        if (!window.jQuery) {
            throw new Error('UIkit 2.x requires jQuery');
        }
        uikit = core(window.jQuery);
        return uikit;
    }

})(function(jQuery) {
    var UIkit2 = INJECT_CONTENT_HERE;
    return UIkit2;
});
