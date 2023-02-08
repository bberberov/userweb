/* ==UserStyle==
@name           Google Git Dark
@description    Userstyle for Google Git (semi-automated)
@version        0.0.1
@author         Boian Berberov (https://github.com/bberberov)
@license        EUPL-1.2
@namespace      https://github.com/bberberov/userweb
@homepageURL    https://github.com/bberberov/userweb
@supportURL     https://github.com/bberberov/userweb/issues
@updateURL      https://raw.githubusercontent.com/bberberov/userweb/core/googlesource.com/dark.user.css
@preprocessor   uso
==/UserStyle== */

@-moz-document
	domain("googlesource.com")
{
	/* Semi-auto */
	.u-sha1 {
		background-color: #222; /* Dark */
		color: #eed; /* Dark */
	}
	.u-lineNum {
		color: #ccb; /* Dark */
	}
	.Site {
		background-color: #111; /* Dark */
		color: #eed; /* Dark */
	}
	.Site-header, .Site-footer {
		background-color: #333; /* Dark */
	}
	.Site-header--withNavbar {
		background-color: #111; /* Dark */
	}
	.Header-anchor {
		color: #ccb; /* Dark */
	}
	.Header-nav {
		background-color: #333; /* Dark */
	}
	.Header-menuItem {
		color: #69f; /* Dark */
	}
	.Header-menuItem--noAction {
		color: inherit;
	}
	.Breadcrumbs-crumb {
		color: #69f; /* Dark */
	}
	.Breadcrumbs-crumb:last-child {
		color: #eed; /* Dark */
	}
	.Footer {
		color: #ccb; /* Dark */
	}
	.RepoList-item:hover {
		background-color: #333; /* Dark */
	}
	.RepoList-item--header:hover {
		background-color: #111; /* Dark */
	}
	.RepoList-itemDescription {
		color: #eed; /* Dark */
	}
	.RepoMirroredFrom {
		color: #ccb; /* Dark */
	}
	.CloneRepo {
		background-color: #333; /* Dark */
	}
	.CommitLog-item--oneline:hover {
		background-color: #333; /* Dark */
	}
	.CommitLog-time {
		color: #ccb; /* Dark */
	}
	.CommitLog-branchLabel {
		color: #dd4b39;
	}
	.CommitLog-tagLabel {
		color: #093;
	}
	.MetadataMessage {
		background-color: #222; /* Dark */
		color: #eed; /* Dark */
	}
	.DiffTree-action--add {
		color: #060;
	}
	.DiffTree-action--delete {
		color: #600;
	}
	.DiffTree-action--rename, .DiffTree-action--copy {
		color: #006;
	}
	.FileList-item:hover {
		background-color: #333; /* Dark */
	}
	.FileContents-lineNum::before {
		color: #aaa;
	}
	.FileContents-lineContents:target {
		background-color: #cfd8dc;
	}
	.InlineReadme-path {
		color: #ccb; /* Dark */
	}
	.Blame-region--bg1 {
		background-color: #111; /* Dark */
	}
	.Blame-region--bg2 {
		background-color: #222; /* Dark */
	}
	.Diff-fileIndex {
		color: #444;
	}
	.Diff-hunk {
		color: #00c;
	}
	.Diff-delete {
		color: #c00;
	}
	.Diff-insert {
		color: #080;
	}

	/* Custom */
	a	{
		color: #69f;
	}
}
