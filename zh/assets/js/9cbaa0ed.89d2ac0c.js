"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[71902],{24102:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>a,contentTitle:()=>l,default:()=>u,frontMatter:()=>c,metadata:()=>r,toc:()=>d});var i=s(85893),t=s(11151);const c={displayed_sidebar:"Chinese"},l="sub_bitmap",r={id:"sql-reference/sql-functions/bitmap-functions/sub_bitmap",title:"sub_bitmap",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.0/sql-reference/sql-functions/bitmap-functions/sub_bitmap.md",sourceDirName:"sql-reference/sql-functions/bitmap-functions",slug:"/sql-reference/sql-functions/bitmap-functions/sub_bitmap",permalink:"/doc/zh/docs/3.0/sql-reference/sql-functions/bitmap-functions/sub_bitmap",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-functions/bitmap-functions/sub_bitmap.md",tags:[],version:"3.0",frontMatter:{displayed_sidebar:"Chinese"},sidebar:"Chinese",previous:{title:"intersect_count",permalink:"/doc/zh/docs/3.0/sql-reference/sql-functions/bitmap-functions/intersect_count"},next:{title:"to_bitmap",permalink:"/doc/zh/docs/3.0/sql-reference/sql-functions/bitmap-functions/to_bitmap"}},a={},d=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function o(n){const e=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",pre:"pre",ul:"ul",li:"li",a:"a"},(0,t.ah)(),n.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"sub_bitmap",children:"sub_bitmap"}),"\n",(0,i.jsx)(e.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,i.jsxs)(e.p,{children:["\u6839\u636e ",(0,i.jsx)(e.code,{children:"offset"})," \u6307\u5b9a\u7684\u8d77\u59cb\u4f4d\u7f6e\uff0c\u4ece BITMAP \u7c7b\u578b\u7684 ",(0,i.jsx)(e.code,{children:"src"})," \u4e2d\u622a\u53d6 ",(0,i.jsx)(e.code,{children:"len"})," \u4e2a\u5143\u7d20\uff0c\u8fd4\u56de\u7684\u5143\u7d20\u4e3a ",(0,i.jsx)(e.code,{children:"src"})," \u7684\u5b50\u96c6\u3002\u8be5\u51fd\u6570\u4e3b\u8981\u7528\u4e8e\u5206\u9875\u67e5\u8be2\u76f8\u5173\u573a\u666f\u3002\u8be5\u51fd\u6570\u4ece 2.5 \u7248\u672c\u5f00\u59cb\u652f\u6301\u3002"]}),"\n",(0,i.jsx)(e.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-Haskell",children:"BITMAP sub_bitmap(BITMAP src, BIGINT offset, BIGINT len)\n"})}),"\n",(0,i.jsx)(e.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"src"}),": \u8981\u622a\u65ad\u7684\u76ee\u6807 bitmap\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"offset"}),": \u7528\u4e8e\u6307\u5b9a\u8d77\u59cb\u4f4d\u7f6e\uff0c\u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u4e3a BIGINT\u3002Offset \u7684\u4f7f\u7528\u6ce8\u610f\u4e8b\u9879\uff1a"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Offset \u4ece 0 \u5f00\u59cb\u3002"}),"\n",(0,i.jsx)(e.li,{children:"\u8d1f\u504f\u79fb\u91cf\u6307\u7684\u662f\u4ece\u5b57\u7b26\u4e32\u7ed3\u5c3e\u5f00\u59cb\u4ece\u53f3\u5411\u5de6\u8ba1\u6570\uff0c\u89c1\u793a\u4f8b\u4e09\u548c\u56db\u3002"}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"offset"})," \u6307\u5b9a\u7684\u8d77\u59cb\u4f4d\u7f6e\u4e0d\u80fd\u8d85\u51fa BITMAP \u503c\u7684\u5b9e\u9645\u957f\u5ea6\uff0c\u5426\u5219\u8fd4\u56de NULL\uff0c\u89c1\u793a\u4f8b\u516d\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"len"}),": \u8981\u622a\u53d6\u7684\u5143\u7d20\u4e2a\u6570\uff0c\u5fc5\u987b\u4e3a\u6b63\u6574\u6570\uff0c\u5426\u5219\u8fd4\u56de NULL\u3002\u5982\u679c\u7b26\u5408\u6761\u4ef6\u7684\u5143\u7d20\u4e2a\u6570\u5c0f\u4e8e ",(0,i.jsx)(e.code,{children:"len"})," \u53d6\u503c\uff0c\u5219\u8fd4\u56de\u6ee1\u8db3\u6761\u4ef6\u7684\u6240\u6709\u5143\u7d20\uff0c\u89c1\u793a\u4f8b\u4e8c\u3001\u4e09\u3001\u4e03\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,i.jsx)(e.p,{children:"\u8fd4\u56de\u503c\u7684\u6570\u636e\u7c7b\u578b\u4e3a BITMAP\u3002\u5982\u679c\u8f93\u5165\u53c2\u6570\u975e\u6cd5\uff0c\u5219\u8fd4\u56de NULL\u3002"}),"\n",(0,i.jsx)(e.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,i.jsxs)(e.p,{children:["\u5728\u4ee5\u4e0b\u793a\u4f8b\u4e2d\uff0csub_bitmap() \u51fd\u6570\u7684\u8f93\u5165\u503c\u4e3a bitmap_from_string() \u51fd\u6570\u8ba1\u7b97\u540e\u7684\u7ed3\u679c\u3002\u6bd4\u5982\u793a\u4f8b\u4e2d\u7684 ",(0,i.jsx)(e.code,{children:"bitmap_from_string('1,1,3,1,5,3,5,7,7,9')"})," \u5b9e\u9645\u8f93\u51fa\u7684 BITMAP \u503c\u4e3a 1, 3, 5, 7, 9\u3002sub_bitmap() \u4f1a\u57fa\u4e8e\u8fd9\u4e2a\u503c\u8fdb\u884c\u8ba1\u7b97\u3002\u5173\u4e8e bitmap_from_string() \u7684\u66f4\u591a\u4fe1\u606f\uff0c\u53c2\u89c1",(0,i.jsx)(e.a,{href:"/doc/zh/docs/3.0/sql-reference/sql-functions/bitmap-functions/bitmap_from_string",children:"bitmap_from_string"}),"\u3002"]}),"\n",(0,i.jsx)(e.p,{children:"\u793a\u4f8b\u4e00\uff1a\u4ece\u504f\u79fb\u91cf 0 \u5f00\u59cb\uff0c\u622a\u53d6 BITMAP \u503c\u4e2d 2 \u4e2a\u5143\u7d20\u3002"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-Plaintext",children:"select bitmap_to_string(sub_bitmap(bitmap_from_string('1,1,3,1,5,3,5,7,7,9'), 0, 2)) value;\n+-------+\n| value |\n+-------+\n| 1,3   |\n+-------+\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u793a\u4f8b\u4e8c\uff1a\u4ece\u504f\u79fb\u91cf 0 \u5f00\u59cb\uff0c\u622a\u53d6 BITMAP \u503c\u4e2d 100 \u4e2a\u5143\u7d20\u3002\u7531\u4e8e BITMAP \u503c\u4e2d\u6ca1\u6709 100 \u4e2a\u5143\u7d20\uff0c\u6240\u4ee5\u8f93\u51fa\u7b26\u5408\u6761\u4ef6\u7684\u6240\u6709\u5143\u7d20\u3002"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-Plaintext",children:"select bitmap_to_string(sub_bitmap(bitmap_from_string('1,1,3,1,5,3,5,7,7,9'), 0, 100)) value;\n+-----------+\n| value     |\n+-----------+\n| 1,3,5,7,9 |\n+-----------+\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u793a\u4f8b\u4e09\uff1a\u4ece\u504f\u79fb\u91cf -3 \u5f00\u59cb\uff0c\u622a\u53d6 BITMAP \u503c\u4e2d 100 \u4e2a\u5143\u7d20\u3002\u7531\u4e8e BITMAP \u503c\u4e2d\u6ca1\u6709 100 \u4e2a\u5143\u7d20\uff0c\u6240\u4ee5\u8f93\u51fa\u7b26\u5408\u6761\u4ef6\u7684\u6240\u6709\u5143\u7d20\u3002"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-Plaintext",children:"select bitmap_to_string(sub_bitmap(bitmap_from_string('1,1,3,1,5,3,5,7,7,9'), -3, 100)) value;\n+-------+\n| value |\n+-------+\n| 5,7,9 |\n+-------+\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u793a\u4f8b\u56db\uff1a\u4ece\u504f\u79fb\u91cf -3 \u5f00\u59cb\uff0c\u622a\u53d6 BITMAP \u503c\u4e2d 2 \u4e2a\u5143\u7d20\u3002"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-Plaintext",children:"select bitmap_to_string(sub_bitmap(bitmap_from_string('1,1,3,1,5,3,5,7,7,9'), -3, 2)) value;\n+-------+\n| value |\n+-------+\n| 5,7   |\n+-------+\n"})}),"\n",(0,i.jsxs)(e.p,{children:["\u793a\u4f8b\u4e94\uff1a",(0,i.jsx)(e.code,{children:"-10"})," \u4e3a ",(0,i.jsx)(e.code,{children:"len"})," \u7684\u975e\u6cd5\u8f93\u5165\uff0c\u8fd4\u56de NULL\u3002"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-Plaintext",children:"select bitmap_to_string(sub_bitmap(bitmap_from_string('1,1,3,1,5,3,5,7,7,9'), 0, -10)) value;\n+-------+\n| value |\n+-------+\n| NULL  |\n+-------+\n"})}),"\n",(0,i.jsxs)(e.p,{children:["\u793a\u4f8b\u516d\uff1a",(0,i.jsx)(e.code,{children:"offset"})," \u6307\u5b9a\u7684\u8d77\u59cb\u4f4d\u7f6e 5 \u8d85\u51fa BITMAP \u503c ",(0,i.jsx)(e.code,{children:"1,3,5,7,9"})," \u7684\u957f\u5ea6\uff0c\u8fd4\u56de NULL\u3002"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-Plain",children:"select bitmap_to_string(sub_bitmap(bitmap_from_string('1,1,3,1,5,3,5,7,7,9'), 5, 1)) value;\n+-------+\n| value |\n+-------+\n| NULL  |\n+-------+\n"})}),"\n",(0,i.jsxs)(e.p,{children:["\u793a\u4f8b\u4e03\uff1a\u5b9e\u9645\u7b26\u5408\u6761\u4ef6\u7684\u5143\u7d20\u53ea\u6709 2 \u4e2a\uff0c\u5c0f\u4e8e ",(0,i.jsx)(e.code,{children:"len"})," \u7684\u503c 5\uff0c\u8fd4\u56de\u6240\u6709\u6ee1\u8db3\u6761\u4ef6\u7684\u5143\u7d20\u3002"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-Plain",children:"select bitmap_to_string(sub_bitmap(bitmap_from_string('1,1,3,1,5,3,5,7,7,9'), -2, 5)) value;\n+-------+\n| value |\n+-------+\n| 7,9   |\n+-------+\n"})})]})}const u=function(n={}){const{wrapper:e}=Object.assign({},(0,t.ah)(),n.components);return e?(0,i.jsx)(e,Object.assign({},n,{children:(0,i.jsx)(o,n)})):o(n)}},11151:(n,e,s)=>{s.d(e,{Zo:()=>r,ah:()=>c});var i=s(67294);const t=i.createContext({});function c(n){const e=i.useContext(t);return i.useMemo((()=>"function"==typeof n?n(e):{...e,...n}),[e,n])}const l={};function r({components:n,children:e,disableParentContext:s}){let r;return r=s?"function"==typeof n?n({}):n||l:c(n),i.createElement(t.Provider,{value:r},e)}}}]);