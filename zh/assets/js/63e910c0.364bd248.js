"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[745],{81837:(d,e,s)=>{s.r(e),s.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>j,frontMatter:()=>t,metadata:()=>l,toc:()=>h});var r=s(85893),n=s(11151);const t={},i="\u6743\u9650\u9879",l={id:"administration/privilege_item",title:"\u6743\u9650\u9879",description:"\u672c\u6587\u8be6\u7ec6\u63cf\u8ff0\u4e86 StarRocks \u4e2d\u53ef\u4ee5\u7528\u4e8e\u8d4b\u6743\u7684\u6743\u9650\u9879\u53ca\u5176\u542b\u4e49\u3002\u60a8\u53ef\u4ee5\u901a\u8fc7 GRANT \u548c REVOKE \u64cd\u4f5c\u5bf9\u7528\u6237\u548c\u89d2\u8272\u8fdb\u884c\u6743\u9650\u7684\u8d4b\u4e88\u548c\u6536\u56de\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.1/administration/privilege_item.md",sourceDirName:"administration",slug:"/administration/privilege_item",permalink:"/docusaurusv3/zh/docs/latest/administration/privilege_item",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/administration/privilege_item.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"\u6743\u9650\u7cfb\u7edf\u603b\u89c8",permalink:"/docusaurusv3/zh/docs/latest/administration/privilege_overview"},next:{title:"\u7ba1\u7406\u7528\u6237\u6743\u9650",permalink:"/docusaurusv3/zh/docs/latest/administration/User_privilege"}},c={},h=[{value:"\u6743\u9650\u5217\u8868",id:"\u6743\u9650\u5217\u8868",level:2},{value:"\u7cfb\u7edf\u7ea7\u6743\u9650 (SYSTEM)",id:"\u7cfb\u7edf\u7ea7\u6743\u9650-system",level:3},{value:"\u8d44\u6e90\u7ec4\u6743\u9650 \uff08RESOURCE GROUP)",id:"\u8d44\u6e90\u7ec4\u6743\u9650-resource-group",level:3},{value:"\u8d44\u6e90\u6743\u9650 (RESOURCE)",id:"\u8d44\u6e90\u6743\u9650-resource",level:3},{value:"\u7528\u6237\u6743\u9650 (USER)",id:"\u7528\u6237\u6743\u9650-user",level:3},{value:"\u5168\u5c40\u7528\u6237\u81ea\u5b9a\u4e49\u51fd\u6570\u6743\u9650 (GLOBAL FUNCTION)",id:"\u5168\u5c40\u7528\u6237\u81ea\u5b9a\u4e49\u51fd\u6570\u6743\u9650-global-function",level:3},{value:"\u6570\u636e\u76ee\u5f55\u6743\u9650 (CATALOG)",id:"\u6570\u636e\u76ee\u5f55\u6743\u9650-catalog",level:3},{value:"\u6570\u636e\u5e93\u6743\u9650 (DATABASE)",id:"\u6570\u636e\u5e93\u6743\u9650-database",level:3},{value:"\u8868\u6743\u9650 (TABLE)",id:"\u8868\u6743\u9650-table",level:3},{value:"\u89c6\u56fe\u6743\u9650 (VIEW)",id:"\u89c6\u56fe\u6743\u9650-view",level:3},{value:"\u7269\u5316\u89c6\u56fe\u6743\u9650 (MATERIALIZED VIEW)",id:"\u7269\u5316\u89c6\u56fe\u6743\u9650-materialized-view",level:3},{value:"\u5e93\u7ea7\u522b\u7528\u6237\u81ea\u5b9a\u4e49\u51fd\u6570\u6743\u9650 (FUNCTION)",id:"\u5e93\u7ea7\u522b\u7528\u6237\u81ea\u5b9a\u4e49\u51fd\u6570\u6743\u9650-function",level:3},{value:"\u5b58\u50a8\u5377\u6743\u9650 (STORAGE VOLUME)",id:"\u5b58\u50a8\u5377\u6743\u9650-storage-volume",level:3},{value:"\u5347\u7ea7\u6ce8\u610f\u4e8b\u9879",id:"\u5347\u7ea7\u6ce8\u610f\u4e8b\u9879",level:2}];function x(d){const e=Object.assign({h1:"h1",p:"p",a:"a",blockquote:"blockquote",h2:"h2",h3:"h3",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",code:"code",strong:"strong"},(0,n.ah)(),d.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"\u6743\u9650\u9879",children:"\u6743\u9650\u9879"}),"\n",(0,r.jsxs)(e.p,{children:["\u672c\u6587\u8be6\u7ec6\u63cf\u8ff0\u4e86 StarRocks \u4e2d\u53ef\u4ee5\u7528\u4e8e\u8d4b\u6743\u7684\u6743\u9650\u9879\u53ca\u5176\u542b\u4e49\u3002\u60a8\u53ef\u4ee5\u901a\u8fc7 ",(0,r.jsx)(e.a,{href:"/docusaurusv3/zh/docs/latest/sql-reference/sql-statements/account-management/GRANT",children:"GRANT"})," \u548c ",(0,r.jsx)(e.a,{href:"/docusaurusv3/zh/docs/latest/sql-reference/sql-statements/account-management/REVOKE",children:"REVOKE"})," \u64cd\u4f5c\u5bf9\u7528\u6237\u548c\u89d2\u8272\u8fdb\u884c\u6743\u9650\u7684\u8d4b\u4e88\u548c\u6536\u56de\u3002"]}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsx)(e.p,{children:"\u6ce8\u610f\uff1a\u672c\u6587\u4ecb\u7ecd\u7684\u6743\u9650\u9879\u4ece 3.0 \u7248\u672c\u5f00\u59cb\u63d0\u4f9b\uff0c\u5347\u7ea7\u540e\u7684\u6743\u9650\u6846\u67b6\u3001\u8bed\u6cd5\u4e0e\u65e7\u7684\u7cfb\u7edf\u65e0\u6cd5\u517c\u5bb9\uff0c\u8bf7\u4ee5 3.0 \u7248\u672c\u7684\u64cd\u4f5c\u8bf4\u660e\u4e3a\u51c6\u3002\u5347\u7ea7\u540e\uff0c\u9664\u4e2a\u522b\u64cd\u4f5c\u5916\uff0c\u60a8\u5728\u65e7\u7cfb\u7edf\u4e0a\u7684\u5927\u90e8\u5206\u64cd\u4f5c\u6743\u9650\u4ecd\u7136\u4fdd\u7559\u3002\u5177\u4f53\u5dee\u5f02\u8bf7\u89c1\u6587\u6863\u6700\u540e\u7684\u5347\u7ea7\u6307\u5357\u3002"}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"\u6743\u9650\u5217\u8868",children:"\u6743\u9650\u5217\u8868"}),"\n",(0,r.jsx)(e.h3,{id:"\u7cfb\u7edf\u7ea7\u6743\u9650-system",children:"\u7cfb\u7edf\u7ea7\u6743\u9650 (SYSTEM)"}),"\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"\u6743\u9650"}),(0,r.jsx)(e.th,{children:"\u7528\u9014"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"NODE"}),(0,r.jsxs)(e.td,{children:["\u7528\u4e8e\u64cd\u4f5c\u8282\u70b9\uff0c\u6bd4\u5982\u6dfb\u52a0\uff0c\u5220\u9664\uff0c\u4e0b\u7ebf\u8282\u70b9\u3002\u4e3a\u786e\u4fdd\u96c6\u7fa4\u5b89\u5168\uff0c\u6b64\u6743\u9650\u4e0d\u53ef\u76f4\u63a5\u6388\u4e88\u7ed9\u7528\u6237\u548c\u89d2\u8272\u3002",(0,r.jsx)(e.code,{children:"cluster_admin"})," \u89d2\u8272\u62e5\u6709\u6b64\u6743\u9650\u3002"]})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"GRANT"}),(0,r.jsxs)(e.td,{children:["\u521b\u5efa\u7528\u6237/\u89d2\u8272\uff0c\u66f4\u6539\u7528\u6237/\u89d2\u8272\uff0c\u5c06\u6743\u9650\u6388\u4e88\u7ed9\u7528\u6237/\u89d2\u8272\u3002\u6b64\u6743\u9650\u4e0d\u53ef\u76f4\u63a5\u6388\u4e88\u7ed9\u7528\u6237\u548c\u89d2\u8272\u3002",(0,r.jsx)(e.code,{children:"user_admin"})," \u89d2\u8272\u62e5\u6709\u6b64\u6743\u9650\u3002"]})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"CREATE RESOURCE GROUP"}),(0,r.jsx)(e.td,{children:"\u521b\u5efa\u8d44\u6e90\u7ec4\u3002"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"CREATE RESOURCE"}),(0,r.jsx)(e.td,{children:"\u521b\u5efa\u8d44\u6e90\u7ed9 Spark Load \u548c\u5916\u8868\u4f7f\u7528\u3002"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"CREATE EXTERNAL CATALOG"}),(0,r.jsx)(e.td,{children:"\u521b\u5efa External Catalog\u3002"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"PLUGIN"}),(0,r.jsx)(e.td,{children:"\u5b89\u88c5\u3001\u5378\u8f7d\u4e00\u4e2a\u63d2\u4ef6\u3002"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"REPOSITORY"}),(0,r.jsx)(e.td,{children:"\u521b\u5efa\u3001\u5220\u9664\u3001\u67e5\u770b\u4ed3\u5e93\u3002"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"BLACKLIST"}),(0,r.jsx)(e.td,{children:"\u521b\u5efa\u3001\u5220\u9664\u3001\u67e5\u770b SQL \u9ed1\u540d\u5355\u3002"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"FILE"}),(0,r.jsx)(e.td,{children:"\u521b\u5efa\u3001\u5220\u9664\u3001\u67e5\u770b\u6587\u4ef6\u3002"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"OPERATE"}),(0,r.jsx)(e.td,{children:"\u7ba1\u7406\u526f\u672c\u3001\u914d\u7f6e\u9879\u3001\u53d8\u91cf\u3001transaction\u7b49\u3002"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"CREATE GLOBAL FUNCTION"}),(0,r.jsx)(e.td,{children:"\u521b\u5efa\u4e00\u4e2a\u5168\u5c40 UDF\u3002"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"CREATE STORAGE VOLUME"}),(0,r.jsx)(e.td,{children:"\u4e3a\u8fdc\u7a0b\u5b58\u50a8\u7cfb\u7edf\u521b\u5efa\u5b58\u50a8\u5377 (Storage Volume)\u3002"})]})]})]}),"\n",(0,r.jsx)(e.h3,{id:"\u8d44\u6e90\u7ec4\u6743\u9650-resource-group",children:"\u8d44\u6e90\u7ec4\u6743\u9650 \uff08RESOURCE GROUP)"}),"\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"\u6743\u9650"}),(0,r.jsx)(e.th,{children:"\u7528\u9014"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"ALTER"}),(0,r.jsx)(e.td,{children:"\u4e3a\u6307\u5b9a\u8d44\u6e90\u7ec4 (resource group) \u589e\u52a0\u3001\u51cf\u5c11\u5206\u7c7b\u5668 (classifier)\u3002"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"DROP"}),(0,r.jsx)(e.td,{children:"\u5220\u9664\u6307\u5b9a\u8d44\u6e90\u7ec4\u3002"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"ALL"}),(0,r.jsx)(e.td,{children:"\u62e5\u6709\u5bf9\u8be5\u8d44\u6e90\u7ec4\u7684\u4e0a\u8ff0\u6240\u6709\u6743\u9650\u3002"})]})]})]}),"\n",(0,r.jsx)(e.h3,{id:"\u8d44\u6e90\u6743\u9650-resource",children:"\u8d44\u6e90\u6743\u9650 (RESOURCE)"}),"\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"\u6743\u9650"}),(0,r.jsx)(e.th,{children:"\u7528\u9014"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"USAGE"}),(0,r.jsx)(e.td,{children:"\u4f7f\u7528\u8be5\u8d44\u6e90 (resource)\u3002"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"ALTER"}),(0,r.jsx)(e.td,{children:"\u66f4\u6539\u8be5\u8d44\u6e90\u3002"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"DROP"}),(0,r.jsx)(e.td,{children:"\u5220\u9664\u8be5\u8d44\u6e90\u3002"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"ALL"}),(0,r.jsx)(e.td,{children:"\u62e5\u6709\u5bf9\u8be5\u8d44\u6e90\u7684\u4e0a\u8ff0\u6240\u6709\u6743\u9650\u3002"})]})]})]}),"\n",(0,r.jsx)(e.h3,{id:"\u7528\u6237\u6743\u9650-user",children:"\u7528\u6237\u6743\u9650 (USER)"}),"\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"\u6743\u9650"}),(0,r.jsx)(e.th,{children:"\u7528\u9014"})]})}),(0,r.jsx)(e.tbody,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"IMPERSONATE"}),(0,r.jsx)(e.td,{children:"\u5141\u8bb8\u7528\u6237 a \u4ee5\u7528\u6237 b \u7684\u8eab\u4efd\u6267\u884c\u64cd\u4f5c\u3002"})]})})]}),"\n",(0,r.jsx)(e.h3,{id:"\u5168\u5c40\u7528\u6237\u81ea\u5b9a\u4e49\u51fd\u6570\u6743\u9650-global-function",children:"\u5168\u5c40\u7528\u6237\u81ea\u5b9a\u4e49\u51fd\u6570\u6743\u9650 (GLOBAL FUNCTION)"}),"\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"\u6743\u9650"}),(0,r.jsx)(e.th,{children:"\u7528\u9014"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"USAGE"}),(0,r.jsx)(e.td,{children:"\u5728\u67e5\u8be2\u4e2d\u4f7f\u7528\u8be5\u51fd\u6570\u3002"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"DROP"}),(0,r.jsx)(e.td,{children:"\u5220\u9664\u8be5\u51fd\u6570\u3002"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"ALL"}),(0,r.jsx)(e.td,{children:"\u62e5\u6709\u5bf9\u8be5\u51fd\u6570\u7684\u4e0a\u8ff0\u6240\u6709\u6240\u6709\u6743\u9650\u3002"})]})]})]}),"\n",(0,r.jsx)(e.h3,{id:"\u6570\u636e\u76ee\u5f55\u6743\u9650-catalog",children:"\u6570\u636e\u76ee\u5f55\u6743\u9650 (CATALOG)"}),"\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"\u5bf9\u8c61"}),(0,r.jsx)(e.th,{children:"\u6743\u9650"}),(0,r.jsx)(e.th,{children:"\u7528\u9014"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsxs)(e.td,{children:["CATALOG ",(0,r.jsx)("br",{}),"\uff08\u5185\u90e8\u76ee\u5f55\uff0c\u9ed8\u8ba4\u540d\u79f0\u4e3a default_catalog\uff09"]}),(0,r.jsx)(e.td,{children:"USAGE"}),(0,r.jsx)(e.td,{children:"\u4f7f\u7528 internal catalog\u3002"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"CREATE DATABASE"}),(0,r.jsx)(e.td,{children:"\u5728 internal catalog \u91cc\u521b\u5efa\u6570\u636e\u5e93\u3002"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"ALL"}),(0,r.jsx)(e.td,{children:"\u62e5\u6709\u5bf9 internal catalog \u7684\u4e0a\u8ff0\u6240\u6709\u6743\u9650\u3002"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"CATALOG \uff08\u5916\u90e8\u76ee\u5f55\uff09"}),(0,r.jsx)(e.td,{children:"USAGE"}),(0,r.jsx)(e.td,{children:"\u4f7f\u7528 external catalog\uff0c\u67e5\u770b\u91cc\u9762\u7684\u8868\u3002"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"DROP"}),(0,r.jsx)(e.td,{children:"\u5220\u9664 external catalog\u3002"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"ALL"}),(0,r.jsx)(e.td,{children:"\u62e5\u6709\u5bf9\u8be5 external catalog \u7684\u4e0a\u8ff0\u6240\u6709\u6743\u9650\u3002"})]})]})]}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsx)(e.p,{children:"\u8bf4\u660e\uff1aStarRocks \u5185\u90e8\u6570\u636e\u76ee\u5f55\u4e0d\u80fd\u5220\u9664\u3002"}),"\n"]}),"\n",(0,r.jsx)(e.h3,{id:"\u6570\u636e\u5e93\u6743\u9650-database",children:"\u6570\u636e\u5e93\u6743\u9650 (DATABASE)"}),"\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"\u6743\u9650"}),(0,r.jsx)(e.th,{children:"\u7528\u9014"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"ALTER"}),(0,r.jsx)(e.td,{children:"\u8bbe\u7f6e\u6307\u5b9a\u6570\u636e\u5e93\u7684\u5c5e\u6027\uff0c\u91cd\u547d\u540d\uff0c\u8bbe\u5b9a\u914d\u989d\u7b49\u3002"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"DROP"}),(0,r.jsx)(e.td,{children:"\u5220\u9664\u6570\u636e\u5e93\u3002"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"CREATE TABLE"}),(0,r.jsx)(e.td,{children:"\u5728\u6570\u636e\u5e93\u5185\u521b\u5efa\u8868\u3002"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"CREATE VIEW"}),(0,r.jsx)(e.td,{children:"\u521b\u5efa\u89c6\u56fe\u3002"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"CREATE FUNCTION"}),(0,r.jsx)(e.td,{children:"\u521b\u5efa\u51fd\u6570\u3002"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"CREATE MATERIALIZED VIEW"}),(0,r.jsx)(e.td,{children:"\u521b\u5efa\u7269\u5316\u89c6\u56fe\u3002"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"ALL"}),(0,r.jsx)(e.td,{children:"\u62e5\u6709\u5bf9\u8be5\u6570\u636e\u5e93\u7684\u4e0a\u8ff0\u6240\u6709\u6743\u9650\u3002"})]})]})]}),"\n",(0,r.jsx)(e.h3,{id:"\u8868\u6743\u9650-table",children:"\u8868\u6743\u9650 (TABLE)"}),"\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"\u6743\u9650"}),(0,r.jsx)(e.th,{children:"\u7528\u9014"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"ALTER"}),(0,r.jsx)(e.td,{children:"\u5bf9\u8868\u8fdb\u884c\u4fee\u6539\uff0c\u5bf9\u5916\u8868\u5143\u6570\u636e\u8fdb\u884c\u5237\u65b0\u3002"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"DROP"}),(0,r.jsx)(e.td,{children:"\u5220\u9664\u8868\u3002"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"SELECT"}),(0,r.jsx)(e.td,{children:"\u67e5\u8be2\u8868\u4e2d\u6570\u636e\u3002"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"INSERT"}),(0,r.jsx)(e.td,{children:"\u5411\u8868\u4e2d\u5bfc\u5165\u6570\u636e\u3002"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"UPDATE"}),(0,r.jsx)(e.td,{children:"\u66f4\u65b0\u8868\u3002"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"EXPORT"}),(0,r.jsx)(e.td,{children:"\u4ece StarRocks \u8868\u4e2d\u5bfc\u51fa\u6570\u636e\u3002"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"DELETE"}),(0,r.jsx)(e.td,{children:"\u6309\u6761\u4ef6\u5220\u9664\u6307\u5b9a\u8868\u4e2d\u7684\u6570\u636e\uff0c\u6216\u8005\u6e05\u7a7a\u6307\u5b9a\u8868\u7684\u6570\u636e\u3002"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"ALL"}),(0,r.jsx)(e.td,{children:"\u62e5\u6709\u5bf9\u8be5\u8868\u7684\u4e0a\u8ff0\u6240\u6709\u6743\u9650\u3002"})]})]})]}),"\n",(0,r.jsx)(e.h3,{id:"\u89c6\u56fe\u6743\u9650-view",children:"\u89c6\u56fe\u6743\u9650 (VIEW)"}),"\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"\u6743\u9650"}),(0,r.jsx)(e.th,{children:"\u7528\u9014"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"SELECT"}),(0,r.jsx)(e.td,{children:"\u67e5\u8be2\u89c6\u56fe (view) \u4e2d\u7684\u6570\u636e\u3002"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"ALTER"}),(0,r.jsx)(e.td,{children:"\u4fee\u6539\u4e00\u4e2a\u89c6\u56fe\u7684\u5b9a\u4e49\u3002"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"DROP"}),(0,r.jsx)(e.td,{children:"\u5220\u9664\u4e00\u4e2a\u903b\u8f91\u89c6\u56fe\u3002"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"ALL"}),(0,r.jsx)(e.td,{children:"\u62e5\u6709\u5bf9\u8be5\u89c6\u56fe\u7684\u4e0a\u8ff0\u6240\u6709\u6743\u9650\u3002"})]})]})]}),"\n",(0,r.jsx)(e.h3,{id:"\u7269\u5316\u89c6\u56fe\u6743\u9650-materialized-view",children:"\u7269\u5316\u89c6\u56fe\u6743\u9650 (MATERIALIZED VIEW)"}),"\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"\u6743\u9650"}),(0,r.jsx)(e.th,{children:"\u7528\u9014"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"SELECT"}),(0,r.jsx)(e.td,{children:"\u67e5\u8be2\u65f6\u5f15\u7528\u8be5\u7269\u5316\u89c6\u56fe (materialized view) \u7684\u6570\u636e\uff0c\u4ee5\u52a0\u901f\u67e5\u8be2\u3002"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"ALTER"}),(0,r.jsx)(e.td,{children:"\u66f4\u6539\u7269\u5316\u89c6\u56fe\u3002"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"REFRESH"}),(0,r.jsx)(e.td,{children:"\u5237\u65b0\u7269\u5316\u89c6\u56fe\u3002"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"DROP"}),(0,r.jsx)(e.td,{children:"\u5220\u9664\u7269\u5316\u89c6\u56fe\u3002"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"ALL"}),(0,r.jsx)(e.td,{children:"\u62e5\u6709\u5bf9\u8be5\u7269\u5316\u89c6\u56fe\u7684\u4e0a\u8ff0\u6240\u6709\u6743\u9650\u3002"})]})]})]}),"\n",(0,r.jsx)(e.h3,{id:"\u5e93\u7ea7\u522b\u7528\u6237\u81ea\u5b9a\u4e49\u51fd\u6570\u6743\u9650-function",children:"\u5e93\u7ea7\u522b\u7528\u6237\u81ea\u5b9a\u4e49\u51fd\u6570\u6743\u9650 (FUNCTION)"}),"\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"\u6743\u9650"}),(0,r.jsx)(e.th,{children:"\u7528\u9014"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"USAGE"}),(0,r.jsx)(e.td,{children:"\u4f7f\u7528\u8be5\u51fd\u6570\u3002"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"DROP"}),(0,r.jsx)(e.td,{children:"\u5220\u9664\u8be5\u51fd\u6570\u3002"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"ALL"}),(0,r.jsx)(e.td,{children:"\u62e5\u6709\u5bf9\u8be5\u51fd\u6570\u7684\u4e0a\u8ff0\u6240\u6709\u6743\u9650\u3002"})]})]})]}),"\n",(0,r.jsx)(e.h3,{id:"\u5b58\u50a8\u5377\u6743\u9650-storage-volume",children:"\u5b58\u50a8\u5377\u6743\u9650 (STORAGE VOLUME)"}),"\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"\u6743\u9650"}),(0,r.jsx)(e.th,{children:"\u7528\u9014"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"ALTER"}),(0,r.jsx)(e.td,{children:"\u66f4\u6539\u5b58\u50a8\u5377\u7684\u8ba4\u8bc1\u5c5e\u6027\u3001\u6ce8\u91ca\u6216\u72b6\u6001\uff08enabled\uff09\u3002"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"DROP"}),(0,r.jsx)(e.td,{children:"\u5220\u9664\u6307\u5b9a\u5b58\u50a8\u5377\u3002"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"USAGE"}),(0,r.jsx)(e.td,{children:"\u67e5\u770b\u6307\u5b9a\u5b58\u50a8\u5377\u7684\u4fe1\u606f\uff0c\u8bbe\u7f6e\u6307\u5b9a\u5b58\u50a8\u5377\u4e3a\u9ed8\u8ba4\u5b58\u50a8\u5377\u3002"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"ALL"}),(0,r.jsx)(e.td,{children:"\u62e5\u6709\u5bf9\u8be5\u5b58\u50a8\u5377\u7684\u4e0a\u8ff0\u6240\u6709\u6743\u9650\u3002"})]})]})]}),"\n",(0,r.jsx)(e.h2,{id:"\u5347\u7ea7\u6ce8\u610f\u4e8b\u9879",children:"\u5347\u7ea7\u6ce8\u610f\u4e8b\u9879"}),"\n",(0,r.jsx)(e.p,{children:"\u4ece 2.x \u7248\u672c\u5347\u7ea7\u81f3 3.0 \u7248\u672c\u65f6\uff0c\u7531\u4e8e\u6743\u9650\u7cfb\u7edf\u7684\u5347\u7ea7\uff0c\u6709\u53ef\u80fd\u5bfc\u81f4\u60a8\u7684\u90e8\u5206\u64cd\u4f5c\u65e0\u6cd5\u8fdb\u884c\u3002\u5177\u4f53\u5305\u542b\uff1a"}),"\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:(0,r.jsx)(e.strong,{children:"\u64cd\u4f5c"})}),(0,r.jsx)(e.th,{children:(0,r.jsx)(e.strong,{children:"\u6d89\u53ca\u547d\u4ee4"})}),(0,r.jsx)(e.th,{children:(0,r.jsx)(e.strong,{children:"\u5347\u7ea7\u524d"})}),(0,r.jsx)(e.th,{children:(0,r.jsx)(e.strong,{children:"\u5347\u7ea7\u540e"})})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"\u4fee\u6539\u8868"}),(0,r.jsx)(e.td,{children:"ALTER TABLE\uff0cCANCEL ALTER TABLE"}),(0,r.jsxs)(e.td,{children:["\u62e5\u6709\u8868\u6216\u8868\u6240\u5728\u6570\u636e\u5e93\u7684 ",(0,r.jsx)(e.code,{children:"LOAD_PRIV"})," \u6743\u9650\u5373\u53ef\u5bf9\u8868\u6267\u884c ",(0,r.jsx)(e.code,{children:"ALTER TABLE"}),"\uff0c",(0,r.jsx)(e.code,{children:"CANCEL ALTER TABlE"})," \u64cd\u4f5c"]}),(0,r.jsx)(e.td,{children:"\u60a8\u9700\u8981\u62e5\u6709\u5bf9\u5e94\u8868\u7684 ALTER \u6743\u9650\u624d\u53ef\u4ee5\u6267\u884c\u8be5\u64cd\u4f5c\u3002"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"\u5237\u65b0\u5916\u8868"}),(0,r.jsx)(e.td,{children:"REFRESH EXTERNAL TABLE"}),(0,r.jsxs)(e.td,{children:["\u62e5\u6709\u5916\u8868\u7684 ",(0,r.jsx)(e.code,{children:"LOAD_PRIV"})," \u6743\u9650\u5373\u53ef\u5bf9\u5916\u8868\u8fdb\u884c\u5237\u65b0\u3002"]}),(0,r.jsx)(e.td,{children:"\u60a8\u9700\u8981\u62e5\u6709\u5bf9\u5e94\u5916\u8868\u7684 ALTER \u6743\u9650\u624d\u53ef\u4ee5\u5bf9\u5916\u8868\u8fdb\u884c\u5237\u65b0\u3002"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"\u5907\u4efd\u4e0e\u6062\u590d"}),(0,r.jsx)(e.td,{children:"BACKUP\uff0cRESTORE"}),(0,r.jsxs)(e.td,{children:["\u62e5\u6709\u6570\u636e\u5e93\u7684 ",(0,r.jsx)(e.code,{children:"LOAD_PRIV"})," \u6743\u9650\u5373\u53ef\u5bf9\u8be5\u6570\u636e\u5e93\u53ca\u5176\u4e0b\u7684\u4efb\u610f\u8868\u8fdb\u884c\u5907\u4efd\u6062\u590d\u3002"]}),(0,r.jsxs)(e.td,{children:["\u7ba1\u7406\u5458\u9700\u8981\u91cd\u65b0\u5bf9\u7528\u6237\u8d4b\u6743\uff0c\u4ee5\u4fdd\u8bc1\u7528\u6237\u53ef\u4ee5\u6267\u884c",(0,r.jsx)(e.code,{children:"BACKUP"}),"\u548c",(0,r.jsx)(e.code,{children:"RESTORE"}),"\u64cd\u4f5c\u3002"]})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"\u5220\u9664\u540e\u590d\u539f"}),(0,r.jsx)(e.td,{children:"RECOVER \u6570\u636e\u5e93\u6216\u8868"}),(0,r.jsxs)(e.td,{children:["\u62e5\u6709\u5bf9\u5e94\u6570\u636e\u5e93\u6216\u8868\u7684 ",(0,r.jsx)(e.code,{children:"ALTER_PRIV\uff0cCREATE_PRIV"}),"\uff0c",(0,r.jsx)(e.code,{children:"DROP_PRIV"})," \u6743\u9650\u5373\u53ef\u5bf9\u5e93\u6216\u8868\u8fdb\u884c\u590d\u539f\u3002"]}),(0,r.jsx)(e.td,{children:"\u60a8\u9700\u8981\u62e5\u6709 default_catalog \u7684 CREATE DATABASE \u6743\u9650\u624d\u53ef\u4ee5\u6062\u590d\u6570\u636e\u5e93\uff1b\u9700\u8981\u62e5\u6709\u5bf9\u5e94\u6570\u636e\u5e93\u7684 CREATE TABLE \u548c\u5bf9\u5e94\u8868\u7684 DROP \u6743\u9650\u3002"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"\u521b\u5efa\u3001\u66f4\u6539\u7528\u6237"}),(0,r.jsx)(e.td,{children:"CREATE USER\uff0cALTER USER"}),(0,r.jsxs)(e.td,{children:["\u62e5\u6709\u6570\u636e\u5e93\u7684 ",(0,r.jsx)(e.code,{children:"GRANT_PRIV"})," \u6743\u9650\u5373\u53ef\u521b\u5efa\u548c\u66f4\u6539\u7528\u6237\u3002"]}),(0,r.jsxs)(e.td,{children:["\u60a8\u9700\u8981\u62e5\u6709 ",(0,r.jsx)(e.code,{children:"user_admin"})," \u89d2\u8272\u624d\u53ef\u4ee5\u6267\u884c",(0,r.jsx)(e.code,{children:"CREATE USER"}),"\u548c",(0,r.jsx)(e.code,{children:"ALTER USER"}),"\u64cd\u4f5c\u3002"]})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"\u6388\u4e88\u548c\u6536\u56de\u6743\u9650"}),(0,r.jsx)(e.td,{children:"GRANT\uff0cREVOKE"}),(0,r.jsxs)(e.td,{children:["\u62e5\u6709\u5404\u5bf9\u8c61\u7684 ",(0,r.jsx)(e.code,{children:"GRANT_PRIV"})," \u6743\u9650\u5373\u53ef\u5c06\u5bf9\u5e94\u5bf9\u8c61\u7684\u6743\u9650\u6388\u4e88\u7ed9\u5176\u4ed6\u7528\u6237\u6216\u89d2\u8272\u3002"]}),(0,r.jsxs)(e.td,{children:["\u5347\u7ea7\u540e\uff0c\u60a8\u4ecd\u65e7\u53ef\u4ee5\u5c06\u60a8\u5728\u8be5\u5bf9\u8c61\u4e0a\u5df2\u7ecf\u62e5\u6709\u7684\u6743\u9650\u8d4b\u4e88\u7ed9\u5176\u4ed6\u7528\u6237\u6216\u89d2\u8272\u3002",(0,r.jsx)("br",{}),"\u5728\u65b0\u7684\u6743\u9650\u7cfb\u7edf\u4e2d\uff1a",(0,r.jsxs)("ul",{children:[(0,r.jsxs)("li",{children:["\u62e5\u6709 ",(0,r.jsx)(e.code,{children:"user_admin"})," \u89d2\u8272\u7684\u7528\u6237\u624d\u53ef\u4ee5\u5c06\u4efb\u610f\u6743\u9650\u6388\u4e88\u7ed9\u4efb\u610f\u7528\u6237\u548c\u89d2\u8272\u3002"]}),(0,r.jsxs)("li",{children:["\u5f53\u60a8\u7684\u6388\u6743\u8bed\u53e5\u5305\u542b",(0,r.jsx)(e.code,{children:"WITH GRANT OPTION"}),"\u65f6\uff0c\u60a8\u53ef\u4ee5\u5c06\u8be5\u8bed\u53e5\u6d89\u53ca\u7684\u6743\u9650\u6388\u4e88\u7ed9\u5176\u4ed6\u7528\u6237\u6216\u89d2\u8272\u3002 "]})]})]})]})]})]}),"\n",(0,r.jsx)(e.p,{children:"\u5728 2.x \u7248\u672c\u4e2d\uff0cStarRocks \u7684\u89d2\u8272\u5b9e\u73b0\u5e76\u4e0d\u5b8c\u5168\u3002\u5f53\u60a8\u5c06\u89d2\u8272\u8d4b\u4e88\u7ed9\u7528\u6237\u65f6\uff0cStarRocks \u76f4\u63a5\u5c06\u89d2\u8272\u6240\u6709\u7684\u6743\u9650\u8d4b\u4e88\u7ed9\u7528\u6237\uff0c\u800c\u5e76\u4e0d\u662f\u5c06\u89d2\u8272\u672c\u8eab\u8d4b\u4e88\u7ed9\u7528\u6237\u3002\u4ece\u800c\u5728\u8001\u7248\u672c\u4e2d\uff0cStarRocks \u7684\u7528\u6237\u548c\u89d2\u8272\u5e76\u6ca1\u6709\u76f4\u63a5\u7684\u4ece\u5c5e\u5173\u7cfb\u3002"}),"\n",(0,r.jsx)(e.p,{children:"\u5347\u7ea7\u4e4b\u540e\uff0cStarRocks \u4f1a\u5bf9\u6bcf\u4e2a\u7528\u6237\u62e5\u6709\u7684\u6743\u9650\u8fdb\u884c\u5347\u7ea7\uff0c\u8001\u7684\u89d2\u8272\u4ecd\u65e7\u5b58\u5728\uff0c\u4f46\u4ecd\u65e7\u4e0e\u7528\u6237\u6ca1\u6709\u4ece\u5c5e\u5173\u7cfb\u3002\u5982\u679c\u60a8\u5e0c\u671b\u4f7f\u7528\u65b0\u7684 RBAC\uff0c\u53ef\u4ee5\u6309\u7167\u65b0\u7684 GRANT \u64cd\u4f5c\u8fdb\u884c\u8d4b\u6743\u3002"})]})}const j=function(d={}){const{wrapper:e}=Object.assign({},(0,n.ah)(),d.components);return e?(0,r.jsx)(e,Object.assign({},d,{children:(0,r.jsx)(x,d)})):x(d)}},11151:(d,e,s)=>{s.d(e,{Zo:()=>l,ah:()=>t});var r=s(67294);const n=r.createContext({});function t(d){const e=r.useContext(n);return r.useMemo((()=>"function"==typeof d?d(e):{...e,...d}),[e,d])}const i={};function l({components:d,children:e,disableParentContext:s}){let l;return l=s?"function"==typeof d?d({}):d||i:t(d),r.createElement(n.Provider,{value:l},e)}}}]);