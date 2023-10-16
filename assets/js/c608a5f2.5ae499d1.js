"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[42177],{62680:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>o,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>d,toc:()=>a});var t=n(85893),c=n(11151);const i={displayed_sidebar:"English"},r="microseconds_add",d={id:"sql-reference/sql-functions/date-time-functions/microseconds_add",title:"microseconds_add",description:"Description",source:"@site/versioned_docs/version-2.5/sql-reference/sql-functions/date-time-functions/microseconds_add.md",sourceDirName:"sql-reference/sql-functions/date-time-functions",slug:"/sql-reference/sql-functions/date-time-functions/microseconds_add",permalink:"/doc/docs/2.5/sql-reference/sql-functions/date-time-functions/microseconds_add",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-functions/date-time-functions/microseconds_add.md",tags:[],version:"2.5",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"hours_sub",permalink:"/doc/docs/2.5/sql-reference/sql-functions/date-time-functions/hours_sub"},next:{title:"microseconds_sub",permalink:"/doc/docs/2.5/sql-reference/sql-functions/date-time-functions/microseconds_sub"}},o={},a=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function l(e){const s=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code"},(0,c.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"microseconds_add",children:"microseconds_add"}),"\n",(0,t.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(s.p,{children:"Adds a time interval to a date value. The time interval is in microseconds."}),"\n",(0,t.jsx)(s.h2,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-Haskell",children:"DATETIME microseconds_add(DATETIME expr1,INT expr2);\n"})}),"\n",(0,t.jsx)(s.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"expr1"}),": the time expression. It must be of the DATETIME type."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"expr2"}),": the time interval you want to add, in microseconds. It must be of the INT type."]}),"\n",(0,t.jsx)(s.h2,{id:"return-value",children:"Return value"}),"\n",(0,t.jsxs)(s.p,{children:["Returns a value of the DATETIME type. If the input value is of the DATE type, the hour, minute, and seconds parts are processed as ",(0,t.jsx)(s.code,{children:"00:00:00"}),"."]}),"\n",(0,t.jsx)(s.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-Plain",metastring:"Text",children:"select microseconds_add('2010-11-30 23:50:50', 2);\n+--------------------------------------------+\n| microseconds_add('2010-11-30 23:50:50', 2) |\n+--------------------------------------------+\n| 2010-11-30 23:50:50.000002                 |\n+--------------------------------------------+\n1 row in set (0.00 sec)\n\nselect microseconds_add('2010-11-30', 2);\n+-----------------------------------+\n| microseconds_add('2010-11-30', 2) |\n+-----------------------------------+\n| 2010-11-30 00:00:00.000002        |\n+-----------------------------------+\n"})})]})}const u=function(e={}){const{wrapper:s}=Object.assign({},(0,c.ah)(),e.components);return s?(0,t.jsx)(s,Object.assign({},e,{children:(0,t.jsx)(l,e)})):l(e)}},11151:(e,s,n)=>{n.d(s,{Zo:()=>d,ah:()=>i});var t=n(67294);const c=t.createContext({});function i(e){const s=t.useContext(c);return t.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const r={};function d({components:e,children:s,disableParentContext:n}){let d;return d=n?"function"==typeof e?e({}):e||r:i(e),t.createElement(c.Provider,{value:d},s)}}}]);