"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[52707],{96610:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>u,frontMatter:()=>t,metadata:()=>c,toc:()=>o});var i=s(85893),r=s(11151);const t={},d="mod",c={id:"sql-reference/sql-functions/math-functions/mod",title:"mod",description:"Description",source:"@site/versioned_docs/version-3.1/sql-reference/sql-functions/math-functions/mod.md",sourceDirName:"sql-reference/sql-functions/math-functions",slug:"/sql-reference/sql-functions/math-functions/mod",permalink:"/docusaurusv3/docs/sql-reference/sql-functions/math-functions/mod",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-functions/math-functions/mod.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"log2",permalink:"/docusaurusv3/docs/sql-reference/sql-functions/math-functions/log2"},next:{title:"multiply",permalink:"/docusaurusv3/docs/sql-reference/sql-functions/math-functions/multiply"}},l={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function a(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",pre:"pre",ul:"ul",li:"li",blockquote:"blockquote",strong:"strong"},(0,r.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"mod",children:"mod"}),"\n",(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["The modulus function that returns the remainder of ",(0,i.jsx)(n.code,{children:"dividend"})," divided by ",(0,i.jsx)(n.code,{children:"divisor"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-SQL",children:"mod(dividend, divisor)\n"})}),"\n",(0,i.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"dividend"}),": The number to be divided."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"divisor"}),": The number that divides."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Both ",(0,i.jsx)(n.code,{children:"dividend"})," and ",(0,i.jsx)(n.code,{children:"divisor"})," support the following data types:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"TINYINT"}),"\n",(0,i.jsx)(n.li,{children:"SMALLINT"}),"\n",(0,i.jsx)(n.li,{children:"INT"}),"\n",(0,i.jsx)(n.li,{children:"BIGINT"}),"\n",(0,i.jsx)(n.li,{children:"LARGEINT"}),"\n",(0,i.jsx)(n.li,{children:"FLOAT"}),"\n",(0,i.jsx)(n.li,{children:"DOUBLE"}),"\n",(0,i.jsx)(n.li,{children:"DECIMALV2"}),"\n",(0,i.jsx)(n.li,{children:"DECIMAL32"}),"\n",(0,i.jsx)(n.li,{children:"DECIMAL64"}),"\n",(0,i.jsx)(n.li,{children:"DECIMAL128"}),"\n"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"NOTE"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"dividend"})," and ",(0,i.jsx)(n.code,{children:"divisor"})," must agree in the data type. StarRocks performs an implicit conversion if they do not agree in the data type."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"return-value",children:"Return value"}),"\n",(0,i.jsxs)(n.p,{children:["Returns a value of the same data type as the ",(0,i.jsx)(n.code,{children:"dividend"}),". StarRocks returns NULL if ",(0,i.jsx)(n.code,{children:"divisor"})," is specified as 0."]}),"\n",(0,i.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Plain",children:"mysql> select mod(3.14,3.14);\n+-----------------+\n| mod(3.14, 3.14) |\n+-----------------+\n|               0 |\n+-----------------+\n\nmysql> select mod(3.14, 3);\n+--------------+\n| mod(3.14, 3) |\n+--------------+\n|         0.14 |\n+--------------+\n\nselect mod(11,-5);\n+------------+\n| mod(11, -5)|\n+------------+\n|          1 |\n+------------+\n\nselect mod(-11,5);\n+-------------+\n| mod(-11, 5) |\n+-------------+\n|          -1 |\n+-------------+\n"})})]})}const u=function(e={}){const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(a,e)})):a(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>c,ah:()=>t});var i=s(67294);const r=i.createContext({});function t(e){const n=i.useContext(r);return i.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const d={};function c({components:e,children:n,disableParentContext:s}){let c;return c=s?"function"==typeof e?e({}):e||d:t(e),i.createElement(r.Provider,{value:c},n)}}}]);