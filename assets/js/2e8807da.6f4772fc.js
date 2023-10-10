"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[76072],{67726:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var t=s(85893),r=s(11151);const a={},i="day",c={id:"sql-reference/sql-functions/date-time-functions/day",title:"day",description:"Description",source:"@site/versioned_docs/version-3.1/sql-reference/sql-functions/date-time-functions/day.md",sourceDirName:"sql-reference/sql-functions/date-time-functions",slug:"/sql-reference/sql-functions/date-time-functions/day",permalink:"/docusaurusv3/docs/sql-reference/sql-functions/date-time-functions/day",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-functions/date-time-functions/day.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"datediff",permalink:"/docusaurusv3/docs/sql-reference/sql-functions/date-time-functions/datediff"},next:{title:"dayofweek_iso",permalink:"/docusaurusv3/docs/sql-reference/sql-functions/date-time-functions/day_of_week_iso"}},o={},d=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Examples",id:"examples",level:2},{value:"keywords",id:"keywords",level:2}];function l(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",pre:"pre"},(0,r.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"day",children:"day"}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(n.p,{children:"Extracts the day part of a date or datetime expression and returns a value that ranges from 1 to 31."}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"date"})," parameter must be of the DATE or DATETIME type."]}),"\n",(0,t.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Haskell",children:"INT DAY(DATETIME|DATE date)\n"})}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"MySQL > select day('1987-01-31');\n+----------------------------+\n| day('1987-01-31 00:00:00') |\n+----------------------------+\n|                         31 |\n+----------------------------+\n\nMySQL > select day('1987-01-31 20:10:59');\n+----------------------------+\n| day('1987-01-31 20:10:59') |\n+----------------------------+\n|                         31 |\n+----------------------------+\n"})}),"\n",(0,t.jsx)(n.h2,{id:"keywords",children:"keywords"}),"\n",(0,t.jsx)(n.p,{children:"DAY, day"})]})}const u=function(e={}){const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(l,e)})):l(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>c,ah:()=>a});var t=s(67294);const r=t.createContext({});function a(e){const n=t.useContext(r);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const i={};function c({components:e,children:n,disableParentContext:s}){let c;return c=s?"function"==typeof e?e({}):e||i:a(e),t.createElement(r.Provider,{value:c},n)}}}]);