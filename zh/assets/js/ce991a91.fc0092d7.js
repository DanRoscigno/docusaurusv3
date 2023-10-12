"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[37051],{37914:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var t=s(85893),c=s(11151);const r={},i="hex",o={id:"sql-reference/sql-functions/string-functions/hex",title:"hex",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.1/sql-reference/sql-functions/string-functions/hex.md",sourceDirName:"sql-reference/sql-functions/string-functions",slug:"/sql-reference/sql-functions/string-functions/hex",permalink:"/doc/zh/docs/sql-reference/sql-functions/string-functions/hex",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-functions/string-functions/hex.md",tags:[],version:"3.1",frontMatter:{},sidebar:"Chinese31",previous:{title:"group_concat",permalink:"/doc/zh/docs/sql-reference/sql-functions/string-functions/group_concat"},next:{title:"hex_decode_binary",permalink:"/doc/zh/docs/sql-reference/sql-functions/string-functions/hex_decode_binary"}},l={},d=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function a(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",pre:"pre"},(0,c.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"hex",children:"hex"}),"\n",(0,t.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,t.jsxs)(n.p,{children:["\u82e5\u53c2\u6570 ",(0,t.jsx)(n.code,{children:"x"})," \u662f\u6570\u5b57\uff0c\u5219\u8fd4\u56de\u5341\u516d\u8fdb\u5236\u503c\u7684\u5b57\u7b26\u4e32\u8868\u793a\u5f62\u5f0f\uff1b\u82e5\u53c2\u6570 ",(0,t.jsx)(n.code,{children:"x"})," \u662f\u5b57\u7b26\u4e32\uff0c\u5219\u5c06\u6bcf\u4e2a\u5b57\u7b26\u8f6c\u5316\u4e3a\u4e24\u4e2a\u5341\u516d\u8fdb\u5236\u7684\u5b57\u7b26\uff0c\u5c06\u8f6c\u5316\u540e\u7684\u6240\u6709\u5b57\u7b26\u62fc\u63a5\u4e3a\u5b57\u7b26\u4e32\u8f93\u51fa\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Haskell",children:"HEX(x);\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"x"}),": \u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u4e3a BIGINT\u3001VARCHAR\u3001VARBINARY (v3.0 \u53ca\u4ee5\u540e)\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,t.jsx)(n.p,{children:"\u8fd4\u56de\u503c\u7684\u6570\u636e\u7c7b\u578b\u4e3a VARCHAR\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"mysql> select hex(3);\n+--------+\n| hex(3) |\n+--------+\n| 3      |\n+--------+\n1 row in set (0.00 sec)\n\nmysql> select hex('3');\n+----------+\n| hex('3') |\n+----------+\n| 33       |\n+----------+\n1 row in set (0.00 sec)\n\n-- \u8f93\u5165\u503c\u4e3a VARBINARY \u7c7b\u578b\u3002\nmysql> select hex(x'abab');\n+-------------+\n| hex('ABAB') |\n+-------------+\n| ABAB        |\n+-------------+\n"})})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,c.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(a,e)})):a(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>o,ah:()=>r});var t=s(67294);const c=t.createContext({});function r(e){const n=t.useContext(c);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const i={};function o({components:e,children:n,disableParentContext:s}){let o;return o=s?"function"==typeof e?e({}):e||i:r(e),t.createElement(c.Provider,{value:o},n)}}}]);