// ==UserScript==
// @name         GitHub Dark - Deprecated
// @description  Userscript for GitHub
// @version      0.0.3
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
