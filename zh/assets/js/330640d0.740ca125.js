"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[50995],{83256:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>a,contentTitle:()=>l,default:()=>o,frontMatter:()=>i,metadata:()=>r,toc:()=>h});var t=s(85893),c=s(11151);const i={displayed_sidebar:"Chinese"},l="tanh",r={id:"sql-reference/sql-functions/math-functions/tanh",title:"tanh",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.1/sql-reference/sql-functions/math-functions/tanh.md",sourceDirName:"sql-reference/sql-functions/math-functions",slug:"/sql-reference/sql-functions/math-functions/tanh",permalink:"/doc/zh/docs/sql-reference/sql-functions/math-functions/tanh",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-functions/math-functions/tanh.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"Chinese"},sidebar:"Chinese",previous:{title:"tan",permalink:"/doc/zh/docs/sql-reference/sql-functions/math-functions/tan"},next:{title:"truncate",permalink:"/doc/zh/docs/sql-reference/sql-functions/math-functions/truncate"}},a={},h=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:3},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u4f7f\u7528\u8bf4\u660e",id:"\u4f7f\u7528\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u5173\u952e\u5b57",id:"\u5173\u952e\u5b57",level:2}];function d(n){const e=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",h3:"h3"},(0,c.ah)(),n.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"tanh",children:"tanh"}),"\n",(0,t.jsx)(e.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,t.jsx)(e.p,{children:"\u8ba1\u7b97\u8f93\u5165\u6570\u503c\u7684\u53cc\u66f2\u6b63\u5207\u503c\u3002"}),"\n",(0,t.jsx)(e.p,{children:"\u8be5\u51fd\u6570\u4ece 3.0 \u7248\u672c\u5f00\u59cb\u652f\u6301\u3002"}),"\n",(0,t.jsx)(e.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-Haskell",children:"DOUBLE tanh(DOUBLE arg)\n"})}),"\n",(0,t.jsx)(e.h3,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"arg"}),"\uff1a\u6307\u5b9a\u4e00\u4e2a\u6570\u503c\u3002\u8be5\u51fd\u6570\u5728\u8ba1\u7b97\u8f93\u5165\u6570\u503c\u7684\u53cc\u66f2\u6b63\u5207\u503c\u4e4b\u524d\uff0c\u4f1a\u5148\u628a\u6570\u503c\u8f6c\u6362\u4e3a DOUBLE \u7c7b\u578b\u7684\u503c\u3002"]}),"\n",(0,t.jsx)(e.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,t.jsx)(e.p,{children:"\u8fd4\u56de\u4e00\u4e2a DOUBLE \u7c7b\u578b\u7684\u503c\u3002"}),"\n",(0,t.jsx)(e.h2,{id:"\u4f7f\u7528\u8bf4\u660e",children:"\u4f7f\u7528\u8bf4\u660e"}),"\n",(0,t.jsxs)(e.p,{children:["\u5982\u679c\u5165\u53c2\u6307\u5b9a\u4e3a\u975e\u6570\u503c\uff0c\u5219\u8fd4\u56de ",(0,t.jsx)(e.code,{children:"NULL"}),"\u3002"]}),"\n",(0,t.jsx)(e.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-Plain",children:"mysql> select tanh(-1);\n+---------------------+\n| tanh(-1)            |\n+---------------------+\n| -0.7615941559557649 |\n+---------------------+\n\nmysql> select tanh(0);\n+---------+\n| tanh(0) |\n+---------+\n|       0 |\n+---------+\n\nmysql> select tanh(1);\n+--------------------+\n| tanh(1)            |\n+--------------------+\n| 0.7615941559557649 |\n+--------------------+\n\nmysql> select tanh(\"\");\n+----------+\n| tanh('') |\n+----------+\n|     NULL |\n+----------+\n"})}),"\n",(0,t.jsx)(e.h2,{id:"\u5173\u952e\u5b57",children:"\u5173\u952e\u5b57"}),"\n",(0,t.jsx)(e.p,{children:"TANH"})]})}const o=function(n={}){const{wrapper:e}=Object.assign({},(0,c.ah)(),n.components);return e?(0,t.jsx)(e,Object.assign({},n,{children:(0,t.jsx)(d,n)})):d(n)}},11151:(n,e,s)=>{s.d(e,{Zo:()=>r,ah:()=>i});var t=s(67294);const c=t.createContext({});function i(n){const e=t.useContext(c);return t.useMemo((()=>"function"==typeof n?n(e):{...e,...n}),[e,n])}const l={};function r({components:n,children:e,disableParentContext:s}){let r;return r=s?"function"==typeof n?n({}):n||l:i(n),t.createElement(c.Provider,{value:r},e)}}}]);