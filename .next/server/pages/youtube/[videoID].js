(() => {
var exports = {};
exports.id = 79;
exports.ids = [79];
exports.modules = {

/***/ 9688:
/***/ ((module) => {

// Exports
module.exports = {
	"videoFileNotFound": "styles_videoFileNotFound__mYUol",
	"note": "styles_note__kTnVh",
	"noteText": "styles_noteText__TFErZ"
};


/***/ }),

/***/ 2732:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "VideoPage_container__TsJPs",
	"innerContainer": "VideoPage_innerContainer__gSBP_",
	"video": "VideoPage_video__fdJHJ",
	"player": "VideoPage_player__rkask",
	"videoLost": "VideoPage_videoLost__A7fs_",
	"fileBackground": "VideoPage_fileBackground__JjjX9",
	"title": "VideoPage_title__Thxn7",
	"info": "VideoPage_info__C4x1Y",
	"caption": "VideoPage_caption__tNgO5",
	"ratio": "VideoPage_ratio__8q7Ac",
	"buttons": "VideoPage_buttons__2nuxm",
	"ratioBar": "VideoPage_ratioBar__83vTN",
	"filledRatioBar": "VideoPage_filledRatioBar__5p_KI",
	"description": "VideoPage_description__83xMq",
	"commentsHeader": "VideoPage_commentsHeader___KTE0",
	"comments": "VideoPage_comments__4Vgh3",
	"comment": "VideoPage_comment__zUEmx",
	"topLine": "VideoPage_topLine__XKbbb",
	"author": "VideoPage_author__3C0lV",
	"date": "VideoPage_date__lAjPr",
	"text": "VideoPage_text__wMUPI",
	"likes": "VideoPage_likes__KDbu5",
	"label": "VideoPage_label__rxDPv",
	"replies": "VideoPage_replies___5HGL",
	"repliesLabel": "VideoPage_repliesLabel__lwCSW",
	"nextVideos": "VideoPage_nextVideos__SEptp"
};


/***/ }),

/***/ 1396:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _videoID_),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(580);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);
// EXTERNAL MODULE: ./constants/videos.json
var videos = __webpack_require__(457);
// EXTERNAL MODULE: external "next-i18next/serverSideTranslations"
var serverSideTranslations_ = __webpack_require__(5460);
// EXTERNAL MODULE: ./styles/VideoPage.module.scss
var VideoPage_module = __webpack_require__(2732);
var VideoPage_module_default = /*#__PURE__*/__webpack_require__.n(VideoPage_module);
// EXTERNAL MODULE: ./components/Header/index.tsx + 3 modules
var Header = __webpack_require__(7948);
// EXTERNAL MODULE: ./components/Head/index.tsx
var Head = __webpack_require__(1146);
// EXTERNAL MODULE: ./components/Video/index.tsx
var Video = __webpack_require__(9346);
;// CONCATENATED MODULE: external "@mui/material/Skeleton"
const Skeleton_namespaceObject = require("@mui/material/Skeleton");
var Skeleton_default = /*#__PURE__*/__webpack_require__.n(Skeleton_namespaceObject);
// EXTERNAL MODULE: external "@mui/material/Typography"
var Typography_ = __webpack_require__(7163);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(1377);
// EXTERNAL MODULE: ./components/utils.tsx
var utils = __webpack_require__(3884);
;// CONCATENATED MODULE: ./components/VideoJS/index.tsx



VideoJS_Video.propTypes = {
    src: (external_prop_types_default()).string,
    thumbnail: (external_prop_types_default()).string
};
function VideoJS_Video(props) {
    {
    // <Player
    //   aspectRatio='16:9'
    //   src={props.src}
    //   poster={props.thumbnail}
    // >
    //   <ControlBar>
    //     {/* <ReplayControl seconds={10} order={1.1} />
    //     <ForwardControl seconds={30} order={1.2} /> */}
    //     <BigPlayButton position="center" />
    //     <VolumeMenuButton />
    //     <CurrentTimeDisplay order={4.1} />
    //     <TimeDivider order={4.2} />
    //     <PlaybackRateMenuButton rates={[5, 2, 1, 0.5, 0.1]} order={7.1} />
    //     <DownloadButton order={7} />
    //   </ControlBar>
    // </Player>
    }
    return /*#__PURE__*/ jsx_runtime_.jsx("video", {
        src: props.src,
        poster: props.thumbnail,
        controls: true
    });
};

// EXTERNAL MODULE: ./components/VideoJS/styles.module.scss
var styles_module = __webpack_require__(9688);
var styles_module_default = /*#__PURE__*/__webpack_require__.n(styles_module);
;// CONCATENATED MODULE: ./components/VideoJS/VideoFileNotFound.tsx



