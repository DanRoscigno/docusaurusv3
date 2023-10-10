"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[43768],{38402:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>a,contentTitle:()=>o,default:()=>d,frontMatter:()=>c,metadata:()=>i,toc:()=>l});var r=n(85893),t=n(11151);const c={},o="from_base64",i={id:"sql-reference/sql-functions/crytographic-functions/from_base64",title:"from_base64",description:"Description",source:"@site/versioned_docs/version-3.1/sql-reference/sql-functions/crytographic-functions/from_base64.md",sourceDirName:"sql-reference/sql-functions/crytographic-functions",slug:"/sql-reference/sql-functions/crytographic-functions/from_base64",permalink:"/docusaurusv3/docs/latest/sql-reference/sql-functions/crytographic-functions/from_base64",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-functions/crytographic-functions/from_base64.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"base64_decode_string",permalink:"/docusaurusv3/docs/latest/sql-reference/sql-functions/crytographic-functions/base64_decode_string"},next:{title:"md5",permalink:"/docusaurusv3/docs/latest/sql-reference/sql-functions/crytographic-functions/md5"}},a={},l=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function u(e){const s=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",pre:"pre",code:"code"},(0,t.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h1,{id:"from_base64",children:"from_base64"}),"\n",(0,r.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(s.p,{children:["Decodes a Base64-encoded string. This function is an inverse of ",(0,r.jsx)(s.a,{href:"/docusaurusv3/docs/latest/sql-reference/sql-functions/crytographic-functions/to_base64",children:"to_base64"}),"."]}),"\n",(0,r.jsx)(s.h2,{id:"syntax",children:"Syntax"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-Haskell",children:"from_base64(str);\n"})}),"\n",(0,r.jsx)(s.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"str"}),": the string to decode. It must be of the VARCHAR type."]}),"\n",(0,r.jsx)(s.h2,{id:"return-value",children:"Return value"}),"\n",(0,r.jsx)(s.p,{children:"Returns a value of the VARCHAR type. If the input is NULL or an invalid Base64 string, NULL is returned. If the input is empty, an error is returned."}),"\n",(0,r.jsx)(s.p,{children:"This function accepts only one string. More than one input string causes an error."}),"\n",(0,r.jsx)(s.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-Plain",metastring:"Text",children:"mysql> select from_base64(\"starrocks\");\n+--------------------------+\n| from_base64('starrocks') |\n+--------------------------+\n| \xb2\u05ab\xae$                       |\n+--------------------------+\n1 row in set (0.00 sec)\n\nmysql> select from_base64('c3RhcnJvY2tz');\n+-----------------------------+\n| from_base64('c3RhcnJvY2tz') |\n+-----------------------------+\n| starrocks                   |\n+-----------------------------+\n"})})]})}const d=function(e={}){const{wrapper:s}=Object.assign({},(0,t.ah)(),e.components);return s?(0,r.jsx)(s,Object.assign({},e,{children:(0,r.jsx)(u,e)})):u(e)}},11151:(e,s,n)=>{n.d(s,{Zo:()=>i,ah:()=>c});var r=n(67294);const t=r.createContext({});function c(e){const s=r.useContext(t);return r.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const o={};function i({components:e,children:s,disableParentContext:n}){let i;return i=n?"function"==typeof e?e({}):e||o:c(e),r.createElement(t.Provider,{value:i},s)}}}]);