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
s|background-color: #f1f2f3;|background-color: #222; /* Dark */|
s|background-color: #fafafa;|background-color: #222; /* Dark */|
s|background-color: #eee;|background-color: #333; /* Dark */|
s|color: #000;|color: #eed; /* Dark */|
s|color: #666;|color: #ccb; /* Dark */|

# Links
s|color: #00e;|color: #69f; /* Dark */|
$a\a\t{\n\tcolor: #69f;\n}
