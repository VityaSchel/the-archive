(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 9536:
/***/ ((module) => {

// Exports
module.exports = {
	"button": "styles_button__4NrmU"
};


/***/ }),

/***/ 6208:
/***/ ((module) => {

// Exports
module.exports = {
	"main": "Home_main__OVLM4",
	"topBlock": "Home_topBlock__cbG__",
	"info": "Home_info__lqWPY",
	"heading": "Home_heading__5g6vc",
	"subheading": "Home_subheading__4dx1l",
	"video": "Home_video__S9oWh",
	"cards": "Home_cards__RodiR",
	"pageCard": "Home_pageCard__1EEIi",
	"content": "Home_content__WcTpR",
	"title": "Home_title__q0Qg4",
	"description": "Home_description__JhekB",
	"lastUpdate": "Home_lastUpdate__HY_zE",
	"button": "Home_button__hQmsM",
	"image": "Home_image__GHKw_"
};


/***/ }),

/***/ 3050:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(580);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);
// EXTERNAL MODULE: ./components/Header/index.tsx + 3 modules
var Header = __webpack_require__(7948);
// EXTERNAL MODULE: ./components/Head/index.tsx
var Head = __webpack_require__(1146);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./styles/Home.module.scss
var Home_module = __webpack_require__(6208);
var Home_module_default = /*#__PURE__*/__webpack_require__.n(Home_module);
// EXTERNAL MODULE: external "next-i18next/serverSideTranslations"
var serverSideTranslations_ = __webpack_require__(5460);
// EXTERNAL MODULE: external "@mui/material/Typography"
var Typography_ = __webpack_require__(7163);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(1377);
// EXTERNAL MODULE: ./components/Button/styles.module.scss
var styles_module = __webpack_require__(9536);
var styles_module_default = /*#__PURE__*/__webpack_require__.n(styles_module);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
;// CONCATENATED MODULE: ./components/Button/index.tsx






ButtonWithArrow.propTypes = {
    children: (external_prop_types_default()).node
};
function ButtonWithArrow({ className , ...props }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Button, {
        className: external_classnames_default()([
            (styles_module_default()).button,
            className
        ]),
        ...props,
        children: [
            props.children,
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                height: "14",
                viewBox: "0 0 25 24",
                xmlns: "http://www.w3.org/2000/svg",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M24.0607 13.0607C24.6464 12.4749 24.6464 11.5251 24.0607 10.9393L14.5147 1.3934C13.9289 0.807613 12.9792 0.807613 12.3934 1.3934C11.8076 1.97919 11.8076 2.92893 12.3934 3.51472L20.8787 12L12.3934 20.4853C11.8076 21.0711 11.8076 22.0208 12.3934 22.6066C12.9792 23.1924 13.9289 23.1924 14.5147 22.6066L24.0607 13.0607ZM22 13.5L23 13.5L23 10.5L22 10.5L22 13.5Z",
                        fill: "currentColor"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("line", {
                        x1: "22.5",
                        y1: "12",
                        x2: "1.5",
                        y2: "12",
                        stroke: "currentColor",
                        strokeWidth: "3",
                        strokeLinecap: "round"
                    })
                ]
            })
        ]
    });
};

// EXTERNAL MODULE: external "@mui/material/Button"
var Button_ = __webpack_require__(3819);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);
// EXTERNAL MODULE: external "date-fns"
var external_date_fns_ = __webpack_require__(4146);
// EXTERNAL MODULE: external "date-fns/locale"
var locale_ = __webpack_require__(5564);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./pages/index.tsx















