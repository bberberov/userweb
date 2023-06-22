// ==UserScript==
// @name         GitHub Dark - At start
// @description  Sets the dark mode on GitHub sites, at start of page load
// @version      0.0.4
// @author       Boian Berberov
// @namespace    https://github.com/bberberov/userweb
// @homepageURL  https://github.com/bberberov/userweb
// @supportURL   https://github.com/bberberov/userweb/issues
// @downloadURL  https://raw.githubusercontent.com/bberberov/userweb/core/github.com/dark-start.user.js
//
// @match        https://*.github.com/*
// @noframes
// @grant        none
// @run-at       document-start
// ==/UserScript==

if ( document.documentElement.hasAttribute('data-color-mode') )
{
	document.documentElement.setAttribute("data-color-mode", "dark");
}
