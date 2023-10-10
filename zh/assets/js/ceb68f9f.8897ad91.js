"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[48213],{96356:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>g,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var t=s(85893),r=s(11151);const i={},a="Sorted streaming aggregate",c={id:"using_starrocks/sorted_aggregate",title:"Sorted streaming aggregate",description:"\u6570\u636e\u5e93\u5e38\u89c1\u7684\u805a\u5408\u65b9\u6cd5\u6709 Hash \u805a\u5408\u548c\u6392\u5e8f\u805a\u5408\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.1/using_starrocks/sorted_aggregate.md",sourceDirName:"using_starrocks",slug:"/using_starrocks/sorted_aggregate",permalink:"/docusaurusv3/zh/docs/latest/using_starrocks/sorted_aggregate",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/using_starrocks/sorted_aggregate.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"\u4f7f\u7528 HyperLogLog \u5b9e\u73b0\u8fd1\u4f3c\u53bb\u91cd",permalink:"/docusaurusv3/zh/docs/latest/using_starrocks/Using_HLL"},next:{title:"Integrations",permalink:"/docusaurusv3/zh/docs/latest/category/integrations"}},d={},l=[{value:"\u539f\u7406",id:"\u539f\u7406",level:2},{value:"\u4f7f\u7528\u9650\u5236",id:"\u4f7f\u7528\u9650\u5236",level:2},{value:"\u4f7f\u7528\u793a\u4f8b",id:"\u4f7f\u7528\u793a\u4f8b",level:2},{value:"\u5224\u65ad\u662f\u5426\u5f00\u542f",id:"\u5224\u65ad\u662f\u5426\u5f00\u542f",level:2}];function o(e){const n=Object.assign({h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code",ul:"ul",li:"li",ol:"ol"},(0,r.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"sorted-streaming-aggregate",children:"Sorted streaming aggregate"}),"\n",(0,t.jsx)(n.p,{children:"\u6570\u636e\u5e93\u5e38\u89c1\u7684\u805a\u5408\u65b9\u6cd5\u6709 Hash \u805a\u5408\u548c\u6392\u5e8f\u805a\u5408\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u4ece 2.5 \u7248\u672c\u5f00\u59cb\uff0cStarRocks \u652f\u6301\u4e86\u6709\u5e8f\u7684\u6392\u5e8f\u805a\u5408 (Sorted streaming aggregate)\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u539f\u7406",children:"\u539f\u7406"}),"\n",(0,t.jsx)(n.p,{children:"\u805a\u5408\u8282\u70b9\u4e3b\u8981\u5904\u7406 GROUP BY \u5206\u7ec4\u548c\u805a\u5408\u51fd\u6570\u8ba1\u7b97\u3002"}),"\n",(0,t.jsx)(n.p,{children:"Sorted streaming aggregate \u53ef\u4ee5\u6839\u636e\u8f93\u5165 key \u7684\u6709\u5e8f\u6027\uff0c\u901a\u8fc7\u76f4\u63a5\u6bd4\u8f83 GROUP BY \u5217\u7684\u65b9\u5f0f\u76f4\u63a5\u8fdb\u884c\u5206\u7ec4\uff0c\u4e0d\u9700\u8981\u6784\u5efa hash \u8868\uff0c\u53ef\u4ee5\u6709\u6548\u7684\u51cf\u5c11\u805a\u5408\u8ba1\u7b97\u4e2d\u7684\u5185\u5b58\u4f7f\u7528\u3002\u5728\u805a\u5408\u57fa\u6570\u6bd4\u8f83\u9ad8\u7684\u60c5\u51b5\u4e0b\uff0c\u53ef\u4ee5\u63d0\u5347\u805a\u5408\u6027\u80fd\uff0c\u964d\u4f4e\u5185\u5b58\u4f7f\u7528\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u60a8\u53ef\u4ee5\u901a\u8fc7\u8bbe\u7f6e\u53d8\u91cf\u6765\u5f00\u542f Sorted streaming aggregate:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:"set enable_sort_aggregate=true;\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u4f7f\u7528\u9650\u5236",children:"\u4f7f\u7528\u9650\u5236"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["GROUP BY \u91cc\u7684 key \u9700\u8981\u662f\u505a\u597d\u6392\u5e8f\u7684:\n\u6bd4\u5982\u8868\u7684\u6392\u5e8f\u5217\u662f ",(0,t.jsx)(n.code,{children:"k1,k2,k3"}),"\uff0c\u90a3\u4e48:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"GROUP BY k1"})," \u548c ",(0,t.jsx)(n.code,{children:"GROUP BY k1, k2"})," \u662f\u53ef\u4ee5\u7684\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"GROUP BY k1, k3"})," \u662f\u4e0d\u80fd\u4fdd\u8bc1\u6392\u5e8f\u7684\uff0c\u6240\u4ee5 Sorted streaming aggregate \u65e0\u6cd5\u751f\u6548\u3002"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"\u9009\u62e9\u7684\u5206\u533a\u53ea\u80fd\u662f\u4e00\u4e2a\u5206\u533a (\u56e0\u4e3a\u4e0d\u540c\u5206\u533a\u4e2d\u540c\u4e00\u4e2a key \u53ef\u80fd\u5206\u5e03\u5728\u4e0d\u540c\u673a\u5668\u4e0a)\u3002"}),"\n",(0,t.jsxs)(n.li,{children:["GROUP BY \u4e2d\u7684 key \u9700\u8981\u548c\u5efa\u8868\u65f6\u6307\u5b9a\u7684\u5206\u6876\u952e\u7684\u5206\u5e03\u987a\u5e8f\u4e00\u81f4\u3002\n\u6bd4\u5982\u540c\u6837\u6709\u4e09\u5217\u6570\u636e ",(0,t.jsx)(n.code,{children:"k1,k2,k3"}),"\uff0c\u53ef\u4ee5\u8ba9\u6570\u636e\u6839\u636e ",(0,t.jsx)(n.code,{children:"k1"})," \u6216\u8005 ",(0,t.jsx)(n.code,{children:"k1,k2"})," \u8fdb\u884c\u5206\u6876\u3002","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\u5982\u679c\u6839\u636e ",(0,t.jsx)(n.code,{children:"k1"})," \u8fdb\u884c\u5206\u6876\uff0c\u652f\u6301 ",(0,t.jsx)(n.code,{children:"GROUP BY k1"}),"\uff0c",(0,t.jsx)(n.code,{children:"GROUP BY k1, k2"}),"\uff0c",(0,t.jsx)(n.code,{children:"GROUP BY k1,k2,k3"}),"\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:["\u5982\u679c\u6839\u636e ",(0,t.jsx)(n.code,{children:"k1,k2"})," \u8fdb\u884c\u5206\u6876\uff0c\u652f\u6301 ",(0,t.jsx)(n.code,{children:"GROUP BY k1,k2"}),"\uff0c",(0,t.jsx)(n.code,{children:"GROUP BY k1,k2,k3"}),"\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:["\u5bf9\u4e8e\u4e0d\u7b26\u5408\u6761\u4ef6\u7684\u67e5\u8be2 plan\uff0c\u5373\u4f7f\u5f00\u542f\u4e86 ",(0,t.jsx)(n.code,{children:"enable_sort_aggregate"}),"\uff0csorted streaming aggregate \u4e5f\u65e0\u6cd5\u751f\u6548\u3002"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"\u5fc5\u987b\u662f\u4e00\u9636\u6bb5\u805a\u5408\uff08\u5373 AGG \u8282\u70b9\u4e0b\u9762\u53ea\u8fde\u63a5\u4e00\u4e2a Scan node\uff09\u3002"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u4f7f\u7528\u793a\u4f8b",children:"\u4f7f\u7528\u793a\u4f8b"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u5efa\u8868\u5e76\u63d2\u5165\u6570\u636e\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:'CREATE TABLE `test_sorted_streaming_agg_basic`\n(\n    `id_int` int(11) NOT NULL COMMENT "",\n    `id_string` varchar(100) NOT NULL COMMENT ""\n)\nENGINE=OLAP \nDUPLICATE KEY(`id_int`)\nCOMMENT "OLAP"\nDISTRIBUTED BY HASH(`id_int`)\nPROPERTIES (\n"replication_num" = "3"\n); \n\nINSERT INTO test_sorted_streaming_agg_basic VALUES\n(1, \'v1\'),\n(2, \'v2\'),\n(3, \'v3\'),\n(1, \'v4\');\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u5f00\u542f Sorted streaming aggregate\u3002\u4f7f\u7528 EXPLAIN \u67e5\u770b\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:"set enable_sort_aggregate = true;\n\nexplain costs select id_int, max(id_string)\nfrom test_sorted_streaming_agg_basic\ngroup by id_int;\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u5224\u65ad\u662f\u5426\u5f00\u542f",children:"\u5224\u65ad\u662f\u5426\u5f00\u542f"}),"\n",(0,t.jsx)(n.p,{children:"\u67e5\u770b Explain costs \u7684\u7ed3\u679c\u3002\u5982\u679c\u53ef\u4ee5\u4ece AGG \u8282\u70b9\u4e2d\u627e\u5230 sorted streaming \u5b57\u6bb5\uff0c\u8bc1\u660e\u5df2\u5f00\u542f\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-C++",children:"|                                                                                                                                    |\n|   1:AGGREGATE (update finalize)                                                                                                    |\n|   |  aggregate: max[([2: id_string, VARCHAR, false]); args: VARCHAR; result: VARCHAR; args nullable: false; result nullable: true] |\n|   |  group by: [1: id_int, INT, false]                                                                                             |\n|   |  sorted streaming: true                                                                                                        |\n|   |  cardinality: 1                                                                                                                |\n|   |  column statistics:                                                                                                            |\n|   |  * id_int--\x3e[-Infinity, Infinity, 0.0, 1.0, 1.0] UNKNOWN                                                                       |\n|   |  * max--\x3e[-Infinity, Infinity, 0.0, 1.0, 1.0] UNKNOWN                                                                          |\n|   |                                                                                                                                |\n|   0:OlapScanNode                                                                                                                   |\n|      table: test_sorted_streaming_agg_basic, rollup: test_sorted_streaming_agg_basic                                               |\n|      preAggregation: on                                                                                                            |\n|      partitionsRatio=1/1, tabletsRatio=10/10                                                                                       |\n|      tabletList=30672,30674,30676,30678,30680,30682,30684,30686,30688,30690                                                        |\n|      actualRows=0, avgRowSize=2.0                                                                                                  |\n|      cardinality: 1                                                                                                                |\n|      column statistics:                                                                                                            |\n|      * id_int--\x3e[-Infinity, Infinity, 0.0, 1.0, 1.0] UNKNOWN                                                                       |\n|      * id_string--\x3e[-Infinity, Infinity, 0.0, 1.0, 1.0] UNKNOWN                                                                    |\n"})})]})}const g=function(e={}){const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(o,e)})):o(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>c,ah:()=>i});var t=s(67294);const r=t.createContext({});function i(e){const n=t.useContext(r);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const a={};function c({components:e,children:n,disableParentContext:s}){let c;return c=s?"function"==typeof e?e({}):e||a:i(e),t.createElement(r.Provider,{value:c},n)}}}]);