"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[13026],{39340:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>d,frontMatter:()=>t,metadata:()=>l,toc:()=>i});var s=r(85893),a=r(11151);const t={},c="array_cum_sum",l={id:"sql-reference/sql-functions/array-functions/array_cum_sum",title:"array_cum_sum",description:"Description",source:"@site/versioned_docs/version-3.1/sql-reference/sql-functions/array-functions/array_cum_sum.md",sourceDirName:"sql-reference/sql-functions/array-functions",slug:"/sql-reference/sql-functions/array-functions/array_cum_sum",permalink:"/docusaurusv3/docs/latest/sql-reference/sql-functions/array-functions/array_cum_sum",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-functions/array-functions/array_cum_sum.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"array_contains_all",permalink:"/docusaurusv3/docs/latest/sql-reference/sql-functions/array-functions/array_contains_all"},next:{title:"array_difference",permalink:"/docusaurusv3/docs/latest/sql-reference/sql-functions/array-functions/array_difference"}},u={},i=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return values",id:"return-values",level:2},{value:"Examples",id:"examples",level:2}];function o(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code"},(0,a.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"array_cum_sum",children:"array_cum_sum"}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"Returns the cumulative sums of elements in an array."}),"\n",(0,s.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Haskell",children:"array_cum_sum(array(bigint))\narray_cum_sum(array(double))\n"})}),"\n",(0,s.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"array"}),": The elements in the array must be of the BIGINT (8-byte signed integer) or DOUBLE (8-byte floating-point number) type."]}),"\n",(0,s.jsx)(n.h2,{id:"return-values",children:"Return values"}),"\n",(0,s.jsx)(n.p,{children:"Returns an array."}),"\n",(0,s.jsx)(n.p,{children:"NULL is returned if the input array is NULL."}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.p,{children:"Example 1: Return the cumulative sums of an array."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plain",children:"select array_cum_sum([11, 11, 12]);\n+---------------------------+\n| array_cum_sum([11,11,12]) |\n+---------------------------+\n| [11,22,34]                |\n+---------------------------+\n"})}),"\n",(0,s.jsx)(n.p,{children:"Example 2: Use this function with CAST."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plain",children:"select array_cum_sum([cast(11.33 as double),cast(11.11 as double),cast(12.324 as double)]);\n+---------------------------------------------------------------------------------------+\n| array_cum_sum([CAST(11.33 AS DOUBLE), CAST(11.11 AS DOUBLE), CAST(12.324 AS DOUBLE)]) |\n+---------------------------------------------------------------------------------------+\n| [11.33,22.439999999999998,34.763999999999996]                                         |\n+---------------------------------------------------------------------------------------+\n"})}),"\n",(0,s.jsx)(n.p,{children:"Example 3: The input array contains a null."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plain",children:"select array_cum_sum([null,1,2]);\n+---------------------------------+\n| array_cum_sum([null,1,2])       |\n+---------------------------------+\n| [null,1,3]                      |\n+---------------------------------+\n"})}),"\n",(0,s.jsx)(n.p,{children:"Example 4: The input array is null."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plain",children:"select array_cum_sum(null);\n+---------------------------------+\n| array_cum_sum(NULL)             |\n+---------------------------------+\n| NULL                            |\n+---------------------------------+\n"})})]})}const d=function(e={}){const{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(o,e)})):o(e)}},11151:(e,n,r)=>{r.d(n,{Zo:()=>l,ah:()=>t});var s=r(67294);const a=s.createContext({});function t(e){const n=s.useContext(a);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const c={};function l({components:e,children:n,disableParentContext:r}){let l;return l=r?"function"==typeof e?e({}):e||c:t(e),s.createElement(a.Provider,{value:l},n)}}}]);