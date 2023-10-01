// ==UserScript==
// @name         ServeTheHome No Script
// @description  No JavaScript userscript for ServeTheHome
// @version      0.0.2
// @author       Boian Berberov
// @namespace    https://github.com/bberberov/userweb
// @homepageURL  https://github.com/bberberov/userweb
// @supportURL   https://github.com/bberberov/userweb/issues
// @downloadURL  https://raw.githubusercontent.com/bberberov/userweb/core/servethehome.com/noscript.user.js
//
// @match        https://www.servethehome.com/*
// @noframes
// @grant        none
// @run-at       document-end
// ==/UserScript==

const elements = document.getElementsByClassName('td-thumb-css');

for (const element of elements)
{
	element.style.backgroundImage='url(' + element.dataset.imgUrl + ')';
	element.style.opacity='unset';
}
