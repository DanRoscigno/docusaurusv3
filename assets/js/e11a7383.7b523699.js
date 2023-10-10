"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[9295],{93030:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var s=n(85893),i=n(11151);const a={},r="TRUNCATE TABLE",l={id:"sql-reference/sql-statements/data-definition/TRUNCATE TABLE",title:"TRUNCATE TABLE",description:"Description",source:"@site/versioned_docs/version-3.1/sql-reference/sql-statements/data-definition/TRUNCATE TABLE.md",sourceDirName:"sql-reference/sql-statements/data-definition",slug:"/sql-reference/sql-statements/data-definition/TRUNCATE TABLE",permalink:"/docusaurusv3/docs/latest/sql-reference/sql-statements/data-definition/TRUNCATE TABLE",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-statements/data-definition/TRUNCATE TABLE.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"SHOW RESOURCES",permalink:"/docusaurusv3/docs/latest/sql-reference/sql-statements/data-definition/SHOW RESOURCES"},next:{title:"USE",permalink:"/docusaurusv3/docs/latest/sql-reference/sql-statements/data-definition/USE"}},c={},d=[{value:"Description",id:"description",level:2},{value:"Examples",id:"examples",level:2}];function o(e){const t=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",ol:"ol",li:"li"},(0,i.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"truncate-table",children:"TRUNCATE TABLE"}),"\n",(0,s.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(t.p,{children:"This statement is used to truncate the specified table and partition data."}),"\n",(0,s.jsx)(t.p,{children:"Syntax:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:"TRUNCATE TABLE [db.]tbl[ PARTITION(p1, p2, ...)]\n"})}),"\n",(0,s.jsx)(t.p,{children:"Note:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"This statement is used to truncate data while retaining tables or partitions."}),"\n",(0,s.jsx)(t.li,{children:"Unlike DELETE, this statement can only empty the specified tables or partitions as a whole, and filtering conditions cannot be added."}),"\n",(0,s.jsx)(t.li,{children:"Unlike DELETE, using this method to clear data will not affect query performance."}),"\n",(0,s.jsx)(t.li,{children:"This statement directly deletes data. The deleted data cannot be recovered."}),"\n",(0,s.jsx)(t.li,{children:"The table on which you perform this operation must be in the NORMAL state. For example, you cannot perform TRUNCATE TABLE on a table with SCHEMA CHANGE going on."}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Truncate table ",(0,s.jsx)(t.code,{children:"tbl"})," under ",(0,s.jsx)(t.code,{children:"example_db"}),"."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:"TRUNCATE TABLE example_db.tbl;\n"})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Truncate partitions ",(0,s.jsx)(t.code,{children:"p1"})," and ",(0,s.jsx)(t.code,{children:"p2"})," in table ",(0,s.jsx)(t.code,{children:"tbl"}),"."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:"TRUNCATE TABLE tbl PARTITION(p1, p2);\n"})}),"\n"]}),"\n"]})]})}const h=function(e={}){const{wrapper:t}=Object.assign({},(0,i.ah)(),e.components);return t?(0,s.jsx)(t,Object.assign({},e,{children:(0,s.jsx)(o,e)})):o(e)}},11151:(e,t,n)=>{n.d(t,{Zo:()=>l,ah:()=>a});var s=n(67294);const i=s.createContext({});function a(e){const t=s.useContext(i);return s.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const r={};function l({components:e,children:t,disableParentContext:n}){let l;return l=n?"function"==typeof e?e({}):e||r:a(e),s.createElement(i.Provider,{value:l},t)}}}]);