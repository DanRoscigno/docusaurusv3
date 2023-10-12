"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[14791],{42519:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var s=i(85893),t=i(11151);const a={displayed_sidebar:"Chinese31"},r="BITMAP",c={id:"sql-reference/sql-functions/aggregate-functions/bitmap",title:"BITMAP",description:"\u8fd9\u91cc\u901a\u8fc7\u4e00\u4e2a\u7b80\u5355\u7684\u793a\u4f8b\u6765\u4ecb\u7ecd Bitmap \u4e2d\u7684\u51e0\u4e2a\u805a\u5408\u51fd\u6570\u7684\u7528\u6cd5\uff0c\u5177\u4f53\u7684\u51fd\u6570\u5b9a\u4e49\u4ee5\u53ca\u66f4\u591a Bitmap \u51fd\u6570\u8bf7\u53c2\u8003 bitmap-functions\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.1/sql-reference/sql-functions/aggregate-functions/bitmap.md",sourceDirName:"sql-reference/sql-functions/aggregate-functions",slug:"/sql-reference/sql-functions/aggregate-functions/bitmap",permalink:"/doc/zh/docs/sql-reference/sql-functions/aggregate-functions/bitmap",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-functions/aggregate-functions/bitmap.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"Chinese31"},sidebar:"Chinese31",previous:{title:"AVG",permalink:"/doc/zh/docs/sql-reference/sql-functions/aggregate-functions/avg"},next:{title:"CORR",permalink:"/doc/zh/docs/sql-reference/sql-functions/aggregate-functions/corr"}},l={},d=[{value:"\u5efa\u8868",id:"\u5efa\u8868",level:2},{value:"\u52a0\u8f7d\u6570\u636e",id:"\u52a0\u8f7d\u6570\u636e",level:2},{value:"Stream Load",id:"stream-load",level:3},{value:"Insert Into",id:"insert-into",level:3},{value:"\u8bed\u6cd5\u53ca\u5bf9\u5e94\u529f\u80fd",id:"\u8bed\u6cd5\u53ca\u5bf9\u5e94\u529f\u80fd",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function o(e){const n=Object.assign({h1:"h1",p:"p",a:"a",h2:"h2",pre:"pre",code:"code",blockquote:"blockquote",h3:"h3",ul:"ul",li:"li"},(0,t.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"bitmap",children:"BITMAP"}),"\n",(0,s.jsxs)(n.p,{children:["\u8fd9\u91cc\u901a\u8fc7\u4e00\u4e2a\u7b80\u5355\u7684\u793a\u4f8b\u6765\u4ecb\u7ecd Bitmap \u4e2d\u7684\u51e0\u4e2a\u805a\u5408\u51fd\u6570\u7684\u7528\u6cd5\uff0c\u5177\u4f53\u7684\u51fd\u6570\u5b9a\u4e49\u4ee5\u53ca\u66f4\u591a Bitmap \u51fd\u6570\u8bf7\u53c2\u8003 ",(0,s.jsx)(n.a,{href:"/doc/zh/docs/sql-reference/sql-functions/bitmap-functions/bitmap_and",children:"bitmap-functions"}),"\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u5efa\u8868",children:"\u5efa\u8868"}),"\n",(0,s.jsx)(n.p,{children:"\u5efa\u8868\u65f6\u9700\u8981\u4f7f\u7528\u805a\u5408\u6a21\u578b\uff0c\u6570\u636e\u7c7b\u578b\u662f bitmap\uff0c\u805a\u5408\u51fd\u6570\u4e3a bitmap_union\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:'CREATE TABLE `pv_bitmap` (\n  `dt` int(11) NULL COMMENT "",\n  `page` varchar(10) NULL COMMENT "",\n  `user_id` bitmap BITMAP_UNION NULL COMMENT ""\n) ENGINE=OLAP\nAGGREGATE KEY(`dt`, `page`)\nCOMMENT "OLAP"\nDISTRIBUTED BY HASH(`dt`);\n'})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"\u5f53\u6570\u636e\u91cf\u5f88\u5927\u65f6\uff0c\u6700\u597d\u4e3a\u9ad8\u9891\u7387\u7684 bitmap_union \u67e5\u8be2\u5efa\u7acb\u5bf9\u5e94\u7684 rollup \u8868\uff0c\u5982:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"ALTER TABLE pv_bitmap ADD ROLLUP pv (page, user_id);\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u52a0\u8f7d\u6570\u636e",children:"\u52a0\u8f7d\u6570\u636e"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"TO_BITMAP(expr)"}),": \u5c06 0 ~ 18446744073709551615 \u7684 unsigned bigint \u8f6c\u4e3a bitmap\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"BITMAP_EMPTY()"}),": \u751f\u6210\u7a7a bitmap \u5217\uff0c\u7528\u4e8e insert \u6216\u5bfc\u5165\u7684\u65f6\u586b\u5145\u9ed8\u8ba4\u503c\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"BITMAP_HASH(expr)"}),": \u5c06\u4efb\u610f\u7c7b\u578b\u7684\u5217\u901a\u8fc7 Hash \u7684\u65b9\u5f0f\u8f6c\u4e3a bitmap\u3002"]}),"\n",(0,s.jsx)(n.h3,{id:"stream-load",children:"Stream Load"}),"\n",(0,s.jsx)(n.p,{children:"\u7528 Stream Load \u65b9\u5f0f\u5bfc\u5165\u6570\u636e\u65f6\uff0c\u53ef\u6309\u5982\u4e0b\u65b9\u5f0f\u8f6c\u6362\u4e3a Bitmap \u5b57\u6bb5:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'cat data | curl --location-trusted -u user:passwd -T - \\\n    -H "columns: dt,page,user_id, user_id=to_bitmap(user_id)" \\\n    http://host:8410/api/test/testDb/_stream_load\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'cat data | curl --location-trusted -u user:passwd -T - \\\n    -H "columns: dt,page,user_id, user_id=bitmap_hash(user_id)" \\\n    http://host:8410/api/test/testDb/_stream_load\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'cat data | curl --location-trusted -u user:passwd -T - \\\n    -H "columns: dt,page,user_id, user_id=bitmap_empty()" \\\n    http://host:8410/api/test/testDb/_stream_load\n'})}),"\n",(0,s.jsx)(n.h3,{id:"insert-into",children:"Insert Into"}),"\n",(0,s.jsx)(n.p,{children:"\u7528 Insert Into \u65b9\u5f0f\u5bfc\u5165\u6570\u636e\u65f6\uff0c\u9700\u8981\u6839\u636e source \u8868\u4e2d\u7684\u5217\u7684\u7c7b\u578b\u6765\u9009\u62e9\u5bf9\u5e94\u7684\u65b9\u5f0f"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"source \u8868\u7684 id2 \u7684\u5217\u7c7b\u578b\u662f bitmap"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"insert into bitmap_table1\nselect id, id2 from bitmap_table2;\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"target \u8868\u7684 id2 \u7684\u5217\u7c7b\u578b\u662f bitmap"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"insert into bitmap_table1 (id, id2)\nvalues (1001, to_bitmap(1000))\n, (1001, to_bitmap(2000));\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"source \u8868\u7684 id2 \u7684\u5217\u7c7b\u578b\u662f bitmap\uff0c\u5e76\u4e14\u662f\u8981\u7528\u5230 bitmap_union() \u8fdb\u884c\u805a\u5408\u540e\u7684\u7ed3\u679c"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"insert into bitmap_table1\nselect id, bitmap_union(id2) from bitmap_table2 group by id;\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"source \u8868\u7684 id2 \u7684\u5217\u7c7b\u578b\u662f int\uff0c\u901a\u8fc7 to_bitmap() \u751f\u6210 bitmap \u7c7b\u578b"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"insert into bitmap_table1\nselect id, to_bitmap(id2) from table;\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"source \u8868\u7684 id2 \u7684\u5217\u7c7b\u578b\u662f String\uff0c\u901a\u8fc7 bitmap_hash() \u751f\u6210 bitmap \u7c7b\u578b"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"insert into bitmap_table1\nselect id, bitmap_hash(id2) from table;\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u8bed\u6cd5\u53ca\u5bf9\u5e94\u529f\u80fd",children:"\u8bed\u6cd5\u53ca\u5bf9\u5e94\u529f\u80fd"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"BITMAP_UNION(expr)"}),": \u8ba1\u7b97\u8f93\u5165 Bitmap \u7684\u5e76\u96c6\uff0c\u8fd4\u56de\u65b0\u7684bitmap\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"BITMAP_UNION_COUNT(expr)"}),": \u8ba1\u7b97\u8f93\u5165 Bitmap \u7684\u5e76\u96c6\uff0c\u8fd4\u56de\u5176\u57fa\u6570\uff0c\u548c ",(0,s.jsx)(n.code,{children:"BITMAP_COUNT(BITMAP_UNION(expr))"})," \u7b49\u4ef7,\u76ee\u524d\u63a8\u8350\u4f18\u5148\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"BITMAP_UNION_COUNT()"}),"\uff0c\u5176\u6027\u80fd\u4f18\u4e8e ",(0,s.jsx)(n.code,{children:"BITMAP_COUNT(BITMAP_UNION(expr))"}),"\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"BITMAP_UNION_INT(expr)"}),": \u8ba1\u7b97 TINYINT\uff0cSMALLINT \u548c INT \u7c7b\u578b\u7684\u5217\u4e2d\u4e0d\u540c\u503c\u7684\u4e2a\u6570\uff0c\u8fd4\u56de\u503c\u548c\nCOUNT(DISTINCT expr) \u76f8\u540c\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"INTERSECT_COUNT(bitmap_column_to_count, filter_column, filter_values ...)"}),": \u8ba1\u7b97\u6ee1\u8db3\nfilter_column \u8fc7\u6ee4\u6761\u4ef6\u7684\u591a\u4e2a bitmap \u7684\u4ea4\u96c6\u7684\u57fa\u6570\u503c\nbitmap_column_to_count \u662f bitmap \u7c7b\u578b\u7684\u5217\uff0cfilter_column \u662f\u53d8\u5316\u7684\u7ef4\u5ea6\u5217\uff0cfilter_values \u662f\u7ef4\u5ea6\u53d6\u503c\u5217\u8868\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"BITMAP_INTERSECT(expr)"}),": \u8ba1\u7b97\u8fd9\u4e00\u7ec4 bitmap \u503c\u7684\u4ea4\u96c6\uff0c\u8fd4\u56de\u65b0\u7684 bitmap\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,s.jsx)(n.p,{children:"\u4e0b\u9762\u7684 SQL \u4ee5\u4e0a\u9762\u7684 pv_bitmap table \u4e3a\u4f8b\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u8ba1\u7b97 user_id \u7684\u53bb\u91cd\u503c:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"select bitmap_union_count(user_id)\nfrom pv_bitmap;\n\nselect bitmap_count(bitmap_union(user_id))\nfrom pv_bitmap;\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u8ba1\u7b97 id \u7684\u53bb\u91cd\u503c:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"select bitmap_union_int(id)\nfrom pv_bitmap;\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u8ba1\u7b97 user_id \u7684 \u7559\u5b58:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"select intersect_count(user_id, page, 'meituan') as meituan_uv,\n    intersect_count(user_id, page, 'waimai') as waimai_uv,\n    intersect_count(user_id, page, 'meituan', 'waimai') as retention -- \u5728 'meituan' \u548c 'waimai' \u4e24\u4e2a\u9875\u9762\u90fd\u51fa\u73b0\u7684\u7528\u6237\u6570\nfrom pv_bitmap\nwhere page in ('meituan', 'waimai');\n"})})]})}const p=function(e={}){const{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(o,e)})):o(e)}},11151:(e,n,i)=>{i.d(n,{Zo:()=>c,ah:()=>a});var s=i(67294);const t=s.createContext({});function a(e){const n=s.useContext(t);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const r={};function c({components:e,children:n,disableParentContext:i}){let c;return c=i?"function"==typeof e?e({}):e||r:a(e),s.createElement(t.Provider,{value:c},n)}}}]);