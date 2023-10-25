"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[4917],{29586:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>t,metadata:()=>c,toc:()=>o});var s=r(85893),a=r(11151);const t={displayed_sidebar:"English"},i="array_sum",c={id:"sql-reference/sql-functions/array-functions/array_sum",title:"array_sum",description:"description",source:"@site/versioned_docs/version-2.1/sql-reference/sql-functions/array-functions/array_sum.md",sourceDirName:"sql-reference/sql-functions/array-functions",slug:"/sql-reference/sql-functions/array-functions/array_sum",permalink:"/docs/2.1/sql-reference/sql-functions/array-functions/array_sum",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-functions/array-functions/array_sum.md",tags:[],version:"2.1",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"array_remove",permalink:"/docs/2.1/sql-reference/sql-functions/array-functions/array_remove"},next:{title:"bitmap_and",permalink:"/docs/2.1/sql-reference/sql-functions/bitmap-functions/bitmap_and"}},l={},o=[{value:"description",id:"description",level:2},{value:"Syntax",id:"syntax",level:3},{value:"example",id:"example",level:2},{value:"keyword",id:"keyword",level:2}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",h3:"h3",pre:"pre",code:"code",p:"p"},(0,a.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"array_sum",children:"array_sum"}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"description"}),"\n",(0,s.jsx)(n.h3,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Haskell",children:"array_sum(array(type))\n"})}),"\n",(0,s.jsx)(n.p,{children:"Sum all data in an ARRAY and return the result."}),"\n",(0,s.jsx)(n.h2,{id:"example",children:"example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-plain",metastring:"text",children:"mysql> select array_sum([11, 11, 12]);\n+-----------------------+\n| array_sum([11,11,12]) |\n+-----------------------+\n| 34                    |\n+-----------------------+\n\nmysql> select array_sum([11.33, 11.11, 12.324]);\n+---------------------------------+\n| array_sum([11.33,11.11,12.324]) |\n+---------------------------------+\n| 34.764                          |\n+---------------------------------+\n"})}),"\n",(0,s.jsx)(n.h2,{id:"keyword",children:"keyword"}),"\n",(0,s.jsx)(n.p,{children:"ARRAY_SUM,ARRAY"})]})}const u=function(e={}){const{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(d,e)})):d(e)}},11151:(e,n,r)=>{r.d(n,{Zo:()=>c,ah:()=>t});var s=r(67294);const a=s.createContext({});function t(e){const n=s.useContext(a);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const i={};function c({components:e,children:n,disableParentContext:r}){let c;return c=r?"function"==typeof e?e({}):e||i:t(e),s.createElement(a.Provider,{value:c},n)}}}]);