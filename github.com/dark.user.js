// ==UserScript==
// @name         GitHub Dark
// @description  Userscript for GitHub
// @version      0.0.1
// @author       Boian Berberov
// @namespace    https://github.com/bberberov/userweb
// @homepageURL  https://github.com/bberberov/userweb
// @supportURL   https://github.com/bberberov/userweb/issues
// @downloadURL  https://raw.githubusercontent.com/bberberov/userweb/master/github.com/dark.user.js
//
// @match        https://*.github.com/*
// @noframes
// @grant        none
// @run-at       document-start
// ==/UserScript==

document.documentElement.setAttribute("data-dark-theme", "dark");
document.documentElement.setAttribute("data-color-mode", "dark");
