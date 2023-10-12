"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[77386],{85435:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>p,frontMatter:()=>c,metadata:()=>o,toc:()=>l});var s=t(85893),i=t(11151);const c={},r="bitmap_or",o={id:"sql-reference/sql-functions/bitmap-functions/bitmap_or",title:"bitmap_or",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.1/sql-reference/sql-functions/bitmap-functions/bitmap_or.md",sourceDirName:"sql-reference/sql-functions/bitmap-functions",slug:"/sql-reference/sql-functions/bitmap-functions/bitmap_or",permalink:"/doc/zh/docs/sql-reference/sql-functions/bitmap-functions/bitmap_or",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-functions/bitmap-functions/bitmap_or.md",tags:[],version:"3.1",frontMatter:{},sidebar:"Chinese31",previous:{title:"bitmap_min",permalink:"/doc/zh/docs/sql-reference/sql-functions/bitmap-functions/bitmap_min"},next:{title:"bitmap_remove",permalink:"/doc/zh/docs/sql-reference/sql-functions/bitmap-functions/bitmap_remove"}},a={},l=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code"},(0,i.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"bitmap_or",children:"bitmap_or"}),"\n",(0,s.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,s.jsx)(n.p,{children:"\u8ba1\u7b97\u4e24\u4e2a\u8f93\u5165\u7684 bitmap \u7684\u5e76\u96c6\uff0c\u5e76\u8fd4\u56de\u65b0\u7684 bitmap\u3002\u5e76\u96c6\u6307\u5c06\u4e24\u4e2a\u96c6\u5408\u4e2d\u7684\u6240\u6709\u5143\u7d20\u5408\u5e76\u5728\u4e00\u8d77\u540e\u7ec4\u6210\u7684\u96c6\u5408\u3002\u91cd\u590d\u5143\u7d20\u53ea\u8ba1\u5165\u4e00\u6b21\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Haskell",children:"BITMAP_OR(lhs, rhs)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"lhs"}),": \u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u4e3a BITMAP\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"rhs"}),": \u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u4e3a BITMAP\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,s.jsx)(n.p,{children:"\u8fd4\u56de\u503c\u7684\u6570\u636e\u7c7b\u578b\u4e3a BITMAP\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,s.jsx)(n.p,{children:"\u8ba1\u7b97\u4e24\u4e2a bitmap \u7684\u5e76\u96c6\uff0c\u5e76\u8fd4\u56de\u5e76\u96c6\u4e2d\u5143\u7d20\u4e2a\u6570\u7684\u603b\u548c\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"select bitmap_count(bitmap_or(to_bitmap(1), to_bitmap(2))) cnt;\n+------+\n| cnt  |\n+------+\n|    2 |\n+------+\n\nselect bitmap_count(bitmap_or(to_bitmap(1), to_bitmap(1))) cnt;\n+------+\n| cnt  |\n+------+\n|    1 |\n+------+\n"})})]})}const p=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(d,e)})):d(e)}},11151:(e,n,t)=>{t.d(n,{Zo:()=>o,ah:()=>c});var s=t(67294);const i=s.createContext({});function c(e){const n=s.useContext(i);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const r={};function o({components:e,children:n,disableParentContext:t}){let o;return o=t?"function"==typeof e?e({}):e||r:c(e),s.createElement(i.Provider,{value:o},n)}}}]);