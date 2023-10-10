"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[84332],{56405:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>a,contentTitle:()=>o,default:()=>u,frontMatter:()=>t,metadata:()=>i,toc:()=>d});var c=n(85893),r=n(11151);const t={},o="base64_decode_string",i={id:"sql-reference/sql-functions/crytographic-functions/base64_decode_string",title:"base64_decode_string",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.1/sql-reference/sql-functions/crytographic-functions/base64_decode_string.md",sourceDirName:"sql-reference/sql-functions/crytographic-functions",slug:"/sql-reference/sql-functions/crytographic-functions/base64_decode_string",permalink:"/docusaurusv3/zh/docs/sql-reference/sql-functions/crytographic-functions/base64_decode_string",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-functions/crytographic-functions/base64_decode_string.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"base64_decode_binary",permalink:"/docusaurusv3/zh/docs/sql-reference/sql-functions/crytographic-functions/base64_decode_binary"},next:{title:"from_base64",permalink:"/docusaurusv3/zh/docs/sql-reference/sql-functions/crytographic-functions/from_base64"}},a={},d=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u5173\u952e\u5b57",id:"\u5173\u952e\u5b57",level:2}];function l(e){const s=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",pre:"pre",code:"code"},(0,r.ah)(),e.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(s.h1,{id:"base64_decode_string",children:"base64_decode_string"}),"\n",(0,c.jsx)(s.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,c.jsxs)(s.p,{children:["\u540c ",(0,c.jsx)(s.a,{href:"/docusaurusv3/zh/docs/sql-reference/sql-functions/crytographic-functions/from_base64",children:"from_base64()"})," \u51fd\u6570\uff0c\u7528\u4e8e\u89e3\u7801\u67d0\u4e2a Base64 \u7f16\u7801\u7684\u5b57\u7b26\u4e32\uff0c\u662f ",(0,c.jsx)(s.a,{href:"/docusaurusv3/zh/docs/sql-reference/sql-functions/crytographic-functions/to_base64",children:"to_base64()"})," \u51fd\u6570\u7684\u53cd\u5411\u51fd\u6570\u3002"]}),"\n",(0,c.jsx)(s.p,{children:"\u8be5\u51fd\u6570\u4ece 3.0 \u7248\u672c\u5f00\u59cb\u652f\u6301\u3002"}),"\n",(0,c.jsx)(s.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-Haskell",children:"VARCHAR base64_decode_string(VARCHAR str);\n"})}),"\n",(0,c.jsx)(s.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.code,{children:"str"}),"\uff1a\u8981\u89e3\u7801\u7684\u5b57\u7b26\u4e32\uff0c\u5fc5\u987b\u4e3a VARCHAR \u7c7b\u578b\u3002"]}),"\n",(0,c.jsx)(s.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,c.jsxs)(s.p,{children:["\u8fd4\u56de\u4e00\u4e2a VARCHAR \u7c7b\u578b\u7684\u503c\u3002\u5982\u679c\u8f93\u5165\u4e3a ",(0,c.jsx)(s.code,{children:"NULL"})," \u6216\u65e0\u6548\u7684 Base64 \u7f16\u7801\u5b57\u7b26\u4e32\uff0c\u5219\u8fd4\u56de ",(0,c.jsx)(s.code,{children:"NULL"}),"\u3002\u5982\u679c\u8f93\u5165\u4e3a\u7a7a\uff0c\u5219\u8fd4\u56de\u9519\u8bef\u6d88\u606f\u3002 \u8be5\u51fd\u6570\u53ea\u652f\u6301\u8f93\u5165\u4e00\u4e2a\u5b57\u7b26\u4e32\u3002\u8f93\u5165\u591a\u4e2a\u5b57\u7b26\u4e32\u4f1a\u5bfc\u81f4\u62a5\u9519\u3002"]}),"\n",(0,c.jsx)(s.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-Plain",children:"mysql> select base64_decode_string(to_base64(\"Hello StarRocks\"));\n+----------------------------------------------------+\n| base64_decode_string(to_base64('Hello StarRocks')) |\n+----------------------------------------------------+\n| Hello StarRocks                                    |\n+----------------------------------------------------+\n"})}),"\n",(0,c.jsx)(s.h2,{id:"\u5173\u952e\u5b57",children:"\u5173\u952e\u5b57"}),"\n",(0,c.jsx)(s.p,{children:"BASE64_DECODE_STRING"})]})}const u=function(e={}){const{wrapper:s}=Object.assign({},(0,r.ah)(),e.components);return s?(0,c.jsx)(s,Object.assign({},e,{children:(0,c.jsx)(l,e)})):l(e)}},11151:(e,s,n)=>{n.d(s,{Zo:()=>i,ah:()=>t});var c=n(67294);const r=c.createContext({});function t(e){const s=c.useContext(r);return c.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const o={};function i({components:e,children:s,disableParentContext:n}){let i;return i=n?"function"==typeof e?e({}):e||o:t(e),c.createElement(r.Provider,{value:i},s)}}}]);