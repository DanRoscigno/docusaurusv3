"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[24106],{69511:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var n=t(85893),r=t(11151);const i={},d="SHOW ALTER MATERIALIZED VIEW",a={id:"sql-reference/sql-statements/data-manipulation/SHOW ALTER MATERIALIZED VIEW",title:"SHOW ALTER MATERIALIZED VIEW",description:"Description",source:"@site/versioned_docs/version-3.1/sql-reference/sql-statements/data-manipulation/SHOW ALTER MATERIALIZED VIEW.md",sourceDirName:"sql-reference/sql-statements/data-manipulation",slug:"/sql-reference/sql-statements/data-manipulation/SHOW ALTER MATERIALIZED VIEW",permalink:"/docusaurusv3/docs/latest/sql-reference/sql-statements/data-manipulation/SHOW ALTER MATERIALIZED VIEW",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-statements/data-manipulation/SHOW ALTER MATERIALIZED VIEW.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"SELECT",permalink:"/docusaurusv3/docs/latest/sql-reference/sql-statements/data-manipulation/SELECT"},next:{title:"SHOW ALTER TABLE",permalink:"/docusaurusv3/docs/latest/sql-reference/sql-statements/data-manipulation/SHOW ALTER"}},l={},c=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2}];function o(e){const s=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",strong:"strong",tbody:"tbody",td:"td"},(0,r.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"show-alter-materialized-view",children:"SHOW ALTER MATERIALIZED VIEW"}),"\n",(0,n.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,n.jsx)(s.p,{children:"Shows the building status of synchronous materialized views."}),"\n",(0,n.jsx)(s.h2,{id:"syntax",children:"Syntax"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-SQL",children:"SHOW ALTER MATERIALIZED VIEW [ { FROM | IN } db_name]\n"})}),"\n",(0,n.jsx)(s.p,{children:"Parameters in brackets [] is optional."}),"\n",(0,n.jsx)(s.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:(0,n.jsx)(s.strong,{children:"Parameter"})}),(0,n.jsx)(s.th,{children:(0,n.jsx)(s.strong,{children:"Required"})}),(0,n.jsx)(s.th,{children:(0,n.jsx)(s.strong,{children:"Description"})})]})}),(0,n.jsx)(s.tbody,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"db_name"}),(0,n.jsx)(s.td,{children:"no"}),(0,n.jsx)(s.td,{children:"The name of the database to which the materialized view resides. If this parameter is not specified, the current database is used by default."})]})})]}),"\n",(0,n.jsx)(s.h2,{id:"returns",children:"Returns"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:(0,n.jsx)(s.strong,{children:"Return"})}),(0,n.jsx)(s.th,{children:(0,n.jsx)(s.strong,{children:"Description"})})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"JobId"}),(0,n.jsx)(s.td,{children:"The ID of refresh job."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"TableName"}),(0,n.jsx)(s.td,{children:"The name of the table."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"CreateTime"}),(0,n.jsx)(s.td,{children:"The time when refresh job is created."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"FinishedTime"}),(0,n.jsx)(s.td,{children:"The time when refresh job is finished."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"BaseIndexName"}),(0,n.jsx)(s.td,{children:"The name of the base table."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"RollupIndexName"}),(0,n.jsx)(s.td,{children:"The name of the materialized view."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"RollupId"}),(0,n.jsx)(s.td,{children:"The ID of the materialized view rollup."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"TransactionId"}),(0,n.jsx)(s.td,{children:"The ID of transaction that waits to be executed."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"State"}),(0,n.jsx)(s.td,{children:"The state of the job."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Msg"}),(0,n.jsx)(s.td,{children:"Error message."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Progress"}),(0,n.jsx)(s.td,{children:"Progress of the refresh job."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Timeout"}),(0,n.jsx)(s.td,{children:"Timeout for the refresh job."})]})]})]}),"\n",(0,n.jsx)(s.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(s.p,{children:"Example 1: building status of synchronous materialized views"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-Plain",children:"MySQL > SHOW ALTER MATERIALIZED VIEW\\G\n*************************** 1. row ***************************\n          JobId: 475991\n      TableName: lineorder\n     CreateTime: 2022-08-24 19:46:53\n   FinishedTime: 2022-08-24 19:47:15\n  BaseIndexName: lineorder\nRollupIndexName: lo_mv_sync_1\n       RollupId: 475992\n  TransactionId: 33067\n          State: FINISHED\n            Msg: \n       Progress: NULL\n        Timeout: 86400\n*************************** 2. row ***************************\n          JobId: 477337\n      TableName: lineorder\n     CreateTime: 2022-08-24 19:47:25\n   FinishedTime: 2022-08-24 19:47:45\n  BaseIndexName: lineorder\nRollupIndexName: lo_mv_sync_2\n       RollupId: 477338\n  TransactionId: 33068\n          State: FINISHED\n            Msg: \n       Progress: NULL\n        Timeout: 86400\n2 rows in set (0.00 sec)\n"})})]})}const h=function(e={}){const{wrapper:s}=Object.assign({},(0,r.ah)(),e.components);return s?(0,n.jsx)(s,Object.assign({},e,{children:(0,n.jsx)(o,e)})):o(e)}},11151:(e,s,t)=>{t.d(s,{Zo:()=>a,ah:()=>i});var n=t(67294);const r=n.createContext({});function i(e){const s=n.useContext(r);return n.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const d={};function a({components:e,children:s,disableParentContext:t}){let a;return a=t?"function"==typeof e?e({}):e||d:i(e),n.createElement(r.Provider,{value:a},s)}}}]);