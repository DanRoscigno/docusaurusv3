"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[54885],{11410:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>t,metadata:()=>r,toc:()=>a});var d=s(85893),c=s(11151);const t={},o="seconds_add",r={id:"sql-reference/sql-functions/date-time-functions/seconds_add",title:"seconds_add",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.0/sql-reference/sql-functions/date-time-functions/seconds_add.md",sourceDirName:"sql-reference/sql-functions/date-time-functions",slug:"/sql-reference/sql-functions/date-time-functions/seconds_add",permalink:"/docusaurusv3/zh/docs/3.0/sql-reference/sql-functions/date-time-functions/seconds_add",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/sql-reference/sql-functions/date-time-functions/seconds_add.md",tags:[],version:"3.0",frontMatter:{},sidebar:"documentation",previous:{title:"second",permalink:"/docusaurusv3/zh/docs/3.0/sql-reference/sql-functions/date-time-functions/second"},next:{title:"seconds_diff",permalink:"/docusaurusv3/zh/docs/3.0/sql-reference/sql-functions/date-time-functions/seconds_diff"}},i={},a=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function l(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",pre:"pre"},(0,c.ah)(),e.components);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.h1,{id:"seconds_add",children:"seconds_add"}),"\n",(0,d.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,d.jsxs)(n.p,{children:["\u5411 ",(0,d.jsx)(n.code,{children:"expr1"})," \u6dfb\u52a0\u6307\u5b9a\u7684\u65f6\u95f4\u95f4\u9694\uff0c\u5355\u4f4d\u4e3a\u79d2\u3002"]}),"\n",(0,d.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-Haskell",children:"DATETIME seconds_add(DATETIME expr1,INT expr2);\n"})}),"\n",(0,d.jsx)(n.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"expr1"}),": \u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u4e3a DATETIME\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"expr2"}),": \u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u4e3a INT\uff0c\u5355\u4f4d\u4e3a\u79d2\u3002"]}),"\n",(0,d.jsx)(n.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,d.jsx)(n.p,{children:"\u8fd4\u56de\u503c\u7684\u6570\u636e\u7c7b\u578b\u4e3a DATETIME\u3002\u5982\u679c\u8f93\u5165\u503c\u4e3a DATE \u7c7b\u578b\uff0c\u5219\u65f6-\u5206-\u79d2\u90e8\u5206\u9ed8\u8ba4\u6309\u7167 00:00:00 \u5904\u7406\u3002"}),"\n",(0,d.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"select seconds_add('2010-11-30 23:50:50', 2);\n+---------------------------------------+\n| seconds_add('2010-11-30 23:50:50', 2) |\n+---------------------------------------+\n| 2010-11-30 23:50:52                   |\n+---------------------------------------+\n\nselect seconds_add('2010-11-30', 2);\n+------------------------------+\n| seconds_add('2010-11-30', 2) |\n+------------------------------+\n| 2010-11-30 00:00:02          |\n+------------------------------+\n"})})]})}const u=function(e={}){const{wrapper:n}=Object.assign({},(0,c.ah)(),e.components);return n?(0,d.jsx)(n,Object.assign({},e,{children:(0,d.jsx)(l,e)})):l(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>r,ah:()=>t});var d=s(67294);const c=d.createContext({});function t(e){const n=d.useContext(c);return d.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const o={};function r({components:e,children:n,disableParentContext:s}){let r;return r=s?"function"==typeof e?e({}):e||o:t(e),d.createElement(c.Provider,{value:r},n)}}}]);