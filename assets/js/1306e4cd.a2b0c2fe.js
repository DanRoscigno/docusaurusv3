"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[95921],{79391:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>n,metadata:()=>o,toc:()=>d});var a=s(85893),r=s(11151);const n={},i="Privilege FAQ",o={id:"administration/privilege_faq",title:"Privilege FAQ",description:'Why is the error message "no permission" still reported even after the required role has been assigned to a user?',source:"@site/versioned_docs/version-3.1/administration/privilege_faq.md",sourceDirName:"administration",slug:"/administration/privilege_faq",permalink:"/docusaurusv3/docs/latest/administration/privilege_faq",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/administration/privilege_faq.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"Manage user privileges",permalink:"/docusaurusv3/docs/latest/administration/User_privilege"},next:{title:"Authentication methods",permalink:"/docusaurusv3/docs/latest/administration/Authentication"}},l={},d=[{value:"Why is the error message &quot;no permission&quot; still reported even after the required role has been assigned to a user?",id:"why-is-the-error-message-no-permission-still-reported-even-after-the-required-role-has-been-assigned-to-a-user",level:2},{value:"I have granted a user the privilege on all tables in a database (<code>GRANT ALL ON ALL TABLES IN DATABASE db TO user;</code>), but the user still cannot create tables in the database. Why?",id:"i-have-granted-a-user-the-privilege-on-all-tables-in-a-database-grant-all-on-all-tables-in-database-db-to-user-but-the-user-still-cannot-create-tables-in-the-database-why",level:2}];function c(e){const t=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",a:"a",pre:"pre",ul:"ul",li:"li"},(0,r.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"privilege-faq",children:"Privilege FAQ"}),"\n",(0,a.jsx)(t.h2,{id:"why-is-the-error-message-no-permission-still-reported-even-after-the-required-role-has-been-assigned-to-a-user",children:'Why is the error message "no permission" still reported even after the required role has been assigned to a user?'}),"\n",(0,a.jsxs)(t.p,{children:["This error may happen if the role is not activated. You can run ",(0,a.jsx)(t.code,{children:"select current_role();"})," to query the roles that have been activated for the user in the current session. If the required role is not activated, run ",(0,a.jsx)(t.a,{href:"/docusaurusv3/docs/latest/sql-reference/sql-statements/account-management/SET%20ROLE",children:"SET ROLE"})," to activate this role and perform operations using this role."]}),"\n",(0,a.jsxs)(t.p,{children:["If you want roles to be automatically activated upon login, the ",(0,a.jsx)(t.code,{children:"user_admin"})," role can run ",(0,a.jsx)(t.a,{href:"/docusaurusv3/docs/latest/sql-reference/sql-statements/account-management/SET_DEFAULT_ROLE",children:"SET DEFAULT ROLE"})," or ",(0,a.jsx)(t.a,{href:"/docusaurusv3/docs/latest/sql-reference/sql-statements/account-management/ALTER%20USER",children:"ALTER USER DEFAULT ROLE"})," to set a default role for each user. After the default role is set, it will be automatically activated when the user logs in."]}),"\n",(0,a.jsx)(t.p,{children:"If you want all the assigned roles of all users to be automatically activated upon login, you can run the following command. This operation requires the OPERATE permission at the System level."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-SQL",children:"SET GLOBAL activate_all_roles_on_login = TRUE;\n"})}),"\n",(0,a.jsx)(t.p,{children:'However, we recommend that you follow the principle of "least privilege" by setting default roles with limited privileges to prevent potential risks. For example:'}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["For common users, you can set the ",(0,a.jsx)(t.code,{children:"read_only"})," role that has only the SELECT privilege as the default role, while avoiding setting roles with privileges like ALTER, DROP, and INSERT as default roles."]}),"\n",(0,a.jsxs)(t.li,{children:["For administrators, you can set the ",(0,a.jsx)(t.code,{children:"db_admin"})," role as the default role, while avoiding setting the ",(0,a.jsx)(t.code,{children:"node_admin"})," role, which has the privilege to add and drop nodes, as the default role."]}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"This approach helps ensure that users are assigned roles with appropriate permissions, reducing the risk of unintended operations."}),"\n",(0,a.jsxs)(t.p,{children:["You can run ",(0,a.jsx)(t.a,{href:"/docusaurusv3/docs/latest/sql-reference/sql-statements/account-management/GRANT",children:"GRANT"})," to assign the required privileges or roles to users."]}),"\n",(0,a.jsxs)(t.h2,{id:"i-have-granted-a-user-the-privilege-on-all-tables-in-a-database-grant-all-on-all-tables-in-database-db-to-user-but-the-user-still-cannot-create-tables-in-the-database-why",children:["I have granted a user the privilege on all tables in a database (",(0,a.jsx)(t.code,{children:"GRANT ALL ON ALL TABLES IN DATABASE db TO user;"}),"), but the user still cannot create tables in the database. Why?"]}),"\n",(0,a.jsx)(t.p,{children:"Creating tables within a database requires the database-level CREATE TABLE privilege. You need to grant the privilege to the user."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-SQL",children:"GRANT CREATE TABLE ON DATABASE db TO user;\n"})})]})}const h=function(e={}){const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?(0,a.jsx)(t,Object.assign({},e,{children:(0,a.jsx)(c,e)})):c(e)}},11151:(e,t,s)=>{s.d(t,{Zo:()=>o,ah:()=>n});var a=s(67294);const r=a.createContext({});function n(e){const t=a.useContext(r);return a.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const i={};function o({components:e,children:t,disableParentContext:s}){let o;return o=s?"function"==typeof e?e({}):e||i:n(e),a.createElement(r.Provider,{value:o},t)}}}]);