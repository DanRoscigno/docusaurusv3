"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[3415],{39424:(e,s,c)=>{c.r(s),c.d(s,{assets:()=>a,contentTitle:()=>t,default:()=>o,frontMatter:()=>r,metadata:()=>d,toc:()=>i});var n=c(85893),l=c(11151);const r={},t="Elasticsearch catalog",d={id:"data_source/catalog/elasticsearch_catalog",title:"Elasticsearch catalog",description:"StarRocks \u81ea 3.1 \u7248\u672c\u8d77\u652f\u6301 Elasticsearch Catalog\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.1/data_source/catalog/elasticsearch_catalog.md",sourceDirName:"data_source/catalog",slug:"/data_source/catalog/elasticsearch_catalog",permalink:"/doc/zh/docs/data_source/catalog/elasticsearch_catalog",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/data_source/catalog/elasticsearch_catalog.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"JDBC catalog",permalink:"/doc/zh/docs/data_source/catalog/jdbc_catalog"},next:{title:"Paimon catalog",permalink:"/doc/zh/docs/data_source/catalog/paimon_catalog"}},a={},i=[{value:"\u521b\u5efa Elasticsearch Catalog",id:"\u521b\u5efa-elasticsearch-catalog",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:3},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:3},{value:"<code>catalog_name</code>",id:"catalog_name",level:4},{value:"<code>comment</code>",id:"comment",level:4},{value:"PROPERTIES",id:"properties",level:4},{value:"\u521b\u5efa\u793a\u4f8b",id:"\u521b\u5efa\u793a\u4f8b",level:3},{value:"\u8c13\u8bcd\u4e0b\u63a8",id:"\u8c13\u8bcd\u4e0b\u63a8",level:2},{value:"\u67e5\u8be2\u793a\u4f8b",id:"\u67e5\u8be2\u793a\u4f8b",level:2},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:2}];function h(e){const s=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",h3:"h3",pre:"pre",h4:"h4",ul:"ul",li:"li",table:"table",thead:"thead",tr:"tr",th:"th",strong:"strong",tbody:"tbody",td:"td"},(0,l.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"elasticsearch-catalog",children:"Elasticsearch catalog"}),"\n",(0,n.jsx)(s.p,{children:"StarRocks \u81ea 3.1 \u7248\u672c\u8d77\u652f\u6301 Elasticsearch Catalog\u3002"}),"\n",(0,n.jsx)(s.p,{children:"StarRocks \u4e0e Elasticsearch \u90fd\u662f\u76ee\u524d\u6d41\u884c\u7684\u5206\u6790\u7cfb\u7edf\u3002StarRocks \u64c5\u957f\u5927\u89c4\u6a21\u5206\u5e03\u5f0f\u8ba1\u7b97\uff0c\u4e14\u652f\u6301\u901a\u8fc7\u5916\u90e8\u8868\u67e5\u8be2 Elasticsearch\u3002Elasticsearch \u64c5\u957f\u5168\u6587\u68c0\u7d22\u3002\u4e24\u8005\u7ed3\u5408\u63d0\u4f9b\u4e86\u4e00\u4e2a\u66f4\u5b8c\u5584\u7684 OLAP \u89e3\u51b3\u65b9\u6848\u3002\u57fa\u4e8e Elasticsearch Catalog\uff0c\u60a8\u53ef\u4ee5\u76f4\u63a5\u901a\u8fc7 StarRocks \u4f7f\u7528 SQL \u5206\u6790 Elasticsearch \u96c6\u7fa4\u5185\u6240\u6709\u7684\u7d22\u5f15\u6570\u636e\uff0c\u5e76\u4e14\u65e0\u9700\u6570\u636e\u8fc1\u79fb\u3002"}),"\n",(0,n.jsxs)(s.p,{children:["\u533a\u522b\u4e8e\u5176\u4ed6\u6570\u636e\u6e90\u7684 Catalog\uff0cElasticsearch Catalog \u521b\u5efa\u540e\uff0c\u4e0b\u9762\u53ea\u6709\u4e00\u4e2a\u540d\u4e3a ",(0,n.jsx)(s.code,{children:"default"})," \u7684\u6570\u636e\u5e93 (Database)\uff0c\u6bcf\u4e00\u4e2a Elasticsearch \u7d22\u5f15 (Index) \u81ea\u52a8\u6620\u5c04\u4e00\u5f20\u6570\u636e\u8868 (Table)\uff0c\u5e76\u4e14\u90fd\u4f1a\u81ea\u52a8\u6302\u8f7d\u5728 ",(0,n.jsx)(s.code,{children:"default"})," \u6570\u636e\u5e93\u4e0b\u9762\u3002"]}),"\n",(0,n.jsx)(s.h2,{id:"\u521b\u5efa-elasticsearch-catalog",children:"\u521b\u5efa Elasticsearch Catalog"}),"\n",(0,n.jsx)(s.h3,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-SQL",children:'CREATE EXTERNAL CATALOG <catalog_name>\n[COMMENT <comment>]\nPROPERTIES ("key"="value", ...)\n'})}),"\n",(0,n.jsx)(s.h3,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,n.jsx)(s.h4,{id:"catalog_name",children:(0,n.jsx)(s.code,{children:"catalog_name"})}),"\n",(0,n.jsx)(s.p,{children:"Elasticsearch Catalog \u7684\u540d\u79f0\u3002\u547d\u540d\u89c4\u5219\u5982\u4e0b\uff1a"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"\u5fc5\u987b\u7531\u5b57\u6bcd (a-z \u6216 A-Z)\u3001\u6570\u5b57 (0-9) \u6216\u4e0b\u5212\u7ebf (_) \u7ec4\u6210\uff0c\u4e14\u53ea\u80fd\u4ee5\u5b57\u6bcd\u5f00\u5934\u3002"}),"\n",(0,n.jsx)(s.li,{children:"\u603b\u957f\u5ea6\u4e0d\u80fd\u8d85\u8fc7 1023 \u4e2a\u5b57\u7b26\u3002"}),"\n",(0,n.jsx)(s.li,{children:"Catalog \u540d\u79f0\u5927\u5c0f\u5199\u654f\u611f\u3002"}),"\n"]}),"\n",(0,n.jsx)(s.h4,{id:"comment",children:(0,n.jsx)(s.code,{children:"comment"})}),"\n",(0,n.jsx)(s.p,{children:"Elasticsearch Catalog \u7684\u63cf\u8ff0\u3002\u6b64\u53c2\u6570\u4e3a\u53ef\u9009\u3002"}),"\n",(0,n.jsx)(s.h4,{id:"properties",children:"PROPERTIES"}),"\n",(0,n.jsx)(s.p,{children:"Elasticsearch Catalog \u7684\u5c5e\u6027\u3002\u652f\u6301\u5982\u4e0b\u5c5e\u6027\uff1a"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:(0,n.jsx)(s.strong,{children:"\u53c2\u6570"})}),(0,n.jsx)(s.th,{children:(0,n.jsx)(s.strong,{children:"\u662f\u5426\u5fc5\u987b"})}),(0,n.jsx)(s.th,{children:(0,n.jsx)(s.strong,{children:"\u9ed8\u8ba4\u503c"})}),(0,n.jsx)(s.th,{children:(0,n.jsx)(s.strong,{children:"\u8bf4\u660e"})})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"hosts"}),(0,n.jsx)(s.td,{children:"\u662f"}),(0,n.jsx)(s.td,{children:"\u65e0"}),(0,n.jsxs)(s.td,{children:["Elasticsearch \u96c6\u7fa4\u8fde\u63a5\u5730\u5740\uff0c\u7528\u4e8e\u83b7\u53d6 Elasticsearch \u7248\u672c\u53f7\u4ee5\u53ca\u7d22\u5f15\u7684\u5206\u7247\u5206\u5e03\u4fe1\u606f\uff0c\u53ef\u6307\u5b9a\u4e00\u4e2a\u6216\u591a\u4e2a\u3002StarRocks \u662f\u6839\u636e ",(0,n.jsx)(s.code,{children:"GET /_nodes/http"})," API \u8fd4\u56de\u7684\u5730\u5740\u548c Elasticsearch \u96c6\u7fa4\u8fdb\u884c\u901a\u8baf\uff0c\u6240\u4ee5 ",(0,n.jsx)(s.code,{children:"hosts"})," \u53c2\u6570\u503c\u5fc5\u987b\u548c ",(0,n.jsx)(s.code,{children:"GET /_nodes/http"})," \u8fd4\u56de\u7684\u5730\u5740\u4e00\u81f4\uff0c\u5426\u5219\u53ef\u80fd\u5bfc\u81f4 BE \u65e0\u6cd5\u548c Elasticsearch \u96c6\u7fa4\u8fdb\u884c\u6b63\u5e38\u7684\u901a\u8baf\u3002"]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"type"}),(0,n.jsx)(s.td,{children:"\u662f"}),(0,n.jsx)(s.td,{children:"\u65e0"}),(0,n.jsxs)(s.td,{children:["\u6570\u636e\u6e90\u7684\u7c7b\u578b\u3002\u521b\u5efa Elasticsearch Catalog \u65f6\uff0c\u5fc5\u987b\u8bbe\u7f6e\u4e3a ",(0,n.jsx)(s.code,{children:"es"}),"\u3002"]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"user"}),(0,n.jsx)(s.td,{children:"\u5426"}),(0,n.jsx)(s.td,{children:"\u7a7a"}),(0,n.jsxs)(s.td,{children:["\u5f00\u542f HTTP Basic \u8ba4\u8bc1\u7684 Elasticsearch \u96c6\u7fa4\u7684\u7528\u6237\u540d\uff0c\u9700\u8981\u786e\u4fdd\u8be5\u7528\u6237\u6709\u8bbf\u95ee ",(0,n.jsx)(s.code,{children:"/cluster/state/ nodes/http"})," \u7b49\u8def\u5f84\u6743\u9650\u548c\u5bf9\u7d22\u5f15\u7684\u8bfb\u53d6\u6743\u9650\u3002"]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"password"}),(0,n.jsx)(s.td,{children:"\u5426"}),(0,n.jsx)(s.td,{children:"\u7a7a"}),(0,n.jsx)(s.td,{children:"\u5bf9\u5e94\u7528\u6237\u7684\u5bc6\u7801\u4fe1\u606f\u3002"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"es.type"}),(0,n.jsx)(s.td,{children:"\u5426"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"_doc"})}),(0,n.jsx)(s.td,{children:"\u6307\u5b9a\u7d22\u5f15\u7684\u7c7b\u578b\u3002\u5982\u679c\u60a8\u8981\u67e5\u8be2\u7684\u662f\u6570\u636e\u662f\u5728 Elasticsearch 8 \u53ca\u4ee5\u4e0a\u7248\u672c\uff0c\u90a3\u4e48\u5728 StarRocks \u4e2d\u521b\u5efa\u5916\u90e8\u8868\u65f6\u5c31\u4e0d\u9700\u8981\u914d\u7f6e\u8be5\u53c2\u6570\uff0c\u56e0\u4e3a Elasticsearch 8 \u4ee5\u53ca\u4e0a\u7248\u672c\u5df2\u7ecf\u79fb\u9664\u4e86 mapping types\u3002"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"es.nodes.wan.only"}),(0,n.jsx)(s.td,{children:"\u5426"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"false"})}),(0,n.jsxs)(s.td,{children:["\u8868\u793a StarRocks \u662f\u5426\u4ec5\u4f7f\u7528 ",(0,n.jsx)(s.code,{children:"hosts"})," \u6307\u5b9a\u7684\u5730\u5740\uff0c\u53bb\u8bbf\u95ee Elasticsearch \u96c6\u7fa4\u5e76\u83b7\u53d6\u6570\u636e\u3002\u81ea 2.3.0 \u7248\u672c\u8d77\uff0cStarRocks \u652f\u6301\u914d\u7f6e\u8be5\u53c2\u6570\u3002",(0,n.jsxs)("ul",{children:[(0,n.jsxs)("li",{children:[(0,n.jsx)(s.code,{children:"true"}),"\uff1aStarRocks \u4ec5\u4f7f\u7528 ",(0,n.jsx)(s.code,{children:"hosts"})," \u6307\u5b9a\u7684\u5730\u5740\u53bb\u8bbf\u95ee Elasticsearch \u96c6\u7fa4\u5e76\u83b7\u53d6\u6570\u636e\uff0c\u4e0d\u4f1a\u63a2\u6d4b Elasticsearch \u96c6\u7fa4\u7684\u7d22\u5f15\u6bcf\u4e2a\u5206\u7247\u6240\u5728\u7684\u6570\u636e\u8282\u70b9\u5730\u5740\u3002\u5982\u679c StarRocks \u65e0\u6cd5\u8bbf\u95ee Elasticsearch \u96c6\u7fa4\u5185\u90e8\u6570\u636e\u8282\u70b9\u7684\u5730\u5740\uff0c\u5219\u9700\u8981\u914d\u7f6e\u4e3a ",(0,n.jsx)(s.code,{children:"true"}),"\u3002"]}),(0,n.jsxs)("li",{children:[(0,n.jsx)(s.code,{children:"false"}),"\uff1aStarRocks \u901a\u8fc7 ",(0,n.jsx)(s.code,{children:"hosts"})," \u4e2d\u7684\u5730\u5740\uff0c\u63a2\u6d4b Elasticsearch \u96c6\u7fa4\u7d22\u5f15\u5404\u4e2a\u5206\u7247\u6240\u5728\u6570\u636e\u8282\u70b9\u7684\u5730\u5740\u3002StarRocks \u7ecf\u8fc7\u67e5\u8be2\u89c4\u5212\u540e\uff0c\u76f8\u5173 BE \u8282\u70b9\u4f1a\u76f4\u63a5\u53bb\u8bf7\u6c42 Elasticsearch \u96c6\u7fa4\u5185\u90e8\u7684\u6570\u636e\u8282\u70b9\uff0c\u83b7\u53d6\u7d22\u5f15\u7684\u5206\u7247\u6570\u636e\u3002\u5982\u679c StarRocks \u53ef\u4ee5\u8bbf\u95ee Elasticsearch \u96c6\u7fa4\u5185\u90e8\u6570\u636e\u8282\u70b9\u7684\u5730\u5740\uff0c\u5219\u5efa\u8bae\u4fdd\u6301\u9ed8\u8ba4\u503c ",(0,n.jsx)(s.code,{children:"false"}),"\u3002"]})]})]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"es.net.ssl"}),(0,n.jsx)(s.td,{children:"\u5426"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"false"})}),(0,n.jsxs)(s.td,{children:["\u662f\u5426\u5141\u8bb8\u4f7f\u7528 HTTPS \u534f\u8bae\u8bbf\u95ee Elasticsearch \u96c6\u7fa4\u3002\u81ea 2.4 \u7248\u672c\u8d77\uff0cStarRocks \u652f\u6301\u914d\u7f6e\u8be5\u53c2\u6570\u3002",(0,n.jsxs)("ul",{children:[(0,n.jsxs)("li",{children:[(0,n.jsx)(s.code,{children:"true"}),"\uff1a\u5141\u8bb8\uff0cHTTP \u534f\u8bae\u548c HTTPS \u534f\u8bae\u5747\u53ef\u8bbf\u95ee\u3002"]}),(0,n.jsxs)("li",{children:[(0,n.jsx)(s.code,{children:"false"}),"\uff1a\u4e0d\u5141\u8bb8\uff0c\u53ea\u80fd\u4f7f\u7528 HTTP \u534f\u8bae\u8bbf\u95ee\u3002"]})]})]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"enable_docvalue_scan"}),(0,n.jsx)(s.td,{children:"\u5426"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"true"})}),(0,n.jsx)(s.td,{children:"\u662f\u5426\u4ece Elasticsearch \u5217\u5f0f\u5b58\u50a8\u83b7\u53d6\u67e5\u8be2\u5b57\u6bb5\u7684\u503c\u3002\u591a\u6570\u60c5\u51b5\u4e0b\uff0c\u4ece\u5217\u5f0f\u5b58\u50a8\u4e2d\u8bfb\u53d6\u6570\u636e\u7684\u6027\u80fd\u8981\u4f18\u4e8e\u4ece\u884c\u5f0f\u5b58\u50a8\u4e2d\u8bfb\u53d6\u6570\u636e\u7684\u6027\u80fd\u3002"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"enable_keyword_sniff"}),(0,n.jsx)(s.td,{children:"\u5426"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"true"})}),(0,n.jsxs)(s.td,{children:["\u662f\u5426\u5bf9 Elasticsearch \u4e2d TEXT \u7c7b\u578b\u7684\u5b57\u6bb5\u8fdb\u884c\u63a2\u6d4b\uff0c\u901a\u8fc7 KEYWORD \u7c7b\u578b\u5b57\u6bb5\u8fdb\u884c\u67e5\u8be2\u3002\u8bbe\u7f6e\u4e3a ",(0,n.jsx)(s.code,{children:"false"})," \u4f1a\u6309\u7167\u5206\u8bcd\u540e\u7684\u5185\u5bb9\u5339\u914d\u3002"]})]})]})]}),"\n",(0,n.jsx)(s.h3,{id:"\u521b\u5efa\u793a\u4f8b",children:"\u521b\u5efa\u793a\u4f8b"}),"\n",(0,n.jsxs)(s.p,{children:["\u6267\u884c\u5982\u4e0b\u8bed\u53e5\u521b\u5efa\u4e00\u4e2a\u540d\u4e3a ",(0,n.jsx)(s.code,{children:"es_test"})," \u7684 Elasticsearch Catalog\uff1a"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-SQL",children:'CREATE EXTERNAL CATALOG es_test\nCOMMENT \'test123\'\nPROPERTIES\n(\n    "type" = "es",\n    "es.type" = "_doc",\n    "hosts" = "https://xxx:9200",\n    "es.net.ssl" = "true",\n    "user" = "admin",\n    "password" = "xxx",\n    "es.nodes.wan.only" = "true"\n);\n'})}),"\n",(0,n.jsx)(s.h2,{id:"\u8c13\u8bcd\u4e0b\u63a8",children:"\u8c13\u8bcd\u4e0b\u63a8"}),"\n",(0,n.jsx)(s.p,{children:"StarRocks \u652f\u6301\u5bf9 Elasticsearch \u8868\u8fdb\u884c\u8c13\u8bcd\u4e0b\u63a8\uff0c\u628a\u8fc7\u6ee4\u6761\u4ef6\u63a8\u7ed9 Elasticsearch \u8fdb\u884c\u6267\u884c\uff0c\u8ba9\u6267\u884c\u5c3d\u91cf\u9760\u8fd1\u5b58\u50a8\uff0c\u63d0\u9ad8\u67e5\u8be2\u6027\u80fd\u3002\u76ee\u524d\u652f\u6301\u4e0b\u63a8\u7684\u7b97\u5b50\u89c1\u4e0b\u8868\uff1a"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"SQL syntax"}),(0,n.jsx)(s.th,{children:"Elasticsearch syntax"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"="})}),(0,n.jsx)(s.td,{children:"term query"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"in"})}),(0,n.jsx)(s.td,{children:"terms query"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsxs)(s.td,{children:[(0,n.jsx)(s.code,{children:">="}),", ",(0,n.jsx)(s.code,{children:"<="}),", ",(0,n.jsx)(s.code,{children:">"}),", ",(0,n.jsx)(s.code,{children:"<"})]}),(0,n.jsx)(s.td,{children:"range"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"and"})}),(0,n.jsx)(s.td,{children:"bool.filter"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"or"})}),(0,n.jsx)(s.td,{children:"bool.should"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"not"})}),(0,n.jsx)(s.td,{children:"bool.must_not"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"not in"})}),(0,n.jsx)(s.td,{children:"bool.must_not + terms"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"esquery"})}),(0,n.jsx)(s.td,{children:"ES Query DSL"})]})]})]}),"\n",(0,n.jsx)(s.h2,{id:"\u67e5\u8be2\u793a\u4f8b",children:"\u67e5\u8be2\u793a\u4f8b"}),"\n",(0,n.jsxs)(s.p,{children:["\u901a\u8fc7 ",(0,n.jsx)(s.code,{children:"esquery()"})," \u51fd\u6570\u5c06\u4e00\u4e9b\u65e0\u6cd5\u7528 SQL \u8868\u8ff0\u7684 Elasticsearch \u67e5\u8be2\uff08\u5982 Match \u67e5\u8be2\u548c Geoshape \u67e5\u8be2\u7b49\uff09\u4e0b\u63a8\u7ed9 Elasticsearch \u8fdb\u884c\u8fc7\u6ee4\u5904\u7406\u3002",(0,n.jsx)(s.code,{children:"esquery()"})," \u7684\u7b2c\u4e00\u4e2a\u5217\u540d\u53c2\u6570\u7528\u4e8e\u5173\u8054\u7d22\u5f15\uff0c\u7b2c\u4e8c\u4e2a\u53c2\u6570\u662f Elasticsearch \u7684\u57fa\u672c Query DSL \u7684 JSON \u8868\u8ff0\uff0c\u4f7f\u7528\u82b1\u62ec\u53f7\uff08",(0,n.jsx)(s.code,{children:"{}"}),"\uff09\u5305\u542b\uff0cJSON \u7684\u6839\u952e (Root Key) \u6709\u4e14\u53ea\u80fd\u6709\u4e00\u4e2a\uff0c\u5982 ",(0,n.jsx)(s.code,{children:"match"}),"\u3001",(0,n.jsx)(s.code,{children:"geo_shape"})," \u6216 ",(0,n.jsx)(s.code,{children:"bool"})," \u7b49\u3002"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"Match \u67e5\u8be2"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-SQL",children:'SELECT * FROM es_table WHERE esquery(k4, \'{\n   "match": {\n      "k4": "StarRocks on elasticsearch"\n   }\n}\');\n'})}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"Geoshape \u67e5\u8be2"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-SQL",children:'SELECT * FROM es_table WHERE esquery(k4, \'{\n"geo_shape": {\n   "location": {\n      "shape": {\n         "type": "envelope",\n         "coordinates": [\n            [\n               13,\n               53\n            ],\n            [\n               14,\n               52\n            ]\n         ]\n      },\n      "relation": "within"\n   }\n}\n}\');\n'})}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"Boolean \u67e5\u8be2"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-SQL",children:'SELECT * FROM es_table WHERE esquery(k4, \' {\n   "bool": {\n      "must": [\n         {\n            "terms": {\n               "k1": [\n                  11,\n                  12\n               ]\n            }\n         },\n         {\n            "terms": {\n               "k2": [\n                  100\n               ]\n            }\n         }\n      ]\n   }\n}\');\n'})}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"\u6ce8\u610f\u4e8b\u9879",children:"\u6ce8\u610f\u4e8b\u9879"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Elasticsearch 5.x \u7248\u672c\u4e4b\u524d\u548c\u4e4b\u540e\u7684\u6570\u636e\u626b\u63cf\u65b9\u5f0f\u4e0d\u540c\uff0c\u76ee\u524d StarRocks \u53ea\u652f\u6301\u67e5\u8be2 Elasticsearch 5.x \u7248\u672c\u4e4b\u540e\u7684\u7248\u672c\u3002"}),"\n",(0,n.jsx)(s.li,{children:"\u652f\u6301\u67e5\u8be2\u4f7f\u7528 HTTP Basic \u8ba4\u8bc1\u7684 Elasticsearch \u96c6\u7fa4\u3002"}),"\n",(0,n.jsxs)(s.li,{children:["\u4e00\u4e9b\u901a\u8fc7 StarRocks \u7684\u67e5\u8be2\u4f1a\u6bd4\u76f4\u63a5\u8bf7\u6c42 Elasticsearch \u4f1a\u6162\u5f88\u591a\uff0c\u6bd4\u5982 ",(0,n.jsx)(s.code,{children:"count()"})," \u76f8\u5173\u67e5\u8be2\u3002\u8fd9\u662f\u56e0\u4e3a Elasticsearch \u5185\u90e8\u4f1a\u76f4\u63a5\u8bfb\u53d6\u6ee1\u8db3\u6761\u4ef6\u7684\u6587\u6863\u4e2a\u6570\u76f8\u5173\u7684\u5143\u6570\u636e\uff0c\u4e0d\u9700\u8981\u5bf9\u771f\u5b9e\u7684\u6570\u636e\u8fdb\u884c\u8fc7\u6ee4\u64cd\u4f5c\uff0c\u4f7f\u5f97 ",(0,n.jsx)(s.code,{children:"count()"})," \u7684\u901f\u5ea6\u975e\u5e38\u5feb\u3002"]}),"\n"]})]})}const o=function(e={}){const{wrapper:s}=Object.assign({},(0,l.ah)(),e.components);return s?(0,n.jsx)(s,Object.assign({},e,{children:(0,n.jsx)(h,e)})):h(e)}},11151:(e,s,c)=>{c.d(s,{Zo:()=>d,ah:()=>r});var n=c(67294);const l=n.createContext({});function r(e){const s=n.useContext(l);return n.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const t={};function d({components:e,children:s,disableParentContext:c}){let d;return d=c?"function"==typeof e?e({}):e||t:r(e),n.createElement(l.Provider,{value:d},s)}}}]);