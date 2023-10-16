"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[63582],{36005:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>i,default:()=>o,frontMatter:()=>r,metadata:()=>d,toc:()=>a});var t=n(85893),l=n(11151);const r={displayed_sidebar:"Chinese"},i="INSERT",d={id:"sql-reference/sql-statements/data-manipulation/insert",title:"INSERT",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.1/sql-reference/sql-statements/data-manipulation/insert.md",sourceDirName:"sql-reference/sql-statements/data-manipulation",slug:"/sql-reference/sql-statements/data-manipulation/insert",permalink:"/doc/zh/docs/sql-reference/sql-statements/data-manipulation/insert",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-statements/data-manipulation/insert.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"Chinese"},sidebar:"Chinese",previous:{title:"ALTER ROUTINE LOAD",permalink:"/doc/zh/docs/sql-reference/sql-statements/data-manipulation/alter-routine-load"},next:{title:"DESC",permalink:"/doc/zh/docs/sql-reference/sql-statements/Utility/DESCRIBE"}},c={},a=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u793a\u4f8b\u4e00\uff1a\u5411 test \u8868\u4e2d\u5bfc\u5165\u4e00\u884c\u6570\u636e",id:"\u793a\u4f8b\u4e00\u5411-test-\u8868\u4e2d\u5bfc\u5165\u4e00\u884c\u6570\u636e",level:3},{value:"\u793a\u4f8b\u4e8c\uff1a\u5411 test \u8868\u4e2d\u4e00\u6b21\u6027\u5bfc\u5165\u591a\u884c\u6570\u636e",id:"\u793a\u4f8b\u4e8c\u5411-test-\u8868\u4e2d\u4e00\u6b21\u6027\u5bfc\u5165\u591a\u884c\u6570\u636e",level:3},{value:"\u793a\u4f8b\u4e09\uff1a\u5411 test \u8868\u4e2d\u5bfc\u5165\u4e00\u4e2a\u67e5\u8be2\u8bed\u53e5\u7ed3\u679c",id:"\u793a\u4f8b\u4e09\u5411-test-\u8868\u4e2d\u5bfc\u5165\u4e00\u4e2a\u67e5\u8be2\u8bed\u53e5\u7ed3\u679c",level:3},{value:"\u793a\u4f8b\u56db\uff1a\u5411 test \u8868\u4e2d\u5bfc\u5165\u4e00\u4e2a\u67e5\u8be2\u8bed\u53e5\u7ed3\u679c\uff0c\u5e76\u6307\u5b9a\u5206\u533a\u548c Label",id:"\u793a\u4f8b\u56db\u5411-test-\u8868\u4e2d\u5bfc\u5165\u4e00\u4e2a\u67e5\u8be2\u8bed\u53e5\u7ed3\u679c\u5e76\u6307\u5b9a\u5206\u533a\u548c-label",level:3},{value:"\u793a\u4f8b\u4e94\uff1a\u5411 test \u8868\u4e2d\u8986\u76d6\u5199\u5165\u4e00\u4e2a\u67e5\u8be2\u8bed\u53e5\u7ed3\u679c\uff0c\u5e76\u6307\u5b9a\u5206\u533a\u548c Label",id:"\u793a\u4f8b\u4e94\u5411-test-\u8868\u4e2d\u8986\u76d6\u5199\u5165\u4e00\u4e2a\u67e5\u8be2\u8bed\u53e5\u7ed3\u679c\u5e76\u6307\u5b9a\u5206\u533a\u548c-label",level:3},{value:"\u793a\u4f8b\u516d\uff1a\u4ece AWS S3 \u4e2d\u5bfc\u5165 Parquet \u6570\u636e\u6587\u4ef6",id:"\u793a\u4f8b\u516d\u4ece-aws-s3-\u4e2d\u5bfc\u5165-parquet-\u6570\u636e\u6587\u4ef6",level:3}];function h(e){const s=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",pre:"pre",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",strong:"strong",tbody:"tbody",td:"td",ul:"ul",li:"li",h3:"h3"},(0,l.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"insert",children:"INSERT"}),"\n",(0,t.jsx)(s.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,t.jsxs)(s.p,{children:["\u5411 StarRocks \u8868\u4e2d\u63d2\u5165\u6216\u8986\u76d6\u5199\u5165\u6570\u636e\u3002\u5173\u4e8e\u8be5\u79cd\u5bfc\u5165\u6570\u636e\u65b9\u5f0f\u9002\u7528\u7684\u573a\u666f\u8bf7\u53c2\u8003 ",(0,t.jsx)(s.a,{href:"/doc/zh/docs/loading/InsertInto",children:"INSERT INTO \u5bfc\u5165"}),"\u3002"]}),"\n",(0,t.jsxs)(s.p,{children:["\u60a8\u53ef\u4ee5\u901a\u8fc7 ",(0,t.jsx)(s.a,{href:"/doc/zh/docs/sql-reference/sql-statements/data-manipulation/SUBMIT_TASK",children:"SUBMIT TASK"})," \u521b\u5efa\u5f02\u6b65 INSERT \u4efb\u52a1\u3002"]}),"\n",(0,t.jsx)(s.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-SQL",children:"INSERT { INTO | OVERWRITE } [db_name.]<table_name>\n[ PARTITION (<partition_name> [, ...) ]\n[ TEMPORARY PARTITION (<temporary_partition_name>[, ...) ]\n[ WITH LABEL <label>]\n[ (<column_name>[, ...]) ]\n{ VALUES ( { <expression> | DEFAULT }[, ...] )\n  | <query> }\n"})}),"\n",(0,t.jsx)(s.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:(0,t.jsx)(s.strong,{children:"\u53c2\u6570"})}),(0,t.jsx)(s.th,{children:(0,t.jsx)(s.strong,{children:"\u8bf4\u660e"})})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"INTO"}),(0,t.jsx)(s.td,{children:"\u5c06\u6570\u636e\u8ffd\u52a0\u5199\u5165\u76ee\u6807\u8868\u3002"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"OVERWRITE"}),(0,t.jsx)(s.td,{children:"\u5c06\u6570\u636e\u8986\u76d6\u5199\u5165\u76ee\u6807\u8868\u3002"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"table_name"}),(0,t.jsxs)(s.td,{children:["\u5bfc\u5165\u6570\u636e\u7684\u76ee\u6807\u8868\u3002\u53ef\u4ee5\u4e3a ",(0,t.jsx)(s.code,{children:"db_name.table_name"})," \u5f62\u5f0f\u3002"]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"PARTITION"}),(0,t.jsx)(s.td,{children:"\u5bfc\u5165\u7684\u76ee\u6807\u5206\u533a\u3002\u6b64\u53c2\u6570\u5fc5\u987b\u662f\u76ee\u6807\u8868\u4e2d\u5b58\u5728\u7684\u5206\u533a\uff0c\u591a\u4e2a\u5206\u533a\u540d\u79f0\u7528\u9017\u53f7\uff08,\uff09\u5206\u9694\u3002\u5982\u679c\u6307\u5b9a\u8be5\u53c2\u6570\uff0c\u6570\u636e\u53ea\u4f1a\u88ab\u5bfc\u5165\u76f8\u5e94\u5206\u533a\u5185\u3002\u5982\u679c\u672a\u6307\u5b9a\uff0c\u5219\u9ed8\u8ba4\u5c06\u6570\u636e\u5bfc\u5165\u81f3\u76ee\u6807\u8868\u7684\u6240\u6709\u5206\u533a\u3002"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"TEMPORARY PARTITION"}),(0,t.jsxs)(s.td,{children:["\u6307\u5b9a\u8981\u628a\u6570\u636e\u5bfc\u5165\u54ea\u4e9b",(0,t.jsx)(s.a,{href:"/doc/zh/docs/table_design/Temporary_partition",children:"\u4e34\u65f6\u5206\u533a"}),"\u3002"]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"label"}),(0,t.jsxs)(s.td,{children:["\u5bfc\u5165\u4f5c\u4e1a\u7684\u6807\u8bc6\uff0c\u6570\u636e\u5e93\u5185\u552f\u4e00\u3002\u5982\u679c\u672a\u6307\u5b9a\uff0cStarRocks \u4f1a\u81ea\u52a8\u4e3a\u4f5c\u4e1a\u751f\u6210\u4e00\u4e2a Label\u3002\u5efa\u8bae\u60a8\u6307\u5b9a Label\u3002\u5426\u5219\uff0c\u5982\u679c\u5f53\u524d\u5bfc\u5165\u4f5c\u4e1a\u56e0\u7f51\u7edc\u9519\u8bef\u65e0\u6cd5\u8fd4\u56de\u7ed3\u679c\uff0c\u60a8\u5c06\u65e0\u6cd5\u5f97\u77e5\u8be5\u5bfc\u5165\u64cd\u4f5c\u662f\u5426\u6210\u529f\u3002\u5982\u679c\u6307\u5b9a\u4e86 Label\uff0c\u53ef\u4ee5\u901a\u8fc7 SQL \u547d\u4ee4 ",(0,t.jsx)(s.code,{children:'SHOW LOAD WHERE label="label";'})," \u67e5\u770b\u4efb\u52a1\u7ed3\u679c\u3002\u5173\u4e8e Label \u547d\u540d\u9650\u5236\uff0c\u53c2\u8003",(0,t.jsx)(s.a,{href:"/doc/zh/docs/reference/System_limit",children:"\u7cfb\u7edf\u9650\u5236"}),"\u3002"]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"column_name"}),(0,t.jsx)(s.td,{children:"\u5bfc\u5165\u7684\u76ee\u6807\u5217\uff0c\u5fc5\u987b\u662f\u76ee\u6807\u8868\u4e2d\u5b58\u5728\u7684\u5217\u3002\u8be5\u53c2\u6570\u7684\u5bf9\u5e94\u5173\u7cfb\u4e0e\u5217\u540d\u65e0\u5173\uff0c\u4f46\u4e0e\u5176\u987a\u5e8f\u4e00\u4e00\u5bf9\u5e94\u3002\u5982\u679c\u4e0d\u6307\u5b9a\u76ee\u6807\u5217\uff0c\u9ed8\u8ba4\u4e3a\u76ee\u6807\u8868\u4e2d\u7684\u6240\u6709\u5217\u3002\u5982\u679c\u6e90\u8868\u4e2d\u7684\u67d0\u4e2a\u5217\u5728\u76ee\u6807\u5217\u4e0d\u5b58\u5728\uff0c\u5219\u5199\u5165\u9ed8\u8ba4\u503c\u3002\u5982\u679c\u5f53\u524d\u5217\u6ca1\u6709\u9ed8\u8ba4\u503c\uff0c\u5bfc\u5165\u4f5c\u4e1a\u4f1a\u5931\u8d25\u3002\u5982\u679c\u67e5\u8be2\u8bed\u53e5\u7684\u7ed3\u679c\u5217\u7c7b\u578b\u4e0e\u76ee\u6807\u5217\u7684\u7c7b\u578b\u4e0d\u4e00\u81f4\uff0c\u4f1a\u8fdb\u884c\u9690\u5f0f\u8f6c\u5316\uff0c\u5982\u679c\u4e0d\u80fd\u8fdb\u884c\u8f6c\u5316\uff0c\u90a3\u4e48 INSERT INTO \u8bed\u53e5\u4f1a\u62a5\u8bed\u6cd5\u89e3\u6790\u9519\u8bef\u3002"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"expression"}),(0,t.jsx)(s.td,{children:"\u8868\u8fbe\u5f0f\uff0c\u7528\u4ee5\u4e3a\u5bf9\u5e94\u5217\u8d4b\u503c\u3002"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"DEFAULT"}),(0,t.jsx)(s.td,{children:"\u4e3a\u5bf9\u5e94\u5217\u8d4b\u4e88\u9ed8\u8ba4\u503c\u3002"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"query"}),(0,t.jsx)(s.td,{children:"\u67e5\u8be2\u8bed\u53e5\uff0c\u67e5\u8be2\u7684\u7ed3\u679c\u4f1a\u5bfc\u5165\u81f3\u76ee\u6807\u8868\u4e2d\u3002\u67e5\u8be2\u8bed\u53e5\u652f\u6301\u4efb\u610f StarRocks \u652f\u6301\u7684 SQL \u67e5\u8be2\u8bed\u6cd5\u3002"})]})]})]}),"\n",(0,t.jsx)(s.h2,{id:"\u6ce8\u610f\u4e8b\u9879",children:"\u6ce8\u610f\u4e8b\u9879"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["\u5f53\u524d\u7248\u672c\u4e2d\uff0cStarRocks \u5728\u6267\u884c INSERT \u8bed\u53e5\u65f6\uff0c\u5982\u679c\u6709\u6570\u636e\u4e0d\u7b26\u5408\u76ee\u6807\u8868\u683c\u5f0f\u7684\u6570\u636e\uff08\u4f8b\u5982\u5b57\u7b26\u4e32\u8d85\u957f\u7b49\u60c5\u51b5\uff09\uff0cINSERT \u64cd\u4f5c\u9ed8\u8ba4\u6267\u884c\u5931\u8d25\u3002\u60a8\u53ef\u4ee5\u901a\u8fc7\u8bbe\u7f6e\u4f1a\u8bdd\u53d8\u91cf ",(0,t.jsx)(s.code,{children:"enable_insert_strict"})," \u4e3a ",(0,t.jsx)(s.code,{children:"false"})," \u4ee5\u786e\u4fdd INSERT \u64cd\u4f5c\u8fc7\u6ee4\u4e0d\u7b26\u5408\u76ee\u6807\u8868\u683c\u5f0f\u7684\u6570\u636e\uff0c\u5e76\u7ee7\u7eed\u6267\u884c\u3002"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"\u6267\u884c INSERT OVERWRITE \u8bed\u53e5\u540e\uff0c\u7cfb\u7edf\u5c06\u4e3a\u76ee\u6807\u5206\u533a\u521b\u5efa\u76f8\u5e94\u7684\u4e34\u65f6\u5206\u533a\uff0c\u5e76\u5c06\u6570\u636e\u5199\u5165\u4e34\u65f6\u5206\u533a\uff0c\u6700\u540e\u4f7f\u7528\u4e34\u65f6\u5206\u533a\u539f\u5b50\u66ff\u6362\u76ee\u6807\u5206\u533a\u6765\u5b9e\u73b0\u8986\u76d6\u5199\u5165\u3002\u5176\u6240\u6709\u8fc7\u7a0b\u5747\u5728\u5728 Leader FE \u8282\u70b9\u6267\u884c\u3002\u56e0\u6b64\uff0c\u5982\u679c Leader FE \u8282\u70b9\u5728\u8986\u76d6\u5199\u5165\u8fc7\u7a0b\u4e2d\u53d1\u751f\u5b95\u673a\uff0c\u5c06\u4f1a\u5bfc\u81f4\u8be5\u6b21 INSERT OVERWRITE \u5bfc\u5165\u5931\u8d25\uff0c\u5176\u8fc7\u7a0b\u4e2d\u6240\u521b\u5efa\u7684\u4e34\u65f6\u5206\u533a\u4e5f\u4f1a\u88ab\u5220\u9664\u3002"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,t.jsxs)(s.p,{children:["\u4ee5\u4e0b\u793a\u4f8b\u57fa\u4e8e\u8868 ",(0,t.jsx)(s.code,{children:"test"}),"\uff0c\u5176\u4e2d\u5305\u542b\u4e24\u4e2a\u5217 ",(0,t.jsx)(s.code,{children:"c1"})," \u548c ",(0,t.jsx)(s.code,{children:"c2"}),"\u3002",(0,t.jsx)(s.code,{children:"c2"})," \u5217\u6709\u9ed8\u8ba4\u503c DEFAULT\u3002"]}),"\n",(0,t.jsx)(s.h3,{id:"\u793a\u4f8b\u4e00\u5411-test-\u8868\u4e2d\u5bfc\u5165\u4e00\u884c\u6570\u636e",children:"\u793a\u4f8b\u4e00\uff1a\u5411 test \u8868\u4e2d\u5bfc\u5165\u4e00\u884c\u6570\u636e"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-SQL",children:"INSERT INTO test VALUES (1, 2);\nINSERT INTO test (c1, c2) VALUES (1, 2);\nINSERT INTO test (c1, c2) VALUES (1, DEFAULT);\nINSERT INTO test (c1) VALUES (1);\n"})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"\u5728\u4e0d\u6307\u5b9a\u76ee\u6807\u5217\u65f6\uff0c\u4f7f\u7528\u8868\u4e2d\u7684\u5217\u987a\u5e8f\u6765\u4f5c\u4e3a\u9ed8\u8ba4\u7684\u76ee\u6807\u5217\u5bfc\u5165\u987a\u5e8f\u3002\u56e0\u6b64\u4ee5\u4e0a\u793a\u4f8b\u4e2d\uff0c\u7b2c\u4e00\u6761\u3001\u7b2c\u4e8c\u6761 SQL \u8bed\u53e5\u5bfc\u5165\u6548\u679c\u76f8\u540c\u3002"}),"\n",(0,t.jsx)(s.li,{children:"\u5982\u679c\u6709\u76ee\u6807\u5217\u672a\u63d2\u5165\u6570\u636e\u6216\u4f7f\u7528 DEFAULT \u4f5c\u4e3a\u503c\u63d2\u5165\u6570\u636e\uff0c\u8be5\u5217\u5c06\u4f7f\u7528\u9ed8\u8ba4\u503c\u4f5c\u4e3a\u5bfc\u5165\u6570\u636e\u3002\u56e0\u6b64\u4ee5\u4e0a\u793a\u4f8b\u4e2d\uff0c\u7b2c\u4e09\u6761\u3001\u7b2c\u56db\u6761\u8bed\u53e5\u5bfc\u5165\u6548\u679c\u76f8\u540c\u3002"}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"\u793a\u4f8b\u4e8c\u5411-test-\u8868\u4e2d\u4e00\u6b21\u6027\u5bfc\u5165\u591a\u884c\u6570\u636e",children:"\u793a\u4f8b\u4e8c\uff1a\u5411 test \u8868\u4e2d\u4e00\u6b21\u6027\u5bfc\u5165\u591a\u884c\u6570\u636e"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-SQL",children:"INSERT INTO test VALUES (1, 2), (3, 2 + 2);\nINSERT INTO test (c1, c2) VALUES (1, 2), (3, 2 * 2);\nINSERT INTO test (c1) VALUES (1), (3);\nINSERT INTO test (c1, c2) VALUES (1, DEFAULT), (3, DEFAULT);\n"})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"\u56e0\u8868\u8fbe\u5f0f\u7ed3\u679c\u76f8\u540c\uff0c\u4ee5\u4e0a\u793a\u4f8b\u4e2d\uff0c\u7b2c\u4e00\u6761\u3001\u7b2c\u4e8c\u6761 SQL \u8bed\u53e5\u5bfc\u5165\u6548\u679c\u76f8\u540c\u3002"}),"\n",(0,t.jsx)(s.li,{children:"\u7b2c\u4e09\u6761\u3001\u7b2c\u56db\u6761\u8bed\u53e5\u4f7f\u7528 DEFAULT \u4f5c\u4e3a\u503c\u63d2\u5165\u6570\u636e\uff0c\u56e0\u6b64\u5bfc\u5165\u6548\u679c\u76f8\u540c\u3002"}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"\u793a\u4f8b\u4e09\u5411-test-\u8868\u4e2d\u5bfc\u5165\u4e00\u4e2a\u67e5\u8be2\u8bed\u53e5\u7ed3\u679c",children:"\u793a\u4f8b\u4e09\uff1a\u5411 test \u8868\u4e2d\u5bfc\u5165\u4e00\u4e2a\u67e5\u8be2\u8bed\u53e5\u7ed3\u679c"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-SQL",children:"INSERT INTO test SELECT * FROM test2;\nINSERT INTO test (c1, c2) SELECT * from test2;\n"})}),"\n",(0,t.jsx)(s.h3,{id:"\u793a\u4f8b\u56db\u5411-test-\u8868\u4e2d\u5bfc\u5165\u4e00\u4e2a\u67e5\u8be2\u8bed\u53e5\u7ed3\u679c\u5e76\u6307\u5b9a\u5206\u533a\u548c-label",children:"\u793a\u4f8b\u56db\uff1a\u5411 test \u8868\u4e2d\u5bfc\u5165\u4e00\u4e2a\u67e5\u8be2\u8bed\u53e5\u7ed3\u679c\uff0c\u5e76\u6307\u5b9a\u5206\u533a\u548c Label"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-SQL",children:"INSERT INTO test PARTITION(p1, p2) WITH LABEL `label1` SELECT * FROM test2;\nINSERT INTO test WITH LABEL `label1` (c1, c2) SELECT * from test2;\n"})}),"\n",(0,t.jsx)(s.h3,{id:"\u793a\u4f8b\u4e94\u5411-test-\u8868\u4e2d\u8986\u76d6\u5199\u5165\u4e00\u4e2a\u67e5\u8be2\u8bed\u53e5\u7ed3\u679c\u5e76\u6307\u5b9a\u5206\u533a\u548c-label",children:"\u793a\u4f8b\u4e94\uff1a\u5411 test \u8868\u4e2d\u8986\u76d6\u5199\u5165\u4e00\u4e2a\u67e5\u8be2\u8bed\u53e5\u7ed3\u679c\uff0c\u5e76\u6307\u5b9a\u5206\u533a\u548c Label"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-SQL",children:"INSERT OVERWRITE test PARTITION(p1, p2) WITH LABEL `label1` SELECT * FROM test3;\nINSERT OVERWRITE test WITH LABEL `label1` (c1, c2) SELECT * from test3;\n"})}),"\n",(0,t.jsx)(s.h3,{id:"\u793a\u4f8b\u516d\u4ece-aws-s3-\u4e2d\u5bfc\u5165-parquet-\u6570\u636e\u6587\u4ef6",children:"\u793a\u4f8b\u516d\uff1a\u4ece AWS S3 \u4e2d\u5bfc\u5165 Parquet \u6570\u636e\u6587\u4ef6"}),"\n",(0,t.jsxs)(s.p,{children:["\u4ee5\u4e0b\u793a\u4f8b\u5c06 AWS S3 \u5b58\u50a8\u6876 ",(0,t.jsx)(s.code,{children:"inserttest"})," \u5185 Parquet \u6587\u4ef6 ",(0,t.jsx)(s.strong,{children:"parquet/insert_wiki_edit_append.parquet"})," \u4e2d\u7684\u6570\u636e\u63d2\u5165\u81f3\u8868 ",(0,t.jsx)(s.code,{children:"insert_wiki_edit"})," \u4e2d\uff1a"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-Plain",children:'INSERT INTO insert_wiki_edit\n    SELECT * FROM TABLE(\n        "path" = "s3://inserttest/parquet/insert_wiki_edit_append.parquet",\n        "format" = "parquet",\n        "aws.s3.access_key" = "xxxxxxxxxx",\n        "aws.s3.secret_key" = "yyyyyyyyyy",\n        "aws.s3.region" = "aa-bbbb-c"\n);\n'})})]})}const o=function(e={}){const{wrapper:s}=Object.assign({},(0,l.ah)(),e.components);return s?(0,t.jsx)(s,Object.assign({},e,{children:(0,t.jsx)(h,e)})):h(e)}},11151:(e,s,n)=>{n.d(s,{Zo:()=>d,ah:()=>r});var t=n(67294);const l=t.createContext({});function r(e){const s=t.useContext(l);return t.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const i={};function d({components:e,children:s,disableParentContext:n}){let d;return d=n?"function"==typeof e?e({}):e||i:r(e),t.createElement(l.Provider,{value:d},s)}}}]);