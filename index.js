module.exports = {
  rules: {
    "attr-bans": [
      true,
      [
        "align",
        "background",
        "bgcolor",
        "border",
        "frameborder",
        "longdesc",
        "marginwidth",
        "marginheight",
        "scrolling",
        "style",
        "width"
      ]
    ],
    "attr-name-style": [true, "dash"],
    "attr-no-dup": true,
    "attr-no-unsafe-char": true,
    "attr-quote-style": [true, "double"],
    "attr-req-value": true,
    "attr-validate": true,
    "button-req-content": true,
    "class-no-dup": true,
    "doctype-first": "warning",
    "doctype-html5": true,
    "fieldset-contains-legend": true,
    "fig-req-figcaption": true,
    "focusable-tabindex-style": true,
    "head-req-title": true,
    "head-valid-content-model": true,
    "html-req-lang": true,
    "html-valid-content-model": true,
    "id-no-dup": true,
    "img-req-alt": true,
    "img-req-src": true,
    "indent-style": [true, "spaces"],
    "indent-width": [true, 4],
    "input-btn-req-value-or-title": true,
    "input-radio-req-name": true,
    "input-req-label": true,
    "line-max-len": [true, 100],
    "line-no-trailing-whitespace": true,
    "link-req-noopener": true,
    "table-req-caption": true,
    "table-req-header": true,
    "tag-bans": [
      true,
      [
        "acronym",
        "applet",
        "basefont",
        "big",
        "center",
        "dir",
        "font",
        "frame",
        "frameset",
        "isindex",
        "noframes",
        "s",
        "strike",
        "tt",
        "u",
        "b"
      ]
    ],
    "tag-close": true,
    "tag-name-lowercase": true,
    "tag-name-match": true,
    "tag-req-attr": [
      true,
      {
        a: {
          name: "href"
        }
      }
    ],
    "tag-self-close": [true, "always"],
    "title-no-dup": true,
    "title-max-len": [true, 60]
  }
};
