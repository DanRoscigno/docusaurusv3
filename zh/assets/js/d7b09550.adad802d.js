"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[81394],{14912:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>r,contentTitle:()=>t,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>o});var c=s(85893),a=s(11151);const i={},t="cardinality",l={id:"sql-reference/sql-functions/map-functions/cardinality",title:"cardinality",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.1/sql-reference/sql-functions/map-functions/cardinality.md",sourceDirName:"sql-reference/sql-functions/map-functions",slug:"/sql-reference/sql-functions/map-functions/cardinality",permalink:"/docusaurusv3/zh/docs/latest/sql-reference/sql-functions/map-functions/cardinality",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-functions/map-functions/cardinality.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"Map Functions",permalink:"/docusaurusv3/zh/docs/latest/category/map-functions"},next:{title:"distinct_map_keys",permalink:"/docusaurusv3/zh/docs/latest/sql-reference/sql-functions/map-functions/distinct_map_keys"}},r={},o=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u67e5\u8be2 StarRocks \u672c\u5730\u8868\u4e2d\u7684 MAP \u6570\u636e",id:"\u67e5\u8be2-starrocks-\u672c\u5730\u8868\u4e2d\u7684-map-\u6570\u636e",level:3},{value:"\u67e5\u8be2\u5916\u90e8\u6570\u636e\u6e56\u4e2d\u7684 MAP \u6570\u636e",id:"\u67e5\u8be2\u5916\u90e8\u6570\u636e\u6e56\u4e2d\u7684-map-\u6570\u636e",level:3}];function d(n){const e=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",a:"a",pre:"pre",h3:"h3"},(0,a.ah)(),n.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(e.h1,{id:"cardinality",children:"cardinality"}),"\n",(0,c.jsx)(e.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,c.jsxs)(e.p,{children:["\u8ba1\u7b97 Map \u4e2d\u5143\u7d20\u7684\u4e2a\u6570\uff0c\u8fd4\u56de\u503c\u7c7b\u578b\u662f INT\u3002MAP \u4e2d\u4fdd\u5b58\u7684\u662f\u952e\u503c\u5bf9 (key-value pair)\uff0c\u6bd4\u5982 ",(0,c.jsx)(e.code,{children:'{"a":1, "b":2}'}),"\u3002\u4e00\u4e2a\u952e\u503c\u5bf9\u7b97\u4f5c\u4e00\u4e2a\u5143\u7d20\uff0c",(0,c.jsx)(e.code,{children:'{"a":1, "b":2}'})," \u7684\u5143\u7d20\u4e2a\u6570\u4e3a 2\u3002"]}),"\n",(0,c.jsxs)(e.p,{children:["\u8be5\u51fd\u6570\u4ece 3.0 \u7248\u672c\u5f00\u59cb\u652f\u6301\u3002\u51fd\u6570\u522b\u540d\u4e3a ",(0,c.jsx)(e.a,{href:"/docusaurusv3/zh/docs/latest/sql-reference/sql-functions/map-functions/map_size",children:"map_size"}),"\u3002"]}),"\n",(0,c.jsx)(e.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-Haskell",children:"INT cardinality(any_map)\n"})}),"\n",(0,c.jsx)(e.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,c.jsxs)(e.p,{children:[(0,c.jsx)(e.code,{children:"any_map"}),": \u8981\u83b7\u53d6\u5143\u7d20\u4e2a\u6570\u7684 MAP \u503c\u3002"]}),"\n",(0,c.jsx)(e.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,c.jsx)(e.p,{children:"\u8fd4\u56de INT \u7c7b\u578b\u7684\u503c\u3002\u5982\u679c\u8f93\u5165\u53c2\u6570\u662f NULL\uff0c\u7ed3\u679c\u4e5f\u662f NULL\u3002"}),"\n",(0,c.jsx)(e.p,{children:"MAP \u4e2d\u7684 Key \u548c Value \u53ef\u4ee5\u4e3a NULL\uff0c\u4f1a\u6b63\u5e38\u8ba1\u7b97\u3002"}),"\n",(0,c.jsx)(e.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,c.jsx)(e.h3,{id:"\u67e5\u8be2-starrocks-\u672c\u5730\u8868\u4e2d\u7684-map-\u6570\u636e",children:"\u67e5\u8be2 StarRocks \u672c\u5730\u8868\u4e2d\u7684 MAP \u6570\u636e"}),"\n",(0,c.jsxs)(e.p,{children:["3.1 \u7248\u672c\u652f\u6301\u5728\u5efa\u8868\u65f6\u5b9a\u4e49 MAP \u7c7b\u578b\u7684\u5217\uff0c\u4ee5\u521b\u5efa\u8868 ",(0,c.jsx)(e.code,{children:"test_map"})," \u4e3a\u4f8b\u3002"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-SQL",children:'CREATE TABLE test_map(\n    col_int INT,\n    col_map MAP<VARCHAR(50),INT>\n  )\nDUPLICATE KEY(col_int);\n\nINSERT INTO test_map VALUES\n(1,map{"a":1,"b":2}),\n(2,map{"c":3}),\n(3,map{"d":4,"e":5});\n\nSELECT * FROM test_map ORDER BY col_int;\n+---------+---------------+\n| col_int | col_map       |\n+---------+---------------+\n|       1 | {"a":1,"b":2} |\n|       2 | {"c":3}       |\n|       3 | {"d":4,"e":5} |\n+---------+---------------+\n'})}),"\n",(0,c.jsxs)(e.p,{children:["\u8ba1\u7b97 ",(0,c.jsx)(e.code,{children:"col_map"})," \u5217\u6bcf\u884c\u7684\u5143\u7d20\u4e2a\u6570\u3002"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-Plain",children:"SELECT cardinality(col_map) FROM test_map ORDER BY col_int;\n+----------------------+\n| cardinality(col_map) |\n+----------------------+\n|                 2    |\n|                 1    |\n|                 2    |\n+----------------------+\n"})}),"\n",(0,c.jsx)(e.h3,{id:"\u67e5\u8be2\u5916\u90e8\u6570\u636e\u6e56\u4e2d\u7684-map-\u6570\u636e",children:"\u67e5\u8be2\u5916\u90e8\u6570\u636e\u6e56\u4e2d\u7684 MAP \u6570\u636e"}),"\n",(0,c.jsxs)(e.p,{children:["\u5047\u8bbe Hive \u4e2d\u6709\u8868 ",(0,c.jsx)(e.code,{children:"hive_map"}),"\uff0c\u6570\u636e\u5982\u4e0b\uff1a"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-Plain",children:'SELECT * FROM hive_map ORDER BY col_int;\n+---------+---------------+\n| col_int | col_map       |\n+---------+---------------+\n|       1 | {"a":1,"b":2} |\n|       2 | {"c":3}       |\n|       3 | {"d":4,"e":5} |\n+---------+---------------+\n3 rows in set (0.05 sec)\n'})}),"\n",(0,c.jsxs)(e.p,{children:["\u901a\u8fc7\u5728 StarRocks \u96c6\u7fa4\u4e2d",(0,c.jsx)(e.a,{href:"/docusaurusv3/zh/docs/latest/data_source/catalog/hive_catalog#%E5%88%9B%E5%BB%BA-hive-catalog",children:"\u521b\u5efa Hive catalog"})," \u6765\u8bbf\u95ee\u8be5\u8868\uff0c\u8ba1\u7b97 ",(0,c.jsx)(e.code,{children:"col_map"})," \u5217\u6bcf\u884c\u7684\u5143\u7d20\u4e2a\u6570\u3002"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-Plaintext",children:"SELECT cardinality(col_map) FROM hive_map ORDER BY col_int;\n+----------------------+\n| cardinality(col_map) |\n+----------------------+\n|                    2 |\n|                    1 |\n|                    2 |\n+----------------------+\n3 rows in set (0.05 sec)\n"})})]})}const p=function(n={}){const{wrapper:e}=Object.assign({},(0,a.ah)(),n.components);return e?(0,c.jsx)(e,Object.assign({},n,{children:(0,c.jsx)(d,n)})):d(n)}},11151:(n,e,s)=>{s.d(e,{Zo:()=>l,ah:()=>i});var c=s(67294);const a=c.createContext({});function i(n){const e=c.useContext(a);return c.useMemo((()=>"function"==typeof n?n(e):{...e,...n}),[e,n])}const t={};function l({components:n,children:e,disableParentContext:s}){let l;return l=s?"function"==typeof n?n({}):n||t:i(n),c.createElement(a.Provider,{value:l},e)}}}]);