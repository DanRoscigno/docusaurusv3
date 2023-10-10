"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[95618],{16786:(e,s,o)=>{o.r(s),o.d(s,{assets:()=>c,contentTitle:()=>n,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var a=o(85893),t=o(11151);const r={},n="Data compression",i={id:"table_design/data_compression",title:"Data compression",description:"StarRocks supports data compression for table and index storage. Data compression not only helps save storage space, but also improves performance of I/O intensive tasks because StarRocks can read fewer pages from disk for each request. Note that extra CPU resource is required to compress and decompress the data.",source:"@site/versioned_docs/version-3.1/table_design/data_compression.md",sourceDirName:"table_design",slug:"/table_design/data_compression",permalink:"/doc/docs/table_design/data_compression",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/table_design/data_compression.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"Temporary partition",permalink:"/doc/docs/table_design/Temporary_partition"},next:{title:"Sort keys and prefix indexes",permalink:"/doc/docs/table_design/Sort_key"}},c={},d=[{value:"Choose a data compression algorithm",id:"choose-a-data-compression-algorithm",level:2},{value:"Specify a data compression algorithm for a table",id:"specify-a-data-compression-algorithm-for-a-table",level:2}];function l(e){const s=Object.assign({h1:"h1",p:"p",h2:"h2",blockquote:"blockquote",strong:"strong",code:"code",a:"a",pre:"pre"},(0,t.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.h1,{id:"data-compression",children:"Data compression"}),"\n",(0,a.jsx)(s.p,{children:"StarRocks supports data compression for table and index storage. Data compression not only helps save storage space, but also improves performance of I/O intensive tasks because StarRocks can read fewer pages from disk for each request. Note that extra CPU resource is required to compress and decompress the data."}),"\n",(0,a.jsx)(s.h2,{id:"choose-a-data-compression-algorithm",children:"Choose a data compression algorithm"}),"\n",(0,a.jsx)(s.p,{children:"StarRocks supports four data compression algorithms: LZ4, Zstandard (or zstd), zlib, and Snappy. These data compression algorithms differ in compression ratio and compression/decompression performance. Generally, the compression ratios of these algorithms rank as follows: zlib > Zstandard > LZ4 > Snappy. Among them, zlib has shown relatively high compression ratios. As a result of the highly compressed data, the loading and query performances on tables with the zlib compression algorithm are also affected. LZ4 and Zstandard, especially, have well-balanced compression ratios and decompression performances. You can choose among these compression algorithms to cater to your business needs for less storage space or better performance. We recommend LZ4 or Zstandard if you do not have specific demands for less storage space."}),"\n",(0,a.jsxs)(s.blockquote,{children:["\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.strong,{children:"NOTE"})}),"\n",(0,a.jsx)(s.p,{children:"Different data types can affect the compression ratio."}),"\n"]}),"\n",(0,a.jsx)(s.h2,{id:"specify-a-data-compression-algorithm-for-a-table",children:"Specify a data compression algorithm for a table"}),"\n",(0,a.jsx)(s.p,{children:"You can specify a data compression algorithm for a table only when creating the table, and you cannot change it afterwards."}),"\n",(0,a.jsxs)(s.p,{children:["The following example creates a table ",(0,a.jsx)(s.code,{children:"data_compression"})," with the Zstandard algorithm. For detailed instructions, see ",(0,a.jsx)(s.a,{href:"/doc/docs/sql-reference/sql-statements/data-definition/CREATE%20TABLE",children:"CREATE TABLE"}),"."]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-SQL",children:'CREATE TABLE `data_compression` (\n  `id`      INT(11)     NOT NULL     COMMENT "",\n  `name`    CHAR(200)   NULL         COMMENT ""\n)\nENGINE=OLAP \nUNIQUE KEY(`id`)\nCOMMENT "OLAP"\nDISTRIBUTED BY HASH(`id`)\nPROPERTIES (\n"compression" = "ZSTD"\n);\n'})}),"\n",(0,a.jsxs)(s.blockquote,{children:["\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.strong,{children:"NOTE"})}),"\n",(0,a.jsx)(s.p,{children:"If no data compression algorithm is specified, StarRocks uses LZ4 by default."}),"\n"]}),"\n",(0,a.jsxs)(s.p,{children:["You can view the compression algorithm of a table using ",(0,a.jsx)(s.a,{href:"/doc/docs/sql-reference/sql-statements/data-manipulation/SHOW%20CREATE%20TABLE",children:"SHOW CREATE TABLE"}),"."]})]})}const p=function(e={}){const{wrapper:s}=Object.assign({},(0,t.ah)(),e.components);return s?(0,a.jsx)(s,Object.assign({},e,{children:(0,a.jsx)(l,e)})):l(e)}},11151:(e,s,o)=>{o.d(s,{Zo:()=>i,ah:()=>r});var a=o(67294);const t=a.createContext({});function r(e){const s=a.useContext(t);return a.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const n={};function i({components:e,children:s,disableParentContext:o}){let i;return i=o?"function"==typeof e?e({}):e||n:r(e),a.createElement(t.Provider,{value:i},s)}}}]);