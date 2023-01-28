// Copyright © 2023 Boian Berberov
// Licensed under the EUPL-1.2 only.
//
// License text: https://joinup.ec.europa.eu/collection/eupl/eupl-text-eupl-12
// SPDX-License-Identifier: EUPL-1.2
//
// ==UserScript==
// @name         MDN Dark
// @description  Userscript for MDN;  NOTE: You need to block cookies for it to work at this time
// @version      0.0.1
// @author       Boian Berberov
// @namespace    https://github.com/bberberov/userweb
// @homepageURL  https://github.com/bberberov/userweb
// @supportURL   https://github.com/bberberov/userweb/issues
// @downloadURL  https://raw.githubusercontent.com/bberberov/userweb/core/mozilla.org/developer/dark.user.js
//
// @match        https://developer.mozilla.org/*
// @noframes
// @grant        none
// @run-at       document-start
// ==/UserScript==

document.documentElement.classList.remove("os-default");
document.documentElement.classList.remove("light");
document.documentElement.classList.add("dark");
