"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[88961],{46839:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var t=s(85893),r=s(11151);const i={displayed_sidebar:"English"},d="days_sub",a={id:"sql-reference/sql-functions/date-time-functions/days_sub",title:"days_sub",description:"Description",source:"@site/versioned_docs/version-2.5/sql-reference/sql-functions/date-time-functions/days_sub.md",sourceDirName:"sql-reference/sql-functions/date-time-functions",slug:"/sql-reference/sql-functions/date-time-functions/days_sub",permalink:"/doc/docs/2.5/sql-reference/sql-functions/date-time-functions/days_sub",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-functions/date-time-functions/days_sub.md",tags:[],version:"2.5",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"days_diff",permalink:"/doc/docs/2.5/sql-reference/sql-functions/date-time-functions/days_diff"},next:{title:"from_days",permalink:"/doc/docs/2.5/sql-reference/sql-functions/date-time-functions/from_days"}},c={},l=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2},{value:"keywords",id:"keywords",level:2}];function o(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code"},(0,r.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"days_sub",children:"days_sub"}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(n.p,{children:"Subtracts specified days from a date or datetime to get a new datetime."}),"\n",(0,t.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Haskell",children:"DATETIME days_sub(DATETIME|DATE d, INT n);\n"})}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"d"}),": the date or datetime expression."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"n"}),": the number of days to subtract from ",(0,t.jsx)(n.code,{children:"d"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"return-value",children:"Return value"}),"\n",(0,t.jsx)(n.p,{children:"Returns a value of the datetime type, NULL is returned if any parameter is NULL or invalid."}),"\n",(0,t.jsx)(n.p,{children:"NULL is returned if the result exceeds the range [0000-01-01 00:00:00, 9999-12-31 00:00:00]."}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"SELECT DAYS_SUB('2022-12-20 12:00:00', 10);\n+--------------------------------------------------+\n| days_sub('2022-12-20 12:00:00', INTERVAL 10 DAY) |\n+--------------------------------------------------+\n| 2022-12-10 12:00:00                              |\n+--------------------------------------------------+\n\nSELECT DAYS_SUB('2022-12-20 12:00:00', -10);\n+---------------------------------------------------+\n| days_sub('2022-12-20 12:00:00', INTERVAL -10 DAY) |\n+---------------------------------------------------+\n| 2022-12-30 12:00:00                               |\n+---------------------------------------------------+\n\nSELECT DAYS_SUB('2022-12-20 12:00:00', 738874);\n+------------------------------------------------------+\n| days_sub('2022-12-20 12:00:00', INTERVAL 738874 DAY) |\n+------------------------------------------------------+\n| 0000-01-01 12:00:00                                  |\n+------------------------------------------------------+\n\nSELECT DAYS_SUB('2022-12-20 12:00:00', 738875);\n+------------------------------------------------------+\n| days_sub('2022-12-20 12:00:00', INTERVAL 738875 DAY) |\n+------------------------------------------------------+\n| NULL                                                 |\n+------------------------------------------------------+\n\nSELECT DAYS_SUB('2022-12-20 12:00:00', -2913550);\n+--------------------------------------------------------+\n| days_sub('2022-12-20 12:00:00', INTERVAL -2913550 DAY) |\n+--------------------------------------------------------+\n| 9999-12-31 12:00:00                                    |\n+--------------------------------------------------------+\n\nSELECT DAYS_SUB('2022-12-20 12:00:00', -2913551);\n+--------------------------------------------------------+\n| days_sub('2022-12-20 12:00:00', INTERVAL -2913551 DAY) |\n+--------------------------------------------------------+\n| NULL                                                   |\n+--------------------------------------------------------+\n"})}),"\n",(0,t.jsx)(n.h2,{id:"keywords",children:"keywords"}),"\n",(0,t.jsx)(n.p,{children:"DAY,day"})]})}const u=function(e={}){const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(o,e)})):o(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>a,ah:()=>i});var t=s(67294);const r=t.createContext({});function i(e){const n=t.useContext(r);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const d={};function a({components:e,children:n,disableParentContext:s}){let a;return a=s?"function"==typeof e?e({}):e||d:i(e),t.createElement(r.Provider,{value:a},n)}}}]);