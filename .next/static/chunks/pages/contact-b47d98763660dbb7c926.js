_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[8],{"8jAD":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.InlineIcon=e.Icon=void 0;var n,o=(n=i("q1tI"))&&n.__esModule?n:{default:n};function a(t){return(a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function l(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var r=0,c=/(-?[0-9.]*[0-9]+[0-9.]*)/g,s=/^-?[0-9.]*[0-9]+[0-9.]*$/g,h=["width","height","inline","hFlip","vFlip","flip","rotate","align","color","box"],u={left:0,top:0,width:16,height:16,rotate:0,hFlip:!1,vFlip:!1};var f=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._item=e}var e,i,n;return e=t,n=[{key:"splitAttributes",value:function(t){var e={icon:Object.create(null),node:Object.create(null)};return Object.keys(t).forEach((function(i){e[-1===h.indexOf(i)?"node":"icon"][i]=t[i]})),e}},{key:"calculateDimension",value:function(t,e,i){if(1===e)return t;if(i=void 0===i?100:i,"number"===typeof t)return Math.ceil(t*e*i)/i;var n=t.split(c);if(null===n||!n.length)return null;for(var o,a=[],l=n.shift(),r=s.test(l);;){if(r?(o=parseFloat(l),isNaN(o)?a.push(l):a.push(Math.ceil(o*e*i)/i)):a.push(l),void 0===(l=n.shift()))return a.join("");r=!r}}},{key:"replaceIDs",value:function(t){var e,i,n=/\sid="(\S+)"/g,o=[];function a(t,e,i){for(var n=0;-1!==(n=i.indexOf(t,n));)i=i.slice(0,n)+e+i.slice(n+t.length),n+=e.length;return i}for(;e=n.exec(t);)o.push(e[1]);return o.length?(i="IconifyId-"+Date.now().toString(16)+"-"+(16777216*Math.random()|0).toString(16)+"-",o.forEach((function(e){var n=i+r;r++,t=a('="'+e+'"','="'+n+'"',t),t=a('="#'+e+'"','="#'+n+'"',t),t=a("(#"+e+")","(#"+n+")",t)})),t):t}}],(i=[{key:"getAttributes",value:function(e){var i=this._item;"object"!==a(e)&&(e=Object.create(null));var n={horizontal:"center",vertical:"middle",slice:!1},o={rotate:i.rotate,hFlip:i.hFlip,vFlip:i.vFlip},l=Object.create(null),r=Object.create(null),c=!0===e.inline||"true"===e.inline||"1"===e.inline,s={left:i.left,top:c?i.inlineTop:i.top,width:i.width,height:c?i.inlineHeight:i.height};if(["hFlip","vFlip"].forEach((function(t){void 0===e[t]||!0!==e[t]&&"true"!==e[t]&&"1"!==e[t]||(o[t]=!o[t])})),void 0!==e.flip&&e.flip.toLowerCase().split(/[\s,]+/).forEach((function(t){switch(t){case"horizontal":o.hFlip=!o.hFlip;break;case"vertical":o.vFlip=!o.vFlip}})),void 0!==e.rotate){var h=e.rotate;if("number"===typeof h)o.rotate+=h;else if("string"===typeof h){var u=h.replace(/^-?[0-9.]*/,"");if(""===u)h=parseInt(h),isNaN(h)||(o.rotate+=h);else if(u!==h){var f=!1;switch(u){case"%":f=25;break;case"deg":f=90}f&&(h=parseInt(h.slice(0,h.length-u.length)),isNaN(h)||(o.rotate+=Math.round(h/f)))}}}var p,d=[];switch(o.hFlip?o.vFlip?o.rotate+=2:(d.push("translate("+(s.width+s.left)+" "+(0-s.top)+")"),d.push("scale(-1 1)"),s.top=s.left=0):o.vFlip&&(d.push("translate("+(0-s.left)+" "+(s.height+s.top)+")"),d.push("scale(1 -1)"),s.top=s.left=0),o.rotate%4){case 1:p=s.height/2+s.top,d.unshift("rotate(90 "+p+" "+p+")"),0===s.left&&0===s.top||(p=s.left,s.left=s.top,s.top=p),s.width!==s.height&&(p=s.width,s.width=s.height,s.height=p);break;case 2:d.unshift("rotate(180 "+(s.width/2+s.left)+" "+(s.height/2+s.top)+")");break;case 3:p=s.width/2+s.left,d.unshift("rotate(-90 "+p+" "+p+")"),0===s.left&&0===s.top||(p=s.left,s.left=s.top,s.top=p),s.width!==s.height&&(p=s.width,s.width=s.height,s.height=p)}var g,v,b=e.width?e.width:null,m=e.height?e.height:null;null===b&&null===m&&(m="1em"),null!==b&&null!==m?(g=b,v=m):null!==b?(g=b,v=t.calculateDimension(g,s.height/s.width)):(v=m,g=t.calculateDimension(v,s.width/s.height)),!1!==g&&(r.width="auto"===g?s.width:g),!1!==v&&(r.height="auto"===v?s.height:v),c&&0!==i.verticalAlign&&(l["vertical-align"]=i.verticalAlign+"em"),void 0!==e.align&&e.align.toLowerCase().split(/[\s,]+/).forEach((function(t){switch(t){case"left":case"right":case"center":n.horizontal=t;break;case"top":case"bottom":case"middle":n.vertical=t;break;case"crop":n.slice=!0;break;case"meet":n.slice=!1}})),r.preserveAspectRatio=function(t){var e;switch(t.horizontal){case"left":e="xMin";break;case"right":e="xMax";break;default:e="xMid"}switch(t.vertical){case"top":e+="YMin";break;case"bottom":e+="YMax";break;default:e+="YMid"}return e+(t.slice?" slice":" meet")}(n),r.viewBox=s.left+" "+s.top+" "+s.width+" "+s.height;var w=t.replaceIDs(i.body);return void 0!==e.color&&(w=w.replace(/currentColor/g,e.color)),d.length&&(w='<g transform="'+d.join(" ")+'">'+w+"</g>"),!0!==e.box&&"true"!==e.box&&"1"!==e.box||(w+='<rect x="'+s.left+'" y="'+s.top+'" width="'+s.width+'" height="'+s.height+'" fill="rgba(0, 0, 0, 0)" />'),{attributes:r,body:w,style:l}}},{key:"getSVG",value:function(e,i){var n=t.splitAttributes(e),o=this.getAttributes(n.icon),a='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"';return i&&Object.keys(n.node).forEach((function(t){a+=" "+t+'="'+n.node[t]+'"'})),Object.keys(o.attributes).forEach((function(t){a+=" "+t+'="'+o.attributes[t]+'"'})),a+=' style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);',Object.keys(o.style).forEach((function(t){a+=" "+t+": "+o.style[t]+";"})),e&&void 0!==e.style&&(a+=e.style),a+='">',a+=o.body+"</svg>"}}])&&l(e.prototype,i),n&&l(e,n),t}();function p(t,e){if("object"!==a(t.icon))return null;var i=f.splitAttributes(t),n=i.icon,l=i.node;delete l.icon,void 0===n.inline&&(n.inline=e);var r=new f(function(t){var e,i=Object.create(null);for(e in u)i[e]=u[e];for(e in t)i[e]=t[e];return void 0===i.inlineTop&&(i.inlineTop=i.top),void 0===i.inlineHeight&&(i.inlineHeight=i.height),void 0===i.verticalAlign&&(i.verticalAlign=i.height%7===0&&i.height%8!==0?-.143:-.125),i}(t.icon)).getAttributes(n),c={transform:"rotate(360deg)"};if(void 0!==r.style["vertical-align"]&&(c.verticalAlign=r.style["vertical-align"]),void 0!==t.style)for(var s in t.style)c[s]=t.style[s];var h,p={xmlns:"http://www.w3.org/2000/svg",focusable:!1,style:c};for(h in l)p[h]=l[h];for(h in r.attributes)p[h]=r.attributes[h];return p.dangerouslySetInnerHTML={__html:r.body},o.default.createElement("svg",p,null)}var d=function(t){return p(t,!1)};e.Icon=d;e.InlineIcon=function(t){return p(t,!0)};var g=d;e.default=g},"94ZC":function(t,e){e.__esModule=!0,e.default={body:'<path d="M21 1C9.954 1 1 9.954 1 21s8.954 20 20 20s20-8.954 20-20S32.046 1 21 1zm0 2.178c9.843 0 17.822 7.979 17.822 17.822S30.843 38.822 21 38.822S3.178 30.843 3.178 21S11.157 3.178 21 3.178zm-8.846 5.219c-.507 1.476-.684 3.077-.229 4.476a6.665 6.665 0 0 0-1.279 2.1c-.812 2.566-.614 5.848 1.164 7.832c.625.686 1.473 1.248 2.539 1.689s2.438.723 4.113.844c-1.125.526-1.918.848-2.194 2.01c-1.255.838-2.78.639-3.887-.272c-.874-.64-1.271-1.771-2.239-2.192c-.061-.062-.251-.105-.57-.137c-.32-.031-.572.06-.755.273c-.091.09-.085.188.022.295c.732.597 1.439 1.229 1.853 1.986c.396.822.942 1.318 1.37 1.699c1.184.8 2.735 1.086 4.125.578c-.162.979.173 2.74-.148 3.613a1.928 1.928 0 0 1-.525.641c-.203.199-.835.447-.707.752c.061.137.273.221.639.252c.806-.021 1.719-.348 2.191-.982c.168-.229.363-.526.363-.891v-3.742c0-.427.156-.729.339-.914c.183-.182.349-.322.661-.365v4.933c0 .426-.523 1.614-.586 1.735c-.139.236-.45.451-.456.729c0 .093.033.146.14.159a2.077 2.077 0 0 0 1.784-1.165c.415-.63.509-1.005.618-1.733V28h1v4.6c0 .608-.1 1.187.175 1.732c.274.549 1.114.9 1.753 1.053c.336.092.504.127.625.112c.122-.015.146-.067.131-.159c-.072-.275-.463-.513-.625-.729c-.213-.275-.559-.853-.559-1.736v-4.932c.328.074.463.184.662.365c.197.184.338.488.338.915v3.742c0 .365.264.662.432.891c.51.648 1.367.978 2.17.982c.365-.031.623-.115.685-.252s.038-.25-.114-.342s-.331-.229-.561-.41a1.895 1.895 0 0 1-.52-.641c-.137-1.569-.001-3.252-.111-4.84c-.219-1.732-.885-2.304-2.215-2.968c1.586-.12 2.889-.411 3.908-.868c3.053-1.482 3.896-3.775 3.91-6.849c-.049-1.979-.619-3.703-1.922-5.025a6.157 6.157 0 0 0 .161-2.189a7.524 7.524 0 0 0-.481-2.056c-1.127.062-2.072.288-2.834.684s-1.311.731-1.646 1.006c-2.699-.613-5.59-.616-8.18.091a8.024 8.024 0 0 0-4.528-1.78z" fill="currentColor"/>',width:42,height:42}},ALdH:function(t,e,i){"use strict";i.r(e);var n=i("MX0m"),o=i.n(n),a=i("q1tI"),l=i.n(a),r=(i("YFqc"),i("5Yp1")),c=i("b0oO"),s=i("8jAD"),h=i.n(s),u=i("94ZC"),f=i.n(u),p=i("QMOV"),d=i.n(p),g=l.a.createElement;e.default=function(){return g(r.a,null,g(c.a,null),g("div",{id:"bg",className:"jsx-96269015"},g("img",{id:"background-image",src:"/myimage2.jpg",alt:"homepage image",className:"jsx-96269015"}),g("div",{id:"home-text-box",className:"jsx-96269015"},g("h1",{className:"jsx-96269015"},"Contact Me"),g("p",{className:"jsx-96269015"},"074 905 6579"),g("a",{id:"email",href:"mailto:melissaappolis@gmail.com",className:"jsx-96269015"},"melissaappolis@gmail.com"),g("p",{className:"jsx-96269015"},g("a",{style:{marginRight:"10px"},href:"https://github.com/MelissaAppolis",className:"jsx-96269015"},g(h.a,{icon:f.a})),g("a",{href:"https://www.linkedin.com/in/melissa-appolis-109b6b117/",className:"jsx-96269015"},g(h.a,{icon:d.a}))))),g(o.a,{id:"96269015"},["#bg.jsx-96269015{top:-50%;left:-50%;width:200%;height:200%;position:fixed;z-index:-1;}","#bg.jsx-96269015 img.jsx-96269015{top:0;left:0;right:0;bottom:0;margin:auto;min-width:50%;min-height:50%;position:absolute;}","#background-image.jsx-96269015{-webkit-filter:blur(4px);filter:blur(4px);}","#home-text-box.jsx-96269015{border:none;padding-top:20px;padding-bottom:20px;padding-left:100px;padding-right:100px;position:fixed;top:50%;left:50%;margin-left:-350px;margin-top:-200px;background-color:rgba(51,51,50,0.397);}","h1.jsx-96269015{font-variant-caps:all-petite-caps;font-size:70px;padding-bottom:30px;text-align:center;}","p.jsx-96269015{font-size:40px;color:white;text-align:center;}","#email.jsx-96269015{font-size:50px;color:white;}","#email.jsx-96269015:hover{-webkit-text-decoration:none;text-decoration:none;color:peachpuff;}","a.jsx-96269015{font-size:50px;color:peachpuff;}","a.jsx-96269015:hover{color:whitesmoke;}"]))}},QMOV:function(t,e){e.__esModule=!0,e.default={body:'<path d="M165 90q0 35-21 59t-62 24q-37 0-59-24T0 95q0-35 23-61T83 8t60 24t22 58zM0 750h165V214H0v536zm560-528q-32 0-57 8t-45 21t-33 27t-21 27h-4l-9-70H243q0 34 2 74t2 86v355h165V457q0-12 1-22t3-19q4-11 11-23t16-21t22-16t29-6q44 0 64 32t19 83v285h165V445q0-57-14-99t-38-70t-58-41t-72-13z" fill="currentColor"/>',width:750,height:850}},lqnA:function(t,e,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contact",function(){return i("ALdH")}])}},[["lqnA",0,2,1,3]]]);