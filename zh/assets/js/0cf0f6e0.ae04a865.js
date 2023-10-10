"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[40886],{94678:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>t,toc:()=>o});var r=s(85893),c=s(11151);const l={},i="lpad",t={id:"sql-reference/sql-functions/string-functions/lpad",title:"lpad",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.0/sql-reference/sql-functions/string-functions/lpad.md",sourceDirName:"sql-reference/sql-functions/string-functions",slug:"/sql-reference/sql-functions/string-functions/lpad",permalink:"/docusaurusv3/zh/docs/3.0/sql-reference/sql-functions/string-functions/lpad",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/sql-reference/sql-functions/string-functions/lpad.md",tags:[],version:"3.0",frontMatter:{},sidebar:"documentation",previous:{title:"lower",permalink:"/docusaurusv3/zh/docs/3.0/sql-reference/sql-functions/string-functions/lower"},next:{title:"ltrim",permalink:"/docusaurusv3/zh/docs/3.0/sql-reference/sql-functions/string-functions/ltrim"}},d={},o=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function a(n){const e=Object.assign({h1:"h1",h2:"h2",p:"p",ul:"ul",li:"li",code:"code",pre:"pre",strong:"strong"},(0,c.ah)(),n.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"lpad",children:"lpad"}),"\n",(0,r.jsx)(e.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,r.jsx)(e.p,{children:"\u6839\u636e\u6307\u5b9a\u7684\u957f\u5ea6\u5728\u5b57\u7b26\u4e32\u524d\u9762\uff08\u5de6\u4fa7\uff09\u8ffd\u52a0\u5b57\u7b26\u3002"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\u82e5 ",(0,r.jsx)(e.code,{children:"len"})," \u5927\u4e8e ",(0,r.jsx)(e.code,{children:"str"})," \u7684\u957f\u5ea6\uff0c\u5728 ",(0,r.jsx)(e.code,{children:"str"})," \u7684\u524d\u9762\u4e0d\u65ad\u8865\u5145 ",(0,r.jsx)(e.code,{children:"pad"})," \u5b57\u7b26\uff0c\u76f4\u5230\u8be5\u5b57\u7b26\u4e32\u7684\u957f\u5ea6\u8fbe\u5230 ",(0,r.jsx)(e.code,{children:"len"})," \u4e3a\u6b62\u3002"]}),"\n",(0,r.jsxs)(e.li,{children:["\u82e5 ",(0,r.jsx)(e.code,{children:"len"})," \u5c0f\u4e8e ",(0,r.jsx)(e.code,{children:"str"})," \u7684\u957f\u5ea6\uff0c\u8be5\u51fd\u6570\u76f8\u5f53\u4e8e\u622a\u65ad ",(0,r.jsx)(e.code,{children:"str"})," \u5b57\u7b26\u4e32\uff0c\u53ea\u8fd4\u56de\u957f\u5ea6\u4e3a ",(0,r.jsx)(e.code,{children:"len"})," \u7684\u5b57\u7b26\u4e32\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-Haskell",children:"lpad(str, len, pad)\n"})}),"\n",(0,r.jsx)(e.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"str"}),": \u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u4e3a VARCHAR\u3002"]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"len"}),": \u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u4e3a INT\uff0c\u6307\u7684\u662f ",(0,r.jsx)(e.strong,{children:"\u5b57\u7b26"})," \u957f\u5ea6\u800c\u4e0d\u662f\u5b57\u8282\u957f\u5ea6\u3002"]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"pad"}),": \u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u4e3a VARCHAR\u3002"]}),"\n",(0,r.jsx)(e.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,r.jsx)(e.p,{children:"\u8fd4\u56de\u503c\u7684\u6570\u636e\u7c7b\u578b\u4e3a VARCHAR\u3002"}),"\n",(0,r.jsx)(e.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-Plain",metastring:"Text",children:"MySQL > SELECT lpad(\"hi\", 5, \"xy\");\n+---------------------+\n| lpad('hi', 5, 'xy') |\n+---------------------+\n| xyxhi               |\n+---------------------+\n\nMySQL > SELECT lpad(\"hi\", 1, \"xy\");\n+---------------------+\n| lpad('hi', 1, 'xy') |\n+---------------------+\n| h                   |\n+---------------------+\n"})})]})}const u=function(n={}){const{wrapper:e}=Object.assign({},(0,c.ah)(),n.components);return e?(0,r.jsx)(e,Object.assign({},n,{children:(0,r.jsx)(a,n)})):a(n)}},11151:(n,e,s)=>{s.d(e,{Zo:()=>t,ah:()=>l});var r=s(67294);const c=r.createContext({});function l(n){const e=r.useContext(c);return r.useMemo((()=>"function"==typeof n?n(e):{...e,...n}),[e,n])}const i={};function t({components:n,children:e,disableParentContext:s}){let t;return t=s?"function"==typeof n?n({}):n||i:l(n),r.createElement(c.Provider,{value:t},e)}}}]);