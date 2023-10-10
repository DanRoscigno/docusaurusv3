"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[41297],{89621:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>t,metadata:()=>i,toc:()=>c});var s=a(85893),r=a(11151);const t={},l="ARRAY",i={id:"sql-reference/sql-statements/data-types/Array",title:"ARRAY",description:"ARRAY, as an extended type of database, is supported in various database systems such as PostgreSQL, ClickHouse, and Snowflake. ARRAY is widely used in scenarios such as A/B tests, user tag analysis, and user profiling. StarRocks supports multidimensional array nesting, array slicing, comparison, and filtering.",source:"@site/versioned_docs/version-3.1/sql-reference/sql-statements/data-types/Array.md",sourceDirName:"sql-reference/sql-statements/data-types",slug:"/sql-reference/sql-statements/data-types/Array",permalink:"/doc/docs/sql-reference/sql-statements/data-types/Array",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-statements/data-types/Array.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"Semi-structured",permalink:"/doc/docs/category/semi-structured"},next:{title:"JSON",permalink:"/doc/docs/sql-reference/sql-statements/data-types/JSON"}},o={},c=[{value:"Define ARRAY columns",id:"define-array-columns",level:2},{value:"Limits",id:"limits",level:2},{value:"Construct arrays in SQL",id:"construct-arrays-in-sql",level:2},{value:"Load Array data",id:"load-array-data",level:2},{value:"Use INSERT INTO to load arrays",id:"use-insert-into-to-load-arrays",level:3},{value:"Use Broker Load to load arrays from ORC or Parquet files",id:"use-broker-load-to-load-arrays-from-orc-or-parquet-files",level:3},{value:"Use Stream Load or Routine Load to load CSV-formatted arrays",id:"use-stream-load-or-routine-load-to-load-csv-formatted-arrays",level:3},{value:"Query ARRAY data",id:"query-array-data",level:2}];function d(e){const n=Object.assign({h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code",ul:"ul",li:"li",a:"a",h3:"h3",strong:"strong"},(0,r.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"array",children:"ARRAY"}),"\n",(0,s.jsx)(n.p,{children:"ARRAY, as an extended type of database, is supported in various database systems such as PostgreSQL, ClickHouse, and Snowflake. ARRAY is widely used in scenarios such as A/B tests, user tag analysis, and user profiling. StarRocks supports multidimensional array nesting, array slicing, comparison, and filtering."}),"\n",(0,s.jsx)(n.h2,{id:"define-array-columns",children:"Define ARRAY columns"}),"\n",(0,s.jsx)(n.p,{children:"You can define an ARRAY column when you create a table."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"-- Define a one-dimensional array.\nARRAY<type>\n\n-- Define a nested array.\nARRAY<ARRAY<type>>\n\n-- Define an array column as NOT NULL.\nARRAY<type> NOT NULL\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"type"})," specifies the data types of elements in an array. StarRocks supports the following element types: BOOLEAN, TINYINT, SMALLINT, INT, BIGINT, LARGEINT, FLOAT, DOUBLE, VARCHAR, CHAR, DATETIME, DATE, JSON, ARRAY (since v3.1), MAP (since v3.1), and STRUCT (since v3.1)."]}),"\n",(0,s.jsxs)(n.p,{children:["Elements in an array are nullable by default, for example, ",(0,s.jsx)(n.code,{children:"[null, 1 ,2]"}),". You cannot specify elements in an array as NOT NULL. However, you can specify an ARRAY column as NOT NULL when you create a table, such as the third example in the following code snippet."]}),"\n",(0,s.jsx)(n.p,{children:"Examples:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"-- Define c1 as a one-dimensional array whose element type is INT.\ncreate table t0(\n  c0 INT,\n  c1 ARRAY<INT>\n)\nduplicate key(c0)\ndistributed by hash(c0);\n\n-- Define c1 as an nested array whose element type is VARCHAR.\ncreate table t1(\n  c0 INT,\n  c1 ARRAY<ARRAY<VARCHAR(10)>>\n)\nduplicate key(c0)\ndistributed by hash(c0);\n\n-- Define c1 as a NOT NULL array column.\ncreate table t2(\n  c0 INT,\n  c1 ARRAY<INT> NOT NULL\n)\nduplicate key(c0)\ndistributed by hash(c0);\n"})}),"\n",(0,s.jsx)(n.h2,{id:"limits",children:"Limits"}),"\n",(0,s.jsx)(n.p,{children:"The following limits apply when you create ARRAY columns in StarRocks tables:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["In versions earlier than v2.1, you can create ARRAY columns only in Duplicate Key tables. From v2.1 onwards, you can also create ARRAY columns in other types of tables (Primary Key, Unique Key, Aggregate). Note that in an Aggregate table, you can create an ARRAY column only when the function used to aggregate data in that column is replace() or replace_if_not_null(). For more information, see ",(0,s.jsx)(n.a,{href:"/doc/docs/table_design/table_types/aggregate_table",children:"Aggregate table"}),"."]}),"\n",(0,s.jsx)(n.li,{children:"ARRAY columns cannot be used as key columns."}),"\n",(0,s.jsx)(n.li,{children:"ARRAY columns cannot be used as partition keys (included in PARTITION BY) or bucketing keys (included in DISTRIBUTED BY)."}),"\n",(0,s.jsx)(n.li,{children:"DECIMAL V3 is not supported in ARRAY."}),"\n",(0,s.jsx)(n.li,{children:"An array can have a maximum of 14-level nesting."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"construct-arrays-in-sql",children:"Construct arrays in SQL"}),"\n",(0,s.jsxs)(n.p,{children:["Arrays can be constructed in SQL using brackets ",(0,s.jsx)(n.code,{children:"[]"}),", with each array element separated by a comma (",(0,s.jsx)(n.code,{children:","}),")."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:'mysql> select [1, 2, 3] as numbers;\n\n+---------+\n| numbers |\n+---------+\n| [1,2,3] |\n+---------+\n\nmysql> select ["apple", "orange", "pear"] as fruit;\n\n+---------------------------+\n| fruit                     |\n+---------------------------+\n| ["apple","orange","pear"] |\n+---------------------------+\n\nmysql> select [true, false] as booleans;\n\n+----------+\n| booleans |\n+----------+\n| [1,0]    |\n+----------+\n'})}),"\n",(0,s.jsx)(n.p,{children:"StarRocks automatically infers data types if an array consists of elements of multiple types:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:'mysql> select [1, 1.2] as floats;\n+---------+\n| floats  |\n+---------+\n| [1.0,1.2] |\n+---------+\n\nmysql> select [12, "100"];\n\n+--------------+\n| [12,\'100\']   |\n+--------------+\n| ["12","100"] |\n+--------------+\n'})}),"\n",(0,s.jsxs)(n.p,{children:["You can use pointed brackets (",(0,s.jsx)(n.code,{children:"<>"}),") to show the declared array type."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:'mysql> select ARRAY<float>[1, 2];\n\n+-----------------------+\n| ARRAY<float>[1.0,2.0] |\n+-----------------------+\n| [1,2]                 |\n+-----------------------+\n\nmysql> select ARRAY<INT>["12", "100"];\n\n+------------------------+\n| ARRAY<int(11)>[12,100] |\n+------------------------+\n| [12,100]               |\n+------------------------+\n'})}),"\n",(0,s.jsx)(n.p,{children:"NULLs can be included in the element."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"mysql> select [1, NULL];\n\n+----------+\n| [1,NULL] |\n+----------+\n| [1,null] |\n+----------+\n"})}),"\n",(0,s.jsx)(n.p,{children:"For an empty array, you can use pointed brackets to show the declared type, or you can write [] directly for StarRocks to infer the type based on the context. If StarRocks cannot infer the type, it will report an error."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"mysql> select [];\n\n+------+\n| []   |\n+------+\n| []   |\n+------+\n\nmysql> select ARRAY<VARCHAR(10)>[];\n\n+----------------------------------+\n| ARRAY<unknown type: NULL_TYPE>[] |\n+----------------------------------+\n| []                               |\n+----------------------------------+\n\nmysql> select array_append([], 10);\n\n+----------------------+\n| array_append([], 10) |\n+----------------------+\n| [10]                 |\n+----------------------+\n"})}),"\n",(0,s.jsx)(n.h2,{id:"load-array-data",children:"Load Array data"}),"\n",(0,s.jsx)(n.p,{children:"StarRocks supports loading Array data in three ways:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"INSERT INTO is suitable for loading small-scale data for testing."}),"\n",(0,s.jsx)(n.li,{children:"Broker Load is suitable for loading ORC or Parquet files with large-scale data."}),"\n",(0,s.jsx)(n.li,{children:"Stream Load and Routine Load are suitable for loading CSV files with large-scale data."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"use-insert-into-to-load-arrays",children:"Use INSERT INTO to load arrays"}),"\n",(0,s.jsx)(n.p,{children:"You can use INSERT INTO to load small-scale data column by column, or perform ETL on data before loading the data."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"create table t0(\nc0 INT,\nc1 ARRAY<INT>\n)\nduplicate key(c0)\ndistributed by hash(c0);\n\nINSERT INTO t0 VALUES(1, [1,2,3]);\n"})}),"\n",(0,s.jsx)(n.h3,{id:"use-broker-load-to-load-arrays-from-orc-or-parquet-files",children:"Use Broker Load to load arrays from ORC or Parquet files"}),"\n",(0,s.jsxs)(n.p,{children:["The array type in StarRocks corresponds to the list structure in ORC and Parquet files, which eliminates the need for you to specify different data types in StarRocks. For more information about data loading, see ",(0,s.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/data-manipulation/BROKER%20LOAD",children:"Broker load"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"use-stream-load-or-routine-load-to-load-csv-formatted-arrays",children:"Use Stream Load or Routine Load to load CSV-formatted arrays"}),"\n",(0,s.jsxs)(n.p,{children:["Arrays in CSV files are separated with comma by default. You can use ",(0,s.jsx)(n.a,{href:"/doc/docs/loading/StreamLoad#load-csv-data",children:"Stream Load"})," or ",(0,s.jsx)(n.a,{href:"/doc/docs/loading/RoutineLoad#load-csv-format-data",children:"Routine Load"})," to load CSV text files or CSV data in Kafka."]}),"\n",(0,s.jsx)(n.h2,{id:"query-array-data",children:"Query ARRAY data"}),"\n",(0,s.jsxs)(n.p,{children:["You can access elements in an array using ",(0,s.jsx)(n.code,{children:"[]"})," and subscripts, starting from ",(0,s.jsx)(n.code,{children:"1"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"mysql> select [1,2,3][1];\n\n+------------+\n| [1,2,3][1] |\n+------------+\n|          1 |\n+------------+\n1 row in set (0.00 sec)\n"})}),"\n",(0,s.jsxs)(n.p,{children:["If the subscript is 0 or a negative number, ",(0,s.jsx)(n.strong,{children:"no error is reported and NULL is returned"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"mysql> select [1,2,3][0];\n\n+------------+\n| [1,2,3][0] |\n+------------+\n|       NULL |\n+------------+\n1 row in set (0.01 sec)\n"})}),"\n",(0,s.jsxs)(n.p,{children:["If the subscript exceeds the length of the array (the number of elements in the array), ",(0,s.jsx)(n.strong,{children:"NULL will be returned"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"mysql> select [1,2,3][4];\n\n+------------+\n| [1,2,3][4] |\n+------------+\n|       NULL |\n+------------+\n1 row in set (0.01 sec)\n"})}),"\n",(0,s.jsxs)(n.p,{children:["For multidimensional arrays, the elements can be accessed ",(0,s.jsx)(n.strong,{children:"recursively"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"mysql(ARRAY)> select [[1,2],[3,4]][2];\n\n+------------------+\n| [[1,2],[3,4]][2] |\n+------------------+\n| [3,4]            |\n+------------------+\n1 row in set (0.00 sec)\n\nmysql> select [[1,2],[3,4]][2][1];\n\n+---------------------+\n| [[1,2],[3,4]][2][1] |\n+---------------------+\n|                   3 |\n+---------------------+\n1 row in set (0.01 sec)\n"})})]})}const u=function(e={}){const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(d,e)})):d(e)}},11151:(e,n,a)=>{a.d(n,{Zo:()=>i,ah:()=>t});var s=a(67294);const r=s.createContext({});function t(e){const n=s.useContext(r);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const l={};function i({components:e,children:n,disableParentContext:a}){let i;return i=a?"function"==typeof e?e({}):e||l:t(e),s.createElement(r.Provider,{value:i},n)}}}]);