"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[13364],{13811:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>a});var i=s(85893),t=s(11151);const r={},l="ifnull",c={id:"sql-reference/sql-functions/condition-functions/ifnull",title:"ifnull",description:"Description",source:"@site/versioned_docs/version-2.5/sql-reference/sql-functions/condition-functions/ifnull.md",sourceDirName:"sql-reference/sql-functions/condition-functions",slug:"/sql-reference/sql-functions/condition-functions/ifnull",permalink:"/doc/docs/2.5/sql-reference/sql-functions/condition-functions/ifnull",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-2.5/sql-reference/sql-functions/condition-functions/ifnull.md",tags:[],version:"2.5",frontMatter:{},sidebar:"Chinese31",previous:{title:"if",permalink:"/doc/docs/2.5/sql-reference/sql-functions/condition-functions/if"},next:{title:"nullif",permalink:"/doc/docs/2.5/sql-reference/sql-functions/condition-functions/nullif"}},o={},a=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",pre:"pre",blockquote:"blockquote"},(0,t.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"ifnull",children:"ifnull"}),"\n",(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["If ",(0,i.jsx)(n.code,{children:"expr1"})," is NULL, returns expr2. If ",(0,i.jsx)(n.code,{children:"expr1"})," is not NULL, returns ",(0,i.jsx)(n.code,{children:"expr1"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Haskell",children:"ifnull(expr1,expr2);\n"})}),"\n",(0,i.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"expr1"}),": This expression must evaluate to any of the following data types: BOOLEAN, TINYINT, SMALLINT, INT, BIGINT, LARGEINT, FLOAT, DOUBLE, DATETIME, DATE, DECIMALV2, DECIMAL32, DECIMAL64, DECIMAL128, VARCHAR, BITMAP, PERCENTILE, HLL, TIME."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"expr2"}),": This expression must evaluate to any of the following data types: BOOLEAN, TINYINT, SMALLINT, INT, BIGINT, LARGEINT, FLOAT, DOUBLE, DATETIME, DATE, DECIMALV2, DECIMAL32, DECIMAL64, DECIMAL128, VARCHAR, BITMAP, PERCENTILE, HLL, TIME."]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"expr1"})," and ",(0,i.jsx)(n.code,{children:"expr2"})," must agree in data type."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"return-value",children:"Return value"}),"\n",(0,i.jsxs)(n.p,{children:["The return value has the same type as ",(0,i.jsx)(n.code,{children:"expr1"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"mysql> select ifnull(NULL,2);\n+-----------------+\n| ifnull(NULL, 2) |\n+-----------------+\n|               2 |\n+-----------------+\n1 row in set (0.01 sec)\n"})})]})}const u=function(e={}){const{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(d,e)})):d(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>c,ah:()=>r});var i=s(67294);const t=i.createContext({});function r(e){const n=i.useContext(t);return i.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const l={};function c({components:e,children:n,disableParentContext:s}){let c;return c=s?"function"==typeof e?e({}):e||l:r(e),i.createElement(t.Provider,{value:c},n)}}}]);