"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[14600],{89809:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>a});var l=s(85893),t=s(11151);const i={displayed_sidebar:"Chinese31"},r="hll_union_agg",c={id:"sql-reference/sql-functions/aggregate-functions/hll_union_agg",title:"hll_union_agg",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.1/sql-reference/sql-functions/aggregate-functions/hll_union_agg.md",sourceDirName:"sql-reference/sql-functions/aggregate-functions",slug:"/sql-reference/sql-functions/aggregate-functions/hll_union_agg",permalink:"/doc/zh/docs/sql-reference/sql-functions/aggregate-functions/hll_union_agg",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-functions/aggregate-functions/hll_union_agg.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"Chinese31"},sidebar:"Chinese31",previous:{title:"hll_union",permalink:"/doc/zh/docs/sql-reference/sql-functions/aggregate-functions/hll_union"},next:{title:"MAX",permalink:"/doc/zh/docs/sql-reference/sql-functions/aggregate-functions/max"}},o={},a=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function h(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",pre:"pre",code:"code"},(0,t.ah)(),e.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h1,{id:"hll_union_agg",children:"hll_union_agg"}),"\n",(0,l.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,l.jsx)(n.p,{children:"\u8be5\u51fd\u6570\u5c06\u591a\u4e2a HLL \u7c7b\u578b\u6570\u636e\u5408\u5e76\u6210\u4e00\u4e2a HLL\u3002"}),"\n",(0,l.jsx)(n.p,{children:"HLL \u662f\u57fa\u4e8e HyperLogLog \u7b97\u6cd5\u7684\u5de5\u7a0b\u5b9e\u73b0\uff0c\u7528\u4e8e\u4fdd\u5b58 HyperLogLog \u8ba1\u7b97\u8fc7\u7a0b\u7684\u4e2d\u95f4\u7ed3\u679c\u3002"}),"\n",(0,l.jsx)(n.p,{children:"\u5b83\u53ea\u80fd\u4f5c\u4e3a\u8868\u7684 value \u5217\u7c7b\u578b\uff0c\u901a\u8fc7\u805a\u5408\u6765\u4e0d\u65ad\u7684\u51cf\u5c11\u6570\u636e\u91cf\uff0c\u4ee5\u6b64\u6765\u5b9e\u73b0\u52a0\u5feb\u67e5\u8be2\u7684\u76ee\u7684\u3002"}),"\n",(0,l.jsx)(n.p,{children:"\u57fa\u4e8e\u5b83\u5f97\u5230\u7684\u662f\u4e00\u4e2a\u4f30\u7b97\u7ed3\u679c\uff0c\u8bef\u5dee\u5927\u6982\u5728 1% \u5de6\u53f3\u3002hll \u5217\u662f\u901a\u8fc7\u5176\u5b83\u5217\u6216\u8005\u5bfc\u5165\u6570\u636e\u91cc\u9762\u7684\u6570\u636e\u751f\u6210\u7684\u3002"}),"\n",(0,l.jsxs)(n.p,{children:["\u5bfc\u5165\u7684\u65f6\u5019\u901a\u8fc7 ",(0,l.jsx)(n.a,{href:"/doc/zh/docs/sql-reference/sql-functions/aggregate-functions/hll_hash",children:"hll_hash"})," \u51fd\u6570\u6765\u6307\u5b9a\u6570\u636e\u4e2d\u54ea\u4e00\u5217\u7528\u4e8e\u751f\u6210 hll \u5217\uff0c\u5b83\u5e38\u7528\u4e8e\u66ff\u4ee3 count distinct\uff0c\u901a\u8fc7\u7ed3\u5408 rollup \u5728\u4e1a\u52a1\u4e0a\u7528\u4e8e\u5feb\u901f\u8ba1\u7b97 uv \u7b49\u3002"]}),"\n",(0,l.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-Haskell",children:"HLL_UNION_AGG(hll)\n"})}),"\n",(0,l.jsx)(n.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"hll"}),": \u901a\u8fc7\u5176\u5b83\u5217\u6216\u8005\u5bfc\u5165\u6570\u636e\u91cc\u9762\u7684\u6570\u636e\u751f\u6210\u7684hhl\u5217\u3002"]}),"\n",(0,l.jsx)(n.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,l.jsx)(n.p,{children:"\u8fd4\u56de\u503c\u4e3a\u6570\u503c\u7c7b\u578b\u3002"}),"\n",(0,l.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-plain",metastring:"text",children:"MySQL > select HLL_UNION_AGG(uv_set)\nfrom test_uv;;\n+-------------------------+\n| HLL_UNION_AGG(`uv_set`) |\n+-------------------------+\n| 17721                   |\n+-------------------------+\n"})})]})}const d=function(e={}){const{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?(0,l.jsx)(n,Object.assign({},e,{children:(0,l.jsx)(h,e)})):h(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>c,ah:()=>i});var l=s(67294);const t=l.createContext({});function i(e){const n=l.useContext(t);return l.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const r={};function c({components:e,children:n,disableParentContext:s}){let c;return c=s?"function"==typeof e?e({}):e||r:i(e),l.createElement(t.Provider,{value:c},n)}}}]);