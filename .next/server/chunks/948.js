exports.id = 948;
exports.ids = [948];
exports.modules = {

/***/ 8783:
/***/ ((module) => {

// Exports
module.exports = {
	"backgroundPlaceholder": "styles_backgroundPlaceholder__3tchU",
	"header": "styles_header__ZqFQE",
	"noScroll": "styles_noScroll__mx8Ce",
	"toolbar": "styles_toolbar__Psd6H",
	"logo": "styles_logo___sSGJ",
	"headline": "styles_headline__Y3qp0",
	"bottomLine": "styles_bottomLine__qHX25",
	"divider": "styles_divider__eohVS",
	"link": "styles_link__idchA",
	"languages": "styles_languages___UGRP"
};


/***/ }),

/***/ 7948:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Header)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(580);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);
// EXTERNAL MODULE: ./components/Header/styles.module.scss
var styles_module = __webpack_require__(8783);
var styles_module_default = /*#__PURE__*/__webpack_require__.n(styles_module);
// EXTERNAL MODULE: external "@mui/material/AppBar"
var AppBar_ = __webpack_require__(3882);
var AppBar_default = /*#__PURE__*/__webpack_require__.n(AppBar_);
// EXTERNAL MODULE: external "@mui/material/Toolbar"
var Toolbar_ = __webpack_require__(1431);
var Toolbar_default = /*#__PURE__*/__webpack_require__.n(Toolbar_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(1377);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: external "@n8tb1t/use-scroll-position"
var use_scroll_position_ = __webpack_require__(2313);
// EXTERNAL MODULE: external "@mui/material/Button"
var Button_ = __webpack_require__(3819);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);
// EXTERNAL MODULE: external "react-icons/md"
var md_ = __webpack_require__(4041);
// EXTERNAL MODULE: external "@mui/material/Typography"
var Typography_ = __webpack_require__(7163);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);
// EXTERNAL MODULE: external "@mui/material/Dialog"
var Dialog_ = __webpack_require__(8611);
var Dialog_default = /*#__PURE__*/__webpack_require__.n(Dialog_);
// EXTERNAL MODULE: external "@mui/material/DialogTitle"
var DialogTitle_ = __webpack_require__(2468);
var DialogTitle_default = /*#__PURE__*/__webpack_require__.n(DialogTitle_);
// EXTERNAL MODULE: external "@mui/material/Grow"
var Grow_ = __webpack_require__(6262);
var Grow_default = /*#__PURE__*/__webpack_require__.n(Grow_);
// EXTERNAL MODULE: external "@mui/material/List"
var List_ = __webpack_require__(4192);
var List_default = /*#__PURE__*/__webpack_require__.n(List_);
// EXTERNAL MODULE: external "@mui/material/ListItem"
var ListItem_ = __webpack_require__(834);
var ListItem_default = /*#__PURE__*/__webpack_require__.n(ListItem_);
// EXTERNAL MODULE: external "@mui/material/ListItemAvatar"
var ListItemAvatar_ = __webpack_require__(2101);
var ListItemAvatar_default = /*#__PURE__*/__webpack_require__.n(ListItemAvatar_);
// EXTERNAL MODULE: external "@mui/material/Avatar"
var Avatar_ = __webpack_require__(2120);
var Avatar_default = /*#__PURE__*/__webpack_require__.n(Avatar_);
// EXTERNAL MODULE: external "@mui/material/ListItemText"
var ListItemText_ = __webpack_require__(8315);
var ListItemText_default = /*#__PURE__*/__webpack_require__.n(ListItemText_);
;// CONCATENATED MODULE: ./public/flags/ru.png
/* harmony default export */ const ru = ({"src":"/_next/static/media/ru.ecfd30ab.png","height":160,"width":160,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA3klEQVR42mMgCJYuXSkUnVDL4xlcxXP8xBmNp0+ehDx+9KD6woVzTceOHTNmOHBgX++9u7e+fHj/5vnPH9/+//zx4/+zpy/+nz938f+pkydnMJTWzJy4cNne/+u2Xvg/ZfG5/zGNR38zhK//zuAy/b997IweBgaGwl4Ghu7/DExzv5kYLvpd4Tb7X59Dy/8q9YL/cVplfQyzNNRnrTdz+n/Q1f//BR/X/1e8jP4ft+J7v16d4f9KQ8mJDC2SDKYLVBha1xmw1K8wU41qNrQyYJDyEWEQs5EqVNGWJuhLALMyaBLof2BzAAAAAElFTkSuQmCC"});
;// CONCATENATED MODULE: ./public/flags/en.png
/* harmony default export */ const en = ({"src":"/_next/static/media/en.1229167d.png","height":160,"width":160,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA4UlEQVR42mMgCAJye4UK26bzmE9fx7OsforG9c7+kPO9k6r31Tc3bS8qN2bwSWjvTSqb/yWgfsPztdM2/f+4Zev/B2s3/D81Z97//ZOmzGCwjumY6JO/8L9yxZb/q+fs+f9r//7fTzZv+3524eL/h2bO7mGY2zW1d/Xc9f93rDn47f7Ow7+/793/7/nW7f/PL17y/8isOX0MmzraZ11etPD/sw3r/7/csOn/4zXr/1+ev/D93v4J/7d3905k6I6JN11eXtW6pbGtfmNFTdR07wADBgYGESsGBqkGK3tpgr4EAOnGdJYOTdMDAAAAAElFTkSuQmCC"});
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./components/Languages/index.tsx
















const Transition = /*#__PURE__*/ external_react_.forwardRef(function Transition(props, ref) {
    return /*#__PURE__*/ jsx_runtime_.jsx((Grow_default()), {
        ref: ref,
        ...props
    });
});
LanguagesDialog.propTypes = {
    visible: (external_prop_types_default()).bool,
    setOpen: (external_prop_types_default()).func
};
function LanguagesDialog(props) {
    const { t  } = (0,external_next_i18next_.useTranslation)();
    const router = (0,router_.useRouter)();
    const handleClose = ()=>{
        props.setOpen(false);
    };
    const setLanguage = (lang)=>()=>{
            router.push(router.pathname, undefined, {
                locale: lang
            });
            handleClose();
        }
    ;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Dialog_default()), {
        open: props.visible,
        TransitionComponent: Transition,
        keepMounted: true,
        onClose: handleClose,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((DialogTitle_default()), {
                children: t("header.languages.choose_language")
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((List_default()), {
                sx: {
                    pt: 0
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((ListItem_default()), {
                        button: true,
                        onClick: setLanguage("en"),
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((ListItemAvatar_default()), {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((Avatar_default()), {
                                    sx: {
                                        padding: 1
                                    },
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        src: en,
                                        width: 100,
                                        height: 100,
                                        alt: "En"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((ListItemText_default()), {
                                primary: t("header.languages.english"),
                                secondary: t("header.languages.english_warning"),
                                secondaryTypographyProps: {
                                    sx: {
                                        color: "#9c9c9c",
                                        maxWidth: 280
                                    }
                                }
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((ListItem_default()), {
                        button: true,
                        onClick: setLanguage("ru"),
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((ListItemAvatar_default()), {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((Avatar_default()), {
                                    sx: {
                                        padding: 1
                                    },
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        src: ru,
                                        width: 100,
                                        height: 100,
                                        alt: "Ru"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((ListItemText_default()), {
                                primary: t("header.languages.russian")
                            })
                        ]
                    })
                ]
            })
        ]
    });
};

;// CONCATENATED MODULE: ./components/Header/index.tsx















function Header(props) {
    const router = (0,router_.useRouter)();
    const { t  } = (0,external_next_i18next_.useTranslation)("common");
    const [noScroll, setNoScroll] = external_react_default().useState(true);
    const [languagesDialogVisible, setLanguagesDialogVisible] = external_react_default().useState(false);
    (0,use_scroll_position_.useScrollPosition)(({ currPos  })=>{
        setNoScroll(currPos.y === 0);
    }, [
        setNoScroll
    ]);
    external_react_default().useEffect(()=>{
        if (true) {
            setNoScroll(window.scrollY === 0);
        }
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            props.placeholder && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (styles_module_default()).backgroundPlaceholder
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((AppBar_default()), {
                position: "fixed",
                className: external_classnames_default()((styles_module_default()).header, {
                    [(styles_module_default()).noScroll]: noScroll
                }),
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Toolbar_default()), {
                    className: (styles_module_default()).toolbar,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/",
                            locale: router.locale,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                className: (styles_module_default()).logo,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: (styles_module_default()).headline,
                                        children: t("header.headline")
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: (styles_module_default()).bottomLine,
                                        children: t("header.bottom_line")
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: (styles_module_default()).divider
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Item, {
                            href: "youtube",
                            children: t("header.links.videos")
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Item, {
                            href: "instagram",
                            disabled: true,
                            children: t("header.links.photos")
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Item, {
                            href: "twitter",
                            disabled: true,
                            children: t("header.links.tweets")
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Item, {
                            href: "github",
                            disabled: true,
                            children: t("header.links.repositories")
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Button_default()), {
                            disableRipple: true,
                            className: (styles_module_default()).languages,
                            onClick: ()=>setLanguagesDialogVisible(true)
                            ,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(md_.MdLanguage, {}),
                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    sx: {
                                        textTransform: "none",
                                        marginLeft: 1
                                    },
                                    children: t("header.languages.button")
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(LanguagesDialog, {
                            visible: languagesDialogVisible,
                            setOpen: setLanguagesDialogVisible
                        })
                    ]
                })
            })
        ]
    });
};
Item.propTypes = {
    href: (external_prop_types_default()).string.isRequired,
    children: (external_prop_types_default()).node.isRequired,
    disabled: (external_prop_types_default()).boolean
};
Header.defaultProps = {
    placeholder: true
};
function Item(props) {
    const router = (0,router_.useRouter)();
    return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
        href: "/" + props.href,
        locale: router.locale,
        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
            className: (styles_module_default()).link,
            disabled: props.disabled,
            children: props.children
        })
    });
}


/***/ })

};
;