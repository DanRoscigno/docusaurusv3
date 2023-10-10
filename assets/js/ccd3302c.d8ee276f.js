"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[25528],{39439:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>o});var n=t(85893),l=t(11151);const i={},c="ANALYZE TABLE",r={id:"sql-reference/sql-statements/data-definition/ANALYZE TABLE",title:"ANALYZE TABLE",description:"Description",source:"@site/versioned_docs/version-3.0/sql-reference/sql-statements/data-definition/ANALYZE TABLE.md",sourceDirName:"sql-reference/sql-statements/data-definition",slug:"/sql-reference/sql-statements/data-definition/ANALYZE TABLE",permalink:"/doc/docs/3.0/sql-reference/sql-statements/data-definition/ANALYZE TABLE",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/sql-reference/sql-statements/data-definition/ANALYZE TABLE.md",tags:[],version:"3.0",frontMatter:{},sidebar:"documentation",previous:{title:"ALTER VIEW",permalink:"/doc/docs/3.0/sql-reference/sql-statements/data-definition/ALTER VIEW"},next:{title:"BACKUP",permalink:"/doc/docs/3.0/sql-reference/sql-statements/data-definition/BACKUP"}},a={},o=[{value:"Description",id:"description",level:2},{value:"Manually collect basic statistics",id:"manually-collect-basic-statistics",level:3},{value:"Syntax",id:"syntax",level:4},{value:"Parameter description",id:"parameter-description",level:4},{value:"Examples",id:"examples",level:4},{value:"Manually collect histograms",id:"manually-collect-histograms",level:3},{value:"Syntax",id:"syntax-1",level:4},{value:"Parameter description",id:"parameter-description-1",level:4},{value:"Examples",id:"examples-1",level:4},{value:"References",id:"references",level:2}];function d(e){const s=Object.assign({h1:"h1",h2:"h2",p:"p",strong:"strong",h3:"h3",a:"a",h4:"h4",pre:"pre",code:"code",ul:"ul",li:"li",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,l.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"analyze-table",children:"ANALYZE TABLE"}),"\n",(0,n.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,n.jsx)(s.p,{children:"Creates a manual collection task for collecting CBO statistics. By default, manual collection is a synchronous operation. You can also set it to an asynchronous operation. In asynchronous mode, after you run ANALYZE TABLE, the system immediately returns whether this statement is successful. However, the collection task will be running in the background and you do not have to wait for the result. You can check the status of the task by running SHOW ANALYZE STATUS. Asynchronous collection is suitable for tables with large data volume, whereas synchronous collection is suitable for tables with small data volume."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Manual collection tasks are run only once after creation. You do not need to delete manual collection tasks."})}),"\n",(0,n.jsx)(s.p,{children:"This statement is supported from v2.4."}),"\n",(0,n.jsx)(s.h3,{id:"manually-collect-basic-statistics",children:"Manually collect basic statistics"}),"\n",(0,n.jsxs)(s.p,{children:["For more information about basic statistics, see ",(0,n.jsx)(s.a,{href:"/doc/docs/3.0/using_starrocks/Cost_based_optimizer#basic-statistics",children:"Gather statistics for CBO"}),"."]}),"\n",(0,n.jsx)(s.h4,{id:"syntax",children:"Syntax"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-SQL",children:"ANALYZE [FULL|SAMPLE] TABLE tbl_name (col_name [,col_name])\n[WITH SYNC | ASYNC MODE]\nPROPERTIES (property [,property])\n"})}),"\n",(0,n.jsx)(s.h4,{id:"parameter-description",children:"Parameter description"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"Collection type"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"FULL: indicates full collection."}),"\n",(0,n.jsx)(s.li,{children:"SAMPLE: indicates sampled collection."}),"\n",(0,n.jsx)(s.li,{children:"If no collection type is specified, full collection is used by default."}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"col_name"}),": columns from which to collect statistics. Separate multiple columns with commas (",(0,n.jsx)(s.code,{children:","}),"). If this parameter is not specified, the entire table is collected."]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"[WITH SYNC | ASYNC MODE]: whether to run the manual collection task in synchronous or asynchronous mode. Synchronous collection is used by default if you do not specify this parameter."}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"PROPERTIES"}),": custom parameters. If ",(0,n.jsx)(s.code,{children:"PROPERTIES"})," is not specified, the default settings in the ",(0,n.jsx)(s.code,{children:"fe.conf"})," file are used. The properties that are actually used can be viewed via the ",(0,n.jsx)(s.code,{children:"Properties"})," column in the output of SHOW ANALYZE STATUS."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:(0,n.jsx)(s.strong,{children:"PROPERTIES"})}),(0,n.jsx)(s.th,{children:(0,n.jsx)(s.strong,{children:"Type"})}),(0,n.jsx)(s.th,{children:(0,n.jsx)(s.strong,{children:"Default value"})}),(0,n.jsx)(s.th,{children:(0,n.jsx)(s.strong,{children:"Description"})})]})}),(0,n.jsx)(s.tbody,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"statistic_sample_collect_rows"}),(0,n.jsx)(s.td,{children:"INT"}),(0,n.jsx)(s.td,{children:"200000"}),(0,n.jsx)(s.td,{children:"The minimum number of rows to collect for sampled collection.If the parameter value exceeds the actual number of rows in your table, full collection is performed."})]})})]}),"\n",(0,n.jsx)(s.h4,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(s.p,{children:"Example 1: Manual full collection"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-SQL",children:"-- Manually collect full stats of a table using default settings.\nANALYZE TABLE tbl_name;\n\n-- Manually collect full stats of a table using default settings.\nANALYZE FULL TABLE tbl_name;\n\n-- Manually collect stats of specified columns in a table using default settings.\nANALYZE TABLE tbl_name(c1, c2, c3);\n"})}),"\n",(0,n.jsx)(s.p,{children:"Example 2: Manual sampled collection"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-SQL",children:'-- Manually collect partial stats of a table using default settings.\nANALYZE SAMPLE TABLE tbl_name;\n\n-- Manually collect stats of specified columns in a table, with the number of rows to collect specified.\nANALYZE SAMPLE TABLE tbl_name (v1, v2, v3) PROPERTIES(\n    "statistic_sample_collect_rows" = "1000000"\n);\n'})}),"\n",(0,n.jsx)(s.h3,{id:"manually-collect-histograms",children:"Manually collect histograms"}),"\n",(0,n.jsxs)(s.p,{children:["For more information about histograms, see ",(0,n.jsx)(s.a,{href:"/doc/docs/3.0/using_starrocks/Cost_based_optimizer#histogram",children:"Gather statistics for CBO"}),"."]}),"\n",(0,n.jsx)(s.h4,{id:"syntax-1",children:"Syntax"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-SQL",children:"ANALYZE TABLE tbl_name UPDATE HISTOGRAM ON col_name [, col_name]\n[WITH SYNC | ASYNC MODE]\n[WITH N BUCKETS]\nPROPERTIES (property [,property]);\n"})}),"\n",(0,n.jsx)(s.h4,{id:"parameter-description-1",children:"Parameter description"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"col_name"}),": columns from which to collect statistics. Separate multiple columns with commas (",(0,n.jsx)(s.code,{children:","}),"). If this parameter is not specified, the entire table is collected. This parameter is required for histograms."]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"[WITH SYNC | ASYNC MODE]: whether to run the manual collection task in synchronous or asynchronous mode. Synchronous collection is used by default if you do not specify this parameter."}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"WITH N BUCKETS"}),": ",(0,n.jsx)(s.code,{children:"N"})," is the number of buckets for histogram collection. If not specified, the default value in ",(0,n.jsx)(s.code,{children:"fe.conf"})," is used."]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["PROPERTIES: custom parameters. If ",(0,n.jsx)(s.code,{children:"PROPERTIES"})," is not specified, the default settings in ",(0,n.jsx)(s.code,{children:"fe.conf"})," are used. The properties that are actually used can be viewed via the ",(0,n.jsx)(s.code,{children:"Properties"})," column in the output of SHOW ANALYZE STATUS."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:(0,n.jsx)(s.strong,{children:"PROPERTIES"})}),(0,n.jsx)(s.th,{children:(0,n.jsx)(s.strong,{children:"Type"})}),(0,n.jsx)(s.th,{children:(0,n.jsx)(s.strong,{children:"Default value"})}),(0,n.jsx)(s.th,{children:(0,n.jsx)(s.strong,{children:"Description"})})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"statistic_sample_collect_rows"}),(0,n.jsx)(s.td,{children:"INT"}),(0,n.jsx)(s.td,{children:"200000"}),(0,n.jsx)(s.td,{children:"The minimum number of rows to collect. If the parameter value exceeds the actual number of rows in your table, full collection is performed."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"histogram_buckets_size"}),(0,n.jsx)(s.td,{children:"LONG"}),(0,n.jsx)(s.td,{children:"64"}),(0,n.jsx)(s.td,{children:"The default bucket number for a histogram."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"histogram_mcv_size"}),(0,n.jsx)(s.td,{children:"INT"}),(0,n.jsx)(s.td,{children:"100"}),(0,n.jsx)(s.td,{children:"The number of most common values (MCV) for a histogram."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"histogram_sample_ratio"}),(0,n.jsx)(s.td,{children:"FLOAT"}),(0,n.jsx)(s.td,{children:"0.1"}),(0,n.jsx)(s.td,{children:"The sampling ratio for a histogram."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"histogram_max_sample_row_count"}),(0,n.jsx)(s.td,{children:"LONG"}),(0,n.jsx)(s.td,{children:"10000000"}),(0,n.jsx)(s.td,{children:"The maximum number of rows to collect for a histogram."})]})]})]}),"\n",(0,n.jsxs)(s.p,{children:["The number of rows to collect for a histogram is controlled by multiple parameters. It is the larger value between ",(0,n.jsx)(s.code,{children:"statistic_sample_collect_rows"})," and table row count * ",(0,n.jsx)(s.code,{children:"histogram_sample_ratio"}),". The number cannot exceed the value specified by ",(0,n.jsx)(s.code,{children:"histogram_max_sample_row_count"}),". If the value is exceeded, ",(0,n.jsx)(s.code,{children:"histogram_max_sample_row_count"})," takes precedence."]}),"\n",(0,n.jsx)(s.h4,{id:"examples-1",children:"Examples"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-SQL",children:'-- Manually collect histograms on v1 using the default settings.\nANALYZE TABLE tbl_name UPDATE HISTOGRAM ON v1;\n\n-- Manually collect histograms on v1 and v2, with 32 buckets, 32 MCVs, and 50% sampling ratio.\nANALYZE TABLE tbl_name UPDATE HISTOGRAM ON v1,v2 WITH 32 BUCKETS \nPROPERTIES(\n   "histogram_mcv_size" = "32",\n   "histogram_sample_ratio" = "0.5"\n);\n'})}),"\n",(0,n.jsx)(s.h2,{id:"references",children:"References"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"/doc/docs/3.0/sql-reference/sql-statements/data-definition/SHOW%20ANALYZE%20STATUS",children:"SHOW ANALYZE STATUS"}),": view the status of a manual collection task."]}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"/doc/docs/3.0/sql-reference/sql-statements/data-definition/KILL%20ANALYZE",children:"KILL ANALYZE"}),": cancel a manual collection task that is running."]}),"\n",(0,n.jsxs)(s.p,{children:["For more information about collecting statistics for CBO, see ",(0,n.jsx)(s.a,{href:"/doc/docs/3.0/using_starrocks/Cost_based_optimizer",children:"Gather statistics for CBO"}),"."]})]})}const h=function(e={}){const{wrapper:s}=Object.assign({},(0,l.ah)(),e.components);return s?(0,n.jsx)(s,Object.assign({},e,{children:(0,n.jsx)(d,e)})):d(e)}},11151:(e,s,t)=>{t.d(s,{Zo:()=>r,ah:()=>i});var n=t(67294);const l=n.createContext({});function i(e){const s=n.useContext(l);return n.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const c={};function r({components:e,children:s,disableParentContext:t}){let r;return r=t?"function"==typeof e?e({}):e||c:i(e),n.createElement(l.Provider,{value:r},s)}}}]);