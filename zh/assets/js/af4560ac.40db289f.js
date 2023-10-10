"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[17431],{59858:(n,e,l)=>{l.r(e),l.d(e,{assets:()=>i,contentTitle:()=>r,default:()=>o,frontMatter:()=>a,metadata:()=>t,toc:()=>d});var s=l(85893),c=l(11151);const a={},r="all_match",t={id:"sql-reference/sql-functions/array-functions/all_match",title:"all_match",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.0/sql-reference/sql-functions/array-functions/all_match.md",sourceDirName:"sql-reference/sql-functions/array-functions",slug:"/sql-reference/sql-functions/array-functions/all_match",permalink:"/docusaurusv3/zh/docs/3.0/sql-reference/sql-functions/array-functions/all_match",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/sql-reference/sql-functions/array-functions/all_match.md",tags:[],version:"3.0",frontMatter:{},sidebar:"documentation",previous:{title:"window_funnel",permalink:"/docusaurusv3/zh/docs/3.0/sql-reference/sql-functions/aggregate-functions/window_funnel"},next:{title:"any_match",permalink:"/docusaurusv3/zh/docs/3.0/sql-reference/sql-functions/array-functions/any_match"}},i={},d=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u4f7f\u7528\u8bf4\u660e",id:"\u4f7f\u7528\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function h(n){const e=Object.assign({h1:"h1",h2:"h2",p:"p",ul:"ul",li:"li",pre:"pre",code:"code",a:"a"},(0,c.ah)(),n.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"all_match",children:"all_match"}),"\n",(0,s.jsx)(e.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,s.jsx)(e.p,{children:"\u5224\u65ad\u6570\u7ec4\u4e2d\u7684\u6240\u6709\u5143\u7d20\u662f\u5426\u90fd\u5339\u914d\u8c13\u8bcd\u4e2d (predicate) \u6307\u5b9a\u7684\u6761\u4ef6\u3002"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u5982\u679c\u6240\u6709\u5143\u7d20\u90fd\u5339\u914d\u6216\u6570\u7ec4\u4e3a\u7a7a\uff0c\u5219\u8fd4\u56de true (1)\u3002"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u5982\u679c\u6709\u4e00\u4e2a\u6216\u591a\u4e2a\u5143\u7d20\u4e0d\u5339\u914d\uff0c\u5219\u8fd4\u56de false (0)\u3002"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u5982\u679c\u6570\u7ec4\u4e2d\u6709\u5143\u7d20\u4e3a NULL\uff0c\u800c\u5176\u4ed6\u5143\u7d20\u90fd\u6ee1\u8db3\u6761\u4ef6\uff0c\u5219\u8fd4\u56de NULL\u3002"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"\u8be5\u51fd\u6570\u4ece 3.0.6 \u7248\u672c\u5f00\u59cb\u652f\u6301\u3002"}),"\n",(0,s.jsx)(e.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-Haskell",children:"all_match(lambda_function, arr1, arr2...)\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u5224\u65ad\u6570\u7ec4\u4e2d\u7684\u6240\u6709\u5143\u7d20\u662f\u5426\u90fd\u5339\u914d Lambda \u8868\u8fbe\u5f0f\u4e2d\u6307\u5b9a\u7684\u6761\u4ef6\u3002"}),"\n",(0,s.jsx)(e.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"arr"}),": \u8fdb\u884c\u5224\u65ad\u7684\u6570\u7ec4\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"lambda_function"}),": \u4f5c\u4e3a\u5339\u914d\u6761\u4ef6\u7684 Lambda \u8868\u8fbe\u5f0f\u3002"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,s.jsx)(e.p,{children:"\u8fd4\u56de BOOLEAN \u7c7b\u578b\u7684\u503c\u3002"}),"\n",(0,s.jsx)(e.h2,{id:"\u4f7f\u7528\u8bf4\u660e",children:"\u4f7f\u7528\u8bf4\u660e"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\u5173\u4e8e Lambda \u8868\u8fbe\u5f0f\u7684\u4f7f\u7528\u6ce8\u610f\u4e8b\u9879\uff0c\u53c2\u89c1 ",(0,s.jsx)(e.a,{href:"/docusaurusv3/zh/docs/3.0/sql-reference/sql-functions/array-functions/array_map",children:"array_map()"}),"\u3002"]}),"\n",(0,s.jsx)(e.li,{children:"\u5982\u679c\u8f93\u5165\u7684\u6570\u7ec4\u4e3a NULL \u6216\u8005 Lambda \u8868\u8fbe\u5f0f\u7684\u7ed3\u679c\u4e3a NULL\uff0c\u5219\u8fd4\u56de NULL\u3002"}),"\n",(0,s.jsxs)(e.li,{children:["\u5982\u679c\u7b2c\u4e00\u4e2a\u6570\u7ec4\u4e3a\u7a7a\uff0c\u5219\u8fd4\u56de ",(0,s.jsx)(e.code,{children:"true"}),"\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:["\u5982\u679c\u8981\u5c06\u8be5\u51fd\u6570\u5e94\u7528\u5728 MAP \u4e0a\uff0c\u53ef\u4ee5\u5c06 ",(0,s.jsx)(e.code,{children:"all_match((k,v)->k>v,map)"})," \u6539\u5199\u4e3a ",(0,s.jsx)(e.code,{children:"all_match(map_values(transform_values((k,v)->k>v, map)))"}),"\u3002\u4f8b\u5982\uff0c",(0,s.jsx)(e.code,{children:"select all_match(map_values(transform_values((k,v)->k>v, map{2:1})));"})," \u8fd4\u56de 1\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,s.jsxs)(e.p,{children:["\u5224\u65ad\u6570\u7ec4 ",(0,s.jsx)(e.code,{children:"x"})," \u4e2d\u7684\u5143\u7d20\u662f\u5426\u90fd\u5c0f\u4e8e\u6570\u7ec4 ",(0,s.jsx)(e.code,{children:"y"})," \u4e2d\u7684\u5143\u7d20\u3002"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-Plain",children:"select all_match((x,y) -> x < y, [1,2,-8], [4,5,6]);\n+---------------------------------------------------+\n| all_match((x, y) -> x < y, [1, 2, -8], [4, 5, 6]) |\n+---------------------------------------------------+\n|                                                 1 |\n+---------------------------------------------------+\n\nselect all_match((x,y) -> x < y, [1,2,null], [4,5,6]);\n+-----------------------------------------------------+\n| all_match((x, y) -> x < y, [1, 2, NULL], [4, 5, 6]) |\n+-----------------------------------------------------+\n|                                                NULL |\n+-----------------------------------------------------+\n\nselect all_match((x,y) -> x < y, [1,2,8], [4,5,6]);\n+--------------------------------------------------+\n| all_match((x, y) -> x < y, [1, 2, 8], [4, 5, 6]) |\n+--------------------------------------------------+\n|                                                0 |\n+--------------------------------------------------+\n\nselect all_match((x,y) -> x < y, [], []);\n+------------------------------------+\n| all_match((x, y) -> x < y, [], []) |\n+------------------------------------+\n|                                  1 |\n+------------------------------------+\n\nselect all_match((x,y) -> x < y, null, [4,5,6]);\n+---------------------------------------------+\n| all_match((x, y) -> x < y, NULL, [4, 5, 6]) |\n+---------------------------------------------+\n|                                        NULL |\n+---------------------------------------------+\n"})})]})}const o=function(n={}){const{wrapper:e}=Object.assign({},(0,c.ah)(),n.components);return e?(0,s.jsx)(e,Object.assign({},n,{children:(0,s.jsx)(h,n)})):h(n)}},11151:(n,e,l)=>{l.d(e,{Zo:()=>t,ah:()=>a});var s=l(67294);const c=s.createContext({});function a(n){const e=s.useContext(c);return s.useMemo((()=>"function"==typeof n?n(e):{...e,...n}),[e,n])}const r={};function t({components:n,children:e,disableParentContext:l}){let t;return t=l?"function"==typeof n?n({}):n||r:a(n),s.createElement(c.Provider,{value:t},e)}}}]);