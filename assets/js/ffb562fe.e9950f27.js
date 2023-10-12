"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[90773],{51226:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>f,frontMatter:()=>r,metadata:()=>d,toc:()=>o});var s=t(85893),i=t(11151);const r={},c="datediff",d={id:"sql-reference/sql-functions/date-time-functions/datediff",title:"datediff",description:"Description",source:"@site/versioned_docs/version-2.5/sql-reference/sql-functions/date-time-functions/datediff.md",sourceDirName:"sql-reference/sql-functions/date-time-functions",slug:"/sql-reference/sql-functions/date-time-functions/datediff",permalink:"/doc/docs/2.5/sql-reference/sql-functions/date-time-functions/datediff",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-2.5/sql-reference/sql-functions/date-time-functions/datediff.md",tags:[],version:"2.5",frontMatter:{},sidebar:"Chinese31",previous:{title:"date_trunc",permalink:"/doc/docs/2.5/sql-reference/sql-functions/date-time-functions/date_trunc"},next:{title:"day",permalink:"/doc/docs/2.5/sql-reference/sql-functions/date-time-functions/day"}},a={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Examples",id:"examples",level:2}];function l(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",pre:"pre"},(0,i.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"datediff",children:"datediff"}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["Calculates the date from ",(0,s.jsx)(n.code,{children:"expr1"})," to ",(0,s.jsx)(n.code,{children:"expr2"})," and returns a result in days."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"expr1"})," and ",(0,s.jsx)(n.code,{children:"expr2"})," are valid DATE or DATETIME expressions."]}),"\n",(0,s.jsx)(n.p,{children:"Note: Only the date parts of the values are used in the calculation."}),"\n",(0,s.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Haskell",children:"INT DATEDIFF(DATETIME expr1,DATETIME expr2)`\n"})}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"MySQL > select datediff(CAST('2007-12-31 23:59:59' AS DATETIME), CAST('2007-12-30' AS DATETIME));\n+-----------------------------------------------------------------------------------+\n| datediff(CAST('2007-12-31 23:59:59' AS DATETIME), CAST('2007-12-30' AS DATETIME)) |\n+-----------------------------------------------------------------------------------+\n|                                                                                 1 |\n+-----------------------------------------------------------------------------------+\n\nMySQL > select datediff(CAST('2010-11-30 23:59:59' AS DATETIME), CAST('2010-12-31' AS DATETIME));\n+-----------------------------------------------------------------------------------+\n| datediff(CAST('2010-11-30 23:59:59' AS DATETIME), CAST('2010-12-31' AS DATETIME)) |\n+-----------------------------------------------------------------------------------+\n|                                                                               -31 |\n+-----------------------------------------------------------------------------------+\n"})})]})}const f=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(l,e)})):l(e)}},11151:(e,n,t)=>{t.d(n,{Zo:()=>d,ah:()=>r});var s=t(67294);const i=s.createContext({});function r(e){const n=s.useContext(i);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const c={};function d({components:e,children:n,disableParentContext:t}){let d;return d=t?"function"==typeof e?e({}):e||c:r(e),s.createElement(i.Provider,{value:d},n)}}}]);