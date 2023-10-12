"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[60272],{78763:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var s=t(85893),i=t(11151);const r={},o="bitmap_xor",c={id:"sql-reference/sql-functions/bitmap-functions/bitmap_xor",title:"bitmap_xor",description:"Description",source:"@site/versioned_docs/version-3.0/sql-reference/sql-functions/bitmap-functions/bitmap_xor.md",sourceDirName:"sql-reference/sql-functions/bitmap-functions",slug:"/sql-reference/sql-functions/bitmap-functions/bitmap_xor",permalink:"/doc/docs/3.0/sql-reference/sql-functions/bitmap-functions/bitmap_xor",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/sql-reference/sql-functions/bitmap-functions/bitmap_xor.md",tags:[],version:"3.0",frontMatter:{},sidebar:"Chinese31",previous:{title:"bitmap_union_int",permalink:"/doc/docs/3.0/sql-reference/sql-functions/bitmap-functions/bitmap_union_int"},next:{title:"intersect_count",permalink:"/doc/docs/3.0/sql-reference/sql-functions/bitmap-functions/intersect_count"}},a={},l=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Examples",id:"examples",level:2},{value:"keyword",id:"keyword",level:2}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",pre:"pre"},(0,i.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"bitmap_xor",children:"bitmap_xor"}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["Calculates the set consisting elements unique to ",(0,s.jsx)(n.code,{children:"lhs"})," and ",(0,s.jsx)(n.code,{children:"rhs"}),". It is logically equivalent to ",(0,s.jsx)(n.code,{children:"bitmap_andnot(bitmap_or(lhs, rhs), bitmap_and(lhs, rhs))"})," (complementary set)."]}),"\n",(0,s.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Haskell",children:"bitmap_xor(BITMAP lhs, BITMAP rhs)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-plain",metastring:"text",children:"mysql> select bitmap_to_string(bitmap_xor(bitmap_from_string('1, 3'), bitmap_from_string('2'))) cnt;\n+------+\n|cnt   |\n+------+\n|1,2,3 |\n+------+\n"})}),"\n",(0,s.jsx)(n.h2,{id:"keyword",children:"keyword"}),"\n",(0,s.jsx)(n.p,{children:"BITMAP_XOR,  BITMAP"})]})}const p=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(d,e)})):d(e)}},11151:(e,n,t)=>{t.d(n,{Zo:()=>c,ah:()=>r});var s=t(67294);const i=s.createContext({});function r(e){const n=s.useContext(i);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const o={};function c({components:e,children:n,disableParentContext:t}){let c;return c=t?"function"==typeof e?e({}):e||o:r(e),s.createElement(i.Provider,{value:c},n)}}}]);