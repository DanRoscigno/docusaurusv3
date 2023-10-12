"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[99785],{57135:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var a=n(85893),s=n(11151);const i={},r="Aggregate table",o={id:"table_design/table_types/aggregate_table",title:"Aggregate table",description:"When you create a table that uses the Aggregate table, you can define sort key columns and metric columns and can specify an aggregate function for the metric columns. If the records to be loaded have the same sort key, the metric columns are aggregated. The Aggregate table helps reduce the amount of data that needs to be processed for queries, thereby accelerating queries.",source:"@site/versioned_docs/version-3.0/table_design/table_types/aggregate_table.md",sourceDirName:"table_design/table_types",slug:"/table_design/table_types/aggregate_table",permalink:"/doc/docs/3.0/table_design/table_types/aggregate_table",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/table_design/table_types/aggregate_table.md",tags:[],version:"3.0",frontMatter:{},sidebar:"Chinese31",previous:{title:"Duplicate Key table",permalink:"/doc/docs/3.0/table_design/table_types/duplicate_key_table"},next:{title:"Unique Key table",permalink:"/doc/docs/3.0/table_design/table_types/unique_key_table"}},l={},d=[{value:"Scenarios",id:"scenarios",level:2},{value:"Principle",id:"principle",level:2},{value:"Create a table",id:"create-a-table",level:2},{value:"Usage notes",id:"usage-notes",level:2},{value:"What to do next",id:"what-to-do-next",level:2}];function c(e){const t=Object.assign({h1:"h1",p:"p",h2:"h2",ul:"ul",li:"li",ol:"ol",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",code:"code",pre:"pre",blockquote:"blockquote",strong:"strong",a:"a"},(0,s.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"aggregate-table",children:"Aggregate table"}),"\n",(0,a.jsx)(t.p,{children:"When you create a table that uses the Aggregate table, you can define sort key columns and metric columns and can specify an aggregate function for the metric columns. If the records to be loaded have the same sort key, the metric columns are aggregated. The Aggregate table helps reduce the amount of data that needs to be processed for queries, thereby accelerating queries."}),"\n",(0,a.jsx)(t.h2,{id:"scenarios",children:"Scenarios"}),"\n",(0,a.jsx)(t.p,{children:"The Aggregate table is well suited to data statistics and analytics scenarios. A few examples are as follows:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Help website or app providers analyze the amount of traffic and time that their users spend on a specific website or app and the total number of visits to the website or app."}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Help advertising agencies analyze the total clicks, total views, and consumption statistics of an advertisement that they provide for their customers."}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Help e-commerce companies analyze their annual trading data to identify the geographic bestsellers within individual quarters or months."}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"The data querying and ingestion in the preceding scenarios have the following characteristics:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Most queries are aggregate queries, such as SUM, COUNT, and MAX."}),"\n",(0,a.jsx)(t.li,{children:"Raw detailed data does not need to be retrieved."}),"\n",(0,a.jsx)(t.li,{children:"Historical data is not frequently updated. Only new data is appended."}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"principle",children:"Principle"}),"\n",(0,a.jsx)(t.p,{children:"Starting from data ingestion to data querying, data with the same sort key in a table that uses the Aggregate table is aggregated multiple times as follows:"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsx)(t.li,{children:"In the data ingestion phase, when data is loaded as batches into the table, each batch comprises a data version. After a data version is generated, StarRocks aggregates the data that has the same sort key in the data version."}),"\n",(0,a.jsx)(t.li,{children:"In the background compaction phase, when the files of multiple data versions that are generated at data ingestion are periodically compacted into a large file, StarRocks aggregates the data that has the same sort key in the large file."}),"\n",(0,a.jsx)(t.li,{children:"In the data query phase, StarRocks aggregates the data that has the same sort key among all data versions before it returns the query result."}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"The aggregate operations help reduce the amount of data that needs to be processed, thereby accelerating queries."}),"\n",(0,a.jsx)(t.p,{children:"Suppose that you have a table that uses the Aggregate table and want to load the following four raw records into the table."}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Date"}),(0,a.jsx)(t.th,{children:"Country"}),(0,a.jsx)(t.th,{children:"PV"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"2020.05.01"}),(0,a.jsx)(t.td,{children:"CHN"}),(0,a.jsx)(t.td,{children:"1"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"2020.05.01"}),(0,a.jsx)(t.td,{children:"CHN"}),(0,a.jsx)(t.td,{children:"2"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"2020.05.01"}),(0,a.jsx)(t.td,{children:"USA"}),(0,a.jsx)(t.td,{children:"3"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"2020.05.01"}),(0,a.jsx)(t.td,{children:"USA"}),(0,a.jsx)(t.td,{children:"4"})]})]})]}),"\n",(0,a.jsx)(t.p,{children:"StarRocks aggregates the four raw records into the following two records at data ingestion."}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Date"}),(0,a.jsx)(t.th,{children:"Country"}),(0,a.jsx)(t.th,{children:"PV"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"2020.05.01"}),(0,a.jsx)(t.td,{children:"CHN"}),(0,a.jsx)(t.td,{children:"3"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"2020.05.01"}),(0,a.jsx)(t.td,{children:"USA"}),(0,a.jsx)(t.td,{children:"7"})]})]})]}),"\n",(0,a.jsx)(t.h2,{id:"create-a-table",children:"Create a table"}),"\n",(0,a.jsxs)(t.p,{children:["Suppose that you want to analyze the numbers of visits by users from different cities to different web pages. In this example, create a table named ",(0,a.jsx)(t.code,{children:"example_db.aggregate_tbl"}),", define ",(0,a.jsx)(t.code,{children:"site_id"}),", ",(0,a.jsx)(t.code,{children:"date"}),", and ",(0,a.jsx)(t.code,{children:"city_code"})," as sort key columns, define ",(0,a.jsx)(t.code,{children:"pv"})," as a metric column, and specify the SUM function for the ",(0,a.jsx)(t.code,{children:"pv"})," column."]}),"\n",(0,a.jsx)(t.p,{children:"The statement for creating the table is as follows:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-SQL",children:'CREATE TABLE IF NOT EXISTS example_db.aggregate_tbl (\n    site_id LARGEINT NOT NULL COMMENT "id of site",\n    date DATE NOT NULL COMMENT "time of event",\n    city_code VARCHAR(20) COMMENT "city_code of user",\n    pv BIGINT SUM DEFAULT "0" COMMENT "total page views"\n)\nAGGREGATE KEY(site_id, date, city_code)\nDISTRIBUTED BY HASH(site_id)\nPROPERTIES (\n"replication_num" = "3"\n);\n'})}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"NOTICE"})}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["When you create a table, you must specify the bucketing column by using the ",(0,a.jsx)(t.code,{children:"DISTRIBUTED BY HASH"})," clause. For detailed information, see ",(0,a.jsx)(t.a,{href:"/doc/docs/3.0/table_design/Data_distribution#design-partitioning-and-bucketing-rules",children:"bucketing"}),"."]}),"\n",(0,a.jsxs)(t.li,{children:["Since v2.5.7, StarRocks can automatically set the number of buckets (BUCKETS) when you create a table or add a partition. You no longer need to manually set the number of buckets. For detailed information, see ",(0,a.jsx)(t.a,{href:"/doc/docs/3.0/table_design/Data_distribution#determine-the-number-of-buckets",children:"determine the number of buckets"}),"."]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"usage-notes",children:"Usage notes"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Take note of the following points about the sort key of a table:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["You can use the ",(0,a.jsx)(t.code,{children:"AGGREGATE KEY"})," keyword to explicitly define the columns that are used in the sort key."]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["If the ",(0,a.jsx)(t.code,{children:"AGGREGATE KEY"})," keyword does not include all the dimension columns, the table cannot be created."]}),"\n",(0,a.jsxs)(t.li,{children:["By default, if you do not explicitly define sort key columns by using the ",(0,a.jsx)(t.code,{children:"AGGREGATE KEY"})," keyword, StarRocks selects all columns except metric columns as the sort key columns."]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"The sort key must be created on columns on which unique constraints are enforced. It must be composed of all the dimension columns whose names cannot be changed."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"You can specify an aggregate function following the name of a column to define the column as a metric column. In most cases, metric columns hold data that needs to be aggregated and analyzed."}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["For information about the aggregate functions that are supported by the Aggregate table, see ",(0,a.jsx)(t.a,{href:"/doc/docs/3.0/sql-reference/sql-statements/data-definition/CREATE%20TABLE",children:"CREATE TABLE"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"When queries are run, sort key columns are filtered before the aggregation of multiple data versions, whereas metric columns are filtered after the aggregation of multiple data versions. Therefore, we recommend that you identify the columns that are frequently used as filter conditions and define these columns as the sort key. This way, data filtering can start before the aggregation of multiple data versions to improve query performance."}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"When you create a table, you cannot create BITMAP indexes or Bloom Filter indexes on the metric columns of the table."}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"what-to-do-next",children:"What to do next"}),"\n",(0,a.jsxs)(t.p,{children:["After a table is created, you can use various data ingestion methods to load data into StarRocks. For information about the data ingestion methods that are supported by StarRocks, see ",(0,a.jsx)(t.a,{href:"/doc/docs/3.0/loading/Loading_intro",children:"Data import"}),"."]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsxs)(t.p,{children:["Note: When you load data into a table that uses the Aggregate table, you can only update all columns of the table. For example, when you update the preceding ",(0,a.jsx)(t.code,{children:"example_db.aggregate_tbl"})," table, you must update all its columns, which are ",(0,a.jsx)(t.code,{children:"site_id"}),", ",(0,a.jsx)(t.code,{children:"date"}),", ",(0,a.jsx)(t.code,{children:"city_code"}),", and ",(0,a.jsx)(t.code,{children:"pv"}),"."]}),"\n"]})]})}const h=function(e={}){const{wrapper:t}=Object.assign({},(0,s.ah)(),e.components);return t?(0,a.jsx)(t,Object.assign({},e,{children:(0,a.jsx)(c,e)})):c(e)}},11151:(e,t,n)=>{n.d(t,{Zo:()=>o,ah:()=>i});var a=n(67294);const s=a.createContext({});function i(e){const t=a.useContext(s);return a.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const r={};function o({components:e,children:t,disableParentContext:n}){let o;return o=n?"function"==typeof e?e({}):e||r:i(e),a.createElement(s.Provider,{value:o},t)}}}]);