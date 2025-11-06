// Copyright © 2024, 2025 Boian Berberov
// Licensed under the EUPL-1.2 only.
//
// License text: https://joinup.ec.europa.eu/collection/eupl/eupl-text-eupl-12
// SPDX-License-Identifier: EUPL-1.2
//
// ==UserScript==
// @name         GitHub No Script
// @description  No JavaScript userscript for GitHub
// @version      0.0.4
// @author       Boian Berberov
// @namespace    https://github.com/bberberov/userweb
// @homepageURL  https://github.com/bberberov/userweb
// @supportURL   https://github.com/bberberov/userweb/issues
// @downloadURL  https://raw.githubusercontent.com/bberberov/userweb/core/github.com/noscript.user.js
//
// @match        https://github.com/*
// @noframes
// @grant        none
// @run-at       document-idle
// ==/UserScript==

const e_include_fragment = document.getElementsByTagName('include-fragment');

for (const element of e_include_fragment)
{
	if ( element.hasAttribute('src') )
	{
		parent = element.parentElement;

		if ( element.hasAttribute('loading') )
		{
			fetch(
				new URL( element.getAttribute('src'), 'https://github.com/' )
			).then(
				(response) => {
					if ( !response.ok ) {
						throw new Error('HTTP error!');
					}

					return response.text();
				}
			).then(
				(text) => {
					parent.insertAdjacentHTML('beforeend', text);
					// parent.remove(element);
				}
			);
		}
	}
}

const e_relative_time = document.getElementsByTagName('relative-time');

for (const element of e_relative_time)
{
	element.setAttribute( 'title', element.getAttribute('datetime').replace('T', '\n').replace('Z', ' UTC') );
}
