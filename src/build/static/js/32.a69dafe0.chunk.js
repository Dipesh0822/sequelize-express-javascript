(this["webpackJsonpcasino-admin"]=this["webpackJsonpcasino-admin"]||[]).push([[32],{1154:function(t,e,a){"use strict";a.r(e);var c=a(20),n=a(0),r=a(239),s=a(456),i=a(16),o=a(19),d=a(34),u=a(63),j=a(117),l=a(780),b=a(355),O=a(1);e.default=function(){var t=Object(d.b)(),e=Object(d.c)((function(t){return t.settings})),a=Object(o.f)(),f=Object(n.useState)("About Us"),h=Object(c.a)(f,2),p=h[0],x=(h[1],JSON.parse(localStorage.getItem("MAJESTIC_CASINO")).menupermission),g=window.location.href.split("/"),S=x.filter((function(t){return t.MENU_SLUG==="/".concat(g[g.length-2],"/").concat(g[g.length-1])}))[0];return Object(O.jsx)(r.a,{children:Object(O.jsx)(j.a,{title:"About Us",secondary:Object(O.jsxs)(r.a,{children:[S.ISUPDATE?Object(O.jsx)(s.a,{startIcon:Object(O.jsx)(i.L,{}),color:"error",variant:"contained",children:"Reset"}):null,S.ISUPDATE?Object(O.jsx)(s.a,{startIcon:Object(O.jsx)(i.x,{}),color:"primary",variant:"contained",sx:{mr:3,ml:3},onClick:function(){t(Object(u.b)({title:e.updatedData.TITLE,description:e.updatedData.DESCRIPTION,pageTitle:p,id:e.updatedData.SETTING_ID}))},children:"Update"}):null,S.ISVIEW?Object(O.jsx)(s.a,{startIcon:Object(O.jsx)(i.y,{}),color:"secondary",variant:"contained",onClick:function(){a("/cms/preview",{state:e.updatedData?e.updatedData:e.data})},children:"Preview"}):null]}),children:Object(O.jsx)(r.a,{children:S.ISVIEW?Object(O.jsx)(l.a,{pageTitle:p,hasUpdatePermission:S.ISUPDATE}):Object(O.jsx)(b.a,{msg:"No Data Found"})})})})}},355:function(t,e,a){"use strict";var c=a(192),n=a(71),r=a(16),s=a(1);e.a=function(t){var e=t.msg;return Object(s.jsxs)(c.a,{style:{display:"flex",height:60,justifyContent:"center",alignItems:"center"},fullWidth:!0,children:[Object(s.jsx)(r.A,{}),Object(s.jsx)(n.a,{style:{fontWeight:900,fontSize:20},children:e})]})}},356:function(t,e,a){"use strict";var c=a(20),n=a(239),r=a(1179),s=a(1165),i=a(0),o=a(1);e.a=function(t){var e=t.status,a=t.message,d=Object(i.useState)(!1),u=Object(c.a)(d,2),j=u[0],l=u[1],b=Object(i.useState)(""),O=Object(c.a)(b,2),f=O[0],h=O[1],p=Object(i.useState)("error"),x=Object(c.a)(p,2),g=x[0],S=x[1];return Object(i.useEffect)((function(){(void 0!==e||null!==e&&void 0!==a||null!==a)&&(l(!j),h(a),S("true"===e?"success":"error"))}),[e,a]),Object(o.jsx)(n.a,{children:Object(o.jsx)(r.a,{open:j,anchorOrigin:{vertical:"bottom",horizontal:"center"},autoHideDuration:4e3,onClose:function(){return l(!j)},children:Object(o.jsx)(s.a,{severity:g,style:{backgroundColor:"true"===e?"green":"red",color:"white"},id:"alert",children:f.toString()})})})}},780:function(t,e,a){"use strict";var c=a(20),n=a(0),r=a(239),s=a(462),i=a(472),o=a(1181),d=a(787),u=a(804),j=a(802),l=(a(803),a(34)),b=a(63),O=a(356),f=a(126),h=a(1);e.a=function(t){var e=t.pageTitle,a=t.hasUpdatePermission,p=Object(l.b)(),x=Object(l.c)((function(t){return t.settings})),g=Object(n.useState)((function(){return d.EditorState.createEmpty()})),S=Object(c.a)(g,2),m=S[0],I=S[1],E=Object(n.useState)(""),T=Object(c.a)(E,2),v=T[0],y=T[1],C=Object(n.useState)(""),D=Object(c.a)(C,2),P=D[0],N=D[1];return Object(n.useEffect)((function(){var t=x.data.DESCRIPTION||"<h2>".concat(e,"</h2>"),a=Object(d.convertFromHTML)(t),c=d.ContentState.createFromBlockArray(a.contentBlocks,a.entityMap);I((function(){return d.EditorState.createWithContent(c)}))}),[x.data.DESCRIPTION]),Object(n.useEffect)((function(){p(Object(b.a)(e))}),[]),Object(n.useEffect)((function(){var t=x.data.TITLE,e=x.data.DESCRIPTION;y(t),N(e)}),[x.data]),Object(n.useEffect)((function(){N(Object(u.a)(m.getCurrentContent()))}),[m]),Object(n.useEffect)((function(){p(Object(f.b)({TITLE:v,DESCRIPTION:P}))}),[v,m]),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)(r.a,{children:[Object(h.jsxs)(s.a,{fullWidth:!0,children:[Object(h.jsx)(i.a,{htmlFor:"title",children:"Title"}),Object(h.jsx)(o.a,{disabled:!a,value:v,name:"title",id:"title",label:"Title",onChange:function(t){return y(t.target.value)}})]}),Object(h.jsxs)(r.a,{children:[Object(h.jsx)(i.a,{style:{padding:10},children:"Description"}),Object(h.jsx)(j.Editor,{readOnly:!a,editorState:m,onEditorStateChange:I,wrapperStyle:{padding:"1rem",border:"1px solid #ccc",borderRadius:10},editorStyle:{padding:"1rem",border:"1px solid #ccc",borderRadius:10,height:"30rem"},toolbarStyle:{border:"1px solid #ccc",padding:"1rem",borderRadius:10}})]})]}),"failed"===x.status&&Object(h.jsx)(O.a,{status:"false",message:x.msg}),"success"===x.status&&Object(h.jsx)(O.a,{status:"true",message:x.msg})]})}}}]);
//# sourceMappingURL=32.a69dafe0.chunk.js.map