"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[63558],{7924:(r,n,e)=>{e.r(n),e.d(n,{assets:()=>l,contentTitle:()=>t,default:()=>N,frontMatter:()=>s,metadata:()=>c,toc:()=>a});var d=e(85893),i=e(11151);const s={displayed_sidebar:"Chinese31"},t="SSB Flat Table \u6027\u80fd\u6d4b\u8bd5",c={id:"benchmarking/SSB_Benchmarking",title:"SSB Flat Table \u6027\u80fd\u6d4b\u8bd5",description:"\u6d4b\u8bd5\u7ed3\u8bba",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.5/benchmarking/SSB_Benchmarking.md",sourceDirName:"benchmarking",slug:"/benchmarking/SSB_Benchmarking",permalink:"/doc/zh/docs/2.5/benchmarking/SSB_Benchmarking",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-2.5/benchmarking/SSB_Benchmarking.md",tags:[],version:"2.5",frontMatter:{displayed_sidebar:"Chinese31"},sidebar:"Chinese31",previous:{title:"Benchmarks",permalink:"/doc/zh/docs/2.5/category/benchmarks-1"},next:{title:"TPC-H Benchmarking",permalink:"/doc/zh/docs/2.5/benchmarking/TPC-H_Benchmarking"}},l={},a=[{value:"\u6d4b\u8bd5\u7ed3\u8bba",id:"\u6d4b\u8bd5\u7ed3\u8bba",level:2},{value:"\u6d4b\u8bd5\u51c6\u5907",id:"\u6d4b\u8bd5\u51c6\u5907",level:2},{value:"\u786c\u4ef6\u73af\u5883",id:"\u786c\u4ef6\u73af\u5883",level:3},{value:"\u8f6f\u4ef6\u73af\u5883",id:"\u8f6f\u4ef6\u73af\u5883",level:3},{value:"\u6d4b\u8bd5\u6570\u636e\u4e0e\u7ed3\u679c",id:"\u6d4b\u8bd5\u6570\u636e\u4e0e\u7ed3\u679c",level:2},{value:"\u6d4b\u8bd5\u6570\u636e",id:"\u6d4b\u8bd5\u6570\u636e",level:3},{value:"\u6d4b\u8bd5\u7ed3\u679c",id:"\u6d4b\u8bd5\u7ed3\u679c",level:3},{value:"\u6d4b\u8bd5\u6b65\u9aa4",id:"\u6d4b\u8bd5\u6b65\u9aa4",level:2},{value:"\u751f\u6210\u6570\u636e",id:"\u751f\u6210\u6570\u636e",level:3},{value:"\u521b\u5efa\u8868\u7ed3\u6784",id:"\u521b\u5efa\u8868\u7ed3\u6784",level:3},{value:"\u5bfc\u5165\u6570\u636e",id:"\u5bfc\u5165\u6570\u636e",level:3},{value:"\u67e5\u8be2\u6570\u636e",id:"\u67e5\u8be2\u6570\u636e",level:3},{value:"\u542f\u7528 Bitmap Index",id:"\u542f\u7528-bitmap-index",level:3},{value:"\u6d4b\u8bd5 SQL \u4e0e\u5efa\u8868\u8bed\u53e5",id:"\u6d4b\u8bd5-sql-\u4e0e\u5efa\u8868\u8bed\u53e5",level:2},{value:"\u6d4b\u8bd5 SQL",id:"\u6d4b\u8bd5-sql",level:3},{value:"\u5efa\u8868\u8bed\u53e5",id:"\u5efa\u8868\u8bed\u53e5",level:3},{value:"<code>lineorder_flat</code> \u9ed8\u8ba4\u5efa\u8868",id:"lineorder_flat-\u9ed8\u8ba4\u5efa\u8868",level:4},{value:"<code>lineorder_flat</code> \u521b\u5efa Bitmap Index \u8868",id:"lineorder_flat-\u521b\u5efa-bitmap-index-\u8868",level:4}];function h(r){const n=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",ul:"ul",li:"li",img:"img",h3:"h3",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",blockquote:"blockquote",pre:"pre",code:"code",ol:"ol",h4:"h4"},(0,i.ah)(),r.components);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.h1,{id:"ssb-flat-table-\u6027\u80fd\u6d4b\u8bd5",children:"SSB Flat Table \u6027\u80fd\u6d4b\u8bd5"}),"\n",(0,d.jsx)(n.h2,{id:"\u6d4b\u8bd5\u7ed3\u8bba",children:"\u6d4b\u8bd5\u7ed3\u8bba"}),"\n",(0,d.jsxs)(n.p,{children:["Star Schema Benchmark\uff08\u4ee5\u4e0b\u7b80\u79f0 SSB\uff09\u662f\u5b66\u672f\u754c\u548c\u5de5\u4e1a\u754c\u5e7f\u6cdb\u4f7f\u7528\u7684\u4e00\u4e2a\u661f\u578b\u6a21\u578b\u6d4b\u8bd5\u96c6\uff08\u6765\u6e90",(0,d.jsx)(n.a,{href:"https://www.cs.umb.edu/~poneil/StarSchemaB.PDF",children:"\u8bba\u6587"}),"\uff09\uff0c\u901a\u8fc7\u8fd9\u4e2a\u6d4b\u8bd5\u96c6\u5408\u53ef\u4ee5\u65b9\u4fbf\u7684\u5bf9\u6bd4\u5404\u79cd OLAP \u4ea7\u54c1\u7684\u57fa\u7840\u6027\u80fd\u6307\u6807\u3002ClickHouse \u901a\u8fc7\u6539\u5199 SSB\uff0c\u5c06\u661f\u578b\u6a21\u578b\u6253\u5e73\u8f6c\u5316\u6210\u5bbd\u8868 (flat table)\uff0c\u6539\u9020\u6210\u4e86\u4e00\u4e2a\u5355\u8868\u6d4b\u8bd5 benchmark\uff08\u53c2\u8003",(0,d.jsx)(n.a,{href:"https://clickhouse.tech/docs/en/getting-started/example-datasets/star-schema/",children:"\u94fe\u63a5"}),"\uff09\u3002\u672c\u62a5\u544a\u8bb0\u5f55\u4e86 StarRocks\u3001ClickHouse \u548c Apache Druid \u5728 SSB \u5355\u8868\u6570\u636e\u96c6\u4e0a\u7684\u6027\u80fd\u5bf9\u6bd4\u7ed3\u679c\uff0c\u6d4b\u8bd5\u7ed3\u8bba\u5982\u4e0b\uff1a"]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"\u5728\u6807\u51c6\u6d4b\u8bd5\u6570\u636e\u96c6\u7684 13 \u4e2a\u67e5\u8be2\u4e0a\uff0cStarRocks \u6574\u4f53\u67e5\u8be2\u6027\u80fd\u662f ClickHouse \u7684 2.1 \u500d\uff0cApache Druid \u7684 8.7 \u500d\u3002"}),"\n",(0,d.jsx)(n.li,{children:"StarRocks \u542f\u7528 Bitmap Index \u540e\u6574\u4f53\u67e5\u8be2\u6027\u80fd\u662f\u672a\u542f\u7528\u7684 1.3 \u500d\uff0c\u6b64\u65f6\u6574\u4f53\u67e5\u8be2\u6027\u80fd\u662f ClickHouse \u7684 2.8 \u500d\uff0cApache Druid \u7684 11.4 \u500d\u3002"}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{alt:"img",src:e(32155).Z+"",width:"2032",height:"894"})}),"\n",(0,d.jsx)(n.p,{children:"\u672c\u6587\u5728 SSB \u5355\u8868\u573a\u666f\u4e0b\u5bf9\u6bd4\u4e86 StarRocks\u3001ClickHouse \u548c Apache Druid \u7684\u67e5\u8be2\u6027\u80fd\u3002\u91c7\u7528 3x16core 64GB \u5185\u5b58\u7684\u4e91\u4e3b\u673a\uff0c\u5728 6 \u4ebf\u884c\u7684\u6570\u636e\u89c4\u6a21\u8fdb\u884c\u6d4b\u8bd5\u3002"}),"\n",(0,d.jsx)(n.h2,{id:"\u6d4b\u8bd5\u51c6\u5907",children:"\u6d4b\u8bd5\u51c6\u5907"}),"\n",(0,d.jsx)(n.h3,{id:"\u786c\u4ef6\u73af\u5883",children:"\u786c\u4ef6\u73af\u5883"}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"\u673a\u5668"}),(0,d.jsx)(n.th,{children:"3\u53f0 \u963f\u91cc\u4e91\u4e3b\u673a"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"CPU"}),(0,d.jsxs)(n.td,{children:["16core Intel(R) Xeon(R) Platinum 8269CY CPU @ 2.50GHz ",(0,d.jsx)("br",{}),"Cache size: 36608 KB"]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\u5185\u5b58"}),(0,d.jsx)(n.td,{children:"64GB"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\u7f51\u7edc\u5e26\u5bbd"}),(0,d.jsx)(n.td,{children:"5 Gbits/s"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\u78c1\u76d8"}),(0,d.jsx)(n.td,{children:"ESSD \u4e91\u76d8"})]})]})]}),"\n",(0,d.jsx)(n.h3,{id:"\u8f6f\u4ef6\u73af\u5883",children:"\u8f6f\u4ef6\u73af\u5883"}),"\n",(0,d.jsx)(n.p,{children:"StarRocks\uff0cClickHouse \u548c Apache Druid \u90e8\u7f72\u5728\u76f8\u540c\u914d\u7f6e\u7684\u673a\u5668\u4e0a\u5206\u522b\u8fdb\u884c\u6d4b\u8bd5\u3002"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"StarRocks \u90e8\u7f72 1 \u4e2a FE \u548c 3 \u4e2a BE\u3002FE \u53ef\u4ee5\u5355\u72ec\u90e8\u7f72\u4e5f\u53ef\u4ee5\u548c BE \u6df7\u5408\u90e8\u7f72\u3002"}),"\n",(0,d.jsx)(n.li,{children:"ClickHouse \u90e8\u7f72\u4e09\u4e2a\u8282\u70b9\u540e\u5efa\u7acb\u5206\u5e03\u5f0f\u8868\u3002"}),"\n",(0,d.jsx)(n.li,{children:"Apache Druid \u4e09\u4e2a\u8282\u70b9\u90fd\u90e8\u7f72 Data Servers\uff0c\u540c\u65f6\u9009\u62e9\u4e00\u4e2a\u8282\u70b9\u6df7\u5408\u90e8\u7f72 Master Servers\uff0c\u53e6\u4e00\u4e2a\u8282\u70b9\u6df7\u5408\u90e8\u7f72 Query Servers\u3002"}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"\u5185\u6838\u7248\u672c\uff1aLinux 3.10.0-1160.59.1.el7.x86_64"}),"\n",(0,d.jsx)(n.p,{children:"\u64cd\u4f5c\u7cfb\u7edf\u7248\u672c\uff1aCentOS Linux release 7.9.2009"}),"\n",(0,d.jsx)(n.p,{children:"\u8f6f\u4ef6\u7248\u672c\uff1aStarRocks \u793e\u533a\u7248 3.0\uff0cClickHouse 23.3\uff0cApache Druid 25.0.0"}),"\n",(0,d.jsx)(n.h2,{id:"\u6d4b\u8bd5\u6570\u636e\u4e0e\u7ed3\u679c",children:"\u6d4b\u8bd5\u6570\u636e\u4e0e\u7ed3\u679c"}),"\n",(0,d.jsx)(n.h3,{id:"\u6d4b\u8bd5\u6570\u636e",children:"\u6d4b\u8bd5\u6570\u636e"}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"\u8868\u540d"}),(0,d.jsx)(n.th,{children:"\u884c\u6570"}),(0,d.jsx)(n.th,{children:"\u8bf4\u660e"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"lineorder"}),(0,d.jsx)(n.td,{children:"6 \u4ebf"}),(0,d.jsx)(n.td,{children:"SSB \u5546\u54c1\u8ba2\u5355\u8868"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"customer"}),(0,d.jsx)(n.td,{children:"300 \u4e07"}),(0,d.jsx)(n.td,{children:"SSB \u5ba2\u6237\u8868"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"part"}),(0,d.jsx)(n.td,{children:"140 \u4e07"}),(0,d.jsx)(n.td,{children:"SSB \u96f6\u90e8\u4ef6\u8868"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"supplier"}),(0,d.jsx)(n.td,{children:"20 \u4e07"}),(0,d.jsx)(n.td,{children:"SSB \u4f9b\u5e94\u5546\u8868"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"dates"}),(0,d.jsx)(n.td,{children:"2556"}),(0,d.jsx)(n.td,{children:"\u65e5\u671f\u8868"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"lineorder_flat"}),(0,d.jsx)(n.td,{children:"6 \u4ebf"}),(0,d.jsx)(n.td,{children:"SSB \u6253\u5e73\u540e\u7684\u5bbd\u8868"})]})]})]}),"\n",(0,d.jsx)(n.h3,{id:"\u6d4b\u8bd5\u7ed3\u679c",children:"\u6d4b\u8bd5\u7ed3\u679c"}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsx)(n.p,{children:"\u67e5\u8be2\u65f6\u95f4\u7684\u5355\u4f4d\u662f ms\u3002StarRocks \u4e0e ClickHouse\u3001Druid \u7684\u67e5\u8be2\u6027\u80fd\u5bf9\u6bd4\uff0c\u5206\u522b\u4f7f\u7528 ClickHouse\u3001Druid \u7684\u67e5\u8be2\u65f6\u95f4\u9664\u4ee5 StarRocks \u7684\u67e5\u8be2\u65f6\u95f4\uff0c\u7ed3\u679c\u6570\u5b57\u8d8a\u5927\u4ee3\u8868 StarRocks \u6027\u80fd\u8d8a\u597d\u3002"}),"\n"]}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"StarRocks-3.0"}),(0,d.jsx)(n.th,{children:"StarRocks-3.0-index"}),(0,d.jsx)(n.th,{children:"ClickHouse-23.3"}),(0,d.jsx)(n.th,{children:"ClickHouse vs StarRocks"}),(0,d.jsx)(n.th,{children:"Druid-25.0.0"}),(0,d.jsx)(n.th,{children:"Druid vs StarRocks"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Q1.1"}),(0,d.jsx)(n.td,{children:"33"}),(0,d.jsx)(n.td,{children:"30"}),(0,d.jsx)(n.td,{children:"48"}),(0,d.jsx)(n.td,{children:"1.45"}),(0,d.jsx)(n.td,{children:"430"}),(0,d.jsx)(n.td,{children:"13.03"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Q1.2"}),(0,d.jsx)(n.td,{children:"10"}),(0,d.jsx)(n.td,{children:"10"}),(0,d.jsx)(n.td,{children:"15"}),(0,d.jsx)(n.td,{children:"1.50"}),(0,d.jsx)(n.td,{children:"270"}),(0,d.jsx)(n.td,{children:"27.00"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Q1.3"}),(0,d.jsx)(n.td,{children:"23"}),(0,d.jsx)(n.td,{children:"30"}),(0,d.jsx)(n.td,{children:"14"}),(0,d.jsx)(n.td,{children:"0.61"}),(0,d.jsx)(n.td,{children:"820"}),(0,d.jsx)(n.td,{children:"35.65"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Q2.1"}),(0,d.jsx)(n.td,{children:"186"}),(0,d.jsx)(n.td,{children:"116"}),(0,d.jsx)(n.td,{children:"301"}),(0,d.jsx)(n.td,{children:"1.62"}),(0,d.jsx)(n.td,{children:"760"}),(0,d.jsx)(n.td,{children:"4.09"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Q2.2"}),(0,d.jsx)(n.td,{children:"156"}),(0,d.jsx)(n.td,{children:"50"}),(0,d.jsx)(n.td,{children:"273"}),(0,d.jsx)(n.td,{children:"1.75"}),(0,d.jsx)(n.td,{children:"920"}),(0,d.jsx)(n.td,{children:"5.90"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Q2.3"}),(0,d.jsx)(n.td,{children:"73"}),(0,d.jsx)(n.td,{children:"36"}),(0,d.jsx)(n.td,{children:"255"}),(0,d.jsx)(n.td,{children:"3.49"}),(0,d.jsx)(n.td,{children:"910"}),(0,d.jsx)(n.td,{children:"12.47"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Q3.1"}),(0,d.jsx)(n.td,{children:"173"}),(0,d.jsx)(n.td,{children:"233"}),(0,d.jsx)(n.td,{children:"398"}),(0,d.jsx)(n.td,{children:"2.30"}),(0,d.jsx)(n.td,{children:"1080"}),(0,d.jsx)(n.td,{children:"6.24"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Q3.2"}),(0,d.jsx)(n.td,{children:"120"}),(0,d.jsx)(n.td,{children:"80"}),(0,d.jsx)(n.td,{children:"319"}),(0,d.jsx)(n.td,{children:"2.66"}),(0,d.jsx)(n.td,{children:"850"}),(0,d.jsx)(n.td,{children:"7.08"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Q3.3"}),(0,d.jsx)(n.td,{children:"123"}),(0,d.jsx)(n.td,{children:"30"}),(0,d.jsx)(n.td,{children:"227"}),(0,d.jsx)(n.td,{children:"1.85"}),(0,d.jsx)(n.td,{children:"890"}),(0,d.jsx)(n.td,{children:"7.24"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Q3.4"}),(0,d.jsx)(n.td,{children:"13"}),(0,d.jsx)(n.td,{children:"16"}),(0,d.jsx)(n.td,{children:"18"}),(0,d.jsx)(n.td,{children:"1.38"}),(0,d.jsx)(n.td,{children:"750"}),(0,d.jsx)(n.td,{children:"57.69"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Q4.1"}),(0,d.jsx)(n.td,{children:"203"}),(0,d.jsx)(n.td,{children:"196"}),(0,d.jsx)(n.td,{children:"469"}),(0,d.jsx)(n.td,{children:"2.31"}),(0,d.jsx)(n.td,{children:"1230"}),(0,d.jsx)(n.td,{children:"6.06"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Q4.2"}),(0,d.jsx)(n.td,{children:"73"}),(0,d.jsx)(n.td,{children:"76"}),(0,d.jsx)(n.td,{children:"160"}),(0,d.jsx)(n.td,{children:"2.19"}),(0,d.jsx)(n.td,{children:"1020"}),(0,d.jsx)(n.td,{children:"13.97"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Q4.3"}),(0,d.jsx)(n.td,{children:"50"}),(0,d.jsx)(n.td,{children:"36"}),(0,d.jsx)(n.td,{children:"148"}),(0,d.jsx)(n.td,{children:"2.96"}),(0,d.jsx)(n.td,{children:"820"}),(0,d.jsx)(n.td,{children:"16.40"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"SUM"}),(0,d.jsx)(n.td,{children:"1236"}),(0,d.jsx)(n.td,{children:"939"}),(0,d.jsx)(n.td,{children:"2645"}),(0,d.jsx)(n.td,{children:"2.14"}),(0,d.jsx)(n.td,{children:"10750"}),(0,d.jsx)(n.td,{children:"8.70"})]})]})]}),"\n",(0,d.jsx)(n.h2,{id:"\u6d4b\u8bd5\u6b65\u9aa4",children:"\u6d4b\u8bd5\u6b65\u9aa4"}),"\n",(0,d.jsxs)(n.p,{children:["ClickHouse \u7684\u5efa\u8868\u5bfc\u5165\u53c2\u8003 ",(0,d.jsx)(n.a,{href:"https://clickhouse.tech/docs/en/getting-started/example-datasets/star-schema/",children:"\u5b98\u65b9\u6587\u6863"}),"\uff0cStarRocks \u7684\u6570\u636e\u751f\u6210\u5bfc\u5165\u6d41\u7a0b\u5982\u4e0b\uff1a"]}),"\n",(0,d.jsx)(n.h3,{id:"\u751f\u6210\u6570\u636e",children:"\u751f\u6210\u6570\u636e"}),"\n",(0,d.jsx)(n.p,{children:"\u9996\u5148\u4e0b\u8f7d ssb-poc \u5de5\u5177\u5305\u5e76\u7f16\u8bd1\u3002"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-Bash",children:"wget https://starrocks-public.oss-cn-zhangjiakou.aliyuncs.com/ssb-poc-1.0.zip\r\nunzip ssb-poc-1.0.zip\r\ncd ssb-poc-1.0/\r\nmake && make install\r\ncd output/\n"})}),"\n",(0,d.jsx)(n.p,{children:"\u7f16\u8bd1\u5b8c\u6210\u540e\uff0c\u6240\u6709\u76f8\u5173\u5de5\u5177\u90fd\u5b89\u88c5\u5728 output \u76ee\u5f55\u4e0b\uff0c\u540e\u7eed\u6240\u6709\u64cd\u4f5c\u90fd\u5728 output \u76ee\u5f55\u4e0b\u8fdb\u884c\u3002"}),"\n",(0,d.jsxs)(n.p,{children:["\u9996\u5148\u751f\u6210 SSB \u6807\u51c6\u6d4b\u8bd5\u96c6",(0,d.jsx)(n.code,{children:"scale factor=100"}),"\u7684\u6570\u636e\u3002"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-Bash",children:"sh bin/gen-ssb.sh 100 data_dir\n"})}),"\n",(0,d.jsx)(n.h3,{id:"\u521b\u5efa\u8868\u7ed3\u6784",children:"\u521b\u5efa\u8868\u7ed3\u6784"}),"\n",(0,d.jsxs)(n.p,{children:["\u4fee\u6539\u914d\u7f6e\u6587\u4ef6 ",(0,d.jsx)(n.code,{children:"conf/starrocks.conf"}),"\uff0c\u6307\u5b9a\u811a\u672c\u64cd\u4f5c\u7684\u96c6\u7fa4\u5730\u5740\uff0c\u91cd\u70b9\u5173\u6ce8 ",(0,d.jsx)(n.code,{children:"mysql_host"}),"\u548c",(0,d.jsx)(n.code,{children:"mysql_port"}),"\uff0c\u7136\u540e\u6267\u884c\u5efa\u8868\u64cd\u4f5c\u3002"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-SQL",children:"sh bin/create_db_table.sh ddl_100\n"})}),"\n",(0,d.jsx)(n.h3,{id:"\u5bfc\u5165\u6570\u636e",children:"\u5bfc\u5165\u6570\u636e"}),"\n",(0,d.jsx)(n.p,{children:"\u4f7f\u7528 Stream Load \u5bfc\u5165\u591a\u8868\u6570\u636e\uff0c\u7136\u540e\u4f7f\u7528 INSERT INTO \u5c06\u591a\u8868\u6253\u5e73\u6210\u5355\u8868\u3002"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-Bash",children:"sh bin/flat_insert.sh data_dir\n"})}),"\n",(0,d.jsx)(n.h3,{id:"\u67e5\u8be2\u6570\u636e",children:"\u67e5\u8be2\u6570\u636e"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-Bash",children:"sh bin/benchmark.sh ssb-flat\n"})}),"\n",(0,d.jsx)(n.h3,{id:"\u542f\u7528-bitmap-index",children:"\u542f\u7528 Bitmap Index"}),"\n",(0,d.jsx)(n.p,{children:"StarRocks \u5728\u542f\u7528 Bitmap Index \u7684\u60c5\u51b5\u4e0b\uff0c\u6027\u80fd\u66f4\u80dc\u4e00\u7b79\uff0c\u5c24\u5176\u5728 Q2.2 Q2.3 Q3.3 \u4e0a\u6709\u663e\u8457\u63d0\u5347\u3002\u5982\u679c\u60a8\u5e0c\u671b\u6d4b\u8bd5\u542f\u7528 Bitmap Index \u4e0b\u7684\u6027\u80fd\uff0c\u53ef\u4ee5\u5bf9\u6240\u6709\u5b57\u7b26\u4e32\u5217\u521b\u5efa Bitmap Index\uff0c\u5177\u4f53\u64cd\u4f5c\u5982\u4e0b:"}),"\n",(0,d.jsxs)(n.ol,{children:["\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"lineorder_flat"})," \u91cd\u65b0\u5efa\u8868\uff0c\u5efa\u8868\u65f6\u521b\u5efa\u6240\u6709 Bitmap Index\u3002"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-SQL",children:"sh bin/create_db_table.sh ddl_100_bitmap_index\n"})}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:"\u5728\u6240\u6709 BE \u8282\u70b9\u7684\u914d\u7f6e\u6587\u4ef6\u4e2d\u65b0\u589e\u5982\u4e0b\u53c2\u6570\uff0c\u7136\u540e\u91cd\u542f BE\u3002"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-SQL",children:"bitmap_max_filter_ratio=1000\n"})}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:"\u91cd\u65b0\u6267\u884c\u5bfc\u5165\u547d\u4ee4\u3002"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-SQL",children:"sh bin/flat_insert.sh data_dir\n"})}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["\u5bfc\u5165\u5b8c\u6210\u540e\u9700\u8981\u7b49\u5f85 compaction \u5b8c\u6210\uff0c\u518d\u91cd\u65b0\u6267\u884c\u6b65\u9aa4 ",(0,d.jsx)(n.a,{href:"#%E6%9F%A5%E8%AF%A2%E6%95%B0%E6%8D%AE",children:"4.4"}),"\uff0c\u6b64\u65f6\u5c31\u662f\u542f\u7528 Bitmap Index \u540e\u7684\u67e5\u8be2\u7ed3\u679c\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:["\u53ef\u4ee5\u901a\u8fc7 ",(0,d.jsx)(n.code,{children:"select CANDIDATES_NUM from information_schema.be_compactions"})," \u547d\u4ee4\u67e5\u770b compaction \u8fdb\u5ea6\u3002\u5bf9\u4e8e 3 \u4e2a BE \u8282\u70b9\uff0c\u5982\u4e0b\u7ed3\u679c\u8bf4\u660e compaction \u5b8c\u6210\uff1a"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-SQL",children:"mysql> select CANDIDATES_NUM from information_schema.be_compactions;\r\n+----------------+\r\n| CANDIDATES_NUM |\r\n+----------------+\r\n|              0 |\r\n|              0 |\r\n|              0 |\r\n+----------------+\r\n3 rows in set (0.01 sec)\n"})}),"\n",(0,d.jsx)(n.h2,{id:"\u6d4b\u8bd5-sql-\u4e0e\u5efa\u8868\u8bed\u53e5",children:"\u6d4b\u8bd5 SQL \u4e0e\u5efa\u8868\u8bed\u53e5"}),"\n",(0,d.jsx)(n.h3,{id:"\u6d4b\u8bd5-sql",children:"\u6d4b\u8bd5 SQL"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-SQL",children:"--Q1.1 \r\nSELECT sum(lo_extendedprice * lo_discount) AS `revenue` \r\nFROM lineorder_flat \r\nWHERE lo_orderdate >= '1993-01-01' and lo_orderdate <= '1993-12-31'\r\nAND lo_discount BETWEEN 1 AND 3 AND lo_quantity < 25; \r\n \r\n--Q1.2 \r\nSELECT sum(lo_extendedprice * lo_discount) AS revenue FROM lineorder_flat  \r\nWHERE lo_orderdate >= '1994-01-01' and lo_orderdate <= '1994-01-31'\r\nAND lo_discount BETWEEN 4 AND 6 AND lo_quantity BETWEEN 26 AND 35; \r\n \r\n--Q1.3 \r\nSELECT sum(lo_extendedprice * lo_discount) AS revenue \r\nFROM lineorder_flat \r\nWHERE weekofyear(lo_orderdate) = 6\r\nAND lo_orderdate >= '1994-01-01' and lo_orderdate <= '1994-12-31' \r\nAND lo_discount BETWEEN 5 AND 7 AND lo_quantity BETWEEN 26 AND 35; \r\n \r\n--Q2.1 \r\nSELECT sum(lo_revenue), year(lo_orderdate) AS year,  p_brand \r\nFROM lineorder_flat \r\nWHERE p_category = 'MFGR#12' AND s_region = 'AMERICA' \r\nGROUP BY year, p_brand \r\nORDER BY year, p_brand; \r\n \r\n--Q2.2\r\nSELECT \r\nsum(lo_revenue), year(lo_orderdate) AS year, p_brand \r\nFROM lineorder_flat \r\nWHERE p_brand >= 'MFGR#2221' AND p_brand <= 'MFGR#2228' AND s_region = 'ASIA' \r\nGROUP BY year, p_brand \r\nORDER BY year, p_brand; \r\n  \r\n--Q2.3\r\nSELECT sum(lo_revenue), year(lo_orderdate) AS year, p_brand \r\nFROM lineorder_flat \r\nWHERE p_brand = 'MFGR#2239' AND s_region = 'EUROPE' \r\nGROUP BY year, p_brand \r\nORDER BY year, p_brand; \r\n \r\n--Q3.1\r\nSELECT\r\n    c_nation,\r\n    s_nation,\r\n    year(lo_orderdate) AS year,\r\n    sum(lo_revenue) AS revenue FROM lineorder_flat \r\nWHERE c_region = 'ASIA' AND s_region = 'ASIA' AND lo_orderdate >= '1992-01-01'\r\nAND lo_orderdate <= '1997-12-31' \r\nGROUP BY c_nation, s_nation, year \r\nORDER BY  year ASC, revenue DESC; \r\n \r\n--Q3.2 \r\nSELECT c_city, s_city, year(lo_orderdate) AS year, sum(lo_revenue) AS revenue\r\nFROM lineorder_flat \r\nWHERE c_nation = 'UNITED STATES' AND s_nation = 'UNITED STATES'\r\nAND lo_orderdate  >= '1992-01-01' AND lo_orderdate <= '1997-12-31' \r\nGROUP BY c_city, s_city, year \r\nORDER BY year ASC, revenue DESC; \r\n \r\n--Q3.3 \r\nSELECT c_city, s_city, year(lo_orderdate) AS year, sum(lo_revenue) AS revenue \r\nFROM lineorder_flat \r\nWHERE c_city in ( 'UNITED KI1' ,'UNITED KI5') AND s_city in ('UNITED KI1', 'UNITED KI5')\r\nAND lo_orderdate  >= '1992-01-01' AND lo_orderdate <= '1997-12-31' \r\nGROUP BY c_city, s_city, year \r\nORDER BY year ASC, revenue DESC; \r\n \r\n--Q3.4 \r\nSELECT c_city, s_city, year(lo_orderdate) AS year, sum(lo_revenue) AS revenue \r\nFROM lineorder_flat \r\nWHERE c_city in ('UNITED KI1', 'UNITED KI5') AND s_city in ('UNITED KI1', 'UNITED KI5')\r\nAND lo_orderdate  >= '1997-12-01' AND lo_orderdate <= '1997-12-31' \r\nGROUP BY c_city, s_city, year \r\nORDER BY year ASC, revenue DESC; \r\n \r\n--Q4.1 \r\nSELECT year(lo_orderdate) AS year, c_nation, sum(lo_revenue - lo_supplycost) AS profit\r\nFROM lineorder_flat \r\nWHERE c_region = 'AMERICA' AND s_region = 'AMERICA' AND p_mfgr in ('MFGR#1', 'MFGR#2') \r\nGROUP BY year, c_nation \r\nORDER BY year ASC, c_nation ASC; \r\n \r\n--Q4.2 \r\nSELECT year(lo_orderdate) AS year, \r\n    s_nation, p_category, sum(lo_revenue - lo_supplycost) AS profit \r\nFROM lineorder_flat \r\nWHERE c_region = 'AMERICA' AND s_region = 'AMERICA'\r\nAND lo_orderdate >= '1997-01-01' and lo_orderdate <= '1998-12-31'\r\nAND p_mfgr in ( 'MFGR#1' , 'MFGR#2') \r\nGROUP BY year, s_nation, p_category \r\nORDER BY year ASC, s_nation ASC, p_category ASC; \r\n \r\n--Q4.3 \r\nSELECT year(lo_orderdate) AS year, s_city, p_brand, \r\n    sum(lo_revenue - lo_supplycost) AS profit \r\nFROM lineorder_flat \r\nWHERE s_nation = 'UNITED STATES'\r\nAND lo_orderdate >= '1997-01-01' and lo_orderdate <= '1998-12-31'\r\nAND p_category = 'MFGR#14' \r\nGROUP BY year, s_city, p_brand \r\nORDER BY year ASC, s_city ASC, p_brand ASC; \n"})}),"\n",(0,d.jsx)(n.h3,{id:"\u5efa\u8868\u8bed\u53e5",children:"\u5efa\u8868\u8bed\u53e5"}),"\n",(0,d.jsxs)(n.h4,{id:"lineorder_flat-\u9ed8\u8ba4\u5efa\u8868",children:[(0,d.jsx)(n.code,{children:"lineorder_flat"})," \u9ed8\u8ba4\u5efa\u8868"]}),"\n",(0,d.jsx)(n.p,{children:"\u8fd9\u4e2a\u5efa\u8868\u8bed\u53e5\u662f\u4e3a\u4e86\u5339\u914d\u5f53\u524d\u96c6\u7fa4\u548c\u6570\u636e\u89c4\u683c\uff083 \u4e2a BE\uff0cscale factor = 100\uff09\u3002\u5982\u679c\u60a8\u7684\u96c6\u7fa4\u6709\u66f4\u591a\u7684 BE \u8282\u70b9\uff0c\u6216\u8005\u66f4\u5927\u7684\u6570\u636e\u89c4\u683c\uff0c\u53ef\u4ee5\u8c03\u6574\u5206\u6876\u6570\uff0c\u91cd\u65b0\u5efa\u8868\u548c\u5bfc\u6570\u636e\uff0c\u53ef\u5b9e\u73b0\u66f4\u597d\u7684\u6d4b\u8bd5\u6548\u679c\u3002"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-SQL",children:'CREATE TABLE `lineorder_flat` (\r\n  `LO_ORDERDATE` date NOT NULL COMMENT "",\r\n  `LO_ORDERKEY` int(11) NOT NULL COMMENT "",\r\n  `LO_LINENUMBER` tinyint(4) NOT NULL COMMENT "",\r\n  `LO_CUSTKEY` int(11) NOT NULL COMMENT "",\r\n  `LO_PARTKEY` int(11) NOT NULL COMMENT "",\r\n  `LO_SUPPKEY` int(11) NOT NULL COMMENT "",\r\n  `LO_ORDERPRIORITY` varchar(100) NOT NULL COMMENT "",\r\n  `LO_SHIPPRIORITY` tinyint(4) NOT NULL COMMENT "",\r\n  `LO_QUANTITY` tinyint(4) NOT NULL COMMENT "",\r\n  `LO_EXTENDEDPRICE` int(11) NOT NULL COMMENT "",\r\n  `LO_ORDTOTALPRICE` int(11) NOT NULL COMMENT "",\r\n  `LO_DISCOUNT` tinyint(4) NOT NULL COMMENT "",\r\n  `LO_REVENUE` int(11) NOT NULL COMMENT "",\r\n  `LO_SUPPLYCOST` int(11) NOT NULL COMMENT "",\r\n  `LO_TAX` tinyint(4) NOT NULL COMMENT "",\r\n  `LO_COMMITDATE` date NOT NULL COMMENT "",\r\n  `LO_SHIPMODE` varchar(100) NOT NULL COMMENT "",\r\n  `C_NAME` varchar(100) NOT NULL COMMENT "",\r\n  `C_ADDRESS` varchar(100) NOT NULL COMMENT "",\r\n  `C_CITY` varchar(100) NOT NULL COMMENT "",\r\n  `C_NATION` varchar(100) NOT NULL COMMENT "",\r\n  `C_REGION` varchar(100) NOT NULL COMMENT "",\r\n  `C_PHONE` varchar(100) NOT NULL COMMENT "",\r\n  `C_MKTSEGMENT` varchar(100) NOT NULL COMMENT "",\r\n  `S_NAME` varchar(100) NOT NULL COMMENT "",\r\n  `S_ADDRESS` varchar(100) NOT NULL COMMENT "",\r\n  `S_CITY` varchar(100) NOT NULL COMMENT "",\r\n  `S_NATION` varchar(100) NOT NULL COMMENT "",\r\n  `S_REGION` varchar(100) NOT NULL COMMENT "",\r\n  `S_PHONE` varchar(100) NOT NULL COMMENT "",\r\n  `P_NAME` varchar(100) NOT NULL COMMENT "",\r\n  `P_MFGR` varchar(100) NOT NULL COMMENT "",\r\n  `P_CATEGORY` varchar(100) NOT NULL COMMENT "",\r\n  `P_BRAND` varchar(100) NOT NULL COMMENT "",\r\n  `P_COLOR` varchar(100) NOT NULL COMMENT "",\r\n  `P_TYPE` varchar(100) NOT NULL COMMENT "",\r\n  `P_SIZE` tinyint(4) NOT NULL COMMENT "",\r\n  `P_CONTAINER` varchar(100) NOT NULL COMMENT ""\r\n) ENGINE=OLAP\r\nDUPLICATE KEY(`LO_ORDERDATE`, `LO_ORDERKEY`)\r\nCOMMENT "OLAP"\r\nPARTITION BY date_trunc(\'year\', `LO_ORDERDATE`)\r\nDISTRIBUTED BY HASH(`LO_ORDERKEY`) BUCKETS 48\r\nPROPERTIES ("replication_num" = "1");\n'})}),"\n",(0,d.jsxs)(n.h4,{id:"lineorder_flat-\u521b\u5efa-bitmap-index-\u8868",children:[(0,d.jsx)(n.code,{children:"lineorder_flat"})," \u521b\u5efa Bitmap Index \u8868"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-SQL",children:'CREATE TABLE `lineorder_flat` (\r\n  `LO_ORDERDATE` date NOT NULL COMMENT "",\r\n  `LO_ORDERKEY` int(11) NOT NULL COMMENT "",\r\n  `LO_LINENUMBER` tinyint(4) NOT NULL COMMENT "",\r\n  `LO_CUSTKEY` int(11) NOT NULL COMMENT "",\r\n  `LO_PARTKEY` int(11) NOT NULL COMMENT "",\r\n  `LO_SUPPKEY` int(11) NOT NULL COMMENT "",\r\n  `LO_ORDERPRIORITY` varchar(100) NOT NULL COMMENT "",\r\n  `LO_SHIPPRIORITY` tinyint(4) NOT NULL COMMENT "",\r\n  `LO_QUANTITY` tinyint(4) NOT NULL COMMENT "",\r\n  `LO_EXTENDEDPRICE` int(11) NOT NULL COMMENT "",\r\n  `LO_ORDTOTALPRICE` int(11) NOT NULL COMMENT "",\r\n  `LO_DISCOUNT` tinyint(4) NOT NULL COMMENT "",\r\n  `LO_REVENUE` int(11) NOT NULL COMMENT "",\r\n  `LO_SUPPLYCOST` int(11) NOT NULL COMMENT "",\r\n  `LO_TAX` tinyint(4) NOT NULL COMMENT "",\r\n  `LO_COMMITDATE` date NOT NULL COMMENT "",\r\n  `LO_SHIPMODE` varchar(100) NOT NULL COMMENT "",\r\n  `C_NAME` varchar(100) NOT NULL COMMENT "",\r\n  `C_ADDRESS` varchar(100) NOT NULL COMMENT "",\r\n  `C_CITY` varchar(100) NOT NULL COMMENT "",\r\n  `C_NATION` varchar(100) NOT NULL COMMENT "",\r\n  `C_REGION` varchar(100) NOT NULL COMMENT "",\r\n  `C_PHONE` varchar(100) NOT NULL COMMENT "",\r\n  `C_MKTSEGMENT` varchar(100) NOT NULL COMMENT "",\r\n  `S_NAME` varchar(100) NOT NULL COMMENT "",\r\n  `S_ADDRESS` varchar(100) NOT NULL COMMENT "",\r\n  `S_CITY` varchar(100) NOT NULL COMMENT "",\r\n  `S_NATION` varchar(100) NOT NULL COMMENT "",\r\n  `S_REGION` varchar(100) NOT NULL COMMENT "",\r\n  `S_PHONE` varchar(100) NOT NULL COMMENT "",\r\n  `P_NAME` varchar(100) NOT NULL COMMENT "",\r\n  `P_MFGR` varchar(100) NOT NULL COMMENT "",\r\n  `P_CATEGORY` varchar(100) NOT NULL COMMENT "",\r\n  `P_BRAND` varchar(100) NOT NULL COMMENT "",\r\n  `P_COLOR` varchar(100) NOT NULL COMMENT "",\r\n  `P_TYPE` varchar(100) NOT NULL COMMENT "",\r\n  `P_SIZE` tinyint(4) NOT NULL COMMENT "",\r\n  `P_CONTAINER` varchar(100) NOT NULL COMMENT "",\r\n  index bitmap_lo_orderpriority (lo_orderpriority) USING BITMAP,\r\n  index bitmap_lo_shipmode (lo_shipmode) USING BITMAP,\r\n  index bitmap_c_name (c_name) USING BITMAP,\r\n  index bitmap_c_address (c_address) USING BITMAP,\r\n  index bitmap_c_city (c_city) USING BITMAP,\r\n  index bitmap_c_nation (c_nation) USING BITMAP,\r\n  index bitmap_c_region (c_region) USING BITMAP,\r\n  index bitmap_c_phone (c_phone) USING BITMAP,\r\n  index bitmap_c_mktsegment (c_mktsegment) USING BITMAP,\r\n  index bitmap_s_region (s_region) USING BITMAP,\r\n  index bitmap_s_nation (s_nation) USING BITMAP,\r\n  index bitmap_s_city (s_city) USING BITMAP,\r\n  index bitmap_s_name (s_name) USING BITMAP,\r\n  index bitmap_s_address (s_address) USING BITMAP,\r\n  index bitmap_s_phone (s_phone) USING BITMAP,\r\n  index bitmap_p_name (p_name) USING BITMAP,\r\n  index bitmap_p_mfgr (p_mfgr) USING BITMAP,\r\n  index bitmap_p_category (p_category) USING BITMAP,\r\n  index bitmap_p_brand (p_brand) USING BITMAP,\r\n  index bitmap_p_color (p_color) USING BITMAP,\r\n  index bitmap_p_type (p_type) USING BITMAP,\r\n  index bitmap_p_container (p_container) USING BITMAP\r\n) ENGINE=OLAP\r\nDUPLICATE KEY(`LO_ORDERDATE`, `LO_ORDERKEY`)\r\nCOMMENT "OLAP"\r\nPARTITION BY date_trunc(\'year\', `LO_ORDERDATE`)\r\nDISTRIBUTED BY HASH(`LO_ORDERKEY`) BUCKETS 48\r\nPROPERTIES ("replication_num" = "1");\n'})})]})}const N=function(r={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),r.components);return n?(0,d.jsx)(n,Object.assign({},r,{children:(0,d.jsx)(h,r)})):h(r)}},32155:(r,n,e)=>{e.d(n,{Z:()=>d});const d=e.p+"assets/images/7.1-1-3ca20bcf9a779105869b33b104b3e0a3.png"},11151:(r,n,e)=>{e.d(n,{Zo:()=>c,ah:()=>s});var d=e(67294);const i=d.createContext({});function s(r){const n=d.useContext(i);return d.useMemo((()=>"function"==typeof r?r(n):{...n,...r}),[n,r])}const t={};function c({components:r,children:n,disableParentContext:e}){let c;return c=e?"function"==typeof r?r({}):r||t:s(r),d.createElement(i.Provider,{value:c},n)}}}]);