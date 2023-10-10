"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[26787],{82333:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>c,metadata:()=>r,toc:()=>d});var t=n(85893),s=n(11151);const c={},l="Default catalog",r={id:"data_source/catalog/default_catalog",title:"Default catalog",description:"This topic describes what the default catalog is, and how to query the internal data of StarRocks by using the default catalog.",source:"@site/versioned_docs/version-3.0/data_source/catalog/default_catalog.md",sourceDirName:"data_source/catalog",slug:"/data_source/catalog/default_catalog",permalink:"/docusaurusv3/docs/3.0/data_source/catalog/default_catalog",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/data_source/catalog/default_catalog.md",tags:[],version:"3.0",frontMatter:{},sidebar:"documentation",previous:{title:"Overview",permalink:"/docusaurusv3/docs/3.0/data_source/catalog/catalog_overview"},next:{title:"Delta Lake catalog",permalink:"/docusaurusv3/docs/3.0/data_source/catalog/deltalake_catalog"}},o={},d=[{value:"Query internal data",id:"query-internal-data",level:2},{value:"Examples",id:"examples",level:2},{value:"References",id:"references",level:2}];function i(e){const a=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",ol:"ol",li:"li",ul:"ul",a:"a",pre:"pre"},(0,s.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.h1,{id:"default-catalog",children:"Default catalog"}),"\n",(0,t.jsx)(a.p,{children:"This topic describes what the default catalog is, and how to query the internal data of StarRocks by using the default catalog."}),"\n",(0,t.jsxs)(a.p,{children:["StarRocks 2.3 and later provide an internal catalog to manage the internal data of StarRocks. Each StarRocks cluster has only one internal catalog named ",(0,t.jsx)(a.code,{children:"default_catalog"}),". Currently, you cannot modify the name of the internal catalog or create a new internal catalog."]}),"\n",(0,t.jsx)(a.h2,{id:"query-internal-data",children:"Query internal data"}),"\n",(0,t.jsxs)(a.ol,{children:["\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsx)(a.p,{children:"Connect your StarRocks cluster."}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:["If you use the MySQL client to connect the StarRocks cluster, you go to ",(0,t.jsx)(a.code,{children:"default_catalog"})," by default after connecting."]}),"\n",(0,t.jsxs)(a.li,{children:["If you use JDBC to connect the StarRocks cluster, you can go directly to the destination database in the default catalog by specifying ",(0,t.jsx)(a.code,{children:"default_catalog.db_name"})," when connecting."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:["(Optional) Use ",(0,t.jsx)(a.a,{href:"/docusaurusv3/docs/3.0/sql-reference/sql-statements/data-manipulation/SHOW%20DATABASES",children:"SHOW DATABASES"})," to view databases:"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-SQL",children:"SHOW DATABASES;\n"})}),"\n",(0,t.jsx)(a.p,{children:"Or"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-SQL",children:"SHOW DATABASES FROM <catalog_name>;\n"})}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:["(Optional) Use ",(0,t.jsx)(a.a,{href:"/docusaurusv3/docs/3.0/sql-reference/sql-statements/data-definition/SET%20CATALOG",children:"SET CATALOG"})," to switch to the destination catalog in the current session:"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-SQL",children:"SET CATALOG <catalog_name>;\n"})}),"\n",(0,t.jsxs)(a.p,{children:["Then, use ",(0,t.jsx)(a.a,{href:"/docusaurusv3/docs/3.0/sql-reference/sql-statements/data-definition/USE",children:"USE"})," to specify the active database in the current session:"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-SQL",children:"USE <db_name>;\n"})}),"\n",(0,t.jsxs)(a.p,{children:["Or, you can use ",(0,t.jsx)(a.a,{href:"/docusaurusv3/docs/3.0/sql-reference/sql-statements/data-definition/USE",children:"USE"})," to directly go to the active database in the destination catalog:"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-SQL",children:"USE <catalog_name>.<db_name>;\n"})}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:["Use ",(0,t.jsx)(a.a,{href:"/docusaurusv3/docs/3.0/sql-reference/sql-statements/data-manipulation/SELECT",children:"SELECT"})," to query internal data:"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-SQL",children:"SELECT * FROM <table_name>;\n"})}),"\n",(0,t.jsx)(a.p,{children:"If you do not specify the active database in the preceding steps, you can directly specify it in a select query:"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-SQL",children:"SELECT * FROM <db_name>.<table_name>;\n"})}),"\n",(0,t.jsx)(a.p,{children:"Or"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-SQL",children:"SELECT * FROM default_catalog.<db_name>.<table_name>;\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(a.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsxs)(a.p,{children:["To query data in ",(0,t.jsx)(a.code,{children:"olap_db.olap_table"}),", you can perform one of the following operations:"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-SQL",children:"USE olap_db;\nSELECT * FROM olap_table limit 1;\n"})}),"\n",(0,t.jsx)(a.p,{children:"Or"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-SQL",children:"SELECT * FROM olap_db.olap_table limit 1;     \n"})}),"\n",(0,t.jsx)(a.p,{children:"Or"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-SQL",children:"SELECT * FROM default_catalog.olap_db.olap_table limit 1;      \n"})}),"\n",(0,t.jsx)(a.h2,{id:"references",children:"References"}),"\n",(0,t.jsxs)(a.p,{children:["To query data from external data sources, see ",(0,t.jsx)(a.a,{href:"/docusaurusv3/docs/3.0/data_source/catalog/query_external_data",children:"Query external data"}),"."]})]})}const u=function(e={}){const{wrapper:a}=Object.assign({},(0,s.ah)(),e.components);return a?(0,t.jsx)(a,Object.assign({},e,{children:(0,t.jsx)(i,e)})):i(e)}},11151:(e,a,n)=>{n.d(a,{Zo:()=>r,ah:()=>c});var t=n(67294);const s=t.createContext({});function c(e){const a=t.useContext(s);return t.useMemo((()=>"function"==typeof e?e(a):{...a,...e}),[a,e])}const l={};function r({components:e,children:a,disableParentContext:n}){let r;return r=n?"function"==typeof e?e({}):e||l:c(e),t.createElement(s.Provider,{value:r},a)}}}]);