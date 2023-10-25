"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[58547],{45248:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>i,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var a=n(85893),s=n(11151);const r={displayed_sidebar:"Chinese"},l="STREAM LOAD",o={id:"sql-reference/sql-statements/data-manipulation/STREAM_LOAD",title:"STREAM LOAD",description:"description",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.1/sql-reference/sql-statements/data-manipulation/STREAM_LOAD.md",sourceDirName:"sql-reference/sql-statements/data-manipulation",slug:"/sql-reference/sql-statements/data-manipulation/STREAM_LOAD",permalink:"/zh/docs/2.1/sql-reference/sql-statements/data-manipulation/STREAM_LOAD",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-statements/data-manipulation/STREAM_LOAD.md",tags:[],version:"2.1",frontMatter:{displayed_sidebar:"Chinese"},sidebar:"Chinese",previous:{title:"STOP ROUTINE LOAD",permalink:"/zh/docs/2.1/sql-reference/sql-statements/data-manipulation/STOP_ROUTINE_LOAD"},next:{title:"ALTER ROUTINE LOAD",permalink:"/zh/docs/2.1/sql-reference/sql-statements/data-manipulation/alter-routine-load"}},i={},c=[{value:"description",id:"description",level:2},{value:"example",id:"example",level:2},{value:"keyword",id:"keyword",level:2}];function d(t){const e=Object.assign({h1:"h1",h2:"h2",pre:"pre",code:"code",p:"p",ol:"ol",li:"li"},(0,s.ah)(),t.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h1,{id:"stream-load",children:"STREAM LOAD"}),"\n",(0,a.jsx)(e.h2,{id:"description",children:"description"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-plain",metastring:"text",children:'NAME:\nstream-load: load data to table in streaming\n\nSYNOPSIS\ncurl --location-trusted -u user:passwd [-H ""...] -T data.file -XPUT \\\n    http://fe_host:http_port/api/{db}/{table}/_stream_load\n\nDESCRIPTION\n\u8be5\u8bed\u53e5\u7528\u4e8e\u5411\u6307\u5b9a\u7684 table \u5bfc\u5165\u6570\u636e\uff0c\u4e0e\u666e\u901aLoad\u533a\u522b\u662f\uff0c\u8fd9\u79cd\u5bfc\u5165\u65b9\u5f0f\u662f\u540c\u6b65\u5bfc\u5165\u3002\n\u8fd9\u79cd\u5bfc\u5165\u65b9\u5f0f\u4ecd\u7136\u80fd\u591f\u4fdd\u8bc1\u4e00\u6279\u5bfc\u5165\u4efb\u52a1\u7684\u539f\u5b50\u6027\uff0c\u8981\u4e48\u5168\u90e8\u6570\u636e\u5bfc\u5165\u6210\u529f\uff0c\u8981\u4e48\u5168\u90e8\u5931\u8d25\u3002\n\u8be5\u64cd\u4f5c\u4f1a\u540c\u65f6\u66f4\u65b0\u548c\u6b64 base table \u76f8\u5173\u7684 rollup table \u7684\u6570\u636e\u3002\n\u8fd9\u662f\u4e00\u4e2a\u540c\u6b65\u64cd\u4f5c\uff0c\u6574\u4e2a\u6570\u636e\u5bfc\u5165\u5de5\u4f5c\u5b8c\u6210\u540e\u8fd4\u56de\u7ed9\u7528\u6237\u5bfc\u5165\u7ed3\u679c\u3002\n\u5f53\u524d\u652f\u6301HTTP chunked\u4e0e\u975echunked\u4e0a\u4f20\u4e24\u79cd\u65b9\u5f0f\uff0c\u5bf9\u4e8e\u975echunked\u65b9\u5f0f\uff0c\u5fc5\u987b\u8981\u6709Content-Length\u6765\u6807\u793a\u4e0a\u4f20\u5185\u5bb9\u957f\u5ea6\uff0c\u8fd9\u6837\u80fd\u591f\u4fdd\u8bc1\u6570\u636e\u7684\u5b8c\u6574\u6027\u3002\n\u53e6\u5916\uff0c\u7528\u6237\u6700\u597d\u8bbe\u7f6eExpect Header\u5b57\u6bb5\u5185\u5bb9100-continue\uff0c\u8fd9\u6837\u53ef\u4ee5\u5728\u67d0\u4e9b\u51fa\u9519\u573a\u666f\u4e0b\u907f\u514d\u4e0d\u5fc5\u8981\u7684\u6570\u636e\u4f20\u8f93\u3002\n'})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-plain",metastring:"text",children:'OPTIONS\n\u7528\u6237\u53ef\u4ee5\u901a\u8fc7HTTP\u7684Header\u90e8\u5206\u6765\u4f20\u5165\u5bfc\u5165\u53c2\u6570\n\nlabel: \u4e00\u6b21\u5bfc\u5165\u7684\u6807\u7b7e\uff0c\u76f8\u540c\u6807\u7b7e\u7684\u6570\u636e\u65e0\u6cd5\u591a\u6b21\u5bfc\u5165\u3002\u7528\u6237\u53ef\u4ee5\u901a\u8fc7\u6307\u5b9aLabel\u7684\u65b9\u5f0f\u6765\u907f\u514d\u4e00\u4efd\u6570\u636e\u91cd\u590d\u5bfc\u5165\u7684\u95ee\u9898\u3002\n\u5f53\u524dStarRocks\u5185\u90e8\u4fdd\u755930\u5206\u949f\u5185\u6700\u8fd1\u6210\u529f\u7684label\u3002\n\ncolumn_separator\uff1a\u7528\u4e8e\u6307\u5b9a\u5bfc\u5165\u6587\u4ef6\u4e2d\u7684\u5217\u5206\u9694\u7b26\uff0c\u9ed8\u8ba4\u4e3a\\t\u3002\u5982\u679c\u662f\u4e0d\u53ef\u89c1\u5b57\u7b26\uff0c\u5219\u9700\u8981\u52a0\\x\u4f5c\u4e3a\u524d\u7f00\uff0c\u4f7f\u7528\u5341\u516d\u8fdb\u5236\u6765\u8868\u793a\u5206\u9694\u7b26\u3002\n\u5982hive\u6587\u4ef6\u7684\u5206\u9694\u7b26\\x01\uff0c\u9700\u8981\u6307\u5b9a\u4e3a-H "column_separator:\\x01"\n\ncolumns\uff1a\u7528\u4e8e\u6307\u5b9a\u5bfc\u5165\u6587\u4ef6\u4e2d\u7684\u5217\u548c table \u4e2d\u7684\u5217\u7684\u5bf9\u5e94\u5173\u7cfb\u3002\u5982\u679c\u6e90\u6587\u4ef6\u4e2d\u7684\u5217\u6b63\u597d\u5bf9\u5e94\u8868\u4e2d\u7684\u5185\u5bb9\uff0c\u90a3\u4e48\u662f\u4e0d\u9700\u8981\u6307\u5b9a\u8fd9\u4e2a\u5b57\u6bb5\u7684\u5185\u5bb9\u7684\u3002\n\u5982\u679c\u6e90\u6587\u4ef6\u4e0e\u8868schema\u4e0d\u5bf9\u5e94\uff0c\u90a3\u4e48\u9700\u8981\u8fd9\u4e2a\u5b57\u6bb5\u8fdb\u884c\u4e00\u4e9b\u6570\u636e\u8f6c\u6362\u3002\u8fd9\u91cc\u6709\u4e24\u79cd\u5f62\u5f0fcolumn\uff0c\u4e00\u79cd\u662f\u76f4\u63a5\u5bf9\u5e94\u5bfc\u5165\u6587\u4ef6\u4e2d\u7684\u5b57\u6bb5\uff0c\u76f4\u63a5\u4f7f\u7528\u5b57\u6bb5\u540d\u8868\u793a\uff1b\n\u4e00\u79cd\u662f\u884d\u751f\u5217\uff0c\u8bed\u6cd5\u4e3a `column_name` = expression\u3002\u4e3e\u51e0\u4e2a\u4f8b\u5b50\u5e2e\u52a9\u7406\u89e3\u3002\n\u4f8b1: \u8868\u4e2d\u67093\u4e2a\u5217\u201cc1, c2, c3\u201d\uff0c\u6e90\u6587\u4ef6\u4e2d\u7684\u4e09\u4e2a\u5217\u4e00\u6b21\u5bf9\u5e94\u7684\u662f"c3,c2,c1"; \u90a3\u4e48\u9700\u8981\u6307\u5b9a-H "columns: c3, c2, c1"\n\u4f8b2: \u8868\u4e2d\u67093\u4e2a\u5217\u201cc1, c2, c3", \u6e90\u6587\u4ef6\u4e2d\u524d\u4e09\u5217\u4f9d\u6b21\u5bf9\u5e94\uff0c\u4f46\u662f\u6709\u591a\u4f591\u5217\uff1b\u90a3\u4e48\u9700\u8981\u6307\u5b9a-H "columns: c1, c2, c3, xxx";\n\u6700\u540e\u4e00\u4e2a\u5217\u968f\u610f\u6307\u5b9a\u4e2a\u540d\u79f0\u5360\u4f4d\u5373\u53ef\n\u4f8b3: \u8868\u4e2d\u67093\u4e2a\u5217\u201cyear, month, day"\u4e09\u4e2a\u5217\uff0c\u6e90\u6587\u4ef6\u4e2d\u53ea\u6709\u4e00\u4e2a\u65f6\u95f4\u5217\uff0c\u4e3a\u201d2018-06-01 01:02:03\u201c\u683c\u5f0f\uff1b\n\u90a3\u4e48\u53ef\u4ee5\u6307\u5b9a-H "columns: col, year = year(col), month=month(col), day=day(col)"\u5b8c\u6210\u5bfc\u5165\n\nwhere: \u7528\u4e8e\u62bd\u53d6\u90e8\u5206\u6570\u636e\u3002\u7528\u6237\u5982\u679c\u6709\u9700\u8981\u5c06\u4e0d\u9700\u8981\u7684\u6570\u636e\u8fc7\u6ee4\u6389\uff0c\u90a3\u4e48\u53ef\u4ee5\u901a\u8fc7\u8bbe\u5b9a\u8fd9\u4e2a\u9009\u9879\u6765\u8fbe\u5230\u3002\n\u4f8b1: \u53ea\u5bfc\u5165\u5927\u4e8ek1\u5217\u7b49\u4e8e20180601\u7684\u6570\u636e\uff0c\u90a3\u4e48\u53ef\u4ee5\u5728\u5bfc\u5165\u65f6\u5019\u6307\u5b9a-H "where: k1 = 20180601"\n\nmax_filter_ratio\uff1a\u6700\u5927\u5bb9\u5fcd\u53ef\u8fc7\u6ee4\uff08\u6570\u636e\u4e0d\u89c4\u8303\u7b49\u539f\u56e0\uff09\u7684\u6570\u636e\u6bd4\u4f8b\u3002\u9ed8\u8ba4\u96f6\u5bb9\u5fcd\u3002\u6570\u636e\u4e0d\u89c4\u8303\u4e0d\u5305\u62ec\u901a\u8fc7 where \u6761\u4ef6\u8fc7\u6ee4\u6389\u7684\u884c\u3002\n\npartitions: \u7528\u4e8e\u6307\u5b9a\u8fd9\u6b21\u5bfc\u5165\u6240\u8bbe\u8ba1\u7684partition\u3002\u5982\u679c\u7528\u6237\u80fd\u591f\u786e\u5b9a\u6570\u636e\u5bf9\u5e94\u7684partition\uff0c\u63a8\u8350\u6307\u5b9a\u8be5\u9879\u3002\u4e0d\u6ee1\u8db3\u8fd9\u4e9b\u5206\u533a\u7684\u6570\u636e\u5c06\u88ab\u8fc7\u6ee4\u6389\u3002\n\u6bd4\u5982\u6307\u5b9a\u5bfc\u5165\u5230p1, p2\u5206\u533a\uff0c-H "partitions: p1, p2"\n\ntimeout: \u6307\u5b9a\u5bfc\u5165\u7684\u8d85\u65f6\u65f6\u95f4\u3002\u5355\u4f4d\u79d2\u3002\u9ed8\u8ba4\u662f 600 \u79d2\u3002\u53ef\u8bbe\u7f6e\u8303\u56f4\u4e3a 1 \u79d2 ~ 259200 \u79d2\u3002\n\nstrict_mode: \u7528\u6237\u6307\u5b9a\u6b64\u6b21\u5bfc\u5165\u662f\u5426\u5f00\u542f\u4e25\u683c\u6a21\u5f0f\uff0c\u9ed8\u8ba4\u4e3a\u5173\u95ed\u3002\u5f00\u542f\u65b9\u5f0f\u4e3a -H "strict_mode: true"\u3002\n\ntimezone: \u6307\u5b9a\u672c\u6b21\u5bfc\u5165\u6240\u4f7f\u7528\u7684\u65f6\u533a\u3002\u9ed8\u8ba4\u4e3a\u4e1c\u516b\u533a\u3002\u8be5\u53c2\u6570\u4f1a\u5f71\u54cd\u6240\u6709\u5bfc\u5165\u6d89\u53ca\u7684\u548c\u65f6\u533a\u6709\u5173\u7684\u51fd\u6570\u7ed3\u679c\u3002\n\nexec_mem_limit: \u5bfc\u5165\u5185\u5b58\u9650\u5236\u3002\u9ed8\u8ba4\u4e3a 2GB\u3002\u5355\u4f4d\u4e3a\u5b57\u8282\u3002\n\nformat: \u6307\u5b9a\u5bfc\u5165\u6570\u636e\u683c\u5f0f\uff0c\u9ed8\u8ba4\u662fcsv\uff0c\u652f\u6301json\u683c\u5f0f\u3002\n'})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-PLAIN",metastring:"TEXT",children:'jsonpaths: \u5bfc\u5165json\u65b9\u5f0f\u5206\u4e3a\uff1a\u7b80\u5355\u6a21\u5f0f\u548c\u7cbe\u51c6\u6a21\u5f0f\u3002\n\u7b80\u5355\u6a21\u5f0f\uff1a\u6ca1\u6709\u8bbe\u7f6ejsonpaths\u53c2\u6570\u5373\u4e3a\u7b80\u5355\u6a21\u5f0f\uff0c\u8fd9\u79cd\u6a21\u5f0f\u4e0b\u8981\u6c42json\u6570\u636e\u662f\u5bf9\u8c61\u7c7b\u578b\uff0c\u4f8b\u5982\uff1a\n{"k1":1, "k2":2, "k3":"hello"}\uff0c\u5176\u4e2dk1\uff0ck2\uff0ck3\u662f\u5217\u540d\u5b57\u3002\n\n\u5339\u914d\u6a21\u5f0f\uff1a\u7528\u4e8ejson\u6570\u636e\u76f8\u5bf9\u590d\u6742\uff0c\u9700\u8981\u901a\u8fc7jsonpaths\u53c2\u6570\u5339\u914d\u5bf9\u5e94\u7684value\u3002\n\nstrip_outer_array: \u5e03\u5c14\u7c7b\u578b\uff0c\u4e3atrue\u8868\u793ajson\u6570\u636e\u4ee5\u6570\u7ec4\u5bf9\u8c61\u5f00\u59cb\u4e14\u5c06\u6570\u7ec4\u5bf9\u8c61\u4e2d\u8fdb\u884c\u5c55\u5e73\uff0c\u9ed8\u8ba4\u503c\u662ffalse\u3002\u4f8b\u5982\uff1a\n[\n{"k1" : 1, "v1" : 2},\n{"k1" : 3, "v1" : 4}\n]\n\u5f53strip_outer_array\u4e3atrue\uff0c\u6700\u540e\u5bfc\u5165\u5230starrocks\u4e2d\u4f1a\u751f\u6210\u4e24\u884c\u6570\u636e\u3002\n\njson_root: json_root\u4e3a\u5408\u6cd5\u7684jsonpath\u5b57\u7b26\u4e32\uff0c\u7528\u4e8e\u6307\u5b9ajson document\u7684\u6839\u8282\u70b9\uff0c\u9ed8\u8ba4\u503c\u4e3a""\u3002\n\nRETURN VALUES\n\u5bfc\u5165\u5b8c\u6210\u540e\uff0c\u4f1a\u4ee5Json\u683c\u5f0f\u8fd4\u56de\u8fd9\u6b21\u5bfc\u5165\u7684\u76f8\u5173\u5185\u5bb9\u3002\u5f53\u524d\u5305\u62ec\u4e00\u4e0b\u5b57\u6bb5\nStatus: \u5bfc\u5165\u6700\u540e\u7684\u72b6\u6001\u3002\nSuccess\uff1a\u8868\u793a\u5bfc\u5165\u6210\u529f\uff0c\u6570\u636e\u5df2\u7ecf\u53ef\u89c1\uff1b\nPublish Timeout\uff1a\u8868\u8ff0\u5bfc\u5165\u4f5c\u4e1a\u5df2\u7ecf\u6210\u529fCommit\uff0c\u4f46\u662f\u7531\u4e8e\u67d0\u79cd\u539f\u56e0\u5e76\u4e0d\u80fd\u7acb\u5373\u53ef\u89c1\u3002\u7528\u6237\u53ef\u4ee5\u89c6\u4f5c\u5df2\u7ecf\u6210\u529f\u4e0d\u5fc5\u91cd\u8bd5\u5bfc\u5165\nLabel Already Exists: \u8868\u660e\u8be5Label\u5df2\u7ecf\u88ab\u5176\u4ed6\u4f5c\u4e1a\u5360\u7528\uff0c\u53ef\u80fd\u662f\u5bfc\u5165\u6210\u529f\uff0c\u4e5f\u53ef\u80fd\u662f\u6b63\u5728\u5bfc\u5165\u3002\n\u7528\u6237\u9700\u8981\u901a\u8fc7get label state\u547d\u4ee4\u6765\u786e\u5b9a\u540e\u7eed\u7684\u64cd\u4f5c\n\u5176\u4ed6\uff1a\u6b64\u6b21\u5bfc\u5165\u5931\u8d25\uff0c\u7528\u6237\u53ef\u4ee5\u6307\u5b9aLabel\u91cd\u8bd5\u6b64\u6b21\u4f5c\u4e1a\nMessage: \u5bfc\u5165\u72b6\u6001\u8be6\u7ec6\u7684\u8bf4\u660e\u3002\u5931\u8d25\u65f6\u4f1a\u8fd4\u56de\u5177\u4f53\u7684\u5931\u8d25\u539f\u56e0\u3002\nNumberTotalRows: \u4ece\u6570\u636e\u6d41\u4e2d\u8bfb\u53d6\u5230\u7684\u603b\u884c\u6570\nNumberLoadedRows: \u6b64\u6b21\u5bfc\u5165\u7684\u6570\u636e\u884c\u6570\uff0c\u53ea\u6709\u5728Success\u65f6\u6709\u6548\nNumberFilteredRows: \u6b64\u6b21\u5bfc\u5165\u8fc7\u6ee4\u6389\u7684\u884c\u6570\uff0c\u5373\u6570\u636e\u8d28\u91cf\u4e0d\u5408\u683c\u7684\u884c\u6570\nNumberUnselectedRows: \u6b64\u6b21\u5bfc\u5165\uff0c\u901a\u8fc7 where \u6761\u4ef6\u88ab\u8fc7\u6ee4\u6389\u7684\u884c\u6570\nLoadBytes: \u6b64\u6b21\u5bfc\u5165\u7684\u6e90\u6587\u4ef6\u6570\u636e\u91cf\u5927\u5c0f\nLoadTimeMs: \u6b64\u6b21\u5bfc\u5165\u6240\u7528\u7684\u65f6\u95f4\nErrorURL: \u88ab\u8fc7\u6ee4\u6570\u636e\u7684\u5177\u4f53\u5185\u5bb9\uff0c\u4ec5\u4fdd\u7559\u524d1000\u6761\n'})}),"\n",(0,a.jsx)(e.p,{children:"ERRORS\n\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u8bed\u53e5\u67e5\u770b\u5bfc\u5165\u9519\u8bef\u8be6\u7ec6\u4fe1\u606f\uff1a"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-SQL",children:"SHOW LOAD WARNINGS ON 'url'\n"})}),"\n",(0,a.jsx)(e.p,{children:"\u5176\u4e2d url \u4e3a ErrorURL \u7ed9\u51fa\u7684 url\u3002"}),"\n",(0,a.jsx)(e.h2,{id:"example",children:"example"}),"\n",(0,a.jsxs)(e.ol,{children:["\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:"\u5c06\u672c\u5730\u6587\u4ef6'testData'\u4e2d\u7684\u6570\u636e\u5bfc\u5165\u5230\u6570\u636e\u5e93'testDb'\u4e2d'testTbl'\u7684\u8868\uff0c\u4f7f\u7528Label\u7528\u4e8e\u53bb\u91cd\u3002\u6307\u5b9a\u8d85\u65f6\u65f6\u95f4\u4e3a 100 \u79d2"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-bash",children:'curl --location-trusted -u root -H "label:123" -H "timeout:100" -T testData \\\n    http://host:port/api/testDb/testTbl/_stream_load\n'})}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:"\u5c06\u672c\u5730\u6587\u4ef6'testData'\u4e2d\u7684\u6570\u636e\u5bfc\u5165\u5230\u6570\u636e\u5e93'testDb'\u4e2d'testTbl'\u7684\u8868\uff0c\u4f7f\u7528Label\u7528\u4e8e\u53bb\u91cd, \u5e76\u4e14\u53ea\u5bfc\u5165k1\u7b49\u4e8e20180601\u7684\u6570\u636e"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-bash",children:'curl --location-trusted -u root -H "label:123" -H "where: k1=20180601" -T testData \\\n    http://host:port/api/testDb/testTbl/_stream_load\n'})}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:"\u5c06\u672c\u5730\u6587\u4ef6'testData'\u4e2d\u7684\u6570\u636e\u5bfc\u5165\u5230\u6570\u636e\u5e93'testDb'\u4e2d'testTbl'\u7684\u8868, \u5141\u8bb820%\u7684\u9519\u8bef\u7387\uff08\u7528\u6237\u662fdefalut_cluster\u4e2d\u7684\uff09"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-bash",children:'curl --location-trusted -u root -H "label:123" -H "max_filter_ratio:0.2" -T testData \\\n    http://host:port/api/testDb/testTbl/_stream_load\n'})}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:"\u5c06\u672c\u5730\u6587\u4ef6'testData'\u4e2d\u7684\u6570\u636e\u5bfc\u5165\u5230\u6570\u636e\u5e93'testDb'\u4e2d'testTbl'\u7684\u8868, \u5141\u8bb820%\u7684\u9519\u8bef\u7387\uff0c\u5e76\u4e14\u6307\u5b9a\u6587\u4ef6\u7684\u5217\u540d\uff08\u7528\u6237\u662fdefalut_cluster\u4e2d\u7684\uff09"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-bash",children:'curl --location-trusted -u root  -H "label:123" -H "max_filter_ratio:0.2" \\\n    -H "columns: k2, k1, v1" -T testData \\\n    http://host:port/api/testDb/testTbl/_stream_load\n'})}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:"\u5c06\u672c\u5730\u6587\u4ef6'testData'\u4e2d\u7684\u6570\u636e\u5bfc\u5165\u5230\u6570\u636e\u5e93'testDb'\u4e2d'testTbl'\u7684\u8868\u4e2d\u7684p1, p2\u5206\u533a, \u5141\u8bb820%\u7684\u9519\u8bef\u7387\u3002"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-bash",children:'curl --location-trusted -u root  -H "label:123" -H "max_filter_ratio:0.2" \\\n    -H "partitions: p1, p2" -T testData \\\n    http://host:port/api/testDb/testTbl/_stream_load\n'})}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:"\u4f7f\u7528streaming\u65b9\u5f0f\u5bfc\u5165\uff08\u7528\u6237\u662fdefalut_cluster\u4e2d\u7684\uff09"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-sql",children:"seq 1 10 | awk '{OFS=\"\\t\"}{print $1, $1 * 10}' | curl --location-trusted -u root -T - \\\n http://host:port/api/testDb/testTbl/_stream_load\n"})}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:"\u5bfc\u5165\u542b\u6709HLL\u5217\u7684\u8868\uff0c\u53ef\u4ee5\u662f\u8868\u4e2d\u7684\u5217\u6216\u8005\u6570\u636e\u4e2d\u7684\u5217\u7528\u4e8e\u751f\u6210HLL\u5217\uff0c\u4e5f\u53ef\u4f7f\u7528hll_empty\u8865\u5145\u6570\u636e\u4e2d\u6ca1\u6709\u7684\u5217"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-bash",children:'curl --location-trusted -u root \\\n    -H "columns: k1, k2, v1=hll_hash(k1), v2=hll_empty()" -T testData \\\n    http://host:port/api/testDb/testTbl/_stream_load\n'})}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:"\u5bfc\u5165\u6570\u636e\u8fdb\u884c\u4e25\u683c\u6a21\u5f0f\u8fc7\u6ee4\uff0c\u5e76\u8bbe\u7f6e\u65f6\u533a\u4e3a Africa/Abidjan"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-bash",children:'curl --location-trusted -u root -H "strict_mode: true" \\\n    -H "timezone: Africa/Abidjan" -T testData \\\n    http://host:port/api/testDb/testTbl/_stream_load\n'})}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:"\u5bfc\u5165\u542b\u6709BITMAP\u5217\u7684\u8868\uff0c\u53ef\u4ee5\u662f\u8868\u4e2d\u7684\u5217\u6216\u8005\u6570\u636e\u4e2d\u7684\u5217\u7528\u4e8e\u751f\u6210BITMAP\u5217\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528bitmap_empty\u586b\u5145\u7a7a\u7684Bitmap"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-bash",children:'curl --location-trusted -u root \\\n    -H "columns: k1, k2, v1=to_bitmap(k1), v2=bitmap_empty()" -T testData \\\n    http://host:port/api/testDb/testTbl/_stream_load\n'})}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:"\u7b80\u5355\u6a21\u5f0f\uff0c\u5bfc\u5165json\u6570\u636e"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-plain",metastring:"text",children:'\u8868\u7ed3\u6784\uff1a\n`category` varchar(512) NULL COMMENT "",\n`author` varchar(512) NULL COMMENT "",\n`title` varchar(512) NULL COMMENT "",\n`price` double NULL COMMENT ""\njson\u6570\u636e\u683c\u5f0f\uff1a\n{"category":"C++","author":"avc","title":"C++ primer","price":895}\n\u5bfc\u5165\u547d\u4ee4\uff1a\ncurl --location-trusted -u root  -H "label:123" -H "format: json" -T testData \\\n    http://host:port/api/testDb/testTbl/_stream_load\n\u4e3a\u4e86\u63d0\u5347\u541e\u5410\u91cf\uff0c\u652f\u6301\u4e00\u6b21\u6027\u5bfc\u5165\u6761\u6570\u636e\uff0cjson\u6570\u636e\u683c\u5f0f\u5982\u4e0b\uff1a\n[\n{"category":"C++","author":"avc","title":"C++ primer","price":89.5},\n{"category":"Java","author":"avc","title":"Effective Java","price":95},\n{"category":"Linux","author":"avc","title":"Linux kernel","price":195}\n]\n'})}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:"\u5339\u914d\u6a21\u5f0f\uff0c\u5bfc\u5165json\u6570\u636e"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-plain",metastring:"text",children:'json\u6570\u636e\u683c\u5f0f\uff1a\n[\n{"category":"xuxb111","author":"1avc","title":"SayingsoftheCentury","price":895},\n{"category":"xuxb222","author":"2avc","title":"SayingsoftheCentury","price":895},\n{"category":"xuxb333","author":"3avc","title":"SayingsoftheCentury","price":895}\n]\n\u901a\u8fc7\u6307\u5b9ajsonpath\u8fdb\u884c\u7cbe\u51c6\u5bfc\u5165\uff0c\u4f8b\u5982\u53ea\u5bfc\u5165category\u3001author\u3001price\u4e09\u4e2a\u5c5e\u6027\ncurl --location-trusted -u root \\\n    -H "columns: category, price, author" -H "label:123" -H "format: json" -H "jsonpaths: [\\"$.category\\",\\"$.price\\",\\"$.author\\"]" -H "strip_outer_array: true" -T testData \\\n    http://host:port/api/testDb/testTbl/_stream_load\n'})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-plain",metastring:"text",children:"\u8bf4\u660e\uff1a\n1\uff09\u5982\u679cjson\u6570\u636e\u662f\u4ee5\u6570\u7ec4\u5f00\u59cb\uff0c\u5e76\u4e14\u6570\u7ec4\u4e2d\u6bcf\u4e2a\u5bf9\u8c61\u662f\u4e00\u6761\u8bb0\u5f55\uff0c\u5219\u9700\u8981\u5c06strip_outer_array\u8bbe\u7f6e\u6210true\uff0c\u8868\u793a\u5c55\u5e73\u6570\u7ec4\u3002\n2\uff09\u5982\u679cjson\u6570\u636e\u662f\u4ee5\u6570\u7ec4\u5f00\u59cb\uff0c\u5e76\u4e14\u6570\u7ec4\u4e2d\u6bcf\u4e2a\u5bf9\u8c61\u662f\u4e00\u6761\u8bb0\u5f55\uff0c\u5728\u8bbe\u7f6ejsonpath\u65f6\uff0c\u6211\u4eec\u7684ROOT\u8282\u70b9\u5b9e\u9645\u4e0a\u662f\u6570\u7ec4\u4e2d\u5bf9\u8c61\u3002\n"})}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:"\u7528\u6237\u6307\u5b9ajson\u6839\u8282\u70b9"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-plain",metastring:"text",children:'json\u6570\u636e\u683c\u5f0f:\n{\n"RECORDS":[\n{"category":"11","title":"SayingsoftheCentury","price":895,"timestamp":1589191587},\n{"category":"22","author":"2avc","price":895,"timestamp":1589191487},\n{"category":"33","author":"3avc","title":"SayingsoftheCentury","timestamp":1589191387}\n]\n}\n\u901a\u8fc7\u6307\u5b9ajsonpath\u8fdb\u884c\u7cbe\u51c6\u5bfc\u5165\uff0c\u4f8b\u5982\u53ea\u5bfc\u5165category\u3001author\u3001price\u4e09\u4e2a\u5c5e\u6027\ncurl --location-trusted -u root \\\n    -H "columns: category, price, author" -H "label:123" -H "format: json" -H "jsonpaths: [\\"$.category\\",\\"$.price\\",\\"$.author\\"]" -H "strip_outer_array: true" -H "json_root: $.RECORDS" -T testData \\\n    http://host:port/api/testDb/testTbl/_stream_load\n'})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(e.h2,{id:"keyword",children:"keyword"}),"\n",(0,a.jsx)(e.p,{children:"STREAM,LOAD"})]})}const h=function(t={}){const{wrapper:e}=Object.assign({},(0,s.ah)(),t.components);return e?(0,a.jsx)(e,Object.assign({},t,{children:(0,a.jsx)(d,t)})):d(t)}},11151:(t,e,n)=>{n.d(e,{Zo:()=>o,ah:()=>r});var a=n(67294);const s=a.createContext({});function r(t){const e=a.useContext(s);return a.useMemo((()=>"function"==typeof t?t(e):{...e,...t}),[e,t])}const l={};function o({components:t,children:e,disableParentContext:n}){let o;return o=n?"function"==typeof t?t({}):t||l:r(t),a.createElement(s.Provider,{value:o},e)}}}]);