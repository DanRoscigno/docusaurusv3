"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[23277],{19259:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>l});var t=s(85893),a=s(11151);const i={},r="CANCEL EXPORT",d={id:"sql-reference/sql-statements/data-manipulation/CANCEL EXPORT",title:"CANCEL EXPORT",description:"Description",source:"@site/versioned_docs/version-3.0/sql-reference/sql-statements/data-manipulation/CANCEL EXPORT.md",sourceDirName:"sql-reference/sql-statements/data-manipulation",slug:"/sql-reference/sql-statements/data-manipulation/CANCEL EXPORT",permalink:"/doc/zh/docs/3.0/sql-reference/sql-statements/data-manipulation/CANCEL EXPORT",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/sql-reference/sql-statements/data-manipulation/CANCEL EXPORT.md",tags:[],version:"3.0",frontMatter:{},sidebar:"Chinese31",previous:{title:"BROKER LOAD",permalink:"/doc/zh/docs/3.0/sql-reference/sql-statements/data-manipulation/BROKER LOAD"},next:{title:"CANCEL LOAD",permalink:"/doc/zh/docs/3.0/sql-reference/sql-statements/data-manipulation/CANCEL LOAD"}},c={},l=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}];function o(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",a:"a",pre:"pre",table:"table",thead:"thead",tr:"tr",th:"th",strong:"strong",tbody:"tbody",td:"td"},(0,a.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"cancel-export",children:"CANCEL EXPORT"}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["Cancels a given data unloading job. Unloading jobs with the state ",(0,t.jsx)(n.code,{children:"CANCELLED"})," or ",(0,t.jsx)(n.code,{children:"FINISHED"})," cannot be canceled. Canceling an unloading job is an asynchronous process. You can use the ",(0,t.jsx)(n.a,{href:"/doc/zh/docs/3.0/sql-reference/sql-statements/data-manipulation/SHOW%20EXPORT",children:"SHOW EXPORT"})," statement to check whether an unloading job is successfully canceled. The unloading job is successfully canceled if the value of ",(0,t.jsx)(n.code,{children:"State"})," is ",(0,t.jsx)(n.code,{children:"CANCELLED"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["The CANCEL EXPORT statement requires that you have at least one of the following privileges on the database to which the given unloading job belongs: ",(0,t.jsx)(n.code,{children:"SELECT_PRIV"}),", ",(0,t.jsx)(n.code,{children:"LOAD_PRIV"}),", ",(0,t.jsx)(n.code,{children:"ALTER_PRIV"}),", ",(0,t.jsx)(n.code,{children:"CREATE_PRIV"}),", ",(0,t.jsx)(n.code,{children:"DROP_PRIV"}),", and ",(0,t.jsx)(n.code,{children:"USAGE_PRIV"}),". For more information about privilege descriptions, see ",(0,t.jsx)(n.a,{href:"../account-management/GRANT.md",children:"GRANT"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:'CANCEL EXPORT\n[FROM db_name]\nWHERE QUERYID = "query_id"\n'})}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Parameter"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Required"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Description"})})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"db_name"}),(0,t.jsx)(n.td,{children:"No"}),(0,t.jsx)(n.td,{children:"The name of the databases to which the unloading job belongs. If this parameter is not specified, an unloading job in your current database is canceled."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"query_id"}),(0,t.jsx)(n.td,{children:"Yes"}),(0,t.jsxs)(n.td,{children:["The query ID of the unloading job. You can obtain the ID by using the ",(0,t.jsx)(n.a,{href:"../../sql-functions/utility-functions/last_query_id.md",children:"LAST_QUERY_ID()"})," function. Note that this function only returns the latest query ID."]})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsxs)(n.p,{children:["Example 1: Cancel an unloading job whose query ID is ",(0,t.jsx)(n.code,{children:"921d8f80-7c9d-11eb-9342-acde48001121"})," in the current database."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:'CANCEL EXPORT\nWHERE queryid = "921d8f80-7c9d-11eb-9342-acde48001121";\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Example 2: Cancel an unloading job whose query ID is ",(0,t.jsx)(n.code,{children:"921d8f80-7c9d-11eb-9342-acde48001121"})," in the ",(0,t.jsx)(n.code,{children:"example_db"})," database."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:'CANCEL EXPORT \nFROM example_db \nWHERE queryid = "921d8f80-7c9d-11eb-9342-acde48001122";\n'})})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(o,e)})):o(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>d,ah:()=>i});var t=s(67294);const a=t.createContext({});function i(e){const n=t.useContext(a);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const r={};function d({components:e,children:n,disableParentContext:s}){let d;return d=s?"function"==typeof e?e({}):e||r:i(e),t.createElement(a.Provider,{value:d},n)}}}]);