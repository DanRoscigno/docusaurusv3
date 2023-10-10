"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[47178],{25769:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>t,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>o});var r=s(85893),c=s(11151);const l={},t="replace",i={id:"sql-reference/sql-functions/string-functions/replace",title:"replace",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.1/sql-reference/sql-functions/string-functions/replace.md",sourceDirName:"sql-reference/sql-functions/string-functions",slug:"/sql-reference/sql-functions/string-functions/replace",permalink:"/docusaurusv3/zh/docs/latest/sql-reference/sql-functions/string-functions/replace",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-functions/string-functions/replace.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"repeat",permalink:"/docusaurusv3/zh/docs/latest/sql-reference/sql-functions/string-functions/repeat"},next:{title:"reverse",permalink:"/docusaurusv3/zh/docs/latest/sql-reference/sql-functions/string-functions/reverse"}},a={},o=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"keywords",id:"keywords",level:2}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",blockquote:"blockquote",strong:"strong",a:"a",pre:"pre",ul:"ul",li:"li"},(0,c.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"replace",children:"replace"}),"\n",(0,r.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,r.jsxs)(n.p,{children:["\u5c06\u4e00\u4e2a\u5b57\u7b26\u4e32 (",(0,r.jsx)(n.code,{children:"str"}),") \u4e2d\u7b26\u5408\u6307\u5b9a\u6a21\u5f0f\u7684\u5b57\u7b26 (",(0,r.jsx)(n.code,{children:"pattern"}),") \u5168\u90e8\u66ff\u6362\u6210\u5176\u4ed6\u5b57\u7b26 (",(0,r.jsx)(n.code,{children:"repl"}),")\u3002\u6ce8\u610f\u66ff\u6362\u65f6\u4f1a\u533a\u5206\u5927\u5c0f\u5199\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u8be5\u51fd\u6570\u4ece 3.0 \u7248\u672c\u5f00\u59cb\u652f\u6301\u3002"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u6ce8\u610f"})}),"\n",(0,r.jsxs)(n.p,{children:["\u5728 3.0 \u7248\u672c\u4e4b\u524d\uff0c\u8be5\u51fd\u6570\u901a\u8fc7 ",(0,r.jsx)(n.a,{href:"../string-functions/regexp_replace.md",children:"regexp_replace"})," \u6765\u5b9e\u73b0\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Haskell",children:"VARCHAR replace(VARCHAR str, VARCHAR pattern, VARCHAR repl)\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"str"}),": \u539f\u59cb\u5b57\u7b26\u4e32\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"pattern"}),": \u7528\u4e8e\u5339\u914d\u5b57\u7b26\u7684\u8868\u8fbe\u5f0f\u3002\u4e0d\u80fd\u662f\u6b63\u5219\u8868\u8fbe\u5f0f\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"repl"}),": \u7528\u4e8e\u66ff\u6362 ",(0,r.jsx)(n.code,{children:"pattern"})," \u4e2d\u6307\u5b9a\u7684\u5b57\u7b26\u3002"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,r.jsx)(n.p,{children:"\u8fd4\u56de\u4e00\u4e2a\u5b57\u7b26\u4e32\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u5982\u679c\u4efb\u610f\u4e00\u4e2a\u8f93\u5165\u53c2\u6570\u4e3a NULL\uff0c\u5219\u8fd4\u56de NULL\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u5982\u679c\u672a\u627e\u5230\u7b26\u5408\u6761\u4ef6\u7684\u5b57\u7b26\uff0c\u5219\u8fd4\u56de\u539f\u59cb\u7684\u5b57\u7b26\u4e32\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"-- \u5c06\u5b57\u7b26\u4e32 'a.b.c' \u91cc\u7684 '.' \u90fd\u66ff\u6362\u6210 '+'\u3002\n\nMySQL > SELECT replace('a.b.c', '.', '+');\n+----------------------------+\n| replace('a.b.c', '.', '+') |\n+----------------------------+\n| a+b+c                      |\n+----------------------------+\n\n-- \u672a\u627e\u5230\u7b26\u5408\u6761\u4ef6\u7684\u5b57\u7b26\uff0c\u8fd4\u56de\u539f\u59cb\u5b57\u7b26\u4e32\u3002\n\nMySQL > SELECT replace('a b c', '', '*');\n+----------------------------+\n| replace('a b c', '', '*') |\n+----------------------------+\n| a b c                      |\n+----------------------------+\n\n-- \u5c06 'like' \u66ff\u6362\u4e3a\u7a7a\u5b57\u7b26\u4e32\u3002\n\nMySQL > SELECT replace('We like StarRocks', 'like', '');\n+------------------------------------------+\n| replace('We like StarRocks', 'like', '') |\n+------------------------------------------+\n| We  StarRocks                            |\n+------------------------------------------+\n\n-- \u672a\u627e\u5230\u7b26\u5408\u6761\u4ef6\u7684\u5b57\u7b26\uff0c\u8fd4\u56de\u539f\u59cb\u5b57\u7b26\u4e32\u3002\n\nMySQL > SELECT replace('He is awesome', 'handsome', 'smart');\n+-----------------------------------------------+\n| replace('He is awesome', 'handsome', 'smart') |\n+-----------------------------------------------+\n| He is awesome                                 |\n+-----------------------------------------------+\n"})}),"\n",(0,r.jsx)(n.h2,{id:"keywords",children:"keywords"}),"\n",(0,r.jsx)(n.p,{children:"REPLACE, replace"})]})}const u=function(e={}){const{wrapper:n}=Object.assign({},(0,c.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(d,e)})):d(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>i,ah:()=>l});var r=s(67294);const c=r.createContext({});function l(e){const n=r.useContext(c);return r.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const t={};function i({components:e,children:n,disableParentContext:s}){let i;return i=s?"function"==typeof e?e({}):e||t:l(e),r.createElement(c.Provider,{value:i},n)}}}]);