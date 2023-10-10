"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[85189],{96030:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>r});var n=a(85893),s=a(11151);const i={},o="Duplicate Key table",l={id:"table_design/table_types/duplicate_key_table",title:"Duplicate Key table",description:"The Duplicate Key table is the default model in StarRocks. If you did not specify a model when you create a table, a Duplicate Key table is created by default.",source:"@site/versioned_docs/version-3.1/table_design/table_types/duplicate_key_table.md",sourceDirName:"table_design/table_types",slug:"/table_design/table_types/duplicate_key_table",permalink:"/docusaurusv3/docs/latest/table_design/table_types/duplicate_key_table",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/table_design/table_types/duplicate_key_table.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"Table Types",permalink:"/docusaurusv3/docs/latest/table_design/table_types/"},next:{title:"Aggregate table",permalink:"/docusaurusv3/docs/latest/table_design/table_types/aggregate_table"}},d={},r=[{value:"Scenarios",id:"scenarios",level:2},{value:"Create a table",id:"create-a-table",level:2},{value:"Usage notes",id:"usage-notes",level:2},{value:"What to do next",id:"what-to-do-next",level:2}];function c(e){const t=Object.assign({h1:"h1",p:"p",h2:"h2",ul:"ul",li:"li",code:"code",pre:"pre",blockquote:"blockquote",strong:"strong",a:"a"},(0,s.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"duplicate-key-table",children:"Duplicate Key table"}),"\n",(0,n.jsx)(t.p,{children:"The Duplicate Key table is the default model in StarRocks. If you did not specify a model when you create a table, a Duplicate Key table is created by default."}),"\n",(0,n.jsx)(t.p,{children:"When you create a Duplicate Key table, you can define a sort key for that table. If the filter conditions contain the sort key columns, StarRocks can quickly filter data from the table to accelerate queries. The Duplicate Key table allows you to append new data to the table. However, it does not allow you to modify existing data in the table."}),"\n",(0,n.jsx)(t.h2,{id:"scenarios",children:"Scenarios"}),"\n",(0,n.jsx)(t.p,{children:"The Duplicate Key table is suitable for the following scenarios:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Analyze raw data, such as raw logs and raw operation records."}),"\n",(0,n.jsx)(t.li,{children:"Query data by using a variety of methods without being limited by the pre-aggregation method."}),"\n",(0,n.jsx)(t.li,{children:"Load log data or time-series data. New data is written in append-only mode, and existing data is not updated."}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"create-a-table",children:"Create a table"}),"\n",(0,n.jsxs)(t.p,{children:["Suppose that you want to analyze the event data over a specific time range. In this example, create a table named ",(0,n.jsx)(t.code,{children:"detail"})," and define ",(0,n.jsx)(t.code,{children:"event_time"})," and ",(0,n.jsx)(t.code,{children:"event_type"})," as sort key columns."]}),"\n",(0,n.jsx)(t.p,{children:"Statement for creating the table:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-SQL",children:'CREATE TABLE IF NOT EXISTS detail (\n    event_time DATETIME NOT NULL COMMENT "datetime of event",\n    event_type INT NOT NULL COMMENT "type of event",\n    user_id INT COMMENT "id of user",\n    device_code INT COMMENT "device code",\n    channel INT COMMENT ""\n)\nDUPLICATE KEY(event_time, event_type)\nDISTRIBUTED BY HASH(user_id);\n'})}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"NOTICE"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["When you create a table, you must specify the bucketing column by using the ",(0,n.jsx)(t.code,{children:"DISTRIBUTED BY HASH"})," clause. For detailed information, see ",(0,n.jsx)(t.a,{href:"/docusaurusv3/docs/latest/table_design/Data_distribution#design-partitioning-and-bucketing-rules",children:"bucketing"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:["Since v2.5.7, StarRocks can automatically set the number of buckets (BUCKETS) when you create a table or add a partition. You no longer need to manually set the number of buckets. For detailed information, see ",(0,n.jsx)(t.a,{href:"/docusaurusv3/docs/latest/table_design/Data_distribution#determine-the-number-of-buckets",children:"determine the number of buckets"}),"."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"usage-notes",children:"Usage notes"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Take note of the following points about the sort key of a table:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["You can use the ",(0,n.jsx)(t.code,{children:"DUPLICATE KEY"})," keyword to explicitly define the columns that are used in the sort key."]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:["Note: By default, if you do not specify sort key columns, StarRocks uses the ",(0,n.jsx)(t.strong,{children:"first three"})," columns as sort key columns."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"In the Duplicate Key table, the sort key can consist of some or all of the dimension columns."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"You can create indexes such as BITMAP indexes and Bloomfilter indexes at table creation."}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"If two identical records are loaded, the Duplicate Key table retains them as two records, rather than one."}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"what-to-do-next",children:"What to do next"}),"\n",(0,n.jsxs)(t.p,{children:["After a table is created, you can use various data ingestion methods to load data into StarRocks. For information about the data ingestion methods that are supported by StarRocks, see ",(0,n.jsx)(t.a,{href:"/docusaurusv3/docs/latest/loading/Loading_intro",children:"Overview of data loading"}),"."]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"Note: When you load data into a table that uses the Duplicate Key table, you can only append data to the table. You cannot modify the existing data in the table."}),"\n"]})]})}const u=function(e={}){const{wrapper:t}=Object.assign({},(0,s.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(c,e)})):c(e)}},11151:(e,t,a)=>{a.d(t,{Zo:()=>l,ah:()=>i});var n=a(67294);const s=n.createContext({});function i(e){const t=n.useContext(s);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const o={};function l({components:e,children:t,disableParentContext:a}){let l;return l=a?"function"==typeof e?e({}):e||o:i(e),n.createElement(s.Provider,{value:l},t)}}}]);