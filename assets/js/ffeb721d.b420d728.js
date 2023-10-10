"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[14013],{93422:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>a,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var s=t(85893),c=t(11151);const r={},o="concat",i={id:"sql-reference/sql-functions/string-functions/concat",title:"concat",description:"Description",source:"@site/versioned_docs/version-3.1/sql-reference/sql-functions/string-functions/concat.md",sourceDirName:"sql-reference/sql-functions/string-functions",slug:"/sql-reference/sql-functions/string-functions/concat",permalink:"/docusaurusv3/docs/latest/sql-reference/sql-functions/string-functions/concat",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-functions/string-functions/concat.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"character_length",permalink:"/docusaurusv3/docs/latest/sql-reference/sql-functions/string-functions/character_length"},next:{title:"concat_ws",permalink:"/docusaurusv3/docs/latest/sql-reference/sql-functions/string-functions/concat_ws"}},a={},l=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Examples",id:"examples",level:2},{value:"keyword",id:"keyword",level:2}];function u(n){const e=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code"},(0,c.ah)(),n.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"concat",children:"concat"}),"\n",(0,s.jsx)(e.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(e.p,{children:"This function combines multiple strings. If any of the parameter value is NULL, it will return NULL."}),"\n",(0,s.jsx)(e.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-Haskell",children:"VARCHAR concat(VARCHAR,...)\n"})}),"\n",(0,s.jsx)(e.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-Plain",metastring:"Text",children:"MySQL > select concat(\"a\", \"b\");\n+------------------+\n| concat('a', 'b') |\n+------------------+\n| ab               |\n+------------------+\n\nMySQL > select concat(\"a\", \"b\", \"c\");\n+-----------------------+\n| concat('a', 'b', 'c') |\n+-----------------------+\n| abc                   |\n+-----------------------+\n\nMySQL > select concat(\"a\", null, \"c\");\n+------------------------+\n| concat('a', NULL, 'c') |\n+------------------------+\n| NULL                   |\n+------------------------+\n"})}),"\n",(0,s.jsx)(e.h2,{id:"keyword",children:"keyword"}),"\n",(0,s.jsx)(e.p,{children:"CONCAT"})]})}const d=function(n={}){const{wrapper:e}=Object.assign({},(0,c.ah)(),n.components);return e?(0,s.jsx)(e,Object.assign({},n,{children:(0,s.jsx)(u,n)})):u(n)}},11151:(n,e,t)=>{t.d(e,{Zo:()=>i,ah:()=>r});var s=t(67294);const c=s.createContext({});function r(n){const e=s.useContext(c);return s.useMemo((()=>"function"==typeof n?n(e):{...e,...n}),[e,n])}const o={};function i({components:n,children:e,disableParentContext:t}){let i;return i=t?"function"==typeof n?n({}):n||o:r(n),s.createElement(c.Provider,{value:i},e)}}}]);