"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[3721],{12644:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>o});var r=n(85893),s=n(11151);const i={},a="SHOW CREATE MATERIALIZED VIEW",l={id:"sql-reference/sql-statements/data-manipulation/SHOW CREATE MATERIALIZED VIEW",title:"SHOW CREATE MATERIALIZED VIEW",description:"Description",source:"@site/versioned_docs/version-3.1/sql-reference/sql-statements/data-manipulation/SHOW CREATE MATERIALIZED VIEW.md",sourceDirName:"sql-reference/sql-statements/data-manipulation",slug:"/sql-reference/sql-statements/data-manipulation/SHOW CREATE MATERIALIZED VIEW",permalink:"/doc/docs/sql-reference/sql-statements/data-manipulation/SHOW CREATE MATERIALIZED VIEW",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-statements/data-manipulation/SHOW CREATE MATERIALIZED VIEW.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"SHOW CREATE DATABASE",permalink:"/doc/docs/sql-reference/sql-statements/data-manipulation/SHOW CREATE DATABASE"},next:{title:"SHOW CREATE TABLE",permalink:"/doc/docs/sql-reference/sql-statements/data-manipulation/SHOW CREATE TABLE"}},d={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2}];function c(e){const t=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",strong:"strong",tbody:"tbody",td:"td"},(0,s.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"show-create-materialized-view",children:"SHOW CREATE MATERIALIZED VIEW"}),"\n",(0,r.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(t.p,{children:"Shows the definition of a specific asynchronous materialized view."}),"\n",(0,r.jsx)(t.h2,{id:"syntax",children:"Syntax"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-SQL",children:"SHOW CREATE MATERIALIZED VIEW [database.]<mv_name>\n"})}),"\n",(0,r.jsx)(t.p,{children:"Parameters in brackets [] is optional."}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:(0,r.jsx)(t.strong,{children:"Parameter"})}),(0,r.jsx)(t.th,{children:(0,r.jsx)(t.strong,{children:"Required"})}),(0,r.jsx)(t.th,{children:(0,r.jsx)(t.strong,{children:"Description"})})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"mv_name"}),(0,r.jsx)(t.td,{children:"yes"}),(0,r.jsx)(t.td,{children:"The name of the materialized view to show."})]})})]}),"\n",(0,r.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:(0,r.jsx)(t.strong,{children:"Return"})}),(0,r.jsx)(t.th,{children:(0,r.jsx)(t.strong,{children:"Description"})})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Materialized View"}),(0,r.jsx)(t.td,{children:"The name of the materialized view."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Create Materialized View"}),(0,r.jsx)(t.td,{children:"The definition of the materialized view."})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(t.p,{children:"Example 1: Show the definition of a specific materialized view"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-Plain",children:'MySQL > SHOW CREATE MATERIALIZED VIEW lo_mv1\\G\n*************************** 1. row ***************************\n       Materialized View: lo_mv1\nCreate Materialized View: CREATE MATERIALIZED VIEW `lo_mv1`\nCOMMENT "MATERIALIZED_VIEW"\nDISTRIBUTED BY HASH(`lo_orderkey`) \nREFRESH ASYNC\nPROPERTIES (\n"replication_num" = "3",\n"storage_medium" = "HDD"\n)\nAS SELECT `wlc_test`.`lineorder`.`lo_orderkey` AS `lo_orderkey`, `wlc_test`.`lineorder`.`lo_custkey` AS `lo_custkey`, sum(`wlc_test`.`lineorder`.`lo_quantity`) AS `total_quantity`, sum(`wlc_test`.`lineorder`.`lo_revenue`) AS `total_revenue`, count(`wlc_test`.`lineorder`.`lo_shipmode`) AS `shipmode_count` FROM `wlc_test`.`lineorder` GROUP BY `wlc_test`.`lineorder`.`lo_orderkey`, `wlc_test`.`lineorder`.`lo_custkey` ORDER BY `wlc_test`.`lineorder`.`lo_orderkey` ASC ;\n1 row in set (0.01 sec)\n'})})]})}const h=function(e={}){const{wrapper:t}=Object.assign({},(0,s.ah)(),e.components);return t?(0,r.jsx)(t,Object.assign({},e,{children:(0,r.jsx)(c,e)})):c(e)}},11151:(e,t,n)=>{n.d(t,{Zo:()=>l,ah:()=>i});var r=n(67294);const s=r.createContext({});function i(e){const t=r.useContext(s);return r.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const a={};function l({components:e,children:t,disableParentContext:n}){let l;return l=n?"function"==typeof e?e({}):e||a:i(e),r.createElement(s.Provider,{value:l},t)}}}]);