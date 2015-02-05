// ==UserScript==
// @name        bleep.com dance all night
// @namespace   rob@middlerob.com
// @include     https://bleep.com/*
// @version     1
// @description Disable the 60 second pause on bleep.com
// @license     MIT
// @oujs:author middlerob
// @grant       none
// ==/UserScript==

eval(durationChanged.toString().replace('durationChanged', 'fixedDurationChanged').replace(60, 1000000))

$('#jplayer')
  .unbind($.jPlayer.event.timeupdate)
  .bind($.jPlayer.event.timeupdate, fixedDurationChanged)
