"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[74366],{85312:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>l,contentTitle:()=>d,default:()=>o,frontMatter:()=>c,metadata:()=>i,toc:()=>a});var n=t(85893),r=t(11151);const c={},d="SHOW MATERIALIZED VIEWS",i={id:"sql-reference/sql-statements/data-manipulation/SHOW MATERIALIZED VIEW",title:"SHOW MATERIALIZED VIEWS",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.1/sql-reference/sql-statements/data-manipulation/SHOW MATERIALIZED VIEW.md",sourceDirName:"sql-reference/sql-statements/data-manipulation",slug:"/sql-reference/sql-statements/data-manipulation/SHOW MATERIALIZED VIEW",permalink:"/docusaurusv3/zh/docs/latest/sql-reference/sql-statements/data-manipulation/SHOW MATERIALIZED VIEW",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-statements/data-manipulation/SHOW MATERIALIZED VIEW.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"DROP MATERIALIZED VIEW",permalink:"/docusaurusv3/zh/docs/latest/sql-reference/sql-statements/data-definition/DROP MATERIALIZED VIEW"},next:{title:"\u5f02\u6b65\u7269\u5316\u89c6\u56fe\u6545\u969c\u6392\u9664",permalink:"/docusaurusv3/zh/docs/latest/using_starrocks/troubleshooting_asynchronous_materialized_views"}},l={},a=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2},{value:"\u8fd4\u56de",id:"\u8fd4\u56de",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function h(e){const s=Object.assign({h1:"h1",h2:"h2",p:"p",blockquote:"blockquote",strong:"strong",a:"a",pre:"pre",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,r.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"show-materialized-views",children:"SHOW MATERIALIZED VIEWS"}),"\n",(0,n.jsx)(s.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,n.jsx)(s.p,{children:"\u5c55\u793a\u6240\u6709\u6216\u6307\u5b9a\u5f02\u6b65\u7269\u5316\u89c6\u56fe\u4fe1\u606f\u3002\u8be5\u8bed\u53e5\u4ece 3.0 \u7248\u672c\u5f00\u59cb\u66f4\u540d\u4e3a SHOW MATERIALIZED VIEWS\uff0c\u4e4b\u524d\u7248\u672c\u4e3a SHOW MATERIALIZED VIEW\u3002"}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"\u6ce8\u610f"})}),"\n",(0,n.jsxs)(s.p,{children:["\u8be5\u547d\u4ee4\u5f53\u524d\u4ec5\u9488\u5bf9\u5f02\u6b65\u7269\u5316\u89c6\u56fe\u751f\u6548\u3002\u9488\u5bf9\u540c\u6b65\u7269\u5316\u89c6\u56fe\u60a8\u53ef\u4ee5\u901a\u8fc7 ",(0,n.jsx)(s.a,{href:"/docusaurusv3/zh/docs/latest/sql-reference/sql-statements/data-manipulation/SHOW%20ALTER%20MATERIALIZED%20VIEW",children:"SHOW ALTER MATERIALIZED VIEW"})," \u547d\u4ee4\u67e5\u770b\u5f53\u524d\u6570\u636e\u5e93\u4e2d\u540c\u6b65\u7269\u5316\u89c6\u56fe\u7684\u6784\u5efa\u72b6\u6001\u3002"]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-SQL",children:'SHOW MATERIALIZED VIEWS\n[FROM db_name]\n[\nWHERE NAME { = "mv_name" | LIKE "mv_name_matcher"}\n]\n'})}),"\n",(0,n.jsx)(s.h2,{id:"\u53c2\u6570",children:"\u53c2\u6570"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:(0,n.jsx)(s.strong,{children:"\u53c2\u6570"})}),(0,n.jsx)(s.th,{children:(0,n.jsx)(s.strong,{children:"\u5fc5\u9009"})}),(0,n.jsx)(s.th,{children:(0,n.jsx)(s.strong,{children:"\u8bf4\u660e"})})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"db_name"}),(0,n.jsx)(s.td,{children:"\u5426"}),(0,n.jsx)(s.td,{children:"\u7269\u5316\u89c6\u56fe\u6240\u5c5e\u7684\u6570\u636e\u5e93\u540d\u79f0\u3002\u5982\u679c\u4e0d\u6307\u5b9a\u8be5\u53c2\u6570\uff0c\u5219\u9ed8\u8ba4\u4f7f\u7528\u5f53\u524d\u6570\u636e\u5e93\u3002"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"mv_name"}),(0,n.jsx)(s.td,{children:"\u5426"}),(0,n.jsx)(s.td,{children:"\u7528\u4e8e\u7cbe\u786e\u5339\u914d\u7684\u7269\u5316\u89c6\u56fe\u540d\u79f0\u3002"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"mv_name_matcher"}),(0,n.jsx)(s.td,{children:"\u5426"}),(0,n.jsx)(s.td,{children:"\u7528\u4e8e\u6a21\u7cca\u5339\u914d\u7684\u7269\u5316\u89c6\u56fe\u540d\u79f0 matcher\u3002"})]})]})]}),"\n",(0,n.jsx)(s.h2,{id:"\u8fd4\u56de",children:"\u8fd4\u56de"}),"\n",(0,n.jsx)(s.p,{children:"\u8fd4\u56de\u6700\u8fd1\u4e00\u6b21 REFRESH \u4efb\u52a1\u7684\u72b6\u6001\u3002"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:(0,n.jsx)(s.strong,{children:"\u8fd4\u56de"})}),(0,n.jsx)(s.th,{children:(0,n.jsx)(s.strong,{children:"\u8bf4\u660e"})})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"id"}),(0,n.jsx)(s.td,{children:"\u7269\u5316\u89c6\u56fe ID\u3002"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"database_name"}),(0,n.jsx)(s.td,{children:"\u7269\u5316\u89c6\u56fe\u6240\u5c5e\u7684\u6570\u636e\u5e93\u540d\u79f0\u3002"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"name"}),(0,n.jsx)(s.td,{children:"\u7269\u5316\u89c6\u56fe\u540d\u79f0\u3002"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"refresh_type"}),(0,n.jsx)(s.td,{children:"\u7269\u5316\u89c6\u56fe\u7684\u66f4\u65b0\u65b9\u5f0f\uff0c\u5305\u62ec ROLLUP\u3001MANUAL\u3001ASYNC\u3001INCREMENTAL\u3002"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"is_active"}),(0,n.jsxs)(s.td,{children:["\u7269\u5316\u89c6\u56fe\u72b6\u6001\u662f\u5426\u4e3a active\u3002\u6709\u6548\u503c\uff1a",(0,n.jsx)(s.code,{children:"true"})," \u548c ",(0,n.jsx)(s.code,{children:"false"}),"\u3002"]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"partition_type"}),(0,n.jsx)(s.td,{children:"\u7269\u5316\u89c6\u56fe\u7684\u5206\u533a\u7c7b\u578b\uff0c\u5305\u62ec RANGE \u548c UNPARTITIONED\u3002"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"task_id"}),(0,n.jsx)(s.td,{children:"\u7269\u5316\u89c6\u56fe\u7684\u5237\u65b0\u4efb\u52a1 ID\u3002"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"task_name"}),(0,n.jsx)(s.td,{children:"\u7269\u5316\u89c6\u56fe\u7684\u5237\u65b0\u4efb\u52a1\u540d\u79f0\u3002"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"last_refresh_start_time"}),(0,n.jsx)(s.td,{children:"\u7269\u5316\u89c6\u56fe\u4e0a\u4e00\u6b21\u5237\u65b0\u5f00\u59cb\u65f6\u95f4\u3002"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"last_refresh_finished_time"}),(0,n.jsx)(s.td,{children:"\u7269\u5316\u89c6\u56fe\u4e0a\u4e00\u6b21\u5237\u65b0\u7ed3\u675f\u65f6\u95f4\u3002"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"last_refresh_duration"}),(0,n.jsx)(s.td,{children:"\u7269\u5316\u89c6\u56fe\u4e0a\u4e00\u6b21\u5237\u65b0\u8017\u65f6\uff08\u5355\u4f4d\u79d2\uff09\u3002"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"last_refresh_state"}),(0,n.jsx)(s.td,{children:"\u7269\u5316\u89c6\u56fe\u4e0a\u4e00\u6b21\u5237\u65b0\u7684\u72b6\u6001\uff0c\u5305\u62ec PENDING\u3001RUNNING\u3001FAILED\u3001SUCCESS\u3002"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"last_refresh_force_refresh"}),(0,n.jsx)(s.td,{children:"\u7269\u5316\u89c6\u56fe\u4e0a\u4e00\u6b21\u5237\u65b0\u662f\u5426\u4e3a\u5f3a\u5236\uff08FORCE\uff09\u5237\u65b0\u3002                      \uff5c"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"last_refresh_start_partition"}),(0,n.jsx)(s.td,{children:"\u4e0a\u4e00\u6b21\u5237\u65b0\u5f00\u59cb\u7684\u7269\u5316\u89c6\u56fe\u5206\u533a\u3002                                \uff5c"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"last_refresh_end_partition"}),(0,n.jsx)(s.td,{children:"\u4e0a\u4e00\u6b21\u5237\u65b0\u7ed3\u675f\u7684\u7269\u5316\u89c6\u56fe\u5206\u533a\u3002                                  \uff5c"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"last_refresh_base_refresh_partitions"}),(0,n.jsx)(s.td,{children:"\u4e0a\u4e00\u6b21\u5237\u65b0\u57fa\u8868\u66f4\u65b0\u7684\u5206\u533a\u3002                            \uff5c"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"last_refresh_mv_refresh_partitions"}),(0,n.jsx)(s.td,{children:"\u4e0a\u4e00\u6b21\u5237\u65b0\u7269\u5316\u89c6\u56fe\u5237\u65b0\u7684\u5206\u533a\u3002                          \uff5c"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"last_refresh_error_code"}),(0,n.jsx)(s.td,{children:"\u7269\u5316\u89c6\u56fe\u4e0a\u4e00\u6b21\u5237\u65b0\u5931\u8d25\u7684 ErrorCode\uff08\u5982\u679c\u7269\u5316\u89c6\u56fe\u72b6\u6001\u4e0d\u4e3a active\uff09\u3002"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"last_refresh_error_message"}),(0,n.jsx)(s.td,{children:"\u7269\u5316\u89c6\u56fe\u4e0a\u4e00\u6b21\u5237\u65b0\u5931\u8d25\u7684 ErrorMessage\uff08\u5982\u679c\u7269\u5316\u89c6\u56fe\u72b6\u6001\u4e0d\u4e3a active\uff09\u3002"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"rows"}),(0,n.jsx)(s.td,{children:"\u7269\u5316\u89c6\u56fe\u4e2d\u6570\u636e\u884c\u6570\u3002"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"text"}),(0,n.jsx)(s.td,{children:"\u521b\u5efa\u7269\u5316\u89c6\u56fe\u7684\u67e5\u8be2\u8bed\u53e5\u3002"})]})]})]}),"\n",(0,n.jsx)(s.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,n.jsx)(s.p,{children:"\u4ee5\u4e0b\u793a\u4f8b\u57fa\u4e8e\u5f53\u524d\u4e1a\u52a1\u60c5\u666f\uff1a"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-Plain",children:'-- Create Table: customer\nCREATE TABLE customer ( C_CUSTKEY     INTEGER NOT NULL,\n                        C_NAME        VARCHAR(25) NOT NULL,\n                        C_ADDRESS     VARCHAR(40) NOT NULL,\n                        C_NATIONKEY   INTEGER NOT NULL,\n                        C_PHONE       CHAR(15) NOT NULL,\n                        C_ACCTBAL     double   NOT NULL,\n                        C_MKTSEGMENT  CHAR(10) NOT NULL,\n                        C_COMMENT     VARCHAR(117) NOT NULL,\n                        PAD char(1) NOT NULL)\n    ENGINE=OLAP\nDUPLICATE KEY(`c_custkey`)\nCOMMENT "OLAP"\nDISTRIBUTED BY HASH(`c_custkey`) BUCKETS 10\nPROPERTIES (\n"replication_num" = "1",\n"storage_format" = "DEFAULT"\n);\n\n-- Create MV: customer_mv\nCREATE MATERIALIZED VIEW customer_mv\nDISTRIBUTED BY HASH(c_custkey) buckets 10\nREFRESH MANUAL\nPROPERTIES (\n    "replication_num" = "1"\n)\nAS SELECT\n              c_custkey, c_phone, c_acctbal, count(1) as c_count, sum(c_acctbal) as c_sum\n   FROM\n              customer\n   GROUP BY c_custkey, c_phone, c_acctbal;\n\n-- Refresh the MV\nREFRESH MATERIALIZED VIEW customer_mv;\n'})}),"\n",(0,n.jsx)(s.p,{children:"\u793a\u4f8b\u4e00\uff1a\u901a\u8fc7\u7cbe\u786e\u5339\u914d\u67e5\u770b\u7279\u5b9a\u7269\u5316\u89c6\u56fe"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-Plain",children:'mysql> show materialized views  where name=\'customer_mv\'\\G;\n*************************** 1. row ***************************\n                        id: 10142\n                      name: customer_mv\n             database_name: test\n              refresh_type: MANUAL\n                 is_active: true\n   last_refresh_start_time: 2023-02-17 10:27:33\nlast_refresh_finished_time: 2023-02-17 10:27:33\n     last_refresh_duration: 0\n        last_refresh_state: SUCCESS\n             inactive_code: 0\n           inactive_reason:\n                      text: CREATE MATERIALIZED VIEW `customer_mv`\nCOMMENT "MATERIALIZED_VIEW"\nDISTRIBUTED BY HASH(`c_custkey`) BUCKETS 10\nREFRESH MANUAL\nPROPERTIES (\n"replication_num" = "1",\n"storage_medium" = "HDD"\n)\nAS SELECT `customer`.`c_custkey`, `customer`.`c_phone`, `customer`.`c_acctbal`, count(1) AS `c_count`, sum(`customer`.`c_acctbal`) AS `c_sum`\nFROM `test`.`customer`\nGROUP BY `customer`.`c_custkey`, `customer`.`c_phone`, `customer`.`c_acctbal`;\n                      rows: 0\n1 row in set (0.11 sec)\n'})}),"\n",(0,n.jsx)(s.p,{children:"\u793a\u4f8b\u4e8c\uff1a\u901a\u8fc7\u6a21\u7cca\u5339\u914d\u67e5\u770b\u7269\u5316\u89c6\u56fe"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-Plain",children:'mysql> show materialized views  where name like \'customer_mv\'\\G;\n*************************** 1. row ***************************\n                        id: 10142\n                      name: customer_mv\n             database_name: test\n              refresh_type: MANUAL\n                 is_active: true\n   last_refresh_start_time: 2023-02-17 10:27:33\nlast_refresh_finished_time: 2023-02-17 10:27:33\n     last_refresh_duration: 0\n        last_refresh_state: SUCCESS\n             inactive_code: 0\n           inactive_reason:\n                      text: CREATE MATERIALIZED VIEW `customer_mv`\nCOMMENT "MATERIALIZED_VIEW"\nDISTRIBUTED BY HASH(`c_custkey`) BUCKETS 10\nREFRESH MANUAL\nPROPERTIES (\n"replication_num" = "1",\n"storage_medium" = "HDD"\n)\nAS SELECT `customer`.`c_custkey`, `customer`.`c_phone`, `customer`.`c_acctbal`, count(1) AS `c_count`, sum(`customer`.`c_acctbal`) AS `c_sum`\nFROM `test`.`customer`\nGROUP BY `customer`.`c_custkey`, `customer`.`c_phone`, `customer`.`c_acctbal`;\n                      rows: 0\n1 row in set (0.12 sec)\n\n'})})]})}const o=function(e={}){const{wrapper:s}=Object.assign({},(0,r.ah)(),e.components);return s?(0,n.jsx)(s,Object.assign({},e,{children:(0,n.jsx)(h,e)})):h(e)}},11151:(e,s,t)=>{t.d(s,{Zo:()=>i,ah:()=>c});var n=t(67294);const r=n.createContext({});function c(e){const s=n.useContext(r);return n.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const d={};function i({components:e,children:s,disableParentContext:t}){let i;return i=t?"function"==typeof e?e({}):e||d:c(e),n.createElement(r.Provider,{value:i},s)}}}]);