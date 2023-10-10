"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[30156],{2810:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>a,frontMatter:()=>c,metadata:()=>l,toc:()=>d});var r=s(85893),t=s(11151);const c={},i="hex_decode_string",l={id:"sql-reference/sql-functions/string-functions/hex_decode_string",title:"hex_decode_string",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.0/sql-reference/sql-functions/string-functions/hex_decode_string.md",sourceDirName:"sql-reference/sql-functions/string-functions",slug:"/sql-reference/sql-functions/string-functions/hex_decode_string",permalink:"/doc/zh/docs/3.0/sql-reference/sql-functions/string-functions/hex_decode_string",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/sql-reference/sql-functions/string-functions/hex_decode_string.md",tags:[],version:"3.0",frontMatter:{},sidebar:"documentation",previous:{title:"hex_decode_binary",permalink:"/doc/zh/docs/3.0/sql-reference/sql-functions/string-functions/hex_decode_binary"},next:{title:"instr",permalink:"/doc/zh/docs/3.0/sql-reference/sql-functions/string-functions/instr"}},o={},d=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u5173\u952e\u5b57",id:"\u5173\u952e\u5b57",level:2}];function h(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",pre:"pre",code:"code",ul:"ul",li:"li"},(0,t.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"hex_decode_string",children:"hex_decode_string"}),"\n",(0,r.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,r.jsxs)(n.p,{children:["\u5c06\u8f93\u5165\u5b57\u7b26\u4e32\u4e2d\u6bcf\u4e00\u5bf9\u5341\u516d\u8fdb\u5236\u6570\u5b57\u89e3\u6790\u4e3a\u4e00\u4e2a\u6570\u5b57\uff0c\u5e76\u5c06\u89e3\u6790\u5f97\u5230\u7684\u6570\u5b57\u8f6c\u6362\u4e3a\u8868\u793a\u8be5\u6570\u5b57\u7684\u5b57\u8282\uff0c\u7136\u540e\u8fd4\u56de\u4e00\u4e2a\u4e8c\u8fdb\u5236\u5b57\u7b26\u4e32\u3002\u8be5\u51fd\u6570\u662f ",(0,r.jsx)(n.a,{href:"/doc/zh/docs/3.0/sql-reference/sql-functions/string-functions/hex",children:"hex()"})," \u51fd\u6570\u7684\u53cd\u5411\u51fd\u6570\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u8be5\u51fd\u6570\u4ece 3.0 \u7248\u672c\u5f00\u59cb\u652f\u6301\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Haskell",children:"VARCHAR hex_decode_string(VARCHAR str);\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"str"}),"\uff1a\u8981\u89e3\u7801\u7684\u5b57\u7b26\u4e32\uff0c\u5fc5\u987b\u4e3a VARCHAR \u7c7b\u578b\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u5982\u679c\u53d1\u751f\u4ee5\u4e0b\u4efb\u4f55\u60c5\u51b5\uff0c\u5219\u8fd4\u56de\u4e00\u4e2a\u7a7a\u5b57\u7b26\u4e32\uff1a"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u8f93\u5165\u5b57\u7b26\u4e32\u7684\u957f\u5ea6\u4e3a 0\uff0c\u6216\u8f93\u5165\u5b57\u7b26\u4e32\u4e2d\u7684\u5b57\u7b26\u6570\u91cf\u4e3a\u5947\u6570\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u8f93\u5165\u5b57\u7b26\u4e32\u5305\u542b [0-9]\u3001[a-z] \u548c [A-Z] \u4ee5\u5916\u7684\u5b57\u7b26\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,r.jsx)(n.p,{children:"\u8fd4\u56de\u4e00\u4e2a VARCHAR \u7c7b\u578b\u7684\u503c\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Plain",children:"mysql> select hex_decode_string(hex(\"Hello StarRocks\"));\n+-------------------------------------------+\n| hex_decode_string(hex('Hello StarRocks')) |\n+-------------------------------------------+\n| Hello StarRocks                           |\n+-------------------------------------------+\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u5173\u952e\u5b57",children:"\u5173\u952e\u5b57"}),"\n",(0,r.jsx)(n.p,{children:"HEX_DECODE_STRING"})]})}const a=function(e={}){const{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(h,e)})):h(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>l,ah:()=>c});var r=s(67294);const t=r.createContext({});function c(e){const n=r.useContext(t);return r.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const i={};function l({components:e,children:n,disableParentContext:s}){let l;return l=s?"function"==typeof e?e({}):e||i:c(e),r.createElement(t.Provider,{value:l},n)}}}]);