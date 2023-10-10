"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[71324],{52555:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>d,metadata:()=>r,toc:()=>a});var t=s(85893),i=s(11151);const d={},o="EXPLAIN",r={id:"sql-reference/sql-statements/Administration/EXPLAIN",title:"EXPLAIN",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.1/sql-reference/sql-statements/Administration/EXPLAIN.md",sourceDirName:"sql-reference/sql-statements/Administration",slug:"/sql-reference/sql-statements/Administration/EXPLAIN",permalink:"/doc/zh/docs/sql-reference/sql-statements/Administration/EXPLAIN",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-statements/Administration/EXPLAIN.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"DROP STORAGE VOLUME",permalink:"/doc/zh/docs/sql-reference/sql-statements/Administration/DROP STORAGE VOLUME"},next:{title:"INSTALL PLUGIN",permalink:"/doc/zh/docs/sql-reference/sql-statements/Administration/INSTALL PLUGIN"}},l={},a=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de",id:"\u8fd4\u56de",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function c(n){const e=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",strong:"strong",tbody:"tbody",td:"td"},(0,i.ah)(),n.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"explain",children:"EXPLAIN"}),"\n",(0,t.jsx)(e.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,t.jsx)(e.p,{children:"\u663e\u793a\u8f93\u5165\u67e5\u8be2\u8bed\u53e5\u7684\u903b\u8f91\u6216\u7269\u7406\u6267\u884c\u8ba1\u5212\u3002"}),"\n",(0,t.jsx)(e.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-SQL",children:"EXPLAIN <query>\n"})}),"\n",(0,t.jsx)(e.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:(0,t.jsx)(e.strong,{children:"\u53c2\u6570"})}),(0,t.jsx)(e.th,{children:(0,t.jsx)(e.strong,{children:"\u8bf4\u660e"})})]})}),(0,t.jsx)(e.tbody,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"query"}),(0,t.jsx)(e.td,{children:"\u9700\u8981\u67e5\u770b\u6267\u884c\u8ba1\u5212\u7684\u67e5\u8be2\u8bed\u53e5\u3002"})]})})]}),"\n",(0,t.jsx)(e.h2,{id:"\u8fd4\u56de",children:"\u8fd4\u56de"}),"\n",(0,t.jsx)(e.p,{children:"\u8fd4\u56de\u8f93\u5165\u67e5\u8be2\u8bed\u53e5\u7684\u6267\u884c\u8ba1\u5212\u3002"}),"\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:(0,t.jsx)(e.strong,{children:"\u8fd4\u56de"})}),(0,t.jsx)(e.th,{children:(0,t.jsx)(e.strong,{children:"\u8bf4\u660e"})})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"avgRowSize"}),(0,t.jsx)(e.td,{children:"\u626b\u63cf\u6570\u636e\u884c\u7684\u5e73\u5747\u5927\u5c0f\u3002"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"cardinality"}),(0,t.jsx)(e.td,{children:"\u626b\u63cf\u8868\u7684\u6570\u636e\u603b\u884c\u6570\u3002"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"colocate"}),(0,t.jsx)(e.td,{children:"\u662f\u5426\u4e3a Colocate \u8868\u3002"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"numNodes"}),(0,t.jsx)(e.td,{children:"\u5f85\u626b\u63cf\u7684\u8282\u70b9\u6570\u3002"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"rollup"}),(0,t.jsx)(e.td,{children:"\u4f7f\u7528\u7684\u540c\u6b65\u7269\u5316\u89c6\u56fe\u3002"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"preaggregation"}),(0,t.jsx)(e.td,{children:"\u9884\u805a\u5408\u7684\u72b6\u6001\u3002"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"predicates"}),(0,t.jsx)(e.td,{children:"\u67e5\u8be2\u4e2d\u4f7f\u7528\u7684\u8c13\u8bcd\u3002"})]})]})]}),"\n",(0,t.jsx)(e.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-Plain",children:"mysql> EXPLAIN select count(*)\nfrom store_sales, \n    household_demographics, \n    time_dim, \n    store\nwhere ss_sold_time_sk = time_dim.t_time_sk\n    and ss_hdemo_sk = household_demographics.hd_demo_sk\n    and ss_store_sk = s_store_sk\n    and time_dim.t_hour = 8\n    and time_dim.t_minute >= 30\n    and household_demographics.hd_dep_count = 5\n    and store.s_store_name = 'ese'\norder by count(*) limit 100;\n\n+------------------------------------------------------------------------------+\n| Explain String                                                               |\n+------------------------------------------------------------------------------+\n| PLAN FRAGMENT 0                                                              |\n|  OUTPUT EXPRS:<slot 11>                                                      |\n|   PARTITION: UNPARTITIONED                                                   |\n|   RESULT SINK                                                                |\n|   12:MERGING-EXCHANGE                                                        |\n|      limit: 100                                                              |\n|      tuple ids: 5                                                            |\n|                                                                              |\n| PLAN FRAGMENT 1                                                              |\n|  OUTPUT EXPRS:                                                               |\n|   PARTITION: RANDOM                                                          |\n|   STREAM DATA SINK                                                           |\n|     EXCHANGE ID: 12                                                          |\n|     UNPARTITIONED                                                            |\n|                                                                              |\n|   8:TOP-N                                                                    |\n|   |  order by: <slot 11> ASC                                                 |\n|   |  offset: 0                                                               |\n|   |  limit: 100                                                              |\n|   |  tuple ids: 5                                                            |\n|   |                                                                          |\n|   7:AGGREGATE (update finalize)                                              |\n|   |  output: count(*)                                                        |\n|   |  group by:                                                               |\n|   |  tuple ids: 4                                                            |\n|   |                                                                          |\n|   6:HASH JOIN                                                                |\n|   |  join op: INNER JOIN (BROADCAST)                                         |\n|   |  hash predicates:                                                        |\n|   |  colocate: false, reason: left hash join node can not do colocate        |\n|   |  equal join conjunct: `ss_store_sk` = `s_store_sk`                       |\n|   |  tuple ids: 0 2 1 3                                                      |\n|   |                                                                          |\n|   |----11:EXCHANGE                                                           |\n|   |       tuple ids: 3                                                       |\n|   |                                                                          |\n|   4:HASH JOIN                                                                |\n|   |  join op: INNER JOIN (BROADCAST)                                         |\n|   |  hash predicates:                                                        |\n|   |  colocate: false, reason: left hash join node can not do colocate        |\n|   |  equal join conjunct: `ss_hdemo_sk`=`household_demographics`.`hd_demo_sk`|\n|   |  tuple ids: 0 2 1                                                        |\n|   |                                                                          |\n|   |----10:EXCHANGE                                                           |\n|   |       tuple ids: 1                                                       |\n|   |                                                                          |\n|   2:HASH JOIN                                                                |\n|   |  join op: INNER JOIN (BROADCAST)                                         |\n|   |  hash predicates:                                                        |\n|   |  colocate: false, reason: table not in same group                        |\n|   |  equal join conjunct: `ss_sold_time_sk` = `time_dim`.`t_time_sk`         |\n|   |  tuple ids: 0 2                                                          |\n|   |                                                                          |\n|   |----9:EXCHANGE                                                            |\n|   |       tuple ids: 2                                                       |\n|   |                                                                          |\n|   0:OlapScanNode                                                             |\n|      TABLE: store_sales                                                      |\n|      PREAGGREGATION: OFF. Reason: `ss_sold_time_sk` is value column          |\n|      partitions=1/1                                                          |\n|      rollup: store_sales                                                     |\n|      tabletRatio=0/0                                                         |\n|      tabletList=                                                             |\n|      cardinality=-1                                                          |\n|      avgRowSize=0.0                                                          |\n|      numNodes=0                                                              |\n|      tuple ids: 0                                                            |\n|                                                                              |\n| PLAN FRAGMENT 2                                                              |\n|  OUTPUT EXPRS:                                                               |\n|   PARTITION: RANDOM                                                          |\n|                                                                              |\n|   STREAM DATA SINK                                                           |\n|     EXCHANGE ID: 11                                                          |\n|     UNPARTITIONED                                                            |\n|                                                                              |\n|   5:OlapScanNode                                                             |\n|      TABLE: store                                                            |\n|      PREAGGREGATION: OFF. Reason: null                                       |\n|      PREDICATES: `store`.`s_store_name` = 'ese'                              |\n|      partitions=1/1                                                          |\n|      rollup: store                                                           |\n|      tabletRatio=0/0                                                         |\n|      tabletList=                                                             |\n|      cardinality=-1                                                          |\n|      avgRowSize=0.0                                                          |\n|      numNodes=0                                                              |\n|      tuple ids: 3                                                            |\n|                                                                              |\n| PLAN FRAGMENT 3                                                              |\n|  OUTPUT EXPRS:                                                               |\n|   PARTITION: RANDOM                                                          |\n|   STREAM DATA SINK                                                           |\n|     EXCHANGE ID: 10                                                          |\n|     UNPARTITIONED                                                            |\n|                                                                              |\n|   3:OlapScanNode                                                             |\n|      TABLE: household_demographics                                           |\n|      PREAGGREGATION: OFF. Reason: null                                       |\n|      PREDICATES: `household_demographics`.`hd_dep_count` = 5                 |\n|      partitions=1/1                                                          |\n|      rollup: household_demographics                                          |\n|      tabletRatio=0/0                                                         |\n|      tabletList=                                                             |\n|      cardinality=-1                                                          |\n|      avgRowSize=0.0                                                          |\n|      numNodes=0                                                              |\n|      tuple ids: 1                                                            |\n|                                                                              |\n| PLAN FRAGMENT 4                                                              |\n|  OUTPUT EXPRS:                                                               |\n|   PARTITION: RANDOM                                                          |\n|   STREAM DATA SINK                                                           |\n|     EXCHANGE ID: 09                                                          |\n|     UNPARTITIONED                                                            |\n|                                                                              |\n|   1:OlapScanNode                                                             |\n|      TABLE: time_dim                                                         |\n|      PREAGGREGATION: OFF. Reason: null                                       |\n|      PREDICATES: `time_dim`.`t_hour` = 8, `time_dim`.`t_minute` >= 30        |\n|      partitions=1/1                                                          |\n|      rollup: time_dim                                                        |\n|      tabletRatio=0/0                                                         |\n|      tabletList=                                                             |\n|      cardinality=-1                                                          |\n|      avgRowSize=0.0                                                          |\n|      numNodes=0                                                              |\n|      tuple ids: 2                                                            |\n+------------------------------------------------------------------------------+\n128 rows in set (0.02 sec)\n"})})]})}const h=function(n={}){const{wrapper:e}=Object.assign({},(0,i.ah)(),n.components);return e?(0,t.jsx)(e,Object.assign({},n,{children:(0,t.jsx)(c,n)})):c(n)}},11151:(n,e,s)=>{s.d(e,{Zo:()=>r,ah:()=>d});var t=s(67294);const i=t.createContext({});function d(n){const e=t.useContext(i);return t.useMemo((()=>"function"==typeof n?n(e):{...e,...n}),[e,n])}const o={};function r({components:n,children:e,disableParentContext:s}){let r;return r=s?"function"==typeof n?n({}):n||o:d(n),t.createElement(i.Provider,{value:r},e)}}}]);