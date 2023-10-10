"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[16336],{39264:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>o,frontMatter:()=>i,metadata:()=>c,toc:()=>a});var t=s(85893),l=s(11151);const i={},r="SHOW CREATE VIEW",c={id:"sql-reference/sql-statements/data-manipulation/SHOW CREATE VIEW",title:"SHOW CREATE VIEW",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.1/sql-reference/sql-statements/data-manipulation/SHOW CREATE VIEW.md",sourceDirName:"sql-reference/sql-statements/data-manipulation",slug:"/sql-reference/sql-statements/data-manipulation/SHOW CREATE VIEW",permalink:"/doc/zh/docs/sql-reference/sql-statements/data-manipulation/SHOW CREATE VIEW",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-statements/data-manipulation/SHOW CREATE VIEW.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"SHOW CREATE TABLE",permalink:"/doc/zh/docs/sql-reference/sql-statements/data-manipulation/SHOW CREATE TABLE"},next:{title:"SHOW DATA",permalink:"/doc/zh/docs/sql-reference/sql-statements/data-manipulation/SHOW DATA"}},d={},a=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u7ed3\u679c\u8bf4\u660e",id:"\u8fd4\u56de\u7ed3\u679c\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u67e5\u770b\u903b\u8f91\u89c6\u56fe\u521b\u5efa\u8bed\u53e5",id:"\u67e5\u770b\u903b\u8f91\u89c6\u56fe\u521b\u5efa\u8bed\u53e5",level:3},{value:"\u67e5\u770b\u7269\u5316\u89c6\u56fe\u521b\u5efa\u8bed\u53e5",id:"\u67e5\u770b\u7269\u5316\u89c6\u56fe\u521b\u5efa\u8bed\u53e5",level:3}];function h(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",blockquote:"blockquote",strong:"strong",pre:"pre",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",h3:"h3"},(0,l.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"show-create-view",children:"SHOW CREATE VIEW"}),"\n",(0,t.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,t.jsx)(n.p,{children:"\u67e5\u770b\u6307\u5b9a\u903b\u8f91\u89c6\u56fe\u7684\u521b\u5efa\u8bed\u53e5 CREATE VIEW\u3002\u89c6\u56fe\u521b\u5efa\u8bed\u53e5\u53ef\u4ee5\u5e2e\u52a9\u60a8\u7406\u89e3\u89c6\u56fe\u5b9a\u4e49\uff0c\u4f5c\u4e3a\u540e\u7eed\u4fee\u6539\u89c6\u56fe\u6216\u91cd\u5efa\u89c6\u56fe\u7684\u53c2\u8003\u3002"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u6ce8\u610f"})}),"\n",(0,t.jsx)(n.p,{children:"\u53ea\u6709\u62e5\u6709\u8be5\u89c6\u56fe\u548c\u89c6\u56fe\u5bf9\u5e94\u57fa\u8868\u7684 SELECT \u6743\u9650\u7684\u7528\u6237\u624d\u53ef\u4ee5\u67e5\u770b\u3002"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"\u4ece 2.5.4 \u7248\u672c\u5f00\u59cb\uff0c\u4e3a\u4e86\u517c\u5bb9 MySQL \u6807\u51c6\u8bed\u6cd5\uff0c\u652f\u6301\u4f7f\u7528 SHOW CREATE VIEW \u6765\u67e5\u770b\u5f02\u6b65\u7269\u5316\u89c6\u56fe\u7684\u521b\u5efa\u8bed\u53e5\u3002\u8be5\u8bed\u53e5\u5c06\u7269\u5316\u89c6\u56fe\u5f53\u505a\u666e\u901a\u89c6\u56fe\u6765\u5904\u7406\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:"SHOW CREATE VIEW [<db_name>.]<view_name>\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"\u53c2\u6570"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"\u5fc5\u9009"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"\u8bf4\u660e"})})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"db_name"}),(0,t.jsx)(n.td,{children:"\u5426"}),(0,t.jsx)(n.td,{children:"\u6570\u636e\u5e93\u540d\u79f0\u3002\u5982\u4e0d\u6307\u5b9a\uff0c\u5219\u9ed8\u8ba4\u67e5\u770b\u5f53\u524d\u6570\u636e\u5e93\u4e2d\u6307\u5b9a\u89c6\u56fe\u7684\u521b\u5efa\u8bed\u53e5\u3002"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"view_name"}),(0,t.jsx)(n.td,{children:"\u662f"}),(0,t.jsx)(n.td,{children:"\u89c6\u56fe\u540d\u79f0\u3002"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"\u8fd4\u56de\u7ed3\u679c\u8bf4\u660e",children:"\u8fd4\u56de\u7ed3\u679c\u8bf4\u660e"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plain",children:"+---------+--------------+----------------------+----------------------+\n| View    | Create View  | character_set_client | collation_connection |\n+---------+--------------+----------------------+----------------------+\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u8fd4\u56de\u7ed3\u679c\u4e2d\u7684\u53c2\u6570\u8bf4\u660e\u5982\u4e0b\uff1a"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"\u53c2\u6570"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"\u8bf4\u660e"})})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"View"}),(0,t.jsx)(n.td,{children:"\u89c6\u56fe\u540d\u79f0\u3002"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Create View"}),(0,t.jsx)(n.td,{children:"\u89c6\u56fe\u7684\u521b\u5efa\u8bed\u53e5\u3002"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"character_set_client"}),(0,t.jsx)(n.td,{children:"\u5ba2\u6237\u7aef\u8fde\u63a5 StarRocks \u670d\u52a1\u7aef\u4f7f\u7528\u7684\u5b57\u7b26\u96c6\u3002"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"collation_connection"}),(0,t.jsx)(n.td,{children:"\u5b57\u7b26\u96c6\u7684\u6821\u5bf9\u89c4\u5219\u3002"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,t.jsx)(n.h3,{id:"\u67e5\u770b\u903b\u8f91\u89c6\u56fe\u521b\u5efa\u8bed\u53e5",children:"\u67e5\u770b\u903b\u8f91\u89c6\u56fe\u521b\u5efa\u8bed\u53e5"}),"\n",(0,t.jsxs)(n.p,{children:["\u521b\u5efa\u8868 ",(0,t.jsx)(n.code,{children:"base"}),"\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:"CREATE TABLE base (\n    k1 date,\n    k2 int,\n    v1 int sum)\nPARTITION BY RANGE(k1)\n(\n    PARTITION p1 values less than('2020-02-01'),\n    PARTITION p2 values less than('2020-03-01')\n)\nDISTRIBUTED BY HASH(k2)\nPROPERTIES( \"replication_num\"  = \"1\");\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u5728\u8868 ",(0,t.jsx)(n.code,{children:"base"})," \u4e0a\u521b\u5efa\u89c6\u56fe ",(0,t.jsx)(n.code,{children:"example_view"}),"\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:"CREATE VIEW example_view (k1, k2, v1)\nAS SELECT k1, k2, v1 FROM base;\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u67e5\u770b\u89c6\u56fe ",(0,t.jsx)(n.code,{children:"example_view"})," \u7684\u521b\u5efa\u8bed\u53e5\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Plain",children:'SHOW CREATE VIEW example_view;\n\nMySQL [yn_db]> SHOW CREATE VIEW example_view;\n+--------------+-----------------------------------------------------------------------------------------------------------------------------------------------------+----------------------+----------------------+\n| View         | Create View                                                                                                                                         | character_set_client | collation_connection |\n+--------------+-----------------------------------------------------------------------------------------------------------------------------------------------------+----------------------+----------------------+\n| example_view | CREATE VIEW `example_view` (k1, k2, v1) COMMENT "VIEW" AS SELECT `yn_db`.`base`.`k1`, `yn_db`.`base`.`k2`, `yn_db`.`base`.`v1`\nFROM `yn_db`.`base`; | utf8                 | utf8_general_ci      |\n+--------------+-----------------------------------------------------------------------------------------------------------------------------------------------------+----------------------+----------------------+\n\n'})}),"\n",(0,t.jsx)(n.h3,{id:"\u67e5\u770b\u7269\u5316\u89c6\u56fe\u521b\u5efa\u8bed\u53e5",children:"\u67e5\u770b\u7269\u5316\u89c6\u56fe\u521b\u5efa\u8bed\u53e5"}),"\n",(0,t.jsxs)(n.p,{children:["\u5728\u8868 ",(0,t.jsx)(n.code,{children:"base"})," \u4e0a\u521b\u5efa\u7269\u5316\u89c6\u56fe ",(0,t.jsx)(n.code,{children:"example_mv"}),"\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:"CREATE MATERIALIZED VIEW example_mv distributed by hash(k1)\nAS SELECT k1 FROM base;\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u67e5\u770b\u7269\u5316\u89c6\u56fe ",(0,t.jsx)(n.code,{children:"example_mv"})," \u7684\u521b\u5efa\u8bed\u53e5\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Plain",children:"SHOW CREATE VIEW example_mv;\n+------------+----------------------------------------------------------------------------+----------------------+----------------------+\n| View       | Create View                                                                | character_set_client | collation_connection |\n+------------+----------------------------------------------------------------------------+----------------------+----------------------+\n| example_mv | CREATE VIEW `example_mv` AS SELECT `yn_db`.`base`.`k1`\nFROM `yn_db`.`base` | utf8                 | utf8_general_ci      |\n+------------+------------------------------------------------\n"})})]})}const o=function(e={}){const{wrapper:n}=Object.assign({},(0,l.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(h,e)})):h(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>c,ah:()=>i});var t=s(67294);const l=t.createContext({});function i(e){const n=t.useContext(l);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const r={};function c({components:e,children:n,disableParentContext:s}){let c;return c=s?"function"==typeof e?e({}):e||r:i(e),t.createElement(l.Provider,{value:c},n)}}}]);