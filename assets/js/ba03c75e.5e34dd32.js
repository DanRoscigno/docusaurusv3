"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[28400],{57219:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var s=n(85893),r=n(11151);const i={},a="date_sub",c={id:"sql-reference/sql-functions/date-time-functions/date_sub",title:"date_sub",description:"Description",source:"@site/versioned_docs/version-3.0/sql-reference/sql-functions/date-time-functions/date_sub.md",sourceDirName:"sql-reference/sql-functions/date-time-functions",slug:"/sql-reference/sql-functions/date-time-functions/date_sub",permalink:"/doc/docs/3.0/sql-reference/sql-functions/date-time-functions/date_sub",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/sql-reference/sql-functions/date-time-functions/date_sub.md",tags:[],version:"3.0",frontMatter:{},sidebar:"documentation",previous:{title:"date_slice",permalink:"/doc/docs/3.0/sql-reference/sql-functions/date-time-functions/date_slice"},next:{title:"date_trunc",permalink:"/doc/docs/3.0/sql-reference/sql-functions/date-time-functions/date_trunc"}},l={},d=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function o(e){const t=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",ul:"ul",li:"li"},(0,r.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"date_sub",children:"date_sub"}),"\n",(0,s.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(t.p,{children:"Subtracts the specified time interval from a date."}),"\n",(0,s.jsx)(t.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-Haskell",children:"DATETIME DATE_SUB(DATETIME|DATE date,INTERVAL expr type)\n"})}),"\n",(0,s.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"date"}),": It must be a valid DATE or DATETIME expression."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"expr"}),": the time interval you want to subtract. It must be of the INT type."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"type"}),": the unit of the time interval. It can only be set to any of the following values: YEAR, MONTH, DAY, HOUR, MINUTE, SECOND."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"return-value",children:"Return value"}),"\n",(0,s.jsxs)(t.p,{children:["Returns a DATETIME value. If the date does not exist, for example, ",(0,s.jsx)(t.code,{children:"2020-02-30"}),", or if the date is not a DATE or DATETIME value, NULL is returned."]}),"\n",(0,s.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-Plain",metastring:"Text",children:"select date_sub('2010-11-30 23:59:59', INTERVAL 2 DAY);\n+-------------------------------------------------+\n| date_sub('2010-11-30 23:59:59', INTERVAL 2 DAY) |\n+-------------------------------------------------+\n| 2010-11-28 23:59:59                             |\n+-------------------------------------------------+\n\nselect date_sub('2010-11-30', INTERVAL 2 hour);\n+-----------------------------------------+\n| date_sub('2010-11-30', INTERVAL 2 HOUR) |\n+-----------------------------------------+\n| 2010-11-29 22:00:00                     |\n+-----------------------------------------+\n\nselect date_sub('2010-02-30', INTERVAL 2 DAY);\n+----------------------------------------+\n| date_sub('2010-02-30', INTERVAL 2 DAY) |\n+----------------------------------------+\n| NULL                                   |\n+----------------------------------------+\n"})})]})}const u=function(e={}){const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?(0,s.jsx)(t,Object.assign({},e,{children:(0,s.jsx)(o,e)})):o(e)}},11151:(e,t,n)=>{n.d(t,{Zo:()=>c,ah:()=>i});var s=n(67294);const r=s.createContext({});function i(e){const t=s.useContext(r);return s.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const a={};function c({components:e,children:t,disableParentContext:n}){let c;return c=n?"function"==typeof e?e({}):e||a:i(e),s.createElement(r.Provider,{value:c},t)}}}]);