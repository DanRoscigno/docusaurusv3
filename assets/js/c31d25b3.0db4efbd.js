"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[92459],{67444:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>m,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var i=e(85893),s=e(11151);const a={},r="bitmap_to_string",o={id:"sql-reference/sql-functions/bitmap-functions/bitmap_to_string",title:"bitmap_to_string",description:"Description",source:"@site/versioned_docs/version-3.1/sql-reference/sql-functions/bitmap-functions/bitmap_to_string.md",sourceDirName:"sql-reference/sql-functions/bitmap-functions",slug:"/sql-reference/sql-functions/bitmap-functions/bitmap_to_string",permalink:"/doc/docs/sql-reference/sql-functions/bitmap-functions/bitmap_to_string",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-functions/bitmap-functions/bitmap_to_string.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"bitmap_to_base64",permalink:"/doc/docs/sql-reference/sql-functions/bitmap-functions/bitmap_to_base64"},next:{title:"bitmap_union",permalink:"/doc/docs/sql-reference/sql-functions/bitmap-functions/bitmap_union"}},c={},l=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function p(t){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code"},(0,s.ah)(),t.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"bitmap_to_string",children:"bitmap_to_string"}),"\n",(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(n.p,{children:"Converts an input bitmap into a string that is separated by commas (,). This string contains all the bits in the bitmap. If the input is null, null is returned."}),"\n",(0,i.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Haskell",children:"VARCHAR BITMAP_TO_STRING(BITMAP input)\n"})}),"\n",(0,i.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"input"}),": the bitmap you want to convert."]}),"\n",(0,i.jsx)(n.h2,{id:"return-value",children:"Return value"}),"\n",(0,i.jsx)(n.p,{children:"Returns a value of the VARCHAR type."}),"\n",(0,i.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(n.p,{children:"Example 1: The input is null and null is returned."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"MySQL > select bitmap_to_string(null);\n+------------------------+\n| bitmap_to_string(NULL) |\n+------------------------+\n| NULL                   |\n+------------------------+\n"})}),"\n",(0,i.jsx)(n.p,{children:"Example 2: The input is empty and an empty string is returned."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"MySQL > select bitmap_to_string(bitmap_empty());\n+----------------------------------+\n| bitmap_to_string(bitmap_empty()) |\n+----------------------------------+\n|                                  |\n+----------------------------------+\n"})}),"\n",(0,i.jsx)(n.p,{children:"Example 3: Convert a bitmap that contains one bit into a string."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"MySQL > select bitmap_to_string(to_bitmap(1));\n+--------------------------------+\n| bitmap_to_string(to_bitmap(1)) |\n+--------------------------------+\n| 1                              |\n+--------------------------------+\n"})}),"\n",(0,i.jsx)(n.p,{children:"Example 4: Convert a bitmap that contains two bits into a string."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"MySQL > select bitmap_to_string(bitmap_or(to_bitmap(1), to_bitmap(2)));\n+---------------------------------------------------------+\n| bitmap_to_string(bitmap_or(to_bitmap(1), to_bitmap(2))) |\n+---------------------------------------------------------+\n| 1,2                                                     |\n+---------------------------------------------------------+\n"})})]})}const m=function(t={}){const{wrapper:n}=Object.assign({},(0,s.ah)(),t.components);return n?(0,i.jsx)(n,Object.assign({},t,{children:(0,i.jsx)(p,t)})):p(t)}},11151:(t,n,e)=>{e.d(n,{Zo:()=>o,ah:()=>a});var i=e(67294);const s=i.createContext({});function a(t){const n=i.useContext(s);return i.useMemo((()=>"function"==typeof t?t(n):{...n,...t}),[n,t])}const r={};function o({components:t,children:n,disableParentContext:e}){let o;return o=e?"function"==typeof t?t({}):t||r:a(t),i.createElement(s.Provider,{value:o},n)}}}]);