"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[69956],{58382:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>i,contentTitle:()=>d,default:()=>j,frontMatter:()=>t,metadata:()=>l,toc:()=>a});var r=s(85893),c=s(11151);const t={displayed_sidebar:"Chinese"},d="JSON",l={id:"sql-reference/sql-statements/data-types/JSON",title:"JSON",description:"\u81ea 2.2.0 \u7248\u672c\u8d77\uff0cStarRocks \u652f\u6301 JSON\u3002\u672c\u6587\u4ecb\u7ecd JSON \u7684\u57fa\u672c\u6982\u5ff5\uff0c\u4ee5\u53ca StarRocks \u5982\u4f55\u521b\u5efa JSON \u7c7b\u578b\u7684\u5217\u3001\u5bfc\u5165\u548c\u67e5\u8be2 JSON \u6570\u636e\uff0c\u901a\u8fc7 JSON \u51fd\u6570\u53ca\u8fd0\u7b97\u7b26\u6784\u9020\u548c\u5904\u7406 JSON \u6570\u636e\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.5/sql-reference/sql-statements/data-types/JSON.md",sourceDirName:"sql-reference/sql-statements/data-types",slug:"/sql-reference/sql-statements/data-types/JSON",permalink:"/doc/zh/docs/2.5/sql-reference/sql-statements/data-types/JSON",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-statements/data-types/JSON.md",tags:[],version:"2.5",frontMatter:{displayed_sidebar:"Chinese"},sidebar:"Chinese",previous:{title:"INT",permalink:"/doc/zh/docs/2.5/sql-reference/sql-statements/data-types/INT"},next:{title:"LARGEINT",permalink:"/doc/zh/docs/2.5/sql-reference/sql-statements/data-types/LARGEINT"}},i={},a=[{value:"\u4ec0\u4e48\u662f JSON",id:"\u4ec0\u4e48\u662f-json",level:2},{value:"\u4f7f\u7528 JSON \u6570\u636e",id:"\u4f7f\u7528-json-\u6570\u636e",level:2},{value:"\u521b\u5efa JSON \u7c7b\u578b\u7684\u5217",id:"\u521b\u5efa-json-\u7c7b\u578b\u7684\u5217",level:3},{value:"\u5bfc\u5165\u6570\u636e\u5e76\u5b58\u50a8\u4e3a JSON \u7c7b\u578b",id:"\u5bfc\u5165\u6570\u636e\u5e76\u5b58\u50a8\u4e3a-json-\u7c7b\u578b",level:3},{value:"\u67e5\u8be2\u548c\u5904\u7406 JSON \u7c7b\u578b\u7684\u6570\u636e",id:"\u67e5\u8be2\u548c\u5904\u7406-json-\u7c7b\u578b\u7684\u6570\u636e",level:3},{value:"JSON \u51fd\u6570\u548c\u8fd0\u7b97\u7b26",id:"json-\u51fd\u6570\u548c\u8fd0\u7b97\u7b26",level:2},{value:"\u9650\u5236\u548c\u6ce8\u610f\u4e8b\u9879",id:"\u9650\u5236\u548c\u6ce8\u610f\u4e8b\u9879",level:2}];function o(e){const n=Object.assign({h1:"h1",p:"p",h2:"h2",a:"a",h3:"h3",code:"code",pre:"pre",ul:"ul",li:"li",blockquote:"blockquote",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,c.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"json",children:"JSON"}),"\n",(0,r.jsx)(n.p,{children:"\u81ea 2.2.0 \u7248\u672c\u8d77\uff0cStarRocks \u652f\u6301 JSON\u3002\u672c\u6587\u4ecb\u7ecd JSON \u7684\u57fa\u672c\u6982\u5ff5\uff0c\u4ee5\u53ca StarRocks \u5982\u4f55\u521b\u5efa JSON \u7c7b\u578b\u7684\u5217\u3001\u5bfc\u5165\u548c\u67e5\u8be2 JSON \u6570\u636e\uff0c\u901a\u8fc7 JSON \u51fd\u6570\u53ca\u8fd0\u7b97\u7b26\u6784\u9020\u548c\u5904\u7406 JSON \u6570\u636e\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u4ec0\u4e48\u662f-json",children:"\u4ec0\u4e48\u662f JSON"}),"\n",(0,r.jsx)(n.p,{children:"JSON \u662f\u4e00\u79cd\u8f7b\u91cf\u7ea7\u7684\u6570\u636e\u4ea4\u6362\u683c\u5f0f\uff0cJSON \u7c7b\u578b\u7684\u6570\u636e\u662f\u4e00\u79cd\u534a\u7ed3\u6784\u5316\u7684\u6570\u636e\uff0c\u652f\u6301\u6811\u5f62\u7ed3\u6784\u3002JSON \u6570\u636e\u5c42\u6b21\u6e05\u6670\uff0c\u7ed3\u6784\u7075\u6d3b\u6613\u4e8e\u9605\u8bfb\u548c\u5904\u7406\uff0c\u5e7f\u6cdb\u5e94\u7528\u4e8e\u6570\u636e\u5b58\u50a8\u548c\u5206\u6790\u573a\u666f\u3002JSON \u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u4e3a\u6570\u5b57\u7c7b\u578b\uff08NUMBER\uff09\u3001\u5b57\u7b26\u4e32\u7c7b\u578b\uff08STRING\uff09\u3001\u5e03\u5c14\u7c7b\u578b\uff08BOOLEAN\uff09\u3001\u6570\u7ec4\u7c7b\u578b\uff08ARRAY\uff09\u3001\u5bf9\u8c61\u7c7b\u578b\uff08OBJECT\uff09\uff0c\u4ee5\u53ca NULL \u503c\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["JSON \u7684\u66f4\u591a\u4ecb\u7ecd\uff0c\u8bf7\u53c2\u89c1 ",(0,r.jsx)(n.a,{href:"http://www.json.org/?spm=a2c63.p38356.0.0.50756b9fVEfwCd",children:"JSON \u5b98\u7f51"}),"\uff0cJSON \u6570\u636e\u7684\u8f93\u5165\u548c\u8f93\u51fa\u8bed\u6cd5\uff0c\u8bf7\u53c2\u89c1 JSON \u89c4\u8303 ",(0,r.jsx)(n.a,{href:"https://tools.ietf.org/html/rfc7159?spm=a2c63.p38356.0.0.14d26b9fcp7fcf#page-4",children:"RFC 7159"})," \u3002"]}),"\n",(0,r.jsx)(n.p,{children:"StarRocks \u652f\u6301\u5b58\u50a8\u548c\u9ad8\u6548\u67e5\u8be2\u5206\u6790 JSON \u6570\u636e\u3002StarRocks \u91c7\u7528\u4e8c\u8fdb\u5236\u683c\u5f0f\u7f16\u7801\u6765\u5b58\u50a8 JSON \u6570\u636e\uff0c\u800c\u4e0d\u662f\u76f4\u63a5\u5b58\u50a8\u6240\u8f93\u5165\u6587\u672c\uff0c\u56e0\u6b64\u5728\u6570\u636e\u8ba1\u7b97\u67e5\u8be2\u65f6\uff0c\u964d\u4f4e\u89e3\u6790\u6210\u672c\uff0c\u4ece\u800c\u63d0\u5347\u67e5\u8be2\u6548\u7387\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u4f7f\u7528-json-\u6570\u636e",children:"\u4f7f\u7528 JSON \u6570\u636e"}),"\n",(0,r.jsx)(n.h3,{id:"\u521b\u5efa-json-\u7c7b\u578b\u7684\u5217",children:"\u521b\u5efa JSON \u7c7b\u578b\u7684\u5217"}),"\n",(0,r.jsxs)(n.p,{children:["\u5efa\u8868\u65f6\uff0c\u901a\u8fc7\u5173\u952e\u5b57 ",(0,r.jsx)(n.code,{children:"JSON"}),"\uff0c\u6307\u5b9a\u5217 ",(0,r.jsx)(n.code,{children:"j"})," \u4e3a JSON \u7c7b\u578b\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:'CREATE TABLE `tj` (\n    `id` INT(11) NOT NULL COMMENT "",\n    `j`  JSON NULL COMMENT ""\n) ENGINE=OLAP\nDUPLICATE KEY(`id`)\nCOMMENT "OLAP"\nDISTRIBUTED BY HASH(`id`) BUCKETS 1\nPROPERTIES (\n    "replication_num" = "3",\n    "storage_format" = "DEFAULT"\n);\n'})}),"\n",(0,r.jsx)(n.h3,{id:"\u5bfc\u5165\u6570\u636e\u5e76\u5b58\u50a8\u4e3a-json-\u7c7b\u578b",children:"\u5bfc\u5165\u6570\u636e\u5e76\u5b58\u50a8\u4e3a JSON \u7c7b\u578b"}),"\n",(0,r.jsx)(n.p,{children:"StarRocks \u652f\u6301\u5982\u4e0b\u4e09\u79cd\u65b9\u5f0f\u5bfc\u5165\u6570\u636e\u5e76\u5b58\u50a8\u4e3a JSON \u7c7b\u578b\u3002"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u65b9\u5f0f\u4e00\uff1a\u901a\u8fc7 ",(0,r.jsx)(n.code,{children:"INSERT INTO"})," \u5c06\u6570\u636e\u5199\u5165\u81f3 JSON \u7c7b\u578b\u7684\u5217\uff08\u4f8b\u5982\u5217 ",(0,r.jsx)(n.code,{children:"j"}),"\uff09\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:'INSERT INTO tj (id, j) VALUES (1, parse_json(\'{"a": 1, "b": true}\'));\nINSERT INTO tj (id, j) VALUES (2, parse_json(\'{"a": 2, "b": false}\'));\nINSERT INTO tj (id, j) VALUES (3, parse_json(\'{"a": 3, "b": true}\'));\nINSERT INTO tj (id, j) VALUES (4, json_object(\'a\', 4, \'b\', false)); \n'})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["PARSE_JSON \u51fd\u6570\u80fd\u591f\u57fa\u4e8e\u5b57\u7b26\u4e32\u7c7b\u578b\u7684\u6570\u636e\u6784\u9020\u51fa JSON \u7c7b\u578b\u7684\u6570\u636e\u3002JSON_OBJECT \u51fd\u6570\u80fd\u591f\u6784\u9020\u51fa JSON \u5bf9\u8c61\u7c7b\u578b\u7684\u6570\u636e\uff0c\u53ef\u4ee5\u5c06\u73b0\u6709\u7684\u8868\u8f6c\u6210 JSON \u7c7b\u578b\u3002\u66f4\u591a\u8bf4\u660e\uff0c\u8bf7\u53c2\u89c1 ",(0,r.jsx)(n.a,{href:"/doc/zh/docs/2.5/sql-reference/sql-functions/json-functions/json-constructor-functions/parse_json",children:"PARSE_JSON"})," \u548c ",(0,r.jsx)(n.a,{href:"/doc/zh/docs/2.5/sql-reference/sql-functions/json-functions/json-constructor-functions/json_object",children:"JSON_OBJECT"}),"\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u65b9\u5f0f\u4e8c\uff1a\u901a\u8fc7 Stream Load \u7684\u65b9\u5f0f\u5bfc\u5165 JSON \u6587\u4ef6\u5e76\u5b58\u50a8\u4e3a JSON \u7c7b\u578b\u3002\u5bfc\u5165\u65b9\u6cd5\u8bf7\u53c2\u89c1 ",(0,r.jsx)(n.a,{href:"/doc/zh/docs/2.5/loading/StreamLoad#%E5%AF%BC%E5%85%A5-json-%E6%A0%BC%E5%BC%8F%E7%9A%84%E6%95%B0%E6%8D%AE",children:"\u5bfc\u5165 JSON \u6570\u636e"}),"\u3002","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u5982\u679c\u9700\u8981\u5c06 JSON \u6587\u4ef6\u4e2d\u6839\u8282\u70b9\u7684 JSON \u5bf9\u8c61\u5bfc\u5165\u5e76\u5b58\u50a8\u4e3a JSON \u7c7b\u578b\uff0c\u53ef\u8bbe\u7f6e ",(0,r.jsx)(n.code,{children:"jsonpaths"})," \u4e3a ",(0,r.jsx)(n.code,{children:"$"}),"\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:["\u5982\u679c\u9700\u8981\u5c06 JSON \u6587\u4ef6\u4e2d\u4e00\u4e2a JSON \u5bf9\u8c61\u7684\u503c (value) \u5bfc\u5165\u5e76\u5b58\u50a8\u4e3a JSON \u7c7b\u578b\uff0c\u53ef\u8bbe\u7f6e ",(0,r.jsx)(n.code,{children:"jsonpaths"})," \u4e3a ",(0,r.jsx)(n.code,{children:"$.a"}),"\uff08a \u4ee3\u8868 key\uff09\u3002\u66f4\u591a JSON \u8def\u5f84\u8868\u8fbe\u5f0f\uff0c\u53c2\u89c1 ",(0,r.jsx)(n.a,{href:"/doc/zh/docs/2.5/sql-reference/sql-functions/json-functions/overview-of-json-functions-and-operators#json-path",children:"JSON path"}),"\u3002"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\u65b9\u5f0f\u4e09\uff1a\u901a\u8fc7 Broker Load \u7684\u65b9\u5f0f\u5bfc\u5165 Parquet \u6587\u4ef6\u5e76\u5b58\u50a8\u4e3a JSON \u7c7b\u578b\u3002\u5bfc\u5165\u65b9\u5f0f\uff0c\u8bf7\u53c2\u89c1 ",(0,r.jsx)(n.a,{href:"/doc/zh/docs/2.5/loading/BrokerLoad",children:"Broker Load"}),"\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u5bfc\u5165\u65f6\u652f\u6301\u6570\u636e\u7c7b\u578b\u8f6c\u6362\u5982\u4e0b\uff1a"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parquet \u6587\u4ef6\u4e2d\u7684\u6570\u636e\u7c7b\u578b"}),(0,r.jsx)(n.th,{children:"\u8f6c\u6362\u540e\u7684 JSON \u6570\u636e\u7c7b\u578b"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u6574\u6570\u7c7b\u578b\uff08INT8\u3001INT16\u3001INT32\u3001INT64\u3001UINT8\u3001UINT16\u3001UINT32\u3001UINT64\uff09"}),(0,r.jsx)(n.td,{children:"JSON \u6570\u5b57\u578b"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u6d6e\u70b9\u7c7b\u578b\uff08FLOAT\u3001DOUBLE\uff09"}),(0,r.jsx)(n.td,{children:"JSON \u6570\u5b57\u578b"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"BOOLEAN"}),(0,r.jsx)(n.td,{children:"JSON \u5e03\u5c14\u578b"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"STRING"}),(0,r.jsx)(n.td,{children:"JSON \u5b57\u7b26\u4e32\u578b"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"MAP"}),(0,r.jsx)(n.td,{children:"JSON \u5bf9\u8c61\u578b"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"STRUCT"}),(0,r.jsx)(n.td,{children:"JSON \u5bf9\u8c61\u578b"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"LIST"}),(0,r.jsx)(n.td,{children:"JSON \u6570\u7ec4\u578b"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"UNION\u3001TIMESTAMP \u7b49\u5176\u4ed6\u7c7b\u578b"}),(0,r.jsx)(n.td,{children:"\u6682\u672a\u652f\u6301"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"\u67e5\u8be2\u548c\u5904\u7406-json-\u7c7b\u578b\u7684\u6570\u636e",children:"\u67e5\u8be2\u548c\u5904\u7406 JSON \u7c7b\u578b\u7684\u6570\u636e"}),"\n",(0,r.jsx)(n.p,{children:"StarRocks \u652f\u6301\u67e5\u8be2\u548c\u5904\u7406 JSON \u7c7b\u578b\u7684\u6570\u636e\uff0c\u5e76\u4e14\u652f\u6301\u4f7f\u7528 JSON \u51fd\u6570\u548c\u8fd0\u7b97\u7b26\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u672c\u793a\u4f8b\u4ee5\u8868 tj \u8fdb\u884c\u8bf4\u660e\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:'mysql> select * from tj;\n+------+----------------------+\n| id   |          j           |\n+------+----------------------+\n| 1    | {"a": 1, "b": true}  |\n| 2    | {"a": 2, "b": false} |\n| 3    | {"a": 3, "b": true}  |\n| 4    | {"a": 4, "b": false} |\n+------+----------------------+\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u793a\u4f8b\u4e00\uff1a\u6309\u7167\u8fc7\u6ee4\u6761\u4ef6 ",(0,r.jsx)(n.code,{children:"id=1"}),"\uff0c\u7b5b\u9009\u51fa JSON \u7c7b\u578b\u7684\u5217\u4e2d\u6ee1\u8db3\u6761\u4ef6\u7684\u6570\u636e\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:'mysql> select * from tj where id = 1;\n+------+---------------------+\n| id   |           j         |\n+------+---------------------+\n| 1    | {"a": 1, "b": true} |\n+------+---------------------+\n'})}),"\n",(0,r.jsx)(n.p,{children:"\u793a\u4f8b\u4e8c\uff1a\u6839\u636e JSON \u7c7b\u578b\u7684\u5217\u8fdb\u884c\u8fc7\u6ee4\uff0c\u8fc7\u6ee4\u51fa\u8868\u4e2d\u6ee1\u8db3\u6761\u4ef6\u7684\u6570\u636e\u3002"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u4ee5\u4e0b\u793a\u4f8b\u4e2d ",(0,r.jsx)(n.code,{children:"j->'a'"})," \u8fd4\u56de\u7684\u662f JSON \u7c7b\u578b\u7684\u6570\u636e\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528\u7b2c\u4e00\u4e2a\u793a\u4f8b\u8fdb\u884c\u5bf9\u6bd4\uff0c\u8be5\u793a\u4f8b\u5bf9\u6570\u636e\u8fdb\u884c\u4e86\u9690\u5f0f\u8f6c\u6362\uff1b\u4e5f\u53ef\u4ee5\u4f7f\u7528 CAST \u51fd\u6570\u5c06 JSON \u7c7b\u578b\u6570\u636e\u6784\u9020\u4e3a INT\uff0c\u7136\u540e\u8fdb\u884c\u5bf9\u6bd4\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:'mysql> select * from tj where j->\'a\' = 1;\n+------+---------------------+\n| id   | j                   |\n+------+---------------------+\n|    1 | {"a": 1, "b": true} |\n+------+---------------------+\n\nmysql> select * from tj where cast(j->\'a\' as INT) = 1; \n+------+---------------------+\n|   id |         j           |\n+------+---------------------+\n|   1  | {"a": 1, "b": true} |\n+------+---------------------+\n'})}),"\n",(0,r.jsx)(n.p,{children:"\u793a\u4f8b\u4e09\uff1a\u6839\u636e JSON \u7c7b\u578b\u7684\u5217\u8fdb\u884c\u8fc7\u6ee4\uff08\u60a8\u53ef\u4ee5\u4f7f\u7528 CAST \u51fd\u6570\u5c06 JSON \u7c7b\u578b\u7684\u5217\u6784\u9020\u4e3a BOOLEAN \u7c7b\u578b\uff09\uff0c\u8fc7\u6ee4\u51fa\u8868\u4e2d\u6ee1\u8db3\u6761\u4ef6\u7684\u6570\u636e\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:'mysql> select * from tj where cast(j->\'b\' as boolean);\n+------+---------------------+\n|  id  |          j          |\n+------+---------------------+\n| 1    | {"a": 1, "b": true} |\n| 3    | {"a": 3, "b": true} |\n+------+---------------------+\n'})}),"\n",(0,r.jsx)(n.p,{children:"\u793a\u4f8b\u56db\uff1a\u6839\u636e JSON \u7c7b\u578b\u7684\u5217\u8fdb\u884c\u8fc7\u6ee4\uff08\u60a8\u53ef\u4ee5\u4f7f\u7528 CAST \u51fd\u6570\u5c06 JSON \u7c7b\u578b\u7684\u5217\u6784\u9020\u4e3a BOOLEAN \u7c7b\u578b\uff09\uff0c\u8fc7\u6ee4\u51fa JSON \u7c7b\u578b\u7684\u5217\u6ee1\u8db3\u6761\u4ef6\u7684\u6570\u636e\uff0c\u5e76\u8fdb\u884c\u6570\u503c\u8fd0\u7b97\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"mysql> select cast(j->'a' as int) from tj where cast(j->'b' as boolean);\n+-----------------------+\n|  CAST(j->'a' AS INT)  |\n+-----------------------+\n|          3            |\n|          1            |\n+-----------------------+\n\nmysql> select sum(cast(j->'a' as int)) from tj where cast(j->'b' as boolean);\n+----------------------------+\n| sum(CAST(j->'a' AS INT))  |\n+----------------------------+\n|              4             |\n+----------------------------+\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u793a\u4f8b\u4e94\uff1a\u6309\u7167 JSON \u7c7b\u578b\u7684\u5217\u8fdb\u884c\u6392\u5e8f\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:'mysql> select * from tj\n       where j->\'a\' <= parse_json(\'3\')\n       order by cast(j->\'a\' as int);\n+------+----------------------+\n| id   | j                    |\n+------+----------------------+\n|    1 | {"a": 1, "b": true}  |\n|    2 | {"a": 2, "b": false} |\n|    3 | {"a": 3, "b": true}  |\n|    4 | {"a": 4, "b": false} |\n+------+----------------------+\n'})}),"\n",(0,r.jsx)(n.h2,{id:"json-\u51fd\u6570\u548c\u8fd0\u7b97\u7b26",children:"JSON \u51fd\u6570\u548c\u8fd0\u7b97\u7b26"}),"\n",(0,r.jsxs)(n.p,{children:["JSON \u51fd\u6570\u548c\u8fd0\u7b97\u7b26\u53ef\u4ee5\u7528\u4e8e\u6784\u9020\u548c\u5904\u7406 JSON \u6570\u636e\u3002\u5177\u4f53\u8bf4\u660e\uff0c\u8bf7\u53c2\u89c1 ",(0,r.jsx)(n.a,{href:"/doc/zh/docs/2.5/sql-reference/sql-functions/json-functions/overview-of-json-functions-and-operators",children:"JSON \u51fd\u6570\u548c\u8fd0\u7b97\u7b26"}),"\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u9650\u5236\u548c\u6ce8\u610f\u4e8b\u9879",children:"\u9650\u5236\u548c\u6ce8\u610f\u4e8b\u9879"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u5f53\u524d JSON \u7c7b\u578b\u6570\u636e\u652f\u6301\u7684\u6700\u5927\u957f\u5ea6\u4e3a 16 MB\u3002"}),"\n",(0,r.jsxs)(n.li,{children:["ORDER BY\u3001GROUP BY\u3001JOIN \u5b50\u53e5\u4e0d\u652f\u6301\u5f15\u7528 JSON \u7c7b\u578b\u7684\u5217\u3002\u5982\u679c\u9700\u8981\u5f15\u7528\uff0c\u60a8\u53ef\u4ee5\u63d0\u524d\u4f7f\u7528 CAST \u51fd\u6570\uff0c\u5c06 JSON \u7c7b\u578b\u7684\u5217\u8f6c\u4e3a\u5176\u4ed6 SQL \u7c7b\u578b\u3002\u5177\u4f53\u8f6c\u6362\u65b9\u5f0f\uff0c\u8bf7\u53c2\u89c1 ",(0,r.jsx)(n.a,{href:"/doc/zh/docs/2.5/sql-reference/sql-functions/json-functions/json-query-and-processing-functions/cast",children:"JSON \u7c7b\u578b\u8f6c\u6362"}),"\u3002"]}),"\n",(0,r.jsx)(n.li,{children:"\u652f\u6301 JSON \u7c7b\u578b\u7684\u5217\u5b58\u5728\u4e8e\u660e\u7ec6\u6a21\u578b\u3001\u4e3b\u952e\u6a21\u578b\u3001\u66f4\u65b0\u6a21\u578b\u7684\u8868\u4e2d\uff0c\u4f46\u4e0d\u652f\u6301\u5b58\u5728\u4e8e\u805a\u5408\u6a21\u578b\u7684\u8868\u4e2d\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u6682\u4e0d\u652f\u6301 JSON \u7c7b\u578b\u7684\u5217\u4f5c\u4e3a\u5206\u533a\u952e\u3001\u5206\u6876\u952e\u3001\u7ef4\u5ea6\u5217\uff08DUPLICATE KEY\u3001PRIMARY KEY\u3001UNIQUE KEY\uff09\uff0c\u5e76\u4e14\u4e0d\u652f\u6301\u7528\u4e8e JOIN\u3001GROUP BY\u3001ORDER BY \u5b50\u53e5\u3002"}),"\n",(0,r.jsxs)(n.li,{children:["StarRocks \u652f\u6301\u4f7f\u7528 ",(0,r.jsx)(n.code,{children:"<"}),"\uff0c",(0,r.jsx)(n.code,{children:"<="}),"\uff0c",(0,r.jsx)(n.code,{children:">"}),"\uff0c",(0,r.jsx)(n.code,{children:">="}),"\uff0c ",(0,r.jsx)(n.code,{children:"="}),"\uff0c",(0,r.jsx)(n.code,{children:"!="})," \u8fd0\u7b97\u7b26\u67e5\u8be2 JSON \u6570\u636e\uff0c\u4e0d\u652f\u6301\u4f7f\u7528 IN \u8fd0\u7b97\u7b26\u3002"]}),"\n"]})]})}const j=function(e={}){const{wrapper:n}=Object.assign({},(0,c.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(o,e)})):o(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>l,ah:()=>t});var r=s(67294);const c=r.createContext({});function t(e){const n=r.useContext(c);return r.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const d={};function l({components:e,children:n,disableParentContext:s}){let l;return l=s?"function"==typeof e?e({}):e||d:t(e),r.createElement(c.Provider,{value:l},n)}}}]);