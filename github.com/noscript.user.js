// ==UserScript==
// @name         GitHub No Script
// @description  No JavaScript userscript for GitHub
// @version      0.0.2
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
