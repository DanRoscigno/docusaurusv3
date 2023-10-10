"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[40170],{50503:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>c,toc:()=>o});var s=n(85893),t=n(11151);const r={},l="map_values",c={id:"sql-reference/sql-functions/map-functions/map_values",title:"map_values",description:"Description",source:"@site/versioned_docs/version-3.1/sql-reference/sql-functions/map-functions/map_values.md",sourceDirName:"sql-reference/sql-functions/map-functions",slug:"/sql-reference/sql-functions/map-functions/map_values",permalink:"/docusaurusv3/docs/latest/sql-reference/sql-functions/map-functions/map_values",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-functions/map-functions/map_values.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"map_size",permalink:"/docusaurusv3/docs/latest/sql-reference/sql-functions/map-functions/map_size"},next:{title:"transform_keys",permalink:"/docusaurusv3/docs/latest/sql-reference/sql-functions/map-functions/transform_keys"}},i={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2},{value:"Query MAP data from a StarRocks native table",id:"query-map-data-from-a-starrocks-native-table",level:3},{value:"Query MAP data from data lake",id:"query-map-data-from-data-lake",level:3}];function u(e){const a=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",h3:"h3",a:"a"},(0,t.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.h1,{id:"map_values",children:"map_values"}),"\n",(0,s.jsx)(a.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(a.p,{children:"Returns an array of all the values in the specified map."}),"\n",(0,s.jsx)(a.p,{children:"This function is supported from v2.5."}),"\n",(0,s.jsx)(a.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-Haskell",children:"map_values(any_map)\n"})}),"\n",(0,s.jsx)(a.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.code,{children:"any_map"}),": the MAP value from which you want to retrieve values."]}),"\n",(0,s.jsx)(a.h2,{id:"return-value",children:"Return value"}),"\n",(0,s.jsxs)(a.p,{children:["The return value is in the format of ",(0,s.jsx)(a.code,{children:"array<valueType>"}),". The element type in the array matches the value type in the map."]}),"\n",(0,s.jsx)(a.p,{children:"If the input is NULL, NULL is returned. If a key or value in the MAP value is NULL, NULL is processed as a normal value and contained in the result."}),"\n",(0,s.jsx)(a.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(a.h3,{id:"query-map-data-from-a-starrocks-native-table",children:"Query MAP data from a StarRocks native table"}),"\n",(0,s.jsxs)(a.p,{children:["From v3.1 onwards, StarRocks supports defining MAP columns when you create a table. This example uses table ",(0,s.jsx)(a.code,{children:"test_map"}),", which contains the following data:"]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-Plain",children:'CREATE TABLE test_map(\n    col_int INT,\n    col_map MAP<VARCHAR(50),INT>\n  )\nDUPLICATE KEY(col_int);\n\nINSERT INTO test_map VALUES\n(1,map{"a":1,"b":2}),\n(2,map{"c":3}),\n(3,map{"d":4,"e":5});\n\nSELECT * FROM test_map ORDER BY col_int;\n+---------+---------------+\n| col_int | col_map       |\n+---------+---------------+\n|       1 | {"a":1,"b":2} |\n|       2 | {"c":3}       |\n|       3 | {"d":4,"e":5} |\n+---------+---------------+\n3 rows in set (0.05 sec)\n'})}),"\n",(0,s.jsxs)(a.p,{children:["Obtain all the values from each row of the ",(0,s.jsx)(a.code,{children:"col_map"})," column."]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-SQL",children:"select map_values(col_map) from test_map order by col_int;\n+---------------------+\n| map_values(col_map) |\n+---------------------+\n| [1,2]               |\n| [3]                 |\n| [4,5]               |\n+---------------------+\n3 rows in set (0.04 sec)\n"})}),"\n",(0,s.jsx)(a.h3,{id:"query-map-data-from-data-lake",children:"Query MAP data from data lake"}),"\n",(0,s.jsxs)(a.p,{children:["This example uses Hive table ",(0,s.jsx)(a.code,{children:"hive_map"}),", which contains the following data:"]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-Plaintext",children:'SELECT * FROM hive_map ORDER BY col_int;\n+---------+---------------+\n| col_int | col_map       |\n+---------+---------------+\n|       1 | {"a":1,"b":2} |\n|       2 | {"c":3}       |\n|       3 | {"d":4,"e":5} |\n+---------+---------------+\n'})}),"\n",(0,s.jsxs)(a.p,{children:["After a ",(0,s.jsx)(a.a,{href:"/docusaurusv3/docs/latest/data_source/catalog/hive_catalog#create-a-hive-catalog",children:"Hive catalog"})," is created in your cluster, you can use this catalog and the map_values() function to obtain all the values from each row of the ",(0,s.jsx)(a.code,{children:"col_map"})," column."]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-SQL",children:"select map_values(col_map) from hive_map order by col_int;\n+---------------------+\n| map_values(col_map) |\n+---------------------+\n| [1,2]               |\n| [3]                 |\n| [4,5]               |\n+---------------------+\n3 rows in set (0.04 sec)\n"})})]})}const d=function(e={}){const{wrapper:a}=Object.assign({},(0,t.ah)(),e.components);return a?(0,s.jsx)(a,Object.assign({},e,{children:(0,s.jsx)(u,e)})):u(e)}},11151:(e,a,n)=>{n.d(a,{Zo:()=>c,ah:()=>r});var s=n(67294);const t=s.createContext({});function r(e){const a=s.useContext(t);return s.useMemo((()=>"function"==typeof e?e(a):{...a,...e}),[a,e])}const l={};function c({components:e,children:a,disableParentContext:n}){let c;return c=n?"function"==typeof e?e({}):e||l:r(e),s.createElement(t.Provider,{value:c},a)}}}]);