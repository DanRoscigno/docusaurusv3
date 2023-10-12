"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[83627],{59384:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var s=t(85893),r=t(11151);const i={},a="AVG",c={id:"sql-reference/sql-functions/aggregate-functions/avg",title:"AVG",description:"Description",source:"@site/versioned_docs/version-2.5/sql-reference/sql-functions/aggregate-functions/avg.md",sourceDirName:"sql-reference/sql-functions/aggregate-functions",slug:"/sql-reference/sql-functions/aggregate-functions/avg",permalink:"/doc/docs/2.5/sql-reference/sql-functions/aggregate-functions/avg",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-2.5/sql-reference/sql-functions/aggregate-functions/avg.md",tags:[],version:"2.5",frontMatter:{},sidebar:"Chinese31",previous:{title:"APPROX_COUNT_DISTINCT",permalink:"/doc/docs/2.5/sql-reference/sql-functions/aggregate-functions/approx_count_distinct"},next:{title:"BITMAP",permalink:"/doc/docs/2.5/sql-reference/sql-functions/aggregate-functions/bitmap"}},o={},l=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Examples",id:"examples",level:2},{value:"keyword",id:"keyword",level:2}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code"},(0,r.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"avg",children:"AVG"}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"Returns the average value of selected fields."}),"\n",(0,s.jsx)(n.p,{children:"Optional field DISTINCT parameters can be used to return the weighted average."}),"\n",(0,s.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Haskell",children:"AVG([DISTINCT] expr)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-plain",metastring:"text",children:"MySQL > SELECT datetime, AVG(cost_time)\nFROM log_statis\ngroup by datetime;\n+---------------------+--------------------+\n| datetime            | avg(`cost_time`)   |\n+---------------------+--------------------+\n| 2019-07-03 21:01:20 | 25.827794561933533 |\n+---------------------+--------------------+\n\nMySQL > SELECT datetime, AVG(distinct cost_time)\nFROM log_statis\ngroup by datetime;\n+---------------------+---------------------------+\n| datetime            | avg(DISTINCT `cost_time`) |\n+---------------------+---------------------------+\n| 2019-07-04 02:23:24 |        20.666666666666668 |\n+---------------------+---------------------------+\n\n"})}),"\n",(0,s.jsx)(n.h2,{id:"keyword",children:"keyword"}),"\n",(0,s.jsx)(n.p,{children:"AVG"})]})}const u=function(e={}){const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(d,e)})):d(e)}},11151:(e,n,t)=>{t.d(n,{Zo:()=>c,ah:()=>i});var s=t(67294);const r=s.createContext({});function i(e){const n=s.useContext(r);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const a={};function c({components:e,children:n,disableParentContext:t}){let c;return c=t?"function"==typeof e?e({}):e||a:i(e),s.createElement(r.Provider,{value:c},n)}}}]);