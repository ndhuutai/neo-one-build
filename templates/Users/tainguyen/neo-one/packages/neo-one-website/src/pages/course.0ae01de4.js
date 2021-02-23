(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{151:function(e,t,n){"use strict";n.r(t);n(137);var r=n(0),o=n.n(r),a=n(384),i=(n(73),n(4)),s=n(763),c=n(7),l=n(3),p=n(1),d=n(312);const m=Object(c.a)(i.Box,{target:"e1l8rnc10"})({name:"v2kfba",styles:"height:100%;width:100%;"}),u=Object(c.a)(i.Box,{target:"e1l8rnc11"})("display:grid;background-color:",Object(p.prop)("theme.gray6"),";padding-top:64px;padding-bottom:128px;width:100%;place-items:center;place-content:center;"),g=Object(c.a)(i.Box,{target:"e1l8rnc12"})("display:grid;background-color:",Object(p.prop)("theme.black"),";max-width:480px;margin:16px;padding:16px;box-shadow:0 6px 4px 4px rgba(0,0,0,0.2);"),b=Object(c.a)(i.Box,{target:"e1l8rnc13"})("color:",Object(p.prop)("theme.gray0"),";",Object(p.prop)("theme.fontStyles.subheading"),";"),h=e=>{var{message:t}=e,n=Object(l.__rest)(e,["message"]);return r.createElement(m,Object.assign({},n),r.createElement(u,null,r.createElement(g,null,r.createElement(b,null,t," Try switching to another browser - the courses are known to work best on the latest version of Chrome."))),r.createElement(d.a,null))};class w extends r.Component{constructor(){super(...arguments),this.state={indexeddb:{checking:!0,available:!1}}}componentDidMount(){Modernizr.on("indexeddb",e=>{this.setState({indexeddb:{checking:!1,available:e}})})}render(){const{indexeddb:e}=this.state;return e.checking?r.createElement(i.Loading,null):e.available?Modernizr.serviceworker?Modernizr.messagechannel?Modernizr.postmessage?Modernizr.webworkers?r.createElement(s.a,null):r.createElement(h,{message:"NEO•ONE Courses require Web Workers to function. Your current browser does not support Web Workers."}):r.createElement(h,{message:"NEO•ONE Courses require window.postMessage to function. Your current browser does not support window.postMessage."}):r.createElement(h,{message:"NEO•ONE Courses require Message Channels to function. Your current browser does not support Message Channels."}):r.createElement(h,{message:"NEO•ONE Courses require Service Workers to function. Your current browser does not support Service Workers."}):r.createElement(h,{message:"NEO•ONE Courses require IndexedDB to function. Your current browser does not support IndexedDB."})}}var E=n(75);const O=Object(c.a)(i.Box,{target:"e1sw4e8k0"})("display:flex;width:100%;justify-content:center;background-color:",Object(p.prop)("theme.black"),";padding:0 8px;@media (max-width:",Object(p.prop)("theme.breakpoints.md"),"){padding:0 8px;}"),x=Object(c.a)(i.Toolbar,{target:"e1sw4e8k1"})({name:"1cf1gr2",styles:"&&&{height:100%;grid-gap:8px;padding:0 8px;}"}),k=Object(c.a)(E.a,{target:"e1sw4e8k2"})("display:block;margin-right:24px;margin-bottom:16px;margin-top:16px;height:24px;@media (max-width:",Object(p.prop)("theme.breakpoints.md"),"){margin-right:8px;}"),j=i.ToolbarFocusable.withComponent(i.Link,{target:"e1sw4e8k3"}),f=e=>r.createElement(O,Object.assign({},e),r.createElement(x,null,r.createElement(i.ToolbarContent,null,r.createElement(i.ToolbarFocusable,null,r.createElement(k,{to:"/course"},r.createElement(i.LineLogoPrimary,null)))),r.createElement(i.ToolbarContent,{align:"end"},r.createElement(j,{linkColor:"primary",href:"/",target:"_blank"},"Docs"))));const y=Object(c.a)(i.Box,{target:"ej5hjgn0"})("&&&{display:flex;flex-direction:column;background-color:",Object(p.prop)("theme.black"),";color:",Object(p.prop)("theme.black"),";min-height:100vh;width:100%;}"),v=Object(c.a)(f,{target:"ej5hjgn1"})({name:"1tu59u4",styles:"flex:0 0 auto;"}),N=e=>{var{children:t}=e,n=Object(l.__rest)(e,["children"]);return o.a.createElement(y,Object.assign({},n),o.a.createElement(v,null),t)};t.default=()=>r.createElement(N,null,r.createElement(a.a,{title:"NEO•ONE Courses",description:"NEO•ONE Courses distill the essentials of dapp development into bite-sized interactive learning chapters. Build, test and write the UI for smart contracts with the NEO•ONE editor."}),r.createElement(w,null))},384:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(3),o=n(0),a=n.n(o),i=n(28);const s=e=>{var{title:t,description:n,children:o}=e,s=Object(r.__rest)(e,["title","description","children"]);return a.a.createElement(i.Head,Object.assign({title:t},s,{meta:[{name:"twitter:title",content:t},{itemprop:"name",content:t},{property:"og:title",content:t},{itemprop:"image",content:"https://neo-one.io/social.png"},{name:"twitter:image:src",content:"https://neo-one.io/social.png"},{property:"og:image",content:"https://neo-one.io/social.png"},{name:"twitter:card",content:"summary"},{name:"twitter:site",content:"@neo_one_suite"},{property:"og:url",content:"https://neo-one.io"},{property:"og:site_name",content:"NEO•ONE"},{property:"og:type",content:"website"}].concat(void 0===n?[]:[{name:"description",content:n},{itemprop:"description",content:n},{property:"og:description",content:n},{name:"twitter:description",content:n}])}),o)}},763:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return p}));n(73);var r=n(9),o=n.n(r),a=n(10),i=n.n(a),s=n(4),c=n(16),l=n.n(c);const p="undefined"==typeof window?s.Loading:l()(i()({id:"./App",load:()=>Promise.all([Promise.all([n.e(1),n.e(2),n.e(5),n.e(20),n.e(0),n.e(4),n.e(6)]).then(n.bind(null,668))]).then(e=>e[0]),path:()=>o.a.join(e,"./App"),resolve:()=>668,chunkName:()=>"App"}),{loading:s.Loading,key:"App",ignoreBabelRename:!0})}).call(this,"/")}}]);
//# sourceMappingURL=course.0ae01de4.js.map