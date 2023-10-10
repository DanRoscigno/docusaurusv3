"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[79137],{11101:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>i,contentTitle:()=>a,default:()=>g,frontMatter:()=>t,metadata:()=>c,toc:()=>o});var s=l(85893),r=l(11151);const t={},a="hll_raw_agg",c={id:"sql-reference/sql-functions/aggregate-functions/hll_raw_agg",title:"hll_raw_agg",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.1/sql-reference/sql-functions/aggregate-functions/hll_raw_agg.md",sourceDirName:"sql-reference/sql-functions/aggregate-functions",slug:"/sql-reference/sql-functions/aggregate-functions/hll_raw_agg",permalink:"/doc/zh/docs/sql-reference/sql-functions/aggregate-functions/hll_raw_agg",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-functions/aggregate-functions/hll_raw_agg.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"hll_hash",permalink:"/doc/zh/docs/sql-reference/sql-functions/aggregate-functions/hll_hash"},next:{title:"hll_union",permalink:"/doc/zh/docs/sql-reference/sql-functions/aggregate-functions/hll_union"}},i={},o=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function h(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code"},(0,r.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"hll_raw_agg",children:"hll_raw_agg"}),"\n",(0,s.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,s.jsx)(n.p,{children:"\u6b64\u51fd\u6570\u4e3a\u805a\u5408\u51fd\u6570\uff0c\u7528\u4e8e\u805a\u5408 HLL \u7c7b\u578b\u7684\u5b57\u6bb5\uff0c\u8fd4\u56de\u7684\u8fd8\u662f HLL \u7c7b\u578b\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Haskell",children:"hll_raw_agg(hll)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"hll"}),": \u901a\u8fc7\u5176\u5b83\u5217\u6216\u8005\u5bfc\u5165\u6570\u636e\u91cc\u9762\u7684\u6570\u636e\u751f\u6210\u7684 HLL \u5217\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,s.jsx)(n.p,{children:"\u8fd4\u56de\u503c\u4e3a HLL \u7c7b\u578b\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plain",children:"mysql> select k1, hll_cardinality(hll_raw_agg(v1)) from tbl group by k1;\n+------+----------------------------------+\n| k1   | hll_cardinality(hll_raw_agg(`v1`)) |\n+------+----------------------------------+\n|    2 |                                4 |\n|    1 |                                3 |\n+------+----------------------------------+\n"})})]})}const g=function(e={}){const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(h,e)})):h(e)}},11151:(e,n,l)=>{l.d(n,{Zo:()=>c,ah:()=>t});var s=l(67294);const r=s.createContext({});function t(e){const n=s.useContext(r);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const a={};function c({components:e,children:n,disableParentContext:l}){let c;return c=l?"function"==typeof e?e({}):e||a:t(e),s.createElement(r.Provider,{value:c},n)}}}]);