(function(t){var e={};function s(i){if(e[i])return e[i].exports;var n=e[i]={i:i,l:!1,exports:{}};return t[i].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=e,s.d=function(t,e,i){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(i,n,function(e){return t[e]}.bind(null,n));return i},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/",s(s.s="99fd")})({"0728":function(t,e,s){t.exports=s.p+"img/pic3.71918ae0.jpg"},"189e":function(t,e,s){},"1eb4":function(t,e,s){t.exports=s.p+"img/pic2.10c0934f.jpg"},"40eb":function(t,e,s){t.exports=s.p+"img/pic4.44678f06.jpg"},"74e1":function(t,e,s){"use strict";var i=s("189e"),n=s.n(i);n.a},"8fb6":function(t,e,s){t.exports=s.p+"img/pic5.4d33e4de.jpg"},"99fd":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"lb-box",attrs:{id:"lb-1"},on:{mouseover:t.pause,mouseleave:t.start,touchstart:t.touchScreen,touchend:t.touchScreen}},[s("div",{staticClass:"lb-content"},t._l(t.lbItems,(function(e){return s("div",{key:e.id,staticClass:"lb-item",class:e.className},[s("a",{attrs:{href:"#"}},[s("img",{attrs:{src:e.imgSrc,alt:"picture loss"}}),s("span",[t._v(t._s(e.desc))])])])})),0),s("ol",{staticClass:"lb-sign"},t._l(t.lbSigns,(function(e){return s("li",{key:e.id,class:e.className,attrs:{"slide-to":e.index},on:{click:t.clickSign}},[t._v("\n      "+t._s(e.index+1)+"\n    ")])})),0),s("div",{staticClass:"lb-ctrl left",on:{click:function(e){return t.clickCtrl("left")}}},[t._v("＜")]),s("div",{staticClass:"lb-ctrl right",on:{click:function(e){return t.clickCtrl("right")}}},[t._v("＞")])])},n=[],r={data:function(){return{speed:600,delay:3e3,numItems:5,direction:"left",moniterKeyEvent:!0,moniterTouchEvent:!0,curIndex:0,status:!0,lbItems:[{imgSrc:s("a715"),desc:"这里是描述文字",className:{active:!0}},{imgSrc:s("1eb4"),desc:"这里是描述文字",className:{}},{imgSrc:s("0728"),desc:"这里是描述文字",className:{}},{imgSrc:s("40eb"),desc:"这里是描述文字",className:{}},{imgSrc:s("8fb6"),desc:"这里是描述文字",className:{}}],lbSigns:[{index:0,className:{active:!0}},{index:1,className:{active:!1}},{index:2,className:{active:!1}},{index:3,className:{active:!1}},{index:4,className:{active:!1}}]}},mounted:function(){this.moniterKeyEvent&&window.addEventListener("keydown",this.keyDown.bind(this)),this.start()},methods:{start:function(){var t=this.clickCtrl.bind(this),e="left"==this.direction?"right":"left";this.interval=setInterval(t,this.delay,e)},pause:function(){clearInterval(this.interval)},clickCtrl:function(t){if(this.status){this.status=!1;var e=this.curIndex,s="right"==t?(this.curIndex+1)%this.numItems:(this.curIndex+this.numItems-1)%this.numItems,i="right"==t?"left":"right";this.slide(e,s,i),this.curIndex=s}},clickSign:function(t){if(this.status){this.status=!1;var e=this.curIndex,s=parseInt(t.srcElement.getAttribute("slide-to")),i=e<s?"left":"right";this.slide(e,s,i),this.curIndex=s}},touchScreen:function(t){if(this.moniterTouchEvent)if("touchstart"==t.type)this.startX=t.touches[0].pageX,this.startY=t.touches[0].pageY;else{this.endX=t.changedTouches[0].pageX,this.endY=t.changedTouches[0].pageY;var e=this.endX-this.startX,s=this.startY-this.endY,i=Math.abs(180*Math.atan2(s,e)/Math.PI);if(Math.abs(e)<10)return;i>=0&&i<=45?this.clickCtrl("right"):i>=135&&i<=180&&this.clickCtrl("left")}},keyDown:function(t){this.moniterKeyEvent&&(t&&37==t.keyCode?this.clickCtrl("left"):t&&39==t.keyCode&&this.clickCtrl("right"))},slide:function(t,e,s){var i,n,r=this;"left"==s?(this.lbItems[e].className={next:!0},i={active:!0,left:!0},n={next:!0,left:!0}):(this.lbItems[e].className={prev:!0},i={active:!0,right:!0},n={prev:!0,right:!0}),this.lbSigns[t].className.active=!1,this.lbSigns[e].className.active=!0,setTimeout(function(){r.lbItems[t].className=i,r.lbItems[e].className=n}.bind(this),50),setTimeout(function(){r.lbItems[t].className={},r.lbItems[e].className={active:!0},r.status=!0}.bind(this),this.speed+50)}}},c=r;s("74e1");function a(t,e,s,i,n,r,c,a){var o,l="function"===typeof t?t.options:t;if(e&&(l.render=e,l.staticRenderFns=s,l._compiled=!0),i&&(l.functional=!0),r&&(l._scopeId="data-v-"+r),c?(o=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(c)},l._ssrRegister=o):n&&(o=a?function(){n.call(this,this.$root.$options.shadowRoot)}:n),o)if(l.functional){l._injectStyles=o;var u=l.render;l.render=function(t,e){return o.call(e),u(t,e)}}else{var d=l.beforeCreate;l.beforeCreate=d?[].concat(d,o):[o]}return{exports:t,options:l}}var o=a(c,i,n,!1,null,"adfcf084",null);e["default"]=o.exports},a715:function(t,e,s){t.exports=s.p+"img/pic1.738e2934.jpg"}});
//# sourceMappingURL=app.f1f4967c.js.map