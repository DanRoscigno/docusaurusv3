"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[77200],{18420:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var s=t(85893),d=t(11151);const r={},o="months_add",i={id:"sql-reference/sql-functions/date-time-functions/months_add",title:"months_add",description:"Description",source:"@site/versioned_docs/version-3.1/sql-reference/sql-functions/date-time-functions/months_add.md",sourceDirName:"sql-reference/sql-functions/date-time-functions",slug:"/sql-reference/sql-functions/date-time-functions/months_add",permalink:"/doc/docs/sql-reference/sql-functions/date-time-functions/months_add",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-functions/date-time-functions/months_add.md",tags:[],version:"3.1",frontMatter:{},sidebar:"Chinese31",previous:{title:"monthname",permalink:"/doc/docs/sql-reference/sql-functions/date-time-functions/monthname"},next:{title:"months_diff",permalink:"/doc/docs/sql-reference/sql-functions/date-time-functions/months_diff"}},a={},c=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function l(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",pre:"pre",code:"code",ul:"ul",li:"li"},(0,d.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"months_add",children:"months_add"}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"Adds a specified number of months to the date, accurate to the month."}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-functions/date-time-functions/add_months",children:"add_months"})," function provides similar functionalities."]}),"\n",(0,s.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Haskell",children:"DATETIME months_add(DATETIME expr1, INT expr2);\n"})}),"\n",(0,s.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"expr1"}),": the start time. It must be of the DATETIME or DATE type."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"expr2"}),": the months to add. It must be of the INT type. It can be greater, equal, or less than zero. A negative value subtracts months from ",(0,s.jsx)(n.code,{children:"date"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"return-value",children:"Return value"}),"\n",(0,s.jsx)(n.p,{children:"Returns a DATETIME value."}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plain",children:"select months_add('2019-08-01 13:21:03', 8);\n+--------------------------------------+\n| months_add('2019-08-01 13:21:03', 8) |\n+--------------------------------------+\n| 2020-04-01 13:21:03                  |\n+--------------------------------------+\n\nselect months_add('2019-08-01', 8);\n+-----------------------------+\n| months_add('2019-08-01', 8) |\n+-----------------------------+\n| 2020-04-01 00:00:00         |\n+-----------------------------+\n\nselect months_add('2019-08-01 13:21:03', -8);\n+---------------------------------------+\n| months_add('2019-08-01 13:21:03', -8) |\n+---------------------------------------+\n| 2018-12-01 13:21:03                   |\n+---------------------------------------+\n\nselect months_add('2019-02-28 13:21:03', 1);\n+--------------------------------------+\n| months_add('2019-02-28 13:21:03', 1) |\n+--------------------------------------+\n| 2019-03-28 13:21:03                  |\n+--------------------------------------+\n\nselect months_add('2019-01-30 13:21:03', 1);\n+--------------------------------------+\n| months_add('2019-01-30 13:21:03', 1) |\n+--------------------------------------+\n| 2019-02-28 13:21:03                  |\n+--------------------------------------+\n"})})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,d.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(l,e)})):l(e)}},11151:(e,n,t)=>{t.d(n,{Zo:()=>i,ah:()=>r});var s=t(67294);const d=s.createContext({});function r(e){const n=s.useContext(d);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const o={};function i({components:e,children:n,disableParentContext:t}){let i;return i=t?"function"==typeof e?e({}):e||o:r(e),s.createElement(d.Provider,{value:i},n)}}}]);