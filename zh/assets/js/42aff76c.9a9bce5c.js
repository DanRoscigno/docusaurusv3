"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[96681],{13989:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>o,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var i=s(85893),t=s(11151);const r={},l="bitmap_subset_limit",c={id:"sql-reference/sql-functions/bitmap-functions/bitmap_subset_limit",title:"bitmap_subset_limit",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.1/sql-reference/sql-functions/bitmap-functions/bitmap_subset_limit.md",sourceDirName:"sql-reference/sql-functions/bitmap-functions",slug:"/sql-reference/sql-functions/bitmap-functions/bitmap_subset_limit",permalink:"/docusaurusv3/zh/docs/sql-reference/sql-functions/bitmap-functions/bitmap_subset_limit",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-functions/bitmap-functions/bitmap_subset_limit.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"bitmap_subset_in_range",permalink:"/docusaurusv3/zh/docs/sql-reference/sql-functions/bitmap-functions/bitmap_subset_in_range"},next:{title:"bitmap_to_array",permalink:"/docusaurusv3/zh/docs/sql-reference/sql-functions/bitmap-functions/bitmap_to_array"}},a={},d=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u4f7f\u7528\u8bf4\u660e",id:"\u4f7f\u7528\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u76f8\u5173\u53c2\u8003",id:"\u76f8\u5173\u53c2\u8003",level:2}];function u(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",pre:"pre",code:"code",ul:"ul",li:"li"},(0,t.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"bitmap_subset_limit",children:"bitmap_subset_limit"}),"\n",(0,i.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,i.jsx)(n.p,{children:"\u6839\u636e\u6307\u5b9a\u7684\u8d77\u59cb\u503c\uff0c\u4ece BITMAP \u4e2d\u622a\u53d6\u6307\u5b9a\u4e2a\u6570\u7684\u5143\u7d20\u3002\u8fd4\u56de\u7684\u5143\u7d20\u662f Bitmap \u7684\u5b50\u96c6\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u8be5\u51fd\u6570\u4ece 3.1 \u7248\u672c\u5f00\u59cb\u652f\u6301\uff0c\u4e3b\u8981\u7528\u4e8e\u5206\u9875\u67e5\u8be2\u573a\u666f\u3002"}),"\n",(0,i.jsxs)(n.p,{children:["\u8be5\u51fd\u6570\u4e0e ",(0,i.jsx)(n.a,{href:"/docusaurusv3/zh/docs/sql-reference/sql-functions/bitmap-functions/sub_bitmap",children:"sub_bitmap"})," \u529f\u80fd\u76f8\u4f3c\uff0c\u4e0d\u540c\u4e4b\u5904\u5728\u4e8e sub_bitmap \u6307\u5b9a\u7684\u662f offset\uff0cbitmap_subset_limit \u6307\u5b9a\u7684\u662f\u8d77\u59cb\u503c\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Haskell",children:"BITMAP bitmap_subset_limit(BITMAP src, BIGINT start_range, BIGINT limit)\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"src"}),": \u8981\u622a\u53d6\u7684\u76ee\u6807 bitmap\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"start_range"}),": \u7528\u4e8e\u6307\u5b9a\u8d77\u59cb\u503c\uff0c\u5fc5\u987b\u662f BIGINT \u7c7b\u578b\u3002\u5982\u679c\u6307\u5b9a\u7684\u8d77\u59cb\u503c\u8d85\u8fc7\u4e86 Bitmap \u7684\u6700\u5927\u957f\u5ea6\u5e76\u4e14 ",(0,i.jsx)(n.code,{children:"limit"})," \u662f\u6b63\u6570\uff0c\u5219\u8fd4\u56de NULL\u3002\u53c2\u89c1\u793a\u4f8b\u56db\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"limit"}),": \u4ece ",(0,i.jsx)(n.code,{children:"start_range"})," \u5f00\u59cb\uff0c\u8981\u622a\u53d6\u7684\u5143\u7d20\u4e2a\u6570\uff0c\u5fc5\u987b\u662f BIGINT \u7c7b\u578b\u3002\u5982\u679c\u53d6\u503c\u4e3a\u8d1f\uff0c\u8868\u793a\u4ece ",(0,i.jsx)(n.code,{children:"start_range"})," \u5f00\u59cb\u7531\u53f3\u5411\u5de6\u8ba1\u6570\u3002\u5982\u679c\u7b26\u5408\u6761\u4ef6\u7684\u5143\u7d20\u4e2a\u6570\u5c0f\u4e8e ",(0,i.jsx)(n.code,{children:"len"})," \u53d6\u503c\uff0c\u5219\u8fd4\u56de\u6240\u6709\u6ee1\u8db3\u6761\u4ef6\u7684\u5143\u7d20\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,i.jsx)(n.p,{children:"\u8fd4\u56de\u8f93\u5165 BITMAP \u7684\u5b50\u96c6\u3002\u5982\u679c\u4efb\u4f55\u4e00\u4e2a\u8f93\u5165\u53c2\u6570\u65e0\u6548\uff0c\u5219\u8fd4\u56de NULL\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"\u4f7f\u7528\u8bf4\u660e",children:"\u4f7f\u7528\u8bf4\u660e"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u8fd4\u56de\u7684\u5b50\u96c6\u5305\u542b ",(0,i.jsx)(n.code,{children:"start_range"}),"\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:["\u5982\u679c ",(0,i.jsx)(n.code,{children:"limit"})," \u4e3a\u8d1f\uff0c\u8868\u793a\u4ece ",(0,i.jsx)(n.code,{children:"start_range"})," \u5f00\u59cb\u7531\u53f3\u5411\u5de6\u8ba1\u6570\uff0c\u8fd4\u56de ",(0,i.jsx)(n.code,{children:"limit"})," \u4e2a\u5143\u7d20\u3002\u53c2\u89c1\u793a\u4f8b\u4e09\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,i.jsxs)(n.p,{children:["\u5728\u4ee5\u4e0b\u793a\u4f8b\u4e2d\uff0cbitmap_subset_in_range() \u51fd\u6570\u7684\u8f93\u5165\u503c\u4e3a ",(0,i.jsx)(n.a,{href:"/docusaurusv3/zh/docs/sql-reference/sql-functions/bitmap-functions/bitmap_from_string",children:"bitmap_from_string"})," \u51fd\u6570\u8ba1\u7b97\u540e\u7684\u7ed3\u679c\u3002\u6bd4\u5982\u793a\u4f8b\u4e2d\u7684 ",(0,i.jsx)(n.code,{children:"bitmap_from_string('1,1,3,1,5,3,5,7,7,9')"})," \u5b9e\u9645\u8f93\u51fa\u7684 BITMAP \u503c\u4e3a ",(0,i.jsx)(n.code,{children:"1, 3, 5, 7, 9"}),"\u3002bitmap_subset_in_range() \u4f1a\u57fa\u4e8e\u8fd9\u4e2a\u503c\u8fdb\u884c\u8ba1\u7b97\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"\u793a\u4f8b\u4e00\uff1a\u4ece\u8d77\u59cb\u503c 1 \u5f00\u59cb\uff0c\u4ece Bitmap \u4e2d\u622a\u53d6 4 \u4e2a\u5143\u7d20\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Plaintext",children:"select bitmap_to_string(bitmap_subset_limit(bitmap_from_string('1,1,3,1,5,3,5,7,7,9'), 1, 4)) value;\n+---------+\n|  value  |\n+---------+\n| 1,3,5,7 |\n+---------+\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u793a\u4f8b\u4e8c\uff1a\u4ece\u8d77\u59cb\u503c 1 \u5f00\u59cb\uff0c\u4ece Bitmap \u4e2d\u622a\u53d6 100 \u4e2a\u5143\u7d20\u3002100 \u8d85\u8fc7\u4e86 Bitmap \u7684\u6700\u5927\u957f\u5ea6\uff0c\u8fd4\u56de\u6240\u6709\u5339\u914d\u7684\u5143\u7d20\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Plaintext",children:"select bitmap_to_string(bitmap_subset_limit(bitmap_from_string('1,1,3,1,5,3,5,7,7,9'), 1, 100)) value;\n+-----------+\n| value     |\n+-----------+\n| 1,3,5,7,9 |\n+-----------+\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u793a\u4f8b\u4e09\uff1a\u4ece\u8d77\u59cb\u503c 5 \u5f00\u59cb\uff0c\u7531\u53f3\u5411\u5de6\u8ba1\u6570\uff0c\u4ece Bitmap \u4e2d\u622a\u53d6 2 \u4e2a\u5143\u7d20\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Plaintext",children:"select bitmap_to_string(bitmap_subset_limit(bitmap_from_string('1,1,3,1,5,3,5,7,7,9'), 5, -2)) value;\n+-----------+\n| value     |\n+-----------+\n| 3,5       |\n+-----------+\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u793a\u4f8b\u56db\uff1a\u6307\u5b9a\u7684\u8d77\u59cb\u503c 10 \u8d85\u8fc7\u4e86 Bitmap \u7684\u6700\u5927\u957f\u5ea6\u800c\u4e14 ",(0,i.jsx)(n.code,{children:"limit"})," \u662f\u6b63\u6570\uff0c\u8fd4\u56de NULL\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Plain",children:"select bitmap_to_string(bitmap_subset_in_range(bitmap_from_string('1,1,3,1,5,3,5,7,7,9'), 10, 15)) value;\n+-------+\n| value |\n+-------+\n| NULL  |\n+-------+\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u76f8\u5173\u53c2\u8003",children:"\u76f8\u5173\u53c2\u8003"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docusaurusv3/zh/docs/sql-reference/sql-functions/bitmap-functions/sub_bitmap",children:"sub_bitmap"}),", ",(0,i.jsx)(n.a,{href:"/docusaurusv3/zh/docs/sql-reference/sql-functions/bitmap-functions/bitmap_subset_in_range",children:"bitmap_subset_in_range"})]})]})}const o=function(e={}){const{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(u,e)})):u(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>c,ah:()=>r});var i=s(67294);const t=i.createContext({});function r(e){const n=i.useContext(t);return i.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const l={};function c({components:e,children:n,disableParentContext:s}){let c;return c=s?"function"==typeof e?e({}):e||l:r(e),i.createElement(t.Provider,{value:c},n)}}}]);