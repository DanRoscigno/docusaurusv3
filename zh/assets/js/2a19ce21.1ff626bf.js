"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[7604],{76259:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>a});var s=t(85893),d=t(11151);const r={},c="next_day",i={id:"sql-reference/sql-functions/date-time-functions/next_day",title:"next_day",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.1/sql-reference/sql-functions/date-time-functions/next_day.md",sourceDirName:"sql-reference/sql-functions/date-time-functions",slug:"/sql-reference/sql-functions/date-time-functions/next_day",permalink:"/docusaurusv3/zh/docs/latest/sql-reference/sql-functions/date-time-functions/next_day",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-functions/date-time-functions/next_day.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"months_sub",permalink:"/docusaurusv3/zh/docs/latest/sql-reference/sql-functions/date-time-functions/months_sub"},next:{title:"now, current_timestamp, localtime, localtimestamp",permalink:"/docusaurusv3/zh/docs/latest/sql-reference/sql-functions/date-time-functions/now"}},l={},a=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"keyword",id:"keyword",level:2}];function o(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",a:"a",pre:"pre",ul:"ul",li:"li",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,d.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"next_day",children:"next_day"}),"\n",(0,s.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,s.jsxs)(n.p,{children:["\u6839\u636e\u8f93\u5165\u7684\u65e5\u671f\u503c\uff0c\u8fd4\u56de\u5b83\u4e4b\u540e\u7684\u90a3\u4e2a\u661f\u671f\u51e0\u6240\u5bf9\u5e94\u7684\u65e5\u671f\u3002\u6bd4\u5982 ",(0,s.jsx)(n.code,{children:"next_day('2023-04-06', 'Monday')"})," \u8fd4\u56de '2023-04-06' \u4e4b\u540e\u7684\u90a3\u4e2a\u661f\u671f\u4e00\u6240\u5bf9\u5e94\u7684\u65e5\u671f\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u8be5\u51fd\u6570\u4ece 3.1 \u7248\u672c\u5f00\u59cb\u652f\u6301\u3002\u76f8\u53cd\u51fd\u6570\u4e3a ",(0,s.jsx)(n.a,{href:"/docusaurusv3/zh/docs/latest/sql-reference/sql-functions/date-time-functions/previous_day",children:"previous_day"}),"\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"DATE next_day(DATETIME|DATE date_expr, VARCHAR dow)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"date_expr"}),"\uff1a\u8f93\u5165\u7684\u65e5\u671f\u503c\uff0c\u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u4e3a DATE \u6216 DATETIME\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"dow"}),"\uff1a\u661f\u671f\u51e0\u3002\u6709\u6548\u503c\u4e3a\u661f\u671f\u548c\u4ee5\u4e0b\u7f29\u5199\u5f62\u5f0f\uff0c\u533a\u5206\u5927\u5c0f\u5199\u3002"]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"DOW_FULL"}),(0,s.jsx)(n.th,{children:"DOW_2"}),(0,s.jsx)(n.th,{align:"center",children:"DOW_3"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Sunday"}),(0,s.jsx)(n.td,{children:"Su"}),(0,s.jsx)(n.td,{align:"center",children:"Sun"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Monday"}),(0,s.jsx)(n.td,{children:"Mo"}),(0,s.jsx)(n.td,{align:"center",children:"Mon"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Tuesday"}),(0,s.jsx)(n.td,{children:"Tu"}),(0,s.jsx)(n.td,{align:"center",children:"Tue"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Wednesday"}),(0,s.jsx)(n.td,{children:"We"}),(0,s.jsx)(n.td,{align:"center",children:"Wed"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thursday"}),(0,s.jsx)(n.td,{children:"Th"}),(0,s.jsx)(n.td,{align:"center",children:"Thu"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Friday"}),(0,s.jsx)(n.td,{children:"Fr"}),(0,s.jsx)(n.td,{align:"center",children:"Fri"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Saturday"}),(0,s.jsx)(n.td,{children:"Sa"}),(0,s.jsx)(n.td,{align:"center",children:"Sat"})]})]})]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,s.jsx)(n.p,{children:"\u8fd4\u56de\u4e00\u4e2a\u65e5\u671f\u503c\u3002"}),"\n",(0,s.jsxs)(n.p,{children:["\u5982\u679c ",(0,s.jsx)(n.code,{children:"dow"})," \u8f93\u5165\u503c\u975e\u6cd5\uff0c\u4f1a\u8fd4\u56de\u62a5\u9519\u3002",(0,s.jsx)(n.code,{children:"dow"})," \u533a\u5206\u5927\u5c0f\u5199\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u5982\u679c\u8f93\u5165\u7684\u65e5\u671f\u503c\u975e\u6cd5\u6216\u8005\u8f93\u5165\u7684\u65e5\u671f\u4e3a NULL\uff0c\u5219\u8fd4\u56de NULL\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plain",children:"-- \u8fd4\u56de 2023-04-06 \u4e4b\u540e\u7684\u90a3\u4e2a\u661f\u671f\u4e00\u6240\u5bf9\u5e94\u7684\u65e5\u671f\u30022023-04-06 \u4e3a\u5468\u56db\uff0c\u5b83\u4e4b\u540e\u7684\u661f\u671f\u4e00\u6240\u5bf9\u5e94\u7684\u65e5\u671f\u4e3a 2023-04-10\u3002\n\nMySQL > select next_day('2023-04-06', 'Monday');\n+----------------------------------+\n| next_day('2023-04-06', 'Monday') |\n+----------------------------------+\n| 2023-04-10                       |\n+----------------------------------+\n\nMySQL > select next_day('2023-04-06', 'Tue');\n+-------------------------------+\n| next_day('2023-04-06', 'Tue') |\n+-------------------------------+\n| 2023-04-11                    |\n+-------------------------------+\n\nMySQL > select next_day('2023-04-06 20:13:14', 'Fr');\n+---------------------------------------+\n| next_day('2023-04-06 20:13:14', 'Fr') |\n+---------------------------------------+\n| 2023-04-07                            |\n+---------------------------------------+\n"})}),"\n",(0,s.jsx)(n.h2,{id:"keyword",children:"keyword"}),"\n",(0,s.jsx)(n.p,{children:"NEXT_DAY, NEXT"})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,d.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(o,e)})):o(e)}},11151:(e,n,t)=>{t.d(n,{Zo:()=>i,ah:()=>r});var s=t(67294);const d=s.createContext({});function r(e){const n=s.useContext(d);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const c={};function i({components:e,children:n,disableParentContext:t}){let i;return i=t?"function"==typeof e?e({}):e||c:r(e),s.createElement(d.Provider,{value:i},n)}}}]);