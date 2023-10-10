"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[38779],{3192:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var r=s(85893),t=s(11151);const i={},o="round, dround",c={id:"sql-reference/sql-functions/math-functions/round",title:"round, dround",description:"Description",source:"@site/versioned_docs/version-3.1/sql-reference/sql-functions/math-functions/round.md",sourceDirName:"sql-reference/sql-functions/math-functions",slug:"/sql-reference/sql-functions/math-functions/round",permalink:"/doc/docs/sql-reference/sql-functions/math-functions/round",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-functions/math-functions/round.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"RAND, RANDOM",permalink:"/doc/docs/sql-reference/sql-functions/math-functions/rand"},next:{title:"sign",permalink:"/doc/docs/sql-reference/sql-functions/math-functions/sign"}},d={},l=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function a(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",pre:"pre"},(0,t.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"round-dround",children:"round, dround"}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["Rounds a number to a specified number of digits. If ",(0,r.jsx)(n.code,{children:"n"})," is not specified, ",(0,r.jsx)(n.code,{children:"x"})," is rounded to the nearest integer. If ",(0,r.jsx)(n.code,{children:"n"})," is specified, ",(0,r.jsx)(n.code,{children:"x"})," is rounded to ",(0,r.jsx)(n.code,{children:"n"})," decimal places. If ",(0,r.jsx)(n.code,{children:"n"})," is negative, ",(0,r.jsx)(n.code,{children:"x"})," is rounded to the left of the decimal point. If overflow occurs, an error is returned."]}),"\n",(0,r.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Haskell",children:"ROUND(x [,n]);\n"})}),"\n",(0,r.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"x"}),": supports the DOUBLE and DECIMAL128 data types."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"n"}),": supports the INT data type. This parameter is optional."]}),"\n",(0,r.jsx)(n.h2,{id:"return-value",children:"Return value"}),"\n",(0,r.jsxs)(n.p,{children:["If only ",(0,r.jsx)(n.code,{children:"x"})," is specified, the return value is of the following data type:"]}),"\n",(0,r.jsx)(n.p,{children:'["DECIMAL128"] -> "DECIMAL128"'}),"\n",(0,r.jsx)(n.p,{children:'["DOUBLE"] -> "BIGINT"'}),"\n",(0,r.jsxs)(n.p,{children:["If both ",(0,r.jsx)(n.code,{children:"x"})," and ",(0,r.jsx)(n.code,{children:"n"})," are specified, the return value is of the following data type:"]}),"\n",(0,r.jsx)(n.p,{children:'["DECIMAL128", "INT"] -> "DECIMAL128"'}),"\n",(0,r.jsx)(n.p,{children:'["DOUBLE", "INT"] -> "DOUBLE"'}),"\n",(0,r.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Plain",children:"mysql> select round(3.14);\n+-------------+\n| round(3.14) |\n+-------------+\n|           3 |\n+-------------+\n1 row in set (0.00 sec)\n\nmysql> select round(3.14,1);\n+----------------+\n| round(3.14, 1) |\n+----------------+\n|            3.1 |\n+----------------+\n1 row in set (0.00 sec)\n\nmysql> select round(13.14,-1);\n+------------------+\n| round(13.14, -1) |\n+------------------+\n|               10 |\n+------------------+\n1 row in set (0.00 sec)\n"})})]})}const u=function(e={}){const{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(a,e)})):a(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>c,ah:()=>i});var r=s(67294);const t=r.createContext({});function i(e){const n=r.useContext(t);return r.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const o={};function c({components:e,children:n,disableParentContext:s}){let c;return c=s?"function"==typeof e?e({}):e||o:i(e),r.createElement(t.Provider,{value:c},n)}}}]);