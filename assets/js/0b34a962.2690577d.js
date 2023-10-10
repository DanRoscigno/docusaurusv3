"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[14902],{46261:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var t=r(85893),s=r(11151);const i={},c="current_version",o={id:"sql-reference/sql-functions/utility-functions/current_version",title:"current_version",description:"Description",source:"@site/versioned_docs/version-3.0/sql-reference/sql-functions/utility-functions/current_version.md",sourceDirName:"sql-reference/sql-functions/utility-functions",slug:"/sql-reference/sql-functions/utility-functions/current_version",permalink:"/docusaurusv3/docs/3.0/sql-reference/sql-functions/utility-functions/current_version",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/sql-reference/sql-functions/utility-functions/current_version.md",tags:[],version:"3.0",frontMatter:{},sidebar:"documentation",previous:{title:"current_role",permalink:"/docusaurusv3/docs/3.0/sql-reference/sql-functions/utility-functions/current_role"},next:{title:"database",permalink:"/docusaurusv3/docs/3.0/sql-reference/sql-functions/utility-functions/database"}},l={},u=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function a(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code"},(0,s.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"current_version",children:"current_version"}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(n.p,{children:"Returns the current version of StarRocks. Two syntaxes are provided for compatibility with different clients."}),"\n",(0,t.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Haskell",children:"current_version();\n\n@@version_comment;\n"})}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsx)(n.p,{children:"None"}),"\n",(0,t.jsx)(n.h2,{id:"return-value",children:"Return value"}),"\n",(0,t.jsx)(n.p,{children:"Returns a value of the VARCHAR type."}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"mysql> select current_version();\n+-------------------+\n| current_version() |\n+-------------------+\n| 2.1.2 0782ad7     |\n+-------------------+\n1 row in set (0.00 sec)\n\nmysql> select @@version_comment;\n+-------------------------+\n| @@version_comment       |\n+-------------------------+\n| StarRocks version 2.1.2 |\n+-------------------------+\n1 row in set (0.01 sec)\n"})})]})}const d=function(e={}){const{wrapper:n}=Object.assign({},(0,s.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(a,e)})):a(e)}},11151:(e,n,r)=>{r.d(n,{Zo:()=>o,ah:()=>i});var t=r(67294);const s=t.createContext({});function i(e){const n=t.useContext(s);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const c={};function o({components:e,children:n,disableParentContext:r}){let o;return o=r?"function"==typeof e?e({}):e||c:i(e),t.createElement(s.Provider,{value:o},n)}}}]);