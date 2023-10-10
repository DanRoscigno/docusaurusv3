"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[16937],{40986:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>t,contentTitle:()=>c,default:()=>x,frontMatter:()=>l,metadata:()=>i,toc:()=>a});var r=n(85893),d=n(11151);const l={},c="\u6587\u4ef6\u5916\u90e8\u8868",i={id:"data_source/file_external_table",title:"\u6587\u4ef6\u5916\u90e8\u8868",description:"\u6587\u4ef6\u5916\u90e8\u8868 (File External Table) \u662f\u4e00\u79cd\u7279\u6b8a\u7684\u5916\u90e8\u8868\u3002\u60a8\u53ef\u4ee5\u901a\u8fc7\u6587\u4ef6\u5916\u90e8\u8868\u76f4\u63a5\u67e5\u8be2\u5916\u90e8\u5b58\u50a8\u7cfb\u7edf\u4e0a\u7684 Parquet \u548c ORC \u683c\u5f0f\u7684\u6570\u636e\u6587\u4ef6\uff0c\u65e0\u9700\u5bfc\u5165\u6570\u636e\u3002\u540c\u65f6\uff0c\u6587\u4ef6\u5916\u90e8\u8868\u4e5f\u4e0d\u4f9d\u8d56\u4efb\u4f55 Metastore\u3002StarRocks \u5f53\u524d\u652f\u6301\u7684\u5916\u90e8\u5b58\u50a8\u7cfb\u7edf\u5305\u62ec HDFS\u3001Amazon S3 \u53ca\u5176\u4ed6\u517c\u5bb9 S3 \u534f\u8bae\u7684\u5bf9\u8c61\u5b58\u50a8\u3001\u963f\u91cc\u4e91\u5bf9\u8c61\u5b58\u50a8 OSS \u548c\u817e\u8baf\u4e91\u5bf9\u8c61\u5b58\u50a8 COS\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.0/data_source/file_external_table.md",sourceDirName:"data_source",slug:"/data_source/file_external_table",permalink:"/doc/zh/docs/3.0/data_source/file_external_table",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/data_source/file_external_table.md",tags:[],version:"3.0",frontMatter:{},sidebar:"documentation",previous:{title:"\u6570\u636e\u6e56\u76f8\u5173 FAQ",permalink:"/doc/zh/docs/3.0/data_source/datalake_faq"},next:{title:"\u90e8\u7f72 Broker \u8282\u70b9",permalink:"/doc/zh/docs/3.0/deployment/deploy_broker"}},t={},a=[{value:"\u4f7f\u7528\u9650\u5236",id:"\u4f7f\u7528\u9650\u5236",level:2},{value:"\u524d\u63d0\u6761\u4ef6",id:"\u524d\u63d0\u6761\u4ef6",level:2},{value:"\u521b\u5efa\u6570\u636e\u5e93 \uff08\u53ef\u9009\uff09",id:"\u521b\u5efa\u6570\u636e\u5e93-\u53ef\u9009",level:2},{value:"\u521b\u5efa\u6587\u4ef6\u5916\u90e8\u8868",id:"\u521b\u5efa\u6587\u4ef6\u5916\u90e8\u8868",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:3},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:3},{value:"FileLayoutParams",id:"filelayoutparams",level:4},{value:"<code>StorageCredentialParams</code>\uff08\u53ef\u9009\uff09",id:"storagecredentialparams\u53ef\u9009",level:4},{value:"AWS S3",id:"aws-s3",level:5},{value:"\u517c\u5bb9 S3 \u534f\u8bae\u7684\u5bf9\u8c61\u5b58\u50a8",id:"\u517c\u5bb9-s3-\u534f\u8bae\u7684\u5bf9\u8c61\u5b58\u50a8",level:5},{value:"\u5217\u7c7b\u578b\u6620\u5c04",id:"\u5217\u7c7b\u578b\u6620\u5c04",level:3},{value:"\u521b\u5efa\u793a\u4f8b",id:"\u521b\u5efa\u793a\u4f8b",level:3},{value:"HDFS",id:"hdfs",level:4},{value:"AWS S3",id:"aws-s3-1",level:4},{value:"\u67e5\u8be2\u6587\u4ef6\u5916\u90e8\u8868",id:"\u67e5\u8be2\u6587\u4ef6\u5916\u90e8\u8868",level:2},{value:"\u7ba1\u7406\u6587\u4ef6\u5916\u90e8\u8868",id:"\u7ba1\u7406\u6587\u4ef6\u5916\u90e8\u8868",level:2}];function h(e){const s=Object.assign({h1:"h1",p:"p",h2:"h2",ul:"ul",li:"li",a:"a",strong:"strong",code:"code",pre:"pre",h3:"h3",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",h4:"h4",h5:"h5"},(0,d.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h1,{id:"\u6587\u4ef6\u5916\u90e8\u8868",children:"\u6587\u4ef6\u5916\u90e8\u8868"}),"\n",(0,r.jsx)(s.p,{children:"\u6587\u4ef6\u5916\u90e8\u8868 (File External Table) \u662f\u4e00\u79cd\u7279\u6b8a\u7684\u5916\u90e8\u8868\u3002\u60a8\u53ef\u4ee5\u901a\u8fc7\u6587\u4ef6\u5916\u90e8\u8868\u76f4\u63a5\u67e5\u8be2\u5916\u90e8\u5b58\u50a8\u7cfb\u7edf\u4e0a\u7684 Parquet \u548c ORC \u683c\u5f0f\u7684\u6570\u636e\u6587\u4ef6\uff0c\u65e0\u9700\u5bfc\u5165\u6570\u636e\u3002\u540c\u65f6\uff0c\u6587\u4ef6\u5916\u90e8\u8868\u4e5f\u4e0d\u4f9d\u8d56\u4efb\u4f55 Metastore\u3002StarRocks \u5f53\u524d\u652f\u6301\u7684\u5916\u90e8\u5b58\u50a8\u7cfb\u7edf\u5305\u62ec HDFS\u3001Amazon S3 \u53ca\u5176\u4ed6\u517c\u5bb9 S3 \u534f\u8bae\u7684\u5bf9\u8c61\u5b58\u50a8\u3001\u963f\u91cc\u4e91\u5bf9\u8c61\u5b58\u50a8 OSS \u548c\u817e\u8baf\u4e91\u5bf9\u8c61\u5b58\u50a8 COS\u3002"}),"\n",(0,r.jsx)(s.p,{children:"\u8be5\u7279\u6027\u4ece StarRocks 2.5 \u7248\u672c\u5f00\u59cb\u652f\u6301\u3002"}),"\n",(0,r.jsx)(s.h2,{id:"\u4f7f\u7528\u9650\u5236",children:"\u4f7f\u7528\u9650\u5236"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\u5f53\u524d\u4ec5\u652f\u6301\u5728 ",(0,r.jsx)(s.a,{href:"/doc/zh/docs/3.0/data_source/catalog/default_catalog",children:"default_catalog"})," \u4e0b\u7684\u6570\u636e\u5e93\u5185\u521b\u5efa\u6587\u4ef6\u5916\u90e8\u8868\uff0c\u4e0d\u652f\u6301 external catalog\u3002\u60a8\u53ef\u4ee5\u901a\u8fc7 ",(0,r.jsx)(s.a,{href:"/doc/zh/docs/3.0/sql-reference/sql-statements/data-manipulation/SHOW%20CATALOGS",children:"SHOW CATALOGS"})," \u6765\u67e5\u8be2\u96c6\u7fa4\u4e0b\u7684 catalog\u3002"]}),"\n",(0,r.jsx)(s.li,{children:"\u4ec5\u652f\u6301\u67e5\u8be2 Parquet \u548c ORC \u683c\u5f0f\u7684\u6570\u636e\u6587\u4ef6\u3002"}),"\n",(0,r.jsxs)(s.li,{children:["\u76ee\u524d",(0,r.jsx)(s.strong,{children:"\u4ec5\u652f\u6301\u8bfb\u53d6"}),"\u76ee\u6807\u6570\u636e\u6587\u4ef6\u4e2d\u7684\u6570\u636e\uff0c\u4e0d\u652f\u6301\u4f8b\u5982 INSERT\uff0cDELETE\uff0cDROP \u7b49",(0,r.jsx)(s.strong,{children:"\u5199\u5165"}),"\u64cd\u4f5c\u3002"]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"\u524d\u63d0\u6761\u4ef6",children:"\u524d\u63d0\u6761\u4ef6"}),"\n",(0,r.jsxs)(s.p,{children:["\u521b\u5efa\u6587\u4ef6\u5916\u90e8\u8868\u524d\uff0c\u60a8\u9700\u8981\u5728 StarRocks \u4e2d\u8fdb\u884c\u76f8\u5e94\u914d\u7f6e\uff0c\u4ee5\u4fbf\u96c6\u7fa4\u80fd\u591f\u8bbf\u95ee\u6570\u636e\u6587\u4ef6\u6240\u5728\u7684\u5916\u90e8\u5b58\u50a8\u7cfb\u7edf\u3002\u5177\u4f53\u914d\u7f6e\u6b65\u9aa4\u548c Hive catalog \u76f8\u540c \uff08\u533a\u522b\u5728\u4e8e\u65e0\u9700\u914d\u7f6e Metastore\uff09\u3002\u8be6\u7ec6\u4fe1\u606f\u53c2\u89c1 ",(0,r.jsx)(s.a,{href:"/doc/zh/docs/3.0/data_source/catalog/hive_catalog#%E5%87%86%E5%A4%87%E5%B7%A5%E4%BD%9C",children:"Hive catalog - \u51c6\u5907\u5de5\u4f5c"}),"\u3002"]}),"\n",(0,r.jsx)(s.h2,{id:"\u521b\u5efa\u6570\u636e\u5e93-\u53ef\u9009",children:"\u521b\u5efa\u6570\u636e\u5e93 \uff08\u53ef\u9009\uff09"}),"\n",(0,r.jsxs)(s.p,{children:["\u8fde\u63a5\u5230 StarRocks \u96c6\u7fa4\u540e\uff0c\u60a8\u53ef\u4ee5\u5728\u5f53\u524d\u5df2\u6709\u7684\u6570\u636e\u5e93\u4e0b\u521b\u5efa\u6587\u4ef6\u5916\u90e8\u8868\uff1b\u4e5f\u53ef\u4ee5\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u6570\u636e\u5e93\u6765\u7ba1\u7406\u6587\u4ef6\u5916\u90e8\u8868\u3002\u60a8\u53ef\u4ee5\u4f7f\u7528 ",(0,r.jsx)(s.a,{href:"/doc/zh/docs/3.0/sql-reference/sql-statements/data-manipulation/SHOW%20DATABASES",children:"SHOW DATABASES"})," \u6765\u67e5\u8be2\u96c6\u7fa4\u4e2d\u7684\u6570\u636e\u5e93\uff0c\u7136\u540e\u6267\u884c ",(0,r.jsx)(s.code,{children:"USE <db_name>"})," \u5207\u6362\u5230\u76ee\u6807\u6570\u636e\u5e93\u3002"]}),"\n",(0,r.jsx)(s.p,{children:"\u521b\u5efa\u6570\u636e\u5e93\u7684\u8bed\u6cd5\u5982\u4e0b\u3002"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-SQL",children:"CREATE DATABASE [IF NOT EXISTS] <db_name>\n"})}),"\n",(0,r.jsx)(s.h2,{id:"\u521b\u5efa\u6587\u4ef6\u5916\u90e8\u8868",children:"\u521b\u5efa\u6587\u4ef6\u5916\u90e8\u8868"}),"\n",(0,r.jsx)(s.h3,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,r.jsx)(s.p,{children:"\u5207\u6362\u5230\u76ee\u524d\u6570\u636e\u5e93\u540e\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528\u5982\u4e0b\u8bed\u6cd5\u521b\u5efa\u4e00\u4e2a\u6587\u4ef6\u5916\u90e8\u8868\u3002"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-SQL",children:'CREATE EXTERNAL TABLE <table_name> \n(\n    <col_name> <col_type> [NULL | NOT NULL] [COMMENT "<comment>"]\n) \nENGINE=FILE\nCOMMENT ["comment"]\nPROPERTIES\n(\n    FileLayoutParams,\n    StorageCredentialParams\n)\n'})}),"\n",(0,r.jsx)(s.h3,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"\u53c2\u6570"}),(0,r.jsx)(s.th,{children:"\u5fc5\u9009"}),(0,r.jsx)(s.th,{children:"\u8bf4\u660e"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"table_name"}),(0,r.jsx)(s.td,{children:"\u662f"}),(0,r.jsxs)(s.td,{children:["\u6587\u4ef6\u5916\u90e8\u8868\u540d\u79f0\u3002\u547d\u540d\u8981\u6c42\u5982\u4e0b\uff1a",(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:" \u5fc5\u987b\u7531\u5b57\u6bcd (a-z \u6216 A-Z)\u3001\u6570\u5b57 (0-9) \u6216\u4e0b\u5212\u7ebf (_) \u7ec4\u6210\uff0c\u4e14\u53ea\u80fd\u4ee5\u5b57\u6bcd\u5f00\u5934\u3002"}),(0,r.jsx)("li",{children:" \u603b\u957f\u5ea6\u4e0d\u80fd\u8d85\u8fc7 64 \u4e2a\u5b57\u7b26\u3002"})]})]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"col_name"}),(0,r.jsx)(s.td,{children:"\u662f"}),(0,r.jsx)(s.td,{children:"\u6587\u4ef6\u5916\u90e8\u8868\u7684\u5217\u540d\u3002\u5217\u540d\u5927\u5c0f\u5199\u4e0d\u654f\u611f\uff0c\u9700\u548c\u6570\u636e\u6587\u4ef6\u4e2d\u7684\u4fdd\u6301\u4e00\u81f4\uff0c\u5217\u7684\u987a\u5e8f\u65e0\u9700\u4fdd\u6301\u4e00\u81f4\u3002"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"col_type"}),(0,r.jsx)(s.td,{children:"\u662f"}),(0,r.jsxs)(s.td,{children:["\u6587\u4ef6\u5916\u90e8\u8868\u7684\u5217\u7c7b\u578b\uff0c\u9700\u8981\u6839\u636e",(0,r.jsx)(s.a,{href:"#%E5%88%97%E7%B1%BB%E5%9E%8B%E6%98%A0%E5%B0%84",children:"\u5217\u7c7b\u578b\u6620\u5c04"}),"\u6765\u586b\u5199\u3002"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"NULL | NOT NULL"}),(0,r.jsx)(s.td,{children:"\u5426"}),(0,r.jsxs)(s.td,{children:["\u6587\u4ef6\u5916\u90e8\u8868\u4e2d\u7684\u5217\u662f\u5426\u5141\u8bb8\u4e3a NULL\u3002",(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:" NULL: \u5141\u8bb8\u4e3a NULL\u3002"}),(0,r.jsx)("li",{children:" NOT NULL: \u4e0d\u5141\u8bb8\u4e3a NULL\u3002"})]})," \u60a8\u9700\u8981\u6309\u7167\u5982\u4e0b\u89c4\u5219\u6307\u5b9a\u8be5\u53c2\u6570\uff1a",(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:" \u5982\u6570\u636e\u6587\u4ef6\u4e2d\u7684\u5217\u6ca1\u6709\u6307\u5b9a\u8be5\u53c2\u6570\uff0c\u5219\u6587\u4ef6\u5916\u90e8\u8868\u4e2d\u7684\u5217\u53ef\u4ee5\u4e0d\u6307\u5b9a\u6216\u6307\u5b9a\u4e3a NULL\u3002"}),(0,r.jsx)("li",{children:" \u5982\u6570\u636e\u6587\u4ef6\u4e2d\u7684\u5217\u6307\u5b9a\u4e3a NULL\uff0c\u5219\u6587\u4ef6\u5916\u90e8\u8868\u4e2d\u7684\u5217\u53ef\u4ee5\u4e0d\u6307\u5b9a\u6216\u6307\u5b9a\u4e3a NULL\u3002"}),(0,r.jsx)("li",{children:" \u5982\u6570\u636e\u6587\u4ef6\u4e2d\u7684\u5217\u6307\u5b9a\u4e3a NOT NULL\uff0c\u5219\u6587\u4ef6\u5916\u90e8\u8868\u5217\u5fc5\u987b\u6307\u5b9a\u4e3a NOT NULL\u3002"})]})]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"comment"}),(0,r.jsx)(s.td,{children:"\u5426"}),(0,r.jsx)(s.td,{children:"\u6587\u4ef6\u5916\u90e8\u8868\u7684\u5217\u5907\u6ce8\u3002"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"ENGINE"}),(0,r.jsx)(s.td,{children:"\u662f"}),(0,r.jsx)(s.td,{children:"ENGINE \u7c7b\u578b\uff0c\u53d6\u503c\u4e3a file\u3002"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"comment"}),(0,r.jsx)(s.td,{children:"\u5426"}),(0,r.jsx)(s.td,{children:"\u6587\u4ef6\u5916\u90e8\u8868\u7684\u5907\u6ce8\u4fe1\u606f\u3002"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"PROPERTIES"}),(0,r.jsx)(s.td,{children:"\u662f"}),(0,r.jsxs)(s.td,{children:["\u8868\u5c5e\u6027\u3002 ",(0,r.jsxs)("ul",{children:[(0,r.jsxs)("li",{children:[" ",(0,r.jsx)(s.code,{children:"FileLayoutParams"}),": \u7528\u4e8e\u6307\u5b9a\u6570\u636e\u6587\u4ef6\u7684\u8def\u5f84\u548c\u683c\u5f0f\uff0c\u5fc5\u586b\u3002"]}),(0,r.jsxs)("li",{children:[" ",(0,r.jsx)(s.code,{children:"StorageCredentialParams"}),": \u7528\u4e8e\u914d\u7f6e\u8bbf\u95ee\u5916\u90e8\u5b58\u50a8\u7cfb\u7edf\u65f6\u6240\u9700\u7684\u8ba4\u8bc1\u53c2\u6570\u3002\u4ec5\u5f53\u5916\u90e8\u5b58\u50a8\u7cfb\u7edf\u4e3a AWS S3 \u6216\u5176\u4ed6\u517c\u5bb9 S3 \u534f\u8bae\u7684\u5bf9\u8c61\u5b58\u50a8\u65f6\u9700\u8981\u586b\u5199\u3002"]})]})]})]})]})]}),"\n",(0,r.jsx)(s.h4,{id:"filelayoutparams",children:"FileLayoutParams"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-SQL",children:'"path" = "<file_path>",\n"format" = "<file_format>"\n"enable_recursive_listing" = "{ true | false }"\n'})}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"\u53c2\u6570"}),(0,r.jsx)(s.th,{children:"\u662f\u5426\u5fc5\u9009"}),(0,r.jsx)(s.th,{children:"\u8bf4\u660e"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"path"}),(0,r.jsx)(s.td,{children:"\u662f"}),(0,r.jsxs)(s.td,{children:["\u6570\u636e\u6587\u4ef6\u6240\u5728\u7684\u8def\u5f84\u3002",(0,r.jsxs)("ul",{children:[(0,r.jsxs)("li",{children:[" \u82e5\u6587\u4ef6\u5728 HDFS \u4e0a\uff0c\u5219\u8def\u5f84\u683c\u5f0f\u4e3a ",(0,r.jsx)(s.code,{children:"hdfs://<HDFS\u7684IP\u5730\u5740>:<\u7aef\u53e3\u53f7>/<\u8def\u5f84>\u3002"}),"\u5176\u4e2d\u7aef\u53e3\u53f7\u9ed8\u8ba4\u4e3a 8020\uff0c\u5982\u4f7f\u7528\u9ed8\u8ba4\u7aef\u53e3\u53f7\u53ef\u5ffd\u7565\u4e0d\u5728\u8def\u5f84\u4e2d\u6307\u5b9a\u3002"]}),(0,r.jsxs)("li",{children:[" \u82e5\u6587\u4ef6\u5728 Amazon S3 \u6216\u5176\u4ed6\u517c\u5bb9 S3 \u534f\u8bae\u7684\u5bf9\u8c61\u5b58\u50a8\u4e0a\uff0c\u5219\u8def\u5f84\u683c\u5f0f\u4e3a ",(0,r.jsx)(s.code,{children:"s3://<bucket\u540d\u79f0>/<folder>/"}),"\u3002"]})]})," \u586b\u5199\u8def\u5f84\u65f6\uff0c\u9700\u6ce8\u610f\u4ee5\u4e0b\u4e24\u70b9\uff1a ",(0,r.jsxs)("ul",{children:[(0,r.jsxs)("li",{children:[" \u5982\u679c\u8981\u904d\u5386\u8def\u5f84\u4e0b\u6240\u6709\u6587\u4ef6\uff0c\u5219\u8bbe\u7f6e\u8def\u5f84\u4ee5 '/' \u7ed3\u5c3e\uff0c\u4f8b\u5982 ",(0,r.jsx)(s.code,{children:"hdfs://x.x.x.x/user/hive/warehouse/array2d_parq/data/"}),"\u3002\u67e5\u8be2\u65f6\uff0cStarRocks \u4f1a\u904d\u5386\u8be5\u8def\u5f84\u4e0b\u6240\u6709\u6587\u4ef6\uff0c\u4f46\u4e0d\u505a\u9012\u5f52\u904d\u5386\u3002"]}),(0,r.jsxs)("li",{children:[" \u5982\u679c\u4ec5\u9700\u67e5\u8be2\u8def\u5f84\u4e0b\u5355\u4e2a\u6587\u4ef6\uff0c\u5219\u8bbe\u7f6e\u8def\u5f84\u76f4\u63a5\u6307\u5411\u6587\u4ef6\u540d\uff0c\u4f8b\u5982 ",(0,r.jsx)(s.code,{children:"hdfs://x.x.x.x/user/hive/warehouse/array2d_parq/data"}),"\u3002\u67e5\u8be2\u65f6\uff0cStarRocks \u4f1a\u76f4\u63a5\u626b\u63cf\u8be5\u6587\u4ef6\u3002"]})]})]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"format"}),(0,r.jsx)(s.td,{children:"\u662f"}),(0,r.jsx)(s.td,{children:"\u6570\u636e\u6587\u4ef6\u683c\u5f0f\uff0c\u76ee\u524d\u4ec5\u652f\u6301\u8bbe\u7f6e\u4e3a parquet \u548c orc\u3002"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"enable_recursive_listing"}),(0,r.jsx)(s.td,{children:"\u5426"}),(0,r.jsx)(s.td,{children:"\u662f\u5426\u9012\u5f52\u67e5\u8be2\u8def\u5f84\u4e0b\u6240\u6709\u6587\u4ef6\u3002\u9ed8\u8ba4\u503c\uff1afalse\u3002"})]})]})]}),"\n",(0,r.jsxs)(s.h4,{id:"storagecredentialparams\u53ef\u9009",children:[(0,r.jsx)(s.code,{children:"StorageCredentialParams"}),"\uff08\u53ef\u9009\uff09"]}),"\n",(0,r.jsx)(s.p,{children:"\u7528\u4e8e\u914d\u7f6e\u8bbf\u95ee\u5916\u90e8\u5bf9\u8c61\u5b58\u50a8\u65f6\u6240\u9700\u7684\u8ba4\u8bc1\u53c2\u6570\u3002"}),"\n",(0,r.jsx)(s.p,{children:"\u4ec5\u5f53\u6570\u636e\u6587\u4ef6\u5b58\u50a8\u5728 AWS S3 \u6216\u5176\u4ed6\u517c\u5bb9 S3 \u534f\u8bae\u7684\u5bf9\u8c61\u5b58\u50a8\u65f6\u624d\u9700\u8981\u586b\u5199\u3002"}),"\n",(0,r.jsxs)(s.p,{children:["\u5982\u679c\u662f\u5176\u4ed6\u7684\u6587\u4ef6\u5b58\u50a8\uff0c\u5219\u53ef\u4ee5\u5ffd\u7565 ",(0,r.jsx)(s.code,{children:"StorageCredentialParams"}),"\u3002"]}),"\n",(0,r.jsx)(s.h5,{id:"aws-s3",children:"AWS S3"}),"\n",(0,r.jsxs)(s.p,{children:["\u5982\u679c\u6570\u636e\u6587\u4ef6\u5b58\u50a8\u5728 AWS S3 \u4e0a\uff0c\u9700\u8981\u5728 ",(0,r.jsx)(s.code,{children:"StorageCredentialParams"})," \u4e2d\u914d\u7f6e\u5982\u4e0b\u8ba4\u8bc1\u53c2\u6570\uff1a"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"\u5982\u679c\u57fa\u4e8e Instance Profile \u8fdb\u884c\u8ba4\u8bc1\u548c\u9274\u6743"}),"\n"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-SQL",children:'"aws.s3.use_instance_profile" = "true",\n"aws.s3.region" = "<aws_s3_region>"\n'})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"\u5982\u679c\u57fa\u4e8e Assumed Role \u8fdb\u884c\u8ba4\u8bc1\u548c\u9274\u6743"}),"\n"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-SQL",children:'"aws.s3.use_instance_profile" = "true",\n"aws.s3.iam_role_arn" = "<iam_role_arn>",\n"aws.s3.region" = "<aws_s3_region>"\n'})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"\u5982\u679c\u57fa\u4e8e IAM User \u8fdb\u884c\u8ba4\u8bc1\u548c\u9274\u6743"}),"\n"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-SQL",children:'"aws.s3.use_instance_profile" = "false",\n"aws.s3.access_key" = "<iam_user_access_key>",\n"aws.s3.secret_key" = "<iam_user_secret_key>",\n"aws.s3.region" = "<aws_s3_region>"\n'})}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"\u53c2\u6570"}),(0,r.jsx)(s.th,{children:"\u662f\u5426\u5fc5\u987b"}),(0,r.jsx)(s.th,{children:"\u8bf4\u660e"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"aws.s3.use_instance_profile"}),(0,r.jsx)(s.td,{children:"\u662f"}),(0,r.jsxs)(s.td,{children:["\u662f\u5426\u5f00\u542f Instance Profile \u548c Assumed Role \u4e24\u79cd\u9274\u6743\u65b9\u5f0f\u3002",(0,r.jsx)("br",{}),"\u53d6\u503c\u8303\u56f4\uff1a",(0,r.jsx)(s.code,{children:"true"})," \u548c ",(0,r.jsx)(s.code,{children:"false"}),"\u3002\u9ed8\u8ba4\u503c\uff1a",(0,r.jsx)(s.code,{children:"false"}),"\u3002"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"aws.s3.iam_role_arn"}),(0,r.jsx)(s.td,{children:"\u5426"}),(0,r.jsxs)(s.td,{children:["\u6709\u6743\u9650\u8bbf\u95ee AWS S3 Bucket \u7684 IAM Role \u7684 ARN\u3002",(0,r.jsx)("br",{}),"\u91c7\u7528 Assumed Role \u9274\u6743\u65b9\u5f0f\u8bbf\u95ee AWS S3 \u65f6\uff0c\u5fc5\u987b\u6307\u5b9a\u6b64\u53c2\u6570\u3002 StarRocks \u5728\u8bbf\u95ee\u76ee\u6807\u6570\u636e\u6587\u4ef6\u65f6\uff0c\u4f1a\u91c7\u7528\u6b64 IAM Role\u3002"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"aws.s3.region"}),(0,r.jsx)(s.td,{children:"\u662f"}),(0,r.jsx)(s.td,{children:"AWS S3 Bucket \u6240\u5728\u7684\u5730\u57df\u3002\u793a\u4f8b\uff1aus-west-1\u3002"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"aws.s3.access_key"}),(0,r.jsx)(s.td,{children:"\u5426"}),(0,r.jsxs)(s.td,{children:["IAM User \u7684 Access Key\u3002",(0,r.jsx)("br",{}),"\u91c7\u7528 IAM User \u9274\u6743\u65b9\u5f0f\u8bbf\u95ee AWS S3 \u65f6\uff0c\u5fc5\u987b\u6307\u5b9a\u6b64\u53c2\u6570\u3002"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"aws.s3.secret_key"}),(0,r.jsx)(s.td,{children:"\u5426"}),(0,r.jsxs)(s.td,{children:["IAM User \u7684 Secret Key\u3002",(0,r.jsx)("br",{}),"\u91c7\u7528 IAM User \u9274\u6743\u65b9\u5f0f\u8bbf\u95ee AWS S3 \u65f6\uff0c\u5fc5\u987b\u6307\u5b9a\u6b64\u53c2\u6570\u3002"]})]})]})]}),"\n",(0,r.jsxs)(s.p,{children:["\u6709\u5173\u5982\u4f55\u9009\u62e9\u7528\u4e8e\u8bbf\u95ee AWS S3 \u7684\u9274\u6743\u65b9\u5f0f\u3001\u4ee5\u53ca\u5982\u4f55\u5728 AWS IAM \u63a7\u5236\u53f0\u914d\u7f6e\u8bbf\u95ee\u63a7\u5236\u7b56\u7565\uff0c\u53c2\u89c1",(0,r.jsx)(s.a,{href:"/doc/zh/docs/3.0/integrations/authenticate_to_aws_resources#%E8%AE%BF%E9%97%AE-aws-s3-%E7%9A%84%E8%AE%A4%E8%AF%81%E5%8F%82%E6%95%B0",children:"\u8bbf\u95ee AWS S3 \u7684\u8ba4\u8bc1\u53c2\u6570"}),"\u3002"]}),"\n",(0,r.jsx)(s.h5,{id:"\u517c\u5bb9-s3-\u534f\u8bae\u7684\u5bf9\u8c61\u5b58\u50a8",children:"\u517c\u5bb9 S3 \u534f\u8bae\u7684\u5bf9\u8c61\u5b58\u50a8"}),"\n",(0,r.jsxs)(s.p,{children:["\u5982\u679c\u6570\u636e\u6587\u4ef6\u5b58\u50a8\u5728\u517c\u5bb9 S3 \u534f\u8bae\u7684\u5bf9\u8c61\u5b58\u50a8\u4e0a\uff08\u5982 MinIO\uff09\uff0c\u9700\u8981\u5728 ",(0,r.jsx)(s.code,{children:"StorageCredentialParams"})," \u4e2d\u914d\u7f6e\u5982\u4e0b\u8ba4\u8bc1\u53c2\u6570\uff1a"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-SQL",children:'"aws.s3.enable_ssl" = "{ true | false }",\n"aws.s3.enable_path_style_access" = "{ true | false }",\n"aws.s3.endpoint" = "<s3_endpoint>",\n"aws.s3.access_key" = "<iam_user_access_key>",\n"aws.s3.secret_key" = "<iam_user_secret_key>"\n'})}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"\u53c2\u6570"}),(0,r.jsx)(s.th,{children:"\u662f\u5426\u5fc5\u987b"}),(0,r.jsx)(s.th,{children:"\u8bf4\u660e"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"aws.s3.enable_ssl"}),(0,r.jsx)(s.td,{children:"\u662f"}),(0,r.jsxs)(s.td,{children:["\u662f\u5426\u5f00\u542f SSL \u8fde\u63a5\u3002",(0,r.jsx)("br",{}),"\u53d6\u503c\u8303\u56f4\uff1a",(0,r.jsx)(s.code,{children:"true"})," \u548c ",(0,r.jsx)(s.code,{children:"false"}),"\u3002 \u9ed8\u8ba4\u503c\uff1a",(0,r.jsx)(s.code,{children:"true"}),"\u3002"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"aws.s3.enable_path_style_access"}),(0,r.jsx)(s.td,{children:"\u662f"}),(0,r.jsxs)(s.td,{children:["\u662f\u5426\u5f00\u542f\u8def\u5f84\u7c7b\u578b\u8bbf\u95ee (Path-Style Access)\u3002",(0,r.jsx)("br",{}),"\u53d6\u503c\u8303\u56f4\uff1a",(0,r.jsx)(s.code,{children:"true"})," \u548c ",(0,r.jsx)(s.code,{children:"false"}),"\u3002\u9ed8\u8ba4\u503c\uff1a",(0,r.jsx)(s.code,{children:"false"}),"\u3002\u5bf9\u4e8e MinIO\uff0c\u5fc5\u987b\u8bbe\u7f6e\u4e3a ",(0,r.jsx)(s.code,{children:"true"}),"\u3002",(0,r.jsx)("br",{}),"\u8def\u5f84\u7c7b\u578b URL \u4f7f\u7528\u5982\u4e0b\u683c\u5f0f\uff1a",(0,r.jsx)(s.code,{children:"https://s3.<region_code>.amazonaws.com/<bucket_name>/<key_name>"}),"\u3002\u4f8b\u5982\uff0c\u5982\u679c\u60a8\u5728\u7f8e\u56fd\u897f\u90e8\uff08\u4fc4\u52d2\u5188\uff09\u533a\u57df\u4e2d\u521b\u5efa\u4e00\u4e2a\u540d\u4e3a ",(0,r.jsx)(s.code,{children:"DOC-EXAMPLE-BUCKET1"})," \u7684\u5b58\u50a8\u6876\uff0c\u5e76\u5e0c\u671b\u8bbf\u95ee\u8be5\u5b58\u50a8\u6876\u4e2d\u7684 ",(0,r.jsx)(s.code,{children:"alice.jpg"})," \u5bf9\u8c61\uff0c\u5219\u53ef\u4f7f\u7528\u4ee5\u4e0b\u8def\u5f84\u7c7b\u578b URL\uff1a",(0,r.jsx)(s.code,{children:"https://s3.us-west-2.amazonaws.com/DOC-EXAMPLE-BUCKET1/alice.jpg"}),"\u3002"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"aws.s3.endpoint"}),(0,r.jsx)(s.td,{children:"\u662f"}),(0,r.jsx)(s.td,{children:"\u7528\u4e8e\u8bbf\u95ee\u517c\u5bb9 S3 \u534f\u8bae\u7684\u5bf9\u8c61\u5b58\u50a8\u7684 Endpoint\u3002"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"aws.s3.access_key"}),(0,r.jsx)(s.td,{children:"\u662f"}),(0,r.jsx)(s.td,{children:"IAM User \u7684 Access Key\u3002"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"aws.s3.secret_key"}),(0,r.jsx)(s.td,{children:"\u662f"}),(0,r.jsx)(s.td,{children:"IAM User \u7684 Secret Key\u3002"})]})]})]}),"\n",(0,r.jsx)(s.h3,{id:"\u5217\u7c7b\u578b\u6620\u5c04",children:"\u5217\u7c7b\u578b\u6620\u5c04"}),"\n",(0,r.jsx)(s.p,{children:"\u521b\u5efa\u6587\u4ef6\u5916\u90e8\u8868\u65f6\uff0c\u9700\u6839\u636e\u6570\u636e\u6587\u4ef6\u7684\u5217\u7c7b\u578b\u6307\u5b9a\u6587\u4ef6\u5916\u90e8\u8868\u7684\u5217\u7c7b\u578b\uff0c\u5177\u4f53\u6620\u5c04\u5173\u7cfb\u5982\u4e0b\u3002"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"\u6570\u636e\u6587\u4ef6"}),(0,r.jsx)(s.th,{children:"\u6587\u4ef6\u5916\u90e8\u8868"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"INT"}),(0,r.jsx)(s.td,{children:"INT"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"BIGINT"}),(0,r.jsx)(s.td,{children:"BIGINT"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"TIMESTAMP"}),(0,r.jsxs)(s.td,{children:["DATETIME ",(0,r.jsx)("br",{}),"\u6ce8\u610f\uff1aTIMESTAMP \u8f6c\u6210 DATETIME \u4f1a\u635f\u5931\u7cbe\u5ea6\uff0c\u5e76\u6839\u636e\u5f53\u524d\u4f1a\u8bdd\u8bbe\u7f6e\u7684\u65f6\u533a\u8f6c\u6210\u65e0\u65f6\u533a\u7684 DATETIME\u3002"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"STRING"}),(0,r.jsx)(s.td,{children:"STRING"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"VARCHAR"}),(0,r.jsx)(s.td,{children:"VARCHAR"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"CHAR"}),(0,r.jsx)(s.td,{children:"CHAR"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"DOUBLE"}),(0,r.jsx)(s.td,{children:"DOUBLE"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"FLOAT"}),(0,r.jsx)(s.td,{children:"FLOAT"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"DECIMAL"}),(0,r.jsx)(s.td,{children:"DECIMAL"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"BOOLEAN"}),(0,r.jsx)(s.td,{children:"BOOLEAN"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"ARRAY"}),(0,r.jsx)(s.td,{children:"ARRAY"})]})]})]}),"\n",(0,r.jsx)(s.h3,{id:"\u521b\u5efa\u793a\u4f8b",children:"\u521b\u5efa\u793a\u4f8b"}),"\n",(0,r.jsx)(s.h4,{id:"hdfs",children:"HDFS"}),"\n",(0,r.jsxs)(s.p,{children:["\u521b\u5efa\u6587\u4ef6\u5916\u90e8\u8868 ",(0,r.jsx)(s.code,{children:"t0"}),"\uff0c\u7528\u4e8e\u8bbf\u95ee\u5b58\u50a8\u5728 HDFS \u4e0a\u7684 Parquet \u6570\u636e\u6587\u4ef6\u3002"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-SQL",children:'USE db_example;\nCREATE EXTERNAL TABLE t0\n(\n    name string, \n    id int\n) \nENGINE=file\nPROPERTIES \n(\n    "path"="hdfs://x.x.x.x:8020/user/hive/warehouse/person_parq/", \n    "format"="parquet"\n);\n'})}),"\n",(0,r.jsx)(s.h4,{id:"aws-s3-1",children:"AWS S3"}),"\n",(0,r.jsxs)(s.p,{children:["\u793a\u4f8b 1\uff1a\u521b\u5efa\u6587\u4ef6\u5916\u90e8\u8868 ",(0,r.jsx)(s.code,{children:"table_1"}),"\uff0c\u7528\u4e8e\u8bbf\u95ee\u5b58\u50a8\u5728 AWS S3 \u4e0a\u7684",(0,r.jsx)(s.strong,{children:"\u5355\u4e2a Parquet"})," \u6570\u636e\u6587\u4ef6\uff0c\u57fa\u4e8e Instance Profile \u8fdb\u884c\u9274\u6743\u548c\u8ba4\u8bc1\u3002"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-SQL",children:'USE db_example;\nCREATE EXTERNAL TABLE table_1\n(\n    name string, \n    id int\n) \nENGINE=file\nPROPERTIES \n(\n    "path" = "s3://bucket-test/folder1/raw_0.parquet", \n    "format" = "parquet",\n    "aws.s3.use_instance_profile" = "true",\n    "aws.s3.region" = "us-west-2" \n);\n'})}),"\n",(0,r.jsxs)(s.p,{children:["\u793a\u4f8b 2\uff1a\u521b\u5efa\u6587\u4ef6\u5916\u90e8\u8868 ",(0,r.jsx)(s.code,{children:"table_1"}),"\uff0c\u7528\u4e8e\u8bbf\u95ee\u5b58\u50a8\u5728 AWS S3 \u4e0a\u67d0\u4e2a\u8def\u5f84\u4e0b\u7684",(0,r.jsx)(s.strong,{children:"\u6240\u6709 ORC \u6570\u636e\u6587\u4ef6"}),"\uff0c\u57fa\u4e8e Assumed Role \u8fdb\u884c\u9274\u6743\u548c\u8ba4\u8bc1\u3002"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-SQL",children:'USE db_example;\nCREATE EXTERNAL TABLE table_1\n(\n    name string, \n    id int\n) \nENGINE=file\nPROPERTIES \n(\n    "path" = "s3://bucket-test/folder1/", \n    "format" = "orc",\n    "aws.s3.use_instance_profile" = "true",\n    "aws.s3.iam_role_arn" = "arn:aws:iam::51234343412:role/role_name_in_aws_iam",\n    "aws.s3.region" = "us-west-2" \n);\n'})}),"\n",(0,r.jsxs)(s.p,{children:["\u793a\u4f8b 3\uff1a\u521b\u5efa\u6587\u4ef6\u5916\u90e8\u8868 ",(0,r.jsx)(s.code,{children:"table_1"}),"\uff0c\u7528\u4e8e\u8bbf\u95ee\u5b58\u50a8\u5728 AWS S3 \u4e0a\u67d0\u4e2a\u8def\u5f84\u4e0b\u7684",(0,r.jsx)(s.strong,{children:"\u6240\u6709 ORC \u6570\u636e\u6587\u4ef6"}),"\uff0c\u57fa\u4e8e IAM User \u8fdb\u884c\u9274\u6743\u548c\u8ba4\u8bc1\u3002"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-SQL",children:'USE db_example;\nCREATE EXTERNAL TABLE table_1\n(\n    name string, \n    id int\n) \nENGINE=file\nPROPERTIES \n(\n    "path" = "s3://bucket-test/folder1/", \n    "format" = "orc",\n    "aws.s3.use_instance_profile" = "false",\n    "aws.s3.access_key" = "<iam_user_access_key>",\n    "aws.s3.secret_key" = "<iam_user_access_key>",\n    "aws.s3.region" = "us-west-2" \n);\n'})}),"\n",(0,r.jsx)(s.h2,{id:"\u67e5\u8be2\u6587\u4ef6\u5916\u90e8\u8868",children:"\u67e5\u8be2\u6587\u4ef6\u5916\u90e8\u8868"}),"\n",(0,r.jsx)(s.p,{children:"\u8bed\u6cd5\uff1a"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-sql",children:"SELECT <clause> FROM <file_external_table>\n"})}),"\n",(0,r.jsxs)(s.p,{children:["\u4f8b\u5982\uff0c\u8981\u67e5\u8be2 HDFS \u793a\u4f8b\u4e2d\u7684\u6587\u4ef6\u5916\u90e8\u8868 ",(0,r.jsx)(s.code,{children:"t0"}),"\uff0c\u53ef\u6267\u884c\u5982\u4e0b\u547d\u4ee4\uff1a"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-plain",children:"SELECT * FROM t0;\n\n+--------+------+\n| name   | id   |\n+--------+------+\n| jack |    2 |\n| lily   |    1 |\n+--------+------+\n2 rows in set (0.08 sec)\n"})}),"\n",(0,r.jsx)(s.h2,{id:"\u7ba1\u7406\u6587\u4ef6\u5916\u90e8\u8868",children:"\u7ba1\u7406\u6587\u4ef6\u5916\u90e8\u8868"}),"\n",(0,r.jsxs)(s.p,{children:["\u60a8\u53ef\u4ee5\u6267\u884c ",(0,r.jsx)(s.a,{href:"/doc/zh/docs/3.0/sql-reference/sql-statements/Utility/DESCRIBE",children:"DESC"})," \u6765\u67e5\u8be2\u6587\u4ef6\u5916\u90e8\u8868\u7684\u4fe1\u606f\u548c\u8868\u7ed3\u6784\uff0c\u6216\u8005\u901a\u8fc7 ",(0,r.jsx)(s.a,{href:"/doc/zh/docs/3.0/sql-reference/sql-statements/data-definition/DROP%20TABLE",children:"DROP TABLE"})," \u6765\u5220\u9664\u6587\u4ef6\u5916\u90e8\u8868\u3002"]})]})}const x=function(e={}){const{wrapper:s}=Object.assign({},(0,d.ah)(),e.components);return s?(0,r.jsx)(s,Object.assign({},e,{children:(0,r.jsx)(h,e)})):h(e)}},11151:(e,s,n)=>{n.d(s,{Zo:()=>i,ah:()=>l});var r=n(67294);const d=r.createContext({});function l(e){const s=r.useContext(d);return r.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const c={};function i({components:e,children:s,disableParentContext:n}){let i;return i=n?"function"==typeof e?e({}):e||c:l(e),r.createElement(d.Provider,{value:i},s)}}}]);