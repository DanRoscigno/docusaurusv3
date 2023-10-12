"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[17026],{97479:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>o});var s=n(85893),t=n(11151);const i={},c="rtrim",a={id:"sql-reference/sql-functions/string-functions/rtrim",title:"rtrim",description:"Description",source:"@site/versioned_docs/version-3.0/sql-reference/sql-functions/string-functions/rtrim.md",sourceDirName:"sql-reference/sql-functions/string-functions",slug:"/sql-reference/sql-functions/string-functions/rtrim",permalink:"/doc/docs/3.0/sql-reference/sql-functions/string-functions/rtrim",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/sql-reference/sql-functions/string-functions/rtrim.md",tags:[],version:"3.0",frontMatter:{},sidebar:"Chinese31",previous:{title:"rpad",permalink:"/doc/docs/3.0/sql-reference/sql-functions/string-functions/rpad"},next:{title:"space",permalink:"/doc/docs/3.0/sql-reference/sql-functions/string-functions/space"}},l={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2},{value:"References",id:"references",level:2}];function d(e){const r=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",pre:"pre",ul:"ul",li:"li",a:"a"},(0,t.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h1,{id:"rtrim",children:"rtrim"}),"\n",(0,s.jsx)(r.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(r.p,{children:["Removes the trailing spaces or specified characters from the end (right) of the ",(0,s.jsx)(r.code,{children:"str"})," argument. Removing specified characters are supported from StarRocks 2.5.0."]}),"\n",(0,s.jsx)(r.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-Haskell",children:"VARCHAR rtrim(VARCHAR str[, VARCHAR characters]);\n"})}),"\n",(0,s.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.code,{children:"str"}),": required, the string to trim, which must evaluate to a VARCHAR value."]}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.code,{children:"characters"}),": optional, the characters to remove, which must be a VARCHAR value. If this parameter is not specified, spaces are removed from the string by default. If this parameter is set to an empty string, an error is returned."]}),"\n",(0,s.jsx)(r.h2,{id:"return-value",children:"Return value"}),"\n",(0,s.jsx)(r.p,{children:"Returns a VARCHAR value."}),"\n",(0,s.jsx)(r.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(r.p,{children:"Example 1: Remove the three trailing spaces from the string."}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-Plain",metastring:"Text",children:"mysql> SELECT rtrim('   ab d   ');\n+---------------------+\n| rtrim('   ab d   ') |\n+---------------------+\n|    ab d             |\n+---------------------+\n1 row in set (0.00 sec)\n"})}),"\n",(0,s.jsx)(r.p,{children:"Example 2: Remove specified characters from the end of the string."}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-Plain",metastring:"Text",children:"MySQL > SELECT rtrim(\"xxabcdxx\", \"x\");\n+------------------------+\n| rtrim('xxabcdxx', 'x') |\n+------------------------+\n| xxabcd                 |\n+------------------------+\n"})}),"\n",(0,s.jsx)(r.h2,{id:"references",children:"References"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"/doc/docs/3.0/sql-reference/sql-functions/string-functions/trim",children:"trim"})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"/doc/docs/3.0/sql-reference/sql-functions/string-functions/ltrim",children:"ltrim"})}),"\n"]})]})}const h=function(e={}){const{wrapper:r}=Object.assign({},(0,t.ah)(),e.components);return r?(0,s.jsx)(r,Object.assign({},e,{children:(0,s.jsx)(d,e)})):d(e)}},11151:(e,r,n)=>{n.d(r,{Zo:()=>a,ah:()=>i});var s=n(67294);const t=s.createContext({});function i(e){const r=s.useContext(t);return s.useMemo((()=>"function"==typeof e?e(r):{...r,...e}),[r,e])}const c={};function a({components:e,children:r,disableParentContext:n}){let a;return a=n?"function"==typeof e?e({}):e||c:i(e),s.createElement(t.Provider,{value:a},r)}}}]);