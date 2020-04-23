/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + ({"vendors~videojs~videojs-vr":"vendors~videojs~videojs-vr","vendors~videojs":"vendors~videojs","videojs":"videojs","vendors~videojs-vr":"vendors~videojs-vr","videojs-vr":"videojs-vr"}[chunkId]||chunkId) + ".js"
/******/ 	}
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							var error = new Error('Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')');
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/js/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/viewer.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/viewer.js":
/*!***********************!*\
  !*** ./src/viewer.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
 * @copyright 2018 Christoph Wurst <christoph@winzerhof-wurst.at>
 *
 * @author 2018 Christoph Wurst <christoph@winzerhof-wurst.at>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
__webpack_require__.nc = btoa(OC.requestToken);
__webpack_require__.p = OC.filePath('files_videoplayer', '', 'js/');
var videojs = null;
var videoViewer = {
  UI: {
    show: function show() {
      var source = document.createElement('source');
      source.src = escapeHTML(videoViewer.location).replace('&amp;', '&');

      if (videoViewer.mime) {
        source.type = escapeHTML(videoViewer.mime);
      }

      var playerView = document.createElement('video');
      playerView.id = 'my_video_1';
      playerView.classList.add('video-js');
      playerView.classList.add('vjs-fill');
      playerView.classList.add('vjs-big-play-centered');
      playerView.controls = true;
      playerView.preload = "auto";
      playerView.width = "100%";
      playerView.height = "100%";
      playerView.poster = OC.filePath('files_videoplayer', '', 'img') + '/poster.png';
      playerView.setAttribute('data-setup', '{"techOrder": ["html5"]}');
      playerView.appendChild(source);

      if (videoViewer.inline === null) {
        var overlay = document.createElement('div');
        overlay.id = 'videoplayer_overlay';
        var outer_container = document.createElement('div');
        outer_container.id = 'videoplayer_outer_container';
        var container = document.createElement('div');
        container.id = 'videoplayer_container';
        var player = document.createElement('div');
        player.id = 'videoplayer';
        container.appendChild(player);
        outer_container.appendChild(container);
        overlay.appendChild(outer_container);
        player.appendChild(playerView);
        document.body.appendChild(overlay); // close when clicking on the overlay

        overlay.addEventListener('click', function (e) {
          if (e.target === this) {
            videoViewer.hidePlayer();
          }
        });
        setTimeout(function () {
          overlay.className = 'show';
        }, 0);
      } else {
        var wrapper = document.createElement('div');
        wrapper.id = 'videoplayer_view';
        wrapper.appendChild(playerView);
        videoViewer.inline.appendChild(wrapper);
      } // initialize player


      videojs("my_video_1", {
        fill: true
      }).ready(function () {
        videoViewer.player = this;
        videoViewer.player.vr({
          forceCardboard: true,
          debug: true,
          projection: '180'
        });

        if (videoViewer.inline === null) {
          // append close button to video element
          var closeButton = document.createElement('a');
          closeButton.className = 'icon-view-close';
          closeButton.id = 'box-close';
          closeButton.href = '#';
          closeButton.addEventListener('click', function () {
            videoViewer.hidePlayer();
          });
          document.getElementById('my_video_1').appendChild(closeButton);
        } // autoplay


        if (document.getElementById('body-public') === null) {
          videoViewer.player.play();
        }
      });
    },
    hide: function hide() {
      var overlay = document.getElementById('videoplayer_overlay');
      overlay.className = '';
      setTimeout(function () {
        overlay.parentElement.removeChild(overlay);
      }, 500);
    }
  },
  mime: null,
  file: null,
  location: null,
  player: null,
  inline: null,
  mimeTypes: ['video/mp4', 'video/x-m4v', 'video/webm', 'video/x-flv', 'video/ogg', 'video/quicktime', 'video/x-matroska'],
  mimeTypeAliasses: {
    'video/x-matroska': 'video/webm' // mkv support for Chrome. webm uses the same container format

  },
  onView: function onView(file, data) {
    videoViewer.file = file;
    videoViewer.dir = data.dir;
    videoViewer.location = data.fileList.getDownloadUrl(file, videoViewer.dir);
    videoViewer.mime = data.$file.attr('data-mime');

    if (videoViewer.mimeTypeAliasses.hasOwnProperty(videoViewer.mime)) {
      videoViewer.mime = videoViewer.mimeTypeAliasses[videoViewer.mime];
    }

    videoViewer.showPlayer();
  },
  onViewInline: function onViewInline(element, file, mime) {
    videoViewer.location = file;
    videoViewer.mime = mime;

    if (videoViewer.mimeTypeAliasses.hasOwnProperty(videoViewer.mime)) {
      videoViewer.mime = videoViewer.mimeTypeAliasses[videoViewer.mime];
    }

    videoViewer.inline = element;
    videoViewer.showPlayer();
  },
  showPlayer: function showPlayer() {
    Promise.all(/*! import() | videojs */[__webpack_require__.e("vendors~videojs~videojs-vr"), __webpack_require__.e("vendors~videojs"), __webpack_require__.e("videojs")]).then(__webpack_require__.bind(null, /*! video.js */ "./node_modules/video.js/dist/video.es.js")).then(function (_videojs) {
      videojs = _videojs.default;
      Promise.all([Promise.all(/*! import() | videojs */[__webpack_require__.e("vendors~videojs~videojs-vr"), __webpack_require__.e("vendors~videojs"), __webpack_require__.e("videojs")]).then(__webpack_require__.t.bind(null, /*! ../css/style.css */ "./css/style.css", 7)), Promise.all(/*! import() | videojs */[__webpack_require__.e("vendors~videojs~videojs-vr"), __webpack_require__.e("vendors~videojs"), __webpack_require__.e("videojs")]).then(__webpack_require__.t.bind(null, /*! style-loader!css-loader!video.js/dist/video-js.css */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/video.js/dist/video-js.css", 7)), Promise.all(/*! import() | videojs-vr */[__webpack_require__.e("vendors~videojs~videojs-vr"), __webpack_require__.e("vendors~videojs-vr"), __webpack_require__.e("videojs-vr")]).then(__webpack_require__.t.bind(null, /*! videojs-vr */ "./node_modules/videojs-vr/dist/videojs-vr.min.js", 7))]).then(function () {
        videoViewer.UI.show();
      });
    });
  },
  hidePlayer: function hidePlayer() {
    if (videoViewer.player !== null && videoViewer.player !== false && videoViewer.inline === null) {
      videoViewer.player.dispose();
      videoViewer.player = false;
      videoViewer.UI.hide();
    }
  },
  log: function log(message) {
    console.log(message);
  }
};
document.addEventListener('DOMContentLoaded', function () {
  // add event to ESC key
  document.addEventListener('keyup', function (e) {
    if (e.key !== undefined && e.key === 'Escape' || e.keyCode !== undefined && e.keyCode === 27) {
      videoViewer.hidePlayer();
    }
  });

  if (OCA && OCA.Files && OCA.Files.fileActions && !OCA.Viewer) {
    for (var i = 0; i < videoViewer.mimeTypes.length; ++i) {
      var mime = videoViewer.mimeTypes[i];
      OCA.Files.fileActions.register(mime, 'View', OC.PERMISSION_READ, '', videoViewer.onView);
      OCA.Files.fileActions.setDefault(mime, 'View');

      if (mime === mimetype) {
        isSupportedMimetype = true;
      }
    }
  } // Public page magic


  if (document.getElementById('body-public') && document.getElementById('imgframe')) {
    var mimetype = document.getElementById('mimetype').value;

    for (var i = 0; i < videoViewer.mimeTypes.length; ++i) {
      if (videoViewer.mimeTypes[i] === mimetype) {
        var videoUrl = window.location.href.split('?')[0] + '/download';
        videoViewer.onViewInline(document.getElementById('imgframe'), videoUrl, mimetype);
        break;
      }
    }
  }
});

/***/ })

/******/ });
//# sourceMappingURL=main.js.map