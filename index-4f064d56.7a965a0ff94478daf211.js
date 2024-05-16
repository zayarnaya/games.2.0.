"use strict";(self.webpackChunkGames=self.webpackChunkGames||[]).push([[7],{4855:(e,t,n)=>{var r=n(7294),a=n(745),i=n(9655),o=n(9250),l=n(6783),u=n(9940),c=n(3198),s=n(4303),f=n(6978),d=n(7894),m=n(6370),v=n(5007),h=n(7707);const _=function(){return r.createElement(r.StrictMode,null,r.createElement(v.zt,{store:h.store},r.createElement(i.BrowserRouter,{basename:"/games.2.0./"},r.createElement(m.Header,null),r.createElement(c.MainContentWrapper,null,r.createElement(u.Sidebar,{links:d.z}),r.createElement(r.Suspense,{fallback:r.createElement(l.Spinner,null)},r.createElement(o.Z5,null,r.createElement(o.AW,{path:"/",element:r.createElement(s.Line,null)}),r.createElement(o.AW,{path:"/knight",element:r.createElement(f.Knight,null)})))))))};var p=document.getElementById("root");(0,a.s)(p).render(r.createElement(_,null))},652:(e,t,n)=>{n.r(t),n.d(t,{default:()=>r});const r="<h3>Правила игры в Ход конем</h3> <p>Начать можно с любой клетки и дальше ходить так, как ходит шахматный конь (буквой Г)</p> <p>Если вы заполнили все клетки доски &mdash; вы победили!</p> "},1986:(e,t,n)=>{n.r(t),n.d(t,{default:()=>r});const r='<h3>Правила игры в вычеркни число</h3> <p> Цель игры - полностью освободить от цифр игровое поле. Для этого нужно удалять цифры, сумма которых равна 10 либо которые равны друг другу и между которыми нет других цифр по горизонтали либо по вертикали (удаленные цифры не считаются). </p> <p>Когда все возможности удаления исчерпаны, нажмите "Дальше" &mdash; на поле добавятся неудаленные цифры.</p> '},7739:(e,t,n)=>{n.r(t)},5371:(e,t,n)=>{n.r(t),n.d(t,{default:()=>r});const r={"knight-button":"knight-button__Tt7CZ","need-hint":"need-hint__YPAAj",hint:"hint__EL_b6","last-chosen":"last-chosen__GpP7p",wrong:"wrong__ceYrO"}},7708:(e,t,n)=>{n.r(t),n.d(t,{default:()=>r});const r={"knight-field":"knight-field__SbeY_"}},541:(e,t,n)=>{n.r(t),n.d(t,{default:()=>r});const r={"line-button":"line-button__OWmUt","line-button_wrong":"line-button_wrong__srWdi",active:"active__nCOXS"}},1451:(e,t,n)=>{n.r(t),n.d(t,{default:()=>r});const r={"line-field":"line-field__vLvdg"}},1046:(e,t,n)=>{n.r(t),n.d(t,{default:()=>r});const r={"line-layout":"line-layout__u9FC8"}},7614:(e,t,n)=>{n.r(t),n.d(t,{default:()=>r});const r={button:"button__UHHLZ",button_sm:"button_sm__z6sxW",button_md:"button_md__t4_5q",right:"right__cAGiZ"}},1398:(e,t,n)=>{n.r(t),n.d(t,{default:()=>r});const r={header:"header__ieh6Z"}},404:(e,t,n)=>{n.r(t),n.d(t,{default:()=>r});const r={patch:"patch__hYOob",patch__message:"patch__message__gqFOA",patch_knight:"patch_knight__kopRB",patch_line:"patch_line__KGmd8"}},6899:(e,t,n)=>{n.r(t),n.d(t,{default:()=>r});const r={}},554:(e,t,n)=>{n.r(t),n.d(t,{default:()=>r});const r={"nav-list__item":"nav-list__item__dj29w",active:"active__C2t8u"}},8438:(e,t,n)=>{n.r(t),n.d(t,{default:()=>r});const r={sidebar:"sidebar__j6IVa"}},6529:(e,t,n)=>{n.r(t),n.d(t,{default:()=>r});const r={}},5479:(e,t,n)=>{n.r(t),n.d(t,{default:()=>r});const r={"game-layout":"game-layout__XzU6b","game-heading":"game-heading__l9lw2"}},8145:(e,t,n)=>{n.r(t),n.d(t,{default:()=>r});const r={"main-content-wrapper":"main-content-wrapper__A5Wox"}},6734:(e,t,n)=>{n.r(t),n.d(t,{default:()=>r});const r={"rules-layout":"rules-layout__ii9_q"}},7894:(e,t)=>{t.z=void 0,t.z=[{name:"Вычеркни число",href:"/"},{name:"Ход конем",href:"knight"}]},6978:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n);var a=Object.getOwnPropertyDescriptor(t,n);a&&!("get"in a?!t.__esModule:a.writable||a.configurable)||(a={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,a)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),a=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return a(t,e),t},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Knight=void 0;var l=i(n(7294)),u=n(9865),c=n(1489),s=o(n(652)),f=n(916),d=n(2404),m=n(6646),v=n(7256),h=n(233),_=n(2176),p=n(7282),g=n(2958),y=n(7369);t.Knight=function(){var e=(0,u.useSelector)((function(e){return e.knight})),t=e.count,n=e.field,r=e.history,a=e.win,i=e.fail,o=e.time,b=(0,l.useState)([]),O=b[0],M=b[1],E=(0,l.useState)(!1),j=E[0],S=E[1],P=(0,l.useRef)(null),w=(0,l.useState)(!1),k=w[0],N=w[1],D=(0,l.useState)(+localStorage.getItem("knight-highscore")||0),C=D[0],L=D[1],x=(0,l.useState)(localStorage.getItem("knight-besttime")||"99:99:99"),T=x[0],A=x[1],I=(0,u.useDispatch)();(0,l.useEffect)((function(){a&&R()}),[a]),(0,l.useEffect)((function(){i&&z()}),[i]);var B=function(){localStorage.setItem("knight-highscore",Math.max(C,t).toString()),L(Math.max(C,t))},z=function(){alert("Вы проиграли!Ваш счет: "+t),B()},R=function(){alert("Вы выиграли! Ваше время "+P.current.dataset.time),function(){var e=G(),t=e<T?e:T;localStorage.setItem("knight-besttime",t),A(t)}()},G=function(){return P.current?P.current.dataset.time:null};return l.default.createElement(f.GameLayout,null,l.default.createElement(m.KnightField,null,k&&l.default.createElement(g.Patch,{game:"knight"}),n.flat().map((function(e,t){return l.default.createElement(d.KnightButton,{hint:j&&e.hint,needHint:j,onClick:function(){return function(e){O.length||I((0,y.startTimer)());var t=(0,c.getRowAndCol)(e),r=t.row,a=t.col;!0!==n[r][a].hint&&O.length?(I((0,y.setWrongMove)([r,a])),setTimeout((function(){return I((0,y.removeWrongMove)([r,a]))}),1e3)):(I((0,y.onNextMove)({coords:O,coords2:[r,a]})),M([r,a]))}(t)},disabled:0!=e.value,wrong:e.wrong,lastChosen:(0,c.getIndexFromRowAndCol)(O[0],O[1])===t},0===e.value?"":e.value)}))),l.default.createElement(v.RulesLayout,null,l.default.createElement(_.Timer,{ref:P,time:o,pause:k}),l.default.createElement(p.Score,null,t),l.default.createElement("div",null,"Рекорд: ",C),l.default.createElement("div",null,"Лучшее время: ",T),l.default.createElement("div",null,l.default.createElement("h3",null,"Игровое меню"),l.default.createElement("div",null,l.default.createElement(h.Button,{size:"md",onClick:function(){S(!j)}},j?"Выключить подсказку":"Включить подсказку"),l.default.createElement(h.Button,{size:"md",onClick:function(){var e={coords:O,count:t,field:n,time:G()};localStorage.setItem("knight-save",JSON.stringify(e))}},"Сохранить"),l.default.createElement(h.Button,{size:"md",onClick:function(){var e=localStorage.getItem("knight-save");if(void 0!==e){var t=JSON.parse(e),n=t.coords;M(n),I((0,y.onLoadGame)(t))}}},"Загрузить"),l.default.createElement(h.Button,{size:"md",onClick:function(){B(),I((0,y.restart)()),M([])}},a||i?"Новая игра":"Начать заново"),l.default.createElement(h.Button,{size:"md",onClick:function(){I((0,y.onUndoMove)())},disabled:!r.length},"Отменить ход"),l.default.createElement(h.Button,{size:"md",onClick:function(){localStorage.setItem("knight-highscore","0")}},"Сбросить рекорд"),l.default.createElement(h.Button,{size:"md",disabled:0===O.length,onClick:function(){N(!k)}},k?"Вернуться к игре":"Пауза"))),l.default.createElement("div",{dangerouslySetInnerHTML:{__html:s.default}})))}},2404:function(e,t,n){var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},r.apply(this,arguments)},a=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.KnightButton=void 0;var o=i(n(7294)),l=i(n(3967)),u=i(n(5371));t.KnightButton=function(e){var t=e.children,n=e.className,i=e.hint,c=e.needHint,s=e.wrong,f=e.lastChosen,d=a(e,["children","className","hint","needHint","wrong","lastChosen"]);return o.default.createElement("button",r({className:(0,l.default)(n,c&&u.default["need-hint"],i&&u.default.hint,s&&u.default.wrong,f&&u.default["last-chosen"],u.default["knight-button"])},d),t)}},6646:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.KnightField=void 0;var a=r(n(7294)),i=r(n(3967)),o=r(n(7708));t.KnightField=function(e){var t=e.children,n=e.className;return a.default.createElement("div",{className:(0,i.default)(n,o.default["knight-field"])},t)}},1489:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getIndexFromRowAndCol=t.getRowAndCol=void 0,t.getRowAndCol=function(e){var t=Math.floor(e/10);return{row:t,col:e-10*t}},t.getIndexFromRowAndCol=function(e,t){return 10*e+t}},4303:function(e,t,n){var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},r.apply(this,arguments)},a=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n);var a=Object.getOwnPropertyDescriptor(t,n);a&&!("get"in a?!t.__esModule:a.writable||a.configurable)||(a={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,a)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&a(t,e,n);return i(t,e),t},l=this&&this.__spreadArray||function(e,t,n){if(n||2===arguments.length)for(var r,a=0,i=t.length;a<i;a++)!r&&a in t||(r||(r=Array.prototype.slice.call(t,0,a)),r[a]=t[a]);return e.concat(r||Array.prototype.slice.call(t))},u=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Line=void 0;var c=o(n(7294)),s=n(9865),f=n(9563),d=n(9880),m=u(n(1986)),v=n(916),h=n(233),_=n(5404),p=n(2934),g=n(7338),y=n(7256),b=n(2215),O=n(2176),M=n(2958),E=n(7282);t.Line=function(){var e=(0,s.useSelector)((function(e){return e.line})),t=e.arr,n=e.history,a=e.timer,i=e.score,o=e.win,u=e.fail,j=(0,s.useDispatch)(),S=(0,c.useState)(!1),P=S[0],w=S[1],k=(0,c.useState)(!1),N=k[0],D=k[1],C=(0,c.useState)(-1),L=C[0],x=C[1],T=(0,c.useState)(t),A=T[0],I=T[1],B=(0,c.useState)(n),z=B[0],R=B[1],G=(0,c.useState)(+localStorage.getItem("line-highscore")||0),H=G[0],W=G[1],F=(0,c.useState)(localStorage.getItem("line-besttime")||"99:99:99"),U=F[0],K=F[1],V=(0,c.useRef)(null);(0,c.useEffect)((function(){I(t),R(n)}),[t,n]),(0,c.useEffect)((function(){o&&J()}),[o]),(0,c.useEffect)((function(){u&&Y()}));var Z=function(){localStorage.setItem("line-highscore",Math.max(H,i).toString()),W(Math.max(H,i))},J=function(){var e,t;alert("ПОБЕДА"),Z(),t=(e=q())<U?e:U,localStorage.setItem("line-besttime",t),K(t)},Y=function(){alert("Пожалуй, выиграть уже не получится\nВаш счет "+i),Z()},q=function(){var e;return V.current?null===(e=V.current.dataset)||void 0===e?void 0:e.time:null};return c.default.createElement(v.GameLayout,null,c.default.createElement(g.LineLayout,null,c.default.createElement(p.LineField,null,N&&c.default.createElement(M.Patch,{game:"line"}),A.map((function(e,t){return c.default.createElement(_.LineButton,{disabled:e.deleted,active:e.active,onClick:function(){return function(e){if(P||(w(!0),j((0,b.startTimer)())),-1===L)x(e),(t=l([],A,!0))[e]=r(r({},t[e]),{active:!0}),I(t);else if(L===e){var t;x(-1),(t=l([],A,!0))[e]=r(r({},t[e]),{active:!1}),I(t)}else((0,f.checkHorizontal)(A,L,e)||(0,f.checkVertical)(A,L,e))&&(j((0,b.onDeleteChars)({idx:[e,L],length:A.length})),x(-1))}(t)}},e.value)}))),c.default.createElement(h.Button,{size:"sm",onClick:function(){var e=l([],A,!0),t=e.filter((function(e){return!e.deleted})).map((function(e){return e.value}));if(!t.length)return alert("Ура, победа!"),void j((0,b.onVictory)());for(var n=0,a=t;n<a.length;n++){var i=a[n];e.push(r(r({},d.defaultItem),{value:i}))}j((0,b.onNext)(e))},floatRight:!0},"Дальше")),c.default.createElement(y.RulesLayout,null,c.default.createElement(O.Timer,{ref:V,time:a,pause:N}),c.default.createElement(E.Score,null,i),c.default.createElement("div",null,"Рекорд: ",H),c.default.createElement("div",null,"Лучшее время: ",U),c.default.createElement("div",null,c.default.createElement("h3",null,"Игровое меню"),c.default.createElement("div",null,c.default.createElement(h.Button,{onClick:function(){Z(),j((0,b.onRestart)()),w(!1)},size:"md"},o||u?"Новая игра":"Начать заново"),c.default.createElement(h.Button,{size:"md",disabled:0===z.length,onClick:function(){j((0,b.onUndo)()),x(-1)}},"Отменить ход"),c.default.createElement(h.Button,{size:"md",onClick:function(){var e=l([],A,!0);L>=0&&(e[L].active=!1);var t=q();localStorage.setItem("line-save",JSON.stringify({history:z,arr:e,timer:t,score:i}))}},"Сохранить"),c.default.createElement(h.Button,{size:"md",onClick:function(){var e=localStorage.getItem("line-save");if(void 0!==e){var t=JSON.parse(e);j((0,b.onLoadGame)(t)),w(!0)}}},"Загрузить"),c.default.createElement(h.Button,{size:"md",disabled:!P,onClick:function(){D(!N)}},N?"Вернуться к игре":"Пауза"))),c.default.createElement("div",{dangerouslySetInnerHTML:{__html:m.default}})))}},5404:function(e,t,n){var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},r.apply(this,arguments)},a=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.LineButton=void 0;var o=i(n(7294)),l=i(n(3967)),u=i(n(541));t.LineButton=function(e){var t=e.children,n=e.className,i=e.active,c=void 0!==i&&i,s=a(e,["children","className","active"]);return o.default.createElement("button",r({className:(0,l.default)(n,u.default["line-button"],c&&u.default.active)},s),t)}},2934:function(e,t,n){var r=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.LineField=void 0;var i=a(n(7294)),o=a(n(3967)),l=a(n(1451));t.LineField=function(e){var t=e.children,n=e.className;return r(e,["children","className"]),i.default.createElement("div",{className:(0,o.default)(n,l.default["line-field"])},t)},t.default=name},9880:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.defaultItem=t.startArr=void 0,t.startArr=[1,1,1,2,1,3,1,4,1,1,2,3,4,5,6,7,8,9],t.defaultItem={active:!1,deleted:!1,value:0}},9563:function(e,t,n){var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},r.apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),t.checkVertical=t.checkHorizontal=t.getDefaultArray=void 0;var a=n(9880);t.getDefaultArray=function(){return a.startArr.map((function(e){return r(r({},a.defaultItem),{value:e})}))},t.checkHorizontal=function(e,t,n){if(e[t].value!==e[n].value&&e[t].value+e[n].value!==10)return!1;for(var r=Math.min(t,n)+1;r<Math.max(t,n);r++)if(!e[r].deleted)return!1;return!0},t.checkVertical=function(e,t,n){if(e[t].value!==e[n].value&&e[t].value+e[n].value!==10)return!1;if(t-9*Math.floor(t/9)!=n-9*Math.floor(n/9))return!1;for(var r=Math.min(t,n)+9;r<Math.max(t,n);r+=9)if(!e[r].deleted)return!1;return!0}},7338:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.LineLayout=void 0;var a=r(n(7294)),i=r(n(3967)),o=r(n(1046));t.LineLayout=function(e){var t=e.children,n=e.className;return a.default.createElement("div",{className:(0,i.default)(n,o.default["line-layout"])},t)}},4108:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.legitMoves=void 0,t.legitMoves=[[-2,1],[-2,-1],[-1,2],[1,2],[2,1],[2,-1],[1,-2],[-1,-2]]},2195:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.lineFailCount=t.lineScoring=void 0,t.lineScoring={delete:10,next:10,undo:-15,win:1e3},t.lineFailCount=200},292:function(e,t,n){var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},r.apply(this,arguments)},a=this&&this.__spreadArray||function(e,t,n){if(n||2===arguments.length)for(var r,a=0,i=t.length;a<i;a++)!r&&a in t||(r||(r=Array.prototype.slice.call(t,0,a)),r[a]=t[a]);return e.concat(r||Array.prototype.slice.call(t))};Object.defineProperty(t,"__esModule",{value:!0}),t.setHint=t.removeHint=t.getDefaultField=void 0;var i=n(4108);t.getDefaultField=function(){for(var e=[],t=0;t<10;t++){e.push([]);for(var n=0;n<10;n++)e[t].push({hint:!1,wrong:!1,value:0})}return e},t.removeHint=function(e,t){for(var n=e[0],o=e[1],l=a([],t,!0),u=0,c=i.legitMoves;u<c.length;u++){var s=c[u];l[n+s[0]]&&l[n+s[0]][o+s[1]]&&(l[n+s[0]][o+s[1]]=r(r({},l[n+s[0]][o+s[1]]),{hint:!1}))}return l},t.setHint=function(e,t){for(var n=e[0],o=e[1],l=a([],t,!0),u=0,c=0,s=i.legitMoves;c<s.length;c++){var f=s[c];l[n+f[0]]&&l[n+f[0]][o+f[1]]&&!l[n+f[0]][o+f[1]].value&&(u++,l[n+f[0]][o+f[1]]=r(r({},l[n+f[0]][o+f[1]]),{hint:!0}))}return u?l:null}},7369:function(e,t,n){var r,a=this&&this.__spreadArray||function(e,t,n){if(n||2===arguments.length)for(var r,a=0,i=t.length;a<i;a++)!r&&a in t||(r||(r=Array.prototype.slice.call(t,0,a)),r[a]=t[a]);return e.concat(r||Array.prototype.slice.call(t))};Object.defineProperty(t,"__esModule",{value:!0}),t.onLoadGame=t.restart=t.onUndoMove=t.removeWrongMove=t.setWrongMove=t.onNextMove=t.resetTimer=t.startTimer=t.knightSlice=void 0;var i=n(438),o=n(292),l={field:(0,o.getDefaultField)(),count:0,history:[],time:"",win:!1,fail:!1};t.knightSlice=(0,i.createSlice)({name:"knight",initialState:l,reducers:{onNextMove:function(e,t){var n=t.payload,r=n.coords,a=n.coords2,i=a[0],l=a[1];e.count++;var u=(0,o.removeHint)(r,e.field);if(e.field[i][l].value=e.count,5!==e.count){var c=e.history;c.push([i,l]),e.history=c;var s=(0,o.setHint)([i,l],u);e.field=s||u,s||(e.fail=!0)}else e.win=!0},onUndoMove:function(e){var t=e.history.pop(),n=t[0],r=t[1];e.field[n][r].value=0,e.count--},setWrongMove:function(e,t){var n=t.payload,r=n[0],i=n[1],o=a([],e.field,!0);o[r][i].wrong=!0,e.field=o},removeWrongMove:function(e,t){var n=t.payload,r=n[0],i=n[1],o=a([],e.field,!0);o[r][i].wrong=!1,e.field=o},restart:function(e){for(var t in l)e[t]=l[t]},onLoadGame:function(e,t){var n=t.payload;for(var r in e)e[r]=n[r]||l[r]},startTimer:function(e){e.time="00:00:00"},resetTimer:function(e){e.time=l.time}}}),t.startTimer=(r=t.knightSlice.actions).startTimer,t.resetTimer=r.resetTimer,t.onNextMove=r.onNextMove,t.setWrongMove=r.setWrongMove,t.removeWrongMove=r.removeWrongMove,t.onUndoMove=r.onUndoMove,t.restart=r.restart,t.onLoadGame=r.onLoadGame,t.default=t.knightSlice.reducer},2215:function(e,t,n){var r,a=this&&this.__spreadArray||function(e,t,n){if(n||2===arguments.length)for(var r,a=0,i=t.length;a<i;a++)!r&&a in t||(r||(r=Array.prototype.slice.call(t,0,a)),r[a]=t[a]);return e.concat(r||Array.prototype.slice.call(t))};Object.defineProperty(t,"__esModule",{value:!0}),t.resetTimer=t.startTimer=t.onLoadGame=t.onRestart=t.onUndo=t.onNext=t.onDeleteChars=t.onVictory=t.lineSlice=void 0;var i=n(438),o=n(9563),l=n(2195),u={history:[],arr:(0,o.getDefaultArray)(),score:0,timer:"",win:!1,fail:!1};t.lineSlice=(0,i.createSlice)({name:"line",initialState:u,reducers:{onDeleteChars:function(e,t){var n=t.payload,r=n.idx,a=n.length,i=r[0],o=r[1];e.arr[i].deleted=!0,e.arr[o].deleted=!0,e.history.push({idx:r,length:a}),e.score+=l.lineScoring.delete},onNext:function(e,t){var n=e.arr.length;e.arr=a([],t.payload,!0);var r=e.history;r.push({idx:[],length:n}),e.history=r,e.score+=l.lineScoring.next,e.arr.length>l.lineFailCount&&(e.fail=!0)},onUndo:function(e){var t=e.history.pop(),n=t.idx,r=t.length;if(console.log(n,r),n.length){var a=n[0],i=n[1];e.arr[a].deleted=!1,e.arr[i].deleted=!1}var o=e.arr.slice(0,r);e.arr=o,e.score=Math.max(e.score+l.lineScoring.undo,0)},onRestart:function(e){for(var t in u)e[t]=u[t]},onLoadGame:function(e,t){for(var n in e)e[n]=t.payload[n]||u[n]},startTimer:function(e){e.timer="00:00:00"},resetTimer:function(e){e.timer=u.timer},onVictory:function(e){e.win=!0,e.score+=l.lineScoring.win}}}),t.onVictory=(r=t.lineSlice.actions).onVictory,t.onDeleteChars=r.onDeleteChars,t.onNext=r.onNext,t.onUndo=r.onUndo,t.onRestart=r.onRestart,t.onLoadGame=r.onLoadGame,t.startTimer=r.startTimer,t.resetTimer=r.resetTimer,t.default=t.lineSlice.reducer},7707:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.store=void 0;var a=n(438),i=r(n(2215)),o=r(n(7369));t.store=(0,a.configureStore)({reducer:{line:i.default,knight:o.default}})},233:function(e,t,n){var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},r.apply(this,arguments)},a=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Button=void 0;var o=i(n(3967)),l=i(n(7294)),u=i(n(7614));t.Button=function(e){var t=e.children,n=(e.className,e.spec),i=e.size,c=e.floatRight,s=a(e,["children","className","spec","size","floatRight"]);return l.default.createElement("button",r({className:(0,o.default)(u.default.button,n&&u.default["button__".concat(n)],i&&u.default["button_".concat(i)],c&&u.default.right)},s),t)}},6370:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n);var a=Object.getOwnPropertyDescriptor(t,n);a&&!("get"in a?!t.__esModule:a.writable||a.configurable)||(a={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,a)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),a=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return a(t,e),t},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Header=void 0;var l=i(n(7294)),u=o(n(1398));t.Header=function(){var e=(0,l.useState)("Добро пожаловать в игры"),t=e[0];return e[1],l.default.createElement("div",{className:u.default.header},l.default.createElement("h1",null,t))}},2958:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Patch=void 0;var a=r(n(7294)),i=r(n(404)),o=r(n(3967));t.Patch=function(e){var t=e.game;return a.default.createElement("div",{className:(0,o.default)(i.default.patch,i.default["patch_".concat(t)])},a.default.createElement("p",{className:i.default.patch__message},"пауза"))}},7282:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Score=void 0;var a=r(n(7294)),i=r(n(3967)),o=r(n(6899));t.Score=function(e){var t=e.children,n=e.className;return a.default.createElement("div",{className:(0,i.default)(n,o.default.score)},"Текущий счет: ",t)}},5222:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.NavItem=void 0;var a=r(n(7294)),i=r(n(3967)),o=r(n(554)),l=n(9655);t.NavItem=function(e){var t=e.name,n=e.onclick,r=e.href,u=e.className;return a.default.createElement("li",{className:(0,i.default)(u,o.default["nav-list__item"])},r&&a.default.createElement(l.NavLink,{className:function(e){return e.isActive?o.default.active:""},to:r,onClick:n},t),!r&&a.default.createElement("span",{onClick:n},t))}},9940:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n);var a=Object.getOwnPropertyDescriptor(t,n);a&&!("get"in a?!t.__esModule:a.writable||a.configurable)||(a={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,a)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),a=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return a(t,e),t},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Sidebar=void 0;var l=i(n(7294)),u=n(5222),c=o(n(8438));t.Sidebar=function(e){var t=e.links,n=(0,l.useState)(t),r=n[0];return n[1],l.default.createElement("aside",{className:c.default.sidebar},l.default.createElement("ul",{className:"nav-list"},r.map((function(e,t){return l.default.createElement(u.NavItem,{active:e.active,name:e.name,href:e.href,key:t})}))))}},6783:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Spinner=void 0;var a=r(n(7294));n(7739),t.Spinner=function(){return a.default.createElement("div",{className:"spinner"},a.default.createElement("span",{className:"spinner__dot"},a.default.createElement("i",{className:"spinner__item"}),a.default.createElement("i",{className:"spinner__item"}),a.default.createElement("i",{className:"spinner__item"}),a.default.createElement("i",{className:"spinner__item"})))}},2176:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n);var a=Object.getOwnPropertyDescriptor(t,n);a&&!("get"in a?!t.__esModule:a.writable||a.configurable)||(a={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,a)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),a=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return a(t,e),t},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Timer=void 0;var l=i(n(7294)),u=o(n(3967)),c=o(n(6529)),s=n(5983);t.Timer=(0,l.forwardRef)((function(e,t){var n=e.className,r=e.time,a=e.pause,i=(0,l.useState)(0),o=i[0],f=i[1],d=(0,l.useState)(0),m=d[0],v=d[1],h=(0,l.useState)(0),_=h[0],p=h[1],g=(0,l.useState)(!1),y=g[0],b=g[1],O=(0,l.useRef)(null);return O.current=setTimeout((function(){!a&&r&&b(!y)}),1e3),(0,l.useEffect)((function(){r&&(p(_+1),59===_&&(p(0),v(m+1)),59===m&&(v(0),f(o+1)))}),[y]),(0,l.useEffect)((function(){if(r){var e=(0,s.parseTime)(r),t=e[0],n=e[1],a=e[2];v(n),f(t),p(a)}else v(0),f(0),p(0)}),[r]),(0,l.useEffect)((function(){clearTimeout(O.current)})),l.default.createElement("div",{"data-time":"".concat(o<10?"0":"").concat(o,":").concat(m<10?"0":"").concat(m,":").concat(_<10?"0":"").concat(_),ref:t,className:(0,u.default)(n,c.default.timer)},o<10&&"0",o,":",m<10&&"0",m,":",_<10&&"0",_)}))},5983:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.parseTime=t.getTime=void 0,t.getTime=function(e){var t=Math.floor(+e/1e3),n=Math.floor(t/60);t-=60*n;var r=Math.floor(n/60);return{hours:r,mins:n-=60*r,secs:t}},t.parseTime=function(e){return e.split(":").map((function(e){return Number(e)}))}},916:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n);var a=Object.getOwnPropertyDescriptor(t,n);a&&!("get"in a?!t.__esModule:a.writable||a.configurable)||(a={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,a)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),a=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return a(t,e),t},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.GameLayout=void 0;var l=i(n(7294)),u=o(n(5479)),c=n(3982);t.GameLayout=function(e){var t=e.children,n=(0,l.useState)(""),r=n[0],a=n[1];return(0,l.useEffect)((function(){var e=window.location.pathname;a(c.headings[e])})),l.default.createElement("div",{className:u.default["game-layout"]},l.default.createElement("h2",{className:u.default["game-heading"]},r),t)}},3982:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.headings=void 0,t.headings={"/":"Игра в вычеркни число","/knight":"Игра в ход конем"}},3198:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.MainContentWrapper=void 0;var a=r(n(7294)),i=r(n(8145));t.MainContentWrapper=function(e){var t=e.children;return a.default.createElement("main",{className:i.default["main-content-wrapper"]},t)}},7256:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.RulesLayout=void 0;var a=r(n(7294)),i=r(n(3967)),o=r(n(6734));t.RulesLayout=function(e){var t=e.children,n=e.className;return a.default.createElement("div",{className:(0,i.default)(n,o.default["rules-layout"])},t)}}}]);