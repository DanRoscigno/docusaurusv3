"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[83505],{22261:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>f,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var t=s(85893),d=s(11151);const i={},r="days_diff",a={id:"sql-reference/sql-functions/date-time-functions/days_diff",title:"days_diff",description:"Description",source:"@site/versioned_docs/version-3.0/sql-reference/sql-functions/date-time-functions/days_diff.md",sourceDirName:"sql-reference/sql-functions/date-time-functions",slug:"/sql-reference/sql-functions/date-time-functions/days_diff",permalink:"/docusaurusv3/docs/3.0/sql-reference/sql-functions/date-time-functions/days_diff",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/sql-reference/sql-functions/date-time-functions/days_diff.md",tags:[],version:"3.0",frontMatter:{},sidebar:"documentation",previous:{title:"dayofyear",permalink:"/docusaurusv3/docs/3.0/sql-reference/sql-functions/date-time-functions/dayofyear"},next:{title:"days_sub",permalink:"/docusaurusv3/docs/3.0/sql-reference/sql-functions/date-time-functions/days_sub"}},c={},l=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function o(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",a:"a",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",pre:"pre",ul:"ul",li:"li"},(0,d.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"days_diff",children:"days_diff"}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["Returns the day difference between two date expressions (",(0,t.jsx)(n.code,{children:"expr1"})," \u2212 ",(0,t.jsx)(n.code,{children:"expr2"}),"), accurate to the day."]}),"\n",(0,t.jsxs)(n.p,{children:["Difference between days_diff and ",(0,t.jsx)(n.a,{href:"/docusaurusv3/docs/3.0/sql-reference/sql-functions/date-time-functions/datediff",children:"datediff"}),":"]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Function"}),(0,t.jsx)(n.th,{children:"Behavior"}),(0,t.jsx)(n.th,{children:"Example"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"days_diff"}),(0,t.jsx)(n.td,{children:"The calculation is accurate to the second and rounded down to the nearest integer."}),(0,t.jsx)(n.td,{children:"days_diff between '2020-12-25 23:00:00' and '2020-12-24 23:00:01' is 0."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"datediff"}),(0,t.jsx)(n.td,{children:"The calculation is accurate to the day."}),(0,t.jsx)(n.td,{children:"datediff between '2020-12-25 23:00:00' and '2020-12-24 23:00:01' is 1."})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Haskell",children:"BIGINT days_diff(DATETIME expr1,DATETIME expr2);\n"})}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"expr1"}),": the end time. It must be of the DATETIME or DATE type."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"expr2"}),": the start time. It must be of the DATETIME or DATE type."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"return-value",children:"Return value"}),"\n",(0,t.jsx)(n.p,{children:"Returns a BIGINT value."}),"\n",(0,t.jsx)(n.p,{children:"NULL is returned if the date does not exist, for example, 2022-02-29. days_diff() takes the hour, minute, and second parts into calculation. If the difference is less than 1 day, 0 is returned."}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Plain",children:"select days_diff('2010-11-30 23:00:00', '2010-11-29 23:00:00')\n+---------------------------------------------------------+\n| days_diff('2010-11-30 23:00:00', '2010-11-29 23:00:00') |\n+---------------------------------------------------------+\n| 1                                                       |\n+---------------------------------------------------------+\n\nselect days_diff('2010-11-30 23:00:00', '2010-11-29 23:10:00')\n+---------------------------------------------------------+\n| days_diff('2010-11-30 23:00:00', '2010-11-29 23:10:00') |\n+---------------------------------------------------------+\n| 0                                                       |\n+---------------------------------------------------------+\n"})})]})}const f=function(e={}){const{wrapper:n}=Object.assign({},(0,d.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(o,e)})):o(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>a,ah:()=>i});var t=s(67294);const d=t.createContext({});function i(e){const n=t.useContext(d);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const r={};function a({components:e,children:n,disableParentContext:s}){let a;return a=s?"function"==typeof e?e({}):e||r:i(e),t.createElement(d.Provider,{value:a},n)}}}]);