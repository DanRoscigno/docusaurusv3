"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[4903],{78861:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>d,default:()=>o,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var t=n(85893),r=n(11151);const i={displayed_sidebar:"English"},d="SHOW ALTER MATERIALIZED VIEW",a={id:"sql-reference/sql-statements/data-manipulation/SHOW_ALTER_MATERIALIZED_VIEW",title:"SHOW ALTER MATERIALIZED VIEW",description:"Description",source:"@site/versioned_docs/version-3.0/sql-reference/sql-statements/data-manipulation/SHOW_ALTER_MATERIALIZED_VIEW.md",sourceDirName:"sql-reference/sql-statements/data-manipulation",slug:"/sql-reference/sql-statements/data-manipulation/SHOW_ALTER_MATERIALIZED_VIEW",permalink:"/doc/docs/3.0/sql-reference/sql-statements/data-manipulation/SHOW_ALTER_MATERIALIZED_VIEW",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-statements/data-manipulation/SHOW_ALTER_MATERIALIZED_VIEW.md",tags:[],version:"3.0",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"SHOW ALTER TABLE",permalink:"/doc/docs/3.0/sql-reference/sql-statements/data-manipulation/SHOW_ALTER"},next:{title:"SHOW BACKUP",permalink:"/doc/docs/3.0/sql-reference/sql-statements/data-manipulation/SHOW_BACKUP"}},l={},c=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2}];function h(e){const s=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",strong:"strong",tbody:"tbody",td:"td"},(0,r.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"show-alter-materialized-view",children:"SHOW ALTER MATERIALIZED VIEW"}),"\n",(0,t.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(s.p,{children:"Shows the building status of synchronous materialized views."}),"\n",(0,t.jsx)(s.h2,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-SQL",children:"SHOW ALTER MATERIALIZED VIEW [ { FROM | IN } db_name]\n"})}),"\n",(0,t.jsx)(s.p,{children:"Parameters in brackets [] is optional."}),"\n",(0,t.jsx)(s.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:(0,t.jsx)(s.strong,{children:"Parameter"})}),(0,t.jsx)(s.th,{children:(0,t.jsx)(s.strong,{children:"Required"})}),(0,t.jsx)(s.th,{children:(0,t.jsx)(s.strong,{children:"Description"})})]})}),(0,t.jsx)(s.tbody,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"db_name"}),(0,t.jsx)(s.td,{children:"no"}),(0,t.jsx)(s.td,{children:"The name of the database to which the materialized view resides. If this parameter is not specified, the current database is used by default."})]})})]}),"\n",(0,t.jsx)(s.h2,{id:"returns",children:"Returns"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:(0,t.jsx)(s.strong,{children:"Return"})}),(0,t.jsx)(s.th,{children:(0,t.jsx)(s.strong,{children:"Description"})})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"JobId"}),(0,t.jsx)(s.td,{children:"The ID of refresh job."})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"TableName"}),(0,t.jsx)(s.td,{children:"The name of the table."})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"CreateTime"}),(0,t.jsx)(s.td,{children:"The time when refresh job is created."})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"FinishedTime"}),(0,t.jsx)(s.td,{children:"The time when refresh job is finished."})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"BaseIndexName"}),(0,t.jsx)(s.td,{children:"The name of the base table."})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"RollupIndexName"}),(0,t.jsx)(s.td,{children:"The name of the materialized view."})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"RollupId"}),(0,t.jsx)(s.td,{children:"The ID of the materialized view rollup."})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"TransactionId"}),(0,t.jsx)(s.td,{children:"The ID of transaction that waits to be executed."})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"State"}),(0,t.jsx)(s.td,{children:"The state of the job."})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Msg"}),(0,t.jsx)(s.td,{children:"Error message."})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Progress"}),(0,t.jsx)(s.td,{children:"Progress of the refresh job."})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Timeout"}),(0,t.jsx)(s.td,{children:"Timeout for the refresh job."})]})]})]}),"\n",(0,t.jsx)(s.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(s.p,{children:"Example 1: building status of synchronous materialized views"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-Plain",children:"MySQL > SHOW ALTER MATERIALIZED VIEW\\G\n*************************** 1. row ***************************\n          JobId: 475991\n      TableName: lineorder\n     CreateTime: 2022-08-24 19:46:53\n   FinishedTime: 2022-08-24 19:47:15\n  BaseIndexName: lineorder\nRollupIndexName: lo_mv_sync_1\n       RollupId: 475992\n  TransactionId: 33067\n          State: FINISHED\n            Msg: \n       Progress: NULL\n        Timeout: 86400\n*************************** 2. row ***************************\n          JobId: 477337\n      TableName: lineorder\n     CreateTime: 2022-08-24 19:47:25\n   FinishedTime: 2022-08-24 19:47:45\n  BaseIndexName: lineorder\nRollupIndexName: lo_mv_sync_2\n       RollupId: 477338\n  TransactionId: 33068\n          State: FINISHED\n            Msg: \n       Progress: NULL\n        Timeout: 86400\n2 rows in set (0.00 sec)\n"})})]})}const o=function(e={}){const{wrapper:s}=Object.assign({},(0,r.ah)(),e.components);return s?(0,t.jsx)(s,Object.assign({},e,{children:(0,t.jsx)(h,e)})):h(e)}},11151:(e,s,n)=>{n.d(s,{Zo:()=>a,ah:()=>i});var t=n(67294);const r=t.createContext({});function i(e){const s=t.useContext(r);return t.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const d={};function a({components:e,children:s,disableParentContext:n}){let a;return a=n?"function"==typeof e?e({}):e||d:i(e),t.createElement(r.Provider,{value:a},s)}}}]);