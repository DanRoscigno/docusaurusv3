"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[69974],{55116:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>f,frontMatter:()=>c,metadata:()=>t,toc:()=>d});var s=r(85893),a=r(11151);const c={},i="array_difference",t={id:"sql-reference/sql-functions/array-functions/array_difference",title:"array_difference",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.0/sql-reference/sql-functions/array-functions/array_difference.md",sourceDirName:"sql-reference/sql-functions/array-functions",slug:"/sql-reference/sql-functions/array-functions/array_difference",permalink:"/doc/zh/docs/3.0/sql-reference/sql-functions/array-functions/array_difference",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/sql-reference/sql-functions/array-functions/array_difference.md",tags:[],version:"3.0",frontMatter:{},sidebar:"Chinese31",previous:{title:"array_cum_sum",permalink:"/doc/zh/docs/3.0/sql-reference/sql-functions/array-functions/array_cum_sum"},next:{title:"array_distinct",permalink:"/doc/zh/docs/3.0/sql-reference/sql-functions/array-functions/array_distinct"}},l={},d=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function o(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",ul:"ul",li:"li",strong:"strong"},(0,a.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"array_difference",children:"array_difference"}),"\n",(0,s.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,s.jsx)(n.p,{children:"\u5bf9\u4e8e\u6570\u503c\u578b\u6570\u7ec4\uff0c\u8fd4\u56de\u76f8\u90bb\u4e24\u4e2a\u5143\u7d20\u7684\u5dee(\u4ece\u540e\u8005\u4e2d\u51cf\u53bb\u524d\u8005)\u6784\u6210\u7684\u6570\u7ec4\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Haskell",children:"output array_difference(input)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"input\uff1a\u6570\u503c\u578b\u6570\u7ec4\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,s.jsx)(n.p,{children:"\u7c7b\u578b\u4e3aArray(\u4e0e\u8f93\u5165input\u4fdd\u6301\u4e00\u81f4)\uff0c\u5185\u5bb9\u4e3a\u5c06\u8f93\u5165input\u4e2d\u76f8\u90bb\u4e24\u5143\u7d20\u7684\u5dee\uff0c\u957f\u5ea6\u4e0einput\u4fdd\u6301\u4e00\u81f4\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u793a\u4f8b\u4e00"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-plain",metastring:"text",children:"mysql> SELECT array_difference([342, 32423, 213, 23432]);\n+-----------------------------------------+\n| array_difference([342,32423,213,23432]) |\n+-----------------------------------------+\n| [0,32081,-32210,23219]                  |\n+-----------------------------------------+\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u793a\u4f8b\u4e8c"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-plain",metastring:"text",children:"mysql> SELECT array_difference([342, 32423, 213, null, 23432]);\n+----------------------------------------------+\n| array_difference([342,32423,213,NULL,23432]) |\n+----------------------------------------------+\n| [0,32081,-32210,null,null]                   |\n+----------------------------------------------+\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u793a\u4f8b \u4e09"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-plain",metastring:"text",children:"mysql> SELECT array_difference([1.2, 2.3, 3.2, 4324242.55]);\n+--------------------------------------------+\n| array_difference([1.2,2.3,3.2,4324242.55]) |\n+--------------------------------------------+\n| [0,1.1,0.9,4324239.35]                     |\n+--------------------------------------------+\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u793a\u4f8b \u56db"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-plain",metastring:"text",children:"mysql> SELECT array_difference([false, true, false]);\n+----------------------------------------+\n| array_difference([FALSE, TRUE, FALSE]) |\n+----------------------------------------+\n| [0,1,-1]                               |\n+----------------------------------------+\n"})})]})}const f=function(e={}){const{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(o,e)})):o(e)}},11151:(e,n,r)=>{r.d(n,{Zo:()=>t,ah:()=>c});var s=r(67294);const a=s.createContext({});function c(e){const n=s.useContext(a);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const i={};function t({components:e,children:n,disableParentContext:r}){let t;return t=r?"function"==typeof e?e({}):e||i:c(e),s.createElement(a.Provider,{value:t},n)}}}]);