"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[38484],{58617:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>p,frontMatter:()=>c,metadata:()=>a,toc:()=>d});var t=s(85893),r=s(11151);const c={displayed_sidebar:"English"},i="aes_decrypt",a={id:"sql-reference/sql-functions/crytographic-functions/aes_decrypt",title:"aes_decrypt",description:"Description",source:"@site/versioned_docs/version-2.5/sql-reference/sql-functions/crytographic-functions/aes_decrypt.md",sourceDirName:"sql-reference/sql-functions/crytographic-functions",slug:"/sql-reference/sql-functions/crytographic-functions/aes_decrypt",permalink:"/doc/docs/2.5/sql-reference/sql-functions/crytographic-functions/aes_decrypt",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-functions/crytographic-functions/aes_decrypt.md",tags:[],version:"2.5",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"nullif",permalink:"/doc/docs/2.5/sql-reference/sql-functions/condition-functions/nullif"},next:{title:"aes_encrypt",permalink:"/doc/docs/2.5/sql-reference/sql-functions/crytographic-functions/aes_encrypt"}},o={},d=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function l(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code"},(0,r.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"aes_decrypt",children:"aes_decrypt"}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(n.p,{children:"Uses the AES_128_ECB algorithm to decrypt a string and returns a binary string."}),"\n",(0,t.jsx)(n.p,{children:"AES is short for advanced encryption standard and ECB is short for electronic code book. The key used to encrypt the string is a 128-bit string."}),"\n",(0,t.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Haskell",children:"aes_decrypt(str,key_str);\n"})}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"str"}),": the string to decrypt. It must be of the VARCHAR type."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"key_str"}),": the key used to encrypt ",(0,t.jsx)(n.code,{children:"str"}),". It must be of the VARCHAR type."]}),"\n",(0,t.jsx)(n.h2,{id:"return-value",children:"Return value"}),"\n",(0,t.jsx)(n.p,{children:"Returns a value of the VARCHAR type. If the input is invalid, NULL is returned."}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.p,{children:"Decode a Base64 string and use this function to decrypt the decoded string into the original string."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"mysql> select AES_DECRYPT(from_base64('uv/Lhzm74syo8JlfWarwKA==  '),'F3229A0B371ED2D9441B830D21A390C3');\n+--------------------------------------------------------------------------------------------+\n| aes_decrypt(from_base64('uv/Lhzm74syo8JlfWarwKA==  '), 'F3229A0B371ED2D9441B830D21A390C3') |\n+--------------------------------------------------------------------------------------------+\n| starrocks                                                                                  |\n+--------------------------------------------------------------------------------------------+\n1 row in set (0.00 sec)\n"})})]})}const p=function(e={}){const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(l,e)})):l(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>a,ah:()=>c});var t=s(67294);const r=t.createContext({});function c(e){const n=t.useContext(r);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const i={};function a({components:e,children:n,disableParentContext:s}){let a;return a=s?"function"==typeof e?e({}):e||i:c(e),t.createElement(r.Provider,{value:a},n)}}}]);