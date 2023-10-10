"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[31760],{36055:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>o,contentTitle:()=>a,default:()=>u,frontMatter:()=>c,metadata:()=>i,toc:()=>l});var t=n(85893),r=n(11151);const c={},a="SHOW USERS",i={id:"sql-reference/sql-statements/account-management/SHOW USERS",title:"SHOW USERS",description:"Description",source:"@site/versioned_docs/version-3.1/sql-reference/sql-statements/account-management/SHOW USERS.md",sourceDirName:"sql-reference/sql-statements/account-management",slug:"/sql-reference/sql-statements/account-management/SHOW USERS",permalink:"/docusaurusv3/docs/sql-reference/sql-statements/account-management/SHOW USERS",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-statements/account-management/SHOW USERS.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"SHOW ROLES",permalink:"/docusaurusv3/docs/sql-reference/sql-statements/account-management/SHOW ROLES"},next:{title:"ADD SQLBLACKLIST",permalink:"/docusaurusv3/docs/sql-reference/sql-statements/Administration/ADD SQLBLACKLIST"}},o={},l=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Examples",id:"examples",level:2},{value:"References",id:"references",level:2}];function d(e){const s=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",code:"code",blockquote:"blockquote",pre:"pre",table:"table",thead:"thead",tr:"tr",th:"th",strong:"strong",tbody:"tbody",td:"td"},(0,r.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"show-users",children:"SHOW USERS"}),"\n",(0,t.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(s.p,{children:["Displays all users in the system. Users mentioned here are user identities, not user names. For more information about user identities, see ",(0,t.jsx)(s.a,{href:"/docusaurusv3/docs/sql-reference/sql-statements/account-management/CREATE%20USER",children:"CREATE USER"}),". This command is supported from v3.0."]}),"\n",(0,t.jsxs)(s.p,{children:["You can use ",(0,t.jsx)(s.code,{children:"SHOW GRANTS FOR <user_identity>;"})," to view the privileges of a specific user. For more information, see ",(0,t.jsx)(s.a,{href:"/docusaurusv3/docs/sql-reference/sql-statements/account-management/SHOW%20GRANTS",children:"SHOW GRANTS"}),"."]}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsxs)(s.p,{children:["Note: Only the ",(0,t.jsx)(s.code,{children:"user_admin"})," role can execute this statement."]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-SQL",children:"SHOW USERS\n"})}),"\n",(0,t.jsx)(s.p,{children:"Return fields:"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:(0,t.jsx)(s.strong,{children:"Field"})}),(0,t.jsx)(s.th,{children:(0,t.jsx)(s.strong,{children:"Description"})})]})}),(0,t.jsx)(s.tbody,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"User"}),(0,t.jsx)(s.td,{children:"The user identity."})]})})]}),"\n",(0,t.jsx)(s.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(s.p,{children:"Display all users in the system."}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-SQL",children:"mysql> SHOW USERS;\n+-----------------+\n| User            |\n+-----------------+\n| 'wybing5'@'%'   |\n| 'root'@'%'      |\n| 'admin'@'%'     |\n| 'star'@'%'      |\n| 'wybing_30'@'%' |\n| 'simo'@'%'      |\n| 'wybing1'@'%'   |\n| 'wybing2'@'%'   |\n+-----------------+\n"})}),"\n",(0,t.jsx)(s.h2,{id:"references",children:"References"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/docusaurusv3/docs/sql-reference/sql-statements/account-management/CREATE%20USER",children:"CREATE USER"}),", ",(0,t.jsx)(s.a,{href:"/docusaurusv3/docs/sql-reference/sql-statements/account-management/ALTER%20USER",children:"ALTER USER"}),", ",(0,t.jsx)(s.a,{href:"/docusaurusv3/docs/sql-reference/sql-statements/account-management/DROP%20USER",children:"DROP USER"})]})]})}const u=function(e={}){const{wrapper:s}=Object.assign({},(0,r.ah)(),e.components);return s?(0,t.jsx)(s,Object.assign({},e,{children:(0,t.jsx)(d,e)})):d(e)}},11151:(e,s,n)=>{n.d(s,{Zo:()=>i,ah:()=>c});var t=n(67294);const r=t.createContext({});function c(e){const s=t.useContext(r);return t.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const a={};function i({components:e,children:s,disableParentContext:n}){let i;return i=n?"function"==typeof e?e({}):e||a:c(e),t.createElement(r.Provider,{value:i},s)}}}]);