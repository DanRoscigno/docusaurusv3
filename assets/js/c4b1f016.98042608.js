"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[67919],{19351:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>t,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var s=r(85893),l=r(11151);const a={},i="Manage user privileges",o={id:"administration/User_privilege",title:"Manage user privileges",description:"This topic describes how to manage users, roles, and privileges in StarRocks.",source:"@site/versioned_docs/version-3.1/administration/User_privilege.md",sourceDirName:"administration",slug:"/administration/User_privilege",permalink:"/doc/docs/administration/User_privilege",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/administration/User_privilege.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"Privileges supported by StarRocks",permalink:"/doc/docs/administration/privilege_item"},next:{title:"Privilege FAQ",permalink:"/doc/docs/administration/privilege_faq"}},t={},c=[{value:"View user and role information",id:"view-user-and-role-information",level:2},{value:"View privilege information",id:"view-privilege-information",level:3},{value:"View user property",id:"view-user-property",level:3},{value:"View roles",id:"view-roles",level:3},{value:"View users",id:"view-users",level:3},{value:"Manage users",id:"manage-users",level:2},{value:"Create a user",id:"create-a-user",level:3},{value:"Alter a user",id:"alter-a-user",level:3},{value:"Alter the default role of a user",id:"alter-the-default-role-of-a-user",level:4},{value:"Alter the property of a user",id:"alter-the-property-of-a-user",level:4},{value:"Reset password for a user",id:"reset-password-for-a-user",level:4},{value:"Reset lost root password",id:"reset-lost-root-password",level:4},{value:"Drop a user",id:"drop-a-user",level:3},{value:"Manage roles",id:"manage-roles",level:2},{value:"Create a role",id:"create-a-role",level:3},{value:"Grant a role",id:"grant-a-role",level:3},{value:"Revoke a role",id:"revoke-a-role",level:3},{value:"Drop a role",id:"drop-a-role",level:3},{value:"Enable all roles",id:"enable-all-roles",level:3},{value:"Manage privileges",id:"manage-privileges",level:2},{value:"Grant privileges",id:"grant-privileges",level:3},{value:"Revoke privileges",id:"revoke-privileges",level:3},{value:"Best practices",id:"best-practices",level:2},{value:"Multi-service access control",id:"multi-service-access-control",level:3},{value:"Customize roles based on scenarios",id:"customize-roles-based-on-scenarios",level:3}];function d(e){const n=Object.assign({h1:"h1",p:"p",h2:"h2",code:"code",h3:"h3",a:"a",ul:"ul",li:"li",pre:"pre",blockquote:"blockquote",strong:"strong",h4:"h4",ol:"ol",img:"img"},(0,l.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"manage-user-privileges",children:"Manage user privileges"}),"\n",(0,s.jsx)(n.p,{children:"This topic describes how to manage users, roles, and privileges in StarRocks."}),"\n",(0,s.jsx)(n.p,{children:"StarRocks employs both role-based access control (RBAC) and identity-based access control (IBAC) to manage privileges within a StarRocks cluster, allowing cluster administrators to easily restrict privileges within the cluster on different granular levels."}),"\n",(0,s.jsx)(n.p,{children:"Within a StarRocks cluster, privileges can be granted to users or roles. A role is a collection of privileges that can be assigned to users or other roles in the cluster as needed. A user can be granted one or more roles, which determine their permissions on different objects."}),"\n",(0,s.jsx)(n.h2,{id:"view-user-and-role-information",children:"View user and role information"}),"\n",(0,s.jsxs)(n.p,{children:["Users with the system-defined role ",(0,s.jsx)(n.code,{children:"user_admin"})," can view all the user and role information within the StarRocks cluster."]}),"\n",(0,s.jsx)(n.h3,{id:"view-privilege-information",children:"View privilege information"}),"\n",(0,s.jsxs)(n.p,{children:["You can view the privileges granted to a user or a role using ",(0,s.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/account-management/SHOW%20GRANTS",children:"SHOW GRANTS"}),"."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"View the privileges of the current user."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"SHOW GRANTS;\n"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"NOTE"})}),"\n",(0,s.jsx)(n.p,{children:"Any user can view their own privileges without needing any privileges."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"View the privileges of a specific user."}),"\n",(0,s.jsxs)(n.p,{children:["The following example shows the privileges of the user ",(0,s.jsx)(n.code,{children:"jack"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"SHOW GRANTS FOR jack@'172.10.1.10';\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"View the privileges of a specific role."}),"\n",(0,s.jsxs)(n.p,{children:["The following example shows the privileges of the role ",(0,s.jsx)(n.code,{children:"example_role"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"SHOW GRANTS FOR ROLE example_role;\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"view-user-property",children:"View user property"}),"\n",(0,s.jsxs)(n.p,{children:["You can view the property of a user using ",(0,s.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/account-management/SET%20PROPERTY",children:"SHOW PROPERTY"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["The following example shows the property of the user ",(0,s.jsx)(n.code,{children:"jack"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"SHOW PROPERTY FOR jack@'172.10.1.10';\n"})}),"\n",(0,s.jsx)(n.h3,{id:"view-roles",children:"View roles"}),"\n",(0,s.jsxs)(n.p,{children:["You can view all the roles within the StarRocks cluster using ",(0,s.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/account-management/SHOW%20ROLES",children:"SHOW ROLES"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"SHOW ROLES;\n"})}),"\n",(0,s.jsx)(n.h3,{id:"view-users",children:"View users"}),"\n",(0,s.jsx)(n.p,{children:"You can view all the users within the StarRocks cluster using SHOW USERS."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"SHOW USERS;\n"})}),"\n",(0,s.jsx)(n.h2,{id:"manage-users",children:"Manage users"}),"\n",(0,s.jsxs)(n.p,{children:["Users with the system-defined role ",(0,s.jsx)(n.code,{children:"user_admin"})," can create users, alter users, and drop users in StarRocks."]}),"\n",(0,s.jsx)(n.h3,{id:"create-a-user",children:"Create a user"}),"\n",(0,s.jsx)(n.p,{children:"You can create a user by specifying the user identity, authentication method, and default role."}),"\n",(0,s.jsxs)(n.p,{children:["StarRocks supports user authentication with login credentials or LDAP authentication. For more information about StarRocks' authentication, see ",(0,s.jsx)(n.a,{href:"/doc/docs/administration/Authentication",children:"Authentication"}),". For more information and advanced instructions on creating a user, see ",(0,s.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/account-management/CREATE%20USER",children:"CREATE USER"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["The following example creates the user ",(0,s.jsx)(n.code,{children:"jack"}),", allows it to connect only from the IP address ",(0,s.jsx)(n.code,{children:"172.10.1.10"}),", sets the password to ",(0,s.jsx)(n.code,{children:"12345"})," for it, and assigns the role ",(0,s.jsx)(n.code,{children:"example_role"})," to it as its default role:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"CREATE USER jack@'172.10.1.10' IDENTIFIED BY '12345' DEFAULT ROLE 'example_role';\n"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"NOTE"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"StarRocks encrypts users' passwords before storing them. You can get the encrypted password using the password() function."}),"\n",(0,s.jsxs)(n.li,{children:["A system-defined default role ",(0,s.jsx)(n.code,{children:"PUBLIC"})," is assigned to a user if no default role is specified during user creation."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"alter-a-user",children:"Alter a user"}),"\n",(0,s.jsx)(n.p,{children:"You can alter the password, default role, or property for a user."}),"\n",(0,s.jsxs)(n.p,{children:["The default role of a user is automatically activated when the user connects to StarRocks. For instructions on how to enable all (default and granted) roles for a user after connection, see ",(0,s.jsx)(n.a,{href:"#enable-all-roles",children:"Enable all roles"}),"."]}),"\n",(0,s.jsx)(n.h4,{id:"alter-the-default-role-of-a-user",children:"Alter the default role of a user"}),"\n",(0,s.jsxs)(n.p,{children:["You can set the default role of a user using ",(0,s.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/account-management/SET_DEFAULT_ROLE",children:"SET DEFAULT ROLE"})," or ",(0,s.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/account-management/ALTER%20USER",children:"ALTER USER"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Both of the following examples set the default role of ",(0,s.jsx)(n.code,{children:"jack"})," to ",(0,s.jsx)(n.code,{children:"db1_admin"}),". Note that ",(0,s.jsx)(n.code,{children:"db1_admin"})," must have been assigned to ",(0,s.jsx)(n.code,{children:"jack"}),"."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Set the default role using SET DEFAULT ROLE:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"SET DEFAULT ROLE 'db1_admin' TO jack@'172.10.1.10';\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Set the default role using ALTER USER:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"ALTER USER jack@'172.10.1.10' DEFAULT ROLE 'db1_admin';\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"alter-the-property-of-a-user",children:"Alter the property of a user"}),"\n",(0,s.jsxs)(n.p,{children:["You can set the property of a user using ",(0,s.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/account-management/SET%20PROPERTY",children:"SET PROPERTY"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["The following example sets the maximum number of connections for user ",(0,s.jsx)(n.code,{children:"jack"})," to ",(0,s.jsx)(n.code,{children:"1000"}),". User identities that have the same user name share the same property."]}),"\n",(0,s.jsxs)(n.p,{children:["Therefore, you only need to set the property for ",(0,s.jsx)(n.code,{children:"jack"})," and this setting takes effect for all the user identities with the user name ",(0,s.jsx)(n.code,{children:"jack"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"SET PROPERTY FOR jack 'max_user_connections' = '1000';\n"})}),"\n",(0,s.jsx)(n.h4,{id:"reset-password-for-a-user",children:"Reset password for a user"}),"\n",(0,s.jsxs)(n.p,{children:["You can reset the password for a user using ",(0,s.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/account-management/SET%20PASSWORD",children:"SET PASSWORD"})," or ",(0,s.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/account-management/ALTER%20USER",children:"ALTER USER"}),"."]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"NOTE"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Any user can reset their own passwords without needing any privileges."}),"\n",(0,s.jsxs)(n.li,{children:["Only the ",(0,s.jsx)(n.code,{children:"root"})," user itself can set its password. If you have lost its password and cannot connect to StarRocks, see ",(0,s.jsx)(n.a,{href:"#reset-lost-root-password",children:"Reset lost root password"})," for more instructions."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Both the following examples reset the password of ",(0,s.jsx)(n.code,{children:"jack"})," to ",(0,s.jsx)(n.code,{children:"54321"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Reset the password using SET PASSWORD:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"SET PASSWORD FOR jack@'172.10.1.10' = PASSWORD('54321');\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Reset the password using ALTER USER:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"ALTER USER jack@'172.10.1.10' IDENTIFIED BY '54321';\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"reset-lost-root-password",children:"Reset lost root password"}),"\n",(0,s.jsxs)(n.p,{children:["If you have lost the password of the ",(0,s.jsx)(n.code,{children:"root"})," user and cannot connect to StarRocks, you can reset it by following these procedures:"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Add the following configuration item to the configuration files ",(0,s.jsx)(n.strong,{children:"fe/conf/fe.conf"})," of ",(0,s.jsx)(n.strong,{children:"all FE nodes"})," to disable user authentication:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-YAML",children:"enable_auth_check = false\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Restart ",(0,s.jsx)(n.strong,{children:"all FE nodes"})," to allow the configuration to take effect."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Bash",children:"./fe/bin/stop_fe.sh\n./fe/bin/start_fe.sh\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Connect from a MySQL client to StarRocks via the ",(0,s.jsx)(n.code,{children:"root"})," user. You do not need to specify the password when user authentication is disabled."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Bash",children:"mysql -h <fe_ip_or_fqdn> -P<fe_query_port> -uroot\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Reset the password for the ",(0,s.jsx)(n.code,{children:"root"})," user."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"SET PASSWORD for root = PASSWORD('xxxxxx');\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Re-enable user authentication by setting the configuration item ",(0,s.jsx)(n.code,{children:"enable_auth_check"})," to ",(0,s.jsx)(n.code,{children:"true"})," in the configuration files ",(0,s.jsx)(n.strong,{children:"fe/conf/fe.conf"})," of ",(0,s.jsx)(n.strong,{children:"all FE nodes"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-YAML",children:"enable_auth_check = true\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Restart ",(0,s.jsx)(n.strong,{children:"all FE nodes"})," to allow the configuration to take effect."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Bash",children:"./fe/bin/stop_fe.sh\n./fe/bin/start_fe.sh\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Connect from a MySQL client to StarRocks using the ",(0,s.jsx)(n.code,{children:"root"})," user and the new password to verify whether the password is reset successfully."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Bash",children:"mysql -h <fe_ip_or_fqdn> -P<fe_query_port> -uroot -p<xxxxxx>\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"drop-a-user",children:"Drop a user"}),"\n",(0,s.jsxs)(n.p,{children:["You can drop a user using ",(0,s.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/account-management/DROP%20USER",children:"DROP USER"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["The following example drops the user ",(0,s.jsx)(n.code,{children:"jack"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"DROP USER jack@'172.10.1.10';\n"})}),"\n",(0,s.jsx)(n.h2,{id:"manage-roles",children:"Manage roles"}),"\n",(0,s.jsxs)(n.p,{children:["Users with the system-defined role ",(0,s.jsx)(n.code,{children:"user_admin"})," can create, grant, revoke, or drop roles in StarRocks."]}),"\n",(0,s.jsx)(n.h3,{id:"create-a-role",children:"Create a role"}),"\n",(0,s.jsxs)(n.p,{children:["You can create a role using ",(0,s.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/account-management/CREATE%20ROLE",children:"CREATE ROLE"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["The following example creates the role ",(0,s.jsx)(n.code,{children:"example_role"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"CREATE ROLE example_role;\n"})}),"\n",(0,s.jsx)(n.h3,{id:"grant-a-role",children:"Grant a role"}),"\n",(0,s.jsxs)(n.p,{children:["You can grant roles to a user or another role using ",(0,s.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/account-management/GRANT",children:"GRANT"}),"."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Grant a role to a user."}),"\n",(0,s.jsxs)(n.p,{children:["The following example grants the role ",(0,s.jsx)(n.code,{children:"example_role"})," to the user ",(0,s.jsx)(n.code,{children:"jack"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"GRANT example_role TO USER jack@'172.10.1.10';\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Grant a role to another role."}),"\n",(0,s.jsxs)(n.p,{children:["The following example grants the role ",(0,s.jsx)(n.code,{children:"example_role"})," to the role ",(0,s.jsx)(n.code,{children:"test_role"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"GRANT example_role TO ROLE test_role;\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"revoke-a-role",children:"Revoke a role"}),"\n",(0,s.jsxs)(n.p,{children:["You can revoke roles from a user or another role using ",(0,s.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/account-management/REVOKE",children:"REVOKE"}),"."]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"NOTE"})}),"\n",(0,s.jsxs)(n.p,{children:["You cannot revoke the system-defined default role ",(0,s.jsx)(n.code,{children:"PUBLIC"})," from a user."]}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Revoke a role from a user."}),"\n",(0,s.jsxs)(n.p,{children:["The following example revokes the role ",(0,s.jsx)(n.code,{children:"example_role"})," from the user ",(0,s.jsx)(n.code,{children:"jack"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"REVOKE example_role FROM USER jack@'172.10.1.10';\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Revoke a role from another role."}),"\n",(0,s.jsxs)(n.p,{children:["The following example revokes the role ",(0,s.jsx)(n.code,{children:"example_role"})," from the role ",(0,s.jsx)(n.code,{children:"test_role"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"REVOKE example_role FROM ROLE test_role;\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"drop-a-role",children:"Drop a role"}),"\n",(0,s.jsxs)(n.p,{children:["You can drop a role using ",(0,s.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/account-management/DROP%20ROLE",children:"DROP ROLE"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["The following example drops the role ",(0,s.jsx)(n.code,{children:"example_role"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"DROP ROLE example_role;\n"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"CAUTION"})}),"\n",(0,s.jsx)(n.p,{children:"System-defined roles cannot be dropped."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"enable-all-roles",children:"Enable all roles"}),"\n",(0,s.jsx)(n.p,{children:"The default roles of a user are roles that are automatically activated each time the user connects to the StarRocks cluster."}),"\n",(0,s.jsx)(n.p,{children:"If you want to enable all the roles (default and granted roles) for all StarRocks users when they connect to the StarRocks cluster, you can perform the following operation."}),"\n",(0,s.jsx)(n.p,{children:"This operation requires the system privilege OPERATE."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"SET GLOBAL activate_all_roles_on_login = TRUE;\n"})}),"\n",(0,s.jsxs)(n.p,{children:["You can also use SET ROLE to activate the roles assigned to you. For example, user ",(0,s.jsx)(n.code,{children:"jack@'172.10.1.10'"})," has roles ",(0,s.jsx)(n.code,{children:"db_admin"})," and ",(0,s.jsx)(n.code,{children:"user_admin"})," but they are not default roles of the user and are not automatically activated when the user connects to StarRocks. If jack@'172.10.1.10' needs to activate ",(0,s.jsx)(n.code,{children:"db_admin"})," and ",(0,s.jsx)(n.code,{children:"user_admin"}),", he can run ",(0,s.jsx)(n.code,{children:"SET ROLE db_admin, user_admin;"}),". Note that SET ROLE overwrites original roles. If you want to enable all your roles, run SET ROLE ALL."]}),"\n",(0,s.jsx)(n.h2,{id:"manage-privileges",children:"Manage privileges"}),"\n",(0,s.jsxs)(n.p,{children:["Users with the system-defined role ",(0,s.jsx)(n.code,{children:"user_admin"})," can grant or revoke privileges in StarRocks."]}),"\n",(0,s.jsx)(n.h3,{id:"grant-privileges",children:"Grant privileges"}),"\n",(0,s.jsxs)(n.p,{children:["You can grant privileges to a user or a role using ",(0,s.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/account-management/GRANT",children:"GRANT"}),"."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Grant a privilege to a user."}),"\n",(0,s.jsxs)(n.p,{children:["The following example grants the SELECT privilege on the table ",(0,s.jsx)(n.code,{children:"sr_member"})," to the user ",(0,s.jsx)(n.code,{children:"jack"}),", and allows ",(0,s.jsx)(n.code,{children:"jack"})," to grant this privilege to other users or roles (by specifying WITH GRANT OPTION in the SQL):"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"GRANT SELECT ON TABLE sr_member TO USER jack@'172.10.1.10' WITH GRANT OPTION;\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Grant a privilege to a role."}),"\n",(0,s.jsxs)(n.p,{children:["The following example grants the SELECT privilege on the table ",(0,s.jsx)(n.code,{children:"sr_member"})," to the role ",(0,s.jsx)(n.code,{children:"example_role"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"GRANT SELECT ON TABLE sr_member TO ROLE example_role;\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"revoke-privileges",children:"Revoke privileges"}),"\n",(0,s.jsxs)(n.p,{children:["You can revoke privileges from a user or a role using ",(0,s.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/account-management/REVOKE",children:"REVOKE"}),"."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Revoke a privilege from a user."}),"\n",(0,s.jsxs)(n.p,{children:["The following example revokes the SELECT privilege on the table ",(0,s.jsx)(n.code,{children:"sr_member"})," from the user ",(0,s.jsx)(n.code,{children:"jack"}),", and disallows ",(0,s.jsx)(n.code,{children:"jack"})," to grant this privilege to other users or roles):"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"REVOKE SELECT ON TABLE sr_member FROM USER jack@'172.10.1.10';\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Revoke a privilege from a role."}),"\n",(0,s.jsxs)(n.p,{children:["The following example revokes the SELECT privilege on the table ",(0,s.jsx)(n.code,{children:"sr_member"})," from the role ",(0,s.jsx)(n.code,{children:"example_role"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"REVOKE SELECT ON TABLE sr_member FROM ROLE example_role;\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"best-practices",children:"Best practices"}),"\n",(0,s.jsx)(n.h3,{id:"multi-service-access-control",children:"Multi-service access control"}),"\n",(0,s.jsx)(n.p,{children:"Usually, a company-owned StarRocks cluster is managed by a sole service provider and maintains multiple lines of business (LOBs), each of which uses one or more databases."}),"\n",(0,s.jsx)(n.p,{children:"As shown below, a StarRocks cluster's users include members from the service provider and two LOBs (A and B). Each LOB is operated by two roles - analysts and executives. Analysts generate and analyze business statements, and executives query the statements."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"User Privileges",src:r(10108).Z+"",width:"1310",height:"868"})}),"\n",(0,s.jsxs)(n.p,{children:["LOB A independently manages the database ",(0,s.jsx)(n.code,{children:"DB_A"}),", and LOB B the database ",(0,s.jsx)(n.code,{children:"DB_B"}),". LOB A and LOB B use different tables in ",(0,s.jsx)(n.code,{children:"DB_C"}),". ",(0,s.jsx)(n.code,{children:"DB_PUBLIC"})," can be accessed by all members of both LOBs."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"User Privileges",src:r(34260).Z+"",width:"1244",height:"1040"})}),"\n",(0,s.jsx)(n.p,{children:"Because different members perform different operations on different databases and tables, we recommend you create roles in accordance with their services and positions, apply only the necessary privileges to each role, and assign these roles to corresponding members. As shown below:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"User Privileges",src:r(62091).Z+"",width:"1908",height:"1030"})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Assign the system-defined roles ",(0,s.jsx)(n.code,{children:"db_admin"}),", ",(0,s.jsx)(n.code,{children:"user_admin"}),", and ",(0,s.jsx)(n.code,{children:"cluster_admin"})," to cluster maintainers, set ",(0,s.jsx)(n.code,{children:"db_admin"})," and ",(0,s.jsx)(n.code,{children:"user_admin"})," as their default roles for daily maintenance, and manually activate the role ",(0,s.jsx)(n.code,{children:"cluster_admin"})," when they need to operate the nodes of the cluster."]}),"\n",(0,s.jsx)(n.p,{children:"Example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"GRANT db_admin, user_admin, cluster_admin TO USER user_platform;\nALTER USER user_platform DEFAULT ROLE db_admin, user_admin;\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Create users for each member within the LOBs, and set complex passwords for each user."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Create roles for each position within the LOBs, and apply the corresponding privileges to each role."}),"\n",(0,s.jsx)(n.p,{children:"For the director of each LOB, grant their role the maximum collection of the privileges their LOBs need, and the corresponding GRANT privileges (by specifying WITH GRANT OPTION in the statement). Therefore, they can assign these privileges to the members of their LOB. Set the role as their default role if their daily work requires it."}),"\n",(0,s.jsx)(n.p,{children:"Example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"GRANT SELECT, ALTER, INSERT, UPDATE, DELETE ON ALL TABLES IN DATABASE DB_A TO ROLE linea_admin WITH GRANT OPTION;\nGRANT SELECT, ALTER, INSERT, UPDATE, DELETE ON TABLE TABLE_C1, TABLE_C2, TABLE_C3 TO ROLE linea_admin WITH GRANT OPTION;\nGRANT linea_admin TO USER user_linea_admin;\nALTER USER user_linea_admin DEFAULT ROLE linea_admin;\n"})}),"\n",(0,s.jsx)(n.p,{children:"For analysts and executives, assign them the role with the corresponding privileges."}),"\n",(0,s.jsx)(n.p,{children:"Example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"GRANT SELECT ON ALL TABLES IN DATABASE DB_A TO ROLE linea_query;\nGRANT SELECT ON TABLE TABLE_C1, TABLE_C2, TABLE_C3 TO ROLE linea_query;\nGRANT linea_query TO USER user_linea_salesa;\nGRANT linea_query TO USER user_linea_salesb;\nALTER USER user_linea_salesa DEFAULT ROLE linea_query;\nALTER USER user_linea_salesb DEFAULT ROLE linea_query;\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["For the database ",(0,s.jsx)(n.code,{children:"DB_PUBLIC"}),", which can be accessed by all cluster users, grant the SELECT privilege on ",(0,s.jsx)(n.code,{children:"DB_PUBLIC"})," to the system-defined role ",(0,s.jsx)(n.code,{children:"public"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"GRANT SELECT ON ALL TABLES IN DATABASE DB_PUBLIC TO ROLE public;\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"You can assign roles to others to achieve role inheritance in complicated scenarios."}),"\n",(0,s.jsxs)(n.p,{children:["For example, if analysts require privileges to write into and query tables in ",(0,s.jsx)(n.code,{children:"DB_PUBLIC"}),", and executives can only query these tables, you can create roles ",(0,s.jsx)(n.code,{children:"public_analysis"})," and ",(0,s.jsx)(n.code,{children:"public_sales"}),", apply relevant privileges to the roles, and assign them to the original roles of analysts and executives respectively."]}),"\n",(0,s.jsx)(n.p,{children:"Example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"CREATE ROLE public_analysis;\nCREATE ROLE public_sales;\nGRANT SELECT, ALTER, INSERT, UPDATE, DELETE ON ALL TABLES IN DATABASE DB_PUBLIC TO ROLE public_analysis;\nGRANT SELECT ON ALL TABLES IN DATABASE DB_PUBLIC TO ROLE public_sales;\nGRANT public_analysis TO ROLE linea_analysis;\nGRANT public_analysis TO ROLE lineb_analysis;\nGRANT public_sales TO ROLE linea_query;\nGRANT public_sales TO ROLE lineb_query;\n"})}),"\n",(0,s.jsx)(n.h3,{id:"customize-roles-based-on-scenarios",children:"Customize roles based on scenarios"}),"\n",(0,s.jsx)(n.p,{children:"We recommend you customize roles to manage privileges and users. The following examples classify a few combinations of privileges for some common scenarios."}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Grant global read-only privileges on StarRocks tables:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"--Create a role.\nCREATE ROLE read_only;\n--Grant the USAGE privilege on all catalogs to the role.\nGRANT USAGE ON ALL CATALOGS TO ROLE read_only;\n--Grant the SELECT privilege on all tables to the role.\nGRANT SELECT ON ALL TABLES IN ALL DATABASES TO ROLE read_only;\n--Grant the SELECT privilege on all views to the role.\nGRANT SELECT ON ALL VIEWS IN ALL DATABASES TO ROLE read_only;\n--Grant the SELECT privilege on all materialized views and the privilege to accelerate queries with them to the role.\nGRANT SELECT ON ALL MATERIALIZED VIEWS IN ALL DATABASES TO ROLE read_only;\n"})}),"\n",(0,s.jsx)(n.p,{children:"And you can further grant the privilege to use UDFs in queries:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"--Grant the USAGE privilege on all database-level UDF to the role.\nGRANT USAGE ON ALL FUNCTIONS IN ALL DATABASES TO ROLE read_only;\n--Grant the USAGE privilege on global UDF to the role.\nGRANT USAGE ON ALL GLOBAL FUNCTIONS TO ROLE read_only;\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Grant global write privileges on StarRocks tables:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"--Create a role.\nCREATE ROLE write_only;\n--Grant the USAGE privilege on all catalogs to the role.\nGRANT USAGE ON ALL CATALOGS TO ROLE write_only;\n--Grant INSERT and UPDATE privileges on all tables to the role.\nGRANT INSERT, UPDATE ON ALL TABLES IN ALL DATABASES TO ROLE write_only;\n--Grant REFRESH privileges on all materialized views to the role.\nGRANT REFRESH ON ALL MATERIALIZED VIEWS IN ALL DATABASES TO ROLE write_only;\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Grant the read-only privilege on a specific external catalog:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"--Create a role.\nCREATE ROLE read_catalog_only;\n-- Grant the USAGE privilege on the destination catalog to the role.\nGRANT USAGE ON CATALOG hive_catalog TO ROLE read_catalog_only;\n--Switch to the corresponding catalog.\nSET CATALOG hive_catalog;\n--Grant the SELECT privilege on all tables and views in all databases.\nGRANT SELECT ON ALL TABLES IN ALL DATABASES TO ROLE read_catalog_only;\nGRANT SELECT ON ALL VIEWS IN ALL DATABASES TO ROLE read_catalog_only;\n"})}),"\n",(0,s.jsx)(n.p,{children:"Note: You can query only Hive table views (since v3.1)."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Grant write-only privileges on a specific external catalog"}),"\n",(0,s.jsx)(n.p,{children:"You can only write data into Iceberg tables (since v3.1)."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"-- Create a role.\nCREATE ROLE write_catalog_only;\n-- Grant the USAGE privilege on the destination catalog to the role.\nGRANT USAGE ON CATALOG iceberg_catalog TO ROLE read_catalog_only;\n-- Switch to the corresponding catalog.\nSET CATALOG iceberg_catalog;\n-- Grant the privilege to write data into Iceberg tables.\nGRANT INSERT ON ALL TABLES IN ALL DATABASES TO ROLE write_catalog_only;\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Grant privileges to perform backup and restore operations on global, database, table, and partition levels."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Grant privileges to perform global backup and restore operations:"}),"\n",(0,s.jsx)(n.p,{children:"The privileges to perform global backup and restore operations allow the role to back up and restore any database, table, or partition. It requires the REPOSITORY privilege on the SYSTEM level, the privileges to create databases in the default catalog, to create tables in any database, and to load and export data on any table."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"--Create a role.\nCREATE ROLE recover;\n--Grant the REPOSITORY privilege on the SYSTEM level.\nGRANT REPOSITORY ON SYSTEM TO ROLE recover;\n--Grant the privilege to create databases in the default catalog.\nGRANT CREATE DATABASE ON CATALOG default_catalog TO ROLE recover;\n--Grant the privilege to create tables in any database.\nGRANT CREATE TABLE ON ALL DATABASE TO ROLE recover;\n--Grant the privilege to load and export data on any table.\nGRANT INSERT, EXPORT ON ALL TABLES IN ALL DATABASES TO ROLE recover;\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Grant the privileges to perform database-level backup and restore operations:"}),"\n",(0,s.jsx)(n.p,{children:"The privileges to perform database-level backup and restore operations require the REPOSITORY privilege on the SYSTEM level, the privilege to create databases in the default catalog, the privilege to create tables in any database, the privilege to load data into any table, and the privilege export data from any table in the database to be backed up."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"--Create a role.\nCREATE ROLE recover_db;\n--Grant the REPOSITORY privilege on the SYSTEM level.\nGRANT REPOSITORY ON SYSTEM TO ROLE recover_db;\n--Grant the privilege to create databases.\nGRANT CREATE DATABASE ON CATALOG default_catalog TO ROLE recover_db;\n--Grant the privilege to create tables.\nGRANT CREATE TABLE ON ALL DATABASE TO ROLE recover_db;\n--Grant the privilege to load data into any table.\nGRANT INSERT ON ALL TABLES IN ALL DATABASES TO ROLE recover_db;\n--Grant the privilege to export data from any table in the database to be backed up.\nGRANT EXPORT ON ALL TABLES IN DATABASE <db_name> TO ROLE recover_db;\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Grant the privileges to perform table-level backup and restore operations:"}),"\n",(0,s.jsx)(n.p,{children:"The privileges to perform table-level backup and restore operations require the REPOSITORY privilege on the SYSTEM level, the privilege to create tables in corresponding databases, the privilege to load data into any table in the database, and the privilege to export data from the table to be backed up."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"--Create a role.\nCREATE ROLE recover_tbl;\n--Grant the REPOSITORY privilege on the SYSTEM level.\nGRANT REPOSITORY ON SYSTEM TO ROLE recover_tbl;\n--Grant the privilege to create tables in corresponding databases.\nGRANT CREATE TABLE ON DATABASE <db_name> TO ROLE recover_tbl;\n--Grant the privilege to load data into any table in a database.\nGRANT INSERT ON ALL TABLES IN DATABASE <db_name> TO ROLE recover_db;\n-- Grant the privilege to export data from the table you want to back up.\nGRANT EXPORT ON TABLE <table_name> TO ROLE recover_tbl;     \n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Grant the privileges to perform partition-level backup and restore operations:"}),"\n",(0,s.jsx)(n.p,{children:"The privileges to perform partition-level backup and restore operations require the REPOSITORY privilege on the SYSTEM level, and the privilege to load and export data on the corresponding table."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"--Create a role.\nCREATE ROLE recover_par;\n--Grant the REPOSITORY privilege on the SYSTEM level.\nGRANT REPOSITORY ON SYSTEM TO ROLE recover_par;\n--Grant the privilege to load and export data on the corresponding table.\nGRANT INSERT, EXPORT ON TABLE <tbl_name> TO ROLE recover_par;\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,l.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(d,e)})):d(e)}},10108:(e,n,r)=>{r.d(n,{Z:()=>s});const s=r.p+"assets/images/user_privilege_1-4974fb294cf73d941d4e7950fef61bdc.png"},34260:(e,n,r)=>{r.d(n,{Z:()=>s});const s=r.p+"assets/images/user_privilege_2-b68c4e88824e53a66d37f68ea1eccb00.png"},62091:(e,n,r)=>{r.d(n,{Z:()=>s});const s=r.p+"assets/images/user_privilege_3-abd736675549c8da604cd515ea0c080f.png"},11151:(e,n,r)=>{r.d(n,{Zo:()=>o,ah:()=>a});var s=r(67294);const l=s.createContext({});function a(e){const n=s.useContext(l);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const i={};function o({components:e,children:n,disableParentContext:r}){let o;return o=r?"function"==typeof e?e({}):e||i:a(e),s.createElement(l.Provider,{value:o},n)}}}]);