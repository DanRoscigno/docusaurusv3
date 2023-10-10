"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[72134],{1984:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>c,metadata:()=>i,toc:()=>o});var t=s(85893),r=s(11151);const c={},a="sqrt, dsqrt",i={id:"sql-reference/sql-functions/math-functions/sqrt",title:"sqrt, dsqrt",description:"Description",source:"@site/versioned_docs/version-3.0/sql-reference/sql-functions/math-functions/sqrt.md",sourceDirName:"sql-reference/sql-functions/math-functions",slug:"/sql-reference/sql-functions/math-functions/sqrt",permalink:"/docusaurusv3/docs/3.0/sql-reference/sql-functions/math-functions/sqrt",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/sql-reference/sql-functions/math-functions/sqrt.md",tags:[],version:"3.0",frontMatter:{},sidebar:"documentation",previous:{title:"sinh",permalink:"/docusaurusv3/docs/3.0/sql-reference/sql-functions/math-functions/sinh"},next:{title:"square",permalink:"/docusaurusv3/docs/3.0/sql-reference/sql-functions/math-functions/square"}},l={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Usage notes",id:"usage-notes",level:2},{value:"Examples",id:"examples",level:2}];function u(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code"},(0,r.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"sqrt-dsqrt",children:"sqrt, dsqrt"}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(n.p,{children:"Calculates the square root of a value. dsqrt is same as sqrt."}),"\n",(0,t.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Haskell",children:"DOUBLE SQRT(DOUBLE x);\nDOUBLE DSQRT(DOUBLE x);\n"})}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"x"}),": You can specify only a numeric value. This function converts the numeric value into a DOUBLE value before calculation."]}),"\n",(0,t.jsx)(n.h2,{id:"return-value",children:"Return value"}),"\n",(0,t.jsx)(n.p,{children:"Returns a value of the DOUBLE data type."}),"\n",(0,t.jsx)(n.h2,{id:"usage-notes",children:"Usage notes"}),"\n",(0,t.jsxs)(n.p,{children:["If you specify a non-numeric value, this function returns ",(0,t.jsx)(n.code,{children:"NULL"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Plain",children:"mysql> select sqrt(3.14);\n+-------------------+\n| sqrt(3.14)        |\n+-------------------+\n| 1.772004514666935 |\n+-------------------+\n1 row in set (0.01 sec)\n\n\nmysql> select dsqrt(3.14);\n+-------------------+\n| dsqrt(3.14)       |\n+-------------------+\n| 1.772004514666935 |\n+-------------------+\n"})})]})}const d=function(e={}){const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(u,e)})):u(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>i,ah:()=>c});var t=s(67294);const r=t.createContext({});function c(e){const n=t.useContext(r);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const a={};function i({components:e,children:n,disableParentContext:s}){let i;return i=s?"function"==typeof e?e({}):e||a:c(e),t.createElement(r.Provider,{value:i},n)}}}]);