"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[82984],{66377:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>a});var t=s(85893),c=s(11151);const r={},o="cos",i={id:"sql-reference/sql-functions/math-functions/cos",title:"cos",description:"Description",source:"@site/versioned_docs/version-3.1/sql-reference/sql-functions/math-functions/cos.md",sourceDirName:"sql-reference/sql-functions/math-functions",slug:"/sql-reference/sql-functions/math-functions/cos",permalink:"/docusaurusv3/docs/sql-reference/sql-functions/math-functions/cos",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-functions/math-functions/cos.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"conv",permalink:"/docusaurusv3/docs/sql-reference/sql-functions/math-functions/conv"},next:{title:"cos_similarity",permalink:"/docusaurusv3/docs/sql-reference/sql-functions/math-functions/cos_similarity"}},l={},a=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Return value",id:"return-value",level:2},{value:"Usage notes",id:"usage-notes",level:2},{value:"Examples",id:"examples",level:2},{value:"keyword",id:"keyword",level:2}];function u(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",h3:"h3"},(0,c.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"cos",children:"cos"}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(n.p,{children:"Computes the cosine of the argument."}),"\n",(0,t.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Haskell",children:"DOUBLE cos(DOUBLE arg)\n"})}),"\n",(0,t.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"arg"}),": You can specify only a numeric value. This function converts the numeric value into a DOUBLE value before it computes the cosine of the value."]}),"\n",(0,t.jsx)(n.h2,{id:"return-value",children:"Return value"}),"\n",(0,t.jsx)(n.p,{children:"Returns a value of the DOUBLE data type."}),"\n",(0,t.jsx)(n.h2,{id:"usage-notes",children:"Usage notes"}),"\n",(0,t.jsxs)(n.p,{children:["If you specify a non-numeric value, this function returns ",(0,t.jsx)(n.code,{children:"NULL"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Plain",children:"mysql> select cos(-1);\n+--------------------+\n| cos(-1)            |\n+--------------------+\n| 0.5403023058681398 |\n+--------------------+\n\nmysql> select cos(0);\n+--------+\n| cos(0) |\n+--------+\n|      1 |\n+--------+\n\nmysql> select cos(1);\n+--------------------+\n| cos(1)             |\n+--------------------+\n| 0.5403023058681398 |\n+--------------------+\n\nmysql> select cos(\"\");\n+---------+\n| cos('') |\n+---------+\n|    NULL |\n+---------+\n"})}),"\n",(0,t.jsx)(n.h2,{id:"keyword",children:"keyword"}),"\n",(0,t.jsx)(n.p,{children:"COS"})]})}const d=function(e={}){const{wrapper:n}=Object.assign({},(0,c.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(u,e)})):u(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>i,ah:()=>r});var t=s(67294);const c=t.createContext({});function r(e){const n=t.useContext(c);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const o={};function i({components:e,children:n,disableParentContext:s}){let i;return i=s?"function"==typeof e?e({}):e||o:r(e),t.createElement(c.Provider,{value:i},n)}}}]);