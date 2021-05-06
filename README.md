# How to use jQuery Responsinatr

## Load jQuery

Load jQuery inside the head of your site, or before closing body tag:

`<script src="https://code.jquery.com/jquery-2.1.4.min.js"></script>`

Note: at the time of writing this, the plugin has been tested in jQuery 2.1.4+

## Load jQuery Responsinatr plugin

Load **jQuery Responsinatr** plugin just after jQuery:

`<script src="/path/to/jquery.responsinatr.min.js"></script>`

## Execute Responsinatr

Just below the call to Responsinatr, execute the plugin using the code below.

```
<script>
$(function(){
    $('body').responsinatr();
});
</script>
```

To add responsive support to the iframes inside a specific container, define a **target** as follows: 

```
<script>
$(function(){
    $('body').responsinatr({
        target: '#container-id iframe'
    });
});
</script>
```

## Report bugs

If you detect a bug or have feedback to improve **jQuery Responsinatr** plugin, please [post it here](https://github.com/htmgarcia/jquery-responsinatr/issues/).
