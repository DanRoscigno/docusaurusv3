"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[78616],{20112:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>c,metadata:()=>i,toc:()=>o});var t=s(85893),r=s(11151);const c={},a="md5",i={id:"sql-reference/sql-functions/crytographic-functions/md5",title:"md5",description:"Uses the MD5 Message-Digest Algorithm to calculate the 128-bit checksum of a string. The checksum is represented by a 32-character hexadecimal string.",source:"@site/versioned_docs/version-3.0/sql-reference/sql-functions/crytographic-functions/md5.md",sourceDirName:"sql-reference/sql-functions/crytographic-functions",slug:"/sql-reference/sql-functions/crytographic-functions/md5",permalink:"/doc/docs/3.0/sql-reference/sql-functions/crytographic-functions/md5",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/sql-reference/sql-functions/crytographic-functions/md5.md",tags:[],version:"3.0",frontMatter:{},sidebar:"documentation",previous:{title:"from_base64",permalink:"/doc/docs/3.0/sql-reference/sql-functions/crytographic-functions/from_base64"},next:{title:"md5sum",permalink:"/doc/docs/3.0/sql-reference/sql-functions/crytographic-functions/md5sum"}},l={},o=[{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2},{value:"Keywords",id:"keywords",level:2}];function d(e){const n=Object.assign({h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code"},(0,r.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"md5",children:"md5"}),"\n",(0,t.jsx)(n.p,{children:"Uses the MD5 Message-Digest Algorithm to calculate the 128-bit checksum of a string. The checksum is represented by a 32-character hexadecimal string."}),"\n",(0,t.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"md5(expr)\n"})}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"expr"}),": the string to calculate. It must be of the VARCHAR type."]}),"\n",(0,t.jsx)(n.h2,{id:"return-value",children:"Return value"}),"\n",(0,t.jsx)(n.p,{children:"Returns a checksum of the VARCHAR type, which is a 32-character hexadecimal string."}),"\n",(0,t.jsx)(n.p,{children:"If the input is NULL, NULL is returned."}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"select md5('abc');\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plaintext",children:"+----------------------------------+\n| md5('abc')                       |\n+----------------------------------+\n| 900150983cd24fb0d6963f7d28e17f72 |\n+----------------------------------+\n1 row in set (0.01 sec)\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"select md5(null);\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plaintext",children:"+-----------+\n| md5(NULL) |\n+-----------+\n| NULL      |\n+-----------+\n1 row in set (0.00 sec)\n"})}),"\n",(0,t.jsx)(n.h2,{id:"keywords",children:"Keywords"}),"\n",(0,t.jsx)(n.p,{children:"MD5, ENCRYPTION"})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(d,e)})):d(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>i,ah:()=>c});var t=s(67294);const r=t.createContext({});function c(e){const n=t.useContext(r);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const a={};function i({components:e,children:n,disableParentContext:s}){let i;return i=s?"function"==typeof e?e({}):e||a:c(e),t.createElement(r.Provider,{value:i},n)}}}]);