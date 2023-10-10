"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[85941],{90765:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>i,contentTitle:()=>r,default:()=>h,frontMatter:()=>c,metadata:()=>o,toc:()=>d});var t=s(85893),n=s(11151);const c={},r="Data Cache",o={id:"data_source/data_cache",title:"Data Cache",description:"This topic describes the working principles of Data Cache and how to enable Data Cache to improve query performance on external data.",source:"@site/versioned_docs/version-3.1/data_source/data_cache.md",sourceDirName:"data_source",slug:"/data_source/data_cache",permalink:"/docusaurusv3/docs/data_source/data_cache",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/data_source/data_cache.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"File external table",permalink:"/docusaurusv3/docs/data_source/file_external_table"},next:{title:"Data lake-related FAQ",permalink:"/docusaurusv3/docs/data_source/datalake_faq"}},i={},d=[{value:"How it works",id:"how-it-works",level:2},{value:"Storage media of blocks",id:"storage-media-of-blocks",level:2},{value:"Cache replacement policies",id:"cache-replacement-policies",level:2},{value:"Enable Data Cache",id:"enable-data-cache",level:2},{value:"Configurations for FEs",id:"configurations-for-fes",level:3},{value:"Configurations for BEs",id:"configurations-for-bes",level:3},{value:"Check whether a query hits data cache",id:"check-whether-a-query-hits-data-cache",level:2}];function l(e){const a=Object.assign({h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",strong:"strong",tbody:"tbody",td:"td",ol:"ol",li:"li",a:"a",ul:"ul",h3:"h3"},(0,n.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.h1,{id:"data-cache",children:"Data Cache"}),"\n",(0,t.jsx)(a.p,{children:"This topic describes the working principles of Data Cache and how to enable Data Cache to improve query performance on external data."}),"\n",(0,t.jsx)(a.p,{children:"In data lake analytics, StarRocks works as an OLAP engine to scan data files stored in external storage systems, such as HDFS and Amazon S3. The I/O overhead increases as the number of files to scan increases. In addition, in some ad hoc scenarios, frequent access to the same data doubles I/O overhead."}),"\n",(0,t.jsx)(a.p,{children:"To optimize the query performance in these scenarios, StarRocks 2.5 provides the Data Cache feature. This feature splits data in an external storage system into multiple blocks based on predefined policies and caches the data on StarRocks backends (BEs). This eliminates the need to pull data from external systems for each access request and accelerates queries and analysis on hot data. Data Cache only works when you query data from external storage systems by using external catalogs or external tables (excluding external tables for JDBC-compatible databases). It does not work when you query StarRocks native tables."}),"\n",(0,t.jsx)(a.h2,{id:"how-it-works",children:"How it works"}),"\n",(0,t.jsx)(a.p,{children:"StarRocks splits data in an external storage system into multiple blocks of the same size, and caches the data on BEs. Block is the smallest unit of data cache, which is configurable."}),"\n",(0,t.jsx)(a.p,{children:"For example, if you set the block size to 1 MB and you want to query a Parquet file of 128 MB from Amazon S3, StarRocks splits the file into 128 blocks. The blocks are [0, 1 MB), [1 MB, 2 MB), [2 MB, 3 MB) ... [127 MB, 128 MB). StarRocks assigns a globally unique ID to each block, called a cache key. A cache key consists of the following three parts."}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-Plain",children:"hash(filename) + fileModificationTime + blockId\n"})}),"\n",(0,t.jsx)(a.p,{children:"The following table provides descriptions of each part."}),"\n",(0,t.jsxs)(a.table,{children:[(0,t.jsx)(a.thead,{children:(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.th,{children:(0,t.jsx)(a.strong,{children:"Component item"})}),(0,t.jsx)(a.th,{children:(0,t.jsx)(a.strong,{children:"Description"})})]})}),(0,t.jsxs)(a.tbody,{children:[(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.td,{children:"filename"}),(0,t.jsx)(a.td,{children:"The name of the data file."})]}),(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.td,{children:"fileModificationTime"}),(0,t.jsx)(a.td,{children:"The last modification time of the data file."})]}),(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.td,{children:"blockId"}),(0,t.jsx)(a.td,{children:"The ID that StarRocks assigns to a block when splitting the data file. The ID is unique under the same data file but is not unique within your StarRocks cluster."})]})]})]}),"\n",(0,t.jsx)(a.p,{children:"If the query hits the [1 MB, 2 MB) block, StarRocks performs the following operations:"}),"\n",(0,t.jsxs)(a.ol,{children:["\n",(0,t.jsx)(a.li,{children:"Check whether the block exists in the cache."}),"\n",(0,t.jsx)(a.li,{children:"If the block exists, StarRocks reads the block from the cache. If the block does not exist, StarRocks reads the block from Amazon S3 and caches it on a BE."}),"\n"]}),"\n",(0,t.jsx)(a.p,{children:"After Data Cache is enabled, StarRocks caches data blocks read from external storage systems. If you do not want to cache such data blocks, run the following command:"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-SQL",children:"SET enable_populate_block_cache = false;\n"})}),"\n",(0,t.jsxs)(a.p,{children:["For more information about ",(0,t.jsx)(a.code,{children:"enable_populate_block_cache"}),", see ",(0,t.jsx)(a.a,{href:"/docusaurusv3/docs/reference/System_variable",children:"System variables"}),"."]}),"\n",(0,t.jsx)(a.h2,{id:"storage-media-of-blocks",children:"Storage media of blocks"}),"\n",(0,t.jsx)(a.p,{children:"StarRocks uses the memory and disks of BE machines to cache blocks. It supports cache solely on memory or on both the memory and disks."}),"\n",(0,t.jsx)(a.p,{children:"If you use disks as the storage media, the cache speed is directly affected by the performance of disks. Therefore, we recommend that you use high-performance disks such as NVMe disks for data cache. If you do not have high-performance disks, you can add more disks to relieve disk I/O pressure."}),"\n",(0,t.jsx)(a.h2,{id:"cache-replacement-policies",children:"Cache replacement policies"}),"\n",(0,t.jsxs)(a.p,{children:["StarRocks uses the ",(0,t.jsx)(a.a,{href:"https://en.wikipedia.org/wiki/Cache_replacement_policies#Least_recently_used_(LRU)",children:"least recently used"})," (LRU) policy to cache and discard data."]}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:"StarRocks first reads data from memory. If the data is not found in memory, StarRocks will read the data from disks and try to load the data read from disks into memory."}),"\n",(0,t.jsx)(a.li,{children:"Data discarded from memory will be written to disks. Data discarded from disks will be deleted."}),"\n"]}),"\n",(0,t.jsx)(a.h2,{id:"enable-data-cache",children:"Enable Data Cache"}),"\n",(0,t.jsx)(a.p,{children:"Data Cache is disabled by default. To enable this feature, configure FEs and BEs in your StarRocks cluster."}),"\n",(0,t.jsx)(a.h3,{id:"configurations-for-fes",children:"Configurations for FEs"}),"\n",(0,t.jsx)(a.p,{children:"You can enable Data Cache for FEs by using one of the following methods:"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsx)(a.p,{children:"Enable Data Cache for a given session based on your requirements."}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-SQL",children:"SET enable_scan_block_cache = true;\n"})}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsx)(a.p,{children:"Enable Data Cache for all active sessions."}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-SQL",children:"SET GLOBAL enable_scan_block_cache = true;\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(a.h3,{id:"configurations-for-bes",children:"Configurations for BEs"}),"\n",(0,t.jsxs)(a.p,{children:["Add the following parameters to the ",(0,t.jsx)(a.strong,{children:"conf/be.conf"})," file of each BE. Then restart each BE to make the settings take effect."]}),"\n",(0,t.jsxs)(a.table,{children:[(0,t.jsx)(a.thead,{children:(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.th,{children:(0,t.jsx)(a.strong,{children:"Parameter"})}),(0,t.jsx)(a.th,{children:(0,t.jsx)(a.strong,{children:"Description"})}),(0,t.jsx)(a.th,{children:(0,t.jsx)(a.strong,{children:"Default value"})})]})}),(0,t.jsxs)(a.tbody,{children:[(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.td,{children:"block_cache_enable"}),(0,t.jsxs)(a.td,{children:["Whether to enable Data Cache.",(0,t.jsxs)("ul",{children:[(0,t.jsxs)("li",{children:[(0,t.jsx)(a.code,{children:"true"}),": Data Cache is enabled."]}),(0,t.jsxs)("li",{children:[(0,t.jsx)(a.code,{children:"false"}),": Data Cache is disabled."]})]})]}),(0,t.jsx)(a.td,{children:"false"})]}),(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.td,{children:"block_cache_disk_path"}),(0,t.jsx)(a.td,{children:"The paths of disks. You can configure more than one disk and separate the disk paths with semicolons (;). We recommend that the number of paths you configured be the same as the number of disks of your BE machine. When the BE starts, StarRocks automatically creates a disk cache directory (the creation fails if no parent directory exists)."}),(0,t.jsx)(a.td,{children:(0,t.jsx)(a.code,{children:"${STARROCKS_HOME}/block_cache"})})]}),(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.td,{children:"block_cache_meta_path"}),(0,t.jsx)(a.td,{children:"The storage path of block metadata. You can leave this parameter unspecified."}),(0,t.jsx)(a.td,{children:(0,t.jsx)(a.code,{children:"${STARROCKS_HOME}/block_cache"})})]}),(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.td,{children:"block_cache_mem_size"}),(0,t.jsx)(a.td,{children:"The maximum amount of data that can be cached in the memory. Unit: bytes. We recommend that you set the value of this parameter to at least 20 GB. If StarRocks reads a large amount of data from disks after Data Cache is enabled, consider increasing the value."}),(0,t.jsxs)(a.td,{children:[(0,t.jsx)(a.code,{children:"2147483648"}),", which is 2 GB."]})]}),(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.td,{children:"block_cache_disk_size"}),(0,t.jsxs)(a.td,{children:["The maximum amount of data that can be cached in a single disk. Unit: bytes. For example, if you configure two disk paths for the ",(0,t.jsx)(a.code,{children:"block_cache_disk_path"})," parameter and set the value of the ",(0,t.jsx)(a.code,{children:"block_cache_disk_size"})," parameter to ",(0,t.jsx)(a.code,{children:"21474836480"})," (20 GB), a maximum of 40 GB data can be cached in these two disks."]}),(0,t.jsxs)(a.td,{children:[(0,t.jsx)(a.code,{children:"0"}),", which indicates that only the memory is used to cache data."]})]})]})]}),"\n",(0,t.jsx)(a.p,{children:"Examples of setting these parameters."}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-Plain",children:"\n# Enable Data Cache.\nblock_cache_enable = true  \n\n# Configure the disk path. Assume the BE machine is equipped with two disks.\nblock_cache_disk_path = /home/disk1/sr/dla_cache_data/;/home/disk2/sr/dla_cache_data/\n\n# Set block_cache_mem_size to 2 GB.\nblock_cache_mem_size = 2147483648\n\n# Set block_cache_disk_size to 1.2 TB.\nblock_cache_disk_size = 1288490188800\n"})}),"\n",(0,t.jsx)(a.h2,{id:"check-whether-a-query-hits-data-cache",children:"Check whether a query hits data cache"}),"\n",(0,t.jsx)(a.p,{children:"You can check whether a query hits data cache by analyzing the following metrics in the query profile:"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.code,{children:"BlockCacheReadBytes"}),": the amount of data that StarRocks reads directly from its memory and disks."]}),"\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.code,{children:"BlockCacheWriteBytes"}),": the amount of data loaded from an external storage system to StarRocks' memory and disks."]}),"\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.code,{children:"BytesRead"}),": the total amount of data that is read, including data that StarRocks reads from an external storage system, its memory, and disks."]}),"\n"]}),"\n",(0,t.jsx)(a.p,{children:"Example 1: In this example, StarRocks reads a large amount of data (7.65 GB) from the external storage system and only a few data (518.73 MB) from the memory and disks. This means that few data caches were hit."}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-Plain",children:" - Table: lineorder\n - BlockCacheReadBytes: 518.73 MB\n   - __MAX_OF_BlockCacheReadBytes: 4.73 MB\n   - __MIN_OF_BlockCacheReadBytes: 16.00 KB\n - BlockCacheReadCounter: 684\n   - __MAX_OF_BlockCacheReadCounter: 4\n   - __MIN_OF_BlockCacheReadCounter: 0\n - BlockCacheReadTimer: 737.357us\n - BlockCacheWriteBytes: 7.65 GB\n   - __MAX_OF_BlockCacheWriteBytes: 64.39 MB\n   - __MIN_OF_BlockCacheWriteBytes: 0.00 \n - BlockCacheWriteCounter: 7.887K (7887)\n   - __MAX_OF_BlockCacheWriteCounter: 65\n   - __MIN_OF_BlockCacheWriteCounter: 0\n - BlockCacheWriteTimer: 23.467ms\n   - __MAX_OF_BlockCacheWriteTimer: 62.280ms\n   - __MIN_OF_BlockCacheWriteTimer: 0ns\n - BufferUnplugCount: 15\n   - __MAX_OF_BufferUnplugCount: 2\n   - __MIN_OF_BufferUnplugCount: 0\n - BytesRead: 7.65 GB\n   - __MAX_OF_BytesRead: 64.39 MB\n   - __MIN_OF_BytesRead: 0.00\n"})}),"\n",(0,t.jsx)(a.p,{children:"Example 2: In this example, StarRocks reads a large amount of data (46.08 GB) from data cache and no data from the external storage system, which means StarRocks reads data only from data cache."}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-Plain",children:"Table: lineitem\n- BlockCacheReadBytes: 46.08 GB\n - __MAX_OF_BlockCacheReadBytes: 194.99 MB\n - __MIN_OF_BlockCacheReadBytes: 81.25 MB\n- BlockCacheReadCounter: 72.237K (72237)\n - __MAX_OF_BlockCacheReadCounter: 299\n - __MIN_OF_BlockCacheReadCounter: 118\n- BlockCacheReadTimer: 856.481ms\n - __MAX_OF_BlockCacheReadTimer: 1s547ms\n - __MIN_OF_BlockCacheReadTimer: 261.824ms\n- BlockCacheWriteBytes: 0.00 \n- BlockCacheWriteCounter: 0\n- BlockCacheWriteTimer: 0ns\n- BufferUnplugCount: 1.231K (1231)\n - __MAX_OF_BufferUnplugCount: 81\n - __MIN_OF_BufferUnplugCount: 35\n- BytesRead: 46.08 GB\n - __MAX_OF_BytesRead: 194.99 MB\n - __MIN_OF_BytesRead: 81.25 MB\n"})})]})}const h=function(e={}){const{wrapper:a}=Object.assign({},(0,n.ah)(),e.components);return a?(0,t.jsx)(a,Object.assign({},e,{children:(0,t.jsx)(l,e)})):l(e)}},11151:(e,a,s)=>{s.d(a,{Zo:()=>o,ah:()=>c});var t=s(67294);const n=t.createContext({});function c(e){const a=t.useContext(n);return t.useMemo((()=>"function"==typeof e?e(a):{...a,...e}),[a,e])}const r={};function o({components:e,children:a,disableParentContext:s}){let o;return o=s?"function"==typeof e?e({}):e||r:c(e),t.createElement(n.Provider,{value:o},a)}}}]);