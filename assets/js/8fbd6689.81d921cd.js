"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[71887],{35529:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>a});var t=s(85893),r=s(11151);const i={},c="unhex",l={id:"sql-reference/sql-functions/string-functions/unhex",title:"unhex",description:"Description",source:"@site/versioned_docs/version-3.0/sql-reference/sql-functions/string-functions/unhex.md",sourceDirName:"sql-reference/sql-functions/string-functions",slug:"/sql-reference/sql-functions/string-functions/unhex",permalink:"/docs/3.0/sql-reference/sql-functions/string-functions/unhex",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/sql-reference/sql-functions/string-functions/unhex.md",tags:[],version:"3.0",frontMatter:{},sidebar:"documentation",previous:{title:"ucase",permalink:"/docs/3.0/sql-reference/sql-functions/string-functions/ucase"},next:{title:"UPPER",permalink:"/docs/3.0/sql-reference/sql-functions/string-functions/upper"}},o={},a=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2},{value:"Keywords",id:"keywords",level:2}];function u(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",ul:"ul",li:"li"},(0,r.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"unhex",children:"unhex"}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(n.p,{children:"This function performs the opposite operation of hex()."}),"\n",(0,t.jsx)(n.p,{children:"It interprets each pair of hexadecimal digits in the input string as a number and converts it to the byte represented by the number. The return value is a binary string."}),"\n",(0,t.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Haskell",children:"UNHEX(str);\n"})}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"str"}),": the string to convert. The supported data type is VARCHAR. An empty string is returned if any of the following situations occur:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"The length of the string is 0 or the number of characters in the string is an odd number."}),"\n",(0,t.jsxs)(n.li,{children:["The string contains characters other than ",(0,t.jsx)(n.code,{children:"[0-9]"}),", ",(0,t.jsx)(n.code,{children:"[a-z]"}),", and ",(0,t.jsx)(n.code,{children:"[A-Z]"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"return-value",children:"Return value"}),"\n",(0,t.jsx)(n.p,{children:"Returns a value of the VARCHAR type."}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"mysql> select unhex('33');\n+-------------+\n| unhex('33') |\n+-------------+\n| 3           |\n+-------------+\n\nmysql> select unhex('6170706C65');\n+---------------------+\n| unhex('6170706C65') |\n+---------------------+\n| apple               |\n+---------------------+\n\nmysql> select unhex('4142@');\n+----------------+\n| unhex('4142@') |\n+----------------+\n|                |\n+----------------+\n1 row in set (0.01 sec)\n"})}),"\n",(0,t.jsx)(n.h2,{id:"keywords",children:"Keywords"}),"\n",(0,t.jsx)(n.p,{children:"UNHEX"})]})}const d=function(e={}){const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(u,e)})):u(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>l,ah:()=>i});var t=s(67294);const r=t.createContext({});function i(e){const n=t.useContext(r);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const c={};function l({components:e,children:n,disableParentContext:s}){let l;return l=s?"function"==typeof e?e({}):e||c:i(e),t.createElement(r.Provider,{value:l},n)}}}]);