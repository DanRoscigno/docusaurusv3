"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[20160],{40343:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>c,metadata:()=>r,toc:()=>a});var t=i(85893),s=i(11151);const c={displayed_sidebar:"Chinese"},o="bitmap_union_int",r={id:"sql-reference/sql-functions/bitmap-functions/bitmap_union_int",title:"bitmap_union_int",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.5/sql-reference/sql-functions/bitmap-functions/bitmap_union_int.md",sourceDirName:"sql-reference/sql-functions/bitmap-functions",slug:"/sql-reference/sql-functions/bitmap-functions/bitmap_union_int",permalink:"/doc/zh/docs/2.5/sql-reference/sql-functions/bitmap-functions/bitmap_union_int",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-functions/bitmap-functions/bitmap_union_int.md",tags:[],version:"2.5",frontMatter:{displayed_sidebar:"Chinese"},sidebar:"Chinese",previous:{title:"bitmap_union_count",permalink:"/doc/zh/docs/2.5/sql-reference/sql-functions/bitmap-functions/bitmap_union_count"},next:{title:"bitmap_xor",permalink:"/doc/zh/docs/2.5/sql-reference/sql-functions/bitmap-functions/bitmap_xor"}},l={},a=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function u(n){const e=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",ul:"ul",li:"li"},(0,s.ah)(),n.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"bitmap_union_int",children:"bitmap_union_int"}),"\n",(0,t.jsx)(e.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,t.jsx)(e.p,{children:"\u805a\u5408\u51fd\u6570\uff0c\u8ba1\u7b97 TINYINT\uff0cSMALLINT \u548c INT \u7c7b\u578b\u7684\u5217\u4e2d\u4e0d\u540c\u503c\u7684\u4e2a\u6570\uff0c\u8fd4\u56de\u503c\u548c COUNT(DISTINCT expr) \u76f8\u540c\u3002"}),"\n",(0,t.jsx)(e.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-Haskell",children:"BITMAP_UNION_INT(expr)\n"})}),"\n",(0,t.jsx)(e.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"expr"}),"\uff1a\u5217\u8868\u8fbe\u5f0f\uff0c\u652f\u6301 TINYINT\uff0cSMALLINT \u548c INT \u7c7b\u578b\u7684\u5217\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,t.jsx)(e.p,{children:"\u8fd4\u56de\u503c\u7684\u6570\u636e\u7c7b\u578b\u4e3a BIGINT\u3002"}),"\n",(0,t.jsx)(e.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-Plaintext",children:"mysql> select bitmap_union_int(k1) from tbl1;\n+------------------------+\n| bitmap_union_int(`k1`) |\n+------------------------+\n|                      2 |\n+------------------------+\n"})})]})}const d=function(n={}){const{wrapper:e}=Object.assign({},(0,s.ah)(),n.components);return e?(0,t.jsx)(e,Object.assign({},n,{children:(0,t.jsx)(u,n)})):u(n)}},11151:(n,e,i)=>{i.d(e,{Zo:()=>r,ah:()=>c});var t=i(67294);const s=t.createContext({});function c(n){const e=t.useContext(s);return t.useMemo((()=>"function"==typeof n?n(e):{...e,...n}),[e,n])}const o={};function r({components:n,children:e,disableParentContext:i}){let r;return r=i?"function"==typeof n?n({}):n||o:c(n),t.createElement(s.Provider,{value:r},e)}}}]);