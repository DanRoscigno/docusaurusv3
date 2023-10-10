"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[29552],{15018:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>m,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>o});var i=t(85893),s=t(11151);const r={},a="bitmap_min",c={id:"sql-reference/sql-functions/bitmap-functions/bitmap_min",title:"bitmap_min",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.0/sql-reference/sql-functions/bitmap-functions/bitmap_min.md",sourceDirName:"sql-reference/sql-functions/bitmap-functions",slug:"/sql-reference/sql-functions/bitmap-functions/bitmap_min",permalink:"/docusaurusv3/zh/docs/3.0/sql-reference/sql-functions/bitmap-functions/bitmap_min",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/sql-reference/sql-functions/bitmap-functions/bitmap_min.md",tags:[],version:"3.0",frontMatter:{},sidebar:"documentation",previous:{title:"bitmap_max",permalink:"/docusaurusv3/zh/docs/3.0/sql-reference/sql-functions/bitmap-functions/bitmap_max"},next:{title:"bitmap_or",permalink:"/docusaurusv3/zh/docs/3.0/sql-reference/sql-functions/bitmap-functions/bitmap_or"}},m={},o=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function l(n){const e=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",a:"a"},(0,s.ah)(),n.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"bitmap_min",children:"bitmap_min"}),"\n",(0,i.jsx)(e.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,i.jsx)(e.p,{children:"\u83b7\u53d6Bitmap\u4e2d\u7684\u6700\u5c0f\u503c\u3002\u5982\u679cBitmap\u4e3aNULL\uff0c\u5219\u8fd4\u56deNULL\u3002\u5982\u679cBitmap\u4e3a\u7a7a\uff0c\u9ed8\u8ba4\u8fd4\u56deNULL\u3002"}),"\n",(0,i.jsx)(e.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-Haskell",children:"bitmap_min(bitmap)\n"})}),"\n",(0,i.jsx)(e.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"bitmap"}),"\uff1a\u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u4e3a BITMAP\uff0c\u53ef\u4ee5\u7531 ",(0,i.jsx)(e.a,{href:"/docusaurusv3/zh/docs/3.0/sql-reference/sql-functions/bitmap-functions/bitmap_from_string",children:"BITMAP_FROM_STRING"})," \u7b49\u51fd\u6570\u6784\u9020\u3002"]}),"\n",(0,i.jsx)(e.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,i.jsx)(e.p,{children:"\u8fd4\u56de LARGEINT \u7c7b\u578b\u7684\u503c\u3002"}),"\n",(0,i.jsx)(e.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-Plain",metastring:"Text",children:"MySQL > select bitmap_min(bitmap_from_string(\"0, 1, 2, 3\"));\n+-------------------------------------------------+\n|    bitmap_min(bitmap_from_string('0, 1, 2, 3')) |\n+-------------------------------------------------+\n|                                               0 |\n+-------------------------------------------------+\n\nMySQL > select bitmap_min(bitmap_from_string(\"-1, 0, 1, 2\"));\n+-------------------------------------------------+\n|   bitmap_min(bitmap_from_string('-1, 0, 1, 2')) |\n+-------------------------------------------------+\n|                                            NULL |\n+-------------------------------------------------+\n\nMySQL > select bitmap_min(bitmap_empty());\n+----------------------------------+\n|       bitmap_min(bitmap_empty()) |\n+----------------------------------+\n|                             NULL |\n+----------------------------------+\n\nmysql> select bitmap_min(bitmap_from_string(\"16501189037412846863\"));\n+--------------------------------------------------------+\n| bitmap_min(bitmap_from_string('16501189037412846863')) |\n+--------------------------------------------------------+\n| 16501189037412846863                                   |\n+--------------------------------------------------------+\n1 row in set (0.03 sec)\n"})})]})}const p=function(n={}){const{wrapper:e}=Object.assign({},(0,s.ah)(),n.components);return e?(0,i.jsx)(e,Object.assign({},n,{children:(0,i.jsx)(l,n)})):l(n)}},11151:(n,e,t)=>{t.d(e,{Zo:()=>c,ah:()=>r});var i=t(67294);const s=i.createContext({});function r(n){const e=i.useContext(s);return i.useMemo((()=>"function"==typeof n?n(e):{...e,...n}),[e,n])}const a={};function c({components:n,children:e,disableParentContext:t}){let c;return c=t?"function"==typeof n?n({}):n||a:r(n),i.createElement(s.Provider,{value:c},e)}}}]);