'use strict';

// ------------------------------------------------------
// TABLE OF CONTENTS
// ------------------------------------------------------
// 1 - GENERAL NOTES
// 2 - GENERAL GUIDE
// 3 - STEP BY STEP
// 4 - COMMON PROBLEMS
// ------------------------------------------------------


// ------------------------------------------------------
// GENERAL NOTES
// ------------------------------------------------------

// BOM or DOM 0 (formally called DOM level 0), consist of 5 main objects/API:

// window
// navigator
// screen
// location
// history

// ------------------------------------------------------
// GENERAL GUIDE
// ------------------------------------------------------


// WINDOW

// NAVIGATOR
var $nav = window.navigator;

// Properties
console.log($nav.appCodeName);   // "Mozilla"
console.log($nav.appName);       // "Netscape"
console.log($nav.appVersion);    // "5.0 (Macintosh)"
console.log($nav.cookieEnabled); // true
console.log($nav.language);      // "pt-BR"
console.log($nav.platform);      // "MacIntel"
console.log($nav.userAgent);     // "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.7; rv:31.0) Gecko/20100101 Firefox/31.0"
console.log($nav.vendor);        // ""


// SCREEN
var $scr = window.screen;

// Properties
console.log($scr.availTop);
console.log($scr.availLeft);
console.log($scr.availHeight);
console.log($scr.availWidth);
console.log($scr.colorDepth);
console.log($scr.height);
console.log($scr.left);
console.log($scr.orientation);
console.log($scr.pixelDepth);
console.log($scr.top);
console.log($scr.width);
console.log($scr.mozEnabled);
console.log($scr.mozBrightness);

// Handlers
console.log($scr.onorientationchange);

// Methods
console.log($scr.lockOrientation);
console.log($scr.unlockOrientation);


// HISTORY
var $hst = window.history;

console.log($hst.length);
console.log($hst.current);      // OBSOLETE! Use Location.href instead.
console.log($hst.next);         // OBSOLETE!
console.log($hst.previous);     // OBSOLETE!
console.log($hst.state);

// Methods

console.log($hst.back());       // Equivalent to "window.history.go(-1);".
console.log($hst.forward());    // Equivalent to "window.history.go(1);".
console.log($hst.go());
console.log($hst.pushState());
console.log($hst.replaceState());

// LOCATION
var $loc = window.location;

console.log($loc.hash);
console.log($loc.host);
console.log($loc.hostname);
console.log($loc.href);
console.log($loc.pathname);
console.log($loc.port);
console.log($loc.protocol);
console.log($loc.search);


// ------------------------------------------------------
// STEP BY STEP
// ------------------------------------------------------


// ------------------------------------------------------
// COMMON PROBLEMS
// ------------------------------------------------------
