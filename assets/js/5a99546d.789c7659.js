"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[74424],{53547:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>o});var s=r(85893),t=r(11151);const i={},c="ltrim",l={id:"sql-reference/sql-functions/string-functions/ltrim",title:"ltrim",description:"Description",source:"@site/versioned_docs/version-3.1/sql-reference/sql-functions/string-functions/ltrim.md",sourceDirName:"sql-reference/sql-functions/string-functions",slug:"/sql-reference/sql-functions/string-functions/ltrim",permalink:"/doc/docs/sql-reference/sql-functions/string-functions/ltrim",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-functions/string-functions/ltrim.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"lpad",permalink:"/doc/docs/sql-reference/sql-functions/string-functions/lpad"},next:{title:"money_format",permalink:"/doc/docs/sql-reference/sql-functions/string-functions/money_format"}},a={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2},{value:"References",id:"references",level:2},{value:"keyword",id:"keyword",level:2}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",pre:"pre",ul:"ul",li:"li",a:"a"},(0,t.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"ltrim",children:"ltrim"}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["Removes the leading spaces or specified characters from the beginning (left) of the ",(0,s.jsx)(n.code,{children:"str"})," argument. Removing specified characters are supported from StarRocks 2.5.0."]}),"\n",(0,s.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Haskell",children:"VARCHAR ltrim(VARCHAR str[, VARCHAR characters])\n"})}),"\n",(0,s.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"str"}),": required, the string to trim, which must evaluate to a VARCHAR value."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"characters"}),": optional, the characters to remove, which must be a VARCHAR value. If this parameter is not specified, spaces are removed from the string by default. If this parameter is set to an empty string, an error is returned."]}),"\n",(0,s.jsx)(n.h2,{id:"return-value",children:"Return value"}),"\n",(0,s.jsx)(n.p,{children:"Returns a VARCHAR value."}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.p,{children:"Example 1: Remove spaces from the beginning of the string."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"MySQL > SELECT ltrim('   ab d');\n+------------------+\n| ltrim('   ab d') |\n+------------------+\n| ab d             |\n+------------------+\n"})}),"\n",(0,s.jsx)(n.p,{children:"Example 2: Remove specified characters from the beginning of the string."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"MySQL > SELECT ltrim(\"xxabcdxx\", \"x\");\n+------------------------+\n| ltrim('xxabcdxx', 'x') |\n+------------------------+\n| abcdxx                 |\n+------------------------+\n"})}),"\n",(0,s.jsx)(n.h2,{id:"references",children:"References"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-functions/string-functions/trim",children:"trim"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-functions/string-functions/rtrim",children:"rtrim"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"keyword",children:"keyword"}),"\n",(0,s.jsx)(n.p,{children:"LTRIM"})]})}const u=function(e={}){const{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(d,e)})):d(e)}},11151:(e,n,r)=>{r.d(n,{Zo:()=>l,ah:()=>i});var s=r(67294);const t=s.createContext({});function i(e){const n=s.useContext(t);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const c={};function l({components:e,children:n,disableParentContext:r}){let l;return l=r?"function"==typeof e?e({}):e||c:i(e),s.createElement(t.Provider,{value:l},n)}}}]);