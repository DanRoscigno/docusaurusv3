"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[83110],{43802:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>i});var a=n(85893),s=n(11151);const l={},r="SHOW CATALOGS",c={id:"sql-reference/sql-statements/data-manipulation/SHOW_CATALOGS",title:"SHOW CATALOGS",description:"Description",source:"@site/versioned_docs/version-3.1/sql-reference/sql-statements/data-manipulation/SHOW_CATALOGS.md",sourceDirName:"sql-reference/sql-statements/data-manipulation",slug:"/sql-reference/sql-statements/data-manipulation/SHOW_CATALOGS",permalink:"/doc/docs/sql-reference/sql-statements/data-manipulation/SHOW_CATALOGS",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-statements/data-manipulation/SHOW_CATALOGS.md",tags:[],version:"3.1",frontMatter:{},sidebar:"Chinese31",previous:{title:"SHOW BACKUP",permalink:"/doc/docs/sql-reference/sql-statements/data-manipulation/SHOW_BACKUP"},next:{title:"SHOW CREATE CATALOG",permalink:"/doc/docs/sql-reference/sql-statements/data-manipulation/SHOW_CREATE_CATALOG"}},o={},i=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Output",id:"output",level:2},{value:"Examples",id:"examples",level:2}];function d(e){const t=Object.assign({h1:"h1",h2:"h2",p:"p",blockquote:"blockquote",strong:"strong",pre:"pre",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,s.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"show-catalogs",children:"SHOW CATALOGS"}),"\n",(0,a.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,a.jsx)(t.p,{children:"Query all catalogs in the current StarRocks cluster, including the internal catalog and external catalogs."}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"NOTE"})}),"\n",(0,a.jsx)(t.p,{children:"SHOW CATALOGS returns external catalogs to users who have the USAGE privilege on that external catalog. If users or roles do not have this privilege on any external catalog, this command returns only the default_catalog."}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"syntax",children:"Syntax"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-SQL",children:"SHOW CATALOGS\n"})}),"\n",(0,a.jsx)(t.h2,{id:"output",children:"Output"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-SQL",children:"+----------+--------+----------+\n| Catalog  | Type   | Comment  |\n+----------+--------+----------+\n"})}),"\n",(0,a.jsx)(t.p,{children:"The following table describes the fields returned by this statement."}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:(0,a.jsx)(t.strong,{children:"Field"})}),(0,a.jsx)(t.th,{children:(0,a.jsx)(t.strong,{children:"Description"})})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"Catalog"}),(0,a.jsx)(t.td,{children:"The catalog name."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"Type"}),(0,a.jsxs)(t.td,{children:["The catalog type. ",(0,a.jsx)(t.code,{children:"Internal"})," is returned if the catalog is ",(0,a.jsx)(t.code,{children:"default_catalog"}),". The corresponding catalog type is returned if the catalog is an external catalog, such as ",(0,a.jsx)(t.code,{children:"Hive"}),", ",(0,a.jsx)(t.code,{children:"Hudi"}),", or ",(0,a.jsx)(t.code,{children:"Iceberg"}),"."]})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"Comment"}),(0,a.jsxs)(t.td,{children:["The comments of a catalog. StarRocks does not support adding comments to an external catalog. Therefore, the value is ",(0,a.jsx)(t.code,{children:"NULL"})," for an external catalog. If the catalog is ",(0,a.jsx)(t.code,{children:"default_catalog"}),", the comment is ",(0,a.jsx)(t.code,{children:"An internal catalog contains this cluster's self-managed tables."})," by default. ",(0,a.jsx)(t.code,{children:"default_catalog"})," is the only internal catalog in a StarRocks cluster."]})]})]})]}),"\n",(0,a.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(t.p,{children:"Query all catalogs in the current cluster."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-SQL",children:"SHOW CATALOGS\\G\n*************************** 1. row ***************************\nCatalog: default_catalog\n   Type: Internal\nComment: An internal catalog contains this cluster's self-managed tables.\n*************************** 2. row ***************************\nCatalog: hudi_catalog\n   Type: Hudi\nComment: NULL\n*************************** 3. row ***************************\nCatalog: iceberg_catalog\n   Type: Iceberg\nComment: NULL\n"})})]})}const h=function(e={}){const{wrapper:t}=Object.assign({},(0,s.ah)(),e.components);return t?(0,a.jsx)(t,Object.assign({},e,{children:(0,a.jsx)(d,e)})):d(e)}},11151:(e,t,n)=>{n.d(t,{Zo:()=>c,ah:()=>l});var a=n(67294);const s=a.createContext({});function l(e){const t=a.useContext(s);return a.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const r={};function c({components:e,children:t,disableParentContext:n}){let c;return c=n?"function"==typeof e?e({}):e||r:l(e),a.createElement(s.Provider,{value:c},t)}}}]);