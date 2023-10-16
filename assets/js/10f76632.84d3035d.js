"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[36648],{86997:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>a,toc:()=>c});var r=i(85893),n=i(11151);const t={displayed_sidebar:"English"},o="Overview of privileges",a={id:"administration/privilege_overview",title:"Overview of privileges",description:"This topic describes the basic concepts of StarRocks' privilege system. Privileges determine which users can perform which operations on which objects, so that you can more securely manage data and resources in a fine-grained manner.",source:"@site/versioned_docs/version-3.0/administration/privilege_overview.md",sourceDirName:"administration",slug:"/administration/privilege_overview",permalink:"/doc/docs/3.0/administration/privilege_overview",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/administration/privilege_overview.md",tags:[],version:"3.0",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"Privileges supported by StarRocks",permalink:"/doc/docs/3.0/administration/privilege_item"},next:{title:"Analyze query profile",permalink:"/doc/docs/3.0/administration/query_profile"}},l={},c=[{value:"Objects and privileges",id:"objects-and-privileges",level:2},{value:"Users",id:"users",level:2},{value:"User identity",id:"user-identity",level:3},{value:"Grant privileges to users",id:"grant-privileges-to-users",level:3},{value:"Roles",id:"roles",level:2},{value:"System-defined roles",id:"system-defined-roles",level:3},{value:"Custom roles",id:"custom-roles",level:3},{value:"Role hierarchy and privilege inheritance",id:"role-hierarchy-and-privilege-inheritance",level:4},{value:"Active roles",id:"active-roles",level:3},{value:"Default roles",id:"default-roles",level:4},{value:"Manually activate roles",id:"manually-activate-roles",level:4},{value:"References",id:"references",level:2}];function d(e){const s=Object.assign({h1:"h1",p:"p",blockquote:"blockquote",a:"a",ul:"ul",li:"li",strong:"strong",code:"code",img:"img",h2:"h2",h3:"h3",h4:"h4"},(0,n.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h1,{id:"overview-of-privileges",children:"Overview of privileges"}),"\n",(0,r.jsx)(s.p,{children:"This topic describes the basic concepts of StarRocks' privilege system. Privileges determine which users can perform which operations on which objects, so that you can more securely manage data and resources in a fine-grained manner."}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:["NOTE: The privileges described in this topic are available only from v3.0. The privilege framework and syntax in v3.0 are not backward compatible with those in earlier versions. After an upgrade to v3.0, most of your original privileges are still retained except those for specific operations. For the detailed differences, see [Upgrade notes] in ",(0,r.jsx)(s.a,{href:"/doc/docs/3.0/administration/privilege_item",children:"Privileges supported in StarRocks"}),"."]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"StarRocks adopts two privilege models:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Role-based access control (RBAC): Privileges are assigned to roles, which are then assigned to users. In this case, privileges are passed to users through roles."}),"\n",(0,r.jsx)(s.li,{children:"Identity-based access control (IBAC): Privileges are directly assigned to user identities."}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"Therefore, the maximum privilege scope of each user identity is the union of its own privileges and the privileges of the roles assigned to this user identity."}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Basic concepts"})," for understanding StarRocks' privilege system:"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Object"}),": An entity to which access can be granted. Unless allowed by a grant, access is denied. Examples of objects include CATALOG, DATABASE, TABLE, and VIEW. For more information, see ",(0,r.jsx)(s.a,{href:"/doc/docs/3.0/administration/privilege_item",children:"Privileges supported in StarRocks"}),"."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Privilege"}),": A defined level of access to an object. Multiple privileges can be used to control the granularity of access granted on an object. Privileges are object-specific. Different objects may have different privileges. Examples of privileges include SELECT, ALTER, and DROP."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"User identity"}),": the unique identity of a user and also the entity to which privileges can be granted. User identity is represented as ",(0,r.jsx)(s.code,{children:"username@'userhost'"}),", consisting of username and the IP from which the user logs in. Use identity simplifies attribute configuration. User identities that share the same user name share the same attribute. If you configure an attribute for a username, this attribute takes effect on all user identities that share this username."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Role"}),": An entity to which privileges can be granted. Roles are an abstract collection of privileges. Roles can in turn assigned to users. Roles can also be assigned to other roles, creating a role hierarchy. To facilitate data management, StarRocks provides system-defined roles. To allow for more flexibility, you can also create custom roles according to business requirements."]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"The following figure shows an example of privilege management under the RBAC and IBAC privilege models."}),"\n",(0,r.jsx)(s.p,{children:"In the models, access to objects is allowed through privileges assigned to roles and users. Roles are in turn assigned to other roles or users."}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{alt:"privilege management",src:i(69532).Z+"",width:"1666",height:"664"})}),"\n",(0,r.jsx)(s.h2,{id:"objects-and-privileges",children:"Objects and privileges"}),"\n",(0,r.jsx)(s.p,{children:"Objects have a logical hierarchy, which is related to the concept they represent. For example, Database is contained in Catalog, and Table, View, Materialized View, and Function are contained in Database. The following figure shows the object hierarchy in the StarRocks system."}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{alt:"privilege objects",src:i(34784).Z+"",width:"1464",height:"944"})}),"\n",(0,r.jsxs)(s.p,{children:["Each object has a set of privilege items that can be granted. These privileges define which operations can be performed on these objects. You can grant and revoke privileges from roles or users through the ",(0,r.jsx)(s.a,{href:"/doc/docs/3.0/sql-reference/sql-statements/account-management/GRANT",children:"GRANT"})," and ",(0,r.jsx)(s.a,{href:"/doc/docs/3.0/sql-reference/sql-statements/account-management/REVOKE",children:"REVOKE"})," commands."]}),"\n",(0,r.jsx)(s.h2,{id:"users",children:"Users"}),"\n",(0,r.jsx)(s.h3,{id:"user-identity",children:"User identity"}),"\n",(0,r.jsxs)(s.p,{children:["In StarRocks, each user is identified by a unique user ID. It consists of the IP address (user host) and username, in the format of ",(0,r.jsx)(s.code,{children:"username @'userhost'"}),". StarRocks identifies users with the same username but from different IP addresses as different user identities. For example, ",(0,r.jsx)(s.code,{children:"user1@'``starrocks.com``'"})," and ",(0,r.jsx)(s.code,{children:"user1@'``mirrorship.com``'"})," are two user identities."]}),"\n",(0,r.jsxs)(s.p,{children:["Another representation of user identity is ",(0,r.jsx)(s.code,{children:"username @['domain']"}),", where ",(0,r.jsx)(s.code,{children:"domain"})," is a domain name that can be resolved by DNS as a set of IP addresses. ",(0,r.jsx)(s.code,{children:"username @['domain']"})," is finally represented as a set of ",(0,r.jsx)(s.code,{children:"username@'userhost'"}),". You can use ",(0,r.jsx)(s.code,{children:"%"})," for the ",(0,r.jsx)(s.code,{children:"userhost"})," part for fuzzy match. If ",(0,r.jsx)(s.code,{children:"userhost"})," is not specified, it defaults to ",(0,r.jsx)(s.code,{children:"'%'"}),", which means users of the same name logged in from any host."]}),"\n",(0,r.jsx)(s.h3,{id:"grant-privileges-to-users",children:"Grant privileges to users"}),"\n",(0,r.jsx)(s.p,{children:"Users are entities to which privileges can be granted. Both privileges and roles can be assigned to users. The maximum privilege scope of each user identity is the union of its own privileges and the privileges of the roles assigned to this user identity. StarRocks ensures that each user can only perform authorized operations."}),"\n",(0,r.jsxs)(s.p,{children:["We recommend that you ",(0,r.jsx)(s.strong,{children:"use roles to pass privileges"})," in most cases. For example, after you create a role, you can grant privileges to the role and then assign the role to users. If you want to grant temporary or special privileges, you can directly grant them to users. This simplifies privilege management and offers flexibility."]}),"\n",(0,r.jsx)(s.h2,{id:"roles",children:"Roles"}),"\n",(0,r.jsxs)(s.p,{children:["Roles are the entities to which privileges can be granted and revoked. Roles can be seen as a collection of privileges that can be assigned to users, to allow them to perform required actions. A user can be assigned multiple roles so they can perform different actions using separate sets of privileges. To simplify management, StarRocks recommends that you ",(0,r.jsx)(s.strong,{children:"manage privileges through roles"}),". Special and temporary privileges can be directly granted to users."]}),"\n",(0,r.jsxs)(s.p,{children:["To facilitate management, StarRocks provides several ",(0,r.jsx)(s.strong,{children:"system-defined roles"})," with specific privileges, which helps you meet daily management and maintenance requirements. You can also flexibly ",(0,r.jsx)(s.strong,{children:"customize roles"})," to meet specific business needs and security needs. Note that the privilege scope of system-defined roles cannot be modified."]}),"\n",(0,r.jsxs)(s.p,{children:["After a role is activated, users can perform operations that are authorized by the role. You can set ",(0,r.jsx)(s.strong,{children:"default roles"})," that are automatically activated when the user logs in. Users can also manually activate a role owned by this used in the current session."]}),"\n",(0,r.jsx)(s.h3,{id:"system-defined-roles",children:"System-defined roles"}),"\n",(0,r.jsx)(s.p,{children:"StarRocks provides several types of system-defined roles."}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{alt:"roles",src:i(74098).Z+"",width:"856",height:"548"})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"root"}),": has global privileges. By default, the ",(0,r.jsx)(s.code,{children:"root"})," user has the ",(0,r.jsx)(s.code,{children:"root"})," role.\nAfter a StarRocks cluster is created, the system automatically generates a root user with root privileges. Because the root user and role have all privileges of the system, we recommend that you create new users and roles for subsequent operations to prevent any risky operations. Keep the password of the root user properly."]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"cluster_admin"}),": has cluster management privileges to perform node-related operations, such as adding or dropping nodes.\n",(0,r.jsx)(s.code,{children:"cluster_admin"})," has the privileges to add, drop, and decommission cluster nodes. We recommend that you do not assign ",(0,r.jsx)(s.code,{children:"cluster_admin"})," or any custom roles that contain this role as a default role to any user, to prevent unexpected node changes."]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"db_admin"}),": has database management privileges, including the privileges to perform all operations on  catalog, database, table, view, materialized view, function, global function, resource group, and plug-ins."]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"user_admin"}),": has administrative privileges on users and roles, including privileges to create users, roles, and privileges."]}),"\n",(0,r.jsxs)(s.p,{children:["The above system-defined roles are designed to aggregate complex database privileges to facilitate your daily management. ",(0,r.jsx)(s.strong,{children:"The privilege scope of the above roles cannot be modified."})]}),"\n",(0,r.jsxs)(s.p,{children:["In addition, if you need to grant specific privileges to all users, StarRocks also provides a system-defined role ",(0,r.jsx)(s.code,{children:"public"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"public"}),": This role is owned by any user and activated by default in any session, including adding new users. The ",(0,r.jsx)(s.code,{children:"public"})," role does not have any privileges by default. You can modify the privileges scope of this role."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"custom-roles",children:"Custom roles"}),"\n",(0,r.jsx)(s.p,{children:"You can create custom roles to meet specific business requirements and modify their privilege scope. At the same time, for the convenience of management, you can assign roles to other roles to create privilege hierarchy and inheritance. Then, the privileges associated with a role are inherited by another role."}),"\n",(0,r.jsx)(s.h4,{id:"role-hierarchy-and-privilege-inheritance",children:"Role hierarchy and privilege inheritance"}),"\n",(0,r.jsx)(s.p,{children:"The following figure shows an example of privilege inheritance."}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsx)(s.p,{children:"Note: The maximum number of inheritance levels for a role is 16. The inheritance relationship cannot be bidirectional."}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{alt:"role inheritance",src:i(15255).Z+"",width:"1888",height:"722"})}),"\n",(0,r.jsx)(s.p,{children:"As shown in the figure:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"role_s"})," is assigned to ",(0,r.jsx)(s.code,{children:"role_p"}),". ",(0,r.jsx)(s.code,{children:"role_p"})," implicitly inherits ",(0,r.jsx)(s.code,{children:"priv_1"})," of ",(0,r.jsx)(s.code,{children:"role_s"}),"."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"role_p"})," is assigned to ",(0,r.jsx)(s.code,{children:"role_g"}),", ",(0,r.jsx)(s.code,{children:"role_g"})," implicitly inherits ",(0,r.jsx)(s.code,{children:"priv_2"})," of ",(0,r.jsx)(s.code,{children:"role_p"})," and ",(0,r.jsx)(s.code,{children:"priv_1"})," of ",(0,r.jsx)(s.code,{children:"role_s"}),"."]}),"\n",(0,r.jsx)(s.li,{children:"After a role is assigned to a user, the user also has the privileges of this role."}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"active-roles",children:"Active roles"}),"\n",(0,r.jsxs)(s.p,{children:["Active roles allow users to apply the privileges of the role under the current session. You can use ",(0,r.jsx)(s.code,{children:"SELECT CURRENT_ROLE();"})," to view active roles in the current session. For more information, see ",(0,r.jsx)(s.a,{href:"/doc/docs/3.0/sql-reference/sql-functions/utility-functions/current_role",children:"current_role"}),"."]}),"\n",(0,r.jsx)(s.h4,{id:"default-roles",children:"Default roles"}),"\n",(0,r.jsxs)(s.p,{children:["Default roles are automatically activated when the user logs in to the cluster. It can be a role owned by one or more users. The administrator can set default roles using the ",(0,r.jsx)(s.code,{children:"DEFAULT ROLE"})," keyword in ",(0,r.jsx)(s.a,{href:"/doc/docs/3.0/sql-reference/sql-statements/account-management/CREATE_USER",children:"CREATE USER"})," and can change default roles using ",(0,r.jsx)(s.a,{href:"/doc/docs/3.0/sql-reference/sql-statements/account-management/ALTER_USER",children:"ALTER USER"}),"."]}),"\n",(0,r.jsxs)(s.p,{children:["Users can also change their default roles using ",(0,r.jsx)(s.a,{href:"/doc/docs/3.0/sql-reference/sql-statements/account-management/SET_DEFAULT_ROLE",children:"SET DEFAULT ROLE"}),"."]}),"\n",(0,r.jsxs)(s.p,{children:["Default roles provide basic privilege protection for users. For example, User A has ",(0,r.jsx)(s.code,{children:"role_query"})," and ",(0,r.jsx)(s.code,{children:"role_delete"}),", which has query and delete privilege respectively. We recommend that you only use ",(0,r.jsx)(s.code,{children:"role_query"})," as the default role to prevent data loss caused by high-risk operations such as ",(0,r.jsx)(s.code,{children:"DELETE"})," or ",(0,r.jsx)(s.code,{children:"TRUNCATE"}),". If you need to perform these operations, you can do it after manually setting active roles."]}),"\n",(0,r.jsxs)(s.p,{children:["A user who does not have a default role still has the ",(0,r.jsx)(s.code,{children:"public"})," role, which is automatically activated after the user logs in to the cluster."]}),"\n",(0,r.jsx)(s.h4,{id:"manually-activate-roles",children:"Manually activate roles"}),"\n",(0,r.jsxs)(s.p,{children:["In addition to default roles, users can also manually activate one or more existing roles within a session. You can use ",(0,r.jsx)(s.a,{href:"/doc/docs/3.0/sql-reference/sql-statements/account-management/SHOW_GRANTS",children:"SHOW GRANTS"})," to view the privileges and roles that can be activated, and use ",(0,r.jsx)(s.a,{href:"/doc/docs/3.0/sql-reference/sql-statements/account-management/SET_ROLE",children:"SET ROLE"})," to configure active roles that are effective in the current session."]}),"\n",(0,r.jsxs)(s.p,{children:["Note that the SET ROLE command overwrites each other. For example, after a user logs in, the ",(0,r.jsx)(s.code,{children:"default_role"})," is activated by default. Then the user runs ",(0,r.jsx)(s.code,{children:"SET ROLE role_s"}),". At this time, the user has only the privileges of ",(0,r.jsx)(s.code,{children:"role_s"})," and their own privileges. ",(0,r.jsx)(s.code,{children:"default_role"})," is overwritten."]}),"\n",(0,r.jsx)(s.h2,{id:"references",children:"References"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"/doc/docs/3.0/administration/privilege_item",children:"Privileges supported by StarRocks"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"/doc/docs/3.0/administration/User_privilege",children:"Manage user privileges"})}),"\n"]})]})}const h=function(e={}){const{wrapper:s}=Object.assign({},(0,n.ah)(),e.components);return s?(0,r.jsx)(s,Object.assign({},e,{children:(0,r.jsx)(d,e)})):d(e)}},69532:(e,s,i)=>{i.d(s,{Z:()=>r});const r=i.p+"assets/images/privilege-manage-a14ee8540acca96c0bd82bf715fd0bf2.png"},34784:(e,s,i)=>{i.d(s,{Z:()=>r});const r=i.p+"assets/images/privilege-object-d96d98d9ae40611b7284915429751b3d.png"},74098:(e,s,i)=>{i.d(s,{Z:()=>r});const r=i.p+"assets/images/privilege-role-99f0408f80bfa72d3db5782c3a1c7259.png"},15255:(e,s,i)=>{i.d(s,{Z:()=>r});const r=i.p+"assets/images/privilege-role_inheri-5defbbe01c0a2800781249354c0166ab.png"},11151:(e,s,i)=>{i.d(s,{Zo:()=>a,ah:()=>t});var r=i(67294);const n=r.createContext({});function t(e){const s=r.useContext(n);return r.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const o={};function a({components:e,children:s,disableParentContext:i}){let a;return a=i?"function"==typeof e?e({}):e||o:t(e),r.createElement(n.Provider,{value:a},s)}}}]);