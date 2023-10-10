"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[774],{2095:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var s=t(85893),d=t(11151);const a={},i="add_months",o={id:"sql-reference/sql-functions/date-time-functions/add_months",title:"add_months",description:"Description",source:"@site/versioned_docs/version-3.0/sql-reference/sql-functions/date-time-functions/add_months.md",sourceDirName:"sql-reference/sql-functions/date-time-functions",slug:"/sql-reference/sql-functions/date-time-functions/add_months",permalink:"/doc/docs/3.0/sql-reference/sql-functions/date-time-functions/add_months",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/sql-reference/sql-functions/date-time-functions/add_months.md",tags:[],version:"3.0",frontMatter:{},sidebar:"documentation",previous:{title:"to_base64",permalink:"/doc/docs/3.0/sql-reference/sql-functions/crytographic-functions/to_base64"},next:{title:"adddate,days_add",permalink:"/doc/docs/3.0/sql-reference/sql-functions/date-time-functions/adddate"}},r={},c=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function l(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",code:"code",pre:"pre",ul:"ul",li:"li"},(0,d.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"add_months",children:"add_months"}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["Adds a specified number of months to a given date (DATE or DATETIME). The ",(0,s.jsx)(n.a,{href:"/doc/docs/3.0/sql-reference/sql-functions/date-time-functions/months_add",children:"months_add"})," function provides similar functionalities."]}),"\n",(0,s.jsxs)(n.p,{children:["The day component in the resulting month remains the same as that specified in ",(0,s.jsx)(n.code,{children:"date"}),", unless the resulting month has fewer days than the day component of the given date, in which case the day will be the last day of the resulting month. For example, ",(0,s.jsx)(n.code,{children:"select add_months('2022-01-31', 1);"})," returns ",(0,s.jsx)(n.code,{children:"2022-02-28 00:00:00"}),". If the resulting month has more days than the day component of the given date, the result has the same day component as ",(0,s.jsx)(n.code,{children:"date"}),". For example, ",(0,s.jsx)(n.code,{children:"select add_months('2022-02-28', 1)"})," returns ",(0,s.jsx)(n.code,{children:"2022-03-28 00:00:00"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Difference with Oracle: In Oracle, if ",(0,s.jsx)(n.code,{children:"date"})," is the last day of the month, then the result is the last day of the resulting month."]}),"\n",(0,s.jsx)(n.p,{children:"Returns NULL if an invalid date or a NULL argument is passed in."}),"\n",(0,s.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Haskell",children:"ADD_MONTH(date, months)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"date"}),": It must be a valid date or datetime expression."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"months"}),": the months you want to add. It must be an integer. A  positive integer adds months to ",(0,s.jsx)(n.code,{children:"date"}),". A negative integer subtracts months from ",(0,s.jsx)(n.code,{children:"date"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"return-value",children:"Return value"}),"\n",(0,s.jsxs)(n.p,{children:["Returns a DATETIME value. If the date does not exist, for example, ",(0,s.jsx)(n.code,{children:"2020-02-30"}),", NULL is returned."]}),"\n",(0,s.jsx)(n.p,{children:"If the date is a DATE value, it will be converted into a DATETIME value."}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"> select add_months('2022-01-01', 2);\n+-----------------------------+\n| add_months('2022-01-01', 2) |\n+-----------------------------+\n| 2022-03-01 00:00:00         |\n+-----------------------------+\n\n> select add_months('2022-01-01', -5);\n+------------------------------+\n| add_months('2022-01-01', -5) |\n+------------------------------+\n| 2021-08-01 00:00:00          |\n+------------------------------+\n\n> select add_months('2022-01-31', 1);\n+-----------------------------+\n| add_months('2022-01-31', 1) |\n+-----------------------------+\n| 2022-02-28 00:00:00         |\n+-----------------------------+\n\n> select add_months('2022-01-31 17:01:02', -2);\n+---------------------------------------+\n| add_months('2022-01-31 17:01:02', -2) |\n+---------------------------------------+\n| 2021-11-30 17:01:02                   |\n+---------------------------------------+\n\n> select add_months('2022-02-28', 1);\n+-----------------------------+\n| add_months('2022-02-28', 1) |\n+-----------------------------+\n| 2022-03-28 00:00:00         |\n+-----------------------------+\n"})})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,d.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(l,e)})):l(e)}},11151:(e,n,t)=>{t.d(n,{Zo:()=>o,ah:()=>a});var s=t(67294);const d=s.createContext({});function a(e){const n=s.useContext(d);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const i={};function o({components:e,children:n,disableParentContext:t}){let o;return o=t?"function"==typeof e?e({}):e||i:a(e),s.createElement(d.Provider,{value:o},n)}}}]);