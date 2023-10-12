"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[4955],{21339:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>t,metadata:()=>i,toc:()=>a});var c=s(85893),r=s(11151);const t={},o="COVAR_POP",i={id:"sql-reference/sql-functions/aggregate-functions/covar_pop",title:"COVAR_POP",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.0/sql-reference/sql-functions/aggregate-functions/covar_pop.md",sourceDirName:"sql-reference/sql-functions/aggregate-functions",slug:"/sql-reference/sql-functions/aggregate-functions/covar_pop",permalink:"/doc/zh/docs/3.0/sql-reference/sql-functions/aggregate-functions/covar_pop",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/sql-reference/sql-functions/aggregate-functions/covar_pop.md",tags:[],version:"3.0",frontMatter:{},sidebar:"Chinese31",previous:{title:"COUNT",permalink:"/doc/zh/docs/3.0/sql-reference/sql-functions/aggregate-functions/count"},next:{title:"COVAR_SAMP",permalink:"/doc/zh/docs/3.0/sql-reference/sql-functions/aggregate-functions/covar_samp"}},l={},a=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u4f7f\u7528\u8bf4\u660e",id:"\u4f7f\u7528\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",img:"img"},(0,r.ah)(),e.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.h1,{id:"covar_pop",children:"COVAR_POP"}),"\n",(0,c.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,c.jsx)(n.p,{children:"\u8fd4\u56de\u4e24\u4e2a\u968f\u673a\u53d8\u91cf\u7684\u603b\u4f53\u534f\u65b9\u5dee\u3002\u8be5\u51fd\u6570\u4ece 2.5.10 \u7248\u672c\u5f00\u59cb\u652f\u6301\uff0c\u4e5f\u53ef\u7528\u4f5c\u7a97\u53e3\u51fd\u6570\u3002"}),"\n",(0,c.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-Haskell",children:"COVAR_POP(expr1, expr2)\n"})}),"\n",(0,c.jsx)(n.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"expr1"}),": \u9009\u53d6\u7684\u8868\u8fbe\u5f0f 1\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"expr2"}),": \u9009\u53d6\u7684\u8868\u8fbe\u5f0f 2\u3002"]}),"\n",(0,c.jsx)(n.p,{children:"\u5f53\u8868\u8fbe\u5f0f\u4e3a\u8868\u4e2d\u4e00\u5217\u65f6\uff0c\u7528\u4e8e\u8ba1\u7b97\u4e24\u5217\u503c\u4e4b\u95f4\u7684\u603b\u4f53\u534f\u65b9\u5dee\u3002\u652f\u6301\u4ee5\u4e0b\u6570\u636e\u7c7b\u578b: TINYINT\u3001SMALLINT\u3001INT\u3001BIGINT\u3001LARGEINT\u3001FLOAT\u3001DOUBLE\u3001DECIMAL\u3002"}),"\n",(0,c.jsx)(n.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,c.jsxs)(n.p,{children:["\u8fd4\u56de\u503c\u4e3a DOUBLE \u7c7b\u578b\u3002\u8ba1\u7b97\u516c\u5f0f\u5982\u4e0b\uff0c\u5176\u4e2d ",(0,c.jsx)(n.code,{children:"n"})," \u4e3a\u8be5\u8868\u7684\u884c\u6570\uff1a"]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.img,{alt:"covar_pop_formula",src:s(63954).Z+"",width:"484",height:"250"})}),"\n",(0,c.jsx)(n.h2,{id:"\u4f7f\u7528\u8bf4\u660e",children:"\u4f7f\u7528\u8bf4\u660e"}),"\n",(0,c.jsx)(n.p,{children:"\u8ba1\u7b97\u603b\u4f53\u534f\u65b9\u5dee\u65f6\uff0c\u53ea\u6709\u540c\u4e00\u884c\u7684\u4e24\u5217\u6570\u636e\u90fd\u4e0d\u4e3a null \u65f6\uff0c\u8be5\u884c\u6570\u636e\u624d\u4f1a\u88ab\u7edf\u8ba1\u5230\u6700\u7ec8\u7ed3\u679c\u4e2d\uff0c\u5426\u5219\u8be5\u884c\u6570\u636e\u4f1a\u88ab\u5ffd\u7565\u3002"}),"\n",(0,c.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,c.jsx)(n.p,{children:"\u5bf9\u4e8e\u4ee5\u4e0b\u6570\u636e\u8868\uff1a"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-plaintext",children:"mysql> select * from agg;\n+------+-------+-------+\n| no   | k     | v     |\n+------+-------+-------+\n|    1 | 10.00 |  NULL |\n|    2 | 10.00 | 11.00 |\n|    2 | 20.00 | 22.00 |\n|    2 | 25.00 |  NULL |\n|    2 | 30.00 | 35.00 |\n+------+-------+-------+\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u8ba1\u7b97\u5217 ",(0,c.jsx)(n.code,{children:"k"})," \u548c\u5217 ",(0,c.jsx)(n.code,{children:"v"})," \u7684\u603b\u4f53\u534f\u65b9\u5dee:"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-plaintext",children:"mysql> select no,COVAR_POP(k,v) from agg group by no;\n+------+-------------------+\n| no   | covar_pop(k, v)   |\n+------+-------------------+\n|    1 |              NULL |\n|    2 | 79.99999999999999 |\n+------+-------------------+\n"})})]})}const p=function(e={}){const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,c.jsx)(n,Object.assign({},e,{children:(0,c.jsx)(d,e)})):d(e)}},63954:(e,n,s)=>{s.d(n,{Z:()=>c});const c=s.p+"assets/images/covar_pop_formula-e72ba738bcac2b27294ab3c024c46954.png"},11151:(e,n,s)=>{s.d(n,{Zo:()=>i,ah:()=>t});var c=s(67294);const r=c.createContext({});function t(e){const n=c.useContext(r);return c.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const o={};function i({components:e,children:n,disableParentContext:s}){let i;return i=s?"function"==typeof e?e({}):e||o:t(e),c.createElement(r.Provider,{value:i},n)}}}]);