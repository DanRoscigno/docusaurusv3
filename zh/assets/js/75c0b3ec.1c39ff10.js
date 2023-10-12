"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[72850],{5580:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>t,metadata:()=>r,toc:()=>l});var c=s(85893),d=s(11151);const t={},i="microseconds_add",r={id:"sql-reference/sql-functions/date-time-functions/microseconds_add",title:"microseconds_add",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.0/sql-reference/sql-functions/date-time-functions/microseconds_add.md",sourceDirName:"sql-reference/sql-functions/date-time-functions",slug:"/sql-reference/sql-functions/date-time-functions/microseconds_add",permalink:"/doc/zh/docs/3.0/sql-reference/sql-functions/date-time-functions/microseconds_add",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/sql-reference/sql-functions/date-time-functions/microseconds_add.md",tags:[],version:"3.0",frontMatter:{},sidebar:"Chinese31",previous:{title:"last_day",permalink:"/doc/zh/docs/3.0/sql-reference/sql-functions/date-time-functions/last_day"},next:{title:"microseconds_sub",permalink:"/doc/zh/docs/3.0/sql-reference/sql-functions/date-time-functions/microseconds_sub"}},o={},l=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function a(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",pre:"pre"},(0,d.ah)(),e.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.h1,{id:"microseconds_add",children:"microseconds_add"}),"\n",(0,c.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,c.jsxs)(n.p,{children:["\u5411 ",(0,c.jsx)(n.code,{children:"expr1"})," \u6dfb\u52a0\u6307\u5b9a\u7684\u65f6\u95f4\u95f4\u9694\uff0c\u5355\u4f4d\u4e3a\u5fae\u79d2\u3002"]}),"\n",(0,c.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-Haskell",children:"DATETIME microseconds_add(DATETIME expr1,INT expr2);\n"})}),"\n",(0,c.jsx)(n.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"expr1"}),": \u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u4e3a DATETIME\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"expr2"}),": \u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u4e3a INT\uff0c\u5355\u4f4d\u4e3a\u5fae\u79d2\u3002"]}),"\n",(0,c.jsx)(n.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,c.jsx)(n.p,{children:"\u8fd4\u56de\u503c\u7684\u6570\u636e\u7c7b\u578b\u4e3a DATETIME\u3002\u5982\u679c\u8f93\u5165\u503c\u4e3a DATE \u7c7b\u578b\uff0c\u5219\u65f6-\u5206-\u79d2\u90e8\u5206\u9ed8\u8ba4\u6309\u7167 00:00:00 \u5904\u7406\u3002"}),"\n",(0,c.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"select microseconds_add('2010-11-30 23:50:50', 2);\n+--------------------------------------------+\n| microseconds_add('2010-11-30 23:50:50', 2) |\n+--------------------------------------------+\n| 2010-11-30 23:50:50.000002                 |\n+--------------------------------------------+\n1 row in set (0.00 sec)\n\nselect microseconds_add('2010-11-30', 2);\n+-----------------------------------+\n| microseconds_add('2010-11-30', 2) |\n+-----------------------------------+\n| 2010-11-30 00:00:00.000002        |\n+-----------------------------------+\n"})})]})}const u=function(e={}){const{wrapper:n}=Object.assign({},(0,d.ah)(),e.components);return n?(0,c.jsx)(n,Object.assign({},e,{children:(0,c.jsx)(a,e)})):a(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>r,ah:()=>t});var c=s(67294);const d=c.createContext({});function t(e){const n=c.useContext(d);return c.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const i={};function r({components:e,children:n,disableParentContext:s}){let r;return r=s?"function"==typeof e?e({}):e||i:t(e),c.createElement(d.Provider,{value:r},n)}}}]);