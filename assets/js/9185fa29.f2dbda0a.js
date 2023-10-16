"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[16513],{4062:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>m,contentTitle:()=>r,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>o});var i=t(85893),s=t(11151);const a={displayed_sidebar:"English"},r="bitmap_min",c={id:"sql-reference/sql-functions/bitmap-functions/bitmap_min",title:"bitmap_min",description:"Description",source:"@site/versioned_docs/version-3.0/sql-reference/sql-functions/bitmap-functions/bitmap_min.md",sourceDirName:"sql-reference/sql-functions/bitmap-functions",slug:"/sql-reference/sql-functions/bitmap-functions/bitmap_min",permalink:"/doc/docs/3.0/sql-reference/sql-functions/bitmap-functions/bitmap_min",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-functions/bitmap-functions/bitmap_min.md",tags:[],version:"3.0",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"bitmap_max",permalink:"/doc/docs/3.0/sql-reference/sql-functions/bitmap-functions/bitmap_max"},next:{title:"bitmap_or",permalink:"/doc/docs/3.0/sql-reference/sql-functions/bitmap-functions/bitmap_or"}},m={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function l(n){const e=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",pre:"pre",a:"a"},(0,s.ah)(),n.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"bitmap_min",children:"bitmap_min"}),"\n",(0,i.jsx)(e.h2,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(e.p,{children:["Obtains the minimum value of a bitmap. If the bitmap is ",(0,i.jsx)(e.code,{children:"NULL"}),", this function returns ",(0,i.jsx)(e.code,{children:"NULL"}),". If the bitmap is empty, this function returns ",(0,i.jsx)(e.code,{children:"NULL"})," by default."]}),"\n",(0,i.jsx)(e.h2,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-Haskell",children:"bitmap_min(bitmap)\n"})}),"\n",(0,i.jsx)(e.h2,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"bitmap"}),": the bitmap whose minimum value you want to obtain. Only the BITMAP data type is supported. You can specify a bitmap that you construct by using functions such as ",(0,i.jsx)(e.a,{href:"/doc/docs/3.0/sql-reference/sql-functions/bitmap-functions/bitmap_from_string",children:"bitmap_from_string"}),"."]}),"\n",(0,i.jsx)(e.h2,{id:"return-value",children:"Return value"}),"\n",(0,i.jsx)(e.p,{children:"Returns a value of the LARGEINT data type."}),"\n",(0,i.jsx)(e.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-Plain",children:"MySQL > select bitmap_min(bitmap_from_string(\"0, 1, 2, 3\"));\n+-------------------------------------------------+\n|    bitmap_min(bitmap_from_string('0, 1, 2, 3')) |\n+-------------------------------------------------+\n|                                               0 |\n+-------------------------------------------------+\n\nMySQL > select bitmap_min(bitmap_from_string(\"-1, 0, 1, 2\"));\n+-------------------------------------------------+\n|   bitmap_min(bitmap_from_string('-1, 0, 1, 2')) |\n+-------------------------------------------------+\n|                                            NULL |\n+-------------------------------------------------+\n\nMySQL > select bitmap_min(bitmap_empty());\n+----------------------------------+\n|       bitmap_min(bitmap_empty()) |\n+----------------------------------+\n|                             NULL |\n+----------------------------------+\n\nmysql> select bitmap_min(bitmap_from_string(\"16501189037412846863\"));\n+--------------------------------------------------------+\n| bitmap_min(bitmap_from_string('16501189037412846863')) |\n+--------------------------------------------------------+\n| 16501189037412846863                                   |\n+--------------------------------------------------------+\n1 row in set (0.03 sec)\n"})})]})}const p=function(n={}){const{wrapper:e}=Object.assign({},(0,s.ah)(),n.components);return e?(0,i.jsx)(e,Object.assign({},n,{children:(0,i.jsx)(l,n)})):l(n)}},11151:(n,e,t)=>{t.d(e,{Zo:()=>c,ah:()=>a});var i=t(67294);const s=i.createContext({});function a(n){const e=i.useContext(s);return i.useMemo((()=>"function"==typeof n?n(e):{...e,...n}),[e,n])}const r={};function c({components:n,children:e,disableParentContext:t}){let c;return c=t?"function"==typeof n?n({}):n||r:a(n),i.createElement(s.Provider,{value:c},e)}}}]);