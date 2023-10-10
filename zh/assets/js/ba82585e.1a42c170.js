"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[20849],{48678:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>a,contentTitle:()=>d,default:()=>u,frontMatter:()=>c,metadata:()=>r,toc:()=>l});var t=s(85893),i=s(11151);const c={},d="days_sub",r={id:"sql-reference/sql-functions/date-time-functions/days_sub",title:"days_sub",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.0/sql-reference/sql-functions/date-time-functions/days_sub.md",sourceDirName:"sql-reference/sql-functions/date-time-functions",slug:"/sql-reference/sql-functions/date-time-functions/days_sub",permalink:"/docusaurusv3/zh/docs/3.0/sql-reference/sql-functions/date-time-functions/days_sub",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/sql-reference/sql-functions/date-time-functions/days_sub.md",tags:[],version:"3.0",frontMatter:{},sidebar:"documentation",previous:{title:"days_diff",permalink:"/docusaurusv3/zh/docs/3.0/sql-reference/sql-functions/date-time-functions/days_diff"},next:{title:"from_days",permalink:"/docusaurusv3/zh/docs/3.0/sql-reference/sql-functions/date-time-functions/from_days"}},a={},l=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u5173\u952e\u5b57",id:"\u5173\u952e\u5b57",level:2}];function o(n){const e=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code"},(0,i.ah)(),n.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"days_sub",children:"days_sub"}),"\n",(0,t.jsx)(e.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,t.jsx)(e.p,{children:"\u4ece\u7ed9\u5b9a\u65e5\u671f\u6216\u8005\u65e5\u671f\u65f6\u95f4\u4e2d\u51cf\u53bb\u6307\u5b9a\u7684\u5929\u6570\uff0c\u83b7\u5f97\u65b0\u7684 DATETIME \u7ed3\u679c\u3002"}),"\n",(0,t.jsx)(e.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-Haskell",children:"DATETIME days_sub(DATETIME|DATE date, INT n);\n"})}),"\n",(0,t.jsx)(e.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"date"}),": DATE \u6216\u8005 DATETIME \u7c7b\u578b\u7684\u8868\u8fbe\u5f0f\u3002"]}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"n"}),": \u8981\u51cf\u53bb\u7684\u6307\u5b9a\u5929\u6570\u3002"]}),"\n",(0,t.jsx)(e.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,t.jsx)(e.p,{children:"\u8fd4\u56de\u4e00\u4e2aDATETIME\u7c7b\u578b\u7684\u7ed3\u679c\u3002"}),"\n",(0,t.jsx)(e.p,{children:"\u5982\u679c\u4efb\u4e00\u53c2\u6570\u4e3a NULL \u6216\u8005\u4e0d\u5408\u6cd5\uff0c\u5219\u8fd4\u56de NULL\u3002"}),"\n",(0,t.jsx)(e.p,{children:"\u5f53\u8ba1\u7b97\u7ed3\u679c\u8d85\u51fa [0000-01-01 00:00:00, 9999-12-31 00:00:00]\u7684\u8303\u56f4\uff0c\u5219\u8fd4\u56de NULL\u3002"}),"\n",(0,t.jsx)(e.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-Plain",metastring:"Text",children:"SELECT DAYS_SUB('2022-12-20 12:00:00', 10);\n+--------------------------------------------------+\n| days_sub('2022-12-20 12:00:00', INTERVAL 10 DAY) |\n+--------------------------------------------------+\n| 2022-12-10 12:00:00                              |\n+--------------------------------------------------+\n\nSELECT DAYS_SUB('2022-12-20 12:00:00', -10);\n+---------------------------------------------------+\n| days_sub('2022-12-20 12:00:00', INTERVAL -10 DAY) |\n+---------------------------------------------------+\n| 2022-12-30 12:00:00                               |\n+---------------------------------------------------+\n\nSELECT DAYS_SUB('2022-12-20 12:00:00', 738874);\n+------------------------------------------------------+\n| days_sub('2022-12-20 12:00:00', INTERVAL 738874 DAY) |\n+------------------------------------------------------+\n| 0000-01-01 12:00:00                                  |\n+------------------------------------------------------+\n\nSELECT DAYS_SUB('2022-12-20 12:00:00', 738875);\n+------------------------------------------------------+\n| days_sub('2022-12-20 12:00:00', INTERVAL 738875 DAY) |\n+------------------------------------------------------+\n| NULL                                                 |\n+------------------------------------------------------+\n\nSELECT DAYS_SUB('2022-12-20 12:00:00', -2913550);\n+--------------------------------------------------------+\n| days_sub('2022-12-20 12:00:00', INTERVAL -2913550 DAY) |\n+--------------------------------------------------------+\n| 9999-12-31 12:00:00                                    |\n+--------------------------------------------------------+\n\nSELECT DAYS_SUB('2022-12-20 12:00:00', -2913551);\n+--------------------------------------------------------+\n| days_sub('2022-12-20 12:00:00', INTERVAL -2913551 DAY) |\n+--------------------------------------------------------+\n| NULL                                                   |\n+--------------------------------------------------------+\n"})}),"\n",(0,t.jsx)(e.h2,{id:"\u5173\u952e\u5b57",children:"\u5173\u952e\u5b57"}),"\n",(0,t.jsx)(e.p,{children:"DAY,day"})]})}const u=function(n={}){const{wrapper:e}=Object.assign({},(0,i.ah)(),n.components);return e?(0,t.jsx)(e,Object.assign({},n,{children:(0,t.jsx)(o,n)})):o(n)}},11151:(n,e,s)=>{s.d(e,{Zo:()=>r,ah:()=>c});var t=s(67294);const i=t.createContext({});function c(n){const e=t.useContext(i);return t.useMemo((()=>"function"==typeof n?n(e):{...e,...n}),[e,n])}const d={};function r({components:n,children:e,disableParentContext:s}){let r;return r=s?"function"==typeof n?n({}):n||d:c(n),t.createElement(i.Provider,{value:r},e)}}}]);