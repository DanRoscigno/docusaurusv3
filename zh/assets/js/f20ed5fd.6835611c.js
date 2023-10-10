"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[30298],{60482:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>p,frontMatter:()=>c,metadata:()=>r,toc:()=>l});var s=e(85893),i=e(11151);const c={},a="bitmap_andnot",r={id:"sql-reference/sql-functions/bitmap-functions/bitmap_andnot",title:"bitmap_andnot",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.1/sql-reference/sql-functions/bitmap-functions/bitmap_andnot.md",sourceDirName:"sql-reference/sql-functions/bitmap-functions",slug:"/sql-reference/sql-functions/bitmap-functions/bitmap_andnot",permalink:"/doc/zh/docs/sql-reference/sql-functions/bitmap-functions/bitmap_andnot",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-functions/bitmap-functions/bitmap_andnot.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"bitmap_and",permalink:"/doc/zh/docs/sql-reference/sql-functions/bitmap-functions/bitmap_and"},next:{title:"bitmap_contains",permalink:"/doc/zh/docs/sql-reference/sql-functions/bitmap-functions/bitmap_contains"}},o={},l=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function d(n){const t=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code"},(0,i.ah)(),n.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"bitmap_andnot",children:"bitmap_andnot"}),"\n",(0,s.jsx)(t.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,s.jsx)(t.p,{children:"\u8ba1\u7b97\u4e24\u4e2a\u8f93\u5165\u7684 bitmap \u7684\u5dee\u96c6\u3002\u5dee\u96c6\u662f\u6307\u5305\u542b\u6240\u6709\u5b58\u5728\u4e8e\u7b2c\u4e00\u4e2a\u96c6\u5408\u4e14\u4e0d\u5b58\u5728\u4e8e\u7b2c\u4e8c\u4e2a\u96c6\u5408\u7684\u5143\u7d20\u7684\u96c6\u5408\u3002"}),"\n",(0,s.jsx)(t.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-Haskell",children:"bitmap_andnot(lhs, rhs)\n"})}),"\n",(0,s.jsx)(t.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"lhs"}),": \u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u4e3a BITMAP\u3002"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"rhs"}),": \u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u4e3a BITMAP\u3002"]}),"\n",(0,s.jsx)(t.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,s.jsx)(t.p,{children:"\u8fd4\u56de\u503c\u7684\u6570\u636e\u7c7b\u578b\u4e3a BITMAP\u3002"}),"\n",(0,s.jsx)(t.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-plain",metastring:"text",children:"select bitmap_to_string(bitmap_andnot(bitmap_from_string('1, 3'), bitmap_from_string('2'))) cnt;\n+------+\n|cnt   |\n+------+\n|1,3   |\n+------+\n\nselect bitmap_to_string(bitmap_andnot(bitmap_from_string('1,3,5'), bitmap_from_string('1'))) cnt;\n+------+\n|cnt   |\n+------+\n|3,5   |\n+------+\n"})})]})}const p=function(n={}){const{wrapper:t}=Object.assign({},(0,i.ah)(),n.components);return t?(0,s.jsx)(t,Object.assign({},n,{children:(0,s.jsx)(d,n)})):d(n)}},11151:(n,t,e)=>{e.d(t,{Zo:()=>r,ah:()=>c});var s=e(67294);const i=s.createContext({});function c(n){const t=s.useContext(i);return s.useMemo((()=>"function"==typeof n?n(t):{...t,...n}),[t,n])}const a={};function r({components:n,children:t,disableParentContext:e}){let r;return r=e?"function"==typeof n?n({}):n||a:c(n),s.createElement(i.Provider,{value:r},t)}}}]);