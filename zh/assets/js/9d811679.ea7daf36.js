"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[87120],{16604:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>o});var r=s(85893),t=s(11151);const i={},c="rpad",l={id:"sql-reference/sql-functions/string-functions/rpad",title:"rpad",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.0/sql-reference/sql-functions/string-functions/rpad.md",sourceDirName:"sql-reference/sql-functions/string-functions",slug:"/sql-reference/sql-functions/string-functions/rpad",permalink:"/doc/zh/docs/3.0/sql-reference/sql-functions/string-functions/rpad",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/sql-reference/sql-functions/string-functions/rpad.md",tags:[],version:"3.0",frontMatter:{},sidebar:"documentation",previous:{title:"right",permalink:"/doc/zh/docs/3.0/sql-reference/sql-functions/string-functions/right"},next:{title:"rtrim",permalink:"/doc/zh/docs/3.0/sql-reference/sql-functions/string-functions/rtrim"}},d={},o=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function a(n){const e=Object.assign({h1:"h1",h2:"h2",p:"p",ul:"ul",li:"li",blockquote:"blockquote",strong:"strong",pre:"pre",code:"code"},(0,t.ah)(),n.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"rpad",children:"rpad"}),"\n",(0,r.jsx)(e.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,r.jsx)(e.p,{children:"\u6839\u636e\u6307\u5b9a\u7684\u957f\u5ea6\u5728\u5b57\u7b26\u4e32\u540e\u9762\uff08\u53f3\u4fa7\uff09\u8ffd\u52a0\u5b57\u7b26\u3002"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u5982\u679c len \u5927\u4e8e str \u7684\u957f\u5ea6\uff0c\u5219\u5728 str \u7684\u540e\u9762\u4e0d\u65ad\u8865\u5145 pad \u5b57\u7b26\uff0c\u76f4\u5230\u8be5\u5b57\u7b26\u4e32\u7684\u957f\u5ea6\u8fbe\u5230 len \u4e3a\u6b62\u3002"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u5982\u679c len \u5c0f\u4e8e str \u7684\u957f\u5ea6\uff0c\u8be5\u51fd\u6570\u76f8\u5f53\u4e8e\u622a\u65ad str \u5b57\u7b26\u4e32\uff0c\u53ea\u8fd4\u56de\u957f\u5ea6\u4e3a len \u7684\u5b57\u7b26\u4e32\u3002"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsxs)(e.p,{children:["\u6ce8: len \u6307\u7684\u662f ",(0,r.jsx)(e.strong,{children:"\u5b57\u7b26"})," \u957f\u5ea6\u800c\u4e0d\u662f\u5b57\u8282\u957f\u5ea6\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-Haskell",children:"rpad(str, len, pad)\n"})}),"\n",(0,r.jsx)(e.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"str"}),": \u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u4e3a VARCHAR\u3002"]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"len"}),": \u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u4e3a INT\u3002"]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"pad"}),": \u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u4e3a VARCHAR\u3002"]}),"\n",(0,r.jsx)(e.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,r.jsx)(e.p,{children:"\u8fd4\u56de\u503c\u7684\u6570\u636e\u7c7b\u578b\u4e3a VARCHAR\u3002"}),"\n",(0,r.jsx)(e.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-Plain",metastring:"Text",children:"MySQL > SELECT rpad(\"hi\", 5, \"xy\");\n+---------------------+\n| rpad('hi', 5, 'xy') |\n+---------------------+\n| hixyx               |\n+---------------------+\n\nMySQL > SELECT rpad(\"hi\", 1, \"xy\");\n+---------------------+\n| rpad('hi', 1, 'xy') |\n+---------------------+\n| h                   |\n+---------------------+\n"})})]})}const h=function(n={}){const{wrapper:e}=Object.assign({},(0,t.ah)(),n.components);return e?(0,r.jsx)(e,Object.assign({},n,{children:(0,r.jsx)(a,n)})):a(n)}},11151:(n,e,s)=>{s.d(e,{Zo:()=>l,ah:()=>i});var r=s(67294);const t=r.createContext({});function i(n){const e=r.useContext(t);return r.useMemo((()=>"function"==typeof n?n(e):{...e,...n}),[e,n])}const c={};function l({components:n,children:e,disableParentContext:s}){let l;return l=s?"function"==typeof n?n({}):n||c:i(n),r.createElement(t.Provider,{value:l},e)}}}]);