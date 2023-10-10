"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[68572],{69579:(e,i,a)=>{a.r(i),a.d(i,{assets:()=>l,contentTitle:()=>t,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var r=a(85893),n=a(11151);const s={},t="Asynchronous materialized views",o={id:"using_starrocks/Materialized_view",title:"Asynchronous materialized views",description:"This topic describes how to understand, create, use, and manage an asynchronous materialized view. Asynchronous materialized views are supported from StarRocks v2.4 onwards.",source:"@site/versioned_docs/version-3.0/using_starrocks/Materialized_view.md",sourceDirName:"using_starrocks",slug:"/using_starrocks/Materialized_view",permalink:"/docusaurusv3/docs/3.0/using_starrocks/Materialized_view",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/using_starrocks/Materialized_view.md",tags:[],version:"3.0",frontMatter:{},sidebar:"documentation",previous:{title:"Synchronous materialized view",permalink:"/docusaurusv3/docs/3.0/using_starrocks/Materialized_view-single_table"},next:{title:"Use HLL for approximate count distinct",permalink:"/docusaurusv3/docs/3.0/using_starrocks/Using_HLL"}},l={},d=[{value:"Overview",id:"overview",level:2},{value:"Understand materialized views in StarRocks",id:"understand-materialized-views-in-starrocks",level:3},{value:"Basic concepts",id:"basic-concepts",level:3},{value:"Decide when to create a materialized view",id:"decide-when-to-create-a-materialized-view",level:2},{value:"Create an asynchronous materialized view",id:"create-an-asynchronous-materialized-view",level:2},{value:"Before you begin",id:"before-you-begin",level:3},{value:"Create the materialized view",id:"create-the-materialized-view",level:3},{value:"Manually refresh an asynchronous materialized view",id:"manually-refresh-an-asynchronous-materialized-view",level:2},{value:"Query the asynchronous materialized view directly",id:"query-the-asynchronous-materialized-view-directly",level:2},{value:"Rewrite and accelerate queries with the asynchronous materialized view",id:"rewrite-and-accelerate-queries-with-the-asynchronous-materialized-view",level:2},{value:"Manage an asynchronous materialized view",id:"manage-an-asynchronous-materialized-view",level:2},{value:"Alter an asynchronous materialized view",id:"alter-an-asynchronous-materialized-view",level:3},{value:"Show asynchronous materialized views",id:"show-asynchronous-materialized-views",level:3},{value:"Check the definition of asynchronous materialized view",id:"check-the-definition-of-asynchronous-materialized-view",level:3},{value:"Check the execution status of asynchronous materialized view",id:"check-the-execution-status-of-asynchronous-materialized-view",level:3},{value:"Drop an asynchronous materialized view",id:"drop-an-asynchronous-materialized-view",level:3},{value:"Relevant session variables",id:"relevant-session-variables",level:3}];function c(e){const i=Object.assign({h1:"h1",p:"p",a:"a",h2:"h2",h3:"h3",table:"table",thead:"thead",tr:"tr",th:"th",strong:"strong",tbody:"tbody",td:"td",ul:"ul",li:"li",blockquote:"blockquote",code:"code",pre:"pre",ol:"ol"},(0,n.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.h1,{id:"asynchronous-materialized-views",children:"Asynchronous materialized views"}),"\n",(0,r.jsx)(i.p,{children:"This topic describes how to understand, create, use, and manage an asynchronous materialized view. Asynchronous materialized views are supported from StarRocks v2.4 onwards."}),"\n",(0,r.jsx)(i.p,{children:"Compared with synchronous materialized views, asynchronous materialized views support multi-table join and more aggregate functions. The refresh of asynchronous materialized views can be triggered manually or by scheduled tasks. You can also refresh some of the partitions instead of the whole materialized view, greatly reducing the cost of refresh. In addition, asynchronous materialized views support a variety of query rewrite scenarios, allowing automatic, transparent query acceleration."}),"\n",(0,r.jsxs)(i.p,{children:["For the scenario and usage of the synchronous materialized views (Rollup), see ",(0,r.jsx)(i.a,{href:"/docusaurusv3/docs/3.0/using_starrocks/Materialized_view-single_table",children:"Synchronous materialized view (Rollup)"}),"."]}),"\n",(0,r.jsx)(i.h2,{id:"overview",children:"Overview"}),"\n",(0,r.jsx)(i.p,{children:"Applications in databases often perform complex queries on large tables. Such queries involve multi-table joins and aggregations on tables that contain billions of rows. Processing these queries can be expensive, in terms of system resources and the time it takes to compute the results."}),"\n",(0,r.jsx)(i.p,{children:"Asynchronous materialized views in StarRocks are designed to tackle these issues. An asynchronous materialized view is a special physical table that holds pre-computed query results from one or more base tables. When you perform complex queries on the base table, StarRocks returns the pre-computed results from the relevant materialized views to process these queries. This way, query performance can be improved because repetitive complex calculations are avoided. This performance difference can be significant when a query is run frequently or is sufficiently complex."}),"\n",(0,r.jsx)(i.p,{children:"Additionally, asynchronous materialized views are especially useful for building mathematical models upon your data warehouse. By doing so, you can provide a unified data specification to upper-layer applications, shield the underlying implementation, or protect the raw data security of the base tables."}),"\n",(0,r.jsx)(i.h3,{id:"understand-materialized-views-in-starrocks",children:"Understand materialized views in StarRocks"}),"\n",(0,r.jsx)(i.p,{children:"StarRocks v2.3 and earlier versions provided a synchronous materialized view that can be built only on a single table. Synchronous materialized views, or the Rollup, retain higher data freshness and lower refreshing costs. However, compared to asynchronous materialized views supported from v2.4 onwards, synchronous materialized views have many limitations. You have limited choices of aggregation operators when you want to build a synchronous materialized view to accelerate or rewrite your queries."}),"\n",(0,r.jsx)(i.p,{children:"The following table compares the asynchronous materialized views (ASYNC MV) and the synchronous materialized view (SYNC MV) in StarRocks in the perspective of features that they support:"}),"\n",(0,r.jsxs)(i.table,{children:[(0,r.jsx)(i.thead,{children:(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.th,{}),(0,r.jsx)(i.th,{children:(0,r.jsx)(i.strong,{children:"Single-table aggregation"})}),(0,r.jsx)(i.th,{children:(0,r.jsx)(i.strong,{children:"Multi-table join"})}),(0,r.jsx)(i.th,{children:(0,r.jsx)(i.strong,{children:"Query rewrite"})}),(0,r.jsx)(i.th,{children:(0,r.jsx)(i.strong,{children:"Refresh strategy"})}),(0,r.jsx)(i.th,{children:(0,r.jsx)(i.strong,{children:"Base table"})})]})}),(0,r.jsxs)(i.tbody,{children:[(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.strong,{children:"ASYNC MV"})}),(0,r.jsx)(i.td,{children:"Yes"}),(0,r.jsx)(i.td,{children:"Yes"}),(0,r.jsx)(i.td,{children:"Yes"}),(0,r.jsx)(i.td,{children:(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:"Asynchronous refresh"}),(0,r.jsx)("li",{children:"Manual refresh"})]})}),(0,r.jsxs)(i.td,{children:["Multiple tables from:",(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:"Default catalog"}),(0,r.jsx)("li",{children:"External catalogs (v2.5)"}),(0,r.jsx)("li",{children:"Existing materialized views (v2.5)"})]})]})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.strong,{children:"SYNC MV (Rollup)"})}),(0,r.jsx)(i.td,{children:"Limited choices of aggregate functions"}),(0,r.jsx)(i.td,{children:"No"}),(0,r.jsx)(i.td,{children:"Yes"}),(0,r.jsx)(i.td,{children:"Synchronous refresh during data loading"}),(0,r.jsx)(i.td,{children:"Single table in the default catalog"})]})]})]}),"\n",(0,r.jsx)(i.h3,{id:"basic-concepts",children:"Basic concepts"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.strong,{children:"Base table"})}),"\n",(0,r.jsx)(i.p,{children:"Base tables are the driving tables of a materialized view."}),"\n",(0,r.jsxs)(i.p,{children:["For StarRocks' asynchronous materialized views, base tables can be StarRocks native tables in the ",(0,r.jsx)(i.a,{href:"/docusaurusv3/docs/3.0/data_source/catalog/default_catalog",children:"default catalog"}),", tables in external catalogs (supported from v2.5), or even existing asynchronous materialized views (supported from v2.5). StarRocks supports creating asynchronous materialized views on all ",(0,r.jsx)(i.a,{href:"../table_design/Data_model.md",children:"types of StarRocks tables"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.strong,{children:"Refresh"})}),"\n",(0,r.jsx)(i.p,{children:"When you create an asynchronous materialized view, its data reflects only the state of the base tables at that time. When the data in the base tables change, you need to refresh the materialized view to keep the changes synchronized."}),"\n",(0,r.jsx)(i.p,{children:"Currently, StarRocks supports two generic refreshing strategies:"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"ASYNC: Asynchronous refresh mode. Each time the base table data changes, the materialized view is automatically refreshed according to the pre-defined refresh interval."}),"\n",(0,r.jsx)(i.li,{children:"MANUAL: Manual refresh mode. The materialized view will not be automatically refreshed. The refresh tasks can only be triggered manually by users."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.strong,{children:"Query rewrite"})}),"\n",(0,r.jsx)(i.p,{children:"Query rewrite means that when executing a query on base tables with materialized views built on, the system automatically judges whether the pre-computed results in the materialized view can be reused for the query. If they can be reused, the system will load the data directly from the relevant materialized view to avoid the time- and resource-consuming computations or joins."}),"\n",(0,r.jsx)(i.p,{children:"From v2.5, StarRocks supports automatic, transparent query rewrite based on the SPJG-type asynchronous materialized views. The SPJG-type materialized views refer to materialized views whose plan only includes Scan, Filter, Project, and Aggregate types of operators."}),"\n",(0,r.jsxs)(i.blockquote,{children:["\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.strong,{children:"NOTE"})}),"\n",(0,r.jsxs)(i.p,{children:["Asynchronous materialized views created on base tables in a ",(0,r.jsx)(i.a,{href:"/docusaurusv3/docs/3.0/data_source/catalog/jdbc_catalog",children:"JDBC catalog"})," do not support query rewrite."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(i.h2,{id:"decide-when-to-create-a-materialized-view",children:"Decide when to create a materialized view"}),"\n",(0,r.jsx)(i.p,{children:"You can create an asynchronous materialized view if you have the following demands in your data warehouse environment:"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.strong,{children:"Accelerating queries with repetitive aggregate functions"})}),"\n",(0,r.jsx)(i.p,{children:"Suppose that most queries in your data warehouse include the same sub-query with an aggregate function, and these queries have consumed a huge proportion of your computing resources. Based on this sub-query, you can create an asynchronous materialized view, which will compute and store all results of the sub-query. After the materialized view is built, StarRocks rewrites all queries that contain the sub-query, loads the intermediate results stored in the materialized view, and thus accelerates these queries."}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.strong,{children:"Regular JOIN of multiple tables"})}),"\n",(0,r.jsx)(i.p,{children:"Suppose that you need to regularly join multiple tables in your data warehouse to make a new wide table. You can build an asynchronous materialized view for these tables, and set the ASYNC refreshing strategy that triggers refreshing tasks at a fixed time interval. After the materialized view is built, query results are returned directly from the materialized view, and thus the latency caused by JOIN operations is avoided."}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.strong,{children:"Data warehouse layering"})}),"\n",(0,r.jsx)(i.p,{children:"Suppose that your data warehouse contains a mass of raw data, and queries in it require a complex set of ETL operations. You can build multiple layers of asynchronous materialized views to stratify the data in your data warehouse, and thus decompose the query into a series of simple sub-queries. It can significantly reduce repetitive computation, and, more importantly, help your DBA identify the problem with ease and efficiency. Beyond that, data warehouse layering helps decouple raw data and statistical data, protecting the security of sensitive raw data."}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.strong,{children:"Accelerating queries in data lakes"})}),"\n",(0,r.jsx)(i.p,{children:"Querying a data lake can be slow due to network latency and object storage throughput. You can enhance the query performance by building an asynchronous materialized view on top of the data lake. Moreover, StarRocks can intelligently rewrite queries to use the existing materialized views, saving you the trouble of modifying your queries manually."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(i.p,{children:"For specific use cases of asynchronous materialized views, refer to the following content:"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:(0,r.jsx)(i.a,{href:"/docusaurusv3/docs/3.0/using_starrocks/data_modeling_with_materialized_views",children:"Data Modeling"})}),"\n",(0,r.jsx)(i.li,{children:(0,r.jsx)(i.a,{href:"/docusaurusv3/docs/3.0/using_starrocks/query_rewrite_with_materialized_views",children:"Query Rewrite"})}),"\n",(0,r.jsx)(i.li,{children:(0,r.jsx)(i.a,{href:"/docusaurusv3/docs/3.0/using_starrocks/data_lake_query_acceleration_with_materialized_views",children:"Data Lake Query Acceleration"})}),"\n"]}),"\n",(0,r.jsx)(i.h2,{id:"create-an-asynchronous-materialized-view",children:"Create an asynchronous materialized view"}),"\n",(0,r.jsx)(i.p,{children:"StarRocks' asynchronous materialized views can be created on the following base tables:"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsx)(i.p,{children:"StarRocks' native tables (all StarRocks table types are supported)"}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsx)(i.p,{children:"Tables in external catalogs, including"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Hive catalog (Since v2.5)"}),"\n",(0,r.jsx)(i.li,{children:"Hudi catalog (Since v2.5)"}),"\n",(0,r.jsx)(i.li,{children:"Iceberg catalog (Since v2.5)"}),"\n",(0,r.jsx)(i.li,{children:"JDBC catalog (Since v3.0)"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsx)(i.p,{children:"Existing asynchronous materialized views (Since v2.5)"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(i.h3,{id:"before-you-begin",children:"Before you begin"}),"\n",(0,r.jsx)(i.p,{children:"The following examples involve two base tables in the default catalog:"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["The table ",(0,r.jsx)(i.code,{children:"goods"})," records the item ID ",(0,r.jsx)(i.code,{children:"item_id1"}),", the item name ",(0,r.jsx)(i.code,{children:"item_name"}),", and the item price ",(0,r.jsx)(i.code,{children:"price"}),"."]}),"\n",(0,r.jsxs)(i.li,{children:["The table ",(0,r.jsx)(i.code,{children:"order_list"})," records the order ID ",(0,r.jsx)(i.code,{children:"order_id"}),", client ID ",(0,r.jsx)(i.code,{children:"client_id"}),", item ID ",(0,r.jsx)(i.code,{children:"item_id2"}),", and order date ",(0,r.jsx)(i.code,{children:"order_date"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(i.p,{children:["The column ",(0,r.jsx)(i.code,{children:"goods.item_id1"})," is equivalent to the column ",(0,r.jsx)(i.code,{children:"order_list.item_id2"}),"."]}),"\n",(0,r.jsx)(i.p,{children:"Execute the following statements to create the tables and insert data into them:"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-SQL",children:'CREATE TABLE goods(\n    item_id1          INT,\n    item_name         STRING,\n    price             FLOAT\n) DISTRIBUTED BY HASH(item_id1);\n\nINSERT INTO goods\nVALUES\n    (1001,"apple",6.5),\n    (1002,"pear",8.0),\n    (1003,"potato",2.2);\n\nCREATE TABLE order_list(\n    order_id          INT,\n    client_id         INT,\n    item_id2          INT,\n    order_date        DATE\n) DISTRIBUTED BY HASH(order_id);\n\nINSERT INTO order_list\nVALUES\n    (10001,101,1001,"2022-03-13"),\n    (10001,101,1002,"2022-03-13"),\n    (10002,103,1002,"2022-03-13"),\n    (10002,103,1003,"2022-03-14"),\n    (10003,102,1003,"2022-03-14"),\n    (10003,102,1001,"2022-03-14");\n'})}),"\n",(0,r.jsxs)(i.p,{children:["The scenario in the following example demands frequent calculations of the total of each order. It requires frequent joins of the two base tables and intensive usage of the aggregate function ",(0,r.jsx)(i.code,{children:"sum()"}),". Besides, the business scenario demands the data refresh at an interval of one day."]}),"\n",(0,r.jsx)(i.p,{children:"The query statement is as follows:"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-SQL",children:"SELECT\n    order_id,\n    sum(goods.price) as total\nFROM order_list INNER JOIN goods ON goods.item_id1 = order_list.item_id2\nGROUP BY order_id;\n"})}),"\n",(0,r.jsx)(i.h3,{id:"create-the-materialized-view",children:"Create the materialized view"}),"\n",(0,r.jsxs)(i.p,{children:["You can create a materialized view based on a specific query statement using ",(0,r.jsx)(i.a,{href:"/docusaurusv3/docs/3.0/sql-reference/sql-statements/data-definition/CREATE%20MATERIALIZED%20VIEW",children:"CREATE MATERIALIZED VIEW"}),"."]}),"\n",(0,r.jsxs)(i.p,{children:["Based on the table ",(0,r.jsx)(i.code,{children:"goods"}),", ",(0,r.jsx)(i.code,{children:"order_list"}),", and the query statement mentioned above, the following example creates the materialized view ",(0,r.jsx)(i.code,{children:"order_mv"})," to analyze the total of each order. The materialized view is set to refresh itself at an interval of one day."]}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-SQL",children:"CREATE MATERIALIZED VIEW order_mv\nDISTRIBUTED BY HASH(`order_id`)\nREFRESH ASYNC START('2022-09-01 10:00:00') EVERY (interval 1 day)\nAS SELECT\n    order_list.order_id,\n    sum(goods.price) as total\nFROM order_list INNER JOIN goods ON goods.item_id1 = order_list.item_id2\nGROUP BY order_id;\n"})}),"\n",(0,r.jsxs)(i.blockquote,{children:["\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.strong,{children:"NOTE"})}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"While creating an asynchronous materialized view, you must specify either the data distribution strategy or the refresh strategy of the materialized view, or both."}),"\n",(0,r.jsx)(i.li,{children:"You can set different partitioning and bucketing strategies for an asynchronous materialized view from those of its base tables, but you must include the partition keys and bucket keys of the materialized views in the query statement used to create the materialized view."}),"\n",(0,r.jsx)(i.li,{children:"Asynchronous materialized views support a dynamic partitioning strategy in a longer span. For example, if the base table is partitioned at an interval of one day, you can set the materialized view to be partitioned at an interval of one month."}),"\n",(0,r.jsx)(i.li,{children:"Currently, StarRocks does not support creating asynchronous materialized views with the list partitioning strategy or based on tables that are created with the list partitioning strategy."}),"\n",(0,r.jsx)(i.li,{children:"The query statement used to create a materialized view does not support random functions, including rand(), random(), uuid(), and sleep()."}),"\n",(0,r.jsxs)(i.li,{children:["Asynchronous materialized views support a variety of data types. For more information, see ",(0,r.jsx)(i.a,{href:"/docusaurusv3/docs/3.0/sql-reference/sql-statements/data-definition/CREATE%20MATERIALIZED%20VIEW#supported-data-types",children:"CREATE MATERIALIZED VIEW - Supported data types"}),"."]}),"\n",(0,r.jsx)(i.li,{children:"By default, executing a CREATE MATERIALIZED VIEW statement immediately triggers the refresh task, which can consume a certain proportion of the system resources. If you want to defer the refresh task, you can add the REFRESH DEFERRED parameter to your CREATE MATERIALIZED VIEW statement."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.strong,{children:"About refresh mechanisms of asynchronous materialized views"})}),"\n",(0,r.jsx)(i.p,{children:"Currently, StarRocks supports two ON DEMAND refresh strategies: MANUAL refresh and ASYNC refresh."}),"\n",(0,r.jsx)(i.p,{children:"In StarRocks v2.5, asynchronous materialized views further support a variety of asynchronous refreshing mechanisms to control the cost of refresh and increase the success rate:"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"If an MV has many large partitions, each refresh can consume a large amount of resources. In v2.5, StarRocks supports splitting refresh tasks. You can specify the maximum number of partitions to be refreshed, and StarRocks performs refresh in batches, with a batch size smaller or equal to the specified maximum number of partitions. This feature ensures large asynchronous materialized views are stably refreshed, enhancing the stability and robustness of data modeling."}),"\n",(0,r.jsx)(i.li,{children:"You can specify the time to live (TTL) for partitions of an asynchronous materialized view, reducing the storage size taken by the materialized view."}),"\n",(0,r.jsx)(i.li,{children:"You can specify the refresh range to refresh only the latest few partitions, reducing the refresh overhead."}),"\n",(0,r.jsx)(i.li,{children:"You can specify the base tables where data changes will not automatically trigger a refresh of the corresponding materialized view."}),"\n",(0,r.jsx)(i.li,{children:"You can assign a resource group to the refresh task."}),"\n"]}),"\n",(0,r.jsxs)(i.p,{children:["For more information, see the ",(0,r.jsx)(i.strong,{children:"PROPERTIES"})," section in ",(0,r.jsx)(i.a,{href:"/docusaurusv3/docs/3.0/sql-reference/sql-statements/data-definition/CREATE%20MATERIALIZED%20VIEW#parameters",children:"CREATE MATERIALIZED VIEW - Parameters"}),". You can also modify the mechanisms of an existing asynchronous materialized view using ",(0,r.jsx)(i.a,{href:"/docusaurusv3/docs/3.0/sql-reference/sql-statements/data-definition/ALTER%20MATERIALIZED%20VIEW",children:"ALTER MATERIALIZED VIEW"}),"."]}),"\n",(0,r.jsxs)(i.blockquote,{children:["\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.strong,{children:"CAUTION"})}),"\n",(0,r.jsxs)(i.p,{children:["To prevent full refresh operations from exhausting system resources and causing task failures, it is recommended to create partitioned materialized views based on partitioned base tables. This ensures that when data updates occur within a base table partition, only the corresponding partition of the materialized view are refreshed, rather than refreshing the entire materialized view. For more information, please refer to ",(0,r.jsx)(i.a,{href:"/docusaurusv3/docs/3.0/using_starrocks/data_modeling_with_materialized_views#partitioned-modeling",children:"Data Modeling with Materialized Views - Partitioned Modeling"}),"."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.strong,{children:"About nested materialized views"})}),"\n",(0,r.jsx)(i.p,{children:"StarRocks v2.5 supports creating nested asynchronous materialized views. You can build asynchronous materialized views based on existing asynchronous materialized views. The refreshing strategy for each materialized view does not affect the materialized views on the upper or lower layers. Currently, StarRocks does not limit the number of nesting levels. In a production environment, we recommend that the number of nesting layers does not exceed THREE."}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.strong,{children:"About external catalog materialized views"})}),"\n",(0,r.jsxs)(i.p,{children:["StarRocks supports building asynchronous materialized views based on Hive Catalog (since v2.5), Hudi Catalog (since v2.5), Iceberg Catalog (since v2.5), and JDBC Catalog (since v3.0). Creating a materialized view on external catalogs is similar to creating an asynchronous materialized view on the default catalog, but with some usage restrictions. For more information, please refer to ",(0,r.jsx)(i.a,{href:"/docusaurusv3/docs/3.0/using_starrocks/data_lake_query_acceleration_with_materialized_views",children:"Data lake query acceleration with materialized views"}),"."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(i.h2,{id:"manually-refresh-an-asynchronous-materialized-view",children:"Manually refresh an asynchronous materialized view"}),"\n",(0,r.jsxs)(i.p,{children:["You can refresh an asynchronous materialized view regardless of its refreshing strategy via ",(0,r.jsx)(i.a,{href:"/docusaurusv3/docs/3.0/sql-reference/sql-statements/data-manipulation/REFRESH%20MATERIALIZED%20VIEW",children:"REFRESH MATERIALIZED VIEW"}),". StarRocks v2.5 supports refreshing specific partitions of an asynchronous materialized view by specifying partition names."]}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-SQL",children:"REFRESH MATERIALIZED VIEW order_mv;\n"})}),"\n",(0,r.jsxs)(i.p,{children:["You can cancel a refresh task submitted via an asynchronous call using ",(0,r.jsx)(i.a,{href:"/docusaurusv3/docs/3.0/sql-reference/sql-statements/data-manipulation/CANCEL%20REFRESH%20MATERIALIZED%20VIEW",children:"CANCEL REFRESH MATERIALIZED VIEW"}),"."]}),"\n",(0,r.jsx)(i.h2,{id:"query-the-asynchronous-materialized-view-directly",children:"Query the asynchronous materialized view directly"}),"\n",(0,r.jsx)(i.p,{children:"The asynchronous materialized view you created is essentially a physical table that contains the complete set of pre-computed results in accordance with the query statement. Therefore, you can directly query the materialized view after the materialized view is refreshed for the first time."}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-Plain",children:"MySQL > SELECT * FROM order_mv;\n+----------+--------------------+\n| order_id | total              |\n+----------+--------------------+\n|    10001 |               14.5 |\n|    10002 | 10.200000047683716 |\n|    10003 |  8.700000047683716 |\n+----------+--------------------+\n3 rows in set (0.01 sec)\n"})}),"\n",(0,r.jsxs)(i.blockquote,{children:["\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.strong,{children:"NOTE"})}),"\n",(0,r.jsx)(i.p,{children:"You can directly query an asynchronous materialized view, but the results may be inconsistent with what you get from the query on its base tables."}),"\n"]}),"\n",(0,r.jsx)(i.h2,{id:"rewrite-and-accelerate-queries-with-the-asynchronous-materialized-view",children:"Rewrite and accelerate queries with the asynchronous materialized view"}),"\n",(0,r.jsxs)(i.p,{children:["StarRocks v2.5 supports automatic and transparent query rewrite based on the SPJG-type asynchronous materialized views. The SPJG-type materialized views query rewrite includes single table query rewrite, Join query rewrite, aggregation query rewrite, Union query rewrite and query rewrite based on nested materialized views. For more information, please refer to ",(0,r.jsx)(i.a,{href:"/docusaurusv3/docs/3.0/using_starrocks/query_rewrite_with_materialized_views",children:"Query Rewrite with Materialized Views"}),"."]}),"\n",(0,r.jsxs)(i.p,{children:["Currently, StarRocks supports rewriting queries on asynchronous materialized views that are created on the default catalog or an external catalog such as a Hive catalog, Hudi catalog, or Iceberg catalog. When querying data in the default catalog, StarRocks ensures strong consistency of results between the rewritten query and the original query by excluding materialized views whose data is inconsistent with the base table. When the data in a materialized view expires, the materialized view will not be used as a candidate materialized view. When querying data in external catalogs, StarRocks does not ensure a strong consistency of the results because StarRocks cannot perceive the data changes in external catalogs. For more about asynchronous materialized views that are created based on an external catalog, please refer to ",(0,r.jsx)(i.a,{href:"/docusaurusv3/docs/3.0/using_starrocks/data_lake_query_acceleration_with_materialized_views",children:"Data lake query acceleration with materialized views"}),"."]}),"\n",(0,r.jsxs)(i.blockquote,{children:["\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.strong,{children:"NOTE"})}),"\n",(0,r.jsx)(i.p,{children:"Asynchronous materialized views created on base tables in a JDBC catalog do not support query rewrite."}),"\n"]}),"\n",(0,r.jsx)(i.h2,{id:"manage-an-asynchronous-materialized-view",children:"Manage an asynchronous materialized view"}),"\n",(0,r.jsx)(i.h3,{id:"alter-an-asynchronous-materialized-view",children:"Alter an asynchronous materialized view"}),"\n",(0,r.jsxs)(i.p,{children:["You can alter the property of an asynchronous materialized view using ",(0,r.jsx)(i.a,{href:"/docusaurusv3/docs/3.0/sql-reference/sql-statements/data-definition/ALTER%20MATERIALIZED%20VIEW",children:"ALTER MATERIALIZED VIEW"}),"."]}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsx)(i.p,{children:"Enable an inactive materialized view."}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-SQL",children:"ALTER MATERIALIZED VIEW order_mv ACTIVE;\n"})}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsx)(i.p,{children:"Rename an asynchronous materialized view."}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-SQL",children:"ALTER MATERIALIZED VIEW order_mv RENAME order_total;\n"})}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsx)(i.p,{children:"Alter the refreshing interval of an asynchronous materialized view to 2 days."}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-SQL",children:"ALTER MATERIALIZED VIEW order_mv REFRESH ASYNC EVERY(INTERVAL 2 DAY);\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(i.h3,{id:"show-asynchronous-materialized-views",children:"Show asynchronous materialized views"}),"\n",(0,r.jsxs)(i.p,{children:["You can view the asynchronous materialized views in your database by using ",(0,r.jsx)(i.a,{href:"/docusaurusv3/docs/3.0/sql-reference/sql-statements/data-manipulation/SHOW%20MATERIALIZED%20VIEW",children:"SHOW MATERIALIZED VIEWS"})," or querying the system metadata table in Information Schema."]}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsx)(i.p,{children:"Check all asynchronous materialized views in your database."}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-SQL",children:"SHOW MATERIALIZED VIEWS;\n"})}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsx)(i.p,{children:"Check a specific asynchronous materialized view."}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-SQL",children:'SHOW MATERIALIZED VIEWS WHERE NAME = "order_mv";\n'})}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsx)(i.p,{children:"Check specific asynchronous materialized views by matching the name."}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-SQL",children:'SHOW MATERIALIZED VIEWS WHERE NAME LIKE "order%";\n'})}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsxs)(i.p,{children:["Check all asynchronous materialized views by querying the metadata table ",(0,r.jsx)(i.code,{children:"materialized_views"})," in Information Schema. For more information, please refer to ",(0,r.jsx)(i.a,{href:"/docusaurusv3/docs/3.0/administration/information_schema#materialized_views",children:"information_schema.materialized_views"}),"."]}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-SQL",children:"SELECT * FROM information_schema.materialized_views;\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(i.h3,{id:"check-the-definition-of-asynchronous-materialized-view",children:"Check the definition of asynchronous materialized view"}),"\n",(0,r.jsxs)(i.p,{children:["You can check the query used to create an asynchronous materialized view via ",(0,r.jsx)(i.a,{href:"/docusaurusv3/docs/3.0/sql-reference/sql-statements/data-manipulation/SHOW%20CREATE%20MATERIALIZED%20VIEW",children:"SHOW CREATE MATERIALIZED VIEW"}),"."]}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-SQL",children:"SHOW CREATE MATERIALIZED VIEW order_mv;\n"})}),"\n",(0,r.jsx)(i.h3,{id:"check-the-execution-status-of-asynchronous-materialized-view",children:"Check the execution status of asynchronous materialized view"}),"\n",(0,r.jsxs)(i.p,{children:["You can check the execution (building or refreshing) status of an asynchronous materialized view by querying the ",(0,r.jsx)(i.code,{children:"tasks"})," and ",(0,r.jsx)(i.code,{children:"task_runs"})," metadata tables in StarRocks' ",(0,r.jsx)(i.a,{href:"/docusaurusv3/docs/3.0/administration/information_schema",children:"Information Schema"}),"."]}),"\n",(0,r.jsx)(i.p,{children:"The following example checks the execution status of the materialized view that was created most recently:"}),"\n",(0,r.jsxs)(i.ol,{children:["\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsxs)(i.p,{children:["Check the ",(0,r.jsx)(i.code,{children:"TASK_NAME"})," of the most recent task in the table ",(0,r.jsx)(i.code,{children:"tasks"}),"."]}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-Plain",children:"mysql> select * from information_schema.tasks  order by CREATE_TIME desc limit 1\\G;\n*************************** 1. row ***************************\n  TASK_NAME: mv-59299\nCREATE_TIME: 2022-12-12 17:33:51\n  SCHEDULE: MANUAL\n  DATABASE: ssb_1\nDEFINITION: insert overwrite hive_mv_lineorder_flat_1 SELECT `hive_ci`.`dla_scan`.`lineorder_flat_1000_1000_orc`.`lo_orderkey`, `hive_ci`.`dla_scan`.`lineorder_flat_1000_1000_orc`.`lo_linenumber`, `hive_ci`.`dla_scan`.`lineorder_flat_1000_1000_orc`.`lo_custkey`, `hive_ci`.`dla_scan`.`lineorder_flat_1000_1000_orc`.`lo_partkey`, `hive_ci`.`dla_scan`.`lineorder_flat_1000_1000_orc`.`lo_orderpriority`, `hive_ci`.`dla_scan`.`lineorder_flat_1000_1000_orc`.`lo_ordtotalprice`, `hive_ci`.`dla_scan`.`lineorder_flat_1000_1000_orc`.`lo_revenue`, `hive_ci`.`dla_scan`.`lineorder_flat_1000_1000_orc`.`p_mfgr`, `hive_ci`.`dla_scan`.`lineorder_flat_1000_1000_orc`.`s_nation`, `hive_ci`.`dla_scan`.`lineorder_flat_1000_1000_orc`.`c_city`, `hive_ci`.`dla_scan`.`lineorder_flat_1000_1000_orc`.`c_nation`, `hive_ci`.`dla_scan`.`lineorder_flat_1000_1000_orc`.`lo_orderdate`\nFROM `hive_ci`.`dla_scan`.`lineorder_flat_1000_1000_orc`\nWHERE `hive_ci`.`dla_scan`.`lineorder_flat_1000_1000_orc`.`lo_orderdate` = '1997-01-01'\nEXPIRE_TIME: NULL\n1 row in set (0.02 sec)\n"})}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsxs)(i.p,{children:["Check the execution status in the table ",(0,r.jsx)(i.code,{children:"task_runs"})," using the ",(0,r.jsx)(i.code,{children:"TASK_NAME"})," you have found."]}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-Plain",children:"mysql> select * from information_schema.task_runs where task_name='mv-59299' order by CREATE_TIME \\G;\n*************************** 1. row ***************************\n    QUERY_ID: d9cef11f-7a00-11ed-bd90-00163e14767f\n    TASK_NAME: mv-59299\n  CREATE_TIME: 2022-12-12 17:39:19\n  FINISH_TIME: 2022-12-12 17:39:22\n        STATE: SUCCESS\n    DATABASE: ssb_1\n  DEFINITION: insert overwrite hive_mv_lineorder_flat_1 SELECT `hive_ci`.`dla_scan`.`lineorder_flat_1000_1000_orc`.`lo_orderkey`, `hive_ci`.`dla_scan`.`lineorder_flat_1000_1000_orc`.`lo_linenumber`, `hive_ci`.`dla_scan`.`lineorder_flat_1000_1000_orc`.`lo_custkey`, `hive_ci`.`dla_scan`.`lineorder_flat_1000_1000_orc`.`lo_partkey`, `hive_ci`.`dla_scan`.`lineorder_flat_1000_1000_orc`.`lo_orderpriority`, `hive_ci`.`dla_scan`.`lineorder_flat_1000_1000_orc`.`lo_ordtotalprice`, `hive_ci`.`dla_scan`.`lineorder_flat_1000_1000_orc`.`lo_revenue`, `hive_ci`.`dla_scan`.`lineorder_flat_1000_1000_orc`.`p_mfgr`, `hive_ci`.`dla_scan`.`lineorder_flat_1000_1000_orc`.`s_nation`, `hive_ci`.`dla_scan`.`lineorder_flat_1000_1000_orc`.`c_city`, `hive_ci`.`dla_scan`.`lineorder_flat_1000_1000_orc`.`c_nation`, `hive_ci`.`dla_scan`.`lineorder_flat_1000_1000_orc`.`lo_orderdate`\nFROM `hive_ci`.`dla_scan`.`lineorder_flat_1000_1000_orc`\nWHERE `hive_ci`.`dla_scan`.`lineorder_flat_1000_1000_orc`.`lo_orderdate` = '1997-01-01'\n  EXPIRE_TIME: 2022-12-15 17:39:19\n  ERROR_CODE: 0\nERROR_MESSAGE: NULL\n    PROGRESS: 100%\n2 rows in set (0.02 sec)\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(i.h3,{id:"drop-an-asynchronous-materialized-view",children:"Drop an asynchronous materialized view"}),"\n",(0,r.jsxs)(i.p,{children:["You can drop an asynchronous materialized view via ",(0,r.jsx)(i.a,{href:"/docusaurusv3/docs/3.0/sql-reference/sql-statements/data-definition/DROP%20MATERIALIZED%20VIEW",children:"DROP MATERIALIZED VIEW"}),"."]}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-Plain",children:"DROP MATERIALIZED VIEW order_mv;\n"})}),"\n",(0,r.jsx)(i.h3,{id:"relevant-session-variables",children:"Relevant session variables"}),"\n",(0,r.jsx)(i.p,{children:"The following variables control the behaviour of an asynchronous materialized view:"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"analyze_mv"}),": Whether and how to analyze the materialized view after refresh. Valid values are an empty string (Do not analyze), ",(0,r.jsx)(i.code,{children:"sample"})," (Sampled statistics collection), and ",(0,r.jsx)(i.code,{children:"full"})," (Full statistics collection). Default is ",(0,r.jsx)(i.code,{children:"sample"}),"."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"enable_materialized_view_rewrite"}),": Whether to enable the automatic rewrite for materialized view. Valid values are ",(0,r.jsx)(i.code,{children:"true"})," (Default since v2.5) and ",(0,r.jsx)(i.code,{children:"false"}),"."]}),"\n"]})]})}const h=function(e={}){const{wrapper:i}=Object.assign({},(0,n.ah)(),e.components);return i?(0,r.jsx)(i,Object.assign({},e,{children:(0,r.jsx)(c,e)})):c(e)}},11151:(e,i,a)=>{a.d(i,{Zo:()=>o,ah:()=>s});var r=a(67294);const n=r.createContext({});function s(e){const i=r.useContext(n);return r.useMemo((()=>"function"==typeof e?e(i):{...i,...e}),[i,e])}const t={};function o({components:e,children:i,disableParentContext:a}){let o;return o=a?"function"==typeof e?e({}):e||t:s(e),r.createElement(n.Provider,{value:o},i)}}}]);