# Copyright © 2023 Boian Berberov
# Licensed under the EUPL-1.2 only.
#
# License text: https://joinup.ec.europa.eu/collection/eupl/eupl-text-eupl-12
# SPDX-License-Identifier: EUPL-1.2

# Header/Footer
1i\/* Semi-auto */
$a\\n/* Custom */

# Standardize property
s|background:|background-color:|

# Backgrounds and text
s|background-color: #fff;|background-color: #111; /* Dark */|
s|background-color: #e5e5e5;|background-color: #222; /* Dark */|
s|color: #212121;|color: #eed; /* Dark */|
s|color: #757575;|color: #bba; /* Dark */|

# Packages
s|background-color: #eff4f9;|background-color: #333; /* Dark */|
s|color: #444;|color: #aa9; /* Dark */|

# Syntax Highlighting
s|background-color: #f5f5f5;|background-color: #333; /* Dark */|

# Input
$a\input[type="search"]\t{\n\tfilter: invert(75%);\n}
