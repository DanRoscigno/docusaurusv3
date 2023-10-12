"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[46607],{76638:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>r,contentTitle:()=>d,default:()=>h,frontMatter:()=>c,metadata:()=>l,toc:()=>a});var t=s(85893),i=s(11151);const c={},d="date_slice",l={id:"sql-reference/sql-functions/date-time-functions/date_slice",title:"date_slice",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.5/sql-reference/sql-functions/date-time-functions/date_slice.md",sourceDirName:"sql-reference/sql-functions/date-time-functions",slug:"/sql-reference/sql-functions/date-time-functions/date_slice",permalink:"/doc/zh/docs/2.5/sql-reference/sql-functions/date-time-functions/date_slice",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-2.5/sql-reference/sql-functions/date-time-functions/date_slice.md",tags:[],version:"2.5",frontMatter:{},sidebar:"Chinese31",previous:{title:"date_format",permalink:"/doc/zh/docs/2.5/sql-reference/sql-functions/date-time-functions/date_format"},next:{title:"date_sub",permalink:"/doc/zh/docs/2.5/sql-reference/sql-functions/date-time-functions/date_sub"}},r={},a=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function o(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",ul:"ul",li:"li"},(0,i.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"date_slice",children:"date_slice"}),"\n",(0,t.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,t.jsx)(n.p,{children:"\u6839\u636e\u6307\u5b9a\u7684\u65f6\u95f4\u7c92\u5ea6\u5468\u671f\uff0c\u5c06\u7ed9\u5b9a\u7684\u65f6\u95f4\u8f6c\u5316\u5230\u5176\u6240\u5728\u7684\u65f6\u95f4\u7c92\u5ea6\u5468\u671f\u7684\u8d77\u59cb\u6216\u7ed3\u675f\u65f6\u523b\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u8be5\u51fd\u6570\u4ece 2.5 \u7248\u672c\u5f00\u59cb\u652f\u6301\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Haskell",children:"DATE date_slice(DATE dt, INTERVAL N type[, boundary])\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"dt"}),"\uff1a\u9700\u8981\u8f6c\u5316\u7684\u65f6\u95f4\u3002\u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u4e3a DATE\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"INTERVAL N type"}),"\uff1a\u65f6\u95f4\u7c92\u5ea6\u5468\u671f\uff0c\u4f8b\u5982 ",(0,t.jsx)(n.code,{children:"interval 5 day"})," \u8868\u793a\u65f6\u95f4\u7c92\u5ea6\u4e3a 5 \u5929\u3002","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"N"})," \u662f INT \u7c7b\u578b\u7684\u65f6\u95f4\u5468\u671f\u7684\u957f\u5ea6\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"type"})," \u662f\u65f6\u95f4\u7c92\u5ea6\u5468\u671f\u7684\u5355\u4f4d\uff0c\u53d6\u503c\u53ef\u4ee5\u662f YEAR\uff0cQUARTER\uff0cMONTH\uff0cWEEK\uff0cDAY\u3002 \u5bf9\u4e8e DATE \u7c7b\u578b\u7684\u8f93\u5165\u503c\uff0c",(0,t.jsx)(n.code,{children:"type"})," \u4e0d\u80fd\u4e3a\u65f6\u5206\u79d2\uff0c\u5426\u5219\u8fd4\u56de\u62a5\u9519\u3002"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"boundary"}),"\uff1a\u53ef\u9009\uff0c\u7528\u4e8e\u6307\u5b9a\u8fd4\u56de\u65f6\u95f4\u5468\u671f\u7684\u8d77\u59cb\u65f6\u523b (FLOOR) \u8fd8\u662f\u7ed3\u675f\u65f6\u523b (CEIL)\u3002\u53d6\u503c\u8303\u56f4\uff1aFLOOR\uff0cCEIL\u3002\u5982\u679c\u4e0d\u6307\u5b9a\uff0c\u9ed8\u8ba4\u4e3a FLOOR\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,t.jsx)(n.p,{children:"\u8fd4\u56de\u503c\u7684\u6570\u636e\u7c7b\u578b\u4e3a DATE\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u6ce8\u610f\u4e8b\u9879",children:"\u6ce8\u610f\u4e8b\u9879"}),"\n",(0,t.jsxs)(n.p,{children:["\u65f6\u95f4\u7c92\u5ea6\u5468\u671f\u4ece\u516c\u5143",(0,t.jsx)(n.code,{children:"0001-01-01"}),"\u7b97\u8d77\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,t.jsxs)(n.p,{children:["\u793a\u4f8b\u4e00\uff1a\u5c06\u7ed9\u5b9a\u65f6\u95f4\u8f6c\u5316\u5230\u4ee5 5 \u5e74\u4e3a\u65f6\u95f4\u7c92\u5ea6\u5468\u671f\u7684\u8d77\u59cb\u65f6\u523b\uff08\u4e0d\u6307\u5b9a ",(0,t.jsx)(n.code,{children:"boundary"})," \u53c2\u6570\uff0c\u9ed8\u8ba4\u4e3a ",(0,t.jsx)(n.code,{children:"FLOOR"}),"\uff09\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Plaintext",children:"select date_slice('2022-04-26', interval 5 year);\n+--------------------------------------------------+\n| date_slice('2022-04-26', INTERVAL 5 year, floor) |\n+--------------------------------------------------+\n| 2021-01-01                                       |\n+--------------------------------------------------+\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u793a\u4f8b\u4e8c\uff1a\u5c06\u7ed9\u5b9a\u65f6\u95f4\u8f6c\u5316\u5230\u4ee5 5 \u5929\u4e3a\u65f6\u95f4\u7c92\u5ea6\u5468\u671f\u7684\u7ed3\u675f\u65f6\u523b\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Plaintext",children:"select date_slice('0001-01-07', interval 5 day, CEIL);\n+------------------------------------------------+\n| date_slice('0001-01-07', INTERVAL 5 day, ceil) |\n+------------------------------------------------+\n| 0001-01-11                                     |\n+------------------------------------------------+\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u4ee5\u4e0b\u793a\u4f8b\u4f7f\u7528\u8868 ",(0,t.jsx)(n.code,{children:"test_all_type_select"}),"\uff0c\u6570\u636e\u4ee5 ",(0,t.jsx)(n.code,{children:"id_int"})," \u6392\u5e8f\uff1a"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Plaintext",children:"select * from test_all_type_select order by id_int;\n+------------+---------------------+--------+\n| id_date    | id_datetime         | id_int |\n+------------+---------------------+--------+\n| 2052-12-26 | 1691-12-23 04:01:09 |      0 |\n| 2168-08-05 | 2169-12-18 15:44:31 |      1 |\n| 1737-02-06 | 1840-11-23 13:09:50 |      2 |\n| 2245-10-01 | 1751-03-21 00:19:04 |      3 |\n| 1889-10-27 | 1861-09-12 13:28:18 |      4 |\n+------------+---------------------+--------+\n5 rows in set (0.06 sec)\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u793a\u4f8b\u4e09\uff1a\u5c06\u7ed9\u5b9a\u65f6\u95f4 ",(0,t.jsx)(n.code,{children:"id_date"})," \u8f6c\u5316\u4e3a\u4ee5 5 \u79d2\u4e3a\u65f6\u95f4\u7c92\u5ea6\u5468\u671f\u7684\u8d77\u59cb\u65f6\u523b\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Plaintext",children:"select date_slice(id_date, interval 5 second, FLOOR)\nfrom test_all_type_select\norder by id_int;\nERROR 1064 (HY000): can't use date_slice for date with time(hour/minute/second)\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u8fd4\u56de\u62a5\u9519\uff0c\u63d0\u793a\u5bf9\u4e8e DATE \u7c7b\u578b\u7684\u65f6\u95f4\u503c\u4e0d\u80fd\u4f7f\u7528\u65f6\u95f4\u90e8\u5206(\u65f6/\u5206/\u79d2)\u3002"}),"\n",(0,t.jsxs)(n.p,{children:["\u793a\u4f8b\u56db\uff1a\u5c06\u7ed9\u5b9a\u65f6\u95f4 ",(0,t.jsx)(n.code,{children:"id_date"})," \u8f6c\u5316\u5230\u4ee5 5 \u5929\u4e3a\u65f6\u95f4\u7c92\u5ea6\u5468\u671f\u7684\u8d77\u59cb\u65f6\u523b\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Plaintext",children:"select date_slice(id_date, interval 5 day, FLOOR)\nfrom test_all_type_select\norder by id_int;\n+--------------------------------------------+\n| date_slice(id_date, INTERVAL 5 day, floor) |\n+--------------------------------------------+\n| 2052-12-24                                 |\n| 2168-08-03                                 |\n| 1737-02-04                                 |\n| 2245-09-29                                 |\n| 1889-10-25                                 |\n+--------------------------------------------+\n5 rows in set (0.14 sec)\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u793a\u4f8b\u4e94\uff1a\u5c06\u7ed9\u5b9a\u65f6\u95f4 ",(0,t.jsx)(n.code,{children:"id_date"})," \u8f6c\u5316\u5230\u4ee5 5 \u5929\u4e3a\u65f6\u95f4\u7c92\u5ea6\u5468\u671f\u7684\u7ed3\u675f\u65f6\u523b\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Plaintext",children:"select date_slice(id_date, interval 5 day, CEIL)\nfrom test_all_type_select\norder by id_int;\n+-------------------------------------------+\n| date_slice(id_date, INTERVAL 5 day, ceil) |\n+-------------------------------------------+\n| 2052-12-29                                |\n| 2168-08-08                                |\n| 1737-02-09                                |\n| 2245-10-04                                |\n| 1889-10-30                                |\n+-------------------------------------------+\n5 rows in set (0.17 sec)\n"})})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(o,e)})):o(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>l,ah:()=>c});var t=s(67294);const i=t.createContext({});function c(e){const n=t.useContext(i);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const d={};function l({components:e,children:n,disableParentContext:s}){let l;return l=s?"function"==typeof e?e({}):e||d:c(e),t.createElement(i.Provider,{value:l},n)}}}]);