"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[11519],{52739:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>h,frontMatter:()=>t,metadata:()=>o,toc:()=>l});var c=s(85893),r=s(11151);const t={},i="aes_encrypt",o={id:"sql-reference/sql-functions/crytographic-functions/aes_encrypt",title:"aes_encrypt",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.0/sql-reference/sql-functions/crytographic-functions/aes_encrypt.md",sourceDirName:"sql-reference/sql-functions/crytographic-functions",slug:"/sql-reference/sql-functions/crytographic-functions/aes_encrypt",permalink:"/doc/zh/docs/3.0/sql-reference/sql-functions/crytographic-functions/aes_encrypt",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/sql-reference/sql-functions/crytographic-functions/aes_encrypt.md",tags:[],version:"3.0",frontMatter:{},sidebar:"documentation",previous:{title:"aes_decrypt",permalink:"/doc/zh/docs/3.0/sql-reference/sql-functions/crytographic-functions/aes_decrypt"},next:{title:"base64_decode_binary",permalink:"/doc/zh/docs/3.0/sql-reference/sql-functions/crytographic-functions/base64_decode_binary"}},a={},l=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",pre:"pre"},(0,r.ah)(),e.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.h1,{id:"aes_encrypt",children:"aes_encrypt"}),"\n",(0,c.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,c.jsxs)(n.p,{children:["\u4f7f\u7528 AES_128_ECB \u7b97\u6cd5\u5bf9\u5b57\u7b26\u4e32 ",(0,c.jsx)(n.code,{children:"str"})," \u8fdb\u884c\u52a0\u5bc6\u5e76\u8fd4\u56de\u4e00\u4e2a\u4e8c\u8fdb\u5236\u5b57\u7b26\u4e32\u3002"]}),"\n",(0,c.jsx)(n.p,{children:"AES \u5168\u79f0\u4e3a Advanced Encryption Standard\u3002ECB \u5168\u79f0\u4e3a Electronic Code Book\uff0c\u7535\u7801\u672c\u6a21\u5f0f\u3002\u8be5\u7b97\u6cd5\u4f7f\u7528\u4e00\u4e2a\u957f\u5ea6\u4e3a 128-bit \u7684 key \u5bf9\u5b57\u7b26\u4e32\u8fdb\u884c\u7f16\u7801\u3002"}),"\n",(0,c.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-Haskell",children:"aes_encrypt(str,key_str);\n"})}),"\n",(0,c.jsx)(n.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"str"}),": \u5f85\u52a0\u5bc6\u7684\u5b57\u7b26\u4e32\uff0c\u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u4e3a VARCHAR\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"key_str"}),": \u7528\u4e8e\u52a0\u5bc6 ",(0,c.jsx)(n.code,{children:"str"})," \u7684 key \u5b57\u7b26\u4e32\uff0c\u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u4e3a VARCHAR\u3002"]}),"\n",(0,c.jsx)(n.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,c.jsx)(n.p,{children:"\u8fd4\u56de\u503c\u7684\u6570\u636e\u7c7b\u578b\u4e3a VARCHAR\u3002\u5982\u679c\u8f93\u5165\u503c\u4e3a NULL\uff0c\u5219\u8fd4\u56de NULL\u3002"}),"\n",(0,c.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,c.jsxs)(n.p,{children:["\u5c06\u5b57\u7b26\u4e32 ",(0,c.jsx)(n.code,{children:"starrocks"})," \u8fdb\u884c AES \u7f16\u7801\uff0c\u5e76\u8f6c\u4e3a Base64 \u5b57\u7b26\u4e32\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"\nmysql> select to_base64(AES_ENCRYPT('starrocks','F3229A0B371ED2D9441B830D21A390C3'));\n+-------------------------------------------------------------------------+\n| to_base64(aes_encrypt('starrocks', 'F3229A0B371ED2D9441B830D21A390C3')) |\n+-------------------------------------------------------------------------+\n| uv/Lhzm74syo8JlfWarwKA==                                                |\n+-------------------------------------------------------------------------+\n1 row in set (0.01 sec)\n"})})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,c.jsx)(n,Object.assign({},e,{children:(0,c.jsx)(d,e)})):d(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>o,ah:()=>t});var c=s(67294);const r=c.createContext({});function t(e){const n=c.useContext(r);return c.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const i={};function o({components:e,children:n,disableParentContext:s}){let o;return o=s?"function"==typeof e?e({}):e||i:t(e),c.createElement(r.Provider,{value:o},n)}}}]);