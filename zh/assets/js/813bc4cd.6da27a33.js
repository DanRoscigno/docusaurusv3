"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[51571],{18818:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>c,metadata:()=>r,toc:()=>a});var t=s(85893),i=s(11151);const c={},l="split",r={id:"sql-reference/sql-functions/string-functions/split",title:"split",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.0/sql-reference/sql-functions/string-functions/split.md",sourceDirName:"sql-reference/sql-functions/string-functions",slug:"/sql-reference/sql-functions/string-functions/split",permalink:"/doc/zh/docs/3.0/sql-reference/sql-functions/string-functions/split",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/sql-reference/sql-functions/string-functions/split.md",tags:[],version:"3.0",frontMatter:{},sidebar:"Chinese31",previous:{title:"space",permalink:"/doc/zh/docs/3.0/sql-reference/sql-functions/string-functions/space"},next:{title:"split_part",permalink:"/doc/zh/docs/3.0/sql-reference/sql-functions/string-functions/split_part"}},o={},a=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code"},(0,i.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"split",children:"split"}),"\n",(0,t.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,t.jsx)(n.p,{children:"\u6839\u636e\u5206\u9694\u7b26\u62c6\u5206\u5b57\u7b26\u4e32\uff0c\u5c06\u62c6\u5206\u540e\u7684\u6240\u6709\u5b57\u7b26\u4e32\u4ee5 ARRAY \u7684\u683c\u5f0f\u8fd4\u56de\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Haskell",children:"split(content, delimiter)\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"content"}),": \u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u4e3a VARCHAR\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"delimiter"}),": \u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u4e3a VARCHAR\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,t.jsx)(n.p,{children:"\u8fd4\u56de\u503c\u7684\u6570\u636e\u7c7b\u578b\u4e3a ARRAY\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:'mysql> select split("a,b,c",",");\n+---------------------+\n| split(\'a,b,c\', \',\') |\n+---------------------+\n| ["a","b","c"]       |\n+---------------------+\nmysql> select split("a,b,c",",b,");\n+-----------------------+\n| split(\'a,b,c\', \',b,\') |\n+-----------------------+\n| ["a","c"]             |\n+-----------------------+\nmysql> select split("abc","");\n+------------------+\n| split(\'abc\', \'\') |\n+------------------+\n| ["a","b","c"]    |\n+------------------+\n'})})]})}const u=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(d,e)})):d(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>r,ah:()=>c});var t=s(67294);const i=t.createContext({});function c(e){const n=t.useContext(i);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const l={};function r({components:e,children:n,disableParentContext:s}){let r;return r=s?"function"==typeof e?e({}):e||l:c(e),t.createElement(i.Provider,{value:r},n)}}}]);