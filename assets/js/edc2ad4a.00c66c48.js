"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[56538],{58882:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var r=s(85893),t=s(11151);const o={},c="parse_json",a={id:"sql-reference/sql-functions/json-functions/json-constructor-functions/parse_json",title:"parse_json",description:"Description",source:"@site/versioned_docs/version-3.0/sql-reference/sql-functions/json-functions/json-constructor-functions/parse_json.md",sourceDirName:"sql-reference/sql-functions/json-functions/json-constructor-functions",slug:"/sql-reference/sql-functions/json-functions/json-constructor-functions/parse_json",permalink:"/doc/docs/3.0/sql-reference/sql-functions/json-functions/json-constructor-functions/parse_json",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/sql-reference/sql-functions/json-functions/json-constructor-functions/parse_json.md",tags:[],version:"3.0",frontMatter:{},sidebar:"Chinese31",previous:{title:"json_object",permalink:"/doc/docs/3.0/sql-reference/sql-functions/json-functions/json-constructor-functions/json_object"},next:{title:"JSON query and processing functions",permalink:"/doc/docs/3.0/category/json-query-and-processing-functions-1"}},i={},l=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2},{value:"Keywords",id:"keywords",level:2}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",blockquote:"blockquote",a:"a"},(0,t.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"parse_json",children:"parse_json"}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(n.p,{children:"Converts a string to a JSON value."}),"\n",(0,r.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Haskell",children:"parse_json(string_expr)\n"})}),"\n",(0,r.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"string_expr"}),": the expression that represents the string. Only the STRING, VARCHAR, and CHAR data types are supported."]}),"\n",(0,r.jsx)(n.h2,{id:"return-value",children:"Return value"}),"\n",(0,r.jsx)(n.p,{children:"Returns a JSON value."}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["Note: If the string cannot be parsed into a standard JSON value, the PARSE_JSON function returns ",(0,r.jsx)(n.code,{children:"NULL"})," (see Example 5). For information about the JSON specifications, see ",(0,r.jsx)(n.a,{href:"https://tools.ietf.org/html/rfc7159?spm=a2c63.p38356.0.0.14d26b9fcp7fcf#page-4",children:"RFC 7159"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsxs)(n.p,{children:["Example 1: Convert a STRING value of ",(0,r.jsx)(n.code,{children:"1"})," to a JSON value of ",(0,r.jsx)(n.code,{children:"1"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-plaintext",children:"mysql> SELECT parse_json('1');\n+-----------------+\n| parse_json('1') |\n+-----------------+\n| \"1\"             |\n+-----------------+\n"})}),"\n",(0,r.jsx)(n.p,{children:"Example 2: Convert an array of the STRING data type to a JSON array."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-plaintext",children:"mysql> SELECT parse_json('[1,2,3]');\n+-----------------------+\n| parse_json('[1,2,3]') |\n+-----------------------+\n| [1, 2, 3]             |\n+-----------------------+ \n"})}),"\n",(0,r.jsx)(n.p,{children:"Example 3: Convert an object of the STRING data type to a JSON object."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-plaintext",children:'mysql> SELECT parse_json(\'{"star": "rocks"}\');\n+---------------------------------+\n| parse_json(\'{"star": "rocks"}\') |\n+---------------------------------+\n| {"star": "rocks"}               |\n+---------------------------------+\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Example 4: Construct a JSON value of ",(0,r.jsx)(n.code,{children:"NULL"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-plaintext",children:"mysql> SELECT parse_json('null');\n+--------------------+\n| parse_json('null') |\n+--------------------+\n| \"null\"             |\n+--------------------+\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Example 5: If the string cannot be parsed into a standard JSON value, the PARSE_JSON function returns ",(0,r.jsx)(n.code,{children:"NULL"}),". In this example, ",(0,r.jsx)(n.code,{children:"star"}),' is not enclosed in double quotation marks ("). Therefore, the PARSE_JSON function returns ',(0,r.jsx)(n.code,{children:"NULL"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-plaintext",children:"mysql> SELECT parse_json('{star: \"rocks\"}');\n+-------------------------------+\n| parse_json('{star: \"rocks\"}') |\n+-------------------------------+\n| NULL                          |\n+-------------------------------+\n"})}),"\n",(0,r.jsx)(n.h2,{id:"keywords",children:"Keywords"}),"\n",(0,r.jsx)(n.p,{children:"parse_json, parse json"})]})}const u=function(e={}){const{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(d,e)})):d(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>a,ah:()=>o});var r=s(67294);const t=r.createContext({});function o(e){const n=r.useContext(t);return r.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const c={};function a({components:e,children:n,disableParentContext:s}){let a;return a=s?"function"==typeof e?e({}):e||c:o(e),r.createElement(t.Provider,{value:a},n)}}}]);