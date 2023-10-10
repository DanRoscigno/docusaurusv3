"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[3283],{68165:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>t,contentTitle:()=>r,default:()=>h,frontMatter:()=>c,metadata:()=>i,toc:()=>a});var l=s(85893),d=s(11151);const c={},r="EXPORT",i={id:"sql-reference/sql-statements/data-manipulation/EXPORT",title:"EXPORT",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.0/sql-reference/sql-statements/data-manipulation/EXPORT.md",sourceDirName:"sql-reference/sql-statements/data-manipulation",slug:"/sql-reference/sql-statements/data-manipulation/EXPORT",permalink:"/doc/zh/docs/3.0/sql-reference/sql-statements/data-manipulation/EXPORT",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/sql-reference/sql-statements/data-manipulation/EXPORT.md",tags:[],version:"3.0",frontMatter:{},sidebar:"documentation",previous:{title:"DROP TASK",permalink:"/doc/zh/docs/3.0/sql-reference/sql-statements/data-manipulation/DROP TASK"},next:{title:"GROUP BY",permalink:"/doc/zh/docs/3.0/sql-reference/sql-statements/data-manipulation/GROUP BY"}},t={},a=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u5c06\u8868\u4e2d\u6240\u6709\u6570\u636e\u5bfc\u51fa\u5230 HDFS",id:"\u5c06\u8868\u4e2d\u6240\u6709\u6570\u636e\u5bfc\u51fa\u5230-hdfs",level:3},{value:"\u5c06\u8868\u4e2d\u90e8\u5206\u5206\u533a\u7684\u6570\u636e\u5bfc\u51fa\u5230 HDFS",id:"\u5c06\u8868\u4e2d\u90e8\u5206\u5206\u533a\u7684\u6570\u636e\u5bfc\u51fa\u5230-hdfs",level:3},{value:"\u6307\u5b9a\u5206\u9694\u7b26",id:"\u6307\u5b9a\u5206\u9694\u7b26",level:3},{value:"\u6307\u5b9a\u5bfc\u51fa\u6587\u4ef6\u540d\u524d\u7f00",id:"\u6307\u5b9a\u5bfc\u51fa\u6587\u4ef6\u540d\u524d\u7f00",level:3},{value:"\u5bfc\u51fa\u6570\u636e\u5230 Alibaba Cloud OSS",id:"\u5bfc\u51fa\u6570\u636e\u5230-alibaba-cloud-oss",level:3},{value:"\u5bfc\u51fa\u6570\u636e\u5230 Tencent Cloud COS",id:"\u5bfc\u51fa\u6570\u636e\u5230-tencent-cloud-cos",level:3},{value:"\u5bfc\u51fa\u6570\u636e\u5230 AWS S3",id:"\u5bfc\u51fa\u6570\u636e\u5230-aws-s3",level:3},{value:"\u5bfc\u51fa\u6570\u636e\u5230 Huawei Cloud OBS \u4e0a",id:"\u5bfc\u51fa\u6570\u636e\u5230-huawei-cloud-obs-\u4e0a",level:3}];function o(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",blockquote:"blockquote",strong:"strong",pre:"pre",code:"code",ul:"ul",li:"li",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",h3:"h3"},(0,d.ah)(),e.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h1,{id:"export",children:"EXPORT"}),"\n",(0,l.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,l.jsx)(n.p,{children:"\u8be5\u8bed\u53e5\u7528\u4e8e\u5c06\u6307\u5b9a\u8868\u7684\u6570\u636e\u5bfc\u51fa\u5230\u6307\u5b9a\u4f4d\u7f6e\u3002"}),"\n",(0,l.jsxs)(n.p,{children:["\u8fd9\u662f\u4e00\u4e2a\u5f02\u6b65\u64cd\u4f5c\uff0c\u4efb\u52a1\u63d0\u4ea4\u6210\u529f\u540e\u8fd4\u56de\u7ed3\u679c\u3002\u6267\u884c\u540e\u53ef\u4f7f\u7528 ",(0,l.jsx)(n.a,{href:"/doc/zh/docs/3.0/sql-reference/sql-statements/data-manipulation/SHOW%20EXPORT",children:"SHOW EXPORT"})," \u547d\u4ee4\u67e5\u770b\u8fdb\u5ea6\u3002"]}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u6ce8\u610f"})}),"\n",(0,l.jsxs)(n.p,{children:["\u5bfc\u51fa\u64cd\u4f5c\u9700\u8981\u76ee\u6807\u8868\u7684 EXPORT \u6743\u9650\u3002\u5982\u679c\u60a8\u7684\u7528\u6237\u8d26\u53f7\u6ca1\u6709 EXPORT \u6743\u9650\uff0c\u8bf7\u53c2\u8003 ",(0,l.jsx)(n.a,{href:"/doc/zh/docs/3.0/sql-reference/sql-statements/account-management/GRANT",children:"GRANT"})," \u7ed9\u7528\u6237\u8d4b\u6743\u3002"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"EXPORT TABLE <table_name>\n[PARTITION (<partition_name>[, ...])]\n[(<column_name>[, ...])]\nTO <export_path>\n[opt_properties]\nWITH BROKER\n[broker_properties]\n"})}),"\n",(0,l.jsx)(n.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"table_name"})}),"\n",(0,l.jsxs)(n.p,{children:["\u5f85\u5bfc\u51fa\u6570\u636e\u6240\u5728\u7684\u8868\u3002\u76ee\u524d\u652f\u6301\u5bfc\u51fa ",(0,l.jsx)(n.code,{children:"engine"})," \u4e3a ",(0,l.jsx)(n.code,{children:"olap"})," \u6216 ",(0,l.jsx)(n.code,{children:"mysql"})," \u7684\u8868\u3002"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"partition_name"})}),"\n",(0,l.jsx)(n.p,{children:"\u8981\u5bfc\u51fa\u7684\u5206\u533a\u3002\u5982\u4e0d\u6307\u5b9a\u5219\u9ed8\u8ba4\u5bfc\u51fa\u8868\u4e2d\u6240\u6709\u5206\u533a\u7684\u6570\u636e\u3002"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"column_name"})}),"\n",(0,l.jsx)(n.p,{children:"\u8981\u5bfc\u51fa\u7684\u5217\u3002\u5217\u7684\u5bfc\u51fa\u987a\u5e8f\u53ef\u4ee5\u548c\u6e90\u8868\u7ed3\u6784 (Schema) \u4e0d\u540c\u3002\u5982\u4e0d\u6307\u5b9a\u5219\u9ed8\u8ba4\u5bfc\u51fa\u8868\u4e2d\u6240\u6709\u5217\u7684\u6570\u636e\u3002"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"export_path"})}),"\n",(0,l.jsxs)(n.p,{children:["\u5bfc\u51fa\u7684\u76ee\u6807\u8def\u5f84\u3002\u5982\u679c\u662f\u76ee\u5f55\uff0c\u9700\u8981\u4ee5\u659c\u6760 (/) \u7ed3\u5c3e\u3002\u5426\u5219\u6700\u540e\u4e00\u4e2a\u659c\u6760\u540e\u9762\u7684\u90e8\u5206\u4f1a\u4f5c\u4e3a\u5bfc\u51fa\u6587\u4ef6\u7684\u524d\u7f00\u3002\u5982\u4e0d\u6307\u5b9a\u6587\u4ef6\u540d\u524d\u7f00\uff0c\u5219\u9ed8\u8ba4\u6587\u4ef6\u540d\u524d\u7f00\u4e3a ",(0,l.jsx)(n.code,{children:"data_"}),"\u3002"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"opt_properties"})}),"\n",(0,l.jsx)(n.p,{children:"\u5bfc\u51fa\u76f8\u5173\u7684\u5c5e\u6027\u914d\u7f6e\u3002"}),"\n",(0,l.jsx)(n.p,{children:"\u8bed\u6cd5\uff1a"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'[PROPERTIES ("<key>"="<value>", ...)]\n'})}),"\n",(0,l.jsx)(n.p,{children:"\u914d\u7f6e\u9879\uff1a"}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:(0,l.jsx)(n.strong,{children:"\u914d\u7f6e\u9879"})}),(0,l.jsx)(n.th,{children:(0,l.jsx)(n.strong,{children:"\u63cf\u8ff0"})})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"column_separator"}),(0,l.jsxs)(n.td,{children:["\u6307\u5b9a\u5bfc\u51fa\u6587\u4ef6\u7684\u5217\u5206\u9694\u7b26\u3002\u9ed8\u8ba4\u503c\uff1a",(0,l.jsx)(n.code,{children:"\\t"}),"\u3002"]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"line_delimiter"}),(0,l.jsxs)(n.td,{children:["\u6307\u5b9a\u5bfc\u51fa\u6587\u4ef6\u7684\u884c\u5206\u9694\u7b26\u3002\u9ed8\u8ba4\u503c\uff1a",(0,l.jsx)(n.code,{children:"\\n"}),"\u3002"]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"load_mem_limit"}),(0,l.jsx)(n.td,{children:"\u6307\u5b9a\u5bfc\u51fa\u4efb\u52a1\u5728\u5355\u4e2a BE \u8282\u70b9\u4e0a\u7684\u5185\u5b58\u4f7f\u7528\u4e0a\u9650\u3002\u5355\u4f4d\uff1a\u5b57\u8282\u3002\u9ed8\u8ba4\u5185\u5b58\u4f7f\u7528\u4e0a\u9650\u4e3a 2 GB\u3002"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"timeout"}),(0,l.jsxs)(n.td,{children:["\u6307\u5b9a\u5bfc\u51fa\u4efb\u52a1\u7684\u8d85\u65f6\u65f6\u95f4\u3002\u5355\u4f4d\uff1a\u79d2\u3002\u9ed8\u8ba4\u503c\uff1a",(0,l.jsx)(n.code,{children:"86400"}),"\uff081 \u5929\uff09\u3002"]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"include_query_id"}),(0,l.jsxs)(n.td,{children:["\u6307\u5b9a\u5bfc\u51fa\u6587\u4ef6\u540d\u4e2d\u662f\u5426\u5305\u542b ",(0,l.jsx)(n.code,{children:"query_id"}),"\u3002\u53d6\u503c\u8303\u56f4\uff1a",(0,l.jsx)(n.code,{children:"true"})," \u548c ",(0,l.jsx)(n.code,{children:"false"}),"\u3002\u9ed8\u8ba4\u503c\uff1a",(0,l.jsx)(n.code,{children:"true"}),"\u3002",(0,l.jsx)(n.code,{children:"true"})," \u8868\u793a\u5305\u542b\uff0c",(0,l.jsx)(n.code,{children:"false"})," \u8868\u793a\u4e0d\u5305\u542b\u3002"]})]})]})]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"WITH BROKER"})}),"\n",(0,l.jsxs)(n.p,{children:["\u5728 v2.4 \u53ca\u4ee5\u524d\u7248\u672c\uff0c\u60a8\u9700\u8981\u5728\u5bfc\u51fa\u8bed\u53e5\u4e2d\u901a\u8fc7 ",(0,l.jsx)(n.code,{children:'WITH BROKER "<broker_name>"'})," \u6765\u6307\u5b9a\u4f7f\u7528\u54ea\u4e2a Broker\u3002\u81ea v2.5 \u8d77\uff0c\u60a8\u4e0d\u518d\u9700\u8981\u6307\u5b9a ",(0,l.jsx)(n.code,{children:"broker_name"}),"\uff0c\u4f46\u7ee7\u7eed\u4fdd\u7559 ",(0,l.jsx)(n.code,{children:"WITH BROKER"})," \u5173\u952e\u5b57\u3002\u53c2\u89c1",(0,l.jsx)(n.a,{href:"/doc/zh/docs/3.0/unloading/Export#%E8%83%8C%E6%99%AF%E4%BF%A1%E6%81%AF",children:"\u4ece \u4f7f\u7528 EXPORT \u5bfc\u51fa\u6570\u636e > \u80cc\u666f\u4fe1\u606f"}),"\u3002"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"broker_properties"})}),"\n",(0,l.jsxs)(n.p,{children:["\u7528\u4e8e\u63d0\u4f9b\u8bbf\u95ee\u6570\u636e\u6e90\u7684\u9274\u6743\u4fe1\u606f\u3002\u6570\u636e\u6e90\u4e0d\u540c\uff0c\u9700\u8981\u63d0\u4f9b\u7684\u9274\u6743\u4fe1\u606f\u4e5f\u4e0d\u540c\uff0c\u53c2\u8003 ",(0,l.jsx)(n.a,{href:"/doc/zh/docs/3.0/sql-reference/sql-statements/data-manipulation/BROKER%20LOAD",children:"BROKER LOAD"}),"\u3002"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,l.jsx)(n.h3,{id:"\u5c06\u8868\u4e2d\u6240\u6709\u6570\u636e\u5bfc\u51fa\u5230-hdfs",children:"\u5c06\u8868\u4e2d\u6240\u6709\u6570\u636e\u5bfc\u51fa\u5230 HDFS"}),"\n",(0,l.jsxs)(n.p,{children:["\u5c06 ",(0,l.jsx)(n.code,{children:"testTbl"})," \u8868\u4e2d\u7684\u6240\u6709\u6570\u636e\u5bfc\u51fa\u5230 HDFS \u96c6\u7fa4\u7684\u6307\u5b9a\u8def\u5f84\u4e0b\u3002"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'EXPORT TABLE testTbl \nTO "hdfs://<hdfs_host>:<hdfs_port>/a/b/c/" \nWITH BROKER\n(\n    "username"="xxx",\n    "password"="yyy"\n);\n'})}),"\n",(0,l.jsx)(n.h3,{id:"\u5c06\u8868\u4e2d\u90e8\u5206\u5206\u533a\u7684\u6570\u636e\u5bfc\u51fa\u5230-hdfs",children:"\u5c06\u8868\u4e2d\u90e8\u5206\u5206\u533a\u7684\u6570\u636e\u5bfc\u51fa\u5230 HDFS"}),"\n",(0,l.jsxs)(n.p,{children:["\u5c06 ",(0,l.jsx)(n.code,{children:"testTbl"})," \u8868\u4e2d ",(0,l.jsx)(n.code,{children:"p1"})," \u548c ",(0,l.jsx)(n.code,{children:"p2"})," \u5206\u533a\u7684\u6570\u636e\u5bfc\u51fa\u5230 HDFS \u96c6\u7fa4\u7684\u6307\u5b9a\u8def\u5f84\u4e0b\u3002"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'EXPORT TABLE testTbl\nPARTITION (p1,p2) \nTO "hdfs://<hdfs_host>:<hdfs_port>/a/b/c/" \nWITH BROKER\n(\n    "username"="xxx",\n    "password"="yyy"\n);\n'})}),"\n",(0,l.jsx)(n.h3,{id:"\u6307\u5b9a\u5206\u9694\u7b26",children:"\u6307\u5b9a\u5206\u9694\u7b26"}),"\n",(0,l.jsxs)(n.p,{children:["\u5c06 ",(0,l.jsx)(n.code,{children:"testTbl"})," \u8868\u4e2d\u7684\u6240\u6709\u6570\u636e\u5bfc\u51fa\u5230 HDFS \u96c6\u7fa4\u7684\u6307\u5b9a\u8def\u5f84\u4e0b\uff0c\u4ee5 ",(0,l.jsx)(n.code,{children:","})," \u4f5c\u4e3a\u5bfc\u51fa\u6587\u4ef6\u7684\u5217\u5206\u9694\u7b26\u3002"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'EXPORT TABLE testTbl \nTO "hdfs://<hdfs_host>:<hdfs_port>/a/b/c/" \nPROPERTIES\n(\n    "column_separator"=","\n) \nWITH BROKER\n(\n    "username"="xxx",\n    "password"="yyy"\n);\n'})}),"\n",(0,l.jsxs)(n.p,{children:["\u5c06 ",(0,l.jsx)(n.code,{children:"testTbl"})," \u8868\u4e2d\u7684\u6240\u6709\u6570\u636e\u5bfc\u51fa\u5230 HDFS \u96c6\u7fa4\u7684\u6307\u5b9a\u8def\u5f84\u4e0b\uff0c\u4ee5 Hive \u9ed8\u8ba4\u5206\u9694\u7b26 ",(0,l.jsx)(n.code,{children:"\\x01"})," \u4f5c\u4e3a\u5bfc\u51fa\u6587\u4ef6\u7684\u5217\u5206\u9694\u7b26\u3002"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'EXPORT TABLE testTbl \nTO "hdfs://<hdfs_host>:<hdfs_port>/a/b/c/" \nPROPERTIES\n(\n    "column_separator"="\\\\x01"\n) \nWITH BROKER;\n'})}),"\n",(0,l.jsx)(n.h3,{id:"\u6307\u5b9a\u5bfc\u51fa\u6587\u4ef6\u540d\u524d\u7f00",children:"\u6307\u5b9a\u5bfc\u51fa\u6587\u4ef6\u540d\u524d\u7f00"}),"\n",(0,l.jsxs)(n.p,{children:["\u5c06 ",(0,l.jsx)(n.code,{children:"testTbl"})," \u8868\u4e2d\u7684\u6240\u6709\u6570\u636e\u5bfc\u51fa\u5230 HDFS \u96c6\u7fa4\u7684\u6307\u5b9a\u8def\u5f84\u4e0b\uff0c\u4ee5 ",(0,l.jsx)(n.code,{children:"testTbl_"})," \u4f5c\u4e3a\u5bfc\u51fa\u6587\u4ef6\u7684\u6587\u4ef6\u540d\u524d\u7f00\u3002"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'EXPORT TABLE testTbl \nTO "hdfs://<hdfs_host>:<hdfs_port>/a/b/c/testTbl_" \nWITH BROKER;\n'})}),"\n",(0,l.jsx)(n.h3,{id:"\u5bfc\u51fa\u6570\u636e\u5230-alibaba-cloud-oss",children:"\u5bfc\u51fa\u6570\u636e\u5230 Alibaba Cloud OSS"}),"\n",(0,l.jsxs)(n.p,{children:["\u5c06 ",(0,l.jsx)(n.code,{children:"testTbl"})," \u8868\u4e2d\u7684\u6240\u6709\u6570\u636e\u5bfc\u51fa\u5230 Alibaba Cloud OSS \u5b58\u50a8\u6876\u7684\u6307\u5b9a\u8def\u5f84\u4e0b\u3002"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'EXPORT TABLE testTbl \nTO "oss://oss-package/export/"\nWITH BROKER\n(\n    "fs.oss.accessKeyId" = "xxx",\n    "fs.oss.accessKeySecret" = "yyy",\n    "fs.oss.endpoint" = "oss-cn-zhangjiakou-internal.aliyuncs.com"\n);\n'})}),"\n",(0,l.jsx)(n.h3,{id:"\u5bfc\u51fa\u6570\u636e\u5230-tencent-cloud-cos",children:"\u5bfc\u51fa\u6570\u636e\u5230 Tencent Cloud COS"}),"\n",(0,l.jsxs)(n.p,{children:["\u5c06 ",(0,l.jsx)(n.code,{children:"testTbl"})," \u8868\u4e2d\u7684\u6240\u6709\u6570\u636e\u5bfc\u51fa\u5230 Tencent Cloud COS \u5b58\u50a8\u6876\u7684\u6307\u5b9a\u8def\u5f84\u4e0b\u3002"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'EXPORT TABLE testTbl \nTO "cosn://cos-package/export/"\nWITH BROKER\n(\n    "fs.cosn.userinfo.secretId" = "xxx",\n    "fs.cosn.userinfo.secretKey" = "yyy",\n    "fs.cosn.bucket.endpoint_suffix" = "cos.ap-beijing.myqcloud.com"\n);\n'})}),"\n",(0,l.jsx)(n.h3,{id:"\u5bfc\u51fa\u6570\u636e\u5230-aws-s3",children:"\u5bfc\u51fa\u6570\u636e\u5230 AWS S3"}),"\n",(0,l.jsxs)(n.p,{children:["\u5c06 ",(0,l.jsx)(n.code,{children:"testTbl"})," \u8868\u4e2d\u7684\u6240\u6709\u6570\u636e\u5bfc\u51fa\u5230 AWS S3 \u5b58\u50a8\u6876\u7684\u6307\u5b9a\u8def\u5f84\u4e0b\u3002"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'EXPORT TABLE testTbl \nTO "s3a://s3-package/export/"\nWITH BROKER\n(\n    "aws.s3.access_key" = "xxx",\n    "aws.s3.secret_key" = "yyy",\n    "aws.s3.region" = "zzz"\n);\n'})}),"\n",(0,l.jsx)(n.h3,{id:"\u5bfc\u51fa\u6570\u636e\u5230-huawei-cloud-obs-\u4e0a",children:"\u5bfc\u51fa\u6570\u636e\u5230 Huawei Cloud OBS \u4e0a"}),"\n",(0,l.jsxs)(n.p,{children:["\u5c06 ",(0,l.jsx)(n.code,{children:"testTbl"})," \u8868\u4e2d\u7684\u6240\u6709\u6570\u636e\u5bfc\u51fa\u5230 Huawei Cloud OBS \u5b58\u50a8\u6876\u7684\u6307\u5b9a\u8def\u5f84\u4e0b\u3002"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'EXPORT TABLE testTbl \nTO "obs://obs-package/export/"\nWITH BROKER\n(\n    "fs.obs.access.key" = "xxx",\n    "fs.obs.secret.key" = "yyy",\n    "fs.obs.endpoint" = "obs.cn-east-3.myhuaweicloud.com"\n);\n'})}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u8bf4\u660e"})}),"\n",(0,l.jsxs)(n.p,{children:["\u5bfc\u51fa\u6570\u636e\u81f3\u534e\u4e3a\u4e91 OBS \u65f6\uff0c\u9700\u8981\u5148\u4e0b\u8f7d",(0,l.jsx)(n.a,{href:"https://github.com/huaweicloud/obsa-hdfs/releases/download/v45/hadoop-huaweicloud-2.8.3-hw-45.jar",children:"\u4f9d\u8d56\u5e93"}),"\u6dfb\u52a0\u5230 ",(0,l.jsx)(n.strong,{children:"$BROKER_HOME/lib/"})," \u8def\u5f84\u4e2d\u5e76\u91cd\u542f Broker\u3002"]}),"\n"]})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,d.ah)(),e.components);return n?(0,l.jsx)(n,Object.assign({},e,{children:(0,l.jsx)(o,e)})):o(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>i,ah:()=>c});var l=s(67294);const d=l.createContext({});function c(e){const n=l.useContext(d);return l.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const r={};function i({components:e,children:n,disableParentContext:s}){let i;return i=s?"function"==typeof e?e({}):e||r:c(e),l.createElement(d.Provider,{value:i},n)}}}]);