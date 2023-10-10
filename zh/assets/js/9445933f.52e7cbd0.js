"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[13825],{47606:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>c,metadata:()=>a,toc:()=>d});var s=r(85893),t=r(11151);const c={},i="array_distinct",a={id:"sql-reference/sql-functions/array-functions/array_distinct",title:"array_distinct",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.1/sql-reference/sql-functions/array-functions/array_distinct.md",sourceDirName:"sql-reference/sql-functions/array-functions",slug:"/sql-reference/sql-functions/array-functions/array_distinct",permalink:"/docusaurusv3/zh/docs/latest/sql-reference/sql-functions/array-functions/array_distinct",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-functions/array-functions/array_distinct.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"array_difference",permalink:"/docusaurusv3/zh/docs/latest/sql-reference/sql-functions/array-functions/array_difference"},next:{title:"array_filter",permalink:"/docusaurusv3/zh/docs/latest/sql-reference/sql-functions/array-functions/array_filter"}},l={},d=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function o(n){const e=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",ul:"ul",li:"li"},(0,t.ah)(),n.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"array_distinct",children:"array_distinct"}),"\n",(0,s.jsx)(e.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,s.jsx)(e.p,{children:"\u6570\u7ec4\u5143\u7d20\u53bb\u91cd\u3002"}),"\n",(0,s.jsx)(e.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-Haskell",children:"ARRAY_DISTINCT(array)\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"array"}),"\uff1a\u9700\u8981\u53bb\u91cd\u7684\u6570\u7ec4\u3002\u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u4e3a ARRAY\u3002"]}),"\n",(0,s.jsx)(e.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,s.jsx)(e.p,{children:"\u8fd4\u56de\u7684\u6570\u636e\u7c7b\u578b\u4e3a ARRAY\u3002"}),"\n",(0,s.jsx)(e.h2,{id:"\u6ce8\u610f\u4e8b\u9879",children:"\u6ce8\u610f\u4e8b\u9879"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u6570\u7ec4\u4e2d\u5143\u7d20\u4e0d\u4fdd\u8bc1\u987a\u5e8f\u3002"}),"\n",(0,s.jsxs)(e.li,{children:["\u8fd4\u56de\u6570\u7ec4\u4e2d\u7684\u5143\u7d20\u7c7b\u578b\u4e0e ",(0,s.jsx)(e.code,{children:"array"})," \u4e2d\u7684\u5143\u7d20\u7c7b\u578b\u4e00\u81f4\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,s.jsx)(e.p,{children:"\u4e0b\u9762\u7684\u793a\u4f8b\u4f7f\u7528\u5982\u4e0b\u6570\u636e\u8868\u8fdb\u884c\u4ecb\u7ecd\u3002"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-Plain",metastring:"Text",children:"mysql> select * from test;\n+------+---------------+\n| c1   | c2            |\n+------+---------------+\n|    1 | [1,1,2]       |\n|    2 | [1,null,null] |\n|    3 | NULL          |\n|    4 | [null]        |\n+------+---------------+\n"})}),"\n",(0,s.jsxs)(e.p,{children:["\u5bf9 ",(0,s.jsx)(e.code,{children:"c2"})," \u5217\u6570\u7ec4\u4e2d\u7684\u5143\u7d20\u8fdb\u884c\u53bb\u91cd\u3002"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-Plain",metastring:"Text",children:"mysql> select c1, array_distinct(c2) from test;\n+------+----------------------+\n| c1   | array_distinct(`c2`) |\n+------+----------------------+\n|    1 | [2,1]                |\n|    2 | [null,1]             |\n|    3 | NULL                 |\n|    4 | [null]               |\n+------+----------------------+\n"})})]})}const u=function(n={}){const{wrapper:e}=Object.assign({},(0,t.ah)(),n.components);return e?(0,s.jsx)(e,Object.assign({},n,{children:(0,s.jsx)(o,n)})):o(n)}},11151:(n,e,r)=>{r.d(e,{Zo:()=>a,ah:()=>c});var s=r(67294);const t=s.createContext({});function c(n){const e=s.useContext(t);return s.useMemo((()=>"function"==typeof n?n(e):{...e,...n}),[e,n])}const i={};function a({components:n,children:e,disableParentContext:r}){let a;return a=r?"function"==typeof n?n({}):n||i:c(n),s.createElement(t.Provider,{value:a},e)}}}]);