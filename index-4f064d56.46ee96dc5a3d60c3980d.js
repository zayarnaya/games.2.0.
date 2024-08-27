"use strict";(self.webpackChunkGames=self.webpackChunkGames||[]).push([[7],{1291:(e,t,n)=>{n.d(t,{Z:()=>p});var r=n(7294),a=n(9655),o=n(9250),i=n(6783),l=n(9940),u=n(3198),c=n(4303),s=n(6978),d=n(7894),f=n(6370),m=n(5007),v=n(7707),_=n(5682),h=n(5893);const p=()=>(0,h.jsx)(r.StrictMode,{children:(0,h.jsx)(m.zt,{store:v.store,children:(0,h.jsxs)(a.BrowserRouter,{basename:"/games.2.0./",children:[(0,h.jsx)(f.Header,{}),(0,h.jsxs)(u.MainContentWrapper,{children:[(0,h.jsx)(l.Sidebar,{links:d.z}),(0,h.jsx)(r.Suspense,{fallback:(0,h.jsx)(i.Spinner,{}),children:(0,h.jsxs)(o.Z5,{children:[(0,h.jsx)(o.AW,{path:"/",element:(0,h.jsx)(c.Line,{})}),(0,h.jsx)(o.AW,{path:"/knight",element:(0,h.jsx)(s.Knight,{})}),(0,h.jsx)(o.AW,{path:"/tetris",element:(0,h.jsx)(_.Tetris,{})})]})})]})]})})})},652:(e,t,n)=>{n.r(t),n.d(t,{default:()=>r});const r="<h3>Правила игры в Ход конем</h3> <p>Начать можно с любой клетки и дальше ходить так, как ходит шахматный конь (буквой Г)</p> <p>Если вы заполнили все клетки доски &mdash; вы победили!</p> "},7739:(e,t,n)=>{n.r(t)},5371:(e,t,n)=>{n.r(t),n.d(t,{default:()=>r});const r={"knight-button":"knight-button__Tt7CZ","need-hint":"need-hint__YPAAj",hint:"hint__EL_b6","last-chosen":"last-chosen__GpP7p",wrong:"wrong__ceYrO"}},7708:(e,t,n)=>{n.r(t),n.d(t,{default:()=>r});const r={"knight-field":"knight-field__SbeY_"}},7614:(e,t,n)=>{n.r(t),n.d(t,{default:()=>r});const r={button:"button__UHHLZ",button_sm:"button_sm__z6sxW",button_md:"button_md__t4_5q",right:"right__cAGiZ"}},1398:(e,t,n)=>{n.r(t),n.d(t,{default:()=>r});const r={header:"header__ieh6Z"}},8016:(e,t,n)=>{n.r(t),n.d(t,{default:()=>r});const r={modal__blackout:"modal__blackout__KuuGW",modal__container:"modal__container__InvVi","modal__close-button":"modal__close-button__GTSpb"}},404:(e,t,n)=>{n.r(t),n.d(t,{default:()=>r});const r={patch:"patch__hYOob",patch__message:"patch__message__gqFOA",patch_knight:"patch_knight__kopRB",patch_line:"patch_line__KGmd8",patch_tetris:"patch_tetris__ZDsF6"}},6899:(e,t,n)=>{n.r(t),n.d(t,{default:()=>r});const r={}},554:(e,t,n)=>{n.r(t),n.d(t,{default:()=>r});const r={"nav-list__item":"nav-list__item__dj29w",active:"active__C2t8u"}},8438:(e,t,n)=>{n.r(t),n.d(t,{default:()=>r});const r={sidebar:"sidebar__j6IVa"}},6529:(e,t,n)=>{n.r(t),n.d(t,{default:()=>r});const r={}},5479:(e,t,n)=>{n.r(t),n.d(t,{default:()=>r});const r={"game-layout":"game-layout__XzU6b","game-heading":"game-heading__l9lw2"}},8145:(e,t,n)=>{n.r(t),n.d(t,{default:()=>r});const r={"main-content-wrapper":"main-content-wrapper__A5Wox"}},6734:(e,t,n)=>{n.r(t),n.d(t,{default:()=>r});const r={"rules-layout":"rules-layout__ii9_q"}},7894:(e,t)=>{t.z=void 0,t.z=[{name:"Вычеркни число",href:"/"},{name:"Ход конем",href:"knight"},{name:"Тетрис",href:"tetris"}]},6978:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n);var a=Object.getOwnPropertyDescriptor(t,n);a&&!("get"in a?!t.__esModule:a.writable||a.configurable)||(a={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,a)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),a=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return a(t,e),t},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Knight=void 0;var l=o(n(7294)),u=n(9865),c=n(1489),s=i(n(652)),d=n(916),f=n(2404),m=n(6646),v=n(7256),_=n(233),h=n(2176),p=n(7282),g=n(2958),b=n(7369),y=n(7173);t.Knight=function(){var e=(0,u.useSelector)((function(e){return e.knight})),t=e.count,n=e.field,r=e.history,a=e.win,o=e.fail,i=e.time,O=(0,l.useState)([]),M=O[0],j=O[1],S=(0,l.useState)(!1),E=S[0],P=S[1],k=(0,l.useRef)(null),w=(0,l.useState)(!1),C=w[0],N=w[1],x=(0,l.useState)(+localStorage.getItem("knight-highscore")||0),T=x[0],D=x[1],A=(0,l.useState)(localStorage.getItem("knight-besttime")||"99:99:99"),B=A[0],I=A[1],L=(0,l.useState)(!1),R=L[0],z=L[1],G=(0,l.useState)(!1),H=G[0],W=G[1],F=(0,u.useDispatch)();(0,l.useEffect)((function(){a&&V()}),[a]),(0,l.useEffect)((function(){o&&K()}),[o]);var U=function(){localStorage.setItem("knight-highscore",Math.max(T,t).toString()),D(Math.max(T,t))},K=function(){W(!0),U()},V=function(){z(!0),function(){var e=Y(),t=e<B?e:B;localStorage.setItem("knight-besttime",t),I(t)}()},Z=(0,l.useCallback)((function(){return z(!1)}),[]),J=(0,l.useCallback)((function(){return W(!1)}),[]),Y=function(){return k.current?k.current.dataset.time:null};return l.default.createElement(d.GameLayout,null,H&&l.default.createElement(y.Modal,{onClose:J},"Вы проиграли :-(",l.default.createElement("br",null),"Ваш счет ",t),R&&l.default.createElement(y.Modal,{onClose:Z},"Вы выиграли! ",l.default.createElement("br",null),"Ваше время ",k.current.dataset.time),l.default.createElement(m.KnightField,null,C&&l.default.createElement(g.Patch,{game:"knight"}),n.flat().map((function(e,t){return l.default.createElement(f.KnightButton,{hint:E&&e.hint,needHint:E,onClick:function(){return function(e){M.length||F((0,b.startTimer)());var t=(0,c.getRowAndCol)(e),r=t.row,a=t.col;!0!==n[r][a].hint&&M.length?(F((0,b.setWrongMove)([r,a])),setTimeout((function(){return F((0,b.removeWrongMove)([r,a]))}),1e3)):(F((0,b.onNextMove)({coords:M,coords2:[r,a]})),j([r,a]))}(t)},disabled:0!=e.value,wrong:e.wrong,lastChosen:(0,c.getIndexFromRowAndCol)(M[0],M[1])===t},0===e.value?"":e.value)}))),l.default.createElement(v.RulesLayout,null,l.default.createElement(h.Timer,{ref:k,time:i,pause:C}),l.default.createElement(p.Score,null,t),l.default.createElement("div",null,"Рекорд: ",T),l.default.createElement("div",null,"Лучшее время: ",B),l.default.createElement("div",null,l.default.createElement("h3",null,"Игровое меню"),l.default.createElement("div",null,l.default.createElement(_.Button,{size:"md",onClick:function(){P(!E)}},E?"Выключить подсказку":"Включить подсказку"),l.default.createElement(_.Button,{size:"md",onClick:function(){var e={coords:M,count:t,field:n,time:Y()};localStorage.setItem("knight-save",JSON.stringify(e))}},"Сохранить"),l.default.createElement(_.Button,{size:"md",onClick:function(){var e=localStorage.getItem("knight-save");if(void 0!==e){var t=JSON.parse(e),n=t.coords;j(n),F((0,b.onLoadGame)(t))}}},"Загрузить"),l.default.createElement(_.Button,{size:"md",onClick:function(){U(),F((0,b.restart)()),j([])}},a||o?"Новая игра":"Начать заново"),l.default.createElement(_.Button,{size:"md",onClick:function(){F((0,b.onUndoMove)())},disabled:!r.length},"Отменить ход"),l.default.createElement(_.Button,{size:"md",onClick:function(){localStorage.setItem("knight-highscore","0")}},"Сбросить рекорд"),l.default.createElement(_.Button,{size:"md",disabled:0===M.length,onClick:function(){N(!C)}},C?"Вернуться к игре":"Пауза"))),l.default.createElement("div",{dangerouslySetInnerHTML:{__html:s.default}})))}},2404:function(e,t,n){var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},r.apply(this,arguments)},a=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.KnightButton=void 0;var i=o(n(7294)),l=o(n(3967)),u=o(n(5371));t.KnightButton=function(e){var t=e.children,n=e.className,o=e.hint,c=e.needHint,s=e.wrong,d=e.lastChosen,f=a(e,["children","className","hint","needHint","wrong","lastChosen"]);return i.default.createElement("button",r({className:(0,l.default)(n,c&&u.default["need-hint"],o&&u.default.hint,s&&u.default.wrong,d&&u.default["last-chosen"],u.default["knight-button"])},f),t)}},6646:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.KnightField=void 0;var a=r(n(7294)),o=r(n(3967)),i=r(n(7708));t.KnightField=function(e){var t=e.children,n=e.className;return a.default.createElement("div",{className:(0,o.default)(n,i.default["knight-field"])},t)}},1489:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getIndexFromRowAndCol=t.getRowAndCol=void 0,t.getRowAndCol=function(e){var t=Math.floor(e/10);return{row:t,col:e-10*t}},t.getIndexFromRowAndCol=function(e,t){return 10*e+t}},4303:function(e,t,n){var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},r.apply(this,arguments)},a=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n);var a=Object.getOwnPropertyDescriptor(t,n);a&&!("get"in a?!t.__esModule:a.writable||a.configurable)||(a={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,a)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&a(t,e,n);return o(t,e),t},l=this&&this.__spreadArray||function(e,t,n){if(n||2===arguments.length)for(var r,a=0,o=t.length;a<o;a++)!r&&a in t||(r||(r=Array.prototype.slice.call(t,0,a)),r[a]=t[a]);return e.concat(r||Array.prototype.slice.call(t))},u=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Line=void 0;var c=i(n(7294)),s=n(9563),d=n(9880),f=u(n(1986)),m=n(916),v=n(233),_=n(5404),h=n(2934),p=n(7338),g=n(7256),b=n(2215),y=n(2176),O=n(2958),M=n(7282),j=n(7173),S=n(7015);t.Line=function(){var e=(0,S.useAppSelector)((function(e){return e.line})),t=e.arr,n=e.history,a=e.timer,o=e.score,i=e.win,u=e.fail,E=e.continued,P=(0,S.useAppDispatch)(),k=(0,c.useState)(!1),w=k[0],C=k[1],N=(0,c.useState)(!1),x=N[0],T=N[1],D=(0,c.useState)(-1),A=D[0],B=D[1],I=(0,c.useState)(t),L=I[0],R=I[1],z=(0,c.useState)(n),G=z[0],H=z[1],W=(0,c.useState)(+localStorage.getItem("line-highscore")||0),F=W[0],U=W[1],K=(0,c.useState)(localStorage.getItem("line-besttime")||"99:99:99"),V=K[0],Z=K[1],J=(0,c.useState)(!1),Y=J[0],q=J[1],X=(0,c.useState)(!1),Q=X[0],$=X[1],ee=(0,c.useState)(!1),te=ee[0],ne=ee[1],re=(0,c.useRef)(null);(0,c.useEffect)((function(){R(t),H(n)}),[t,n]),(0,c.useEffect)((function(){i&&oe()}),[i]),(0,c.useEffect)((function(){u&&!E&&ie()}),[u,E]),(0,c.useEffect)((function(){return console.log("MOUNT"),function(){console.log("UNMOUNT")}}));var ae=function(){localStorage.setItem("line-highscore",Math.max(F,o).toString()),U(Math.max(F,o))},oe=function(){var e,t;q(!0),ae(),t=(e=fe())<V?e:V,localStorage.setItem("line-besttime",t),Z(t)},ie=function(){$(!0),ae()},le=(0,c.useCallback)((function(){ne(!0),ae()}),[]),ue=(0,c.useCallback)((function(){return q(!1)}),[]),ce=(0,c.useCallback)((function(){$(!1),P((0,b.onContinue)())}),[]),se=(0,c.useCallback)((function(){$(!1),P((0,b.onRestart)())}),[]),de=(0,c.useCallback)((function(){ne(!1),P((0,b.onRestart)())}),[]),fe=function(){var e;return re.current?null===(e=re.current.dataset)||void 0===e?void 0:e.time:null};return c.default.createElement(m.GameLayout,null,Q&&c.default.createElement(j.Modal,{onClose:ce},"Пожалуй, выиграть уже не получится",c.default.createElement("br",null),"Ваш счет ",o,c.default.createElement("br",null),c.default.createElement(v.Button,{size:"sm",onClick:ce},"Продолжить"),c.default.createElement(v.Button,{size:"sm",onClick:se},"Новая игра")),te&&c.default.createElement(j.Modal,{onClose:de},"Вы завершили игру!",c.default.createElement("br",null),"Ваш счет ",o,c.default.createElement("br",null)),Y&&c.default.createElement(j.Modal,{onClose:ue},"Ура, победа!",c.default.createElement("br",null),"Ваш счет ",o),c.default.createElement(p.LineLayout,null,c.default.createElement(h.LineField,null,x&&c.default.createElement(O.Patch,{game:"line"}),L.map((function(e,t){return c.default.createElement(_.LineButton,{key:"line_button"+t,disabled:e.deleted,active:e.active,onClick:function(){return function(e){if(w||(C(!0),P((0,b.startTimer)())),-1===A)B(e),(t=l([],L,!0))[e]=r(r({},t[e]),{active:!0}),R(t);else if(A===e){var t;B(-1),(t=l([],L,!0))[e]=r(r({},t[e]),{active:!1}),R(t)}else((0,s.checkHorizontal)(L,A,e)||(0,s.checkVertical)(L,A,e))&&(P((0,b.onDeleteChars)({idx:[e,A],length:L.length})),B(-1))}(t)}},e.value)}))),c.default.createElement(v.Button,{"data-testid":"submit_button",size:"sm",onClick:function(){var e=l([],L,!0),t=e.filter((function(e){return!e.deleted})).map((function(e){return e.value}));if(t.length){for(var n=0,a=t;n<a.length;n++){var o=a[n];e.push(r(r({},d.defaultItem),{value:o}))}P((0,b.onNext)(e))}else P((0,b.onVictory)())},floatRight:!0},"Дальше")),c.default.createElement(g.RulesLayout,null,c.default.createElement(y.Timer,{ref:re,time:a,pause:x||!w}),c.default.createElement(M.Score,null,o),c.default.createElement("div",null,"Рекорд: ",F),c.default.createElement("div",null,"Лучшее время: ",V),c.default.createElement("div",null,c.default.createElement("h3",null,"Игровое меню"),c.default.createElement("div",null,c.default.createElement(v.Button,{onClick:function(){ae(),P((0,b.onRestart)()),C(!1)},size:"md"},i||u?"Новая игра":"Начать заново"),c.default.createElement(v.Button,{size:"md",disabled:0===G.length,onClick:function(){P((0,b.onUndo)()),B(-1)}},"Отменить ход"),c.default.createElement(v.Button,{size:"md",onClick:function(){var e=l([],L,!0);A>=0&&(e[A].active=!1);var t=fe();localStorage.setItem("line-save",JSON.stringify({history:G,arr:e,timer:t,score:o}))}},"Сохранить"),c.default.createElement(v.Button,{size:"md",onClick:function(){var e=localStorage.getItem("line-save");if(void 0!==e){var t=JSON.parse(e);P((0,b.onLoadGame)(t)),C(!0)}}},"Загрузить"),c.default.createElement(v.Button,{size:"md",onClick:le},"Закончить игру"),c.default.createElement(v.Button,{size:"md",disabled:!w,onClick:function(){T(!x)}},x?"Вернуться к игре":"Пауза"))),c.default.createElement("div",{dangerouslySetInnerHTML:{__html:f.default}})))}},4108:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.legitMoves=void 0,t.legitMoves=[[-2,1],[-2,-1],[-1,2],[1,2],[2,1],[2,-1],[1,-2],[-1,-2]]},2195:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.lineFailCount=t.lineScoring=void 0,t.lineScoring={delete:10,next:10,undo:-15,win:1e3},t.lineFailCount=200},292:function(e,t,n){var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},r.apply(this,arguments)},a=this&&this.__spreadArray||function(e,t,n){if(n||2===arguments.length)for(var r,a=0,o=t.length;a<o;a++)!r&&a in t||(r||(r=Array.prototype.slice.call(t,0,a)),r[a]=t[a]);return e.concat(r||Array.prototype.slice.call(t))};Object.defineProperty(t,"__esModule",{value:!0}),t.setHint=t.removeHint=t.getDefaultField=void 0;var o=n(4108);t.getDefaultField=function(){for(var e=[],t=0;t<10;t++){e.push([]);for(var n=0;n<10;n++)e[t].push({hint:!1,wrong:!1,value:0})}return e},t.removeHint=function(e,t){for(var n=e[0],i=e[1],l=a([],t,!0),u=0,c=o.legitMoves;u<c.length;u++){var s=c[u];l[n+s[0]]&&l[n+s[0]][i+s[1]]&&(l[n+s[0]][i+s[1]]=r(r({},l[n+s[0]][i+s[1]]),{hint:!1}))}return l},t.setHint=function(e,t){for(var n=e[0],i=e[1],l=a([],t,!0),u=0,c=0,s=o.legitMoves;c<s.length;c++){var d=s[c];l[n+d[0]]&&l[n+d[0]][i+d[1]]&&!l[n+d[0]][i+d[1]].value&&(u++,l[n+d[0]][i+d[1]]=r(r({},l[n+d[0]][i+d[1]]),{hint:!0}))}return u?l:null}},7015:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.useAppSelector=t.useAppDispatch=void 0;var r=n(9865);t.useAppDispatch=r.useDispatch.withTypes(),t.useAppSelector=r.useSelector.withTypes()},7369:function(e,t,n){var r,a=this&&this.__spreadArray||function(e,t,n){if(n||2===arguments.length)for(var r,a=0,o=t.length;a<o;a++)!r&&a in t||(r||(r=Array.prototype.slice.call(t,0,a)),r[a]=t[a]);return e.concat(r||Array.prototype.slice.call(t))};Object.defineProperty(t,"__esModule",{value:!0}),t.onLoadGame=t.restart=t.onUndoMove=t.removeWrongMove=t.setWrongMove=t.onNextMove=t.resetTimer=t.startTimer=t.knightSlice=void 0;var o=n(438),i=n(292),l={field:(0,i.getDefaultField)(),count:0,history:[],time:"",win:!1,fail:!1};t.knightSlice=(0,o.createSlice)({name:"knight",initialState:l,reducers:{onNextMove:function(e,t){var n=t.payload,r=n.coords,a=n.coords2,o=a[0],l=a[1];e.count++;var u=(0,i.removeHint)(r,e.field);if(e.field[o][l].value=e.count,100!==e.count){var c=e.history;c.push([o,l]),e.history=c;var s=(0,i.setHint)([o,l],u);e.field=s||u,s||(e.fail=!0)}else e.win=!0},onUndoMove:function(e){var t=e.history.pop(),n=t[0],r=t[1];e.field[n][r].value=0,e.count--},setWrongMove:function(e,t){var n=t.payload,r=n[0],o=n[1],i=a([],e.field,!0);i[r][o].wrong=!0,e.field=i},removeWrongMove:function(e,t){var n=t.payload,r=n[0],o=n[1],i=a([],e.field,!0);i[r][o].wrong=!1,e.field=i},restart:function(e){for(var t in l)e[t]=l[t]},onLoadGame:function(e,t){var n=t.payload;for(var r in e)e[r]=n[r]||l[r]},startTimer:function(e){e.time="00:00:00"},resetTimer:function(e){e.time=l.time}}}),t.startTimer=(r=t.knightSlice.actions).startTimer,t.resetTimer=r.resetTimer,t.onNextMove=r.onNextMove,t.setWrongMove=r.setWrongMove,t.removeWrongMove=r.removeWrongMove,t.onUndoMove=r.onUndoMove,t.restart=r.restart,t.onLoadGame=r.onLoadGame,t.default=t.knightSlice.reducer},2215:function(e,t,n){var r,a=this&&this.__spreadArray||function(e,t,n){if(n||2===arguments.length)for(var r,a=0,o=t.length;a<o;a++)!r&&a in t||(r||(r=Array.prototype.slice.call(t,0,a)),r[a]=t[a]);return e.concat(r||Array.prototype.slice.call(t))};Object.defineProperty(t,"__esModule",{value:!0}),t.resetTimer=t.startTimer=t.onLoadGame=t.onRestart=t.onUndo=t.onNext=t.onDeleteChars=t.onVictory=t.onContinue=t.lineSlice=void 0;var o=n(438),i=n(9563),l=n(2195),u={history:[],arr:(0,i.getDefaultArray)(),score:0,timer:"",win:!1,fail:!1,continued:!1};t.lineSlice=(0,o.createSlice)({name:"line",initialState:u,reducers:{onDeleteChars:function(e,t){var n=t.payload,r=n.idx,a=n.length,o=r[0],i=r[1];e.arr[o].deleted=!0,e.arr[i].deleted=!0,e.history.push({idx:r,length:a}),e.score+=l.lineScoring.delete},onNext:function(e,t){var n=e.arr.length;e.arr=a([],t.payload,!0);var r=e.history;r.push({idx:[],length:n}),e.history=r,e.score+=l.lineScoring.next,e.arr.length>l.lineFailCount&&(e.fail=!0)},onUndo:function(e){var t=e.history.pop(),n=t.idx,r=t.length;if(console.log(n,r),n.length){var a=n[0],o=n[1];e.arr[a].deleted=!1,e.arr[o].deleted=!1}var i=e.arr.slice(0,r);e.arr=i,e.score=Math.max(e.score+l.lineScoring.undo,0)},onRestart:function(e){for(var t in u)e[t]=u[t]},onContinue:function(e){e.continued=!0},onLoadGame:function(e,t){for(var n in e)e[n]=t.payload[n]||u[n]},startTimer:function(e){e.timer="00:00:00"},resetTimer:function(e){e.timer=u.timer},onVictory:function(e){e.win=!0,e.score+=l.lineScoring.win}}}),t.onContinue=(r=t.lineSlice.actions).onContinue,t.onVictory=r.onVictory,t.onDeleteChars=r.onDeleteChars,t.onNext=r.onNext,t.onUndo=r.onUndo,t.onRestart=r.onRestart,t.onLoadGame=r.onLoadGame,t.startTimer=r.startTimer,t.resetTimer=r.resetTimer,t.default=t.lineSlice.reducer},7707:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.store=void 0;var a=n(438),o=r(n(2215)),i=r(n(7369));t.store=(0,a.configureStore)({reducer:{line:o.default,knight:i.default}})},5914:function(e,t){var n=this&&this.__spreadArray||function(e,t,n){if(n||2===arguments.length)for(var r,a=0,o=t.length;a<o;a++)!r&&a in t||(r||(r=Array.prototype.slice.call(t,0,a)),r[a]=t[a]);return e.concat(r||Array.prototype.slice.call(t))};Object.defineProperty(t,"__esModule",{value:!0}),t.copyMatrix=void 0,t.copyMatrix=function(e){for(var t=[],r=0,a=e;r<a.length;r++){var o=a[r];t.push(n([],o,!0))}return t}},4306:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getTime=void 0,t.getTime=function(e){var t,n;return null===(n=null===(t=null==e?void 0:e.current)||void 0===t?void 0:t.dataset)||void 0===n?void 0:n.time}},8332:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getTime=t.copyMatrix=void 0;var r=n(5914);Object.defineProperty(t,"copyMatrix",{enumerable:!0,get:function(){return r.copyMatrix}});var a=n(4306);Object.defineProperty(t,"getTime",{enumerable:!0,get:function(){return a.getTime}})},233:function(e,t,n){var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},r.apply(this,arguments)},a=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Button=void 0;var i=o(n(3967)),l=o(n(7294)),u=o(n(7614));t.Button=function(e){var t=e.children,n=(e.className,e.spec),o=e.size,c=e.floatRight,s=a(e,["children","className","spec","size","floatRight"]);return l.default.createElement("button",r({className:(0,i.default)(u.default.button,n&&u.default["button__".concat(n)],o&&u.default["button_".concat(o)],c&&u.default.right)},s),t)}},6370:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n);var a=Object.getOwnPropertyDescriptor(t,n);a&&!("get"in a?!t.__esModule:a.writable||a.configurable)||(a={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,a)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),a=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return a(t,e),t},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Header=void 0;var l=o(n(7294)),u=i(n(1398));t.Header=function(){var e=(0,l.useState)("Добро пожаловать в игры"),t=e[0];return e[1],l.default.createElement("div",{className:u.default.header},l.default.createElement("h1",null,t))}},587:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Modal=void 0;var a=r(n(7294)),o=r(n(3967)),i=r(n(8016)),l=n(3935);t.Modal=function(e){var t=e.children,n=e.className,r=e.onClose;return a.default.createElement(a.default.Fragment,null,(0,l.createPortal)(a.default.createElement("div",{className:(0,o.default)(n,i.default.modal__blackout),onClick:r},a.default.createElement("div",{className:(0,o.default)(n,i.default.modal__container)},a.default.createElement("div",{className:(0,o.default)(n,i.default["modal__close-button"]),onClick:r}),t)),document.body))}},2958:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Patch=void 0;var a=r(n(7294)),o=r(n(404)),i=r(n(3967));t.Patch=function(e){var t=e.game;return a.default.createElement("div",{className:(0,i.default)(o.default.patch,o.default["patch_".concat(t)])},a.default.createElement("p",{className:o.default.patch__message},"пауза"))}},7282:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Score=void 0;var a=r(n(7294)),o=r(n(3967)),i=r(n(6899));t.Score=function(e){var t=e.children,n=e.className;return a.default.createElement("div",{className:(0,o.default)(n,i.default.score)},"Текущий счет: ",t)}},5222:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.NavItem=void 0;var a=r(n(7294)),o=r(n(3967)),i=r(n(554)),l=n(9655);t.NavItem=function(e){var t=e.name,n=e.onclick,r=e.href,u=e.className;return a.default.createElement("li",{className:(0,o.default)(u,i.default["nav-list__item"])},r&&a.default.createElement(l.NavLink,{className:function(e){return e.isActive?i.default.active:""},to:r,onClick:n},t),!r&&a.default.createElement("span",{onClick:n},t))}},9940:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n);var a=Object.getOwnPropertyDescriptor(t,n);a&&!("get"in a?!t.__esModule:a.writable||a.configurable)||(a={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,a)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),a=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return a(t,e),t},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Sidebar=void 0;var l=o(n(7294)),u=n(5222),c=i(n(8438));t.Sidebar=function(e){var t=e.links,n=(0,l.useState)(t),r=n[0];return n[1],l.default.createElement("aside",{className:c.default.sidebar},l.default.createElement("ul",{className:"nav-list"},r.map((function(e,t){return l.default.createElement(u.NavItem,{active:e.active,name:e.name,href:e.href,key:t})}))))}},5410:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Sidebar=t.NavItem=void 0;var r=n(5222);Object.defineProperty(t,"NavItem",{enumerable:!0,get:function(){return r.NavItem}});var a=n(9940);Object.defineProperty(t,"Sidebar",{enumerable:!0,get:function(){return a.Sidebar}})},6783:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Spinner=void 0;var a=r(n(7294));n(7739),t.Spinner=function(){return a.default.createElement("div",{className:"spinner"},a.default.createElement("span",{className:"spinner__dot"},a.default.createElement("i",{className:"spinner__item"}),a.default.createElement("i",{className:"spinner__item"}),a.default.createElement("i",{className:"spinner__item"}),a.default.createElement("i",{className:"spinner__item"})))}},2176:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n);var a=Object.getOwnPropertyDescriptor(t,n);a&&!("get"in a?!t.__esModule:a.writable||a.configurable)||(a={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,a)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),a=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return a(t,e),t},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Timer=void 0;var l=o(n(7294)),u=i(n(3967)),c=i(n(6529)),s=n(5983),d=n(2752);t.Timer=(0,l.forwardRef)((function(e,t){var n=e.className,r=e.time,a=e.pause,o=(0,l.useState)(0),i=o[0],f=o[1],m=(0,l.useState)(0),v=m[0],_=m[1],h=(0,l.useState)(0),p=h[0],g=h[1];return(0,l.useRef)(null).current=(0,d.useInterval)((function(){a||(g(p+1),59===p&&(g(0),_(v+1)),59===v&&(_(0),f(i+1)))}),1e3),(0,l.useEffect)((function(){if(r){var e=(0,s.parseTime)(r),t=e[0],n=e[1],a=e[2];_(n),f(t),g(a)}else _(0),f(0),g(0)}),[r]),l.default.createElement("div",{"data-time":"".concat(i<10?"0":"").concat(i,":").concat(v<10?"0":"").concat(v,":").concat(p<10?"0":"").concat(p),ref:t,className:(0,u.default)(n,c.default.timer)},i<10&&"0",i,":",v<10&&"0",v,":",p<10&&"0",p)}))},5983:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.parseTime=t.getTime=void 0,t.getTime=function(e){var t=Math.floor(+e/1e3),n=Math.floor(t/60);t-=60*n;var r=Math.floor(n/60);return{hours:r,mins:n-=60*r,secs:t}},t.parseTime=function(e){return e.split(":").map((function(e){return Number(e)}))}},7173:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Modal=t.Timer=t.Sidebar=t.NavItem=t.Score=t.Patch=t.Header=t.Button=void 0;var r=n(233);Object.defineProperty(t,"Button",{enumerable:!0,get:function(){return r.Button}});var a=n(6370);Object.defineProperty(t,"Header",{enumerable:!0,get:function(){return a.Header}});var o=n(2958);Object.defineProperty(t,"Patch",{enumerable:!0,get:function(){return o.Patch}});var i=n(7282);Object.defineProperty(t,"Score",{enumerable:!0,get:function(){return i.Score}});var l=n(5410);Object.defineProperty(t,"NavItem",{enumerable:!0,get:function(){return l.NavItem}}),Object.defineProperty(t,"Sidebar",{enumerable:!0,get:function(){return l.Sidebar}});var u=n(2176);Object.defineProperty(t,"Timer",{enumerable:!0,get:function(){return u.Timer}});var c=n(587);Object.defineProperty(t,"Modal",{enumerable:!0,get:function(){return c.Modal}})},916:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n);var a=Object.getOwnPropertyDescriptor(t,n);a&&!("get"in a?!t.__esModule:a.writable||a.configurable)||(a={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,a)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),a=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return a(t,e),t},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.GameLayout=void 0;var l=o(n(7294)),u=i(n(5479)),c=n(3982);t.GameLayout=function(e){var t=e.children,n=(0,l.useState)(""),r=n[0],a=n[1];return(0,l.useEffect)((function(){var e=window.location.pathname;a(c.headings[e])})),l.default.createElement("div",{className:u.default["game-layout"]},l.default.createElement("h2",{className:u.default["game-heading"]},r),t)}},3982:(e,t)=>{var n;Object.defineProperty(t,"__esModule",{value:!0}),t.headings=void 0;var r="/games.2.0./";t.headings=((n={})[r]="Игра в вычеркни число",n["".concat(r,"knight")]="Игра в ход конем",n["".concat(r,"tetris")]="Тетрис",n)},3198:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.MainContentWrapper=void 0;var a=r(n(7294)),o=r(n(8145));t.MainContentWrapper=function(e){var t=e.children;return a.default.createElement("main",{className:o.default["main-content-wrapper"]},t)}},7256:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.RulesLayout=void 0;var a=r(n(7294)),o=r(n(3967)),i=r(n(6734));t.RulesLayout=function(e){var t=e.children,n=e.className;return a.default.createElement("div",{className:(0,o.default)(n,i.default["rules-layout"])},t)}}}]);