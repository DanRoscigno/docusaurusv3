"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[58073],{10782:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>E,frontMatter:()=>l,metadata:()=>r,toc:()=>d});var s=n(85893),a=n(11151);const l={},i="CREATE TABLE LIKE",r={id:"sql-reference/sql-statements/data-definition/CREATE TABLE LIKE",title:"CREATE TABLE LIKE",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.1/sql-reference/sql-statements/data-definition/CREATE TABLE LIKE.md",sourceDirName:"sql-reference/sql-statements/data-definition",slug:"/sql-reference/sql-statements/data-definition/CREATE TABLE LIKE",permalink:"/docusaurusv3/zh/docs/latest/sql-reference/sql-statements/data-definition/CREATE TABLE LIKE",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-statements/data-definition/CREATE TABLE LIKE.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"CREATE TABLE AS SELECT",permalink:"/docusaurusv3/zh/docs/latest/sql-reference/sql-statements/data-definition/CREATE TABLE AS SELECT"},next:{title:"CREATE TABLE",permalink:"/docusaurusv3/zh/docs/latest/sql-reference/sql-statements/data-definition/CREATE TABLE"}},c={},d=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function o(e){const t=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",ol:"ol",li:"li",a:"a"},(0,a.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"create-table-like",children:"CREATE TABLE LIKE"}),"\n",(0,s.jsx)(t.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,s.jsx)(t.p,{children:"\u8be5\u8bed\u53e5\u7528\u4e8e\u521b\u5efa\u4e00\u4e2a\u8868\u7ed3\u6784\u548c\u53e6\u4e00\u5f20\u8868\u5b8c\u5168\u76f8\u540c\u7684\u7a7a\u8868\u3002"}),"\n",(0,s.jsx)(t.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:"CREATE [EXTERNAL] TABLE [IF NOT EXISTS] [database.]table_name LIKE [database.]table_name\n"})}),"\n",(0,s.jsx)(t.p,{children:"\u8bf4\u660e:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"\u590d\u5236\u7684\u8868\u7ed3\u6784\u5305\u62ec Column Defination\u3001Partitions\u3001Table Properties \u7b49\u3002"}),"\n",(0,s.jsxs)(t.li,{children:["\u7528\u6237\u9700\u8981\u5bf9\u590d\u5236\u7684\u539f\u8868\u6709 ",(0,s.jsx)(t.code,{children:"SELECT"})," \u6743\u9650\uff0c\u6743\u9650\u63a7\u5236\u8bf7\u53c2\u8003 ",(0,s.jsx)(t.a,{href:"/docusaurusv3/zh/docs/latest/sql-reference/sql-statements/account-management/GRANT",children:"GRANT"})," \u7ae0\u8282\u3002"]}),"\n",(0,s.jsx)(t.li,{children:"\u652f\u6301\u590d\u5236 MySQL \u7b49\u5916\u8868\u3002"}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"\u5728 test1 \u5e93\u4e0b\u521b\u5efa\u4e00\u5f20\u8868\u7ed3\u6784\u548c table1 \u76f8\u540c\u7684\u7a7a\u8868\uff0c\u8868\u540d\u4e3a table2\u3002"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:"CREATE TABLE test1.table2 LIKE test1.table1;\n"})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"\u5728 test2 \u5e93\u4e0b\u521b\u5efa\u4e00\u5f20\u8868\u7ed3\u6784\u548c test1.table1 \u76f8\u540c\u7684\u7a7a\u8868\uff0c\u8868\u540d\u4e3a table2\u3002"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:"CREATE TABLE test2.table2 LIKE test1.table1;\n"})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"\u5728 test1 \u5e93\u4e0b\u521b\u5efa\u4e00\u5f20\u8868\u7ed3\u6784\u548c MySQL \u5916\u8868 table1 \u76f8\u540c\u7684\u7a7a\u8868\uff0c\u8868\u540d\u4e3a table2\u3002"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:"CREATE TABLE test1.table2 LIKE test1.table1;\n"})}),"\n"]}),"\n"]})]})}const E=function(e={}){const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?(0,s.jsx)(t,Object.assign({},e,{children:(0,s.jsx)(o,e)})):o(e)}},11151:(e,t,n)=>{n.d(t,{Zo:()=>r,ah:()=>l});var s=n(67294);const a=s.createContext({});function l(e){const t=s.useContext(a);return s.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const i={};function r({components:e,children:t,disableParentContext:n}){let r;return r=n?"function"==typeof e?e({}):e||i:l(e),s.createElement(a.Provider,{value:r},t)}}}]);