"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[85682],{32918:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var t=r(85893),n=r(11151);const i={},a="StarRocks version 2.3",o={id:"release_notes/release-2.3",title:"StarRocks version 2.3",description:"2.3.8",source:"@site/versioned_docs/version-3.0/release_notes/release-2.3.md",sourceDirName:"release_notes",slug:"/release_notes/release-2.3",permalink:"/docusaurusv3/docs/3.0/release_notes/release-2.3",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/release_notes/release-2.3.md",tags:[],version:"3.0",frontMatter:{},sidebar:"documentation",previous:{title:"StarRocks version 2.2",permalink:"/docusaurusv3/docs/3.0/release_notes/release-2.2"},next:{title:"convert_tz",permalink:"/docusaurusv3/docs/3.0/sql-reference/sql-functions/How to Write Functions Documentation"}},l={},c=[{value:"2.3.8",id:"238",level:2},{value:"Bug fixes",id:"bug-fixes",level:3},{value:"2.3.7",id:"237",level:2},{value:"Bug fixes",id:"bug-fixes-1",level:3},{value:"2.3.6",id:"236",level:2},{value:"Improvements",id:"improvements",level:3},{value:"Bug Fixes",id:"bug-fixes-2",level:3},{value:"2.3.5",id:"235",level:2},{value:"Improvements",id:"improvements-1",level:3},{value:"Bug Fixes",id:"bug-fixes-3",level:3},{value:"2.3.4",id:"234",level:2},{value:"Improvements",id:"improvements-2",level:3},{value:"Bug Fixes",id:"bug-fixes-4",level:3},{value:"2.3.3",id:"233",level:2},{value:"Bug Fixes",id:"bug-fixes-5",level:3},{value:"2.3.2",id:"232",level:2},{value:"New Features",id:"new-features",level:3},{value:"Improvements",id:"improvements-3",level:3},{value:"Bug Fixes",id:"bug-fixes-6",level:3},{value:"Behavior Change",id:"behavior-change",level:3},{value:"2.3.1",id:"231",level:2},{value:"Improvements",id:"improvements-4",level:3},{value:"Bug Fixes",id:"bug-fixes-7",level:3},{value:"2.3.0",id:"230",level:2},{value:"New Features",id:"new-features-1",level:3},{value:"Improvements",id:"improvements-5",level:3},{value:"Bug Fixes",id:"bug-fixes-8",level:3},{value:"Others",id:"others",level:3}];function h(e){const s=Object.assign({h1:"h1",h2:"h2",p:"p",h3:"h3",ul:"ul",li:"li",a:"a",code:"code",div:"div"},(0,n.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"starrocks-version-23",children:"StarRocks version 2.3"}),"\n",(0,t.jsx)(s.h2,{id:"238",children:"2.3.8"}),"\n",(0,t.jsx)(s.p,{children:"Release date: February 2, 2023"}),"\n",(0,t.jsx)(s.h3,{id:"bug-fixes",children:"Bug fixes"}),"\n",(0,t.jsx)(s.p,{children:"The following bugs are fixed:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["When resources are released after a large query finishes, there is a low probability that other queries are slowed down. This issue is more likely to occur if resource groups are enabled or the large query ends unexpectedly. ",(0,t.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/16454",children:"#16454"})," ",(0,t.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/16602",children:"#16602"})]}),"\n",(0,t.jsxs)(s.li,{children:["For a primary key table, if a replica's metadata version falls behind, StarRocks incrementally clones the missing metadata from other replicas to this replica. In this process, StarRocks pulls a large number of versions of metadata, and if too many versions of metadata accumulate without timely GC, excessive memory may be consumed and consequently the BEs may encounter OOM exceptions. ",(0,t.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/15935",children:"#15935"})]}),"\n",(0,t.jsxs)(s.li,{children:["If an FE sends an occasional heartbeat to a BE, and the heartbeat connection times out, the FE considers the BE unavailable, leading to transaction failures on the BE. ",(0,t.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/16386",children:"# 16386"})]}),"\n",(0,t.jsxs)(s.li,{children:["When you use a StarRocks external table to load data between StarRocks clusters, if the source StarRocks cluster is in an earlier version and the target StarRocks cluster is in a later version (2.2.8 ~ 2.2.11, 2.3.4 ~ 2.3.7, 2.4.1 or 2.4.2), the data loading fails. ",(0,t.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/16173",children:"#16173"})]}),"\n",(0,t.jsxs)(s.li,{children:["BEs crash when multiple queries run concurrently and memory usage is relatively high. ",(0,t.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/16047",children:"#16047"})]}),"\n",(0,t.jsxs)(s.li,{children:["When dynamic partitioning is enabled for a table and some partitions are dynamically deleted, if you execute TRUNCATE TABLE, an error ",(0,t.jsx)(s.code,{children:"NullPointerException"})," is returned. Meanwhile, if you load data into the table, the FEs crash and can not restart. ",(0,t.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/16822",children:"#16822"})]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"237",children:"2.3.7"}),"\n",(0,t.jsx)(s.p,{children:"Release date: December 30, 2022"}),"\n",(0,t.jsx)(s.h3,{id:"bug-fixes-1",children:"Bug fixes"}),"\n",(0,t.jsx)(s.p,{children:"The following bugs are fixed:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["The column that is allowed to be NULL in a StarRocks table is incorrectly set to NOT NULL in a view created from that table. ",(0,t.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/15749",children:"#15749"})]}),"\n",(0,t.jsxs)(s.li,{children:['A new tablet version is generated when data is loaded into StarRocks. However, the FE may not yet detect the new tablet version and still requires BEs to read the historical version of the tablet. If the garbage collection mechanism removes the historical version, the query cannot find the historical version and an error "Not found: get_applied_rowsets(version xxxx) failed tablet',(0,t.jsx)(s.div,{})," #version",(0,t.jsx)(s.div,{}),' [xxxxxxx]" is returned. ',(0,t.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/15726",children:"#15726"})]}),"\n",(0,t.jsxs)(s.li,{children:["FE takes up too much memory when data is frequently loaded. ",(0,t.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/15377",children:"#15377"})]}),"\n",(0,t.jsxs)(s.li,{children:["For aggregate queries and multi-table JOIN queries, the statistics are not collected accurately and CROSS JOIN occurs in the execution plans, resulting in long query latency. ",(0,t.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/12067",children:"#12067"}),"  ",(0,t.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/14780",children:"#14780"})]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"236",children:"2.3.6"}),"\n",(0,t.jsx)(s.p,{children:"Release date: December 22, 2022"}),"\n",(0,t.jsx)(s.h3,{id:"improvements",children:"Improvements"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["The Pipeline execution engine supports INSERT INTO statements. To enable it, set the FE configuration item ",(0,t.jsx)(s.code,{children:"enable_pipeline_load_for_insert"})," to ",(0,t.jsx)(s.code,{children:"true"}),".  ",(0,t.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/14723",children:"#14723"})]}),"\n",(0,t.jsxs)(s.li,{children:["The memory used by Compaction for the primary key table is reduced. ",(0,t.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/13861",children:"#13861"}),"  ",(0,t.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/13862",children:"#13862"})]}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"bug-fixes-2",children:"Bug Fixes"}),"\n",(0,t.jsx)(s.p,{children:"The following bugs are fixed:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["BEs may hang up when the resource group feature is enabled and multiple resource groups run queries at the same time. ",(0,t.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/14905",children:"#14905"})]}),"\n",(0,t.jsxs)(s.li,{children:["When you create a materialized view by using CREATE MATERIALIZED VIEW AS SELECT, if the SELECT clause does not use aggregate functions, and uses GROUP BY, for example ",(0,t.jsx)(s.code,{children:"CREATE MATERIALIZED VIEW test_view AS SELECT a,b from test group by b,a order by a;"}),", then the BE nodes all crash. ",(0,t.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/13743",children:"#13743"})]}),"\n",(0,t.jsxs)(s.li,{children:["If you restart the BE immediately after you use INSERT INTO to frequently load data into the primary key table to make data changes, the BE may restart very slowly. ",(0,t.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/15128",children:"#15128"})]}),"\n",(0,t.jsxs)(s.li,{children:["If only JRE is installed on the environment and JDK is not installed, queries fail after FE restarts. After the bug is fixed, FE cannot restart in that environment and it returns error ",(0,t.jsx)(s.code,{children:"JAVA_HOME can not be jre"}),". To successfully restart FE, you need to install JDK on the environment. ",(0,t.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/14332",children:"#14332"})]}),"\n",(0,t.jsxs)(s.li,{children:["Queries cause BE crashes. ",(0,t.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/14221",children:"#14221"})]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"exec_mem_limit"})," cannot be set to an expression. ",(0,t.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/13647",children:"#13647"})]}),"\n",(0,t.jsxs)(s.li,{children:["You cannot create a sync refreshed materialized view based on subquery results. ",(0,t.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/13507",children:"#13507"})]}),"\n",(0,t.jsxs)(s.li,{children:["The comments for columns are deleted after you refresh the Hive external table. ",(0,t.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/13742",children:"#13742"})]}),"\n",(0,t.jsxs)(s.li,{children:["During a correlated JOIN, the right table is processed before the left table and the right table is very large. If compaction is performed on the left table while the right table is being processed, the BE node crashes. ",(0,t.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/14070",children:"#14070"})]}),"\n",(0,t.jsxs)(s.li,{children:["If the Parquet file column names are case-sensitive, and the query condition uses upper-case column names from the Parquet file, the query returns no result. ",(0,t.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/13860",children:"#13860"})," ",(0,t.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/14773",children:"#14773"})]}),"\n",(0,t.jsxs)(s.li,{children:["During bulk loading, if the number of connections to Broker exceeds the default maximum number of connections, Broker is disconnected and the loading job fails with an error message ",(0,t.jsx)(s.code,{children:"list path error"}),". ",(0,t.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/13911",children:"#13911"})]}),"\n",(0,t.jsxs)(s.li,{children:["When BEs are highly loaded, the metric for resource groups ",(0,t.jsx)(s.code,{children:"starrocks_be_resource_group_running_queries"})," may be incorrect. ",(0,t.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/14043",children:"#14043"})]}),"\n",(0,t.jsxs)(s.li,{children:["If the query statement uses OUTER JOIN, it may cause the BE node to crash. ",(0,t.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/14840",children:"#14840"})]}),"\n",(0,t.jsxs)(s.li,{children:["After you create an asynchronous materialized view by using StarRocks 2.4, and you roll back it to 2.3, you may find FE fails to start. ",(0,t.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/14400",children:"#14400"})]}),"\n",(0,t.jsxs)(s.li,{children:["When the primary key table uses delete_range, and the performance is not good, it may slow down data reading from RocksDB and cause high CPU usage. ",(0,t.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/15130",children:"#15130"})]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"235",children:"2.3.5"}),"\n",(0,t.jsx)(s.p,{children:"Release date: November 30, 2022"}),"\n",(0,t.jsx)(s.h3,{id:"improvements-1",children:"Improvements"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Colocate Join supports Equi Join. ",(0,t.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/13546",children:"#13546"})]}),"\n",(0,t.jsxs)(s.li,{children:["Fix the problem that primary key index files are too large due to continuously appending WAL records when data is frequently loaded. ",(0,t.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/12862",children:"#12862"})]}),"\n",(0,t.jsxs)(s.li,{children:["FE scans all tablets in batches so that FE releases db.readLock at scanning intervals in case of holding db.readLock for too long. ",(0,t.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/13070",children:"#13070"})]}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"bug-fixes-3",children:"Bug Fixes"}),"\n",(0,t.jsx)(s.p,{children:"The following bugs are fixed:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["When a view is created based directly on the result of UNION ALL, and the UNION ALL operator's input columns include NULL values, the schema of the view is incorrect since the data type of columns is NULL_TYPE rather than UNION ALL's input columns. ",(0,t.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/13917",children:"#13917"})]}),"\n",(0,t.jsxs)(s.li,{children:["The query result of ",(0,t.jsx)(s.code,{children:"SELECT * FROM ..."})," and ",(0,t.jsx)(s.code,{children:"SELECT * FROM ... LIMIT ..."}),"  is inconsistent. ",(0,t.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/13585",children:"#13585"})]}),"\n",(0,t.jsxs)(s.li,{children:["External tablet metadata synchronized to FE may overwrite local tablet metadata, which causes data loading from Flink to fail. ",(0,t.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/12579",children:"#12579"})]}),"\n",(0,t.jsxs)(s.li,{children:["BE nodes crash when null filter in Runtime Filter handles literal constants. ",(0,t.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/13526",children:"#13526"})]}),"\n",(0,t.jsxs)(s.li,{children:["An error is returned when you execute CTAS. ",(0,t.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/12388",children:"#12388"})]}),"\n",(0,t.jsxs)(s.li,{children:["The metrics ",(0,t.jsx)(s.code,{children:"ScanRows"})," collected by pipeline engine in audit log may be wrong. ",(0,t.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/12185",children:"#12185"})]}),"\n",(0,t.jsxs)(s.li,{children:["The query result is incorrect when you query compressed  HIVE data. ",(0,t.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/11546",children:"#11546"})]}),"\n",(0,t.jsxs)(s.li,{children:["Queries are timeout and StarRocks responds slowly after a BE node crashes. ",(0,t.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/12955",children:"#12955"})]}),"\n",(0,t.jsxs)(s.li,{children:["The error of Kerberos authentication failure occurs when you use Broker Load to load data. ",(0,t.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/13355",children:"#13355"})]}),"\n",(0,t.jsxs)(s.li,{children:["Too many OR predicates cause statistics estimation to take too long. ",(0,t.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/13086",children:"#13086"})]}),"\n",(0,t.jsxs)(s.li,{children:["BE node crashes if Broker Load loads ORC files (Snappy compression) contain uppercase column names. ",(0,t.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/12724",children:"#12724"})]}),"\n",(0,t.jsxs)(s.li,{children:["An error is returned when unloading or querying Primary Key table takes more than 30 minutes. ",(0,t.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/13403",children:"#13403"})]}),"\n",(0,t.jsxs)(s.li,{children:["The backup task fails when you back up large data volumes to HDFS by using a broker. ",(0,t.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/12836",children:"#12836"})]}),"\n",(0,t.jsxs)(s.li,{children:["The data StarRocks read from Iceberg may be incorrect, which is caused by the ",(0,t.jsx)(s.code,{children:"parquet_late_materialization_enable"})," parameter. ",(0,t.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/13132",children:"#13132"})]}),"\n",(0,t.jsxs)(s.li,{children:["An error ",(0,t.jsx)(s.code,{children:"failed to init view stmt"}),"  is returned when a view is created. ",(0,t.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/13102",children:"#13102"})]}),"\n",(0,t.jsxs)(s.li,{children:["An error is returned when you use JDBC to connect StarRock and execute SQL statements. ",(0,t.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/13526",children:"#13526"})]}),"\n",(0,t.jsxs)(s.li,{children:["The query is timeout because the query involves too many buckets and uses tablet hint. ",(0,t.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/13272",children:"#13272"})]}),"\n",(0,t.jsxs)(s.li,{children:["A BE node crashes and cannot be restarted, and in the meantime, the loading job  into a newly built table reports an error. ",(0,t.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/13701",children:"#13701"})]}),"\n",(0,t.jsxs)(s.li,{children:["All BE nodes crash when a materialized view is created. ",(0,t.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/13184",children:"#13184"})]}),"\n",(0,t.jsxs)(s.li,{children:["When you execute ALTER ROUTINE LOAD to update the offset of consumed partitions, an error ",(0,t.jsx)(s.code,{children:"The specified partition 1 is not in the consumed partitions"}),"may be returned, and followers eventually crash. ",(0,t.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/12227",children:"#12227"})]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"234",children:"2.3.4"}),"\n",(0,t.jsx)(s.p,{children:"Release date: November 10, 2022"}),"\n",(0,t.jsx)(s.h3,{id:"improvements-2",children:"Improvements"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["The error message provides a solution when StarRocks fails to create a Routine Load job because the number of running Routine Load job exceeds the limit. ",(0,t.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/12204",children:"#12204"})]}),"\n",(0,t.jsxs)(s.li,{children:["The query fails when StarRocks queries data from Hive and fails to parse CSV files. ",(0,t.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/13013",children:"#13013"})]}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"bug-fixes-4",children:"Bug Fixes"}),"\n",(0,t.jsx)(s.p,{children:"The following bugs are fixed:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["The query may fail if HDFS files paths contain ",(0,t.jsx)(s.code,{children:"()"}),". ",(0,t.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/12660",children:"#12660"})]}),"\n",(0,t.jsxs)(s.li,{children:["The result of ORDER BY ... LIMIT ... OFFSET is incorrect when the subquery contains LIMIT. ",(0,t.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/issues/9698",children:"#9698"})]}),"\n",(0,t.jsxs)(s.li,{children:["StarRocks is case-insensitive when querying ORC files. ",(0,t.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/12724",children:"#12724"})]}),"\n",(0,t.jsxs)(s.li,{children:["BE may crash when RuntimeFilter is closed without invoking the prepare method. ",(0,t.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/issues/12906",children:"#12906"})]}),"\n",(0,t.jsxs)(s.li,{children:["BE may crash because of memory leak. ",(0,t.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/issues/12906",children:"#12906"})]}),"\n",(0,t.jsxs)(s.li,{children:["The query result may be incorrect after you add a new column and immediately delete data. ",(0,t.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/12907",children:"#12907"})]}),"\n",(0,t.jsxs)(s.li,{children:["BE may crash because of sorting data. ",(0,t.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/11185",children:"#11185"})]}),"\n",(0,t.jsxs)(s.li,{children:["If StarRocks and MySQL client are not on the same LAN, the loading job created by using INSERT INTO SELECT can not be terminated successfully by executing KILL only once. ",(0,t.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/11897",children:"#11879"})]}),"\n",(0,t.jsxs)(s.li,{children:["The metrics ",(0,t.jsx)(s.code,{children:"ScanRows"})," collected by pipeline engine in audit log may be wrong. ",(0,t.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/12185",children:"#12185"})]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"233",children:"2.3.3"}),"\n",(0,t.jsx)(s.p,{children:"Release date: September 27, 2022"}),"\n",(0,t.jsx)(s.h3,{id:"bug-fixes-5",children:"Bug Fixes"}),"\n",(0,t.jsx)(s.p,{children:"The following bugs are fixed:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Query result may be inaccurate when you query an Hive external table stored as a text file. ",(0,t.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/11546",children:"#11546"})]}),"\n",(0,t.jsxs)(s.li,{children:["Nested arrays are not supported when you query Parquet files. ",(0,t.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/10983",children:"#10983"})]}),"\n",(0,t.jsxs)(s.li,{children:["Queries or a query may time out if concurrent queries that read data from StarRocks and external data sources are routed to the same resource group, or a query reads data from StarRocks and external data sources. ",(0,t.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/10983",children:"#10983"})]}),"\n",(0,t.jsxs)(s.li,{children:["When the Pipeline execution engine is enabled by default, the parameter parallel_fragment_exec_instance_num is changed to 1. It will cause data loading by using INSERT INTO to be slow. ",(0,t.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/11462",children:"#11462"})]}),"\n",(0,t.jsxs)(s.li,{children:["BE may crash if there are mistakes when a expression is initialized. ",(0,t.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/11396",children:"#11396"})]}),"\n",(0,t.jsxs)(s.li,{children:["The error heap-buffer-overflow may occur if you execute ORDER BY LIMIT.  ",(0,t.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/11185",children:"#11185"})]}),"\n",(0,t.jsxs)(s.li,{children:["Schema change fails if you restart Leader FE in the meantime. ",(0,t.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/11561",children:"#11561"})]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"232",children:"2.3.2"}),"\n",(0,t.jsx)(s.p,{children:"Release date: September 7, 2022"}),"\n",(0,t.jsx)(s.h3,{id:"new-features",children:"New Features"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Late materialization is supported to accelerate range filter-based queries on external tables in Parquet format. ",(0,t.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/9738",children:"#9738"})]}),"\n",(0,t.jsxs)(s.li,{children:["The SHOW AUTHENTICATION statement is added to display user authentication-related information. ",(0,t.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/9996",children:"#9996"})]}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"improvements-3",children:"Improvements"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["A configuration item is provided to control whether StarRocks recursively traverses all data files for the bucketed Hive table from which StarRocks queries data. ",(0,t.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/10239",children:"#10239"})]}),"\n",(0,t.jsxs)(s.li,{children:["The resource group type ",(0,t.jsx)(s.code,{children:"realtime"})," is renamed as ",(0,t.jsx)(s.code,{children:"short_query"}),". ",(0,t.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/10247",children:"#10247"})]}),"\n",(0,t.jsxs)(s.li,{children:["StarRocks no longer distinguishes between uppercase letters and lowercase letters in Hive external tables by default. ",(0,t.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/10187",children:"#10187"})]}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"bug-fixes-6",children:"Bug Fixes"}),"\n",(0,t.jsx)(s.p,{children:"The following bugs are fixed:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Queries on an Elasticsearch external table may unexpectedly exit when the table is divided into multiple shards. ",(0,t.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/10369",children:"#10369"})]}),"\n",(0,t.jsxs)(s.li,{children:["StarRocks throws errors when sub-queries are rewritten as common table expressions (CTEs). ",(0,t.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/10397",children:"#10397"})]}),"\n",(0,t.jsxs)(s.li,{children:["StarRocks throws errors when a large amount of data is loaded. ",(0,t.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/issues/10370",children:"#10370"})," ",(0,t.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/issues/10380",children:"#10380"})]}),"\n",(0,t.jsxs)(s.li,{children:["When the same Thrift service IP address is configured for multiple catalogs, deleting one catalog invalidates the incremental metadata updates in the other catalogs. ",(0,t.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/10511",children:"#10511"})]}),"\n",(0,t.jsxs)(s.li,{children:["The statistics of memory consumption from BEs are inaccurate. ",(0,t.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/9837",children:"#9837"})]}),"\n",(0,t.jsxs)(s.li,{children:["StarRocks throws errors for queries on Primary Key tables. ",(0,t.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/10811",children:"#10811"})]}),"\n",(0,t.jsxs)(s.li,{children:["Queries on logical views are not allowed even when you have SELECT permissions on these views. ",(0,t.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/10563",children:"#10563"})]}),"\n",(0,t.jsxs)(s.li,{children:["StarRocks does not impose limits on the naming of logical views. Now logical views need to follow the same naming conventions as tables. ",(0,t.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/10558",children:"#10558"})]}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"behavior-change",children:"Behavior Change"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Add BE configuration ",(0,t.jsx)(s.code,{children:"max_length_for_bitmap_function"})," with a default value 1000000 for bitmap function, and add ",(0,t.jsx)(s.code,{children:"max_length_for_to_base64"})," with a default value 200000 for base64 to prevent crash. ",(0,t.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/10851",children:"#10851"})]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"231",children:"2.3.1"}),"\n",(0,t.jsx)(s.p,{children:"Release date: August 22, 2022"}),"\n",(0,t.jsx)(s.h3,{id:"improvements-4",children:"Improvements"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Broker Load supports transforming the List type in Parquet files into non-nested ARRAY data type. ",(0,t.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/9150",children:"#9150"})]}),"\n",(0,t.jsxs)(s.li,{children:["Optimized the performance of JSON-related functions (json_query, get_json_string, and get_json_int). ",(0,t.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/9623",children:"#9623"})]}),"\n",(0,t.jsxs)(s.li,{children:["Optimized the error message: During a query on Hive, Iceberg, or Hudi, if the data type of the column to query is not supported by StarRocks, the system throws an exception on the column. ",(0,t.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/10139",children:"#10139"})]}),"\n",(0,t.jsxs)(s.li,{children:["Reduced the scheduling latency of resource groups to optimize resource isolation performance. ",(0,t.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/10122",children:"#10122"})]}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"bug-fixes-7",children:"Bug Fixes"}),"\n",(0,t.jsx)(s.p,{children:"The following bugs are fixed:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Wrong result is returned from the query on Elasticsearch external tables due to incorrect pushdown of the ",(0,t.jsx)(s.code,{children:"limit"})," operator. ",(0,t.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/9952",children:"#9952"})]}),"\n",(0,t.jsxs)(s.li,{children:["Query on Oracle external tables fails when the ",(0,t.jsx)(s.code,{children:"limit"})," operator is used. ",(0,t.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/9542",children:"#9542"})]}),"\n",(0,t.jsxs)(s.li,{children:["BE is blocked when all Kafka Brokers are stopped during a Routine Load. ",(0,t.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/9935",children:"#9935"})]}),"\n",(0,t.jsxs)(s.li,{children:["BE crashes during a query on a Parquet file whose data type mismatches that of the corresponding external table. ",(0,t.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/10107",children:"#10107"})]}),"\n",(0,t.jsxs)(s.li,{children:["Query times out because the scan range of external tables is empty. ",(0,t.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/10091",children:"#10091"})]}),"\n",(0,t.jsxs)(s.li,{children:["The system throws an exception when the ORDER BY clause is included in a sub-query. ",(0,t.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/10180",children:"#10180"})]}),"\n",(0,t.jsxs)(s.li,{children:["Hive Metastore hangs when Hive metadata is reloaded asynchronously. ",(0,t.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/10132",children:"#10132"})]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"230",children:"2.3.0"}),"\n",(0,t.jsx)(s.p,{children:"Release date: July 29, 2022"}),"\n",(0,t.jsx)(s.h3,{id:"new-features-1",children:"New Features"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["The Primary Key table supports complete DELETE WHERE syntax. For more information, see ",(0,t.jsx)(s.a,{href:"/docusaurusv3/docs/3.0/sql-reference/sql-statements/data-manipulation/DELETE#delete-data-by-primary-key",children:"DELETE"}),"."]}),"\n",(0,t.jsxs)(s.li,{children:["The Primary Key table supports persistent primary key indexes. You can choose to persist the primary key index on disk rather than in memory, significantly reducing memory usage. For more information, see ",(0,t.jsx)(s.a,{href:"/docusaurusv3/docs/3.0/table_design/table_types/primary_key_table",children:"Primary Key table"}),"."]}),"\n",(0,t.jsx)(s.li,{children:"Global dictionary can be updated during real-time data ingestion\uff0coptimizing query performance and delivering 2X query performance for string data."}),"\n",(0,t.jsxs)(s.li,{children:["The CREATE TABLE AS SELECT statement can be executed asynchronously. For more information, see ",(0,t.jsx)(s.a,{href:"/docusaurusv3/docs/3.0/sql-reference/sql-statements/data-definition/CREATE%20TABLE%20AS%20SELECT",children:"CREATE TABLE AS SELECT"}),"."]}),"\n",(0,t.jsxs)(s.li,{children:["Support the following resource group-related features:","\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Monitor resource groups: You can view the resource group of the query in the audit log and obtain the metrics of the resource group by calling APIs. For more information, see ",(0,t.jsx)(s.a,{href:"/docusaurusv3/docs/3.0/administration/Monitor_and_Alert#monitor-and-alerting",children:"Monitor and Alerting"}),"."]}),"\n",(0,t.jsxs)(s.li,{children:["Limit the consumption of large queries on CPU, memory, and I/O resources: You can route queries to specific resource groups based on the classifiers or by configuring session variables. For more information, see ",(0,t.jsx)(s.a,{href:"/docusaurusv3/docs/3.0/administration/resource_group",children:"Resource group"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["JDBC external tables can be used to conveniently query data in Oracle, PostgreSQL, MySQL, SQLServer, ClickHouse, and other databases. StarRocks also supports predicate pushdown, improving query performance. For more information, see ",(0,t.jsx)(s.a,{href:"/docusaurusv3/docs/3.0/data_source/External_table#external-table-for-a-JDBC-compatible-database",children:"External table for a JDBC-compatible database"}),"."]}),"\n",(0,t.jsxs)(s.li,{children:["[Preview] A new Data Source Connector framework is released to support external catalogs. You can use external catalogs to directly access and query Hive data without creating external tables. For more information, see ",(0,t.jsx)(s.a,{href:"/docusaurusv3/docs/3.0/data_source/catalog/query_external_data",children:"Use catalogs to manage internal and external data"}),"."]}),"\n",(0,t.jsxs)(s.li,{children:["Added the following functions:","\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"/docusaurusv3/docs/3.0/sql-reference/sql-functions/aggregate-functions/window_funnel",children:"window_funnel"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"/docusaurusv3/docs/3.0/sql-reference/sql-functions/Window_function",children:"ntile"})}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"/docusaurusv3/docs/3.0/sql-reference/sql-functions/bitmap-functions/bitmap_union_count",children:"bitmap_union_count"}),", ",(0,t.jsx)(s.a,{href:"/docusaurusv3/docs/3.0/sql-reference/sql-functions/bitmap-functions/base64_to_bitmap",children:"base64_to_bitmap"}),", ",(0,t.jsx)(s.a,{href:"/docusaurusv3/docs/3.0/sql-reference/sql-functions/array-functions/array_to_bitmap",children:"array_to_bitmap"})]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"/docusaurusv3/docs/3.0/sql-reference/sql-functions/date-time-functions/week",children:"week"}),", ",(0,t.jsx)(s.a,{href:"/docusaurusv3/docs/3.0/sql-reference/sql-functions/date-time-functions/time_slice",children:"time_slice"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"improvements-5",children:"Improvements"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"The compaction mechanism can merge large volume of metadata more quickly. This prevents metadata squeezing and excessive disk usage that can occur shortly after frequent data updates."}),"\n",(0,t.jsx)(s.li,{children:"Optimized the performance of loading Parquet files and compressed files."}),"\n",(0,t.jsx)(s.li,{children:"Optimized the mechanism of creating materialized views. After the optimization, materialized views can be created at a speed up to 10 times faster than before."}),"\n",(0,t.jsxs)(s.li,{children:["Optimized the performance of the following operators:","\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"TopN and sort operators"}),"\n",(0,t.jsx)(s.li,{children:"Equivalence comparison operators that contain functions can use Zone Map indexes when these operators are pushed down to scan operators."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["Optimized Apache Hive\u2122 external tables.","\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["When Apache Hive\u2122 tables are stored in Parquet, ORC, or CSV format, schema changes caused by ADD COLUMN or REPLACE COLUMN on Hive can be synchronized to StarRocks when you execute the REFRESH statement on the corresponding Hive external table. For more information, see ",(0,t.jsx)(s.a,{href:"/docusaurusv3/docs/3.0/data_source/External_table#hive-external-table",children:"Hive external table"}),"."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"hive.metastore.uris"})," can be modified for Hive resources. For more information, see ",(0,t.jsx)(s.a,{href:"/docusaurusv3/docs/3.0/sql-reference/sql-statements/data-definition/ALTER%20RESOURCE",children:"ALTER RESOURCE"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["Optimized the performance of Apache Iceberg external tables. A custom catalog can be used to create an Iceberg resource. For more information, see ",(0,t.jsx)(s.a,{href:"/docusaurusv3/docs/3.0/data_source/External_table#apache-iceberg-external-table",children:"Apache Iceberg external table"}),"."]}),"\n",(0,t.jsxs)(s.li,{children:["Optimized the performance of Elasticsearch external tables. Sniffing the addresses of the data nodes in an Elasticsearch cluster can be disabled. For more information, see ",(0,t.jsx)(s.a,{href:"/docusaurusv3/docs/3.0/data_source/External_table#elasticsearch-external-table",children:"Elasticsearch external table"}),"."]}),"\n",(0,t.jsx)(s.li,{children:"When the sum() function accepts a numeric string, it implicitly converts the numeric string."}),"\n",(0,t.jsx)(s.li,{children:"The year(), month(), and day() functions support the DATE data type."}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"bug-fixes-8",children:"Bug Fixes"}),"\n",(0,t.jsx)(s.p,{children:"Fixed the following bugs:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"CPU utilization surges due to an excessive number of tablets."}),"\n",(0,t.jsx)(s.li,{children:'Issues that cause "fail to prepare tablet reader" to occur.'}),"\n",(0,t.jsxs)(s.li,{children:["The FEs fail to restart.",(0,t.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/issues/5642",children:"#5642"}),"  ",(0,t.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/issues/4969",children:"#4969"}),"  ",(0,t.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/issues/5580",children:"#5580"})]}),"\n",(0,t.jsxs)(s.li,{children:["The CTAS statement cannot be run successfully when the statement includes a JSON function. ",(0,t.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/issues/6498",children:"#6498"})]}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"others",children:"Others"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["StarGo, a cluster management tool, can deploy, start, upgrade, and roll back clusters and manage multiple clusters. For more information, see ",(0,t.jsx)(s.a,{href:"/docusaurusv3/docs/3.0/administration/stargo",children:"Deploy StarRocks with StarGo"}),"."]}),"\n",(0,t.jsxs)(s.li,{children:["The pipeline engine is enabled by default when you upgrade StarRocks to version 2.3 or deploy StarRocks. The pipeline engine can improve the performance of simple queries in high concurrency scenarios and complex queries. If you detect significant performance regressions when using StarRocks 2.3, you can disable the pipeline engine by executing the ",(0,t.jsx)(s.code,{children:"SET GLOBAL"})," statement to set ",(0,t.jsx)(s.code,{children:"enable_pipeline_engine"})," to ",(0,t.jsx)(s.code,{children:"false"}),"."]}),"\n",(0,t.jsxs)(s.li,{children:["The ",(0,t.jsx)(s.a,{href:"/docusaurusv3/docs/3.0/sql-reference/sql-statements/account-management/SHOW%20GRANTS",children:"SHOW GRANTS"})," statement is compatible with the MySQL syntax and displays the privileges assigned to a user in the form of GRANT statements."]}),"\n",(0,t.jsx)(s.li,{children:"It is recommended that the memory_limitation_per_thread_for_schema_change ( BE configuration item)  use the default value 2 GB, and data is written to disk when data volume exceeds this limit. Therefore, if you have previously set this parameter to a larger value, it is recommended that you set it to 2 GB, otherwise a schema change task may take up a large amount of memory."}),"\n"]})]})}const d=function(e={}){const{wrapper:s}=Object.assign({},(0,n.ah)(),e.components);return s?(0,t.jsx)(s,Object.assign({},e,{children:(0,t.jsx)(h,e)})):h(e)}},11151:(e,s,r)=>{r.d(s,{Zo:()=>o,ah:()=>i});var t=r(67294);const n=t.createContext({});function i(e){const s=t.useContext(n);return t.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const a={};function o({components:e,children:s,disableParentContext:r}){let o;return o=r?"function"==typeof e?e({}):e||a:i(e),t.createElement(n.Provider,{value:o},s)}}}]);