"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[67803],{32281:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>d,toc:()=>c});var s=t(85893),a=t(11151);const r={},i="makedate",d={id:"sql-reference/sql-functions/date-time-functions/makedate",title:"makedate",description:"Description",source:"@site/versioned_docs/version-3.1/sql-reference/sql-functions/date-time-functions/makedate.md",sourceDirName:"sql-reference/sql-functions/date-time-functions",slug:"/sql-reference/sql-functions/date-time-functions/makedate",permalink:"/docusaurusv3/docs/latest/sql-reference/sql-functions/date-time-functions/makedate",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-functions/date-time-functions/makedate.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"last_day",permalink:"/docusaurusv3/docs/latest/sql-reference/sql-functions/date-time-functions/last_day"},next:{title:"microseconds_add",permalink:"/docusaurusv3/docs/latest/sql-reference/sql-functions/date-time-functions/microseconds_add"}},l={},c=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2},{value:"keyword",id:"keyword",level:2}];function o(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",ul:"ul",li:"li",a:"a"},(0,a.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"makedate",children:"makedate"}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"Creates and returns a date based on the given year and day of year values."}),"\n",(0,s.jsx)(n.p,{children:"This function is supported from v3.1."}),"\n",(0,s.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Haskell",children:"DATE makedate(INT year, INT dayOfYear);\n"})}),"\n",(0,s.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"year"}),": It ranges from 0 to 9999. NULL is returned if this range is exceeded. The supported data type is INT."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"dayOfYear"}),": the day of year. The supported data type is INT. In order to maintain the same semantics as the function ",(0,s.jsx)(n.a,{href:"/docusaurusv3/docs/latest/sql-reference/sql-functions/date-time-functions/dayofyear",children:"dayofyear"}),", if this number is greater than 366 or is 366 in a non-leap year, it is not a day of year."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"return-value",children:"Return value"}),"\n",(0,s.jsx)(n.p,{children:"Returns the date on the dayOfYear-th day of the given year."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"year"})," must be in the range of [0,9999]. Otherwise, NULL is returned."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"dayOfYear"})," must be between 1 and the number of days in the current year (365 in normal years, 366 in leap years). Otherwise, NULL is returned."]}),"\n",(0,s.jsx)(n.li,{children:"The result is also NULL if either input parameter is NULL."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"mysql> select makedate(2023,0);\n+-------------------+\n| makedate(2023, 0) |\n+-------------------+\n| NULL              |\n+-------------------+\n\nmysql> select makedate(2023,32);\n+--------------------+\n| makedate(2023, 32) |\n+--------------------+\n| 2023-02-01         |\n+--------------------+\n\nmysql> select makedate(2023,365);\n+---------------------+\n| makedate(2023, 365) |\n+---------------------+\n| 2023-12-31          |\n+---------------------+\n\nmysql> select makedate(2023,366);\n+---------------------+\n| makedate(2023, 366) |\n+---------------------+\n| NULL                |\n+---------------------+\n\nmysql> select makedate(9999,365);\n+---------------------+\n| makedate(9999, 365) |\n+---------------------+\n| 9999-12-31          |\n+---------------------+\n\nmysql> select makedate(10000,1);\n+--------------------+\n| makedate(10000, 1) |\n+--------------------+\n| NULL               |\n+--------------------+\n"})}),"\n",(0,s.jsx)(n.h2,{id:"keyword",children:"keyword"}),"\n",(0,s.jsx)(n.p,{children:"MAKEDATE,MAKE"})]})}const u=function(e={}){const{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(o,e)})):o(e)}},11151:(e,n,t)=>{t.d(n,{Zo:()=>d,ah:()=>r});var s=t(67294);const a=s.createContext({});function r(e){const n=s.useContext(a);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const i={};function d({components:e,children:n,disableParentContext:t}){let d;return d=t?"function"==typeof e?e({}):e||i:r(e),s.createElement(a.Provider,{value:d},n)}}}]);