"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[90060],{60645:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>c});var t=n(85893),a=n(11151);const r={},i="BACKUP",d={id:"sql-reference/sql-statements/data-definition/BACKUP",title:"BACKUP",description:"Description",source:"@site/versioned_docs/version-3.1/sql-reference/sql-statements/data-definition/BACKUP.md",sourceDirName:"sql-reference/sql-statements/data-definition",slug:"/sql-reference/sql-statements/data-definition/BACKUP",permalink:"/docusaurusv3/docs/sql-reference/sql-statements/data-definition/BACKUP",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-statements/data-definition/BACKUP.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"ANALYZE TABLE",permalink:"/docusaurusv3/docs/sql-reference/sql-statements/data-definition/ANALYZE TABLE"},next:{title:"CANCEL ALTER TABLE",permalink:"/docusaurusv3/docs/sql-reference/sql-statements/data-definition/CANCEL ALTER TABLE"}},l={},c=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}];function o(e){const s=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",blockquote:"blockquote",strong:"strong",ul:"ul",li:"li",pre:"pre",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,a.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"backup",children:"BACKUP"}),"\n",(0,t.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(s.p,{children:["Backs up data in a specified database, table, or partition. Currently, StarRocks only supports backing up data in OLAP tables. For more information, see ",(0,t.jsx)(s.a,{href:"/docusaurusv3/docs/administration/Backup_and_restore",children:"data backup and restoration"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:["BACKUP is an asynchronous operation. You can check the status of a BACKUP job status using ",(0,t.jsx)(s.a,{href:"/docusaurusv3/docs/sql-reference/sql-statements/data-manipulation/SHOW%20BACKUP",children:"SHOW BACKUP"}),", or cancel a BACKUP job using ",(0,t.jsx)(s.a,{href:"/docusaurusv3/docs/sql-reference/sql-statements/data-definition/CANCEL%20BACKUP",children:"CANCEL BACKUP"}),". You can view the snapshot information using ",(0,t.jsx)(s.a,{href:"/docusaurusv3/docs/sql-reference/sql-statements/data-manipulation/SHOW%20SNAPSHOT",children:"SHOW SNAPSHOT"}),"."]}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"CAUTION"})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Only users with the ADMIN privilege can back up data."}),"\n",(0,t.jsx)(s.li,{children:"In each database, only one running BACKUP or RESTORE job is allowed each time. Otherwise, StarRocks returns an error."}),"\n",(0,t.jsx)(s.li,{children:"StarRocks does not support specifying data compression algorithm for data backup."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-SQL",children:'BACKUP SNAPSHOT <db_name>.<snapshot_name>\nTO <repository_name>\n[ ON ( <table_name> [ PARTITION ( <partition_name> [, ...] ) ]\n       [, ...] ) ]\n[ PROPERTIES ("key"="value" [, ...] ) ]\n'})}),"\n",(0,t.jsx)(s.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:(0,t.jsx)(s.strong,{children:"Parameter"})}),(0,t.jsx)(s.th,{children:(0,t.jsx)(s.strong,{children:"Description"})})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"db_name"}),(0,t.jsx)(s.td,{children:"Name of the database that stores the data to be backed up."})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"snapshot_name"}),(0,t.jsx)(s.td,{children:"Specify a name for the data snapshot. Globally unique."})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"repository_name"}),(0,t.jsxs)(s.td,{children:["Repository name. You can create a repository using ",(0,t.jsx)(s.a,{href:"/docusaurusv3/docs/sql-reference/sql-statements/data-definition/CREATE%20REPOSITORY",children:"CREATE REPOSITORY"}),"."]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"ON"}),(0,t.jsx)(s.td,{children:"Name of the tables to be backed up. The whole database is backed up if this parameter is not specified."})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"PARTITION"}),(0,t.jsx)(s.td,{children:"Name of the partitions to be backed up. The whole table is backed up if this parameter is not specified."})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"PROPERTIES"}),(0,t.jsxs)(s.td,{children:["Properties of the data snapshot. Valid keys:",(0,t.jsx)(s.code,{children:"type"}),": Backup type. Currently, only full backup ",(0,t.jsx)(s.code,{children:"FULL"})," is supported. Default: ",(0,t.jsx)(s.code,{children:"FULL"}),".",(0,t.jsx)(s.code,{children:"timeout"}),": Task timeout. Unit: second. Default: ",(0,t.jsx)(s.code,{children:"86400"}),"."]})]})]})]}),"\n",(0,t.jsx)(s.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsxs)(s.p,{children:["Example 1: Backs up the database ",(0,t.jsx)(s.code,{children:"example_db"})," to the repository ",(0,t.jsx)(s.code,{children:"example_repo"}),"."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-SQL",children:'BACKUP SNAPSHOT example_db.snapshot_label1\nTO example_repo\nPROPERTIES ("type" = "full");\n'})}),"\n",(0,t.jsxs)(s.p,{children:["Example 2: Backs up the table ",(0,t.jsx)(s.code,{children:"example_tbl"})," in ",(0,t.jsx)(s.code,{children:"example_db"})," to ",(0,t.jsx)(s.code,{children:"example_repo"}),"."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-SQL",children:"BACKUP SNAPSHOT example_db.snapshot_label2\nTO example_repo\nON (example_tbl);\n"})}),"\n",(0,t.jsxs)(s.p,{children:["Example 2: Backs up the partitions ",(0,t.jsx)(s.code,{children:"p1"})," and ",(0,t.jsx)(s.code,{children:"p2"})," of ",(0,t.jsx)(s.code,{children:"example_tbl"})," and the table ",(0,t.jsx)(s.code,{children:"example_tbl2"})," in ",(0,t.jsx)(s.code,{children:"example_db"})," to ",(0,t.jsx)(s.code,{children:"example_repo"}),"."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-SQL",children:"BACKUP SNAPSHOT example_db.snapshot_label3\nTO example_repo\nON(\n    example_tbl PARTITION (p1, p2),\n    example_tbl2\n);\n"})})]})}const h=function(e={}){const{wrapper:s}=Object.assign({},(0,a.ah)(),e.components);return s?(0,t.jsx)(s,Object.assign({},e,{children:(0,t.jsx)(o,e)})):o(e)}},11151:(e,s,n)=>{n.d(s,{Zo:()=>d,ah:()=>r});var t=n(67294);const a=t.createContext({});function r(e){const s=t.useContext(a);return t.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const i={};function d({components:e,children:s,disableParentContext:n}){let d;return d=n?"function"==typeof e?e({}):e||i:r(e),t.createElement(a.Provider,{value:d},s)}}}]);