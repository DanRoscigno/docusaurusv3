"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[86157],{84:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>u,frontMatter:()=>c,metadata:()=>o,toc:()=>l});var t=s(85893),r=s(11151);const c={},i="repeat",o={id:"sql-reference/sql-functions/string-functions/repeat",title:"repeat",description:"Description",source:"@site/versioned_docs/version-3.0/sql-reference/sql-functions/string-functions/repeat.md",sourceDirName:"sql-reference/sql-functions/string-functions",slug:"/sql-reference/sql-functions/string-functions/repeat",permalink:"/doc/docs/3.0/sql-reference/sql-functions/string-functions/repeat",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/sql-reference/sql-functions/string-functions/repeat.md",tags:[],version:"3.0",frontMatter:{},sidebar:"Chinese31",previous:{title:"parse_url",permalink:"/doc/docs/3.0/sql-reference/sql-functions/string-functions/parse_url"},next:{title:"replace",permalink:"/doc/docs/3.0/sql-reference/sql-functions/string-functions/replace"}},a={},l=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Examples",id:"examples",level:2},{value:"keyword",id:"keyword",level:2}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",pre:"pre"},(0,r.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"repeat",children:"repeat"}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["This function repeats ",(0,t.jsx)(n.code,{children:"str"})," by a number of times according to ",(0,t.jsx)(n.code,{children:"count"}),". When ",(0,t.jsx)(n.code,{children:"count"})," is below 1, it returns an empty string. When ",(0,t.jsx)(n.code,{children:"str"})," or ",(0,t.jsx)(n.code,{children:"count"})," is NULL, it returns NULL."]}),"\n",(0,t.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Haskell",children:"VARCHAR repeat(VARCHAR str, INT count)\n"})}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"MySQL > SELECT repeat(\"a\", 3);\n+----------------+\n| repeat('a', 3) |\n+----------------+\n| aaa            |\n+----------------+\n\nMySQL > SELECT repeat(\"a\", -1);\n+-----------------+\n| repeat('a', -1) |\n+-----------------+\n|                 |\n+-----------------+\n"})}),"\n",(0,t.jsx)(n.h2,{id:"keyword",children:"keyword"}),"\n",(0,t.jsx)(n.p,{children:"REPEAT,"})]})}const u=function(e={}){const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(d,e)})):d(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>o,ah:()=>c});var t=s(67294);const r=t.createContext({});function c(e){const n=t.useContext(r);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const i={};function o({components:e,children:n,disableParentContext:s}){let o;return o=s?"function"==typeof e?e({}):e||i:c(e),t.createElement(r.Provider,{value:o},n)}}}]);