;(function($,window,document,undefined){
    var MyPlugin = function(element,options){

    };

    MyPlugin.prototype = {
        constructor:MyPlugin
    };

    MyPlugin.VERSION = "1.0";

    $.fn.myplugin = function(option,values){
        return this.each(function () {
            var $this = $(this),
                data = $this.data('myplugin'),
                options = typeof option === 'object' && option;
            if (!data) {
                $this.data('myplugin', (data = new MyPlugin(this, $.extend({}, $.fn.myplugin.defaults,options))));
            }
            if (typeof option === 'string') data[option](values);
        });
    };

    $.fn.myplugin.Constructor = MyPlugin;

    $.fn.myplugin.defaults = {

    };
})(jQuery,window,document);