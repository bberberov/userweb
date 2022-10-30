// ==UserScript==
// @name         StackExchange Dark
// @description  Userscript for StackExchange
// @version      0.0.1
// @author       Boian Berberov
// @namespace    https://github.com/bberberov/userweb
// @homepageURL  https://github.com/bberberov/userweb
// @supportURL   https://github.com/bberberov/userweb/issues
// @downloadURL  https://raw.githubusercontent.com/bberberov/userweb/core/StackExchange/dark.user.js
//
// @match        https://askubuntu.com/*
// @match        https://mathoverflow.net/*
// @match        https://serverfault.com/*
// @match        https://*.stackapps.com/*
// @match        https://*.stackexchange.com/*
// @match        https://stackoverflow.com/*
// @match        https://superuser.com/*
// @noframes
// @grant        none
// @run-at       document-end
// ==/UserScript==

document.body.classList.add("theme-dark");
