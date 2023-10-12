"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[10294],{76236:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var t=s(85893),i=s(11151);const a={},l="DROP TABLE",r={id:"sql-reference/sql-statements/data-definition/DROP TABLE",title:"DROP TABLE",description:"Description",source:"@site/versioned_docs/version-3.0/sql-reference/sql-statements/data-definition/DROP TABLE.md",sourceDirName:"sql-reference/sql-statements/data-definition",slug:"/sql-reference/sql-statements/data-definition/DROP TABLE",permalink:"/doc/docs/3.0/sql-reference/sql-statements/data-definition/DROP TABLE",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/sql-reference/sql-statements/data-definition/DROP TABLE.md",tags:[],version:"3.0",frontMatter:{},sidebar:"Chinese31",previous:{title:"DROP STATS",permalink:"/doc/docs/3.0/sql-reference/sql-statements/data-definition/DROP STATS"},next:{title:"DROP VIEW",permalink:"/doc/docs/3.0/sql-reference/sql-statements/data-definition/DROP VIEW"}},d={},c=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Examples",id:"examples",level:2},{value:"References",id:"references",level:2}];function o(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",ul:"ul",li:"li",a:"a",ol:"ol"},(0,i.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"drop-table",children:"DROP TABLE"}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(n.p,{children:"This statement is used to delete a table."}),"\n",(0,t.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"DROP TABLE [IF EXISTS] [db_name.]table_name [FORCE]\n"})}),"\n",(0,t.jsx)(n.p,{children:"Note:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["If a table was deleted within 24 hours by using the DROP TABLE statement, you can use the ",(0,t.jsx)(n.a,{href:"/doc/docs/3.0/sql-reference/sql-statements/data-definition/RECOVER",children:"RECOVER"})," statement to restore the table."]}),"\n",(0,t.jsx)(n.li,{children:"If DROP Table FORCE is executed, the table will be deleted directly and cannot be recovered without checking whether there are unfinished activities in the database. Generally this operation is not recommended."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Drop a table."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"DROP TABLE my_table;\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"If it exists, then drop the table on the specified database."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"DROP TABLE IF EXISTS example_db.my_table;\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Force to drop the table and clear its data on disk."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"DROP TABLE my_table FORCE;\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"references",children:"References"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/doc/docs/3.0/sql-reference/sql-statements/data-definition/CREATE%20TABLE",children:"CREATE TABLE"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/doc/docs/3.0/sql-reference/sql-statements/data-manipulation/SHOW%20TABLES",children:"SHOW TABLES"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/doc/docs/3.0/sql-reference/sql-statements/data-manipulation/SHOW%20CREATE%20TABLE",children:"SHOW CREATE TABLE"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/doc/docs/3.0/sql-reference/sql-statements/data-definition/ALTER%20TABLE",children:"ALTER TABLE"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/doc/docs/3.0/sql-reference/sql-statements/data-manipulation/SHOW%20ALTER",children:"SHOW ALTER TABLE"})}),"\n"]})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(o,e)})):o(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>r,ah:()=>a});var t=s(67294);const i=t.createContext({});function a(e){const n=t.useContext(i);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const l={};function r({components:e,children:n,disableParentContext:s}){let r;return r=s?"function"==typeof e?e({}):e||l:a(e),t.createElement(i.Provider,{value:r},n)}}}]);