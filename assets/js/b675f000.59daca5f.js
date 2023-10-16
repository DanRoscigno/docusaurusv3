"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[99901],{29308:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>E,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var s=t(85893),a=t(11151);const r={displayed_sidebar:"English"},i="SHOW CREATE TABLE",l={id:"sql-reference/sql-statements/data-manipulation/SHOW_CREATE_TABLE",title:"SHOW CREATE TABLE",description:"Returns the CREATE TABLE statement that was used to create a given table.",source:"@site/versioned_docs/version-2.5/sql-reference/sql-statements/data-manipulation/SHOW_CREATE_TABLE.md",sourceDirName:"sql-reference/sql-statements/data-manipulation",slug:"/sql-reference/sql-statements/data-manipulation/SHOW_CREATE_TABLE",permalink:"/doc/docs/2.5/sql-reference/sql-statements/data-manipulation/SHOW_CREATE_TABLE",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-statements/data-manipulation/SHOW_CREATE_TABLE.md",tags:[],version:"2.5",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"SHOW CREATE MATERIALIZED VIEW",permalink:"/doc/docs/2.5/sql-reference/sql-statements/data-manipulation/SHOW_CREATE_MATERIALIZED_VIEW"},next:{title:"SHOW CREATE VIEW",permalink:"/doc/docs/2.5/sql-reference/sql-statements/data-manipulation/SHOW_CREATE_VIEW"}},d={},c=[{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Output",id:"output",level:2},{value:"Examples",id:"examples",level:2},{value:"Bucket number is not specified",id:"bucket-number-is-not-specified",level:3},{value:"Bucket number is specified",id:"bucket-number-is-specified",level:3},{value:"References",id:"references",level:2}];function o(e){const n=Object.assign({h1:"h1",p:"p",blockquote:"blockquote",strong:"strong",code:"code",a:"a",ul:"ul",li:"li",h2:"h2",pre:"pre",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",h3:"h3"},(0,a.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"show-create-table",children:"SHOW CREATE TABLE"}),"\n",(0,s.jsx)(n.p,{children:"Returns the CREATE TABLE statement that was used to create a given table."}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"NOTE"})}),"\n",(0,s.jsxs)(n.p,{children:["The SHOW CREATE TABLE statement requires you to have the ",(0,s.jsx)(n.code,{children:"SELECT_PRIV"})," privilege on the table."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Since v2.5.7, StarRocks can automatically set the number of buckets (BUCKETS) when you create a table or add a partition. You no longer need to manually set the number of buckets. For detailed information, see ",(0,s.jsx)(n.a,{href:"/doc/docs/2.5/table_design/Data_distribution#determine-the-number-of-buckets",children:"Determine the number of buckets"}),"."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"If you specified the number of buckets when creating a table, the output of SHOW CREATE TABLE will display the number of buckets."}),"\n",(0,s.jsxs)(n.li,{children:["If you did not specify the number of buckets when creating a table, the output of SHOW CREATE TABLE will not display the number of buckets. You can run ",(0,s.jsx)(n.a,{href:"/doc/docs/2.5/sql-reference/sql-statements/data-manipulation/SHOW_PARTITIONS",children:"SHOW PARTITIONS"})," to view the number of buckets for each partition."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"In versions earlier than v2.5.7, you are required to set the number of buckets when creating a table. Therefore, SHOW CREATE TABLE displays the number of buckets by default."}),"\n",(0,s.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"SHOW CREATE TABLE [db_name.]table_name\n"})}),"\n",(0,s.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Parameter"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Required"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Description"})})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"db_name"}),(0,s.jsx)(n.td,{children:"No"}),(0,s.jsx)(n.td,{children:"The database name. If this parameter is not specified, the CREATE TABLE statement of a given table in your current database is returned by default."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"table_name"}),(0,s.jsx)(n.td,{children:"Yes"}),(0,s.jsx)(n.td,{children:"The table name."})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"output",children:"Output"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plain",children:"+-----------+----------------+\n| Table     | Create Table   |                                               \n+-----------+----------------+\n"})}),"\n",(0,s.jsx)(n.p,{children:"The following table describes the parameters returned by this statement."}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Parameter"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Description"})})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Table"}),(0,s.jsx)(n.td,{children:"The table name."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Create Table"}),(0,s.jsx)(n.td,{children:"The CREATE TABLE statement of the table."})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.h3,{id:"bucket-number-is-not-specified",children:"Bucket number is not specified"}),"\n",(0,s.jsxs)(n.p,{children:["Create a table named ",(0,s.jsx)(n.code,{children:"example_table"})," with no bucket number specified in DISTRIBUTED BY."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:'CREATE TABLE example_table\n(\n    k1 TINYINT,\n    k2 DECIMAL(10, 2) DEFAULT "10.5",\n    v1 CHAR(10) REPLACE,\n    v2 INT SUM\n)\nENGINE = olap\nAGGREGATE KEY(k1, k2)\nCOMMENT "my first starrocks table"\nDISTRIBUTED BY HASH(k1) BUCKETS 10;\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Run SHOW CREATE TABLE to display the CREATE TABLE statement of ",(0,s.jsx)(n.code,{children:"example_table"}),". No bucket number is displayed in DISTRIBUTED BY. Note that if you did not specify PROPERTIES when you create the table, the default properties are displayed in the output of SHOW CREATE TABLE."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plain",children:'SHOW CREATE TABLE example_table\\G\n*************************** 1. row ***************************\n       Table: example_table\nCreate Table: CREATE TABLE `example_table` (\n  `k1` tinyint(4) NULL COMMENT "",\n  `k2` decimal64(10, 2) NULL DEFAULT "10.5" COMMENT "",\n  `v1` char(10) REPLACE NULL COMMENT "",\n  `v2` int(11) SUM NULL COMMENT ""\n) ENGINE=OLAP \nAGGREGATE KEY(`k1`, `k2`)\nCOMMENT "my first starrocks table"\nDISTRIBUTED BY HASH(`k1`)\nPROPERTIES (\n"replication_num" = "3",\n"in_memory" = "false",\n"enable_persistent_index" = "false",\n"replicated_storage" = "true",\n"compression" = "LZ4"\n);\n'})}),"\n",(0,s.jsx)(n.h3,{id:"bucket-number-is-specified",children:"Bucket number is specified"}),"\n",(0,s.jsxs)(n.p,{children:["Create a table named ",(0,s.jsx)(n.code,{children:"example_table1"})," with bucket number set to 10 in DISTRIBUTED BY."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:'CREATE TABLE example_table1\n(\n    k1 TINYINT,\n    k2 DECIMAL(10, 2) DEFAULT "10.5",\n    v1 CHAR(10) REPLACE,\n    v2 INT SUM\n)\nENGINE = olap\nAGGREGATE KEY(k1, k2)\nCOMMENT "my first starrocks table"\nDISTRIBUTED BY HASH(k1) BUCKETS 10;\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Run SHOW CREATE TABLE to display the CREATE TABLE statement of ",(0,s.jsx)(n.code,{children:"example_table"}),". The bucket number (",(0,s.jsx)(n.code,{children:"BUCKETS 10"}),") is displayed in DISTRIBUTED BY. Note that if you did not specify PROPERTIES when you create the table, the default properties are displayed in the output of SHOW CREATE TABLE."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-plain",children:'SHOW CREATE TABLE example_table1\\G\n*************************** 1. row ***************************\n       Table: example_table\nCreate Table: CREATE TABLE `example_table` (\n  `k1` tinyint(4) NULL COMMENT "",\n  `k2` decimal64(10, 2) NULL DEFAULT "10.5" COMMENT "",\n  `v1` char(10) REPLACE NULL COMMENT "",\n  `v2` int(11) SUM NULL COMMENT ""\n) ENGINE=OLAP \nAGGREGATE KEY(`k1`, `k2`)\nCOMMENT "my first starrocks table"\nDISTRIBUTED BY HASH(`k1`) BUCKETS 10\nPROPERTIES (\n"replication_num" = "3",\n"in_memory" = "false",\n"enable_persistent_index" = "false",\n"replicated_storage" = "true",\n"compression" = "LZ4"\n);\n'})}),"\n",(0,s.jsx)(n.h2,{id:"references",children:"References"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/doc/docs/2.5/sql-reference/sql-statements/data-definition/CREATE_TABLE",children:"CREATE TABLE"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/doc/docs/2.5/sql-reference/sql-statements/data-manipulation/SHOW_TABLES",children:"SHOW TABLES"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/doc/docs/2.5/sql-reference/sql-statements/data-definition/ALTER_TABLE",children:"ALTER TABLE"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/doc/docs/2.5/sql-reference/sql-statements/data-definition/DROP_TABLE",children:"DROP TABLE"})}),"\n"]})]})}const E=function(e={}){const{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(o,e)})):o(e)}},11151:(e,n,t)=>{t.d(n,{Zo:()=>l,ah:()=>r});var s=t(67294);const a=s.createContext({});function r(e){const n=s.useContext(a);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const i={};function l({components:e,children:n,disableParentContext:t}){let l;return l=t?"function"==typeof e?e({}):e||i:r(e),s.createElement(a.Provider,{value:l},n)}}}]);