"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[20859],{46562:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>o});var s=n(85893),a=n(11151);const r={},i="CANCEL RESTORE",d={id:"sql-reference/sql-statements/data-definition/CANCEL RESTORE",title:"CANCEL RESTORE",description:"Description",source:"@site/versioned_docs/version-3.0/sql-reference/sql-statements/data-definition/CANCEL RESTORE.md",sourceDirName:"sql-reference/sql-statements/data-definition",slug:"/sql-reference/sql-statements/data-definition/CANCEL RESTORE",permalink:"/doc/docs/3.0/sql-reference/sql-statements/data-definition/CANCEL RESTORE",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/sql-reference/sql-statements/data-definition/CANCEL RESTORE.md",tags:[],version:"3.0",frontMatter:{},sidebar:"documentation",previous:{title:"CANCEL BACKUP",permalink:"/doc/docs/3.0/sql-reference/sql-statements/data-definition/CANCEL BACKUP"},next:{title:"CREATE ANALYZE",permalink:"/doc/docs/3.0/sql-reference/sql-statements/data-definition/CREATE ANALYZE"}},c={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}];function l(e){const t=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",blockquote:"blockquote",strong:"strong",pre:"pre",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,a.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"cancel-restore",children:"CANCEL RESTORE"}),"\n",(0,s.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(t.p,{children:["Cancels an on-going RESTORE task in a specified database. For more information, see ",(0,s.jsx)(t.a,{href:"/doc/docs/3.0/administration/Backup_and_restore",children:"data backup and restoration"}),"."]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"CAUTION"})}),"\n",(0,s.jsx)(t.p,{children:"If a RESTORE task is canceled during the COMMIT phase, the restored data will be corrupted and inaccessible. In this case, you can only perform the RESTORE  operation again and wait for the job to complete."}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-SQL",children:"CANCEL RESTORE FROM <db_name>\n"})}),"\n",(0,s.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:(0,s.jsx)(t.strong,{children:"Parameter"})}),(0,s.jsx)(t.th,{children:(0,s.jsx)(t.strong,{children:"Description"})})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"db_name"}),(0,s.jsx)(t.td,{children:"Name of the database that the RESTORE task belongs to."})]})})]}),"\n",(0,s.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsxs)(t.p,{children:["Example 1: Cancels the RESTORE task under the database ",(0,s.jsx)(t.code,{children:"example_db"}),"."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-SQL",children:"CANCEL RESTORE FROM example_db;\n"})})]})}const h=function(e={}){const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?(0,s.jsx)(t,Object.assign({},e,{children:(0,s.jsx)(l,e)})):l(e)}},11151:(e,t,n)=>{n.d(t,{Zo:()=>d,ah:()=>r});var s=n(67294);const a=s.createContext({});function r(e){const t=s.useContext(a);return s.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const i={};function d({components:e,children:t,disableParentContext:n}){let d;return d=n?"function"==typeof e?e({}):e||i:r(e),s.createElement(a.Provider,{value:d},t)}}}]);