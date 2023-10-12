"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[94596],{62618:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var i=e(85893),s=e(11151);const r={},o="bitmap_from_string",c={id:"sql-reference/sql-functions/bitmap-functions/bitmap_from_string",title:"bitmap_from_string",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.5/sql-reference/sql-functions/bitmap-functions/bitmap_from_string.md",sourceDirName:"sql-reference/sql-functions/bitmap-functions",slug:"/sql-reference/sql-functions/bitmap-functions/bitmap_from_string",permalink:"/doc/zh/docs/2.5/sql-reference/sql-functions/bitmap-functions/bitmap_from_string",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-2.5/sql-reference/sql-functions/bitmap-functions/bitmap_from_string.md",tags:[],version:"2.5",frontMatter:{},sidebar:"Chinese31",previous:{title:"bitmap_empty",permalink:"/doc/zh/docs/2.5/sql-reference/sql-functions/bitmap-functions/bitmap_empty"},next:{title:"bitmap_has_any",permalink:"/doc/zh/docs/2.5/sql-reference/sql-functions/bitmap-functions/bitmap_has_any"}},a={},l=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function m(n){const t=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code"},(0,s.ah)(),n.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"bitmap_from_string",children:"bitmap_from_string"}),"\n",(0,i.jsx)(t.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,i.jsx)(t.p,{children:'\u5c06\u4e00\u4e2a\u5b57\u7b26\u4e32\u8f6c\u5316\u4e3a\u4e00\u4e2a bitmap\uff0c\u5b57\u7b26\u4e32\u7531\u9017\u53f7\u5206\u9694\u7684\u4e00\u7ec4 UInt32 \u6570\u5b57\u7ec4\u6210\u3002\u6bd4\u5982\u5c06 "0, 1, 2" \u5b57\u7b26\u4e32\u8f6c\u5316\u4e3a\u4e00\u4e2a bitmap\uff0c\u4f1a\u5bf9\u5176\u4e2d\u7684\u7b2c 0\uff0c1\uff0c2 \u4f4d\u4f1a\u8fdb\u884c\u8bbe\u7f6e\uff0c\u5f53\u8f93\u5165\u5b57\u6bb5\u4e0d\u5408\u6cd5\u65f6\u8fd4\u56de NULL\u3002'}),"\n",(0,i.jsx)(t.p,{children:"\u8be5\u51fd\u6570\u5728\u8f6c\u6362\u8fc7\u7a0b\u4e2d\u4f1a\u5bf9\u5b57\u7b26\u4e32\u91cc\u7684\u6570\u503c\u505a\u53bb\u91cd\u64cd\u4f5c\u3002bitmap_from_string() \u5355\u72ec\u4f7f\u7528\u65e0\u6cd5\u8fd4\u56de\u53ef\u89c6\u5316\u7ed3\u679c\uff0c\u9700\u8981\u4e0e\u5176\u4ed6\u51fd\u6570\u914d\u5408\u4f7f\u7528\uff0c\u6bd4\u5982 bitmap_to_string()\u3002"}),"\n",(0,i.jsx)(t.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-Haskell",children:"BITMAP_FROM_STRING(input)\n"})}),"\n",(0,i.jsx)(t.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"input"}),": \u8f93\u5165\u7684\u5b57\u7b26\u4e32\uff0c\u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u4e3a VARCHAR\u3002\u5b57\u7b26\u4e32\u91cc\u7684\u6bcf\u4e2a\u503c\u5fc5\u987b\u662f UInt32 \u7c7b\u578b\u6570\u5b57\u3002"]}),"\n",(0,i.jsx)(t.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,i.jsxs)(t.p,{children:["\u8fd4\u56de\u503c\u7684\u6570\u636e\u7c7b\u578b\u4e3a BITMAP\u3002\u5982\u679c\u8f93\u5165\u5b57\u6bb5\u4e0d\u5408\u6cd5\uff0c\u5219\u8fd4\u56de ",(0,i.jsx)(t.code,{children:"NULL"}),"\u3002\u5982\u679c\u8f93\u5165\u5b57\u6bb5\u4e3a\u7a7a\u5b57\u7b26\u4e32\uff0c\u5219\u8fd4\u56de\u7a7a\u3002"]}),"\n",(0,i.jsx)(t.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-Plain",metastring:"Text",children:"-- \u8fd4\u56de\u7a7a\u5b57\u7b26\u4e32\u3002\nMySQL > select bitmap_to_string(bitmap_from_string(\"\"));\n+--------------------------------------------+\n|  bitmap_to_string(bitmap_from_string(''))  |\n+--------------------------------------------+\n|                                            |\n+--------------------------------------------+\n\n-- \u8fd4\u56de `0,1,2`\u3002\nMySQL > select bitmap_to_string(bitmap_from_string(\"0, 1, 2\"));\n+-------------------------------------------------+\n| bitmap_to_string(bitmap_from_string('0, 1, 2')) |\n+-------------------------------------------------+\n| 0,1,2                                           |\n+-------------------------------------------------+\n\n-- -1 \u8f93\u5165\u975e\u6cd5\uff0c\u8fd4\u56de NULL\u3002\nMySQL > select bitmap_to_string(bitmap_from_string(\"-1, 0, 1, 2\"));\n+-----------------------------------------------------+\n| bitmap_to_string(bitmap_from_string('-1, 0, 1, 2')) |\n+-----------------------------------------------------+\n| NULL                                                |\n+-----------------------------------------------------+\n\n-- \u5bf9\u5b57\u7b26\u4e32\u91cc\u7684\u91cd\u590d\u6570\u503c\u8fdb\u884c\u53bb\u91cd\u3002\n\nMySQL > select bitmap_to_string(bitmap_from_string(\"0, 1, 1\"));\n+-------------------------------------------------+\n| bitmap_to_string(bitmap_from_string('0, 1, 1')) |\n+-------------------------------------------------+\n| 0,1                                             |\n+-------------------------------------------------+\n"})})]})}const p=function(n={}){const{wrapper:t}=Object.assign({},(0,s.ah)(),n.components);return t?(0,i.jsx)(t,Object.assign({},n,{children:(0,i.jsx)(m,n)})):m(n)}},11151:(n,t,e)=>{e.d(t,{Zo:()=>c,ah:()=>r});var i=e(67294);const s=i.createContext({});function r(n){const t=i.useContext(s);return i.useMemo((()=>"function"==typeof n?n(t):{...t,...n}),[t,n])}const o={};function c({components:n,children:t,disableParentContext:e}){let c;return c=e?"function"==typeof n?n({}):n||o:r(n),i.createElement(s.Provider,{value:c},t)}}}]);