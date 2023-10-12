"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[20813],{92562:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>h,contentTitle:()=>r,default:()=>a,frontMatter:()=>c,metadata:()=>l,toc:()=>o});var i=s(85893),t=s(11151);const c={},r="sinh",l={id:"sql-reference/sql-functions/math-functions/sinh",title:"sinh",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.1/sql-reference/sql-functions/math-functions/sinh.md",sourceDirName:"sql-reference/sql-functions/math-functions",slug:"/sql-reference/sql-functions/math-functions/sinh",permalink:"/doc/zh/docs/sql-reference/sql-functions/math-functions/sinh",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-functions/math-functions/sinh.md",tags:[],version:"3.1",frontMatter:{},sidebar:"Chinese31",previous:{title:"sin",permalink:"/doc/zh/docs/sql-reference/sql-functions/math-functions/sin"},next:{title:"sqrt, dsqrt",permalink:"/doc/zh/docs/sql-reference/sql-functions/math-functions/sqrt"}},h={},o=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:3},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u4f7f\u7528\u8bf4\u660e",id:"\u4f7f\u7528\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u5173\u952e\u5b57",id:"\u5173\u952e\u5b57",level:2}];function d(n){const e=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",h3:"h3"},(0,t.ah)(),n.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"sinh",children:"sinh"}),"\n",(0,i.jsx)(e.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,i.jsx)(e.p,{children:"\u8ba1\u7b97\u8f93\u5165\u6570\u503c\u7684\u53cc\u66f2\u6b63\u5f26\u503c\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u8be5\u51fd\u6570\u4ece 3.0 \u7248\u672c\u5f00\u59cb\u652f\u6301\u3002"}),"\n",(0,i.jsx)(e.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-Haskell",children:"DOUBLE sinh(DOUBLE arg)\n"})}),"\n",(0,i.jsx)(e.h3,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"arg"}),"\uff1a\u6307\u5b9a\u4e00\u4e2a\u6570\u503c\u3002\u8be5\u51fd\u6570\u5728\u8ba1\u7b97\u8f93\u5165\u6570\u503c\u7684\u53cc\u66f2\u6b63\u5f26\u503c\u4e4b\u524d\uff0c\u4f1a\u5148\u628a\u6570\u503c\u8f6c\u6362\u4e3a DOUBLE \u7c7b\u578b\u7684\u503c\u3002"]}),"\n",(0,i.jsx)(e.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,i.jsx)(e.p,{children:"\u8fd4\u56de\u4e00\u4e2a DOUBLE \u7c7b\u578b\u7684\u503c\u3002"}),"\n",(0,i.jsx)(e.h2,{id:"\u4f7f\u7528\u8bf4\u660e",children:"\u4f7f\u7528\u8bf4\u660e"}),"\n",(0,i.jsxs)(e.p,{children:["\u5982\u679c\u5165\u53c2\u6307\u5b9a\u4e3a\u975e\u6570\u503c\uff0c\u5219\u8fd4\u56de ",(0,i.jsx)(e.code,{children:"NULL"}),"\u3002"]}),"\n",(0,i.jsx)(e.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-Plain",children:"mysql> select sinh(-1);\n+---------------------+\n| sinh(-1)            |\n+---------------------+\n| -1.1752011936438014 |\n+---------------------+\n\nmysql> select sinh(0);\n+---------+\n| sinh(0) |\n+---------+\n|       0 |\n+---------+\n\nmysql> select sinh(1);\n+--------------------+\n| sinh(1)            |\n+--------------------+\n| 1.1752011936438014 |\n+--------------------+\n\nmysql> select sinh(\"\");\n+----------+\n| sinh('') |\n+----------+\n|     NULL |\n+----------+\n"})}),"\n",(0,i.jsx)(e.h2,{id:"\u5173\u952e\u5b57",children:"\u5173\u952e\u5b57"}),"\n",(0,i.jsx)(e.p,{children:"SINH"})]})}const a=function(n={}){const{wrapper:e}=Object.assign({},(0,t.ah)(),n.components);return e?(0,i.jsx)(e,Object.assign({},n,{children:(0,i.jsx)(d,n)})):d(n)}},11151:(n,e,s)=>{s.d(e,{Zo:()=>l,ah:()=>c});var i=s(67294);const t=i.createContext({});function c(n){const e=i.useContext(t);return i.useMemo((()=>"function"==typeof n?n(e):{...e,...n}),[e,n])}const r={};function l({components:n,children:e,disableParentContext:s}){let l;return l=s?"function"==typeof n?n({}):n||r:c(n),i.createElement(t.Provider,{value:l},e)}}}]);