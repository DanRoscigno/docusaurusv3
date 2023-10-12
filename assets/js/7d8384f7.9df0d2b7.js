"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[64907],{45734:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>r,contentTitle:()=>s,default:()=>h,frontMatter:()=>c,metadata:()=>o,toc:()=>d});var n=t(85893),l=t(11151);const c={},s="Default catalog",o={id:"data_source/catalog/default_catalog",title:"Default catalog",description:"This topic describes what the default catalog is, and how to query the internal data of StarRocks by using the default catalog.",source:"@site/versioned_docs/version-2.5/data_source/catalog/default_catalog.md",sourceDirName:"data_source/catalog",slug:"/data_source/catalog/default_catalog",permalink:"/doc/docs/2.5/data_source/catalog/default_catalog",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-2.5/data_source/catalog/default_catalog.md",tags:[],version:"2.5",frontMatter:{},sidebar:"Chinese31",previous:{title:"Overview",permalink:"/doc/docs/2.5/data_source/catalog/catalog_overview"},next:{title:"Hive catalog",permalink:"/doc/docs/2.5/data_source/catalog/hive_catalog"}},r={},d=[{value:"Query internal data",id:"query-internal-data",level:2},{value:"Examples",id:"examples",level:2},{value:"References",id:"references",level:2}];function i(e){const a=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",ol:"ol",li:"li",ul:"ul",a:"a",pre:"pre"},(0,l.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.h1,{id:"default-catalog",children:"Default catalog"}),"\n",(0,n.jsx)(a.p,{children:"This topic describes what the default catalog is, and how to query the internal data of StarRocks by using the default catalog."}),"\n",(0,n.jsxs)(a.p,{children:["StarRocks 2.3 and later provide an internal catalog to manage the internal data of StarRocks. Each StarRocks cluster has only one internal catalog named ",(0,n.jsx)(a.code,{children:"default_catalog"}),". Currently, you cannot modify the name of the internal catalog or create a new internal catalog."]}),"\n",(0,n.jsx)(a.h2,{id:"query-internal-data",children:"Query internal data"}),"\n",(0,n.jsxs)(a.ol,{children:["\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsx)(a.p,{children:"Connect your StarRocks cluster."}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:["If you use the MySQL client to connect the StarRocks cluster, you go to ",(0,n.jsx)(a.code,{children:"default_catalog"})," by default after connecting."]}),"\n",(0,n.jsxs)(a.li,{children:["If you use JDBC to connect the StarRocks cluster, you can go directly to the destination database in the default catalog by specifying ",(0,n.jsx)(a.code,{children:"default_catalog.db_name"})," when connecting."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsxs)(a.p,{children:["(Optional) Execute the following statement to view all databases in StarRocks. See ",(0,n.jsx)(a.a,{href:"/doc/docs/2.5/sql-reference/sql-statements/data-manipulation/SHOW_DATABASES",children:"SHOW DATABASES"})," to view the output of this statement."]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-SQL",children:"SHOW DATABASES;\n"})}),"\n",(0,n.jsx)(a.p,{children:"Or"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-SQL",children:"SHOW DATABASES FROM catalog_name;\n"})}),"\n"]}),"\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsx)(a.p,{children:"(Optional) Execute the following statement to go to the destination database."}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-SQL",children:"USE db_name;\n"})}),"\n",(0,n.jsx)(a.p,{children:"Or"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-SQL",children:"USE default_catalog.db_name;\n"})}),"\n"]}),"\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsxs)(a.p,{children:["Query internal data. For more usages of the SELECT statement, see ",(0,n.jsx)(a.a,{href:"/doc/docs/2.5/sql-reference/sql-statements/data-manipulation/SELECT",children:"SELECT"}),"."]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-SQL",children:"SELECT * FROM table_name;\n"})}),"\n",(0,n.jsx)(a.p,{children:"If you do not specify the database in the preceding steps, you can directly specify it in a select query."}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-SQL",children:"SELECT * FROM db_name.table_name;\n"})}),"\n",(0,n.jsx)(a.p,{children:"Or"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-SQL",children:"SELECT * FROM default_catalog.db_name.table_name;\n"})}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(a.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsxs)(a.p,{children:["To query data in ",(0,n.jsx)(a.code,{children:"olap_db.olap_table"}),", you can perform one of the following operations:"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-SQL",children:"USE olap_db;\nSELECT * FROM olap_table limit 1;\n"})}),"\n",(0,n.jsx)(a.p,{children:"Or"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-SQL",children:"SELECT * FROM olap_db.olap_table limit 1;     \n"})}),"\n",(0,n.jsx)(a.p,{children:"Or"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-SQL",children:"SELECT * FROM default_catalog.olap_db.olap_table limit 1;      \n"})}),"\n",(0,n.jsx)(a.h2,{id:"references",children:"References"}),"\n",(0,n.jsxs)(a.p,{children:["To query data from external data sources, see ",(0,n.jsx)(a.a,{href:"/doc/docs/2.5/data_source/catalog/query_external_data",children:"Query external data"}),"."]})]})}const h=function(e={}){const{wrapper:a}=Object.assign({},(0,l.ah)(),e.components);return a?(0,n.jsx)(a,Object.assign({},e,{children:(0,n.jsx)(i,e)})):i(e)}},11151:(e,a,t)=>{t.d(a,{Zo:()=>o,ah:()=>c});var n=t(67294);const l=n.createContext({});function c(e){const a=n.useContext(l);return n.useMemo((()=>"function"==typeof e?e(a):{...a,...e}),[a,e])}const s={};function o({components:e,children:a,disableParentContext:t}){let o;return o=t?"function"==typeof e?e({}):e||s:c(e),n.createElement(l.Provider,{value:o},a)}}}]);