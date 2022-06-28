exports.id = 346;
exports.ids = [346];
exports.modules = {

/***/ 621:
/***/ ((module) => {

// Exports
module.exports = {
	"video": "styles_video__ALeNC",
	"horizontal": "styles_horizontal__qZJDV",
	"meta": "styles_meta__dH41Y",
	"title": "styles_title__NTUJ4",
	"thumbnail": "styles_thumbnail__8Q6zZ",
	"thumbnailSkeleton": "styles_thumbnailSkeleton__FdGcX",
	"thumbnailImage": "styles_thumbnailImage__Hq5fo",
	"drafts": "styles_drafts__B8WVx",
	"metadata": "styles_metadata__DHSUQ",
	"fileLost": "styles_fileLost__sIztU",
	"heading": "styles_heading__hU438",
	"description": "styles_description__AYz_u"
};


/***/ }),

/***/ 9346:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Video)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(621);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7163);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3884);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_8__);










Video.propTypes = {
    title: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired),
    views: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([
        (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
        (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number)
    ]),
    date: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired),
    codeName: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired),
    horizontal: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
    drafts: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
    lost: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
    thumbnail: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};
function Video(props) {
    const { t , i18n  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
        href: "/youtube/" + props.codeName,
        locale: i18n.language,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
            className: classnames__WEBPACK_IMPORTED_MODULE_7___default()((_styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default().video), {
                [(_styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default().horizontal)]: props.horizontal
            }),
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default().thumbnail),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Skeleton, {
                            variant: "rectangular",
                            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default().thumbnailSkeleton)
                        }),
                        props.lost ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(VideoFileLost, {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_8___default()), {
                            src: props.thumbnail,
                            alt: t(""),
                            layout: "fill",
                            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default().thumbnailImage)
                        }),
                        props.drafts && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default().drafts),
                            children: t("pages.youtube.video.draft")
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default().meta),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4___default()), {
                            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default().title),
                            children: props.title
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4___default()), {
                            variant: "caption",
                            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default().metadata),
                            children: [
                                props.views !== null && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                    children: [
                                        props.views,
                                        " ",
                                        (0,_components_utils__WEBPACK_IMPORTED_MODULE_5__/* .pluralize */ ._6)(props.views, t("pages.youtube.pages.videos.item.views")),
                                        "\xa0\u2022\xa0"
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    children: (0,_components_utils__WEBPACK_IMPORTED_MODULE_5__/* .translateDate */ .pv)(i18n.language, props.date)
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
};
function VideoFileLost() {
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default().fileLost),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default().heading),
                children: t("pages.youtube.video.file_lost.heading")
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default().description),
                children: t("pages.youtube.video.file_lost.description")
            })
        ]
    });
}


/***/ }),

/***/ 3884:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AJ": () => (/* binding */ getThumbnailURL),
/* harmony export */   "RZ": () => (/* binding */ formatText),
/* harmony export */   "_6": () => (/* binding */ pluralize),
/* harmony export */   "pv": () => (/* binding */ translateDate)
/* harmony export */ });
/* unused harmony export linkify */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var plural_ru__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4634);
/* harmony import */ var plural_ru__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(plural_ru__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4146);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var date_fns_locale__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5564);
/* harmony import */ var date_fns_locale__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(date_fns_locale__WEBPACK_IMPORTED_MODULE_5__);






const pluralize = (number, str)=>{
    if (typeof number === "string") number = Number(number.replace(/^[^0-9]+/, ""));
    try {
        const translation = JSON.parse(str);
        if (Array.isArray(translation)) {
            return plural_ru__WEBPACK_IMPORTED_MODULE_2___default()(number, translation[0], translation[1], translation[2]);
        } else {
            return str;
        }
    } catch (e) {
        return str;
    }
};
function linkify(text) {
    const regex = /https:\/\/[^ \n]+/g;
    const matches = Array.from(text.matchAll(regex), (m)=>m[0]
    );
    const textFragments = text.split(regex);
    return textFragments.reduce((prev, cur, i, arr)=>i !== arr.length - 1 ? prev.concat(cur, /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
            href: matches[i],
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                style: {
                    color: "rgb(62, 166, 255)"
                },
                children: matches[i]
            })
        })) : prev.concat(cur)
    , []);
}
function formatText(text) {
    return linkify(text).map((m)=>{
        if (typeof m === "string") {
            return m.split("\n").reduce((prev, cur, i, arr)=>i !== arr.length - 1 ? prev.concat(cur, /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {})) : prev.concat(cur)
            , []);
        } else {
            return [
                m
            ];
        }
    }).reduce((prev, cur)=>prev.concat(cur)
    , []);
}
function translateDate(language, date) {
    const formatDate = (template, intlOptions)=>{
        const uploadDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_4__.parse)(date, template, new Date(), {
            locale: date_fns_locale__WEBPACK_IMPORTED_MODULE_5__.ru
        });
        // return format(uploadDate, template, { locale: i18n.language === 'ru' ? ru : en })
        return Intl.DateTimeFormat(language, intlOptions).format(uploadDate);
    };
    if (date.match(/^\d+ [а-я]+ \d+$/)) {
        return formatDate("dd MMMM yyyy", {
            year: "numeric",
            month: "long",
            day: "numeric"
        });
    } else if (date.match(/^[а-я]+ \d+$/)) {
        return formatDate("MMMM yyyy", {
            year: "numeric",
            month: "long"
        });
    } else {
        return date;
    }
}
function getThumbnailURL(thumbnail, fallbackFilename) {
    return `https://ik.imagekit.io/hloth/the-archive-static/thumbnails/${thumbnail ?? fallbackFilename.replace(/(\.mp4|\.m4v)$/, "") + ".png"}`;
}


/***/ })

};
;