const Home = ()=>{
    const { t  } = (0,external_next_i18next_.useTranslation)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
        className: (Home_module_default()).main,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Head/* default */.Z, {
                title: t("pages.home.title")
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Header/* default */.Z, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(TopBlock, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Home_module_default()).cards,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(PageCard, {
                        translationCode: "youtube",
                        img: "https://ik.imagekit.io/hloth/the-archive-static/youtube.png?tr=n-landing_thumb",
                        lastUpdate: new Date("2022.04.20")
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(PageCard, {
                        translationCode: "instagram",
                        img: "https://ik.imagekit.io/hloth/the-archive-static/instagram.png?tr=n-landing_thumb"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(PageCard, {
                        translationCode: "twitter",
                        img: "https://ik.imagekit.io/hloth/the-archive-static/twitter.png?tr=n-landing_thumb"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(PageCard, {
                        translationCode: "github",
                        img: "https://ik.imagekit.io/hloth/the-archive-static/github.png?tr=n-landing_thumb"
                    })
                ]
            })
        ]
    });
};
function TopBlock() {
    const { t  } = (0,external_next_i18next_.useTranslation)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Home_module_default()).topBlock,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Home_module_default()).info,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                        variant: "h1",
                        className: (Home_module_default()).heading,
                        children: t("pages.home.heading")
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                        variant: "h2",
                        className: (Home_module_default()).subheading,
                        children: t("pages.home.subheading")
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(ButtonWithArrow, {
                        className: (Home_module_default()).button,
                        variant: "contained",
                        disabled: true,
                        children: t("pages.home.read_article")
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (Home_module_default()).video,
                children: /*#__PURE__*/ jsx_runtime_.jsx("video", {
                    muted: true,
                    autoPlay: true,
                    loop: true,
                    src: "https://ik.imagekit.io/hloth/the-archive-static/thinking_emoji.webm"
                })
            })
        ]
    });
}
PageCard.propTypes = {
    translationCode: (external_prop_types_default()).string.isRequired,
    img: (external_prop_types_default()).string.isRequired,
    lastUpdate: external_prop_types_default().instanceOf(Date)
};
function PageCard(props) {
    const { t , i18n  } = (0,external_next_i18next_.useTranslation)();
    const router = (0,router_.useRouter)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Card, {
        className: (Home_module_default()).pageCard,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Home_module_default()).content,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                        variant: "h3",
                        className: (Home_module_default()).title,
                        children: t("pages.home.cards." + props.translationCode + ".title")
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                        variant: "h4",
                        className: (Home_module_default()).description,
                        children: t("pages.home.cards." + props.translationCode + ".description")
                    }),
                    props.lastUpdate && /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Typography_default()), {
                        variant: "caption",
                        className: (Home_module_default()).lastUpdate,
                        children: [
                            t("pages.home.cards.last_update"),
                            ": ",
                            (0,external_date_fns_.format)(props.lastUpdate, "d MMMM yyyy", {
                                locale: i18n.language === "ru" ? locale_.ru : locale_.enUS
                            })
                        ]
                    }),
                    props.lastUpdate ? /*#__PURE__*/ jsx_runtime_.jsx(ButtonWithArrow, {
                        className: (Home_module_default()).button,
                        variant: "contained",
                        onClick: ()=>router.push(props.translationCode, undefined, {
                                locale: i18n.language
                            })
                        ,
                        children: t("pages.home.cards." + props.translationCode + ".button")
                    }) : /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                        className: (Home_module_default()).button,
                        variant: "contained",
                        disabled: true,
                        children: t("pages.home.cards." + props.translationCode + ".button")
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (Home_module_default()).image,
                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    src: props.img,
                    alt: t("pages.home.cards." + props.translationCode + ".image_alt"),
                    // height={200}
                    layout: "fill",
                    objectFit: "contain",
                    objectPosition: "right"
                })
            })
        ]
    });
}
const getStaticProps = async ({ locale  })=>({
        props: {
            ...await (0,serverSideTranslations_.serverSideTranslations)(locale, [
                "common"
            ])
        }
    })
;
/* harmony default export */ const pages = (Home);


/***/ }),

/***/ 5692:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material");

/***/ }),

/***/ 3882:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/AppBar");

/***/ }),

/***/ 2120:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Avatar");

/***/ }),

/***/ 3819:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Button");

/***/ }),

/***/ 8611:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Dialog");

/***/ }),

/***/ 2468:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/DialogTitle");

/***/ }),

/***/ 6262:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Grow");

/***/ }),

/***/ 4192:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/List");

/***/ }),

/***/ 834:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/ListItem");

/***/ }),

/***/ 2101:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/ListItemAvatar");

/***/ }),

/***/ 8315:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/ListItemText");

/***/ }),

/***/ 1431:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Toolbar");

/***/ }),

/***/ 7163:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Typography");

/***/ }),

/***/ 2313:
/***/ ((module) => {

"use strict";
module.exports = require("@n8tb1t/use-scroll-position");

/***/ }),

/***/ 9003:
/***/ ((module) => {

"use strict";
module.exports = require("classnames");

/***/ }),

/***/ 4146:
/***/ ((module) => {

"use strict";
module.exports = require("date-fns");

/***/ }),

/***/ 5564:
/***/ ((module) => {

"use strict";
module.exports = require("date-fns/locale");

/***/ }),

/***/ 1377:
/***/ ((module) => {

"use strict";
module.exports = require("next-i18next");

/***/ }),

/***/ 5460:
/***/ ((module) => {

"use strict";
module.exports = require("next-i18next/serverSideTranslations");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 3539:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/detect-domain-locale.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 580:
/***/ ((module) => {

"use strict";
module.exports = require("prop-types");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 4041:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/md");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [505,61,948,146], () => (__webpack_exec__(3050)));
module.exports = __webpack_exports__;

})();