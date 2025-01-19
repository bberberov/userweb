// Copyright © 2025 Boian Berberov
// Licensed under the EUPL-1.2 only.
//
// License text: https://joinup.ec.europa.eu/collection/eupl/eupl-text-eupl-12
// SPDX-License-Identifier: EUPL-1.2
//
// ==UserScript==
// @name         Wikimedia Dark
// @description  Sets the dark mode on Wikimedia sites
// @version      0.0.1
// @author       Boian Berberov
// @namespace    https://github.com/bberberov/userweb
// @homepageURL  https://github.com/bberberov/userweb
// @supportURL   https://github.com/bberberov/userweb/issues
// @downloadURL  https://raw.githubusercontent.com/bberberov/userweb/core/Wikimedia/dark.user.js
//
// @match        https://*.wikipedia.org/*
// @noframes
// @grant        none
// @run-at       document-start
// ==/UserScript==

document.documentElement.classList.remove('skin-theme-clientpref-day');
document.documentElement.classList.add('skin-theme-clientpref-night');
