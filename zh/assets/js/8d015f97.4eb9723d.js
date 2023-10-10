"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[98767],{69345:(n,r,e)=>{e.r(r),e.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>o});var a=e(85893),t=e(11151);const s={},i="array_to_bitmap",c={id:"sql-reference/sql-functions/array-functions/array_to_bitmap",title:"array_to_bitmap",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.1/sql-reference/sql-functions/array-functions/array_to_bitmap.md",sourceDirName:"sql-reference/sql-functions/array-functions",slug:"/sql-reference/sql-functions/array-functions/array_to_bitmap",permalink:"/doc/zh/docs/sql-reference/sql-functions/array-functions/array_to_bitmap",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-functions/array-functions/array_to_bitmap.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"array_sum",permalink:"/doc/zh/docs/sql-reference/sql-functions/array-functions/array_sum"},next:{title:"arrays_overlap",permalink:"/doc/zh/docs/sql-reference/sql-functions/array-functions/arrays_overlap"}},l={},o=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function d(n){const r=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",ul:"ul",li:"li"},(0,t.ah)(),n.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.h1,{id:"array_to_bitmap",children:"array_to_bitmap"}),"\n",(0,a.jsx)(r.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,a.jsx)(r.p,{children:"\u5c06 array \u7c7b\u578b\u8f6c\u5316\u4e3a bitmap \u7c7b\u578b\u3002\u8be5\u51fd\u6570\u4ece 2.3 \u7248\u672c\u5f00\u59cb\u652f\u6301\u3002"}),"\n",(0,a.jsx)(r.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-Haskell",children:"array_to_bitmap(array)\n"})}),"\n",(0,a.jsx)(r.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.code,{children:"array"}),": array \u5185\u7684\u5143\u7d20\u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u5305\u62ec INT\uff0cTINYINT\uff0cSMALLINT\u3002"]}),"\n",(0,a.jsx)(r.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,a.jsx)(r.p,{children:"\u8fd4\u56de BITMAP \u7c7b\u578b\u7684\u503c\u3002"}),"\n",(0,a.jsx)(r.h2,{id:"\u6ce8\u610f\u4e8b\u9879",children:"\u6ce8\u610f\u4e8b\u9879"}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsxs)(r.li,{children:["\n",(0,a.jsx)(r.p,{children:"\u5982\u679c\u8f93\u5165\u7684array\u4e3a\u975e\u6cd5\u6570\u636e\u7c7b\u578b\uff0c\u5982STRING\u3001DECIMAL\u7b49\uff0c\u5219\u8fd4\u56de\u62a5\u9519\u3002"}),"\n"]}),"\n",(0,a.jsxs)(r.li,{children:["\n",(0,a.jsx)(r.p,{children:"\u5982\u679c\u8f93\u5165\u7a7aarray\uff0c\u5219\u8fd4\u56de\u7a7abitmap\u3002"}),"\n"]}),"\n",(0,a.jsxs)(r.li,{children:["\n",(0,a.jsx)(r.p,{children:"\u5982\u679c\u8f93\u5165NULL\uff0c\u5219\u8fd4\u56deNULL\u3002"}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(r.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,a.jsxs)(r.p,{children:["\u793a\u4f8b1\uff1a\u8f93\u5165array\uff0c\u8f6c\u5316\u4e3abitmap\u3002\u6b64\u5904\u56e0\u4e3abitmap\u7c7b\u578b\u65e0\u6cd5\u663e\u793a\uff0c\u6545\u5d4c\u5957",(0,a.jsx)(r.code,{children:"bitmap_to_array"}),"\u4ee5\u65b9\u4fbf\u8bf4\u660e\u3002"]}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-Plain",metastring:"Text",children:"MySQL > select bitmap_to_array(array_to_bitmap([1,2,3]));\n+-------------------------------------------+\n| bitmap_to_array(array_to_bitmap([1,2,3])) |\n+-------------------------------------------+\n| [1,2,3]                                   |\n+-------------------------------------------+\n"})}),"\n",(0,a.jsx)(r.p,{children:"\u793a\u4f8b2\uff1a\u8f93\u5165\u7a7aarray\u3002"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-Plain",metastring:"Text",children:"MySQL > select bitmap_to_array(array_to_bitmap([]));\n+--------------------------------------+\n| bitmap_to_array(array_to_bitmap([])) |\n+--------------------------------------+\n| []                                   |\n+--------------------------------------+\n"})}),"\n",(0,a.jsx)(r.p,{children:"\u793a\u4f8b3\uff1a\u8f93\u5165NULL\u3002"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-Plain",metastring:"Text",children:"MySQL > select array_to_bitmap(NULL);\n+-----------------------+\n| array_to_bitmap(NULL) |\n+-----------------------+\n| NULL                  |\n+-----------------------+\n"})})]})}const p=function(n={}){const{wrapper:r}=Object.assign({},(0,t.ah)(),n.components);return r?(0,a.jsx)(r,Object.assign({},n,{children:(0,a.jsx)(d,n)})):d(n)}},11151:(n,r,e)=>{e.d(r,{Zo:()=>c,ah:()=>s});var a=e(67294);const t=a.createContext({});function s(n){const r=a.useContext(t);return a.useMemo((()=>"function"==typeof n?n(r):{...r,...n}),[r,n])}const i={};function c({components:n,children:r,disableParentContext:e}){let c;return c=e?"function"==typeof n?n({}):n||i:s(n),a.createElement(t.Provider,{value:c},r)}}}]);