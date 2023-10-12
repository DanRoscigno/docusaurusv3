"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[32935],{29859:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>d,toc:()=>l});var n=t(85893),r=t(11151);const a={},i="SHOW SNAPSHOT",d={id:"sql-reference/sql-statements/data-manipulation/SHOW SNAPSHOT",title:"SHOW SNAPSHOT",description:"Description",source:"@site/versioned_docs/version-3.0/sql-reference/sql-statements/data-manipulation/SHOW SNAPSHOT.md",sourceDirName:"sql-reference/sql-statements/data-manipulation",slug:"/sql-reference/sql-statements/data-manipulation/SHOW SNAPSHOT",permalink:"/doc/docs/3.0/sql-reference/sql-statements/data-manipulation/SHOW SNAPSHOT",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/sql-reference/sql-statements/data-manipulation/SHOW SNAPSHOT.md",tags:[],version:"3.0",frontMatter:{},sidebar:"Chinese31",previous:{title:"SHOW ROUTINE LOAD",permalink:"/doc/docs/3.0/sql-reference/sql-statements/data-manipulation/SHOW ROUTINE LOAD"},next:{title:"SHOW TABLES",permalink:"/doc/docs/3.0/sql-reference/sql-statements/data-manipulation/SHOW TABLES"}},c={},l=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return",id:"return",level:2},{value:"Example",id:"example",level:2}];function o(e){const s=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",pre:"pre",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",strong:"strong",tbody:"tbody",td:"td"},(0,r.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"show-snapshot",children:"SHOW SNAPSHOT"}),"\n",(0,n.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,n.jsxs)(s.p,{children:["Views data snapshots in a specified repository. For more information, see ",(0,n.jsx)(s.a,{href:"/doc/docs/3.0/administration/Backup_and_restore",children:"data backup and restoration"}),"."]}),"\n",(0,n.jsx)(s.h2,{id:"syntax",children:"Syntax"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-SQL",children:"SHOW SNAPSHOT ON <repo_name>\n[WHERE SNAPSHOT = <snapshot_name> [AND TIMESTAMP = <backup_timestamp>]]\n"})}),"\n",(0,n.jsx)(s.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:(0,n.jsx)(s.strong,{children:"Parameter"})}),(0,n.jsx)(s.th,{children:(0,n.jsx)(s.strong,{children:"Description"})})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"repo_name"}),(0,n.jsx)(s.td,{children:"Name of the repository that the snapshot belongs to."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"snapshot_nam"}),(0,n.jsx)(s.td,{children:"Name of the snapshot."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"backup_timestamp"}),(0,n.jsx)(s.td,{children:"Backup timestamp of the snapshot."})]})]})]}),"\n",(0,n.jsx)(s.h2,{id:"return",children:"Return"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:(0,n.jsx)(s.strong,{children:"Return"})}),(0,n.jsx)(s.th,{children:(0,n.jsx)(s.strong,{children:"Description"})})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Snapshot"}),(0,n.jsx)(s.td,{children:"Name of the snapshot."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Timestamp"}),(0,n.jsx)(s.td,{children:"Backup timestamp of the snapshot."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Status"}),(0,n.jsxs)(s.td,{children:["Displays ",(0,n.jsx)(s.code,{children:"OK"})," if the snapshot is okay. Displays error message if the snapshot is not okay."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Database"}),(0,n.jsx)(s.td,{children:"Name of the database that the snapshot belongs to."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Details"}),(0,n.jsx)(s.td,{children:"JSON-formatted directory and structure of the snapshot."})]})]})]}),"\n",(0,n.jsx)(s.h2,{id:"example",children:"Example"}),"\n",(0,n.jsxs)(s.p,{children:["Example 1: Views snapshots in repository ",(0,n.jsx)(s.code,{children:"example_repo"}),"."]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-SQL",children:"SHOW SNAPSHOT ON example_repo;\n"})}),"\n",(0,n.jsxs)(s.p,{children:["Example 2: Views the snapshot named ",(0,n.jsx)(s.code,{children:"backup1"})," in repository ",(0,n.jsx)(s.code,{children:"example_repo"}),"."]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-SQL",children:'SHOW SNAPSHOT ON example_repo\nWHERE SNAPSHOT = "backup1";\n'})}),"\n",(0,n.jsxs)(s.p,{children:["Example 3: Views the snapshot named ",(0,n.jsx)(s.code,{children:"backup1"})," with backup timestamp ",(0,n.jsx)(s.code,{children:"2018-05-05-15-34-26"})," in repository ",(0,n.jsx)(s.code,{children:"example_repo"}),"."]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-SQL",children:'SHOW SNAPSHOT ON example_repo \nWHERE SNAPSHOT = "backup1" AND TIMESTAMP = "2018-05-05-15-34-26";\n'})})]})}const h=function(e={}){const{wrapper:s}=Object.assign({},(0,r.ah)(),e.components);return s?(0,n.jsx)(s,Object.assign({},e,{children:(0,n.jsx)(o,e)})):o(e)}},11151:(e,s,t)=>{t.d(s,{Zo:()=>d,ah:()=>a});var n=t(67294);const r=n.createContext({});function a(e){const s=n.useContext(r);return n.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const i={};function d({components:e,children:s,disableParentContext:t}){let d;return d=t?"function"==typeof e?e({}):e||i:a(e),n.createElement(r.Provider,{value:d},s)}}}]);