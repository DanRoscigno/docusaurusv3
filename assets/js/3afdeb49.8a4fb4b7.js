"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[3915],{24728:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var s=t(85893),i=t(11151);const a={displayed_sidebar:"English"},r="SHOW FUNCTIONS",o={id:"sql-reference/sql-statements/data-definition/show-functions",title:"SHOW FUNCTIONS",description:"Description",source:"@site/versioned_docs/version-3.1/sql-reference/sql-statements/data-definition/show-functions.md",sourceDirName:"sql-reference/sql-statements/data-definition",slug:"/sql-reference/sql-statements/data-definition/show-functions",permalink:"/doc/docs/sql-reference/sql-statements/data-definition/show-functions",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-statements/data-definition/show-functions.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"DROP FUNCTION",permalink:"/doc/docs/sql-reference/sql-statements/data-definition/drop-function"},next:{title:"ALTER LOAD",permalink:"/doc/docs/sql-reference/sql-statements/data-manipulation/ALTER_LOAD"}},c={},d=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}];function l(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code"},(0,i.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"show-functions",children:"SHOW FUNCTIONS"}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"Queries all the custom (or built-in) functions under a database. If no database is specified, the current database is used by default."}),"\n",(0,s.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"SHOW [FULL] [BUILTIN] FUNCTIONS [IN|FROM db] [LIKE 'function_pattern']\n"})}),"\n",(0,s.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-plain",metastring:"text",children:"full: indicates showing all the functions. \n\nbuiltin: indicates showing functions provided by the system.\n\ndb: the name of the database to query.\n\nfunction_pattern: the pattern used to filter function name. \n"})}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:'mysql> show full functions in testDb\\G\n*************************** 1. row ***************************\n        Signature: my_add(INT,INT)\n      Return Type: INT\n    Function Type: Scalar\nIntermediate Type: NULL\n       Properties: {"symbol":"_ZN9starrocks_udf6AddUdfEPNS_15FunctionContextERKNS_6IntValES4_","object_file":"http://host:port/libudfsample.so","md5":"cfe7a362d10f3aaf6c49974ee0f1f878"}\n*************************** 2. row ***************************\n        Signature: my_count(BIGINT)\n      Return Type: BIGINT\n    Function Type: Aggregate\nIntermediate Type: NULL\n       Properties: {"object_file":"http://host:port/libudasample.so","finalize_fn":"_ZN9starrocks_udf13CountFinalizeEPNS_15FunctionContextERKNS_9BigIntValE","init_fn":"_ZN9starrocks_udf9CountInitEPNS_15FunctionContextEPNS_9BigIntValE","merge_fn":"_ZN9starrocks_udf10CountMergeEPNS_15FunctionContextERKNS_9BigIntValEPS2_","md5":"37d185f80f95569e2676da3d5b5b9d2f","update_fn":"_ZN9starrocks_udf11CountUpdateEPNS_15FunctionContextERKNS_6IntValEPNS_9BigIntValE"}\n\n2 rows in set (0.00 sec)\nmysql> show builtin functions in testDb like \'year%\';\n+---------------+\n| Function Name |\n+---------------+\n| year          |\n| years_add     |\n| years_diff    |\n| years_sub     |\n+---------------+\n2 rows in set (0.00 sec)\n'})})]})}const u=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(l,e)})):l(e)}},11151:(e,n,t)=>{t.d(n,{Zo:()=>o,ah:()=>a});var s=t(67294);const i=s.createContext({});function a(e){const n=s.useContext(i);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const r={};function o({components:e,children:n,disableParentContext:t}){let o;return o=t?"function"==typeof e?e({}):e||r:a(e),s.createElement(i.Provider,{value:o},n)}}}]);