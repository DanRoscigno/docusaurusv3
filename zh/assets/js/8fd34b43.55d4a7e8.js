"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[82477],{3937:(n,s,e)=>{e.r(s),e.d(s,{assets:()=>a,contentTitle:()=>c,default:()=>x,frontMatter:()=>i,metadata:()=>d,toc:()=>h});var r=e(85893),l=e(11151);const i={displayed_sidebar:"Chinese"},c="\u4f7f\u7528 DataX \u5bfc\u5165 StarRocks",d={id:"loading/DataX-starrocks-writer",title:"\u4f7f\u7528 DataX \u5bfc\u5165 StarRocks",description:"\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u5229\u7528 DataX \u57fa\u4e8e StarRocks \u5f00\u53d1\u7684 StarRocks Writer \u63d2\u4ef6\u5c06 MySQL\u3001Oracle \u7b49\u6570\u636e\u5e93\u4e2d\u7684\u6570\u636e\u5bfc\u5165\u81f3 StarRocks\u3002\u8be5\u63d2\u4ef6\u5c06\u6570\u636e\u8f6c\u5316\u4e3a CSV \u6216 JSON \u683c\u5f0f\u5e76\u5c06\u5176\u901a\u8fc7 Stream Load \u65b9\u5f0f\u6279\u91cf\u5bfc\u5165\u81f3 StarRocks\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.3/loading/DataX-starrocks-writer.md",sourceDirName:"loading",slug:"/loading/DataX-starrocks-writer",permalink:"/zh/docs/2.3/loading/DataX-starrocks-writer",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/loading/DataX-starrocks-writer.md",tags:[],version:"2.3",frontMatter:{displayed_sidebar:"Chinese"},sidebar:"Chinese",previous:{title:"\u4ece HDFS \u6216\u5916\u90e8\u4e91\u5b58\u50a8\u7cfb\u7edf\u5bfc\u5165\u6570\u636e",permalink:"/zh/docs/2.3/loading/BrokerLoad"},next:{title:"\u5bfc\u5165\u8fc7\u7a0b\u4e2d\u5b9e\u73b0\u6570\u636e\u8f6c\u6362",permalink:"/zh/docs/2.3/loading/Etl_in_loading"}},a={},h=[{value:"\u652f\u6301\u7684\u6570\u636e\u6e90",id:"\u652f\u6301\u7684\u6570\u636e\u6e90",level:2},{value:"\u4f7f\u7528\u573a\u666f",id:"\u4f7f\u7528\u573a\u666f",level:2},{value:"\u5b9e\u73b0\u539f\u7406",id:"\u5b9e\u73b0\u539f\u7406",level:2},{value:"\u4f7f\u7528\u6b65\u9aa4",id:"\u4f7f\u7528\u6b65\u9aa4",level:2},{value:"\u73af\u5883\u51c6\u5907",id:"\u73af\u5883\u51c6\u5907",level:3},{value:"\u914d\u7f6e\u6837\u4f8b",id:"\u914d\u7f6e\u6837\u4f8b",level:3},{value:"\u542f\u52a8\u4efb\u52a1",id:"\u542f\u52a8\u4efb\u52a1",level:3},{value:"\u67e5\u770b\u5bfc\u5165\u4efb\u52a1\u72b6\u6001",id:"\u67e5\u770b\u5bfc\u5165\u4efb\u52a1\u72b6\u6001",level:3},{value:"\u53d6\u6d88\u6216\u505c\u6b62\u5bfc\u5165\u4efb\u52a1",id:"\u53d6\u6d88\u6216\u505c\u6b62\u5bfc\u5165\u4efb\u52a1",level:3},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:2},{value:"\u5bfc\u5165\u53c2\u6570\u914d\u7f6e",id:"\u5bfc\u5165\u53c2\u6570\u914d\u7f6e",level:3},{value:"\u5173\u4e8e\u65f6\u533a",id:"\u5173\u4e8e\u65f6\u533a",level:3}];function t(n){const s=Object.assign({h1:"h1",p:"p",a:"a",h2:"h2",ul:"ul",li:"li",strong:"strong",code:"code",h3:"h3",blockquote:"blockquote",pre:"pre"},(0,l.ah)(),n.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h1,{id:"\u4f7f\u7528-datax-\u5bfc\u5165-starrocks",children:"\u4f7f\u7528 DataX \u5bfc\u5165 StarRocks"}),"\n",(0,r.jsxs)(s.p,{children:["\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u5229\u7528 DataX \u57fa\u4e8e StarRocks \u5f00\u53d1\u7684 StarRocks Writer \u63d2\u4ef6\u5c06 MySQL\u3001Oracle \u7b49\u6570\u636e\u5e93\u4e2d\u7684\u6570\u636e\u5bfc\u5165\u81f3 StarRocks\u3002\u8be5\u63d2\u4ef6\u5c06\u6570\u636e\u8f6c\u5316\u4e3a CSV \u6216 JSON \u683c\u5f0f\u5e76\u5c06\u5176\u901a\u8fc7 ",(0,r.jsx)(s.a,{href:"/zh/docs/2.3/loading/StreamLoad",children:"Stream Load"})," \u65b9\u5f0f\u6279\u91cf\u5bfc\u5165\u81f3 StarRocks\u3002"]}),"\n",(0,r.jsx)(s.h2,{id:"\u652f\u6301\u7684\u6570\u636e\u6e90",children:"\u652f\u6301\u7684\u6570\u636e\u6e90"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"MySQL"}),"\n",(0,r.jsx)(s.li,{children:"Oracle"}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"https://github.com/alibaba/DataX",children:"\u66f4\u591a"})}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"\u4f7f\u7528\u573a\u666f",children:"\u4f7f\u7528\u573a\u666f"}),"\n",(0,r.jsxs)(s.p,{children:["Mysql\u3001Oracle \u7b49 DataX \u652f\u6301\u8bfb\u53d6\u7684\u6570\u636e\u5e93",(0,r.jsx)(s.strong,{children:"\u5168\u91cf\u6570\u636e"}),"\u901a\u8fc7 DataX \u548c starrockswriter \u5bfc\u5165\u5230 StarRocks\u3002"]}),"\n",(0,r.jsx)(s.h2,{id:"\u5b9e\u73b0\u539f\u7406",children:"\u5b9e\u73b0\u539f\u7406"}),"\n",(0,r.jsxs)(s.p,{children:["StarRocksWriter \u63d2\u4ef6\u5b9e\u73b0\u4e86\u5199\u5165\u6570\u636e\u5230 StarRocks \u7684\u76ee\u7684\u8868\u7684\u529f\u80fd\u3002\u5728\u5e95\u5c42\u5b9e\u73b0\u4e0a\uff0cStarRocksWriter \u901a\u8fc7Stream load\u4ee5csv\u6216 json \u683c\u5f0f\u5bfc\u5165\u6570\u636e\u81f3StarRocks\u3002\u5185\u90e8\u5c06",(0,r.jsx)(s.code,{children:"reader"}),"\u8bfb\u53d6\u7684\u6570\u636e\u8fdb\u884c\u7f13\u5b58\u540e\u6279\u91cf\u5bfc\u5165\u81f3StarRocks\uff0c\u4ee5\u63d0\u9ad8\u5199\u5165\u6027\u80fd\u3002\u603b\u4f53\u6570\u636e\u6d41\u662f ",(0,r.jsx)(s.code,{children:"source -> Reader -> DataX channel -> Writer -> StarRocks"}),"\u3002"]}),"\n",(0,r.jsx)(s.h2,{id:"\u4f7f\u7528\u6b65\u9aa4",children:"\u4f7f\u7528\u6b65\u9aa4"}),"\n",(0,r.jsx)(s.h3,{id:"\u73af\u5883\u51c6\u5907",children:"\u73af\u5883\u51c6\u5907"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"https://github.com/StarRocks/DataX/releases",children:"\u70b9\u51fb\u4e0b\u8f7d\u63d2\u4ef6"})}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"https://github.com/StarRocks/DataX",children:"\u6e90\u7801\u5730\u5740"})}),"\n",(0,r.jsx)(s.p,{children:"\u89e3\u538b starrockswriter \u63d2\u4ef6\u5e76\u653e\u7f6e\u5728 datax/plugin/writer\u76ee\u5f55\u4e0b\u3002"}),"\n",(0,r.jsx)(s.h3,{id:"\u914d\u7f6e\u6837\u4f8b",children:"\u914d\u7f6e\u6837\u4f8b"}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsx)(s.p,{children:"\u4ee5\u4e0b\u4e3e\u4f8b\u4ece MySQL \u8bfb\u53d6\u6570\u636e\u540e\u5bfc\u5165\u81f3 StarRocks \u65f6 datax \u7684\u914d\u7f6e\u3002"}),"\n"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-json",children:'{\n    "job": {\n        "setting": {\n            "speed": {\n                 "channel": 1\n            },\n            "errorLimit": {\n                "record": 0,\n                "percentage": 0\n            }\n        },\n        "content": [\n            {\n                "reader": {\n                    "name": "mysqlreader",\n                    "parameter": {\n                        "username": "xxxx",\n                        "password": "xxxx",\n                        "column": [ "k1", "k2", "v1", "v2" ],\n                        "connection": [\n                            {\n                                "table": [ "table1", "table2" ],\n                                "jdbcUrl": [\n                                     "jdbc:mysql://127.0.0.1:3306/datax_test1"\n                                ]\n                            },\n                            {\n                                "table": [ "table3", "table4" ],\n                                "jdbcUrl": [\n                                     "jdbc:mysql://127.0.0.1:3306/datax_test2"\n                                ]\n                            }\n                        ]\n                    }\n                },\n               "writer": {\n                    "name": "starrockswriter",\n                    "parameter": {\n                        "username": "xxxx",\n                        "password": "xxxx",\n                        "database": "xxxx",\n                        "table": "xxxx",\n                        "column": ["k1", "k2", "v1", "v2"],\n                        "preSql": [],\n                        "postSql": [], \n                        "jdbcUrl": "jdbc:mysql://172.28.17.100:9030/",\n                        "loadUrl": ["172.28.17.100:8030", "172.28.17.101:8030"],\n                        "loadProps": {}\n                    }\n                }\n            }\n        ]\n    }\n}\n\n'})}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"\u53c2\u6570\u8bf4\u660e"})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"username"})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"\u63cf\u8ff0\uff1aStarRocks \u6570\u636e\u5e93\u7684\u7528\u6237\u540d"}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"\u5fc5\u9009\uff1a\u662f"}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"\u9ed8\u8ba4\u503c\uff1a\u65e0"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"password"})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"\u63cf\u8ff0\uff1aStarRocks \u6570\u636e\u5e93\u7684\u5bc6\u7801"}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"\u5fc5\u9009\uff1a\u662f"}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"\u9ed8\u8ba4\u503c\uff1a\u65e0"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"database"})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"\u63cf\u8ff0\uff1aStarRocks \u8868\u7684\u6570\u636e\u5e93\u540d\u79f0\u3002"}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"\u5fc5\u9009\uff1a\u662f"}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"\u9ed8\u8ba4\u503c\uff1a\u65e0"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"table"})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"\u63cf\u8ff0\uff1aStarRocks \u8868\u7684\u8868\u540d\u79f0\u3002"}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"\u5fc5\u9009\uff1a\u662f"}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"\u9ed8\u8ba4\u503c\uff1a\u65e0"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"loadUrl"})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["\u63cf\u8ff0\uff1aStarRocks FE\u7684\u5730\u5740\u7528\u4e8eStreamload\uff0c\u53ef\u4ee5\u4e3a\u591a\u4e2afe\u5730\u5740\uff0c\u5f62\u5982",(0,r.jsx)(s.code,{children:"fe_ip:fe_http_port"}),"\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"\u5fc5\u9009\uff1a\u662f"}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"\u9ed8\u8ba4\u503c\uff1a\u65e0"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"column"})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:'\u63cf\u8ff0\uff1a\u76ee\u7684\u8868\u9700\u8981\u5199\u5165\u6570\u636e\u7684\u5b57\u6bb5\uff0c\u5b57\u6bb5\u4e4b\u95f4\u7528\u82f1\u6587\u9017\u53f7\u5206\u9694\u3002\u4f8b\u5982: "column": ["id","name","age"]\u3002'}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"column\u914d\u7f6e\u9879\u5fc5\u987b\u6307\u5b9a\uff0c\u4e0d\u80fd\u7559\u7a7a\uff01"})}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsx)(s.p,{children:'\u5982\u679c\u5e0c\u671b\u5bfc\u5165\u6240\u6709\u5b57\u6bb5\uff0c\u53ef\u4ee5\u4f7f\u7528 ["*"]'}),"\n"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"\u5fc5\u9009\uff1a\u662f"}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"\u9ed8\u8ba4\u503c\uff1a\u5426"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"preSql"})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"\u63cf\u8ff0\uff1a\u5199\u5165\u6570\u636e\u5230\u76ee\u7684\u8868\u524d\uff0c\u4f1a\u5148\u6267\u884c\u8fd9\u91cc\u7684\u6807\u51c6\u8bed\u53e5\u3002"}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"\u5fc5\u9009\uff1a\u5426"}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"\u9ed8\u8ba4\u503c\uff1a\u65e0"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"postSql"})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"\u63cf\u8ff0\uff1a\u5199\u5165\u6570\u636e\u5230\u76ee\u7684\u8868\u540e\uff0c\u4f1a\u6267\u884c\u8fd9\u91cc\u7684\u6807\u51c6\u8bed\u53e5\u3002"}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"\u5fc5\u9009\uff1a\u5426"}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"\u9ed8\u8ba4\u503c\uff1a\u65e0"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"jdbcUrl"})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["\u63cf\u8ff0\uff1a\u76ee\u7684\u6570\u636e\u5e93\u7684 JDBC \u8fde\u63a5\u4fe1\u606f\uff0c\u7528\u4e8e\u6267\u884c ",(0,r.jsx)(s.code,{children:"preSql"})," \u53ca ",(0,r.jsx)(s.code,{children:"postSql"}),"\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"\u5fc5\u9009\uff1a\u5426"}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"\u9ed8\u8ba4\u503c\uff1a\u65e0"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"maxBatchRows"})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"\u63cf\u8ff0\uff1a\u5355\u6b21StreamLoad\u5bfc\u5165\u7684\u6700\u5927\u884c\u6570"}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"\u5fc5\u9009\uff1a\u5426"}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"\u9ed8\u8ba4\u503c\uff1a500000 (50W)"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"maxBatchSize"})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"\u63cf\u8ff0\uff1a\u5355\u6b21StreamLoad\u5bfc\u5165\u7684\u6700\u5927\u5b57\u8282\u6570\u3002"}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"\u5fc5\u9009\uff1a\u5426"}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"\u9ed8\u8ba4\u503c\uff1a104857600 (100M)"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"flushInterval"})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"\u63cf\u8ff0\uff1a\u4e0a\u4e00\u6b21 StreamLoad \u7ed3\u675f\u81f3\u4e0b\u4e00\u6b21\u5f00\u59cb\u7684\u65f6\u95f4\u95f4\u9694\uff08\u5355\u4f4d\uff1ams\uff09\u3002"}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"\u5fc5\u9009\uff1a\u5426"}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"\u9ed8\u8ba4\u503c\uff1a300000 (ms)"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"loadProps"})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["\u63cf\u8ff0\uff1aStreamLoad \u7684\u8bf7\u6c42\u53c2\u6570\uff0c\u8be6\u60c5\u53c2\u7167 ",(0,r.jsx)(s.a,{href:"/zh/docs/2.3/sql-reference/sql-statements/data-manipulation/STREAM_LOAD",children:"STREAM LOAD"})," \u4ecb\u7ecd\u9875\u9762\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"\u5fc5\u9009\uff1a\u5426"}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"\u9ed8\u8ba4\u503c\uff1a\u65e0"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"\u542f\u52a8\u4efb\u52a1",children:"\u542f\u52a8\u4efb\u52a1"}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:["\u4e0b\u9762 job.json \u6587\u4ef6\u662f\u7528\u4e8e\u8c03\u8bd5 DataX \u73af\u5883\uff0c\u5b9e\u9645\u6587\u4ef6\u5185\u5bb9\u53ef\u6839\u636e\u9700\u6c42\u547d\u540d\u5373\u53ef\uff0c\u6bd4\u5982 job_starrocks.json\uff0c\u5185\u5bb9\u53c2\u8003",(0,r.jsx)(s.a,{href:"#%E9%85%8D%E7%BD%AE%E6%A0%B7%E4%BE%8B",children:"\u914d\u7f6e\u6837\u4f8b"}),"\u3002"]}),"\n"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:'  python bin/datax.py --jvm="-Xms6G -Xmx6G" --loglevel=debug job/job.json\n'})}),"\n",(0,r.jsx)(s.h3,{id:"\u67e5\u770b\u5bfc\u5165\u4efb\u52a1\u72b6\u6001",children:"\u67e5\u770b\u5bfc\u5165\u4efb\u52a1\u72b6\u6001"}),"\n",(0,r.jsxs)(s.p,{children:["DataX \u5bfc\u5165\u662f\u5c01\u88c5\u7684 Stream Load \u5b9e\u73b0\u7684\uff0c\u53ef\u4ee5\u5728 ",(0,r.jsx)(s.code,{children:"datax/log/$date/"})," \u76ee\u5f55\u4e0b\u641c\u7d22\u5bf9\u5e94\u7684job\u65e5\u5fd7\uff0c\u65e5\u5fd7\u6587\u4ef6\u540d\u5b57\u4e2d\u5305\u542b\u4e0a\u6587\u547d\u540d\u7684json\u6587\u4ef6\u540d\u548c\u4efb\u52a1\u542f\u52a8\u7684\u5c0f\u65f6\u5206\u949f\u79d2\uff0c\u4f8b\u5982\uff1at_datax_job_job_json-20_52_19.196.log\uff0c"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["\u65e5\u5fd7\u4e2d\u5982\u679c\u6709 ",(0,r.jsx)(s.code,{children:"http://$fe:${http_port}/api/$db/$tbl/_stream_load"})," \u751f\u6210\uff0c\u8868\u793a\u6210\u529f\u89e6\u53d1\u4e86 Stream Load \u4efb\u52a1\uff0c\u4efb\u52a1\u7ed3\u679c\u53ef\u53c2\u8003 ",(0,r.jsx)(s.a,{href:"/zh/docs/2.3/loading/StreamLoad#%E5%88%9B%E5%BB%BA%E5%AF%BC%E5%85%A5%E4%BD%9C%E4%B8%9A",children:"Stream Load \u4efb\u52a1\u72b6\u6001"}),"\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["\u65e5\u5fd7\u4e2d\u5982\u679c\u6ca1\u6709\u4e0a\u8ff0\u4fe1\u606f\uff0c\u8bf7\u53c2\u8003\u62a5\u9519\u63d0\u793a\u6392\u67e5\uff0c\u6216\u8005\u5728 ",(0,r.jsx)(s.a,{href:"https://github.com/alibaba/DataX/issues",children:"DataX \u793e\u533a\u95ee\u9898"}),"\u67e5\u627e\u3002"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"\u53d6\u6d88\u6216\u505c\u6b62\u5bfc\u5165\u4efb\u52a1",children:"\u53d6\u6d88\u6216\u505c\u6b62\u5bfc\u5165\u4efb\u52a1"}),"\n",(0,r.jsx)(s.p,{children:"DataX \u5bfc\u5165\u542f\u52a8\u7684\u662f\u4e00\u4e2a python \u8fdb\u7a0b\uff0c\u5982\u679c\u8981\u53d6\u6d88\u6216\u8005\u505c\u6b62\u5bfc\u5165\u4efb\u52a1\uff0ckill \u6389\u8fdb\u7a0b\u5373\u53ef\u3002"}),"\n",(0,r.jsx)(s.h2,{id:"\u6ce8\u610f\u4e8b\u9879",children:"\u6ce8\u610f\u4e8b\u9879"}),"\n",(0,r.jsx)(s.h3,{id:"\u5bfc\u5165\u53c2\u6570\u914d\u7f6e",children:"\u5bfc\u5165\u53c2\u6570\u914d\u7f6e"}),"\n",(0,r.jsxs)(s.p,{children:["\u9ed8\u8ba4\u4f20\u5165\u7684\u6570\u636e\u5747\u4f1a\u88ab\u8f6c\u4e3a\u5b57\u7b26\u4e32\uff0c\u5e76\u4ee5",(0,r.jsx)(s.code,{children:"\\t"}),"\u4f5c\u4e3a\u5217\u5206\u9694\u7b26\uff0c",(0,r.jsx)(s.code,{children:"\\n"}),"\u4f5c\u4e3a\u884c\u5206\u9694\u7b26\uff0c\u7ec4\u6210",(0,r.jsx)(s.code,{children:"csv"}),"\u6587\u4ef6\u8fdb\u884cStreamLoad\u5bfc\u5165\u64cd\u4f5c\u3002\n\u5982\u9700\u66f4\u6539\u5217\u5206\u9694\u7b26\uff0c\u5219\u6b63\u786e\u914d\u7f6e ",(0,r.jsx)(s.code,{children:"loadProps"})," \u5373\u53ef\uff1a"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-json",children:'"loadProps": {\n    "column_separator": "\\\\x01",\n    "row_delimiter": "\\\\x02"\n}\n'})}),"\n",(0,r.jsxs)(s.p,{children:["\u5982\u9700\u66f4\u6539\u5bfc\u5165\u683c\u5f0f\u4e3a",(0,r.jsx)(s.code,{children:"json"}),"\uff0c\u5219\u6b63\u786e\u914d\u7f6e ",(0,r.jsx)(s.code,{children:"loadProps"})," \u5373\u53ef\uff1a"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-json",children:'"loadProps": {\n    "format": "json",\n    "strip_outer_array": true\n}\n'})}),"\n",(0,r.jsx)(s.h3,{id:"\u5173\u4e8e\u65f6\u533a",children:"\u5173\u4e8e\u65f6\u533a"}),"\n",(0,r.jsx)(s.p,{children:"\u6e90\u5e93\u4e0e\u76ee\u6807\u5e93\u65f6\u533a\u4e0d\u540c\u65f6\uff0c\u6267\u884cdatax.py\uff0c\u547d\u4ee4\u884c\u540e\u9762\u9700\u8981\u52a0\u5982\u4e0b\u53c2\u6570\uff1a"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-json",children:'"-Duser.timezone=xx\u65f6\u533a"\n'})}),"\n",(0,r.jsx)(s.p,{children:'\u4f8b\u5982\uff0cDataX\u5bfc\u5165PostgreSQL\u4e2d\u7684\u6570\u636e\uff0c\u6e90\u5e93\u662fUTC\u65f6\u95f4\uff0c\u5728dataX\u542f\u52a8\u65f6\u52a0\u53c2\u6570 "-Duser.timezone=GMT+0"\u3002'})]})}const x=function(n={}){const{wrapper:s}=Object.assign({},(0,l.ah)(),n.components);return s?(0,r.jsx)(s,Object.assign({},n,{children:(0,r.jsx)(t,n)})):t(n)}},11151:(n,s,e)=>{e.d(s,{Zo:()=>d,ah:()=>i});var r=e(67294);const l=r.createContext({});function i(n){const s=r.useContext(l);return r.useMemo((()=>"function"==typeof n?n(s):{...s,...n}),[s,n])}const c={};function d({components:n,children:s,disableParentContext:e}){let d;return d=e?"function"==typeof n?n({}):n||c:i(n),r.createElement(l.Provider,{value:d},s)}}}]);