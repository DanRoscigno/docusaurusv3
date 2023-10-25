"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[8012],{57703:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>a});var t=s(85893),i=s(11151);const r={displayed_sidebar:"Chinese"},c="bitmap_xor",o={id:"sql-reference/sql-functions/bitmap-functions/bitmap_xor",title:"bitmap_xor",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.3/sql-reference/sql-functions/bitmap-functions/bitmap_xor.md",sourceDirName:"sql-reference/sql-functions/bitmap-functions",slug:"/sql-reference/sql-functions/bitmap-functions/bitmap_xor",permalink:"/zh/docs/2.3/sql-reference/sql-functions/bitmap-functions/bitmap_xor",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-functions/bitmap-functions/bitmap_xor.md",tags:[],version:"2.3",frontMatter:{displayed_sidebar:"Chinese"},sidebar:"Chinese",previous:{title:"bitmap_union_int",permalink:"/zh/docs/2.3/sql-reference/sql-functions/bitmap-functions/bitmap_union_int"},next:{title:"intersect_count",permalink:"/zh/docs/2.3/sql-reference/sql-functions/bitmap-functions/intersect_count"}},l={},a=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function d(n){const e=Object.assign({h1:"h1",h2:"h2",p:"p",strong:"strong",code:"code",pre:"pre"},(0,i.ah)(),n.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"bitmap_xor",children:"bitmap_xor"}),"\n",(0,t.jsx)(e.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,t.jsxs)(e.p,{children:["\u8ba1\u7b97\u5f97\u5230 ",(0,t.jsx)(e.strong,{children:"lhs"})," \u72ec\u6709\u6216\u8005 ",(0,t.jsx)(e.strong,{children:"rhs"})," \u72ec\u6709\u7684\u5143\u7d20\u6240\u6784\u6210\u7684\u96c6\u5408\uff0c\u903b\u8f91\u4e0a\u7b49\u4ef7\u4e8e ",(0,t.jsx)(e.code,{children:"bitmap_andnot(bitmap_or(lhs, rhs), bitmap_and(lhs, rhs))"}),"(\u8865\u96c6)\u3002"]}),"\n",(0,t.jsx)(e.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-Haskell",children:"bitmap_xor(lhs, rhs)\n"})}),"\n",(0,t.jsx)(e.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"lhs"}),": \u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u4e3a BITMAP\u3002"]}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"rhs"}),": \u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u4e3a BITMAP\u3002"]}),"\n",(0,t.jsx)(e.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,t.jsx)(e.p,{children:"\u8fd4\u56de\u503c\u7684\u6570\u636e\u7c7b\u578b\u4e3a BITMAP\u3002"}),"\n",(0,t.jsx)(e.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-plain",metastring:"text",children:"mysql> select bitmap_to_string(bitmap_xor(bitmap_from_string('1, 3'), bitmap_from_string('2'))) cnt;\n+------+\n|cnt   |\n+------+\n|1,2,3 |\n+------+\n"})})]})}const h=function(n={}){const{wrapper:e}=Object.assign({},(0,i.ah)(),n.components);return e?(0,t.jsx)(e,Object.assign({},n,{children:(0,t.jsx)(d,n)})):d(n)}},11151:(n,e,s)=>{s.d(e,{Zo:()=>o,ah:()=>r});var t=s(67294);const i=t.createContext({});function r(n){const e=t.useContext(i);return t.useMemo((()=>"function"==typeof n?n(e):{...e,...n}),[e,n])}const c={};function o({components:n,children:e,disableParentContext:s}){let o;return o=s?"function"==typeof n?n({}):n||c:r(n),t.createElement(i.Provider,{value:o},e)}}}]);