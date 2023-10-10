"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[52862],{51196:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>h,frontMatter:()=>t,metadata:()=>l,toc:()=>d});var a=r(85893),s=r(11151);const t={},c="array_generate",l={id:"sql-reference/sql-functions/array-functions/array_generate",title:"array_generate",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.0/sql-reference/sql-functions/array-functions/array_generate.md",sourceDirName:"sql-reference/sql-functions/array-functions",slug:"/sql-reference/sql-functions/array-functions/array_generate",permalink:"/doc/zh/docs/3.0/sql-reference/sql-functions/array-functions/array_generate",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/sql-reference/sql-functions/array-functions/array_generate.md",tags:[],version:"3.0",frontMatter:{},sidebar:"documentation",previous:{title:"array_filter",permalink:"/doc/zh/docs/3.0/sql-reference/sql-functions/array-functions/array_filter"},next:{title:"array_intersect",permalink:"/doc/zh/docs/3.0/sql-reference/sql-functions/array-functions/array_intersect"}},i={},d=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u8f93\u5165\u53c2\u6570\u4e3a\u5e38\u91cf\u7684\u60c5\u51b5",id:"\u8f93\u5165\u53c2\u6570\u4e3a\u5e38\u91cf\u7684\u60c5\u51b5",level:3},{value:"\u8f93\u5165\u53c2\u6570\u4e3a\u5217\u7684\u60c5\u51b5",id:"\u8f93\u5165\u53c2\u6570\u4e3a\u5217\u7684\u60c5\u51b5",level:3}];function o(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",pre:"pre",ul:"ul",li:"li",h3:"h3"},(0,s.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"array_generate",children:"array_generate"}),"\n",(0,a.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,a.jsxs)(n.p,{children:["\u751f\u6210\u4e00\u4e2a\u5305\u542b\u6570\u503c\u5143\u7d20\u7684\u6570\u7ec4\uff0c\u6570\u503c\u8303\u56f4\u5728 ",(0,a.jsx)(n.code,{children:"start"})," \u548c ",(0,a.jsx)(n.code,{children:"end"})," \u4e4b\u95f4\uff0c\u6b65\u957f\u4e3a ",(0,a.jsx)(n.code,{children:"step"}),"\u3002"]}),"\n",(0,a.jsx)(n.p,{children:"\u8be5\u51fd\u6570\u4ece 3.0 \u5f00\u59cb\u652f\u6301\u3002"}),"\n",(0,a.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-Haskell",children:"ARRAY array_generate([start,] end [, step])\n"})}),"\n",(0,a.jsx)(n.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"start"}),"\uff1a\u53ef\u9009\u53c2\u6570\u3002\u652f\u6301\u6570\u636e\u7c7b\u578b\u4e3a TINYINT\u3001SMALLINT\u3001INT\u3001BIGINT\u3001LARGEINT \u7684\u5e38\u91cf\u6216\u5217\u3002\u5982\u679c\u4e0d\u6307\u5b9a\uff0c\u9ed8\u8ba4\u503c\u4e3a 1\u3002\n",(0,a.jsx)(n.code,{children:"end"}),"\uff1a\u5fc5\u9009\u53c2\u6570\u3002\u652f\u6301\u6570\u636e\u7c7b\u578b\u4e3a TINYINT\u3001SMALLINT\u3001INT\u3001BIGINT\u3001LARGEINT \u7684\u5e38\u91cf\u6216\u5217\u3002\n",(0,a.jsx)(n.code,{children:"step"}),"\uff1a\u53ef\u9009\u53c2\u6570\u3002\u652f\u6301\u6570\u636e\u7c7b\u578b\u4e3a TINYINT\u3001SMALLINT\u3001INT\u3001BIGINT\u3001LARGEINT \u7684\u5e38\u91cf\u6216\u5217\u3002\u5f53 ",(0,a.jsx)(n.code,{children:"start"})," < ",(0,a.jsx)(n.code,{children:"end"})," \u65f6, \u5982\u679c\u4e0d\u6307\u5b9a\uff0c\u9ed8\u8ba4\u503c\u4e3a 1\u3002\u5f53 ",(0,a.jsx)(n.code,{children:"start"})," > ",(0,a.jsx)(n.code,{children:"end"})," \u65f6\uff0c\u5982\u679c\u4e0d\u6307\u5b9a\uff0c\u9ed8\u8ba4\u503c\u4e3a -1\u3002"]}),"\n",(0,a.jsx)(n.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,a.jsx)(n.p,{children:"\u8fd4\u56de\u503c\u7684\u6570\u636e\u7c7b\u578b\u4e3a ARRAY\u3002\u6570\u7ec4\u4e2d\u7684\u5143\u7d20\u7c7b\u578b\u4e0e\u8f93\u5165\u53c2\u6570\u7684\u7c7b\u578b\u76f8\u540c\u3002"}),"\n",(0,a.jsx)(n.h2,{id:"\u6ce8\u610f\u4e8b\u9879",children:"\u6ce8\u610f\u4e8b\u9879"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"\u5f53\u4efb\u610f\u53c2\u6570\u4e3a\u5217\u65f6\uff0c\u9700\u6307\u5b9a\u5217\u6240\u5c5e\u7684\u8868\u3002"}),"\n",(0,a.jsx)(n.li,{children:"\u5f53\u4efb\u610f\u53c2\u6570\u4e3a\u5217\u65f6\uff0c\u5176\u4ed6\u53c2\u6570\u5fc5\u987b\u6307\u5b9a\uff0c\u4e0d\u652f\u6301\u4f7f\u7528\u9ed8\u8ba4\u503c\u3002"}),"\n",(0,a.jsx)(n.li,{children:"\u5f53\u4efb\u610f\u53c2\u6570\u4e3a NULL \u65f6\uff0c\u7ed3\u679c\u8fd4\u56de NULL\u3002"}),"\n",(0,a.jsxs)(n.li,{children:["\u5f53 ",(0,a.jsx)(n.code,{children:"step"})," = 0 \u65f6\uff0c\u8fd4\u56de\u7a7a\u6570\u7ec4\u3002"]}),"\n",(0,a.jsxs)(n.li,{children:["\u5f53 ",(0,a.jsx)(n.code,{children:"start"})," = ",(0,a.jsx)(n.code,{children:"end"})," \u65f6\uff0c\u8fd4\u56de\u8be5\u503c\u3002"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,a.jsx)(n.h3,{id:"\u8f93\u5165\u53c2\u6570\u4e3a\u5e38\u91cf\u7684\u60c5\u51b5",children:"\u8f93\u5165\u53c2\u6570\u4e3a\u5e38\u91cf\u7684\u60c5\u51b5"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"mysql> select array_generate(9);\n+---------------------+\n| array_generate(9)   |\n+---------------------+\n| [1,2,3,4,5,6,7,8,9] |\n+---------------------+\n\nselect array_generate(9,12);\n+-----------------------+\n| array_generate(9, 12) |\n+-----------------------+\n| [9,10,11,12]          |\n+-----------------------+\n\nselect array_generate(9,6);\n+----------------------+\n| array_generate(9, 6) |\n+----------------------+\n| [9,8,7,6]            |\n+----------------------+\n\nselect array_generate(9,6,-1);\n+--------------------------+\n| array_generate(9, 6, -1) |\n+--------------------------+\n| [9,8,7,6]                |\n+--------------------------+\n\nselect array_generate(3,3);\n+----------------------+\n| array_generate(3, 3) |\n+----------------------+\n| [3]                  |\n+----------------------+\n"})}),"\n",(0,a.jsx)(n.h3,{id:"\u8f93\u5165\u53c2\u6570\u4e3a\u5217\u7684\u60c5\u51b5",children:"\u8f93\u5165\u53c2\u6570\u4e3a\u5217\u7684\u60c5\u51b5"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE `array_generate`\n(\n  `c1` TINYINT,\n  `c2` SMALLINT,\n  `c3` INT\n)\nENGINE = OLAP\nDUPLICATE KEY(`c1`)\nDISTRIBUTED BY HASH(`c1`);\n\nINSERT INTO `array_generate` VALUES\n(1, 6, 3),\n(2, 9, 4);\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"mysql> select array_generate(1,c2,2) from `array_generate`;\n+--------------------------+\n| array_generate(1, c2, 2) |\n+--------------------------+\n| [1,3,5]                  |\n| [1,3,5,7,9]              |\n+--------------------------+\n"})})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,s.ah)(),e.components);return n?(0,a.jsx)(n,Object.assign({},e,{children:(0,a.jsx)(o,e)})):o(e)}},11151:(e,n,r)=>{r.d(n,{Zo:()=>l,ah:()=>t});var a=r(67294);const s=a.createContext({});function t(e){const n=a.useContext(s);return a.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const c={};function l({components:e,children:n,disableParentContext:r}){let l;return l=r?"function"==typeof e?e({}):e||c:t(e),a.createElement(s.Provider,{value:l},n)}}}]);