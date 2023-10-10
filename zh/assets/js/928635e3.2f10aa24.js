"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[97622],{59263:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>l,contentTitle:()=>a,default:()=>_,frontMatter:()=>r,metadata:()=>c,toc:()=>o});var i=s(85893),t=s(11151);const r={},a="append_trailing_char_if_absent",c={id:"sql-reference/sql-functions/string-functions/append_trailing_char_if_absent",title:"append_trailing_char_if_absent",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.1/sql-reference/sql-functions/string-functions/append_trailing_char_if_absent.md",sourceDirName:"sql-reference/sql-functions/string-functions",slug:"/sql-reference/sql-functions/string-functions/append_trailing_char_if_absent",permalink:"/docusaurusv3/zh/docs/sql-reference/sql-functions/string-functions/append_trailing_char_if_absent",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-functions/string-functions/append_trailing_char_if_absent.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"String Functions",permalink:"/docusaurusv3/zh/docs/category/string-functions"},next:{title:"ascii",permalink:"/docusaurusv3/zh/docs/sql-reference/sql-functions/string-functions/ascii"}},l={},o=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function d(n){const e=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code"},(0,t.ah)(),n.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"append_trailing_char_if_absent",children:"append_trailing_char_if_absent"}),"\n",(0,i.jsx)(e.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,i.jsx)(e.p,{children:"\u5982\u679c str \u5b57\u7b26\u4e32\u975e\u7a7a\u5e76\u4e14\u672b\u5c3e\u4e0d\u5305\u542b trailing_char \u5b57\u7b26\uff0c\u5219\u5c06 trailing_char \u5b57\u7b26\u9644\u52a0\u5230\u672b\u5c3e\u3002"}),"\n",(0,i.jsx)(e.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-Haskell",children:"append_trailing_char_if_absent(str, trailing_char)\n"})}),"\n",(0,i.jsx)(e.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"str"}),": \u7ed9\u5b9a\u5b57\u7b26\u4e32\uff0c\u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u4e3a VARCHAR\u3002"]}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"trailing_char"}),": \u7ed9\u5b9a\u5b57\u7b26\uff0c\u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u4e3a VARCHAR\uff0ctrailing_char \u53ea\u80fd\u5305\u542b\u4e00\u4e2a\u5b57\u7b26\uff0c\u82e5\u5305\u542b\u591a\u4e2a\u5b57\u7b26\uff0c\u5c06\u8fd4\u56de NULL\u3002"]}),"\n",(0,i.jsx)(e.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,i.jsx)(e.p,{children:"\u8fd4\u56de\u503c\u7684\u6570\u636e\u7c7b\u578b\u4e3a VARCHAR\u3002"}),"\n",(0,i.jsx)(e.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-Plain",metastring:"Text",children:"MySQL [test]> select append_trailing_char_if_absent('a','c');\n+------------------------------------------+\n|append_trailing_char_if_absent('a', 'c')  |\n+------------------------------------------+\n| ac                                       |\n+------------------------------------------+\n1 row in set (0.02 sec)\n\nMySQL [test]> select append_trailing_char_if_absent('ac','c');\n+-------------------------------------------+\n|append_trailing_char_if_absent('ac', 'c')  |\n+-------------------------------------------+\n| ac                                        |\n+-------------------------------------------+\n1 row in set (0.00 sec)\n"})})]})}const _=function(n={}){const{wrapper:e}=Object.assign({},(0,t.ah)(),n.components);return e?(0,i.jsx)(e,Object.assign({},n,{children:(0,i.jsx)(d,n)})):d(n)}},11151:(n,e,s)=>{s.d(e,{Zo:()=>c,ah:()=>r});var i=s(67294);const t=i.createContext({});function r(n){const e=i.useContext(t);return i.useMemo((()=>"function"==typeof n?n(e):{...e,...n}),[e,n])}const a={};function c({components:n,children:e,disableParentContext:s}){let c;return c=s?"function"==typeof n?n({}):n||a:r(n),i.createElement(t.Provider,{value:c},e)}}}]);