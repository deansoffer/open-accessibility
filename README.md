
Free accessibility tools menu for website maintainers powered by Pure javascript - no library needed. [See the demo](https://www.deansoffer.co.il/)

### Getting Started
lightweight pure javascript library, no jquery or external libraries needed. 



### Initialization


In order for the plugin to load, it has to be initialized like so:
```
 openAccessibility({
        isMenuOpened: true,
        highlightedLinks: false,
        isMobileEnabled: true,
        grayscale: 0,
        contrast: 100,
        maxZoomLevel: 3,
        minZoomLevel: 0.5,
        zoomStep: 0.2,
        zoom: 1,
        cursor: false,
        highlightedHeaders: false,
        brightness: 100,
        textSelector: 'p',
        invert: false,
        position: 'static',
        footerText: '<a href="https://www.deansoffer.co.il/">   פתרונות אינטרנט ' +
        '<img class="img-logo" src="https://www.deansoffer.co.il/wp-content/themes/deans/img/logo.png" title="DS בניית אתרים" style="width: 50px;">' +
        '</a>'
    });
```

In addition, some default options may be overidden on initialization:
```
openAccessibility({
  textSelector: 'h1,p'
});
```

Full list of default options:
```
isMenuOpened: false
highlightedLinks: false
isMobileEnabled: false
grayscale: 0
brightness: 100
contrast: 100
maxZoomLevel: 3
minZoomLevel: 0.5
zoomStep: 0.2
zoom: 1
cursor: false
textSelector: '.open-accessibility-text'
invert: false
iconSize: 'm',
localization: ['he']
```

### Langual support
In order to use other language add the locale script file right after the `open-accessibility.babel` libary ( The order is important ).
```
<script src="dist/open-accessibility.min.js"></script>
<script src="dist/locale.min.js"></script>
```

and use `localization` property in configuration to set the primary language
```
localization: ['en']
```

You may want to extend the `locale.json` file, or the `$.fn.openAccessibility.locale` property in order to add your own language!

* We'll add a support for multilangual select in the menu, soon :)
