/*
 * jQuery Responsinatr 0.0.1
 * Copyright 2016 JoomlaTemplat.es
 * GNU General Public License version 3; see LICENSE.txt
 * http://joomlatemplat.es/
 */

(function ($)
{

    $.fn.responsinatr = function(options) {

        // Default options
        var settings = $.extend({
            target:         'iframe',
            wrapperClass:   'responsinatr'
        }, options );

        $(document).load(function(){

            $(settings.selector).each(function() {

                // Wrap each iframe
                $(this).wrap(
                    '<div class="' + settings.wrapperClass + '"></div>'
                );
                console.log('wrapper class added!');

            });

        });

        $(window).resize(function() {

            $(settings.target).each(function() {

                // Calculate old and new width/height values
                var $oldHeight  =  $(settings.target).attr('height');                  // Get iframe's height
                var $oldWidth   =  $(settings.target).attr('width');                   // Get iframe's width
                var $newWidth   =  $(settings.target).parent().width();                // Get wrapper's width
                var $newHeight  =  ($oldHeight / $oldWidth) * $newWidth;    // Calculate new height

                // Apply new width/height values keeping aspect ratio
                $('.' + settings.wrapperClass).find('iframe').css({
                    "height"    : $newHeight + "px",
                    "width"     : $newWidth  + "px"
                });
                console.log('height/width values added!');

            });

        });

    };

}(jQuery));