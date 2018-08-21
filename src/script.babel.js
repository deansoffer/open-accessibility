var TEMPLATE = '<div class="open-accessibility-cursor-workaround open-accessibility-hidden"></div>\n' +
    '<div class="open-accessibility open-accessibility-collapsed">\n' +
    '    <div class="open-accessibility-container">\n' +
    '        <div class="open-accessibility-menu">\n' +
    '            <div class="open-accessibility-close-button">\n' +
    '                <i class="fa fa-times" title="סגור חלונית נגישות"></i>\n' +
    '                <span class="open-accessibility-header-text">\n' +
    '                תפריט נגישות \n' +
    '                    </span>\n' +
    '            </div>\n' +
    '            <div class="open-accessibility-menu-scroll">\n' +
    '                <h4>טקסט</h4>\n' +
    '                <div class="open-accessibility-menu-button open-accessibility-zoom-out-button">\n' +
    '                    <i class="fa fa-search-minus open-accessibility-icon" aria-hidden="true"></i>\n' +
    '                    <div class="open-accessibility-icon-desc">הקטן</div>\n' +
    '                </div>\n' +
    '                <div class="open-accessibility-menu-button open-accessibility-zoom-in-button">\n' +
    '                    <i class="fa fa-search-plus open-accessibility-icon" aria-hidden="true"></i>\n' +
    '                    <div class="open-accessibility-icon-desc">הגדל</div>\n' +
    '                </div>\n' +
    '                <h4>צבעים</h4>\n' +
    '                <div class="open-accessibility-menu-button open-accessibility-invert-button">\n' +
    '                    <i class="fa fa-desktop open-accessibility-icon" aria-hidden="true"></i>\n' +
    '                    <div class="open-accessibility-icon-desc">היפוך צבעים</div>\n' +
    '                </div>\n' +
    '                <div class="open-accessibility-menu-button open-accessibility-brightness-button">\n' +
    '                    <i class="fa fa-sun-o open-accessibility-icon" aria-hidden="true"></i>\n' +
    '                    <div class="open-accessibility-icon-desc">בהירות</div>\n' +
    '                </div>\n' +
    '                <div class="open-accessibility-menu-button open-accessibility-contrast-button">\n' +
    '                    <i class="fa fa-adjust open-accessibility-icon" aria-hidden="true"></i>\n' +
    '                    <div class="open-accessibility-icon-desc">ניגודיות</div>\n' +
    '                </div>\n' +
    '                <div class="open-accessibility-menu-button open-accessibility-monochrome-button">\n' +
    '                    <i class="fa fa-low-vision open-accessibility-icon" aria-hidden="true"></i>\n' +
    '                    <div class="open-accessibility-icon-desc">גווני אפור</div>\n' +
    '                </div>\n' +
    '                <h4>הדגשות</h4>\n' +
    '                <div class="open-accessibility-menu-button open-accessibility-cursor-button">\n' +
    '                    <i class="fa fa-mouse-pointer open-accessibility-icon" aria-hidden="true"></i>\n' +
    '                    <div class="open-accessibility-icon-desc">עכבר גדול</div>\n' +
    '                </div>\n' +
    '                <div class="open-accessibility-menu-button open-accessibility-highlighted-links-button">\n' +
    '                    <i class="fa fa-link open-accessibility-icon" aria-hidden="true"></i>\n' +
    '                    <div class="open-accessibility-icon-desc">הדגשת קישורים</div>\n' +
    '                </div>\n' +
    '                <div class="open-accessibility-menu-button open-accessibility-highlighted-headers-button">\n' +
    '                    <i class="fa fa-header open-accessibility-icon" aria-hidden="true"></i>\n' +
    '                    <div class="open-accessibility-icon-desc">הדגשת כותרות</div>\n' +
    '                </div>\n' +
    '                <div style="clear: both"></div>\n' +
    '                <hr>\n' +
    '                <div class="open-accessibility-menu-button open-accessibility-reset-button">\n' +
    '                    <i class="fa fa-undo open-accessibility-icon" aria-hidden="true"></i>\n' +
    '                    <div class="open-accessibility-icon-desc">בטל שינויים</div>\n' +
    '                </div>\n' +
    '                <div style="clear: both"></div>\n' +
    '                <div class="open-accessibility-menu-footer">\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>';

var first_run = true;
var LOCAL_STORAGE_OPTIONS_KEY = 'open-accessibility-config';


var UNITS = ['px', 'cm', 'em', 'rem', 'ex', 'in', 'mm', 'pc', 'pt', 'vh', 'vw', 'vmin'];

function getUnit(fontSize) {
    fontSize = fontSize || '';
    return UNITS
        .filter(unit => fontSize.match(new RegExp(unit + '$', 'gi')))
        .pop()
}

function getStyle(elem, prop) {
    return window.getComputedStyle(elem, null).getPropertyValue(prop);
}

