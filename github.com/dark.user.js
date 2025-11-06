// Copyright © 2022, 2023, 2025 Boian Berberov
// Licensed under the EUPL-1.2 only.
//
// License text: https://joinup.ec.europa.eu/collection/eupl/eupl-text-eupl-12
// SPDX-License-Identifier: EUPL-1.2
//
// ==UserScript==
// @name         GitHub Dark
// @description  Sets the dark mode on GitHub sites
// @version      0.0.7
// @author       Boian Berberov
// @namespace    https://github.com/bberberov/userweb
// @homepageURL  https://github.com/bberberov/userweb
// @supportURL   https://github.com/bberberov/userweb/issues
// @downloadURL  https://raw.githubusercontent.com/bberberov/userweb/core/github.com/dark.user.js
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
