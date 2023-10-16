"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[40919],{66630:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var r=n(85893),s=n(11151);const i={displayed_sidebar:"English"},d="date_trunc",a={id:"sql-reference/sql-functions/date-time-functions/date_trunc",title:"date_trunc",description:"Description",source:"@site/versioned_docs/version-3.1/sql-reference/sql-functions/date-time-functions/date_trunc.md",sourceDirName:"sql-reference/sql-functions/date-time-functions",slug:"/sql-reference/sql-functions/date-time-functions/date_trunc",permalink:"/doc/docs/sql-reference/sql-functions/date-time-functions/date_trunc",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-functions/date-time-functions/date_trunc.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"date_sub",permalink:"/doc/docs/sql-reference/sql-functions/date-time-functions/date_sub"},next:{title:"datediff",permalink:"/doc/docs/sql-reference/sql-functions/date-time-functions/datediff"}},c={},l=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function o(e){const t=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",ul:"ul",li:"li",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,s.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"date_trunc",children:"date_trunc"}),"\n",(0,r.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(t.p,{children:"Truncates a time value based on the specified date part, such as year, day, hour, or minute."}),"\n",(0,r.jsx)(t.p,{children:"StarRocks also provides the year, quarter, month, week, day, and hour functions for you to extract the specified date part."}),"\n",(0,r.jsx)(t.h2,{id:"syntax",children:"Syntax"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-Haskell",children:"DATETIME date_trunc(VARCHAR fmt, DATETIME|DATE datetime)\n"})}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"datetime"}),": the time to truncate, which can be of the DATETIME or DATE type. The date and time must exist. Otherwise, NULL will be returned. For example, ",(0,r.jsx)(t.code,{children:"2021-02-29 11:12:13"})," does not exist as a date and NULL will be returned."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"fmt"}),": the date part, that is, to which precision ",(0,r.jsx)(t.code,{children:"datetime"})," will be truncated. The value must be a VARCHAR constant.\n",(0,r.jsx)(t.code,{children:"fmt"})," must be set to a value listed in the following table. If the value is incorrect, an error will be returned."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Value"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"second"}),(0,r.jsx)(t.td,{children:"Truncates to the second."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"minute"}),(0,r.jsx)(t.td,{children:"Truncates to the minute. The second part will be zero out."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"hour"}),(0,r.jsx)(t.td,{children:"Truncates to the hour. The minute and second parts will be zero out."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"day"}),(0,r.jsx)(t.td,{children:"Truncates to the day. The time part will be zero out."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"week"}),(0,r.jsxs)(t.td,{children:["Truncates to the first date of the week that ",(0,r.jsx)(t.code,{children:"datetime"})," falls in. The time part will be zero out."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"month"}),(0,r.jsxs)(t.td,{children:["Truncates to the first date of the month that ",(0,r.jsx)(t.code,{children:"datetime"})," falls in. The time part will be zero out."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"quarter"}),(0,r.jsxs)(t.td,{children:["Truncates to the first date of the quarter that ",(0,r.jsx)(t.code,{children:"datetime"})," falls in. The time part will be zero out."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"year"}),(0,r.jsxs)(t.td,{children:["Truncates to the first date of the year that ",(0,r.jsx)(t.code,{children:"datetime"})," falls in. The time part will be zero out."]})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"return-value",children:"Return value"}),"\n",(0,r.jsx)(t.p,{children:"Returns a value of the DATETIME type."}),"\n",(0,r.jsxs)(t.p,{children:["If ",(0,r.jsx)(t.code,{children:"datetime"})," is of the DATE type and ",(0,r.jsx)(t.code,{children:"fmt"})," is set to ",(0,r.jsx)(t.code,{children:"hour"}),", ",(0,r.jsx)(t.code,{children:"minute"}),", or ",(0,r.jsx)(t.code,{children:"second"}),", the time part of the returned value defaults to ",(0,r.jsx)(t.code,{children:"00:00:00"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(t.p,{children:"Example 1: Truncate the input time to the minute."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-Plain",children:"select date_trunc(\"minute\", \"2020-11-04 11:12:13\");\n+---------------------------------------------+\n| date_trunc('minute', '2020-11-04 11:12:13') |\n+---------------------------------------------+\n| 2020-11-04 11:12:00                         |\n+---------------------------------------------+\n"})}),"\n",(0,r.jsx)(t.p,{children:"Example 2: Truncate the input time to the hour."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-Plain",children:"select date_trunc(\"hour\", \"2020-11-04 11:12:13\");\n+-------------------------------------------+\n| date_trunc('hour', '2020-11-04 11:12:13') |\n+-------------------------------------------+\n| 2020-11-04 11:00:00                       |\n+-------------------------------------------+\n"})}),"\n",(0,r.jsx)(t.p,{children:"Example 3: Truncate the input time to the first day of a week."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-Plain",children:"select date_trunc(\"week\", \"2020-11-04 11:12:13\");\n+-------------------------------------------+\n| date_trunc('week', '2020-11-04 11:12:13') |\n+-------------------------------------------+\n| 2020-11-02 00:00:00                       |\n+-------------------------------------------+\n"})}),"\n",(0,r.jsx)(t.p,{children:"Example 4: Truncate the input time to the first day of a year."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-Plain",children:"select date_trunc(\"year\", \"2020-11-04 11:12:13\");\n+-------------------------------------------+\n| date_trunc('year', '2020-11-04 11:12:13') |\n+-------------------------------------------+\n| 2020-01-01 00:00:00                       |\n+-------------------------------------------+\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Example 5: Truncate a DATE value to the hour. ",(0,r.jsx)(t.code,{children:"00:00:00"})," is returned as the time part."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-Plain",children:"select date_trunc(\"hour\", \"2020-11-04\");\n+----------------------------------+\n| date_trunc('hour', '2020-11-04') |\n+----------------------------------+\n| 2020-11-04 00:00:00              |\n+----------------------------------+\n"})})]})}const h=function(e={}){const{wrapper:t}=Object.assign({},(0,s.ah)(),e.components);return t?(0,r.jsx)(t,Object.assign({},e,{children:(0,r.jsx)(o,e)})):o(e)}},11151:(e,t,n)=>{n.d(t,{Zo:()=>a,ah:()=>i});var r=n(67294);const s=r.createContext({});function i(e){const t=r.useContext(s);return r.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const d={};function a({components:e,children:t,disableParentContext:n}){let a;return a=n?"function"==typeof e?e({}):e||d:i(e),r.createElement(s.Provider,{value:a},t)}}}]);