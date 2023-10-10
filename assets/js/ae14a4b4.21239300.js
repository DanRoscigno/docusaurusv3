"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[94740],{15615:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>r,metadata:()=>u,toc:()=>o});var t=s(85893),i=s(11151);const r={},c="minutes_sub",u={id:"sql-reference/sql-functions/date-time-functions/minutes_sub",title:"minutes_sub",description:"Description",source:"@site/versioned_docs/version-3.1/sql-reference/sql-functions/date-time-functions/minutes_sub.md",sourceDirName:"sql-reference/sql-functions/date-time-functions",slug:"/sql-reference/sql-functions/date-time-functions/minutes_sub",permalink:"/doc/docs/sql-reference/sql-functions/date-time-functions/minutes_sub",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-functions/date-time-functions/minutes_sub.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"minutes_diff",permalink:"/doc/docs/sql-reference/sql-functions/date-time-functions/minutes_diff"},next:{title:"month",permalink:"/doc/docs/sql-reference/sql-functions/date-time-functions/month"}},l={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function a(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",ul:"ul",li:"li"},(0,i.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"minutes_sub",children:"minutes_sub"}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(n.p,{children:"Subtracts specified minutes from the date, accurate to the minute."}),"\n",(0,t.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Haskell",children:"DATETIME minutes_sub(DATETIME|DATE date, INT minutes);\n"})}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"date"}),": the base date. It must be of the DATETIME or DATE type."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"minutes"}),": the minutes to reduce. It must be of the INT type, it could be greater, equal or less than zero."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"return-value",children:"Return value"}),"\n",(0,t.jsx)(n.p,{children:"Returns a DATETIME value."}),"\n",(0,t.jsxs)(n.p,{children:["Returns NULL if either ",(0,t.jsx)(n.code,{children:"date"})," or ",(0,t.jsx)(n.code,{children:"minutes"})," is NULL."]}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"select minutes_sub('2022-01-01 01:03:01', 2);\n+---------------------------------------+\n| minutes_sub('2022-01-01 01:03:01', 2) |\n+---------------------------------------+\n| 2022-01-01 01:01:01                   |\n+---------------------------------------+\nselect minutes_sub('2022-01-01 01:01:01', -1);\n+----------------------------------------+\n| minutes_sub('2022-01-01 01:01:01', -1) |\n+----------------------------------------+\n| 2022-01-01 01:02:01                    |\n+----------------------------------------+\nselect minutes_sub('2022-01-01', 1);\n+------------------------------+\n| minutes_sub('2022-01-01', 1) |\n+------------------------------+\n| 2021-12-31 23:59:00          |\n+------------------------------+\n"})})]})}const d=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(a,e)})):a(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>u,ah:()=>r});var t=s(67294);const i=t.createContext({});function r(e){const n=t.useContext(i);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const c={};function u({components:e,children:n,disableParentContext:s}){let u;return u=s?"function"==typeof e?e({}):e||c:r(e),t.createElement(i.Provider,{value:u},n)}}}]);