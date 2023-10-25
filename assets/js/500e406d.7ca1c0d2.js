"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[99571],{70024:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var n=r(85893),t=r(11151);const i={displayed_sidebar:"English"},a="StarRocks version 2.2",o={id:"release_notes/release-2.2",title:"StarRocks version 2.2",description:"2.2.1",source:"@site/versioned_docs/version-2.1/release_notes/release-2.2.md",sourceDirName:"release_notes",slug:"/release_notes/release-2.2",permalink:"/docs/2.1/release_notes/release-2.2",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/release_notes/release-2.2.md",tags:[],version:"2.1",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"StarRocks version 2.1",permalink:"/docs/2.1/release_notes/release-2.1"},next:{title:"convert_tz",permalink:"/docs/2.1/sql-reference/sql-functions/How_to_Write_Functions_Documentation"}},l={},c=[{value:"2.2.1",id:"221",level:2},{value:"Improvements",id:"improvements",level:3},{value:"Bug Fixes",id:"bug-fixes",level:3},{value:"2.2.0",id:"220",level:2},{value:"New Features",id:"new-features",level:2},{value:"Improvement",id:"improvement",level:2},{value:"Bug Fixes",id:"bug-fixes-1",level:3},{value:"Others",id:"others",level:3}];function d(e){const s=Object.assign({h1:"h1",h2:"h2",p:"p",h3:"h3",ul:"ul",li:"li",a:"a",code:"code"},(0,t.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"starrocks-version-22",children:"StarRocks version 2.2"}),"\n",(0,n.jsx)(s.h2,{id:"221",children:"2.2.1"}),"\n",(0,n.jsx)(s.p,{children:"Release date: June 2, 2022"}),"\n",(0,n.jsx)(s.h3,{id:"improvements",children:"Improvements"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["Optimized the data loading performance and reduced long tail latency by reconstructing part of the hotspot code and reducing lock granularity. ",(0,n.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/6641",children:"#6641"})]}),"\n",(0,n.jsxs)(s.li,{children:["Added the CPU and memory usage information of the machines on which BEs are deployed for each query to the FE audit log. ",(0,n.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/6208",children:"#6208"})," ",(0,n.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/6209",children:"#6209"})]}),"\n",(0,n.jsxs)(s.li,{children:["Supported JSON data types in the tables that use the Primary Key model and tables that use the Unique Key model. ",(0,n.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/6544",children:"#6544"})]}),"\n",(0,n.jsxs)(s.li,{children:["Reduced FEs load by reducing lock granularity and deduplicating BE report requests. Optimized the report performance when a large number of BEs are deployed, and solved the issue of Routine Load tasks getting stuck in a large cluster. ",(0,n.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/6293",children:"#6293"})]}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"bug-fixes",children:"Bug Fixes"}),"\n",(0,n.jsx)(s.p,{children:"The following bugs are fixed:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["An error occurs when StarRocks parses the escape characters specified in the ",(0,n.jsx)(s.code,{children:"SHOW FULL TABLES FROM DatabaseName"})," statement. ",(0,n.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/issues/6559",children:"#6559"})]}),"\n",(0,n.jsxs)(s.li,{children:["FE disk space usage rises sharply (Fix this bug by rolling back the BDBJE version). ",(0,n.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/6708",children:"#6708"})]}),"\n",(0,n.jsxs)(s.li,{children:["BEs become faulty because relevant fields cannot be found in the data returned after columnar scanning is enabled (",(0,n.jsx)(s.code,{children:"enable_docvalue_scan=true"}),"). ",(0,n.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/6600",children:"#6600"})]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"220",children:"2.2.0"}),"\n",(0,n.jsx)(s.p,{children:"Release date: April 22, 2022"}),"\n",(0,n.jsx)(s.h2,{id:"new-features",children:"New Features"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"[Preview] Resource groups are supported. By using resource groups to control CPU and memory usage, StarRocks can achieve resource isolation and rational use of resources when different tenants perform complex and simple queries in the same cluster."}),"\n",(0,n.jsx)(s.li,{children:"[Preview] Java UDFs (user-defined functions) are supported. StarRocks supports writing UDFs in Java, extending StarRocks' functions."}),"\n",(0,n.jsx)(s.li,{children:"Primary key model supports partial updates when data is loaded to the primary key model using Stream Load, Broker Load, and Routine Load.  In real-time data update scenarios such as updating orders and joining multiple streams, partial updates allow users to update only a few columns."}),"\n",(0,n.jsx)(s.li,{children:"[Preview] JSON data types and JSON functions are supported."}),"\n",(0,n.jsx)(s.li,{children:"External tables based on Apache Hudi are supported, which further improves data lake analytics experience."}),"\n",(0,n.jsxs)(s.li,{children:["The following functions are supported:","\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"ARRAY functions, including array_agg, array_sort, array_distinct, array_join, reverse, array_slice, array_concat, array_difference, array_overlap, and array_intersect"}),"\n",(0,n.jsx)(s.li,{children:"BITMAP functions, including bitmap_max and bitmap_min"}),"\n",(0,n.jsx)(s.li,{children:"Other functions, including retention and square"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"improvement",children:"Improvement"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"CBO's Parser and Analyzer are reconstructed, code structure is optimized and syntax such as Insert with CTE is supported. So the performance of complex queries is optimized, such as those queries reusing common table expression (CTE)."}),"\n",(0,n.jsx)(s.li,{children:"The query performance of object storage-based (AWS S3, Alibaba Cloud OSS, Tencent COS) Apache Hive external table is optimized. After optimization, the performance of object storage-based queries is comparable to that of HDFS-based queries. Also, late materialization of ORC files is supported, improving query performance of small files."}),"\n",(0,n.jsx)(s.li,{children:"When external tables are used to query Apache Hive, StarRocks supports automatic and incremental updating of cached metastore data by consuming Hive Metastore events, such as data changes and partition changes. Moreover, it also supports querying DECIMAL and ARRAY data in Apache Hive."}),"\n",(0,n.jsx)(s.li,{children:"The performance of UNION ALL operator is optimized, delivering improvement of up to 2-25 times."}),"\n",(0,n.jsx)(s.li,{children:"The pipeline engine which can adaptively adjust query parallelism is released, and its profile is optimized. The pipeline engine can improve performance for small queries in high concurrent scenarios."}),"\n",(0,n.jsx)(s.li,{children:"StarRocks supports the loading of CSV files with multi-character row delimiters."}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"bug-fixes-1",children:"Bug Fixes"}),"\n",(0,n.jsx)(s.p,{children:"The following bugs are fixed:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["Deadlocks occur when data is loaded and changes are committed into tables based on Primary Key model. ",(0,n.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/4998",children:"#4998"})]}),"\n",(0,n.jsxs)(s.li,{children:["Some FE (including BDBJE) stability issues. ",(0,n.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/4428",children:"#4428"}),", ",(0,n.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/4666",children:"#4666"}),", ",(0,n.jsx)(s.a,{href:"https://github.com/StarRocks/bdb-je/pull/2",children:"#2"})]}),"\n",(0,n.jsxs)(s.li,{children:["The return value overflows when the SUM function is used to calculate a large amount of data. ",(0,n.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/3944",children:"#3944"})]}),"\n",(0,n.jsxs)(s.li,{children:["The return values of ROUND and TRUNCATE functions have precision issues. ",(0,n.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/4256",children:"#4256"})]}),"\n",(0,n.jsxs)(s.li,{children:["Some bugs detected by SQLancer. Please see ",(0,n.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/issues?q=is%3Aissue++label%3Asqlancer++milestone%3A2.2",children:"SQLancer related issues"}),"."]}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"others",children:"Others"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"The Flink connector flink-connector-starrocks supports Flink 1.14."}),"\n"]})]})}const h=function(e={}){const{wrapper:s}=Object.assign({},(0,t.ah)(),e.components);return s?(0,n.jsx)(s,Object.assign({},e,{children:(0,n.jsx)(d,e)})):d(e)}},11151:(e,s,r)=>{r.d(s,{Zo:()=>o,ah:()=>i});var n=r(67294);const t=n.createContext({});function i(e){const s=n.useContext(t);return n.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const a={};function o({components:e,children:s,disableParentContext:r}){let o;return o=r?"function"==typeof e?e({}):e||a:i(e),n.createElement(t.Provider,{value:o},s)}}}]);