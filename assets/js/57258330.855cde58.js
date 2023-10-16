"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[41492],{83608:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var n=s(85893),r=s(11151);const i={displayed_sidebar:"English"},a="DROP REPOSITORY",o={id:"sql-reference/sql-statements/data-definition/DROP_REPOSITORY",title:"DROP REPOSITORY",description:"Description",source:"@site/versioned_docs/version-3.0/sql-reference/sql-statements/data-definition/DROP_REPOSITORY.md",sourceDirName:"sql-reference/sql-statements/data-definition",slug:"/sql-reference/sql-statements/data-definition/DROP_REPOSITORY",permalink:"/doc/docs/3.0/sql-reference/sql-statements/data-definition/DROP_REPOSITORY",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-statements/data-definition/DROP_REPOSITORY.md",tags:[],version:"3.0",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"DROP MATERIALIZED VIEW",permalink:"/doc/docs/3.0/sql-reference/sql-statements/data-definition/DROP_MATERIALIZED_VIEW"},next:{title:"DROP RESOURCE",permalink:"/doc/docs/3.0/sql-reference/sql-statements/data-definition/DROP_RESOURCE"}},d={},l=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2}];function c(e){const t=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",blockquote:"blockquote",strong:"strong",ul:"ul",li:"li",pre:"pre",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,r.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"drop-repository",children:"DROP REPOSITORY"}),"\n",(0,n.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,n.jsxs)(t.p,{children:["Deletes a repository. Repositories are used to store data snapshots for ",(0,n.jsx)(t.a,{href:"/doc/docs/3.0/administration/Backup_and_restore",children:"data backup and restoration"}),"."]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"CAUTION"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Only root user and superuser can delete a repository."}),"\n",(0,n.jsx)(t.li,{children:"This operation only deletes the mapping of the repository in StarRocks, and does not delete the actual data. You need to delete it manually in the remote storage system. After deletion, you can map to that repository again by specifying the same remote storage system path."}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"syntax",children:"Syntax"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-SQL",children:"DROP REPOSITORY <repository_name>\n"})}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:(0,n.jsx)(t.strong,{children:"Parameter"})}),(0,n.jsx)(t.th,{children:(0,n.jsx)(t.strong,{children:"Description"})})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"repository_name"}),(0,n.jsx)(t.td,{children:"Name of the repository to be deleted."})]})})]}),"\n",(0,n.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,n.jsxs)(t.p,{children:["Example 1: deletes a repository named ",(0,n.jsx)(t.code,{children:"oss_repo"}),"."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-SQL",children:"DROP REPOSITORY `oss_repo`;\n"})})]})}const h=function(e={}){const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(c,e)})):c(e)}},11151:(e,t,s)=>{s.d(t,{Zo:()=>o,ah:()=>i});var n=s(67294);const r=n.createContext({});function i(e){const t=n.useContext(r);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const a={};function o({components:e,children:t,disableParentContext:s}){let o;return o=s?"function"==typeof e?e({}):e||a:i(e),n.createElement(r.Provider,{value:o},t)}}}]);