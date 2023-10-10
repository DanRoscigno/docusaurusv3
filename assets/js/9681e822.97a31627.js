"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[71593],{64845:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var s=r(85893),t=r(11151);const i={},c="rpad",a={id:"sql-reference/sql-functions/string-functions/rpad",title:"rpad",description:"Description",source:"@site/versioned_docs/version-3.1/sql-reference/sql-functions/string-functions/rpad.md",sourceDirName:"sql-reference/sql-functions/string-functions",slug:"/sql-reference/sql-functions/string-functions/rpad",permalink:"/doc/docs/sql-reference/sql-functions/string-functions/rpad",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-functions/string-functions/rpad.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"right",permalink:"/doc/docs/sql-reference/sql-functions/string-functions/right"},next:{title:"rtrim",permalink:"/doc/docs/sql-reference/sql-functions/string-functions/rtrim"}},d={},l=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2},{value:"keyword",id:"keyword",level:2}];function o(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",pre:"pre"},(0,t.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"rpad",children:"rpad"}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["This function returns strings with a length of ",(0,s.jsx)(n.code,{children:"len"})," (starting counting from the first syllable) in ",(0,s.jsx)(n.code,{children:"str"}),". If ",(0,s.jsx)(n.code,{children:"len"})," is longer than ",(0,s.jsx)(n.code,{children:"str"}),", the return value is lengthened to ",(0,s.jsx)(n.code,{children:"len"})," characters by adding pad characters behind ",(0,s.jsx)(n.code,{children:"str"}),".  If ",(0,s.jsx)(n.code,{children:"str"})," is longer than ",(0,s.jsx)(n.code,{children:"len"}),", the return value is shortened to ",(0,s.jsx)(n.code,{children:"len"})," characters. ",(0,s.jsx)(n.code,{children:"len"})," means the length of characters, not bytes."]}),"\n",(0,s.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Haskell",children:"VARCHAR rpad(VARCHAR str, INT len[, VARCHAR pad])\n"})}),"\n",(0,s.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"str"}),": required, the string to be padded, which must evaluate to a VARCHAR value."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"len"}),": required, the length of return value, it means the length of characters, not bytes, which must evaluate to an INT value."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"pad"}),": optional, the characters to be added behind str, which must be a VARCHAR value. If this parameter is not specified, spaces are added by default."]}),"\n",(0,s.jsx)(n.h2,{id:"return-value",children:"Return value"}),"\n",(0,s.jsx)(n.p,{children:"Returns a VARCHAR value."}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"MySQL > SELECT rpad(\"hi\", 5, \"xy\");\n+---------------------+\n| rpad('hi', 5, 'xy') |\n+---------------------+\n| hixyx               |\n+---------------------+\n\nMySQL > SELECT rpad(\"hi\", 1, \"xy\");\n+---------------------+\n| rpad('hi', 1, 'xy') |\n+---------------------+\n| h                   |\n+---------------------+\n\nMySQL > SELECT rpad(\"hi\", 5);\n+---------------------+\n| rpad('hi', 5, ' ')  |\n+---------------------+\n| hi                  |\n+---------------------+\n"})}),"\n",(0,s.jsx)(n.h2,{id:"keyword",children:"keyword"}),"\n",(0,s.jsx)(n.p,{children:"RPAD"})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(o,e)})):o(e)}},11151:(e,n,r)=>{r.d(n,{Zo:()=>a,ah:()=>i});var s=r(67294);const t=s.createContext({});function i(e){const n=s.useContext(t);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const c={};function a({components:e,children:n,disableParentContext:r}){let a;return a=r?"function"==typeof e?e({}):e||c:i(e),s.createElement(t.Provider,{value:a},n)}}}]);