"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[28944],{32635:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>a,contentTitle:()=>n,default:()=>o,frontMatter:()=>d,metadata:()=>l,toc:()=>c});var t=s(85893),i=s(11151);const d={},n="Privileges supported by StarRocks",l={id:"administration/privilege_item",title:"Privileges supported by StarRocks",description:"Privileges granted to a user or role determine which operations the user or role can perform on certain objects. Privileges can be used to implement fine-grained access control to safeguard data security.",source:"@site/versioned_docs/version-3.0/administration/privilege_item.md",sourceDirName:"administration",slug:"/administration/privilege_item",permalink:"/doc/docs/3.0/administration/privilege_item",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/administration/privilege_item.md",tags:[],version:"3.0",frontMatter:{},sidebar:"Chinese31",previous:{title:"Overview of privileges",permalink:"/doc/docs/3.0/administration/privilege_overview"},next:{title:"Manage user privileges",permalink:"/doc/docs/3.0/administration/User_privilege"}},a={},c=[{value:"Privilege list",id:"privilege-list",level:2},{value:"SYSTEM",id:"system",level:3},{value:"RESOURCE GROUP",id:"resource-group",level:3},{value:"RESOURCE",id:"resource",level:3},{value:"USER",id:"user",level:3},{value:"GLOBAL FUNCTION (Global UDFs)",id:"global-function-global-udfs",level:3},{value:"CATALOG",id:"catalog",level:3},{value:"DATABASE",id:"database",level:3},{value:"TABLE",id:"table",level:3},{value:"VIEW",id:"view",level:3},{value:"MATERIALIZED VIEW",id:"materialized-view",level:3},{value:"FUNCTION (Database-level UDFs)",id:"function-database-level-udfs",level:3},{value:"Upgrade notes",id:"upgrade-notes",level:2}];function h(e){const r=Object.assign({h1:"h1",p:"p",a:"a",blockquote:"blockquote",h2:"h2",h3:"h3",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",code:"code",strong:"strong"},(0,i.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h1,{id:"privileges-supported-by-starrocks",children:"Privileges supported by StarRocks"}),"\n",(0,t.jsx)(r.p,{children:"Privileges granted to a user or role determine which operations the user or role can perform on certain objects. Privileges can be used to implement fine-grained access control to safeguard data security."}),"\n",(0,t.jsxs)(r.p,{children:["This topic describes privileges provided by StarRocks on different objects and their meanings. Privileges are granted and revoked by using ",(0,t.jsx)(r.a,{href:"/doc/docs/3.0/sql-reference/sql-statements/account-management/GRANT",children:"GRANT"})," and ",(0,t.jsx)(r.a,{href:"/doc/docs/3.0/sql-reference/sql-statements/account-management/REVOKE",children:"REVOKE"}),". The privileges that can be granted on an object are specific to the object type. For example, table privileges are different from database privileges."]}),"\n",(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsxs)(r.p,{children:["NOTE: The privileges described in this topic are available only from v3.0. The privilege framework and syntax in v3.0 are not backward compatible with those in earlier versions. After an upgrade to v3.0, most of your original privileges are still retained except those for specific operations. For the detailed differences, see ",(0,t.jsx)(r.a,{href:"#upgrade-notes",children:"Upgrade notes"})," at the end of this topic."]}),"\n"]}),"\n",(0,t.jsx)(r.h2,{id:"privilege-list",children:"Privilege list"}),"\n",(0,t.jsx)(r.p,{children:"This section describes privileges that are available on different objects."}),"\n",(0,t.jsx)(r.h3,{id:"system",children:"SYSTEM"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Privilege"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"NODE"}),(0,t.jsxs)(r.td,{children:["Operates nodes, such as adding, deleting, or decommissioning nodes. To ensure cluster security, this privilege cannot be directly granted to users or roles. The ",(0,t.jsx)(r.code,{children:"cluster_admin"})," role has this privilege."]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"GRANT"}),(0,t.jsxs)(r.td,{children:["Creates a user or role, alters a user or role, or grants privileges to a user or role. This privilege cannot be directly granted to users or roles. The ",(0,t.jsx)(r.code,{children:"user_admin"})," role has this privilege."]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"CREATE RESOURCE GROUP"}),(0,t.jsx)(r.td,{children:"Creates a resource group."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"CREATE RESOURCE"}),(0,t.jsx)(r.td,{children:"Creates resources for Spark Load jobs or external tables."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"CREATE EXTERNAL CATALOG"}),(0,t.jsx)(r.td,{children:"Creates an external catalog."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"PLUGIN"}),(0,t.jsx)(r.td,{children:"Installs or uninstalls a plugin."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"REPOSITORY"}),(0,t.jsx)(r.td,{children:"Creates, deletes, or views repositories."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"BLACKLIST"}),(0,t.jsx)(r.td,{children:"Creates, deletes, or displays SQL blacklists."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"FILE"}),(0,t.jsx)(r.td,{children:"Creates, deletes, or views files."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"OPERATE"}),(0,t.jsx)(r.td,{children:"Manages replicas, configuration items, variables, and transactions."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"CREATE GLOBAL FUNCTION"}),(0,t.jsx)(r.td,{children:"Creates a global UDF."})]})]})]}),"\n",(0,t.jsx)(r.h3,{id:"resource-group",children:"RESOURCE GROUP"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Privilege"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"ALTER"}),(0,t.jsx)(r.td,{children:"Adds or deletes classifiers for a resource group."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"DROP"}),(0,t.jsx)(r.td,{children:"Deletes a resource group."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"ALL"}),(0,t.jsx)(r.td,{children:"Has all the above privileges on a resource grup."})]})]})]}),"\n",(0,t.jsx)(r.h3,{id:"resource",children:"RESOURCE"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Privilege"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"USAGE"}),(0,t.jsx)(r.td,{children:"Uses a resource."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"ALTER"}),(0,t.jsx)(r.td,{children:"Alters a resource."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"DROP"}),(0,t.jsx)(r.td,{children:"Deletes a resource."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"ALL"}),(0,t.jsx)(r.td,{children:"Has all the above privileges on a resoure."})]})]})]}),"\n",(0,t.jsx)(r.h3,{id:"user",children:"USER"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Privilege"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsx)(r.tbody,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"IMPERSONATE"}),(0,t.jsx)(r.td,{children:"Allows user A to perform operations as user B."})]})})]}),"\n",(0,t.jsx)(r.h3,{id:"global-function-global-udfs",children:"GLOBAL FUNCTION (Global UDFs)"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Privilege"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"USAGE"}),(0,t.jsx)(r.td,{children:"Uses a function in a query."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"DROP"}),(0,t.jsx)(r.td,{children:"Deletes a function."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"ALL"}),(0,t.jsx)(r.td,{children:"Has all the above privileges on a function."})]})]})]}),"\n",(0,t.jsx)(r.h3,{id:"catalog",children:"CATALOG"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Object"}),(0,t.jsx)(r.th,{children:"Privilege"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"CATALOG (internal catalog)"}),(0,t.jsx)(r.td,{children:"USAGE"}),(0,t.jsx)(r.td,{children:"Uses the internal catalog (default_catalog)."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"CATALOG (internal catalog)"}),(0,t.jsx)(r.td,{children:"CREATE DATABASE"}),(0,t.jsx)(r.td,{children:"Creates databases in the internal catalog."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"CATALOG (internal catalog)"}),(0,t.jsx)(r.td,{children:"ALL"}),(0,t.jsx)(r.td,{children:"Has all the above privileges on the internal catalog."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"CATALOG (external catalog)"}),(0,t.jsx)(r.td,{children:"USAGE"}),(0,t.jsx)(r.td,{children:"Uses an external catalog to view tables in it."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"CATALOG (external catalog)"}),(0,t.jsx)(r.td,{children:"DROP"}),(0,t.jsx)(r.td,{children:"Deletes an external catalog."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"CATALOG (external catalog)"}),(0,t.jsx)(r.td,{children:"ALL"}),(0,t.jsx)(r.td,{children:"Has all the above privileges on the external catalog."})]})]})]}),"\n",(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsx)(r.p,{children:"Notes: StarRocks internal catalog cannot be deleted."}),"\n"]}),"\n",(0,t.jsx)(r.h3,{id:"database",children:"DATABASE"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Privilege"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"ALTER"}),(0,t.jsx)(r.td,{children:"Sets properties for a database, rename a database, or sets quotas for a database."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"DROP"}),(0,t.jsx)(r.td,{children:"Deletes a database."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"CREATE TABLE"}),(0,t.jsx)(r.td,{children:"Creates tables in a database."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"CREATE VIEW"}),(0,t.jsx)(r.td,{children:"Creates a view."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"CREATE FUNCTION"}),(0,t.jsx)(r.td,{children:"Creates a function."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"CREATE MATERIALIZED VIEW"}),(0,t.jsx)(r.td,{children:"Creates a materialized view."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"ALL"}),(0,t.jsx)(r.td,{children:"Has all the above privileges on a database."})]})]})]}),"\n",(0,t.jsx)(r.h3,{id:"table",children:"TABLE"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Privilege"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"ALTER"}),(0,t.jsx)(r.td,{children:"Modifies a table or refreshes metadata in an external table."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"DROP"}),(0,t.jsx)(r.td,{children:"Drops a table."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"SELECT"}),(0,t.jsx)(r.td,{children:"Queries data in a table."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"INSERT"}),(0,t.jsx)(r.td,{children:"Inserts data into a StarRocks table."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"UPDATE"}),(0,t.jsx)(r.td,{children:"Updates data in a table."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"EXPORT"}),(0,t.jsx)(r.td,{children:"Exports data from a StarRocks table."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"DELETE"}),(0,t.jsx)(r.td,{children:"Deletes data from a table based on the specified condition or deletes all the data from a table."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"ALL"}),(0,t.jsx)(r.td,{children:"Has all the above privileges on a table."})]})]})]}),"\n",(0,t.jsx)(r.h3,{id:"view",children:"VIEW"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Privilege"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"SELECT"}),(0,t.jsx)(r.td,{children:"Queries data in a view."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"ALTER"}),(0,t.jsx)(r.td,{children:"Modifies the definition of a view."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"DROP"}),(0,t.jsx)(r.td,{children:"Deletes a logical view."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"ALL"}),(0,t.jsx)(r.td,{children:"Has all the above privileges on a view."})]})]})]}),"\n",(0,t.jsx)(r.h3,{id:"materialized-view",children:"MATERIALIZED VIEW"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Privilege"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"SELECT"}),(0,t.jsx)(r.td,{children:"Queries a materialized view to accelerate queries."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"ALTER"}),(0,t.jsx)(r.td,{children:"Changes a materialized view."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"REFRESH"}),(0,t.jsx)(r.td,{children:"Refreshes a materialized view."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"DROP"}),(0,t.jsx)(r.td,{children:"Deletes a materialized view."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"ALL"}),(0,t.jsx)(r.td,{children:"Has all the above privileges on a materialized view."})]})]})]}),"\n",(0,t.jsx)(r.h3,{id:"function-database-level-udfs",children:"FUNCTION (Database-level UDFs)"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"USAGE"}),(0,t.jsx)(r.th,{children:"Uses a function."})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"DROP"}),(0,t.jsx)(r.td,{children:"Deletes a function."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"ALL"}),(0,t.jsx)(r.td,{children:"Has all the above privileges on a function."})]})]})]}),"\n",(0,t.jsx)(r.h2,{id:"upgrade-notes",children:"Upgrade notes"}),"\n",(0,t.jsx)(r.p,{children:"During an upgrade from v2.x to v3.0, some of your operations may be unable to perform due to the introduction of the new privilege system. The following table describes the changes before and after the upgrade."}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:(0,t.jsx)(r.strong,{children:"Operation"})}),(0,t.jsx)(r.th,{children:(0,t.jsx)(r.strong,{children:"Commands involved"})}),(0,t.jsx)(r.th,{children:(0,t.jsx)(r.strong,{children:"Before"})}),(0,t.jsx)(r.th,{children:(0,t.jsx)(r.strong,{children:"After"})})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Change table"}),(0,t.jsx)(r.td,{children:"ALTER TABLE, CANCEL ALTER TABLE"}),(0,t.jsxs)(r.td,{children:["Users who have the ",(0,t.jsx)(r.code,{children:"LOAD_PRIV"})," privilege on a table or the database to which the table belongs can perform the ",(0,t.jsx)(r.code,{children:"ALTER TABLE"})," and ",(0,t.jsx)(r.code,{children:"CANCEL ALTER TABLE"})," operations."]}),(0,t.jsx)(r.td,{children:"You must have the ALTER privilege on the table to perform these two operations."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Refresh external table"}),(0,t.jsx)(r.td,{children:"REFRESH EXTERNAL TABLE"}),(0,t.jsxs)(r.td,{children:["Users who have the ",(0,t.jsx)(r.code,{children:"LOAD_PRIV"})," privilege on an external table can refresh the external table."]}),(0,t.jsx)(r.td,{children:"You must have the ALTER privilege on the external table to perform this operation."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Backup and restore"}),(0,t.jsx)(r.td,{children:"BACKUP, RESTORE"}),(0,t.jsxs)(r.td,{children:["Users who have the ",(0,t.jsx)(r.code,{children:"LOAD_PRIV"})," privilege on a database can back up and restore the database or any table in the database."]}),(0,t.jsx)(r.td,{children:"The administrator must grant backup and restore privileges to users again after the upgrade."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Recover after deletion"}),(0,t.jsx)(r.td,{children:"RECOVER"}),(0,t.jsxs)(r.td,{children:["Users who have the ",(0,t.jsx)(r.code,{children:"ALTER_PRIV"}),", ",(0,t.jsx)(r.code,{children:"CREATE_PRIV"}),", and ",(0,t.jsx)(r.code,{children:"DROP_PRIV"})," privileges on the database and table can recover the database and table."]}),(0,t.jsx)(r.td,{children:"You must have the CREATE DATABASE privilege on the default_catalog to recover the database. You must have the CREATE TABLE privilege on the database and the DROP privilege on the table."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Create and change users"}),(0,t.jsx)(r.td,{children:"CREATE USER, ALTER USER"}),(0,t.jsxs)(r.td,{children:["Users who have the ",(0,t.jsx)(r.code,{children:"GRANT_PRIV"})," privilege on the database can create and change users."]}),(0,t.jsxs)(r.td,{children:["You must have the ",(0,t.jsx)(r.code,{children:"user_admin"})," role to create and change users."]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Grant and revoke privileges"}),(0,t.jsx)(r.td,{children:"GRANT, REVOKE"}),(0,t.jsxs)(r.td,{children:["Users who have the ",(0,t.jsx)(r.code,{children:"GRANT_PRIV"})," privilege on an object can grant privileges on the object to other users or roles."]}),(0,t.jsxs)(r.td,{children:["After the upgrade, you can still grant the privileges you already have on that object to other users or roles after the upgrade.",(0,t.jsx)("br",{}),"In the new privilege system: ",(0,t.jsxs)("ul",{children:[(0,t.jsxs)("li",{children:["You must have the ",(0,t.jsx)(r.code,{children:"user_admin"})," role to grant privileges to other users or roles."]}),(0,t.jsxs)("li",{children:["If your GRANT statement includes ",(0,t.jsx)(r.code,{children:"WITH GRANT OPTION"}),", you can grant the privileges involved in the statement to other users or roles. "]})]})]})]})]})]}),"\n",(0,t.jsx)(r.p,{children:"In v2.x, StarRocks does not fully implement role-based access control (RBAC). When you assign a role to a user, StarRocks directly grants all the privileges of the role to the user, instead of the role itself. Therefore, the user does not actually own the role."}),"\n",(0,t.jsx)(r.p,{children:"In v3.0, StarRocks renovates its privilege system. After an upgrade to v3.0, your original roles are retained but there is still no ownership between users and roles. If you want to use the new RBAC system, perform the GRANT operation to assign roles and privileges."})]})}const o=function(e={}){const{wrapper:r}=Object.assign({},(0,i.ah)(),e.components);return r?(0,t.jsx)(r,Object.assign({},e,{children:(0,t.jsx)(h,e)})):h(e)}},11151:(e,r,s)=>{s.d(r,{Zo:()=>l,ah:()=>d});var t=s(67294);const i=t.createContext({});function d(e){const r=t.useContext(i);return t.useMemo((()=>"function"==typeof e?e(r):{...r,...e}),[r,e])}const n={};function l({components:e,children:r,disableParentContext:s}){let l;return l=s?"function"==typeof e?e({}):e||n:d(e),t.createElement(i.Provider,{value:l},r)}}}]);