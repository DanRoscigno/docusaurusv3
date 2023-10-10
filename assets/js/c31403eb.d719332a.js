"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[61776],{98942:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>t,metadata:()=>i,toc:()=>o});var a=r(85893),s=r(11151);const t={},l="array_filter",i={id:"sql-reference/sql-functions/array-functions/array_filter",title:"array_filter",description:"Description",source:"@site/versioned_docs/version-3.1/sql-reference/sql-functions/array-functions/array_filter.md",sourceDirName:"sql-reference/sql-functions/array-functions",slug:"/sql-reference/sql-functions/array-functions/array_filter",permalink:"/docusaurusv3/docs/latest/sql-reference/sql-functions/array-functions/array_filter",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-functions/array-functions/array_filter.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"array_distinct",permalink:"/docusaurusv3/docs/latest/sql-reference/sql-functions/array-functions/array_distinct"},next:{title:"array_generate",permalink:"/docusaurusv3/docs/latest/sql-reference/sql-functions/array-functions/array_generate"}},c={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Usage notes",id:"usage-notes",level:2},{value:"Examples",id:"examples",level:2}];function u(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",pre:"pre",code:"code",ul:"ul",li:"li"},(0,s.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"array_filter",children:"array_filter"}),"\n",(0,a.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,a.jsx)(n.p,{children:"Returns values from an array that matches the given filter."}),"\n",(0,a.jsxs)(n.p,{children:["This function comes in the following two forms. The lambda adoption allows for more flexible array filtering. For more information about lambda functions, see ",(0,a.jsx)(n.a,{href:"/docusaurusv3/docs/latest/sql-reference/sql-functions/Lambda_expression",children:"Lambda expression"}),". This function is supported from v2.5."]}),"\n",(0,a.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-Haskell",children:"array_filter(array, array<bool>)\narray_filter(lambda_function, arr1,arr2...)\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"array_filter(array, array<bool>)"})}),"\n",(0,a.jsxs)(n.p,{children:["Returns values from an array that matches ",(0,a.jsx)(n.code,{children:"array<bool>"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"array_filter(lambda_function, arr1,arr2...)"})}),"\n",(0,a.jsx)(n.p,{children:"Returns values from an array that matches the lambda function."}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"array"}),": the array to filter values from."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"array<bool>"}),": the expression used to filter values."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"lambda_function"}),": the lambda function used to filter values."]}),"\n",(0,a.jsx)(n.h2,{id:"usage-notes",children:"Usage notes"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["The two input parameters of ",(0,a.jsx)(n.code,{children:"array_filter(array, array<bool>)"})," must be ARRAY and the filter expression can evaluate to ",(0,a.jsx)(n.code,{children:"array<bool>"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:["The lambda function in ",(0,a.jsx)(n.code,{children:"array_filter(lambda_function, arr1,arr2...)"})," follows the usage notes in ",(0,a.jsx)(n.a,{href:"/docusaurusv3/docs/latest/sql-reference/sql-functions/array-functions/array_map",children:"array_map()"}),"."]}),"\n",(0,a.jsx)(n.li,{children:"If the input array is null, null is returned. If the filter array is null, an empty array is returned."}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Examples without using lambda functions"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-Plain",children:"-- All the elements in the array match the filter.\nselect array_filter([1,2,3],[1,1,1]);\n+------------------------------------+\n| array_filter([1, 2, 3], [1, 1, 1]) |\n+------------------------------------+\n| [1,2,3]                            |\n+------------------------------------+\n1 row in set (0.01 sec)\n\n-- The filter is null and an empty array is returned.\nselect array_filter([1,2,3],null);\n+-------------------------------+\n| array_filter([1, 2, 3], NULL) |\n+-------------------------------+\n| []                            |\n+-------------------------------+\n1 row in set (0.01 sec)\n\n-- The input array is null, null is returned.\nselect array_filter(null,[1]);\n+-------------------------+\n| array_filter(NULL, [1]) |\n+-------------------------+\n| NULL                    |\n+-------------------------+\n\n-- Both the input array and filter are null. Null is returned.\nselect array_filter(null,null);\n+--------------------------+\n| array_filter(NULL, NULL) |\n+--------------------------+\n| NULL                     |\n+--------------------------+\n1 row in set (0.01 sec)\n\n-- The filter contains a null element and an empty array is returned.\nselect array_filter([1,2,3],[null]);\n+---------------------------------+\n| array_filter([1, 2, 3], [NULL]) |\n+---------------------------------+\n| []                              |\n+---------------------------------+\n1 row in set (0.01 sec)\n\n-- The filter contains two null elements and an empty array is returned.\nselect array_filter([1,2,3],[null,null]);\n+---------------------------------------+\n| array_filter([1, 2, 3], [NULL, NULL]) |\n+---------------------------------------+\n| []                                    |\n+---------------------------------------+\n1 row in set (0.00 sec)\n\n-- Only one element matches the filter.\nselect array_filter([1,2,3],[null,1,0]);\n+---------------------------------------+\n| array_filter([1, 2, 3], [NULL, 1, 0]) |\n+---------------------------------------+\n| [2]                                   |\n+---------------------------------------+\n1 row in set (0.00 sec)\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Examples using lambda functions"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-Plain",children:"  -- Return the elements in x that are less than the elements in y.\n  select array_filter((x,y) -> x < y, [1,2,null], [4,5,6]);\n  +--------------------------------------------------------+\n  | array_filter((x, y) -> x < y, [1, 2, NULL], [4, 5, 6]) |\n  +--------------------------------------------------------+\n  | [1,2]                                                  |\n  +--------------------------------------------------------+\n"})}),"\n"]}),"\n"]})]})}const d=function(e={}){const{wrapper:n}=Object.assign({},(0,s.ah)(),e.components);return n?(0,a.jsx)(n,Object.assign({},e,{children:(0,a.jsx)(u,e)})):u(e)}},11151:(e,n,r)=>{r.d(n,{Zo:()=>i,ah:()=>t});var a=r(67294);const s=a.createContext({});function t(e){const n=a.useContext(s);return a.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const l={};function i({components:e,children:n,disableParentContext:r}){let i;return i=r?"function"==typeof e?e({}):e||l:t(e),a.createElement(s.Provider,{value:i},n)}}}]);