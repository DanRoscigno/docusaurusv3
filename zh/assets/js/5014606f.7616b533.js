"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[15216],{28707:(s,d,e)=>{e.r(d),e.d(d,{assets:()=>l,contentTitle:()=>t,default:()=>j,frontMatter:()=>i,metadata:()=>c,toc:()=>h});var n=e(85893),r=e(11151);const i={},t="Information Schema",c={id:"administration/information_schema",title:"Information Schema",description:"information_schema \u662f StarRocks \u5b9e\u4f8b\u4e2d\u7684\u4e00\u4e2a\u6570\u636e\u5e93\u3002\u8be5\u6570\u636e\u5e93\u5305\u542b\u6570\u5f20\u7531\u7cfb\u7edf\u5b9a\u4e49\u7684\u8868\uff0c\u8fd9\u4e9b\u8868\u4e2d\u5b58\u50a8\u4e86\u5173\u4e8e StarRocks \u5b9e\u4f8b\u4e2d\u6240\u6709\u5bf9\u8c61\u7684\u5927\u91cf\u5143\u6570\u636e\u4fe1\u606f\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.5/administration/information_schema.md",sourceDirName:"administration",slug:"/administration/information_schema",permalink:"/doc/zh/docs/2.5/administration/information_schema",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-2.5/administration/information_schema.md",tags:[],version:"2.5",frontMatter:{},sidebar:"Chinese31",previous:{title:"\u8bbe\u7f6e\u65f6\u533a",permalink:"/doc/zh/docs/2.5/administration/timezone"},next:{title:"\u7ba1\u7406\u8d44\u6e90",permalink:"/doc/zh/docs/2.5/category/\u7ba1\u7406\u8d44\u6e90"}},l={},h=[{value:"\u901a\u8fc7 Information Schema \u67e5\u770b\u5143\u6570\u636e\u4fe1\u606f",id:"\u901a\u8fc7-information-schema-\u67e5\u770b\u5143\u6570\u636e\u4fe1\u606f",level:2},{value:"Information Schema \u8868",id:"information-schema-\u8868",level:2},{value:"tables",id:"tables",level:3},{value:"tables_config",id:"tables_config",level:3},{value:"load_tracking_logs",id:"load_tracking_logs",level:3},{value:"materialized_views",id:"materialized_views",level:3}];function x(s){const d=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",pre:"pre",table:"table",thead:"thead",tr:"tr",th:"th",strong:"strong",tbody:"tbody",td:"td",a:"a",h3:"h3"},(0,r.ah)(),s.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(d.h1,{id:"information-schema",children:"Information Schema"}),"\n",(0,n.jsxs)(d.p,{children:[(0,n.jsx)(d.code,{children:"information_schema"})," \u662f StarRocks \u5b9e\u4f8b\u4e2d\u7684\u4e00\u4e2a\u6570\u636e\u5e93\u3002\u8be5\u6570\u636e\u5e93\u5305\u542b\u6570\u5f20\u7531\u7cfb\u7edf\u5b9a\u4e49\u7684\u8868\uff0c\u8fd9\u4e9b\u8868\u4e2d\u5b58\u50a8\u4e86\u5173\u4e8e StarRocks \u5b9e\u4f8b\u4e2d\u6240\u6709\u5bf9\u8c61\u7684\u5927\u91cf\u5143\u6570\u636e\u4fe1\u606f\u3002"]}),"\n",(0,n.jsx)(d.h2,{id:"\u901a\u8fc7-information-schema-\u67e5\u770b\u5143\u6570\u636e\u4fe1\u606f",children:"\u901a\u8fc7 Information Schema \u67e5\u770b\u5143\u6570\u636e\u4fe1\u606f"}),"\n",(0,n.jsxs)(d.p,{children:["\u60a8\u53ef\u4ee5\u901a\u8fc7\u67e5\u8be2 ",(0,n.jsx)(d.code,{children:"information_schema"})," \u4e2d\u7684\u8868\u6765\u67e5\u770b StarRocks \u5b9e\u4f8b\u4e2d\u7684\u5143\u6570\u636e\u4fe1\u606f\u3002"]}),"\n",(0,n.jsxs)(d.p,{children:["\u4ee5\u4e0b\u793a\u4f8b\u901a\u8fc7\u67e5\u8be2\u8868 ",(0,n.jsx)(d.code,{children:"tables"})," \u67e5\u770b StarRocks \u4e2d\u540d\u4e3a ",(0,n.jsx)(d.code,{children:"sr_member"})," \u7684\u8868\u76f8\u5173\u7684\u5143\u6570\u636e\u4fe1\u606f\u3002"]}),"\n",(0,n.jsx)(d.pre,{children:(0,n.jsx)(d.code,{className:"language-Plain",children:"mysql> SELECT * FROM information_schema.tables WHERE TABLE_NAME like 'sr_member'\\G\n*************************** 1. row ***************************\n  TABLE_CATALOG: def\n   TABLE_SCHEMA: sr_hub\n     TABLE_NAME: sr_member\n     TABLE_TYPE: BASE TABLE\n         ENGINE: StarRocks\n        VERSION: NULL\n     ROW_FORMAT: NULL\n     TABLE_ROWS: 6\n AVG_ROW_LENGTH: 542\n    DATA_LENGTH: 3255\nMAX_DATA_LENGTH: NULL\n   INDEX_LENGTH: NULL\n      DATA_FREE: NULL\n AUTO_INCREMENT: NULL\n    CREATE_TIME: 2022-11-17 14:32:30\n    UPDATE_TIME: 2022-11-17 14:32:55\n     CHECK_TIME: NULL\nTABLE_COLLATION: utf8_general_ci\n       CHECKSUM: NULL\n CREATE_OPTIONS: NULL\n  TABLE_COMMENT: OLAP\n1 row in set (1.04 sec)\n"})}),"\n",(0,n.jsx)(d.h2,{id:"information-schema-\u8868",children:"Information Schema \u8868"}),"\n",(0,n.jsxs)(d.p,{children:["StarRocks \u4f18\u5316\u4e86 ",(0,n.jsx)(d.code,{children:"information_schema"})," \u4e2d\u4ee5\u4e0b\u8868\u63d0\u4f9b\u7684\u5143\u6570\u636e\u4fe1\u606f\uff1a"]}),"\n",(0,n.jsxs)(d.table,{children:[(0,n.jsx)(d.thead,{children:(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.th,{children:(0,n.jsx)(d.strong,{children:"Information Schema \u8868\u540d"})}),(0,n.jsx)(d.th,{children:(0,n.jsx)(d.strong,{children:"\u63cf\u8ff0"})})]})}),(0,n.jsxs)(d.tbody,{children:[(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:(0,n.jsx)(d.a,{href:"#tables",children:"tables"})}),(0,n.jsx)(d.td,{children:"\u63d0\u4f9b\u5e38\u89c4\u7684\u8868\u5143\u6570\u636e\u4fe1\u606f\u3002"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:(0,n.jsx)(d.a,{href:"#tables_config",children:"tables_config"})}),(0,n.jsx)(d.td,{children:"\u63d0\u4f9b\u989d\u5916\u7684 StarRocks \u72ec\u6709\u7684\u8868\u5143\u6570\u636e\u4fe1\u606f\u3002"})]})]})]}),"\n",(0,n.jsx)(d.h3,{id:"tables",children:"tables"}),"\n",(0,n.jsxs)(d.p,{children:["\u8868 ",(0,n.jsx)(d.code,{children:"tables"})," \u63d0\u4f9b\u4ee5\u4e0b\u5b57\u6bb5\uff1a"]}),"\n",(0,n.jsxs)(d.table,{children:[(0,n.jsx)(d.thead,{children:(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.th,{children:(0,n.jsx)(d.strong,{children:"\u5b57\u6bb5"})}),(0,n.jsx)(d.th,{children:(0,n.jsx)(d.strong,{children:"\u63cf\u8ff0"})})]})}),(0,n.jsxs)(d.tbody,{children:[(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"TABLE_CATALOG"}),(0,n.jsx)(d.td,{children:"\u8868\u6240\u5c5e\u7684 Catalog \u540d\u79f0\u3002"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"TABLE_SCHEMA"}),(0,n.jsx)(d.td,{children:"\u8868\u6240\u5c5e\u7684\u6570\u636e\u5e93\u540d\u79f0\u3002"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"TABLE_NAME"}),(0,n.jsx)(d.td,{children:"\u8868\u540d\u3002"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"TABLE_TYPE"}),(0,n.jsx)(d.td,{children:"\u8868\u7684\u7c7b\u578b\u3002 \u6709\u6548\u503c\uff1a\u201cBASE TABLE\u201d \u6216 \u201cVIEW\u201d\u3002"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"ENGINE"}),(0,n.jsx)(d.td,{children:"\u8868\u7684\u5f15\u64ce\u7c7b\u578b\u3002 \u6709\u6548\u503c\uff1a\u201cStarRocks\u201d\u3001\u201cMySQL\u201d\u3001\u201cMEMORY\u201d\u6216\u7a7a\u5b57\u7b26\u4e32\u3002"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"VERSION"}),(0,n.jsx)(d.td,{children:"\u8be5\u5b57\u6bb5\u6682\u4e0d\u53ef\u7528\u3002"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"ROW_FORMAT"}),(0,n.jsx)(d.td,{children:"\u8be5\u5b57\u6bb5\u6682\u4e0d\u53ef\u7528\u3002"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"TABLE_ROWS"}),(0,n.jsx)(d.td,{children:"\u8868\u7684\u884c\u6570\u3002"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"AVG_ROW_LENGTH"}),(0,n.jsxs)(d.td,{children:["\u8868\u7684\u5e73\u5747\u884c\u957f\u5ea6\uff08\u5927\u5c0f\uff09\uff0c\u7b49\u4e8e ",(0,n.jsx)(d.code,{children:"DATA_LENGTH"})," / ",(0,n.jsx)(d.code,{children:"TABLE_ROWS"}),"\u3002 \u5355\u4f4d\uff1aByte\u3002"]})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"DATA_LENGTH"}),(0,n.jsx)(d.td,{children:"\u8868\u7684\u6570\u636e\u6587\u4ef6\u957f\u5ea6\uff08\u5927\u5c0f\uff09\u3002\u5355\u4f4d\uff1aByte\u3002"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"MAX_DATA_LENGTH"}),(0,n.jsx)(d.td,{children:"\u8be5\u5b57\u6bb5\u6682\u4e0d\u53ef\u7528\u3002"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"INDEX_LENGTH"}),(0,n.jsx)(d.td,{children:"\u8be5\u5b57\u6bb5\u6682\u4e0d\u53ef\u7528\u3002"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"DATA_FREE"}),(0,n.jsx)(d.td,{children:"\u8be5\u5b57\u6bb5\u6682\u4e0d\u53ef\u7528\u3002"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"AUTO_INCREMENT"}),(0,n.jsx)(d.td,{children:"\u8be5\u5b57\u6bb5\u6682\u4e0d\u53ef\u7528\u3002"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"CREATE_TIME"}),(0,n.jsx)(d.td,{children:"\u521b\u5efa\u8868\u7684\u65f6\u95f4\u3002"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"UPDATE_TIME"}),(0,n.jsx)(d.td,{children:"\u6700\u540e\u4e00\u6b21\u66f4\u65b0\u8868\u7684\u65f6\u95f4\u3002"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"CHECK_TIME"}),(0,n.jsx)(d.td,{children:"\u6700\u540e\u4e00\u6b21\u5bf9\u8868\u8fdb\u884c\u4e00\u81f4\u6027\u68c0\u67e5\u7684\u65f6\u95f4\u3002"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"TABLE_COLLATION"}),(0,n.jsx)(d.td,{children:"\u8868\u7684\u9ed8\u8ba4 Collation\u3002"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"CHECKSUM"}),(0,n.jsx)(d.td,{children:"\u8be5\u5b57\u6bb5\u6682\u4e0d\u53ef\u7528\u3002"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"CREATE_OPTIONS"}),(0,n.jsx)(d.td,{children:"\u8be5\u5b57\u6bb5\u6682\u4e0d\u53ef\u7528\u3002"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"TABLE_COMMENT"}),(0,n.jsx)(d.td,{children:"\u8868\u7684 Comment\u3002"})]})]})]}),"\n",(0,n.jsx)(d.h3,{id:"tables_config",children:"tables_config"}),"\n",(0,n.jsxs)(d.p,{children:["\u8868 ",(0,n.jsx)(d.code,{children:"tables_config"})," \u63d0\u4f9b\u4ee5\u4e0b\u5b57\u6bb5\uff1a"]}),"\n",(0,n.jsxs)(d.table,{children:[(0,n.jsx)(d.thead,{children:(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.th,{children:(0,n.jsx)(d.strong,{children:"\u5b57\u6bb5"})}),(0,n.jsx)(d.th,{children:(0,n.jsx)(d.strong,{children:"\u63cf\u8ff0"})})]})}),(0,n.jsxs)(d.tbody,{children:[(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"TABLE_SCHEMA"}),(0,n.jsx)(d.td,{children:"\u8868\u6240\u5c5e\u7684\u6570\u636e\u5e93\u540d\u79f0\u3002"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"TABLE_NAME"}),(0,n.jsx)(d.td,{children:"\u8868\u540d\u3002"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"TABLE_ENGINE"}),(0,n.jsx)(d.td,{children:"\u8868\u7684\u5f15\u64ce\u7c7b\u578b\u3002"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"TABLE_MODEL"}),(0,n.jsx)(d.td,{children:"\u8868\u7684\u6570\u636e\u6a21\u578b\u3002 \u6709\u6548\u503c\uff1a\u201cDUP_KEYS\u201d\u3001\u201cAGG_KEYS\u201d\u3001\u201cUNQ_KEYS\u201d \u6216 \u201cPRI_KEYS\u201d\u3002"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"PRIMARY_KEY"}),(0,n.jsx)(d.td,{children:"\u4e3b\u952e\u6a21\u578b\u6216\u66f4\u65b0\u6a21\u578b\u8868\u7684\u4e3b\u952e\u3002\u5982\u679c\u8be5\u8868\u4e0d\u662f\u4e3b\u952e\u6a21\u578b\u6216\u66f4\u65b0\u6a21\u578b\u8868\uff0c\u5219\u8fd4\u56de\u7a7a\u5b57\u7b26\u4e32\u3002"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"PARTITION_KEY"}),(0,n.jsx)(d.td,{children:"\u8868\u7684\u5206\u533a\u952e\u3002"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"DISTRIBUTE_KEY"}),(0,n.jsx)(d.td,{children:"\u8868\u7684\u5206\u6876\u952e\u3002"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"DISTRIBUTE_TYPE"}),(0,n.jsx)(d.td,{children:"\u8868\u7684\u5206\u6876\u65b9\u5f0f\u3002"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"DISTRIBUTE_BUCKET"}),(0,n.jsx)(d.td,{children:"\u8868\u7684\u5206\u6876\u6570\u3002"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"SORT_KEY"}),(0,n.jsx)(d.td,{children:"\u8868\u7684\u6392\u5e8f\u952e\u3002"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"PROPERTIES"}),(0,n.jsx)(d.td,{children:"\u8868\u7684\u5c5e\u6027\u3002"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"TABLE_ID"}),(0,n.jsx)(d.td,{children:"\u8868\u7684 ID\u3002"})]})]})]}),"\n",(0,n.jsx)(d.h3,{id:"load_tracking_logs",children:"load_tracking_logs"}),"\n",(0,n.jsx)(d.p,{children:"\u6b64\u529f\u80fd\u81ea StarRocks v3.0 \u8d77\u652f\u6301\u3002"}),"\n",(0,n.jsxs)(d.p,{children:["\u8868 ",(0,n.jsx)(d.code,{children:"load_tracking_logs"})," \u63d0\u4f9b\u4ee5\u4e0b\u5b57\u6bb5\uff1a"]}),"\n",(0,n.jsxs)(d.table,{children:[(0,n.jsx)(d.thead,{children:(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.th,{children:(0,n.jsx)(d.strong,{children:"\u5b57\u6bb5"})}),(0,n.jsx)(d.th,{children:(0,n.jsx)(d.strong,{children:"\u63cf\u8ff0"})})]})}),(0,n.jsxs)(d.tbody,{children:[(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"JOB_ID"}),(0,n.jsx)(d.td,{children:"\u5bfc\u5165\u4f5c\u4e1a\u7684 ID\u3002"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"LABEL"}),(0,n.jsx)(d.td,{children:"\u5bfc\u5165\u4f5c\u4e1a\u7684 Label\u3002"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"DATABASE_NAME"}),(0,n.jsx)(d.td,{children:"\u5bfc\u5165\u4f5c\u4e1a\u6240\u5c5e\u7684\u6570\u636e\u5e93\u540d\u79f0\u3002"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"TRACKING_LOG"}),(0,n.jsx)(d.td,{children:"\u5bfc\u5165\u4f5c\u4e1a\u7684\u9519\u8bef\u65e5\u5fd7\u4fe1\u606f\uff08\u5982\u6709\uff09\u3002"})]})]})]}),"\n",(0,n.jsx)(d.h3,{id:"materialized_views",children:"materialized_views"}),"\n",(0,n.jsxs)(d.p,{children:["\u8868 ",(0,n.jsx)(d.code,{children:"materialized_views"})," \u63d0\u4f9b\u4ee5\u4e0b\u5b57\u6bb5\uff1a"]}),"\n",(0,n.jsxs)(d.table,{children:[(0,n.jsx)(d.thead,{children:(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.th,{children:(0,n.jsx)(d.strong,{children:"\u5b57\u6bb5"})}),(0,n.jsx)(d.th,{children:(0,n.jsx)(d.strong,{children:"\u63cf\u8ff0"})})]})}),(0,n.jsxs)(d.tbody,{children:[(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"MATERIALIZED_VIEW_ID"}),(0,n.jsx)(d.td,{children:"\u7269\u5316\u89c6\u56fe ID"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"TABLE_SCHEMA"}),(0,n.jsx)(d.td,{children:"\u7269\u5316\u89c6\u56fe\u6240\u5728\u7684\u6570\u636e\u5e93\u540d\u79f0"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"TABLE_NAME"}),(0,n.jsx)(d.td,{children:"\u7269\u5316\u89c6\u56fe\u540d\u79f0"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"REFRESH_TYPE"}),(0,n.jsxs)(d.td,{children:["\u5237\u65b0\u7c7b\u578b\uff0c\u5305\u62ec ",(0,n.jsx)(d.code,{children:"ROLLUP"}),"\u3001",(0,n.jsx)(d.code,{children:"ASYNC"})," \u4ee5\u53ca ",(0,n.jsx)(d.code,{children:"MANUAL"})]})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"IS_ACTIVE"}),(0,n.jsx)(d.td,{children:"\u662f\u5426\u751f\u6548\uff0c\u5931\u6548\u7684\u7269\u5316\u89c6\u56fe\u4e0d\u4f1a\u88ab\u5237\u65b0\u548c\u67e5\u8be2\u6539\u5199"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"INACTIVE_REASON"}),(0,n.jsx)(d.td,{children:"\u5931\u6548\u7684\u539f\u56e0"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"PARTITION_TYPE"}),(0,n.jsx)(d.td,{children:"\u7269\u5316\u89c6\u56fe\u5206\u533a\u7c7b\u578b"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"TASK_ID"}),(0,n.jsx)(d.td,{children:"\u7269\u5316\u89c6\u56fe\u5237\u65b0\u4efb\u52a1\u7684 ID"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"TASK_NAME"}),(0,n.jsx)(d.td,{children:"\u7269\u5316\u89c6\u56fe\u5237\u65b0\u4efb\u52a1\u7684\u540d\u79f0"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"LAST_REFRESH_START_TIME"}),(0,n.jsx)(d.td,{children:"\u6700\u8fd1\u4e00\u6b21\u5237\u65b0\u4efb\u52a1\u7684\u5f00\u59cb\u65f6\u95f4"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"LAST_REFRESH_FINISHED_TIME"}),(0,n.jsx)(d.td,{children:"\u6700\u8fd1\u4e00\u6b21\u5237\u65b0\u4efb\u52a1\u7684\u7ed3\u675f\u65f6\u95f4"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"LAST_REFRESH_DURATION"}),(0,n.jsx)(d.td,{children:"\u6700\u8fd1\u4e00\u6b21\u5237\u65b0\u4efb\u52a1\u7684\u6301\u7eed\u65f6\u95f4"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"LAST_REFRESH_STATE"}),(0,n.jsx)(d.td,{children:"\u6700\u8fd1\u4e00\u6b21\u5237\u65b0\u4efb\u52a1\u7684\u72b6\u6001"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"LAST_REFRESH_FORCE_REFRESH"}),(0,n.jsx)(d.td,{children:"\u6700\u8fd1\u4e00\u6b21\u5237\u65b0\u4efb\u52a1\u662f\u5426\u5f3a\u5236\u5237\u65b0"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"LAST_REFRESH_START_PARTITION"}),(0,n.jsx)(d.td,{children:"\u6700\u8fd1\u4e00\u6b21\u5237\u65b0\u4efb\u52a1\u7684\u5f00\u59cb\u5206\u533a"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"LAST_REFRESH_END_PARTITION"}),(0,n.jsx)(d.td,{children:"\u6700\u8fd1\u4e00\u6b21\u5237\u65b0\u4efb\u52a1\u7684\u7ed3\u675f\u5206\u533a"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"LAST_REFRESH_BASE_REFRESH_PARTITIONS"}),(0,n.jsx)(d.td,{children:"\u6700\u8fd1\u4e00\u6b21\u5237\u65b0\u4efb\u52a1\u7684\u57fa\u8868\u5206\u533a"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"LAST_REFRESH_MV_REFRESH_PARTITIONS"}),(0,n.jsx)(d.td,{children:"\u6700\u8fd1\u4e00\u6b21\u5237\u65b0\u4efb\u52a1\u7684\u5237\u65b0\u7684\u5206\u533a"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"LAST_REFRESH_ERROR_CODE"}),(0,n.jsx)(d.td,{children:"\u6700\u8fd1\u4e00\u6b21\u5237\u65b0\u4efb\u52a1\u7684\u9519\u8bef\u7801"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"LAST_REFRESH_ERROR_MESSAGE"}),(0,n.jsx)(d.td,{children:"\u6700\u8fd1\u4e00\u6b21\u5237\u65b0\u4efb\u52a1\u7684\u9519\u8bef\u4fe1\u606f"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"TABLE_ROWS"}),(0,n.jsx)(d.td,{children:"\u7269\u5316\u89c6\u56fe\u7684\u6570\u636e\u884c\u6570\uff0c\u540e\u53f0\u7edf\u8ba1\u7684\u8fd1\u4f3c\u503c"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"MATERIALIZED_VIEW_DEFINITION"}),(0,n.jsx)(d.td,{children:"\u7269\u5316\u89c6\u56fe\u7684 SQL \u5b9a\u4e49"})]})]})]})]})}const j=function(s={}){const{wrapper:d}=Object.assign({},(0,r.ah)(),s.components);return d?(0,n.jsx)(d,Object.assign({},s,{children:(0,n.jsx)(x,s)})):x(s)}},11151:(s,d,e)=>{e.d(d,{Zo:()=>c,ah:()=>i});var n=e(67294);const r=n.createContext({});function i(s){const d=n.useContext(r);return n.useMemo((()=>"function"==typeof s?s(d):{...d,...s}),[d,s])}const t={};function c({components:s,children:d,disableParentContext:e}){let c;return c=e?"function"==typeof s?s({}):s||t:i(s),n.createElement(r.Provider,{value:c},d)}}}]);