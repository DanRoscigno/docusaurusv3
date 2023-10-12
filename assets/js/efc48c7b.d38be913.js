"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[6195],{23066:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>i});var t=s(85893),r=s(11151);const a={},o="cast",c={id:"sql-reference/sql-functions/json-functions/json-query-and-processing-functions/cast",title:"cast",description:"Description",source:"@site/versioned_docs/version-3.1/sql-reference/sql-functions/json-functions/json-query-and-processing-functions/cast.md",sourceDirName:"sql-reference/sql-functions/json-functions/json-query-and-processing-functions",slug:"/sql-reference/sql-functions/json-functions/json-query-and-processing-functions/cast",permalink:"/doc/docs/sql-reference/sql-functions/json-functions/json-query-and-processing-functions/cast",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-functions/json-functions/json-query-and-processing-functions/cast.md",tags:[],version:"3.1",frontMatter:{},sidebar:"Chinese31",previous:{title:"Arrow function",permalink:"/doc/docs/sql-reference/sql-functions/json-functions/json-query-and-processing-functions/arrow-function"},next:{title:"get_json_double",permalink:"/doc/docs/sql-reference/sql-functions/json-functions/json-query-and-processing-functions/get_json_double"}},l={},i=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Usage notes",id:"usage-notes",level:2},{value:"Examples",id:"examples",level:2}];function d(n){const e=Object.assign({h1:"h1",h2:"h2",p:"p",ul:"ul",li:"li",pre:"pre",code:"code"},(0,r.ah)(),n.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"cast",children:"cast"}),"\n",(0,t.jsx)(e.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(e.p,{children:"Converts a value between the JSON type and SQL type."}),"\n",(0,t.jsx)(e.h2,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"Conversion from JSON to SQL"}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-Haskell",children:"cast(json_expr AS sql_data_type)\n"})}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"Conversion from SQL to JSON"}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-Haskell",children:"cast(sql_expr AS JSON)\n"})}),"\n",(0,t.jsx)(e.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"json_expr"}),": the expression that represents the JSON value you want to convert to an SQL value."]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"sql_data_type"}),": the SQL data type to which you want to convert the JSON value. Only the STRING, VARCHAR, CHAR, BOOLEAN, TINYINT, SMALLINT, INT, BIGINT, LARGEINT, DOUBLE, and FLOAT data types are supported."]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"sql_expr"}),": the expression that represents the SQL value you want to convert to a JSON value. This parameter supports all SQL data types that are supported by the ",(0,t.jsx)(e.code,{children:"sql_data_type"})," parameter."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"return-value",children:"Return value"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:["If you use the ",(0,t.jsx)(e.code,{children:"cast(json_expr AS sql_data_type)"})," syntax, the cast function returns a value of the SQL data type that is specified by the ",(0,t.jsx)(e.code,{children:"sql_data_type"})," parameter."]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:["If you use the ",(0,t.jsx)(e.code,{children:"cast(sql_expr AS JSON)"})," syntax, the cast function returns a JSON value."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"usage-notes",children:"Usage notes"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"Conversion from  SQL to JSON"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:["If the SQL value exceeds the precision that is supported by JSON, the cast function returns ",(0,t.jsx)(e.code,{children:"NULL"})," to prevent an arithmetic overflow."]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:["If the SQL value is ",(0,t.jsx)(e.code,{children:"NULL"}),", the cast function does not convert the SQL value ",(0,t.jsx)(e.code,{children:"NULL"})," to a JSON value of ",(0,t.jsx)(e.code,{children:"NULL"}),". The return value is still an SQL value of ",(0,t.jsx)(e.code,{children:"NULL"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"Conversion from JSON to SQL"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"The cast function supports only conversions between compatible JSON and SQL data types. For example, you can convert a JSON string to an SQL string."}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:["The cast function does not support conversions between incompatible JSON and SQL data types. For example, if you convert a JSON number to an SQL string, the function returns ",(0,t.jsx)(e.code,{children:"NULL"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:["If an arithmetic overflow occurs, the cast function returns an SQL value of ",(0,t.jsx)(e.code,{children:"NULL"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:["If you convert a JSON value of ",(0,t.jsx)(e.code,{children:"NULL"})," to an SQL value, the function returns an SQL value of ",(0,t.jsx)(e.code,{children:"NULL"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:'If you convert a JSON string to a VARCHAR value, the function returns a VARCHAR value that is not enclosed in double quotation marks (").'}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(e.p,{children:"Example 1: Convert a JSON value to an SQL value."}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-plaintext",children:"-- Convert a JSON value to an INT value.\nmysql> select cast(parse_json('{\"a\": 1}') -> 'a' as int);\n+--------------------------------------------+\n| CAST((parse_json('{\"a\": 1}')->'a') AS INT) |\n+--------------------------------------------+\n|                                          1 |\n+--------------------------------------------+\n\n-- Convert a JSON string to a VARCHAR value.\nmysql> select cast(parse_json('\"star\"') as varchar);\n+---------------------------------------+\n| cast(parse_json('\"star\"') AS VARCHAR) |\n+---------------------------------------+\n| star                                  |\n+---------------------------------------+\n\n-- Convert a JSON object to a VARCHAR value.\nmysql> select cast(parse_json('{\"star\": 1}') as varchar);\n+--------------------------------------------+\n| cast(parse_json('{\"star\": 1}') AS VARCHAR) |\n+--------------------------------------------+\n| {\"star\": 1}                                |\n+--------------------------------------------+\n\n-- Convert a JSON array to a VARCHAR value.\n\nmysql> select cast(parse_json('[1,2,3]') as varchar);\n+----------------------------------------+\n| cast(parse_json('[1,2,3]') AS VARCHAR) |\n+----------------------------------------+\n| [1, 2, 3]                              |\n+----------------------------------------+\n"})}),"\n",(0,t.jsx)(e.p,{children:"Example 2: Convert an SQL value to a JSON value."}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-plaintext",children:'-- Convert an INT value to a JSON value.\nmysql> select cast(1 as json);\n+-----------------+\n| cast(1 AS JSON) |\n+-----------------+\n| 1               |\n+-----------------+\n\n-- Convert a VARCHAR value to a JSON value.\nmysql> select cast("star" as json);\n+----------------------+\n| cast(\'star\' AS JSON) |\n+----------------------+\n| "star"               |\n+----------------------+\n\n-- Convert a BOOLEAN value to a JSON value.\nmysql> select cast(true as json);\n+--------------------+\n| cast(TRUE AS JSON) |\n+--------------------+\n| true               |\n+--------------------+\n'})})]})}const u=function(n={}){const{wrapper:e}=Object.assign({},(0,r.ah)(),n.components);return e?(0,t.jsx)(e,Object.assign({},n,{children:(0,t.jsx)(d,n)})):d(n)}},11151:(n,e,s)=>{s.d(e,{Zo:()=>c,ah:()=>a});var t=s(67294);const r=t.createContext({});function a(n){const e=t.useContext(r);return t.useMemo((()=>"function"==typeof n?n(e):{...e,...n}),[e,n])}const o={};function c({components:n,children:e,disableParentContext:s}){let c;return c=s?"function"==typeof n?n({}):n||o:a(n),t.createElement(r.Provider,{value:c},e)}}}]);