function isGoogleChrome() {
    var isChromium = window.chrome;
    var winNav = window.navigator;
    var vendorName = winNav.vendor;
    var isOpera = winNav.userAgent.indexOf("OPR") > -1;
    var isIEedge = winNav.userAgent.indexOf("Edge") > -1;

    return (isChromium !== null && isChromium !== undefined && vendorName === "Google Inc." && isOpera == false && isIEedge == false);
}

function isMobileBrowser() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;
    var product = userAgent.substr(0, 4);
    return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(userAgent) ||
        /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(product);
}

function getUserOptions() {
    var data;

    try {
        data = localStorage.getItem(LOCAL_STORAGE_OPTIONS_KEY);
        data = JSON.parse(data);
    }
    catch (e) {
    }

    if (data && typeof data === "object") {
        return data;
    }
    else {
        return {};
    }
}

function setUserOptions(options) {
    try {
        localStorage.setItem(LOCAL_STORAGE_OPTIONS_KEY, JSON.stringify(options));
    }
    catch (e) {
    }
}

function applyTextZoom(selector, zoom) {
    if (first_run && zoom == 1) return;
    var elements = document.querySelectorAll(selector);

    [].forEach.call(elements, function (element) {
        var originalFontSize = element.getAttribute('data-open-accessibility-text-original');
        if (!originalFontSize) {
            originalFontSize = getStyle(element, 'font-size');
            element.setAttribute('data-open-accessibility-text-original', originalFontSize);
        }

        var units = getUnit(originalFontSize) || '';
        var fontSize = parseFloat(originalFontSize) * zoom;

        element.style['font-size'] = fontSize + units;
    });

}


