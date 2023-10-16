"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[32336],{16805:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>f,frontMatter:()=>d,metadata:()=>c,toc:()=>l});var t=s(85893),i=s(11151);const d={displayed_sidebar:"English"},r="date_diff",c={id:"sql-reference/sql-functions/date-time-functions/date_diff",title:"date_diff",description:"Description",source:"@site/versioned_docs/version-3.1/sql-reference/sql-functions/date-time-functions/date_diff.md",sourceDirName:"sql-reference/sql-functions/date-time-functions",slug:"/sql-reference/sql-functions/date-time-functions/date_diff",permalink:"/doc/docs/sql-reference/sql-functions/date-time-functions/date_diff",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-functions/date-time-functions/date_diff.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"date_add",permalink:"/doc/docs/sql-reference/sql-functions/date-time-functions/date_add"},next:{title:"date_format",permalink:"/doc/docs/sql-reference/sql-functions/date-time-functions/date_format"}},a={},l=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Usage notes",id:"usage-notes",level:2},{value:"Examples",id:"examples",level:2},{value:"References",id:"references",level:2}];function o(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",a:"a",pre:"pre",ul:"ul",li:"li"},(0,i.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"date_diff",children:"date_diff"}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["Returns the difference between two date values in the specified unit. This function returns the value of ",(0,t.jsx)(n.code,{children:"expr1 - expr2"})," expressed in terms of ",(0,t.jsx)(n.code,{children:"unit"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["For example, ",(0,t.jsx)(n.code,{children:"date_diff('second', '2010-11-30 23:59:59', '2010-11-30 20:58:59')"})," returns the difference between the two DATETIME values in unit of seconds."]}),"\n",(0,t.jsx)(n.p,{children:"This function is supported from v3.1."}),"\n",(0,t.jsxs)(n.p,{children:["The difference between date_diff and ",(0,t.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-functions/date-time-functions/datediff",children:"datediff"})," lies in that datediff() does not support the ",(0,t.jsx)(n.code,{children:"unit"})," parameter."]}),"\n",(0,t.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Haskell",children:"BIGINT DATE_DIFF(VARCHAR unit, DATETIME expr1, DATETIME expr2)\n"})}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"expr1"})," and ",(0,t.jsx)(n.code,{children:"expr2"}),": the two datetime values you want to compare, required. Supported data types are DATETIME and DATE."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"unit"}),": the unit used to express the time difference, required. The following ",(0,t.jsx)(n.code,{children:"unit"})," values are supported: year, quarter, month, week, day, hour, minute, second, millisecond."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"return-value",children:"Return value"}),"\n",(0,t.jsx)(n.p,{children:"Returns a BIGINT value."}),"\n",(0,t.jsx)(n.h2,{id:"usage-notes",children:"Usage notes"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["If ",(0,t.jsx)(n.code,{children:"expr1"})," is earlier than ",(0,t.jsx)(n.code,{children:"expr2"}),", a negative value is returned."]}),"\n",(0,t.jsxs)(n.li,{children:["If ",(0,t.jsx)(n.code,{children:"unit"})," is invalid, an error is returned."]}),"\n",(0,t.jsx)(n.li,{children:"If any input value is NULL, NULL is returned."}),"\n",(0,t.jsxs)(n.li,{children:["If the specified date does not exist, for example, ",(0,t.jsx)(n.code,{children:"2022-11-31"}),", NULL is returned."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"mysql> select date_diff('second', '2010-11-30 23:59:59', '2010-11-30 20:58:59');\n+-------------------------------------------------------------------+\n| date_diff('second', '2010-11-30 23:59:59', '2010-11-30 20:58:59') |\n+-------------------------------------------------------------------+\n|                                                             10860 |\n+-------------------------------------------------------------------+\n\nmysql> select date_diff('minute', '2010-11-30 23:59:59', '2010-11-30 20:58:59');\n+-------------------------------------------------------------------+\n| date_diff('minute', '2010-11-30 23:59:59', '2010-11-30 20:58:59') |\n+-------------------------------------------------------------------+\n|                                                               181 |\n+-------------------------------------------------------------------+\n\nmysql> select date_diff('hour', '2010-11-30 23:59:59', '2010-11-30 20:58:59');\n+-----------------------------------------------------------------+\n| date_diff('hour', '2010-11-30 23:59:59', '2010-11-30 20:58:59') |\n+-----------------------------------------------------------------+\n|                                                               3 |\n+-----------------------------------------------------------------+\n\nmysql> select date_diff('millisecond', '2010-11-30 23:59:59', '2010-11-30 20:58:59');\n+------------------------------------------------------------------------+\n| date_diff('millisecond', '2010-11-30 23:59:59', '2010-11-30 20:58:59') |\n+------------------------------------------------------------------------+\n|                                                               10860000 |\n+------------------------------------------------------------------------+\n"})}),"\n",(0,t.jsx)(n.h2,{id:"references",children:"References"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-functions/date-time-functions/datediff",children:"datediff"})})]})}const f=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(o,e)})):o(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>c,ah:()=>d});var t=s(67294);const i=t.createContext({});function d(e){const n=t.useContext(i);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const r={};function c({components:e,children:n,disableParentContext:s}){let c;return c=s?"function"==typeof e?e({}):e||r:d(e),t.createElement(i.Provider,{value:c},n)}}}]);