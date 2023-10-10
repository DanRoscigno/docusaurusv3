"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[65421],{7164:(e,n,d)=>{d.r(n),d.d(n,{assets:()=>l,contentTitle:()=>t,default:()=>f,frontMatter:()=>c,metadata:()=>r,toc:()=>o});var s=d(85893),i=d(11151);const c={},t="date_diff",r={id:"sql-reference/sql-functions/date-time-functions/date_diff",title:"date_diff",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.1/sql-reference/sql-functions/date-time-functions/date_diff.md",sourceDirName:"sql-reference/sql-functions/date-time-functions",slug:"/sql-reference/sql-functions/date-time-functions/date_diff",permalink:"/docusaurusv3/zh/docs/sql-reference/sql-functions/date-time-functions/date_diff",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-functions/date-time-functions/date_diff.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"date_add",permalink:"/docusaurusv3/zh/docs/sql-reference/sql-functions/date-time-functions/date_add"},next:{title:"date_format",permalink:"/docusaurusv3/zh/docs/sql-reference/sql-functions/date-time-functions/date_format"}},l={},o=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u4f7f\u7528\u8bf4\u660e",id:"\u4f7f\u7528\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u76f8\u5173\u53c2\u8003",id:"\u76f8\u5173\u53c2\u8003",level:2}];function a(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",a:"a",pre:"pre",ul:"ul",li:"li"},(0,i.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"date_diff",children:"date_diff"}),"\n",(0,s.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,s.jsxs)(n.p,{children:["\u6839\u636e\u6307\u5b9a\u7684\u65f6\u95f4\u5355\u4f4d\u8fd4\u56de\u4e24\u4e2a\u65e5\u671f\u7684\u5dee\u503c\u3002\u8be5\u51fd\u6570\u6309\u7167 ",(0,s.jsx)(n.code,{children:"unit"})," \u6307\u5b9a\u7684\u65f6\u95f4\u5355\u4f4d\u8fd4\u56de ",(0,s.jsx)(n.code,{children:"expr1 - expr2"})," \u7684\u5dee\u503c\u3002\u6bd4\u5982 ",(0,s.jsx)(n.code,{children:"date_diff('second', '2010-11-30 23:59:59', '2010-11-30 20:58:59',)"})," \u4ee5\u79d2\u4e3a\u5355\u4f4d\u8fd4\u56de\u8fd9\u4e24\u4e2a\u65e5\u671f\u7684\u5dee\u503c\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u8be5\u51fd\u6570\u4ece 3.1 \u7248\u672c\u5f00\u59cb\u652f\u6301\u3002\u4e0e ",(0,s.jsx)(n.a,{href:"/docusaurusv3/zh/docs/sql-reference/sql-functions/date-time-functions/datediff",children:"datediff"})," \u7684\u533a\u522b\u5728\u4e8e datediff \u4e0d\u652f\u6301\u6307\u5b9a\u65f6\u95f4\u5355\u4f4d ",(0,s.jsx)(n.code,{children:"unit"}),"\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Haskell",children:"BIGINT DATE_DIFF(VARCHAR unit, DATETIME expr1, DATETIME expr2)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"unit"}),"\uff1a\u5dee\u503c\u7684\u65f6\u95f4\u5355\u4f4d\uff0c\u5fc5\u586b\u3002",(0,s.jsx)(n.code,{children:"unit"})," \u7684\u53d6\u503c\u5fc5\u987b\u662f ",(0,s.jsx)(n.code,{children:"year"}),", ",(0,s.jsx)(n.code,{children:"quarter"}),", ",(0,s.jsx)(n.code,{children:"month"}),", ",(0,s.jsx)(n.code,{children:"week"}),"\uff0c",(0,s.jsx)(n.code,{children:"day"}),"\uff0c",(0,s.jsx)(n.code,{children:"hour"}),"\uff0c",(0,s.jsx)(n.code,{children:"minute"}),"\uff0c",(0,s.jsx)(n.code,{children:"second"}),"\uff0c",(0,s.jsx)(n.code,{children:"millisecond"}),"\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"expr1"}),"\uff0c",(0,s.jsx)(n.code,{children:"expr2"}),"\uff1a\u8981\u8fdb\u884c\u6bd4\u8f83\u7684\u4e24\u4e2a\u65e5\u671f\u503c\uff0c\u5fc5\u586b\u3002\u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u4e3a DATETIME \u548c DATE\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,s.jsx)(n.p,{children:"\u8fd4\u56de BIGINT \u7c7b\u578b\u7684\u503c\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u4f7f\u7528\u8bf4\u660e",children:"\u4f7f\u7528\u8bf4\u660e"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\u5982\u679c ",(0,s.jsx)(n.code,{children:"expr1"})," \u65e9\u4e8e ",(0,s.jsx)(n.code,{children:"expr2"}),"\uff0c\u8fd4\u56de\u8d1f\u503c\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:["\u5982\u679c ",(0,s.jsx)(n.code,{children:"unit"})," \u8d85\u51fa\u6307\u5b9a\u7684\u5355\u4f4d\uff0c\u8fd4\u56de\u62a5\u9519\u3002"]}),"\n",(0,s.jsx)(n.li,{children:"\u5982\u679c\u4efb\u4e00\u8f93\u5165\u53c2\u6570\u4e3a NULL\uff0c\u8fd4\u56de NULL\u3002"}),"\n",(0,s.jsxs)(n.li,{children:["\u5982\u679c\u6307\u5b9a\u7684\u65e5\u671f\u4e0d\u5b58\u5728\uff0c\u6bd4\u5982 ",(0,s.jsx)(n.code,{children:"2022-11-31"}),"\uff0c\u8fd4\u56de NULL\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"mysql> select date_diff('second', '2010-11-30 23:59:59', '2010-11-30 20:58:59');\n+-------------------------------------------------------------------+\n| date_diff('second', '2010-11-30 23:59:59', '2010-11-30 20:58:59') |\n+-------------------------------------------------------------------+\n|                                                             10860 |\n\nmysql> select date_diff('minute', '2010-11-30 23:59:59', '2010-11-30 20:58:59');\n+-------------------------------------------------------------------+\n| date_diff('minute', '2010-11-30 23:59:59', '2010-11-30 20:58:59') |\n+-------------------------------------------------------------------+\n|                                                               181 |\n+-------------------------------------------------------------------+\n\nmysql> select date_diff('hour', '2010-11-30 23:59:59', '2010-11-30 20:58:59');\n+-----------------------------------------------------------------+\n| date_diff('2010-11-30 23:59:59', '2010-11-30 20:58:59', 'hour') |\n+-----------------------------------------------------------------+\n|                                                              3  |\n+-----------------------------------------------------------------+\n\nmysql> select date_diff('millisecond', '2010-11-30 23:59:59', '2010-11-30 20:58:59');\n+------------------------------------------------------------------------+\n| date_diff('millisecond', '2010-11-30 23:59:59', '2010-11-30 20:58:59') |\n+------------------------------------------------------------------------+\n|                                                               10860000 |\n+------------------------------------------------------------------------+\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u76f8\u5173\u53c2\u8003",children:"\u76f8\u5173\u53c2\u8003"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docusaurusv3/zh/docs/sql-reference/sql-functions/date-time-functions/datediff",children:"datediff"})})]})}const f=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(a,e)})):a(e)}},11151:(e,n,d)=>{d.d(n,{Zo:()=>r,ah:()=>c});var s=d(67294);const i=s.createContext({});function c(e){const n=s.useContext(i);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const t={};function r({components:e,children:n,disableParentContext:d}){let r;return r=d?"function"==typeof e?e({}):e||t:c(e),s.createElement(i.Provider,{value:r},n)}}}]);