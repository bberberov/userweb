// Copyright © 2023, 2024 Boian Berberov
// Licensed under the EUPL-1.2 only.
//
// License text: https://joinup.ec.europa.eu/collection/eupl/eupl-text-eupl-12
// SPDX-License-Identifier: EUPL-1.2
//
// ==UserScript==
// @name         ServeTheHome No Script
// @description  No JavaScript userscript for ServeTheHome
// @version      0.0.6
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

const e_thumb_css   = document.getElementsByClassName('td-thumb-css');
const e_entry_thumb = document.getElementsByClassName('entry-thumb');

for (const element of e_thumb_css)
{
	if ( 'IMG' != element.tagName )
	{
		element.style.backgroundImage = 'url(' + element.dataset.imgUrl + ')';
		element.style.opacity = 'unset';
	}

}
for (const element of e_entry_thumb)
{
	if ( 'IMG' == element.tagName )
	{
		element.src = element.dataset.imgUrl;
	}
}
