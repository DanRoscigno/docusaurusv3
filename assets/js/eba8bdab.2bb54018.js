"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[42964],{37382:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>d,toc:()=>o});var t=s(85893),r=s(11151);const a={},i="years_add",d={id:"sql-reference/sql-functions/date-time-functions/years_add",title:"years_add",description:"Description",source:"@site/versioned_docs/version-2.5/sql-reference/sql-functions/date-time-functions/years_add.md",sourceDirName:"sql-reference/sql-functions/date-time-functions",slug:"/sql-reference/sql-functions/date-time-functions/years_add",permalink:"/doc/docs/2.5/sql-reference/sql-functions/date-time-functions/years_add",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-2.5/sql-reference/sql-functions/date-time-functions/years_add.md",tags:[],version:"2.5",frontMatter:{},sidebar:"Chinese31",previous:{title:"year",permalink:"/doc/docs/2.5/sql-reference/sql-functions/date-time-functions/year"},next:{title:"years_diff",permalink:"/doc/docs/2.5/sql-reference/sql-functions/date-time-functions/years_diff"}},c={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:3},{value:"Examples",id:"examples",level:2},{value:"keyword",id:"keyword",level:2}];function l(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",h3:"h3",pre:"pre",code:"code"},(0,r.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"years_add",children:"years_add"}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(n.p,{children:"Adds a specified time interval to the date. Unit is year."}),"\n",(0,t.jsx)(n.h3,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Haskell",children:"DATETIME YEARS_ADD(DATETIME|DATE expr1,INT expr2)\n"})}),"\n",(0,t.jsx)(n.p,{children:"The expr1 parameter is a valid datetime or date expression."}),"\n",(0,t.jsx)(n.p,{children:"The expr2 parameter is the years you want to add."}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"select years_add('2010-11-30 23:50:50', 2);\n+-------------------------------------+\n| years_add('2010-11-30 23:50:50', 2) |\n+-------------------------------------+\n| 2012-11-30 23:50:50                 |\n+-------------------------------------+\n\nselect years_add('2010-11-30', 2);\n+----------------------------+\n| years_add('2010-11-30', 2) |\n+----------------------------+\n| 2012-11-30 00:00:00        |\n+----------------------------+\n"})}),"\n",(0,t.jsx)(n.h2,{id:"keyword",children:"keyword"}),"\n",(0,t.jsx)(n.p,{children:"YEARS_ADD,ADD"})]})}const u=function(e={}){const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(l,e)})):l(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>d,ah:()=>a});var t=s(67294);const r=t.createContext({});function a(e){const n=t.useContext(r);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const i={};function d({components:e,children:n,disableParentContext:s}){let d;return d=s?"function"==typeof e?e({}):e||i:a(e),t.createElement(r.Provider,{value:d},n)}}}]);