"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[77200],{18420:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var t=s(85893),d=s(11151);const i={displayed_sidebar:"English"},r="months_add",a={id:"sql-reference/sql-functions/date-time-functions/months_add",title:"months_add",description:"Description",source:"@site/versioned_docs/version-3.1/sql-reference/sql-functions/date-time-functions/months_add.md",sourceDirName:"sql-reference/sql-functions/date-time-functions",slug:"/sql-reference/sql-functions/date-time-functions/months_add",permalink:"/doc/docs/sql-reference/sql-functions/date-time-functions/months_add",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-functions/date-time-functions/months_add.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"monthname",permalink:"/doc/docs/sql-reference/sql-functions/date-time-functions/monthname"},next:{title:"months_diff",permalink:"/doc/docs/sql-reference/sql-functions/date-time-functions/months_diff"}},o={},c=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function l(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",pre:"pre",code:"code",ul:"ul",li:"li"},(0,d.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"months_add",children:"months_add"}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(n.p,{children:"Adds a specified number of months to the date, accurate to the month."}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-functions/date-time-functions/add_months",children:"add_months"})," function provides similar functionalities."]}),"\n",(0,t.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Haskell",children:"DATETIME months_add(DATETIME expr1, INT expr2);\n"})}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"expr1"}),": the start time. It must be of the DATETIME or DATE type."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"expr2"}),": the months to add. It must be of the INT type. It can be greater, equal, or less than zero. A negative value subtracts months from ",(0,t.jsx)(n.code,{children:"date"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"return-value",children:"Return value"}),"\n",(0,t.jsx)(n.p,{children:"Returns a DATETIME value."}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Plain",children:"select months_add('2019-08-01 13:21:03', 8);\n+--------------------------------------+\n| months_add('2019-08-01 13:21:03', 8) |\n+--------------------------------------+\n| 2020-04-01 13:21:03                  |\n+--------------------------------------+\n\nselect months_add('2019-08-01', 8);\n+-----------------------------+\n| months_add('2019-08-01', 8) |\n+-----------------------------+\n| 2020-04-01 00:00:00         |\n+-----------------------------+\n\nselect months_add('2019-08-01 13:21:03', -8);\n+---------------------------------------+\n| months_add('2019-08-01 13:21:03', -8) |\n+---------------------------------------+\n| 2018-12-01 13:21:03                   |\n+---------------------------------------+\n\nselect months_add('2019-02-28 13:21:03', 1);\n+--------------------------------------+\n| months_add('2019-02-28 13:21:03', 1) |\n+--------------------------------------+\n| 2019-03-28 13:21:03                  |\n+--------------------------------------+\n\nselect months_add('2019-01-30 13:21:03', 1);\n+--------------------------------------+\n| months_add('2019-01-30 13:21:03', 1) |\n+--------------------------------------+\n| 2019-02-28 13:21:03                  |\n+--------------------------------------+\n"})})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,d.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(l,e)})):l(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>a,ah:()=>i});var t=s(67294);const d=t.createContext({});function i(e){const n=t.useContext(d);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const r={};function a({components:e,children:n,disableParentContext:s}){let a;return a=s?"function"==typeof e?e({}):e||r:i(e),t.createElement(d.Provider,{value:a},n)}}}]);