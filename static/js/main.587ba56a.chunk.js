(this.webpackJsonptemplate=this.webpackJsonptemplate||[]).push([[0],[,,function(e,t,n){e.exports={container:"video_item_container__15oji",grid:"video_item_grid__2iJDD",list:"video_item_list__2jYRY",video:"video_item_video__37dg9",thumnail:"video_item_thumnail__YDqLP",metadata:"video_item_metadata__N-I6a",title:"video_item_title__3lIaP",channel:"video_item_channel__1dZ3U"}},function(e,t,n){e.exports={header:"search_header_header__3zkT2",logo:"search_header_logo__tK0eh",input:"search_header_input__3vem-",button:"search_header_button__19_1L",buttonImg:"search_header_buttonImg__3Mukl"}},function(e,t,n){e.exports={app:"app_app__cewju",content:"app_content__ckDFI",detail:"app_detail__Xmsnl",list:"app_list__2we4s"}},,function(e,t,n){e.exports={detail:"video_detail_detail__2BkQh",description:"video_detail_description__3nW_r"}},,,,,,function(e,t,n){e.exports={videos:"video_list_videos__1VCw_"}},,,,,,,function(e,t,n){},,,function(e,t,n){"use strict";n.r(t);var a=n(1),i=n.n(a),c=n(11),s=n.n(c),r=(n(19),n(9)),o=n(4),l=n.n(o),u=n(3),d=n.n(u),h=n(0),p=Object(a.memo)((function(e){var t=e.onSearch,n=Object(a.useRef)(),i=function(){var e=n.current.value;t(e)};return Object(h.jsxs)("header",{className:d.a.header,children:[Object(h.jsxs)("a",{href:"https://102wy.github.io/youtube/",className:d.a.logo,children:[Object(h.jsx)("img",{className:d.a.img,src:"./images/logo.png",alt:"logo"}),Object(h.jsx)("h1",{className:d.a.title,children:"Youtube"})]}),Object(h.jsx)("input",{ref:n,className:d.a.input,type:"search",placeholder:"Search...",onKeyPress:function(e){"Enter"===e.key&&i()}}),Object(h.jsx)("button",{className:d.a.button,type:"submit",onClick:function(){i()},children:Object(h.jsx)("img",{className:d.a.buttonImg,src:"./images/search.png",alt:"search"})})]})})),_=n(6),j=n.n(_),m=function(e){var t=e.video;return Object(h.jsxs)("section",{className:j.a.detail,children:[Object(h.jsx)("iframe",{className:j.a.video,type:"text/html",width:"100%",height:"500px",src:"https://www.youtube.com/embed/".concat(t.id),frameBorder:"0",allowFullScreen:!0,title:"youtube video player"}),Object(h.jsx)("h2",{children:t.snippet.title}),Object(h.jsx)("h3",{children:t.snippet.channelTitle}),Object(h.jsx)("pre",{className:j.a.description,children:t.snippet.description})]})},b=n(2),v=n.n(b),O=Object(a.memo)((function(e){var t=e.video,n=e.video.snippet,a=e.onVideoClick,i="list"===e.display?v.a.list:v.a.grid;return Object(h.jsx)("li",{className:"".concat(v.a.container," ").concat(i),onClick:function(){return a(t)},children:Object(h.jsxs)("div",{className:v.a.video,children:[Object(h.jsx)("img",{className:v.a.thumnail,src:n.thumbnails.medium.url,alt:"video thumbnail"}),Object(h.jsxs)("div",{className:v.a.metadata,children:[Object(h.jsx)("p",{className:v.a.title,children:n.title}),Object(h.jsx)("p",{className:v.a.channel,children:n.channelTitle})]})]})})})),f=n(12),x=n.n(f),y=function(e){var t=e.videos,n=e.onVideoClick,a=e.display;return Object(h.jsx)("ul",{className:x.a.videos,children:t.map((function(e){return Object(h.jsx)(O,{video:e,onVideoClick:n,display:a},e.id)}))})};var g=function(e){var t=e.youtube,n=Object(a.useState)([]),i=Object(r.a)(n,2),c=i[0],s=i[1],o=Object(a.useState)(null),u=Object(r.a)(o,2),d=u[0],_=u[1],j=Object(a.useCallback)((function(e){_(null),t.search(e).then((function(e){return s(e)}))}),[]);return Object(a.useEffect)((function(){t.mostPopular().then((function(e){return s(e)}))}),[t]),Object(h.jsxs)("div",{className:l.a.app,children:[Object(h.jsx)(p,{onSearch:j}),Object(h.jsxs)("section",{className:l.a.content,children:[d&&Object(h.jsx)("div",{className:l.a.detail,children:Object(h.jsx)(m,{video:d})}),Object(h.jsx)("div",{className:l.a.list,children:Object(h.jsx)(y,{videos:c,onVideoClick:function(e){_(e)},display:d?"list":"grid"})})]})]})},k=n(10),N=n(8),w=n(13),I=n(14),C=n(5),S=n.n(C),R=function(){function e(t){Object(w.a)(this,e),this.key=t,this.getRequestOptions={method:"GET",redirect:"follow"}}return Object(I.a)(e,[{key:"mostPopular",value:function(){var e=Object(N.a)(S.a.mark((function e(){var t,n;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostpopular&maxResults=25&key=".concat(this.key),this.getRequestOptions);case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n.items);case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"search",value:function(){var e=Object(N.a)(S.a.mark((function e(t){var n,a;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=".concat(t,"&type=video&key=").concat(this.key),this.getRequestOptions);case 2:return n=e.sent,e.next=5,n.json();case 5:return a=e.sent,e.abrupt("return",a.items.map((function(e){return Object(k.a)(Object(k.a)({},e),{},{id:e.id.videId})})));case 7:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),D=new R("AIzaSyBCDHhOZnkzAJo-B5JHTtdXD3yZcuIW_Vk");s.a.render(Object(h.jsx)(i.a.StrictMode,{children:Object(h.jsx)(g,{youtube:D})}),document.getElementById("root"))}],[[22,1,2]]]);
//# sourceMappingURL=main.587ba56a.chunk.js.map