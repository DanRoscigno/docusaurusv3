"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[39226],{68294:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var t=s(85893),i=s(11151);const r={},c="ends_with",o={id:"sql-reference/sql-functions/string-functions/ends_with",title:"ends_with",description:"Description",source:"@site/versioned_docs/version-3.1/sql-reference/sql-functions/string-functions/ends_with.md",sourceDirName:"sql-reference/sql-functions/string-functions",slug:"/sql-reference/sql-functions/string-functions/ends_with",permalink:"/doc/docs/sql-reference/sql-functions/string-functions/ends_with",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-functions/string-functions/ends_with.md",tags:[],version:"3.1",frontMatter:{},sidebar:"Chinese31",previous:{title:"concat_ws",permalink:"/doc/docs/sql-reference/sql-functions/string-functions/concat_ws"},next:{title:"find_in_set",permalink:"/doc/docs/sql-reference/sql-functions/string-functions/find_in_set"}},l={},d=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Examples",id:"examples",level:2},{value:"keyword",id:"keyword",level:2}];function a(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",pre:"pre"},(0,i.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"ends_with",children:"ends_with"}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["Returns ",(0,t.jsx)(n.code,{children:"true"})," if a string ends with a specified suffix. Otherwise, it returns ",(0,t.jsx)(n.code,{children:"false"}),". If the argument is NULL, the result is NULL."]}),"\n",(0,t.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Haskell",children:"BOOLEAN ENDS_WITH (VARCHAR str, VARCHAR suffix)\n"})}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"MySQL > select ends_with(\"Hello starrocks\", \"starrocks\");\n+-----------------------------------+\n| ends_with('Hello starrocks', 'starrocks') |\n+-----------------------------------+\n|                                 1 |\n+-----------------------------------+\n\nMySQL > select ends_with(\"Hello starrocks\", \"Hello\");\n+-----------------------------------+\n| ends_with('Hello starrocks', 'Hello') |\n+-----------------------------------+\n|                                 0 |\n+-----------------------------------+\n"})}),"\n",(0,t.jsx)(n.h2,{id:"keyword",children:"keyword"}),"\n",(0,t.jsx)(n.p,{children:"ENDS_WITH"})]})}const u=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(a,e)})):a(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>o,ah:()=>r});var t=s(67294);const i=t.createContext({});function r(e){const n=t.useContext(i);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const c={};function o({components:e,children:n,disableParentContext:s}){let o;return o=s?"function"==typeof e?e({}):e||c:r(e),t.createElement(i.Provider,{value:o},n)}}}]);