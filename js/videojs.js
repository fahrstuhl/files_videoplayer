(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["videojs"],{

/***/ "./css/style.css":
/*!***********************!*\
  !*** ./css/style.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./css/style.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./css/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./css/style.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "#videoplayer_overlay video {\n\toutline: none;\n}\n\n#videoplayer_overlay {\n\tposition: fixed;\n\ttop: 0px;\n\tbottom: 0px;\n\tleft: 0px;\n\tright: 0px;\n\tbackground-color: #4c4c4c;\n\tbackground-color: rgba(0, 0, 0, .7);\n\tz-index: 3000;\n\topacity: 0;\n\ttransition: opacity 250ms ease-in;\n}\n\n#videoplayer_overlay.show {\n\topacity: 1;\n}\n\n#videoplayer_outer_container {\n\tposition: fixed;\n\ttop: 50%;\n\tleft: 50%;\n\twidth: 95%;\n\tmax-width: 854px;\n\ttransform: translate(-50%, -50%);\n}\n\n#videoplayer_container {\n\tposition: relative;\n\twidth: 95%;\n\tmax-width: 854px;\n\tmargin: 0 auto;\n\tcolor: #4d4d4d;\n\tbackground: #fff;\n\tbox-shadow: 0 0 20px #222;\n\tz-index: 3001;\n}\n\n#videoplayer_container:before {\n\tcontent: \"\";\n\tdisplay: block;\n\tpadding-top: 56.25%;\n}\n\n#videoplayer {\n\tposition: absolute;\n\ttop: 0;\n\tright: 0;\n\tbottom: 0;\n\tleft: 0;\n}\n\n#box-close {\n\tposition: absolute;\n\ttop: 10px;\n\tright: 10px;\n\twidth: 30px;\n\theight: 30px;\n\topacity: .35;\n\tcursor: pointer;\n}\n\n#box-close:hover {\n\topacity: .75;\n}\n\n.vjs-sublime-skin.vjs-has-started.vjs-user-inactive.vjs-playing #box-close {\n\topacity: 0;\n\ttransition: opacity 1s cubic-bezier(.455,.03,.515,.955);\n}\n\n\n/* Video.js adjustments */\n\n.video-js .vjs-menu-button-inline.vjs-slider-active,.video-js .vjs-menu-button-inline:focus,.video-js .vjs-menu-button-inline:hover,.video-js.vjs-no-flex .vjs-menu-button-inline {\n\twidth: 10em\n}\n\n.video-js .vjs-controls-disabled .vjs-big-play-button {\n\tdisplay: none!important\n}\n\n.video-js .vjs-control {\n\twidth: 3em\n}\n\n.video-js .vjs-menu-button-inline:before {\n\twidth: 1.5em\n}\n\n.vjs-menu-button-inline .vjs-menu {\n\tleft: 3em\n}\n\n.vjs-paused.vjs-has-started.video-js .vjs-big-play-button,.video-js.vjs-ended .vjs-big-play-button,.video-js.vjs-paused .vjs-big-play-button {\n\tdisplay: block\n}\n\n.video-js .vjs-load-progress div,.vjs-seeking .vjs-big-play-button,.vjs-waiting .vjs-big-play-button {\n\tdisplay: none!important\n}\n\n.video-js .vjs-mouse-display:after,.video-js .vjs-play-progress:after {\n\tpadding: 0 .4em .3em\n}\n\n.video-js.vjs-ended .vjs-loading-spinner {\n\tdisplay: none;\n}\n\n.video-js.vjs-ended .vjs-big-play-button {\n\tdisplay: block !important;\n}\n\nvideo-js.vjs-ended .vjs-big-play-button,.video-js.vjs-paused .vjs-big-play-button,.vjs-paused.vjs-has-started.video-js .vjs-big-play-button {\n\tdisplay: block\n}\n\n.video-js .vjs-big-play-button {\n\ttop: 50%;\n\tleft: 50%;\n}\n\n.video-js.vjs-big-play-centered .vjs-big-play-button {\n\tbackground-color: rgba(0,0,0,0.35);\n\tfont-size: 3em;\n\tborder-radius: 50%;\n\theight: 2em !important;\n\tline-height: 2em !important;\n\tmargin-top: -1em !important;\n\tmargin-left: -1em !important;\n}\n\n.video-js:hover .vjs-big-play-button,.video-js .vjs-big-play-button:focus,.video-js .vjs-big-play-button:active {\n\tbackground-color: rgba(0,0,0,0.35)\n}\n\n.video-js .vjs-loading-spinner {\n\tborder-color: rgba(255,255,255,0.7)\n}\n\n.video-js .vjs-control-bar2 {\n\tbackground-color: transparent\n}\n\n.video-js .vjs-control-bar {\n\tbackground-color: rgba(0,0,0,0) !important;\n\tcolor: #ffffff;\n\tfont-size: 18px\n}\n\n.video-js .vjs-play-progress,.video-js  .vjs-volume-level {\n\tbackground-color: #2483d5\n}\n\n.video-js .vjs-big-play-button {\n\theight: 2em !important;\n\twidth: 2em !important;\n\tline-height: 1.9em !important;\n\tmargin-top: -1em !important;\n\tmargin-left: -1em;\n\tborder-width: 3px\n}\n\n.video-js .vjs-icon-play:before, .video-js .vjs-big-play-button:before {\n\tfont-size: 50px;\n}\n\n.video-js  .vjs-progress-holder {\n\tfont-size: 1.7em;\n\tborder-radius: 10px;\n}\n\n.video-js .vjs-progress-holder .vjs-play-progress, .video-js .vjs-progress-holder .vjs-load-progress, .video-js .vjs-progress-holder .vjs-load-progress div, .video-js .vjs-slider,.vjs-volume-level {\n\tborder-radius: 10px;\n}\n\n.video-js .vjs-load-progress {\n\tbackground: rgba(255,255,255,0.5);\n}\n\n.video-js .vjs-big-play-button {\n\theight: 2em !important;\n\twidth: 2em !important;\n\tline-height: 1.9em !important;\n\tmargin-top: -1em !important;\n\tmargin-left: -1em;\n\tborder-width:3px\n}\n.video-js .vjs-icon-play:before, .video-js .vjs-big-play-button:before {\n\tfont-size: 50px;\n}\n.video-js  .vjs-progress-holder {\n\tfont-size: 1.7em;\n\tborder-radius: 10px;\n}\n.video-js .vjs-progress-holder .vjs-play-progress, .video-js .vjs-progress-holder .vjs-load-progress, .video-js .vjs-progress-holder .vjs-load-progress div, .video-js .vjs-slider,.vjs-volume-level {\n\tborder-radius: 10px;\n}\n.video-js .vjs-load-progress {\n\tbackground: rgba(255,255,255,0.5);\n}\n\n.video-js button:active {\n\tbackground: transparent !important;\n\tcolor: #fff !important;\n}\n\n/* hide error icon */\n.vjs-error .vjs-error-display::before {\n\tcontent: \"\" !important;\n}\n\n/* fix for fluid size of the player */\n#imgframe #videoplayer_view {\n\tdisplay: inline-block;\n}\n\n/* public sharing view styles */\n#imgframe .video-js .vjs-tech {\n\tposition: relative;\n\twidth: auto;\n\theight: auto;\n}\n\n/* fullscreen public videos see https://github.com/nextcloud/files_videoplayer/issues/77 */\n#imgframe .video-js.vjs-fullscreen .vjs-tech {\n\twidth:100%;\n\theight:100%;\n}\n\n#imgframe .video-js:not(.vjs-fullscreen),\n#imgframe .video-js:not(.vjs-fullscreen) .vjs-tech {\n\tmax-height: calc(100vh - 280px) !important;\n\tmin-width: 300px;\n\tmax-width: 100% !important;\n}\n", ""]);



/***/ }),

/***/ 0:
/*!******************************!*\
  !*** min-document (ignored) ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

}]);
//# sourceMappingURL=videojs.js.map