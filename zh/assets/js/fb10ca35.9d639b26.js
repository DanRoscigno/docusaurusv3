"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[85509],{51973:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>o});var t=n(85893),r=n(11151);const i={},l="DROP STORAGE VOLUME",c={id:"sql-reference/sql-statements/Administration/DROP_STORAGE_VOLUME",title:"DROP STORAGE VOLUME",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.1/sql-reference/sql-statements/Administration/DROP_STORAGE_VOLUME.md",sourceDirName:"sql-reference/sql-statements/Administration",slug:"/sql-reference/sql-statements/Administration/DROP_STORAGE_VOLUME",permalink:"/doc/zh/docs/sql-reference/sql-statements/Administration/DROP_STORAGE_VOLUME",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-statements/Administration/DROP_STORAGE_VOLUME.md",tags:[],version:"3.1",frontMatter:{},sidebar:"Chinese31",previous:{title:"DROP RESOURCE GROUP",permalink:"/doc/zh/docs/sql-reference/sql-statements/Administration/DROP_RESOURCE_GROUP"},next:{title:"EXPLAIN",permalink:"/doc/zh/docs/sql-reference/sql-statements/Administration/EXPLAIN"}},d={},o=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u76f8\u5173 SQL",id:"\u76f8\u5173-sql",level:2}];function a(e){const s=Object.assign({h1:"h1",h2:"h2",p:"p",blockquote:"blockquote",strong:"strong",ul:"ul",li:"li",code:"code",a:"a",pre:"pre",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,r.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"drop-storage-volume",children:"DROP STORAGE VOLUME"}),"\n",(0,t.jsx)(s.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,t.jsx)(s.p,{children:"\u5220\u9664\u6307\u5b9a\u5b58\u50a8\u5377\u3002\u5df2\u5220\u9664\u7684\u5b58\u50a8\u5377\u65e0\u6cd5\u88ab\u5f15\u7528\u3002\u8be5\u529f\u80fd\u81ea v3.1 \u8d77\u652f\u6301\u3002"}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"\u6ce8\u610f"})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"\u4ec5\u62e5\u6709\u6307\u5b9a\u5b58\u50a8\u5377 DROP \u6743\u9650\u7684\u7528\u6237\u53ef\u4ee5\u6267\u884c\u8be5\u64cd\u4f5c\u3002"}),"\n",(0,t.jsxs)(s.li,{children:["\u9ed8\u8ba4\u5b58\u50a8\u5377\u4ee5\u53ca\u5185\u7f6e\u5b58\u50a8\u5377 ",(0,t.jsx)(s.code,{children:"builtin_storage_volume"})," \u65e0\u6cd5\u5220\u9664\u3002\u60a8\u53ef\u4ee5\u901a\u8fc7 ",(0,t.jsx)(s.a,{href:"/doc/zh/docs/sql-reference/sql-statements/Administration/DESC_STORAGE_VOLUME",children:"DESC STORAGE VOLUME"})," \u67e5\u770b\u5b58\u50a8\u5377\u662f\u5426\u4e3a\u9ed8\u8ba4\u5b58\u50a8\u5377\u3002"]}),"\n",(0,t.jsx)(s.li,{children:"\u88ab\u5df2\u6709\u6570\u636e\u5e93\u6216\u4e91\u539f\u751f\u8868\u5f15\u7528\u7684\u5b58\u50a8\u5377\u65e0\u6cd5\u5220\u9664\u3002"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-SQL",children:"DROP STORAGE VOLUME [ IF EXISTS ] <storage_volume_name>\n"})}),"\n",(0,t.jsx)(s.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:(0,t.jsx)(s.strong,{children:"\u53c2\u6570"})}),(0,t.jsx)(s.th,{children:(0,t.jsx)(s.strong,{children:"\u8bf4\u660e"})})]})}),(0,t.jsx)(s.tbody,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"storage_volume_name"}),(0,t.jsx)(s.td,{children:"\u5f85\u5220\u9664\u7684\u5b58\u50a8\u5377\u7684\u540d\u79f0\u3002"})]})})]}),"\n",(0,t.jsx)(s.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,t.jsxs)(s.p,{children:["\u793a\u4f8b\u4e00\uff1a\u5220\u9664\u5b58\u50a8\u5377 ",(0,t.jsx)(s.code,{children:"my_s3_volume"}),"\u3002"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-Plain",children:"MySQL > DROP STORAGE VOLUME my_s3_volume;\nQuery OK, 0 rows affected (0.01 sec)\n"})}),"\n",(0,t.jsx)(s.h2,{id:"\u76f8\u5173-sql",children:"\u76f8\u5173 SQL"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"/doc/zh/docs/sql-reference/sql-statements/Administration/CREATE_STORAGE_VOLUME",children:"CREATE STORAGE VOLUME"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"/doc/zh/docs/sql-reference/sql-statements/Administration/ALTER_STORAGE_VOLUME",children:"ALTER STORAGE VOLUME"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"/doc/zh/docs/sql-reference/sql-statements/Administration/SET_DEFAULT_STORAGE_VOLUME",children:"SET DEFAULT STORAGE VOLUME"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"/doc/zh/docs/sql-reference/sql-statements/Administration/DESC_STORAGE_VOLUME",children:"DESC STORAGE VOLUME"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"/doc/zh/docs/sql-reference/sql-statements/Administration/SHOW_STORAGE_VOLUMES",children:"SHOW STORAGE VOLUMES"})}),"\n"]})]})}const h=function(e={}){const{wrapper:s}=Object.assign({},(0,r.ah)(),e.components);return s?(0,t.jsx)(s,Object.assign({},e,{children:(0,t.jsx)(a,e)})):a(e)}},11151:(e,s,n)=>{n.d(s,{Zo:()=>c,ah:()=>i});var t=n(67294);const r=t.createContext({});function i(e){const s=t.useContext(r);return t.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const l={};function c({components:e,children:s,disableParentContext:n}){let c;return c=n?"function"==typeof e?e({}):e||l:i(e),t.createElement(r.Provider,{value:c},s)}}}]);