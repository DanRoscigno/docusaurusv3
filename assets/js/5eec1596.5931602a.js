"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[47877],{52003:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>r,contentTitle:()=>a,default:()=>p,frontMatter:()=>c,metadata:()=>o,toc:()=>l});var i=t(85893),s=t(11151);const c={displayed_sidebar:"English"},a="bitmap_contains",o={id:"sql-reference/sql-functions/bitmap-functions/bitmap_contains",title:"bitmap_contains",description:"description",source:"@site/versioned_docs/version-2.1/sql-reference/sql-functions/bitmap-functions/bitmap_contains.md",sourceDirName:"sql-reference/sql-functions/bitmap-functions",slug:"/sql-reference/sql-functions/bitmap-functions/bitmap_contains",permalink:"/docs/2.1/sql-reference/sql-functions/bitmap-functions/bitmap_contains",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-functions/bitmap-functions/bitmap_contains.md",tags:[],version:"2.1",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"bitmap_andnot",permalink:"/docs/2.1/sql-reference/sql-functions/bitmap-functions/bitmap_andnot"},next:{title:"bitmap_empty",permalink:"/docs/2.1/sql-reference/sql-functions/bitmap-functions/bitmap_empty"}},r={},l=[{value:"description",id:"description",level:2},{value:"Syntax",id:"syntax",level:3},{value:"example",id:"example",level:2},{value:"keyword",id:"keyword",level:2}];function d(n){const e=Object.assign({h1:"h1",h2:"h2",h3:"h3",p:"p",code:"code",pre:"pre"},(0,s.ah)(),n.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"bitmap_contains",children:"bitmap_contains"}),"\n",(0,i.jsx)(e.h2,{id:"description",children:"description"}),"\n",(0,i.jsx)(e.h3,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.code,{children:"B00LEAN BITMAP_CONTAINS(BITMAP bitmap, BIGINT input)"})}),"\n",(0,i.jsx)(e.p,{children:"Calculate whether the input value is in the bitmap column, and return a Boolean value"}),"\n",(0,i.jsx)(e.h2,{id:"example",children:"example"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-Plain",metastring:"Text",children:"MySQL > select bitmap_contains(to_bitmap(1),2) cnt;\n+------+\n| cnt  |\n+------+\n|    0 |\n+------+\n\nMySQL > select bitmap_contains(to_bitmap(1),1) cnt;\n+------+\n| cnt  |\n+------+\n|    1 |\n+------+\n"})}),"\n",(0,i.jsx)(e.h2,{id:"keyword",children:"keyword"}),"\n",(0,i.jsx)(e.p,{children:"BITMAP_CONTAINS,BITMAP"})]})}const p=function(n={}){const{wrapper:e}=Object.assign({},(0,s.ah)(),n.components);return e?(0,i.jsx)(e,Object.assign({},n,{children:(0,i.jsx)(d,n)})):d(n)}},11151:(n,e,t)=>{t.d(e,{Zo:()=>o,ah:()=>c});var i=t(67294);const s=i.createContext({});function c(n){const e=i.useContext(s);return i.useMemo((()=>"function"==typeof n?n(e):{...e,...n}),[e,n])}const a={};function o({components:n,children:e,disableParentContext:t}){let o;return o=t?"function"==typeof n?n({}):n||a:c(n),i.createElement(s.Provider,{value:o},e)}}}]);