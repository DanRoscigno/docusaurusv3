"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[61166],{11544:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>i,contentTitle:()=>h,default:()=>o,frontMatter:()=>c,metadata:()=>l,toc:()=>u});var r=s(85893),t=s(11151);const c={displayed_sidebar:"Chinese31"},h="murmur_hash3_32",l={id:"sql-reference/sql-functions/hash-functions/murmur_hash3_32",title:"murmur_hash3_32",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.0/sql-reference/sql-functions/hash-functions/murmur_hash3_32.md",sourceDirName:"sql-reference/sql-functions/hash-functions",slug:"/sql-reference/sql-functions/hash-functions/murmur_hash3_32",permalink:"/doc/zh/docs/3.0/sql-reference/sql-functions/hash-functions/murmur_hash3_32",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/sql-reference/sql-functions/hash-functions/murmur_hash3_32.md",tags:[],version:"3.0",frontMatter:{displayed_sidebar:"Chinese31"},sidebar:"Chinese31",previous:{title:"CAST",permalink:"/doc/zh/docs/3.0/sql-reference/sql-functions/cast"},next:{title:"AUTO_INCREMENT",permalink:"/doc/zh/docs/3.0/sql-reference/sql-statements/auto_increment"}},i={},u=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function a(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code"},(0,t.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"murmur_hash3_32",children:"murmur_hash3_32"}),"\n",(0,r.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,r.jsx)(n.p,{children:"\u8fd4\u56de\u8f93\u5165\u5b57\u7b26\u4e32\u7684 32 \u4f4d murmur3 hash \u503c\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Haskell",children:"MURMUR_HASH3_32(input, ...)\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"input"}),": \u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u4e3a VARCHAR\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,r.jsx)(n.p,{children:"\u8fd4\u56de\u503c\u7684\u6570\u636e\u7c7b\u578b\u4e3a INT\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"MySQL > select murmur_hash3_32(null);\n+-----------------------+\n| murmur_hash3_32(NULL) |\n+-----------------------+\n|                  NULL |\n+-----------------------+\n\nMySQL > select murmur_hash3_32(\"hello\");\n+--------------------------+\n| murmur_hash3_32('hello') |\n+--------------------------+\n|               1321743225 |\n+--------------------------+\n\nMySQL > select murmur_hash3_32(\"hello\", \"world\");\n+-----------------------------------+\n| murmur_hash3_32('hello', 'world') |\n+-----------------------------------+\n|                         984713481 |\n+-----------------------------------+\n"})})]})}const o=function(e={}){const{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(a,e)})):a(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>l,ah:()=>c});var r=s(67294);const t=r.createContext({});function c(e){const n=r.useContext(t);return r.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const h={};function l({components:e,children:n,disableParentContext:s}){let l;return l=s?"function"==typeof e?e({}):e||h:c(e),r.createElement(t.Provider,{value:l},n)}}}]);