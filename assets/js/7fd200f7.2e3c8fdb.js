"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[28521],{85732:(e,i,s)=>{s.r(i),s.d(i,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>n,metadata:()=>o,toc:()=>d});var t=s(85893),r=s(11151);const n={},l="[Preview] Spill to disk",o={id:"administration/spill_to_disk",title:"[Preview] Spill to disk",description:"This topic describes how to spill intermediate computation results of large operators to disk.",source:"@site/versioned_docs/version-3.0/administration/spill_to_disk.md",sourceDirName:"administration",slug:"/administration/spill_to_disk",permalink:"/docusaurusv3/docs/3.0/administration/spill_to_disk",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/administration/spill_to_disk.md",tags:[],version:"3.0",frontMatter:{},sidebar:"documentation",previous:{title:"Resource group",permalink:"/docusaurusv3/docs/3.0/administration/resource_group"},next:{title:"Deploy and Manage StarRocks with StarGo",permalink:"/docusaurusv3/docs/3.0/administration/stargo"}},a={},d=[{value:"Overview",id:"overview",level:2},{value:"Enable intermediate result spilling",id:"enable-intermediate-result-spilling",level:2},{value:"Limitations",id:"limitations",level:2}];function c(e){const i=Object.assign({h1:"h1",p:"p",h2:"h2",ul:"ul",li:"li",ol:"ol",code:"code",strong:"strong",pre:"pre",blockquote:"blockquote",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,r.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h1,{id:"preview-spill-to-disk",children:"[Preview] Spill to disk"}),"\n",(0,t.jsx)(i.p,{children:"This topic describes how to spill intermediate computation results of large operators to disk."}),"\n",(0,t.jsx)(i.h2,{id:"overview",children:"Overview"}),"\n",(0,t.jsx)(i.p,{children:"For database systems that rely on in-memory computing for query execution, like StarRocks, they can consume substantial memory resources when processing queries with aggregate, sort, and join operators on a big dataset. When memory limits are reached, these queries are forcibly terminated due to out-of-memory (OOM)."}),"\n",(0,t.jsx)(i.p,{children:"However, there are still chances that you want certain memory-intensive tasks to be completed stably and performance is not your top priority, for example, building a materialized view, or performing a lightweight ETL with INSERT INTO SELECT. These tasks can easily exhaust your memory resources and thereby block other queries running in your cluster. Usually, to address this issue, you can only fine-tune these tasks individually, and rely on your resource isolation strategy to control the query concurrency. This could be particularly inconvenient and likely to fail under some extreme scenarios."}),"\n",(0,t.jsx)(i.p,{children:"From StarRocks v3.0.1, StarRocks supports spilling the intermediate results of some memory-intensive operators to disks. With this feature, you can trade a tolerable drop in performance for a significant reduction in memory usage, thereby improving system availability."}),"\n",(0,t.jsx)(i.p,{children:"Currently, StarRocks' spilling feature supports the following operators:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Aggregate operators"}),"\n",(0,t.jsx)(i.li,{children:"Sort operators"}),"\n",(0,t.jsx)(i.li,{children:"Hash join (LEFT JOIN, RIGHT JOIN, FULL JOIN, OUTER JOIN, SEMI JOIN, and INNER JOIN) operators"}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"enable-intermediate-result-spilling",children:"Enable intermediate result spilling"}),"\n",(0,t.jsx)(i.p,{children:"Follow these steps to enable intermediate result spilling:"}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:["Specify the spill directory ",(0,t.jsx)(i.code,{children:"spill_local_storage_dir"}),", which stores the spilled intermediate result, in the BE configuration file ",(0,t.jsx)(i.strong,{children:"be.conf"}),", and restart the cluster to allow the modification to take effect."]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-Properties",children:"spill_local_storage_dir=/<dir_1>[;/<dir_2>]\n"})}),"\n",(0,t.jsxs)(i.blockquote,{children:["\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.strong,{children:"NOTE"})}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["You can specify multiple ",(0,t.jsx)(i.code,{children:"spill_local_storage_dir"})," by separating them with semicolons (",(0,t.jsx)(i.code,{children:";"}),")."]}),"\n",(0,t.jsx)(i.li,{children:"In a production environment, we strongly recommend you use different disks for data storage and spilling. When intermediate results are spilled to disk, there could be a significant increase in both writing load and disk usage. If the same disk is used, this surge can impact other queries or tasks running in the cluster."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:"Execute the following statement to enable intermediate result spilling:"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-SQL",children:"SET enable_spill = true;\n"})}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:["Configure the mode of intermediate result spilling using the session variable ",(0,t.jsx)(i.code,{children:"spill_mode"}),":"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-SQL",children:'SET spill_mode = { "auto" | "force" };\n'})}),"\n",(0,t.jsxs)(i.blockquote,{children:["\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.strong,{children:"NOTE"})}),"\n",(0,t.jsx)(i.p,{children:"Each time a query with spilling completes, StarRocks automatically clears the spilled data the query produces. If BE crashes before clearing the data, StarRocks clears it when the BE is restarted."}),"\n"]}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:(0,t.jsx)(i.strong,{children:"Variable"})}),(0,t.jsx)(i.th,{children:(0,t.jsx)(i.strong,{children:"Default"})}),(0,t.jsx)(i.th,{children:(0,t.jsx)(i.strong,{children:"Description"})})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"enable_spill"}),(0,t.jsx)(i.td,{children:"false"}),(0,t.jsxs)(i.td,{children:["Whether to enable intermediate result spilling. If it is set to ",(0,t.jsx)(i.code,{children:"true"}),", StarRocks spills the intermediate results to disk to reduce the memory usage when processing aggregate, sort, or join operators in queries."]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"spill_mode"}),(0,t.jsx)(i.td,{children:"auto"}),(0,t.jsxs)(i.td,{children:["The execution mode of intermediate result spilling. Valid values:",(0,t.jsxs)("ul",{children:[(0,t.jsxs)("li",{children:[(0,t.jsx)(i.code,{children:"auto"}),": Spilling is automatically triggered when the memory usage threshold is reached."]}),(0,t.jsxs)("li",{children:[(0,t.jsx)(i.code,{children:"force"}),": StarRocks forcibly executes spilling for all relevant operators, regardless of memory usage."]})]}),"This variable takes effect only when the variable ",(0,t.jsx)(i.code,{children:"enable_spill"})," is set to ",(0,t.jsx)(i.code,{children:"true"}),"."]})]})]})]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"limitations",children:"Limitations"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Not all OOM issues can be resolved by spilling. For example, StarRocks cannot release the memory used for expression evaluation."}),"\n",(0,t.jsxs)(i.li,{children:["Usually, queries with spilling involved indicate a tenfold increase in query latency. We recommend you extend the query timeout for these queries by setting the session variable ",(0,t.jsx)(i.code,{children:"query_timeout"}),"."]}),"\n"]})]})}const h=function(e={}){const{wrapper:i}=Object.assign({},(0,r.ah)(),e.components);return i?(0,t.jsx)(i,Object.assign({},e,{children:(0,t.jsx)(c,e)})):c(e)}},11151:(e,i,s)=>{s.d(i,{Zo:()=>o,ah:()=>n});var t=s(67294);const r=t.createContext({});function n(e){const i=t.useContext(r);return t.useMemo((()=>"function"==typeof e?e(i):{...i,...e}),[i,e])}const l={};function o({components:e,children:i,disableParentContext:s}){let o;return o=s?"function"==typeof e?e({}):e||l:n(e),t.createElement(r.Provider,{value:o},i)}}}]);