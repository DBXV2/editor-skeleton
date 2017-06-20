define("editor",["require","exports"],function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(){this.jumpHeight=75}return e.prototype.load=function(e){this.buffer=e},e.prototype.save=function(){return this.buffer},e}();t.Editor=r}),define("environment",["require","exports"],function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={debug:!1,testing:!1}}),define("main",["require","exports","tslib","libvantage"],function(e,t,r,i){"use strict";function n(e){return r.__awaiter(this,void 0,void 0,function(){return r.__generator(this,function(t){switch(t.label){case 0:return e.use.basicConfiguration().plugin("libvantage"),[4,e.start()];case 1:return t.sent(),[4,e.setRoot("editor")];case 2:return t.sent(),i.setEditor(e.root.viewModel),[2]}})})}Object.defineProperty(t,"__esModule",{value:!0}),t.configure=n}),define("text!editor.html",["module"],function(e){e.exports='<template><require from="libvantage/vantage.css"></require><header>Player</header><card label="Jump Height"><v-slider min="0" max="100" step="5" value.bind="jumpHeight"></v-slider></card></template>'});