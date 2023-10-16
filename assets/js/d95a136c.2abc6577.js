"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[8623],{92005:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>t,metadata:()=>i,toc:()=>o});var a=r(85893),s=r(11151);const t={displayed_sidebar:"English"},c="array_append",i={id:"sql-reference/sql-functions/array-functions/array_append",title:"array_append",description:"Description",source:"@site/versioned_docs/version-2.5/sql-reference/sql-functions/array-functions/array_append.md",sourceDirName:"sql-reference/sql-functions/array-functions",slug:"/sql-reference/sql-functions/array-functions/array_append",permalink:"/doc/docs/2.5/sql-reference/sql-functions/array-functions/array_append",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-functions/array-functions/array_append.md",tags:[],version:"2.5",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"array_agg",permalink:"/doc/docs/2.5/sql-reference/sql-functions/array-functions/array_agg"},next:{title:"array_avg",permalink:"/doc/docs/2.5/sql-reference/sql-functions/array-functions/array_avg"}},l={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Examples",id:"examples",level:2},{value:"keyword",id:"keyword",level:2}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code"},(0,s.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"array_append",children:"array_append"}),"\n",(0,a.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,a.jsx)(n.p,{children:"Adds a new element to the end of the array. Returns an array."}),"\n",(0,a.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-Haskell",children:"array_append(any_array, any_element)\n"})}),"\n",(0,a.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-plain",metastring:"text",children:"mysql> select array_append([1, 2], 3);\n+------------------------+\n| array_append([1,2], 3) |\n+------------------------+\n| [1,2,3]                |\n+------------------------+\n1 row in set (0.00 sec)\n\n"})}),"\n",(0,a.jsx)(n.p,{children:"You can add NULL to the array."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-plain",metastring:"text",children:"mysql> select array_append([1, 2], NULL);\n+---------------------------+\n| array_append([1,2], NULL) |\n+---------------------------+\n| [1,2,NULL]                |\n+---------------------------+\n1 row in set (0.01 sec)\n\n"})}),"\n",(0,a.jsx)(n.h2,{id:"keyword",children:"keyword"}),"\n",(0,a.jsx)(n.p,{children:"ARRAY_APPEND,ARRAY"})]})}const p=function(e={}){const{wrapper:n}=Object.assign({},(0,s.ah)(),e.components);return n?(0,a.jsx)(n,Object.assign({},e,{children:(0,a.jsx)(d,e)})):d(e)}},11151:(e,n,r)=>{r.d(n,{Zo:()=>i,ah:()=>t});var a=r(67294);const s=a.createContext({});function t(e){const n=a.useContext(s);return a.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const c={};function i({components:e,children:n,disableParentContext:r}){let i;return i=r?"function"==typeof e?e({}):e||c:t(e),a.createElement(s.Provider,{value:i},n)}}}]);