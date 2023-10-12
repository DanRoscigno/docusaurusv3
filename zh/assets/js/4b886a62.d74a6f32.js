"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[23227],{21935:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>E,contentTitle:()=>l,default:()=>A,frontMatter:()=>r,metadata:()=>i,toc:()=>t});var d=s(85893),c=s(11151);const r={},l="CREATE TABLE AS SELECT",i={id:"sql-reference/sql-statements/data-definition/CREATE_TABLE_AS_SELECT",title:"CREATE TABLE AS SELECT",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.5/sql-reference/sql-statements/data-definition/CREATE_TABLE_AS_SELECT.md",sourceDirName:"sql-reference/sql-statements/data-definition",slug:"/sql-reference/sql-statements/data-definition/CREATE_TABLE_AS_SELECT",permalink:"/doc/zh/docs/2.5/sql-reference/sql-statements/data-definition/CREATE_TABLE_AS_SELECT",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-2.5/sql-reference/sql-statements/data-definition/CREATE_TABLE_AS_SELECT.md",tags:[],version:"2.5",frontMatter:{},sidebar:"Chinese31",previous:{title:"CREATE TABLE",permalink:"/doc/zh/docs/2.5/sql-reference/sql-statements/data-definition/CREATE_TABLE"},next:{title:"CREATE TABLE LIKE",permalink:"/doc/zh/docs/2.5/sql-reference/sql-statements/data-definition/CREATE_TABLE_LIKE"}},E={},t=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function a(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",ul:"ul",li:"li",pre:"pre",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",strong:"strong",tbody:"tbody",td:"td"},(0,c.ah)(),e.components);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.h1,{id:"create-table-as-select",children:"CREATE TABLE AS SELECT"}),"\n",(0,d.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,d.jsx)(n.p,{children:"CREATE TABLE AS SELECT\uff08\u7b80\u79f0 CTAS\uff09\u8bed\u53e5\u53ef\u7528\u4e8e\u540c\u6b65\u6216\u5f02\u6b65\u67e5\u8be2\u539f\u8868\u5e76\u57fa\u4e8e\u67e5\u8be2\u7ed3\u679c\u521b\u5efa\u65b0\u8868\uff0c\u7136\u540e\u5c06\u67e5\u8be2\u7ed3\u679c\u63d2\u5165\u5230\u65b0\u8868\u4e2d\u3002"}),"\n",(0,d.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:"\u540c\u6b65\u67e5\u8be2\u539f\u8868\u5e76\u57fa\u4e8e\u67e5\u8be2\u7ed3\u679c\u521b\u5efa\u65b0\u8868\uff0c\u7136\u540e\u5c06\u67e5\u8be2\u7ed3\u679c\u63d2\u5165\u5230\u65b0\u8868\u4e2d\u3002"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-SQL",children:'CREATE TABLE [IF NOT EXISTS] [database.]table_name\n[(column_name [, column_name2, ...]]\n[key_desc]\n[COMMENT "table comment"]\n[partition_desc]\n[distribution_desc]\n[PROPERTIES ("key"="value", ...)]AS SELECT query\n[ ... ]\n'})}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:"\u5f02\u6b65\u67e5\u8be2\u539f\u8868\u5e76\u57fa\u4e8e\u67e5\u8be2\u7ed3\u679c\u521b\u5efa\u65b0\u8868\uff0c\u7136\u540e\u5c06\u67e5\u8be2\u7ed3\u679c\u63d2\u5165\u5230\u65b0\u8868\u4e2d\u3002"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-SQL",children:'SUBMIT [/*+ SET_VAR(key=value) */] TASK [[database.]<task_name>]AS\nCREATE TABLE [IF NOT EXISTS] [database.]table_name\n[(column_name [, column_name2, ...]]\n[key_desc]\n[COMMENT "table comment"]\n[partition_desc]\n[distribution_desc]\n[PROPERTIES ("key"="value", ...)]AS SELECT query\n[ ... ]\n'})}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:(0,d.jsx)(n.strong,{children:"\u53c2\u6570"})}),(0,d.jsx)(n.th,{children:(0,d.jsx)(n.strong,{children:"\u5fc5\u586b"})}),(0,d.jsx)(n.th,{children:(0,d.jsx)(n.strong,{children:"\u63cf\u8ff0"})})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"column_name"}),(0,d.jsx)(n.td,{children:"\u662f"}),(0,d.jsx)(n.td,{children:"\u65b0\u8868\u7684\u5217\u540d\u3002\u60a8\u65e0\u9700\u6307\u5b9a\u5217\u7c7b\u578b\u3002StarRocks \u4f1a\u81ea\u52a8\u9009\u62e9\u5408\u9002\u7684\u5217\u7c7b\u578b\uff0c\u5e76\u5c06 FLOAT \u548c DOUBLE \u8f6c\u6362\u4e3a DECIMAL(38,9)\uff1b\u5c06 CHAR\u3001VARCHAR \u548c STRING \u8f6c\u6362\u4e3a VARCHAR(65533)\u3002"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"key_desc"}),(0,d.jsx)(n.td,{children:"\u5426"}),(0,d.jsxs)(n.td,{children:["\u8bed\u6cd5\u662f ",(0,d.jsx)(n.code,{children:"key_type (<col_name1> [, <col_name2>, ...])"}),"\u3002",(0,d.jsx)("br",{}),(0,d.jsx)(n.strong,{children:"\u53c2\u6570"}),"\uff1a",(0,d.jsxs)("ul",{children:[(0,d.jsxs)("li",{children:[(0,d.jsx)(n.code,{children:"key_type"}),"\uff1a\u65b0\u8868\u7684 Key \u7c7b\u578b\u3002\u6709\u6548\u503c\uff1a",(0,d.jsx)(n.code,{children:"DUPLICATE KEY"})," \u548c ",(0,d.jsx)(n.code,{children:"PRIMARY KEY"}),"\u3002\u9ed8\u8ba4\u503c\uff1a",(0,d.jsx)(n.code,{children:"DUPLICATE KEY"}),"\u3002"]}),(0,d.jsxs)("li",{children:[" ",(0,d.jsx)(n.code,{children:"col_name"}),"\uff1a\u7ec4\u6210 Key \u7684\u5217\u3002"]})]})]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"COMMENT"}),(0,d.jsx)(n.td,{children:"\u5426"}),(0,d.jsx)(n.td,{children:"\u65b0\u8868\u6ce8\u91ca\u3002"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"partition_desc"}),(0,d.jsx)(n.td,{children:"\u5426"}),(0,d.jsx)(n.td,{children:"\u65b0\u8868\u7684\u5206\u533a\u65b9\u5f0f\u3002\u5982\u4e0d\u6307\u5b9a\u8be5\u53c2\u6570\uff0c\u5219\u9ed8\u8ba4\u65b0\u8868\u4e3a\u65e0\u5206\u533a\u3002\u66f4\u591a\u6709\u5173\u5206\u533a\u7684\u8bbe\u7f6e\uff0c\u53c2\u89c1 CREATE TABLE\u3002"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"distribution_desc"}),(0,d.jsx)(n.td,{children:"\u5426"}),(0,d.jsx)(n.td,{children:"\u65b0\u8868\u7684\u5206\u6876\u65b9\u5f0f\u3002\u5982\u4e0d\u6307\u5b9a\u8be5\u53c2\u6570\uff0c\u5219\u9ed8\u8ba4\u65b0\u8868\u7684\u5206\u6876\u5217\u4e3a\u4f7f\u7528 CBO \u4f18\u5316\u5668\u91c7\u96c6\u7684\u7edf\u8ba1\u4fe1\u606f\u4e2d\u57fa\u6570\u6700\u9ad8\u7684\u5217\uff0c\u4e14\u5206\u6876\u6570\u91cf\u9ed8\u8ba4\u4e3a 10\u3002\u5982\u679c CBO \u4f18\u5316\u5668\u6ca1\u6709\u91c7\u96c6\u57fa\u6570\u4fe1\u606f\uff0c\u5219\u9ed8\u8ba4\u65b0\u8868\u7684\u7b2c\u4e00\u5217\u4e3a\u5206\u6876\u5217\u3002\u66f4\u591a\u6709\u5173\u5206\u6876\u7684\u8bbe\u7f6e\uff0c\u53c2\u89c1 CREATE TABLE\u3002"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Properties"}),(0,d.jsx)(n.td,{children:"\u5426"}),(0,d.jsx)(n.td,{children:"\u65b0\u8868\u7684\u5c5e\u6027\u3002"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"AS SELECT query"}),(0,d.jsx)(n.td,{children:"\u662f"}),(0,d.jsxs)(n.td,{children:["\u67e5\u8be2\u7ed3\u679c\u3002\u8be5\u53c2\u6570\u652f\u6301\u5982\u4e0b\u503c\uff1a \u5217\u3002\u6bd4\u5982 ",(0,d.jsx)(n.code,{children:"... AS SELECT a, b, c FROM table_a;"}),"\uff0c\u5176\u4e2d ",(0,d.jsx)(n.code,{children:"a"}),"\u3001",(0,d.jsx)(n.code,{children:"b"})," \u548c ",(0,d.jsx)(n.code,{children:"c"})," \u4e3a\u539f\u8868\u7684\u5217\u540d\u3002\u5982\u679c\u60a8\u6ca1\u6709\u4e3a\u65b0\u8868\u6307\u5b9a\u5217\u540d\uff0c\u90a3\u4e48\u65b0\u8868\u7684\u5217\u540d\u4e5f\u4e3a ",(0,d.jsx)(n.code,{children:"a"}),"\u3001",(0,d.jsx)(n.code,{children:"b"})," \u548c ",(0,d.jsx)(n.code,{children:"c"}),"\u3002 \u8868\u8fbe\u5f0f\u3002\u6bd4\u5982 ",(0,d.jsx)(n.code,{children:"... AS SELECT a+1 AS x, b+2 AS y, c*c AS z FROM table_a;"}),"\uff0c\u5176\u4e2d ",(0,d.jsx)(n.code,{children:"a+1"}),"\u3001",(0,d.jsx)(n.code,{children:"b+2"})," \u548c ",(0,d.jsx)(n.code,{children:"c*c"})," \u4e3a\u539f\u8868\u7684\u5217\u540d\uff0c",(0,d.jsx)(n.code,{children:"x"}),"\u3001",(0,d.jsx)(n.code,{children:"y"})," \u548c ",(0,d.jsx)(n.code,{children:"z"})," \u4e3a\u65b0\u8868\u7684\u5217\u540d\u3002 \u8bf4\u660e\uff1a \u65b0\u8868\u7684\u5217\u6570\u9700\u8981\u4e0e ",(0,d.jsx)(n.code,{children:"AS SELECT query"})," \u4e2d\u6307\u5b9a\u7684\u5217\u6570\u4fdd\u6301\u4e00\u81f4\u3002 \u5efa\u8bae\u60a8\u4e3a\u65b0\u8868\u7684\u5217\u8bbe\u7f6e\u5177\u6709\u4e1a\u52a1\u610f\u4e49\u7684\u5217\u540d\uff0c\u4fbf\u4e8e\u540e\u7eed\u8bc6\u522b\u4f7f\u7528\u3002"]})]})]})]}),"\n",(0,d.jsx)(n.h2,{id:"\u6ce8\u610f\u4e8b\u9879",children:"\u6ce8\u610f\u4e8b\u9879"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:"\u4f7f\u7528 CTAS \u8bed\u53e5\u521b\u5efa\u7684\u65b0\u8868\u9700\u6ee1\u8db3\u5982\u4e0b\u6761\u4ef6\uff1a"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"ENGINE"})," \u7c7b\u578b\u4e3a ",(0,d.jsx)(n.code,{children:"OLAP"}),"\u3002"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:["\u8868\u7c7b\u578b\u9ed8\u8ba4\u4e3a\u660e\u7ec6\u8868\uff0c\u60a8\u4e5f\u53ef\u4ee5\u5728 ",(0,d.jsx)(n.code,{children:"key_desc"})," \u4e2d\u6307\u5b9a\u4e3a\u4e3b\u952e\u8868\u3002"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:"\u6392\u5e8f\u5217\u4e3a\u524d\u4e09\u5217\u4e14\u8fd9\u4e09\u5217\u7c7b\u578b\u7684\u5b58\u50a8\u7a7a\u95f4\u4e0d\u80fd\u8d85\u8fc7 36 \u4e2a\u5b57\u8282\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:"CTAS \u8bed\u53e5\u4e0d\u652f\u6301\u4e3a\u65b0\u8868\u8bbe\u7f6e\u7d22\u5f15\u3002"}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:"\u5982\u679c CTAS \u8bed\u53e5\u7531\u4e8e FE \u91cd\u542f\u6216\u5176\u4ed6\u539f\u56e0\u6267\u884c\u5931\u8d25\uff0c\u53ef\u80fd\u4f1a\u53d1\u751f\u5982\u4e0b\u60c5\u51b5\uff1a"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:"\u65b0\u8868\u521b\u5efa\u6210\u529f\uff0c\u4f46\u8868\u4e2d\u6ca1\u6709\u6570\u636e\u3002"}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:"\u65b0\u8868\u521b\u5efa\u5931\u8d25\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:"\u65b0\u8868\u521b\u5efa\u540e\uff0c\u5982\u679c\u5b58\u5728\u591a\u79cd\u65b9\u5f0f\uff08\u6bd4\u5982 Insert Into\uff09\u5c06\u6570\u636e\u63d2\u5165\u5230\u65b0\u8868\u4e2d\uff0c\u90a3\u4e48\u6700\u5148\u6267\u884c\u5b8c\u63d2\u5165\u64cd\u4f5c\u7684\u5373\u6700\u5148\u5c06\u6570\u636e\u63d2\u5165\u5230\u65b0\u8868\u4e2d\u3002"}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:"\u65b0\u8868\u521b\u5efa\u6210\u529f\u540e\uff0c\u60a8\u9700\u8981\u624b\u52a8\u6388\u4e88\u7528\u6237\u5bf9\u8be5\u8868\u7684\u6743\u9650\u3002"}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:"\u5f53\u5f02\u6b65\u67e5\u8be2\u539f\u8868\u5e76\u57fa\u4e8e\u67e5\u8be2\u7ed3\u679c\u521b\u5efa\u65b0\u8868\u65f6\uff0c\u5982\u679c\u4e0d\u6307\u5b9a Task \u540d\u79f0\uff0c\u90a3\u4e48 StarRocks \u4f1a\u81ea\u52a8\u751f\u6210\u4e00\u4e2a Task \u540d\u79f0\u3002"}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,d.jsxs)(n.p,{children:["\u793a\u4f8b\u4e00\uff1a\u540c\u6b65\u67e5\u8be2\u539f\u8868 ",(0,d.jsx)(n.code,{children:"order"})," \u5e76\u6839\u636e\u67e5\u8be2\u7ed3\u679c\u521b\u5efa\u65b0\u8868 ",(0,d.jsx)(n.code,{children:"order_new"}),"\uff0c\u7136\u540e\u5c06\u67e5\u8be2\u7ed3\u679c\u63d2\u5165\u5230\u65b0\u8868\u4e2d\u3002"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-SQL",children:"CREATE TABLE order_new\nAS SELECT * FROM order;\n"})}),"\n",(0,d.jsxs)(n.p,{children:["\u793a\u4f8b\u4e8c\uff1a\u540c\u6b65\u67e5\u8be2\u539f\u8868 ",(0,d.jsx)(n.code,{children:"order"}),"\u4e2d\u7684 ",(0,d.jsx)(n.code,{children:"k1"}),"\u3001",(0,d.jsx)(n.code,{children:"k2"})," \u548c ",(0,d.jsx)(n.code,{children:"k3"})," \u5217\u5e76\u6839\u636e\u67e5\u8be2\u7ed3\u679c\u521b\u5efa\u65b0\u8868 ",(0,d.jsx)(n.code,{children:"order_new"}),"\uff0c\u7136\u540e\u5c06\u67e5\u8be2\u7ed3\u679c\u63d2\u5165\u5230\u65b0\u8868\u4e2d\uff0c\u5e76\u6307\u5b9a\u65b0\u8868\u4e2d\u5217\u7684\u540d\u79f0\u4e3a ",(0,d.jsx)(n.code,{children:"a"}),"\u3001",(0,d.jsx)(n.code,{children:"b"})," \u548c ",(0,d.jsx)(n.code,{children:"c"}),"\u3002"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-SQL",children:"CREATE TABLE order_new (a, b, c)\nAS SELECT k1, k2, k3 FROM order;\n"})}),"\n",(0,d.jsx)(n.p,{children:"\u6216"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-SQL",children:"CREATE TABLE order_new\nAS SELECT k1 AS a, k2 AS b, k3 AS c FROM order;\n"})}),"\n",(0,d.jsxs)(n.p,{children:["\u793a\u4f8b\u4e09\uff1a\u540c\u6b65\u67e5\u8be2\u539f\u8868 ",(0,d.jsx)(n.code,{children:"employee"}),"\u4e2d ",(0,d.jsx)(n.code,{children:"salary"})," \u5217\u7684\u6700\u5927\u503c\u5e76\u6839\u636e\u67e5\u8be2\u7ed3\u679c\u521b\u5efa\u65b0\u8868 ",(0,d.jsx)(n.code,{children:"employee_new"})," \uff0c\u7136\u540e\u5c06\u67e5\u8be2\u7ed3\u679c\u63d2\u5165\u5230\u65b0\u8868\u4e2d\uff0c\u5e76\u6307\u5b9a\u65b0\u8868\u4e2d\u5217\u540d\u4e3a ",(0,d.jsx)(n.code,{children:"salary_new"}),"\u3002"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-SQL",children:"CREATE TABLE employee_new\nAS SELECT MAX(salary) AS salary_max FROM employee;\n"})}),"\n",(0,d.jsxs)(n.p,{children:["\u63d2\u5165\u5b8c\u6210\u540e\uff0c\u67e5\u8be2\u65b0\u8868 ",(0,d.jsx)(n.code,{children:"employee_new"}),"\u3002"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-SQL",children:"SELECT * FROM employee_new;\n\n+------------+\n| salary_max |\n+------------+\n|   10000    |\n+------------+\n"})}),"\n",(0,d.jsx)(n.p,{children:"\u793a\u4f8b\u56db\uff1a\u4f7f\u7528 CTAS \u521b\u5efa\u4e00\u5f20\u4e3b\u952e\u8868\u3002\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u4e3b\u952e\u8868\u4e2d\u7684\u6570\u636e\u884c\u6570\u53ef\u80fd\u4f1a\u6bd4\u67e5\u8be2\u7ed3\u679c\u4e2d\u7684\u6570\u636e\u884c\u6570\u5c11\u3002\u8fd9\u662f\u56e0\u4e3a\u4e3b\u952e\u8868\u53ea\u5b58\u50a8\u5177\u6709\u76f8\u540c\u4e3b\u952e\u7684\u4e00\u7ec4\u6570\u636e\u884c\u4e2d\u6700\u65b0\u7684\u4e00\u6761\u6570\u636e\u884c\u3002"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-SQL",children:"CREATE TABLE employee_new\nPRIMARY KEY(order_id)\nAS SELECT\n    order_list.order_id,\n    sum(goods.price) as total\nFROM order_list INNER JOIN goods ON goods.item_id1 = order_list.item_id2\nGROUP BY order_id;\n"})}),"\n",(0,d.jsxs)(n.p,{children:["\u793a\u4f8b\u4e94\uff1a\u540c\u6b65\u67e5\u8be2\u56db\u5f20\u539f\u8868 ",(0,d.jsx)(n.code,{children:"lineorder"}),"\u3001",(0,d.jsx)(n.code,{children:"customer"}),"\u3001",(0,d.jsx)(n.code,{children:"supplier"})," \u548c ",(0,d.jsx)(n.code,{children:"part"})," \u5e76\u6839\u636e\u67e5\u8be2\u7ed3\u679c\u521b\u5efa\u65b0\u8868 ",(0,d.jsx)(n.code,{children:"lineorder_flat"}),"\uff0c\u7136\u540e\u5c06\u67e5\u8be2\u7ed3\u679c\u63d2\u5165\u5230\u65b0\u8868\u4e2d\uff0c\u5e76\u6307\u5b9a\u65b0\u8868\u7684\u5206\u533a\u548c\u5206\u6876\u65b9\u5f0f\u3002"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-SQL",children:'CREATE TABLE lineorder_flat\nPARTITION BY RANGE (`LO_ORDERDATE`)\n(\n    START ("1993-01-01") END ("1999-01-01") EVERY (INTERVAL 1 YEAR)\n)\nDISTRIBUTED BY HASH (`LO_ORDERKEY`) BUCKETS 120 AS SELECT\n    l.LO_ORDERKEY AS LO_ORDERKEY,\n    l.LO_LINENUMBER AS LO_LINENUMBER,\n    l.LO_CUSTKEY AS LO_CUSTKEY,\n    l.LO_PARTKEY AS LO_PARTKEY,\n    l.LO_SUPPKEY AS LO_SUPPKEY,\n    l.LO_ORDERDATE AS LO_ORDERDATE,\n    l.LO_ORDERPRIORITY AS LO_ORDERPRIORITY,\n    l.LO_SHIPPRIORITY AS LO_SHIPPRIORITY,\n    l.LO_QUANTITY AS LO_QUANTITY,\n    l.LO_EXTENDEDPRICE AS LO_EXTENDEDPRICE,\n    l.LO_ORDTOTALPRICE AS LO_ORDTOTALPRICE,\n    l.LO_DISCOUNT AS LO_DISCOUNT,\n    l.LO_REVENUE AS LO_REVENUE,\n    l.LO_SUPPLYCOST AS LO_SUPPLYCOST,\n    l.LO_TAX AS LO_TAX,\n    l.LO_COMMITDATE AS LO_COMMITDATE,\n    l.LO_SHIPMODE AS LO_SHIPMODE,\n    c.C_NAME AS C_NAME,\n    c.C_ADDRESS AS C_ADDRESS,\n    c.C_CITY AS C_CITY,\n    c.C_NATION AS C_NATION,\n    c.C_REGION AS C_REGION,\n    c.C_PHONE AS C_PHONE,\n    c.C_MKTSEGMENT AS C_MKTSEGMENT,\n    s.S_NAME AS S_NAME,\n    s.S_ADDRESS AS S_ADDRESS,\n    s.S_CITY AS S_CITY,\n    s.S_NATION AS S_NATION,\n    s.S_REGION AS S_REGION,\n    s.S_PHONE AS S_PHONE,\n    p.P_NAME AS P_NAME,\n    p.P_MFGR AS P_MFGR,\n    p.P_CATEGORY AS P_CATEGORY,\n    p.P_BRAND AS P_BRAND,\n    p.P_COLOR AS P_COLOR,\n    p.P_TYPE AS P_TYPE,\n    p.P_SIZE AS P_SIZE,\n    p.P_CONTAINER AS P_CONTAINER FROM lineorder AS l \nINNER JOIN customer AS c ON c.C_CUSTKEY = l.LO_CUSTKEY\nINNER JOIN supplier AS s ON s.S_SUPPKEY = l.LO_SUPPKEY\nINNER JOIN part AS p ON p.P_PARTKEY = l.LO_PARTKEY;\n'})}),"\n",(0,d.jsxs)(n.p,{children:["\u793a\u4f8b\u516d\uff1a\u5f02\u6b65\u67e5\u8be2\u539f\u8868 ",(0,d.jsx)(n.code,{children:"order_detail"})," \u5e76\u6839\u636e\u67e5\u8be2\u7ed3\u679c\u521b\u5efa\u65b0\u8868 ",(0,d.jsx)(n.code,{children:"order_statistics"}),"\uff0c\u7136\u540e\u5c06\u67e5\u8be2\u7ed3\u679c\u63d2\u5165\u5230\u65b0\u8868\u4e2d\u3002"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-Plain_Text",children:"SUBMIT TASK AS CREATE TABLE order_statistics AS SELECT COUNT(*) as count FROM order_detail;\n\n+-------------------------------------------+-----------+\n| TaskName                                  | Status    |\n+-------------------------------------------+-----------+\n| ctas-df6f7930-e7c9-11ec-abac-bab8ee315bf2 | SUBMITTED |\n+-------------------------------------------+-----------+\n"})}),"\n",(0,d.jsx)(n.p,{children:"\u67e5\u8be2 Task \u7684\u4fe1\u606f\u3002"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-SQL",children:"SELECT * FROM INFORMATION_SCHEMA.tasks;\n\n-- Task \u4fe1\u606f\u5982\u4e0b\n\nTASK_NAME: ctas-df6f7930-e7c9-11ec-abac-bab8ee315bf2\nCREATE_TIME: 2022-06-14 14:07:06\nSCHEDULE: MANUAL\nDATABASE: default_cluster:test\nDEFINITION: CREATE TABLE order_statistics AS SELECT COUNT(*) as cnt FROM order_detail\nEXPIRE_TIME: 2022-06-17 14:07:06\n"})}),"\n",(0,d.jsx)(n.p,{children:"\u67e5\u8be2 TaskRun \u7684\u72b6\u6001\u3002"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-SQL",children:"SELECT * FROM INFORMATION_SCHEMA.task_runs;\n\n--TaskRun \u7684\u72b6\u6001\u5982\u4e0b\n\nQUERY_ID: 37bd2b63-eba8-11ec-8d41-bab8ee315bf2\nTASK_NAME: ctas-df6f7930-e7c9-11ec-abac-bab8ee315bf2\nCREATE_TIME: 2022-06-14 14:07:06\nFINISH_TIME: 2022-06-14 14:07:07\nSTATE: SUCCESS\nDATABASE: \nDEFINITION: CREATE TABLE order_statistics AS SELECT COUNT(*) as cnt FROM order_detail\nEXPIRE_TIME: 2022-06-17 14:07:06\nERROR_CODE: 0\nERROR_MESSAGE: NULL\n"})}),"\n",(0,d.jsxs)(n.p,{children:["\u5f53 TaskRun \u7684\u72b6\u6001\u4e3a ",(0,d.jsx)(n.code,{children:"SUCCESS"})," \u65f6\u5373\u53ef\u67e5\u8be2\u65b0\u8868\u3002"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-SQL",children:"SELECT * FROM order_statistics;\n"})})]})}const A=function(e={}){const{wrapper:n}=Object.assign({},(0,c.ah)(),e.components);return n?(0,d.jsx)(n,Object.assign({},e,{children:(0,d.jsx)(a,e)})):a(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>i,ah:()=>r});var d=s(67294);const c=d.createContext({});function r(e){const n=d.useContext(c);return d.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const l={};function i({components:e,children:n,disableParentContext:s}){let i;return i=s?"function"==typeof e?e({}):e||l:r(e),d.createElement(c.Provider,{value:i},n)}}}]);