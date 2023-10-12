"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[59259],{48904:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>t,default:()=>x,frontMatter:()=>d,metadata:()=>i,toc:()=>a});var l=n(85893),r=n(11151);const d={},t="DESC",i={id:"sql-reference/sql-statements/Utility/DESCRIBE",title:"DESC",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.0/sql-reference/sql-statements/Utility/DESCRIBE.md",sourceDirName:"sql-reference/sql-statements/Utility",slug:"/sql-reference/sql-statements/Utility/DESCRIBE",permalink:"/doc/zh/docs/3.0/sql-reference/sql-statements/Utility/DESCRIBE",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/sql-reference/sql-statements/Utility/DESCRIBE.md",tags:[],version:"3.0",frontMatter:{},sidebar:"Chinese31",previous:{title:"INSERT",permalink:"/doc/zh/docs/3.0/sql-reference/sql-statements/data-manipulation/insert"},next:{title:"\u6570\u636e\u7c7b\u578b\u6982\u8ff0",permalink:"/doc/zh/docs/3.0/sql-reference/sql-statements/data-types/data-type-list"}},c={},a=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u4fe1\u606f\u8bf4\u660e",id:"\u8fd4\u56de\u4fe1\u606f\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u76f8\u5173\u6587\u6863",id:"\u76f8\u5173\u6587\u6863",level:2}];function h(e){const s=Object.assign({h1:"h1",h2:"h2",p:"p",ul:"ul",li:"li",a:"a",pre:"pre",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",strong:"strong",tbody:"tbody",td:"td",blockquote:"blockquote"},(0,r.ah)(),e.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.h1,{id:"desc",children:"DESC"}),"\n",(0,l.jsx)(s.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,l.jsx)(s.p,{children:"\u60a8\u53ef\u4ee5\u4f7f\u7528\u8be5\u8bed\u53e5\u8fdb\u884c\u5982\u4e0b\u64cd\u4f5c\uff1a"}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:["\u67e5\u770b StarRocks \u8868\u7ed3\u6784\u3001",(0,l.jsx)(s.a,{href:"/doc/zh/docs/3.0/table_design/Sort_key",children:"\u6392\u5e8f\u952e"})," (Sort Key) \u7c7b\u578b\u548c",(0,l.jsx)(s.a,{href:"/doc/zh/docs/3.0/using_starrocks/Materialized_view",children:"\u7269\u5316\u89c6\u56fe"}),"\u3002"]}),"\n",(0,l.jsx)(s.li,{children:"\u67e5\u770b\u5916\u90e8\u6570\u636e\u6e90\uff08\u5982 Apache Hive\u2122\uff09\u4e2d\u7684\u8868\u7ed3\u6784\u3002\u4ec5 StarRocks 2.4 \u53ca\u4ee5\u4e0a\u7248\u672c\u652f\u6301\u8be5\u64cd\u4f5c\u3002"}),"\n"]}),"\n",(0,l.jsx)(s.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-SQL",children:"DESC[RIBE] [catalog_name.][db_name.]table_name [ALL];\n"})}),"\n",(0,l.jsx)(s.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,l.jsxs)(s.table,{children:[(0,l.jsx)(s.thead,{children:(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.th,{children:(0,l.jsx)(s.strong,{children:"\u53c2\u6570"})}),(0,l.jsx)(s.th,{children:(0,l.jsx)(s.strong,{children:"\u5fc5\u9009"})}),(0,l.jsx)(s.th,{children:(0,l.jsx)(s.strong,{children:"\u8bf4\u660e"})})]})}),(0,l.jsxs)(s.tbody,{children:[(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"catalog_name"}),(0,l.jsx)(s.td,{children:"\u5426"}),(0,l.jsxs)(s.td,{children:["Internal catalog \u6216 external catalog \u7684\u540d\u79f0\u3002",(0,l.jsxs)("ul",{children:[(0,l.jsxs)("li",{children:["\u5982\u6307\u5b9a internal catalog \u540d\u79f0\uff0c\u5373 ",(0,l.jsx)(s.code,{children:"default_catalog"}),"\uff0c\u5219\u67e5\u770b\u5f53\u524d StarRocks \u96c6\u7fa4\u7684\u6307\u5b9a\u8868\u7ed3\u6784\u3002"]}),(0,l.jsx)("li",{children:"\u5982\u6307\u5b9a external catalog \u540d\u79f0\uff0c\u5219\u67e5\u770b\u5916\u90e8\u6570\u636e\u6e90\u7684\u6307\u5b9a\u8868\u7ed3\u6784\u3002"})]})]})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"db_name"}),(0,l.jsx)(s.td,{children:"\u5426"}),(0,l.jsx)(s.td,{children:"\u6570\u636e\u5e93\u540d\u79f0\u3002"})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"table_name"}),(0,l.jsx)(s.td,{children:"\u662f"}),(0,l.jsx)(s.td,{children:"\u8868\u540d\u79f0\u3002"})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"ALL"}),(0,l.jsx)(s.td,{children:"\u5426"}),(0,l.jsx)(s.td,{children:(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:"\u5982\u8981\u67e5\u770b StarRocks \u8868\u7684\u6392\u5e8f\u952e\u7c7b\u578b\u548c\u7269\u5316\u89c6\u56fe\uff0c\u5219\u6307\u5b9a\u8be5\u5173\u952e\u5b57\uff1b\u5982\u53ea\u67e5\u770b StarRocks \u8868\u7ed3\u6784\uff0c\u5219\u53ef\u4ee5\u4e0d\u6307\u5b9a\u3002"}),(0,l.jsx)("li",{children:"\u5982\u67e5\u770b\u5916\u90e8\u6570\u636e\u6e90\u8868\u7ed3\u6784\uff0c\u4e0d\u80fd\u6307\u5b9a\u8be5\u5173\u952e\u8bcd\u3002"})]})})]})]})]}),"\n",(0,l.jsx)(s.h2,{id:"\u8fd4\u56de\u4fe1\u606f\u8bf4\u660e",children:"\u8fd4\u56de\u4fe1\u606f\u8bf4\u660e"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-Plain",children:"+-----------+---------------+-------+------+------+-----+---------+-------+\n| IndexName | IndexKeysType | Field | Type | Null | Key | Default | Extra |\n+-----------+---------------+-------+------+------+-----+---------+-------+\n"})}),"\n",(0,l.jsx)(s.p,{children:"\u8fd4\u56de\u4fe1\u606f\u4e2d\u7684\u53c2\u6570\u8bf4\u660e\uff1a"}),"\n",(0,l.jsxs)(s.table,{children:[(0,l.jsx)(s.thead,{children:(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.th,{children:(0,l.jsx)(s.strong,{children:"\u53c2\u6570"})}),(0,l.jsx)(s.th,{children:(0,l.jsx)(s.strong,{children:"\u8bf4\u660e"})})]})}),(0,l.jsxs)(s.tbody,{children:[(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"IndexName"}),(0,l.jsx)(s.td,{children:"\u8868\u540d\u3002\u5982\u67e5\u770b\u5916\u90e8\u6570\u636e\u6e90\u8868\u7ed3\u6784\uff0c\u5219\u4e0d\u8fd4\u56de\u8be5\u53c2\u6570\u3002"})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"IndexKeysType"}),(0,l.jsx)(s.td,{children:"\u8868\u7684\u6392\u5e8f\u952e\u7c7b\u578b\u3002\u5982\u67e5\u770b\u5916\u90e8\u6570\u636e\u6e90\u8868\u7ed3\u6784\uff0c\u5219\u4e0d\u8fd4\u56de\u8be5\u53c2\u6570\u3002"})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"Field"}),(0,l.jsx)(s.td,{children:"\u5217\u540d\u3002"})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"Type"}),(0,l.jsx)(s.td,{children:"\u5217\u7684\u6570\u636e\u578b\u3002"})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"Null"}),(0,l.jsxs)(s.td,{children:["\u662f\u5426\u5141\u8bb8\u4e3a NULL\u3002",(0,l.jsxs)("ul",{children:[(0,l.jsxs)("li",{children:[(0,l.jsx)(s.code,{children:"yes"}),": \u8868\u793a\u5141\u8bb8\u4e3a NULL\u3002"]}),(0,l.jsxs)("li",{children:[(0,l.jsx)(s.code,{children:"no"}),"\uff1a\u8868\u793a\u4e0d\u5141\u8bb8\u4e3a NULL\u3002"]})]})]})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"Key"}),(0,l.jsxs)(s.td,{children:["\u662f\u5426\u4e3a\u6392\u5e8f\u952e\u3002",(0,l.jsxs)("ul",{children:[(0,l.jsxs)("li",{children:[(0,l.jsx)(s.code,{children:"true"}),": \u8868\u793a\u4e3a\u6392\u5e8f\u952e\u3002"]}),(0,l.jsxs)("li",{children:[(0,l.jsx)(s.code,{children:"false"}),"\uff1a\u8868\u793a\u4e0d\u4e3a\u6392\u5e8f\u952e\u3002"]})]})]})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"Default"}),(0,l.jsx)(s.td,{children:"\u6570\u636e\u7c7b\u578b\u7684\u9ed8\u8ba4\u503c\u3002\u5982\u8be5\u6570\u636e\u7c7b\u578b\u6ca1\u6709\u9ed8\u8ba4\u503c\uff0c\u5219\u8fd4\u56de NULL\u3002"})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"Extra"}),(0,l.jsx)(s.td,{children:(0,l.jsxs)("ul",{children:[(0,l.jsxs)("li",{children:["\u5982\u679c\u662f\u67e5\u770b StarRocks \u8868\u7ed3\u6784\uff0c\u8be5\u53c2\u6570\u4f1a\u6839\u636e\u60c5\u51b5\u8fd4\u56de\u4ee5\u4e0b\u4fe1\u606f\uff1a",(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:"\u8be5\u5217\u4f7f\u7528\u4e86\u54ea\u79cd\u805a\u5408\u51fd\u6570\uff0c\u5982 SUM \u548c MIN\u3002"}),(0,l.jsxs)("li",{children:["\u8be5\u5217\u662f\u5426\u521b\u5efa\u4e86 bloom filter \u7d22\u5f15\u3002\u5982\u521b\u5efa\uff0c\u5219\u8ffd\u52a0\u663e\u793a ",(0,l.jsx)(s.code,{children:"BLOOM_FILTER"}),"\u3002"]})]})]}),(0,l.jsxs)("li",{children:["\u5982\u679c\u662f\u67e5\u770b\u5916\u90e8\u6570\u636e\u6e90\u8868\u7ed3\u6784\uff0c\u8be5\u53c2\u6570\u4f1a\u663e\u793a\u8be5\u5217\u662f\u5426\u4e3a\u5206\u533a\u952e (partition column)\u3002\u5982\u662f\uff0c\u5219\u663e\u793a ",(0,l.jsx)(s.code,{children:"partition key"}),"\u3002"]})]})})]})]})]}),"\n",(0,l.jsxs)(s.blockquote,{children:["\n",(0,l.jsx)(s.p,{children:"\u8bf4\u660e\uff1a\u6709\u5173\u7269\u5316\u89c6\u56fe\u7684\u5c55\u793a\uff0c\u8bf7\u53c2\u89c1\u793a\u4f8b\u4e8c\u3002"}),"\n"]}),"\n",(0,l.jsx)(s.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,l.jsxs)(s.p,{children:["\u793a\u4f8b\u4e00\uff1a\u67e5\u770b StarRocks \u7684 ",(0,l.jsx)(s.code,{children:"example_table"})," \u8868\u7ed3\u6784\u4fe1\u606f\u3002"]}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-SQL",children:"DESC example_table;\n"})}),"\n",(0,l.jsx)(s.p,{children:"\u6216"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-SQL",children:"DESC default_catalog.example_db.example_table;\n"})}),"\n",(0,l.jsx)(s.p,{children:"\u8fd4\u56de\u4fe1\u606f\u5982\u4e0b\uff1a"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-Plain",children:"+-------+---------------+------+-------+---------+-------+\n| Field | Type          | Null | Key   | Default | Extra |\n+-------+---------------+------+-------+---------+-------+\n| k1    | TINYINT       | Yes  | true  | NULL    |       |\n| k2    | DECIMAL(10,2) | Yes  | true  | 10.5    |       |\n| k3    | CHAR(10)      | Yes  | false | NULL    |       |\n| v1    | INT           | Yes  | false | NULL    |       |\n+-------+---------------+------+-------+---------+-------+\n"})}),"\n",(0,l.jsxs)(s.p,{children:["\u793a\u4f8b\u4e8c\uff1a\u67e5\u770b StarRocks \u7684 ",(0,l.jsx)(s.code,{children:"sales_records"})," \u8868\u7ed3\u6784\u3001\u6392\u5e8f\u952e\u7c7b\u578b\u548c\u7269\u5316\u89c6\u56fe\u3002\u5982\u4e0b\u6240\u793a\uff0c ",(0,l.jsx)(s.code,{children:"sales_records"})," \u8868\u53ea\u6709\u4e00\u5f20\u7269\u5316\u89c6\u56fe ",(0,l.jsx)(s.code,{children:"store_amt"}),"\u3002"]}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-Plain",children:"DESC db1.sales_records ALL;\n\n+---------------+---------------+-----------+--------+------+-------+---------+-------+\n| IndexName     | IndexKeysType | Field     | Type   | Null | Key   | Default | Extra |\n+---------------+---------------+-----------+--------+------+-------+---------+-------+\n| sales_records | DUP_KEYS      | record_id | INT    | Yes  | true  | NULL    |       |\n|               |               | seller_id | INT    | Yes  | true  | NULL    |       |\n|               |               | store_id  | INT    | Yes  | true  | NULL    |       |\n|               |               | sale_date | DATE   | Yes  | false | NULL    | NONE  |\n|               |               | sale_amt  | BIGINT | Yes  | false | NULL    | NONE  |\n|               |               |           |        |      |       |         |       |\n| store_amt     | AGG_KEYS      | store_id  | INT    | Yes  | true  | NULL    |       |\n|               |               | sale_amt  | BIGINT | Yes  | false | NULL    | SUM   |\n+---------------+---------------+-----------+--------+------+-------+---------+-------+\n"})}),"\n",(0,l.jsxs)(s.p,{children:["\u793a\u4f8b\u4e09\uff1a\u67e5\u770b Hive \u4e2d ",(0,l.jsx)(s.code,{children:"hive_table"})," \u8868\u7ed3\u6784\u3002"]}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-SQL",children:"DESC hive_catalog.hive_db.hive_table;\n\n+-------+----------------+------+-------+---------+---------------+ \n| Field | Type           | Null | Key   | Default | Extra         | \n+-------+----------------+------+-------+---------+---------------+ \n| id    | INT            | Yes  | false | NULL    |               | \n| name  | VARCHAR(65533) | Yes  | false | NULL    |               | \n| date  | DATE           | Yes  | false | NULL    | partition key | \n+-------+----------------+------+-------+---------+---------------+\n"})}),"\n",(0,l.jsx)(s.h2,{id:"\u76f8\u5173\u6587\u6863",children:"\u76f8\u5173\u6587\u6863"}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsx)(s.li,{children:(0,l.jsx)(s.a,{href:"../data-definition/CREATE_DATABASE.md",children:"CREATE DATABASE"})}),"\n",(0,l.jsx)(s.li,{children:(0,l.jsx)(s.a,{href:"SHOW_CREATE_DATABASE.md",children:"SHOW CREATE DATABASE"})}),"\n",(0,l.jsx)(s.li,{children:(0,l.jsx)(s.a,{href:"/doc/zh/docs/3.0/sql-reference/sql-statements/data-definition/USE",children:"USE"})}),"\n",(0,l.jsx)(s.li,{children:(0,l.jsx)(s.a,{href:"../data-manipulation/SHOW_DATABASES.md",children:"SHOW DATABASES"})}),"\n",(0,l.jsx)(s.li,{children:(0,l.jsx)(s.a,{href:"../data-definition/DROP_DATABASE.md",children:"DROP DATABASE"})}),"\n"]})]})}const x=function(e={}){const{wrapper:s}=Object.assign({},(0,r.ah)(),e.components);return s?(0,l.jsx)(s,Object.assign({},e,{children:(0,l.jsx)(h,e)})):h(e)}},11151:(e,s,n)=>{n.d(s,{Zo:()=>i,ah:()=>d});var l=n(67294);const r=l.createContext({});function d(e){const s=l.useContext(r);return l.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const t={};function i({components:e,children:s,disableParentContext:n}){let i;return i=n?"function"==typeof e?e({}):e||t:d(e),l.createElement(r.Provider,{value:i},s)}}}]);