// -------------------------------------------------
var openAccessibility = function (customOptions) {
    var element = this;

    customOptions = customOptions || {};

    const defaultOptions = {
        isMenuOpened: false,
        highlightedLinks: false,
        isMobileEnabled: true,
        grayscale: 0,
        brightness: 100,
        contrast: 100,
        invert: false,
        maxZoomLevel: 3,
        minZoomLevel: 0.5,
        zoomStep: 0.2,
        zoom: 1,
        cursor: false,
        textSelector: '.open-accessibility-text',
        highlightedHeaders: false,
        position: 'top right'
    };
    console.log(defaultOptions);
    var userOptions = getUserOptions();
    var initialOptions = Object.assign({},defaultOptions, customOptions);

    var options = Object.assign({},initialOptions, userOptions, customOptions);


    if (!options.isMobileEnabled && isMobileBrowser()) {
        console.log('disabling accessibility plugin due to mobile browser');
        return;
    }


    // -------------
    var html = document.querySelector('html');
    var body = document.querySelector('body');
    var menu_html = document.createElement("div");
    menu_html.innerHTML = TEMPLATE;
    body.appendChild(menu_html);


    var container = document.querySelector(".open-accessibility");
    var menu = document.querySelector(".open-accessibility-menu");

    var expandButton = document.querySelector(".open-accessibility-expand-button");
    var closeButton = document.querySelector(".open-accessibility-close-button");
    var invertButton = document.querySelector(".open-accessibility-invert-button");
    var cursorButton = document.querySelector(".open-accessibility-cursor-button");
    var zoomInButton = document.querySelector(".open-accessibility-zoom-in-button");
    var zoomOutButton = document.querySelector(".open-accessibility-zoom-out-button");
    var brightnessButton = document.querySelector(".open-accessibility-brightness-button");
    var monochromeButton = document.querySelector(".open-accessibility-monochrome-button");
    var contrastButton = document.querySelector(".open-accessibility-contrast-button");
    var resetButton = document.querySelector(".open-accessibility-reset-button");
    var cursorWorkaround = document.querySelector(".open-accessibility-cursor-workaround");
    var highlightedLinksButton = document.querySelector(".open-accessibility-highlighted-links-button");
    var highlightedHeadersButton = document.querySelector(".open-accessibility-highlighted-headers-button");


    switch (options.position) {
        case 'top left':
            expandButton.classList.add('pos-top-left');
            break;
        case 'top right':
            expandButton.classList.add('pos-top-right');
            break;
        case 'bottom left':
            expandButton.classList.add('pos-bottom-left');
            break;
        case 'bottom right':
            expandButton.classList.add('pos-bottom-right');
            break;
        case 'static':
            expandButton.classList.add('pos-static');
            break;
    }

    document.querySelector(".open-accessibility-menu-footer").innerHTML = options.footerText;

    // -------------
    // Brightness
    brightnessButton.addEventListener('click', () => {
        options.brightness += 50;

        if (options.brightness > 150) {
            options.brightness = 50;
        }

        apply();
    });

    // -------------
    // Contrast

    contrastButton.addEventListener('click', () => {
        options.contrast += 50;
        if (options.contrast > 150) {
            options.contrast = 50;
        }
        apply();
    });


    // -------------
    // Grayscale

    monochromeButton.addEventListener('click', () => {
        options.grayscale += 100;
        if (options.grayscale > 100) {
            options.grayscale = 0;
        }
        apply();
    });


    // -------------
    // Zoom

    zoomInButton.addEventListener('click', () => {
        options.zoom = Math.min(options.maxZoomLevel, options.zoom + options.zoomStep);
        apply();
    });

    zoomOutButton.addEventListener('click', () => {
        options.zoom = Math.max(options.minZoomLevel, options.zoom - options.zoomStep);
        apply();
    });

    // -------------
    // Invert

    invertButton.addEventListener('click', () => {
        options.invert = !options.invert;
        apply();
    });

    // -------------
    // Cursor

    cursorButton.addEventListener('click', () => {
        options.cursor = !options.cursor;
        apply();
    });

    // -------------
    // Menu

    expandButton.addEventListener('click', (event) => {
        options.isMenuOpened = true;
        apply();
    }, false);

    closeButton.addEventListener('click', () => {
        options.isMenuOpened = false;
        apply();
    });

    highlightedLinksButton.addEventListener('click', () => {
        options.highlightedLinks = !options.highlightedLinks;
        apply();
    });

    highlightedHeadersButton.addEventListener('click', () => {
        options.highlightedHeaders = !options.highlightedHeaders;
        apply();
    });

    // -------------
    // Reset

    resetButton.addEventListener('click', () => {
        options = Object.assign({}, initialOptions);
        options.isMenuOpened = false;
        options.contrast = 100;
        apply();

        location.reload();
    });


    // Click outside of the menu -> close
    document.addEventListener('click', (event) => {
        if (!event.target.closest('.open-accessibility-expand-button')) {
            if (!event.target.closest('.open-accessibility')) {
                if (options.isMenuOpened) {
                    options.isMenuOpened = false;
                    apply();
                }
            }
        }
    });


    //menu.classList.add('open-accessibility-hidden');

    if (customOptions.isMenuOpened) {
        options.isMenuOpened = true;
        //menu.classList.remove('open-accessibility-hidden');
        expandButton.classList.add('open-accessibility-hidden')
    }
    else {
        options.isMenuOpened = false;
    }


    // -------------
    // Mouse cursor workaround

    cursorWorkaround.classList.add('open-accessibility-hidden')

    var googleChrome = isGoogleChrome();
    if (!googleChrome) {

        document.addEventListener('mousemove', function (e) {

            if (!options.cursor) {
                return;
            }
            cursorWorkaround.style.left = e.pageX / options.zoom;
            cursorWorkaround.style.top = e.pageY / options.zoom;
        });
    }


    apply();

    function apply() {

        // ----------------
        // OPEN
        if (options.isMenuOpened) {
            expandButton.classList.add('open-accessibility-hidden');
            //menu.classList.remove('open-accessibility-hidden');
            container.classList.remove("open-accessibility-collapsed");
            container.classList.add("open-accessibility-expanded");
        }
        // CLOSED
        else {
            expandButton.classList.remove('open-accessibility-hidden');
            //menu.classList.add('open-accessibility-hidden');
            container.classList.remove("open-accessibility-expanded");
            container.classList.add("open-accessibility-collapsed");
        }

        // ----------------


        if (options.highlightedLinks) {
            body.classList.add('open-accessibility-highlighted-links');
        } else {
            body.classList.remove('open-accessibility-highlighted-links');
        }

        if (options.highlightedHeaders) {
            body.classList.add('open-accessibility-highlighted-headers');
        } else {
            body.classList.remove('open-accessibility-highlighted-headers');
        }


        // ----------
        // Zoom
        applyTextZoom(options.textSelector, options.zoom);

        //$('.open-accessibility-zoom').css('transform', 'scale(' + options.zoom + ')');

        // ----------
        // Cursor

        if (options.cursor) {
            html.classList.add('open-accessibility-cursor');

            if (!googleChrome) {
                cursorWorkaround.classList.remove('open-accessibility-hidden')
            }
        }
        else {
            if (!first_run) {
                html.classList.remove('open-accessibility-cursor');
                if (!googleChrome) {
                    cursorWorkaround.classList.add('open-accessibility-hidden');
                }
            }
        }

        // TODO: body filter makes position fixed bug - try to find solution
        // Filters



        html.style['filtehtmlr'] = null;
        html.style['-ms-filter'] = null;
        html.style['-moz-filter'] = null;
        html.style['-webkit-filter'] = null;
        html.style['-o-filter'] = null;
        var filters = [];
        if (options.invert != defaultOptions.invert) {
            filters.push('invert(1)');
        }
        if (options.contrast != defaultOptions.contrast)
            filters.push('contrast(' + options.contrast + '%)');

        if (options.brightness != defaultOptions.brightness)
            filters.push('brightness(' + options.brightness + '%)');
        if (options.grayscale != defaultOptions.grayscale)
            filters.push('grayscale(' + options.grayscale + '%)');

        if (filters.length > 0) {
            var filterValue = filters.join(' ');
            html.style['filtehtmlr'] = filterValue;
            html.style['-ms-filter'] = filterValue;
            html.style['-moz-filter'] = filterValue;
            html.style['-webkit-filter'] = filterValue;
            html.style['-o-filter'] = filterValue;
        }
        setUserOptions(options);
        first_run = false;
    }

};



