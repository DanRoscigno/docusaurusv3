"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[14821],{66012:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var s=t(85893),a=t(11151);const r={},c="BITMAP",i={id:"sql-reference/sql-statements/data-types/BITMAP",title:"BITMAP",description:"\u63cf\u8ff0",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.1/sql-reference/sql-statements/data-types/BITMAP.md",sourceDirName:"sql-reference/sql-statements/data-types",slug:"/sql-reference/sql-statements/data-types/BITMAP",permalink:"/doc/zh/docs/sql-reference/sql-statements/data-types/BITMAP",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-statements/data-types/BITMAP.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"Other",permalink:"/doc/zh/docs/category/other"},next:{title:"HLL(HyperLogLog)",permalink:"/doc/zh/docs/sql-reference/sql-statements/data-types/HLL"}},o={},l=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",ol:"ol",li:"li",pre:"pre",code:"code",a:"a"},(0,a.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"bitmap",children:"BITMAP"}),"\n",(0,s.jsx)(n.h2,{id:"\u63cf\u8ff0",children:"\u63cf\u8ff0"}),"\n",(0,s.jsx)(n.p,{children:"BITMAP \u4e0e HLL (HyperLogLog) \u7c7b\u4f3c\uff0c\u5e38\u7528\u6765\u52a0\u901f count distinct \u7684\u53bb\u91cd\u8ba1\u6570\u4f7f\u7528\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u60a8\u53ef\u4ee5\u901a\u8fc7 bitmap \u51fd\u6570\u8fdb\u884c\u96c6\u5408\u7684\u5404\u79cd\u64cd\u4f5c\uff0c\u76f8\u6bd4 HLL \u53ef\u4ee5\u83b7\u5f97\u66f4\u7cbe\u786e\u7684\u7ed3\u679c\u3002\u4f46\u662f BITMAP \u9700\u8981\u6d88\u8017\u66f4\u591a\u7684\u5185\u5b58\u548c\u78c1\u76d8\u8d44\u6e90\uff0c\u53e6\u5916 BITMAP \u53ea\u80fd\u652f\u6301\u6574\u6570\u7c7b\u578b\u7684\u805a\u5408\uff0c\u5982\u679c\u662f\u5b57\u7b26\u4e32\u7b49\u7c7b\u578b\u9700\u8981\u91c7\u7528\u5b57\u5178\u8fdb\u884c\u6620\u5c04\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u805a\u5408\u6a21\u578b\u5efa\u8868\u65f6\u6307\u5b9a\u5b57\u6bb5\u7c7b\u578b\u4e3a BITMAP\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'CREATE TABLE pv_bitmap (\n    dt INT(11) NULL COMMENT "",\n    page VARCHAR(10) NULL COMMENT "",\n    user_id bitmap BITMAP_UNION NULL COMMENT ""\n) ENGINE=OLAP\nAGGREGATE KEY(dt, page)\nCOMMENT "OLAP"\nDISTRIBUTED BY HASH(dt);\n'})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u4e3b\u952e\u6a21\u578b\u5efa\u8868\u65f6\u6307\u5b9a\u5b57\u6bb5\u7c7b\u578b\u4e3a BITMAP\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'CREATE TABLE primary_bitmap (\n  `tagname` varchar(65533) NOT NULL COMMENT "Tag name",\n  `tagvalue` varchar(65533) NOT NULL COMMENT "Tag value",\n  `userid` bitmap NOT NULL COMMENT "User ID"\n) ENGINE=OLAP\nPRIMARY KEY(`tagname`, `tagvalue`)\nCOMMENT "OLAP"\nDISTRIBUTED BY HASH(`tagname`);\n'})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u5411 BITMAP \u5217\u4e2d\u63d2\u5165\u6570\u636e\u9700\u8981\u5148\u4f7f\u7528 to_bitmap() \u51fd\u6570\u8fdb\u884c\u8f6c\u6362\u3002"}),"\n",(0,s.jsxs)(n.p,{children:["BITMAP \u7c7b\u578b\u7684\u8be6\u7ec6\u4f7f\u7528\u65b9\u6cd5\uff0c\u5982\u5411\u8868\u4e2d\u63d2\u5165 BITMAP \u503c\uff0c\u8bf7\u53c2\u8003 ",(0,s.jsx)(n.a,{href:"/doc/zh/docs/sql-reference/sql-functions/aggregate-functions/bitmap",children:"bitmap"}),"\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["BITMAP \u7c7b\u578b\u7684\u5b57\u6bb5\u652f\u6301\u591a\u79cd BITMAP \u51fd\u6570\uff0c\u5982 bitmap_and()\uff0cbitmap_andnot() \u7b49\u3002\u5177\u4f53\u8bf7\u53c2\u8003 ",(0,s.jsx)(n.a,{href:"/doc/zh/docs/sql-reference/sql-functions/bitmap-functions/bitmap_and",children:"bitmap-functions"}),"\u3002"]})]})}const p=function(e={}){const{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(d,e)})):d(e)}},11151:(e,n,t)=>{t.d(n,{Zo:()=>i,ah:()=>r});var s=t(67294);const a=s.createContext({});function r(e){const n=s.useContext(a);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const c={};function i({components:e,children:n,disableParentContext:t}){let i;return i=t?"function"==typeof e?e({}):e||c:r(e),s.createElement(a.Provider,{value:i},n)}}}]);