"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[25438],{45409:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>u,frontMatter:()=>d,metadata:()=>r,toc:()=>l});var t=s(85893),i=s(11151);const d={},c="minutes_add",r={id:"sql-reference/sql-functions/date-time-functions/minutes_add",title:"minutes_add",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.1/sql-reference/sql-functions/date-time-functions/minutes_add.md",sourceDirName:"sql-reference/sql-functions/date-time-functions",slug:"/sql-reference/sql-functions/date-time-functions/minutes_add",permalink:"/doc/zh/docs/sql-reference/sql-functions/date-time-functions/minutes_add",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-functions/date-time-functions/minutes_add.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"minute",permalink:"/doc/zh/docs/sql-reference/sql-functions/date-time-functions/minute"},next:{title:"minutes_diff",permalink:"/doc/zh/docs/sql-reference/sql-functions/date-time-functions/minutes_diff"}},a={},l=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function o(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code"},(0,i.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"minutes_add",children:"minutes_add"}),"\n",(0,t.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,t.jsx)(n.p,{children:"\u7ed9\u6307\u5b9a\u7684\u65e5\u671f\u65f6\u95f4\u6216\u65e5\u671f\u589e\u52a0\u6307\u5b9a\u7684\u5206\u949f\u6570\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Haskell",children:"DATETIME minutes_add(DATETIME|DATE date, INT minutes);\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"date"}),": \u6307\u5b9a\u7684\u65f6\u95f4\uff0c\u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u4e3a DATETIME \u6216\u8005 DATE\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"minutes"}),": \u589e\u52a0\u7684\u5206\u949f\u70b9\u949f\u6570\uff0c\u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u4e3a INT\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,t.jsx)(n.p,{children:"\u8fd4\u56de\u503c\u7684\u6570\u636e\u7c7b\u578b\u4e3a DATETIME\u3002"}),"\n",(0,t.jsxs)(n.p,{children:["\u5982\u679c ",(0,t.jsx)(n.code,{children:"date"})," \u6216 ",(0,t.jsx)(n.code,{children:"minutes"})," \u4efb\u610f\u4e00\u8005\u4e3a NULL\uff0c\u5219\u8fd4\u56de NULL\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"select minutes_add('2022-01-01 01:01:01', 2);\n+---------------------------------------+\n| minutes_add('2022-01-01 01:01:01', 2) |\n+---------------------------------------+\n| 2022-01-01 01:03:01                   |\n+---------------------------------------+\n\nselect minutes_add('2022-01-01 01:01:01', -1);\n+----------------------------------------+\n| minutes_add('2022-01-01 01:01:01', -1) |\n+----------------------------------------+\n| 2022-01-01 01:00:01                    |\n+----------------------------------------+\n\nselect minutes_add('2022-01-01', 1);\n+------------------------------+\n| minutes_add('2022-01-01', 1) |\n+------------------------------+\n| 2022-01-01 00:01:00          |\n+------------------------------+\n"})})]})}const u=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(o,e)})):o(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>r,ah:()=>d});var t=s(67294);const i=t.createContext({});function d(e){const n=t.useContext(i);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const c={};function r({components:e,children:n,disableParentContext:s}){let r;return r=s?"function"==typeof e?e({}):e||c:d(e),t.createElement(i.Provider,{value:r},n)}}}]);