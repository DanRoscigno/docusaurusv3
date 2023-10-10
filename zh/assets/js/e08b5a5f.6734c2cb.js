"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[56892],{21537:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>d,frontMatter:()=>t,metadata:()=>i,toc:()=>l});var a=r(85893),s=r(11151);const t={},c="array_max",i={id:"sql-reference/sql-functions/array-functions/array_max",title:"array_max",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.0/sql-reference/sql-functions/array-functions/array_max.md",sourceDirName:"sql-reference/sql-functions/array-functions",slug:"/sql-reference/sql-functions/array-functions/array_max",permalink:"/zh/docs/3.0/sql-reference/sql-functions/array-functions/array_max",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/sql-reference/sql-functions/array-functions/array_max.md",tags:[],version:"3.0",frontMatter:{},sidebar:"documentation",previous:{title:"array_map",permalink:"/zh/docs/3.0/sql-reference/sql-functions/array-functions/array_map"},next:{title:"array_min",permalink:"/zh/docs/3.0/sql-reference/sql-functions/array-functions/array_min"}},o={},l=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function u(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code"},(0,s.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"array_max",children:"array_max"}),"\n",(0,a.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,a.jsx)(n.p,{children:"\u6c42\u53d6\u4e00\u4e2aARRAY\u4e2d\u7684\u6240\u6709\u6570\u636e\u4e2d\u7684\u6700\u5927\u503c\uff0c\u8fd4\u56de\u8fd9\u4e2a\u7ed3\u679c\u3002"}),"\n",(0,a.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-Haskell",children:"array_max(array(type))\n"})}),"\n",(0,a.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-plain",metastring:"text",children:"mysql> select array_max([113, 11, 12]);\n+------------------------+\n| array_max([113,11,12]) |\n+------------------------+\n| 113                    |\n+------------------------+\n\nmysql> select array_max([11.33, 11.11, 12.324]);\n+---------------------------------+\n| array_max([11.33,11.11,12.324]) |\n+---------------------------------+\n| 12.324                          |\n+---------------------------------+\n\nmysql> select array_max([cast('2020-02-25 11:35:17' as datetime), cast('2019-08-25 17:07:10' as datetime), cast('2025-08-25 17:07:10' as datetime)]);\n+--------------------------------------------------------------------------------------------------------------------------------------+\n| array_max([CAST('2020-02-25 11:35:17' AS DATETIME),CAST('2019-08-25 17:07:10' AS DATETIME),CAST('2025-08-25 17:07:10' AS DATETIME)]) |\n+--------------------------------------------------------------------------------------------------------------------------------------+\n| 2025-08-25 17:07:10                                                                                                                  |\n+--------------------------------------------------------------------------------------------------------------------------------------+\n"})})]})}const d=function(e={}){const{wrapper:n}=Object.assign({},(0,s.ah)(),e.components);return n?(0,a.jsx)(n,Object.assign({},e,{children:(0,a.jsx)(u,e)})):u(e)}},11151:(e,n,r)=>{r.d(n,{Zo:()=>i,ah:()=>t});var a=r(67294);const s=a.createContext({});function t(e){const n=a.useContext(s);return a.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const c={};function i({components:e,children:n,disableParentContext:r}){let i;return i=r?"function"==typeof e?e({}):e||c:t(e),a.createElement(s.Provider,{value:i},n)}}}]);