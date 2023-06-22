// ==UserScript==
// @name         GitHub Dark - At end
// @description  Sets the dark mode on GitHub sites, at end of page load
// @version      0.0.1
// @author       Boian Berberov
// @namespace    https://github.com/bberberov/userweb
// @homepageURL  https://github.com/bberberov/userweb
// @supportURL   https://github.com/bberberov/userweb/issues
// @downloadURL  https://raw.githubusercontent.com/bberberov/userweb/core/github.com/dark-end.user.js
//
// @match        https://*.github.com/*
// @noframes
// @grant        none
// @run-at       document-end
// ==/UserScript==

if ( document.body.hasAttribute('data-color-mode') )
{
	document.body.setAttribute("data-color-mode", "dark");
}
