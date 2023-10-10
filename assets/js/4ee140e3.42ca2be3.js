"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[98614],{71732:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>u,default:()=>o,frontMatter:()=>t,metadata:()=>c,toc:()=>d});var r=n(85893),i=n(11151);const t={},u="Query queues",c={id:"administration/query_queues",title:"Query queues",description:"This topic describes how to manage query queues in StarRocks.",source:"@site/versioned_docs/version-3.0/administration/query_queues.md",sourceDirName:"administration",slug:"/administration/query_queues",permalink:"/docusaurusv3/docs/3.0/administration/query_queues",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/administration/query_queues.md",tags:[],version:"3.0",frontMatter:{},sidebar:"documentation",previous:{title:"Analyze query profile",permalink:"/docusaurusv3/docs/3.0/administration/query_profile"},next:{title:"Resource group",permalink:"/docusaurusv3/docs/3.0/administration/resource_group"}},l={},d=[{value:"Enable query queues",id:"enable-query-queues",level:2},{value:"Specify resource thresholds",id:"specify-resource-thresholds",level:2},{value:"Configure query queues",id:"configure-query-queues",level:2},{value:"View query queue statistics",id:"view-query-queue-statistics",level:2}];function a(e){const s=Object.assign({h1:"h1",p:"p",h2:"h2",ul:"ul",li:"li",pre:"pre",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",strong:"strong",tbody:"tbody",td:"td",blockquote:"blockquote",a:"a"},(0,i.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h1,{id:"query-queues",children:"Query queues"}),"\n",(0,r.jsx)(s.p,{children:"This topic describes how to manage query queues in StarRocks."}),"\n",(0,r.jsx)(s.p,{children:"From v2.5, StarRocks supports query queues. With query queues enabled, StarRocks automatically queues the incoming queries when the concurrency threshold or resource limit is reached, thereby avoiding the overload deteriorating. Pending queries wait in a queue until there is enough compute resources available to begin execution."}),"\n",(0,r.jsx)(s.p,{children:"You can set thresholds on CPU usage, memory usage, and query concurrency to trigger query queues."}),"\n",(0,r.jsx)(s.h2,{id:"enable-query-queues",children:"Enable query queues"}),"\n",(0,r.jsx)(s.p,{children:"Query queues are disabled by default. You can enable query queues for INSERT loading, SELECT queries, and statistics queries by setting corresponding global session variables."}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Enable query queues for loading tasks:"}),"\n"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-SQL",children:"SET GLOBAL enable_query_queue_load = true;\n"})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Enable query queues for SELECT queries:"}),"\n"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-SQL",children:"SET GLOBAL enable_query_queue_select = true;\n"})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Enable query queues for statistics queries:"}),"\n"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-SQL",children:"SET GLOBAL enable_query_queue_statistic = true;\n"})}),"\n",(0,r.jsx)(s.h2,{id:"specify-resource-thresholds",children:"Specify resource thresholds"}),"\n",(0,r.jsx)(s.p,{children:"You can set the thresholds that trigger query queues via the following global session variables:"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:(0,r.jsx)(s.strong,{children:"Variable"})}),(0,r.jsx)(s.th,{children:(0,r.jsx)(s.strong,{children:"Default"})}),(0,r.jsx)(s.th,{children:(0,r.jsx)(s.strong,{children:"Description"})})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"query_queue_concurrency_limit"}),(0,r.jsx)(s.td,{children:"0"}),(0,r.jsxs)(s.td,{children:["The upper limit of concurrent queries on a BE. It takes effect only after being set greater than ",(0,r.jsx)(s.code,{children:"0"}),"."]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"query_queue_mem_used_pct_limit"}),(0,r.jsx)(s.td,{children:"0"}),(0,r.jsxs)(s.td,{children:["The upper limit of memory usage percentage on a BE. It takes effect only after being set greater than ",(0,r.jsx)(s.code,{children:"0"}),". Range: [0, 1]"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"query_queue_cpu_used_permille_limit"}),(0,r.jsx)(s.td,{children:"0"}),(0,r.jsxs)(s.td,{children:["The upper limit of CPU usage permille (CPU usage * 1000) on a BE. It takes effect only after being set greater than ",(0,r.jsx)(s.code,{children:"0"}),". Range: [0, 1000]"]})]})]})]}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"NOTE"})}),"\n",(0,r.jsxs)(s.p,{children:["By default, BE reports resource usage to FE at one-second intervals. You can change this interval by setting the BE configuration item ",(0,r.jsx)(s.code,{children:"report_resource_usage_interval_ms"}),"."]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"configure-query-queues",children:"Configure query queues"}),"\n",(0,r.jsx)(s.p,{children:"You can set the capacity of a query queue and the maximum timeout of queries in queues via the following global session variables:"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:(0,r.jsx)(s.strong,{children:"Variable"})}),(0,r.jsx)(s.th,{children:(0,r.jsx)(s.strong,{children:"Default"})}),(0,r.jsx)(s.th,{children:(0,r.jsx)(s.strong,{children:"Description"})})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"query_queue_max_queued_queries"}),(0,r.jsx)(s.td,{children:"0"}),(0,r.jsxs)(s.td,{children:["The upper limit of queries in a queue. When this threshold is reached, incoming queries are rejected. It takes effect only after being set greater than ",(0,r.jsx)(s.code,{children:"0"}),"."]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"query_queue_pending_timeout_second"}),(0,r.jsx)(s.td,{children:"300"}),(0,r.jsx)(s.td,{children:"The maximum timeout of a pending query in a queue. When this threshold is reached, the corresponding query is rejected. Unit: second."})]})]})]}),"\n",(0,r.jsx)(s.h2,{id:"view-query-queue-statistics",children:"View query queue statistics"}),"\n",(0,r.jsx)(s.p,{children:"You can view the statistics of query queues via the following ways:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Check the number of running queries, and memory and CPU usages in BE nodes using ",(0,r.jsx)(s.a,{href:"/docusaurusv3/docs/3.0/sql-reference/sql-statements/Administration/SHOW%20PROC",children:"SHOW PROC"}),":"]}),"\n"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-Plain",children:"mysql> SHOW PROC '/backends'\\G\n*************************** 1. row ***************************\n...\n    NumRunningQueries: 0\n           MemUsedPct: 0.79 %\n           CpuUsedPct: 0.0 %\n"})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Check if a query is in a queue (when ",(0,r.jsx)(s.code,{children:"IsPending"})," is ",(0,r.jsx)(s.code,{children:"true"}),") using ",(0,r.jsx)(s.a,{href:"/docusaurusv3/docs/3.0/sql-reference/sql-statements/Administration/SHOW%20PROCESSLIST",children:"SHOW PROCESSLIST"}),":"]}),"\n"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-Plain",children:"mysql> SHOW PROCESSLIST;\n+------+------+---------------------+-------+---------+---------------------+------+-------+-------------------+-----------+\n| Id   | User | Host                | Db    | Command | ConnectionStartTime | Time | State | Info              | IsPending |\n+------+------+---------------------+-------+---------+---------------------+------+-------+-------------------+-----------+\n|    2 | root | xxx.xx.xxx.xx:xxxxx |       | Query   | 2022-11-24 18:08:29 |    0 | OK    | SHOW PROCESSLIST  | false     |\n+------+------+---------------------+-------+---------+---------------------+------+-------+-------------------+-----------+\n"})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["Check the FE audit log file ",(0,r.jsx)(s.strong,{children:"fe.audit.log"}),". The field ",(0,r.jsx)(s.code,{children:"PendingTimeMs"})," indicates the time that a query is in a queue, and its unit is milliseconds."]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"Check the following FE metrics:"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:(0,r.jsx)(s.strong,{children:"Metrics"})}),(0,r.jsx)(s.th,{children:(0,r.jsx)(s.strong,{children:"Description"})})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"starrocks_fe_query_queue_pending"}),(0,r.jsx)(s.td,{children:"Number of pending queries in the queue."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"starrocks_fe_query_queue_total"}),(0,r.jsx)(s.td,{children:"Total number of queries that have been queued."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"starrocks_fe_query_queue_timeout"}),(0,r.jsx)(s.td,{children:"Number of timeout queries in the queue."})]})]})]})]})}const o=function(e={}){const{wrapper:s}=Object.assign({},(0,i.ah)(),e.components);return s?(0,r.jsx)(s,Object.assign({},e,{children:(0,r.jsx)(a,e)})):a(e)}},11151:(e,s,n)=>{n.d(s,{Zo:()=>c,ah:()=>t});var r=n(67294);const i=r.createContext({});function t(e){const s=r.useContext(i);return r.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const u={};function c({components:e,children:s,disableParentContext:n}){let c;return c=n?"function"==typeof e?e({}):e||u:t(e),r.createElement(i.Provider,{value:c},s)}}}]);