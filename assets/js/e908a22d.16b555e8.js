"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[68062],{3859:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>r,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>o});var i=t(85893),s=t(11151);const a={},r="bitmap_max",c={id:"sql-reference/sql-functions/bitmap-functions/bitmap_max",title:"bitmap_max",description:"Description",source:"@site/versioned_docs/version-3.1/sql-reference/sql-functions/bitmap-functions/bitmap_max.md",sourceDirName:"sql-reference/sql-functions/bitmap-functions",slug:"/sql-reference/sql-functions/bitmap-functions/bitmap_max",permalink:"/doc/docs/sql-reference/sql-functions/bitmap-functions/bitmap_max",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-functions/bitmap-functions/bitmap_max.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"bitmap_intersect",permalink:"/doc/docs/sql-reference/sql-functions/bitmap-functions/bitmap_intersect"},next:{title:"bitmap_min",permalink:"/doc/docs/sql-reference/sql-functions/bitmap-functions/bitmap_min"}},m={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function l(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",pre:"pre",a:"a"},(0,s.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"bitmap_max",children:"bitmap_max"}),"\n",(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["Obtains the maximum value of a bitmap. If the bitmap is ",(0,i.jsx)(n.code,{children:"NULL"}),", this function returns ",(0,i.jsx)(n.code,{children:"NULL"}),". If the bitmap is empty, this function returns ",(0,i.jsx)(n.code,{children:"NULL"})," by default."]}),"\n",(0,i.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Haskell",children:"bitmap_max(bitmap)\n"})}),"\n",(0,i.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"bitmap"}),": the bitmap whose maximum value you want to obtain. Only the BITMAP data type is supported. You can specify a bitmap that you construct by using functions such as ",(0,i.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-functions/bitmap-functions/bitmap_from_string",children:"bitmap_from_string"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"return-value",children:"Return value"}),"\n",(0,i.jsx)(n.p,{children:"Returns a value of the LARGEINT data type."}),"\n",(0,i.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Plain",children:'MySQL > select bitmap_max(bitmap_from_string("0, 1, 2, 3"));\n+-------------------------------------------------+\n|    bitmap_max(bitmap_from_string("0, 1, 2, 3")) |\n+-------------------------------------------------+\n|                         3                       |\n+-------------------------------------------------+\n\nMySQL > select bitmap_max(bitmap_from_string("-1, 0, 1, 2"));\n+-------------------------------------------------+\n|   bitmap_max(bitmap_from_string("-1, 0, 1, 2")) |\n+-------------------------------------------------+\n|                      NULL                       |\n+-------------------------------------------------+\n\nMySQL > select bitmap_max(bitmap_empty());\n+----------------------------------+\n|       bitmap_max(bitmap_empty()) |\n+----------------------------------+\n|                      NULL        |\n+----------------------------------+\n\nmysql> select bitmap_max(bitmap_from_string("1, 16501189037412846863"));\n+--------------------------------------------------------------+\n| bitmap_max(bitmap_from_string(\'1, 16501189037412846863\')) |\n+--------------------------------------------------------------+\n| 16501189037412846863                                         |\n+--------------------------------------------------------------+\n1 row in set (0.02 sec)\n'})})]})}const p=function(e={}){const{wrapper:n}=Object.assign({},(0,s.ah)(),e.components);return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(l,e)})):l(e)}},11151:(e,n,t)=>{t.d(n,{Zo:()=>c,ah:()=>a});var i=t(67294);const s=i.createContext({});function a(e){const n=i.useContext(s);return i.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const r={};function c({components:e,children:n,disableParentContext:t}){let c;return c=t?"function"==typeof e?e({}):e||r:a(e),i.createElement(s.Provider,{value:c},n)}}}]);