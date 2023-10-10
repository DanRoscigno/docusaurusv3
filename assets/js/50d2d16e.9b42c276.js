"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[51223],{40073:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>E,frontMatter:()=>l,metadata:()=>r,toc:()=>d});var s=n(85893),a=n(11151);const l={},i="CREATE TABLE LIKE",r={id:"sql-reference/sql-statements/data-definition/CREATE TABLE LIKE",title:"CREATE TABLE LIKE",description:"Description",source:"@site/versioned_docs/version-3.1/sql-reference/sql-statements/data-definition/CREATE TABLE LIKE.md",sourceDirName:"sql-reference/sql-statements/data-definition",slug:"/sql-reference/sql-statements/data-definition/CREATE TABLE LIKE",permalink:"/docusaurusv3/docs/latest/sql-reference/sql-statements/data-definition/CREATE TABLE LIKE",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-statements/data-definition/CREATE TABLE LIKE.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"CREATE TABLE AS SELECT",permalink:"/docusaurusv3/docs/latest/sql-reference/sql-statements/data-definition/CREATE TABLE AS SELECT"},next:{title:"CREATE TABLE",permalink:"/docusaurusv3/docs/latest/sql-reference/sql-statements/data-definition/CREATE TABLE"}},c={},d=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Example",id:"example",level:2}];function o(e){const t=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",blockquote:"blockquote",strong:"strong",ol:"ol",li:"li"},(0,a.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"create-table-like",children:"CREATE TABLE LIKE"}),"\n",(0,s.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(t.p,{children:"Creates an identical empty table based on the definition of another table. The definition includes column definition, partitions, and table properties."}),"\n",(0,s.jsx)(t.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:"CREATE [EXTERNAL] TABLE [IF NOT EXISTS] [database.]table_name LIKE [database.]table_name\n"})}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"NOTE"})}),"\n"]}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["You must have the ",(0,s.jsx)(t.code,{children:"SELECT"})," privilege on the original table."]}),"\n",(0,s.jsx)(t.li,{children:"You can copy an external table such as MySQL."}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Under the test1 Database, create an empty table with the same table structure as table1, named table2."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:"CREATE TABLE test1.table2 LIKE test1.table1\n"})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Under the test2 Database, create an empty table with the same table structure as test1.table1, named table2."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:"CREATE TABLE test2.table2 LIKE test1.table1\n"})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Under the test1 Database, create an empty table with the same table structure as MySQL external table, named table2."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:"CREATE TABLE test1.table2 LIKE test1.table1\n"})}),"\n"]}),"\n"]})]})}const E=function(e={}){const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?(0,s.jsx)(t,Object.assign({},e,{children:(0,s.jsx)(o,e)})):o(e)}},11151:(e,t,n)=>{n.d(t,{Zo:()=>r,ah:()=>l});var s=n(67294);const a=s.createContext({});function l(e){const t=s.useContext(a);return s.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const i={};function r({components:e,children:t,disableParentContext:n}){let r;return r=n?"function"==typeof e?e({}):e||i:l(e),s.createElement(a.Provider,{value:r},t)}}}]);