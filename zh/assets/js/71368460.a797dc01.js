"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[25222],{81520:(r,n,e)=>{e.r(n),e.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>t,metadata:()=>c,toc:()=>o});var a=e(85893),s=e(11151);const t={},i="array_to_bitmap",c={id:"sql-reference/sql-functions/array-functions/array_to_bitmap",title:"array_to_bitmap",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.0/sql-reference/sql-functions/array-functions/array_to_bitmap.md",sourceDirName:"sql-reference/sql-functions/array-functions",slug:"/sql-reference/sql-functions/array-functions/array_to_bitmap",permalink:"/docusaurusv3/zh/docs/3.0/sql-reference/sql-functions/array-functions/array_to_bitmap",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/sql-reference/sql-functions/array-functions/array_to_bitmap.md",tags:[],version:"3.0",frontMatter:{},sidebar:"documentation",previous:{title:"array_sum",permalink:"/docusaurusv3/zh/docs/3.0/sql-reference/sql-functions/array-functions/array_sum"},next:{title:"arrays_overlap",permalink:"/docusaurusv3/zh/docs/3.0/sql-reference/sql-functions/array-functions/arrays_overlap"}},l={},o=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function d(r){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",ul:"ul",li:"li"},(0,s.ah)(),r.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"array_to_bitmap",children:"array_to_bitmap"}),"\n",(0,a.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,a.jsx)(n.p,{children:"\u5c06 array \u7c7b\u578b\u8f6c\u5316\u4e3a bitmap \u7c7b\u578b\u3002\u8be5\u51fd\u6570\u4ece 2.3 \u7248\u672c\u5f00\u59cb\u652f\u6301\u3002"}),"\n",(0,a.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-Haskell",children:"array_to_bitmap(array)\n"})}),"\n",(0,a.jsx)(n.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"array"}),": array \u5185\u7684\u5143\u7d20\u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u5305\u62ec INT\uff0cTINYINT\uff0cSMALLINT\u3002"]}),"\n",(0,a.jsx)(n.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,a.jsx)(n.p,{children:"\u8fd4\u56de BITMAP \u7c7b\u578b\u7684\u503c\u3002"}),"\n",(0,a.jsx)(n.h2,{id:"\u6ce8\u610f\u4e8b\u9879",children:"\u6ce8\u610f\u4e8b\u9879"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"\u5982\u679c\u8f93\u5165\u7684array\u4e3a\u975e\u6cd5\u6570\u636e\u7c7b\u578b\uff0c\u5982STRING\u3001DECIMAL\u7b49\uff0c\u5219\u8fd4\u56de\u62a5\u9519\u3002"}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"\u5982\u679c\u8f93\u5165\u7a7aarray\uff0c\u5219\u8fd4\u56de\u7a7abitmap\u3002"}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"\u5982\u679c\u8f93\u5165NULL\uff0c\u5219\u8fd4\u56deNULL\u3002"}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,a.jsxs)(n.p,{children:["\u793a\u4f8b1\uff1a\u8f93\u5165array\uff0c\u8f6c\u5316\u4e3abitmap\u3002\u6b64\u5904\u56e0\u4e3abitmap\u7c7b\u578b\u65e0\u6cd5\u663e\u793a\uff0c\u6545\u5d4c\u5957",(0,a.jsx)(n.code,{children:"bitmap_to_array"}),"\u4ee5\u65b9\u4fbf\u8bf4\u660e\u3002"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"MySQL > select bitmap_to_array(array_to_bitmap([1,2,3]));\n+-------------------------------------------+\n| bitmap_to_array(array_to_bitmap([1,2,3])) |\n+-------------------------------------------+\n| [1,2,3]                                   |\n+-------------------------------------------+\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u793a\u4f8b2\uff1a\u8f93\u5165\u7a7aarray\u3002"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"MySQL > select bitmap_to_array(array_to_bitmap([]));\n+--------------------------------------+\n| bitmap_to_array(array_to_bitmap([])) |\n+--------------------------------------+\n| []                                   |\n+--------------------------------------+\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u793a\u4f8b3\uff1a\u8f93\u5165NULL\u3002"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"MySQL > select array_to_bitmap(NULL);\n+-----------------------+\n| array_to_bitmap(NULL) |\n+-----------------------+\n| NULL                  |\n+-----------------------+\n"})})]})}const u=function(r={}){const{wrapper:n}=Object.assign({},(0,s.ah)(),r.components);return n?(0,a.jsx)(n,Object.assign({},r,{children:(0,a.jsx)(d,r)})):d(r)}},11151:(r,n,e)=>{e.d(n,{Zo:()=>c,ah:()=>t});var a=e(67294);const s=a.createContext({});function t(r){const n=a.useContext(s);return a.useMemo((()=>"function"==typeof r?r(n):{...n,...r}),[n,r])}const i={};function c({components:r,children:n,disableParentContext:e}){let c;return c=e?"function"==typeof r?r({}):r||i:t(r),a.createElement(s.Provider,{value:c},n)}}}]);