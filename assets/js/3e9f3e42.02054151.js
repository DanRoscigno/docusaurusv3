"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[7699],{75062:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>c,metadata:()=>i,toc:()=>o});var s=t(85893),r=t(11151);const c={},a="truncate",i={id:"sql-reference/sql-functions/math-functions/truncate",title:"truncate",description:"Description",source:"@site/versioned_docs/version-3.1/sql-reference/sql-functions/math-functions/truncate.md",sourceDirName:"sql-reference/sql-functions/math-functions",slug:"/sql-reference/sql-functions/math-functions/truncate",permalink:"/doc/docs/sql-reference/sql-functions/math-functions/truncate",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-functions/math-functions/truncate.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"tanh",permalink:"/doc/docs/sql-reference/sql-functions/math-functions/tanh"},next:{title:"String Functions",permalink:"/doc/docs/category/string-functions"}},l={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameter",id:"parameter",level:2},{value:"Return value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function u(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",ul:"ul",li:"li"},(0,r.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"truncate",children:"truncate"}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"Rounds the input down to the nearest equal or smaller value with the specified number of places after the decimal point."}),"\n",(0,s.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Shell",children:"truncate(arg1,arg2);\n"})}),"\n",(0,s.jsx)(n.h2,{id:"parameter",children:"Parameter"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"arg1"}),": the input to be rounded. It supports the following data types:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"DOUBLE"}),"\n",(0,s.jsx)(n.li,{children:"DECIMAL128"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"arg2"}),":  the number of places to keep after the decimal point. It supports the INT data type."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"return-value",children:"Return value"}),"\n",(0,s.jsxs)(n.p,{children:["Returns a value of the same data type as ",(0,s.jsx)(n.code,{children:"arg1"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plain",children:"mysql> select truncate(3.14,1);\n+-------------------+\n| truncate(3.14, 1) |\n+-------------------+\n|               3.1 |\n+-------------------+\n1 row in set (0.00 sec)\n"})})]})}const d=function(e={}){const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(u,e)})):u(e)}},11151:(e,n,t)=>{t.d(n,{Zo:()=>i,ah:()=>c});var s=t(67294);const r=s.createContext({});function c(e){const n=s.useContext(r);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const a={};function i({components:e,children:n,disableParentContext:t}){let i;return i=t?"function"==typeof e?e({}):e||a:c(e),s.createElement(r.Provider,{value:i},n)}}}]);