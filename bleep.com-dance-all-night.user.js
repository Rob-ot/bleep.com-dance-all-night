// ==UserScript==
// @name        bleep.com dance all night
// @namespace   rob@middlerob.com
// @include     https://bleep.com/*
// @version     2
// @description Disable the 60 second pause on bleep.com
// @license     MIT
// @oujs:author middlerob
// @grant       none
// ==/UserScript==

setInterval(function() {
  window.playableTime = 1000000
}, 2000)
