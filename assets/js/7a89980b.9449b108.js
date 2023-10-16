"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[31882],{26601:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>o});var n=s(85893),a=s(11151);const i={displayed_sidebar:"English"},r="INSERT",l={id:"sql-reference/sql-statements/data-manipulation/insert",title:"INSERT",description:"Description",source:"@site/versioned_docs/version-3.1/sql-reference/sql-statements/data-manipulation/insert.md",sourceDirName:"sql-reference/sql-statements/data-manipulation",slug:"/sql-reference/sql-statements/data-manipulation/insert",permalink:"/doc/docs/sql-reference/sql-statements/data-manipulation/insert",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-statements/data-manipulation/insert.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"ALTER ROUTINE LOAD",permalink:"/doc/docs/sql-reference/sql-statements/data-manipulation/alter-routine-load"},next:{title:"DESC",permalink:"/doc/docs/sql-reference/sql-statements/Utility/DESCRIBE"}},d={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return",id:"return",level:2},{value:"Usage notes",id:"usage-notes",level:2},{value:"Example",id:"example",level:2}];function c(e){const t=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",pre:"pre",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",strong:"strong",tbody:"tbody",td:"td",ul:"ul",li:"li"},(0,a.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"insert",children:"INSERT"}),"\n",(0,n.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,n.jsxs)(t.p,{children:["Inserts data into a specific table or overwrites a specific table with data. For detailed information about the application scenarios, see ",(0,n.jsx)(t.a,{href:"/doc/docs/loading/InsertInto",children:"Load data with INSERT"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["You can submit an asynchronous INSERT task using ",(0,n.jsx)(t.a,{href:"/doc/docs/sql-reference/sql-statements/data-manipulation/SUBMIT_TASK",children:"SUBMIT TASK"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"syntax",children:"Syntax"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-Bash",children:"INSERT { INTO | OVERWRITE } [db_name.]<table_name>\n[ PARTITION (<partition_name> [, ...) ]\n[ TEMPORARY_PARTITION (<temporary_partition_name>[, ...) ]\n[ WITH LABEL <label>]\n[ (<column_name>[, ...]) ]\n{ VALUES ( { <expression> | DEFAULT }[, ...] )\n  | <query> }\n"})}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:(0,n.jsx)(t.strong,{children:"Parameter"})}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"INTO"}),(0,n.jsx)(t.td,{children:"To append data to the table."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"OVERWRITE"}),(0,n.jsx)(t.td,{children:"To overwrite the table with data."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"table_name"}),(0,n.jsxs)(t.td,{children:["The name of the table into which you want to load data. It can be specified with the database the table resides as ",(0,n.jsx)(t.code,{children:"db_name.table_name"}),"."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"PARTITION"}),(0,n.jsx)(t.td,{children:"The partitions into which you want to load the data. You can specify multiple partitions, which must be separated by commas (,). It must be set to partitions that exist in the destination table. If you specify this parameter, the data will be inserted only into the specified partitions. If you do not specify this parameter, the data will be inserted into all partitions."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"TEMPORARY PARTITION"}),(0,n.jsxs)(t.td,{children:["The name of the ",(0,n.jsx)(t.a,{href:"/doc/docs/table_design/Temporary_partition",children:"temporary partition"})," into which you want to load data. You can specify multiple temporary partitions, which must be separated by commas (,)."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"label"}),(0,n.jsxs)(t.td,{children:["The unique identification label for each data load transaction within the database. If it is not specified, the system automatically generates one for the transaction. We recommend you specify the label for the transaction. Otherwise, you cannot check the transaction status if a connection error occurs and no result is returned. You can check the transaction status via ",(0,n.jsx)(t.code,{children:'SHOW LOAD WHERE label="label"'})," statement. For limitations on naming a label, see ",(0,n.jsx)(t.a,{href:"/doc/docs/reference/System_limit",children:"System Limits"}),"."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"column_name"}),(0,n.jsx)(t.td,{children:"The name of the destination column(s) to load data in. It must be set as columns that exist in the destination table. The destination columns you specify are mapped one on one in sequence to the columns of the source table, regardless of what the destination column names are. If no destination column is specified, the default value is all columns in the destination table. If the specified column in the source table does not exist in the destination column, the default value will be written to this column, and the transaction will fail if the specified column does not have a default value. If the column type of the source table is inconsistent with that of the destination table, the system will perform an implicit conversion on the mismatched column. If the conversion fails, a syntax parsing error will be returned."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"expression"}),(0,n.jsx)(t.td,{children:"Expression that assigns values to the column."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"DEFAULT"}),(0,n.jsx)(t.td,{children:"Assigns default value to the column."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"query"}),(0,n.jsx)(t.td,{children:"Query statement whose result will be loaded into the destination table. It can be any SQL statement supported by StarRocks."})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"return",children:"Return"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-Plain",children:"Query OK, 5 rows affected, 2 warnings (0.05 sec)\n{'label':'insert_load_test', 'status':'VISIBLE', 'txnId':'1008'}\n"})}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Return"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"rows affected"}),(0,n.jsxs)(t.td,{children:["Indicates how many rows are loaded. ",(0,n.jsx)(t.code,{children:"warnings"})," indicates the rows that are filtered out."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"label"}),(0,n.jsx)(t.td,{children:"The unique identification label for each data load transaction within the database. It can be assigned by user or automatically by the system."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"status"}),(0,n.jsxs)(t.td,{children:["Indicates if the loaded data is visible. ",(0,n.jsx)(t.code,{children:"VISIBLE"}),": the data is successfully loaded and visible. ",(0,n.jsx)(t.code,{children:"COMMITTED"}),": the data is successfully loaded but invisible for now."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"txnId"}),(0,n.jsx)(t.td,{children:"The ID number corresponding to each INSERT transaction."})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"usage-notes",children:"Usage notes"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["As for the current version, when StarRocks executes the INSERT INTO statement, if any row of data mismatches the destination table format (for example, the string is too long), the INSERT transaction fails by default. You can set the session variable ",(0,n.jsx)(t.code,{children:"enable_insert_strict"})," to ",(0,n.jsx)(t.code,{children:"false"})," so that the system filters out the data that mismatches the destination table format and continues to execute the transaction."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"After INSERT OVERWRITE statement is executed, StarRocks creates temporary partitions for the partitions that store the original data, inserts data into the temporary partitions, and swaps the original partitions with the temporary partitions. All these operations are executed in the Leader FE node. Therefore, if the Leader FE node crashes while executing INSERT OVERWRITE statement, the whole load transaction fails, and the temporary partitions are deleted."}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,n.jsxs)(t.p,{children:["The following examples are based on table ",(0,n.jsx)(t.code,{children:"test"}),", which contains two columns ",(0,n.jsx)(t.code,{children:"c1"})," and ",(0,n.jsx)(t.code,{children:"c2"}),". The ",(0,n.jsx)(t.code,{children:"c2"})," column has a default value of DEFAULT."]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Import a row of data into the ",(0,n.jsx)(t.code,{children:"test"})," table."]}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-SQL",children:"INSERT INTO test VALUES (1, 2);\nINSERT INTO test (c1, c2) VALUES (1, 2);\nINSERT INTO test (c1, c2) VALUES (1, DEFAULT);\nINSERT INTO test (c1) VALUES (1);\n"})}),"\n",(0,n.jsx)(t.p,{children:"When no destination column is specified, the columns are loaded in sequence into the destination table by default. Therefore, in the above example, the outcomes of the first and second SQL statements are the same."}),"\n",(0,n.jsx)(t.p,{children:"If a destination column (with or without data inserted) uses DEFAULT as the value, the column will use the default value as the loaded data. Therefore, in the above example, the outputs of the third and fourth statements are the same."}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Load multiple rows of data into the ",(0,n.jsx)(t.code,{children:"test"})," table at one time."]}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-SQL",children:"INSERT INTO test VALUES (1, 2), (3, 2 + 2);\nINSERT INTO test (c1, c2) VALUES (1, 2), (3, 2 * 2);\nINSERT INTO test (c1, c2) VALUES (1, DEFAULT), (3, DEFAULT);\nINSERT INTO test (c1) VALUES (1), (3);\n"})}),"\n",(0,n.jsx)(t.p,{children:"Because the results of expressions are equivalent, the outcomes of the first and second statements are the same. The outcomes of the third and fourth statements are the same because they both use default value."}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Import a query statement result into the ",(0,n.jsx)(t.code,{children:"test"})," table."]}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-SQL",children:"INSERT INTO test SELECT * FROM test2;\nINSERT INTO test (c1, c2) SELECT * from test2;\n"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Import a query result into the ",(0,n.jsx)(t.code,{children:"test"})," table, and specify partition and label."]}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-SQL",children:"INSERT INTO test PARTITION(p1, p2) WITH LABEL `label1` SELECT * FROM test2;\nINSERT INTO test WITH LABEL `label1` (c1, c2) SELECT * from test2;\n"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Overwrite the ",(0,n.jsx)(t.code,{children:"test"})," table with a query result, and specify partition and label."]}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-SQL",children:"INSERT OVERWRITE test PARTITION(p1, p2) WITH LABEL `label1` SELECT * FROM test3;\nINSERT OVERWRITE test WITH LABEL `label1` (c1, c2) SELECT * from test3;\n"})}),"\n",(0,n.jsxs)(t.p,{children:["The following example inserts data rows from the Parquet file ",(0,n.jsx)(t.strong,{children:"parquet/insert_wiki_edit_append.parquet"})," within the AWS S3 bucket ",(0,n.jsx)(t.code,{children:"inserttest"})," into the table ",(0,n.jsx)(t.code,{children:"insert_wiki_edit"}),":"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-Plain",children:'INSERT INTO insert_wiki_edit\n    SELECT * FROM FILES(\n        "path" = "s3://inserttest/parquet/insert_wiki_edit_append.parquet",\n        "format" = "parquet",\n        "aws.s3.access_key" = "XXXXXXXXXX",\n        "aws.s3.secret_key" = "YYYYYYYYYY",\n        "aws.s3.region" = "ap-southeast-1"\n);\n'})})]})}const h=function(e={}){const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(c,e)})):c(e)}},11151:(e,t,s)=>{s.d(t,{Zo:()=>l,ah:()=>i});var n=s(67294);const a=n.createContext({});function i(e){const t=n.useContext(a);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const r={};function l({components:e,children:t,disableParentContext:s}){let l;return l=s?"function"==typeof e?e({}):e||r:i(e),n.createElement(a.Provider,{value:l},t)}}}]);