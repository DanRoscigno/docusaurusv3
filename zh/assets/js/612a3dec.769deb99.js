"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[75877],{12245:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>a,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var r=s(85893),t=s(11151);const i={},c="hours_diff",o={id:"sql-reference/sql-functions/date-time-functions/hours_diff",title:"hours_diff",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.0/sql-reference/sql-functions/date-time-functions/hours_diff.md",sourceDirName:"sql-reference/sql-functions/date-time-functions",slug:"/sql-reference/sql-functions/date-time-functions/hours_diff",permalink:"/docusaurusv3/zh/docs/3.0/sql-reference/sql-functions/date-time-functions/hours_diff",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/sql-reference/sql-functions/date-time-functions/hours_diff.md",tags:[],version:"3.0",frontMatter:{},sidebar:"documentation",previous:{title:"hours_add",permalink:"/docusaurusv3/zh/docs/3.0/sql-reference/sql-functions/date-time-functions/hours_add"},next:{title:"hours_sub",permalink:"/docusaurusv3/zh/docs/3.0/sql-reference/sql-functions/date-time-functions/hours_sub"}},d={},u=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function l(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",pre:"pre"},(0,t.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"hours_diff",children:"hours_diff"}),"\n",(0,r.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,r.jsxs)(n.p,{children:["\u8ba1\u7b97\u5f00\u59cb\u65f6\u95f4\u548c\u7ed3\u675f\u65f6\u95f4\u76f8\u5dee\u591a\u5c11\u4e2a\u5c0f\u65f6 (",(0,r.jsx)(n.code,{children:"expr1"})," \u2212 ",(0,r.jsx)(n.code,{children:"expr2"}),")\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Haskell",children:"BIGINT hours_diff(DATETIME expr1,DATETIME expr2);\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"expr1"}),": \u7ed3\u675f\u65f6\u95f4\uff0c\u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u4e3a DATETIME\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"expr2"}),": \u5f00\u59cb\u65f6\u95f4\uff0c\u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u4e3a DATETIME\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,r.jsx)(n.p,{children:"\u8fd4\u56de\u503c\u7684\u6570\u636e\u7c7b\u578b\u4e3a BIGINT\u3002\u5982\u679c\u65e5\u671f\u4e0d\u5b58\u5728\uff0c\u5219\u8fd4\u56de NULL\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"select hours_diff('2010-11-30 23:59:59', '2010-11-30 20:58:59');\n+----------------------------------------------------------+\n| hours_diff('2010-11-30 23:59:59', '2010-11-30 20:58:59') |\n+----------------------------------------------------------+\n|                                                        3 |\n+----------------------------------------------------------+\n"})})]})}const a=function(e={}){const{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(l,e)})):l(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>o,ah:()=>i});var r=s(67294);const t=r.createContext({});function i(e){const n=r.useContext(t);return r.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const c={};function o({components:e,children:n,disableParentContext:s}){let o;return o=s?"function"==typeof e?e({}):e||c:i(e),r.createElement(t.Provider,{value:o},n)}}}]);