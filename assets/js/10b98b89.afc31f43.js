"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[90214],{23733:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var n=s(85893),r=s(11151);const i={},c="str2date",a={id:"sql-reference/sql-functions/date-time-functions/str2date",title:"str2date",description:"Description",source:"@site/versioned_docs/version-3.0/sql-reference/sql-functions/date-time-functions/str2date.md",sourceDirName:"sql-reference/sql-functions/date-time-functions",slug:"/sql-reference/sql-functions/date-time-functions/str2date",permalink:"/doc/docs/3.0/sql-reference/sql-functions/date-time-functions/str2date",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/sql-reference/sql-functions/date-time-functions/str2date.md",tags:[],version:"3.0",frontMatter:{},sidebar:"Chinese31",previous:{title:"seconds_sub",permalink:"/doc/docs/3.0/sql-reference/sql-functions/date-time-functions/seconds_sub"},next:{title:"str_to_date",permalink:"/doc/docs/3.0/sql-reference/sql-functions/date-time-functions/str_to_date"}},o={},d=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function l(e){const t=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",pre:"pre",code:"code"},(0,r.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"str2date",children:"str2date"}),"\n",(0,n.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,n.jsx)(t.p,{children:"Converts a string into a DATE value according to the specified format. If the conversion fails, NULL is returned."}),"\n",(0,n.jsxs)(t.p,{children:["The format must be consistent with that described in ",(0,n.jsx)(t.a,{href:"/doc/docs/3.0/sql-reference/sql-functions/date-time-functions/date_format",children:"date_format"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["This function is equivalent to ",(0,n.jsx)(t.a,{href:"/doc/docs/3.0/sql-reference/sql-functions/date-time-functions/str_to_date",children:"str_to_date"})," but has a different return type."]}),"\n",(0,n.jsx)(t.h2,{id:"syntax",children:"Syntax"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-Haskell",children:"DATE str2date(VARCHAR str, VARCHAR format);\n"})}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"str"}),": the time expression you want to convert. It must be of the VARCHAR type."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"format"}),": the format used to return the value. For the supported format, see ",(0,n.jsx)(t.a,{href:"/doc/docs/3.0/sql-reference/sql-functions/date-time-functions/date_format",children:"date_format"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"return-value",children:"Return value"}),"\n",(0,n.jsx)(t.p,{children:"Returns a value of the DATE type."}),"\n",(0,n.jsxs)(t.p,{children:["NULL is returned if ",(0,n.jsx)(t.code,{children:"str"})," or ",(0,n.jsx)(t.code,{children:"format"})," is NULL."]}),"\n",(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-Plain",children:"select str2date('2010-11-30 23:59:59', '%Y-%m-%d %H:%i:%s');\n+------------------------------------------------------+\n| str2date('2010-11-30 23:59:59', '%Y-%m-%d %H:%i:%s') |\n+------------------------------------------------------+\n| 2010-11-30                                           |\n+------------------------------------------------------+\n1 row in set (0.01 sec)\n"})})]})}const u=function(e={}){const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(l,e)})):l(e)}},11151:(e,t,s)=>{s.d(t,{Zo:()=>a,ah:()=>i});var n=s(67294);const r=n.createContext({});function i(e){const t=n.useContext(r);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const c={};function a({components:e,children:t,disableParentContext:s}){let a;return a=s?"function"==typeof e?e({}):e||c:i(e),n.createElement(r.Provider,{value:a},t)}}}]);