"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[49549],{49416:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>c});var t=a(85893),s=a(11151);const r={displayed_sidebar:"English"},l="Generated columns",d={id:"sql-reference/sql-statements/generated_columns",title:"Generated columns",description:"Since v3.1, StarRocks supports generated columns. Generated columns can be used to accelerate queries with complex expressions. This feature supports precomputing and storing the results of expressions and query rewrites, which significantly accelerates queries with the same complex expressions.",source:"@site/versioned_docs/version-3.1/sql-reference/sql-statements/generated_columns.md",sourceDirName:"sql-reference/sql-statements",slug:"/sql-reference/sql-statements/generated_columns",permalink:"/doc/docs/sql-reference/sql-statements/generated_columns",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-statements/generated_columns.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"AUTO_INCREMENT",permalink:"/doc/docs/sql-reference/sql-statements/auto_increment"},next:{title:"System variables",permalink:"/doc/docs/reference/System_variable"}},o={},c=[{value:"Basic operations",id:"basic-operations",level:2},{value:"Create generated columns",id:"create-generated-columns",level:3},{value:"Syntax",id:"syntax",level:4},{value:"Create generated columns at table creation (Recommended)",id:"create-generated-columns-at-table-creation-recommended",level:4},{value:"Add generated columns after table creation",id:"add-generated-columns-after-table-creation",level:4},{value:"Load data into generated columns",id:"load-data-into-generated-columns",level:3},{value:"Modify generated columns",id:"modify-generated-columns",level:3},{value:"Drop a generated column",id:"drop-a-generated-column",level:3},{value:"Query rewrites",id:"query-rewrites",level:3},{value:"Partial updates and generated columns",id:"partial-updates-and-generated-columns",level:3}];function i(e){const n=Object.assign({h1:"h1",p:"p",a:"a",strong:"strong",h2:"h2",h3:"h3",h4:"h4",pre:"pre",code:"code",ul:"ul",li:"li",blockquote:"blockquote",ol:"ol"},(0,s.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"generated-columns",children:"Generated columns"}),"\n",(0,t.jsxs)(n.p,{children:["Since v3.1, StarRocks supports generated columns. Generated columns can be used to accelerate queries with complex expressions. This feature supports precomputing and storing the results of expressions and ",(0,t.jsx)(n.a,{href:"#query-rewrites",children:"query rewrites"}),", which significantly accelerates queries with the same complex expressions."]}),"\n",(0,t.jsx)(n.p,{children:"You can define one or more generated columns to store the results of expressions at table creation. As such, when executing queries that contain the expression whose results are stored in the generated column you have defined, the CBO rewrites the query to read data directly from the generated column. Alternatively, you can directly query the data in the generated column."}),"\n",(0,t.jsxs)(n.p,{children:["It is also recommended to ",(0,t.jsx)(n.strong,{children:"evaluate the impact of generated columns on loading performance because computing expressions takes some time"}),". Additionally, it is advised to ",(0,t.jsxs)(n.strong,{children:[(0,t.jsx)(n.a,{href:"#create-generated-columns-at-table-creation-recommended",children:"create generated columns at table creation"})," rather than adding or modifying them after table creation"]}),". Because it is time-consuming and costly to add or modify generated columns after table creation."]}),"\n",(0,t.jsx)(n.h2,{id:"basic-operations",children:"Basic operations"}),"\n",(0,t.jsx)(n.h3,{id:"create-generated-columns",children:"Create generated columns"}),"\n",(0,t.jsx)(n.h4,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:"<col_name> <data_type> [NULL] AS <expr> [COMMENT 'string']\n"})}),"\n",(0,t.jsx)(n.h4,{id:"create-generated-columns-at-table-creation-recommended",children:"Create generated columns at table creation (Recommended)"}),"\n",(0,t.jsxs)(n.p,{children:["Create a table named ",(0,t.jsx)(n.code,{children:"test_tbl1"})," with five columns of which columns ",(0,t.jsx)(n.code,{children:"newcol1"})," and ",(0,t.jsx)(n.code,{children:"newcol2"})," are generated columns whose values are computed by using the specified expressions and referencing the values of the regular columns ",(0,t.jsx)(n.code,{children:"data_array"})," and ",(0,t.jsx)(n.code,{children:"data_json"})," respectively."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:'CREATE TABLE test_tbl1\n(\n    id INT NOT NULL,\n    data_array ARRAY<int> NOT NULL,\n    data_json JSON NOT NULL,\n    newcol1 DOUBLE AS array_avg(data_array),\n    newcol2 String AS json_string(json_query(data_json, "$.a"))\n)\nPRIMARY KEY (id)\nDISTRIBUTED BY HASH(id);\n'})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"NOTICE"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Generated columns must be defined after regular columns."}),"\n",(0,t.jsx)(n.li,{children:"Aggregate functions cannot be used in the expressions for generated columns."}),"\n",(0,t.jsxs)(n.li,{children:["The expressions for generated column cannot reference other generated columns or ",(0,t.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/auto_increment",children:"auto-increment columns"}),", but the expressions can reference multiple regular columns."]}),"\n",(0,t.jsx)(n.li,{children:"The data type of a generated column must match the data type of the result generated by the expression for the generated column."}),"\n",(0,t.jsx)(n.li,{children:"Generated columns cannot be created on Aggregate tables."}),"\n",(0,t.jsx)(n.li,{children:"Currently, StarRocks's shared-data mode does not support generated columns."}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"add-generated-columns-after-table-creation",children:"Add generated columns after table creation"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"NOTICE"})}),"\n",(0,t.jsx)(n.p,{children:"This operation is time-consuming and resource-intensive. Therefore, it is recommended to add generated columns at table creation. If it is unavoidable to use ALTER TABLE to add generated columns, it is recommended to evaluate the cost and time involved in advance."}),"\n"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Create a table named ",(0,t.jsx)(n.code,{children:"test_tbl2"})," with three regular columns ",(0,t.jsx)(n.code,{children:"id"}),", ",(0,t.jsx)(n.code,{children:"data_array"}),", and ",(0,t.jsx)(n.code,{children:"data_json"}),". Insert a data row into the table."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:'-- Create a table.\nCREATE TABLE test_tbl2\n(\n    id INT NOT NULL,\n    data_array ARRAY<int> NOT NULL,\n    data_json JSON NOT NULL\n)\nPRIMARY KEY (id)\nDISTRIBUTED BY HASH(id);\n\n-- Insert a data row.\nINSERT INTO test_tbl2 VALUES (1, [1,2], parse_json(\'{"a" : 1, "b" : 2}\'));\n\n-- Query the table.\nMySQL [example_db]> select * from test_tbl2;\n+------+------------+------------------+\n| id   | data_array | data_json        |\n+------+------------+------------------+\n|    1 | [1,2]      | {"a": 1, "b": 2} |\n+------+------------+------------------+\n1 row in set (0.04 sec)\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Execute ALTER TABLE ... ADD COLUMN ... to add generated columns ",(0,t.jsx)(n.code,{children:"newcol1"})," and ",(0,t.jsx)(n.code,{children:"newcol2"}),", which are created by evaluating the expressions based on the values of regular columns ",(0,t.jsx)(n.code,{children:"data_array"})," and ",(0,t.jsx)(n.code,{children:"data_json"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:'ALTER TABLE test_tbl2\nADD COLUMN newcol1 DOUBLE AS array_avg(data_array);\n\nALTER TABLE test_tbl2\nADD COLUMN newcol2 String AS json_string(json_query(data_json, "$.a"));\n'})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"NOTICE"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Adding generated columns to Aggregate tables is not supported."}),"\n",(0,t.jsx)(n.li,{children:"Regular columns need to be defined before generated columns. When you use the ALTER TABLE ... ADD COLUMN ... statement to add a regular column without specifying the position of the new regular column, the system automatically places it before the generated columns. Moreover, you cannot use AFTER to explicitly place the regular column after a generated column."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Query the table data."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:'MySQL [example_db]> SELECT * FROM test_tbl2;\n+------+------------+------------------+---------+---------+\n| id   | data_array | data_json        | newcol1 | newcol2 |\n+------+------------+------------------+---------+---------+\n|    1 | [1,2]      | {"a": 1, "b": 2} |     1.5 | 1       |\n+------+------------+------------------+---------+---------+\n1 row in set (0.04 sec)\n'})}),"\n",(0,t.jsxs)(n.p,{children:["The result shows that the generated columns ",(0,t.jsx)(n.code,{children:"newcol1"})," and ",(0,t.jsx)(n.code,{children:"newcol2"})," are added to the table, and StarRocks automatically computes their values based on the expression."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"load-data-into-generated-columns",children:"Load data into generated columns"}),"\n",(0,t.jsxs)(n.p,{children:["During data loading, StarRocks automatically calculates the values for generated columns based on the expressions. You cannot specify the values of generated columns. The following example uses the ",(0,t.jsx)(n.a,{href:"/doc/docs/loading/InsertInto",children:"INSERT INTO"})," statement to load data:"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Use INSERT INTO to insert a record into the ",(0,t.jsx)(n.code,{children:"test_tbl1"})," table. Note that you cannot specify the values for the generated columns within the ",(0,t.jsx)(n.code,{children:"VALUES ()"})," clause."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:'INSERT INTO test_tbl1 (id, data_array, data_json)\nVALUES (1, [1,2], parse_json(\'{"a" : 1, "b" : 2}\'));\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Query the table data."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:'MySQL [example_db]> SELECT * FROM test_tbl1;\n+------+------------+------------------+---------+---------+\n| id   | data_array | data_json        | newcol1 | newcol2 |\n+------+------------+------------------+---------+---------+\n|    1 | [1,2]      | {"a": 1, "b": 2} |     1.5 | 1       |\n+------+------------+------------------+---------+---------+\n1 row in set (0.01 sec)\n'})}),"\n",(0,t.jsxs)(n.p,{children:["The results show that StarRocks automatically computes the values for the generated columns ",(0,t.jsx)(n.code,{children:"newcol1"})," and ",(0,t.jsx)(n.code,{children:"newcol2"})," based on the expressions."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"NOTICE"}),":"]}),"\n",(0,t.jsx)(n.p,{children:"The following error is returned if you specify values for the generated columns during data loading:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:'MySQL [example_db]> INSERT INTO test_tbl1 (id, data_array, data_json, newcol1, newcol2) \nVALUES (2, [3,4], parse_json(\'{"a" : 3, "b" : 4}\'), 3.5, "3");\nERROR 1064 (HY000): Getting analyzing error. Detail message: materialized column \'newcol1\' can not be specified.\n\nMySQL [example_db]> INSERT INTO test_tbl1 VALUES (2, [3,4], parse_json(\'{"a" : 3, "b" : 4}\'), 3.5, "3");\nERROR 1064 (HY000): Getting analyzing error. Detail message: Column count doesn\'t match value count.\n'})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"modify-generated-columns",children:"Modify generated columns"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"NOTICE"})}),"\n",(0,t.jsx)(n.p,{children:"This operation is time-consuming and resource-intensive. If it is unavoidable to use ALTER TABLE to modify generated columns, it is recommended to evaluate the cost and time involved in advance."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"You can modify the data type and expression of a generated column."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Create a table ",(0,t.jsx)(n.code,{children:"test_tbl3"})," with five columns of which columns ",(0,t.jsx)(n.code,{children:"newcol1"})," and ",(0,t.jsx)(n.code,{children:"newcol2"})," are generated columns whose values are computed by using the specified expressions and referencing the values of the regular columns ",(0,t.jsx)(n.code,{children:"data_array"})," and ",(0,t.jsx)(n.code,{children:"data_json"})," respectively. Insert a data row into the table."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:'-- Create a table.\nMySQL [example_db]> CREATE TABLE test_tbl3\n(\n    id INT NOT NULL,\n    data_array ARRAY<int> NOT NULL,\n    data_json JSON NOT NULL,\n    -- The data types and expressions of generated columns are specified as follows:\n    newcol1 DOUBLE AS array_avg(data_array),\n    newcol2 String AS json_string(json_query(data_json, "$.a"))\n)\nPRIMARY KEY (id)\nDISTRIBUTED BY HASH(id);\n\n-- Insert a data row.\nINSERT INTO test_tbl3 (id, data_array, data_json)\nVALUES (1, [1,2], parse_json(\'{"a" : 1, "b" : 2}\'));\n\n-- Query the table.\nMySQL [example_db]> select * from test_tbl3;\n+------+------------+------------------+---------+---------+\n| id   | data_array | data_json        | newcol1 | newcol2 |\n+------+------------+------------------+---------+---------+\n|    1 | [1,2]      | {"a": 1, "b": 2} |     1.5 | 1       |\n+------+------------+------------------+---------+---------+\n1 row in set (0.01 sec)\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Modified the generated columns ",(0,t.jsx)(n.code,{children:"newcol1"})," and ",(0,t.jsx)(n.code,{children:"newcol2"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Change the data type of the generated column ",(0,t.jsx)(n.code,{children:"newcol1"})," to ",(0,t.jsx)(n.code,{children:"ARRAY<INT>"})," and change its expression to ",(0,t.jsx)(n.code,{children:"data_array"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:"ALTER TABLE test_tbl3 \nMODIFY COLUMN newcol1 ARRAY<INT> AS data_array;\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Modify the expression of the generated column ",(0,t.jsx)(n.code,{children:"newcol2"})," to extract the values of field ",(0,t.jsx)(n.code,{children:"b"})," from the regular column ",(0,t.jsx)(n.code,{children:"data_json"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:'ALTER TABLE test_tbl3\nMODIFY COLUMN newcol2 String AS json_string(json_query(data_json, "$.b"));\n'})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"View the modified schema and the data in the table."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"View the modified schema."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:'MySQL [example_db]> show create table test_tbl3\\G\n**** 1. row ****\n    Table: test_tbl3\nCreate Table: CREATE TABLE test_tbl3 (\nid int(11) NOT NULL COMMENT "",\ndata_array array<int(11)> NOT NULL COMMENT "",\ndata_json json NOT NULL COMMENT "",\n-- After modification, the data types and expressions of generated columns are as follows:\nnewcol1 array<int(11)> NULL AS example_db.test_tbl3.data_array COMMENT "",\nnewcol2 varchar(65533) NULL AS json_string(json_query(example_db.test_tbl3.data_json, \'$.b\')) COMMENT ""\n) ENGINE=OLAP \nPRIMARY KEY(id)\nDISTRIBUTED BY HASH(id)\nPROPERTIES (...);\n1 row in set (0.00 sec)\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Query the table data after modification. The result shows that StarRocks recalculates the values of the generated columns ",(0,t.jsx)(n.code,{children:"newcol1"})," and ",(0,t.jsx)(n.code,{children:"newcol2"})," based on the modified expressions."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:'MySQL [example_db]> select * from test_tbl3;\n+------+------------+------------------+---------+---------+\n| id   | data_array | data_json        | newcol1 | newcol2 |\n+------+------------+------------------+---------+---------+\n|    1 | [1,2]      | {"a": 1, "b": 2} | [1,2]   | 2       |\n+------+------------+------------------+---------+---------+\n1 row in set (0.01 sec)\n'})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"drop-a-generated-column",children:"Drop a generated column"}),"\n",(0,t.jsxs)(n.p,{children:["Drop column ",(0,t.jsx)(n.code,{children:"newcol1"})," from the table ",(0,t.jsx)(n.code,{children:"test_tbl3"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:"ALTER TABLE test_tbl3 DROP COLUMN newcol1;\n"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"NOTICE"}),":"]}),"\n",(0,t.jsx)(n.p,{children:"If a generated colum references a regular column in the expression, you cannot directly drop or modify that regular column. Instead, you need to first drop the generated column and then drop or modify the regular column."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"query-rewrites",children:"Query rewrites"}),"\n",(0,t.jsx)(n.p,{children:"If the expression in a query matches the expression of a generated column, the optimizer automatically rewrites the query to directly read the values of the generated column."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Suppose that you create a table ",(0,t.jsx)(n.code,{children:"test_tbl4"})," with the following schema:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:'CREATE TABLE test_tbl4\n(\n    id INT NOT NULL,\n    data_array ARRAY<int> NOT NULL,\n    data_json JSON NOT NULL,\n    newcol1 DOUBLE AS array_avg(data_array),\n    newcol2 String AS json_string(json_query(data_json, "$.a"))\n)\nPRIMARY KEY (id) DISTRIBUTED BY HASH(id);\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["If you query the data in the table ",(0,t.jsx)(n.code,{children:"test_tbl4"})," by using the ",(0,t.jsx)(n.code,{children:'SELECT array_avg(data_array), json_string(json_query(data_json, "$.a")) FROM test_tbl4;'})," statement, the query involves only the regular columns ",(0,t.jsx)(n.code,{children:"data_array"})," and ",(0,t.jsx)(n.code,{children:"data_json"}),". However, the expressions in the query match the expressions of the generated columns ",(0,t.jsx)(n.code,{children:"newcol1"})," and ",(0,t.jsx)(n.code,{children:"newcol2"}),". In this case, the execution plan shows that the CBO automatically rewrites the query to read the values of the generated columns ",(0,t.jsx)(n.code,{children:"newcol1"})," and ",(0,t.jsx)(n.code,{children:"newcol2"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:'MySQL [example_db]> EXPLAIN SELECT array_avg(data_array), json_string(json_query(data_json, "$.a")) FROM test_tbl4;\n+---------------------------------------+\n| Explain String                        |\n+---------------------------------------+\n| PLAN FRAGMENT 0                       |\n|  OUTPUT EXPRS:4: newcol1 | 5: newcol2 | -- The query is rewritten to read data from the generated columns newcol1 and newcol2 are accessed.\n|   PARTITION: RANDOM                   |\n|                                       |\n|   RESULT SINK                         |\n|                                       |\n|   0:OlapScanNode                      |\n|      TABLE: test_tbl4                 |\n|      PREAGGREGATION: ON               |\n|      partitions=0/1                   |\n|      rollup: test_tbl4                |\n|      tabletRatio=0/0                  |\n|      tabletList=                      |\n|      cardinality=1                    |\n|      avgRowSize=2.0                   |\n+---------------------------------------+\n15 rows in set (0.00 sec)\n'})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"partial-updates-and-generated-columns",children:"Partial updates and generated columns"}),"\n",(0,t.jsxs)(n.p,{children:["To perform partial updates on a Primary Key table, you must specify all the regular columns referenced by the generated columns in the ",(0,t.jsx)(n.code,{children:"columns"})," parameter. The following example uses Stream Load to perform partial updates."]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Create a table ",(0,t.jsx)(n.code,{children:"test_tbl5"})," with five columns of which columns ",(0,t.jsx)(n.code,{children:"newcol1"})," and ",(0,t.jsx)(n.code,{children:"newcol2"})," are generated columns whose values are computed by using the specified expressions and referencing the values of the regular columns ",(0,t.jsx)(n.code,{children:"data_array"})," and ",(0,t.jsx)(n.code,{children:"data_json"})," respectively. Insert a data row into the table."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:'-- Create a table.\nCREATE TABLE test_tbl5\n(\n    id INT NOT NULL,\n    data_array ARRAY<int> NOT NULL,\n    data_json JSON NULL,\n    newcol1 DOUBLE AS array_avg(data_array),\n    newcol2 String AS json_string(json_query(data_json, "$.a"))\n)\nPRIMARY KEY (id)\nDISTRIBUTED BY HASH(id);\n\n-- Insert into a data row.\nINSERT INTO test_tbl5 (id, data_array, data_json)\nVALUES (1, [1,2], parse_json(\'{"a" : 1, "b" : 2}\'));\n\n-- Query the table.\nMySQL [example_db]> select * from test_tbl5;\n+------+------------+------------------+---------+---------+\n| id   | data_array | data_json        | newcol1 | newcol2 |\n+------+------------+------------------+---------+---------+\n|    1 | [1,2]      | {"a": 1, "b": 2} |     1.5 | 1       |\n+------+------------+------------------+---------+---------+\n1 row in set (0.01 sec)\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Prepare a CSV file ",(0,t.jsx)(n.code,{children:"my_data1.csv"})," to update some columns in the ",(0,t.jsx)(n.code,{children:"test_tbl5"})," table."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:'1|[3,4]|{"a": 3, "b": 4}\n2|[3,4]|{"a": 3, "b": 4} \n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Use ",(0,t.jsx)(n.a,{href:"/doc/docs/loading/StreamLoad",children:"Stream Load"})," with the ",(0,t.jsx)(n.code,{children:"my_data1.csv"})," file to update some columns of the ",(0,t.jsx)(n.code,{children:"test_tbl5"})," table. You need to set ",(0,t.jsx)(n.code,{children:"partial_update:true"})," and specify all the regular columns referenced by the generated columns in the ",(0,t.jsx)(n.code,{children:"columns"})," parameter."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Bash",children:'curl --location-trusted -u <username>:<password> -H "label:1" \\\n    -H "column_separator:|" \\\n    -H "partial_update:true" \\\n    -H "columns:id,data_array,data_json" \\ \n    -T my_data1.csv -XPUT \\\n    http://<fe_host>:<fe_http_port>/api/example_db/test_tbl5/_stream_load\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Query the table data."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:'[example_db]> select * from test_tbl5;\n+------+------------+------------------+---------+---------+\n| id   | data_array | data_json        | newcol1 | newcol2 |\n+------+------------+------------------+---------+---------+\n|    1 | [3,4]      | {"a": 3, "b": 4} |     3.5 | 3       |\n|    2 | [3,4]      | {"a": 3, "b": 4} |     3.5 | 3       |\n+------+------------+------------------+---------+---------+\n2 rows in set (0.01 sec)\n'})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"An error is returned by Stream Load if you perform partial updates without specifying all the regular columns referenced by the generated columns."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Prepare a CSV file ",(0,t.jsx)(n.code,{children:"my_data2.csv"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csv",children:"1|[3,4]\n2|[3,4]\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["When partial column updates are performed by using ",(0,t.jsx)(n.a,{href:"/doc/docs/loading/StreamLoad",children:"Stream Load"})," with the ",(0,t.jsx)(n.code,{children:"my_data2.csv"})," file, if the values for the ",(0,t.jsx)(n.code,{children:"data_json"})," column are not provided in ",(0,t.jsx)(n.code,{children:"my_data2.csv"})," and the ",(0,t.jsx)(n.code,{children:"columns"})," parameter in the Stream Load job does not include the ",(0,t.jsx)(n.code,{children:"data_json"})," column, even if the ",(0,t.jsx)(n.code,{children:"data_json"})," column allows null values, an error is returned by Stream Load because the column ",(0,t.jsx)(n.code,{children:"data_json"})," is referenced by the generated column ",(0,t.jsx)(n.code,{children:"newcol2"}),"."]}),"\n"]}),"\n"]})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,s.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(i,e)})):i(e)}},11151:(e,n,a)=>{a.d(n,{Zo:()=>d,ah:()=>r});var t=a(67294);const s=t.createContext({});function r(e){const n=t.useContext(s);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const l={};function d({components:e,children:n,disableParentContext:a}){let d;return d=a?"function"==typeof e?e({}):e||l:r(e),t.createElement(s.Provider,{value:d},n)}}}]);