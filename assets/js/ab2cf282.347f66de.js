"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[92461],{56137:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>a});var i=s(85893),t=s(11151);const r={},c="if",o={id:"sql-reference/sql-functions/condition-functions/if",title:"if",description:"Description",source:"@site/versioned_docs/version-3.0/sql-reference/sql-functions/condition-functions/if.md",sourceDirName:"sql-reference/sql-functions/condition-functions",slug:"/sql-reference/sql-functions/condition-functions/if",permalink:"/docusaurusv3/docs/3.0/sql-reference/sql-functions/condition-functions/if",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/sql-reference/sql-functions/condition-functions/if.md",tags:[],version:"3.0",frontMatter:{},sidebar:"documentation",previous:{title:"coalesce",permalink:"/docusaurusv3/docs/3.0/sql-reference/sql-functions/condition-functions/coalesce"},next:{title:"ifnull",permalink:"/docusaurusv3/docs/3.0/sql-reference/sql-functions/condition-functions/ifnull"}},l={},a=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",pre:"pre",blockquote:"blockquote"},(0,t.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"if",children:"if"}),"\n",(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["If ",(0,i.jsx)(n.code,{children:"expr1"})," evaluates to TRUE, returns ",(0,i.jsx)(n.code,{children:"expr2"}),". Otherwise, returns ",(0,i.jsx)(n.code,{children:"expr3"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Haskell",children:"if(expr1,expr2,expr3);\n"})}),"\n",(0,i.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"expr1"}),": the condition. It must be a BOOLEAN value."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"expr2"}),": This value is returned if the condition is true. This expression must evaluate to any of the following data types: BOOLEAN, TINYINT, SMALLINT, INT, BIGINT, LARGEINT, FLOAT, DOUBLE, DATETIME, DATE, DECIMALV2, DECIMAL32, DECIMAL64, DECIMAL128, VARCHAR, BITMAP, PERCENTILE, HLL, TIME."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"expr3"}),": This value is returned if the condition is false. The data type is the same as ",(0,i.jsx)(n.code,{children:"expr2"}),"."]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"expr2"})," and ",(0,i.jsx)(n.code,{children:"expr3"})," must agree in data type."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"return-value",children:"Return value"}),"\n",(0,i.jsxs)(n.p,{children:["The return value has the same type as ",(0,i.jsx)(n.code,{children:"expr2"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"mysql> select if(false,1,2);\n+-----------------+\n| if(FALSE, 1, 2) |\n+-----------------+\n|               2 |\n+-----------------+\n1 row in set (0.00 sec)\n"})})]})}const u=function(e={}){const{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(d,e)})):d(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>o,ah:()=>r});var i=s(67294);const t=i.createContext({});function r(e){const n=i.useContext(t);return i.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const c={};function o({components:e,children:n,disableParentContext:s}){let o;return o=s?"function"==typeof e?e({}):e||c:r(e),i.createElement(t.Provider,{value:o},n)}}}]);