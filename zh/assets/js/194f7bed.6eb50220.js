"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[73277],{75454:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>r,contentTitle:()=>o,default:()=>a,frontMatter:()=>d,metadata:()=>i,toc:()=>l});var c=n(85893),t=n(11151);const d={},o="seconds_sub",i={id:"sql-reference/sql-functions/date-time-functions/seconds_sub",title:"seconds_sub",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.0/sql-reference/sql-functions/date-time-functions/seconds_sub.md",sourceDirName:"sql-reference/sql-functions/date-time-functions",slug:"/sql-reference/sql-functions/date-time-functions/seconds_sub",permalink:"/doc/zh/docs/3.0/sql-reference/sql-functions/date-time-functions/seconds_sub",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/sql-reference/sql-functions/date-time-functions/seconds_sub.md",tags:[],version:"3.0",frontMatter:{},sidebar:"Chinese31",previous:{title:"seconds_diff",permalink:"/doc/zh/docs/3.0/sql-reference/sql-functions/date-time-functions/seconds_diff"},next:{title:"str2date",permalink:"/doc/zh/docs/3.0/sql-reference/sql-functions/date-time-functions/str2date"}},r={},l=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function u(e){const s=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code"},(0,t.ah)(),e.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(s.h1,{id:"seconds_sub",children:"seconds_sub"}),"\n",(0,c.jsx)(s.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,c.jsx)(s.p,{children:"\u7ed9\u6307\u5b9a\u7684\u65e5\u671f\u65f6\u95f4\u6216\u65e5\u671f\u51cf\u53bb\u6307\u5b9a\u7684\u79d2\u6570\u3002"}),"\n",(0,c.jsx)(s.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-Haskell",children:"DATETIME seconds_sub(DATETIME|DATE date, INT seconds);\n"})}),"\n",(0,c.jsx)(s.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.code,{children:"date"}),": \u6307\u5b9a\u7684\u65f6\u95f4\uff0c\u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u4e3a DATETIME \u6216\u8005 DATE\u3002"]}),"\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.code,{children:"seconds"}),": \u51cf\u5c11\u7684\u79d2\u6570\uff0c\u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u4e3a INT\u3002"]}),"\n",(0,c.jsx)(s.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,c.jsx)(s.p,{children:"\u8fd4\u56de\u503c\u7684\u6570\u636e\u7c7b\u578b\u4e3a DATETIME\u3002"}),"\n",(0,c.jsxs)(s.p,{children:["\u5982\u679c ",(0,c.jsx)(s.code,{children:"date"})," \u6216 ",(0,c.jsx)(s.code,{children:"seconds"})," \u4efb\u610f\u4e00\u8005\u4e3a NULL\uff0c\u5219\u8fd4\u56de NULL\u3002"]}),"\n",(0,c.jsx)(s.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-Plain",metastring:"Text",children:"select seconds_sub('2022-01-01 01:01:01', 2);\n+---------------------------------------+\n| seconds_sub('2022-01-01 01:01:01', 2) |\n+---------------------------------------+\n| 2022-01-01 01:00:59                   |\n+---------------------------------------+\n\nselect seconds_sub('2022-01-01 01:01:01', -1);\n+----------------------------------------+\n| seconds_sub('2022-01-01 01:01:01', -1) |\n+----------------------------------------+\n| 2022-01-01 01:01:02                    |\n+----------------------------------------+\n\nselect seconds_sub('2022-01-01', 1);\n+------------------------------+\n| seconds_sub('2022-01-01', 1) |\n+------------------------------+\n| 2021-12-31 23:59:59          |\n+------------------------------+\n"})})]})}const a=function(e={}){const{wrapper:s}=Object.assign({},(0,t.ah)(),e.components);return s?(0,c.jsx)(s,Object.assign({},e,{children:(0,c.jsx)(u,e)})):u(e)}},11151:(e,s,n)=>{n.d(s,{Zo:()=>i,ah:()=>d});var c=n(67294);const t=c.createContext({});function d(e){const s=c.useContext(t);return c.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const o={};function i({components:e,children:s,disableParentContext:n}){let i;return i=n?"function"==typeof e?e({}):e||o:d(e),c.createElement(t.Provider,{value:i},s)}}}]);