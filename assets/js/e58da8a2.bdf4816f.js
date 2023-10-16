"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[42914],{46326:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>t,default:()=>f,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var a=r(85893),s=r(11151);const i={displayed_sidebar:"English"},t="array_difference",c={id:"sql-reference/sql-functions/array-functions/array_difference",title:"array_difference",description:"Description",source:"@site/versioned_docs/version-3.1/sql-reference/sql-functions/array-functions/array_difference.md",sourceDirName:"sql-reference/sql-functions/array-functions",slug:"/sql-reference/sql-functions/array-functions/array_difference",permalink:"/doc/docs/sql-reference/sql-functions/array-functions/array_difference",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-functions/array-functions/array_difference.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"array_cum_sum",permalink:"/doc/docs/sql-reference/sql-functions/array-functions/array_cum_sum"},next:{title:"array_distinct",permalink:"/doc/docs/sql-reference/sql-functions/array-functions/array_distinct"}},l={},d=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function o(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code"},(0,s.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"array_difference",children:"array_difference"}),"\n",(0,a.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,a.jsx)(n.p,{children:"Calculates the difference between every two neighboring elements of an array by subtracting each element from its following element and returns an array that consists of the differences."}),"\n",(0,a.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-SQL",children:"array_difference(input)\n"})}),"\n",(0,a.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"input"}),": the array for which you want to calculate the differences between every two neighboring elements."]}),"\n",(0,a.jsx)(n.h2,{id:"return-value",children:"Return value"}),"\n",(0,a.jsxs)(n.p,{children:["Returns an array of the same data type and length as the array that you specify in the ",(0,a.jsx)(n.code,{children:"input"})," parameter."]}),"\n",(0,a.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(n.p,{children:"Example 1:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-Plain",children:"mysql> SELECT array_difference([342, 32423, 213, 23432]);\n+-----------------------------------------+\n| array_difference([342,32423,213,23432]) |\n+-----------------------------------------+\n| [0,32081,-32210,23219]                  |\n+-----------------------------------------+\n"})}),"\n",(0,a.jsx)(n.p,{children:"Example 2:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-Plain",children:"mysql> SELECT array_difference([342, 32423, 213, null, 23432]);\n+----------------------------------------------+\n| array_difference([342,32423,213,NULL,23432]) |\n+----------------------------------------------+\n| [0,32081,-32210,null,null]                   |\n+----------------------------------------------+\n"})}),"\n",(0,a.jsx)(n.p,{children:"Example 3:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-Plain",children:"mysql> SELECT array_difference([1.2, 2.3, 3.2, 4324242.55]);\n+--------------------------------------------+\n| array_difference([1.2,2.3,3.2,4324242.55]) |\n+--------------------------------------------+\n| [0,1.1,0.9,4324239.35]                     |\n+--------------------------------------------+\n"})}),"\n",(0,a.jsx)(n.p,{children:"Example 4:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-Plain",children:"mysql> SELECT array_difference([false, true, false]);\n+----------------------------------------+\n| array_difference([FALSE, TRUE, FALSE]) |\n+----------------------------------------+\n| [0,1,-1]                               |\n+----------------------------------------+\n"})})]})}const f=function(e={}){const{wrapper:n}=Object.assign({},(0,s.ah)(),e.components);return n?(0,a.jsx)(n,Object.assign({},e,{children:(0,a.jsx)(o,e)})):o(e)}},11151:(e,n,r)=>{r.d(n,{Zo:()=>c,ah:()=>i});var a=r(67294);const s=a.createContext({});function i(e){const n=a.useContext(s);return a.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const t={};function c({components:e,children:n,disableParentContext:r}){let c;return c=r?"function"==typeof e?e({}):e||t:i(e),a.createElement(s.Provider,{value:c},n)}}}]);