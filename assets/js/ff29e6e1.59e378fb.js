"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[95771],{19968:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var t=n(85893),a=n(11151);const r={},i="ALTER USER",l={id:"sql-reference/sql-statements/account-management/ALTER USER",title:"ALTER USER",description:"Description",source:"@site/versioned_docs/version-3.1/sql-reference/sql-statements/account-management/ALTER USER.md",sourceDirName:"sql-reference/sql-statements/account-management",slug:"/sql-reference/sql-statements/account-management/ALTER USER",permalink:"/doc/docs/sql-reference/sql-statements/account-management/ALTER USER",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-statements/account-management/ALTER USER.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"SQL Reference",permalink:"/doc/docs/category/sql-reference"},next:{title:"CREATE ROLE",permalink:"/doc/docs/sql-reference/sql-statements/account-management/CREATE ROLE"}},c={},d=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2},{value:"References",id:"references",level:2}];function o(e){const s=Object.assign({h1:"h1",h2:"h2",p:"p",blockquote:"blockquote",code:"code",pre:"pre",ul:"ul",li:"li",table:"table",thead:"thead",tr:"tr",th:"th",strong:"strong",tbody:"tbody",td:"td",a:"a"},(0,a.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"alter-user",children:"ALTER USER"}),"\n",(0,t.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(s.p,{children:"Modifies user information, such as password, authentication method, or default roles."}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsxs)(s.p,{children:["Individual users can use this command to modify information for themselves. ",(0,t.jsx)(s.code,{children:"user_admin"})," can use this command to modify information for other users."]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-SQL",children:"ALTER USER user_identity [auth_option] [default_role]\n"})}),"\n",(0,t.jsx)(s.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"user_identity"}),' consists of two parts, "user_name" and "host", in the format of ',(0,t.jsx)(s.code,{children:"username@'userhost'"}),'.  For the "host" part, you can use ',(0,t.jsx)(s.code,{children:"%"}),' for fuzzy match. If "host" is not specified, "%" is used by default, meaning that the user can connect to StarRocks from any host.']}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"auth_option"}),' specifies the authentication method. Currently, three authentication methods are supported: StarRocks native password, mysql_native_password, and "authentication_ldap_simple". StarRocks native password is the same as mysql_native_password in logic but slightly differs in syntax. One user identity can use only one authentication method. You can use ALTER USER to modify users\' passwords and authentication methods.']}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-SQL",children:"auth_option: {\n    IDENTIFIED BY 'auth_string'\n    IDENTIFIED WITH mysql_native_password BY 'auth_string'\n    IDENTIFIED WITH mysql_native_password AS 'auth_string'\n    IDENTIFIED WITH authentication_ldap_simple AS 'auth_string'\n    \n}\n"})}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:(0,t.jsx)(s.strong,{children:"Authentication method"})}),(0,t.jsx)(s.th,{children:(0,t.jsx)(s.strong,{children:"Password for user creation"})}),(0,t.jsx)(s.th,{children:(0,t.jsx)(s.strong,{children:"Password for login"})})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Native password"}),(0,t.jsx)(s.td,{children:"Plaintext or ciphertext"}),(0,t.jsx)(s.td,{children:"Plaintext"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"mysql_native_password BY"})}),(0,t.jsx)(s.td,{children:"Plaintext"}),(0,t.jsx)(s.td,{children:"Plaintext"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"mysql_native_password WITH"})}),(0,t.jsx)(s.td,{children:"Ciphertext"}),(0,t.jsx)(s.td,{children:"Plaintext"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"authentication_ldap_simple"})}),(0,t.jsx)(s.td,{children:"Plaintext"}),(0,t.jsx)(s.td,{children:"Plaintext"})]})]})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsx)(s.p,{children:"Note: StarRocks encrypts users' passwords before storing them."}),"\n"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.code,{children:"DEFAULT ROLE"})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-SQL",children:" -- Set specified roles as default roles.\n DEFAULT ROLE <role_name>[, <role_name>, ...]\n -- Set all roles of the user, including roles that will be assigned to this user, as default roles. \n DEFAULT ROLE ALL\n -- No default role is set but the public role is still enabled after a user login. \n DEFAULT ROLE NONE\n"})}),"\n",(0,t.jsx)(s.p,{children:"Before you run ALTER USER to set default roles, make sure that all the roles have been assigned to users. The roles are automatically activated after the user logs in again."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(s.p,{children:"Example 1: Change user's password to a plaintext password."}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-SQL",children:"ALTER USER 'jack' IDENTIFIED BY '123456';\nALTER USER jack@'172.10.1.10' IDENTIFIED WITH mysql_native_password BY '123456';\n"})}),"\n",(0,t.jsx)(s.p,{children:"Example 2: Change user's password to a cyphertext password."}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-SQL",children:"ALTER USER jack@'172.10.1.10' IDENTIFIED BY PASSWORD '*6BB4837EB74329105EE4568DDA7DC67ED2CA2AD9';\nALTER USER jack@'172.10.1.10' IDENTIFIED WITH mysql_native_password AS '*6BB4837EB74329105EE4568DDA7DC67ED2CA2AD9';\n"})}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsx)(s.p,{children:"You can get the encrypted password using the password() function."}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"Example 3: Change the authentication method to LDAP."}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-SQL",children:"ALTER USER jack@'172.10.1.10' IDENTIFIED WITH authentication_ldap_simple;\n"})}),"\n",(0,t.jsx)(s.p,{children:"Example 4: Change the authentication method to LDAP and specify the distinguished name (DN) of the user in LDAP."}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-SQL",children:"CREATE USER jack@'172.10.1.10' IDENTIFIED WITH authentication_ldap_simple AS 'uid=jack,ou=company,dc=example,dc=com';\n"})}),"\n",(0,t.jsxs)(s.p,{children:["Example 5: Change the default roles of the user to ",(0,t.jsx)(s.code,{children:"db_admin"})," and ",(0,t.jsx)(s.code,{children:"user_admin"}),". Note that the user must have been assigned these two roles."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-SQL",children:"ALTER USER 'jack'@'192.168.%' DEFAULT ROLE db_admin, user_admin;\n"})}),"\n",(0,t.jsx)(s.p,{children:"Example 6: Set all roles of the user, including roles that will be assigned to this user as default roles."}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-SQL",children:"ALTER USER 'jack'@'192.168.%' DEFAULT ROLE ALL;\n"})}),"\n",(0,t.jsx)(s.p,{children:"Example 7: Clear all the default roles of the user."}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-SQL",children:"ALTER USER 'jack'@'192.168.%' DEFAULT ROLE NONE;\n"})}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsxs)(s.p,{children:["Note: By default, the ",(0,t.jsx)(s.code,{children:"public"})," role is still activated for the user."]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"references",children:"References"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"/doc/docs/sql-reference/sql-statements/account-management/CREATE%20USER",children:"CREATE USER"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"/doc/docs/sql-reference/sql-statements/account-management/GRANT",children:"GRANT"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"/doc/docs/sql-reference/sql-statements/account-management/SHOW%20USERS",children:"SHOW USERS"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"/doc/docs/sql-reference/sql-statements/account-management/DROP%20USER",children:"DROP USER"})}),"\n"]})]})}const h=function(e={}){const{wrapper:s}=Object.assign({},(0,a.ah)(),e.components);return s?(0,t.jsx)(s,Object.assign({},e,{children:(0,t.jsx)(o,e)})):o(e)}},11151:(e,s,n)=>{n.d(s,{Zo:()=>l,ah:()=>r});var t=n(67294);const a=t.createContext({});function r(e){const s=t.useContext(a);return t.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const i={};function l({components:e,children:s,disableParentContext:n}){let l;return l=n?"function"==typeof e?e({}):e||i:r(e),t.createElement(a.Provider,{value:l},s)}}}]);