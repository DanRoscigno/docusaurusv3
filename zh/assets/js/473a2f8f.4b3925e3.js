"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[25940],{42115:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>o});var t=s(85893),l=s(11151);const r={displayed_sidebar:"Chinese31"},i="\u4f7f\u7528 Lateral Join \u5b9e\u73b0\u5217\u8f6c\u884c",a={id:"using_starrocks/Lateral_join",title:"\u4f7f\u7528 Lateral Join \u5b9e\u73b0\u5217\u8f6c\u884c",description:"\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528 Lateral Join \u529f\u80fd\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.0/using_starrocks/Lateral_join.md",sourceDirName:"using_starrocks",slug:"/using_starrocks/Lateral_join",permalink:"/doc/zh/docs/3.0/using_starrocks/Lateral_join",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/using_starrocks/Lateral_join.md",tags:[],version:"3.0",frontMatter:{displayed_sidebar:"Chinese31"},sidebar:"Chinese31",previous:{title:"Colocate Join",permalink:"/doc/zh/docs/3.0/using_starrocks/Colocate_join"},next:{title:"Query Cache",permalink:"/doc/zh/docs/3.0/using_starrocks/query_cache"}},c={},o=[{value:"\u4f7f\u7528 Lateral Join",id:"\u4f7f\u7528-lateral-join",level:2},{value:"\u5c55\u5f00 STRING \u7c7b\u578b\u6570\u636e",id:"\u5c55\u5f00-string-\u7c7b\u578b\u6570\u636e",level:3},{value:"\u5c55\u5f00 ARRAY \u7c7b\u578b\u6570\u636e",id:"\u5c55\u5f00-array-\u7c7b\u578b\u6570\u636e",level:3},{value:"\u5c55\u5f00 Bitmap \u7c7b\u578b\u6570\u636e",id:"\u5c55\u5f00-bitmap-\u7c7b\u578b\u6570\u636e",level:3},{value:"Keywords",id:"keywords",level:2}];function d(n){const e=Object.assign({h1:"h1",p:"p",a:"a",blockquote:"blockquote",ul:"ul",li:"li",h2:"h2",pre:"pre",code:"code",img:"img",h3:"h3",ol:"ol",strong:"strong"},(0,l.ah)(),n.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"\u4f7f\u7528-lateral-join-\u5b9e\u73b0\u5217\u8f6c\u884c",children:"\u4f7f\u7528 Lateral Join \u5b9e\u73b0\u5217\u8f6c\u884c"}),"\n",(0,t.jsx)(e.p,{children:"\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528 Lateral Join \u529f\u80fd\u3002"}),"\n",(0,t.jsxs)(e.p,{children:["\u300c\u884c\u5217\u8f6c\u5316\u300d\u662f ETL \u5904\u7406\u8fc7\u7a0b\u4e2d\u5e38\u89c1\u7684\u64cd\u4f5c\u3002Lateral Join \u529f\u80fd\u80fd\u591f\u5c06\u6bcf\u884c\u6570\u636e\u548c\u5185\u90e8\u7684\u5b50\u67e5\u8be2\u6216\u8005 Table Function \u5173\u8054\u3002\u901a\u8fc7 Lateral Join \u4e0e Unnest \u529f\u80fd\u914d\u5408\uff0c\u60a8\u53ef\u4ee5\u5b9e\u73b0\u4e00\u884c\u8f6c\u591a\u884c\u7684\u529f\u80fd\u3002Unnest \u662f\u4e00\u79cd Table Function\uff0c\u53ef\u4ee5\u628a\u6570\u7ec4\u7c7b\u578b\u8f6c\u5316\u6210 Table \u7684\u591a\u884c\u3002\u66f4\u591a\u4fe1\u606f\uff0c\u53c2\u89c1 ",(0,t.jsx)(e.a,{href:"/doc/zh/docs/3.0/sql-reference/sql-functions/array-functions/unnest",children:"unnest"}),"\u3002"]}),"\n",(0,t.jsxs)(e.blockquote,{children:["\n",(0,t.jsx)(e.p,{children:"\u6ce8\u610f"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u5f53\u524d\u7248\u672c\u4e2d\uff0cLateral Join \u4ec5\u7528\u4e8e\u548c Unnest \u51fd\u6570\u914d\u5408\u4f7f\u7528\uff0c\u5b9e\u73b0\u5217\u8f6c\u884c\u7684\u529f\u80fd\u3002\u540e\u7eed\u4f1a\u652f\u6301\u914d\u5408\u5176\u4ed6 Table Function \u6216 UDTF\u3002"}),"\n",(0,t.jsx)(e.li,{children:"\u5f53\u524d\u7248\u672c\u4e2d\uff0cLateral Join \u6682\u4e0d\u652f\u6301\u5b50\u67e5\u8be2\u3002"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"\u4f7f\u7528-lateral-join",children:"\u4f7f\u7528 Lateral Join"}),"\n",(0,t.jsx)(e.p,{children:"Lateral Join \u529f\u80fd\u7684\u8bed\u6cd5\u5982\u4e0b\uff1a"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-SQL",children:"from table_reference join [lateral] table_reference;\n"})}),"\n",(0,t.jsx)(e.p,{children:"\u60a8\u53ef\u4ee5\u7ed3\u5408 Lateral Join \u529f\u80fd\u4e0e Unnest \u529f\u80fd\u5b9e\u73b0\u5e38\u89c1\u7684\u884c\u5c55\u5f00\u903b\u8f91\u3002"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-SQL",children:"-- \u5b8c\u6574 SQL \u8bed\u53e5\u3002\nSELECT student, score, t.unnest\nFROM tests\nCROSS JOIN LATERAL UNNEST(scores) AS t;\n\n-- \u7b80\u5316 SQL \u8bed\u53e5\u3002\u60a8\u53ef\u4ee5\u4f7f\u7528 Unnest \u5173\u952e\u5b57\u7701\u7565 Lateral Join \u5173\u952e\u5b57\u3002\nSELECT student, score, t.unnest\nFROM tests, UNNEST(scores) AS t;\n"})}),"\n",(0,t.jsxs)(e.blockquote,{children:["\n",(0,t.jsx)(e.p,{children:"\u6ce8\u610f"}),"\n",(0,t.jsxs)(e.p,{children:["\u591a\u5217 Unnest \u64cd\u4f5c\u9700\u8981\u6307\u5b9a\u522b\u540d\u3002\u4f8b\u5982\uff1a",(0,t.jsx)(e.code,{children:"select v1, t1.unnest as v2, t2.unnest as v3 from lateral_test, unnest(v2) t1 ,unnest(v3) t2;"}),"\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:"StarRocks \u652f\u6301\u7684 BITMAP\u3001STRING\u3001ARRAY\u3001Column \u4e4b\u95f4\u7684\u7c7b\u578b\u8f6c\u5316\u5173\u7cfb\u5982\u4e0b\u3002"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{alt:"Lateral Join \u4e2d\u6570\u636e\u7c7b\u578b\u95f4\u7684\u8f6c\u5316",src:s(12834).Z+"",width:"518",height:"304"})}),"\n",(0,t.jsx)(e.h3,{id:"\u5c55\u5f00-string-\u7c7b\u578b\u6570\u636e",children:"\u5c55\u5f00 STRING \u7c7b\u578b\u6570\u636e"}),"\n",(0,t.jsx)(e.p,{children:"\u60a8\u53ef\u4ee5\u4f7f\u7528 Lateral Join \u529f\u80fd\u914d\u5408 Unnest \u529f\u80fd\u5c06 STRING \u7c7b\u578b\u6570\u636e\u5c55\u5f00\u4e3a\u591a\u884c\u6570\u636e\u3002"}),"\n",(0,t.jsx)(e.p,{children:"\u793a\u4f8b\uff1a"}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"\u521b\u5efa\u6d4b\u8bd5\u7528\u8868\u5e76\u63d2\u5165\u6d4b\u8bd5\u6570\u636e\u3002"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-SQL",children:'CREATE TABLE lateral_test2 (\n    `v1` bigint(20) NULL COMMENT "",\n    `v2` string NULL COMMENT "",\n    `v3` string NULL COMMENT ""\n)\nduplicate key(v1)\nDISTRIBUTED BY HASH(`v1`)\nPROPERTIES (\n    "replication_num" = "3",\n    "storage_format" = "DEFAULT"\n);\n\ninsert into lateral_test2 values (1, "1,2,3","1,2"), (2, "1,3","1,3");\n'})}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"\u68c0\u67e5\u5c55\u5f00\u524d\u7684\u6570\u636e\u3002"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-Plain",metastring:"Text",children:"mysql> select * from lateral_test2;\n\n+------+-------+------+\n| v1   | v2    | v3   |\n+------+-------+------+\n|    1 | 1,2,3 | 1,2  |\n|    2 | 1,3   | 1,3  |\n+------+-------+------+\n"})}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"\u5c55\u5f00 STRING \u6570\u636e\u3002"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-Plain",metastring:"Text",children:'-- \u5bf9\u5355\u884c\u6570\u636e\u8fdb\u884c Unnest \u64cd\u4f5c\u3002\nmysql> select v1, unnest from lateral_test2, unnest(split(v2, ","));\n\n+------+--------+\n| v1   | unnest |\n+------+--------+\n|    1 | 1      |\n|    1 | 2      |\n|    1 | 3      |\n|    2 | 1      |\n|    2 | 3      |\n+------+--------+\n\n-- \u5bf9\u591a\u884c\u6570\u636e\u8fdb\u884c Unnest \u64cd\u4f5c\uff0c\u9700\u8981\u6307\u5b9a\u522b\u540d\u3002\nmysql> select v1, t1.unnest as v2, t2.unnest as v3 from lateral_test2, unnest(split(v2, ",")) t1, unnest(split(v3, ",")) t2;\n\n+------+------+------+\n| v1   | v2   | v3   |\n+------+------+------+\n|    1 | 1    | 1    |\n|    1 | 1    | 2    |\n|    1 | 2    | 1    |\n|    1 | 2    | 2    |\n|    1 | 3    | 1    |\n|    1 | 3    | 2    |\n|    2 | 1    | 1    |\n|    2 | 1    | 3    |\n|    2 | 3    | 1    |\n|    2 | 3    | 3    |\n+------+------+------+\n'})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(e.h3,{id:"\u5c55\u5f00-array-\u7c7b\u578b\u6570\u636e",children:"\u5c55\u5f00 ARRAY \u7c7b\u578b\u6570\u636e"}),"\n",(0,t.jsxs)(e.p,{children:["\u60a8\u53ef\u4ee5\u4f7f\u7528 Lateral Join \u529f\u80fd\u914d\u5408 Unnest \u529f\u80fd\u5c06 ARRAY \u7c7b\u578b\u6570\u636e\u5c55\u5f00\u4e3a\u591a\u884c\u6570\u636e\u3002",(0,t.jsx)(e.strong,{children:"\u4ece 2.5 \u7248\u672c\u5f00\u59cb\uff0cUnnest \u652f\u6301\u4f20\u5165\u591a\u4e2a array\uff0c\u5e76\u4e14\u591a\u4e2a array \u7684\u5143\u7d20\u7c7b\u578b\u548c\u957f\u5ea6\u53ef\u4ee5\u4e0d\u540c\u3002"})]}),"\n",(0,t.jsx)(e.p,{children:"\u793a\u4f8b\uff1a"}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"\u521b\u5efa\u6d4b\u8bd5\u7528\u8868\u5e76\u63d2\u5165\u6d4b\u8bd5\u6570\u636e\u3002"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-SQL",children:'CREATE TABLE lateral_test (\n    `v1` bigint(20) NULL COMMENT "",\n    `v2` ARRAY<int> NULL COMMENT ""\n) \nduplicate key(v1)\nDISTRIBUTED BY HASH(`v1`)\nPROPERTIES (\n    "replication_num" = "3",\n    "storage_format" = "DEFAULT"\n);\n\ninsert into lateral_test values (1, [1,2]), (2, [1, null, 3]), (3, null);\n'})}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"\u68c0\u67e5\u5c55\u5f00\u524d\u7684\u6570\u636e\u3002"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-Plain",metastring:"Text",children:"mysql> select * from lateral_test;\n\n+------+------------+\n| v1   | v2         |\n+------+------------+\n|    1 | [1,2]      |\n|    2 | [1,null,3] |\n|    3 | NULL       |\n+------+------------+\n"})}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"\u5c55\u5f00 ARRAY \u6570\u636e\u3002"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-Plain",metastring:"Text",children:"mysql> select v1, v2, unnest from lateral_test, unnest(v2);\n\n+------+------------+--------+\n| v1   | v2         | unnest |\n+------+------------+--------+\n|    1 | [1,2]      |      1 |\n|    1 | [1,2]      |      2 |\n|    2 | [1,null,3] |      1 |\n|    2 | [1,null,3] |   NULL |\n|    2 | [1,null,3] |      3 |\n+------+------------+--------+\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(e.h3,{id:"\u5c55\u5f00-bitmap-\u7c7b\u578b\u6570\u636e",children:"\u5c55\u5f00 Bitmap \u7c7b\u578b\u6570\u636e"}),"\n",(0,t.jsx)(e.p,{children:"\u60a8\u53ef\u4ee5\u4f7f\u7528 Lateral Join \u529f\u80fd\u914d\u5408 Unnest \u529f\u80fd\u5c55\u5f00 Bitmap \u7c7b\u578b\u6570\u636e\u3002"}),"\n",(0,t.jsx)(e.p,{children:"\u793a\u4f8b\uff1a"}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"\u521b\u5efa\u6d4b\u8bd5\u7528\u8868\u5e76\u63d2\u5165\u6d4b\u8bd5\u6570\u636e\u3002"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-SQL",children:'CREATE TABLE lateral_test3 (\n`v1` bigint(20) NULL COMMENT "",\n`v2` Bitmap BITMAP_UNION COMMENT ""\n)\nAggregate key(v1)\nDISTRIBUTED BY HASH(`v1`);\n\ninsert into lateral_test3 values (1, bitmap_from_string(\'1, 2\')), (2, to_bitmap(3));\n'})}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:["\u68c0\u67e5\u5f53\u524d\u6570\u636e\u4e2d ",(0,t.jsx)(e.code,{children:"v1"})," \u4ee5\u53ca ",(0,t.jsx)(e.code,{children:"bitmap_to_string(v2)"}),"\u3002"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-Plain",metastring:"Text",children:"mysql> select v1, bitmap_to_string(v2) from lateral_test3;\n\n+------+------------------------+\n| v1   | bitmap_to_string(`v2`) |\n+------+------------------------+\n|    1 | 1,2                    |\n|    2 | 3                      |\n+------+------------------------+\n"})}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"\u63d2\u5165\u4e00\u884c\u65b0\u6570\u636e\u3002"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-Plain",metastring:"Text",children:"mysql> insert into lateral_test3 values (1, to_bitmap(3));\n"})}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:["\u68c0\u67e5\u65b0\u6570\u636e\u4e2d ",(0,t.jsx)(e.code,{children:"v1"})," \u4ee5\u53ca ",(0,t.jsx)(e.code,{children:"bitmap_to_string(v2)"}),"\u3002"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-Plain",metastring:"Text",children:"mysql> select v1, bitmap_to_string(v2) from lateral_test3;\n\n+------+------------------------+\n| v1   | bitmap_to_string(`v2`) |\n+------+------------------------+\n|    1 | 1,2,3                  |\n|    2 | 3                      |\n+------+------------------------+\n"})}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"\u5c55\u5f00 Bitmap \u7c7b\u578b\u6570\u636e\u3002"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-Plain",metastring:"Text",children:"mysql> select v1, unnest from lateral_test3, unnest(bitmap_to_array(v2));\n\n+------+--------+\n| v1   | unnest |\n+------+--------+\n|    1 |      1 |\n|    1 |      2 |\n|    1 |      3 |\n|    2 |      3 |\n+------+--------+\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"keywords",children:"Keywords"}),"\n",(0,t.jsx)(e.p,{children:"explode\uff0c\u7206\u88c2\u51fd\u6570"})]})}const h=function(n={}){const{wrapper:e}=Object.assign({},(0,l.ah)(),n.components);return e?(0,t.jsx)(e,Object.assign({},n,{children:(0,t.jsx)(d,n)})):d(n)}},12834:(n,e,s)=>{s.d(e,{Z:()=>t});const t=s.p+"assets/images/lateral_join_type_conversion-027fb0b377d3f8d621c7c5598ef9dbbd.png"},11151:(n,e,s)=>{s.d(e,{Zo:()=>a,ah:()=>r});var t=s(67294);const l=t.createContext({});function r(n){const e=t.useContext(l);return t.useMemo((()=>"function"==typeof n?n(e):{...e,...n}),[e,n])}const i={};function a({components:n,children:e,disableParentContext:s}){let a;return a=s?"function"==typeof n?n({}):n||i:r(n),t.createElement(l.Provider,{value:a},e)}}}]);