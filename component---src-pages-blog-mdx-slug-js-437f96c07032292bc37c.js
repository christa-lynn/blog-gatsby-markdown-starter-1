(self.webpackChunkblog_1=self.webpackChunkblog_1||[]).push([[853],{7228:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n},e.exports.__esModule=!0,e.exports.default=e.exports},3646:function(e,t,r){var n=r(7228);e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.__esModule=!0,e.exports.default=e.exports},9100:function(e,t,r){var n=r(9489),o=r(7067);function a(t,r,l){return o()?(e.exports=a=Reflect.construct,e.exports.__esModule=!0,e.exports.default=e.exports):(e.exports=a=function(e,t,r){var o=[null];o.push.apply(o,t);var a=new(Function.bind.apply(e,o));return r&&n(a,r.prototype),a},e.exports.__esModule=!0,e.exports.default=e.exports),a.apply(null,arguments)}e.exports=a,e.exports.__esModule=!0,e.exports.default=e.exports},9713:function(e){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.__esModule=!0,e.exports.default=e.exports},7067:function(e){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}},e.exports.__esModule=!0,e.exports.default=e.exports},6860:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.__esModule=!0,e.exports.default=e.exports},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},319:function(e,t,r){var n=r(3646),o=r(6860),a=r(379),l=r(8206);e.exports=function(e){return n(e)||o(e)||a(e)||l()},e.exports.__esModule=!0,e.exports.default=e.exports},379:function(e,t,r){var n=r(7228);e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports},1046:function(e,t,r){"use strict";r.d(t,{w_:function(){return s}});var n=r(7294),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=n.createContext&&n.createContext(o),l=function(){return l=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},l.apply(this,arguments)},c=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r};function u(e){return e&&e.map((function(e,t){return n.createElement(e.tag,l({key:t},e.attr),u(e.child))}))}function s(e){return function(t){return n.createElement(i,l({attr:l({},e.attr)},t),u(e.child))}}function i(e){var t=function(t){var r,o=e.attr,a=e.size,u=e.title,s=c(e,["attr","size","title"]),i=a||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",l({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,s,{className:r,style:l(l({color:e.color||t.color},t.style),e.style),height:i,width:i,xmlns:"http://www.w3.org/2000/svg"}),u&&n.createElement("title",null,u),e.children)};return void 0!==a?n.createElement(a.Consumer,null,(function(e){return t(e)})):t(o)}},2102:function(e,t,r){var n=r(2632);e.exports={MDXRenderer:n}},2632:function(e,t,r){var n=r(9100),o=r(319),a=r(9713),l=r(7316),c=["scope","children"];function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var i=r(7294),f=r(4983).mdx,p=r(6948).useMDXScope;e.exports=function(e){var t=e.scope,r=e.children,a=l(e,c),u=p(t),m=i.useMemo((function(){if(!r)return null;var e=s({React:i,mdx:f},u),t=Object.keys(e),a=t.map((function(t){return e[t]}));return n(Function,["_fn"].concat(o(t),[""+r])).apply(void 0,[{}].concat(o(a)))}),[r,t]);return i.createElement(m,s({},a))}},6947:function(e,t,r){"use strict";var n=r(7294);t.Z=function(){return n.createElement("footer",null,n.createElement("div",{className:"copyright"},"© ",(new Date).getFullYear()," Christa Lynn"))}},2899:function(e,t,r){"use strict";var n=r(7294),o=r(6947),a=r(202);t.Z=function(e){var t=e.children;return n.createElement(n.Fragment,null,n.createElement(a.Z,null),n.createElement("main",null,t),n.createElement(o.Z,null))}},202:function(e,t,r){"use strict";var n=r(7294),o=r(1597),a=r(2775);t.Z=function(){var e=(0,n.useState)(!1),t=e[0],r=e[1];return n.createElement("nav",null,n.createElement("div",{className:"nav-desktop"},n.createElement("div",{className:"nav-header"},n.createElement("div",{className:"nav-logo-container"},n.createElement(o.Link,{to:"/"},"logo")),n.createElement(a.xXU,{className:"nav-button",onClick:function(){return r(!t)}})),n.createElement("div",{className:t?"nav-links show-links":"nav-links"},n.createElement(o.Link,{to:"/blog",className:"nav-link"},"blog"),n.createElement(o.Link,{to:"/about",className:"nav-link"},"about"),n.createElement(o.Link,{to:"/contact",className:"nav-link"},"contact"))))}},6649:function(e,t,r){"use strict";r.r(t);var n=r(7294),o=r(396),a=r(2102),l=r(2899);t.default=function(e){var t=e.data,r=(0,o.d)(t.mdx.frontmatter.banner_img);return n.createElement(l.Z,{pageTitle:t.mdx.frontmatter.title},n.createElement("div",{className:"main-content"},n.createElement("p",null,t.mdx.frontmatter.date),n.createElement("p",null,t.mdx.frontmatter.category),n.createElement(o.G,{image:r,alt:t.mdx.frontmatter.banner_img_alt}),n.createElement(a.MDXRenderer,null,t.mdx.body)))}}}]);
//# sourceMappingURL=component---src-pages-blog-mdx-slug-js-437f96c07032292bc37c.js.map