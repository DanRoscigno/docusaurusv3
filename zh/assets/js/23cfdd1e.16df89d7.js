"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[18108],{48864:(d,s,e)=>{e.r(s),e.d(s,{assets:()=>t,contentTitle:()=>c,default:()=>j,frontMatter:()=>i,metadata:()=>l,toc:()=>h});var r=e(85893),n=e(11151);const i={},c="Information Schema",l={id:"administration/information_schema",title:"Information Schema",description:"information_schema \u662f StarRocks \u5b9e\u4f8b\u4e2d\u7684\u4e00\u4e2a\u6570\u636e\u5e93\u3002\u8be5\u6570\u636e\u5e93\u5305\u542b\u6570\u5f20\u7531\u7cfb\u7edf\u5b9a\u4e49\u7684\u8868\uff0c\u8fd9\u4e9b\u8868\u4e2d\u5b58\u50a8\u4e86\u5173\u4e8e StarRocks \u5b9e\u4f8b\u4e2d\u6240\u6709\u5bf9\u8c61\u7684\u5927\u91cf\u5143\u6570\u636e\u4fe1\u606f\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.1/administration/information_schema.md",sourceDirName:"administration",slug:"/administration/information_schema",permalink:"/doc/zh/docs/administration/information_schema",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/administration/information_schema.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"\u8bbe\u7f6e\u65f6\u533a",permalink:"/doc/zh/docs/administration/timezone"},next:{title:"\u76d1\u63a7\u7ba1\u7406\u5927\u67e5\u8be2",permalink:"/doc/zh/docs/administration/monitor_manage_big_queries"}},t={},h=[{value:"\u901a\u8fc7 Information Schema \u67e5\u770b\u5143\u6570\u636e\u4fe1\u606f",id:"\u901a\u8fc7-information-schema-\u67e5\u770b\u5143\u6570\u636e\u4fe1\u606f",level:2},{value:"Information Schema \u8868",id:"information-schema-\u8868",level:2},{value:"loads",id:"loads",level:3},{value:"tables",id:"tables",level:3},{value:"tables_config",id:"tables_config",level:3},{value:"load_tracking_logs",id:"load_tracking_logs",level:3},{value:"materialized_views",id:"materialized_views",level:3}];function x(d){const s=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",pre:"pre",table:"table",thead:"thead",tr:"tr",th:"th",strong:"strong",tbody:"tbody",td:"td",a:"a",h3:"h3"},(0,n.ah)(),d.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h1,{id:"information-schema",children:"Information Schema"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"information_schema"})," \u662f StarRocks \u5b9e\u4f8b\u4e2d\u7684\u4e00\u4e2a\u6570\u636e\u5e93\u3002\u8be5\u6570\u636e\u5e93\u5305\u542b\u6570\u5f20\u7531\u7cfb\u7edf\u5b9a\u4e49\u7684\u8868\uff0c\u8fd9\u4e9b\u8868\u4e2d\u5b58\u50a8\u4e86\u5173\u4e8e StarRocks \u5b9e\u4f8b\u4e2d\u6240\u6709\u5bf9\u8c61\u7684\u5927\u91cf\u5143\u6570\u636e\u4fe1\u606f\u3002"]}),"\n",(0,r.jsx)(s.h2,{id:"\u901a\u8fc7-information-schema-\u67e5\u770b\u5143\u6570\u636e\u4fe1\u606f",children:"\u901a\u8fc7 Information Schema \u67e5\u770b\u5143\u6570\u636e\u4fe1\u606f"}),"\n",(0,r.jsxs)(s.p,{children:["\u60a8\u53ef\u4ee5\u901a\u8fc7\u67e5\u8be2 ",(0,r.jsx)(s.code,{children:"information_schema"})," \u4e2d\u7684\u8868\u6765\u67e5\u770b StarRocks \u5b9e\u4f8b\u4e2d\u7684\u5143\u6570\u636e\u4fe1\u606f\u3002"]}),"\n",(0,r.jsxs)(s.p,{children:["\u4ee5\u4e0b\u793a\u4f8b\u901a\u8fc7\u67e5\u8be2\u8868 ",(0,r.jsx)(s.code,{children:"tables"})," \u67e5\u770b StarRocks \u4e2d\u540d\u4e3a ",(0,r.jsx)(s.code,{children:"sr_member"})," \u7684\u8868\u76f8\u5173\u7684\u5143\u6570\u636e\u4fe1\u606f\u3002"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-Plain",children:"mysql> SELECT * FROM information_schema.tables WHERE TABLE_NAME like 'sr_member'\\G\n*************************** 1. row ***************************\n  TABLE_CATALOG: def\n   TABLE_SCHEMA: sr_hub\n     TABLE_NAME: sr_member\n     TABLE_TYPE: BASE TABLE\n         ENGINE: StarRocks\n        VERSION: NULL\n     ROW_FORMAT: NULL\n     TABLE_ROWS: 6\n AVG_ROW_LENGTH: 542\n    DATA_LENGTH: 3255\nMAX_DATA_LENGTH: NULL\n   INDEX_LENGTH: NULL\n      DATA_FREE: NULL\n AUTO_INCREMENT: NULL\n    CREATE_TIME: 2022-11-17 14:32:30\n    UPDATE_TIME: 2022-11-17 14:32:55\n     CHECK_TIME: NULL\nTABLE_COLLATION: utf8_general_ci\n       CHECKSUM: NULL\n CREATE_OPTIONS: NULL\n  TABLE_COMMENT: OLAP\n1 row in set (1.04 sec)\n"})}),"\n",(0,r.jsx)(s.h2,{id:"information-schema-\u8868",children:"Information Schema \u8868"}),"\n",(0,r.jsxs)(s.p,{children:["StarRocks \u4f18\u5316\u4e86 ",(0,r.jsx)(s.code,{children:"information_schema"})," \u4e2d\u8868 ",(0,r.jsx)(s.code,{children:"tables"}),"\u3001\u8868 ",(0,r.jsx)(s.code,{children:"tables_config"})," \u548c\u8868 ",(0,r.jsx)(s.code,{children:"load_tracking_logs"})," \u63d0\u4f9b\u7684\u5143\u6570\u636e\u4fe1\u606f\uff0c\u5e76\u63d0\u4f9b\u4e86\u8868 ",(0,r.jsx)(s.code,{children:"loads"}),"\uff08\u4ece 3.1 \u7248\u672c\u8d77\uff09\uff1a"]}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:(0,r.jsx)(s.strong,{children:"Information Schema \u8868\u540d"})}),(0,r.jsx)(s.th,{children:(0,r.jsx)(s.strong,{children:"\u63cf\u8ff0"})})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"#tables",children:"tables"})}),(0,r.jsx)(s.td,{children:"\u63d0\u4f9b\u5e38\u89c4\u7684\u8868\u5143\u6570\u636e\u4fe1\u606f\u3002"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"#tables_config",children:"tables_config"})}),(0,r.jsx)(s.td,{children:"\u63d0\u4f9b\u989d\u5916\u7684 StarRocks \u72ec\u6709\u7684\u8868\u5143\u6570\u636e\u4fe1\u606f\u3002"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"#load_tracking_logs",children:"load_tracking_logs"})}),(0,r.jsx)(s.td,{children:"\u63d0\u4f9b\u5bfc\u5165\u4f5c\u4e1a\u76f8\u5173\u7684\u9519\u8bef\u4fe1\u606f\u3002"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"#loads",children:"loads"})}),(0,r.jsxs)(s.td,{children:["\u63d0\u4f9b\u5bfc\u5165\u4f5c\u4e1a\u7684\u7ed3\u679c\u4fe1\u606f\uff0c\u4ece 3.1 \u7248\u672c\u8d77\u652f\u6301\u3002\u5f53\u524d\u4ec5\u652f\u6301\u67e5\u770b ",(0,r.jsx)(s.a,{href:"/doc/zh/docs/sql-reference/sql-statements/data-manipulation/BROKER%20LOAD",children:"Broker Load"})," \u548c ",(0,r.jsx)(s.a,{href:"/doc/zh/docs/sql-reference/sql-statements/data-manipulation/insert",children:"Insert"})," \u5bfc\u5165\u4f5c\u4e1a\u7684\u7ed3\u679c\u4fe1\u606f\u3002"]})]})]})]}),"\n",(0,r.jsx)(s.h3,{id:"loads",children:"loads"}),"\n",(0,r.jsxs)(s.p,{children:["\u8868 ",(0,r.jsx)(s.code,{children:"loads"})," \u63d0\u4f9b\u4ee5\u4e0b\u5b57\u6bb5\uff1a"]}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:(0,r.jsx)(s.strong,{children:"\u5b57\u6bb5"})}),(0,r.jsx)(s.th,{children:(0,r.jsx)(s.strong,{children:"\u8bf4\u660e"})})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"JOB_ID"}),(0,r.jsx)(s.td,{children:"\u5bfc\u5165\u4f5c\u4e1a\u7684 ID\uff0c\u7531 StarRocks \u81ea\u52a8\u751f\u6210\u3002"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"LABEL"}),(0,r.jsx)(s.td,{children:"\u5bfc\u5165\u4f5c\u4e1a\u7684\u6807\u7b7e\u3002"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"DATABASE_NAME"}),(0,r.jsx)(s.td,{children:"\u76ee\u6807 StarRocks \u8868\u6240\u5728\u7684\u6570\u636e\u5e93\u7684\u540d\u79f0\u3002"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"STATE"}),(0,r.jsxs)(s.td,{children:["\u5bfc\u5165\u4f5c\u4e1a\u7684\u72b6\u6001\uff0c\u5305\u62ec\uff1a",(0,r.jsxs)("ul",{children:[(0,r.jsxs)("li",{children:[(0,r.jsx)(s.code,{children:"PENDING"}),"\uff1a\u5bfc\u5165\u4f5c\u4e1a\u5df2\u521b\u5efa\u3002"]}),(0,r.jsxs)("li",{children:[(0,r.jsx)(s.code,{children:"QUEUEING"}),"\uff1a\u5bfc\u5165\u4f5c\u4e1a\u6b63\u5728\u7b49\u5f85\u6267\u884c\u4e2d\u3002"]}),(0,r.jsxs)("li",{children:[(0,r.jsx)(s.code,{children:"LOADING"}),"\uff1a\u5bfc\u5165\u4f5c\u4e1a\u6b63\u5728\u6267\u884c\u4e2d\u3002"]}),(0,r.jsxs)("li",{children:[(0,r.jsx)(s.code,{children:"PREPARED"}),"\uff1a\u4e8b\u52a1\u5df2\u63d0\u4ea4\u3002"]}),(0,r.jsxs)("li",{children:[(0,r.jsx)(s.code,{children:"FINISHED"}),"\uff1a\u5bfc\u5165\u4f5c\u4e1a\u6210\u529f\u3002"]}),(0,r.jsxs)("li",{children:[(0,r.jsx)(s.code,{children:"CANCELLED"}),"\uff1a\u5bfc\u5165\u4f5c\u4e1a\u5931\u8d25\u3002"]})]}),"\u8bf7\u53c2\u89c1",(0,r.jsx)(s.a,{href:"/doc/zh/docs/loading/Loading_intro#%E5%BC%82%E6%AD%A5%E5%AF%BC%E5%85%A5",children:"\u5f02\u6b65\u5bfc\u5165"}),"\u3002"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"PROGRESS"}),(0,r.jsx)(s.td,{children:"\u5bfc\u5165\u4f5c\u4e1a ETL \u9636\u6bb5\u548c LOADING \u9636\u6bb5\u7684\u8fdb\u5ea6\u3002"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"TYPE"}),(0,r.jsxs)(s.td,{children:["\u5bfc\u5165\u4f5c\u4e1a\u7684\u7c7b\u578b\u3002\u5982\u679c\u662f Broker Load \u5bfc\u5165\uff0c\u5219\u8fd4\u56de ",(0,r.jsx)(s.code,{children:"BROKER"}),"\u3002\u5982\u679c\u662f INSERT \u5bfc\u5165\uff0c\u5219\u8fd4\u56de ",(0,r.jsx)(s.code,{children:"INSERT"}),"\u3002"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"PRIORITY"}),(0,r.jsxs)(s.td,{children:["\u5bfc\u5165\u4f5c\u4e1a\u7684\u4f18\u5148\u7ea7\u3002\u53d6\u503c\u8303\u56f4\uff1a",(0,r.jsx)(s.code,{children:"HIGHEST"}),"\u3001",(0,r.jsx)(s.code,{children:"HIGH"}),"\u3001",(0,r.jsx)(s.code,{children:"NORMAL"}),"\u3001",(0,r.jsx)(s.code,{children:"LOW"}),"\u3001",(0,r.jsx)(s.code,{children:"LOWEST"}),"\u3002"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"SCAN_ROWS"}),(0,r.jsx)(s.td,{children:"\u626b\u63cf\u7684\u6570\u636e\u884c\u603b\u6570\u3002"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"FILTERED_ROWS"}),(0,r.jsx)(s.td,{children:"\u56e0\u6570\u636e\u8d28\u91cf\u4e0d\u5408\u683c\u800c\u8fc7\u6ee4\u6389\u7684\u9519\u8bef\u6570\u636e\u884c\u603b\u6570\u3002"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"UNSELECTED_ROWS"}),(0,r.jsx)(s.td,{children:"\u6839\u636e WHERE \u5b50\u53e5\u4e2d\u6307\u5b9a\u7684\u6761\u4ef6\u8fc7\u6ee4\u6389\u7684\u6570\u636e\u884c\u603b\u6570\u3002"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"SINK_ROWS"}),(0,r.jsx)(s.td,{children:"\u5b8c\u6210\u5bfc\u5165\u7684\u6570\u636e\u884c\u603b\u6570\u3002"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"ETL_INFO"}),(0,r.jsx)(s.td,{children:"ETL \u8be6\u60c5\u3002\u8be5\u5b57\u6bb5\u53ea\u5bf9 Spark Load \u4f5c\u4e1a\u6709\u6548\u3002\u5982\u679c\u662f\u5176\u4ed6\u7c7b\u578b\u7684\u5bfc\u5165\u4f5c\u4e1a\uff0c\u5219\u8fd4\u56de\u7ed3\u679c\u4e3a\u7a7a\u3002"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"TASK_INFO"}),(0,r.jsxs)(s.td,{children:["\u5bfc\u5165\u4f5c\u4e1a\u7684\u8be6\u60c5\uff0c\u6bd4\u5982\u5bfc\u5165\u4f5c\u4e1a\u7684\u8d85\u65f6\u65f6\u957f (",(0,r.jsx)(s.code,{children:"timeout"}),") \u548c\u6700\u5927\u5bb9\u5fcd\u7387 (",(0,r.jsx)(s.code,{children:"max_filter_ratio"}),") \u7b49\u3002"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"CREATE_TIME"}),(0,r.jsxs)(s.td,{children:["\u5bfc\u5165\u4f5c\u4e1a\u7684\u521b\u5efa\u65f6\u95f4\u3002\u683c\u5f0f\uff1a",(0,r.jsx)(s.code,{children:"yyyy-MM-dd HH:mm:ss"}),"\u3002\u4f8b\u5982\uff0c",(0,r.jsx)(s.code,{children:"2023-07-24 14:58:58"}),"\u3002"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"ETL_START_TIME"}),(0,r.jsxs)(s.td,{children:["ETL \u9636\u6bb5\u7684\u5f00\u59cb\u65f6\u95f4\u3002\u683c\u5f0f\uff1a",(0,r.jsx)(s.code,{children:"yyyy-MM-dd HH:mm:ss"}),"\u3002\u4f8b\u5982\uff0c",(0,r.jsx)(s.code,{children:"2023-07-24 14:58:58"}),"\u3002"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"ETL_FINISH_TIME"}),(0,r.jsxs)(s.td,{children:["ETL \u9636\u6bb5\u7684\u7ed3\u675f\u65f6\u95f4\u3002\u683c\u5f0f\uff1a",(0,r.jsx)(s.code,{children:"yyyy-MM-dd HH:mm:ss"}),"\u3002\u4f8b\u5982\uff0c",(0,r.jsx)(s.code,{children:"2023-07-24 14:58:58"}),"\u3002"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"LOAD_START_TIME"}),(0,r.jsxs)(s.td,{children:["LOADING \u9636\u6bb5\u7684\u5f00\u59cb\u65f6\u95f4\u3002\u683c\u5f0f\uff1a",(0,r.jsx)(s.code,{children:"yyyy-MM-dd HH:mm:ss"}),"\u3002\u4f8b\u5982\uff0c",(0,r.jsx)(s.code,{children:"2023-07-24 14:58:58"}),"\u3002"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"LOAD_FINISH_TIME"}),(0,r.jsxs)(s.td,{children:["LOADING \u9636\u6bb5\u7684\u7ed3\u675f\u65f6\u95f4\u3002\u683c\u5f0f\uff1a",(0,r.jsx)(s.code,{children:"yyyy-MM-dd HH:mm:ss"}),"\u3002\u4f8b\u5982\uff0c",(0,r.jsx)(s.code,{children:"2023-07-24 14:58:58"}),"\u3002"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"JOB_DETAILS"}),(0,r.jsx)(s.td,{children:"\u5bfc\u5165\u6570\u636e\u7684\u8be6\u60c5\uff0c\u5305\u62ec\u5bfc\u5165\u7684\u6570\u636e\u5927\u5c0f\uff08\u6309\u5b57\u8282\u6570\u8ba1\uff09\u3001\u6587\u4ef6\u4e2a\u6570\u7b49\u3002"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"ERROR_MSG"}),(0,r.jsxs)(s.td,{children:["\u5bfc\u5165\u4f5c\u4e1a\u7684\u9519\u8bef\u4fe1\u606f\u3002\u5982\u679c\u6ca1\u6709\u9519\u8bef\uff0c\u5219\u8fd4\u56de ",(0,r.jsx)(s.code,{children:"NULL"}),"\u3002"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"TRACKING_URL"}),(0,r.jsxs)(s.td,{children:["\u5bfc\u5165\u4f5c\u4e1a\u4e2d\u8d28\u91cf\u4e0d\u5408\u683c\u6570\u636e\u91c7\u6837\u7684\u8bbf\u95ee\u5730\u5740\u3002\u53ef\u4ee5\u4f7f\u7528 ",(0,r.jsx)(s.code,{children:"curl"})," \u547d\u4ee4\u6216 ",(0,r.jsx)(s.code,{children:"wget"})," \u547d\u4ee4\u8bbf\u95ee\u8be5\u5730\u5740\u3002\u5982\u679c\u5bfc\u5165\u4f5c\u4e1a\u4e2d\u4e0d\u5b58\u5728\u8d28\u91cf\u4e0d\u5408\u683c\u7684\u6570\u636e\uff0c\u5219\u8fd4\u56de ",(0,r.jsx)(s.code,{children:"NULL"}),"\u3002"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"TRACKING_SQL"}),(0,r.jsxs)(s.td,{children:["\u5bfc\u5165\u4f5c\u4e1a\u8ddf\u8e2a\u65e5\u5fd7\u7684\u67e5\u8be2\u8bed\u53e5\u3002\u4ec5\u5728\u5bfc\u5165\u4f5c\u4e1a\u5305\u542b\u4e0d\u5408\u683c\u6570\u636e\u65f6\u624d\u4f1a\u8fd4\u56de\u67e5\u8be2\u8bed\u53e5\u3002\u5982\u679c\u5bfc\u5165\u4f5c\u4e1a\u672a\u5305\u542b\u4e0d\u5408\u683c\u6570\u636e\uff0c\u5219\u8fd4\u56de ",(0,r.jsx)(s.code,{children:"NULL"}),"\u3002"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"REJECTED_RECORD_PATH"}),(0,r.jsxs)(s.td,{children:["\u5bfc\u5165\u4f5c\u4e1a\u4e2d\u8d28\u91cf\u4e0d\u5408\u683c\u6570\u636e\u7684\u8bbf\u95ee\u5730\u5740\u3002\u8fd4\u56de\u7684\u4e0d\u5408\u683c\u6570\u636e\u7ed3\u679c\u6761\u6570\uff0c\u7531\u5bfc\u5165\u4f5c\u4e1a\u4e2d ",(0,r.jsx)(s.code,{children:"log_rejected_record_num"})," \u53c2\u6570\u7684\u8bbe\u7f6e\u51b3\u5b9a\u3002\u60a8\u53ef\u4ee5\u4f7f\u7528 ",(0,r.jsx)(s.code,{children:"wget"})," \u547d\u4ee4\u8bbf\u95ee\u8be5\u5730\u5740\u3002\u5982\u679c\u5bfc\u5165\u4f5c\u4e1a\u4e2d\u4e0d\u5b58\u5728\u8d28\u91cf\u4e0d\u5408\u683c\u7684\u6570\u636e\uff0c\u5219\u8fd4\u56de ",(0,r.jsx)(s.code,{children:"NULL"}),"\u3002"]})]})]})]}),"\n",(0,r.jsx)(s.h3,{id:"tables",children:"tables"}),"\n",(0,r.jsxs)(s.p,{children:["\u8868 ",(0,r.jsx)(s.code,{children:"tables"})," \u63d0\u4f9b\u4ee5\u4e0b\u5b57\u6bb5\uff1a"]}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:(0,r.jsx)(s.strong,{children:"\u5b57\u6bb5"})}),(0,r.jsx)(s.th,{children:(0,r.jsx)(s.strong,{children:"\u63cf\u8ff0"})})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"TABLE_CATALOG"}),(0,r.jsx)(s.td,{children:"\u8868\u6240\u5c5e\u7684 Catalog \u540d\u79f0\u3002"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"TABLE_SCHEMA"}),(0,r.jsx)(s.td,{children:"\u8868\u6240\u5c5e\u7684\u6570\u636e\u5e93\u540d\u79f0\u3002"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"TABLE_NAME"}),(0,r.jsx)(s.td,{children:"\u8868\u540d\u3002"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"TABLE_TYPE"}),(0,r.jsx)(s.td,{children:"\u8868\u7684\u7c7b\u578b\u3002 \u6709\u6548\u503c\uff1a\u201cBASE TABLE\u201d \u6216 \u201cVIEW\u201d\u3002"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"ENGINE"}),(0,r.jsx)(s.td,{children:"\u8868\u7684\u5f15\u64ce\u7c7b\u578b\u3002 \u6709\u6548\u503c\uff1a\u201cStarRocks\u201d\u3001\u201cMySQL\u201d\u3001\u201cMEMORY\u201d\u6216\u7a7a\u5b57\u7b26\u4e32\u3002"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"VERSION"}),(0,r.jsx)(s.td,{children:"\u8be5\u5b57\u6bb5\u6682\u4e0d\u53ef\u7528\u3002"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"ROW_FORMAT"}),(0,r.jsx)(s.td,{children:"\u8be5\u5b57\u6bb5\u6682\u4e0d\u53ef\u7528\u3002"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"TABLE_ROWS"}),(0,r.jsx)(s.td,{children:"\u8868\u7684\u884c\u6570\u3002"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"AVG_ROW_LENGTH"}),(0,r.jsxs)(s.td,{children:["\u8868\u7684\u5e73\u5747\u884c\u957f\u5ea6\uff08\u5927\u5c0f\uff09\uff0c\u7b49\u4e8e ",(0,r.jsx)(s.code,{children:"DATA_LENGTH"})," / ",(0,r.jsx)(s.code,{children:"TABLE_ROWS"}),"\u3002 \u5355\u4f4d\uff1aByte\u3002"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"DATA_LENGTH"}),(0,r.jsx)(s.td,{children:"\u8868\u7684\u6570\u636e\u6587\u4ef6\u957f\u5ea6\uff08\u5927\u5c0f\uff09\u3002\u5355\u4f4d\uff1aByte\u3002"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"MAX_DATA_LENGTH"}),(0,r.jsx)(s.td,{children:"\u8be5\u5b57\u6bb5\u6682\u4e0d\u53ef\u7528\u3002"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"INDEX_LENGTH"}),(0,r.jsx)(s.td,{children:"\u8be5\u5b57\u6bb5\u6682\u4e0d\u53ef\u7528\u3002"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"DATA_FREE"}),(0,r.jsx)(s.td,{children:"\u8be5\u5b57\u6bb5\u6682\u4e0d\u53ef\u7528\u3002"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"AUTO_INCREMENT"}),(0,r.jsx)(s.td,{children:"\u8be5\u5b57\u6bb5\u6682\u4e0d\u53ef\u7528\u3002"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"CREATE_TIME"}),(0,r.jsx)(s.td,{children:"\u521b\u5efa\u8868\u7684\u65f6\u95f4\u3002"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"UPDATE_TIME"}),(0,r.jsx)(s.td,{children:"\u6700\u540e\u4e00\u6b21\u66f4\u65b0\u8868\u7684\u65f6\u95f4\u3002"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"CHECK_TIME"}),(0,r.jsx)(s.td,{children:"\u6700\u540e\u4e00\u6b21\u5bf9\u8868\u8fdb\u884c\u4e00\u81f4\u6027\u68c0\u67e5\u7684\u65f6\u95f4\u3002"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"TABLE_COLLATION"}),(0,r.jsx)(s.td,{children:"\u8868\u7684\u9ed8\u8ba4 Collation\u3002"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"CHECKSUM"}),(0,r.jsx)(s.td,{children:"\u8be5\u5b57\u6bb5\u6682\u4e0d\u53ef\u7528\u3002"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"CREATE_OPTIONS"}),(0,r.jsx)(s.td,{children:"\u8be5\u5b57\u6bb5\u6682\u4e0d\u53ef\u7528\u3002"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"TABLE_COMMENT"}),(0,r.jsx)(s.td,{children:"\u8868\u7684 Comment\u3002"})]})]})]}),"\n",(0,r.jsx)(s.h3,{id:"tables_config",children:"tables_config"}),"\n",(0,r.jsxs)(s.p,{children:["\u8868 ",(0,r.jsx)(s.code,{children:"tables_config"})," \u63d0\u4f9b\u4ee5\u4e0b\u5b57\u6bb5\uff1a"]}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:(0,r.jsx)(s.strong,{children:"\u5b57\u6bb5"})}),(0,r.jsx)(s.th,{children:(0,r.jsx)(s.strong,{children:"\u63cf\u8ff0"})})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"TABLE_SCHEMA"}),(0,r.jsx)(s.td,{children:"\u8868\u6240\u5c5e\u7684\u6570\u636e\u5e93\u540d\u79f0\u3002"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"TABLE_NAME"}),(0,r.jsx)(s.td,{children:"\u8868\u540d\u3002"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"TABLE_ENGINE"}),(0,r.jsx)(s.td,{children:"\u8868\u7684\u5f15\u64ce\u7c7b\u578b\u3002"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"TABLE_MODEL"}),(0,r.jsx)(s.td,{children:"\u8868\u7684\u6570\u636e\u6a21\u578b\u3002 \u6709\u6548\u503c\uff1a\u201cDUP_KEYS\u201d\u3001\u201cAGG_KEYS\u201d\u3001\u201cUNQ_KEYS\u201d \u6216 \u201cPRI_KEYS\u201d\u3002"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"PRIMARY_KEY"}),(0,r.jsx)(s.td,{children:"\u4e3b\u952e\u6a21\u578b\u6216\u66f4\u65b0\u6a21\u578b\u8868\u7684\u4e3b\u952e\u3002\u5982\u679c\u8be5\u8868\u4e0d\u662f\u4e3b\u952e\u6a21\u578b\u6216\u66f4\u65b0\u6a21\u578b\u8868\uff0c\u5219\u8fd4\u56de\u7a7a\u5b57\u7b26\u4e32\u3002"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"PARTITION_KEY"}),(0,r.jsx)(s.td,{children:"\u8868\u7684\u5206\u533a\u952e\u3002"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"DISTRIBUTE_KEY"}),(0,r.jsx)(s.td,{children:"\u8868\u7684\u5206\u6876\u952e\u3002"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"DISTRIBUTE_TYPE"}),(0,r.jsx)(s.td,{children:"\u8868\u7684\u5206\u6876\u65b9\u5f0f\u3002"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"DISTRIBUTE_BUCKET"}),(0,r.jsx)(s.td,{children:"\u8868\u7684\u5206\u6876\u6570\u3002"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"SORT_KEY"}),(0,r.jsx)(s.td,{children:"\u8868\u7684\u6392\u5e8f\u952e\u3002"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"PROPERTIES"}),(0,r.jsx)(s.td,{children:"\u8868\u7684\u5c5e\u6027\u3002"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"TABLE_ID"}),(0,r.jsx)(s.td,{children:"\u8868\u7684 ID\u3002"})]})]})]}),"\n",(0,r.jsx)(s.h3,{id:"load_tracking_logs",children:"load_tracking_logs"}),"\n",(0,r.jsx)(s.p,{children:"\u6b64\u529f\u80fd\u81ea StarRocks v3.0 \u8d77\u652f\u6301\u3002"}),"\n",(0,r.jsxs)(s.p,{children:["\u8868 ",(0,r.jsx)(s.code,{children:"load_tracking_logs"})," \u63d0\u4f9b\u4ee5\u4e0b\u5b57\u6bb5\uff1a"]}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:(0,r.jsx)(s.strong,{children:"\u5b57\u6bb5"})}),(0,r.jsx)(s.th,{children:(0,r.jsx)(s.strong,{children:"\u63cf\u8ff0"})})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"JOB_ID"}),(0,r.jsx)(s.td,{children:"\u5bfc\u5165\u4f5c\u4e1a\u7684 ID\u3002"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"LABEL"}),(0,r.jsx)(s.td,{children:"\u5bfc\u5165\u4f5c\u4e1a\u7684 Label\u3002"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"DATABASE_NAME"}),(0,r.jsx)(s.td,{children:"\u5bfc\u5165\u4f5c\u4e1a\u6240\u5c5e\u7684\u6570\u636e\u5e93\u540d\u79f0\u3002"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"TRACKING_LOG"}),(0,r.jsx)(s.td,{children:"\u5bfc\u5165\u4f5c\u4e1a\u7684\u9519\u8bef\u65e5\u5fd7\u4fe1\u606f\uff08\u5982\u6709\uff09\u3002"})]})]})]}),"\n",(0,r.jsx)(s.h3,{id:"materialized_views",children:"materialized_views"}),"\n",(0,r.jsxs)(s.p,{children:["\u8868 ",(0,r.jsx)(s.code,{children:"materialized_views"})," \u63d0\u4f9b\u4ee5\u4e0b\u5b57\u6bb5\uff1a"]}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:(0,r.jsx)(s.strong,{children:"\u5b57\u6bb5"})}),(0,r.jsx)(s.th,{children:(0,r.jsx)(s.strong,{children:"\u63cf\u8ff0"})})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"MATERIALIZED_VIEW_ID"}),(0,r.jsx)(s.td,{children:"\u7269\u5316\u89c6\u56fe ID"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"TABLE_SCHEMA"}),(0,r.jsx)(s.td,{children:"\u7269\u5316\u89c6\u56fe\u6240\u5728\u7684\u6570\u636e\u5e93\u540d\u79f0"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"TABLE_NAME"}),(0,r.jsx)(s.td,{children:"\u7269\u5316\u89c6\u56fe\u540d\u79f0"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"REFRESH_TYPE"}),(0,r.jsxs)(s.td,{children:["\u5237\u65b0\u7c7b\u578b\uff0c\u5305\u62ec ",(0,r.jsx)(s.code,{children:"ROLLUP"}),"\u3001",(0,r.jsx)(s.code,{children:"ASYNC"})," \u4ee5\u53ca ",(0,r.jsx)(s.code,{children:"MANUAL"})]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"IS_ACTIVE"}),(0,r.jsx)(s.td,{children:"\u662f\u5426\u751f\u6548\uff0c\u5931\u6548\u7684\u7269\u5316\u89c6\u56fe\u4e0d\u4f1a\u88ab\u5237\u65b0\u548c\u67e5\u8be2\u6539\u5199"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"INACTIVE_REASON"}),(0,r.jsx)(s.td,{children:"\u5931\u6548\u7684\u539f\u56e0"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"PARTITION_TYPE"}),(0,r.jsx)(s.td,{children:"\u7269\u5316\u89c6\u56fe\u5206\u533a\u7c7b\u578b"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"TASK_ID"}),(0,r.jsx)(s.td,{children:"\u7269\u5316\u89c6\u56fe\u5237\u65b0\u4efb\u52a1\u7684 ID"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"TASK_NAME"}),(0,r.jsx)(s.td,{children:"\u7269\u5316\u89c6\u56fe\u5237\u65b0\u4efb\u52a1\u7684\u540d\u79f0"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"LAST_REFRESH_START_TIME"}),(0,r.jsx)(s.td,{children:"\u6700\u8fd1\u4e00\u6b21\u5237\u65b0\u4efb\u52a1\u7684\u5f00\u59cb\u65f6\u95f4"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"LAST_REFRESH_FINISHED_TIME"}),(0,r.jsx)(s.td,{children:"\u6700\u8fd1\u4e00\u6b21\u5237\u65b0\u4efb\u52a1\u7684\u7ed3\u675f\u65f6\u95f4"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"LAST_REFRESH_DURATION"}),(0,r.jsx)(s.td,{children:"\u6700\u8fd1\u4e00\u6b21\u5237\u65b0\u4efb\u52a1\u7684\u6301\u7eed\u65f6\u95f4"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"LAST_REFRESH_STATE"}),(0,r.jsx)(s.td,{children:"\u6700\u8fd1\u4e00\u6b21\u5237\u65b0\u4efb\u52a1\u7684\u72b6\u6001"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"LAST_REFRESH_FORCE_REFRESH"}),(0,r.jsx)(s.td,{children:"\u6700\u8fd1\u4e00\u6b21\u5237\u65b0\u4efb\u52a1\u662f\u5426\u5f3a\u5236\u5237\u65b0"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"LAST_REFRESH_START_PARTITION"}),(0,r.jsx)(s.td,{children:"\u6700\u8fd1\u4e00\u6b21\u5237\u65b0\u4efb\u52a1\u7684\u5f00\u59cb\u5206\u533a"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"LAST_REFRESH_END_PARTITION"}),(0,r.jsx)(s.td,{children:"\u6700\u8fd1\u4e00\u6b21\u5237\u65b0\u4efb\u52a1\u7684\u7ed3\u675f\u5206\u533a"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"LAST_REFRESH_BASE_REFRESH_PARTITIONS"}),(0,r.jsx)(s.td,{children:"\u6700\u8fd1\u4e00\u6b21\u5237\u65b0\u4efb\u52a1\u7684\u57fa\u8868\u5206\u533a"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"LAST_REFRESH_MV_REFRESH_PARTITIONS"}),(0,r.jsx)(s.td,{children:"\u6700\u8fd1\u4e00\u6b21\u5237\u65b0\u4efb\u52a1\u7684\u5237\u65b0\u7684\u5206\u533a"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"LAST_REFRESH_ERROR_CODE"}),(0,r.jsx)(s.td,{children:"\u6700\u8fd1\u4e00\u6b21\u5237\u65b0\u4efb\u52a1\u7684\u9519\u8bef\u7801"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"LAST_REFRESH_ERROR_MESSAGE"}),(0,r.jsx)(s.td,{children:"\u6700\u8fd1\u4e00\u6b21\u5237\u65b0\u4efb\u52a1\u7684\u9519\u8bef\u4fe1\u606f"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"TABLE_ROWS"}),(0,r.jsx)(s.td,{children:"\u7269\u5316\u89c6\u56fe\u7684\u6570\u636e\u884c\u6570\uff0c\u540e\u53f0\u7edf\u8ba1\u7684\u8fd1\u4f3c\u503c"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"MATERIALIZED_VIEW_DEFINITION"}),(0,r.jsx)(s.td,{children:"\u7269\u5316\u89c6\u56fe\u7684 SQL \u5b9a\u4e49"})]})]})]})]})}const j=function(d={}){const{wrapper:s}=Object.assign({},(0,n.ah)(),d.components);return s?(0,r.jsx)(s,Object.assign({},d,{children:(0,r.jsx)(x,d)})):x(d)}},11151:(d,s,e)=>{e.d(s,{Zo:()=>l,ah:()=>i});var r=e(67294);const n=r.createContext({});function i(d){const s=r.useContext(n);return r.useMemo((()=>"function"==typeof d?d(s):{...s,...d}),[s,d])}const c={};function l({components:d,children:s,disableParentContext:e}){let l;return l=e?"function"==typeof d?d({}):d||c:i(d),r.createElement(n.Provider,{value:l},s)}}}]);