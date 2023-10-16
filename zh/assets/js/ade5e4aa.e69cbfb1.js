"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[96598],{57297:(n,e,c)=>{c.r(e),c.d(e,{assets:()=>a,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var s=c(85893),t=c(11151);const r={displayed_sidebar:"Chinese"},i="concat",o={id:"sql-reference/sql-functions/string-functions/concat",title:"concat",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.5/sql-reference/sql-functions/string-functions/concat.md",sourceDirName:"sql-reference/sql-functions/string-functions",slug:"/sql-reference/sql-functions/string-functions/concat",permalink:"/doc/zh/docs/2.5/sql-reference/sql-functions/string-functions/concat",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-functions/string-functions/concat.md",tags:[],version:"2.5",frontMatter:{displayed_sidebar:"Chinese"},sidebar:"Chinese",previous:{title:"character_length",permalink:"/doc/zh/docs/2.5/sql-reference/sql-functions/string-functions/character_length"},next:{title:"concat_ws",permalink:"/doc/zh/docs/2.5/sql-reference/sql-functions/string-functions/concat_ws"}},a={},l=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function d(n){const e=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code"},(0,t.ah)(),n.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"concat",children:"concat"}),"\n",(0,s.jsx)(e.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,s.jsx)(e.p,{children:"\u5c06\u591a\u4e2a\u5b57\u7b26\u4e32\u8fde\u63a5\u8d77\u6765\u3002\u5982\u679c\u53c2\u6570\u4e2d\u4efb\u610f\u4e00\u4e2a\u503c\u662f NULL\uff0c\u90a3\u4e48\u8fd4\u56de\u7684\u7ed3\u679c\u4e3a NULL\u3002"}),"\n",(0,s.jsx)(e.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-Haskell",children:"concat(str,...)\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"str"}),": \u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u4e3a VARCHAR\u3002"]}),"\n",(0,s.jsx)(e.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,s.jsx)(e.p,{children:"\u8fd4\u56de\u503c\u7684\u6570\u636e\u7c7b\u578b\u4e3a VARCHAR\u3002"}),"\n",(0,s.jsx)(e.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-Plain",metastring:"Text",children:"MySQL > select concat(\"a\", \"b\");\n+------------------+\n| concat('a', 'b') |\n+------------------+\n| ab               |\n+------------------+\n\nMySQL > select concat(\"a\", \"b\", \"c\");\n+-----------------------+\n| concat('a', 'b', 'c') |\n+-----------------------+\n| abc                   |\n+-----------------------+\n\nMySQL > select concat(\"a\", null, \"c\");\n+------------------------+\n| concat('a', NULL, 'c') |\n+------------------------+\n| NULL                   |\n+------------------------+\n"})})]})}const u=function(n={}){const{wrapper:e}=Object.assign({},(0,t.ah)(),n.components);return e?(0,s.jsx)(e,Object.assign({},n,{children:(0,s.jsx)(d,n)})):d(n)}},11151:(n,e,c)=>{c.d(e,{Zo:()=>o,ah:()=>r});var s=c(67294);const t=s.createContext({});function r(n){const e=s.useContext(t);return s.useMemo((()=>"function"==typeof n?n(e):{...e,...n}),[e,n])}const i={};function o({components:n,children:e,disableParentContext:c}){let o;return o=c?"function"==typeof n?n({}):n||i:r(n),s.createElement(t.Provider,{value:o},e)}}}]);