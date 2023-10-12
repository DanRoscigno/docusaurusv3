"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[40248],{50708:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>c,metadata:()=>a,toc:()=>l});var n=s(85893),t=s(11151);const c={},o="Spark connector",a={id:"ecosystem_release/spark_connector",title:"Spark connector",description:"Notifications",source:"@site/versioned_docs/version-3.1/ecosystem_release/spark_connector.md",sourceDirName:"ecosystem_release",slug:"/ecosystem_release/spark_connector",permalink:"/doc/docs/ecosystem_release/spark_connector",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/ecosystem_release/spark_connector.md",tags:[],version:"3.1",frontMatter:{},sidebar:"Chinese31",previous:{title:"Kafka connector",permalink:"/doc/docs/ecosystem_release/kafka_connector"}},i={},l=[{value:"<strong>Notifications</strong>",id:"notifications",level:2},{value:"<strong>Release note</strong>",id:"release-note",level:2},{value:"1.1",id:"11",level:3},{value:"1.0",id:"10",level:3}];function h(e){const r=Object.assign({h1:"h1",h2:"h2",strong:"strong",p:"p",ul:"ul",li:"li",a:"a",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",h3:"h3",blockquote:"blockquote"},(0,t.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:"spark-connector",children:"Spark connector"}),"\n",(0,n.jsx)(r.h2,{id:"notifications",children:(0,n.jsx)(r.strong,{children:"Notifications"})}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"User guide:"})}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"/doc/docs/loading/Spark-connector-starrocks",children:"Load data into StarRocks using Spark connector"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"/doc/docs/unloading/Spark_connector",children:"Read data from StarRocks using Spark connector"})}),"\n"]}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Source codes"}),": ",(0,n.jsx)(r.a,{href:"https://github.com/StarRocks/starrocks-connector-for-apache-spark",children:"starrocks-connector-for-apache-spark"})]}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Naming format of the JAR file"}),": ",(0,n.jsx)(r.code,{children:"starrocks-spark-connector-${spark_version}_${scala_version}-${connector_version}.jar"})]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Methods to obtain the JAR file:"})}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["Directly download the Spark connector JAR file from the ",(0,n.jsx)(r.a,{href:"https://repo1.maven.org/maven2/com/starrocks",children:"Maven Central Repository"}),"."]}),"\n",(0,n.jsxs)(r.li,{children:["Add the Spark connector as a dependency in your Maven project's ",(0,n.jsx)(r.code,{children:"pom.xml"})," file and download it. For specific instructions, see ",(0,n.jsx)(r.a,{href:"../loading/Spark-connector-starrocks#obtain-spark-connector",children:"user guide"}),"."]}),"\n",(0,n.jsxs)(r.li,{children:["Compile the source codes into Spark connector JAR file. For specific instructions, see ",(0,n.jsx)(r.a,{href:"../loading/Spark-connector-starrocks#obtain-spark-connector",children:"user guide"}),"."]}),"\n"]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Version requirements:"})}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Spark connector"}),(0,n.jsx)(r.th,{children:"Spark"}),(0,n.jsx)(r.th,{children:"StarRocks"}),(0,n.jsx)(r.th,{children:"Java"}),(0,n.jsx)(r.th,{children:"Scala"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"1.1.1"}),(0,n.jsx)(r.td,{children:"3.2, 3.3, or 3.4"}),(0,n.jsx)(r.td,{children:"2.5 and later"}),(0,n.jsx)(r.td,{children:"8"}),(0,n.jsx)(r.td,{children:"2.12"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"1.1.0"}),(0,n.jsx)(r.td,{children:"3.2, 3.3, or 3.4"}),(0,n.jsx)(r.td,{children:"2.5 and later"}),(0,n.jsx)(r.td,{children:"8"}),(0,n.jsx)(r.td,{children:"2.12"})]})]})]}),"\n",(0,n.jsx)(r.h2,{id:"release-note",children:(0,n.jsx)(r.strong,{children:"Release note"})}),"\n",(0,n.jsx)(r.h3,{id:"11",children:"1.1"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"1.1.1"})}),"\n",(0,n.jsx)(r.p,{children:"This release mainly includes some features and improvements for loading data to StarRocks."}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"NOTICE"})}),"\n",(0,n.jsxs)(r.p,{children:["Take note of the some changes when you upgrade the Spark connector to this version. For details, see ",(0,n.jsx)(r.a,{href:"/doc/docs/loading/Spark-connector-starrocks#upgrade-from-version-110-to-111",children:"Upgrade Spark connector"}),"."]}),"\n"]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Features"})}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["The sink supports retrying. ",(0,n.jsx)(r.a,{href:"https://github.com/StarRocks/starrocks-connector-for-apache-spark/pull/61",children:"#61"})]}),"\n",(0,n.jsxs)(r.li,{children:["Support to load data to BITMAP and HLL columns. ",(0,n.jsx)(r.a,{href:"https://github.com/StarRocks/starrocks-connector-for-apache-spark/pull/67",children:"#67"})]}),"\n",(0,n.jsxs)(r.li,{children:["Support to load ARRAY-type data. ",(0,n.jsx)(r.a,{href:"https://github.com/StarRocks/starrocks-connector-for-apache-spark/pull/74",children:"#74"})]}),"\n",(0,n.jsxs)(r.li,{children:["Support to flush according to the number of buffered rows. ",(0,n.jsx)(r.a,{href:"https://github.com/StarRocks/starrocks-connector-for-apache-spark/pull/78",children:"#78"})]}),"\n"]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Improvements"})}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["Remove useless dependency, and make the Spark connector JAR file lightweight. ",(0,n.jsx)(r.a,{href:"https://github.com/StarRocks/starrocks-connector-for-apache-spark/pull/55",children:"#55"})," ",(0,n.jsx)(r.a,{href:"https://github.com/StarRocks/starrocks-connector-for-apache-spark/pull/57",children:"#57"})]}),"\n",(0,n.jsxs)(r.li,{children:["Replace fastjson with jackson. ",(0,n.jsx)(r.a,{href:"https://github.com/StarRocks/starrocks-connector-for-apache-spark/pull/58",children:"#58"})]}),"\n",(0,n.jsxs)(r.li,{children:["Add the missing Apache license header. ",(0,n.jsx)(r.a,{href:"https://github.com/StarRocks/starrocks-connector-for-apache-spark/pull/60",children:"#60"})]}),"\n",(0,n.jsxs)(r.li,{children:["Do not package the MySQL JDBC driver in the Spark connector JAR file. ",(0,n.jsx)(r.a,{href:"https://github.com/StarRocks/starrocks-connector-for-apache-spark/pull/63",children:"#63"})]}),"\n",(0,n.jsxs)(r.li,{children:["Support to configure timezone parameter and become compatible with Spark Java8 API datetime. ",(0,n.jsx)(r.a,{href:"https://github.com/StarRocks/starrocks-connector-for-apache-spark/pull/64",children:"#64"})]}),"\n",(0,n.jsxs)(r.li,{children:["Optimize row-string converter to reduce CPU costs. ",(0,n.jsx)(r.a,{href:"https://github.com/StarRocks/starrocks-connector-for-apache-spark/pull/68",children:"#68"})]}),"\n",(0,n.jsxs)(r.li,{children:["The ",(0,n.jsx)(r.code,{children:"starrocks.fe.http.url"})," parameter supports to add a http scheme. ",(0,n.jsx)(r.a,{href:"https://github.com/StarRocks/starrocks-connector-for-apache-spark/pull/71",children:"#71"})]}),"\n",(0,n.jsxs)(r.li,{children:["The interface BatchWrite#useCommitCoordinator is implemented to run on DataBricks 13.1 ",(0,n.jsx)(r.a,{href:"https://github.com/StarRocks/starrocks-connector-for-apache-spark/pull/79",children:"#79"})]}),"\n",(0,n.jsxs)(r.li,{children:["Add the hint of checking the privileges and parameters in the error log. ",(0,n.jsx)(r.a,{href:"https://github.com/StarRocks/starrocks-connector-for-apache-spark/pull/81",children:"#81"})]}),"\n"]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Bug fixes"})}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["Parse escape characters in the CSV related parameters  ",(0,n.jsx)(r.code,{children:"column_seperator"})," and ",(0,n.jsx)(r.code,{children:"row_delimiter"}),". ",(0,n.jsx)(r.a,{href:"https://github.com/StarRocks/starrocks-connector-for-apache-spark/pull/85",children:"#85"})]}),"\n"]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Doc"})}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["Refactor the docs. ",(0,n.jsx)(r.a,{href:"https://github.com/StarRocks/starrocks-connector-for-apache-spark/pull/66",children:"#66"})]}),"\n",(0,n.jsxs)(r.li,{children:["Add examples of load data to BITMAP and HLL columns. ",(0,n.jsx)(r.a,{href:"https://github.com/StarRocks/starrocks-connector-for-apache-spark/pull/70",children:"#70"})]}),"\n",(0,n.jsxs)(r.li,{children:["Add examples of Spark applications written in Python. ",(0,n.jsx)(r.a,{href:"https://github.com/StarRocks/starrocks-connector-for-apache-spark/pull/72",children:"#72"})]}),"\n",(0,n.jsxs)(r.li,{children:["Add examples of loading ARRAY-type data. ",(0,n.jsx)(r.a,{href:"https://github.com/StarRocks/starrocks-connector-for-apache-spark/pull/75",children:"#75"})]}),"\n",(0,n.jsxs)(r.li,{children:["Add examples for performing partial updates and conditional updates on Primary Key tables. ",(0,n.jsx)(r.a,{href:"https://github.com/StarRocks/starrocks-connector-for-apache-spark/pull/80",children:"#80"})]}),"\n"]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"1.1.0"})}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Features"})}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"Support to load data into StarRocks."}),"\n"]}),"\n",(0,n.jsx)(r.h3,{id:"10",children:"1.0"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Features"})}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"Support to unload data from StarRocks."}),"\n"]})]})}const d=function(e={}){const{wrapper:r}=Object.assign({},(0,t.ah)(),e.components);return r?(0,n.jsx)(r,Object.assign({},e,{children:(0,n.jsx)(h,e)})):h(e)}},11151:(e,r,s)=>{s.d(r,{Zo:()=>a,ah:()=>c});var n=s(67294);const t=n.createContext({});function c(e){const r=n.useContext(t);return n.useMemo((()=>"function"==typeof e?e(r):{...r,...e}),[r,e])}const o={};function a({components:e,children:r,disableParentContext:s}){let a;return a=s?"function"==typeof e?e({}):e||o:c(e),n.createElement(t.Provider,{value:a},r)}}}]);