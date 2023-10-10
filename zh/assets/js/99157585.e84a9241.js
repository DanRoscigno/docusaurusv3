"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[30932],{2571:(r,s,c)=>{c.r(s),c.d(s,{assets:()=>h,contentTitle:()=>t,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var n=c(85893),e=c(11151);const o={},t="Spark connector \u7248\u672c\u53d1\u5e03",a={id:"ecosystem_release/spark_connector",title:"Spark connector \u7248\u672c\u53d1\u5e03",description:"\u53d1\u5e03\u8bf4\u660e",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.1/ecosystem_release/spark_connector.md",sourceDirName:"ecosystem_release",slug:"/ecosystem_release/spark_connector",permalink:"/docusaurusv3/zh/docs/ecosystem_release/spark_connector",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/ecosystem_release/spark_connector.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"Kafka connector \u7248\u672c\u53d1\u5e03",permalink:"/docusaurusv3/zh/docs/ecosystem_release/kafka_connector"}},h={},l=[{value:"\u53d1\u5e03\u8bf4\u660e",id:"\u53d1\u5e03\u8bf4\u660e",level:2},{value:"\u53d1\u5e03\u8bb0\u5f55",id:"\u53d1\u5e03\u8bb0\u5f55",level:2},{value:"1.1",id:"11",level:3},{value:"1.0",id:"10",level:3}];function i(r){const s=Object.assign({h1:"h1",h2:"h2",p:"p",strong:"strong",ul:"ul",li:"li",a:"a",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",h3:"h3",blockquote:"blockquote"},(0,e.ah)(),r.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"spark-connector-\u7248\u672c\u53d1\u5e03",children:"Spark connector \u7248\u672c\u53d1\u5e03"}),"\n",(0,n.jsx)(s.h2,{id:"\u53d1\u5e03\u8bf4\u660e",children:"\u53d1\u5e03\u8bf4\u660e"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"\u4f7f\u7528\u6587\u6863\uff1a"})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"/docusaurusv3/zh/docs/loading/Spark-connector-starrocks",children:"\u4f7f\u7528 Spark connector \u5bfc\u5165\u6570\u636e\u81f3 StarRocks"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"/docusaurusv3/zh/docs/unloading/Spark_connector",children:"\u4f7f\u7528 Spark connector \u4ece StarRocks \u8bfb\u53d6\u6570\u636e"})}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"\u6e90\u7801\u4e0b\u8f7d\u5730\u5740\uff1a"}),(0,n.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks-connector-for-apache-spark",children:"starrocks-connector-for-apache-spark"})]}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"JAR \u5305\u547d\u540d\u89c4\u5219\uff1a"}),(0,n.jsx)(s.code,{children:"starrocks-spark-connector-${spark_version}_${scala_version}-${connector_version}.jar"})]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"JAR \u5305\u83b7\u53d6\u65b9\u5f0f:"})}),"\n",(0,n.jsx)(s.p,{children:"\u60a8\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u65b9\u5f0f\u83b7\u53d6 Spark connector \u7684 JAR \u5305\uff1a"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["\u4ece ",(0,n.jsx)(s.a,{href:"https://repo1.maven.org/maven2/com/starrocks",children:"Maven Central Repository"})," \u76f4\u63a5\u4e0b\u8f7d\u7f16\u8bd1\u597d\u7684 JAR \u5305\u3002"]}),"\n",(0,n.jsxs)(s.li,{children:["\u5728 Maven \u9879\u76ee\u7684 pom \u6587\u4ef6\u6dfb\u52a0 Spark connector \u4e3a\u4f9d\u8d56\u9879\uff0c\u4f5c\u4e3a\u4f9d\u8d56\u4e0b\u8f7d\u3002\u5177\u4f53\u65b9\u5f0f\uff0c\u53c2\u89c1",(0,n.jsx)(s.a,{href:"/docusaurusv3/zh/docs/loading/Spark-connector-starrocks",children:"\u4f7f\u7528\u6587\u6863"}),"\u3002"]}),"\n",(0,n.jsxs)(s.li,{children:["\u4f7f\u7528\u6e90\u7801\u624b\u52a8\u7f16\u8bd1\u6210 JAR \u5305\u3002\u5177\u4f53\u65b9\u5f0f\uff0c\u53c2\u89c1",(0,n.jsx)(s.a,{href:"/docusaurusv3/zh/docs/loading/Spark-connector-starrocks",children:"\u4f7f\u7528\u6587\u6863"}),"\u3002"]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"\u7248\u672c\u8981\u6c42\uff1a"})}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Connector"}),(0,n.jsx)(s.th,{children:"Spark"}),(0,n.jsx)(s.th,{children:"StarRocks"}),(0,n.jsx)(s.th,{children:"Java"}),(0,n.jsx)(s.th,{children:"Scala"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"1.1.1"}),(0,n.jsx)(s.td,{children:"3.2, 3.3, 3.4"}),(0,n.jsx)(s.td,{children:"2.5 \u53ca\u4ee5\u4e0a"}),(0,n.jsx)(s.td,{children:"8"}),(0,n.jsx)(s.td,{children:"2.12"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"1.1.0"}),(0,n.jsx)(s.td,{children:"3.2, 3.3, 3.4"}),(0,n.jsx)(s.td,{children:"2.5 \u53ca\u4ee5\u4e0a"}),(0,n.jsx)(s.td,{children:"8"}),(0,n.jsx)(s.td,{children:"2.12"})]})]})]}),"\n",(0,n.jsx)(s.h2,{id:"\u53d1\u5e03\u8bb0\u5f55",children:"\u53d1\u5e03\u8bb0\u5f55"}),"\n",(0,n.jsx)(s.h3,{id:"11",children:"1.1"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"1.1.1"})}),"\n",(0,n.jsx)(s.p,{children:"\u672c\u7248\u672c\u53d1\u5e03\u4e3b\u8981\u5305\u62ec\u5982\u4e0b\u65b0\u589e\u7279\u6027\u548c\u529f\u80fd\u4f18\u5316\uff0c\u6d89\u53ca\u5bfc\u5165\u6570\u636e\u5230 StarRocks\u3002"}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"\u6ce8\u610f"})}),"\n",(0,n.jsxs)(s.p,{children:["\u5347\u7ea7\u81f3\u672c\u7248\u672c\uff0c\u6d89\u53ca\u884c\u4e3a\u53d8\u66f4\u3002\u8be6\u7ec6\u4fe1\u606f\uff0c\u53c2\u89c1",(0,n.jsx)(s.a,{href:"/docusaurusv3/zh/docs/loading/Spark-connector-starrocks#%E5%8D%87%E7%BA%A7-spark-connector",children:"\u5347\u7ea7 Spark connector"}),"\u3002"]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"\u65b0\u589e\u7279\u6027"})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["Sink \u652f\u6301\u91cd\u8bd5\u3002",(0,n.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks-connector-for-apache-spark/pull/61",children:"#61"})]}),"\n",(0,n.jsxs)(s.li,{children:["\u652f\u6301\u5c06\u6570\u636e\u5bfc\u5165\u81f3 BITMAP \u6216\u8005 HLL \u7c7b\u578b\u7684\u5217\u3002",(0,n.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks-connector-for-apache-spark/pull/67",children:"#67"})]}),"\n",(0,n.jsxs)(s.li,{children:["\u652f\u6301\u5bfc\u5165 ARRAY \u7c7b\u578b\u7684\u6570\u636e\u3002",(0,n.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks-connector-for-apache-spark/pull/74",children:"#74"})]}),"\n",(0,n.jsxs)(s.li,{children:["\u652f\u6301\u6839\u636e\u7f13\u51b2\u6570\u636e\u884c\u6570 flush \u6570\u636e\u3002",(0,n.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks-connector-for-apache-spark/pull/78",children:"#78"})]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"\u529f\u80fd\u4f18\u5316"})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["\u79fb\u9664\u65e0\u7528\u7684\u4f9d\u8d56\u9879\uff0c\u4f7f Spark connector JAR \u6587\u4ef6\u66f4\u8f7b\u91cf\u3002",(0,n.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks-connector-for-apache-spark/pull/55",children:"#55"})," ",(0,n.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks-connector-for-apache-spark/pull/57",children:"#57"})]}),"\n",(0,n.jsxs)(s.li,{children:["\u7528 jackson \u66ff\u6362 fastjson\u3002",(0,n.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks-connector-for-apache-spark/pull/58",children:"#58"})]}),"\n",(0,n.jsxs)(s.li,{children:["\u6dfb\u52a0\u7f3a\u5931\u7684 Apache license header\u3002",(0,n.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks-connector-for-apache-spark/pull/60",children:"#60"})]}),"\n",(0,n.jsxs)(s.li,{children:["Spark connector JAR \u6587\u4ef6\u4e2d\u4e0d\u518d\u6253\u5305 MySQL JDBC \u9a71\u52a8\u7a0b\u5e8f\u3002",(0,n.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks-connector-for-apache-spark/pull/63",children:"#63"})]}),"\n",(0,n.jsxs)(s.li,{children:["\u517c\u5bb9 Spark Java 8 API datetime\u3002",(0,n.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks-connector-for-apache-spark/pull/64",children:"#64"})]}),"\n",(0,n.jsxs)(s.li,{children:["\u4f18\u5316 row-string \u8f6c\u6362\u5668\u4ee5\u51cf\u5c11 CPU \u6210\u672c\u3002",(0,n.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks-connector-for-apache-spark/pull/68",children:"#68"})]}),"\n",(0,n.jsxs)(s.li,{children:["\u652f\u6301\u5728 starrocks.fe.http.url \u4e2d\u6dfb\u52a0 HTTP scheme\u3002",(0,n.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks-connector-for-apache-spark/pull/71",children:"#71"})]}),"\n",(0,n.jsxs)(s.li,{children:["\u5b9e\u73b0\u63a5\u53e3 BatchWrite#useCommitCoordinator \u4ee5\u652f\u6301 DataBricks v13.1\u3002 ",(0,n.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks-connector-for-apache-spark/pull/79",children:"#79"})]}),"\n",(0,n.jsxs)(s.li,{children:["\u5728\u9519\u8bef\u65e5\u5fd7\u4e2d\u6dfb\u52a0\u6743\u9650\u548c\u53c2\u6570\u68c0\u67e5\u63d0\u793a\u3002",(0,n.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks-connector-for-apache-spark/pull/81",children:"#81"})]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"\u95ee\u9898\u4fee\u590d"})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["\u89e3\u6790 CSV \u76f8\u5173\u53c2\u6570 ",(0,n.jsx)(s.code,{children:"column_seperator"})," \u548c",(0,n.jsx)(s.code,{children:"row_delimiter"})," \u4e2d\u7684\u8f6c\u4e49\u5b57\u7b26\u3002",(0,n.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks-connector-for-apache-spark/pull/85",children:"#85"})]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"\u6587\u6863"})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["\u91cd\u6784\u6587\u6863\u3002",(0,n.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks-connector-for-apache-spark/pull/66",children:"#66"})]}),"\n",(0,n.jsxs)(s.li,{children:["\u65b0\u589e\u793a\u4f8b\u8bf4\u660e\u5982\u4f55\u5bfc\u5165\u81f3 BITMAP \u548c HLL \u7c7b\u578b\u7684\u5217\u3002",(0,n.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks-connector-for-apache-spark/pull/70",children:"#70"})]}),"\n",(0,n.jsxs)(s.li,{children:["\u65b0\u589e Python \u7f16\u5199\u7684 Spark \u5e94\u7528\u7a0b\u5e8f\u793a\u4f8b\u3002",(0,n.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks-connector-for-apache-spark/pull/72",children:"#72"})]}),"\n",(0,n.jsxs)(s.li,{children:["\u65b0\u589e\u5bfc\u5165 ARRAY \u7c7b\u578b\u6570\u636e\u7684\u793a\u4f8b\u3002",(0,n.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks-connector-for-apache-spark/pull/75",children:"#75"})]}),"\n",(0,n.jsxs)(s.li,{children:["\u65b0\u589e\u793a\u4f8b\u8bf4\u660e\u5982\u4f55\u5b9e\u73b0\u4e3b\u952e\u6a21\u578b\u8868\u7684\u90e8\u5206\u66f4\u65b0\u548c\u6761\u4ef6\u66f4\u65b0\u3002",(0,n.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks-connector-for-apache-spark/pull/80",children:"#80"})]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"1.1.0"})}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"\u65b0\u589e\u7279\u6027"})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"\u652f\u6301\u5bfc\u5165\u6570\u636e\u5230 StarRocks\u3002"}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"10",children:"1.0"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"1.0.0"})}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"\u65b0\u589e\u7279\u6027"})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"\u652f\u6301\u4ece StarRocks \u8bfb\u53d6\u6570\u636e\u3002"}),"\n"]})]})}const d=function(r={}){const{wrapper:s}=Object.assign({},(0,e.ah)(),r.components);return s?(0,n.jsx)(s,Object.assign({},r,{children:(0,n.jsx)(i,r)})):i(r)}},11151:(r,s,c)=>{c.d(s,{Zo:()=>a,ah:()=>o});var n=c(67294);const e=n.createContext({});function o(r){const s=n.useContext(e);return n.useMemo((()=>"function"==typeof r?r(s):{...s,...r}),[s,r])}const t={};function a({components:r,children:s,disableParentContext:c}){let a;return a=c?"function"==typeof r?r({}):r||t:o(r),n.createElement(e.Provider,{value:a},s)}}}]);