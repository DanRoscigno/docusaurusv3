"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[17518],{46346:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var n=s(85893),t=s(11151);const a={displayed_sidebar:"English"},i="CREATE RESOURCE",o={id:"sql-reference/sql-statements/data-definition/CREATE_RESOURCE",title:"CREATE RESOURCE",description:"Description",source:"@site/versioned_docs/version-3.0/sql-reference/sql-statements/data-definition/CREATE_RESOURCE.md",sourceDirName:"sql-reference/sql-statements/data-definition",slug:"/sql-reference/sql-statements/data-definition/CREATE_RESOURCE",permalink:"/doc/docs/3.0/sql-reference/sql-statements/data-definition/CREATE_RESOURCE",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-statements/data-definition/CREATE_RESOURCE.md",tags:[],version:"3.0",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"CREATE REPOSITORY",permalink:"/doc/docs/3.0/sql-reference/sql-statements/data-definition/CREATE_REPOSITORY"},next:{title:"CREATE TABLE",permalink:"/doc/docs/3.0/sql-reference/sql-statements/data-definition/CREATE_TABLE"}},d={},c=[{value:"Description",id:"description",level:2},{value:"Examples",id:"examples",level:2}];function l(e){const r=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",ol:"ol",li:"li"},(0,t.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:"create-resource",children:"CREATE RESOURCE"}),"\n",(0,n.jsx)(r.h2,{id:"description",children:"Description"}),"\n",(0,n.jsx)(r.p,{children:"This statement is used to create resources. Only user root or admin can create resources. Currently, only Spark and Hive resources are supported. Other external resources may be added to StarRocks in the future, such as Spark/GPU for query, HDFS/S3 for external storage, and MapReduce for ETL."}),"\n",(0,n.jsx)(r.p,{children:"Syntax:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-sql",children:'CREATE [EXTERNAL] RESOURCE "resource_name"\nPROPERTIES ("key"="value", ...)\n'})}),"\n",(0,n.jsx)(r.p,{children:"Note:"}),"\n",(0,n.jsxs)(r.ol,{children:["\n",(0,n.jsx)(r.li,{children:"PROPERTIES specifies the resource type. Currently, only Spark and Hive are supported."}),"\n",(0,n.jsx)(r.li,{children:"The PROPERTIES vary depending on the resource type. See examples for details."}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsxs)(r.ol,{children:["\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsx)(r.p,{children:"Create a Spark resource named spark0 in yarn Cluster mode."}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-sql",children:'CREATE EXTERNAL RESOURCE "spark0"\nPROPERTIES\n(\n    "type" = "spark",\n    "spark.master" = "yarn",\n    "spark.submit.deployMode" = "cluster",\n    "spark.jars" = "xxx.jar,yyy.jar",\n    "spark.files" = "/tmp/aaa,/tmp/bbb",\n    "spark.executor.memory" = "1g",\n    "spark.yarn.queue" = "queue0",\n    "spark.hadoop.yarn.resourcemanager.address" = "127.0.0.1:9999",\n    "spark.hadoop.fs.defaultFS" = "hdfs://127.0.0.1:10000",\n    "working_dir" = "hdfs://127.0.0.1:10000/tmp/starrocks",\n    "broker" = "broker0",\n    "broker.username" = "user0",\n    "broker.password" = "password0"\n);\n'})}),"\n",(0,n.jsx)(r.p,{children:"Parameters related to Spark are as follows:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-plain",metastring:"text",children:"1. spark.master: required. Currently, yarn and spark ://host:port. are supported. \n2. spark.submit.deployMode: deployment mode of the Spark program is required. Support cluster and client.\n3. spark.hadoop.yarn.resourcemanager.address: required when master is yarn.\n4. spark.hadoop.fs.defaultFS: required when master is yarn.\n5. Other parameters are optional. Please refer to http://spark.apache.org/docs/latest/configuration.html\n"})}),"\n",(0,n.jsx)(r.p,{children:"If Spark is used for ETL, working_DIR and broker need to be specified. The instructions are as follows:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-plain",metastring:"text",children:"working_dir: Directory used by ETL. It is required when spark is used as ETL resource. For example: hdfs://host:port/tmp/starrocks.\nbroker: Name of broker. It is required when spark is used as ETL resource and needs to be configured beforehand by using `ALTER SYSTEM ADD BROKER` command. \nbroker.property_key: It is the property information needed to be specified when broker reads the intermediate files created by ETL. \n"})}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsx)(r.p,{children:"Create a Hive resource named hive0."}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-sql",children:'CREATE EXTERNAL RESOURCE "hive0"\nPROPERTIES\n(\n    "type" = "hive",\n    "hive.metastore.uris" = "thrift://10.10.44.98:9083"\n);\n'})}),"\n"]}),"\n"]})]})}const p=function(e={}){const{wrapper:r}=Object.assign({},(0,t.ah)(),e.components);return r?(0,n.jsx)(r,Object.assign({},e,{children:(0,n.jsx)(l,e)})):l(e)}},11151:(e,r,s)=>{s.d(r,{Zo:()=>o,ah:()=>a});var n=s(67294);const t=n.createContext({});function a(e){const r=n.useContext(t);return n.useMemo((()=>"function"==typeof e?e(r):{...r,...e}),[r,e])}const i={};function o({components:e,children:r,disableParentContext:s}){let o;return o=s?"function"==typeof e?e({}):e||i:a(e),n.createElement(t.Provider,{value:o},r)}}}]);