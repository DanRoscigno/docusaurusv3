"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[31296],{20967:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>o});var s=t(85893),a=t(11151);const i={},l="AUTO_INCREMENT",r={id:"sql-reference/sql-statements/auto_increment",title:"AUTO_INCREMENT",description:"Since version 3.0, StarRocks supports the AUTOINCREMENT column attribute, which can simplify data management. This topic introduces the application scenarios, usage and features of the AUTOINCREMENT column attribute.",source:"@site/versioned_docs/version-3.0/sql-reference/sql-statements/auto_increment.md",sourceDirName:"sql-reference/sql-statements",slug:"/sql-reference/sql-statements/auto_increment",permalink:"/doc/docs/3.0/sql-reference/sql-statements/auto_increment",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/sql-reference/sql-statements/auto_increment.md",tags:[],version:"3.0",frontMatter:{},sidebar:"Chinese31",previous:{title:"murmur_hash3_32",permalink:"/doc/docs/3.0/sql-reference/sql-functions/hash-functions/murmur_hash3_32"},next:{title:"System variables",permalink:"/doc/docs/3.0/reference/System_variable"}},c={},o=[{value:"Introduction",id:"introduction",level:2},{value:"Basic operations",id:"basic-operations",level:2},{value:"Specify <code>AUTO_INCREMENT</code> column at table creation",id:"specify-auto_increment-column-at-table-creation",level:3},{value:"Assign values for <code>AUTO_INCREMENT</code> column",id:"assign-values-for-auto_increment-column",level:3},{value:"Basic features",id:"basic-features",level:2},{value:"Uniqueness",id:"uniqueness",level:3},{value:"Monotonicity",id:"monotonicity",level:3},{value:"Partial updates and <code>AUTO_INCREMENT</code> column",id:"partial-updates-and-auto_increment-column",level:2},{value:"<code>AUTO_INCREMENT</code> column is primary key",id:"auto_increment-column-is-primary-key",level:3},{value:"<code>AUTO_INCREMENT</code> column is not primary key",id:"auto_increment-column-is-not-primary-key",level:3},{value:"Limits",id:"limits",level:2},{value:"Keywords",id:"keywords",level:2}];function d(e){const n=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",ul:"ul",li:"li",a:"a",h3:"h3",pre:"pre",strong:"strong",blockquote:"blockquote",ol:"ol"},(0,a.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"auto_increment",children:"AUTO_INCREMENT"}),"\n",(0,s.jsxs)(n.p,{children:["Since version 3.0, StarRocks supports the ",(0,s.jsx)(n.code,{children:"AUTO_INCREMENT"})," column attribute, which can simplify data management. This topic introduces the application scenarios, usage and features of the ",(0,s.jsx)(n.code,{children:"AUTO_INCREMENT"})," column attribute."]}),"\n",(0,s.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,s.jsxs)(n.p,{children:["When a new data row is loaded into a table and values are not specified for the ",(0,s.jsx)(n.code,{children:"AUTO_INCREMENT"})," column, StarRocks automatically assigns an integer value for the row's ",(0,s.jsx)(n.code,{children:"AUTO_INCREMENT"})," column as its unique ID across the table. The subsequent values for the ",(0,s.jsx)(n.code,{children:"AUTO_INCREMENT"})," column automatically increase at a specific step starting from the ID of the row. An ",(0,s.jsx)(n.code,{children:"AUTO_INCREMENT"})," column can be used to simplify data management and speed up some queries. Here are some application scenarios of an ",(0,s.jsx)(n.code,{children:"AUTO_INCREMENT"})," column:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Serve as primary keys: An ",(0,s.jsx)(n.code,{children:"AUTO_INCREMENT"})," column can be used as the primary key to ensure that each row has a unique ID and make it easy to query and manage data."]}),"\n",(0,s.jsxs)(n.li,{children:["Join tables: When multiple tables are joined, an ",(0,s.jsx)(n.code,{children:"AUTO_INCREMENT"})," column can be used as the Join Key, which can expedite queries compared to using a column whose data type is STRING, for example, UUID."]}),"\n",(0,s.jsxs)(n.li,{children:["Count the number of distinct values in a high-cardinality column: An ",(0,s.jsx)(n.code,{children:"AUTO_INCREMENT"})," column can be used to represent the unique value column in a dictionary. Compared to directly counting distinct STRING values, counting distinct integer values of the ",(0,s.jsx)(n.code,{children:"AUTO_INCREMENT"})," column can sometimes improve the query speed by several times or even tens of times."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["You need to specify an ",(0,s.jsx)(n.code,{children:"AUTO_INCREMENT"})," column in the CREATE TABLE statement. The data types of an ",(0,s.jsx)(n.code,{children:"AUTO_INCREMENT"})," column must be BIGINT. The value for an AUTO_INCREMENT column can be ",(0,s.jsx)(n.a,{href:"#assign-values-for-auto_increment-column",children:"implicitly assigned or explicitly specified"}),". It starts from 1, and increments by 1 for each new row."]}),"\n",(0,s.jsx)(n.h2,{id:"basic-operations",children:"Basic operations"}),"\n",(0,s.jsxs)(n.h3,{id:"specify-auto_increment-column-at-table-creation",children:["Specify ",(0,s.jsx)(n.code,{children:"AUTO_INCREMENT"})," column at table creation"]}),"\n",(0,s.jsxs)(n.p,{children:["Create a table named ",(0,s.jsx)(n.code,{children:"test_tbl1"})," with two columns, ",(0,s.jsx)(n.code,{children:"id"})," and ",(0,s.jsx)(n.code,{children:"number"}),". Specify the column ",(0,s.jsx)(n.code,{children:"number"})," as the ",(0,s.jsx)(n.code,{children:"AUTO_INCREMENT"})," column."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:'CREATE TABLE test_tbl1\n(\n    id BIGINT NOT NULL, \n    number BIGINT NOT NULL AUTO_INCREMENT\n) \nPRIMARY KEY (id) \nDISTRIBUTED BY HASH(id)\nPROPERTIES("replicated_storage" = "true");\n'})}),"\n",(0,s.jsxs)(n.h3,{id:"assign-values-for-auto_increment-column",children:["Assign values for ",(0,s.jsx)(n.code,{children:"AUTO_INCREMENT"})," column"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Assign values implicitly"})}),"\n",(0,s.jsxs)(n.p,{children:["When you load data into a StarRocks table, you do not need to specify the values for the ",(0,s.jsx)(n.code,{children:"AUTO_INCREMENT"})," column. StarRocks automatically assigns unique integer values for that column and inserts them into the table."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"INSERT INTO test_tbl1 (id) VALUES (1);\nINSERT INTO test_tbl1 (id) VALUES (2);\nINSERT INTO test_tbl1 (id) VALUES (3),(4),(5);\n"})}),"\n",(0,s.jsx)(n.p,{children:"View data in the table."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"mysql > SELECT * FROM test_tbl1 ORDER BY id;\n+------+--------+\n| id   | number |\n+------+--------+\n|    1 |      1 |\n|    2 |      2 |\n|    3 |      3 |\n|    4 |      4 |\n|    5 |      5 |\n+------+--------+\n5 rows in set (0.02 sec)\n"})}),"\n",(0,s.jsxs)(n.p,{children:["When you load data into a StarRocks table, you can also specify the values as ",(0,s.jsx)(n.code,{children:"DEFAULT"})," for the ",(0,s.jsx)(n.code,{children:"AUTO_INCREMENT"})," column. StarRocks automatically assigns unique integer values for that column and inserts them into the table."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"INSERT INTO test_tbl1 (id, number) VALUES (6, DEFAULT);\n"})}),"\n",(0,s.jsx)(n.p,{children:"View data in the table."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"mysql > SELECT * FROM test_tbl1 ORDER BY id;\n+------+--------+\n| id   | number |\n+------+--------+\n|    1 |      1 |\n|    2 |      2 |\n|    3 |      3 |\n|    4 |      4 |\n|    5 |      5 |\n|    6 |      6 |\n+------+--------+\n6 rows in set (0.02 sec)\n"})}),"\n",(0,s.jsxs)(n.p,{children:["In actual usage, the following result may be returned when you view the data in the table. This is because StarRocks cannot guarantee that the values for the ",(0,s.jsx)(n.code,{children:"AUTO_INCREMENT"})," column are strictly monotonic. But StarRocks can guarantee that the values roughly increase in chronological order. For more information, see ",(0,s.jsx)(n.a,{href:"#monotonicity",children:"Monotonicity"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"mysql > SELECT * FROM test_tbl1 ORDER BY id;\n+------+--------+\n| id   | number |\n+------+--------+\n|    1 |      1 |\n|    2 | 100001 |\n|    3 | 200001 |\n|    4 | 200002 |\n|    5 | 200003 |\n|    6 | 200004 |\n+------+--------+\n6 rows in set (0.01 sec)\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Specify values explicitly"})}),"\n",(0,s.jsxs)(n.p,{children:["You can also explicitly specify the values for the ",(0,s.jsx)(n.code,{children:"AUTO_INCREMENT"})," column and insert them into the table."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"INSERT INTO test_tbl1 (id, number) VALUES (7, 100);\n\n-- view data in the table.\n\nmysql > SELECT * FROM test_tbl1 ORDER BY id;\n+------+--------+\n| id   | number |\n+------+--------+\n|    1 |      1 |\n|    2 | 100001 |\n|    3 | 200001 |\n|    4 | 200002 |\n|    5 | 200003 |\n|    6 | 200004 |\n|    7 |    100 |\n+------+--------+\n7 rows in set (0.01 sec)\n"})}),"\n",(0,s.jsx)(n.p,{children:"Moreover, explicitly specifying values does not affect the subsequent values generated by StarRocks for newly inserted data rows."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"INSERT INTO test_tbl1 (id) VALUES (8);\n\n-- view data in the table.\n\nmysql > SELECT * FROM test_tbl1 ORDER BY id;\n+------+--------+\n| id   | number |\n+------+--------+\n|    1 |      1 |\n|    2 | 100001 |\n|    3 | 200001 |\n|    4 | 200002 |\n|    5 | 200003 |\n|    6 | 200004 |\n|    7 |    100 |\n|    8 |      2 |\n+------+--------+\n8 rows in set (0.01 sec)\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"NOTICE"})}),"\n",(0,s.jsxs)(n.p,{children:["We recommend that you do not use implicitly assigned values and explicitly specified values for the ",(0,s.jsx)(n.code,{children:"AUTO_INCREMENT"})," column at the same time. Because the specified values may be the same as the values generated by StarRocks, breaking the ",(0,s.jsx)(n.a,{href:"#uniqueness",children:"global uniqueness of auto-incremented IDs"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"basic-features",children:"Basic features"}),"\n",(0,s.jsx)(n.h3,{id:"uniqueness",children:"Uniqueness"}),"\n",(0,s.jsxs)(n.p,{children:["In general, StarRocks guarantees that the values for a ",(0,s.jsx)(n.code,{children:"AUTO_INCREMENT"})," column are globally unique across a table. We recommend that you do not implicitly assign and explicitly specify the values for the ",(0,s.jsx)(n.code,{children:"AUTO_INCREMENT"})," column at the same time. If you do so, it may break the global uniqueness of auto-incremented IDs. Here is a simple example: Create a table named ",(0,s.jsx)(n.code,{children:"test_tbl2"})," with two columns, ",(0,s.jsx)(n.code,{children:"id"})," and ",(0,s.jsx)(n.code,{children:"number"}),". Specify the column ",(0,s.jsx)(n.code,{children:"number"})," as the ",(0,s.jsx)(n.code,{children:"AUTO_INCREMENT"})," column."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:'CREATE TABLE test_tbl2\n(\n    id BIGINT NOT NULL,\n    number BIGINT NOT NULL AUTO_INCREMENT\n ) \nPRIMARY KEY (id) \nDISTRIBUTED BY HASH(id)\nPROPERTIES("replicated_storage" = "true");\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Implicitly assign and explicitly specify the values for the ",(0,s.jsx)(n.code,{children:"AUTO_INCREMENT"})," column ",(0,s.jsx)(n.code,{children:"number"})," in the table ",(0,s.jsx)(n.code,{children:"test_tbl2"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"INSERT INTO test_tbl2 (id, number) VALUES (1, DEFAULT);\nINSERT INTO test_tbl2 (id, number) VALUES (2, 2);\nINSERT INTO test_tbl2 (id) VALUES (3);\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Query the table ",(0,s.jsx)(n.code,{children:"test_tbl2"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"mysql > SELECT * FROM test_tbl2 ORDER BY id;\n+------+--------+\n| id   | number |\n+------+--------+\n|    1 |      1 |\n|    2 |      2 |\n|    3 | 100001 |\n+------+--------+\n3 rows in set (0.08 sec)\n"})}),"\n",(0,s.jsx)(n.h3,{id:"monotonicity",children:"Monotonicity"}),"\n",(0,s.jsxs)(n.p,{children:["In order to improve the performance of allocating auto-incremented IDs, BEs cache some auto-incremented IDs locally. In this situation, StarRocks cannot guarantee that the values for the ",(0,s.jsx)(n.code,{children:"AUTO_INCREMENT"})," column are strictly monotonic. It can only be ensured that the values roughly increase in chronological order."]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"NOTE"})}),"\n",(0,s.jsxs)(n.p,{children:["The number of auto-incremented IDs cached by the BEs is determined by the FE dynamic parameter ",(0,s.jsx)(n.code,{children:"auto_increment_cache_size"}),", which defaults to ",(0,s.jsx)(n.code,{children:"100,000"}),". You can modify the value by using ",(0,s.jsx)(n.code,{children:'ADMIN SET FRONTEND CONFIG ("auto_increment_cache_size" = "xxx");'})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["For example, a StarRocks cluster has one FE node and two BE nodes. Create a table named ",(0,s.jsx)(n.code,{children:"test_tbl3"})," and insert five rows of data as follows:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:'CREATE TABLE test_tbl3\n(\n    id BIGINT NOT NULL,\n    number BIGINT NOT NULL AUTO_INCREMENT\n) \nPRIMARY KEY (id)\nDISTRIBUTED BY HASH(id)\nPROPERTIES("replicated_storage" = "true");\n\nINSERT INTO test_tbl3 VALUES (1, DEFAULT);\nINSERT INTO test_tbl3 VALUES (2, DEFAULT);\nINSERT INTO test_tbl3 VALUES (3, DEFAULT);\nINSERT INTO test_tbl3 VALUES (4, DEFAULT);\nINSERT INTO test_tbl3 VALUES (5, DEFAULT);\n'})}),"\n",(0,s.jsxs)(n.p,{children:["The auto-incremented IDs in the table ",(0,s.jsx)(n.code,{children:"test_tbl3"})," do not monotonically increase, because the two BE nodes cache auto-incremented IDs, [1, 100000] and [100001, 200000], respectively. When data is loaded by using multiple INSERT statements, the data is sent to different BE nodes which allocate auto-incremented IDs independently. Therefore, it cannot be guaranteed that auto-incremented IDs are strictly monotonic."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"mysql > SELECT * FROM test_tbl3 ORDER BY id;\n+------+--------+\n| id   | number |\n+------+--------+\n|    1 |      1 |\n|    2 | 100001 |\n|    3 | 200001 |\n|    4 |      2 |\n|    5 | 100002 |\n+------+--------+\n5 rows in set (0.07 sec)\n"})}),"\n",(0,s.jsxs)(n.h2,{id:"partial-updates-and-auto_increment-column",children:["Partial updates and ",(0,s.jsx)(n.code,{children:"AUTO_INCREMENT"})," column"]}),"\n",(0,s.jsxs)(n.p,{children:["This section explains how to update only a few specified columns in a table that contains an ",(0,s.jsx)(n.code,{children:"AUTO_INCREMENT"})," column."]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"NOTE"})}),"\n",(0,s.jsx)(n.p,{children:"Currently, only primary key tables support partial updates."}),"\n"]}),"\n",(0,s.jsxs)(n.h3,{id:"auto_increment-column-is-primary-key",children:[(0,s.jsx)(n.code,{children:"AUTO_INCREMENT"})," column is primary key"]}),"\n",(0,s.jsxs)(n.p,{children:["You need to specify the primary key during partial updates. Therefore, if the ",(0,s.jsx)(n.code,{children:"AUTO_INCREMENT"})," column is the primary key or part of the primary key, the user behavior for partial updates is exactly the same as when the ",(0,s.jsx)(n.code,{children:"AUTO_INCREMENT"})," column is not defined."]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Create a table ",(0,s.jsx)(n.code,{children:"test_tbl4"})," in the database ",(0,s.jsx)(n.code,{children:"example_db"})," and insert one data row."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"-- Create a table.\nCREATE TABLE test_tbl4\n(\n    id BIGINT AUTO_INCREMENT,\n    name BIGINT NOT NULL,\n    job1 BIGINT NOT NULL,\n    job2 BIGINT NOT NULL\n) \nPRIMARY KEY (id, name)\nDISTRIBUTED BY HASH(id)\nPROPERTIES(\"replicated_storage\" = \"true\");\n\n-- Prepared data.\nmysql > INSERT INTO test_tbl4 (id, name, job1, job2) VALUES (0, 0, 1, 1);\nQuery OK, 1 row affected (0.04 sec)\n{'label':'insert_6af28e77-7d2b-11ed-af6e-02424283676b', 'status':'VISIBLE', 'txnId':'152'}\n\n-- Query the table.\nmysql > SELECT * FROM test_tbl4 ORDER BY id;\n+------+------+------+------+\n| id   | name | job1 | job2 |\n+------+------+------+------+\n|    0 |    0 |    1 |    1 |\n+------+------+------+------+\n1 row in set (0.01 sec)\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Prepare the CSV file ",(0,s.jsx)(n.strong,{children:"my_data4.csv"})," to update table ",(0,s.jsx)(n.code,{children:"test_tbl4"}),". The CSV file includes values for the ",(0,s.jsx)(n.code,{children:"AUTO_INCREMENT"})," column and does not include values for the column ",(0,s.jsx)(n.code,{children:"job1"}),". The primary key of the first row already exists in table ",(0,s.jsx)(n.code,{children:"test_tbl4"}),", while the primary key of the second row does not exist in the table."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plaintext",children:"0,0,99\n1,1,99\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Run a ",(0,s.jsx)(n.a,{href:"/doc/docs/3.0/sql-reference/sql-statements/data-manipulation/STREAM%20LOAD",children:"Stream Load"})," job and use the CSV file to update table ",(0,s.jsx)(n.code,{children:"test_tbl4"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Bash",children:'curl --location-trusted -u <username>:<password> -H "label:1" \\\n    -H "column_separator:," \\\n    -H "partial_update:true" \\\n    -H "columns:id,name,job2" \\\n    -T my_data4.csv -XPUT \\\n    http://<fe_host>:<fe_http_port>/api/example_db/test_tbl4/_stream_load\n'})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Query the updated table. The first row of data already exists in table ",(0,s.jsx)(n.code,{children:"test_tbl4"}),", and the value for the column ",(0,s.jsx)(n.code,{children:"job1"})," remains unchanged. The second row of data is newly inserted, and because the default value for the column ",(0,s.jsx)(n.code,{children:"job1"})," is not specified, the partial update framework directly sets the value for this column to ",(0,s.jsx)(n.code,{children:"0"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"mysql > SELECT * FROM test_tbl4 ORDER BY id;\n+------+------+------+------+\n| id   | name | job1 | job2 |\n+------+------+------+------+\n|    0 |    0 |    1 |   99 |\n|    1 |    1 |    0 |   99 |\n+------+------+------+------+\n2 rows in set (0.01 sec)\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.h3,{id:"auto_increment-column-is-not-primary-key",children:[(0,s.jsx)(n.code,{children:"AUTO_INCREMENT"})," column is not primary key"]}),"\n",(0,s.jsxs)(n.p,{children:["If the ",(0,s.jsx)(n.code,{children:"AUTO_INCREMENT"})," column is not a primary key or a part of the primary key, and auto-incremented IDs are not provided in a Stream Load job, the following situations occur:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"If the row already exists in the table, StarRocks does not update the auto-incremented ID."}),"\n",(0,s.jsx)(n.li,{children:"If the row is newly loaded into the table, StarRocks generates a new auto-incremented ID."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"This feature can be used to build a dictionary table for quickly computing distinct STRING values."}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["In the database ",(0,s.jsx)(n.code,{children:"example_db"}),", create a table ",(0,s.jsx)(n.code,{children:"test_tbl5"})," and specify the column ",(0,s.jsx)(n.code,{children:"job1"})," as the ",(0,s.jsx)(n.code,{children:"AUTO_INCREMENT"})," column and insert a data row into the table ",(0,s.jsx)(n.code,{children:"test_tbl5"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"-- Create a table.\nCREATE TABLE test_tbl5\n(\n    id BIGINT NOT NULL,\n    name BIGINT NOT NULL,\n    job1 BIGINT NOT NULL AUTO_INCREMENT,\n    job2 BIGINT NOT NULL\n)\nPRIMARY KEY (id, name)\nDISTRIBUTED BY HASH(id)\nPROPERTIES(\"replicated_storage\" = \"true\");\n\n-- Prepare data.\nmysql > INSERT INTO test_tbl5 VALUES (0, 0, -1, -1);\nQuery OK, 1 row affected (0.04 sec)\n{'label':'insert_458d9487-80f6-11ed-ae56-aa528ccd0ebf', 'status':'VISIBLE', 'txnId':'94'}\n\n-- Query the table.\nmysql > SELECT * FROM test_tbl5 ORDER BY id;\n+------+------+------+------+\n| id   | name | job1 | job2 |\n+------+------+------+------+\n|    0 |    0 |   -1 |   -1 |\n+------+------+------+------+\n1 row in set (0.01 sec)\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Prepare a CSV file ",(0,s.jsx)(n.strong,{children:"my_data5.csv"})," to update table ",(0,s.jsx)(n.code,{children:"test_tbl5"}),". The CSV file does not contain values for the ",(0,s.jsx)(n.code,{children:"AUTO_INCREMENT"})," column ",(0,s.jsx)(n.code,{children:"job1"}),". The primary key of the first row already exists in the table while the primary keys of the second and third rows do not."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plaintext",children:"0,0,99\n1,1,99\n2,2,99\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Run a ",(0,s.jsx)(n.a,{href:"/doc/docs/3.0/sql-reference/sql-statements/data-manipulation/STREAM%20LOAD",children:"Stream Load"})," job to load data from the CSV file into table ",(0,s.jsx)(n.code,{children:"test_tbl5"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Bash",children:'curl --location-trusted -u <username>:<password> -H "label:2" \\\n    -H "column_separator:," \\\n    -H "partial_update:true" \\\n    -H "columns: id,name,job2" \\\n    -T my_data5.csv -XPUT \\\n    http://<fe_host>:<fe_http_port>/api/example_db/test_tbl5/_stream_load\n'})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Query the updated table. The first row of data already exists in table ",(0,s.jsx)(n.code,{children:"test_tbl5"}),", so the ",(0,s.jsx)(n.code,{children:"AUTO_INCREMENT"})," column ",(0,s.jsx)(n.code,{children:"job1"})," retains its original value. The second and third rows of data are newly inserted, so StarRocks generate new values for the ",(0,s.jsx)(n.code,{children:"AUTO_INCREMENT"})," column ",(0,s.jsx)(n.code,{children:"job1"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"mysql > SELECT * FROM test_tbl5 ORDER BY id;\n+------+------+--------+------+\n| id   | name | job1   | job2 |\n+------+------+--------+------+\n|    0 |    0 |     -1 |   99 |\n|    1 |    1 |      1 |   99 |\n|    2 |    2 | 100001 |   99 |\n+------+------+--------+------+\n3 rows in set (0.01 sec)\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"limits",children:"Limits"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["When a table with an ",(0,s.jsx)(n.code,{children:"AUTO_INCREMENT"})," column is created, ",(0,s.jsx)(n.code,{children:"'replicated_storage' = 'true'"})," must be set to ensure that all replicas have the same auto-incremented IDs."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Each table can have only one ",(0,s.jsx)(n.code,{children:"AUTO_INCREMENT"})," column."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["The data type of the ",(0,s.jsx)(n.code,{children:"AUTO_INCREMENT"})," column must be BIGINT."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"AUTO_INCREMENT"})," column must be ",(0,s.jsx)(n.code,{children:"NOT NULL"})," and does not have a default value."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["You can delete data from a Primary Key table with an ",(0,s.jsx)(n.code,{children:"AUTO_INCREMENT"})," column. However, if the ",(0,s.jsx)(n.code,{children:"AUTO_INCREMENT"})," column is not the primary key or part of the primary key, you need to note the following limits when you delete data in the following scenarios:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"During the DELETE operation, there is also a load job for partial updates, which only contains UPSERT operations. If both the UPSERT and DELETE operations hit the same data row and the UPSERT operation is executed after the DELETE operation, the UPSERT operation may not take effect."}),"\n",(0,s.jsx)(n.li,{children:"There is a load job for partial updates, which includes multiple UPSERT and DELETE operations on the same data row. If a certain UPSERT operation is executed after the DELETE operation, the UPSERT operation may not take effect."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Adding the ",(0,s.jsx)(n.code,{children:"AUTO_INCREMENT"})," attribute by using ALTER TABLE is not supported."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Currently, StarRocks's shared-data mode does not support the ",(0,s.jsx)(n.code,{children:"AUTO_INCREMENT"})," attribute."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["StarRocks does not support specifying the starting value and step size for the ",(0,s.jsx)(n.code,{children:"AUTO_INCREMENT"})," column."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"keywords",children:"Keywords"}),"\n",(0,s.jsx)(n.p,{children:"AUTO_INCREMENT, AUTO INCREMENT"})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(d,e)})):d(e)}},11151:(e,n,t)=>{t.d(n,{Zo:()=>r,ah:()=>i});var s=t(67294);const a=s.createContext({});function i(e){const n=s.useContext(a);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const l={};function r({components:e,children:n,disableParentContext:t}){let r;return r=t?"function"==typeof e?e({}):e||l:i(e),s.createElement(a.Provider,{value:r},n)}}}]);