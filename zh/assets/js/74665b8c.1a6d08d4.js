"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[29765],{91396:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>o,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var s=r(85893),t=r(11151);const i={},c="rtrim",l={id:"sql-reference/sql-functions/string-functions/rtrim",title:"rtrim",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.0/sql-reference/sql-functions/string-functions/rtrim.md",sourceDirName:"sql-reference/sql-functions/string-functions",slug:"/sql-reference/sql-functions/string-functions/rtrim",permalink:"/doc/zh/docs/3.0/sql-reference/sql-functions/string-functions/rtrim",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/sql-reference/sql-functions/string-functions/rtrim.md",tags:[],version:"3.0",frontMatter:{},sidebar:"documentation",previous:{title:"rpad",permalink:"/doc/zh/docs/3.0/sql-reference/sql-functions/string-functions/rpad"},next:{title:"space",permalink:"/doc/zh/docs/3.0/sql-reference/sql-functions/string-functions/space"}},o={},d=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u76f8\u5173\u6587\u6863",id:"\u76f8\u5173\u6587\u6863",level:2}];function a(n){const e=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",ul:"ul",li:"li",a:"a"},(0,t.ah)(),n.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"rtrim",children:"rtrim"}),"\n",(0,s.jsx)(e.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,s.jsx)(e.p,{children:"\u4ece\u5b57\u7b26\u4e32\u7684\u53f3\u4fa7\uff08\u7ed3\u5c3e\u90e8\u5206\uff09\u79fb\u9664\u8fde\u7eed\u51fa\u73b0\u7684\u7a7a\u683c\u6216\u6307\u5b9a\u5b57\u7b26\u3002\u4ece 2.5.0 \u7248\u672c\u5f00\u59cb\uff0c\u652f\u6301\u4ece\u5b57\u7b26\u4e32\u4e2d\u79fb\u9664\u6307\u5b9a\u7684\u5b57\u7b26\u3002"}),"\n",(0,s.jsx)(e.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-Haskell",children:"rtrim(str[, characters]);\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"str"}),": \u5f85\u88c1\u526a\u7684\u5b57\u7b26\u4e32\uff0c\u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u4e3a VARCHAR\u3002"]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"characters"}),": \u53ef\u9009\uff0c\u8981\u79fb\u9664\u7684\u5b57\u7b26\uff0c\u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u4e3a VARCHAR\u3002\u5982\u679c\u4e0d\u6307\u5b9a\u8be5\u53c2\u6570\uff0c\u9ed8\u8ba4\u79fb\u9664\u7a7a\u683c\u3002\u5982\u679c\u8be5\u53c2\u6570\u4e3a\u7a7a\u5b57\u7b26\uff0c\u8fd4\u56de\u62a5\u9519\u3002"]}),"\n",(0,s.jsx)(e.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,s.jsx)(e.p,{children:"\u8fd4\u56de\u503c\u7684\u6570\u636e\u7c7b\u578b\u4e3a VARCHAR\u3002"}),"\n",(0,s.jsx)(e.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,s.jsx)(e.p,{children:"\u793a\u4f8b\u4e00\uff1a\u79fb\u9664\u5b57\u7b26\u4e32\u53f3\u4fa7\u7684\u8fde\u7eed\u7a7a\u683c\u3002"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-Plain",metastring:"Text",children:"MySQL > SELECT rtrim('   ab d   ');\n+---------------------+\n| rtrim('   ab d   ') |\n+---------------------+\n|    ab d             |\n+---------------------+\n1 row in set (0.00 sec)\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u793a\u4f8b\u4e8c\uff1a\u79fb\u9664\u5b57\u7b26\u4e32\u53f3\u4fa7\u7684\u6307\u5b9a\u5b57\u7b26\u3002"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-Plain",metastring:"Text",children:"MySQL > SELECT rtrim(\"xxabcdxx\", \"x\");\n+------------------------+\n| rtrim('xxabcdxx', 'x') |\n+------------------------+\n| xxabcd                 |\n+------------------------+\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u76f8\u5173\u6587\u6863",children:"\u76f8\u5173\u6587\u6863"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"/doc/zh/docs/3.0/sql-reference/sql-functions/string-functions/trim",children:"trim"})}),"\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"/doc/zh/docs/3.0/sql-reference/sql-functions/string-functions/ltrim",children:"ltrim"})}),"\n"]})]})}const u=function(n={}){const{wrapper:e}=Object.assign({},(0,t.ah)(),n.components);return e?(0,s.jsx)(e,Object.assign({},n,{children:(0,s.jsx)(a,n)})):a(n)}},11151:(n,e,r)=>{r.d(e,{Zo:()=>l,ah:()=>i});var s=r(67294);const t=s.createContext({});function i(n){const e=s.useContext(t);return s.useMemo((()=>"function"==typeof n?n(e):{...e,...n}),[e,n])}const c={};function l({components:n,children:e,disableParentContext:r}){let l;return l=r?"function"==typeof n?n({}):n||c:i(n),s.createElement(t.Provider,{value:l},e)}}}]);