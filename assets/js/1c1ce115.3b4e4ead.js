"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[98383],{49220:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>a});var t=s(85893),i=s(11151);const r={},l="nullif",c={id:"sql-reference/sql-functions/condition-functions/nullif",title:"nullif",description:"Description",source:"@site/versioned_docs/version-3.0/sql-reference/sql-functions/condition-functions/nullif.md",sourceDirName:"sql-reference/sql-functions/condition-functions",slug:"/sql-reference/sql-functions/condition-functions/nullif",permalink:"/doc/docs/3.0/sql-reference/sql-functions/condition-functions/nullif",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/sql-reference/sql-functions/condition-functions/nullif.md",tags:[],version:"3.0",frontMatter:{},sidebar:"Chinese31",previous:{title:"ifnull",permalink:"/doc/docs/3.0/sql-reference/sql-functions/condition-functions/ifnull"},next:{title:"Cryptographic Functions",permalink:"/doc/docs/3.0/category/cryptographic-functions-1"}},o={},a=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",pre:"pre",blockquote:"blockquote"},(0,i.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"nullif",children:"nullif"}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["Returns NULL if ",(0,t.jsx)(n.code,{children:"expr1"})," is equal to ",(0,t.jsx)(n.code,{children:"expr2"}),". Otherwise, returns ",(0,t.jsx)(n.code,{children:"expr1"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Haskell",children:"nullif(expr1,expr2);\n"})}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"expr1"}),": This expression must evaluate to any of the following data types: BOOLEAN, TINYINT, SMALLINT, INT, BIGINT, LARGEINT, FLOAT, DOUBLE, DATETIME, DATE, DECIMALV2, DECIMAL32, DECIMAL64, DECIMAL128, VARCHAR, BITMAP, PERCENTILE, HLL, TIME."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"expr2"}),": An expression that evaluates to the same data type as ",(0,t.jsx)(n.code,{children:"expr1"}),"."]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"expr1"})," and ",(0,t.jsx)(n.code,{children:"expr2"})," must agree in data type."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"return-value",children:"Return value"}),"\n",(0,t.jsxs)(n.p,{children:["The return value has the same type as ",(0,t.jsx)(n.code,{children:"expr1"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"mysql> select nullif(1,2);\n+--------------+\n| nullif(1, 2) |\n+--------------+\n|            1 |\n+--------------+\n\nselect nullif(1,1);\n+--------------+\n| nullif(1, 1) |\n+--------------+\n|         NULL |\n+--------------+\n"})})]})}const u=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(d,e)})):d(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>c,ah:()=>r});var t=s(67294);const i=t.createContext({});function r(e){const n=t.useContext(i);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const l={};function c({components:e,children:n,disableParentContext:s}){let c;return c=s?"function"==typeof e?e({}):e||l:r(e),t.createElement(i.Provider,{value:c},n)}}}]);