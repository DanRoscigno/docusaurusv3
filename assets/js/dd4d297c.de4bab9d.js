"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[84315],{19101:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var i=t(85893),o=t(11151);const a={},s="Colocate Join",l={id:"using_starrocks/Colocate_join",title:"Colocate Join",description:"For shuffle join and broadcast join, if the join condition is met, the data rows of the two joining tables are merged into a single node to complete the join. Neither of these two join methods can avoid latency or overhead caused by data network transmission between nodes.",source:"@site/versioned_docs/version-3.0/using_starrocks/Colocate_join.md",sourceDirName:"using_starrocks",slug:"/using_starrocks/Colocate_join",permalink:"/docs/3.0/using_starrocks/Colocate_join",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/using_starrocks/Colocate_join.md",tags:[],version:"3.0",frontMatter:{},sidebar:"documentation",previous:{title:"Bloom filter indexing",permalink:"/docs/3.0/using_starrocks/Bloomfilter_index"},next:{title:"Gather statistics for CBO",permalink:"/docs/3.0/using_starrocks/Cost_based_optimizer"}},r={},c=[{value:"Terminology",id:"terminology",level:2},{value:"Principle",id:"principle",level:2},{value:"Usage",id:"usage",level:2},{value:"Table creation",id:"table-creation",level:3},{value:"Delete",id:"delete",level:3},{value:"View group information",id:"view-group-information",level:3},{value:"Modifying Table Group Properties",id:"modifying-table-group-properties",level:3},{value:"Other related operations",id:"other-related-operations",level:3},{value:"Colocation replica balancing and repair",id:"colocation-replica-balancing-and-repair",level:2},{value:"Replica repair",id:"replica-repair",level:3},{value:"Replica balancing",id:"replica-balancing",level:3},{value:"Query",id:"query",level:2},{value:"Advanced operations",id:"advanced-operations",level:2},{value:"FE configuration items",id:"fe-configuration-items",level:3},{value:"HTTP Restful API",id:"http-restful-api",level:3}];function d(e){const n=Object.assign({h1:"h1",p:"p",h2:"h2",ul:"ul",li:"li",strong:"strong",code:"code",ol:"ol",h3:"h3",blockquote:"blockquote",pre:"pre"},(0,o.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"colocate-join",children:"Colocate Join"}),"\n",(0,i.jsx)(n.p,{children:"For shuffle join and broadcast join, if the join condition is met, the data rows of the two joining tables are merged into a single node to complete the join. Neither of these two join methods can avoid latency or overhead caused by data network transmission between nodes."}),"\n",(0,i.jsx)(n.p,{children:"The core idea is to keep bucketing key, number of copies, and copy placement consistent for tables in the same Colocation Group. If the join column is a bucketing key, the computing node only needs to do local join without getting data from other nodes. Colocate Join supports equi joins."}),"\n",(0,i.jsx)(n.p,{children:"This document introduces the principle, implementation, usage, and considerations of Colocate Join."}),"\n",(0,i.jsx)(n.h2,{id:"terminology",children:"Terminology"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Colocation Group (CG)"}),": A CG will contain one or more Tables. The Tables within a CG have the same bucketing and replica placement, and are described using the Colocation Group Schema."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Colocation Group Schema (CGS)"}),": A CGS contains the bucketing key, number of buckets, and number of replicas of a CG."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"principle",children:"Principle"}),"\n",(0,i.jsx)(n.p,{children:"Colocate Join is to form a CG with a set of Tables having the same CGS, and ensure that the corresponding bucket copies of these Tables will fall on the same set of BE nodes. When the tables in the CG perform Join operations on the bucketed columns, the local data can be joined directly, saving time from transferring data between nodes."}),"\n",(0,i.jsxs)(n.p,{children:["Bucket Seq is obtained by ",(0,i.jsx)(n.code,{children:"hash(key) mod buckets"}),". Suppose a Table has 8 buckets, then there are [0, 1, 2, 3, 4, 5, 6, 7] 8 buckets, and each Bucket has one or more sub-tables, the number of sub-tables depends on the number of partitions. If it is a multi-partitioned table, there will be multiple tablets."]}),"\n",(0,i.jsx)(n.p,{children:"In order to have the same data distribution, tables within the same CG must comply with the following."}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Tables within the same CG must have the identical  bucketing key (type, number, order) and the same number of buckets so that the data slices of multiple tables can be distributed and controlled one by one. The bucketing key is the columns specified in the table creation statement ",(0,i.jsx)(n.code,{children:"DISTRIBUTED BY HASH(col1, col2, ...)"}),". The bucketing key determines which columns of data are Hashed into different Bucket Seqs. The name of the bucketing key can vary for tables within the same CG.The bucketing columns can be different in the creation statement, but the order of the corresponding data types in ",(0,i.jsx)(n.code,{children:"DISTRIBUTED BY HASH(col1, col2, ...)"})," should be exactly the same ."]}),"\n",(0,i.jsx)(n.li,{children:"Tables within the same CG must have the same number of partition copies. If not, it may happen that a tablet copy has no corresponding copy in the partition of  the same BE."}),"\n",(0,i.jsx)(n.li,{children:"Tables within the same CG may have different numbers of partitions and different partition keys."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["When creating a table, the CG is specified by the attribute ",(0,i.jsx)(n.code,{children:'"colocate_with" = "group_name"'})," in the table PROPERTIES. If the CG does not exist, it means the table is the first table of the CG and called Parent Table. The data distribution of the Parent Table (type, number and order of split bucket keys, number of copies and number of split buckets) determines the CGS. If the CG exists, check whether the data distribution of the table is consistent with the CGS."]}),"\n",(0,i.jsx)(n.p,{children:"The copy placement of tables within the same CG satisfies:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"The mapping between the Bucket Seq and BE nodes of all the Tables is the same as that of the Parent Table."}),"\n",(0,i.jsx)(n.li,{children:"The mapping between the Bucket Seq and BE nodes of all the Partitions in the Parent Table is the same as that of the first Partition."}),"\n",(0,i.jsx)(n.li,{children:"The mapping between the Bucket Seq and BE nodes of the first Partition of the Parent Table is determined using the native Round Robin algorithm."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The consistent data distribution and mapping guarantee that the data rows with the same value taken by bucketing key fall on the same BE. Therefore, when using the bucketing key to  join columns, only local joins are required."}),"\n",(0,i.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,i.jsx)(n.h3,{id:"table-creation",children:"Table creation"}),"\n",(0,i.jsxs)(n.p,{children:["When creating a table, you can specify the attribute ",(0,i.jsx)(n.code,{children:'"colocate_with" = "group_name"'})," in PROPERTIES to indicate that the table is a Colocate Join table and belongs to a specified Colocation Group."]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"NOTE"})}),"\n",(0,i.jsxs)(n.p,{children:["From version 2.5.4, Colocate Join can be performed on tables from different databases. You only need to specify the same ",(0,i.jsx)(n.code,{children:"colocate_with"})," property when you create tables."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"For example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-SQL",children:'CREATE TABLE tbl (k1 int, v1 int sum)\nDISTRIBUTED BY HASH(k1)\nBUCKETS 8\nPROPERTIES(\n    "colocate_with" = "group1"\n);\n'})}),"\n",(0,i.jsx)(n.p,{children:"If the specified Group does not exist, StarRocks automatically creates a Group that only contains the current table. If the Group exists, StarRocks checks to see if the current table meets the Colocation Group Schema. If so, it creates the table and adds it to the Group. At the same time, the table creates a partition and a tablet based on the data distribution rules of the existing Group."}),"\n",(0,i.jsxs)(n.p,{children:["A Colocation Group belongs to a database. The name of a Colocation Group is unique within a database. In the internal storage, the full name of the Colocation Group is ",(0,i.jsx)(n.code,{children:"dbId_groupName"}),", but you only perceive ",(0,i.jsx)(n.code,{children:"groupName"}),"."]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"NOTE"})}),"\n",(0,i.jsxs)(n.p,{children:["If you specify the same Colocation Group to associate tables from different databases for Colocate Join, the Colocation Group exists in each of these databases. You can run ",(0,i.jsx)(n.code,{children:'show proc "/colocation_group"'})," to check the Colocation Groups in different databases."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"delete",children:"Delete"}),"\n",(0,i.jsxs)(n.p,{children:["A complete deletion is a deletion from the Recycle Bin. Normally, after a table is deleted with the ",(0,i.jsx)(n.code,{children:"DROP TABLE"})," command, by default it will stay in the recycle bin for a day before being deleted). When the last table in a Group is completely deleted, the Group will also be deleted automatically."]}),"\n",(0,i.jsx)(n.h3,{id:"view-group-information",children:"View group information"}),"\n",(0,i.jsx)(n.p,{children:"The following command allows you to view the Group information that already exists in the cluster."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"SHOW PROC '/colocation_group';\n\n+-------------+--------------+--------------+------------+----------------+----------+----------+\n| GroupId     | GroupName    | TableIds     | BucketsNum | ReplicationNum | DistCols | IsStable |\n+-------------+--------------+--------------+------------+----------------+----------+----------+\n| 10005.10008 | 10005_group1 | 10007, 10040 | 10         | 3              | int(11)  | true     |\n+-------------+--------------+--------------+------------+----------------+----------+----------+\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"GroupId"}),": The cluster-wide unique identifier of a Group, with the first half being the db id and the second half being the group id."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"GroupName"}),": The full name of the Group."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"TabletIds"}),": The list of ids of the Tables  in the Group."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"BucketsNum"}),": The number of buckets."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"ReplicationNum"}),": The number of replicas."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"DistCols"}),": Distribution columns, i.e. bucketing column type."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"IsStable"}),": Whether the Group is stable (for the definition of stability, see the section of Colocation Replica Balancing and Repair)."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"You can further view the data distribution of a Group with the following command."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"SHOW PROC '/colocation_group/10005.10008';\n\n+-------------+---------------------+\n| BucketIndex | BackendIds          |\n+-------------+---------------------+\n| 0           | 10004, 10002, 10001 |\n| 1           | 10003, 10002, 10004 |\n| 2           | 10002, 10004, 10001 |\n| 3           | 10003, 10002, 10004 |\n| 4           | 10002, 10004, 10003 |\n| 5           | 10003, 10002, 10001 |\n| 6           | 10003, 10004, 10001 |\n| 7           | 10003, 10004, 10002 |\n+-------------+---------------------+\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"BucketIndex"}),": Subscript of the sequence of buckets."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"BackendIds"}),": The ids of BE nodes where the bucketing data slices t are located."]}),"\n"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Note: The above command requires AMDIN privilege. Regular users cannot access it."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"modifying-table-group-properties",children:"Modifying Table Group Properties"}),"\n",(0,i.jsx)(n.p,{children:"You can modify the Colocation Group properties of a table. For example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-SQL",children:'ALTER TABLE tbl SET ("colocate_with" = "group2");\n'})}),"\n",(0,i.jsx)(n.p,{children:"If the table has not been assigned to a Group before, the command will check the Schema and add the table to the Group (the Group will be created first if it does not exist). If the table has been previously assigned to another Group, the command will remove the table from the original Group and add it to the new Group (the Group will be created first if it does not exist)."}),"\n",(0,i.jsx)(n.p,{children:"You can also remove the Colocation properties of a table with the following command."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-SQL",children:'ALTER TABLE tbl SET ("colocate_with" = "");\n'})}),"\n",(0,i.jsx)(n.h3,{id:"other-related-operations",children:"Other related operations"}),"\n",(0,i.jsxs)(n.p,{children:["When adding a partition using ",(0,i.jsx)(n.code,{children:"ADD PARTITION"})," or modifying the number of copies to a table with the Colocation attribute, StarRocks checks if the operation will violate the Colocation Group Schema and rejects it if it does."]}),"\n",(0,i.jsx)(n.h2,{id:"colocation-replica-balancing-and-repair",children:"Colocation replica balancing and repair"}),"\n",(0,i.jsx)(n.p,{children:"The replicas distribution of a Colocation table needs to follow the distribution rules specified in the Group schema, so it differs from normal sharding in terms of replica repair and balancing."}),"\n",(0,i.jsxs)(n.p,{children:["The Group itself has a ",(0,i.jsx)(n.code,{children:"stable"})," property. When ",(0,i.jsx)(n.code,{children:"stable"})," is ",(0,i.jsx)(n.code,{children:"true"}),", it means that no changes are being made to table slices in the Group and the Colocation feature is working properly. When ",(0,i.jsx)(n.code,{children:"stable"})," is ",(0,i.jsx)(n.code,{children:"false"}),", it means that some table slices in the current Group are being repaired or migrated, and the Colocate Join of the affected tables will degrade to a normal Join."]}),"\n",(0,i.jsx)(n.h3,{id:"replica-repair",children:"Replica repair"}),"\n",(0,i.jsxs)(n.p,{children:["Replicas can only be stored on the specified BE node. StarRocks will look for the least loaded BE to replace an unavailable BE (e.g.,down, decommission),. After the replacement, all the bucketing data slices on the old BE are repaired. During migration, the Group is marked as ",(0,i.jsx)(n.strong,{children:"Unstable"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"replica-balancing",children:"Replica balancing"}),"\n",(0,i.jsxs)(n.p,{children:["StarRocks tries to distribute the Colocation table slices evenly across all BE nodes. Balancing for normal tables is at the  replica level, that is, each replica individually finds a lower-load BE node. Balancing for Colocation tables is at the Bucket level, that is, all replicas within a Bucket are migrated together. We use a simple balancing algorithm that distributes ",(0,i.jsx)(n.code,{children:"BucketsSequnce"})," evenly across all BE nodes without considering the actual size of the replicas but only the number of replicas. The exact algorithm can be found in the code comments in ",(0,i.jsx)(n.code,{children:"ColocateTableBalancer.java"}),"."]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Note 1: The current Colocation replica balancing and repair algorithm may not work well for StarRocks clusters with heterogeneous deployment. The so-called heterogeneous deployment means that the disk capacity, number of disk, and disk type (SSD and HDD) of BE nodes are not consistent. In the case of heterogeneous deployment, it may happen that a small-capacity BE node stores the same number of replicas as a large-capacity BE node."}),"\n",(0,i.jsxs)(n.p,{children:["Note 2: When a Group is in the Unstable state, the Join of its tables will degrade to a normal Join, which may significantly degrade the query performance of the cluster. If you do not want the system to be automatically balanced, set the FE configuration ",(0,i.jsx)(n.code,{children:"disable_colocate_balance"})," to disable automatic balancing and  enable it back at the appropriate time. (See the section Advanced Operations (#Advanced Operations) for details)"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"query",children:"Query"}),"\n",(0,i.jsx)(n.p,{children:"The Colocation table is queried in the same way as a normal table. If the Group where the Colocation table is located is in Unstable state, it will automatically degrade to a normal Join, as illustrated by the following example."}),"\n",(0,i.jsx)(n.p,{children:"Table 1:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-SQL",children:'CREATE TABLE `tbl1` (\n    `k1` date NOT NULL COMMENT "",\n    `k2` int(11) NOT NULL COMMENT "",\n    `v1` int(11) SUM NOT NULL COMMENT ""\n) ENGINE=OLAP\nAGGREGATE KEY(`k1`, `k2`)\nPARTITION BY RANGE(`k1`)\n(\n    PARTITION p1 VALUES LESS THAN (\'2019-05-31\'),\n    PARTITION p2 VALUES LESS THAN (\'2019-06-30\')\n)\nDISTRIBUTED BY HASH(`k2`)\nPROPERTIES (\n    "colocate_with" = "group1"\n);\n'})}),"\n",(0,i.jsx)(n.p,{children:"Table 2:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-SQL",children:'CREATE TABLE `tbl2` (\n    `k1` datetime NOT NULL COMMENT "",\n    `k2` int(11) NOT NULL COMMENT "",\n    `v1` double SUM NOT NULL COMMENT ""\n) ENGINE=OLAP\nAGGREGATE KEY(`k1`, `k2`)\nDISTRIBUTED BY HASH(`k2`)\nPROPERTIES (\n    "colocate_with" = "group1"\n);\n'})}),"\n",(0,i.jsx)(n.p,{children:"View query plan:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"DESC SELECT * FROM tbl1 INNER JOIN tbl2 ON (tbl1.k2 = tbl2.k2);\n\n+----------------------------------------------------+\n| Explain String                                     |\n+----------------------------------------------------+\n| PLAN FRAGMENT 0                                    |\n|  OUTPUT EXPRS:`tbl1`.`k1` |                        |\n|   PARTITION: RANDOM                                |\n|                                                    |\n|   RESULT SINK                                      |\n|                                                    |\n|   2:HASH JOIN                                      |\n|   |  join op: INNER JOIN                           |\n|   |  hash predicates:                              |\n|   |  colocate: true                                |\n|   |    `tbl1`.`k2` = `tbl2`.`k2`                   |\n|   |  tuple ids: 0 1                                |\n|   |                                                |\n|   |----1:OlapScanNode                              |\n|   |       TABLE: tbl2                              |\n|   |       PREAGGREGATION: OFF. Reason: null        |\n|   |       partitions=0/1                           |\n|   |       rollup: null                             |\n|   |       buckets=0/0                              |\n|   |       cardinality=-1                           |\n|   |       avgRowSize=0.0                           |\n|   |       numNodes=0                               |\n|   |       tuple ids: 1                             |\n|   |                                                |\n|   0:OlapScanNode                                   |\n|      TABLE: tbl1                                   |\n|      PREAGGREGATION: OFF. Reason: No AggregateInfo |\n|      partitions=0/2                                |\n|      rollup: null                                  |\n|      buckets=0/0                                   |\n|      cardinality=-1                                |\n|      avgRowSize=0.0                                |\n|      numNodes=0                                    |\n|      tuple ids: 0                                  |\n+----------------------------------------------------+\n"})}),"\n",(0,i.jsxs)(n.p,{children:["If a Colocate Join takes effect, the Hash Join node displays ",(0,i.jsx)(n.code,{children:"colocate: true"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"If it doesn\u2019t take effect, the query plan is as follows:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"+----------------------------------------------------+\n| Explain String                                     |\n+----------------------------------------------------+\n| PLAN FRAGMENT 0                                    |\n|  OUTPUT EXPRS:`tbl1`.`k1` |                        |\n|   PARTITION: RANDOM                                |\n|                                                    |\n|   RESULT SINK                                      |\n|                                                    |\n|   2:HASH JOIN                                      |\n|   |  join op: INNER JOIN (BROADCAST)               |\n|   |  hash predicates:                              |\n|   |  colocate: false, reason: group is not stable  |\n|   |    `tbl1`.`k2` = `tbl2`.`k2`                   |\n|   |  tuple ids: 0 1                                |\n|   |                                                |\n|   |----3:EXCHANGE                                  |\n|   |       tuple ids: 1                             |\n|   |                                                |\n|   0:OlapScanNode                                   |\n|      TABLE: tbl1                                   |\n|      PREAGGREGATION: OFF. Reason: No AggregateInfo |\n|      partitions=0/2                                |\n|      rollup: null                                  |\n|      buckets=0/0                                   |\n|      cardinality=-1                                |\n|      avgRowSize=0.0                                |\n|      numNodes=0                                    |\n|      tuple ids: 0                                  |\n|                                                    |\n| PLAN FRAGMENT 1                                    |\n|  OUTPUT EXPRS:                                     |\n|   PARTITION: RANDOM                                |\n|                                                    |\n|   STREAM DATA SINK                                 |\n|     EXCHANGE ID: 03                                |\n|     UNPARTITIONED                                  |\n|                                                    |\n|   1:OlapScanNode                                   |\n|      TABLE: tbl2                                   |\n|      PREAGGREGATION: OFF. Reason: null             |\n|      partitions=0/1                                |\n|      rollup: null                                  |\n|      buckets=0/0                                   |\n|      cardinality=-1                                |\n|      avgRowSize=0.0                                |\n|      numNodes=0                                    |\n|      tuple ids: 1                                  |\n+----------------------------------------------------+\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The HASH JOIN node will show the corresponding reason: ",(0,i.jsx)(n.code,{children:"colocate: false, reason: group is not stable"}),". An EXCHANGE node will be generated at the same time."]}),"\n",(0,i.jsx)(n.h2,{id:"advanced-operations",children:"Advanced operations"}),"\n",(0,i.jsx)(n.h3,{id:"fe-configuration-items",children:"FE configuration items"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"disable_colocate_relocate"})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Whether to disable automatic Colocation replica repair for StarRocks. The default is false, which means it is turned on. This parameter only affects replica repair for Colocation tables, not for normal tables."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"disable_colocate_balance"})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Whether to disable automatic Colocation replica balancing for StarRocks. The default is false, which means it is turned on. This parameter only affects the replica balancing of Colocation tables, not for normal tables."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"disable_colocate_join"})}),"\n",(0,i.jsx)(n.p,{children:"You can disable Colocate join at session granularity by changing this variable."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"disable_colocate_join"})}),"\n",(0,i.jsx)(n.p,{children:"The Colocate join function can be disabled by changing this variable."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"http-restful-api",children:"HTTP Restful API"}),"\n",(0,i.jsx)(n.p,{children:"StarRocks provides several HTTP Restful APIs related to Colocate Join for viewing and modifying Colocation Groups."}),"\n",(0,i.jsxs)(n.p,{children:["This API is implemented on the FE and can be accessed using ",(0,i.jsx)(n.code,{children:"fe_host:fe_http_port"})," with ADMIN permissions."]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"View all Colocation information of a cluster"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"curl --location-trusted -u<username>:<password> 'http://<fe_host>:<fe_http_port>/api/colocate'  \n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-JSON",children:'// Returns the internal Colocation information in Json format.\n{\n    "colocate_meta": {\n        "groupName2Id": {\n            "g1": {\n                "dbId": 10005,\n                "grpId": 10008\n            }\n        },\n        "group2Tables": {},\n        "table2Group": {\n            "10007": {\n                "dbId": 10005,\n                "grpId": 10008\n            },\n            "10040": {\n                "dbId": 10005,\n                "grpId": 10008\n            }\n        },\n        "group2Schema": {\n            "10005.10008": {\n                "groupId": {\n                    "dbId": 10005,\n                    "grpId": 10008\n                },\n                "distributionColTypes": [{\n                    "type": "INT",\n                    "len": -1,\n                    "isAssignedStrLenInColDefinition": false,\n                    "precision": 0,\n                    "scale": 0\n                }],\n                "bucketsNum": 10,\n                "replicationNum": 2\n            }\n        },\n        "group2BackendsPerBucketSeq": {\n            "10005.10008": [\n                [10004, 10002],\n                [10003, 10002],\n                [10002, 10004],\n                [10003, 10002],\n                [10002, 10004],\n                [10003, 10002],\n                [10003, 10004],\n                [10003, 10004],\n                [10003, 10004],\n                [10002, 10004]\n            ]\n        },\n        "unstableGroups": []\n    },\n    "status": "OK"\n}\n'})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Mark the Group as Stable or Unstable"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"# Mark as Stable\ncurl -XPOST --location-trusted -u<username>:<password> \u200b'http://<fe_host>:<fe_http_port>/api/colocate/group_stable?db_id=<dbId>&group_id=<grpId>\u200b'\n# Mark as Unstable\ncurl -XPOST --location-trusted -u<username>:<password> \u200b'http://<fe_host>:<fe_http_port>/api/colocate/group_unstable?db_id=<dbId>&group_id=<grpId>\u200b'\n"})}),"\n",(0,i.jsxs)(n.p,{children:["If the returned result is ",(0,i.jsx)(n.code,{children:"200"}),", the Group is successfully marked as Stable or Unstable."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Set the data distribution of a Group"}),"\n",(0,i.jsx)(n.p,{children:"This interface allows you to force the number distribution of a Group."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"POST /api/colocate/bucketseq?db_id=10005&group_id= 10008"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"Body:"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"[[10004,10002],[10003,10002],[10002,10004],[10003,10002],[10002,10004],[10003,10002],[10003,10004],[10003,10004],[10003,10004],[10002,10004]]"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"returns: 200"})}),"\n",(0,i.jsxs)(n.p,{children:["Where ",(0,i.jsx)(n.code,{children:"Body"})," is ",(0,i.jsx)(n.code,{children:"BucketsSequence"})," represented as a nested array and the ids of the BEs in which bucketing slices are located."]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["Note that to use this command, you may need to set the FE configuration ",(0,i.jsx)(n.code,{children:"disable_colocate_relocate"})," and ",(0,i.jsx)(n.code,{children:"disable_colocate_balance"})," to true, that is, to disable the system to perform automatic Colocation replica repair and balancing. Otherwise, it may be automatically reset by the system after modification."]}),"\n"]}),"\n"]}),"\n"]})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,o.ah)(),e.components);return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(d,e)})):d(e)}},11151:(e,n,t)=>{t.d(n,{Zo:()=>l,ah:()=>a});var i=t(67294);const o=i.createContext({});function a(e){const n=i.useContext(o);return i.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const s={};function l({components:e,children:n,disableParentContext:t}){let l;return l=t?"function"==typeof e?e({}):e||s:a(e),i.createElement(o.Provider,{value:l},n)}}}]);