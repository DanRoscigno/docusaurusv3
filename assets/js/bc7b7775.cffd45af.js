"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[26108],{77600:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>u,frontMatter:()=>c,metadata:()=>l,toc:()=>i});var t=s(85893),r=s(11151);const c={},a="SHOW ROLES",l={id:"sql-reference/sql-statements/account-management/SHOW ROLES",title:"SHOW ROLES",description:"Description",source:"@site/versioned_docs/version-3.1/sql-reference/sql-statements/account-management/SHOW ROLES.md",sourceDirName:"sql-reference/sql-statements/account-management",slug:"/sql-reference/sql-statements/account-management/SHOW ROLES",permalink:"/docusaurusv3/docs/sql-reference/sql-statements/account-management/SHOW ROLES",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-statements/account-management/SHOW ROLES.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"SHOW GRANTS",permalink:"/docusaurusv3/docs/sql-reference/sql-statements/account-management/SHOW GRANTS"},next:{title:"SHOW USERS",permalink:"/docusaurusv3/docs/sql-reference/sql-statements/account-management/SHOW USERS"}},o={},i=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Examples",id:"examples",level:2},{value:"References",id:"references",level:2}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",a:"a",blockquote:"blockquote",pre:"pre",table:"table",thead:"thead",tr:"tr",th:"th",strong:"strong",tbody:"tbody",td:"td",ul:"ul",li:"li"},(0,r.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"show-roles",children:"SHOW ROLES"}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["Displays all roles in the system. You can use ",(0,t.jsx)(n.code,{children:"SHOW GRANTS FOR ROLE <role_name>;"})," to view the privileges of a specific role. For more information, see ",(0,t.jsx)(n.a,{href:"/docusaurusv3/docs/sql-reference/sql-statements/account-management/SHOW%20GRANTS",children:"SHOW GRANTS"}),". This command is supported from v3.0."]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["Note: Only the ",(0,t.jsx)(n.code,{children:"user_admin"})," role can execute this statement."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:"SHOW ROLES\n"})}),"\n",(0,t.jsx)(n.p,{children:"Return fields:"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Field"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Description"})})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Name"}),(0,t.jsx)(n.td,{children:"The name of the role."})]})})]}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.p,{children:"Display all roles in the system."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:"mysql> SHOW ROLES;\n+---------------+\n| Name          |\n+---------------+\n| root          |\n| db_admin      |\n| cluster_admin |\n| user_admin    |\n| public        |\n| testrole      |\n+---------------+\n"})}),"\n",(0,t.jsx)(n.h2,{id:"references",children:"References"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docusaurusv3/docs/sql-reference/sql-statements/account-management/CREATE%20ROLE",children:"CREATE ROLE"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docusaurusv3/docs/sql-reference/sql-statements/account-management/ALTER%20USER",children:"ALTER USER"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docusaurusv3/docs/sql-reference/sql-statements/account-management/DROP%20ROLE",children:"DROP ROLE"})}),"\n"]})]})}const u=function(e={}){const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(d,e)})):d(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>l,ah:()=>c});var t=s(67294);const r=t.createContext({});function c(e){const n=t.useContext(r);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const a={};function l({components:e,children:n,disableParentContext:s}){let l;return l=s?"function"==typeof e?e({}):e||a:c(e),t.createElement(r.Provider,{value:l},n)}}}]);