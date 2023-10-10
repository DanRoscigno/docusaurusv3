"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[6216],{85808:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>r,contentTitle:()=>a,default:()=>d,frontMatter:()=>c,metadata:()=>o,toc:()=>l});var s=t(85893),i=t(11151);const c={},a="bitmap_contains",o={id:"sql-reference/sql-functions/bitmap-functions/bitmap_contains",title:"bitmap_contains",description:"Description",source:"@site/versioned_docs/version-3.1/sql-reference/sql-functions/bitmap-functions/bitmap_contains.md",sourceDirName:"sql-reference/sql-functions/bitmap-functions",slug:"/sql-reference/sql-functions/bitmap-functions/bitmap_contains",permalink:"/doc/docs/sql-reference/sql-functions/bitmap-functions/bitmap_contains",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-functions/bitmap-functions/bitmap_contains.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"bitmap_andnot",permalink:"/doc/docs/sql-reference/sql-functions/bitmap-functions/bitmap_andnot"},next:{title:"bitmap_count",permalink:"/doc/docs/sql-reference/sql-functions/bitmap-functions/bitmap_count"}},r={},l=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Examples",id:"examples",level:2},{value:"keyword",id:"keyword",level:2}];function p(n){const e=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code"},(0,i.ah)(),n.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"bitmap_contains",children:"bitmap_contains"}),"\n",(0,s.jsx)(e.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(e.p,{children:"Calculates whether the input value is in the bitmap column, and returns a Boolean value."}),"\n",(0,s.jsx)(e.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-Haskell",children:"B00LEAN BITMAP_CONTAINS(BITMAP bitmap, BIGINT input)\n"})}),"\n",(0,s.jsx)(e.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-Plain",metastring:"Text",children:"MySQL > select bitmap_contains(to_bitmap(1),2) cnt;\n+------+\n| cnt  |\n+------+\n|    0 |\n+------+\n\nMySQL > select bitmap_contains(to_bitmap(1),1) cnt;\n+------+\n| cnt  |\n+------+\n|    1 |\n+------+\n"})}),"\n",(0,s.jsx)(e.h2,{id:"keyword",children:"keyword"}),"\n",(0,s.jsx)(e.p,{children:"BITMAP_CONTAINS,BITMAP"})]})}const d=function(n={}){const{wrapper:e}=Object.assign({},(0,i.ah)(),n.components);return e?(0,s.jsx)(e,Object.assign({},n,{children:(0,s.jsx)(p,n)})):p(n)}},11151:(n,e,t)=>{t.d(e,{Zo:()=>o,ah:()=>c});var s=t(67294);const i=s.createContext({});function c(n){const e=s.useContext(i);return s.useMemo((()=>"function"==typeof n?n(e):{...e,...n}),[e,n])}const a={};function o({components:n,children:e,disableParentContext:t}){let o;return o=t?"function"==typeof n?n({}):n||a:c(n),s.createElement(i.Provider,{value:o},e)}}}]);