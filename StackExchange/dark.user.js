// Copyright © 2022, 2023 Boian Berberov
// Licensed under the EUPL-1.2 only.
//
// License text: https://joinup.ec.europa.eu/collection/eupl/eupl-text-eupl-12
// SPDX-License-Identifier: EUPL-1.2
//
// ==UserScript==
// @name         StackExchange Dark
// @description  Userscript for StackExchange
// @version      0.0.3
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

document.body.classList.remove("unified-theme");
document.body.classList.add("theme-dark");

if (
	   document.documentURI.startsWith("https://unix.stackexchange.com/")
	|| document.documentURI.startsWith("https://askubuntu.com/")
)
{
	document.body.style.backgroundImage = "none";
}
