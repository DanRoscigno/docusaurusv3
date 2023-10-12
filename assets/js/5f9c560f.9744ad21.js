"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[86574],{700:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>c,metadata:()=>l,toc:()=>i});var r=s(85893),t=s(11151);const c={displayed_sidebar:"documentation"},a="SET ROLE",l={id:"sql-reference/sql-statements/account-management/SET_ROLE",title:"SET ROLE",description:"Description",source:"@site/versioned_docs/version-3.1/sql-reference/sql-statements/account-management/SET_ROLE.md",sourceDirName:"sql-reference/sql-statements/account-management",slug:"/sql-reference/sql-statements/account-management/SET_ROLE",permalink:"/doc/docs/sql-reference/sql-statements/account-management/SET_ROLE",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-statements/account-management/SET_ROLE.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"documentation"},sidebar:"documentation",previous:{title:"SET PROPERTY",permalink:"/doc/docs/sql-reference/sql-statements/account-management/SET_PROPERTY"},next:{title:"SHOW AUTHENTICATION",permalink:"/doc/docs/sql-reference/sql-statements/account-management/SHOW_AUTHENTICATION"}},o={},i=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Usage notes",id:"usage-notes",level:2},{value:"Examples",id:"examples",level:2},{value:"References",id:"references",level:2}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",a:"a",ul:"ul",li:"li"},(0,t.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"set-role",children:"SET ROLE"}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(n.p,{children:"Activates roles, along with all of its associated privileges, for the current session. After the role is activated, users can use this role to perform operations."}),"\n",(0,r.jsx)(n.p,{children:"This command is supported from v3.0."}),"\n",(0,r.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:"-- Active specific roles and perform operations as this role.\nSET ROLE <role_name>[,<role_name>,..];\n-- Activate all roles of a user, except for specific roles.\nSET ROLE ALL EXCEPT <role_name>[,<role_name>,..]; \n-- Activate all roles of a user.\nSET ROLE ALL;\n"})}),"\n",(0,r.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"role_name"}),": the role name"]}),"\n",(0,r.jsx)(n.h2,{id:"usage-notes",children:"Usage notes"}),"\n",(0,r.jsx)(n.p,{children:"Users can only activate roles that have been assigned to them."}),"\n",(0,r.jsxs)(n.p,{children:["You can query the roles of a user using ",(0,r.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/account-management/SHOW_GRANTS",children:"SHOW GRANTS"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["You can query the active roles of the current user using ",(0,r.jsx)(n.code,{children:"SELECT CURRENT_ROLE()"}),". For more information, see ",(0,r.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-functions/utility-functions/current_role",children:"current_role"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(n.p,{children:"Query all the roles of the current user."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:"SHOW GRANTS;\n+--------------+---------+----------------------------------------------+\n| UserIdentity | Catalog | Grants                                       |\n+--------------+---------+----------------------------------------------+\n| 'test'@'%'   | NULL    | GRANT 'db_admin', 'user_admin' TO 'test'@'%' |\n+--------------+---------+----------------------------------------------+\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Activate the ",(0,r.jsx)(n.code,{children:"db_admin"})," role."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:"SET ROLE db_admin;\n"})}),"\n",(0,r.jsx)(n.p,{children:"Query active roles of the current user."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:"SELECT CURRENT_ROLE();\n+--------------------+\n| CURRENT_ROLE()     |\n+--------------------+\n| db_admin           |\n+--------------------+\n"})}),"\n",(0,r.jsx)(n.h2,{id:"references",children:"References"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/account-management/CREATE_ROLE",children:"CREATE ROLE"}),": creates a role."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/account-management/GRANT",children:"GRANT"}),": assigns roles to users or other roles."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/account-management/ALTER_USER",children:"ALTER USER"}),": modifies roles."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/account-management/SHOW_ROLES",children:"SHOW ROLES"}),": show all roles in the system."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-functions/utility-functions/current_role",children:"current_role"}),": show roles of the current user."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/account-management/DROP_ROLE",children:"DROP ROLE"}),": drops a role."]}),"\n"]})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(d,e)})):d(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>l,ah:()=>c});var r=s(67294);const t=r.createContext({});function c(e){const n=r.useContext(t);return r.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const a={};function l({components:e,children:n,disableParentContext:s}){let l;return l=s?"function"==typeof e?e({}):e||a:c(e),r.createElement(t.Provider,{value:l},n)}}}]);