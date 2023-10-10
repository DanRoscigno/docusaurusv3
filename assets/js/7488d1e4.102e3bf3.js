"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[73974],{37570:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var t=s(85893),i=s(11151);const o={},r="get_json_int",c={id:"sql-reference/sql-functions/json-functions/json-query-and-processing-functions/get_json_int",title:"get_json_int",description:"Description",source:"@site/versioned_docs/version-3.0/sql-reference/sql-functions/json-functions/json-query-and-processing-functions/get_json_int.md",sourceDirName:"sql-reference/sql-functions/json-functions/json-query-and-processing-functions",slug:"/sql-reference/sql-functions/json-functions/json-query-and-processing-functions/get_json_int",permalink:"/doc/docs/3.0/sql-reference/sql-functions/json-functions/json-query-and-processing-functions/get_json_int",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/sql-reference/sql-functions/json-functions/json-query-and-processing-functions/get_json_int.md",tags:[],version:"3.0",frontMatter:{},sidebar:"documentation",previous:{title:"get_json_double",permalink:"/doc/docs/3.0/sql-reference/sql-functions/json-functions/json-query-and-processing-functions/get_json_double"},next:{title:"get_json_string",permalink:"/doc/docs/3.0/sql-reference/sql-functions/json-functions/json-query-and-processing-functions/get_json_string"}},l={},d=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Examples",id:"examples",level:2},{value:"keyword",id:"keyword",level:2}];function a(n){const e=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",pre:"pre",ol:"ol",li:"li"},(0,i.ah)(),n.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"get_json_int",children:"get_json_int"}),"\n",(0,t.jsx)(e.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(e.p,{children:"This function analyzes and gets the integer value from a specified path in json string."}),"\n",(0,t.jsxs)(e.p,{children:["json_path must start with ",(0,t.jsx)(e.code,{children:"$"})," and use ",(0,t.jsx)(e.code,{children:"."})," as the path separator."]}),"\n",(0,t.jsxs)(e.p,{children:["If the path includes ",(0,t.jsx)(e.code,{children:"."}),", it could be circled by ",(0,t.jsx)(e.code,{children:'"'})," and ",(0,t.jsx)(e.code,{children:'"'}),"."]}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"[ ]"})," is used as the array subscripts which start from 0."]}),"\n",(0,t.jsxs)(e.p,{children:["Content in the path should not contain ",(0,t.jsx)(e.code,{children:'"'})," , ",(0,t.jsx)(e.code,{children:"["})," and ",(0,t.jsx)(e.code,{children:"]"}),"."]}),"\n",(0,t.jsx)(e.p,{children:"If the format of json_string or json_path is wrong, this function will return NULL."}),"\n",(0,t.jsx)(e.h2,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-Haskell",children:"INT get_json_int(VARCHAR json_str, VARCHAR json_path)\n"})}),"\n",(0,t.jsx)(e.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:'Get the value whose key is "k1"'}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-Plain",metastring:"Text",children:'MySQL > SELECT get_json_int(\'{"k1":1, "k2":"2"}\', "$.k1");\n+--------------------------------------------+\n| get_json_int(\'{"k1":1, "k2":"2"}\', \'$.k1\') |\n+--------------------------------------------+\n|                                          1 |\n+--------------------------------------------+\n'})}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:'Get the second element in the array whose key is "my.key"'}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-Plain",metastring:"Text",children:'MySQL > SELECT get_json_int(\'{"k1":"v1", "my.key":[1, 2, 3]}\', \'$."my.key"[1]\');\n+------------------------------------------------------------------+\n| get_json_int(\'{"k1":"v1", "my.key":[1, 2, 3]}\', \'$."my.key"[1]\') |\n+------------------------------------------------------------------+\n|                                                                2 |\n+------------------------------------------------------------------+\n'})}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"Get the first element in the array whose path is k1.key -> k2."}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-Plain",metastring:"Text",children:'MySQL > SELECT get_json_int(\'{"k1.key":{"k2":[1, 2]}}\', \'$."k1.key".k2[0]\');\n+--------------------------------------------------------------+\n| get_json_int(\'{"k1.key":{"k2":[1, 2]}}\', \'$."k1.key".k2[0]\') |\n+--------------------------------------------------------------+\n|                                                            1 |\n+--------------------------------------------------------------+\n'})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"keyword",children:"keyword"}),"\n",(0,t.jsx)(e.p,{children:"GET_JSON_INT,GET,JSON,INT"})]})}const h=function(n={}){const{wrapper:e}=Object.assign({},(0,i.ah)(),n.components);return e?(0,t.jsx)(e,Object.assign({},n,{children:(0,t.jsx)(a,n)})):a(n)}},11151:(n,e,s)=>{s.d(e,{Zo:()=>c,ah:()=>o});var t=s(67294);const i=t.createContext({});function o(n){const e=t.useContext(i);return t.useMemo((()=>"function"==typeof n?n(e):{...e,...n}),[e,n])}const r={};function c({components:n,children:e,disableParentContext:s}){let c;return c=s?"function"==typeof n?n({}):n||r:o(n),t.createElement(i.Provider,{value:c},e)}}}]);