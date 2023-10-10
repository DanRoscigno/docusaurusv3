"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[92366],{75348:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>a,frontMatter:()=>i,metadata:()=>c,toc:()=>h});var r=s(85893),t=s(11151);const i={},d="\u67e5\u8be2\u961f\u5217",c={id:"administration/query_queues",title:"\u67e5\u8be2\u961f\u5217",description:"\u672c\u6587\u6863\u4ecb\u7ecd\u5982\u4f55\u5728 StarRocks \u4e2d\u7ba1\u7406\u67e5\u8be2\u961f\u5217\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.1/administration/query_queues.md",sourceDirName:"administration",slug:"/administration/query_queues",permalink:"/docusaurusv3/zh/docs/latest/administration/query_queues",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/administration/query_queues.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"\u8d44\u6e90\u9694\u79bb",permalink:"/docusaurusv3/zh/docs/latest/administration/resource_group"},next:{title:"\u7ba1\u7406\u67e5\u8be2",permalink:"/docusaurusv3/zh/docs/latest/administration/Query_management"}},l={},h=[{value:"\u542f\u7528\u67e5\u8be2\u961f\u5217",id:"\u542f\u7528\u67e5\u8be2\u961f\u5217",level:2},{value:"\u6307\u5b9a\u8d44\u6e90\u9608\u503c",id:"\u6307\u5b9a\u8d44\u6e90\u9608\u503c",level:2},{value:"\u914d\u7f6e\u67e5\u8be2\u961f\u5217",id:"\u914d\u7f6e\u67e5\u8be2\u961f\u5217",level:2},{value:"\u67e5\u770b\u67e5\u8be2\u961f\u5217\u7edf\u8ba1\u4fe1\u606f",id:"\u67e5\u770b\u67e5\u8be2\u961f\u5217\u7edf\u8ba1\u4fe1\u606f",level:2}];function o(e){const n=Object.assign({h1:"h1",p:"p",h2:"h2",ul:"ul",li:"li",pre:"pre",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",strong:"strong",tbody:"tbody",td:"td",blockquote:"blockquote",a:"a"},(0,t.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"\u67e5\u8be2\u961f\u5217",children:"\u67e5\u8be2\u961f\u5217"}),"\n",(0,r.jsx)(n.p,{children:"\u672c\u6587\u6863\u4ecb\u7ecd\u5982\u4f55\u5728 StarRocks \u4e2d\u7ba1\u7406\u67e5\u8be2\u961f\u5217\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u81ea v2.5 \u7248\u672c\u8d77\uff0cStarRocks \u652f\u6301\u67e5\u8be2\u961f\u5217\u529f\u80fd\u3002\u542f\u7528\u67e5\u8be2\u961f\u5217\u540e\uff0cStarRocks \u4f1a\u5728\u5e76\u53d1\u67e5\u8be2\u6570\u91cf\u6216\u8d44\u6e90\u4f7f\u7528\u7387\u8fbe\u5230\u4e00\u5b9a\u9608\u503c\u65f6\u81ea\u52a8\u5bf9\u67e5\u8be2\u8fdb\u884c\u6392\u961f\uff0c\u4ece\u800c\u907f\u514d\u8fc7\u8f7d\u52a0\u5267\u3002\u5f85\u6267\u884c\u67e5\u8be2\u5c06\u5728\u961f\u5217\u4e2d\u7b49\u5f85\u76f4\u81f3\u6709\u8db3\u591f\u7684\u8ba1\u7b97\u8d44\u6e90\u65f6\u5f00\u59cb\u6267\u884c\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u60a8\u53ef\u4ee5\u4e3a CPU \u4f7f\u7528\u7387\u3001\u5185\u5b58\u4f7f\u7528\u7387\u548c\u67e5\u8be2\u5e76\u53d1\u5ea6\u8bbe\u7f6e\u9608\u503c\u4ee5\u89e6\u53d1\u67e5\u8be2\u961f\u5217\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u542f\u7528\u67e5\u8be2\u961f\u5217",children:"\u542f\u7528\u67e5\u8be2\u961f\u5217"}),"\n",(0,r.jsx)(n.p,{children:"StarRocks \u9ed8\u8ba4\u5173\u95ed\u67e5\u8be2\u961f\u5217\u3002\u60a8\u53ef\u4ee5\u901a\u8fc7\u8bbe\u7f6e\u76f8\u5e94\u7684\u5168\u5c40\u4f1a\u8bdd\u53d8\u91cf\uff08Global session variable\uff09\u6765\u4e3a INSERT \u5bfc\u5165\u3001SELECT \u67e5\u8be2\u548c\u7edf\u8ba1\u4fe1\u606f\u67e5\u8be2\u542f\u7528\u67e5\u8be2\u961f\u5217\u3002"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u4e3a\u5bfc\u5165\u4efb\u52a1\u542f\u7528\u67e5\u8be2\u961f\u5217\uff1a"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:"SET GLOBAL enable_query_queue_load = true;\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u4e3a SELECT \u67e5\u8be2\u542f\u7528\u67e5\u8be2\u961f\u5217\uff1a"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:"SET GLOBAL enable_query_queue_select = true;\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u4e3a\u7edf\u8ba1\u4fe1\u606f\u67e5\u8be2\u542f\u7528\u67e5\u8be2\u961f\u5217\uff1a"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:"SET GLOBAL enable_query_queue_statistic = true;\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u6307\u5b9a\u8d44\u6e90\u9608\u503c",children:"\u6307\u5b9a\u8d44\u6e90\u9608\u503c"}),"\n",(0,r.jsx)(n.p,{children:"\u60a8\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u5168\u5c40\u4f1a\u8bdd\u53d8\u91cf\u8bbe\u7f6e\u89e6\u53d1\u67e5\u8be2\u961f\u5217\u7684\u9608\u503c\uff1a"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"\u53d8\u91cf"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"\u9ed8\u8ba4\u503c"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"\u63cf\u8ff0"})})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"query_queue_concurrency_limit"}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsxs)(n.td,{children:["\u5355\u4e2a BE \u8282\u70b9\u4e2d\u5e76\u53d1\u67e5\u8be2\u4e0a\u9650\u3002\u4ec5\u5728\u8bbe\u7f6e\u4e3a\u5927\u4e8e ",(0,r.jsx)(n.code,{children:"0"})," \u540e\u751f\u6548\u3002"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"query_queue_mem_used_pct_limit"}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsxs)(n.td,{children:["\u5355\u4e2a BE \u8282\u70b9\u4e2d\u5185\u5b58\u4f7f\u7528\u767e\u5206\u6bd4\u4e0a\u9650\u3002\u4ec5\u5728\u8bbe\u7f6e\u4e3a\u5927\u4e8e ",(0,r.jsx)(n.code,{children:"0"})," \u540e\u751f\u6548\u3002\u53d6\u503c\u8303\u56f4\uff1a[0, 1]"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"query_queue_cpu_used_permille_limit"}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsxs)(n.td,{children:["\u5355\u4e2a BE \u8282\u70b9\u4e2d CPU \u4f7f\u7528\u5343\u5206\u6bd4\u4e0a\u9650\uff08\u5373 CPU \u4f7f\u7528\u7387 * 1000\uff09\u3002\u4ec5\u5728\u8bbe\u7f6e\u4e3a\u5927\u4e8e ",(0,r.jsx)(n.code,{children:"0"})," \u540e\u751f\u6548\u3002\u53d6\u503c\u8303\u56f4\uff1a[0, 1000]"]})]})]})]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u8bf4\u660e"})}),"\n",(0,r.jsxs)(n.p,{children:["\u9ed8\u8ba4\u8bbe\u7f6e\u4e0b\uff0cBE \u6bcf\u9694\u4e00\u79d2\u5411 FE \u62a5\u544a\u8d44\u6e90\u4f7f\u7528\u60c5\u51b5\u3002\u60a8\u53ef\u4ee5\u901a\u8fc7\u8bbe\u7f6e BE \u914d\u7f6e\u9879 ",(0,r.jsx)(n.code,{children:"report_resource_usage_interval_ms"})," \u6765\u66f4\u6539\u6b64\u95f4\u9694\u65f6\u95f4\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u914d\u7f6e\u67e5\u8be2\u961f\u5217",children:"\u914d\u7f6e\u67e5\u8be2\u961f\u5217"}),"\n",(0,r.jsx)(n.p,{children:"\u60a8\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u5168\u5c40\u4f1a\u8bdd\u53d8\u91cf\u8bbe\u7f6e\u67e5\u8be2\u961f\u5217\u7684\u5bb9\u91cf\u548c\u961f\u5217\u4e2d\u67e5\u8be2\u7684\u6700\u5927\u8d85\u65f6\u65f6\u95f4\uff1a"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"\u53d8\u91cf"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"\u9ed8\u8ba4\u503c"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"\u63cf\u8ff0"})})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"query_queue_max_queued_queries"}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsxs)(n.td,{children:["\u961f\u5217\u4e2d\u67e5\u8be2\u6570\u91cf\u7684\u4e0a\u9650\u3002\u5f53\u8fbe\u5230\u6b64\u9608\u503c\u65f6\uff0c\u65b0\u589e\u67e5\u8be2\u5c06\u88ab\u62d2\u7edd\u6267\u884c\u3002\u4ec5\u5728\u8bbe\u7f6e\u4e3a\u5927\u4e8e ",(0,r.jsx)(n.code,{children:"0"})," \u540e\u751f\u6548\u3002"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"query_queue_pending_timeout_second"}),(0,r.jsx)(n.td,{children:"300"}),(0,r.jsx)(n.td,{children:"\u961f\u5217\u4e2d\u5355\u4e2a\u67e5\u8be2\u7684\u6700\u5927\u8d85\u65f6\u65f6\u95f4\u3002\u5f53\u8fbe\u5230\u6b64\u9608\u503c\u65f6\uff0c\u8be5\u67e5\u8be2\u5c06\u88ab\u62d2\u7edd\u6267\u884c\u3002\u5355\u4f4d\uff1a\u79d2\u3002"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"\u67e5\u770b\u67e5\u8be2\u961f\u5217\u7edf\u8ba1\u4fe1\u606f",children:"\u67e5\u770b\u67e5\u8be2\u961f\u5217\u7edf\u8ba1\u4fe1\u606f"}),"\n",(0,r.jsx)(n.p,{children:"\u60a8\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u65b9\u5f0f\u67e5\u770b\u67e5\u8be2\u961f\u5217\u7684\u7edf\u8ba1\u4fe1\u606f\uff1a"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u901a\u8fc7 ",(0,r.jsx)(n.a,{href:"/docusaurusv3/zh/docs/latest/sql-reference/sql-statements/Administration/SHOW%20PROC",children:"SHOW PROC"})," \u67e5\u770b BE \u8282\u70b9\u8fd0\u884c\u67e5\u8be2\u7684\u6570\u91cf\u3001\u5185\u5b58\u548c CPU \u4f7f\u7528\u60c5\u51b5\uff1a"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Plain",children:"mysql> SHOW PROC '/backends'\\G\n*************************** 1. row ***************************\n...\n    NumRunningQueries: 0\n           MemUsedPct: 0.79 %\n           CpuUsedPct: 0.0 %\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u901a\u8fc7 ",(0,r.jsx)(n.a,{href:"/docusaurusv3/zh/docs/latest/sql-reference/sql-statements/Administration/SHOW%20PROCESSLIST",children:"SHOW PROCESSLIST"})," \u67e5\u770b\u67e5\u8be2\u662f\u5426\u5728\u961f\u5217\u4e2d\uff08\u5373 ",(0,r.jsx)(n.code,{children:"IsPending"})," \u4e3a ",(0,r.jsx)(n.code,{children:"true"})," \u65f6\uff09\uff1a"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Plain",children:"MySQL [(none)]> SHOW PROCESSLIST;\n+------+------+---------------------+-------+---------+---------------------+------+-------+-------------------+-----------+\n| Id   | User | Host                | Db    | Command | ConnectionStartTime | Time | State | Info              | IsPending |\n+------+------+---------------------+-------+---------+---------------------+------+-------+-------------------+-----------+\n|    2 | root | xxx.xx.xxx.xx:xxxxx |       | Query   | 2022-11-24 18:08:29 |    0 | OK    | SHOW PROCESSLIST  | false     |\n+------+------+---------------------+-------+---------+---------------------+------+-------+-------------------+-----------+\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u67e5\u770b FE \u5ba1\u8ba1\u65e5\u5fd7\u6587\u4ef6 ",(0,r.jsx)(n.strong,{children:"fe.audit.log"}),"\u3002 \u5176\u4e2d ",(0,r.jsx)(n.code,{children:"PendingTimeMs"})," \u5b57\u6bb5\u8868\u793a\u67e5\u8be2\u5728\u961f\u5217\u4e2d\u7b49\u5f85\u7684\u65f6\u95f4\uff0c\u5355\u4f4d\u4e3a\u6beb\u79d2\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u67e5\u770b\u4ee5\u4e0b FE Metrics\uff1a"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Metrics"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"\u63cf\u8ff0"})})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"starrocks_fe_query_queue_pending"}),(0,r.jsx)(n.td,{children:"\u5f53\u524d\u6b63\u5728\u961f\u5217\u4e2d\u7684\u67e5\u8be2\u6570\u91cf\u3002"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"starrocks_fe_query_queue_total"}),(0,r.jsx)(n.td,{children:"\u88ab\u5217\u5165\u961f\u5217\u7684\u67e5\u8be2\u603b\u6570\u91cf\u3002"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"starrocks_fe_query_queue_timeout"}),(0,r.jsx)(n.td,{children:"\u6392\u961f\u8d85\u65f6\u7684\u67e5\u8be2\u603b\u6570\u91cf\u3002"})]})]})]})]})}const a=function(e={}){const{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(o,e)})):o(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>c,ah:()=>i});var r=s(67294);const t=r.createContext({});function i(e){const n=r.useContext(t);return r.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const d={};function c({components:e,children:n,disableParentContext:s}){let c;return c=s?"function"==typeof e?e({}):e||d:i(e),r.createElement(t.Provider,{value:c},n)}}}]);