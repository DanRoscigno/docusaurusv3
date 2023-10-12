"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[72896],{53279:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>h,frontMatter:()=>c,metadata:()=>t,toc:()=>o});var s=r(85893),a=r(11151);const c={},l="array_contains_all",t={id:"sql-reference/sql-functions/array-functions/array_contains_all",title:"array_contains_all",description:"Description",source:"@site/versioned_docs/version-3.0/sql-reference/sql-functions/array-functions/array_contains_all.md",sourceDirName:"sql-reference/sql-functions/array-functions",slug:"/sql-reference/sql-functions/array-functions/array_contains_all",permalink:"/doc/docs/3.0/sql-reference/sql-functions/array-functions/array_contains_all",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/sql-reference/sql-functions/array-functions/array_contains_all.md",tags:[],version:"3.0",frontMatter:{},sidebar:"Chinese31",previous:{title:"array_contains",permalink:"/doc/docs/3.0/sql-reference/sql-functions/array-functions/array_contains"},next:{title:"array_cum_sum",permalink:"/doc/docs/3.0/sql-reference/sql-functions/array-functions/array_cum_sum"}},i={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Usage notes",id:"usage-notes",level:2},{value:"Examples",id:"examples",level:2}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",pre:"pre",a:"a",ul:"ul",li:"li",ol:"ol"},(0,a.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"array_contains_all",children:"array_contains_all"}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["Checks whether ",(0,s.jsx)(n.code,{children:"arr1"})," contains all the elements of ",(0,s.jsx)(n.code,{children:"arr2"}),", that is, whether ",(0,s.jsx)(n.code,{children:"arr2"})," is a subset of ",(0,s.jsx)(n.code,{children:"arr1"}),". If yes, 1 is returned. If not, 0 is returned."]}),"\n",(0,s.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Haskell",children:"BOOLEAN array_contains_all(arr1, arr2)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"arr"}),": the two arrays to compare. This syntax checks whether ",(0,s.jsx)(n.code,{children:"arr2"})," is a subset of ",(0,s.jsx)(n.code,{children:"arr1"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["The data types of elements in the two arrays must be the same. For the data types of array elements supported by StarRocks, see ",(0,s.jsx)(n.a,{href:"/doc/docs/3.0/sql-reference/sql-statements/data-types/Array",children:"ARRAY"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"return-value",children:"Return value"}),"\n",(0,s.jsx)(n.p,{children:"Returns a value of the BOOLEAN type."}),"\n",(0,s.jsxs)(n.p,{children:["1 is returned if ",(0,s.jsx)(n.code,{children:"arr2"})," is a subset of ",(0,s.jsx)(n.code,{children:"arr1"}),". Otherwise, 0 is returned."]}),"\n",(0,s.jsx)(n.p,{children:"If any of the two arrays is NULL, NULL is returned."}),"\n",(0,s.jsx)(n.h2,{id:"usage-notes",children:"Usage notes"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["If an array contains ",(0,s.jsx)(n.code,{children:"null"})," elements, ",(0,s.jsx)(n.code,{children:"null"})," is processed as a value."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"An empty array is a subset of any array."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Elements in the two arrays can have different order."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Create a table named ",(0,s.jsx)(n.code,{children:"t1"})," and insert data into this table."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"CREATE TABLE t1 (\n    c0 INT,\n    c1 ARRAY<INT>,\n    c2 ARRAY<INT>\n) ENGINE=OLAP\nDUPLICATE KEY(c0)\nDISTRIBUTED BY HASH(c0);\n\nINSERT INTO t1 VALUES\n    (1,[1,2,3],[1,2]),\n    (2,[1,2,3],[1,4]),\n    (3,NULL,[1]),\n    (4,[1,2,null],NULL),\n    (5,[1,2,null],[null]),\n    (6,[2,3],[]);\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Query data from this table."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plain",children:"SELECT * FROM t1 ORDER BY c0;\n+------+------------+----------+\n| c0   | c1         | c2       |\n+------+------------+----------+\n|    1 | [1,2,3]    | [1,2]    |\n|    2 | [1,2,3]    | [1,4]    |\n|    3 | NULL       | [1]      |\n|    4 | [1,2,null] | NULL     |\n|    5 | [1,2,null] | [null]   |\n|    6 | [2,3]      | []       |\n+------+------------+----------+\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Check whether each row of ",(0,s.jsx)(n.code,{children:"c2"})," is a subset of the corresponding row of ",(0,s.jsx)(n.code,{children:"c1"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plaintext",children:"SELECT c0, c1, c2, array_contains_all(c1, c2) FROM t1 ORDER BY c0;\n+------+------------+----------+----------------------------+\n| c0   | c1         | c2       | array_contains_all(c1, c2) |\n+------+------------+----------+----------------------------+\n|    1 | [1,2,3]    | [1,2]    |                          1 |\n|    2 | [1,2,3]    | [1,4]    |                          0 |\n|    3 | NULL       | [1]      |                       NULL |\n|    4 | [1,2,null] | NULL     |                       NULL |\n|    5 | [1,2,null] | [null]   |                          1 |\n|    6 | [2,3]      | []       |                          1 |\n+------+------------+----------+----------------------------+\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"In the output:"}),"\n",(0,s.jsxs)(n.p,{children:["For row 1, ",(0,s.jsx)(n.code,{children:"c2"})," is a subset of ",(0,s.jsx)(n.code,{children:"c1"})," and 1 is returned."]}),"\n",(0,s.jsxs)(n.p,{children:["For row 2, ",(0,s.jsx)(n.code,{children:"c2"})," is not a subset of ",(0,s.jsx)(n.code,{children:"c1"})," and 0 is returned."]}),"\n",(0,s.jsxs)(n.p,{children:["For row 3, ",(0,s.jsx)(n.code,{children:"c1"})," is NULL and NULL is returned."]}),"\n",(0,s.jsxs)(n.p,{children:["For row 4, ",(0,s.jsx)(n.code,{children:"c2"})," is NULL and NULL is returned."]}),"\n",(0,s.jsxs)(n.p,{children:["For row 5, the two arrays contain ",(0,s.jsx)(n.code,{children:"null"})," and ",(0,s.jsx)(n.code,{children:"null"})," is processed as a normal value, ",(0,s.jsx)(n.code,{children:"1"})," is returned."]}),"\n",(0,s.jsxs)(n.p,{children:["For row 6, ",(0,s.jsx)(n.code,{children:"c2"})," is an empty array and considered a subset of ",(0,s.jsx)(n.code,{children:"c1"}),". Therefore, ",(0,s.jsx)(n.code,{children:"1"})," is returned."]})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(d,e)})):d(e)}},11151:(e,n,r)=>{r.d(n,{Zo:()=>t,ah:()=>c});var s=r(67294);const a=s.createContext({});function c(e){const n=s.useContext(a);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const l={};function t({components:e,children:n,disableParentContext:r}){let t;return t=r?"function"==typeof e?e({}):e||l:c(e),s.createElement(a.Provider,{value:t},n)}}}]);