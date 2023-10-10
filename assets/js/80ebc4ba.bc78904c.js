"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[88894],{63433:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var s=n(85893),a=n(11151);const r={},i="SET CATALOG",o={id:"sql-reference/sql-statements/data-definition/SET CATALOG",title:"SET CATALOG",description:"Switches to a specified catalog in the current session.",source:"@site/versioned_docs/version-3.1/sql-reference/sql-statements/data-definition/SET CATALOG.md",sourceDirName:"sql-reference/sql-statements/data-definition",slug:"/sql-reference/sql-statements/data-definition/SET CATALOG",permalink:"/docusaurusv3/docs/latest/sql-reference/sql-statements/data-definition/SET CATALOG",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-statements/data-definition/SET CATALOG.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"RESTORE",permalink:"/docusaurusv3/docs/latest/sql-reference/sql-statements/data-definition/RESTORE"},next:{title:"SHOW ANALYZE JOB",permalink:"/docusaurusv3/docs/latest/sql-reference/sql-statements/data-definition/SHOW ANALYZE JOB"}},c={},l=[{value:"Syntax",id:"syntax",level:2},{value:"Parameter",id:"parameter",level:2},{value:"Examples",id:"examples",level:2}];function d(e){const t=Object.assign({h1:"h1",p:"p",blockquote:"blockquote",strong:"strong",a:"a",h2:"h2",pre:"pre",code:"code"},(0,a.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"set-catalog",children:"SET CATALOG"}),"\n",(0,s.jsx)(t.p,{children:"Switches to a specified catalog in the current session."}),"\n",(0,s.jsx)(t.p,{children:"This command is supported from v3.0 onwards."}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"NOTE"})}),"\n",(0,s.jsxs)(t.p,{children:["For a newly deployed StarRocks v3.1 cluster, you must have the USAGE privilege on the destination external catalog if you want to run ",(0,s.jsx)(t.a,{href:"../sql-reference/sql-statements/data-definition/SET%20CATALOG.md",children:"SET CATALOG"})," to switch to that catalog. You can use ",(0,s.jsx)(t.a,{href:"../sql-reference/sql-statements/account-management/GRANT.md",children:"GRANT"})," to grant the required privileges. For a v3.1 cluster upgraded from an earlier version, you can run SET CATALOG with the inherited privilege."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-SQL",children:"SET CATALOG <catalog_name>\n"})}),"\n",(0,s.jsx)(t.h2,{id:"parameter",children:"Parameter"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"catalog_name"}),": the name of the catalog to use in the current session. You can switch to an internal or external catalog. If the catalog that you specify does not exist, an exception is thrown."]}),"\n",(0,s.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsxs)(t.p,{children:["Run the following command to switch to a Hive catalog named ",(0,s.jsx)(t.code,{children:"hive_metastore"})," in the current session:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-SQL",children:"SET CATALOG hive_metastore;\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Run the following command to switch to the internal catalog ",(0,s.jsx)(t.code,{children:"default_catalog"})," in the current session:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-SQL",children:"SET CATALOG default_catalog;\n"})})]})}const h=function(e={}){const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?(0,s.jsx)(t,Object.assign({},e,{children:(0,s.jsx)(d,e)})):d(e)}},11151:(e,t,n)=>{n.d(t,{Zo:()=>o,ah:()=>r});var s=n(67294);const a=s.createContext({});function r(e){const t=s.useContext(a);return s.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const i={};function o({components:e,children:t,disableParentContext:n}){let o;return o=n?"function"==typeof e?e({}):e||i:r(e),s.createElement(a.Provider,{value:o},t)}}}]);