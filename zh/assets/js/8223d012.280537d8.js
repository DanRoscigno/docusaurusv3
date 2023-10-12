"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[58084],{98671:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>c,metadata:()=>r,toc:()=>d});var t=s(85893),i=s(11151);const c={},o="positive",r={id:"sql-reference/sql-functions/math-functions/positive",title:"positive",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.0/sql-reference/sql-functions/math-functions/positive.md",sourceDirName:"sql-reference/sql-functions/math-functions",slug:"/sql-reference/sql-functions/math-functions/positive",permalink:"/doc/zh/docs/3.0/sql-reference/sql-functions/math-functions/positive",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/sql-reference/sql-functions/math-functions/positive.md",tags:[],version:"3.0",frontMatter:{},sidebar:"Chinese31",previous:{title:"pmod",permalink:"/doc/zh/docs/3.0/sql-reference/sql-functions/math-functions/pmod"},next:{title:"pow, power, dpow, fpow",permalink:"/doc/zh/docs/3.0/sql-reference/sql-functions/math-functions/pow"}},l={},d=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function a(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",pre:"pre"},(0,i.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"positive",children:"positive"}),"\n",(0,t.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,t.jsxs)(n.p,{children:["\u8fd4\u56de\u8868\u8fbe\u5f0f ",(0,t.jsx)(n.code,{children:"x"})," \u7684\u7ed3\u679c\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Haskell",children:"POSITIVE(x);\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"x"}),": \u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u4e3a BIGINT\u3001DOUBLE\u3001DECIMALV2\u3001DECIMAL32\u3001DECIMAL64\u3001DECIMAL128\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,t.jsxs)(n.p,{children:["\u8fd4\u56de\u503c\u7684\u6570\u636e\u7c7b\u578b\u4e3a\u4e0e\u53c2\u6570 ",(0,t.jsx)(n.code,{children:"x"})," \u7c7b\u578b\u76f8\u540c\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"mysql> select positive(3);\n+-------------+\n| positive(3) |\n+-------------+\n|           3 |\n+-------------+\n1 row in set (0.01 sec)\n\nmysql> select positive(cast(3.14 as decimalv2));\n+--------------------------------------+\n| positive(CAST(3.14 AS DECIMAL(9,0))) |\n+--------------------------------------+\n|                                 3.14 |\n+--------------------------------------+\n1 row in set (0.01 sec)\n"})})]})}const u=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(a,e)})):a(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>r,ah:()=>c});var t=s(67294);const i=t.createContext({});function c(e){const n=t.useContext(i);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const o={};function r({components:e,children:n,disableParentContext:s}){let r;return r=s?"function"==typeof e?e({}):e||o:c(e),t.createElement(i.Provider,{value:r},n)}}}]);