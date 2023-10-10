"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[74975],{69984:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var s=t(85893),r=t(11151);const i={},a="element_at",o={id:"sql-reference/sql-functions/array-functions/element_at",title:"element_at",description:"Description",source:"@site/versioned_docs/version-3.0/sql-reference/sql-functions/array-functions/element_at.md",sourceDirName:"sql-reference/sql-functions/array-functions",slug:"/sql-reference/sql-functions/array-functions/element_at",permalink:"/doc/docs/3.0/sql-reference/sql-functions/array-functions/element_at",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/sql-reference/sql-functions/array-functions/element_at.md",tags:[],version:"3.0",frontMatter:{},sidebar:"documentation",previous:{title:"cardinality",permalink:"/doc/docs/3.0/sql-reference/sql-functions/array-functions/cardinality"},next:{title:"reverse",permalink:"/doc/docs/3.0/sql-reference/sql-functions/array-functions/reverse"}},c={},l=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2},{value:"keyword",id:"keyword",level:2}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",a:"a",pre:"pre",ul:"ul",li:"li"},(0,r.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"element_at",children:"element_at"}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"Returns the element at the specified position (index) from a given array. If any parameter is NULL or if the position does not exist, the result is NULL."}),"\n",(0,s.jsxs)(n.p,{children:["This function is the alias of the subscript operator ",(0,s.jsx)(n.code,{children:"[]"}),". It is supported from v3.0 onwards."]}),"\n",(0,s.jsxs)(n.p,{children:["If you want to retrieve a value from a key-value pair in a map, see ",(0,s.jsx)(n.a,{href:"/doc/docs/3.0/sql-reference/sql-functions/map-functions/element_at",children:"element_at"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Haskell",children:"element_at(any_array, position)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"any_array"}),": an array expression from which to retrieve elements."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"position"}),": the position of the element in the array. It must be a positive integer. Value range: [1, array length]. If ",(0,s.jsx)(n.code,{children:"position"})," does not exist, NULL is returned."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-plain",metastring:"text",children:"mysql> select element_at([2,3,11],3);\n+-----------------------+\n|  element_at([2,3,11]) |\n+-----------------------+\n|                    11 |\n+-----------------------+\n1 row in set (0.00 sec)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"keyword",children:"keyword"}),"\n",(0,s.jsx)(n.p,{children:"ELEMENT_AT, ARRAY"})]})}const u=function(e={}){const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(d,e)})):d(e)}},11151:(e,n,t)=>{t.d(n,{Zo:()=>o,ah:()=>i});var s=t(67294);const r=s.createContext({});function i(e){const n=s.useContext(r);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const a={};function o({components:e,children:n,disableParentContext:t}){let o;return o=t?"function"==typeof e?e({}):e||a:i(e),s.createElement(r.Provider,{value:o},n)}}}]);