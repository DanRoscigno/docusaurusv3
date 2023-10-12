"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[71450],{94760:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var n=t(85893),s=t(11151);const r={},o=void 0,i={id:"assets/commonMarkdown/sharedDataUse",title:"sharedDataUse",description:"For more information on how to create a storage volume for other object storages and set the default storage volume, see CREATE STORAGE VOLUME and SET DEFAULT STORAGE VOLUME.",source:"@site/versioned_docs/version-3.1/assets/commonMarkdown/sharedDataUse.md",sourceDirName:"assets/commonMarkdown",slug:"/assets/commonMarkdown/sharedDataUse",permalink:"/doc/zh/docs/assets/commonMarkdown/sharedDataUse",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/assets/commonMarkdown/sharedDataUse.md",tags:[],version:"3.1",frontMatter:{}},d={},c=[{value:"Create a database and a cloud-native table",id:"create-a-database-and-a-cloud-native-table",level:3},{value:"datacache.enable",id:"datacacheenable",level:4},{value:"datacache.partition_duration",id:"datacachepartition_duration",level:4},{value:"enable_async_write_back",id:"enable_async_write_back",level:4},{value:"View table information",id:"view-table-information",level:3},{value:"Load data into a shared-data StarRocks cluster",id:"load-data-into-a-shared-data-starrocks-cluster",level:3},{value:"Query in a shared-data StarRocks cluster",id:"query-in-a-shared-data-starrocks-cluster",level:3}];function l(e){const a=Object.assign({p:"p",a:"a",h3:"h3",ul:"ul",li:"li",code:"code",pre:"pre",blockquote:"blockquote",strong:"strong",h4:"h4"},(0,s.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(a.p,{children:["For more information on how to create a storage volume for other object storages and set the default storage volume, see ",(0,n.jsx)(a.a,{href:"../../sql-reference/sql-statements/Administration/CREATE_STORAGE_VOLUME.md",children:"CREATE STORAGE VOLUME"})," and ",(0,n.jsx)(a.a,{href:"../../sql-reference/sql-statements/Administration/SET_DEFAULT_STORAGE_VOLUME.md",children:"SET DEFAULT STORAGE VOLUME"}),"."]}),"\n",(0,n.jsx)(a.h3,{id:"create-a-database-and-a-cloud-native-table",children:"Create a database and a cloud-native table"}),"\n",(0,n.jsx)(a.p,{children:"After you create a default storage volume, you can then create a database and a cloud-native table using this storage volume."}),"\n",(0,n.jsx)(a.p,{children:"Currently, shared-data StarRocks clusters support the following table types:"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:"Duplicate Key table"}),"\n",(0,n.jsx)(a.li,{children:"Aggregate table"}),"\n",(0,n.jsx)(a.li,{children:"Unique Key table"}),"\n",(0,n.jsx)(a.li,{children:"Primary Key table (Currently, the primary key persistent index is not supported.)"}),"\n"]}),"\n",(0,n.jsxs)(a.p,{children:["The following example creates a database ",(0,n.jsx)(a.code,{children:"cloud_db"})," and a table ",(0,n.jsx)(a.code,{children:"detail_demo"})," based on Duplicate Key table type, enables the local disk cache, sets the hot data validity duration to one month, and disables asynchronous data ingestion into object storage:"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-SQL",children:'CREATE DATABASE cloud_db;\nUSE cloud_db;\nCREATE TABLE IF NOT EXISTS detail_demo (\n    recruit_date  DATE           NOT NULL COMMENT "YYYY-MM-DD",\n    region_num    TINYINT        COMMENT "range [-128, 127]",\n    num_plate     SMALLINT       COMMENT "range [-32768, 32767] ",\n    tel           INT            COMMENT "range [-2147483648, 2147483647]",\n    id            BIGINT         COMMENT "range [-2^63 + 1 ~ 2^63 - 1]",\n    password      LARGEINT       COMMENT "range [-2^127 + 1 ~ 2^127 - 1]",\n    name          CHAR(20)       NOT NULL COMMENT "range char(m),m in (1-255) ",\n    profile       VARCHAR(500)   NOT NULL COMMENT "upper limit value 65533 bytes",\n    ispass        BOOLEAN        COMMENT "true/false")\nDUPLICATE KEY(recruit_date, region_num)\nDISTRIBUTED BY HASH(recruit_date, region_num)\nPROPERTIES (\n    "storage_volume" = "def_volume",\n    "datacache.enable" = "true",\n    "datacache.partition_duration" = "1 MONTH",\n    "enable_async_write_back" = "false"\n);\n'})}),"\n",(0,n.jsxs)(a.blockquote,{children:["\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.strong,{children:"NOTE"})}),"\n",(0,n.jsx)(a.p,{children:"The default storage volume is used when you create a database or a cloud-native table in a shared-data StarRocks cluster if no storage volume is specified."}),"\n"]}),"\n",(0,n.jsxs)(a.p,{children:["In addition to the regular table ",(0,n.jsx)(a.code,{children:"PROPERTIES"}),", you need to specify the following ",(0,n.jsx)(a.code,{children:"PROPERTIES"})," when creating a table for shared-data StarRocks cluster:"]}),"\n",(0,n.jsx)(a.h4,{id:"datacacheenable",children:"datacache.enable"}),"\n",(0,n.jsx)(a.p,{children:"Whether to enable the local disk cache."}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.code,{children:"true"})," (Default) When this property is set to ",(0,n.jsx)(a.code,{children:"true"}),", the data to be loaded is simultaneously written into the object storage and the local disk (as the cache for query acceleration)."]}),"\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.code,{children:"false"})," When this property is set to ",(0,n.jsx)(a.code,{children:"false"}),", the data is loaded only into the object storage."]}),"\n"]}),"\n",(0,n.jsxs)(a.blockquote,{children:["\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.strong,{children:"NOTE"})}),"\n",(0,n.jsxs)(a.p,{children:["In version 3.0 this property was named ",(0,n.jsx)(a.code,{children:"enable_storage_cache"}),"."]}),"\n",(0,n.jsxs)(a.p,{children:["To enable the local disk cache, you must specify the directory of the disk in the CN configuration item ",(0,n.jsx)(a.code,{children:"storage_root_path"}),"."]}),"\n"]}),"\n",(0,n.jsx)(a.h4,{id:"datacachepartition_duration",children:"datacache.partition_duration"}),"\n",(0,n.jsxs)(a.p,{children:["The validity duration of the hot data. When the local disk cache is enabled, all data is loaded into the cache. When the cache is full, StarRocks deletes the less recently used data from the cache. When a query needs to scan the deleted data, StarRocks checks if the data is within the duration of validity. If the data is within the duration, StarRocks loads the data into the cache again. If the data is not within the duration, StarRocks does not load it into the cache. This property is a string value that can be specified with the following units: ",(0,n.jsx)(a.code,{children:"YEAR"}),", ",(0,n.jsx)(a.code,{children:"MONTH"}),", ",(0,n.jsx)(a.code,{children:"DAY"}),", and ",(0,n.jsx)(a.code,{children:"HOUR"}),", for example, ",(0,n.jsx)(a.code,{children:"7 DAY"})," and ",(0,n.jsx)(a.code,{children:"12 HOUR"}),". If it is not specified, all data is cached as the hot data."]}),"\n",(0,n.jsxs)(a.blockquote,{children:["\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.strong,{children:"NOTE"})}),"\n",(0,n.jsxs)(a.p,{children:["In version 3.0 this property was named ",(0,n.jsx)(a.code,{children:"storage_cache_ttl"}),"."]}),"\n",(0,n.jsxs)(a.p,{children:["This property is available only when ",(0,n.jsx)(a.code,{children:"datacache.enable"})," is set to ",(0,n.jsx)(a.code,{children:"true"}),"."]}),"\n"]}),"\n",(0,n.jsx)(a.h4,{id:"enable_async_write_back",children:"enable_async_write_back"}),"\n",(0,n.jsxs)(a.p,{children:["Whether to allow data to be written into object storage asynchronously. Default: ",(0,n.jsx)(a.code,{children:"false"}),"."]}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.code,{children:"true"})," When this property is set to ",(0,n.jsx)(a.code,{children:"true"}),", the load task returns success as soon as the data is written into the local disk cache, and the data is written into the object storage asynchronously. This allows better loading performance, but it also risks data reliability under potential system failures."]}),"\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.code,{children:"false"})," (Default) When this property is set to ",(0,n.jsx)(a.code,{children:"false"}),", the load task returns success only after the data is written into both object storage and the local disk cache. This guarantees higher availability but leads to lower loading performance."]}),"\n"]}),"\n",(0,n.jsx)(a.h3,{id:"view-table-information",children:"View table information"}),"\n",(0,n.jsxs)(a.p,{children:["You can view the information of tables in a specific database using ",(0,n.jsx)(a.code,{children:'SHOW PROC "/dbs/<db_id>"'}),". See ",(0,n.jsx)(a.a,{href:"../../sql-reference/sql-statements/Administration/SHOW_PROC.md",children:"SHOW PROC"})," for more information."]}),"\n",(0,n.jsx)(a.p,{children:"Example:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-Plain",children:'mysql> SHOW PROC "/dbs/xxxxx";\n+---------+-------------+----------+---------------------+--------------+--------+--------------+--------------------------+--------------+---------------+------------------------------+\n| TableId | TableName   | IndexNum | PartitionColumnName | PartitionNum | State  | Type         | LastConsistencyCheckTime | ReplicaCount | PartitionType | StoragePath                  |\n+---------+-------------+----------+---------------------+--------------+--------+--------------+--------------------------+--------------+---------------+------------------------------+\n| 12003   | detail_demo | 1        | NULL                | 1            | NORMAL | CLOUD_NATIVE | NULL                     | 8            | UNPARTITIONED | s3://xxxxxxxxxxxxxx/1/12003/ |\n+---------+-------------+----------+---------------------+--------------+--------+--------------+--------------------------+--------------+---------------+------------------------------+\n'})}),"\n",(0,n.jsxs)(a.p,{children:["The ",(0,n.jsx)(a.code,{children:"Type"})," of a table in shared-data StarRocks cluster is ",(0,n.jsx)(a.code,{children:"CLOUD_NATIVE"}),". In the field ",(0,n.jsx)(a.code,{children:"StoragePath"}),", StarRocks returns the object storage directory where the table is stored."]}),"\n",(0,n.jsx)(a.h3,{id:"load-data-into-a-shared-data-starrocks-cluster",children:"Load data into a shared-data StarRocks cluster"}),"\n",(0,n.jsxs)(a.p,{children:["Shared-data StarRocks clusters support all loading methods provided by StarRocks. See ",(0,n.jsx)(a.a,{href:"../../loading/Loading_intro.md",children:"Overview of data loading"})," for more information."]}),"\n",(0,n.jsx)(a.h3,{id:"query-in-a-shared-data-starrocks-cluster",children:"Query in a shared-data StarRocks cluster"}),"\n",(0,n.jsxs)(a.p,{children:["Tables in a shared-data StarRocks cluster support all types of queries provided by StarRocks. See StarRocks ",(0,n.jsx)(a.a,{href:"../../sql-reference/sql-statements/data-manipulation/SELECT.md",children:"SELECT"})," for more information."]})]})}const h=function(e={}){const{wrapper:a}=Object.assign({},(0,s.ah)(),e.components);return a?(0,n.jsx)(a,Object.assign({},e,{children:(0,n.jsx)(l,e)})):l(e)}},11151:(e,a,t)=>{t.d(a,{Zo:()=>i,ah:()=>r});var n=t(67294);const s=n.createContext({});function r(e){const a=n.useContext(s);return n.useMemo((()=>"function"==typeof e?e(a):{...a,...e}),[a,e])}const o={};function i({components:e,children:a,disableParentContext:t}){let i;return i=t?"function"==typeof e?e({}):e||o:r(e),n.createElement(s.Provider,{value:i},a)}}}]);