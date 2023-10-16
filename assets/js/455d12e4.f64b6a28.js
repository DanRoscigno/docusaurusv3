"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[67600],{19306:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var a=s(85893),t=s(11151);const r={displayed_sidebar:"English"},c="map_keys",i={id:"sql-reference/sql-functions/map-functions/map_keys",title:"map_keys",description:"Description",source:"@site/versioned_docs/version-2.5/sql-reference/sql-functions/map-functions/map_keys.md",sourceDirName:"sql-reference/sql-functions/map-functions",slug:"/sql-reference/sql-functions/map-functions/map_keys",permalink:"/doc/docs/2.5/sql-reference/sql-functions/map-functions/map_keys",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-functions/map-functions/map_keys.md",tags:[],version:"2.5",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"regexp_replace",permalink:"/doc/docs/2.5/sql-reference/sql-functions/like_predicate-functions/regexp_replace"},next:{title:"map_size",permalink:"/doc/docs/2.5/sql-reference/sql-functions/map-functions/map_size"}},o={},l=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",a:"a",pre:"pre"},(0,t.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"map_keys",children:"map_keys"}),"\n",(0,a.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,a.jsx)(n.p,{children:"Returns an array of all the keys in the specified map."}),"\n",(0,a.jsxs)(n.p,{children:["From version 2.5, StarRocks supports querying complex data types MAP and STRUCT from data lakes. MAP is an unordered collection of key-value pairs, for example, ",(0,a.jsx)(n.code,{children:'{"a":1, "b":2}'}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["You can use external catalogs provided by StarRocks to query MAP and STRUCT data from Apache Hive\u2122, Apache Hudi, and Apache Iceberg. You can only query data from ORC and Parquet files. For more information about how to use external catalogs to query external data sources, see ",(0,a.jsx)(n.a,{href:"/doc/docs/2.5/data_source/catalog/catalog_overview",children:"Overview of catalogs"})," and topics related to the required catalog type."]}),"\n",(0,a.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-Haskell",children:"map_keys(any_map)\n"})}),"\n",(0,a.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"any_map"}),": the MAP value from which you want to retrieve keys."]}),"\n",(0,a.jsx)(n.h2,{id:"return-value",children:"Return value"}),"\n",(0,a.jsxs)(n.p,{children:["The return value is in the format of ",(0,a.jsx)(n.code,{children:"array<keyType>"}),". The element type in the array matches the key type in the map."]}),"\n",(0,a.jsx)(n.p,{children:"If the input is NULL, NULL is returned. If a key or value in the MAP value is NULL, NULL is processed as a normal value and contained in the result."}),"\n",(0,a.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsxs)(n.p,{children:["This example uses the Hive table ",(0,a.jsx)(n.code,{children:"hive_map"}),", which contains the following data:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-SQL",children:'select * from hive_map order by col_int;\n+---------+---------------+\n| col_int | col_map       |\n+---------+---------------+\n|       1 | {"a":1,"b":2} |\n|       2 | {"c":3}       |\n|       3 | {"d":4,"e":5} |\n+---------+---------------+\n3 rows in set (0.05 sec)\n'})}),"\n",(0,a.jsxs)(n.p,{children:["After a Hive catalog is created in your database, you can use this catalog and the map_keys() function to obtain all the keys from each row of the ",(0,a.jsx)(n.code,{children:"col_map"})," column."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-Plain",children:'select map_keys(col_map) from hive_map order by col_int;\n+-------------------+\n| map_keys(col_map) |\n+-------------------+\n| ["a","b"]         |\n| ["c"]             |\n| ["d","e"]         |\n+-------------------+\n3 rows in set (0.05 sec)\n'})})]})}const p=function(e={}){const{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?(0,a.jsx)(n,Object.assign({},e,{children:(0,a.jsx)(d,e)})):d(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>i,ah:()=>r});var a=s(67294);const t=a.createContext({});function r(e){const n=a.useContext(t);return a.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const c={};function i({components:e,children:n,disableParentContext:s}){let i;return i=s?"function"==typeof e?e({}):e||c:r(e),a.createElement(t.Provider,{value:i},n)}}}]);