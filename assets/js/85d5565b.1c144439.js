"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[1782],{23125:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>c,toc:()=>a});var t=s(85893),l=s(11151);const r={},i="HLL_UNION",c={id:"sql-reference/sql-functions/aggregate-functions/hll_union",title:"HLL_UNION",description:"Description",source:"@site/versioned_docs/version-3.1/sql-reference/sql-functions/aggregate-functions/hll_union.md",sourceDirName:"sql-reference/sql-functions/aggregate-functions",slug:"/sql-reference/sql-functions/aggregate-functions/hll_union",permalink:"/doc/docs/sql-reference/sql-functions/aggregate-functions/hll_union",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-functions/aggregate-functions/hll_union.md",tags:[],version:"3.1",frontMatter:{},sidebar:"Chinese31",previous:{title:"hll_raw_agg",permalink:"/doc/docs/sql-reference/sql-functions/aggregate-functions/hll_raw_agg"},next:{title:"HLL_UNION_AGG",permalink:"/doc/docs/sql-reference/sql-functions/aggregate-functions/hll_union_agg"}},o={},a=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Examples",id:"examples",level:2}];function u(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code"},(0,l.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"hll_union",children:"HLL_UNION"}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(n.p,{children:"Returns the concatenation of a set of HLL values."}),"\n",(0,t.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Haskell",children:"hll_union(hll)\n"})}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Plain",children:"mysql> select k1, hll_cardinality(hll_union(v1)) from tbl group by k1;\n+------+----------------------------------+\n| k1   | hll_cardinality(hll_union(`v1`)) |\n+------+----------------------------------+\n|    2 |                                4 |\n|    1 |                                3 |\n+------+----------------------------------+\n"})})]})}const d=function(e={}){const{wrapper:n}=Object.assign({},(0,l.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(u,e)})):u(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>c,ah:()=>r});var t=s(67294);const l=t.createContext({});function r(e){const n=t.useContext(l);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const i={};function c({components:e,children:n,disableParentContext:s}){let c;return c=s?"function"==typeof e?e({}):e||i:r(e),t.createElement(l.Provider,{value:c},n)}}}]);