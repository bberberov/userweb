/* ==UserStyle==
@name           Google Git Desktop
@description    Userstyle for Google Git
@version        0.0.1
@author         Boian Berberov (https://github.com/bberberov)
@license        EUPL-1.2
@namespace      https://github.com/bberberov/userweb
@homepageURL    https://github.com/bberberov/userweb
@supportURL     https://github.com/bberberov/userweb/issues
@updateURL      https://raw.githubusercontent.com/bberberov/userweb/core/googlesource.com/desktop.user.css
@preprocessor   uso
==/UserStyle== */

@-moz-document
	domain("googlesource.com")
{
	.Site	{	line-height: 1.2;	}

	.Site-content,
	.Header,
	.Footer
	{	padding: 0.25em 1em;	}

	.FileContents-lineContents,
	.Blame-lineContent
	{	line-height: 1.2;	}

	.FileList-item::before {	top: unset;	}
}
