/*
 * jQuery Responsinatr 0.0.1
 * Copyright 2016 JoomlaTemplat.es
 * GNU General Public License version 3; see LICENSE.txt
 * http://joomlatemplat.es/
 */

(function ($)
{

    $.fn.responsinatr = function( options ) {

        // Default options
        var settings = $.extend({
            selector: '.responsinatr'
        }, options );

        $(window).resize(function() {
            $(settings.selector).each(function() {

                // Calculate old and new width/height values
                var $oldHeight  =  $(this).find('iframe').attr('height');   // Get iframe's height
                var $oldWidth   =  $(this).find('iframe').attr('width');    // Get iframe's width
                var $newWidth   =  $(this).width();                         // Get wrapper's width
                var $newHeight  = ($oldHeight/$oldWidth) * $newWidth;       // Calculate new height

                // Apply new width/height values keeping aspect ratio
                $(this).find('iframe').css({
                    "height" : $newHeight + "px",
                    "width" : $newWidth + "px"
                });
            });
        });

    };

}( jQuery ));