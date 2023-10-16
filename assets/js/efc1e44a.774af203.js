"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[69191],{54660:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>c,metadata:()=>i,toc:()=>o});var t=s(85893),r=s(11151);const c={displayed_sidebar:"English"},a="SHOW USERS",i={id:"sql-reference/sql-statements/account-management/SHOW_USERS",title:"SHOW USERS",description:"Description",source:"@site/versioned_docs/version-3.0/sql-reference/sql-statements/account-management/SHOW_USERS.md",sourceDirName:"sql-reference/sql-statements/account-management",slug:"/sql-reference/sql-statements/account-management/SHOW_USERS",permalink:"/doc/docs/3.0/sql-reference/sql-statements/account-management/SHOW_USERS",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-statements/account-management/SHOW_USERS.md",tags:[],version:"3.0",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"SHOW ROLES",permalink:"/doc/docs/3.0/sql-reference/sql-statements/account-management/SHOW_ROLES"},next:{title:"All commands",permalink:"/doc/docs/3.0/sql-reference/sql-statements/all-commands"}},l={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Examples",id:"examples",level:2},{value:"References",id:"references",level:2}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",code:"code",blockquote:"blockquote",pre:"pre",table:"table",thead:"thead",tr:"tr",th:"th",strong:"strong",tbody:"tbody",td:"td"},(0,r.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"show-users",children:"SHOW USERS"}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["Displays all users in the system. Users mentioned here are user identities, not user names. For more information about user identities, see ",(0,t.jsx)(n.a,{href:"/doc/docs/3.0/sql-reference/sql-statements/account-management/CREATE_USER",children:"CREATE USER"}),". This command is supported from v3.0."]}),"\n",(0,t.jsxs)(n.p,{children:["You can use ",(0,t.jsx)(n.code,{children:"SHOW GRANTS FOR <user_identity>;"})," to view the privileges of a specific user. For more information, see ",(0,t.jsx)(n.a,{href:"/doc/docs/3.0/sql-reference/sql-statements/account-management/SHOW_GRANTS",children:"SHOW GRANTS"}),"."]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["Note: Only the ",(0,t.jsx)(n.code,{children:"user_admin"})," role can execute this statement."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:"SHOW USERS\n"})}),"\n",(0,t.jsx)(n.p,{children:"Return fields:"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Field"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Description"})})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"User"}),(0,t.jsx)(n.td,{children:"The user identity."})]})})]}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.p,{children:"Display all users in the system."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:"mysql> SHOW USERS;\n+-----------------+\n| User            |\n+-----------------+\n| 'wybing5'@'%'   |\n| 'root'@'%'      |\n| 'admin'@'%'     |\n| 'star'@'%'      |\n| 'wybing_30'@'%' |\n| 'simo'@'%'      |\n| 'wybing1'@'%'   |\n| 'wybing2'@'%'   |\n+-----------------+\n"})}),"\n",(0,t.jsx)(n.h2,{id:"references",children:"References"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/doc/docs/3.0/sql-reference/sql-statements/account-management/CREATE_USER",children:"CREATE USER"}),", ",(0,t.jsx)(n.a,{href:"/doc/docs/3.0/sql-reference/sql-statements/account-management/ALTER_USER",children:"ALTER USER"}),", ",(0,t.jsx)(n.a,{href:"/doc/docs/3.0/sql-reference/sql-statements/account-management/DROP_USER",children:"DROP USER"})]})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(d,e)})):d(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>i,ah:()=>c});var t=s(67294);const r=t.createContext({});function c(e){const n=t.useContext(r);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const a={};function i({components:e,children:n,disableParentContext:s}){let i;return i=s?"function"==typeof e?e({}):e||a:c(e),t.createElement(r.Provider,{value:i},n)}}}]);