// Copyright © 2025 Boian Berberov
// Licensed under the EUPL-1.2 only.
//
// License text: https://joinup.ec.europa.eu/collection/eupl/eupl-text-eupl-12
// SPDX-License-Identifier: EUPL-1.2
//
// ==UserScript==
// @name         GitLab Dark
// @description  Sets the dark mode on GitLab sites
// @version      0.0.1
// @author       Boian Berberov
// @namespace    https://github.com/bberberov/userweb
// @homepageURL  https://github.com/bberberov/userweb
// @supportURL   https://github.com/bberberov/userweb/issues
// @downloadURL  https://raw.githubusercontent.com/bberberov/userweb/core/gitlab.com/dark.user.js
//
// @match       https://framagit.org/*
// @match       https://gitlab.*/*
// @match       https://invent.kde.org/*
// @noframes
// @grant        none
// @run-at       document-start
// ==/UserScript==

if ( document.documentElement.classList.contains('with-header') )
{
	document.documentElement.classList.remove('gl-light');
	document.documentElement.classList.add('gl-dark');
}
