"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[33420],{88762:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>l});var n=s(85893),a=s(11151);const i={},c="DROP ANALYZE",r={id:"sql-reference/sql-statements/data-definition/DROP ANALYZE",title:"DROP ANALYZE",description:"Description",source:"@site/versioned_docs/version-3.0/sql-reference/sql-statements/data-definition/DROP ANALYZE.md",sourceDirName:"sql-reference/sql-statements/data-definition",slug:"/sql-reference/sql-statements/data-definition/DROP ANALYZE",permalink:"/docusaurusv3/docs/3.0/sql-reference/sql-statements/data-definition/DROP ANALYZE",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/sql-reference/sql-statements/data-definition/DROP ANALYZE.md",tags:[],version:"3.0",frontMatter:{},sidebar:"documentation",previous:{title:"CREATE VIEW",permalink:"/docusaurusv3/docs/3.0/sql-reference/sql-statements/data-definition/CREATE VIEW"},next:{title:"DROP CATALOG",permalink:"/docusaurusv3/docs/3.0/sql-reference/sql-statements/data-definition/DROP CATALOG"}},o={},l=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Examples",id:"examples",level:2},{value:"References",id:"references",level:2}];function d(e){const t=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",pre:"pre",a:"a"},(0,a.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"drop-analyze",children:"DROP ANALYZE"}),"\n",(0,n.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,n.jsx)(t.p,{children:"Deletes a custom collection task."}),"\n",(0,n.jsxs)(t.p,{children:["By default, StarRocks automatically collects full statistics of a table. It checks for any data updates every 5 minutes. If data change is detected, data collection will be automatically triggered. If you do not want to use automatic full collection, you can set the FE configuration item ",(0,n.jsx)(t.code,{children:"enable_collect_full_statistic"})," to ",(0,n.jsx)(t.code,{children:"false"})," and customize a collection task."]}),"\n",(0,n.jsx)(t.p,{children:"This statement is supported from v2.4."}),"\n",(0,n.jsx)(t.h2,{id:"syntax",children:"Syntax"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-SQL",children:"DROP ANALYZE <ID>\n"})}),"\n",(0,n.jsx)(t.p,{children:"The task ID can be obtained by using the SHOW ANALYZE JOB statement."}),"\n",(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-SQL",children:"DROP ANALYZE 266030;\n"})}),"\n",(0,n.jsx)(t.h2,{id:"references",children:"References"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/docusaurusv3/docs/3.0/sql-reference/sql-statements/data-definition/CREATE%20ANALYZE",children:"CREATE ANALYZE"}),": customize an automatic collection task."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/docusaurusv3/docs/3.0/sql-reference/sql-statements/data-definition/SHOW%20ANALYZE%20JOB",children:"SHOW ANALYZE JOB"}),": view the status of an automatic collection task."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/docusaurusv3/docs/3.0/sql-reference/sql-statements/data-definition/KILL%20ANALYZE",children:"KILL ANALYZE"}),": cancel a custom collection task that is running."]}),"\n",(0,n.jsxs)(t.p,{children:["For more information about collecting statistics for CBO, see ",(0,n.jsx)(t.a,{href:"/docusaurusv3/docs/3.0/using_starrocks/Cost_based_optimizer",children:"Gather statistics for CBO"}),"."]})]})}const u=function(e={}){const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(d,e)})):d(e)}},11151:(e,t,s)=>{s.d(t,{Zo:()=>r,ah:()=>i});var n=s(67294);const a=n.createContext({});function i(e){const t=n.useContext(a);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const c={};function r({components:e,children:t,disableParentContext:s}){let r;return r=s?"function"==typeof e?e({}):e||c:i(e),n.createElement(a.Provider,{value:r},t)}}}]);