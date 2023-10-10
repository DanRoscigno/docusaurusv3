"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[3077],{7495:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>a,contentTitle:()=>c,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var s=t(85893),i=t(11151);const r={},c="bitmap_xor",o={id:"sql-reference/sql-functions/bitmap-functions/bitmap_xor",title:"bitmap_xor",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.0/sql-reference/sql-functions/bitmap-functions/bitmap_xor.md",sourceDirName:"sql-reference/sql-functions/bitmap-functions",slug:"/sql-reference/sql-functions/bitmap-functions/bitmap_xor",permalink:"/docusaurusv3/zh/docs/3.0/sql-reference/sql-functions/bitmap-functions/bitmap_xor",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/sql-reference/sql-functions/bitmap-functions/bitmap_xor.md",tags:[],version:"3.0",frontMatter:{},sidebar:"documentation",previous:{title:"bitmap_union_int",permalink:"/docusaurusv3/zh/docs/3.0/sql-reference/sql-functions/bitmap-functions/bitmap_union_int"},next:{title:"intersect_count",permalink:"/docusaurusv3/zh/docs/3.0/sql-reference/sql-functions/bitmap-functions/intersect_count"}},a={},l=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function d(n){const e=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",pre:"pre"},(0,i.ah)(),n.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"bitmap_xor",children:"bitmap_xor"}),"\n",(0,s.jsx)(e.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,s.jsxs)(e.p,{children:["\u8ba1\u7b97\u4e24\u4e2a Bitmap \u4e2d\u4e0d\u91cd\u590d\u5143\u7d20\u6240\u6784\u6210\u7684\u96c6\u5408\uff0c\u903b\u8f91\u4e0a\u7b49\u4ef7\u4e8e ",(0,s.jsx)(e.code,{children:"bitmap_andnot(bitmap_or(lhs, rhs), bitmap_and(lhs, rhs))"}),"(\u8865\u96c6)\u3002"]}),"\n",(0,s.jsx)(e.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-Haskell",children:"bitmap_xor(lhs, rhs)\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"lhs"}),": \u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u4e3a BITMAP\u3002"]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"rhs"}),": \u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u4e3a BITMAP\u3002"]}),"\n",(0,s.jsx)(e.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,s.jsx)(e.p,{children:"\u8fd4\u56de\u503c\u7684\u6570\u636e\u7c7b\u578b\u4e3a BITMAP\u3002"}),"\n",(0,s.jsx)(e.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-plain",metastring:"text",children:"mysql> select bitmap_to_string(bitmap_xor(bitmap_from_string('1, 3'), bitmap_from_string('2'))) cnt;\n+------+\n|cnt   |\n+------+\n|1,2,3 |\n+------+\n"})})]})}const u=function(n={}){const{wrapper:e}=Object.assign({},(0,i.ah)(),n.components);return e?(0,s.jsx)(e,Object.assign({},n,{children:(0,s.jsx)(d,n)})):d(n)}},11151:(n,e,t)=>{t.d(e,{Zo:()=>o,ah:()=>r});var s=t(67294);const i=s.createContext({});function r(n){const e=s.useContext(i);return s.useMemo((()=>"function"==typeof n?n(e):{...e,...n}),[e,n])}const c={};function o({components:n,children:e,disableParentContext:t}){let o;return o=t?"function"==typeof n?n({}):n||c:r(n),s.createElement(i.Provider,{value:o},e)}}}]);