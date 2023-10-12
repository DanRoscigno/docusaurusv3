"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[26766],{63340:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>c,metadata:()=>r,toc:()=>l});var i=s(85893),t=s(11151);const c={},o="Sort keys and prefix indexes",r={id:"table_design/Sort_key",title:"Sort keys and prefix indexes",description:"When you create a table, you can select one or more of its columns to comprise a sort key. The sort key determines the order in which the data of the table is sorted before the data is stored on disk. You can use the sort key columns as filter conditions for queries. As such, StarRocks can quickly locate the data of interest, saving it from scanning the entire table to find the data that it needs to process. This reduces search complexity and therefore accelerates queries.",source:"@site/versioned_docs/version-3.0/table_design/Sort_key.md",sourceDirName:"table_design",slug:"/table_design/Sort_key",permalink:"/doc/docs/3.0/table_design/Sort_key",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/table_design/Sort_key.md",tags:[],version:"3.0",frontMatter:{},sidebar:"Chinese31",previous:{title:"Data compression",permalink:"/doc/docs/3.0/table_design/data_compression"},next:{title:"Overview of data loading",permalink:"/doc/docs/3.0/loading/Loading_intro"}},d={},l=[{value:"Principles",id:"principles",level:2},{value:"Duplicate Key",id:"duplicate-key",level:3},{value:"Aggregate Key",id:"aggregate-key",level:3},{value:"Unique Key",id:"unique-key",level:3},{value:"Primary Key",id:"primary-key",level:3},{value:"Sorting effect",id:"sorting-effect",level:2},{value:"How to select sort key columns",id:"how-to-select-sort-key-columns",level:2}];function a(e){const n=Object.assign({h1:"h1",p:"p",h2:"h2",code:"code",ul:"ul",li:"li",h3:"h3",pre:"pre",blockquote:"blockquote",strong:"strong",a:"a"},(0,t.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"sort-keys-and-prefix-indexes",children:"Sort keys and prefix indexes"}),"\n",(0,i.jsx)(n.p,{children:"When you create a table, you can select one or more of its columns to comprise a sort key. The sort key determines the order in which the data of the table is sorted before the data is stored on disk. You can use the sort key columns as filter conditions for queries. As such, StarRocks can quickly locate the data of interest, saving it from scanning the entire table to find the data that it needs to process. This reduces search complexity and therefore accelerates queries."}),"\n",(0,i.jsx)(n.p,{children:"Additionally, to reduce memory consumption, StarRocks supports creating a prefix index on a table. Prefix indexes are a type of spare index. StarRocks stores every 1024 rows of the table in a block, for which an index entry is generated and stored in the prefix index table. The prefix index entry for a block cannot exceed 36 bytes in length, and its content is the prefix composed of the table's sort key columns in the first row of that block. This helps StarRocks quickly locate the starting column number of the block that stores the data of that row when a search on the prefix index table is run. The prefix index of a table is 1024 times less than the table itself in size. Therefore, the entire prefix index can be cached in memory to help accelerate queries."}),"\n",(0,i.jsx)(n.h2,{id:"principles",children:"Principles"}),"\n",(0,i.jsxs)(n.p,{children:["In the Duplicate Key table, sort key columns are defined by using the ",(0,i.jsx)(n.code,{children:"DUPLICATE KEY"})," keyword."]}),"\n",(0,i.jsxs)(n.p,{children:["In the Aggregate table, sort key columns are defined by using the ",(0,i.jsx)(n.code,{children:"AGGREGATE KEY"})," keyword."]}),"\n",(0,i.jsxs)(n.p,{children:["In the Unique Key table, sort key columns are defined by using the ",(0,i.jsx)(n.code,{children:"UNIQUE KEY"})," keyword."]}),"\n",(0,i.jsxs)(n.p,{children:["Since v3.0, the primary key and sort key are decoupled in the Primary Key table. The sort key columns are defined by using the ",(0,i.jsx)(n.code,{children:"ORDER BY"})," keyword. The primary key columns are defined by using the ",(0,i.jsx)(n.code,{children:"PRIMARY KEY"})," keyword."]}),"\n",(0,i.jsx)(n.p,{children:"When you define sort key columns for a Duplicate Key table, an Aggregate table, or a Unique Key table, take note of the following points:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Sort key columns must be continuously defined columns, of which the first defined column must be the beginning sort key column."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"The columns that you plan to select as sort key columns must be defined prior to the other common columns."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"The sequence in which you list sort key columns must comply with the sequence in which you define the columns of the table."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["The following examples show allowed sort key columns and unallowed sort key columns of a table that consists of four columns, which are ",(0,i.jsx)(n.code,{children:"site_id"}),", ",(0,i.jsx)(n.code,{children:"city_code"}),", ",(0,i.jsx)(n.code,{children:"user_id"}),", and ",(0,i.jsx)(n.code,{children:"pv"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Examples of allowed sort key columns"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"site_id"})," and ",(0,i.jsx)(n.code,{children:"city_code"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"site_id"}),", ",(0,i.jsx)(n.code,{children:"city_code"}),", and ",(0,i.jsx)(n.code,{children:"user_id"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Examples of unallowed sort key columns"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"city_code"})," and ",(0,i.jsx)(n.code,{children:"site_id"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"city_code"})," and ",(0,i.jsx)(n.code,{children:"user_id"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"site_id"}),", ",(0,i.jsx)(n.code,{children:"city_code"}),", and ",(0,i.jsx)(n.code,{children:"pv"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The following sections provide examples of how to define sort key columns when you create tables of different types. These examples are suitable for StarRocks clusters that have at least three BEs."}),"\n",(0,i.jsx)(n.h3,{id:"duplicate-key",children:"Duplicate Key"}),"\n",(0,i.jsxs)(n.p,{children:["Create a table named ",(0,i.jsx)(n.code,{children:"site_access_duplicate"}),". The table consists of four columns: ",(0,i.jsx)(n.code,{children:"site_id"}),", ",(0,i.jsx)(n.code,{children:"city_code"}),", ",(0,i.jsx)(n.code,{children:"user_id"}),", and ",(0,i.jsx)(n.code,{children:"pv"}),", of which ",(0,i.jsx)(n.code,{children:"site_id"})," and ",(0,i.jsx)(n.code,{children:"city_code"})," are selected as sort key columns."]}),"\n",(0,i.jsx)(n.p,{children:"The statement for creating the table is as follows:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-SQL",children:"CREATE TABLE site_access_duplicate\n(\n    site_id INT DEFAULT '10',\n    city_code SMALLINT,\n    user_id INT,\n    pv BIGINT DEFAULT '0'\n)\nDUPLICATE KEY(site_id, city_code)\nDISTRIBUTED BY HASH(site_id);\n"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"NOTICE"})}),"\n",(0,i.jsxs)(n.p,{children:["Since v2.5.7, StarRocks can automatically set the number of buckets (BUCKETS) when you create a table or add a partition. You no longer need to manually set the number of buckets. For detailed information, see ",(0,i.jsx)(n.a,{href:"/doc/docs/3.0/table_design/Data_distribution#determine-the-number-of-buckets",children:"determine the number of buckets"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"aggregate-key",children:"Aggregate Key"}),"\n",(0,i.jsxs)(n.p,{children:["Create a table named ",(0,i.jsx)(n.code,{children:"site_access_aggregate"}),". The table consists of four columns: ",(0,i.jsx)(n.code,{children:"site_id"}),", ",(0,i.jsx)(n.code,{children:"city_code"}),", ",(0,i.jsx)(n.code,{children:"user_id"}),", and ",(0,i.jsx)(n.code,{children:"pv"}),", of which ",(0,i.jsx)(n.code,{children:"site_id"})," and ",(0,i.jsx)(n.code,{children:"city_code"})," are selected as sort key columns."]}),"\n",(0,i.jsx)(n.p,{children:"The statement for creating the table is as follows:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-SQL",children:"CREATE TABLE site_access_aggregate\n(\n    site_id INT DEFAULT '10',\n    city_code SMALLINT,\n    user_id BITMAP BITMAP_UNION,\n    pv BIGINT SUM DEFAULT '0'\n)\nAGGREGATE KEY(site_id, city_code)\nDISTRIBUTED BY HASH(site_id);\n"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"NOTICE"})}),"\n",(0,i.jsxs)(n.p,{children:["For an Aggregate table, columns for which ",(0,i.jsx)(n.code,{children:"agg_type"})," is not specified are key columns, and those for which ",(0,i.jsx)(n.code,{children:"agg_type"})," is specified are value columns. See ",(0,i.jsx)(n.a,{href:"/doc/docs/3.0/sql-reference/sql-statements/data-definition/CREATE%20TABLE",children:"CREATE TABLE"}),". In the preceding example, only ",(0,i.jsx)(n.code,{children:"site_id"})," and ",(0,i.jsx)(n.code,{children:"city_code"})," are specified as sort key columns, and therefore ",(0,i.jsx)(n.code,{children:"agg_type"})," must be specified for ",(0,i.jsx)(n.code,{children:"user_id"})," and ",(0,i.jsx)(n.code,{children:"pv"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"unique-key",children:"Unique Key"}),"\n",(0,i.jsxs)(n.p,{children:["Create a table named ",(0,i.jsx)(n.code,{children:"site_access_unique"}),". The table consists of four columns: ",(0,i.jsx)(n.code,{children:"site_id"}),", ",(0,i.jsx)(n.code,{children:"city_code"}),", ",(0,i.jsx)(n.code,{children:"user_id"}),", and ",(0,i.jsx)(n.code,{children:"pv"}),", of which ",(0,i.jsx)(n.code,{children:"site_id"})," and ",(0,i.jsx)(n.code,{children:"city_code"})," are selected as sort key columns."]}),"\n",(0,i.jsx)(n.p,{children:"The statement for creating the table is as follows:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-SQL",children:"CREATE TABLE site_access_unique\n(\n    site_id INT DEFAULT '10',\n    city_code SMALLINT,\n    user_id INT,\n    pv BIGINT DEFAULT '0'\n)\nUNIQUE KEY(site_id, city_code)\nDISTRIBUTED BY HASH(site_id);\n"})}),"\n",(0,i.jsx)(n.h3,{id:"primary-key",children:"Primary Key"}),"\n",(0,i.jsxs)(n.p,{children:["Create a table named ",(0,i.jsx)(n.code,{children:"site_access_primary"}),". The table consists of four columns: ",(0,i.jsx)(n.code,{children:"site_id"}),", ",(0,i.jsx)(n.code,{children:"city_code"}),", ",(0,i.jsx)(n.code,{children:"user_id"}),", and ",(0,i.jsx)(n.code,{children:"pv"}),", of which ",(0,i.jsx)(n.code,{children:"site_id"})," is selected as the primary key column, ",(0,i.jsx)(n.code,{children:"site_id"})," and ",(0,i.jsx)(n.code,{children:"city_code"})," are selected as sort key columns."]}),"\n",(0,i.jsx)(n.p,{children:"The statement for creating the table is as follows:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-SQL",children:"CREATE TABLE site_access_primary\n(\n    site_id INT DEFAULT '10',\n    city_code SMALLINT,\n    user_id INT,\n    pv BIGINT DEFAULT '0'\n)\nPRIMARY KEY(site_id)\nDISTRIBUTED BY HASH(site_id)\nORDER BY(site_id,city_code);\n"})}),"\n",(0,i.jsx)(n.h2,{id:"sorting-effect",children:"Sorting effect"}),"\n",(0,i.jsx)(n.p,{children:"Use the preceding tables as examples. The sorting effect varies in the following three situations:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["If your query filters on both ",(0,i.jsx)(n.code,{children:"site_id"})," and ",(0,i.jsx)(n.code,{children:"city_code"}),", the number of rows that StarRocks needs to scan during the query is significantly reduced:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Plain",children:"select sum(pv) from site_access_duplicate where site_id = 123 and city_code = 2;\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["If your query filters only on ",(0,i.jsx)(n.code,{children:"site_id"}),", StarRocks can narrow the query range down to the rows that contain ",(0,i.jsx)(n.code,{children:"site_id"})," values:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Plain",children:"select sum(pv) from site_access_duplicate where site_id = 123;\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["If your query filters only on ",(0,i.jsx)(n.code,{children:"city_code"}),", StarRocks needs to scan the entire table:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Plain",children:"select sum(pv) from site_access_duplicate where city_code = 2;\n"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"NOTE"})}),"\n",(0,i.jsx)(n.p,{children:"In this situation, the sort key columns do not yield the expected sorting effect."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["As described above, when your query filters on both ",(0,i.jsx)(n.code,{children:"site_id"})," and ",(0,i.jsx)(n.code,{children:"city_code"}),", StarRocks runs a binary search on the table to narrow the query range down to a specific location. If the table consists of a large number of rows, StarRocks runs binary searches on the ",(0,i.jsx)(n.code,{children:"site_id"})," and ",(0,i.jsx)(n.code,{children:"city_code"})," columns instead. This requires StarRocks to load the data of the two columns into memory and therefore increases memory consumption. In this case, you can use a prefix index to reduce the amount of data cached in memory, thereby accelerating your query."]}),"\n",(0,i.jsx)(n.p,{children:"Additionally, note that a large number of sort key columns also increase memory consumption. To reduce memory consumption, StarRocks imposes the following limits on the usage of prefix indexes:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"The prefix index entry of a block must be composed of the prefix of the table's sort key columns in the first row of that block."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"A prefix index can be created on a maximum of 3 columns."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"A prefix index entry cannot exceed 36 bytes in length."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"A prefix index cannot be created on columns of the FLOAT or DOUBLE data type."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Of all the columns on which a prefix index is created, only one column of the VARCHAR data type is allowed, and that column must be the end column for the prefix index."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"If the end column for a prefix index is of the CHAR or VARCHAR data type, no entries in the prefix index can exceed 36 bytes."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"how-to-select-sort-key-columns",children:"How to select sort key columns"}),"\n",(0,i.jsxs)(n.p,{children:["This section uses the ",(0,i.jsx)(n.code,{children:"site_access_duplicate"})," table as an example to describe how to select sort key columns."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"We recommend that you identify the columns on which your queries frequently filter and select these columns as sort key columns."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"If you select more than one sort key column, we recommend that you list frequently filtered columns of high discrimination levels prior to the other columns."}),"\n",(0,i.jsxs)(n.p,{children:["A column has a high discrimination level if the number of values in the column is large and continuously grows. For example, the number of cities in the ",(0,i.jsx)(n.code,{children:"site_access_duplicate"})," table is fixed, which means that the number of values in the ",(0,i.jsx)(n.code,{children:"city_code"})," column of the table is fixed. However, the number of values in the ",(0,i.jsx)(n.code,{children:"site_id"})," column is much greater than the number of values in the ",(0,i.jsx)(n.code,{children:"city_code"})," column and continuously grows. Therefore, the ",(0,i.jsx)(n.code,{children:"site_id"})," column has a higher discrimination level than the ",(0,i.jsx)(n.code,{children:"city_code"})," column."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"We recommend that you do not select a large number of sort key columns. A large number of sort key columns cannot help improve query performance but increase the overheads for sorting and data loading."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["In summary, take note of the following points when you select sort key columns for the ",(0,i.jsx)(n.code,{children:"site_access_duplicate"})," table:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["If your queries frequently filter on both ",(0,i.jsx)(n.code,{children:"site_id"})," and ",(0,i.jsx)(n.code,{children:"city_code"}),", we recommend that you select ",(0,i.jsx)(n.code,{children:"site_id"})," as the beginning sort key column."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["If your queries frequently filter only on ",(0,i.jsx)(n.code,{children:"city_code"})," and occasionally filter on both ",(0,i.jsx)(n.code,{children:"site_id"})," and ",(0,i.jsx)(n.code,{children:"city_code"}),", we recommend that you select ",(0,i.jsx)(n.code,{children:"city_code"})," as the beginning sort key column."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["If the number of times that your queries filter on both ",(0,i.jsx)(n.code,{children:"site_id"})," and ",(0,i.jsx)(n.code,{children:"city_code"})," is roughly equal to the number of times that your queries filter only on ",(0,i.jsx)(n.code,{children:"city_code"}),", we recommend that you create a materialized view, for which the first column is ",(0,i.jsx)(n.code,{children:"city_code"}),". As such, StarRocks creates a sort index on the ",(0,i.jsx)(n.code,{children:"city_code"})," column of the materialized view."]}),"\n"]}),"\n"]})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(a,e)})):a(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>r,ah:()=>c});var i=s(67294);const t=i.createContext({});function c(e){const n=i.useContext(t);return i.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const o={};function r({components:e,children:n,disableParentContext:s}){let r;return r=s?"function"==typeof e?e({}):e||o:c(e),i.createElement(t.Provider,{value:r},n)}}}]);