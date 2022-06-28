(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 9862:
/***/ ((module) => {

// Exports
module.exports = {
	"app": "app_app__3X0V5"
};


/***/ }),

/***/ 804:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ emotionCache)
});

;// CONCATENATED MODULE: external "@emotion/cache"
const cache_namespaceObject = require("@emotion/cache");
var cache_default = /*#__PURE__*/__webpack_require__.n(cache_namespaceObject);
;// CONCATENATED MODULE: ./components/emotionCache.ts

const createEmotionCache = ()=>{
    return cache_default()({
        key: "css"
    });
};
/* harmony default export */ const emotionCache = (createEmotionCache);


/***/ }),

/***/ 6940:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app),
  "theme": () => (/* binding */ theme)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./styles/app.module.scss
var app_module = __webpack_require__(9862);
var app_module_default = /*#__PURE__*/__webpack_require__.n(app_module);
;// CONCATENATED MODULE: external "nextjs-progressbar"
const external_nextjs_progressbar_namespaceObject = require("nextjs-progressbar");
var external_nextjs_progressbar_default = /*#__PURE__*/__webpack_require__.n(external_nextjs_progressbar_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/styles"
const styles_namespaceObject = require("@mui/material/styles");
;// CONCATENATED MODULE: external "@reduxjs/toolkit"
const toolkit_namespaceObject = require("@reduxjs/toolkit");
;// CONCATENATED MODULE: ./components/store/localization.ts

const initialState = {
    locale: null
};
const localizationSlice = (0,toolkit_namespaceObject.createSlice)({
    name: "localization",
    initialState,
    reducers: {
        setLocale: (state, action)=>{
            state.locale = action.payload.locale;
        },
        setEnvironmentalLocale: (state)=>{
            state.locale = window.navigator.language;
        }
    }
});
const { setLocale , setEnvironmentalLocale  } = localizationSlice.actions;
/* harmony default export */ const localization = (localizationSlice.reducer);

;// CONCATENATED MODULE: ./components/store/index.ts


const store = (0,toolkit_namespaceObject.configureStore)({
    reducer: {
        localization: localization
    }
});

;// CONCATENATED MODULE: external "react-redux"
const external_react_redux_namespaceObject = require("react-redux");
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(1377);
;// CONCATENATED MODULE: external "@emotion/react"
const react_namespaceObject = require("@emotion/react");
// EXTERNAL MODULE: ./components/emotionCache.ts + 1 modules
var emotionCache = __webpack_require__(804);
;// CONCATENATED MODULE: ./pages/_app.tsx












const theme = (0,styles_namespaceObject.createTheme)({
    palette: {
        mode: "dark"
    },
    components: {
        MuiTypography: {
            defaultProps: {
                "sx": {
                    color: "text.primary"
                }
            }
        }
    }
});
const clientSideEmotionCache = (0,emotionCache/* default */.Z)();
function TheArchive({ Component , pageProps , emotionCache =clientSideEmotionCache  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(external_react_redux_namespaceObject.Provider, {
        store: store,
        children: /*#__PURE__*/ jsx_runtime_.jsx(react_namespaceObject.CacheProvider, {
            value: emotionCache,
            children: /*#__PURE__*/ jsx_runtime_.jsx(styles_namespaceObject.ThemeProvider, {
                theme: theme,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (app_module_default()).app,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((external_nextjs_progressbar_default()), {
                            color: "#29D",
                            startPosition: 0.3,
                            stopDelayMs: 200,
                            height: 3,
                            showOnShallow: true
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                            ...pageProps
                        })
                    ]
                })
            })
        })
    });
}
/* harmony default export */ const _app = ((0,external_next_i18next_.appWithTranslation)(TheArchive));


/***/ }),

/***/ 1377:
/***/ ((module) => {

"use strict";
module.exports = require("next-i18next");

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
var __webpack_exports__ = (__webpack_exec__(6940));
module.exports = __webpack_exports__;

})();