(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"8VAm":function(e,t,a){e.exports={pageBackground:"#FCBE5B",CenterColumn:"CenterColumn-module--CenterColumn--1iqAU"}},G86H:function(e,t,a){e.exports={Layout:"Layout-module--Layout--1w-3M"}},GU1B:function(e,t,a){e.exports={cellHeight:"60vh",Project:"Project-module--Project--1A3Ue",ImageArea:"Project-module--ImageArea--76Vbo",DescriptionArea:"Project-module--DescriptionArea--F2299",TitleArea:"Project-module--TitleArea--3ARXi",LinkArea:"Project-module--LinkArea--z1Tdh",Demo:"Project-module--Demo--1LWYm",Code:"Project-module--Code--8A2xZ",Placeholder:"Project-module--Placeholder--31Avw"}},H3x0:function(e,t,a){e.exports={cellHeight:"60vh",SmileFace:"SmileFace-module--SmileFace--1fZuA"}},RXBc:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return I}));var r=a("dI71"),n=a("q1tI"),o=a.n(n),l=a("Wbzz"),i=a("G86H"),c=a.n(i);function u(e){return o.a.createElement("div",{className:c.a.Layout},e.children)}var s=a("8VAm"),m=a.n(s);function d(e){return o.a.createElement("div",{className:m.a.CenterColumn},e.children)}var f=a("h1or"),h=a.n(f);function p(e){return o.a.createElement("div",{className:h.a.HelloMsg},o.a.createElement("div",{className:h.a.Container},o.a.createElement("span",{className:h.a.Subtitle},e.subtitle),o.a.createElement("span",{className:h.a.Title},e.title)))}var v=a("H3x0"),g=a.n(v);function b(e){return o.a.createElement("div",{className:g.a.SmileFace})}var E=a("rVv4"),A=a.n(E);function k(e){return o.a.createElement("div",{className:A.a.SiteDescription},o.a.createElement("div",{className:A.a.DescriptionBox},e.children))}var y=a("GU1B"),C=a.n(y);function S(e,t){var a;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(a=function(e,t){if(!e)return;if("string"==typeof e)return w(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return w(e,t)}(e))||t&&e&&"number"==typeof e.length){a&&(e=a);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(a=e[Symbol.iterator]()).next.bind(a)}function w(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}function H(e){for(var t,a=e.name,r=S(e.ref.target.tree.entries);!(t=r()).done;){var n=t.value.name;if("screenshot"===n.substr(0,10).toLowerCase())return"https://strawstack.github.io/"+a+"/"+n}return!1}function j(e){return o.a.createElement("div",{className:C.a.Project},H(t=e.data.node)?o.a.createElement("div",{className:C.a.ImageArea,style:{backgroundImage:"url("+H(t)+")",backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat"}}):o.a.createElement("div",{className:C.a.Placeholder},t.name),o.a.createElement("div",{className:C.a.DescriptionArea},o.a.createElement("span",{className:C.a.TitleArea},e.data.node.name,":")," ",e.data.node.description),function(e){return null!==e.homepageUrl?o.a.createElement("a",{className:C.a.LinkArea+" "+C.a.Demo,href:e.homepageUrl,target:"_blank",alt:"Project",rel:"noreferrer"},"demo"):o.a.createElement("div",{className:""+C.a.Demo})}(e.data.node),o.a.createElement("a",{className:C.a.LinkArea+" "+C.a.Code,href:e.data.node.url,target:"_blank",alt:"Project",rel:"noreferrer"},"code"));var t}var N=a("vGFT"),P=a.n(N),x={"IEEE-Xtreme-10.0":!0,StrawstackGame:!0,YBot:!0,fizzBuzzBizz:!0,"uOttawa-TimeTable-Maker":!0,UOTTAHACK_Hackathon:!0,"hello-github-actions":!0,"strawstack.github.io":!0};function D(e){return o.a.createElement("a",{className:P.a.Link,href:e.href,alt:"More cool stuff",target:"_blank",rel:"noreferrer"},e.children)}var I=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={example:!1},a}return Object(r.a)(t,e),t.prototype.render=function(){return o.a.createElement(l.a,{query:"3112672751",render:function(e){return o.a.createElement(u,null,o.a.createElement(d,null,o.a.createElement(p,{title:"Richard",subtitle:"Hello, I'm"}),o.a.createElement(b,null),o.a.createElement(k,null,o.a.createElement("p",null,o.a.createElement("span",null,"About:")," I'm a programer who makes tools, games, and digital art."),o.a.createElement("p",null,"I pulled data for this site from my public repos using the Github GraphQL API and Gatsby."),o.a.createElement("p",null,o.a.createElement(D,{href:"https://strawstack.github.io/"},"Fork the code")," for this site on Github."),o.a.createElement("p",null,"Here's a link to ",o.a.createElement(D,{href:"https://drive.google.com/file/d/1Jisvj2ih6ZE1sOBZKavhUZaZQKs0385J/view?usp=sharing"},"my resume"),". Check out my ",o.a.createElement(D,{href:"https://richard.dev/"},"other site")," for more cool stuff.")),(t=e.githubData.data.user.repositories.edges,t.filter((function(e){return!(e.node.name in x)}))).map((function(e,t){return o.a.createElement(j,{key:t,data:e})}))));var t}})},t}(o.a.Component)},h1or:function(e,t,a){e.exports={cellHeight:"60vh",HelloMsg:"HelloMsg-module--HelloMsg--2um6v",Container:"HelloMsg-module--Container---l0f1",Title:"HelloMsg-module--Title--3CJRb",Subtitle:"HelloMsg-module--Subtitle--3qhic"}},rVv4:function(e,t,a){e.exports={cellHeight:"60vh",SiteDescription:"SiteDescription-module--SiteDescription--38dqo",DescriptionBox:"SiteDescription-module--DescriptionBox--2zSIf"}},vGFT:function(e,t,a){e.exports={Link:"index-module--Link--3q3kK"}}}]);
//# sourceMappingURL=component---src-pages-index-js-549ba349469c524199af.js.map