"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[48796],{57140:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>t,metadata:()=>l,toc:()=>o});var a=r(85893),s=r(11151);const t={},i="array_to_bitmap",l={id:"sql-reference/sql-functions/array-functions/array_to_bitmap",title:"array_to_bitmap",description:"Description",source:"@site/versioned_docs/version-3.1/sql-reference/sql-functions/array-functions/array_to_bitmap.md",sourceDirName:"sql-reference/sql-functions/array-functions",slug:"/sql-reference/sql-functions/array-functions/array_to_bitmap",permalink:"/docusaurusv3/docs/latest/sql-reference/sql-functions/array-functions/array_to_bitmap",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-functions/array-functions/array_to_bitmap.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"array_sum",permalink:"/docusaurusv3/docs/latest/sql-reference/sql-functions/array-functions/array_sum"},next:{title:"arrays_overlap",permalink:"/docusaurusv3/docs/latest/sql-reference/sql-functions/array-functions/arrays_overlap"}},c={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Usage notes",id:"usage-notes",level:2},{value:"Examples",id:"examples",level:2}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",ul:"ul",li:"li"},(0,s.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"array_to_bitmap",children:"array_to_bitmap"}),"\n",(0,a.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,a.jsx)(n.p,{children:"Converts an array into BITMAP values. This function is supported from v2.3."}),"\n",(0,a.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-Haskell",children:"BITMAP array_to_bitmap(array)\n"})}),"\n",(0,a.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"array"}),": Elements in an array can be of the INT, TINYINT, or SMALLINT type."]}),"\n",(0,a.jsx)(n.h2,{id:"return-value",children:"Return value"}),"\n",(0,a.jsx)(n.p,{children:"Returns a value of the BITMAP type."}),"\n",(0,a.jsx)(n.h2,{id:"usage-notes",children:"Usage notes"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"If the data type of elements in the input array is invalid, such as STRING or DECIMAL, an error is returned."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"If an empty array is entered, an empty BITMAP value is returned."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["If ",(0,a.jsx)(n.code,{children:"NULL"})," is entered, ",(0,a.jsx)(n.code,{children:"NULL"})," is returned."]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsxs)(n.p,{children:["Example 1: Convert an array into BITMAP values. This function must be nested in ",(0,a.jsx)(n.code,{children:"bitmap_to_array"})," because BITMAP values cannot be displayed."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-Plain",children:"MySQL > select bitmap_to_array(array_to_bitmap([1,2,3]));\n+-------------------------------------------+\n| bitmap_to_array(array_to_bitmap([1,2,3])) |\n+-------------------------------------------+\n| [1,2,3]                                   |\n+-------------------------------------------+\n"})}),"\n",(0,a.jsx)(n.p,{children:"Example 2: Enter an empty array and an empty array is returned."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-Plain",children:"MySQL > select bitmap_to_array(array_to_bitmap([]));\n+--------------------------------------+\n| bitmap_to_array(array_to_bitmap([])) |\n+--------------------------------------+\n| []                                   |\n+--------------------------------------+\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Example 3: Enter ",(0,a.jsx)(n.code,{children:"NULL"})," and ",(0,a.jsx)(n.code,{children:"NULL"})," is returned."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-Plain",children:"MySQL > select array_to_bitmap(NULL);\n+-----------------------+\n| array_to_bitmap(NULL) |\n+-----------------------+\n| NULL                  |\n+-----------------------+\n"})})]})}const u=function(e={}){const{wrapper:n}=Object.assign({},(0,s.ah)(),e.components);return n?(0,a.jsx)(n,Object.assign({},e,{children:(0,a.jsx)(d,e)})):d(e)}},11151:(e,n,r)=>{r.d(n,{Zo:()=>l,ah:()=>t});var a=r(67294);const s=a.createContext({});function t(e){const n=a.useContext(s);return a.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const i={};function l({components:e,children:n,disableParentContext:r}){let l;return l=r?"function"==typeof e?e({}):e||i:t(e),a.createElement(s.Provider,{value:l},n)}}}]);