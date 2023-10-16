"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[63156],{75207:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var t=s(85893),c=s(11151);const i={displayed_sidebar:"English"},r="coalesce",o={id:"sql-reference/sql-functions/condition-functions/coalesce",title:"coalesce",description:"Description",source:"@site/versioned_docs/version-2.5/sql-reference/sql-functions/condition-functions/coalesce.md",sourceDirName:"sql-reference/sql-functions/condition-functions",slug:"/sql-reference/sql-functions/condition-functions/coalesce",permalink:"/doc/docs/2.5/sql-reference/sql-functions/condition-functions/coalesce",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-functions/condition-functions/coalesce.md",tags:[],version:"2.5",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"case",permalink:"/doc/docs/2.5/sql-reference/sql-functions/condition-functions/case_when"},next:{title:"if",permalink:"/doc/docs/2.5/sql-reference/sql-functions/condition-functions/if"}},a={},l=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code"},(0,c.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"coalesce",children:"coalesce"}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(n.p,{children:"Returns the first non-NULL expression among the input parameters. Returns NULL if non-NULL expressions cannot be found."}),"\n",(0,t.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Haskell",children:"coalesce(expr1,...);\n"})}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"expr1"}),": the input expressions, which must evaluate to compatible data types. The supported data types are BOOLEAN, TINYINT, SMALLINT, INT, BIGINT, LARGEINT, FLOAT, DOUBLE, DATETIME, DATE, DECIMALV2, DECIMAL32, DECIMAL64, DECIMAL128, VARCHAR, BITMAP, PERCENTILE, HLL, and TIME."]}),"\n",(0,t.jsx)(n.h2,{id:"return-value",children:"Return value"}),"\n",(0,t.jsxs)(n.p,{children:["The return value has the same type as ",(0,t.jsx)(n.code,{children:"expr1"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"mysql> select coalesce(3,NULL,1,1);\n+-------------------------+\n| coalesce(3, NULL, 1, 1) |\n+-------------------------+\n|                       3 |\n+-------------------------+\n1 row in set (0.00 sec)\n"})})]})}const u=function(e={}){const{wrapper:n}=Object.assign({},(0,c.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(d,e)})):d(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>o,ah:()=>i});var t=s(67294);const c=t.createContext({});function i(e){const n=t.useContext(c);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const r={};function o({components:e,children:n,disableParentContext:s}){let o;return o=s?"function"==typeof e?e({}):e||r:i(e),t.createElement(c.Provider,{value:o},n)}}}]);