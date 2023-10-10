"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[95032],{68480:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var a=t(85893),i=t(11151);const s={},r="BITMAP",l={id:"sql-reference/sql-functions/aggregate-functions/bitmap",title:"BITMAP",description:"Here is a simple example to illustrate the usage of several aggregate functions in Bitmap. For detailed function definitions or more Bitmap functions, see bitmap-functions.",source:"@site/versioned_docs/version-3.1/sql-reference/sql-functions/aggregate-functions/bitmap.md",sourceDirName:"sql-reference/sql-functions/aggregate-functions",slug:"/sql-reference/sql-functions/aggregate-functions/bitmap",permalink:"/docusaurusv3/docs/sql-reference/sql-functions/aggregate-functions/bitmap",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-functions/aggregate-functions/bitmap.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"AVG",permalink:"/docusaurusv3/docs/sql-reference/sql-functions/aggregate-functions/avg"},next:{title:"CORR",permalink:"/docusaurusv3/docs/sql-reference/sql-functions/aggregate-functions/corr"}},o={},c=[{value:"Create table",id:"create-table",level:2},{value:"Data Load",id:"data-load",level:2},{value:"Stream Load",id:"stream-load",level:3},{value:"Insert Into",id:"insert-into",level:3},{value:"Data Query",id:"data-query",level:2},{value:"Syntax",id:"syntax",level:3},{value:"Example",id:"example",level:3},{value:"keyword",id:"keyword",level:2}];function d(e){const n=Object.assign({h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code",h3:"h3",ul:"ul",li:"li"},(0,i.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"bitmap",children:"BITMAP"}),"\n",(0,a.jsx)(n.p,{children:"Here is a simple example to illustrate the usage of several aggregate functions in Bitmap. For detailed function definitions or more Bitmap functions, see bitmap-functions."}),"\n",(0,a.jsx)(n.h2,{id:"create-table",children:"Create table"}),"\n",(0,a.jsx)(n.p,{children:"The aggregation model is needed when creating table. The data type is bitmap and the aggregation function is bitmap_union."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-SQL",children:'CREATE TABLE `pv_bitmap` (\n  `dt` int(11) NULL COMMENT "",\n  `page` varchar(10) NULL COMMENT "",\n  `user_id` bitmap BITMAP_UNION NULL COMMENT ""\n) ENGINE=OLAP\nAGGREGATE KEY(`dt`, `page`)\nCOMMENT "OLAP"\nDISTRIBUTED BY HASH(`dt`);\n'})}),"\n",(0,a.jsx)(n.p,{children:"Note: With an amount of data, you'd better create a rollup table corresponding to high-frequent bitmap_union."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-SQL",children:"ALTER TABLE pv_bitmap ADD ROLLUP pv (page, user_id);\n"})}),"\n",(0,a.jsx)(n.h2,{id:"data-load",children:"Data Load"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"TO_BITMAP (expr)"}),": Convert 0 ~ 18446744073709551615 unsigned bigint to bitmap"]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"BITMAP_EMPTY ()"}),": Generate empty bitmap columns, used for the default value to be filled in when inserting or inputting"]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"BITMAP_HASH (expr)"}),": Convert columns of any type to a bitmap by hashing"]}),"\n",(0,a.jsx)(n.h3,{id:"stream-load",children:"Stream Load"}),"\n",(0,a.jsx)(n.p,{children:"When inputting data using Stream Load, you can convert the data to a BItmap field as follows:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'cat data | curl --location-trusted -u user:passwd -T - \\\n    -H "columns: dt,page,user_id, user_id=to_bitmap(user_id)" \\\n    http://host:8410/api/test/testDb/_stream_load\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'cat data | curl --location-trusted -u user:passwd -T - \\\n    -H "columns: dt,page,user_id, user_id=bitmap_hash(user_id)" \\\n    http://host:8410/api/test/testDb/_stream_load\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'cat data | curl --location-trusted -u user:passwd -T - \\\n    -H "columns: dt,page,user_id, user_id=bitmap_empty()" \\\n    http://host:8410/api/test/testDb/_stream_load\n'})}),"\n",(0,a.jsx)(n.h3,{id:"insert-into",children:"Insert Into"}),"\n",(0,a.jsx)(n.p,{children:"When inputting data using Insert Into, you need to select the corresponding mode based on the type of columns in the source table."}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"id2's column type in source table is bitmap"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-SQL",children:"insert into bitmap_table1\nselect id, id2 from bitmap_table2;\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"id2's column type in target table is bitmap"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-SQL",children:"insert into bitmap_table1 (id, id2)\nvalues (1001, to_bitmap(1000))\n, (1001, to_bitmap(2000));\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"id2's column type in source table is bitmap, and is the result of aggregation using bit_map_union()."}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-SQL",children:"insert into bitmap_table1\nselect id, bitmap_union(id2) from bitmap_table2 group by id;\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"id2's column type in source table is INT, and the bitmap type is generated by to_bitmap()."}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-SQL",children:"insert into bitmap_table1\nselect id, to_bitmap(id2) from table;\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"id2's column type in source table is STRING, and the bitmap type is generated by bitmap_hash()."}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-SQL",children:"insert into bitmap_table1\nselect id, bitmap_hash(id2) from table;\n"})}),"\n",(0,a.jsx)(n.h2,{id:"data-query",children:"Data Query"}),"\n",(0,a.jsx)(n.h3,{id:"syntax",children:"Syntax"}),"\n",(0,a.jsx)(n.p,{children:"``BITMAP_UNION (expr)`: Calculate the union of the input Bitmaps, and returns the new Bitmap."}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"BITMAP_UNION_COUNT (expr)"}),": Calculate the union of the input Bitmaps, and returns its cardinality, equivalent to BITMAP_COUNT (BITMAP_UNION (expr)). It is recommended to use the BITMAP_UNION_COUNT function first, for its performance is better than BITMAP_COUNT (BITMAP_UNION (expr))."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"BITMAP_UNION_INT (expr)"}),": Calculate the number of different values in columns of type TINYINT, SMALLINT and INT, return the value same as COUNT (DISTINCT expr)."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"INTERSECT_COUNT (bitmap_column_to_count, filter_column, filter_values ...)"}),": Calculate the cardinality of the intersection of multiple bitmaps that satisfy filter_column condition. bitmap_column_to_count is a column of type bitmap, filter_column is a column of varying dimensions, and filter_values is a list of dimension values."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"BITMAP_INTERSECT(expr)"}),": Calculate the intersection of this group of bitmap values and returns a new bitmap."]}),"\n",(0,a.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,a.jsxs)(n.p,{children:["The following SQL uses the ",(0,a.jsx)(n.code,{children:"pv_bitmap"})," table above as an example:"]}),"\n",(0,a.jsxs)(n.p,{children:["Calculate the deduplicated value for ",(0,a.jsx)(n.code,{children:"user_id"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-SQL",children:"select bitmap_union_count(user_id)\nfrom pv_bitmap;\n\nselect bitmap_count(bitmap_union(user_id))\nfrom pv_bitmap;\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Calculate the deduplicated value of ",(0,a.jsx)(n.code,{children:"id"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-SQL",children:"select bitmap_union_int(id)\nfrom pv_bitmap;\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Calculate the retention of ",(0,a.jsx)(n.code,{children:"user_id"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-SQL",children:"select intersect_count(user_id, page, 'game') as game_uv,\n    intersect_count(user_id, page, 'shopping') as shopping_uv,\n    intersect_count(user_id, page, 'game', 'shopping') as retention -- Number of users that access both the 'game' and 'shopping' pages\nfrom pv_bitmap\nwhere page in ('game', 'shopping');\n"})}),"\n",(0,a.jsx)(n.h2,{id:"keyword",children:"keyword"}),"\n",(0,a.jsx)(n.p,{children:"BITMAP,BITMAP_COUNT,BITMAP_EMPTY,BITMAP_UNION,BITMAP_UNION_INT,TO_BITMAP,BITMAP_UNION_COUNT,INTERSECT_COUNT,BITMAP_INTERSECT"})]})}const u=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,a.jsx)(n,Object.assign({},e,{children:(0,a.jsx)(d,e)})):d(e)}},11151:(e,n,t)=>{t.d(n,{Zo:()=>l,ah:()=>s});var a=t(67294);const i=a.createContext({});function s(e){const n=a.useContext(i);return a.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const r={};function l({components:e,children:n,disableParentContext:t}){let l;return l=t?"function"==typeof e?e({}):e||r:s(e),a.createElement(i.Provider,{value:l},n)}}}]);