"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[60360],{61178:(n,e,l)=>{l.r(e),l.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>a});var s=l(85893),t=l(11151);const r={},i="hll_union",c={id:"sql-reference/sql-functions/aggregate-functions/hll_union",title:"hll_union",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.0/sql-reference/sql-functions/aggregate-functions/hll_union.md",sourceDirName:"sql-reference/sql-functions/aggregate-functions",slug:"/sql-reference/sql-functions/aggregate-functions/hll_union",permalink:"/docusaurusv3/zh/docs/3.0/sql-reference/sql-functions/aggregate-functions/hll_union",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/sql-reference/sql-functions/aggregate-functions/hll_union.md",tags:[],version:"3.0",frontMatter:{},sidebar:"documentation",previous:{title:"hll_raw_agg",permalink:"/docusaurusv3/zh/docs/3.0/sql-reference/sql-functions/aggregate-functions/hll_raw_agg"},next:{title:"hll_union_agg",permalink:"/docusaurusv3/zh/docs/3.0/sql-reference/sql-functions/aggregate-functions/hll_union_agg"}},o={},a=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function u(n){const e=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code"},(0,t.ah)(),n.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"hll_union",children:"hll_union"}),"\n",(0,s.jsx)(e.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,s.jsx)(e.p,{children:"\u8fd4\u56de\u4e00\u7ec4 HLL \u503c\u7684\u5e76\u96c6\u3002"}),"\n",(0,s.jsx)(e.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-Haskell",children:"hll_union(hll)\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"hll"}),": \u901a\u8fc7\u5176\u5b83\u5217\u6216\u8005\u5bfc\u5165\u6570\u636e\u91cc\u9762\u7684\u6570\u636e\u751f\u6210\u7684 hll \u5217\u3002"]}),"\n",(0,s.jsx)(e.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,s.jsx)(e.p,{children:"\u8fd4\u56de\u503c\u4e3a hll \u7c7b\u578b\u3002"}),"\n",(0,s.jsx)(e.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-Plain",children:"mysql> select k1, hll_cardinality(hll_union(v1)) from tbl group by k1;\n+------+----------------------------------+\n| k1   | hll_cardinality(hll_union(`v1`)) |\n+------+----------------------------------+\n|    2 |                                4 |\n|    1 |                                3 |\n+------+----------------------------------+\n"})})]})}const h=function(n={}){const{wrapper:e}=Object.assign({},(0,t.ah)(),n.components);return e?(0,s.jsx)(e,Object.assign({},n,{children:(0,s.jsx)(u,n)})):u(n)}},11151:(n,e,l)=>{l.d(e,{Zo:()=>c,ah:()=>r});var s=l(67294);const t=s.createContext({});function r(n){const e=s.useContext(t);return s.useMemo((()=>"function"==typeof n?n(e):{...e,...n}),[e,n])}const i={};function c({components:n,children:e,disableParentContext:l}){let c;return c=l?"function"==typeof n?n({}):n||i:r(n),s.createElement(t.Provider,{value:c},e)}}}]);