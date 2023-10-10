"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[55347],{82768:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var a=n(85893),r=n(11151);const s={},i="Primary Key table",o={id:"table_design/table_types/primary_key_table",title:"Primary Key table",description:"When you create a table, you can define the primary key and sort key separately. When data is loaded into a Primary Key table, StarRocks sorts the data according to the sort key before it stores the data. Queries return the most recent record among a group of records that have the same primary key. Unlike the Unique Key table, the Primary Key table does not require aggregate operations during queries and supports the pushdown of predicates and indexes. As such, the Primary Key table can deliver high query performance despite real-time and frequent data updates.",source:"@site/versioned_docs/version-3.1/table_design/table_types/primary_key_table.md",sourceDirName:"table_design/table_types",slug:"/table_design/table_types/primary_key_table",permalink:"/docusaurusv3/docs/table_design/table_types/primary_key_table",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/table_design/table_types/primary_key_table.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"Unique Key table",permalink:"/docusaurusv3/docs/table_design/table_types/unique_key_table"},next:{title:"Data distribution",permalink:"/docusaurusv3/docs/table_design/Data_distribution"}},d={},l=[{value:"Scenarios",id:"scenarios",level:2},{value:"Principle",id:"principle",level:3},{value:"Create a table",id:"create-a-table",level:2},{value:"Usage notes",id:"usage-notes",level:2},{value:"What to do next",id:"what-to-do-next",level:2}];function h(e){const t=Object.assign({h1:"h1",p:"p",blockquote:"blockquote",strong:"strong",h2:"h2",ul:"ul",li:"li",a:"a",img:"img",h3:"h3",code:"code",pre:"pre"},(0,r.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"primary-key-table",children:"Primary Key table"}),"\n",(0,a.jsx)(t.p,{children:"When you create a table, you can define the primary key and sort key separately. When data is loaded into a Primary Key table, StarRocks sorts the data according to the sort key before it stores the data. Queries return the most recent record among a group of records that have the same primary key. Unlike the Unique Key table, the Primary Key table does not require aggregate operations during queries and supports the pushdown of predicates and indexes. As such, the Primary Key table can deliver high query performance despite real-time and frequent data updates."}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"NOTE"})}),"\n",(0,a.jsx)(t.p,{children:"In versions earlier than v3.0, the Primary Key table does not support decoupling the primary key and sort key.\nSince version 3.1, StarRocks's shared-data mode supports the Primary Key tables. However, enabling the persistent index for a Primary Key table is not supported."}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"scenarios",children:"Scenarios"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"The Primary Key table is suitable for the following scenarios in which data needs to be frequently updated in real time:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Stream data in real time from transaction processing systems into StarRocks."})," In normal cases, transaction processing systems involve a large number of update and delete operations in addition to insert operations. If you need to synchronize data from a transaction processing system to StarRocks, we recommend that you create a table that uses the Primary Key table. Then, you can use tools, such as CDC Connectors for Apache Flink\xae, to synchronize the binary logs of the transaction processing system to StarRocks. StarRocks uses the binary logs to add, delete, and update the data in the table in real time. This simplifies data synchronization and delivers 3 to 10 times higher query performance than when a Merge on Read (MoR) table of the Unique Key table is used. For example, you can use flink-connector-starrocks to load data. For more information, see ",(0,a.jsx)(t.a,{href:"/docusaurusv3/docs/loading/Flink-connector-starrocks",children:"Load data by using flink-connector-starrocks"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Join multiple streams by performing update operations on individual columns"}),". In business scenarios such as user profiling, flat tables are preferably used to improve multi-dimensional analysis performance and simplify the analytics model that is used by data analysts. Upstream data in these scenarios may come from various apps, such as shopping apps, delivery apps, and banking apps, or from systems, such as machine learning systems that perform computations to obtain the distinct tags and properties of users. The Primary Key table is well suited in these scenarios, because it supports updates to individual columns. Each app or system can update only the columns that hold the data within its own service scope while benefiting from real-time data additions, deletions, and updates at high query performance."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"The Primary Key table is suitable for scenarios in which the memory occupied by the primary key is controllable."}),"\n",(0,a.jsxs)(t.p,{children:["The storage engine of StarRocks creates an index for the primary key of each table that uses the Primary Key table. Additionally, when you load data into a table, StarRocks loads the primary key index into the memory. Therefore, the Primary Key table requires a larger memory capacity than the other three table types. ",(0,a.jsx)(t.strong,{children:"StarRocks limits the total length of the fields that comprise the primary key to 127 bytes after encoding."})]}),"\n",(0,a.jsx)(t.p,{children:"Consider using the Primary Key table if a table has the following characteristics:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"The table contains both fast-changing data and slow-changing data. Fast-changing data is frequently updated over the most recent days, whereas slow-changing data is rarely updated. Suppose that you need to synchronize a MySQL order table to StarRocks in real time for analytics and queries. In this example, the data of the table is partitioned by day, and most updates are performed on orders that are created within the most recent days. Historical orders are no longer updated after they are completed. When you run a data load job, the primary key index is not loaded into the memory and only the index entries of the recently updated orders are loaded into the memory."}),"\n",(0,a.jsx)(t.p,{children:"As shown in the following figure, the data in the table is partitioned by day, and the data in the most recent two partitions is frequently updated."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Primary index -1",src:n(82769).Z+"",width:"304",height:"483"})}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"The table is a flat table that is composed of hundreds or thousands of columns. The primary key comprises only a small portion of the table data and consumes only a small amount of memory. For example, a user status or profile table consists of a large number of columns but only tens to hundreds of millions of users. In this situation, the amount of memory consumed by the primary key is controllable."}),"\n",(0,a.jsx)(t.p,{children:"As shown in the following figure, the table contains only a few rows, and the primary key of the table comprises only a small portion of the table."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Primary index -2",src:n(7186).Z+"",width:"620",height:"82"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"principle",children:"Principle"}),"\n",(0,a.jsx)(t.p,{children:"The Primary Key table is designed based on a new storage engine that is provided by StarRocks. The metadata structure and the read/write mechanism in the Primary Key table differ from those in the Duplicate Key table. As such, the Primary Key table does not require aggregate operations and supports the pushdown of predicates and indexes. These significantly increase query performance."}),"\n",(0,a.jsx)(t.p,{children:"The Duplicate Key table adopts the MoR policy. MoR streamlines data writes but requires online aggregation of multiple data versions. Additionally, the Merge operator does not support the pushdown of predicates and indexes. As a result, query performance deteriorates."}),"\n",(0,a.jsx)(t.p,{children:"The Primary Key table adopts the Delete+Insert policy to ensure that each record has a unique primary key. This way, the Primary Key table does not require merge operations. Details are as follows:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"When StarRocks receives a request for an update operation on a record, it locates the record by searching the primary key index, marks the record as deleted, and inserts a new record. In other words, StarRocks converts an update operation to a delete operation plus an insert operation."}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"When StarRocks receives a delete operation on a record, it locates the record by searching the primary key index and marks the record as deleted."}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"create-a-table",children:"Create a table"}),"\n",(0,a.jsxs)(t.p,{children:["Example 1: Suppose that you need to analyze orders on a daily basis. In this example, create a table named ",(0,a.jsx)(t.code,{children:"orders"}),", define ",(0,a.jsx)(t.code,{children:"dt"})," and ",(0,a.jsx)(t.code,{children:"order_id"})," as the primary key, and define the other columns as metric columns."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-SQL",children:"create table orders (\n    dt date NOT NULL,\n    order_id bigint NOT NULL,\n    user_id int NOT NULL,\n    merchant_id int NOT NULL,\n    good_id int NOT NULL,\n    good_name string NOT NULL,\n    price int NOT NULL,\n    cnt int NOT NULL,\n    revenue int NOT NULL,\n    state tinyint NOT NULL\n) PRIMARY KEY (dt, order_id)\nPARTITION BY RANGE(`dt`) (\n    PARTITION p20210820 VALUES [('2021-08-20'), ('2021-08-21')),\n    PARTITION p20210821 VALUES [('2021-08-21'), ('2021-08-22')),\n    ...\n    PARTITION p20210929 VALUES [('2021-09-29'), ('2021-09-30')),\n    PARTITION p20210930 VALUES [('2021-09-30'), ('2021-10-01'))\n) DISTRIBUTED BY HASH(order_id)\nPROPERTIES(\"replication_num\" = \"3\",\n\"enable_persistent_index\" = \"true\");\n"})}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"NOTICE"})}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["When you create a table, you must specify the bucketing column by using the ",(0,a.jsx)(t.code,{children:"DISTRIBUTED BY HASH"})," clause. For detailed information, see ",(0,a.jsx)(t.a,{href:"/docusaurusv3/docs/table_design/Data_distribution#design-partitioning-and-bucketing-rules",children:"bucketing"}),"."]}),"\n",(0,a.jsxs)(t.li,{children:["Since v2.5.7, StarRocks can automatically set the number of buckets (BUCKETS) when you create a table or add a partition. You no longer need to manually set the number of buckets. For detailed information, see ",(0,a.jsx)(t.a,{href:"/docusaurusv3/docs/table_design/Data_distribution#determine-the-number-of-buckets",children:"determine the number of buckets"}),"."]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["Example 2: Suppose that you need to analyze user behavior in real time from dimensions such as users' address and last active time. When you create a table, you can define the ",(0,a.jsx)(t.code,{children:"user_id"})," column as the primary key and define the combination of the ",(0,a.jsx)(t.code,{children:"address"})," and ",(0,a.jsx)(t.code,{children:"last_active"})," columns as the sort key."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-SQL",children:'create table users (\n    user_id bigint NOT NULL,\n    name string NOT NULL,\n    email string NULL,\n    address string NULL,\n    age tinyint NULL,\n    sex tinyint NULL,\n    last_active datetime,\n    property0 tinyint NOT NULL,\n    property1 tinyint NOT NULL,\n    property2 tinyint NOT NULL,\n    property3 tinyint NOT NULL,\n    ....\n) PRIMARY KEY (user_id)\nDISTRIBUTED BY HASH(user_id)\nORDER BY(`address`,`last_active`)\nPROPERTIES("replication_num" = "3",\n"enable_persistent_index" = "true");\n'})}),"\n",(0,a.jsx)(t.h2,{id:"usage-notes",children:"Usage notes"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Take note of the following points about the primary key of a table:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["The primary key is defined by using the ",(0,a.jsx)(t.code,{children:"PRIMARY KEY"})," keyword."]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"The primary key must be created on columns on which unique constraints are enforced, and the names of the primary key columns cannot be changed."}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["The primary key columns can be any of the following data types: BOOLEAN, TINYINT, SMALLINT, INT, BIGINT, LARGEINT, STRING, VARCHAR, DATE, and DATETIME. However, the primary key columns cannot be defined as ",(0,a.jsx)(t.code,{children:"NULL"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"The partition column and the bucket column must participate in the primary key."}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"The number and total length of primary key columns must be properly designed to save memory. We recommend that you identify columns whose data types occupy less memory and define those columns as the primary key. Such data types include INT and BIGINT. We recommend that you do not let a column of the VARCHAR data type to participate in the primary key."}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Before you create the table, we recommend that you estimate the memory occupied by the primary key index based on the data types of the primary key columns and the number of rows in the table. This way, you can prevent the table from running out of memory. The following example explains how to calculate the memory occupied by the primary key index:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["Suppose that the ",(0,a.jsx)(t.code,{children:"dt"})," column, which is of the DATE data type that occupies 4 bytes, and the ",(0,a.jsx)(t.code,{children:"id"})," column, which is of the BIGINT data type that occupies 8 bytes, are defined as the primary key. In this case, the primary key is 12 bytes in length."]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Suppose that the table contains 10,000,000 rows of hot data and is stored in three replicas."}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Given the preceding information, the memory occupied by the primary key index is 945 MB based on the following formula:"}),"\n",(0,a.jsx)(t.p,{children:"(12 + 9) x 10,000,000 x 3 x 1.5 = 945 (MB)"}),"\n",(0,a.jsxs)(t.p,{children:["In the preceding formula, ",(0,a.jsx)(t.code,{children:"9"})," is the immutable overhead per row, and ",(0,a.jsx)(t.code,{children:"1.5"})," is the average extra overhead per hash table."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"enable_persistent_index"}),": the primary key index can be persisted to disk and stored in memory to avoid it taking up too much memory. Generally, the primary key index can only take up 1/10 of the memory it does before. You can set this property in ",(0,a.jsx)(t.code,{children:"PROPERTIES"})," when you create a table. Valid values are true or false. Default value is false."]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["If you want to modify this parameter after the table is created, please see the part Modify the properties of table in ",(0,a.jsx)(t.a,{href:"/docusaurusv3/docs/sql-reference/sql-statements/data-definition/ALTER%20TABLE",children:"ALTER TABLE"}),"."]}),"\n",(0,a.jsx)(t.li,{children:"It is recommended to set this property to true if the disk is SSD."}),"\n",(0,a.jsx)(t.li,{children:"As of version 2.3.0, StarRocks supports to set this property."}),"\n",(0,a.jsx)(t.li,{children:"StarRocks's shared-data mode does not support enabling the persistent index for a Primary Key table."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["You can specify the sort key as the permutation and combination of any columns by using the ",(0,a.jsx)(t.code,{children:"ORDER BY"})," keyword."]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"NOTICE"})}),"\n",(0,a.jsx)(t.p,{children:"If the sort key is specified, the prefix index is built according to the sort key; if the sort key is not specified, the prefix index is built according to the primary key."}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"ALTER TABLE can be used to change table schema, but the following limits exist:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Modifying the primary key is not supported."}),"\n",(0,a.jsx)(t.li,{children:"Reassigning the sort key by using ALTER TABLE ... ORDER BY .... is supported. Deleting the sort key is not supported. Modifying the data types of columns in the sort key is not supported."}),"\n",(0,a.jsx)(t.li,{children:"Adjusting the column order is not supported."}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Since version 2.3.0, the columns except for the primary key columns now support the BITMAP and HLL data types."}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"When you create a table, you can create BITMAP indexes or Bloom Filter indexes on the columns except for primary key columns."}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Since version 2.4.0, you can create asynchronous materialized views based on Primary Key tables."}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"what-to-do-next",children:"What to do next"}),"\n",(0,a.jsxs)(t.p,{children:["After table creation, you can run load jobs to load data into the Primary Key table. For more information about supported loading methods, see ",(0,a.jsx)(t.a,{href:"/docusaurusv3/docs/loading/Loading_intro",children:"Overview of data loading"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["If you need to update data in the Primary Key table, you can ",(0,a.jsx)(t.a,{href:"/docusaurusv3/docs/loading/Load_to_Primary_Key_tables",children:"run a load job"})," or execute a DML statement (",(0,a.jsx)(t.a,{href:"/docusaurusv3/docs/sql-reference/sql-statements/data-manipulation/UPDATE",children:"UPDATE"})," or ",(0,a.jsx)(t.a,{href:"/docusaurusv3/docs/sql-reference/sql-statements/data-manipulation/DELETE",children:"DELETE"}),"). Also, these update operations guarantee atomicity."]})]})}const c=function(e={}){const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?(0,a.jsx)(t,Object.assign({},e,{children:(0,a.jsx)(h,e)})):h(e)}},82769:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/png;base64,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"},7186:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAmwAAABSCAMAAADepHjjAAAAbFBMVEVHcEzGxsaBgYFxcXGIiIhvb2+np6eenp55eXmTk5OJiYmWlpZTU1MADQ2wOztyXV0AAACJLS0AAAAAAABlIiIADAwAAAAAAAD///8A////VVXW1tawsLDt7e0AdnYA7u4Ay8sApaUAPz/ORUU01xB2AAAAGHRSTlMA/OTs5fD34+Xr9O3v/fPoGueHKO3lIHIb9mmvAAAEHklEQVR42u2diVLbMBRFSRwFJ1h1KZTiAlrc///HSsoyvCQ1eCNxet50IDcL4zs6c/20UG5uetX3x/ujKm5FDSdXpZB5JmS5kB9djXQVIzqYT92BanRQ3vSE7dvvoyqfRc0b5ULKlZR3Qr0thZzNhFy+CLl+EzJ7bpJ5o7wMB2ryDm6BbSpDdZEOXqSDV2ADNpKNobo6ByQbsJFsDBU9G7ABG8kGbPRswIYDkg3Y6NkYKpIN2IDt0nu2h8cTlYkqBpNKyuJAqgapirEuakgHxVU7yAqSbSrJdpEb8S/cRrmNsvTBUDFBADZgI9mAbWrrbCQbsJFsDBU9G7ABG8kGbNPv2R7a1xOw4aBTsun29RPYcNCpZ9O2alkO2HDQMdmADdimkWxPp/77hYWo4WQupVLyvZmU+UhX0UfOGx2UBw7mF+ig1xiQbFPJBcVtFNhwwAQB2M6wzkayARvJxlD9j0sf1nvvdiTVDtiAbbxk89qYehdwBtiAbcSezeuYaKZyIeLCl8qmB5X3kT+3ST1nnXeJw/AI2HDQPdkSbFbXxlTaVaauw78gQtq5+M2El4N24bXKaWDDQfeezWvvjXZWhzhLsOnIVBC139w2gzZ1tfkSeAQ2HPTq2UKrZlPblpKt2ogAlo0ZFx6Hu2x8MhDpgA0HfZItBdhJ2HaPE2zhiaiBDQf9erZ/wRYgM3vYnE5tm9iI/3ZUxauoVlI1vbqUr67X8qN38qPL7lfRSpYtDH3gYHUeB6qF7ONAfQCb02FmsIctzBMOT33c/zmq4kWUkjJrI3OhZmshl0sh16/yJ82EbL6oVrLNJfdxoM7kYLQxmH+4g2Dfv56mDNxGcdB5ne3T+1Q+BRuw4aB7z/b5TdG0zAtsOOg+G2UjHtguL9mADQeD9WwH2FkPbDgYKdm2SyDv5gPAhoORerbdetsu5jawWWDDwTjJFs97bA53xKMf4XuQtU3rvL62wIaDgXq2BFu9STTtK1vXVToJErestgeMgA0HAyabT0eK4qmiCJ3TPh4/ittX2nMbxcGgPdsBbPGom4/Hdq3eBxuw4WDQZIvH1mKjZneI1cbv3yhPfZyoXFQxmMykLKUslJTZSFeBg84OTsNWmfhLMHFWoI3fHmszNcl2TgfqqpItLuI6u13Mdd5bl5403tq0KeqZjeKA34gHNvZGGSpmo8AGbCQbQ0XPBmw4INmAbXI9m2ldwIaDbsn2o339AjYcdOrZ+HNCwPZlyQZswPZlPRuwAdtEku3kH91YiRpOrqXMlHzvXMr1SFcxngOVT85B3soByUay0bMxVMxGgQ0HJBuwMRtlqHAAbMBGzwZsJBuw4YCeDdhINoaKng3YgI1kY6jo2T6G7dRG/K2o4eSiFDLPhCwX8qOrka6ij1w1OlDz63ZQ/gU8aAMnm2fkIAAAAABJRU5ErkJggg=="},11151:(e,t,n)=>{n.d(t,{Zo:()=>o,ah:()=>s});var a=n(67294);const r=a.createContext({});function s(e){const t=a.useContext(r);return a.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const i={};function o({components:e,children:t,disableParentContext:n}){let o;return o=n?"function"==typeof e?e({}):e||i:s(e),a.createElement(r.Provider,{value:o},t)}}}]);