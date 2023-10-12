"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[90154],{83430:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>r,toc:()=>l});var s=n(85893),d=n(11151);const a={},i="adddate,days_add",r={id:"sql-reference/sql-functions/date-time-functions/adddate",title:"adddate,days_add",description:"Description",source:"@site/versioned_docs/version-3.1/sql-reference/sql-functions/date-time-functions/adddate.md",sourceDirName:"sql-reference/sql-functions/date-time-functions",slug:"/sql-reference/sql-functions/date-time-functions/adddate",permalink:"/doc/docs/sql-reference/sql-functions/date-time-functions/adddate",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-functions/date-time-functions/adddate.md",tags:[],version:"3.1",frontMatter:{},sidebar:"Chinese31",previous:{title:"add_months",permalink:"/doc/docs/sql-reference/sql-functions/date-time-functions/add_months"},next:{title:"convert_tz",permalink:"/doc/docs/sql-reference/sql-functions/date-time-functions/convert_tz"}},c={},l=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function o(e){const t=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",ul:"ul",li:"li"},(0,d.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"adddatedays_add",children:"adddate,days_add"}),"\n",(0,s.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(t.p,{children:"Adds a specified time interval to a date."}),"\n",(0,s.jsx)(t.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-Haskell",children:"DATETIME ADDDATE(DATETIME|DATE date,INTERVAL expr type)\n"})}),"\n",(0,s.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"date"}),": It must be a valid date or datetime expression."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"expr"}),": the time interval you want to add. It must be of the INT type."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"type"}),": the unit of the time interval. It can only be set to any of the following values: YEAR, MONTH, DAY, HOUR, MINUTE, SECOND."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"return-value",children:"Return value"}),"\n",(0,s.jsxs)(t.p,{children:["Returns a DATETIME value. If the date does not exist, for example, ",(0,s.jsx)(t.code,{children:"2020-02-30"}),", NULL is returned. If the date is a DATE value, it will be converted into a DATETIME value."]}),"\n",(0,s.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-Plain",metastring:"Text",children:"select adddate('2010-11-30 23:59:59', INTERVAL 2 DAY);\n+-------------------------------------------------+\n| adddate('2010-11-30 23:59:59', INTERVAL 2 DAY) |\n+-------------------------------------------------+\n| 2010-12-02 23:59:59                             |\n+-------------------------------------------------+\n\nselect adddate('2010-12-03', INTERVAL 2 DAY);\n+----------------------------------------+\n| adddate('2010-12-03', INTERVAL 2 DAY) |\n+----------------------------------------+\n| 2010-12-05 00:00:00                    |\n+----------------------------------------+\n"})})]})}const u=function(e={}){const{wrapper:t}=Object.assign({},(0,d.ah)(),e.components);return t?(0,s.jsx)(t,Object.assign({},e,{children:(0,s.jsx)(o,e)})):o(e)}},11151:(e,t,n)=>{n.d(t,{Zo:()=>r,ah:()=>a});var s=n(67294);const d=s.createContext({});function a(e){const t=s.useContext(d);return s.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const i={};function r({components:e,children:t,disableParentContext:n}){let r;return r=n?"function"==typeof e?e({}):e||i:a(e),s.createElement(d.Provider,{value:r},t)}}}]);