"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[21867],{13628:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>o});var s=r(85893),t=r(11151);const i={},l="percentile_union",a={id:"sql-reference/sql-functions/percentile-functions/percentile_union",title:"percentile_union",description:"Description",source:"@site/versioned_docs/version-3.0/sql-reference/sql-functions/percentile-functions/percentile_union.md",sourceDirName:"sql-reference/sql-functions/percentile-functions",slug:"/sql-reference/sql-functions/percentile-functions/percentile_union",permalink:"/docusaurusv3/docs/3.0/sql-reference/sql-functions/percentile-functions/percentile_union",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/sql-reference/sql-functions/percentile-functions/percentile_union.md",tags:[],version:"3.0",frontMatter:{},sidebar:"documentation",previous:{title:"percentile_hash",permalink:"/docusaurusv3/docs/3.0/sql-reference/sql-functions/percentile-functions/percentile_hash"},next:{title:"HLL_CARDINALITY",permalink:"/docusaurusv3/docs/3.0/sql-reference/sql-functions/scalar-functions/hll_cardinality"}},c={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code"},(0,t.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"percentile_union",children:"percentile_union"}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"Aggregates PERCENTILE data."}),"\n",(0,s.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"percentile_union(expr);\n"})}),"\n",(0,s.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"expr"}),": The supported data type is PERCENTILE."]}),"\n",(0,s.jsx)(n.h2,{id:"return-value",children:"Return value"}),"\n",(0,s.jsx)(n.p,{children:"Returns a PERCENTILE value."}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.p,{children:"Example 1: Use percentile data in materialized views."}),"\n",(0,s.jsx)(n.p,{children:"Create a table."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'CREATE TABLE sales_records(\n    record_id int, \n    seller_id int, \n    store_id int, \n    sale_date date, \n    sale_amt bigint\n) distributed BY hash(record_id) \nproperties("replication_num" = "3");\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Create a materialized view based on the ",(0,s.jsx)(n.code,{children:"sale_amt"})," column of the table."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"create materialized view mv as\nselect store_id, percentile_union(percentile_hash(sale_amt))\nfrom sales_records\ngroup by store_id;\n"})}),"\n",(0,s.jsx)(n.p,{children:"Example 2: Load PERCENTILE data."}),"\n",(0,s.jsxs)(n.p,{children:["Create an aggregate table that contains a PERCENTILE column ",(0,s.jsx)(n.code,{children:"sale_amt_per"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'CREATE TABLE sales_records(\n    record_id int, \n    seller_id int, \n    store_id int, \n    sale_amt_per percentile percentile_union\n) ENGINE=OLAP\nAGGREGATE KEY(`record_id`, `seller_id`, `store_id`)\nCOMMENT "OLAP"\nDISTRIBUTED BY HASH(`record_id`)\nPROPERTIES (\n    "replication_num" = "3",\n    "storage_format" = "DEFAULT"\n);\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Query data from ",(0,s.jsx)(n.code,{children:"sale_amt_per"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"select percentile_approx_raw(percentile_union(sale_amt_per), 0.99) from sales_records;\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Load data that contains PERCENTILE data into the ",(0,s.jsx)(n.code,{children:"sales_records"})," table."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'curl --location-trusted -u root\n    -H "columns: record_id, seller_id, store_id,tmp, sale_amt_per =percentile_hash(tmp)"\n    -H "column_separator:,"\n    -T a http://<ip:port>/api/test/sales_records/_stream_load\n'})})]})}const p=function(e={}){const{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(d,e)})):d(e)}},11151:(e,n,r)=>{r.d(n,{Zo:()=>a,ah:()=>i});var s=r(67294);const t=s.createContext({});function i(e){const n=s.useContext(t);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const l={};function a({components:e,children:n,disableParentContext:r}){let a;return a=r?"function"==typeof e?e({}):e||l:i(e),s.createElement(t.Provider,{value:a},n)}}}]);