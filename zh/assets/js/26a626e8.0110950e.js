"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[50772],{71029:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var t=a(85893),s=a(11151);const l={},r="SHOW TABLES",i={id:"sql-reference/sql-statements/data-manipulation/SHOW TABLES",title:"SHOW TABLES",description:"Description",source:"@site/versioned_docs/version-3.0/sql-reference/sql-statements/data-manipulation/SHOW TABLES.md",sourceDirName:"sql-reference/sql-statements/data-manipulation",slug:"/sql-reference/sql-statements/data-manipulation/SHOW TABLES",permalink:"/doc/zh/docs/3.0/sql-reference/sql-statements/data-manipulation/SHOW TABLES",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/sql-reference/sql-statements/data-manipulation/SHOW TABLES.md",tags:[],version:"3.0",frontMatter:{},sidebar:"Chinese31",previous:{title:"SHOW SNAPSHOT",permalink:"/doc/zh/docs/3.0/sql-reference/sql-statements/data-manipulation/SHOW SNAPSHOT"},next:{title:"SHOW TABLET",permalink:"/doc/zh/docs/3.0/sql-reference/sql-statements/data-manipulation/SHOW TABLET"}},d={},c=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2},{value:"References",id:"references",level:2}];function o(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",blockquote:"blockquote",strong:"strong",pre:"pre",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",a:"a",ul:"ul",li:"li"},(0,s.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"show-tables",children:"SHOW TABLES"}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(n.p,{children:"Displays all tables in a StarRocks database or a database in an external data source, for example, Hive, Iceberg, Hudi, or Delta Lake."}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"NOTE"})}),"\n",(0,t.jsx)(n.p,{children:"To view tables in an external data source, you must have the USAGE privilege on the external catalog that corresponds to that data source."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"SHOW TABLES [FROM <catalog_name>.<db_name>]\n"})}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Parameter"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Required"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Description"})})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"catalog_name"}),(0,t.jsx)(n.td,{children:"No"}),(0,t.jsxs)(n.td,{children:["The name of the internal catalog or an external catalog.",(0,t.jsxs)("ul",{children:[(0,t.jsxs)("li",{children:["If you do not specify this parameter or set it to ",(0,t.jsx)(n.code,{children:"default_catalog"}),", tables in StarRocks databases are returned."]}),(0,t.jsx)("li",{children:"If you set this parameter to the name of an external catalog, tables in databases of an external data source are returned."})]})," You can run ",(0,t.jsx)(n.a,{href:"/doc/zh/docs/3.0/sql-reference/sql-statements/data-manipulation/SHOW%20CATALOGS",children:"SHOW CATALOGS"})," to view internal and external catalogs."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"db_name"}),(0,t.jsx)(n.td,{children:"No"}),(0,t.jsx)(n.td,{children:"The database name. If not specified, the current database is used by default."})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsxs)(n.p,{children:["Example 1: View tables in database ",(0,t.jsx)(n.code,{children:"example_db"})," of the ",(0,t.jsx)(n.code,{children:"default_catalog"})," after connecting to the StarRocks cluster. The following two statements are equivalent."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plain",children:"show tables from example_db;\n+----------------------------+\n| Tables_in_example_db       |\n+----------------------------+\n| depts                      |\n| depts_par                  |\n| emps                       |\n| emps2                      |\n+----------------------------+\n\nshow tables from default_catalog.example_db;\n+----------------------------+\n| Tables_in_example_db       |\n+----------------------------+\n| depts                      |\n| depts_par                  |\n| emps                       |\n| emps2                      |\n+----------------------------+\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Example 2: View tables in the current database ",(0,t.jsx)(n.code,{children:"example_db"})," after connecting to this database."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plain",children:"show tables;\n+----------------------------+\n| Tables_in_example_db       |\n+----------------------------+\n| depts                      |\n| depts_par                  |\n| emps                       |\n| emps2                      |\n+----------------------------+\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Example 2: View tables in database ",(0,t.jsx)(n.code,{children:"hudi_db"})," of the external catalog ",(0,t.jsx)(n.code,{children:"hudi_catalog"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plain",children:"show tables from hudi_catalog.hudi_db;\n+----------------------------+\n| Tables_in_hudi_db          |\n+----------------------------+\n| hudi_sync_mor              |\n| hudi_table1                |\n+----------------------------+\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Alternatively, you can run SET CATALOG to switch to the external catalog ",(0,t.jsx)(n.code,{children:"hudi_catalog"})," and then run ",(0,t.jsx)(n.code,{children:"SHOW TABLES FROM hudi_db;"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"references",children:"References"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/doc/zh/docs/3.0/sql-reference/sql-statements/data-manipulation/SHOW%20CATALOGS",children:"SHOW CATALOGS"}),": Views all catalogs in a StarRocks cluster."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/doc/zh/docs/3.0/sql-reference/sql-statements/data-manipulation/SHOW%20DATABASES",children:"SHOW DATABASES"}),": Views all databases in the internal catalog or an external catalog."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/doc/zh/docs/3.0/sql-reference/sql-statements/data-definition/SET%20CATALOG",children:"SET CATALOG"}),": Switches between catalogs."]}),"\n"]})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,s.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(o,e)})):o(e)}},11151:(e,n,a)=>{a.d(n,{Zo:()=>i,ah:()=>l});var t=a(67294);const s=t.createContext({});function l(e){const n=t.useContext(s);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const r={};function i({components:e,children:n,disableParentContext:a}){let i;return i=a?"function"==typeof e?e({}):e||r:l(e),t.createElement(s.Provider,{value:i},n)}}}]);