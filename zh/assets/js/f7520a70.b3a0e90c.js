"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[58739],{43290:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>t,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>a});var r=s(85893),l=s(11151);const i={},d="\u540c\u6b65\u7269\u5316\u89c6\u56fe",c={id:"using_starrocks/Materialized_view-single_table",title:"\u540c\u6b65\u7269\u5316\u89c6\u56fe",description:"\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u5728 StarRocks \u4e2d\u521b\u5efa\u3001\u4f7f\u7528\u4ee5\u53ca\u7ba1\u7406\u540c\u6b65\u7269\u5316\u89c6\u56fe\uff08Rollup\uff09\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.0/using_starrocks/Materialized_view-single_table.md",sourceDirName:"using_starrocks",slug:"/using_starrocks/Materialized_view-single_table",permalink:"/doc/zh/docs/3.0/using_starrocks/Materialized_view-single_table",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/using_starrocks/Materialized_view-single_table.md",tags:[],version:"3.0",frontMatter:{},sidebar:"documentation",previous:{title:"\u4f7f\u7528 Lateral Join \u5b9e\u73b0\u5217\u8f6c\u884c",permalink:"/doc/zh/docs/3.0/using_starrocks/Lateral_join"},next:{title:"\u5f02\u6b65\u7269\u5316\u89c6\u56fe",permalink:"/doc/zh/docs/3.0/using_starrocks/Materialized_view"}},t={},a=[{value:"\u76f8\u5173\u6982\u5ff5",id:"\u76f8\u5173\u6982\u5ff5",level:2},{value:"\u51c6\u5907\u5de5\u4f5c",id:"\u51c6\u5907\u5de5\u4f5c",level:2},{value:"\u521b\u5efa\u540c\u6b65\u7269\u5316\u89c6\u56fe",id:"\u521b\u5efa\u540c\u6b65\u7269\u5316\u89c6\u56fe",level:2},{value:"\u67e5\u770b\u540c\u6b65\u7269\u5316\u89c6\u56fe\u6784\u5efa\u72b6\u6001",id:"\u67e5\u770b\u540c\u6b65\u7269\u5316\u89c6\u56fe\u6784\u5efa\u72b6\u6001",level:2},{value:"\u4f7f\u7528\u540c\u6b65\u7269\u5316\u89c6\u56fe\u67e5\u8be2",id:"\u4f7f\u7528\u540c\u6b65\u7269\u5316\u89c6\u56fe\u67e5\u8be2",level:2},{value:"\u9a8c\u8bc1\u67e5\u8be2\u662f\u5426\u547d\u4e2d\u540c\u6b65\u7269\u5316\u89c6\u56fe",id:"\u9a8c\u8bc1\u67e5\u8be2\u662f\u5426\u547d\u4e2d\u540c\u6b65\u7269\u5316\u89c6\u56fe",level:2},{value:"\u67e5\u770b\u540c\u6b65\u7269\u5316\u89c6\u56fe\u7684\u8868\u7ed3\u6784",id:"\u67e5\u770b\u540c\u6b65\u7269\u5316\u89c6\u56fe\u7684\u8868\u7ed3\u6784",level:2},{value:"\u5220\u9664\u540c\u6b65\u7269\u5316\u89c6\u56fe",id:"\u5220\u9664\u540c\u6b65\u7269\u5316\u89c6\u56fe",level:2},{value:"\u5220\u9664\u6b63\u5728\u521b\u5efa\u7684\u540c\u6b65\u7269\u5316\u89c6\u56fe",id:"\u5220\u9664\u6b63\u5728\u521b\u5efa\u7684\u540c\u6b65\u7269\u5316\u89c6\u56fe",level:3},{value:"\u5220\u9664\u5df2\u521b\u5efa\u7684\u540c\u6b65\u7269\u5316\u89c6\u56fe",id:"\u5220\u9664\u5df2\u521b\u5efa\u7684\u540c\u6b65\u7269\u5316\u89c6\u56fe",level:3},{value:"\u6700\u4f73\u5b9e\u8df5",id:"\u6700\u4f73\u5b9e\u8df5",level:2},{value:"\u7cbe\u786e\u53bb\u91cd",id:"\u7cbe\u786e\u53bb\u91cd",level:3},{value:"\u8fd1\u4f3c\u53bb\u91cd",id:"\u8fd1\u4f3c\u53bb\u91cd",level:3},{value:"\u589e\u8bbe\u524d\u7f00\u7d22\u5f15",id:"\u589e\u8bbe\u524d\u7f00\u7d22\u5f15",level:3},{value:"\u805a\u5408\u51fd\u6570\u5339\u914d\u5173\u7cfb",id:"\u805a\u5408\u51fd\u6570\u5339\u914d\u5173\u7cfb",level:2}];function o(e){const n=Object.assign({h1:"h1",p:"p",strong:"strong",a:"a",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",h2:"h2",ul:"ul",li:"li",code:"code",pre:"pre",blockquote:"blockquote",h3:"h3"},(0,l.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"\u540c\u6b65\u7269\u5316\u89c6\u56fe",children:"\u540c\u6b65\u7269\u5316\u89c6\u56fe"}),"\n",(0,r.jsxs)(n.p,{children:["\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u5728 StarRocks \u4e2d\u521b\u5efa\u3001\u4f7f\u7528\u4ee5\u53ca\u7ba1\u7406",(0,r.jsx)(n.strong,{children:"\u540c\u6b65\u7269\u5316\u89c6\u56fe\uff08Rollup\uff09"}),"\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u540c\u6b65\u7269\u5316\u89c6\u56fe\u4e0b\uff0c\u6240\u6709\u5bf9\u4e8e\u57fa\u8868\u7684\u6570\u636e\u53d8\u66f4\u90fd\u4f1a\u81ea\u52a8\u540c\u6b65\u66f4\u65b0\u5230\u7269\u5316\u89c6\u56fe\u4e2d\u3002\u60a8\u65e0\u9700\u624b\u52a8\u8c03\u7528\u5237\u65b0\u547d\u4ee4\uff0c\u5373\u53ef\u5b9e\u73b0\u81ea\u52a8\u540c\u6b65\u5237\u65b0\u7269\u5316\u89c6\u56fe\u3002\u540c\u6b65\u7269\u5316\u89c6\u56fe\u7684\u7ba1\u7406\u6210\u672c\u548c\u66f4\u65b0\u6210\u672c\u90fd\u6bd4\u8f83\u4f4e\uff0c\u9002\u5408\u5b9e\u65f6\u573a\u666f\u4e0b\u5355\u8868\u805a\u5408\u67e5\u8be2\u7684\u900f\u660e\u52a0\u901f\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["StarRocks \u4e2d\u7684\u540c\u6b65\u7269\u5316\u89c6\u56fe\u4ec5\u80fd\u57fa\u4e8e ",(0,r.jsx)(n.a,{href:"/doc/zh/docs/3.0/data_source/catalog/default_catalog",children:"Default Catalog"})," \u4e2d\u7684\u5355\u4e2a\u57fa\u8868\u521b\u5efa\uff0c\u662f\u4e00\u79cd\u7279\u6b8a\u7684\u67e5\u8be2\u52a0\u901f\u7d22\u5f15\uff0c\u65e0\u6cd5\u76f4\u63a5\u67e5\u8be2\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u81ea 2.4 \u7248\u672c\u8d77\uff0cStarRocks \u652f\u6301",(0,r.jsx)(n.strong,{children:"\u5f02\u6b65\u7269\u5316\u89c6\u56fe"}),"\uff0c\u53ef\u4ee5\u57fa\u4e8e\u591a\u4e2a\u57fa\u8868\u521b\u5efa\uff0c\u4e14\u652f\u6301\u66f4\u4e30\u5bcc\u7684\u805a\u5408\u7b97\u5b50\u3002\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,r.jsx)(n.a,{href:"/doc/zh/docs/3.0/using_starrocks/Materialized_view",children:"\u5f02\u6b65\u7269\u5316\u89c6\u56fe"}),"\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u4e0b\u8868\u4ece\u652f\u6301\u7684\u7279\u6027\u89d2\u5ea6\u6bd4\u8f83\u4e86 StarRocks 2.5\u30012.4 \u4e2d\u7684\u5f02\u6b65\u7269\u5316\u89c6\u56fe\u4ee5\u53ca\u540c\u6b65\u7269\u5316\u89c6\u56fe\uff08Rollup\uff09\uff1a"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"\u5355\u8868\u805a\u5408"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"\u591a\u8868\u5173\u8054"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"\u67e5\u8be2\u6539\u5199"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"\u5237\u65b0\u7b56\u7565"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"\u57fa\u8868"})})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"\u5f02\u6b65\u7269\u5316\u89c6\u56fe"})}),(0,r.jsx)(n.td,{children:"\u662f"}),(0,r.jsx)(n.td,{children:"\u662f"}),(0,r.jsx)(n.td,{children:"\u662f"}),(0,r.jsx)(n.td,{children:(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:"\u5f02\u6b65\u5237\u65b0"}),(0,r.jsx)("li",{children:"\u624b\u52a8\u5237\u65b0"})]})}),(0,r.jsxs)(n.td,{children:["\u652f\u6301\u591a\u8868\u6784\u5efa\u3002\u57fa\u8868\u53ef\u4ee5\u6765\u81ea\uff1a",(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:"Default Catalog"}),(0,r.jsx)("li",{children:"External Catalog\uff08v2.5\uff09"}),(0,r.jsx)("li",{children:"\u5df2\u6709\u5f02\u6b65\u7269\u5316\u89c6\u56fe\uff08v2.5\uff09"})]})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"\u540c\u6b65\u7269\u5316\u89c6\u56fe\uff08Rollup\uff09"})}),(0,r.jsx)(n.td,{children:"\u4ec5\u90e8\u5206\u805a\u5408\u51fd\u6570"}),(0,r.jsx)(n.td,{children:"\u5426"}),(0,r.jsx)(n.td,{children:"\u662f"}),(0,r.jsx)(n.td,{children:"\u5bfc\u5165\u540c\u6b65\u5237\u65b0"}),(0,r.jsx)(n.td,{children:"\u4ec5\u652f\u6301\u57fa\u4e8e Default Catalog \u7684\u5355\u8868\u6784\u5efa"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"\u76f8\u5173\u6982\u5ff5",children:"\u76f8\u5173\u6982\u5ff5"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u57fa\u8868\uff08Base Table\uff09"})}),"\n",(0,r.jsx)(n.p,{children:"\u7269\u5316\u89c6\u56fe\u7684\u9a71\u52a8\u8868\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["\u5bf9\u4e8e StarRocks \u7684\u540c\u6b65\u7269\u5316\u89c6\u56fe\uff0c\u57fa\u8868\u4ec5\u53ef\u4ee5\u662f ",(0,r.jsx)(n.a,{href:"/doc/zh/docs/3.0/data_source/catalog/default_catalog",children:"Default catalog"})," \u4e2d\u7684\u5355\u4e2a\u5185\u90e8\u8868\u3002StarRocks \u652f\u6301\u5728\u660e\u7ec6\u6a21\u578b (Duplicate Key type)\u3001\u805a\u5408\u6a21\u578b (Aggregate Key type) \u548c\u66f4\u65b0\u6a21\u578b (Unique Key type) \u4e0a\u521b\u5efa\u540c\u6b65\u7269\u5316\u89c6\u56fe\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u5237\u65b0\uff08Refresh\uff09"})}),"\n",(0,r.jsx)(n.p,{children:"StarRocks \u540c\u6b65\u7269\u5316\u89c6\u56fe\u4e2d\u7684\u6570\u636e\u5c06\u5728\u6570\u636e\u5bfc\u5165\u57fa\u8868\u65f6\u81ea\u52a8\u66f4\u65b0\uff0c\u65e0\u9700\u624b\u52a8\u8c03\u7528\u5237\u65b0\u547d\u4ee4\u3002"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u67e5\u8be2\u6539\u5199\uff08Query Rewrite\uff09"})}),"\n",(0,r.jsx)(n.p,{children:"\u67e5\u8be2\u6539\u5199\u662f\u6307\u5728\u5bf9\u5df2\u6784\u5efa\u4e86\u7269\u5316\u89c6\u56fe\u7684\u57fa\u8868\u8fdb\u884c\u67e5\u8be2\u65f6\uff0c\u7cfb\u7edf\u81ea\u52a8\u5224\u65ad\u662f\u5426\u53ef\u4ee5\u590d\u7528\u7269\u5316\u89c6\u56fe\u4e2d\u7684\u9884\u8ba1\u7b97\u7ed3\u679c\u5904\u7406\u67e5\u8be2\u3002\u5982\u679c\u53ef\u4ee5\u590d\u7528\uff0c\u7cfb\u7edf\u4f1a\u76f4\u63a5\u4ece\u76f8\u5173\u7684\u7269\u5316\u89c6\u56fe\u8bfb\u53d6\u9884\u8ba1\u7b97\u7ed3\u679c\uff0c\u4ee5\u907f\u514d\u91cd\u590d\u8ba1\u7b97\u6d88\u8017\u7cfb\u7edf\u8d44\u6e90\u548c\u65f6\u95f4\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["StarRocks \u7684\u540c\u6b65\u7269\u5316\u89c6\u56fe\u652f\u6301\u90e8\u5206\u805a\u5408\u7b97\u5b50\u7684\u67e5\u8be2\u6539\u5199\u3002\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u89c1 ",(0,r.jsx)(n.a,{href:"#%E8%81%9A%E5%90%88%E5%87%BD%E6%95%B0%E5%8C%B9%E9%85%8D%E5%85%B3%E7%B3%BB",children:"\u805a\u5408\u51fd\u6570\u5339\u914d\u5173\u7cfb"}),"\u3002"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u51c6\u5907\u5de5\u4f5c",children:"\u51c6\u5907\u5de5\u4f5c"}),"\n",(0,r.jsx)(n.p,{children:"\u521b\u5efa\u540c\u6b65\u7269\u5316\u89c6\u56fe\u524d\uff0c\u60a8\u9700\u8981\u68c0\u67e5\u6570\u636e\u4ed3\u5e93\u662f\u5426\u9700\u8981\u901a\u8fc7\u540c\u6b65\u7269\u5316\u89c6\u56fe\u52a0\u901f\u67e5\u8be2\u3002\u6bd4\u5982\uff0c\u60a8\u53ef\u4ee5\u67e5\u770b\u6570\u636e\u4ed3\u5e93\u4e2d\u7684\u67e5\u8be2\u662f\u5426\u91cd\u590d\u4f7f\u7528\u7279\u5b9a\u5b50\u67e5\u8be2\u8bed\u53e5\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["\u4ee5\u4e0b\u793a\u4f8b\u57fa\u4e8e\u8868 ",(0,r.jsx)(n.code,{children:"sales_records"}),"\uff0c\u5176\u4e2d\u5305\u542b\u6bcf\u7b14\u4ea4\u6613\u7684\u4ea4\u6613 ID ",(0,r.jsx)(n.code,{children:"record_id"}),"\u3001\u9500\u552e\u5458 ",(0,r.jsx)(n.code,{children:"seller_id"}),"\u3001\u552e\u5356\u95e8\u5e97 ",(0,r.jsx)(n.code,{children:"store_id"}),"\u3001\u9500\u552e\u65f6\u95f4 ",(0,r.jsx)(n.code,{children:"sale_date"})," \u4ee5\u53ca\u9500\u552e\u989d ",(0,r.jsx)(n.code,{children:"sale_amt"}),"\u3002\u5efa\u8868\u5e76\u5bfc\u5165\u5982\u4e0b\u6570\u636e\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:'CREATE TABLE sales_records(\n    record_id INT,\n    seller_id INT,\n    store_id INT,\n    sale_date DATE,\n    sale_amt BIGINT\n) DISTRIBUTED BY HASH(record_id);\n\nINSERT INTO sales_records\nVALUES\n    (001,01,1,"2022-03-13",8573),\n    (002,02,2,"2022-03-14",6948),\n    (003,01,1,"2022-03-14",4319),\n    (004,03,3,"2022-03-15",8734),\n    (005,03,3,"2022-03-16",4212),\n    (006,02,2,"2022-03-17",9515);\n'})}),"\n",(0,r.jsx)(n.p,{children:"\u8be5\u793a\u4f8b\u4e1a\u52a1\u573a\u666f\u9700\u8981\u9891\u7e41\u5206\u6790\u4e0d\u540c\u95e8\u5e97\u7684\u9500\u552e\u989d\uff0c\u5219\u67e5\u8be2\u9700\u8981\u5927\u91cf\u8c03\u7528 sum() \u51fd\u6570\uff0c\u8017\u8d39\u5927\u91cf\u7cfb\u7edf\u8d44\u6e90\u3002\u60a8\u53ef\u4ee5\u8fd0\u884c\u8be5\u67e5\u8be2\u8bb0\u5f55\u67e5\u8be2\u6d88\u8017\u65f6\u95f4\uff0c\u5e76\u4f7f\u7528 EXPLAIN \u547d\u4ee4\u67e5\u770b\u6b64\u67e5\u8be2\u7684 Query Profile\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Plain",children:"MySQL > SELECT store_id, SUM(sale_amt)\nFROM sales_records\nGROUP BY store_id;\n+----------+-----------------+\n| store_id | sum(`sale_amt`) |\n+----------+-----------------+\n|        2 |           16463 |\n|        3 |           12946 |\n|        1 |           12892 |\n+----------+-----------------+\n3 rows in set (0.02 sec)\n\nMySQL > EXPLAIN SELECT store_id, SUM(sale_amt)\nFROM sales_records\nGROUP BY store_id;\n+-----------------------------------------------------------------------------+\n| Explain String                                                              |\n+-----------------------------------------------------------------------------+\n| PLAN FRAGMENT 0                                                             |\n|  OUTPUT EXPRS:3: store_id | 6: sum                                          |\n|   PARTITION: UNPARTITIONED                                                  |\n|                                                                             |\n|   RESULT SINK                                                               |\n|                                                                             |\n|   4:EXCHANGE                                                                |\n|                                                                             |\n| PLAN FRAGMENT 1                                                             |\n|  OUTPUT EXPRS:                                                              |\n|   PARTITION: HASH_PARTITIONED: 3: store_id                                  |\n|                                                                             |\n|   STREAM DATA SINK                                                          |\n|     EXCHANGE ID: 04                                                         |\n|     UNPARTITIONED                                                           |\n|                                                                             |\n|   3:AGGREGATE (merge finalize)                                              |\n|   |  output: sum(6: sum)                                                    |\n|   |  group by: 3: store_id                                                  |\n|   |                                                                         |\n|   2:EXCHANGE                                                                |\n|                                                                             |\n| PLAN FRAGMENT 2                                                             |\n|  OUTPUT EXPRS:                                                              |\n|   PARTITION: RANDOM                                                         |\n|                                                                             |\n|   STREAM DATA SINK                                                          |\n|     EXCHANGE ID: 02                                                         |\n|     HASH_PARTITIONED: 3: store_id                                           |\n|                                                                             |\n|   1:AGGREGATE (update serialize)                                            |\n|   |  STREAMING                                                              |\n|   |  output: sum(5: sale_amt)                                               |\n|   |  group by: 3: store_id                                                  |\n|   |                                                                         |\n|   0:OlapScanNode                                                            |\n|      TABLE: sales_records                                                   |\n|      PREAGGREGATION: ON                                                     |\n|      partitions=1/1                                                         |\n|      rollup: sales_records                                                  |\n|      tabletRatio=10/10                                                      |\n|      tabletList=12049,12053,12057,12061,12065,12069,12073,12077,12081,12085 |\n|      cardinality=1                                                          |\n|      avgRowSize=2.0                                                         |\n|      numNodes=0                                                             |\n+-----------------------------------------------------------------------------+\n45 rows in set (0.00 sec)\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u53ef\u4ee5\u770b\u5230\uff0c\u6b64\u65f6\u67e5\u8be2\u65f6\u95f4\u4e3a 0.02 \u79d2\uff0c\u5176 Query Profile \u4e2d\u7684 ",(0,r.jsx)(n.code,{children:"rollup"})," \u9879\u663e\u793a\u4e3a ",(0,r.jsx)(n.code,{children:"sales_records"}),"\uff08\u5373\u57fa\u8868\uff09\uff0c\u8bf4\u660e\u8be5\u67e5\u8be2\u672a\u4f7f\u7528\u7269\u5316\u89c6\u56fe\u52a0\u901f\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u521b\u5efa\u540c\u6b65\u7269\u5316\u89c6\u56fe",children:"\u521b\u5efa\u540c\u6b65\u7269\u5316\u89c6\u56fe"}),"\n",(0,r.jsxs)(n.p,{children:["\u60a8\u53ef\u4ee5\u901a\u8fc7 ",(0,r.jsx)(n.a,{href:"/doc/zh/docs/3.0/sql-reference/sql-statements/data-definition/CREATE%20MATERIALIZED%20VIEW",children:"CREATE MATERIALIZED VIEW"})," \u8bed\u53e5\u4e3a\u7279\u5b9a\u67e5\u8be2\u8bed\u53e5\u521b\u5efa\u7269\u5316\u89c6\u56fe\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u4ee5\u4e0b\u793a\u4f8b\u6839\u636e\u4e0a\u8ff0\u67e5\u8be2\u8bed\u53e5\uff0c\u4e3a\u8868 ",(0,r.jsx)(n.code,{children:"sales_records"})," \u521b\u5efa\u4e00\u4e2a\u201d\u4ee5\u552e\u5356\u95e8\u5e97\u4e3a\u5206\u7ec4\uff0c\u5bf9\u6bcf\u4e00\u4e2a\u552e\u5356\u95e8\u5e97\u91cc\u7684\u6240\u6709\u4ea4\u6613\u989d\u6c42\u548c\u201d\u7684\u540c\u6b65\u7269\u5316\u89c6\u56fe\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:"CREATE MATERIALIZED VIEW store_amt AS\nSELECT store_id, SUM(sale_amt)\nFROM sales_records\nGROUP BY store_id;\n"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u6ce8\u610f"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u5728\u540c\u6b65\u7269\u5316\u89c6\u56fe\u4e2d\u4f7f\u7528\u805a\u5408\u51fd\u6570\u65f6\uff0c\u67e5\u8be2\u8bed\u53e5\u5fc5\u987b\u4f7f\u7528 GROUP BY \u8bed\u53e5\uff0c\u4e14 SELECT LIST \u4e2d\u81f3\u5c11\u5305\u542b\u4e00\u4e2a\u5206\u7ec4\u5217\u3002"}),"\n",(0,r.jsxs)(n.li,{children:["\u540c\u6b65\u7269\u5316\u89c6\u56fe\u4e0d\u652f\u6301\u5bf9\u591a\u5217\u6570\u636e\u4f7f\u7528\u5355\u4e2a\u805a\u5408\u51fd\u6570\uff0c\u4e0d\u652f\u6301\u5f62\u5982 ",(0,r.jsx)(n.code,{children:"sum(a+b)"})," \u7684\u67e5\u8be2\u8bed\u53e5\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:["\u540c\u6b65\u7269\u5316\u89c6\u56fe\u4e0d\u652f\u6301\u5bf9\u540c\u5217\u6570\u636e\u4f7f\u7528\u591a\u4e2a\u805a\u5408\u51fd\u6570\uff0c\u4e0d\u652f\u6301\u5f62\u5982 ",(0,r.jsx)(n.code,{children:"select sum(a), min(a) from table"})," \u7684\u67e5\u8be2\u8bed\u53e5\u3002"]}),"\n",(0,r.jsx)(n.li,{children:"\u540c\u6b65\u7269\u5316\u89c6\u56fe\u521b\u5efa\u8bed\u53e5\u4e0d\u652f\u6301 JOIN\u3001WHERE \u5b50\u53e5\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u4f7f\u7528 ALTER TABLE DROP COLUMN \u5220\u9664\u57fa\u8868\u4e2d\u7279\u5b9a\u5217\u65f6\uff0c\u9700\u8981\u4fdd\u8bc1\u8be5\u57fa\u8868\u6240\u6709\u540c\u6b65\u7269\u5316\u89c6\u56fe\u4e2d\u90fd\u4e0d\u5305\u542b\u88ab\u5220\u9664\u5217\uff0c\u5426\u5219\u65e0\u6cd5\u8fdb\u884c\u5220\u9664\u64cd\u4f5c\u3002\u5982\u9700\u5220\u9664\u8be5\u5217\uff0c\u5219\u9700\u8981\u5c06\u6240\u6709\u5305\u542b\u8be5\u5217\u7684\u540c\u6b65\u7269\u5316\u89c6\u56fe\u5220\u9664\uff0c\u7136\u540e\u5220\u9664\u8be5\u5217\u3002"}),"\n",(0,r.jsxs)(n.li,{children:["\u4e3a\u4e00\u5f20\u8868\u521b\u5efa\u8fc7\u591a\u7684\u540c\u6b65\u7269\u5316\u89c6\u56fe\u4f1a\u5f71\u54cd\u5bfc\u5165\u7684\u6548\u7387\u3002\u5bfc\u5165\u6570\u636e\u65f6\uff0c\u540c\u6b65\u7269\u5316\u89c6\u56fe\u548c\u57fa\u8868\u6570\u636e\u5c06\u540c\u6b65\u66f4\u65b0\uff0c\u5982\u679c\u4e00\u5f20\u57fa\u8868\u5305\u542b ",(0,r.jsx)(n.code,{children:"n"})," \u4e2a\u540c\u6b65\u7269\u5316\u89c6\u56fe\uff0c\u5411\u57fa\u8868\u5bfc\u5165\u6570\u636e\u65f6\uff0c\u5176\u5bfc\u5165\u6548\u7387\u5927\u7ea6\u7b49\u540c\u4e8e\u5bfc\u5165 ",(0,r.jsx)(n.code,{children:"n"})," \u5f20\u8868\uff0c\u6570\u636e\u5bfc\u5165\u7684\u901f\u5ea6\u4f1a\u53d8\u6162\u3002"]}),"\n",(0,r.jsx)(n.li,{children:"\u5f53\u524d\u4e0d\u652f\u6301\u540c\u65f6\u521b\u5efa\u591a\u4e2a\u540c\u6b65\u7269\u5316\u89c6\u56fe\u3002\u4ec5\u5f53\u5f53\u524d\u521b\u5efa\u4efb\u52a1\u5b8c\u6210\u65f6\uff0c\u65b9\u53ef\u6267\u884c\u4e0b\u4e00\u4e2a\u521b\u5efa\u4efb\u52a1\u3002"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u67e5\u770b\u540c\u6b65\u7269\u5316\u89c6\u56fe\u6784\u5efa\u72b6\u6001",children:"\u67e5\u770b\u540c\u6b65\u7269\u5316\u89c6\u56fe\u6784\u5efa\u72b6\u6001"}),"\n",(0,r.jsxs)(n.p,{children:["\u521b\u5efa\u540c\u6b65\u7269\u5316\u89c6\u56fe\u662f\u4e00\u4e2a\u5f02\u6b65\u7684\u64cd\u4f5c\u3002CREATE MATERIALIZED VIEW \u547d\u4ee4\u6267\u884c\u6210\u529f\u5373\u4ee3\u8868\u521b\u5efa\u540c\u6b65\u7269\u5316\u89c6\u56fe\u7684\u4efb\u52a1\u63d0\u4ea4\u6210\u529f\u3002\u60a8\u53ef\u4ee5\u901a\u8fc7 ",(0,r.jsx)(n.a,{href:"/doc/zh/docs/3.0/sql-reference/sql-statements/data-manipulation/SHOW%20ALTER%20MATERIALIZED%20VIEW",children:"SHOW ALTER MATERIALIZED VIEW"})," \u547d\u4ee4\u67e5\u770b\u5f53\u524d\u6570\u636e\u5e93\u4e2d\u540c\u6b65\u7269\u5316\u89c6\u56fe\u7684\u6784\u5efa\u72b6\u6001\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Plain",children:"MySQL > SHOW ALTER MATERIALIZED VIEW\\G\n*************************** 1. row ***************************\n          JobId: 12090\n      TableName: sales_records\n     CreateTime: 2022-08-25 19:41:10\n   FinishedTime: 2022-08-25 19:41:39\n  BaseIndexName: sales_records\nRollupIndexName: store_amt\n       RollupId: 12091\n  TransactionId: 10\n          State: FINISHED\n            Msg: \n       Progress: NULL\n        Timeout: 86400\n1 row in set (0.00 sec)\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u5176\u4e2d\uff0c",(0,r.jsx)(n.code,{children:"RollupIndexName"})," \u4e3a\u540c\u6b65\u7269\u5316\u89c6\u56fe\u540d\u79f0\uff0c",(0,r.jsx)(n.code,{children:"State"})," \u9879\u4e3a ",(0,r.jsx)(n.code,{children:"FINISHED"}),"\uff0c\u4ee3\u8868\u8be5\u540c\u6b65\u7269\u5316\u89c6\u56fe\u6784\u5efa\u5b8c\u6210\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u4f7f\u7528\u540c\u6b65\u7269\u5316\u89c6\u56fe\u67e5\u8be2",children:"\u4f7f\u7528\u540c\u6b65\u7269\u5316\u89c6\u56fe\u67e5\u8be2"}),"\n",(0,r.jsx)(n.p,{children:"\u65b0\u5efa\u7684\u540c\u6b65\u7269\u5316\u89c6\u56fe\u5c06\u9884\u8ba1\u7b97\u5e76\u4fdd\u5b58\u4e0a\u8ff0\u67e5\u8be2\u7684\u7ed3\u679c\uff0c\u540e\u7eed\u67e5\u8be2\u5c06\u76f4\u63a5\u8c03\u7528\u8be5\u7ed3\u679c\u4ee5\u52a0\u901f\u67e5\u8be2\u3002\u521b\u5efa\u6210\u529f\u540e\uff0c\u60a8\u53ef\u4ee5\u518d\u6b21\u8fd0\u884c\u540c\u6837\u7684\u67e5\u8be2\u4ee5\u6d4b\u8bd5\u67e5\u8be2\u65f6\u95f4\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Plain",children:"MySQL > SELECT store_id, SUM(sale_amt)\nFROM sales_records\nGROUP BY store_id;\n+----------+-----------------+\n| store_id | sum(`sale_amt`) |\n+----------+-----------------+\n|        2 |           16463 |\n|        3 |           12946 |\n|        1 |           12892 |\n+----------+-----------------+\n3 rows in set (0.01 sec)\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u53ef\u4ee5\u770b\u5230\uff0c\u6b64\u65f6\u67e5\u8be2\u65f6\u95f4\u5df2\u7ecf\u7f29\u77ed\u4e3a 0.01 \u79d2\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u9a8c\u8bc1\u67e5\u8be2\u662f\u5426\u547d\u4e2d\u540c\u6b65\u7269\u5316\u89c6\u56fe",children:"\u9a8c\u8bc1\u67e5\u8be2\u662f\u5426\u547d\u4e2d\u540c\u6b65\u7269\u5316\u89c6\u56fe"}),"\n",(0,r.jsx)(n.p,{children:"\u60a8\u53ef\u4ee5\u518d\u6b21\u4f7f\u7528 EXPLAIN \u547d\u4ee4\u67e5\u770b\u8be5\u67e5\u8be2\u662f\u5426\u547d\u4e2d\u540c\u6b65\u7269\u5316\u89c6\u56fe\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Plain",children:"MySQL > EXPLAIN SELECT store_id, SUM(sale_amt) FROM sales_records GROUP BY store_id;\n+-----------------------------------------------------------------------------+\n| Explain String                                                              |\n+-----------------------------------------------------------------------------+\n| PLAN FRAGMENT 0                                                             |\n|  OUTPUT EXPRS:3: store_id | 6: sum                                          |\n|   PARTITION: UNPARTITIONED                                                  |\n|                                                                             |\n|   RESULT SINK                                                               |\n|                                                                             |\n|   4:EXCHANGE                                                                |\n|                                                                             |\n| PLAN FRAGMENT 1                                                             |\n|  OUTPUT EXPRS:                                                              |\n|   PARTITION: HASH_PARTITIONED: 3: store_id                                  |\n|                                                                             |\n|   STREAM DATA SINK                                                          |\n|     EXCHANGE ID: 04                                                         |\n|     UNPARTITIONED                                                           |\n|                                                                             |\n|   3:AGGREGATE (merge finalize)                                              |\n|   |  output: sum(6: sum)                                                    |\n|   |  group by: 3: store_id                                                  |\n|   |                                                                         |\n|   2:EXCHANGE                                                                |\n|                                                                             |\n| PLAN FRAGMENT 2                                                             |\n|  OUTPUT EXPRS:                                                              |\n|   PARTITION: RANDOM                                                         |\n|                                                                             |\n|   STREAM DATA SINK                                                          |\n|     EXCHANGE ID: 02                                                         |\n|     HASH_PARTITIONED: 3: store_id                                           |\n|                                                                             |\n|   1:AGGREGATE (update serialize)                                            |\n|   |  STREAMING                                                              |\n|   |  output: sum(5: sale_amt)                                               |\n|   |  group by: 3: store_id                                                  |\n|   |                                                                         |\n|   0:OlapScanNode                                                            |\n|      TABLE: sales_records                                                   |\n|      PREAGGREGATION: ON                                                     |\n|      partitions=1/1                                                         |\n|      rollup: store_amt                                                      |\n|      tabletRatio=10/10                                                      |\n|      tabletList=12092,12096,12100,12104,12108,12112,12116,12120,12124,12128 |\n|      cardinality=6                                                          |\n|      avgRowSize=2.0                                                         |\n|      numNodes=0                                                             |\n+-----------------------------------------------------------------------------+\n45 rows in set (0.00 sec)\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u53ef\u4ee5\u770b\u5230\uff0c\u6b64\u65f6 Query Profile \u4e2d\u7684 ",(0,r.jsx)(n.code,{children:"rollup"})," \u9879\u663e\u793a\u4e3a ",(0,r.jsx)(n.code,{children:"store_amt"}),"\uff08\u5373\u540c\u6b65\u7269\u5316\u89c6\u56fe\uff09\uff0c\u8bf4\u660e\u8be5\u67e5\u8be2\u5df2\u547d\u4e2d\u540c\u6b65\u7269\u5316\u89c6\u56fe\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u67e5\u770b\u540c\u6b65\u7269\u5316\u89c6\u56fe\u7684\u8868\u7ed3\u6784",children:"\u67e5\u770b\u540c\u6b65\u7269\u5316\u89c6\u56fe\u7684\u8868\u7ed3\u6784"}),"\n",(0,r.jsx)(n.p,{children:"\u60a8\u53ef\u4ee5\u901a\u8fc7 DESC <tbl_name> ALL \u547d\u4ee4\u67e5\u770b\u7279\u5b9a\u8868\u7684\u8868\u7ed3\u6784\u548c\u5176\u4e0b\u5c5e\u6240\u6709\u540c\u6b65\u7269\u5316\u89c6\u56fe\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Plain",children:"MySQL > DESC sales_records ALL;\n+---------------+---------------+-----------+--------+------+-------+---------+-------+\n| IndexName     | IndexKeysType | Field     | Type   | Null | Key   | Default | Extra |\n+---------------+---------------+-----------+--------+------+-------+---------+-------+\n| sales_records | DUP_KEYS      | record_id | INT    | Yes  | true  | NULL    |       |\n|               |               | seller_id | INT    | Yes  | true  | NULL    |       |\n|               |               | store_id  | INT    | Yes  | true  | NULL    |       |\n|               |               | sale_date | DATE   | Yes  | false | NULL    | NONE  |\n|               |               | sale_amt  | BIGINT | Yes  | false | NULL    | NONE  |\n|               |               |           |        |      |       |         |       |\n| store_amt     | AGG_KEYS      | store_id  | INT    | Yes  | true  | NULL    |       |\n|               |               | sale_amt  | BIGINT | Yes  | false | NULL    | SUM   |\n+---------------+---------------+-----------+--------+------+-------+---------+-------+\n8 rows in set (0.00 sec)\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u5220\u9664\u540c\u6b65\u7269\u5316\u89c6\u56fe",children:"\u5220\u9664\u540c\u6b65\u7269\u5316\u89c6\u56fe"}),"\n",(0,r.jsx)(n.p,{children:"\u5728\u4ee5\u4e0b\u4e09\u79cd\u60c5\u51b5\u4e0b\uff0c\u60a8\u9700\u8981\u5220\u9664\u540c\u6b65\u7269\u5316\u89c6\u56fe:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u540c\u6b65\u7269\u5316\u89c6\u56fe\u521b\u5efa\u9519\u8bef\uff0c\u9700\u8981\u5220\u9664\u6b63\u5728\u521b\u5efa\u4e2d\u7684\u540c\u6b65\u7269\u5316\u89c6\u56fe\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u521b\u5efa\u4e86\u5927\u91cf\u7684\u540c\u6b65\u7269\u5316\u89c6\u56fe\uff0c\u5bfc\u81f4\u6570\u636e\u5bfc\u5165\u901f\u5ea6\u8fc7\u6162\uff0c\u5e76\u4e14\u90e8\u5206\u540c\u6b65\u7269\u5316\u89c6\u56fe\u91cd\u590d\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u76f8\u5173\u67e5\u8be2\u9891\u7387\u8f83\u4f4e\uff0c\u4e14\u4e1a\u52a1\u573a\u666f\u53ef\u5bb9\u5fcd\u8f83\u9ad8\u7684\u67e5\u8be2\u5ef6\u8fdf\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"\u5220\u9664\u6b63\u5728\u521b\u5efa\u7684\u540c\u6b65\u7269\u5316\u89c6\u56fe",children:"\u5220\u9664\u6b63\u5728\u521b\u5efa\u7684\u540c\u6b65\u7269\u5316\u89c6\u56fe"}),"\n",(0,r.jsxs)(n.p,{children:["\u53ef\u4ee5\u901a\u8fc7\u53d6\u6d88\u6b63\u5728\u8fdb\u884c\u7684\u540c\u6b65\u7269\u5316\u89c6\u56fe\u521b\u5efa\u4efb\u52a1\u5220\u9664\u6b63\u5728\u521b\u5efa\u7684\u540c\u6b65\u7269\u5316\u89c6\u56fe\u3002\u9996\u5148\u9700\u8981\u901a\u8fc7 ",(0,r.jsx)(n.a,{href:"#%E6%9F%A5%E7%9C%8B%E5%90%8C%E6%AD%A5%E7%89%A9%E5%8C%96%E8%A7%86%E5%9B%BE%E6%9E%84%E5%BB%BA%E7%8A%B6%E6%80%81",children:"\u67e5\u770b\u540c\u6b65\u7269\u5316\u89c6\u56fe\u6784\u5efa\u72b6\u6001"})," \u83b7\u53d6\u8be5\u540c\u6b65\u7269\u5316\u89c6\u56fe\u7684\u4efb\u52a1 ID ",(0,r.jsx)(n.code,{children:"JobID"}),"\u3002\u5f97\u5230\u4efb\u52a1 ID \u540e\uff0c\u9700\u8981\u901a\u8fc7 CANCEL ALTER \u547d\u4ee4\u53d6\u6d88\u8be5\u521b\u5efa\u4efb\u52a1\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:"CANCEL ALTER TABLE ROLLUP FROM sales_records (12090);\n"})}),"\n",(0,r.jsx)(n.h3,{id:"\u5220\u9664\u5df2\u521b\u5efa\u7684\u540c\u6b65\u7269\u5316\u89c6\u56fe",children:"\u5220\u9664\u5df2\u521b\u5efa\u7684\u540c\u6b65\u7269\u5316\u89c6\u56fe"}),"\n",(0,r.jsxs)(n.p,{children:["\u53ef\u4ee5\u901a\u8fc7 ",(0,r.jsx)(n.a,{href:"/doc/zh/docs/3.0/sql-reference/sql-statements/data-definition/DROP%20MATERIALIZED%20VIEW",children:"DROP MATERIALIZED VIEW"})," \u547d\u4ee4\u5220\u9664\u5df2\u521b\u5efa\u7684\u540c\u6b65\u7269\u5316\u89c6\u56fe\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:"DROP MATERIALIZED VIEW store_amt;\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u6700\u4f73\u5b9e\u8df5",children:"\u6700\u4f73\u5b9e\u8df5"}),"\n",(0,r.jsx)(n.h3,{id:"\u7cbe\u786e\u53bb\u91cd",children:"\u7cbe\u786e\u53bb\u91cd"}),"\n",(0,r.jsxs)(n.p,{children:["\u4ee5\u4e0b\u793a\u4f8b\u57fa\u4e8e\u4e00\u5f20\u5e7f\u544a\u4e1a\u52a1\u76f8\u5173\u7684\u660e\u7ec6\u8868 ",(0,r.jsx)(n.code,{children:"advertiser_view_record"}),"\uff0c\u5176\u4e2d\u8bb0\u5f55\u4e86\u70b9\u51fb\u65e5\u671f ",(0,r.jsx)(n.code,{children:"click_time"}),"\u3001\u5e7f\u544a\u5ba2\u6237 ",(0,r.jsx)(n.code,{children:"advertiser"}),"\u3001\u70b9\u51fb\u6e20\u9053 ",(0,r.jsx)(n.code,{children:"channel"})," \u4ee5\u53ca\u70b9\u51fb\u7528\u6237 ID ",(0,r.jsx)(n.code,{children:"user_id"}),"\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:"CREATE TABLE advertiser_view_record(\n    click_time DATE,\n    advertiser VARCHAR(10),\n    channel VARCHAR(10),\n    user_id INT\n) distributed BY hash(click_time);\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u8be5\u573a\u666f\u9700\u8981\u9891\u7e41\u4f7f\u7528\u5982\u4e0b\u8bed\u53e5\u67e5\u8be2\u70b9\u51fb\u5e7f\u544a\u7684 UV\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:"SELECT advertiser, channel, count(distinct user_id)\nFROM advertiser_view_record\nGROUP BY advertiser, channel;\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u5982\u9700\u5b9e\u73b0\u7cbe\u786e\u53bb\u91cd\u67e5\u8be2\u52a0\u901f\uff0c\u60a8\u53ef\u4ee5\u57fa\u4e8e\u8be5\u660e\u7ec6\u8868\u521b\u5efa\u4e00\u5f20\u540c\u6b65\u7269\u5316\u89c6\u56fe\uff0c\u5e76\u4f7f\u7528 bitmap_union() \u51fd\u6570\u9884\u5148\u805a\u5408\u6570\u636e\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:"CREATE MATERIALIZED VIEW advertiser_uv AS\nSELECT advertiser, channel, bitmap_union(to_bitmap(user_id))\nFROM advertiser_view_record\nGROUP BY advertiser, channel;\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u540c\u6b65\u7269\u5316\u89c6\u56fe\u521b\u5efa\u5b8c\u6210\u540e\uff0c\u540e\u7eed\u67e5\u8be2\u8bed\u53e5\u4e2d\u7684\u5b50\u67e5\u8be2 ",(0,r.jsx)(n.code,{children:"count(distinct user_id)"})," \u4f1a\u88ab\u81ea\u52a8\u6539\u5199\u4e3a ",(0,r.jsx)(n.code,{children:"bitmap_union_count (to_bitmap(user_id))"})," \u4ee5\u4fbf\u67e5\u8be2\u547d\u4e2d\u7269\u5316\u89c6\u56fe\u3002"]}),"\n",(0,r.jsx)(n.h3,{id:"\u8fd1\u4f3c\u53bb\u91cd",children:"\u8fd1\u4f3c\u53bb\u91cd"}),"\n",(0,r.jsxs)(n.p,{children:["\u4ee5\u4e0a\u6587\u8868 ",(0,r.jsx)(n.code,{children:"advertiser_view_record"})," \u4e3a\u4f8b\uff0c\u5982\u679c\u60f3\u5728\u67e5\u8be2\u70b9\u51fb\u5e7f\u544a\u7684 UV \u65f6\u5b9e\u73b0\u8fd1\u4f3c\u53bb\u91cd\u67e5\u8be2\u52a0\u901f\uff0c\u53ef\u57fa\u4e8e\u8be5\u660e\u7ec6\u8868\u521b\u5efa\u4e00\u5f20\u540c\u6b65\u7269\u5316\u89c6\u56fe\uff0c\u5e76\u4f7f\u7528 ",(0,r.jsx)(n.a,{href:"/doc/zh/docs/3.0/sql-reference/sql-functions/aggregate-functions/hll_union",children:"hll_union()"})," \u51fd\u6570\u9884\u5148\u805a\u5408\u6570\u636e\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:"CREATE MATERIALIZED VIEW advertiser_uv2 AS\nSELECT advertiser, channel, hll_union(hll_hash(user_id))\nFROM advertiser_view_record\nGROUP BY advertiser, channel;\n"})}),"\n",(0,r.jsx)(n.h3,{id:"\u589e\u8bbe\u524d\u7f00\u7d22\u5f15",children:"\u589e\u8bbe\u524d\u7f00\u7d22\u5f15"}),"\n",(0,r.jsxs)(n.p,{children:["\u5047\u8bbe\u57fa\u8868 ",(0,r.jsx)(n.code,{children:"tableA"})," \u5305\u542b ",(0,r.jsx)(n.code,{children:"k1"}),"\u3001",(0,r.jsx)(n.code,{children:"k2"})," \u548c ",(0,r.jsx)(n.code,{children:"k3"})," \u5217\uff0c\u5176\u4e2d\u4ec5 ",(0,r.jsx)(n.code,{children:"k1"})," \u548c ",(0,r.jsx)(n.code,{children:"k2"})," \u4e3a\u6392\u5e8f\u952e\u3002\u5982\u679c\u4e1a\u52a1\u573a\u666f\u9700\u8981\u5728\u67e5\u8be2\u8bed\u53e5\u4e2d\u5305\u62ec\u5b50\u67e5\u8be2 ",(0,r.jsx)(n.code,{children:"where k3=x"})," \u5e76\u901a\u8fc7\u524d\u7f00\u7d22\u5f15\u52a0\u901f\u67e5\u8be2\uff0c\u90a3\u4e48\u60a8\u53ef\u4ee5\u521b\u5efa\u4ee5 ",(0,r.jsx)(n.code,{children:"k3"})," \u4e3a\u7b2c\u4e00\u5217\u7684\u540c\u6b65\u7269\u5316\u89c6\u56fe\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:"CREATE MATERIALIZED VIEW k3_as_key AS\nSELECT k3, k2, k1\nFROM tableA\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u805a\u5408\u51fd\u6570\u5339\u914d\u5173\u7cfb",children:"\u805a\u5408\u51fd\u6570\u5339\u914d\u5173\u7cfb"}),"\n",(0,r.jsx)(n.p,{children:"\u4f7f\u7528\u540c\u6b65\u7269\u5316\u89c6\u56fe\u67e5\u8be2\u65f6\uff0c\u539f\u59cb\u67e5\u8be2\u8bed\u53e5\u5c06\u4f1a\u88ab\u81ea\u52a8\u6539\u5199\u5e76\u7528\u4e8e\u67e5\u8be2\u540c\u6b65\u7269\u5316\u89c6\u56fe\u4e2d\u4fdd\u5b58\u7684\u4e2d\u95f4\u7ed3\u679c\u3002\u4e0b\u8868\u5c55\u793a\u4e86\u539f\u59cb\u67e5\u8be2\u805a\u5408\u51fd\u6570\u548c\u6784\u5efa\u540c\u6b65\u7269\u5316\u89c6\u56fe\u7528\u5230\u7684\u805a\u5408\u51fd\u6570\u7684\u5339\u914d\u5173\u7cfb\u3002\u60a8\u53ef\u4ee5\u6839\u636e\u4e1a\u52a1\u573a\u666f\u9009\u62e9\u5bf9\u5e94\u7684\u805a\u5408\u51fd\u6570\u6784\u5efa\u540c\u6b65\u7269\u5316\u89c6\u56fe\u3002"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"\u539f\u59cb\u67e5\u8be2\u805a\u5408\u51fd\u6570"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"\u7269\u5316\u89c6\u56fe\u6784\u5efa\u805a\u5408\u51fd\u6570"})})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"sum"}),(0,r.jsx)(n.td,{children:"sum"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"min"}),(0,r.jsx)(n.td,{children:"min"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"max"}),(0,r.jsx)(n.td,{children:"max"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"count"}),(0,r.jsx)(n.td,{children:"count"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"bitmap_union, bitmap_union_count, count(distinct)"}),(0,r.jsx)(n.td,{children:"bitmap_union"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"hll_raw_agg, hll_union_agg, ndv, approx_count_distinct"}),(0,r.jsx)(n.td,{children:"hll_union"})]})]})]})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,l.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(o,e)})):o(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>c,ah:()=>i});var r=s(67294);const l=r.createContext({});function i(e){const n=r.useContext(l);return r.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const d={};function c({components:e,children:n,disableParentContext:s}){let c;return c=s?"function"==typeof e?e({}):e||d:i(e),r.createElement(l.Provider,{value:c},n)}}}]);