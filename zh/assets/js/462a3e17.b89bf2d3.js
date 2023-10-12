"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[75026],{2152:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>t,contentTitle:()=>i,default:()=>h,frontMatter:()=>c,metadata:()=>a,toc:()=>o});var s=r(85893),l=r(11151);const c={},i="array_join",a={id:"sql-reference/sql-functions/array-functions/array_join",title:"array_join",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.1/sql-reference/sql-functions/array-functions/array_join.md",sourceDirName:"sql-reference/sql-functions/array-functions",slug:"/sql-reference/sql-functions/array-functions/array_join",permalink:"/doc/zh/docs/sql-reference/sql-functions/array-functions/array_join",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-functions/array-functions/array_join.md",tags:[],version:"3.1",frontMatter:{},sidebar:"Chinese31",previous:{title:"array_intersect",permalink:"/doc/zh/docs/sql-reference/sql-functions/array-functions/array_intersect"},next:{title:"array_length",permalink:"/doc/zh/docs/sql-reference/sql-functions/array-functions/array_length"}},t={},o=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",ul:"ul",li:"li"},(0,l.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"array_join",children:"array_join"}),"\n",(0,s.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,s.jsx)(n.p,{children:"\u5c06\u6570\u7ec4\u4e2d\u7684\u6240\u6709\u5143\u7d20\u8fde\u63a5\u751f\u6210\u4e00\u4e2a\u5b57\u7b26\u4e32\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Haskell",children:"ARRAY_JOIN(array, sep[, null_replace_str])\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"array"}),"\uff1a\u9700\u8981\u8fde\u63a5\u7684\u6570\u7ec4\u3002\u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u4e3a ARRAY\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"sep"}),"\uff1a\u5206\u9694\u7b26\u3002\u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u4e3a VARCHAR\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"null_replace_str"}),"\uff1a\u66ff\u6362 NULL \u7684\u5b57\u7b26\u4e32\u3002\u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u4e3a VARCHAR\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,s.jsx)(n.p,{children:"\u8fd4\u56de\u7684\u6570\u636e\u7c7b\u578b\u4e3a VARCHAR\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u6ce8\u610f\u4e8b\u9879",children:"\u6ce8\u610f\u4e8b\u9879"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"array"})," \u53ea\u652f\u6301\u4e00\u7ef4\u6570\u7ec4\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"array"})," \u4e0d\u652f\u6301 Decimal \u7c7b\u578b\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:["\u5982\u679c\u53c2\u6570 ",(0,s.jsx)(n.code,{children:"sep"})," \u4e3a NULL\uff0c\u8fd4\u56de\u503c\u4e3a NULL\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:["\u5982\u679c\u6ca1\u6709\u4f20 ",(0,s.jsx)(n.code,{children:"null_replace_str"})," \u53c2\u6570\uff0cNULL \u4f1a\u88ab\u4e22\u5f03\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:["\u5982\u679c\u53c2\u6570 ",(0,s.jsx)(n.code,{children:"null_replace_str"})," \u4e3a NULL\uff0c\u8fd4\u56de\u503c\u4e3a NULL\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,s.jsxs)(n.p,{children:["\u4e22\u5f03\u6570\u636e\u7ec4\u7684 ",(0,s.jsx)(n.code,{children:"NULL"}),"\uff0c\u4ee5 ",(0,s.jsx)(n.code,{children:"_"})," \u4f5c\u4e3a\u5206\u9694\u7b26\uff0c\u8fde\u63a5\u6570\u7ec4\u4e2d\u7684\u5143\u7d20\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"mysql> select array_join([1, 3, 5, null], '_');\n+-------------------------------+\n| array_join([1,3,5,NULL], '_') |\n+-------------------------------+\n| 1_3_5                         |\n+-------------------------------+\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u5c06\u6570\u636e\u7ec4\u4e2d\u7684 ",(0,s.jsx)(n.code,{children:"NULL"})," \u66ff\u6362\u4e3a\u5b57\u7b26\u4e32 ",(0,s.jsx)(n.code,{children:"NULL"}),"\uff0c\u4ee5 ",(0,s.jsx)(n.code,{children:"_"})," \u4f5c\u4e3a\u5206\u9694\u7b26\uff0c\u8fde\u63a5\u6570\u7ec4\u4e2d\u7684\u5143\u7d20\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"mysql> select array_join([1, 3, 5, null], '_', 'NULL');\n+---------------------------------------+\n| array_join([1,3,5,NULL], '_', 'NULL') |\n+---------------------------------------+\n| 1_3_5_NULL                            |\n+---------------------------------------+\n"})})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,l.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(d,e)})):d(e)}},11151:(e,n,r)=>{r.d(n,{Zo:()=>a,ah:()=>c});var s=r(67294);const l=s.createContext({});function c(e){const n=s.useContext(l);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const i={};function a({components:e,children:n,disableParentContext:r}){let a;return a=r?"function"==typeof e?e({}):e||i:c(e),s.createElement(l.Provider,{value:a},n)}}}]);