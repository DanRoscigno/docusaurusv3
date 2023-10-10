"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[18797],{49080:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var t=s(85893),l=s(11151);const i={},r="DROP TABLE",c={id:"sql-reference/sql-statements/data-definition/DROP TABLE",title:"DROP TABLE",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.0/sql-reference/sql-statements/data-definition/DROP TABLE.md",sourceDirName:"sql-reference/sql-statements/data-definition",slug:"/sql-reference/sql-statements/data-definition/DROP TABLE",permalink:"/doc/zh/docs/3.0/sql-reference/sql-statements/data-definition/DROP TABLE",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/sql-reference/sql-statements/data-definition/DROP TABLE.md",tags:[],version:"3.0",frontMatter:{},sidebar:"documentation",previous:{title:"DROP STATS",permalink:"/doc/zh/docs/3.0/sql-reference/sql-statements/data-definition/DROP STATS"},next:{title:"DROP VIEW",permalink:"/doc/zh/docs/3.0/sql-reference/sql-statements/data-definition/DROP VIEW"}},a={},d=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"References",id:"references",level:2}];function o(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",ol:"ol",li:"li",a:"a",ul:"ul"},(0,l.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"drop-table",children:"DROP TABLE"}),"\n",(0,t.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,t.jsx)(n.p,{children:"\u8be5\u8bed\u53e5\u7528\u4e8e\u5220\u9664 table \u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"DROP TABLE [IF EXISTS] [db_name.]table_name [FORCE]\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u8bf4\u660e\uff1a"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["\u6267\u884c DROP TABLE \u4e00\u6bb5\u65f6\u95f4\u5185(\u9ed8\u8ba4 1 \u5929)\uff0c\u53ef\u4ee5\u901a\u8fc7 ",(0,t.jsx)(n.a,{href:"/doc/zh/docs/3.0/sql-reference/sql-statements/data-definition/RECOVER",children:"RECOVER"})," \u8bed\u53e5\u6062\u590d\u88ab\u5220\u9664\u7684\u8868\u3002\u8be6\u89c1 RECOVER \u8bed\u53e5"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["\u5982\u679c\u6267\u884c ",(0,t.jsx)(n.code,{children:"DROP TABLE FORCE"}),"\uff0c\u5219\u7cfb\u7edf\u4e0d\u4f1a\u68c0\u67e5\u8be5\u8868\u662f\u5426\u5b58\u5728\u672a\u5b8c\u6210\u7684\u4e8b\u52a1\uff0c\u8868\u5c06\u76f4\u63a5\u88ab\u5220\u9664\u5e76\u4e14\u4e0d\u80fd\u88ab\u6062\u590d\uff0c\u4e00\u822c\u4e0d\u5efa\u8bae\u6267\u884c\u6b64\u64cd\u4f5c\u3002"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u5220\u9664\u4e00\u4e2a table\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"DROP TABLE my_table;\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u5982\u679c\u5b58\u5728\uff0c\u5220\u9664\u6307\u5b9a database \u7684 table\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"DROP TABLE IF EXISTS example_db.my_table;\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u5f3a\u5236\u5220\u9664\u8868\uff0c\u5e76\u6e05\u7406\u78c1\u76d8\u6587\u4ef6\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"DROP TABLE my_table FORCE;\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"references",children:"References"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/doc/zh/docs/3.0/sql-reference/sql-statements/data-definition/CREATE%20TABLE",children:"CREATE TABLE"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/doc/zh/docs/3.0/sql-reference/sql-statements/data-manipulation/SHOW%20TABLES",children:"SHOW TABLES"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/doc/zh/docs/3.0/sql-reference/sql-statements/data-manipulation/SHOW%20CREATE%20TABLE",children:"SHOW CREATE TABLE"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/doc/zh/docs/3.0/sql-reference/sql-statements/data-definition/ALTER%20TABLE",children:"ALTER TABLE"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/doc/zh/docs/3.0/sql-reference/sql-statements/data-manipulation/SHOW%20ALTER",children:"SHOW ALTER TABLE"})}),"\n"]})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,l.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(o,e)})):o(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>c,ah:()=>i});var t=s(67294);const l=t.createContext({});function i(e){const n=t.useContext(l);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const r={};function c({components:e,children:n,disableParentContext:s}){let c;return c=s?"function"==typeof e?e({}):e||r:i(e),t.createElement(l.Provider,{value:c},n)}}}]);