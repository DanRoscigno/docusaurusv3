"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[3392],{36882:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>d,toc:()=>i});var a=n(85893),t=n(11151);const l={displayed_sidebar:"English"},r="CANCEL LOAD",d={id:"sql-reference/sql-statements/data-manipulation/CANCEL_LOAD",title:"CANCEL LOAD",description:"Description",source:"@site/versioned_docs/version-3.0/sql-reference/sql-statements/data-manipulation/CANCEL_LOAD.md",sourceDirName:"sql-reference/sql-statements/data-manipulation",slug:"/sql-reference/sql-statements/data-manipulation/CANCEL_LOAD",permalink:"/doc/docs/3.0/sql-reference/sql-statements/data-manipulation/CANCEL_LOAD",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-statements/data-manipulation/CANCEL_LOAD.md",tags:[],version:"3.0",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"CANCEL EXPORT",permalink:"/doc/docs/3.0/sql-reference/sql-statements/data-manipulation/CANCEL_EXPORT"},next:{title:"CANCEL REFRESH MATERIALIZED VIEW",permalink:"/doc/docs/3.0/sql-reference/sql-statements/data-manipulation/CANCEL_REFRESH_MATERIALIZED_VIEW"}},c={},i=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}];function o(e){const s=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",code:"code",pre:"pre",table:"table",thead:"thead",tr:"tr",th:"th",strong:"strong",tbody:"tbody",td:"td"},(0,t.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.h1,{id:"cancel-load",children:"CANCEL LOAD"}),"\n",(0,a.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,a.jsxs)(s.p,{children:["Cancels a given load job: ",(0,a.jsx)(s.a,{href:"/doc/docs/3.0/sql-reference/sql-statements/data-manipulation/BROKER_LOAD",children:"Broker Load"}),", ",(0,a.jsx)(s.a,{href:"/doc/docs/3.0/sql-reference/sql-statements/data-manipulation/SPARK_LOAD",children:"Spark Load"}),", or ",(0,a.jsx)(s.a,{href:"/doc/docs/3.0/sql-reference/sql-statements/data-manipulation/insert",children:"INSERT"}),". A load job in the ",(0,a.jsx)(s.code,{children:"PREPARED"}),", ",(0,a.jsx)(s.code,{children:"CANCELLED"})," or ",(0,a.jsx)(s.code,{children:"FINISHED"})," state cannot be canceled."]}),"\n",(0,a.jsxs)(s.p,{children:["Canceling a load job is an asynchronous process. You can use the ",(0,a.jsx)(s.a,{href:"/doc/docs/3.0/sql-reference/sql-statements/data-manipulation/SHOW_LOAD",children:"SHOW LOAD"})," statement to check whether a load job is successfully canceled. The load job is successfully canceled if the value of ",(0,a.jsx)(s.code,{children:"State"})," is ",(0,a.jsx)(s.code,{children:"CANCELLED"})," and the value of ",(0,a.jsx)(s.code,{children:"type"})," (displayed in ",(0,a.jsx)(s.code,{children:"ErrorMsg"}),") is ",(0,a.jsx)(s.code,{children:"USER_CANCEL"}),"."]}),"\n",(0,a.jsx)(s.h2,{id:"syntax",children:"Syntax"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-SQL",children:'CANCEL LOAD\n[FROM db_name]\nWHERE LABEL = "label_name"\n'})}),"\n",(0,a.jsx)(s.h2,{id:"parameters",children:"Parameters"}),"\n",(0,a.jsxs)(s.table,{children:[(0,a.jsx)(s.thead,{children:(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.th,{children:(0,a.jsx)(s.strong,{children:"Parameter"})}),(0,a.jsx)(s.th,{children:(0,a.jsx)(s.strong,{children:"Required"})}),(0,a.jsx)(s.th,{children:(0,a.jsx)(s.strong,{children:"Description"})})]})}),(0,a.jsxs)(s.tbody,{children:[(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"db_name"}),(0,a.jsx)(s.td,{children:"No"}),(0,a.jsx)(s.td,{children:"The name of the database to which the load job belongs. If this parameter is not specified, a load job in your current database is canceled by default."})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"label_name"}),(0,a.jsx)(s.td,{children:"Yes"}),(0,a.jsx)(s.td,{children:"The label of the load job."})]})]})]}),"\n",(0,a.jsx)(s.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsxs)(s.p,{children:["Example 1: Cancel the load job whose label is ",(0,a.jsx)(s.code,{children:"example_label"})," in the current database."]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-SQL",children:'CANCEL LOAD\nWHERE LABEL = "example_label";\n'})}),"\n",(0,a.jsxs)(s.p,{children:["Example 2: Cancel the load job whose label is ",(0,a.jsx)(s.code,{children:"example_label"})," in the ",(0,a.jsx)(s.code,{children:"example_db"})," database."]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-SQL",children:'CANCEL LOAD\nFROM example_db\nWHERE LABEL = "example_label";\n'})})]})}const h=function(e={}){const{wrapper:s}=Object.assign({},(0,t.ah)(),e.components);return s?(0,a.jsx)(s,Object.assign({},e,{children:(0,a.jsx)(o,e)})):o(e)}},11151:(e,s,n)=>{n.d(s,{Zo:()=>d,ah:()=>l});var a=n(67294);const t=a.createContext({});function l(e){const s=a.useContext(t);return a.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const r={};function d({components:e,children:s,disableParentContext:n}){let d;return d=n?"function"==typeof e?e({}):e||r:l(e),a.createElement(t.Provider,{value:d},s)}}}]);