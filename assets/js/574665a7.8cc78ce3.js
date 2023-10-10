"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[32438],{94637:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>c,metadata:()=>o,toc:()=>a});var t=n(85893),r=n(11151);const c={},i="microseconds_add",o={id:"sql-reference/sql-functions/date-time-functions/microseconds_add",title:"microseconds_add",description:"Description",source:"@site/versioned_docs/version-3.1/sql-reference/sql-functions/date-time-functions/microseconds_add.md",sourceDirName:"sql-reference/sql-functions/date-time-functions",slug:"/sql-reference/sql-functions/date-time-functions/microseconds_add",permalink:"/docusaurusv3/docs/sql-reference/sql-functions/date-time-functions/microseconds_add",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-functions/date-time-functions/microseconds_add.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"makedate",permalink:"/docusaurusv3/docs/sql-reference/sql-functions/date-time-functions/makedate"},next:{title:"microseconds_sub",permalink:"/docusaurusv3/docs/sql-reference/sql-functions/date-time-functions/microseconds_sub"}},d={},a=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function l(e){const s=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code"},(0,r.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"microseconds_add",children:"microseconds_add"}),"\n",(0,t.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(s.p,{children:"Adds a time interval to a date value. The time interval is in microseconds."}),"\n",(0,t.jsx)(s.h2,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-Haskell",children:"DATETIME microseconds_add(DATETIME expr1,INT expr2);\n"})}),"\n",(0,t.jsx)(s.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"expr1"}),": the time expression. It must be of the DATETIME type."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"expr2"}),": the time interval you want to add, in microseconds. It must be of the INT type."]}),"\n",(0,t.jsx)(s.h2,{id:"return-value",children:"Return value"}),"\n",(0,t.jsxs)(s.p,{children:["Returns a value of the DATETIME type. If the input value is of the DATE type, the hour, minute, and seconds parts are processed as ",(0,t.jsx)(s.code,{children:"00:00:00"}),"."]}),"\n",(0,t.jsx)(s.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-Plain",metastring:"Text",children:"select microseconds_add('2010-11-30 23:50:50', 2);\n+--------------------------------------------+\n| microseconds_add('2010-11-30 23:50:50', 2) |\n+--------------------------------------------+\n| 2010-11-30 23:50:50.000002                 |\n+--------------------------------------------+\n1 row in set (0.00 sec)\n\nselect microseconds_add('2010-11-30', 2);\n+-----------------------------------+\n| microseconds_add('2010-11-30', 2) |\n+-----------------------------------+\n| 2010-11-30 00:00:00.000002        |\n+-----------------------------------+\n"})})]})}const u=function(e={}){const{wrapper:s}=Object.assign({},(0,r.ah)(),e.components);return s?(0,t.jsx)(s,Object.assign({},e,{children:(0,t.jsx)(l,e)})):l(e)}},11151:(e,s,n)=>{n.d(s,{Zo:()=>o,ah:()=>c});var t=n(67294);const r=t.createContext({});function c(e){const s=t.useContext(r);return t.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const i={};function o({components:e,children:s,disableParentContext:n}){let o;return o=n?"function"==typeof e?e({}):e||i:c(e),t.createElement(r.Provider,{value:o},s)}}}]);