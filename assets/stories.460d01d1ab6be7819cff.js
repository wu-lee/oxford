(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{57:function(t,n,i){"use strict";i.r(n);var a={name:"Article",props:["article","storyID"],data:function(){return{}}},e=(i(72),i(2)),s=Object(e.a)(a,function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"article"},[i("router-link",{staticClass:"button article--back-button",attrs:{to:{name:"story",params:{id:t.storyID}}}},[t._v("Close article")]),t._v(" "),i("div",{staticClass:"article--inner"},[i("div",{staticClass:"article--image"},[i("img",{attrs:{src:t.article.image}})]),t._v(" "),i("div",{staticClass:"article--content"},[i("h2",{staticClass:"article--title"},[t._v(t._s(t.article.title))]),t._v(" "),i("div",{staticClass:"article--author"},[t._v(t._s(t.article.author))]),t._v(" "),i("div",{staticClass:"entry--content",domProps:{innerHTML:t._s(t.article.content)}})])])],1)},[],!1,null,"76a84985",null);s.options.__file="Article.vue";var r={name:"story",props:["geoJsonPath","id","slug"],components:{Article:s.exports},data:function(){return{story:"",dataLoaded:!1,showSidebar:!0}},created:function(){this.fetchContent()},methods:{fetchContent:function(){var t=this;this.axios.get("/story/"+this.id+".html").then(function(n){t.story=n.data,t.dataLoaded=!0,t.$emit("mapLayerChange",t.story.geoJsonPath)})}}},o=(i(74),Object(e.a)(r,function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("transition",{attrs:{appear:"",name:"slide-in-out"}},[t.showSidebar?i("div",{key:"sidebar",staticClass:"sidebar sidebar__story"},[i("div",{staticClass:"sidebar--header"},[i("router-link",{staticClass:"sidebar--back",attrs:{to:{name:"stories"}}},[t._v("« View all stories")]),t._v(" "),i("h2",{staticClass:"sidebar--title"},[t._v(t._s(t.story.title))])],1),t._v(" "),i("div",{staticClass:"sidebar--scroller"},[i("div",{staticClass:"sidebar--body",domProps:{innerHTML:t._s(t.story.content)}})]),t._v(" "),t.dataLoaded?i("div",{staticClass:"sidebar--item-list"},t._l(t.story.articles,function(n,a){return i("div",{key:t.story.slug,staticClass:"sidebar--item-list--item"},[i("router-link",{staticClass:"sidebar--item-list--link sidebar--item-list--link__article",attrs:{to:{name:"story",params:{slug:a}}}},[i("img",{staticClass:"article-image",attrs:{src:n.image,alt:"Image of "}}),t._v(" "),i("div",{staticClass:"article-text"},[i("h3",{staticClass:"article-title"},[t._v(t._s(n.title))]),t._v(" "),i("div",{staticClass:"article-author"},[t._v(t._s(n.author))])]),t._v(" "),i("svg",{staticClass:"article-button",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"812",height:"594.2",viewBox:"0 0 812 594.2"}},[i("path",{attrs:{"vector-effect":"non-scaling-stroke",fill:"none",stroke:"#FFF","stroke-width":"25","stroke-miterlimit":"10",d:"M0 297.5h805m0 4L603.6 4.8m0 584.7L805 292.8"}})])])],1)}),0):t._e(),t._v(" "),i("button",{staticClass:"sidebar--hide-button",on:{click:function(n){t.showSidebar=!1}}},[i("span",[t._v("«")]),t._v(" Hide sidebar\n    ")]),t._v(" "),i("transition",{attrs:{name:"slide-in-out"}},[t.slug&&t.dataLoaded?i("Article",{key:t.slug,attrs:{article:t.story.articles[t.slug],storyID:t.id}}):t._e()],1)],1):i("button",{key:"show-sidebar",staticClass:"sidebar--show-button",on:{click:function(n){t.showSidebar=!0}}},[t._v("\n    Show sidebar "),i("span",[t._v("»")])])])},[],!1,null,null,null));o.options.__file="Story.vue";n.default=o.exports},58:function(t,n,i){"use strict";i.r(n);var a={name:"stories",data:function(){return{dataLoaded:!1,stories:[],showSidebar:!0}},created:function(){this.fetchCollectionList(),this.$emit("mapLayerChange",null)},methods:{fetchCollectionList:function(){var t=this;this.axios.get("/data/stories.html").then(function(n){t.stories=n.data.stories,t.dataLoaded=!0})}}},e=(i(70),i(2)),s=Object(e.a)(a,function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("transition",{attrs:{appear:"",name:"slide-in-out"}},[t.showSidebar?i("div",{key:"sidebar",staticClass:"sidebar sidebar__stories"},[i("div",{staticClass:"sidebar--header"},[i("h3",{staticClass:"sidebar--title"},[t._v("Who Owns Oxford?")]),t._v(" "),i("p",{staticClass:"sidebar--subtitle"},[t._v("Each story explores a particular area, or issue.")])]),t._v(" "),t.dataLoaded?i("div",{staticClass:"sidebar--scroller"},[i("div",{staticClass:"sidebar--item-list"},t._l(t.stories,function(n,a){return i("div",{key:n.id,staticClass:"sidebar--item-list--item"},["true"==n.coming_soon?i("div",{staticClass:"coming-soon has-icon"},[i("svg",{staticClass:"sidebar--item--icon",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"46.3",height:"69.5",viewBox:"0 0 46.3 69.5"}},[i("path",{attrs:{fill:"none",stroke:"#000","stroke-width":"2.297","stroke-miterlimit":"10",d:"M23.2 1.5c-12 0-21.7 9.7-21.7 21.7 0 3.8 1 7.4 2.8 10.6l.9 1.5 17.9 31.2L41 35.3c.3-.4.5-.8.8-1.3l.2-.3c1.8-3.1 2.8-6.7 2.8-10.6 0-11.9-9.7-21.6-21.6-21.6zm0 13.4c4.6 0 8.3 3.7 8.3 8.3 0 4.6-3.7 8.3-8.3 8.3-4.6 0-8.3-3.7-8.3-8.3 0-4.6 3.7-8.3 8.3-8.3z"}})]),t._v("\n            "+t._s(n.published)+"\n            "),i("div",{staticClass:"sidebar--item-list--index"},[t._v("Story "+t._s(a+1)+" "),i("span",{staticClass:"badge"},[t._v("Coming soon")])]),t._v(" "),i("h3",{staticClass:"sidebar--item-list--title"},[t._v(t._s(n.title))]),t._v(" "),i("p",{staticClass:"sidebar--item-list--intro"},[t._v(t._s(n.intro))])]):i("router-link",{staticClass:"sidebar--item-list--link has-icon",attrs:{to:{name:"story",params:{id:n.id}}}},[i("svg",{staticClass:"sidebar--item--icon",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"46.3",height:"69.5",viewBox:"0 0 46.3 69.5"}},[i("path",{attrs:{fill:"none",stroke:"#000","stroke-width":"2.297","stroke-miterlimit":"10",d:"M23.2 1.5c-12 0-21.7 9.7-21.7 21.7 0 3.8 1 7.4 2.8 10.6l.9 1.5 17.9 31.2L41 35.3c.3-.4.5-.8.8-1.3l.2-.3c1.8-3.1 2.8-6.7 2.8-10.6 0-11.9-9.7-21.6-21.6-21.6zm0 13.4c4.6 0 8.3 3.7 8.3 8.3 0 4.6-3.7 8.3-8.3 8.3-4.6 0-8.3-3.7-8.3-8.3 0-4.6 3.7-8.3 8.3-8.3z"}})]),t._v(" "),i("div",{staticClass:"sidebar--item-list--index"},[t._v("Story "+t._s(a+1))]),t._v(" "),i("h3",{staticClass:"sidebar--item-list--title"},[t._v(t._s(n.title))]),t._v(" "),i("p",{staticClass:"sidebar--item-list--intro"},[t._v(t._s(n.intro))])])],1)}),0)]):t._e(),t._v(" "),i("button",{staticClass:"sidebar--hide-button",on:{click:function(n){t.showSidebar=!1}}},[i("span",[t._v("«")]),t._v(" Hide sidebar\n    ")])]):i("button",{key:"show-sidebar",staticClass:"sidebar--show-button",on:{click:function(n){t.showSidebar=!0}}},[t._v("\n    Show sidebar "),i("span",[t._v("»")])])])},[],!1,null,null,null);s.options.__file="Stories.vue";n.default=s.exports},67:function(t,n,i){var a=i(71);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,i(5).default)("3d3d84db",a,!0,{})},68:function(t,n,i){var a=i(73);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,i(5).default)("4552102a",a,!0,{})},69:function(t,n,i){var a=i(75);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,i(5).default)("51e5259f",a,!0,{})},70:function(t,n,i){"use strict";var a=i(67);i.n(a).a},71:function(t,n,i){n=t.exports=i(4)(!1);var a=i(9),e=a(i(14)),s=a(i(15));n.push([t.i,"/************\n***  Breakpoints\n************/\n/************\n***  Colours\n************/\n/************\n***  Fonts\n************/\n@font-face {\n  font-family: BarlowOxford;\n  src: url("+e+"), url("+s+");\n  font-weight: 700;\n}\n\n/************\n***  Typography\n************/\n/************\n***  Misc. units\n************/\n/************\n***  Functions and mixins\n************/\n",""])},72:function(t,n,i){"use strict";var a=i(68);i.n(a).a},73:function(t,n,i){n=t.exports=i(4)(!1);var a=i(9),e=a(i(14)),s=a(i(15));n.push([t.i,'@charset "UTF-8";\n/************\n***  Breakpoints\n************/\n/************\n***  Colours\n************/\n/************\n***  Fonts\n************/\n@font-face {\n  font-family: BarlowOxford;\n  src: url('+e+"), url("+s+");\n  font-weight: 700;\n}\n\n/************\n***  Typography\n************/\n/************\n***  Misc. units\n************/\n/************\n***  Functions and mixins\n************/\n.article[data-v-76a84985] {\n  background-color: #e3f8f5;\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  width: 100%;\n  overflow: hidden;\n  overflow-y: auto;\n  z-index: 999;\n}\n@media screen and (min-width: 820px) {\n.article[data-v-76a84985] {\n      top: -1.5em;\n      left: auto;\n      z-index: -1;\n      width: calc(100% - 30vw);\n      max-width: calc(100% - 15rem);\n}\n.article[data-v-76a84985]::before, .article[data-v-76a84985]::after {\n        content: '';\n        position: fixed;\n        right: 0;\n        top: 0;\n        width: calc(100% - 30vw);\n        max-width: calc(100% - 15rem);\n        height: 5em;\n        background-image: linear-gradient(to bottom, #e3f8f5 0%, rgba(227, 248, 245, 0) 100%);\n}\n.article[data-v-76a84985]::after {\n        top: auto;\n        bottom: 0;\n        background-image: linear-gradient(to top, #e3f8f5 0%, rgba(227, 248, 245, 0) 100%);\n}\n}\n.article--inner[data-v-76a84985] {\n  margin: 0;\n  padding: 4em 2em;\n  display: flex;\n  flex-direction: row;\n}\n@media screen and (min-width: 1080px) {\n.article--inner[data-v-76a84985] {\n      padding: 6em 4em;\n}\n}\n.article--content[data-v-76a84985] {\n  max-width: 48em;\n}\n.article--image[data-v-76a84985] {\n  display: none;\n  width: 6em;\n  margin-right: 1em;\n  flex: 0 0 6em;\n}\n@media screen and (min-width: 1080px) {\n.article--image[data-v-76a84985] {\n      display: block;\n}\n}\n.article--image img[data-v-76a84985] {\n    width: 100%;\n    height: auto;\n    border-radius: 50%;\n}\n.article--title[data-v-76a84985] {\n  font-size: 2.48832em;\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.article--author[data-v-76a84985] {\n  font-size: 1em;\n  font-weight: 700;\n  margin-top: .5em;\n  margin-bottom: 1.5em;\n}\n.article--back-button[data-v-76a84985] {\n  display: block;\n  background-color: white;\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  text-align: center;\n  text-decoration: none;\n  line-height: 3em;\n  width: auto;\n  border: 1px solid #d1d3da;\n  font-size: 0.83333em;\n}\n@media screen and (min-width: 820px) {\n.article--back-button[data-v-76a84985] {\n      font-size: 1em;\n      width: 4em;\n      border: none;\n      height: 4em;\n      text-indent: -9999px;\n      top: 1em;\n      right: 1em;\n      left: auto;\n      bottom: auto;\n      background-color: #74DACF;\n      border-radius: 50%;\n}\n.article--back-button[data-v-76a84985]::after {\n        content: '×';\n        text-indent: 0;\n        display: block;\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        font-size: 2.0736em;\n        color: white;\n        transform: translate(-50%, -50%);\n}\n}\n",""])},74:function(t,n,i){"use strict";var a=i(69);i.n(a).a},75:function(t,n,i){n=t.exports=i(4)(!1);var a=i(9),e=a(i(14)),s=a(i(15));n.push([t.i,"/************\n***  Breakpoints\n************/\n/************\n***  Colours\n************/\n/************\n***  Fonts\n************/\n@font-face {\n  font-family: BarlowOxford;\n  src: url("+e+"), url("+s+");\n  font-weight: 700;\n}\n\n/************\n***  Typography\n************/\n/************\n***  Misc. units\n************/\n/************\n***  Functions and mixins\n************/\n.sidebar__story {\n  z-index: 99;\n}\n.sidebar__story::after {\n    border-top-color: #74DACF;\n}\n.sidebar--item-list--link__article {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n.article-image {\n  display: none;\n  width: 4em;\n  height: 4em;\n  border-radius: 50%;\n  margin-right: .75em;\n}\n@media screen and (min-width: 1080px) {\n.article-image {\n      display: block;\n}\n}\n.article-title {\n  margin-top: 0;\n  margin-bottom: .25em;\n}\n.article-text {\n  margin-right: .75em;\n}\n.article-button {\n  flex: 0 0 2em;\n  background-color: #45506B;\n  border-radius: 50%;\n  width: 2em;\n  height: 2em;\n  padding: .5em;\n  margin-left: auto;\n}\n.article-button * {\n    stroke-width: 0.125rem;\n}\n",""])}}]);