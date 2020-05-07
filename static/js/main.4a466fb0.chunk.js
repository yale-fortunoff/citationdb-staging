(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,t,a){},39:function(e,t,a){e.exports=a(95)},44:function(e,t,a){},79:function(e,t,a){},87:function(e,t,a){},88:function(e,t,a){},95:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"yearCounts",function(){return P}),a.d(n,"countByType",function(){return C});var r={};a.r(r),a.d(r,"secondsToTimestamp",function(){return I}),a.d(r,"getResourceLink",function(){return A});var i=a(0),o=a.n(i),c=a(30),s=a.n(c),l=a(16),u=a(1),m=a(2),h=a(4),p=a(3),d=a(6),b=a(5);function f(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}var v=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"id";return Object.keys(e).map(function(a){var n=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?f(a,!0).forEach(function(t){Object(l.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):f(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}({},e[a]);return n[t]=a,n})},y=function(){function e(t){var a=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(e){},r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(e){},i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:function(){};if(Object(u.a)(this,e),this.loaded=!1,this.headerKey=n.bind(this),this.typeKey=r.bind(this),this.resourceDictionary=t,this.resourceArray=v(t),this.all=this.all.bind(this),this.dictionary=this.dictionary.bind(this),this.byId=this.byId.bind(this),this.filter=this.filter.bind(this),this.find=this.find.bind(this),this.handleData=this.handleData.bind(this),this.fireWhenLoaded=i.bind(this),this.hasLoaded=this.hasLoaded.bind(this),t.hasOwnProperty("fetch-data-url")){var o=t["fetch-data-url"];fetch(o).then(function(e){return e.json()}).then(function(e){return a.handleData(e)},function(e){console.error("Error loading data "+o,e)})}else this.handleData(t)}return Object(m.a)(e,[{key:"hasLoaded",value:function(){return this.loaded}},{key:"handleData",value:function(e){var t=this;Object.keys(e).forEach(function(a){var n=e[a];n.id=a,n.__header=t.headerKey(n),n.__type=t.typeKey(n)}),this.resourceDictionary=e,this.resourceArray=v(e),this.loaded=!0,this.fireWhenLoaded()}},{key:"dictionary",value:function(){return this.resourceDictionary}},{key:"all",value:function(){return this.resourceArray}},{key:"byId",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"id",a=Object.assign({},this.dictionary()[e]);return a[t]=e,a}},{key:"filter",value:function(e){return this.all().filter(e)}},{key:"find",value:function(e){var t=this.filter(e);if(1===t.length)return t[0];if(t.length<1)throw new Error("Error: More than one result found matching criteria");if(t.length>0)throw new Error("Error: No results found")}}]),e}(),O=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(e){return e},a=[];return e.filter(function(e){var n=t(e);return e?!(a.indexOf(n)>=0)&&(a.push(n),!0):null})},g=new(function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(h.a)(this,Object(p.a)(t).call(this,e,function(e){return e.title},function(e){return"publication"}))).byAuthor=a.byAuthor.bind(Object(d.a)(a)),a.inFootnotes=a.inFootnotes.bind(Object(d.a)(a)),a.byResource=a.byResource.bind(Object(d.a)(a)),a}return Object(b.a)(t,e),Object(m.a)(t,[{key:"byAuthor",value:function(e){return this.filter(function(t){return t["author.id"].indexOf(e)>=0})}},{key:"inFootnotes",value:function(e){var t=this;return O(e.map(function(e){return t.byId(e["publication.id"])}),function(e){return e.id})}},{key:"byResource",value:function(e){return this.inFootnotes(j.byResource(e))}}]),t}(y))({"fetch-data-url":"data/publication.json"}),E={publication:"publication",author:"author",footnote:"footnote",resource:"resource"},j=new(function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(h.a)(this,Object(p.a)(t).call(this,e,function(e){return g.byId(e["publication.id"])},function(e){return E.footnote}))).byPublication=a.byPublication.bind(Object(d.a)(a)),a.byAuthor=a.byAuthor.bind(Object(d.a)(a)),a.byResource=a.byResource.bind(Object(d.a)(a)),a}return Object(b.a)(t,e),Object(m.a)(t,[{key:"byPublication",value:function(e){return this.filter(function(t){return t["publication.id"]===e})}},{key:"byResource",value:function(e){return this.filter(function(t){return t["resource.id"]===e})}},{key:"byAuthor",value:function(e){var t=this,a=[];return g.byAuthor(e).forEach(function(e){a=a.concat(t.byPublication(e.id))}),a}},{key:"getFootnoteURI",value:function(e){var t=e["resource.id"].trim();if(t.indexOf("HVT-")<0)return"https://fortunoff.aviaryplatform.com/";var a="https://fortunoff.aviaryplatform.com/c/"+("mssa.hvt."+t.slice(4))+"/";if(!e.tape)return a;var n=Number(e.tape),r=Math.round(e.start_time);return!n||r.length<1?a:a+Math.round(n)+"/"+r}}]),t}(y))({"fetch-data-url":"data/footnote.json"}),k=new(function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(h.a)(this,Object(p.a)(t).call(this,e,function(e){return e.title},function(e){return"resource"}))).citedByAuthor=a.citedByAuthor.bind(Object(d.a)(a)),a.inFootnotes=a.inFootnotes.bind(Object(d.a)(a)),a.byPublication=a.byPublication.bind(Object(d.a)(a)),a.citedByAuthor=a.citedByAuthor.bind(Object(d.a)(a)),a}return Object(b.a)(t,e),Object(m.a)(t,[{key:"inFootnotes",value:function(e){var t=this;return O(e.map(function(e){return t.byId(e["resource.id"])}))}},{key:"byPublication",value:function(e){return this.inFootnotes(j.byPublication(e))}},{key:"citedByAuthor",value:function(e){return this.inFootnotes(j.byAuthor(e))}}]),t}(y))({"fetch-data-url":"data/resource.json"}),w=new y({"fetch-data-url":"data/author.json"},function(e){return e.name},function(e){return E.author}),N=a(38),S=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(h.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).dict={},a.ks=[],a.add=a.add.bind(Object(d.a)(a)),a.addArray=a.addArray.bind(Object(d.a)(a)),a}return Object(b.a)(t,e),Object(m.a)(t,[{key:"add",value:function(e,t){t||(t=e),this.ks.indexOf(String(e))>=0||this.ks.includes(e)||(this.dict[e]=t,this.ks=Object.keys(this.dict),this.push(t))}},{key:"addArray",value:function(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(e){return e},a=0;a<e.length;a++)this.add(t(e[a]),e[a])}}]),t}(Object(N.a)(Array));function P(e){var t={};return e.forEach(function(e){Number(e.date)&&4===String(e.date).length&&(t[e.date]||(t[e.date]={count:0,label:e.date}),t[e.date].count+=1)}),t=Object.keys(t).map(function(e){return t[e]})}function C(e){var t={publication:0,footnote:0,resource:0,author:0};return e.forEach(function(e){t[e.__type]||(t[e.__type]=0),t[e.__type]+=1}),t}function I(e){var t=Math.floor(e/3600),a=e-60*t*60,n=Math.floor(a/60);a-=60*n;var r=Math.floor(a),i=function(e){return String(e).padStart(2,"0")};return"".concat(i(t),":").concat(i(n),":").concat(i(r))}function A(e){var t=String(e.id.slice(4)).padStart(4,"0");return"https://fortunoff.aviaryplatform.com/c/mssa.hvt.".concat(t)}var T={author:w,footnote:j,publication:g,resource:k,search:function(e){var t=(e=e||{}).toggles||{},a=e.searchTerm||"",n=new S;function r(e,n,r){return!0!==t[e]?[]:r.filter(function(e){var t=n(e);return a.trim().length<1||!!t&&!!(t.toLowerCase().indexOf(a.toLowerCase())>=0)})}return n.addArray(r("author",function(e){return e.name},w),function(e){return"author."+e.id}),n.addArray(r("resource",function(e){return e.title},k),function(e){return"resource."+e.id}),n.addArray(r("publication",function(e){return w.byId(e["author.id"]).name},g),function(e){return"publication."+e.id}),n.addArray(r("publication",function(e){return e.title},g),function(e){return"publication."+e.id}),n},summarize:n,utils:r},x=a(9),D=(a(25),a(44),function(e){function t(){return Object(u.a)(this,t),Object(h.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return o.a.createElement("button",{type:"button",onClick:this.props.onClick,className:"Button"},this.props.text)}}]),t}(o.a.Component)),F=localStorage,_={};function L(){try{F.setItem("canary",Date.now()),F.removeItem("canary")}catch(e){return!1}return!0}function R(e){return"yale-fortunoff-cdb-"+e}function B(e){if(!L())return[];var t=F.getItem(R(e));if(!t)return[];try{return JSON.parse(t)}catch(a){return[]}}function H(e,t){L()&&(F.setItem(R(e),JSON.stringify(t)),Object.keys(_).forEach(function(e){return _[e]()}))}function M(e,t){_[e]=t}function W(e,t){var a=B(e);a.indexOf(t)>=0||(a.push(t),H(e,a))}function Y(e,t){H(e,B(e).filter(function(e){return e!==t}))}var U={resource:"resource",publication:"publication",author:"author"};function z(){return B(U.author).map(function(e){return T.author.byId(e)})}function J(){return B(U.publication).map(function(e){return T.publication.byId(e)})}function K(){return B(U.resource).map(function(e){return T.resource.byId(e)})}function V(e){W(U.resource,e)}function G(e){W(U.publication,e)}function X(e){W(U.author,e)}function $(e){Y(U.resource,e)}function q(e){Y(U.publication,e)}function Q(e){Y(U.author,e)}var Z=function(e){function t(e){var a;if(Object(u.a)(this,t),"resource"===(a=Object(h.a)(this,Object(p.a)(t).call(this,e))).props.type)a.saveItem=V,a.removeItem=$,a.getSavedItems=K;else if("author"===a.props.type)a.saveItem=X,a.removeItem=Q,a.getSavedItems=z;else{if("publication"!==a.props.type)return Object(h.a)(a);a.saveItem=G,a.removeItem=q,a.getSavedItems=J}return a.isSaved=a.isSaved.bind(Object(d.a)(a)),a.state={isSaved:a.isSaved()},a}return Object(b.a)(t,e),Object(m.a)(t,[{key:"isSaved",value:function(){return this.getSavedItems().map(function(e){return e.id}).indexOf(this.props.id)>=0}},{key:"setSaved",value:function(){this.setState({isSaved:this.isSaved()})}},{key:"render",value:function(){var e=this;return["publication","author","resource"].indexOf(this.props.type)<0?null:o.a.createElement("div",{className:"SaveButton ".concat(this.state.isSaved?"unsave":"save")},this.isSaved()?o.a.createElement(D,{onClick:function(){e.removeItem(e.props.id),e.setSaved()},text:"unpin"}):o.a.createElement(D,{onClick:function(){e.saveItem(e.props.id),e.setSaved()},text:"pin"}))}}]),t}(o.a.Component),ee=a(7),te=a.n(ee),ae={histogram:{minYear:1975,maxYear:2020},words:{resource:{singular:"testimony",plural:"testimonies"}}},ne=function(e){function t(){return Object(u.a)(this,t),Object(h.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"pill-tray-wrapper ".concat(this.props.title)},o.a.createElement("div",{className:"pill-tray"},o.a.createElement("div",{className:"pill-tray-title"},this.props.items.length," ",this.props.title),this.props.items.slice(0,5).map(function(e,t){return o.a.createElement("div",{key:t,className:"pill"},o.a.createElement(x.b,{to:e.link},e.title))})))}}]),t}(o.a.Component),re=function(e){function t(){return Object(u.a)(this,t),Object(h.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props.type+"s";if(this.props.type===E.footnote){var t=this.props.item,a=T.resource.byId(this.props.item["resource.id"]);return o.a.createElement("div",{className:"HeaderLink"},o.a.createElement(x.b,{to:"/resources/".concat(a.id)},a.title," ",t.start_time?"@".concat(T.utils.secondsToTimestamp(t.start_time)):null))}return o.a.createElement(x.b,{to:"/".concat(e,"/").concat(this.props.item.id)},this.props.header)}}]),t}(o.a.Component),ie=function(e){function t(){return Object(u.a)(this,t),Object(h.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props.type;return ae.words.hasOwnProperty(this.props.type)&&(e=ae.words[e].singular),o.a.createElement("div",{className:"ItemHeader"},o.a.createElement("div",{className:"badge result-type"},"[",e,"]")," ",o.a.createElement(re,this.props))}}]),t}(o.a.Component),oe=function(e){function t(){return Object(u.a)(this,t),Object(h.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,this.props.item.text?'"'.concat(this.props.item.text,'"'):null,o.a.createElement("div",null,o.a.createElement("span",{className:"metadata light"},this.props.item.chapter?"".concat(this.props.item.chapter,", "):null),o.a.createElement("span",{className:"metadata light"},this.props.item.page?"page ".concat(this.props.item.page," "):null)))}}]),t}(o.a.Component),ce=function(e){function t(){return Object(u.a)(this,t),Object(h.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=T.publication.byAuthor(this.props.item.id),t=T.resource.citedByAuthor(this.props.item.id);return o.a.createElement("div",null,o.a.createElement("div",null,o.a.createElement(ne,{title:te()("publications",e.length),items:e.map(function(e){return{title:e.title,link:"/publications/".concat(e.id)}})})),o.a.createElement("div",null,o.a.createElement(ne,{title:te()(ae.words.resource.singular,t.length)+" cited",items:t.map(function(e){return{title:e.title,link:"/resources/".concat(e.id)}})})))}}]),t}(o.a.Component),se=function(e){function t(){return Object(u.a)(this,t),Object(h.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=T.footnote.byResource(this.props.item.id),t=T.publication.inFootnotes(e);return o.a.createElement("div",null,o.a.createElement("div",null,o.a.createElement("span",{className:"metadata light"},this.props.item.id)),o.a.createElement("div",null,o.a.createElement(ne,{title:te()("publication",t.length),items:t.map(function(e){return{title:e.title,link:"/publications/".concat(e.id)}})})))}}]),t}(o.a.Component),le=function(e){function t(){return Object(u.a)(this,t),Object(h.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props.item,t=(this.props.item["author.id"]||[]).map(function(e){return T.author.byId(e)||{}}),a=T.resource.byPublication(this.props.item.id);return o.a.createElement("div",null,o.a.createElement("div",null,t.map(function(e,t){return e.name?o.a.createElement("span",{key:t,className:"metadata"},o.a.createElement(x.b,{to:"/authors/".concat(e.id)},e.name)):null}),e.publisher?o.a.createElement("span",{className:"metadata light"},", ",e.publisher):null,e.date?o.a.createElement("span",{className:"metadata light"},", ",e.date):null),o.a.createElement("div",null,o.a.createElement(ne,{title:te()(ae.words.resource.singular,a.length)+" cited",items:a.map(function(e){return{title:e.title,link:"/resources/".concat(e.id)}})})))}}]),t}(o.a.Component),ue=function(e){function t(){return Object(u.a)(this,t),Object(h.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return"author"===this.props.type?o.a.createElement(ce,this.props):"publication"===this.props.type?o.a.createElement(le,this.props):"resource"===this.props.type?o.a.createElement(se,this.props):"footnote"===this.props.type?o.a.createElement(oe,this.props):o.a.createElement("div",{className:"Footer"})}}]),t}(o.a.Component),me=function(e){function t(){return Object(u.a)(this,t),Object(h.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"ResultListItem ".concat(this.props.type)},o.a.createElement("div",{className:"content-area"},o.a.createElement("header",null,o.a.createElement(ie,this.props)),o.a.createElement("footer",null,o.a.createElement(ue,this.props))),"footnote"===this.props.type?o.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:T.footnote.getFootnoteURI(this.props.item)},o.a.createElement(D,{text:"View"})):null,o.a.createElement(Z,{type:this.props.type,id:this.props.item.id}))}}]),t}(o.a.Component),he=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(h.a)(this,Object(p.a)(t).call(this,e))).state={itemCount:25,step:10},a.loadMore=a.loadMore.bind(Object(d.a)(a)),a.trackScrolling=a.trackScrolling.bind(Object(d.a)(a)),a}return Object(b.a)(t,e),Object(m.a)(t,[{key:"decideToIncrement",value:function(e){this.props.items.length>this.state.itemCount&&e<100&&this.loadMore()}},{key:"trackScrolling",value:function(){var e=window.pageYOffset+window.innerHeight,t=window.document.body.offsetHeight-e;this.decideToIncrement(t)}},{key:"componentDidMount",value:function(){document.addEventListener("scroll",this.trackScrolling)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("scroll",this.trackScrolling)}},{key:"loadMore",value:function(){var e=this.state.itemCount+this.state.step;this.setState({itemCount:e})}},{key:"render",value:function(){var e=this.props.items.sort(function(e,t){return e.__header>t.__header?1:-1}).map(function(e,t){return o.a.createElement(me,{key:t,item:e,type:e.__type,header:e.__header})}).slice(0,this.state.itemCount);return o.a.createElement("div",{className:"ResultList"},e)}}]),t}(o.a.Component),pe=a(33),de=(a(79),function(e){function t(){return Object(u.a)(this,t),Object(h.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{onClick:this.props.handleClick,className:"ToggleButton ".concat(this.props.itemType," ").concat(this.props.status?"on":"off")},o.a.createElement(D,{text:this.props.label}))}}]),t}(o.a.Component)),be=function(e){function t(){return Object(u.a)(this,t),Object(h.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("section",{className:"SearchArea column-wrapper"},o.a.createElement(pe.TextInput,{callback:this.props.callback,value:this.props.value,placeholder:"Search by author, publication title or ".concat(ae.words.resource.singular,"...")})),o.a.createElement("section",{className:"toggle-box column-wrapper"},o.a.createElement("div",{className:"label"}),this.props.toggles.map(function(e,t){var a=e.label,n=te()(a,1);return ae.words.hasOwnProperty(n)&&(a=ae.words[n].plural),o.a.createElement(de,{key:t,handleClick:e.handler,label:a,itemType:e.label,status:e.status})})))}}]),t}(o.a.Component),fe=a(34),ve=function(e){function t(){return Object(u.a)(this,t),Object(h.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=T.summarize.yearCounts(this.props.items.filter(function(e){return"publication"===e.__type}));return e.length<1?null:o.a.createElement("div",{className:"PublicationHistogram"},o.a.createElement(fe.Histogram,{data:e,minYear:ae.histogram.minYear,maxYear:ae.histogram.maxYear,margin:{top:10,left:30,right:10,bottom:20}}),o.a.createElement("h6",{className:"center"},"Publications by year"))}}]),t}(o.a.Component),ye=a(14),Oe=a(37),ge=function(){var e=function(){return z().length+J().length+K().length},t=Object(i.useState)(e()),a=Object(Oe.a)(t,2),n=a[0],r=a[1];return M("counter",function(){r(e())}),o.a.createElement(o.a.Fragment,null,n>0?o.a.createElement(x.b,{className:"PinsButton",to:"/pins"},o.a.createElement(D,{text:te()("pin",n,!0)})):null)};function Ee(e){var t=Object(ye.f)(function(e){return"/"===e.location.pathname?null:o.a.createElement(x.b,{className:"HomeButton",to:"/"},o.a.createElement(D,{text:"home"}))}),a=e.id,n=e.saveType||"invalid";return o.a.createElement("nav",{className:"BreadCrumb"},o.a.createElement("div",{className:"breadcrumb-left"},o.a.createElement(t,null),o.a.createElement(ge,null)),o.a.createElement(Z,{id:a,type:n}))}function je(e,t){return o.a.createElement("div",{className:"top-matter-wrapper"},o.a.createElement("div",{className:"top-matter-inner column-wrapper"},o.a.createElement(Ee,t),o.a.createElement("section",{className:"top-matter"},e)))}a(87);function ke(e){return o.a.createElement("div",{className:"BigNumber ".concat(e.label)},o.a.createElement("div",{className:"number"},e.value),o.a.createElement("div",{className:"label"},te()(e.label,e.value)))}function we(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function Ne(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?we(a,!0).forEach(function(t){Object(l.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):we(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var Se=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(h.a)(this,Object(p.a)(t).call(this,e))).state={searchTerm:"",toggles:{resource:!0,publication:!0,author:!0}},a.toggleFactory=a.toggleFactory.bind(Object(d.a)(a)),a.setSearchTerm=a.setSearchTerm.bind(Object(d.a)(a)),a}return Object(b.a)(t,e),Object(m.a)(t,[{key:"setSearchTerm",value:function(e){this.setState({searchTerm:e})}},{key:"toggleFactory",value:function(e){var t=this;return function(){var a=Ne({},t.state,{toggles:Ne({},t.state.toggles)});a.toggles[e]=!t.state.toggles[e],t.setState(a)}}},{key:"render",value:function(){var e=this,t=T.search(this.state),a=T.summarize.countByType(t);return o.a.createElement("div",{className:"HomePage"},je(o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"left"},o.a.createElement(ve,{items:t})),o.a.createElement("div",{className:"right"},o.a.createElement("div",{className:"bignumber-tray"},o.a.createElement(ke,{label:"testimonies",value:a.resource}),o.a.createElement(ke,{label:"publications",value:a.publication}),o.a.createElement(ke,{label:"authors",value:a.author})))),{id:null}),o.a.createElement(be,{callback:this.setSearchTerm,value:this.state.searchTerm,toggles:Object.keys(this.state.toggles).map(function(t){return{label:t+"s",handler:e.toggleFactory(t),status:e.state.toggles[t]}})}),o.a.createElement("section",{className:"column-wrapper"},o.a.createElement(he,{items:t})))}}]),t}(o.a.Component),Pe=function(e){function t(){return Object(u.a)(this,t),Object(h.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props.match.params.id,t=T.publication.byId(e),a=t["author.id"].map(function(e){return T.author.byId(e)}),n=T.footnote.byPublication(e),r=n.length,i=O(T.resource.inFootnotes(n).map(function(e){return e.id})).length;return o.a.createElement("div",{className:"PublicationPage"},je(o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"left"},o.a.createElement("h1",{className:"title"},t.title),o.a.createElement("div",{className:"chunk"},a.map(function(e,t){return o.a.createElement("span",{key:t,className:"metadata"},o.a.createElement(x.b,{to:"/authors/".concat(e.id)},e.name?"".concat(e.name):null),"; ")}),o.a.createElement("span",{className:"metadata"},t.publisher?"".concat(t.publisher):null),o.a.createElement("span",{className:"metadata light"},t.date?", ".concat(t.date):null)),o.a.createElement("div",{className:"metadata light"},t.uri?o.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:t.uri},"Publication page"):null),o.a.createElement("div",{className:"summary"},o.a.createElement("p",null,"This publication cites ",o.a.createElement("span",{className:"stat"},i," ",te()(ae.words.resource.singular,i))," ","in the ",o.a.createElement("span",{className:"stat"},r," ",te()("citation",r))," listed below."))),o.a.createElement("div",{className:"right"},o.a.createElement("div",{className:"bignumber-tray"},o.a.createElement(ke,{label:"citations",value:r}),o.a.createElement(ke,{label:ae.words.resource.plural,value:i})))),{id:e,saveType:"publication"}),o.a.createElement("section",{className:"column-wrapper"},o.a.createElement(he,{items:n})))}}]),t}(o.a.Component),Ce=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(h.a)(this,Object(p.a)(t).call(this,e))).state={},a}return Object(b.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e,t=this.props.match.params.id,a=T.resource.dictionary()[t];if(!a)return e=this.props.location.pathname,o.a.createElement("div",null,o.a.createElement("h1",null,"No match found for '",e,"'"),o.a.createElement("p",null,"This is a 404"));var n=T.publication.byResource(t),r=T.footnote.byResource(t);return console.log("Footnotes",r),o.a.createElement("div",{className:"ResourcePage"},je(o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"left"},o.a.createElement("h1",{className:"title"},a.title),o.a.createElement("div",{className:"chunk metadata"},a.id),o.a.createElement("div",{className:"view-button-container"},o.a.createElement("a",{href:T.utils.getResourceLink(a)}," ",o.a.createElement(D,{text:"View"}))),o.a.createElement("div",{className:"summary"},o.a.createElement("p",null,"This ",ae.words.resource.singular," has been cited ",o.a.createElement("span",{className:"stat"},r.length," ",te()("time",r.length))," ","in the ",o.a.createElement("span",{className:"stat"},n.length," ",te()("publication",n.length))," listed below."))),o.a.createElement("div",{className:"right"},o.a.createElement(ve,{items:n}),o.a.createElement("div",{className:"bignumber-tray"},o.a.createElement(ke,{label:"citations",value:r.length}),o.a.createElement(ke,{label:"publications",value:n.length})))),{id:t,saveType:"resource"}),o.a.createElement("section",{className:"column-wrapper"},o.a.createElement(he,{items:n})))}}]),t}(o.a.Component),Ie=function(e){function t(){return Object(u.a)(this,t),Object(h.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props.match.params.id,t=T.publication.byId(e),a=T.author.byId(t.id),n=T.publication.byAuthor(e),r=T.footnote.byAuthor(e),i=O(T.resource.inFootnotes(r).map(function(e){return e.id})).length;return o.a.createElement("div",{className:"PublicationPage"},je(o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"left"},o.a.createElement("h1",{className:"title"},a.name),o.a.createElement("div",null,a.uri.length>0?o.a.createElement("a",{href:a.uri,rel:"author"},"Author website"):null),o.a.createElement("div",{className:"summary"},o.a.createElement("p",null,"This author has made ",o.a.createElement("span",{className:"stat"},r.length," ",te()("citation",r.length))," ","to ",o.a.createElement("span",{className:"stat"},i," ",te()(ae.words.resource.singular,i))," ","in the ",o.a.createElement("span",{className:"stat"},n.length," ",te()("publication",n.length))," listed below."))),o.a.createElement("div",{className:"right"},o.a.createElement("div",{className:"bignumber-tray"},o.a.createElement(ke,{label:"publications",labelSingular:"publication",value:n.length}),o.a.createElement(ke,{label:"citations",labelSingular:"citation",value:r.length}),o.a.createElement(ke,{label:ae.words.resource.plural,labelSingular:ae.words.resource.singular,value:i})))),{id:e,saveType:"author"}),o.a.createElement("section",{className:"column-wrapper"},o.a.createElement(he,{items:n})))}}]),t}(o.a.Component);function Ae(e){return function(t){return o.a.createElement("div",{className:"GenericPage"},o.a.createElement(e,t))}}var Te=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(h.a)(this,Object(p.a)(t).call(this,e))).state={publications:J(),authors:z(),resources:K()},a.updateCounts=a.updateCounts.bind(Object(d.a)(a)),a}return Object(b.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){M("saved-items-page",this.updateCounts)}},{key:"componentWillUnmount",value:function(){_["saved-items-page"]=function(){}}},{key:"updateCounts",value:function(){var e=J(),t=z(),a=K();this.setState({publications:e,authors:t,resources:a})}},{key:"render",value:function(){var e=this.state.resources,t=this.state.authors,a=this.state.publications;return console.log(e),console.log(t),console.log(a),o.a.createElement("div",{className:"SavedItemPage"},je(o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"left"},o.a.createElement("h1",{className:"title"},"Your pinned items"),o.a.createElement("p",null,"These items are stored temporarily in your browser. They will not be saved after you close the browser window or tab.")),o.a.createElement("div",{className:"right"},o.a.createElement("div",{className:"bignumber-tray"},o.a.createElement(ke,{label:"testimonies",value:e.length}),o.a.createElement(ke,{label:"publications",value:a.length}),o.a.createElement(ke,{label:"authors",value:t.length})))),{}),o.a.createElement("section",{className:"column-wrapper"},o.a.createElement(he,{items:e}),o.a.createElement(he,{items:a}),o.a.createElement(he,{items:t})))}}]),t}(o.a.Component);a(88);function xe(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function De(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?xe(a,!0).forEach(function(t){Object(l.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):xe(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var Fe=function(e){function t(e){var a;Object(u.a)(this,t),(a=Object(h.a)(this,Object(p.a)(t).call(this,e))).state={},a.dataHasLoaded=a.dataHasLoaded.bind(Object(d.a)(a));var n=0,r=20,i=setInterval(function(){n+=1;var e=0,t=[T.author,T.publication,T.footnote,T.resource];t.forEach(function(t){!0===t.hasLoaded()&&e++}),e===t.length?(a.dataHasLoaded(),clearInterval(i)):(console.log("Data has not completely loaded yet "+n),--r<=0&&(console.log("Bailing X("),clearInterval(i)))},10);return a}return Object(b.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){console.log("Component mounted."),window.addEventListener("beforeinstallprompt",function(e){console.log("Can install"),e.prompt(),console.log(e.prompt)})}},{key:"dataHasLoaded",value:function(){this.setState({loaded:!0})}},{key:"render",value:function(){return this.state.loaded?o.a.createElement("main",{className:"CitationDB"},o.a.createElement(x.a,{basename:"/citationdb"},o.a.createElement(ye.c,null,o.a.createElement(ye.a,{path:"/publications/:id",render:function(e){return Ae(Pe)(De({saveType:"publication"},e))}}),o.a.createElement(ye.a,{path:"/resources/:id",render:function(e){return Ae(Ce)(De({saveType:"resource"},e))}}),o.a.createElement(ye.a,{path:"/authors/:id",render:function(e){return Ae(Ie)(De({saveType:"author"},e))}}),o.a.createElement(ye.a,{path:"/pins",component:Ae(Te)}),o.a.createElement(ye.a,{path:"/",component:Ae(Se),exact:!0})))):o.a.createElement("div",null,"Loading...")}}]),t}(o.a.Component),_e=a(35),Le=a.n(_e),Re=a(36);var Be=function(){var e=Object(Re.fortunize)(Fe);return o.a.createElement("div",{className:"App"},o.a.createElement(Le.a,null),o.a.createElement(e,null))},He=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Me(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}s.a.render(o.a.createElement(Be,null),document.getElementById("root")),function(e){if(console.log("Registering service worker"),"serviceWorker"in navigator){if(new URL("/citationdb",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/citationdb","/service-worker.js");He?(function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):Me(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):Me(t,e)})}}()}},[[39,1,2]]]);
//# sourceMappingURL=main.4a466fb0.chunk.js.map