"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[54288],{90617:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>i,contentTitle:()=>d,default:()=>h,frontMatter:()=>c,metadata:()=>t,toc:()=>a});var l=s(85893),r=s(11151);const c={},d="AUTO_INCREMENT",t={id:"sql-reference/sql-statements/auto_increment",title:"AUTO_INCREMENT",description:"StarRocks \u81ea 3.0 \u7248\u672c\u8d77\u652f\u6301 AUTOINCREMENT \u5217\u5c5e\u6027\uff0c\u53ef\u4ee5\u7b80\u5316\u6570\u636e\u7ba1\u7406\u3002\u672c\u6587\u4ecb\u7ecd AUTOINCREMENT \u5217\u5c5e\u6027\u7684\u5e94\u7528\u573a\u666f\u3001\u7528\u6cd5\u548c\u7279\u6027\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.1/sql-reference/sql-statements/auto_increment.md",sourceDirName:"sql-reference/sql-statements",slug:"/sql-reference/sql-statements/auto_increment",permalink:"/doc/zh/docs/sql-reference/sql-statements/auto_increment",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-statements/auto_increment.md",tags:[],version:"3.1",frontMatter:{},sidebar:"Chinese31",previous:{title:"murmur_hash3_32",permalink:"/doc/zh/docs/sql-reference/sql-functions/hash-functions/murmur_hash3_32"},next:{title:"\u751f\u6210\u5217",permalink:"/doc/zh/docs/sql-reference/sql-statements/generated_columns"}},i={},a=[{value:"\u529f\u80fd\u4ecb\u7ecd",id:"\u529f\u80fd\u4ecb\u7ecd",level:2},{value:"\u57fa\u672c\u7528\u6cd5",id:"\u57fa\u672c\u7528\u6cd5",level:2},{value:"\u5efa\u8868\u6307\u5b9a\u81ea\u589e\u5217",id:"\u5efa\u8868\u6307\u5b9a\u81ea\u589e\u5217",level:3},{value:"\u5206\u914d\u81ea\u589e\u5217\u7684\u503c",id:"\u5206\u914d\u81ea\u589e\u5217\u7684\u503c",level:3},{value:"\u57fa\u672c\u7279\u6027",id:"\u57fa\u672c\u7279\u6027",level:2},{value:"\u552f\u4e00\u6027\u4fdd\u8bc1",id:"\u552f\u4e00\u6027\u4fdd\u8bc1",level:3},{value:"\u5355\u8c03\u6027\u4fdd\u8bc1",id:"\u5355\u8c03\u6027\u4fdd\u8bc1",level:3},{value:"\u90e8\u5206\u5217\u66f4\u65b0\u4e0e\u81ea\u589e\u5217",id:"\u90e8\u5206\u5217\u66f4\u65b0\u4e0e\u81ea\u589e\u5217",level:2},{value:"\u81ea\u589e\u5217\u4e3a\u4e3b\u952e",id:"\u81ea\u589e\u5217\u4e3a\u4e3b\u952e",level:3},{value:"\u81ea\u589e\u5217\u4e0d\u4e3a\u4e3b\u952e",id:"\u81ea\u589e\u5217\u4e0d\u4e3a\u4e3b\u952e",level:3},{value:"\u4f7f\u7528\u9650\u5236",id:"\u4f7f\u7528\u9650\u5236",level:2},{value:"Keywords",id:"keywords",level:2}];function o(n){const e=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",ul:"ul",li:"li",a:"a",h3:"h3",pre:"pre",strong:"strong",blockquote:"blockquote",ol:"ol"},(0,r.ah)(),n.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h1,{id:"auto_increment",children:"AUTO_INCREMENT"}),"\n",(0,l.jsxs)(e.p,{children:["StarRocks \u81ea 3.0 \u7248\u672c\u8d77\u652f\u6301 ",(0,l.jsx)(e.code,{children:"AUTO_INCREMENT"})," \u5217\u5c5e\u6027\uff0c\u53ef\u4ee5\u7b80\u5316\u6570\u636e\u7ba1\u7406\u3002\u672c\u6587\u4ecb\u7ecd ",(0,l.jsx)(e.code,{children:"AUTO_INCREMENT"})," \u5217\u5c5e\u6027\u7684\u5e94\u7528\u573a\u666f\u3001\u7528\u6cd5\u548c\u7279\u6027\u3002"]}),"\n",(0,l.jsx)(e.h2,{id:"\u529f\u80fd\u4ecb\u7ecd",children:"\u529f\u80fd\u4ecb\u7ecd"}),"\n",(0,l.jsx)(e.p,{children:"\u5f53\u63d2\u5165\u4e00\u6761\u65b0\u7684\u8bb0\u5f55\u65f6\uff0cStarRocks \u4f1a\u81ea\u52a8\u4e3a\u8be5\u8bb0\u5f55\u7684\u81ea\u589e\u5217\u5206\u914d\u4e00\u4e2a\u8868\u5185\u5168\u5c40\u552f\u4e00\u7684\u6574\u6570\u503c\u4f5c\u4e3a\u81ea\u589e ID\uff0c\u5e76\u4e14\u540e\u7eed\u503c\u4f1a\u81ea\u52a8\u589e\u52a0\u3002\u81ea\u589e\u5217\u53ef\u4ee5\u7b80\u5316\u6570\u636e\u7ba1\u7406\uff0c\u540c\u65f6\u53ef\u4ee5\u52a0\u901f\u4e00\u4e9b\u67e5\u8be2\u573a\u666f\u3002\u4ee5\u4e0b\u662f\u4e00\u4e9b\u81ea\u589e\u5217\u7684\u5e94\u7528\u573a\u666f\uff1a"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u4e3b\u952e\uff1a\u81ea\u589e\u5217\u53ef\u7528\u4e8e\u751f\u6210\u4e3b\u952e\uff0c\u786e\u4fdd\u6bcf\u6761\u8bb0\u5f55\u90fd\u6709\u4e00\u4e2a\u552f\u4e00\u7684\u6807\u8bc6\u7b26\uff0c\u65b9\u4fbf\u67e5\u8be2\u548c\u7ba1\u7406\u6570\u636e\u3002"}),"\n",(0,l.jsx)(e.li,{children:"\u5173\u8054\u8868\uff1a\u5728\u591a\u4e2a\u8868\u4e4b\u95f4\u8fdb\u884c\u5173\u8054\u65f6\uff0c\u53ef\u4ee5\u4f7f\u7528\u81ea\u589e\u5217\u4f5c\u4e3a Join Key\uff0c\u76f8\u6bd4\u4f7f\u7528\u5982 UUID \u7b49\u5b57\u7b26\u4e32\u7c7b\u578b\u7684\u5217\u80fd\u591f\u63d0\u9ad8\u67e5\u8be2\u901f\u5ea6\u3002"}),"\n",(0,l.jsx)(e.li,{children:"\u9ad8\u57fa\u6570\u5217\u7684\u7cbe\u786e\u53bb\u91cd\u8ba1\u6570\uff1a\u5c06\u81ea\u589e\u5217\u7684 ID \u503c\u4f5c\u4e3a\u5b57\u5178\u552f\u4e00\u503c\u5217\uff0c\u76f8\u6bd4\u7528\u5b57\u7b26\u4e32\u76f4\u63a5\u7cbe\u786e\u53bb\u91cd\u8ba1\u6570\uff0c\u67e5\u8be2\u901f\u5ea6\u80fd\u63d0\u5347\u6570\u500d\u751a\u81f3\u5341\u6570\u500d\u3002"}),"\n"]}),"\n",(0,l.jsxs)(e.p,{children:["\u60a8\u9700\u8981\u5728 CREATE TABLE \u8bed\u53e5\u4e2d\u901a\u8fc7 ",(0,l.jsx)(e.code,{children:"AUTO_INCREMENT"})," \u5c5e\u6027\u6307\u5b9a\u81ea\u589e\u5217\u3002\u81ea\u589e\u5217\u7684\u6570\u636e\u7c7b\u578b\u53ea\u652f\u6301 BIGINT\uff0c\u4ece 1 \u5f00\u59cb\u589e\u52a0\uff0c\u81ea\u589e\u6b65\u957f\u4e3a 1\u3002 \u5e76\u4e14 StarRocks \u652f\u6301",(0,l.jsx)(e.a,{href:"#%E5%88%86%E9%85%8D%E8%87%AA%E5%A2%9E%E5%88%97%E7%9A%84%E5%80%BC",children:"\u9690\u5f0f\u5206\u914d\u81ea\u589e\u5217\u7684\u503c\u548c\u663e\u5f0f\u6307\u5b9a\u81ea\u589e ID"}),"\u3002"]}),"\n",(0,l.jsx)(e.h2,{id:"\u57fa\u672c\u7528\u6cd5",children:"\u57fa\u672c\u7528\u6cd5"}),"\n",(0,l.jsx)(e.h3,{id:"\u5efa\u8868\u6307\u5b9a\u81ea\u589e\u5217",children:"\u5efa\u8868\u6307\u5b9a\u81ea\u589e\u5217"}),"\n",(0,l.jsxs)(e.p,{children:["\u521b\u5efa\u8868 ",(0,l.jsx)(e.code,{children:"test_tbl1"}),"\uff0c\u5305\u542b\u4e24\u5217\uff0c\u5206\u522b\u4e3a ",(0,l.jsx)(e.code,{children:"id"})," \u548c ",(0,l.jsx)(e.code,{children:"number"}),"\uff0c\u5982\u4e0b\u6240\u793a\uff0c\u5efa\u8868\u65f6\u6307\u5b9a ",(0,l.jsx)(e.code,{children:"number"})," \u5217\u4e3a\u81ea\u589e\u5217\uff1a"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-SQL",children:'CREATE TABLE test_tbl1\n(\n    id BIGINT NOT NULL, \n    number BIGINT NOT NULL AUTO_INCREMENT\n) \nPRIMARY KEY (id) \nDISTRIBUTED BY HASH(id)\nPROPERTIES("replicated_storage" = "true");\n'})}),"\n",(0,l.jsx)(e.h3,{id:"\u5206\u914d\u81ea\u589e\u5217\u7684\u503c",children:"\u5206\u914d\u81ea\u589e\u5217\u7684\u503c"}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"\u9690\u5f0f\u5206\u914d\u81ea\u589e\u5217\u7684\u503c"})}),"\n",(0,l.jsx)(e.p,{children:"\u5bfc\u5165\u65f6\uff0c\u60a8\u65e0\u9700\u6307\u5b9a\u81ea\u589e\u5217\u7684\u503c\uff0cStarRocks \u4f1a\u81ea\u52a8\u4e3a\u8be5\u81ea\u589e\u5217\u5206\u914d\u552f\u4e00\u7684\u6574\u6570\u503c\uff0c\u5e76\u63d2\u5165\u5230\u8868\u4e2d\u3002"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-SQL",children:"INSERT INTO test_tbl1 (id) VALUES (1);\nINSERT INTO test_tbl1 (id) VALUES (2);\nINSERT INTO test_tbl1 (id) VALUES (3),(4),(5);\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u67e5\u770b\u8868\u7684\u6570\u636e\u3002"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-SQL",children:"mysql > SELECT * FROM test_tbl1 ORDER BY id;\n+------+--------+\n| id   | number |\n+------+--------+\n|    1 |      1 |\n|    2 |      2 |\n|    3 |      3 |\n|    4 |      4 |\n|    5 |      5 |\n+------+--------+\n5 rows in set (0.02 sec)\n"})}),"\n",(0,l.jsxs)(e.p,{children:["\u60a8\u4e5f\u53ef\u4ee5\u6307\u5b9a\u81ea\u589e\u5217\u7684\u503c\u4e3a ",(0,l.jsx)(e.code,{children:"DEFAULT"}),"\uff0cStarRocks \u4f1a\u81ea\u52a8\u4e3a\u8be5\u81ea\u589e\u5217\u5206\u914d\u552f\u4e00\u7684\u6574\u6570\u503c\uff0c\u5e76\u63d2\u5165\u5230\u8868\u4e2d\u3002"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-SQL",children:"INSERT INTO test_tbl1 (id, number) VALUES (6, DEFAULT);\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u67e5\u770b\u8868\u7684\u6570\u636e\u3002"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-SQL",children:"mysql > SELECT * FROM test_tbl1 ORDER BY id;\n+------+--------+\n| id   | number |\n+------+--------+\n|    1 |      1 |\n|    2 |      2 |\n|    3 |      3 |\n|    4 |      4 |\n|    5 |      5 |\n|    6 |      6 |\n+------+--------+\n6 rows in set (0.02 sec)\n"})}),"\n",(0,l.jsxs)(e.p,{children:["\u5728\u5b9e\u9645\u4f7f\u7528\u4e2d\uff0c\u60a8\u67e5\u770b\u8868\u7684\u6570\u636e\u65f6\u53ef\u80fd\u4f1a\u8fd4\u56de\u5982\u4e0b\u7ed3\u679c\u3002\u8fd9\u662f\u56e0\u4e3a StarRocks \u65e0\u6cd5\u4fdd\u8bc1\u81ea\u589e\u5217\u7684\u503c\u6309\u7167\u65f6\u95f4\u987a\u5e8f\u4e25\u683c\u9012\u589e\uff0c\u4f46\u662f\u80fd\u4fdd\u8bc1\u81ea\u589e\u5217\u7684\u503c\u5927\u81f4\u4e0a\u662f\u9012\u589e\u7684\u3002\u66f4\u591a\u4ecb\u7ecd\uff0c\u8bf7\u53c2\u89c1",(0,l.jsx)(e.a,{href:"#%E5%8D%95%E8%B0%83%E6%80%A7%E4%BF%9D%E8%AF%81",children:"\u5355\u8c03\u6027\u4fdd\u8bc1"}),"\u3002"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-SQL",children:"mysql > SELECT * FROM test_tbl1 ORDER BY id;\n+------+--------+\n| id   | number |\n+------+--------+\n|    1 |      1 |\n|    2 | 100001 |\n|    3 | 200001 |\n|    4 | 200002 |\n|    5 | 200003 |\n|    6 | 200004 |\n+------+--------+\n6 rows in set (0.01 sec)\n"})}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"\u663e\u5f0f\u6307\u5b9a\u81ea\u589e\u5217\u7684\u503c"})}),"\n",(0,l.jsx)(e.p,{children:"\u60a8\u4e5f\u53ef\u4ee5\u663e\u5f0f\u5730\u6307\u5b9a\u81ea\u589e\u5217\u7684\u503c\uff0c\u5e76\u63d2\u5165\u5230\u8868\u4e2d\u3002"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-SQL",children:"INSERT INTO test_tbl1 (id, number) VALUES (7, 100);\n\n-- \u67e5\u770b\u8868\u7684\u6570\u636e\nmysql > SELECT * FROM test_tbl1 ORDER BY id;\n+------+--------+\n| id   | number |\n+------+--------+\n|    1 |      1 |\n|    2 | 100001 |\n|    3 | 200001 |\n|    4 | 200002 |\n|    5 | 200003 |\n|    6 | 200004 |\n|    7 |    100 |\n+------+--------+\n7 rows in set (0.01 sec)\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u5e76\u4e14\uff0c\u540e\u7eed\u63d2\u5165\u65b0\u6570\u636e\u65f6\u4e0d\u4f1a\u5f71\u54cd StarRocks \u65b0\u751f\u6210\u7684\u81ea\u589e\u5217\u7684\u503c\u3002"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-SQL",children:"INSERT INTO test_tbl1 (id) VALUES (8);\n\n-- \u67e5\u770b\u8868\u7684\u6570\u636e\nmysql > SELECT * FROM test_tbl1 ORDER BY id;\n+------+--------+\n| id   | number |\n+------+--------+\n|    1 |      1 |\n|    2 | 100001 |\n|    3 | 200001 |\n|    4 | 200002 |\n|    5 | 200003 |\n|    6 | 200004 |\n|    7 |    100 |\n|    8 |      2 |\n+------+--------+\n8 rows in set (0.01 sec)\n"})}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"\u6ce8\u610f\u4e8b\u9879"})}),"\n",(0,l.jsxs)(e.p,{children:["\u56e0\u4e3a\u540c\u65f6\u9690\u5f0f\u5206\u914d\u548c\u663e\u5f0f\u6307\u5b9a\u81ea\u589e ID \u53ef\u80fd\u4f1a\u7834\u574f\u81ea\u589e ID \u7684",(0,l.jsx)(e.a,{href:"#%E5%94%AF%E4%B8%80%E6%80%A7%E4%BF%9D%E8%AF%81",children:"\u5168\u5c40\u552f\u4e00\u6027"}),"\uff0c\u5efa\u8bae\u60a8\u4e0d\u8981\u6df7\u7528\u3002"]}),"\n",(0,l.jsx)(e.h2,{id:"\u57fa\u672c\u7279\u6027",children:"\u57fa\u672c\u7279\u6027"}),"\n",(0,l.jsx)(e.h3,{id:"\u552f\u4e00\u6027\u4fdd\u8bc1",children:"\u552f\u4e00\u6027\u4fdd\u8bc1"}),"\n",(0,l.jsx)(e.p,{children:"\u5728\u4e00\u822c\u60c5\u51b5\u4e0b\uff0cStarRocks \u4fdd\u8bc1\u81ea\u589e ID \u5728\u4e00\u5f20\u8868\u5185\u662f\u5168\u5c40\u552f\u4e00\u7684\u3002"}),"\n",(0,l.jsx)(e.p,{children:"\u4f46\u662f\uff0c\u5982\u679c\u60a8\u6df7\u7528\u9690\u5f0f\u5206\u914d\u548c\u663e\u5f0f\u6307\u5b9a\u81ea\u589e ID\uff0c\u5219\u53ef\u80fd\u4f1a\u7834\u574f\u81ea\u589e ID \u7684\u5168\u5c40\u552f\u4e00\u6027\u3002\u56e0\u6b64\u5efa\u8bae\u60a8\u4e0d\u8981\u540c\u65f6\u9690\u5f0f\u5206\u914d\u548c\u663e\u5f0f\u6307\u5b9a\u81ea\u589e ID\u3002\u4ee5\u4e0b\u662f\u4e00\u4e2a\u7b80\u5355\u7684\u793a\u4f8b\uff1a"}),"\n",(0,l.jsxs)(e.p,{children:["\u521b\u5efa\u8868 ",(0,l.jsx)(e.code,{children:"test_tbl2"}),"\uff0c\u5176\u4e2d\u5217 ",(0,l.jsx)(e.code,{children:"number"})," \u4e3a\u81ea\u589e\u5217\u3002"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-SQL",children:'CREATE TABLE test_tbl2\n(\n    id BIGINT NOT NULL,\n    number BIGINT NOT NULL AUTO_INCREMENT\n ) \nPRIMARY KEY (id) \nDISTRIBUTED BY HASH(id)\nPROPERTIES("replicated_storage" = "true");\n'})}),"\n",(0,l.jsxs)(e.p,{children:["\u5f80\u8868 ",(0,l.jsx)(e.code,{children:"test_tbl2"})," \u4e2d\u540c\u65f6\u9690\u5f0f\u5206\u914d\u548c\u663e\u5f0f\u6307\u5b9a\u81ea\u589e ID\u3002"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-SQL",children:"INSERT INTO test_tbl2 (id, number) VALUES (1, DEFAULT);\nINSERT INTO test_tbl2 (id, number) VALUES (2, 2);\nINSERT INTO test_tbl2 (id) VALUES (3);\n"})}),"\n",(0,l.jsxs)(e.p,{children:["\u67e5\u8be2\u8868 ",(0,l.jsx)(e.code,{children:"test_tbl2"})," \u7684\u6570\u636e\u3002"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-SQL",children:"mysql > SELECT * FROM test_tbl2 ORDER BY id;\n+------+--------+\n| id   | number |\n+------+--------+\n|    1 |      1 |\n|    2 |      2 |\n|    3 | 100001 |\n+------+--------+\n3 rows in set (0.08 sec)\n"})}),"\n",(0,l.jsx)(e.h3,{id:"\u5355\u8c03\u6027\u4fdd\u8bc1",children:"\u5355\u8c03\u6027\u4fdd\u8bc1"}),"\n",(0,l.jsx)(e.p,{children:"\u4e3a\u4e86\u63d0\u5347\u5206\u914d\u81ea\u589e ID \u7684\u6027\u80fd\uff0cBE \u4f1a\u672c\u5730\u7f13\u5b58\u90e8\u5206\u81ea\u589e ID\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0cStarRocks \u65e0\u6cd5\u4fdd\u8bc1\u81ea\u589e ID \u6309\u7167\u65f6\u95f4\u987a\u5e8f\u4e25\u683c\u9012\u589e\uff0c\u53ea\u80fd\u4fdd\u8bc1\u81ea\u589e ID \u5927\u81f4\u4e0a\u662f\u9012\u589e\u7684\u3002"}),"\n",(0,l.jsxs)(e.blockquote,{children:["\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"\u8bf4\u660e"})}),"\n",(0,l.jsxs)(e.p,{children:["BE \u7f13\u5b58\u7684\u81ea\u589e ID \u6570\u91cf\u7531 FE \u52a8\u6001\u53c2\u6570 ",(0,l.jsx)(e.code,{children:"auto_increment_cache_size"})," \u51b3\u5b9a\uff0c\u9ed8\u8ba4\u662f ",(0,l.jsx)(e.code,{children:"100000"}),"\u3002\u60a8\u53ef\u4ee5\u4f7f\u7528 ",(0,l.jsx)(e.code,{children:'ADMIN SET FRONTEND CONFIG ("auto_increment_cache_size" = "xxx");'})," \u8fdb\u884c\u4fee\u6539 \u3002\n\u5047\u8bbe StarRocks \u96c6\u7fa4\u5177\u6709\u4e00\u4e2a FE \u8282\u70b9\u548c\u4e24\u4e2a BE \u8282\u70b9\u3002\u521b\u5efa\u8868 ",(0,l.jsx)(e.code,{children:"test_tbl3"})," \u5e76\u4e14\u63d2\u5165\u4e94\u884c\u6570\u636e\uff0c\u5982\u4e0b\u6240\u793a\uff1a"]}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-SQL",children:'CREATE TABLE test_tbl3\n(\n    id BIGINT NOT NULL,\n    number BIGINT NOT NULL AUTO_INCREMENT\n) \nPRIMARY KEY (id)\nDISTRIBUTED BY HASH(id)\nPROPERTIES("replicated_storage" = "true");\n\nINSERT INTO test_tbl3 VALUES (1, DEFAULT);\nINSERT INTO test_tbl3 VALUES (2, DEFAULT);\nINSERT INTO test_tbl3 VALUES (3, DEFAULT);\nINSERT INTO test_tbl3 VALUES (4, DEFAULT);\nINSERT INTO test_tbl3 VALUES (5, DEFAULT);\n'})}),"\n",(0,l.jsx)(e.p,{children:"\u8868 test_tbl3` \u4e2d\u81ea\u589e ID \u4e0d\u662f\u5355\u8c03\u9012\u589e\u7684\u3002\u8fd9\u662f\u56e0\u4e3a\u4e24\u4e2a BE \u8282\u70b9\u5206\u522b\u7f13\u5b58\u4e86 [1, 100000] \u548c [100001, 200000] \u8303\u56f4\u5185\u7684\u81ea\u589e ID\uff0c\u4f7f\u7528\u591a\u4e2a INSERT \u8bed\u53e5\u5bfc\u5165\u6570\u636e\u65f6\uff0c\u4f1a\u53d1\u9001\u7ed9\u4e0d\u540c\u7684 BE\uff0c\u7531\u4e0d\u540c BE \u5206\u914d\u81ea\u589e ID\uff0c\u56e0\u6b64\u65e0\u6cd5\u4fdd\u8bc1\u81ea\u589e ID \u7684\u4e25\u683c\u5355\u8c03\u6027\u3002"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-SQL",children:"mysql > SELECT * FROM test_tbl3 ORDER BY id;\n+------+--------+\n| id   | number |\n+------+--------+\n|    1 |      1 |\n|    2 | 100001 |\n|    3 | 200001 |\n|    4 |      2 |\n|    5 | 100002 |\n+------+--------+\n5 rows in set (0.07 sec)\n"})}),"\n",(0,l.jsx)(e.h2,{id:"\u90e8\u5206\u5217\u66f4\u65b0\u4e0e\u81ea\u589e\u5217",children:"\u90e8\u5206\u5217\u66f4\u65b0\u4e0e\u81ea\u589e\u5217"}),"\n",(0,l.jsx)(e.p,{children:"\u672c\u5c0f\u8282\u4ecb\u7ecd\u5177\u6709\u81ea\u589e\u5217\u7684\u8868\u5982\u4f55\u5b9e\u73b0\u90e8\u5206\u5217\u66f4\u65b0\u3002"}),"\n",(0,l.jsxs)(e.blockquote,{children:["\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"\u8bf4\u660e"})}),"\n",(0,l.jsx)(e.p,{children:"\u76ee\u524d\u4ec5\u4e3b\u952e\u6a21\u578b\u7684\u8868\u652f\u6301\u90e8\u5206\u5217\u66f4\u65b0\u3002"}),"\n"]}),"\n",(0,l.jsx)(e.h3,{id:"\u81ea\u589e\u5217\u4e3a\u4e3b\u952e",children:"\u81ea\u589e\u5217\u4e3a\u4e3b\u952e"}),"\n",(0,l.jsx)(e.p,{children:"\u5982\u679c\u81ea\u589e\u5217\u4e3a\u4e3b\u952e\u6216\u4e3b\u952e\u7684\u4e00\u90e8\u5206\uff0c\u7531\u4e8e\u90e8\u5206\u5217\u66f4\u65b0\u65f6\u60a8\u9700\u8981\u6307\u5b9a\u4e3b\u952e\uff0c\u56e0\u6b64\u90e8\u5206\u5217\u66f4\u65b0\u7684\u7528\u6237\u884c\u4e3a\u548c\u6ca1\u6709\u5b9a\u4e49\u81ea\u589e\u5217\u5b8c\u5168\u4e00\u6837\u3002"}),"\n",(0,l.jsxs)(e.ol,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:["\u5728\u6570\u636e\u5e93 ",(0,l.jsx)(e.code,{children:"example_db"})," \u4e2d\u521b\u5efa\u8868 ",(0,l.jsx)(e.code,{children:"test_tbl4"}),"\uff0c\u5e76\u4e14\u63d2\u5165\u4e00\u6761\u6570\u636e\u3002"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-SQL",children:"-- \u5efa\u8868\nCREATE TABLE test_tbl4\n(\n    id BIGINT AUTO_INCREMENT,\n    name BIGINT NOT NULL,\n    job1 BIGINT NOT NULL,\n    job2 BIGINT NOT NULL\n) \nPRIMARY KEY (id, name)\nDISTRIBUTED BY HASH(id)\nPROPERTIES(\"replicated_storage\" = \"true\");\n\n-- \u51c6\u5907\u6570\u636e\nmysql > INSERT INTO test_tbl4 (id, name, job1, job2) VALUES (0, 0, 1, 1);\nQuery OK, 1 row affected (0.04 sec)\n{'label':'insert_6af28e77-7d2b-11ed-af6e-02424283676b', 'status':'VISIBLE', 'txnId':'152'}\n\n-- \u67e5\u8be2\u6570\u636e\nmysql > SELECT * FROM test_tbl4 ORDER BY id;\n+------+------+------+------+\n| id   | name | job1 | job2 |\n+------+------+------+------+\n|    0 |    0 |    1 |    1 |\n+------+------+------+------+\n1 row in set (0.01 sec)\n"})}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:["\u51c6\u5907 CSV \u6587\u4ef6 ",(0,l.jsx)(e.strong,{children:"my_data4.csv"}),"\uff0c\u7528\u4e8e\u66f4\u65b0\u8868 ",(0,l.jsx)(e.code,{children:"test_tbl4"}),"\u3002 CSV \u6587\u4ef6\u5305\u62ec\u81ea\u589e\u5217\u7684 ID \u503c\uff0c\u4e0d\u5305\u542b\u5217 ",(0,l.jsx)(e.code,{children:"job1"})," \u7684\u503c\uff0c\u5e76\u4e14\u7b2c\u4e00\u884c\u6570\u636e\u7684\u4e3b\u952e\u5b58\u5728\u8868 ",(0,l.jsx)(e.code,{children:"test_tbl4"})," \u4e2d\uff0c\u7b2c\u4e8c\u884c\u7684\u4e3b\u952e\u4e0d\u5b58\u5728\u3002"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-Plaintext",children:"0,0,99\n1,1,99\n"})}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:["\u901a\u8fc7 ",(0,l.jsx)(e.a,{href:"/doc/zh/docs/sql-reference/sql-statements/data-manipulation/STREAM_LOAD",children:"Stream Load"})," \u5c06 CSV \u6587\u4ef6\u6570\u636e\u66f4\u65b0\u81f3\u8868 ",(0,l.jsx)(e.code,{children:"test_tbl4"}),"\u3002"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-Bash",children:'curl --location-trusted -u <username>:<password> -H "label:1" \\\n    -H "column_separator:," \\\n    -H "partial_update:true" \\\n    -H "columns:id,name,job2" \\\n    -T my_data4.csv -XPUT \\\n    http://<fe_host>:<fe_http_port>/api/example_db/test_tbl4/_stream_load\n'})}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:["\u67e5\u8be2\u66f4\u65b0\u540e\u7684\u8868\u3002\u7b2c\u4e00\u6761\u6570\u636e\u539f\u5148\u5df2\u7ecf\u5b58\u5728\u8868 ",(0,l.jsx)(e.code,{children:"test_tbl4"})," \u4e2d\uff0c\u5e76\u4e14\u5217 ",(0,l.jsx)(e.code,{children:"job1"})," \u4fdd\u6301\u539f\u5148\u7684\u503c\u3002\u7b2c\u4e8c\u6761\u6570\u636e\u662f\u65b0\u63d2\u5165\u7684\u6570\u636e\uff0c\u7531\u4e8e\u5217 ",(0,l.jsx)(e.code,{children:"job1"})," \u6ca1\u6709\u5b9a\u4e49\u9ed8\u8ba4\u503c\uff0c\u56e0\u6b64\u90e8\u5206\u5217\u66f4\u65b0\u6846\u67b6\u4f1a\u76f4\u63a5\u5c06\u6b64\u5217\u7684\u503c\u8bbe\u7f6e\u4e3a ",(0,l.jsx)(e.code,{children:"0"}),"\u3002"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-SQL",children:"mysql > SELECT * FROM test_tbl4 ORDER BY id;\n+------+------+------+------+\n| id   | name | job1 | job2 |\n+------+------+------+------+\n|    0 |    0 |    1 |   99 |\n|    1 |    1 |    0 |   99 |\n+------+------+------+------+\n2 rows in set (0.01 sec)\n"})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.h3,{id:"\u81ea\u589e\u5217\u4e0d\u4e3a\u4e3b\u952e",children:"\u81ea\u589e\u5217\u4e0d\u4e3a\u4e3b\u952e"}),"\n",(0,l.jsx)(e.p,{children:"\u5982\u679c\u81ea\u589e\u5217\u4e0d\u662f\u4e3b\u952e\u6216\u8005\u4e3b\u952e\u7684\u4e00\u90e8\u5206\uff0c\u5e76\u4e14 Stream Load \u4e2d\u672a\u7ed9\u51fa\u81ea\u589e ID\uff0c\u5219\u4f1a\u53d1\u751f\u4ee5\u4e0b\u60c5\u51b5\uff1a"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u5982\u679c\u8868\u4e2d\u5df2\u7ecf\u5b58\u5728\u8be5\u884c\uff0c\u5219 StarRocks \u4e0d\u4f1a\u66f4\u65b0\u81ea\u589eID\u3002"}),"\n",(0,l.jsx)(e.li,{children:"\u5982\u679c\u8868\u4e2d\u4e0d\u5b58\u5728\u8be5\u884c\uff0c\u5219 StarRocks \u4f1a\u81ea\u52a8\u751f\u6210\u65b0\u7684\u81ea\u589e ID\u3002"}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:"\u8be5\u7279\u6027\u53ef\u4ee5\u6784\u5efa\u5b57\u5178\u8868\u7684\u503c\uff0c\u7528\u4e8e\u52a0\u901f\u5b57\u7b26\u4e32\u7684\u7cbe\u786e\u53bb\u91cd\u8ba1\u6570\u3002"}),"\n",(0,l.jsxs)(e.ol,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:["\u5728\u6570\u636e\u5e93 ",(0,l.jsx)(e.code,{children:"example_db"})," \u4e2d\u521b\u5efa\u8868 ",(0,l.jsx)(e.code,{children:"test_tbl5"}),"\uff0c\u6307\u5b9a ",(0,l.jsx)(e.code,{children:"job1"})," \u4e3a\u81ea\u589e\u5217\uff0c\u5e76\u4e14\u63d2\u5165\u4e00\u6761\u6570\u636e\u3002"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-SQL",children:"-- \u5efa\u8868\nCREATE TABLE test_tbl5\n(\n    id BIGINT NOT NULL,\n    name BIGINT NOT NULL,\n    job1 BIGINT NOT NULL AUTO_INCREMENT,\n    job2 BIGINT NOT NULL\n)\nPRIMARY KEY (id, name)\nDISTRIBUTED BY HASH(id)\nPROPERTIES(\"replicated_storage\" = \"true\");\n\n-- \u51c6\u5907\u6570\u636e\nmysql > INSERT INTO test_tbl5 VALUES (0, 0, -1, -1);\nQuery OK, 1 row affected (0.04 sec)\n{'label':'insert_458d9487-80f6-11ed-ae56-aa528ccd0ebf', 'status':'VISIBLE', 'txnId':'94'}\n\nmysql > SELECT * FROM test_tbl5 ORDER BY id;\n+------+------+------+------+\n| id   | name | job1 | job2 |\n+------+------+------+------+\n|    0 |    0 |   -1 |   -1 |\n+------+------+------+------+\n1 row in set (0.01 sec)\n"})}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:["\u51c6\u5907 CSV \u6587\u4ef6 ",(0,l.jsx)(e.strong,{children:"my_data5.csv"}),"\uff0c\u7528\u4e8e\u66f4\u65b0\u8868 ",(0,l.jsx)(e.code,{children:"test_tbl5"}),"\u3002CSV \u6587\u4ef6\u4e0d\u5305\u542b\u81ea\u589e\u5217 ",(0,l.jsx)(e.code,{children:"job1"})," \u7684\u503c\uff0c\u5e76\u4e14\u7b2c\u4e00\u884c\u6570\u636e\u7684\u4e3b\u952e\u5b58\u5728\u4e8e\u8868\u4e2d\uff0c\u7b2c\u4e8c\u3001\u4e09\u884c\u6570\u636e\u7684\u4e3b\u952e\u4e0d\u5b58\u5728\u3002"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-Plaintext",children:"0,0,99\n1,1,99\n2,2,99\n"})}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:["\u901a\u8fc7 ",(0,l.jsx)(e.a,{href:"/doc/zh/docs/sql-reference/sql-statements/data-manipulation/STREAM_LOAD",children:"Stream Load"})," \u5c06 CSV \u6587\u4ef6\u6570\u636e\u5bfc\u5165\u81f3\u8868 ",(0,l.jsx)(e.code,{children:"test_tbl5"}),"\u3002"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-Bash",children:'curl --location-trusted -u <username>:<password> -H "label:2" \\\n    -H "column_separator:," \\\n    -H "partial_update:true" \\\n    -H "columns: id,name,job2" \\\n    -T my_data5.csv -XPUT \\\n    http://<fe_host>:<fe_http_port>/api/example_db/test_tbl5/_stream_load\n'})}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:["\u67e5\u8be2\u66f4\u65b0\u540e\u7684\u8868\u3002\u7b2c\u4e00\u6761\u6570\u636e\u5df2\u7ecf\u5b58\u5728\u8868 ",(0,l.jsx)(e.code,{children:"test_tbl5"})," \u4e2d\uff0c\u81ea\u589e\u5217 ",(0,l.jsx)(e.code,{children:"job1"})," \u4fdd\u6301\u539f\u5148\u7684 ID \u503c\u3002\u7b2c\u4e8c\u3001\u4e09\u6761\u6570\u636e\u662f\u65b0\u63d2\u5165\u7684\u6570\u636e\uff0c\u81ea\u589e\u5217 ",(0,l.jsx)(e.code,{children:"job1"})," \u7684 ID \u503c\u7531 StarRocks \u81ea\u52a8\u751f\u6210\u3002"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-SQL",children:"mysql > SELECT * FROM test_tbl5 ORDER BY id;\n+------+------+--------+------+\n| id   | name | job1   | job2 |\n+------+------+--------+------+\n|    0 |    0 |     -1 |   99 |\n|    1 |    1 |      1 |   99 |\n|    2 |    2 | 100001 |   99 |\n+------+------+--------+------+\n3 rows in set (0.01 sec)\n"})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"\u4f7f\u7528\u9650\u5236",children:"\u4f7f\u7528\u9650\u5236"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\u521b\u5efa\u5177\u6709\u81ea\u589e\u5217\u7684\u8868\u65f6\uff0c\u5fc5\u987b\u8bbe\u7f6e ",(0,l.jsx)(e.code,{children:"'replicated_storage' = 'true'"}),"\uff0c\u4ee5\u786e\u4fdd\u6240\u6709\u526f\u672c\u5177\u6709\u76f8\u540c\u7684\u81ea\u589e ID\u3002"]}),"\n",(0,l.jsx)(e.li,{children:"\u6bcf\u4e2a\u8868\u6700\u591a\u53ea\u80fd\u6709\u4e00\u4e2a\u81ea\u589e\u5217\u3002"}),"\n",(0,l.jsx)(e.li,{children:"\u81ea\u589e\u5217\u5fc5\u987b\u662f BIGINT \u7c7b\u578b\u3002"}),"\n",(0,l.jsxs)(e.li,{children:["\u81ea\u589e\u5217\u5fc5\u987b\u4e3a ",(0,l.jsx)(e.code,{children:"NOT NULL"}),"\uff0c\u5e76\u4e14\u4e0d\u652f\u6301\u6307\u5b9a\u9ed8\u8ba4\u503c\u3002"]}),"\n",(0,l.jsxs)(e.li,{children:["\u60a8\u53ef\u4ee5\u4ece\u5177\u6709\u81ea\u589e\u5217\u7684\u4e3b\u952e\u6a21\u578b\u7684\u8868\u4e2d\u5220\u9664\u6570\u636e\u3002\u4f46\u662f\u5982\u679c\u81ea\u589e\u5217\u4e0d\u4e3a Primary Key\uff0c\u5219\u60a8\u5728\u5220\u9664\u6570\u636e\u65f6\uff0c\u9700\u8981\u6ce8\u610f\u4ee5\u4e0b\u4e24\u4e2a\u573a\u666f\u4e2d\u7684\u9650\u5236\uff1a","\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"DELETE \u64cd\u4f5c\u7684\u540c\u65f6\uff0c\u8fd8\u5b58\u5728\u4e00\u4e2a\u90e8\u5206\u5217\u66f4\u65b0\u7684\u5bfc\u5165\u4efb\u52a1\uff0c\u5176\u4e2d\u53ea\u5305\u542b UPSERT \u64cd\u4f5c\u3002\u5982\u679c UPSERT \u64cd\u4f5c\u548c DELETE \u64cd\u4f5c\u547d\u4e2d\u4e86\u540c\u4e00\u884c\u6570\u636e\uff0c\u5e76\u4e14 UPSERT \u64cd\u4f5c\u5728 DELETE \u64cd\u4f5c\u540e\u6267\u884c\uff0c\u5219\u8be5 UPSERT \u64cd\u4f5c\u53ef\u80fd\u4f1a\u5931\u6548\u3002"}),"\n",(0,l.jsx)(e.li,{children:"\u5b58\u5728\u4e00\u4e2a\u90e8\u5206\u5217\u66f4\u65b0\u7684\u5bfc\u5165\u4efb\u52a1\uff0c\u5176\u4e2d\u5305\u542b\u82e5\u5e72\u4e2a\u5bf9\u540c\u4e00\u884c\u6570\u636e\u7684 UPSERT\u3001DELETE \u64cd\u4f5c\u3002\u5982\u679c\u67d0\u4e2a UPSERT \u64cd\u4f5c\u5728 DELETE \u64cd\u4f5c\u540e\u6267\u884c\uff0c\u5219\u8be5 UPSERT \u64cd\u4f5c\u53ef\u80fd\u4f1a\u5931\u6548\u3002"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\u4e0d\u652f\u6301\u4f7f\u7528 ALTER TABLE \u6dfb\u52a0 ",(0,l.jsx)(e.code,{children:"AUTO_INCREMENT"})," \u5c5e\u6027\u3002"]}),"\n",(0,l.jsx)(e.li,{children:"\u81ea 3.1 \u7248\u672c\u8d77\u5b58\u7b97\u5206\u79bb\u6a21\u5f0f\u652f\u6301\u8be5\u529f\u80fd\u3002"}),"\n",(0,l.jsx)(e.li,{children:"\u4e0d\u652f\u6301\u8bbe\u7f6e\u81ea\u589e\u5217\u7684\u8d77\u59cb\u503c\u548c\u81ea\u589e\u6b65\u957f\u3002"}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"keywords",children:"Keywords"}),"\n",(0,l.jsx)(e.p,{children:"AUTO_INCREMENT, AUTO INCREMENT"})]})}const h=function(n={}){const{wrapper:e}=Object.assign({},(0,r.ah)(),n.components);return e?(0,l.jsx)(e,Object.assign({},n,{children:(0,l.jsx)(o,n)})):o(n)}},11151:(n,e,s)=>{s.d(e,{Zo:()=>t,ah:()=>c});var l=s(67294);const r=l.createContext({});function c(n){const e=l.useContext(r);return l.useMemo((()=>"function"==typeof n?n(e):{...e,...n}),[e,n])}const d={};function t({components:n,children:e,disableParentContext:s}){let t;return t=s?"function"==typeof n?n({}):n||d:c(n),l.createElement(r.Provider,{value:t},e)}}}]);