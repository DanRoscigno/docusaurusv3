"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[6575],{50652:(s,e,r)=>{r.r(e),r.d(e,{assets:()=>t,contentTitle:()=>n,default:()=>o,frontMatter:()=>c,metadata:()=>h,toc:()=>d});var i=r(85893),l=r(11151);const c={},n="StarRocks version 2.0",h={id:"release_notes/release-2.0",title:"StarRocks version 2.0",description:"2.0.9",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.1/release_notes/release-2.0.md",sourceDirName:"release_notes",slug:"/release_notes/release-2.0",permalink:"/doc/zh/docs/release_notes/release-2.0",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/release_notes/release-2.0.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"StarRocks version 2.2",permalink:"/doc/zh/docs/release_notes/release-2.2"},next:{title:"StarRocks version 1.19",permalink:"/doc/zh/docs/release_notes/release-1.19"}},t={},d=[{value:"2.0.9",id:"209",level:2},{value:"\u95ee\u9898\u4fee\u590d",id:"\u95ee\u9898\u4fee\u590d",level:3},{value:"2.0.8",id:"208",level:2},{value:"\u95ee\u9898\u4fee\u590d",id:"\u95ee\u9898\u4fee\u590d-1",level:3},{value:"2.0.7",id:"207",level:2},{value:"\u95ee\u9898\u4fee\u590d",id:"\u95ee\u9898\u4fee\u590d-2",level:3},{value:"2.0.6",id:"206",level:2},{value:"\u95ee\u9898\u4fee\u590d",id:"\u95ee\u9898\u4fee\u590d-3",level:3},{value:"2.0.5",id:"205",level:2},{value:"\u95ee\u9898\u4fee\u590d",id:"\u95ee\u9898\u4fee\u590d-4",level:3},{value:"2.0.4",id:"204",level:2},{value:"\u95ee\u9898\u4fee\u590d",id:"\u95ee\u9898\u4fee\u590d-5",level:3},{value:"2.0.3",id:"203",level:2},{value:"\u95ee\u9898\u4fee\u590d",id:"\u95ee\u9898\u4fee\u590d-6",level:3},{value:"2.0.2",id:"202",level:2},{value:"\u529f\u80fd\u4f18\u5316",id:"\u529f\u80fd\u4f18\u5316",level:3},{value:"\u95ee\u9898\u4fee\u590d",id:"\u95ee\u9898\u4fee\u590d-7",level:3},{value:"2.0.1",id:"201",level:2},{value:"\u529f\u80fd\u4f18\u5316",id:"\u529f\u80fd\u4f18\u5316-1",level:3},{value:"\u95ee\u9898\u4fee\u590d",id:"\u95ee\u9898\u4fee\u590d-8",level:3},{value:"Behavior Change",id:"behavior-change",level:3},{value:"2.0.0",id:"200",level:2},{value:"\u65b0\u529f\u80fd",id:"\u65b0\u529f\u80fd",level:3},{value:"\u529f\u80fd\u4f18\u5316",id:"\u529f\u80fd\u4f18\u5316-2",level:3},{value:"\u95ee\u9898\u4fee\u590d",id:"\u95ee\u9898\u4fee\u590d-9",level:3}];function a(s){const e=Object.assign({h1:"h1",h2:"h2",p:"p",h3:"h3",ul:"ul",li:"li",a:"a",code:"code",blockquote:"blockquote"},(0,l.ah)(),s.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"starrocks-version-20",children:"StarRocks version 2.0"}),"\n",(0,i.jsx)(e.h2,{id:"209",children:"2.0.9"}),"\n",(0,i.jsx)(e.p,{children:"\u53d1\u5e03\u65e5\u671f\uff1a2022\u5e748\u67086\u65e5"}),"\n",(0,i.jsx)(e.h3,{id:"\u95ee\u9898\u4fee\u590d",children:"\u95ee\u9898\u4fee\u590d"}),"\n",(0,i.jsx)(e.p,{children:"\u4fee\u590d\u4e86\u5982\u4e0b\u95ee\u9898\uff1a"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\u4f7f\u7528 Broker Load \u5bfc\u5165\u6570\u636e\u65f6\uff0c\u5982\u679c Broker \u8fdb\u7a0b\u538b\u529b\u5927\uff0c\u53ef\u80fd\u5bfc\u81f4\u5185\u90e8\u5fc3\u8df3\u5904\u7406\u65f6\u51fa\u73b0\u95ee\u9898\uff0c\u4ece\u800c\u5bfc\u81f4\u5bfc\u5165\u6570\u636e\u4e22\u5931\u3002",(0,i.jsx)(e.a,{href:"https://github.com/StarRocks/starrocks/issues/8282",children:"#8282"})]}),"\n",(0,i.jsxs)(e.li,{children:["\u4f7f\u7528 Broker Load \u5bfc\u5165\u6570\u636e\u65f6\uff0c\u5982\u679c\u4f7f\u7528 ",(0,i.jsx)(e.code,{children:"COLUMNS FROM PATH AS"})," \u53c2\u6570\u6307\u5b9a\u7684\u5217\u5728 StarRocks \u7684\u8868\u4e2d\u4e0d\u5b58\u5728\uff0c\u4f1a\u5bfc\u81f4 BE \u505c\u6b62\u670d\u52a1\u3002",(0,i.jsx)(e.a,{href:"https://github.com/StarRocks/starrocks/issues/5346",children:"#5346"})]}),"\n",(0,i.jsxs)(e.li,{children:["\u4e00\u4e9b\u67e5\u8be2\u4f1a\u88ab\u8f6c\u53d1\u5230 Leader FE \u8282\u70b9\u4e0a\uff0c\u4ece\u800c\u53ef\u80fd\u5bfc\u81f4\u901a\u8fc7 ",(0,i.jsx)(e.code,{children:"/api/query_detail"})," \u63a5\u53e3\u83b7\u5f97\u7684 SQL \u8bed\u53e5\u6267\u884c\u4fe1\u606f\u4e0d\u6b63\u786e\uff0c\u6bd4\u5982 SHOW FRONTENDS \u8bed\u53e5\u3002",(0,i.jsx)(e.a,{href:"https://github.com/StarRocks/starrocks/issues/9185",children:"#9185"})]}),"\n",(0,i.jsxs)(e.li,{children:["\u63d0\u4ea4\u591a\u4e2a Broker Load \u4f5c\u4e1a\u540c\u65f6\u5bfc\u5165\u76f8\u540c HDFS \u6587\u4ef6\u7684\u6570\u636e\u65f6\uff0c\u5982\u679c\u6709\u4e00\u4e2a\u4f5c\u4e1a\u51fa\u73b0\u5f02\u5e38\uff0c\u53ef\u80fd\u4f1a\u5bfc\u81f4\u5176\u4ed6\u4f5c\u4e1a\u4e5f\u65e0\u6cd5\u6b63\u5e38\u8bfb\u53d6\u6570\u636e\u5e76\u4e14\u6700\u7ec8\u5931\u8d25\u3002",(0,i.jsx)(e.a,{href:"https://github.com/StarRocks/starrocks/issues/9506",children:"#9506"})]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"208",children:"2.0.8"}),"\n",(0,i.jsx)(e.p,{children:"\u53d1\u5e03\u65e5\u671f\uff1a2022\u5e747\u670815\u65e5"}),"\n",(0,i.jsx)(e.h3,{id:"\u95ee\u9898\u4fee\u590d-1",children:"\u95ee\u9898\u4fee\u590d"}),"\n",(0,i.jsx)(e.p,{children:"\u4fee\u590d\u4e86\u5982\u4e0b\u95ee\u9898\uff1a"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\u53cd\u590d\u5207\u6362 Leader FE \u8282\u70b9\u53ef\u80fd\u4f1a\u5bfc\u81f4\u6240\u6709\u5bfc\u5165\u4f5c\u4e1a\u6302\u8d77\uff0c\u65e0\u6cd5\u8fdb\u884c\u5bfc\u5165\u3002",(0,i.jsx)(e.a,{href:"https://github.com/StarRocks/starrocks/issues/7350",children:"#7350"})]}),"\n",(0,i.jsxs)(e.li,{children:["\u5bfc\u5165\u7684\u6570\u636e\u6709\u503e\u659c\u65f6\uff0c\u67d0\u4e9b\u5217\u5360\u7528\u5185\u5b58\u6bd4\u8f83\u5927\uff0c\u53ef\u80fd\u4f1a\u5bfc\u81f4 MemTable \u7684\u5185\u5b58\u4f30\u7b97\u8d85\u8fc7 4GB\uff0c\u4ece\u800c\u5bfc\u81f4 BE \u505c\u6b62\u5de5\u4f5c\u3002",(0,i.jsx)(e.a,{href:"https://github.com/StarRocks/starrocks/issues/7161",children:"#7161"})]}),"\n",(0,i.jsxs)(e.li,{children:["\u7269\u5316\u89c6\u56fe\u5904\u7406\u5927\u5c0f\u5199\u65f6\u6709\u95ee\u9898\uff0c\u5bfc\u81f4\u91cd\u542f FE \u540e\u5176 schema \u53d1\u751f\u53d8\u5316\u3002",(0,i.jsx)(e.a,{href:"https://github.com/StarRocks/starrocks/issues/7362",children:"#7362"})]}),"\n",(0,i.jsxs)(e.li,{children:["\u4f7f\u7528 Routine Load \u5bfc\u5165 Kafka \u7684 JSON \u6570\u636e\u65f6\uff0c\u5982\u679c JSON \u6570\u636e\u4e2d\u5b58\u5728\u7a7a\u884c\uff0c\u90a3\u4e48\u7a7a\u884c\u540e\u7684\u6570\u636e\u4f1a\u4e22\u5931\u3002",(0,i.jsx)(e.a,{href:"https://github.com/StarRocks/starrocks/issues/8534",children:"#8534"})]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"207",children:"2.0.7"}),"\n",(0,i.jsx)(e.p,{children:"\u53d1\u5e03\u65e5\u671f\uff1a2022\u5e746\u670813\u65e5"}),"\n",(0,i.jsx)(e.h3,{id:"\u95ee\u9898\u4fee\u590d-2",children:"\u95ee\u9898\u4fee\u590d"}),"\n",(0,i.jsx)(e.p,{children:"\u4fee\u590d\u4e86\u5982\u4e0b\u95ee\u9898\uff1a"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\u5728\u8fdb\u884c\u8868\u538b\u7f29 (Compaction) \u65f6\uff0c\u5982\u679c\u67d0\u5217\u7684\u4efb\u610f\u4e00\u4e2a\u503c\u91cd\u590d\u51fa\u73b0\u7684\u6b21\u6570\u8d85\u8fc7 0x40000000\uff0c\u4f1a\u5bfc\u81f4 Compaction \u5361\u4f4f\u3002",(0,i.jsx)(e.a,{href:"https://github.com/StarRocks/starrocks/issues/6513",children:"#6513"})]}),"\n",(0,i.jsxs)(e.li,{children:["BDB JE v7.3.8 \u7248\u672c\u5f15\u5165\u4e86\u4e00\u4e9b\u95ee\u9898\uff0c\u5bfc\u81f4 FE \u542f\u52a8\u540e\u78c1\u76d8 I/O \u5f88\u9ad8\u3001\u78c1\u76d8\u4f7f\u7528\u7387\u6301\u7eed\u5f02\u5e38\u589e\u957f\u3001\u4e14\u6ca1\u6709\u6062\u590d\u8ff9\u8c61\uff0c\u56de\u9000\u5230 BDB JE v7.3.7 \u7248\u672c\u540e FE \u6062\u590d\u6b63\u5e38\u3002",(0,i.jsx)(e.a,{href:"https://github.com/StarRocks/starrocks/issues/6634",children:"#6634"})]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"206",children:"2.0.6"}),"\n",(0,i.jsx)(e.p,{children:"\u53d1\u5e03\u65e5\u671f\uff1a2022\u5e745\u670825\u65e5"}),"\n",(0,i.jsx)(e.h3,{id:"\u95ee\u9898\u4fee\u590d-3",children:"\u95ee\u9898\u4fee\u590d"}),"\n",(0,i.jsx)(e.p,{children:"\u4fee\u590d\u4e86\u5982\u4e0b\u95ee\u9898\uff1a"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\u67d0\u4e9b\u56fe\u5f62\u5316\u754c\u9762\u5de5\u5177\u4f1a\u81ea\u52a8\u8bbe\u7f6e ",(0,i.jsx)(e.code,{children:"set_sql_limit"})," \u53d8\u91cf\uff0c\u5bfc\u81f4 SQL \u8bed\u53e5 ORDER BY LIMIT \u88ab\u5ffd\u7565\uff0c\u4ece\u800c\u5bfc\u81f4\u8fd4\u56de\u7684\u6570\u636e\u884c\u6570\u4e0d\u6b63\u786e\u3002",(0,i.jsx)(e.a,{href:"https://github.com/StarRocks/starrocks/issues/5966",children:"#5966"})]}),"\n",(0,i.jsxs)(e.li,{children:["\u5f53\u4e00\u4e2a Colocation Group \u4e2d\u5305\u542b\u7684\u8868\u6bd4\u8f83\u591a\u3001\u5bfc\u5165\u9891\u7387\u53c8\u6bd4\u8f83\u9ad8\u65f6\uff0c\u53ef\u80fd\u4f1a\u5bfc\u81f4\u8be5 Colocation Group \u65e0\u6cd5\u4fdd\u6301 ",(0,i.jsx)(e.code,{children:"stable"})," \u72b6\u6001\uff0c\u4ece\u800c\u5bfc\u81f4 JOIN \u8bed\u53e5\u65e0\u6cd5\u4f7f\u7528 Colocate Join\u3002\u73b0\u4f18\u5316\u4e3a\u5bfc\u5165\u6570\u636e\u65f6\u7a0d\u5fae\u591a\u7b49\u4e00\u4f1a\uff0c\u8fd9\u6837\u53ef\u4ee5\u5c3d\u91cf\u4fdd\u8bc1\u5bfc\u5165\u7684 Tablet \u526f\u672c\u7684\u5b8c\u6574\u6027\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:["\u5c11\u6570\u526f\u672c\u7531\u4e8e\u8d1f\u8f7d\u8f83\u9ad8\u3001\u7f51\u7edc\u5ef6\u8fdf\u7b49\u539f\u56e0\u5bfc\u81f4\u5bfc\u5165\u5931\u8d25\uff0c\u7cfb\u7edf\u4f1a\u89e6\u53d1\u526f\u672c\u514b\u9686\u64cd\u4f5c\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u4f1a\u6709\u4e00\u5b9a\u6982\u7387\u5f15\u53d1\u6b7b\u9501\uff0c\u4ece\u800c\u53ef\u80fd\u51fa\u73b0\u8fdb\u7a0b\u8d1f\u8f7d\u6781\u4f4e\u3001\u5374\u6709\u5927\u91cf\u8bf7\u6c42\u8d85\u65f6\u7684\u73b0\u8c61\u3002",(0,i.jsx)(e.a,{href:"https://github.com/StarRocks/starrocks/issues/5646",children:"#5646"})," ",(0,i.jsx)(e.a,{href:"https://github.com/StarRocks/starrocks/issues/6290",children:"#6290"})]}),"\n",(0,i.jsxs)(e.li,{children:['\u4e3b\u952e\u6a21\u578b\u7684\u8868\u7ecf\u8fc7\u8868\u7ed3\u6784\u53d8\u66f4\u4ee5\u540e\uff0c\u5728\u6570\u636e\u5bfc\u5165\u65f6\uff0c\u53ef\u80fd\u4f1a\u62a5 "duplicate key xxx" \u9519\u8bef\u3002',(0,i.jsx)(e.a,{href:"https://github.com/StarRocks/starrocks/issues/5878",children:"#5878"})]}),"\n",(0,i.jsxs)(e.li,{children:["\u6267\u884c DROP SCHEMA \u8bed\u53e5\uff0c\u4f1a\u5bfc\u81f4\u76f4\u63a5\u5f3a\u5236\u5220\u9664\u6570\u636e\u5e93\uff0c\u5e76\u4e14\u5220\u9664\u7684\u6570\u636e\u5e93\u4e0d\u53ef\u6062\u590d\u3002",(0,i.jsx)(e.a,{href:"https://github.com/StarRocks/starrocks/issues/6201",children:"#6201"})]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"205",children:"2.0.5"}),"\n",(0,i.jsx)(e.p,{children:"\u53d1\u5e03\u65e5\u671f\uff1a2022\u5e745\u670813\u65e5"}),"\n",(0,i.jsx)(e.p,{children:"\u5347\u7ea7\u5efa\u8bae\uff1a\u672c\u6b21\u4fee\u590d\u4e86\u4e00\u4e9b\u8ddf\u6570\u636e\u5b58\u50a8\u6216\u6570\u636e\u67e5\u8be2\u6b63\u786e\u6027\u76f8\u5173\u7684\u5173\u952e Bug\uff0c\u5efa\u8bae\u60a8\u53ca\u65f6\u5347\u7ea7\u3002"}),"\n",(0,i.jsx)(e.h3,{id:"\u95ee\u9898\u4fee\u590d-4",children:"\u95ee\u9898\u4fee\u590d"}),"\n",(0,i.jsx)(e.p,{children:"\u4fee\u590d\u4e86\u5982\u4e0b\u95ee\u9898\uff1a"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\u3010Critical Bug\u3011\u901a\u8fc7\u6539\u8fdb\u4e3a\u6279\u91cf publish version\uff0c\u89e3\u51b3 BE \u53ef\u80fd\u56e0\u5b95\u673a\u800c\u5bfc\u81f4\u6570\u636e\u4e22\u5931\u7684\u95ee\u9898\u3002",(0,i.jsx)(e.a,{href:"https://github.com/StarRocks/starrocks/issues/3140",children:"#3140"})]}),"\n",(0,i.jsxs)(e.li,{children:["\u3010Critical Bug\u3011\u5728\u6570\u636e\u5199\u5165\u4e2d\u7684\u4e00\u4e9b\u7279\u6b8a\u9636\u6bb5\uff0c\u5982\u679c Tablet \u8fdb\u884c\u5e76\u5b8c\u6210\u8fc1\u79fb\uff0c\u6570\u636e\u4f1a\u7ee7\u7eed\u5199\u5165\u81f3\u539f\u5148 Tablet \u5bf9\u5e94\u7684\u78c1\u76d8\uff0c\u5bfc\u81f4\u6570\u636e\u4e22\u5931\uff0c\u8fdb\u800c\u5bfc\u81f4\u67e5\u8be2\u9519\u8bef\u3002",(0,i.jsx)(e.a,{href:"https://github.com/StarRocks/starrocks/issues/5160",children:"#5160"})]}),"\n",(0,i.jsxs)(e.li,{children:["\u3010Critical Bug\u3011\u5728\u8fdb\u884c\u591a\u4e2a DELETE \u64cd\u4f5c\u540e\uff0c\u67e5\u8be2\u65f6\uff0c\u5982\u679c\u7cfb\u7edf\u5185\u90e8\u4f7f\u7528\u4e86\u4f4e\u57fa\u6570\u4f18\u5316\uff0c\u5219\u67e5\u8be2\u7ed3\u679c\u53ef\u80fd\u662f\u9519\u8bef\u7684\u3002",(0,i.jsx)(e.a,{href:"https://github.com/StarRocks/starrocks/issues/5712",children:"#5712"})]}),"\n",(0,i.jsxs)(e.li,{children:["\u3010Critical Bug\u3011JOIN \u67e5\u8be2\u7684\u4e24\u4e2a\u5b57\u6bb5\u7c7b\u578b\u5206\u522b\u662f DOUBLE \u548c VARCHAR \u65f6\uff0cJOIN \u67e5\u8be2\u7ed3\u679c\u53ef\u80fd\u9519\u8bef\u3002 ",(0,i.jsx)(e.a,{href:"https://github.com/StarRocks/starrocks/pull/5809",children:"#5809"})]}),"\n",(0,i.jsxs)(e.li,{children:["\u5728\u6570\u636e\u5bfc\u5165\u4e2d\u7684\u67d0\u4e9b\u7279\u6b8a\u60c5\u5f62\uff0c\u53ef\u80fd\u4e00\u4e9b\u526f\u672c\u7684\u67d0\u4e9b\u7248\u672c\u8fd8\u672a\u751f\u6548\uff0c\u5374\u88ab FE \u6807\u8bb0\u4e3a\u751f\u6548\uff0c\u5bfc\u81f4\u67e5\u8be2\u65f6\u51fa\u73b0\u627e\u4e0d\u5230\u5bf9\u5e94\u7248\u672c\u6570\u636e\u7684\u9519\u8bef\u3002",(0,i.jsx)(e.a,{href:"https://github.com/StarRocks/starrocks/issues/5153",children:"#5153"})]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"SPLIT"})," \u51fd\u6570\u4f7f\u7528 ",(0,i.jsx)(e.code,{children:"NULL"})," \u53c2\u6570\u65f6\uff0c\u4f1a\u5bfc\u81f4 BE \u505c\u6b62\u670d\u52a1\u3002",(0,i.jsx)(e.a,{href:"https://github.com/StarRocks/starrocks/issues/4092",children:"#4092"})]}),"\n",(0,i.jsxs)(e.li,{children:["\u4ece Apache Doris 0.13 \u5347\u7ea7\u5230 StarRocks 1.19.x \u5e76\u8fd0\u884c\u4e00\u6bb5\u65f6\u95f4\uff0c\u518d\u5347\u7ea7\u5230 StarRocks 2.0.1\uff0c\u53ef\u80fd\u4f1a\u5347\u7ea7\u5931\u8d25\u3002",(0,i.jsx)(e.a,{href:"https://github.com/StarRocks/starrocks/issues/5309",children:"#5309"})]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"204",children:"2.0.4"}),"\n",(0,i.jsx)(e.p,{children:"\u53d1\u5e03\u65e5\u671f\uff1a 2022\u5e744\u670818\u65e5"}),"\n",(0,i.jsx)(e.h3,{id:"\u95ee\u9898\u4fee\u590d-5",children:"\u95ee\u9898\u4fee\u590d"}),"\n",(0,i.jsx)(e.p,{children:"\u4fee\u590d\u4e86\u5982\u4e0b\u95ee\u9898\uff1a"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\u5728\u5220\u5217\u3001\u65b0\u589e\u5206\u533a\u3001\u5e76\u514b\u9686 Tablet \u540e\uff0c\u65b0\u65e7 Tablet \u7684\u5217 Unique ID \u53ef\u80fd\u4f1a\u4e0d\u5bf9\u5e94\uff0c\u7531\u4e8e\u7cfb\u7edf\u4f7f\u7528\u5171\u4eab\u7684 Tablet Schema\uff0c\u53ef\u80fd\u5bfc\u81f4 BE \u505c\u6b62\u670d\u52a1\u3002",(0,i.jsx)(e.a,{href:"https://github.com/StarRocks/starrocks/issues/4514",children:"#4514"})]}),"\n",(0,i.jsxs)(e.li,{children:["\u5411 StarRocks \u5916\u8868\u5bfc\u5165\u6570\u636e\u65f6\uff0c\u5982\u679c\u8bbe\u5b9a\u7684\u76ee\u6807 StarRocks \u96c6\u7fa4\u7684 FE \u4e0d\u662f Leader\uff0c\u5219\u4f1a\u5bfc\u81f4 FE \u505c\u6b62\u670d\u52a1\u3002",(0,i.jsx)(e.a,{href:"https://github.com/StarRocks/starrocks/issues/4573",children:"#4573"})]}),"\n",(0,i.jsxs)(e.li,{children:["\u660e\u7ec6\u6a21\u578b\u7684\u8868\u540c\u65f6\u6267\u884c\u8868\u7ed3\u6784\u53d8\u66f4\u3001\u521b\u5efa\u7269\u5316\u89c6\u56fe\u65f6\uff0c\u53ef\u80fd\u5bfc\u81f4\u6570\u636e\u67e5\u8be2\u9519\u8bef\u3002",(0,i.jsx)(e.a,{href:"https://github.com/StarRocks/starrocks/issues/4839",children:"#4839"})]}),"\n",(0,i.jsxs)(e.li,{children:["\u901a\u8fc7\u6539\u8fdb\u4e3a\u6279\u91cf publish version\uff0c\u89e3\u51b3 BE \u53ef\u80fd\u56e0\u5b95\u673a\u800c\u5bfc\u81f4\u6570\u636e\u4e22\u5931\u7684\u95ee\u9898\u3002",(0,i.jsx)(e.a,{href:"https://github.com/StarRocks/starrocks/issues/3140",children:"#3140"})]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"203",children:"2.0.3"}),"\n",(0,i.jsx)(e.p,{children:"\u53d1\u5e03\u65e5\u671f\uff1a 2022\u5e743\u670814\u65e5"}),"\n",(0,i.jsx)(e.h3,{id:"\u95ee\u9898\u4fee\u590d-6",children:"\u95ee\u9898\u4fee\u590d"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u4fee\u590d BE \u5047\u6b7b\u5bfc\u81f4\u67e5\u8be2\u51fa\u9519\u7684\u95ee\u9898\u3002"}),"\n",(0,i.jsxs)(e.li,{children:["\u4fee\u590d\u5bf9\u5355 tablet \u7684\u8868\u5728\u505a\u805a\u5408\u64cd\u4f5c\u65f6\u56e0\u65e0\u6cd5\u5f97\u5230\u5408\u7406\u7684\u6267\u884c\u8ba1\u5212\u800c\u5bfc\u81f4\u67e5\u8be2\u5931\u8d25\u7684\u95ee\u9898\u3002",(0,i.jsx)(e.a,{href:"https://github.com/StarRocks/starrocks/issues/3854",children:"#3854"})]}),"\n",(0,i.jsxs)(e.li,{children:["\u4fee\u590d FE \u6536\u96c6\u4fe1\u606f\u4ee5\u6784\u5efa\u4f4e\u57fa\u6570\u5168\u5c40\u5b57\u5178\u65f6\u53ef\u80fd\u5bfc\u81f4\u6b7b\u9501\u7684\u95ee\u9898\u3002\u3002",(0,i.jsx)(e.a,{href:"https://github.com/StarRocks/starrocks/issues/3839",children:"#3839"})]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"202",children:"2.0.2"}),"\n",(0,i.jsx)(e.p,{children:"\u53d1\u5e03\u65e5\u671f\uff1a 2022\u5e743\u67082\u65e5"}),"\n",(0,i.jsx)(e.h3,{id:"\u529f\u80fd\u4f18\u5316",children:"\u529f\u80fd\u4f18\u5316"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\u4f18\u5316 FE \u5185\u5b58\u5360\u7528\u3002\u901a\u8fc7\u8bbe\u7f6e\u53c2\u6570 ",(0,i.jsx)(e.code,{children:"label_keep_max_num"}),"\uff0c\u63a7\u5236\u4e00\u5b9a\u65f6\u95f4\u5185\u5bfc\u5165\u4efb\u52a1\u4fdd\u7559\u7684\u6700\u5927\u6570\u91cf\uff0c\u4ee5\u907f\u514d\u5728\u9ad8\u9891\u4f5c\u4e1a\u5bfc\u5165\u65f6\uff0cFE \u5185\u5b58\u5360\u7528\u8fc7\u591a\u800c\u51fa\u73b0 Full GC\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"\u95ee\u9898\u4fee\u590d-7",children:"\u95ee\u9898\u4fee\u590d"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u4fee\u590d ColumnDecoder \u5f02\u5e38\uff0c\u5bfc\u81f4 BE \u8282\u70b9\u65e0\u54cd\u5e94\u7684\u95ee\u9898\u3002"}),"\n",(0,i.jsx)(e.li,{children:"\u4fee\u590d\u5728\u5bfc\u5165 JSON \u683c\u5f0f\u6570\u636e\u4e2d\u8bbe\u7f6e\u4e86 jsonpaths \u540e\u4e0d\u80fd\u81ea\u52a8\u8bc6\u522b __op \u5b57\u6bb5\u7684\u95ee\u9898\u3002"}),"\n",(0,i.jsx)(e.li,{children:"\u4fee\u590d Broker Load \u5bfc\u5165\u6570\u636e\u8fc7\u7a0b\u4e2d\u56e0\u4e3a\u6e90\u6570\u636e\u53d1\u751f\u53d8\u5316\u800c\u5bfc\u81f4 BE \u8282\u70b9\u65e0\u54cd\u5e94\u7684\u95ee\u9898\u3002"}),"\n",(0,i.jsx)(e.li,{children:"\u4fee\u590d\u5efa\u7acb\u7269\u5316\u89c6\u56fe\u540e\uff0c\u90e8\u5206 SQL \u8bed\u53e5\u62a5\u9519\u7684\u95ee\u9898\u3002"}),"\n",(0,i.jsx)(e.li,{children:"\u4fee\u590d\u67e5\u8be2\u8bed\u53e5\u4e2d\u540c\u65f6\u5b58\u5728\u4f4e\u57fa\u6570\u5168\u5c40\u5b57\u5178\u4e0d\u652f\u6301\u7684\u8c13\u8bcd\u65f6\uff0c\u5bfc\u81f4\u67e5\u8be2\u5931\u8d25\u7684\u95ee\u9898\u3002"}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"201",children:"2.0.1"}),"\n",(0,i.jsx)(e.p,{children:"\u53d1\u5e03\u65e5\u671f\uff1a 2022\u5e741\u670821\u65e5"}),"\n",(0,i.jsx)(e.h3,{id:"\u529f\u80fd\u4f18\u5316-1",children:"\u529f\u80fd\u4f18\u5316"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\u4f18\u5316StarRocks\u8bfb\u53d6Hive\u5916\u8868\u65f6Hive\u5916\u8868\u9690\u5f0f\u6570\u636e\u8f6c\u6362\u7684\u529f\u80fd\u3002 ",(0,i.jsx)(e.a,{href:"https://github.com/StarRocks/starrocks/pull/2829",children:"#2829"})]}),"\n",(0,i.jsxs)(e.li,{children:["\u4f18\u5316\u9ad8\u5e76\u53d1\u67e5\u8be2\u573a\u666f\u4e0b\uff0cStarRocks CBO\u4f18\u5316\u5668\u91c7\u96c6\u7edf\u8ba1\u4fe1\u606f\u65f6\u7684\u9501\u7ade\u4e89\u95ee\u9898\u3002 ",(0,i.jsx)(e.a,{href:"https://github.com/StarRocks/starrocks/pull/2901",children:"#2901"})]}),"\n",(0,i.jsx)(e.li,{children:"\u4f18\u5316CBO\u7684\u7edf\u8ba1\u4fe1\u606f\u5de5\u4f5c\uff0cUNION\u7b97\u5b50\u7b49\u3002"}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"\u95ee\u9898\u4fee\u590d-8",children:"\u95ee\u9898\u4fee\u590d"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\u4fee\u590d\u526f\u672c\u7684\u5168\u5c40\u5b57\u5178\u4e0d\u4e00\u81f4\u800c\u5f15\u8d77\u67e5\u8be2\u7684\u95ee\u9898\u3002 ",(0,i.jsx)(e.a,{href:"https://github.com/StarRocks/starrocks/pull/2700",children:"#2700"}),(0,i.jsx)(e.a,{href:"https://github.com/StarRocks/starrocks/pull/2765",children:"#2765"})]}),"\n",(0,i.jsxs)(e.li,{children:["\u4fee\u590d\u6570\u636e\u5bfc\u5165\u81f3StarRocks\u524d\u8bbe\u7f6e\u53c2\u6570",(0,i.jsx)(e.code,{children:"exec_mem_limit"}),"\u4e0d\u751f\u6548\u7684\u95ee\u9898\u3002 ",(0,i.jsx)(e.a,{href:"https://github.com/StarRocks/starrocks/pull/2693",children:"#2693"}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsxs)(e.p,{children:["\u53c2\u6570",(0,i.jsx)(e.code,{children:"exec_mem_limit"}),"\u7528\u4e8e\u6307\u5b9a\u6570\u636e\u5bfc\u5165\u65f6\u5355\u4e2aBE\u8282\u70b9\u8ba1\u7b97\u5c42\u4f7f\u7528\u7684\u5185\u5b58\u4e0a\u9650\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\u4fee\u590d\u6570\u636e\u5bfc\u5165\u81f3StarRocks\u4e3b\u952e\u6a21\u578b\u65f6\u89e6\u53d1OOM\u7684\u95ee\u9898\u3002 ",(0,i.jsx)(e.a,{href:"https://github.com/StarRocks/starrocks/pull/2743",children:"#2743"}),(0,i.jsx)(e.a,{href:"https://github.com/StarRocks/starrocks/pull/2777",children:"#2777"})]}),"\n",(0,i.jsxs)(e.li,{children:["\u4fee\u590dStarRocks\u5728\u67e5\u8be2\u5927\u6570\u91cf\u7ea7\u7684MySQL\u5916\u90e8\u8868\u65f6\u7684\u67e5\u8be2\u5361\u6b7b\u95ee\u9898\u3002 ",(0,i.jsx)(e.a,{href:"https://github.com/StarRocks/starrocks/pull/2881",children:"#2881"})]}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"behavior-change",children:"Behavior Change"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["StarRocks\u652f\u6301\u4f7f\u7528Hive\u5916\u8868\u8bbf\u95ee\u521b\u5efa\u5728Hive\u5916\u8868\u4e0a\u7684Amazon S3\u5916\u8868\u3002\u7531\u4e8e\u7528\u4e8e\u8bbf\u95eeAmazon S3\u5916\u8868\u7684jar\u5305\u8f83\u5927\uff0c\u56e0\u6b64StarRocks\u4e8c\u8fdb\u5236\u4ea7\u54c1\u5305\u76ee\u524d\u6682\u672a\u5305\u542b\u8be5jar\u5305\u3002\u5982\u6709\u9700\u8981\uff0c\u8bf7\u5355\u51fb",(0,i.jsx)(e.a,{href:"https://releases.mirrorship.cn/resources/hive_s3_jar.tar.gz",children:"Hive_s3_lib"}),"\u8fdb\u884c\u4e0b\u8f7d\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"200",children:"2.0.0"}),"\n",(0,i.jsx)(e.p,{children:"\u53d1\u5e03\u65e5\u671f\uff1a2022\u5e741\u67085\u65e5"}),"\n",(0,i.jsx)(e.h3,{id:"\u65b0\u529f\u80fd",children:"\u65b0\u529f\u80fd"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\u5916\u8868","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["[\u5b9e\u9a8c\u529f\u80fd]\u652f\u6301S3\u4e0a\u7684Hive\u5916\u8868\u529f\u80fd ",(0,i.jsx)(e.a,{href:"/doc/zh/docs/data_source/External_table#Hive%E5%A4%96%E8%A1%A8",children:"\u53c2\u8003\u6587\u6863"})]}),"\n",(0,i.jsxs)(e.li,{children:["DecimalV3\u652f\u6301\u5916\u8868\u67e5\u8be2 ",(0,i.jsx)(e.a,{href:"https://github.com/StarRocks/starrocks/pull/425",children:"#425"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.li,{children:"\u5b9e\u73b0\u5b58\u50a8\u5c42\u590d\u6742\u8868\u8fbe\u5f0f\u4e0b\u63a8\u8ba1\u7b97\uff0c\u83b7\u5f97\u6027\u80fd\u63d0\u5347"}),"\n",(0,i.jsxs)(e.li,{children:["Broker Load\u652f\u6301\u534e\u4e3aOBS ",(0,i.jsx)(e.a,{href:"https://github.com/StarRocks/starrocks/pull/1182",children:"#1182"})]}),"\n",(0,i.jsx)(e.li,{children:"\u652f\u6301\u56fd\u5bc6\u7b97\u6cd5sm3"}),"\n",(0,i.jsx)(e.li,{children:"\u9002\u914dARM\u7c7b\u56fd\u4ea7CPU\uff1a\u901a\u8fc7\u9cb2\u9e4f\u67b6\u6784\u9a8c\u8bc1"}),"\n",(0,i.jsxs)(e.li,{children:["\u4e3b\u952e\u6a21\u578b\uff08Primary Key\uff09\u6b63\u5f0f\u53d1\u5e03\uff0c\u8be5\u6a21\u578b\u652f\u6301Stream Load\u3001Broker Load\u3001Routine Load\uff0c\u540c\u65f6\u63d0\u4f9b\u4e86\u57fa\u4e8eFlink-cdc\u7684MySQL\u6570\u636e\u7684\u79d2\u7ea7\u540c\u6b65\u5de5\u5177\u3002",(0,i.jsx)(e.a,{href:"/doc/zh/docs/table_design/table_types/primary_key_table",children:"\u53c2\u8003\u6587\u6863"})]}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"\u529f\u80fd\u4f18\u5316-2",children:"\u529f\u80fd\u4f18\u5316"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\u4f18\u5316\u7b97\u5b50\u6027\u80fd","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\u4f4e\u57fa\u6570\u5b57\u5178\u6027\u80fd\u4f18\u5316",(0,i.jsx)(e.a,{href:"https://github.com/StarRocks/starrocks/pull/791",children:"#791"})]}),"\n",(0,i.jsxs)(e.li,{children:["\u5355\u8868\u7684int scan\u6027\u80fd\u4f18\u5316 ",(0,i.jsx)(e.a,{href:"https://github.com/StarRocks/starrocks/issues/273",children:"#273"})]}),"\n",(0,i.jsxs)(e.li,{children:["\u9ad8\u57fa\u6570\u4e0b\u7684",(0,i.jsx)(e.code,{children:"count(distinct int)"})," \u6027\u80fd\u4f18\u5316 ",(0,i.jsx)(e.a,{href:"https://github.com/StarRocks/starrocks/pull/139",children:"#139"})," ",(0,i.jsx)(e.a,{href:"https://github.com/StarRocks/starrocks/pull/250",children:"#250"}),"  ",(0,i.jsx)(e.a,{href:"https://github.com/StarRocks/starrocks/pull/544",children:"#544"}),(0,i.jsx)(e.a,{href:"https://github.com/StarRocks/starrocks/pull/570",children:"#570"})]}),"\n",(0,i.jsxs)(e.li,{children:["\u6267\u884c\u5c42\u4f18\u5316\u548c\u5b8c\u5584 ",(0,i.jsx)(e.code,{children:"Group by 2 int"})," / ",(0,i.jsx)(e.code,{children:"limit"})," / ",(0,i.jsx)(e.code,{children:"case when"})," / ",(0,i.jsx)(e.code,{children:"not equal"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\u5185\u5b58\u7ba1\u7406\u4f18\u5316","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u91cd\u6784\u5185\u5b58\u7edf\u8ba1/\u63a7\u5236\u6846\u67b6\uff0c\u7cbe\u786e\u7edf\u8ba1\u5185\u5b58\u4f7f\u7528\uff0c\u5f7b\u5e95\u89e3\u51b3OOM"}),"\n",(0,i.jsx)(e.li,{children:"\u4f18\u5316\u5143\u6570\u636e\u5185\u5b58\u4f7f\u7528"}),"\n",(0,i.jsx)(e.li,{children:"\u89e3\u51b3\u5927\u5185\u5b58\u91ca\u653e\u957f\u65f6\u95f4\u5361\u4f4f\u6267\u884c\u7ebf\u7a0b\u7684\u95ee\u9898"}),"\n",(0,i.jsxs)(e.li,{children:["\u8fdb\u7a0b\u4f18\u96c5\u9000\u51fa\u673a\u5236\uff0c\u652f\u6301\u5185\u5b58\u6cc4\u6f0f\u68c0\u67e5",(0,i.jsx)(e.a,{href:"https://github.com/StarRocks/starrocks/pull/1093",children:"#1093"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"\u95ee\u9898\u4fee\u590d-9",children:"\u95ee\u9898\u4fee\u590d"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u4fee\u590dHive\u5916\u8868\u5927\u91cf\u83b7\u53d6\u5143\u6570\u636e\u8d85\u65f6\u7684\u95ee\u9898"}),"\n",(0,i.jsx)(e.li,{children:"\u4fee\u590d\u7269\u5316\u89c6\u56fe\u521b\u5efa\u62a5\u9519\u4fe1\u606f\u4e0d\u660e\u786e\u7684\u95ee\u9898"}),"\n",(0,i.jsxs)(e.li,{children:["\u4fee\u590d\u5411\u91cf\u5316\u5f15\u64ce\u5bf9",(0,i.jsx)(e.code,{children:"like"}),"\u7684\u5b9e\u73b0 ",(0,i.jsx)(e.a,{href:"https://github.com/StarRocks/starrocks/pull/722",children:"#722"})]}),"\n",(0,i.jsxs)(e.li,{children:["\u4fee\u590d",(0,i.jsx)(e.code,{children:"alter table"}),"\u4e2d\u8c13\u8bcdis\u7684\u89e3\u6790\u9519\u8bef",(0,i.jsx)(e.a,{href:"https://github.com/StarRocks/starrocks/pull/725",children:"#725"})]}),"\n",(0,i.jsxs)(e.li,{children:["\u4fee\u590d",(0,i.jsx)(e.code,{children:"curdate"}),"\u51fd\u6570\u6ca1\u529e\u6cd5\u683c\u5f0f\u5316\u65e5\u671f\u7684\u95ee\u9898"]}),"\n"]})]})}const o=function(s={}){const{wrapper:e}=Object.assign({},(0,l.ah)(),s.components);return e?(0,i.jsx)(e,Object.assign({},s,{children:(0,i.jsx)(a,s)})):a(s)}},11151:(s,e,r)=>{r.d(e,{Zo:()=>h,ah:()=>c});var i=r(67294);const l=i.createContext({});function c(s){const e=i.useContext(l);return i.useMemo((()=>"function"==typeof s?s(e):{...e,...s}),[e,s])}const n={};function h({components:s,children:e,disableParentContext:r}){let h;return h=r?"function"==typeof s?s({}):s||n:c(s),i.createElement(l.Provider,{value:h},e)}}}]);