function VideoFileNotFound(props) {
    const { t  } = (0,external_next_i18next_.useTranslation)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (styles_module_default()).videoFileNotFound,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                children: t("pages.youtube.pages.videos.video_file_not_found.heading")
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                children: t("pages.youtube.pages.videos.video_file_not_found.description")
            }),
            props.note && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (styles_module_default()).note,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: t("pages.youtube.pages.videos.video_file_not_found.note")
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: (styles_module_default()).noteText,
                        children: props.note
                    })
                ]
            })
        ]
    });
};

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
;// CONCATENATED MODULE: ./pages/youtube/[videoID].tsx
















YouTubeVideoPage.propTypes = {
    video: (external_prop_types_default()).object.isRequired,
    nextVideos: external_prop_types_default().arrayOf((external_prop_types_default()).object).isRequired
};
function YouTubeVideoPage(props) {
    const { t , i18n  } = (0,external_next_i18next_.useTranslation)();
    const likes = props.video.likes === "" ? null : props.video.likes;
    const dislikes = props.video.dislikes === "" ? null : props.video.dislikes;
    const thumbnail = (0,utils/* getThumbnailURL */.AJ)(props.video.thumbnail, props.video.filename);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
        className: (VideoPage_module_default()).container,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Head/* default */.Z, {
                title: t("pages.youtube.pages.video.title").replace("%video_name%", props.video.name),
                description: t("pages.youtube.pages.video.description").replace("%video_description%", props.video.description),
                banner: {
                    src: thumbnail,
                    width: 374,
                    height: 210
                }
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Header/* default */.Z, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (VideoPage_module_default()).innerContainer,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (VideoPage_module_default()).video,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: external_classnames_default()((VideoPage_module_default()).player, {
                                    [(VideoPage_module_default()).videoLost]: props.video.lost
                                }),
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((Skeleton_default()), {
                                        variant: "rectangular",
                                        height: "100%",
                                        className: (VideoPage_module_default()).fileBackground
                                    }),
                                    !props.video.lost ? /*#__PURE__*/ jsx_runtime_.jsx(VideoJS_Video, {
                                        src: `https://ik.imagekit.io/hloth/the-archive/${props.video.filename}`,
                                        thumbnail: thumbnail
                                    }) : /*#__PURE__*/ jsx_runtime_.jsx(VideoFileNotFound, {
                                        note: props.video.note
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                component: "h1",
                                className: (VideoPage_module_default()).title,
                                children: props.video.name
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (VideoPage_module_default()).info,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Typography_default()), {
                                        variant: "caption",
                                        className: (VideoPage_module_default()).caption,
                                        children: [
                                            props.video.views !== "" ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                        children: [
                                                            props.video.views,
                                                            " ",
                                                            (0,utils/* pluralize */._6)(props.video.views, t("pages.youtube.pages.videos.item.views"))
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        children: "\xa0\u2022\xa0"
                                                    })
                                                ]
                                            }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                children: [
                                                    t("pages.youtube.pages.videos.item.upload_date"),
                                                    ": "
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                children: (0,utils/* translateDate */.pv)(i18n.language, props.video.uploadDate)
                                            })
                                        ]
                                    }),
                                    (likes !== null || dislikes !== null) && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (VideoPage_module_default()).ratio,
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: (VideoPage_module_default()).buttons,
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                                width: "1em",
                                                                height: "1em",
                                                                viewBox: "0 0 24 24",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                    d: "M4 21h1V8H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2zM20 8h-7l1.122-3.368A2 2 0 0 0 12.225 2H12L7 7.438V21h11l3.912-8.596L22 12v-2a2 2 0 0 0-2-2z",
                                                                    fill: "currentColor"
                                                                })
                                                            }),
                                                            likes === null ? t("pages.youtube.pages.video.unknown") : likes
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                                width: "1em",
                                                                height: "1em",
                                                                viewBox: "0 0 24 24",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                    d: "M20 3h-1v13h1a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zM4 16h7l-1.122 3.368A2 2 0 0 0 11.775 22H12l5-5.438V3H6l-3.937 8.649l-.063.293V14a2 2 0 0 0 2 2z",
                                                                    fill: "currentColor"
                                                                })
                                                            }),
                                                            dislikes === null ? t("pages.youtube.pages.video.unknown") : dislikes
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: (VideoPage_module_default()).ratioBar,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: (VideoPage_module_default()).filledRatioBar,
                                                    style: {
                                                        width: likes / (likes + dislikes) * 100 + "%"
                                                    }
                                                })
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("hr", {}),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: (VideoPage_module_default()).description,
                                children: props.video.description === "" ? /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                    children: t("pages.youtube.pages.video.no_info_on_description")
                                }) : (0,utils/* formatText */.RZ)(props.video.description)
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("hr", {}),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (VideoPage_module_default()).commentsHeader,
                                children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    component: "h3",
                                    className: (VideoPage_module_default()).commentsTitle,
                                    children: Array.isArray(props.video.comments) ? `${props.video.comments.length} ${(0,utils/* pluralize */._6)(props.video.comments.length, t("pages.youtube.pages.video.comments_title"))}` : props.video.comments === false ? t("pages.youtube.pages.video.comments_disabled") : t("pages.youtube.pages.video.no_info_on_comments")
                                })
                            }),
                            Array.isArray(props.video.comments) && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (VideoPage_module_default()).comments,
                                children: props.video.comments.map((comment, i)=>/*#__PURE__*/ jsx_runtime_.jsx(Comment, {
                                        comment: comment
                                    }, i)
                                )
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (VideoPage_module_default()).nextVideos,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                variant: "h6",
                                children: t("pages.youtube.pages.video.next_videos")
                            }),
                            props.nextVideos.map((video)=>/*#__PURE__*/ jsx_runtime_.jsx(Video/* default */.Z, {
                                    title: video.name,
                                    views: video.views === "" ? null : video.views,
                                    date: video.uploadDate,
                                    codeName: video.codeName,
                                    drafts: video.draftPlaylist,
                                    horizontal: true,
                                    thumbnail: (0,utils/* getThumbnailURL */.AJ)(video.thumbnail, video.filename),
                                    lost: video.lost
                                }, video.codeName)
                            )
                        ]
                    })
                ]
            })
        ]
    });
}
const basicCommentPropTypes = {
    author: (external_prop_types_default()).string,
    date: (external_prop_types_default()).string,
    likes: (external_prop_types_default()).number,
    text: (external_prop_types_default()).string
};
Comment.propTypes = {
    comment: external_prop_types_default().shape({
        ...basicCommentPropTypes,
        replies: external_prop_types_default().arrayOf(external_prop_types_default().shape(basicCommentPropTypes))
    })
};
function Comment(props) {
    const { t  } = (0,external_next_i18next_.useTranslation)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (VideoPage_module_default()).comment,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (VideoPage_module_default()).topLine,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                        className: (VideoPage_module_default()).author,
                        children: props.comment.author
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                        className: (VideoPage_module_default()).date,
                        children: props.comment.date
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: (VideoPage_module_default()).text,
                children: (0,utils/* formatText */.RZ)(props.comment.text)
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (VideoPage_module_default()).likes,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                        width: "1em",
                        height: "1em",
                        viewBox: "0 0 24 24",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            d: "M4 21h1V8H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2zM20 8h-7l1.122-3.368A2 2 0 0 0 12.225 2H12L7 7.438V21h11l3.912-8.596L22 12v-2a2 2 0 0 0-2-2z",
                            fill: "currentColor"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: (VideoPage_module_default()).label,
                        children: props.comment.likes
                    })
                ]
            }),
            Boolean(props.comment.replies?.length) && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (VideoPage_module_default()).replies,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Typography_default()), {
                        className: (VideoPage_module_default()).repliesLabel,
                        children: [
                            t("pages.youtube.pages.video.replies"),
                            ":"
                        ]
                    }),
                    props.comment.replies.map((reply, i)=>/*#__PURE__*/ jsx_runtime_.jsx(Comment, {
                            comment: reply
                        }, i)
                    )
                ]
            })
        ]
    });
}
const getStaticPaths = ()=>({
        paths: [
            "en",
            "ru"
        ].map((locale)=>videos.map((video)=>({
                    params: {
                        videoID: video.codeName
                    },
                    locale
                })
            )
        ).reduce((prev, cur)=>prev.concat(cur)
        , []),
        fallback: false
    })
;
const getStaticProps = async ({ params , locale  })=>{
    const startIndex = videos.findIndex((video)=>video.codeName === params.videoID
    );
    let nextVideos = videos.slice(Math.max(0, startIndex - 10), startIndex).reverse();
    if (nextVideos.length < 10) {
        nextVideos.push(...videos.slice(startIndex + 1, Math.max(0, startIndex + 9)));
    }
    return {
        props: {
            video: videos.find((video)=>video.codeName === params.videoID
            ),
            nextVideos,
            ...await (0,serverSideTranslations_.serverSideTranslations)(locale, [
                "common"
            ])
        }
    };
};
/* harmony default export */ const _videoID_ = (YouTubeVideoPage);


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

/***/ 4634:
/***/ ((module) => {

"use strict";
module.exports = require("plural-ru");

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [505,61,948,457,146,346], () => (__webpack_exec__(1396)));
module.exports = __webpack_exports__;

})();