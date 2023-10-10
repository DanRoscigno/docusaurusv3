"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[10582],{83939:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var s=t(85893),i=t(11151);const r={},c="minute",o={id:"sql-reference/sql-functions/date-time-functions/minute",title:"minute",description:"Description",source:"@site/versioned_docs/version-3.1/sql-reference/sql-functions/date-time-functions/minute.md",sourceDirName:"sql-reference/sql-functions/date-time-functions",slug:"/sql-reference/sql-functions/date-time-functions/minute",permalink:"/doc/docs/sql-reference/sql-functions/date-time-functions/minute",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-functions/date-time-functions/minute.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"microseconds_sub",permalink:"/doc/docs/sql-reference/sql-functions/date-time-functions/microseconds_sub"},next:{title:"minutes_add",permalink:"/doc/docs/sql-reference/sql-functions/date-time-functions/minutes_add"}},a={},d=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Examples",id:"examples",level:2},{value:"keyword",id:"keyword",level:2}];function l(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",pre:"pre"},(0,i.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"minute",children:"minute"}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"Returns the minute for a given date. The return value ranges from 0 to 59."}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"date"})," parameter must be of the DATE or DATETIME type."]}),"\n",(0,s.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Haskell",children:"INT MINUTE(DATETIME|DATE date)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"MySQL > select minute('2018-12-31 23:59:59');\n+-----------------------------+\n|minute('2018-12-31 23:59:59')|\n+-----------------------------+\n|                          59 |\n+-----------------------------+\n"})}),"\n",(0,s.jsx)(n.h2,{id:"keyword",children:"keyword"}),"\n",(0,s.jsx)(n.p,{children:"MINUTE"})]})}const u=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(l,e)})):l(e)}},11151:(e,n,t)=>{t.d(n,{Zo:()=>o,ah:()=>r});var s=t(67294);const i=s.createContext({});function r(e){const n=s.useContext(i);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const c={};function o({components:e,children:n,disableParentContext:t}){let o;return o=t?"function"==typeof e?e({}):e||c:r(e),s.createElement(i.Provider,{value:o},n)}}}]);