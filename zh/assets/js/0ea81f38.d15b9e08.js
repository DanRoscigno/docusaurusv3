"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[23684],{39206:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>o});var a=t(85893),s=t(11151);const l={displayed_sidebar:"Chinese"},c="SHOW CATALOGS",r={id:"sql-reference/sql-statements/data-manipulation/SHOW_CATALOGS",title:"SHOW CATALOGS",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.0/sql-reference/sql-statements/data-manipulation/SHOW_CATALOGS.md",sourceDirName:"sql-reference/sql-statements/data-manipulation",slug:"/sql-reference/sql-statements/data-manipulation/SHOW_CATALOGS",permalink:"/doc/zh/docs/3.0/sql-reference/sql-statements/data-manipulation/SHOW_CATALOGS",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-statements/data-manipulation/SHOW_CATALOGS.md",tags:[],version:"3.0",frontMatter:{displayed_sidebar:"Chinese"},sidebar:"Chinese",previous:{title:"SHOW BACKUP",permalink:"/doc/zh/docs/3.0/sql-reference/sql-statements/data-manipulation/SHOW_BACKUP"},next:{title:"SHOW CREATE CATALOG",permalink:"/doc/zh/docs/3.0/sql-reference/sql-statements/data-manipulation/SHOW_CREATE_CATALOG"}},d={},o=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u8fd4\u56de\u7ed3\u679c\u8bf4\u660e",id:"\u8fd4\u56de\u7ed3\u679c\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function i(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",blockquote:"blockquote",strong:"strong",a:"a",pre:"pre",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,s.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"show-catalogs",children:"SHOW CATALOGS"}),"\n",(0,a.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,a.jsx)(n.p,{children:"\u67e5\u770b\u5f53\u524d\u96c6\u7fa4\u4e2d\u7684\u6240\u6709 Catalog\uff0c\u5305\u62ec Internal Catalog \u548c External Catalog\u3002"}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"\u6ce8\u610f"})}),"\n",(0,a.jsxs)(n.p,{children:["\u53ea\u6709\u62e5\u6709 External Catalog USAGE \u6743\u9650\u7684\u7528\u6237\u624d\u80fd\u67e5\u770b\u5230\u8be5 Catalog\u3002\u5982\u679c\u6ca1\u6709\u8be5\u6743\u9650\uff0c\u4ec5\u8fd4\u56de default_catalog\u3002\u60a8\u53ef\u4ee5\u4f7f\u7528 ",(0,a.jsx)(n.a,{href:"/doc/zh/docs/3.0/sql-reference/sql-statements/account-management/GRANT",children:"GRANT"})," \u547d\u4ee4\u8fdb\u884c\u6388\u6743\u64cd\u4f5c\u3002"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-SQL",children:"SHOW CATALOGS\n"})}),"\n",(0,a.jsx)(n.h2,{id:"\u8fd4\u56de\u7ed3\u679c\u8bf4\u660e",children:"\u8fd4\u56de\u7ed3\u679c\u8bf4\u660e"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-SQL",children:"+----------+--------+----------+\n| Catalog  | Type   | Comment  |\n+----------+--------+----------+\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u8fd4\u56de\u7ed3\u679c\u4e2d\u7684\u5b57\u6bb5\u8bf4\u660e\u5982\u4e0b\uff1a"}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:(0,a.jsx)(n.strong,{children:"\u5b57\u6bb5"})}),(0,a.jsx)(n.th,{children:(0,a.jsx)(n.strong,{children:"\u8bf4\u660e"})})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Catalog"}),(0,a.jsx)(n.td,{children:"Catalog \u540d\u79f0\u3002"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Type"}),(0,a.jsxs)(n.td,{children:["Catalog \u7c7b\u578b\u3002\u5982\u679c\u662f ",(0,a.jsx)(n.code,{children:"default_catalog"}),"\uff0c\u5219\u8fd4\u56de ",(0,a.jsx)(n.code,{children:"Internal"}),"\u3002\u5982\u679c\u662f external catalog\uff0c\u5219\u8fd4\u56de external catalog \u7684\u7c7b\u578b\uff0c\u4f8b\u5982 ",(0,a.jsx)(n.code,{children:"Hive"}),", ",(0,a.jsx)(n.code,{children:"Hudi"}),", ",(0,a.jsx)(n.code,{children:"Iceberg"}),"\u3002"]})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Comment"}),(0,a.jsxs)(n.td,{children:["Catalog \u7684\u5907\u6ce8\u3002",(0,a.jsxs)("ul",{children:[(0,a.jsxs)("li",{children:["\u5728\u521b\u5efa external catalog \u65f6\u4e0d\u652f\u6301\u4e3a external catalog \u6dfb\u52a0\u5907\u6ce8\uff0c\u6240\u4ee5\u5982\u679c\u662f external catalog\uff0c\u5219\u8fd4\u56de\u7684 ",(0,a.jsx)(n.code,{children:"Comment"})," \u4e3a ",(0,a.jsx)(n.code,{children:"NULL"}),"\u3002"]}),(0,a.jsxs)("li",{children:["\u5982\u679c\u662f ",(0,a.jsx)(n.code,{children:"default_catalog"}),"\uff0c\u5219\u9ed8\u8ba4\u8fd4\u56de\u7684 ",(0,a.jsx)(n.code,{children:"Comment"})," \u4e3a ",(0,a.jsx)(n.code,{children:"An internal catalog contains this cluster's self-managed tables."}),"\u3002",(0,a.jsx)(n.code,{children:"default_catalog"})," \u662f StarRocks \u96c6\u7fa4\u4e2d\u552f\u4e00\u7684 internal catalog\uff0c\u4e0d\u5141\u8bb8\u5220\u9664\u3002"]})]})]})]})]})]}),"\n",(0,a.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,a.jsx)(n.p,{children:"\u67e5\u770b\u5f53\u524d\u96c6\u7fa4\u4e2d\u7684\u6240\u6709 catalog\u3002"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-SQL",children:"SHOW CATALOGS\\G\n*************************** 1. row ***************************\nCatalog: default_catalog\n   Type: Internal\nComment: An internal catalog contains this cluster's self-managed tables.\n*************************** 2. row ***************************\nCatalog: hudi_catalog\n   Type: Hudi\nComment: NULL\n*************************** 3. row ***************************\nCatalog: iceberg_catalog\n   Type: Iceberg\nComment: NULL\n"})})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,s.ah)(),e.components);return n?(0,a.jsx)(n,Object.assign({},e,{children:(0,a.jsx)(i,e)})):i(e)}},11151:(e,n,t)=>{t.d(n,{Zo:()=>r,ah:()=>l});var a=t(67294);const s=a.createContext({});function l(e){const n=a.useContext(s);return a.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const c={};function r({components:e,children:n,disableParentContext:t}){let r;return r=t?"function"==typeof e?e({}):e||c:l(e),a.createElement(s.Provider,{value:r},n)}}}]);