// Copyright © 2025 Boian Berberov
// Licensed under the EUPL-1.2 only.
//
// License text: https://joinup.ec.europa.eu/collection/eupl/eupl-text-eupl-12
// SPDX-License-Identifier: EUPL-1.2
//
// ==UserScript==
// @name         Codeberg Dark
// @description  Sets the dark mode on Codeberg
// @version      0.0.1
// @author       Boian Berberov
// @namespace    https://github.com/bberberov/userweb
// @homepageURL  https://github.com/bberberov/userweb
// @supportURL   https://github.com/bberberov/userweb/issues
// @downloadURL  https://raw.githubusercontent.com/bberberov/userweb/core/codeberg.org/dark.user.js
//
// @match        https://codeberg.org/*
// @noframes
// @grant        none
// @run-at       document-end
// ==/UserScript==

const e_link = document.getElementsByTagName('link');

if ( document.documentElement.hasAttribute('data-theme') )
{
	document.documentElement.setAttribute("data-theme", "codeberg-dark");
}

for ( const element of e_link )
{
	if ( element.hasAttribute('rel') && element.rel === 'stylesheet' && element.href.includes('theme-codeberg-auto.css') )
	{
		let dark_css = element.href.replace('theme-codeberg-auto.css', 'theme-codeberg-dark.css');

		element.href = dark_css;
	}
}
