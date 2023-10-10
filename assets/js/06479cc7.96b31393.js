"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[67573],{46653:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>r,default:()=>u,frontMatter:()=>c,metadata:()=>o,toc:()=>d});var s=n(85893),i=n(11151);const c={},r="utc_timestamp",o={id:"sql-reference/sql-functions/date-time-functions/utc_timestamp",title:"utc_timestamp",description:"Description",source:"@site/versioned_docs/version-3.0/sql-reference/sql-functions/date-time-functions/utc_timestamp.md",sourceDirName:"sql-reference/sql-functions/date-time-functions",slug:"/sql-reference/sql-functions/date-time-functions/utc_timestamp",permalink:"/doc/docs/3.0/sql-reference/sql-functions/date-time-functions/utc_timestamp",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/sql-reference/sql-functions/date-time-functions/utc_timestamp.md",tags:[],version:"3.0",frontMatter:{},sidebar:"documentation",previous:{title:"utc_time",permalink:"/doc/docs/3.0/sql-reference/sql-functions/date-time-functions/utc_time"},next:{title:"week",permalink:"/doc/docs/3.0/sql-reference/sql-functions/date-time-functions/week"}},a={},d=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Examples",id:"examples",level:2},{value:"keyword",id:"keyword",level:2}];function l(e){const t=Object.assign({h1:"h1",h2:"h2",p:"p",div:"div",pre:"pre",code:"code"},(0,i.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"utc_timestamp",children:"utc_timestamp"}),"\n",(0,s.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(t.p,{children:["Returns the current UTC date and time as a value in 'YYYY-MM-DD HH:MM",(0,s.jsx)(t.div,{}),"' or 'YYYYMMDDHHMMSS' format depending on the usage of the function, for example, in a string or numeric context."]}),"\n",(0,s.jsx)(t.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-Haskell",children:"DATETIME UTC_TIMESTAMP()\n"})}),"\n",(0,s.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-Plain",metastring:"Text",children:"MySQL > select utc_timestamp(),utc_timestamp() + 1;\n+---------------------+---------------------+\n| utc_timestamp()     | utc_timestamp() + 1 |\n+---------------------+---------------------+\n| 2019-07-10 12:31:18 |      20190710123119 |\n+---------------------+---------------------+\n"})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"utc_timestamp() + N"})," means adding ",(0,s.jsx)(t.code,{children:"N"})," seconds to the current time."]}),"\n",(0,s.jsx)(t.h2,{id:"keyword",children:"keyword"}),"\n",(0,s.jsx)(t.p,{children:"UTC_TIMESTAMP,UTC,TIMESTAMP"})]})}const u=function(e={}){const{wrapper:t}=Object.assign({},(0,i.ah)(),e.components);return t?(0,s.jsx)(t,Object.assign({},e,{children:(0,s.jsx)(l,e)})):l(e)}},11151:(e,t,n)=>{n.d(t,{Zo:()=>o,ah:()=>c});var s=n(67294);const i=s.createContext({});function c(e){const t=s.useContext(i);return s.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const r={};function o({components:e,children:t,disableParentContext:n}){let o;return o=n?"function"==typeof e?e({}):e||r:c(e),s.createElement(i.Provider,{value:o},t)}}}]);