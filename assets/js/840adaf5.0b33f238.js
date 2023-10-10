"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[366],{68124:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>d,toc:()=>o});var t=s(85893),r=s(11151);const a={},i="days_sub",d={id:"sql-reference/sql-functions/date-time-functions/days_sub",title:"days_sub",description:"Description",source:"@site/versioned_docs/version-3.1/sql-reference/sql-functions/date-time-functions/days_sub.md",sourceDirName:"sql-reference/sql-functions/date-time-functions",slug:"/sql-reference/sql-functions/date-time-functions/days_sub",permalink:"/docusaurusv3/docs/sql-reference/sql-functions/date-time-functions/days_sub",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-functions/date-time-functions/days_sub.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"days_diff",permalink:"/docusaurusv3/docs/sql-reference/sql-functions/date-time-functions/days_diff"},next:{title:"from_days",permalink:"/docusaurusv3/docs/sql-reference/sql-functions/date-time-functions/from_days"}},c={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2},{value:"keywords",id:"keywords",level:2}];function l(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code"},(0,r.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"days_sub",children:"days_sub"}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(n.p,{children:"Subtracts specified days from a date or datetime to get a new datetime."}),"\n",(0,t.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Haskell",children:"DATETIME days_sub(DATETIME|DATE d, INT n);\n"})}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"d"}),": the date or datetime expression."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"n"}),": the number of days to subtract from the ",(0,t.jsx)(n.code,{children:"d"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"return-value",children:"Return value"}),"\n",(0,t.jsx)(n.p,{children:"Returns a value of the datetime type, NULL is returned if any parameter is NULL or invalid."}),"\n",(0,t.jsx)(n.p,{children:"NULL is returned if the result exceeds the range [0000-01-01 00:00:00, 9999-12-31 00:00:00]."}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"SELECT DAYS_SUB('2022-12-20 12:00:00', 10);\n+--------------------------------------------------+\n| days_sub('2022-12-20 12:00:00', INTERVAL 10 DAY) |\n+--------------------------------------------------+\n| 2022-12-10 12:00:00                              |\n+--------------------------------------------------+\n\nSELECT DAYS_SUB('2022-12-20 12:00:00', -10);\n+---------------------------------------------------+\n| days_sub('2022-12-20 12:00:00', INTERVAL -10 DAY) |\n+---------------------------------------------------+\n| 2022-12-30 12:00:00                               |\n+---------------------------------------------------+\n\nSELECT DAYS_SUB('2022-12-20 12:00:00', 738874);\n+------------------------------------------------------+\n| days_sub('2022-12-20 12:00:00', INTERVAL 738874 DAY) |\n+------------------------------------------------------+\n| 0000-01-01 12:00:00                                  |\n+------------------------------------------------------+\n\nSELECT DAYS_SUB('2022-12-20 12:00:00', 738875);\n+------------------------------------------------------+\n| days_sub('2022-12-20 12:00:00', INTERVAL 738875 DAY) |\n+------------------------------------------------------+\n| NULL                                                 |\n+------------------------------------------------------+\n\nSELECT DAYS_SUB('2022-12-20 12:00:00', -2913550);\n+--------------------------------------------------------+\n| days_sub('2022-12-20 12:00:00', INTERVAL -2913550 DAY) |\n+--------------------------------------------------------+\n| 9999-12-31 12:00:00                                    |\n+--------------------------------------------------------+\n\nSELECT DAYS_SUB('2022-12-20 12:00:00', -2913551);\n+--------------------------------------------------------+\n| days_sub('2022-12-20 12:00:00', INTERVAL -2913551 DAY) |\n+--------------------------------------------------------+\n| NULL                                                   |\n+--------------------------------------------------------+\n"})}),"\n",(0,t.jsx)(n.h2,{id:"keywords",children:"keywords"}),"\n",(0,t.jsx)(n.p,{children:"DAY,day"})]})}const u=function(e={}){const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(l,e)})):l(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>d,ah:()=>a});var t=s(67294);const r=t.createContext({});function a(e){const n=t.useContext(r);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const i={};function d({components:e,children:n,disableParentContext:s}){let d;return d=s?"function"==typeof e?e({}):e||i:a(e),t.createElement(r.Provider,{value:d},n)}}}]);