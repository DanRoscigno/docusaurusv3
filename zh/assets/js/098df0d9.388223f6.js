"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[36440],{58468:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>r,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>a});var i=s(85893),t=s(11151);const o={},l="MySQL \u5b9e\u65f6\u540c\u6b65\u81f3 StarRocks \u5e38\u89c1\u95ee\u9898",c={id:"faq/loading/synchronize_mysql_into_sr",title:"MySQL \u5b9e\u65f6\u540c\u6b65\u81f3 StarRocks \u5e38\u89c1\u95ee\u9898",description:"1. \u6267\u884c Flink job \u62a5\u9519",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.1/faq/loading/synchronize_mysql_into_sr.md",sourceDirName:"faq/loading",slug:"/faq/loading/synchronize_mysql_into_sr",permalink:"/docusaurusv3/zh/docs/latest/faq/loading/synchronize_mysql_into_sr",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/faq/loading/synchronize_mysql_into_sr.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"Stream Load \u5e38\u89c1\u95ee\u9898",permalink:"/docusaurusv3/zh/docs/latest/faq/loading/Stream_load_faq"},next:{title:"Export\u5e38\u89c1\u95ee\u9898",permalink:"/docusaurusv3/zh/docs/latest/faq/Exporting_faq"}},r={},a=[{value:"1. \u6267\u884c Flink job \u62a5\u9519",id:"1-\u6267\u884c-flink-job-\u62a5\u9519",level:2},{value:"2. <strong>Flink \u5982\u4f55\u81ea\u52a8\u91cd\u542f\u5931\u8d25\u7684 Task</strong>",id:"2-flink-\u5982\u4f55\u81ea\u52a8\u91cd\u542f\u5931\u8d25\u7684-task",level:2},{value:"\u5982\u4f55\u624b\u52a8\u505c\u6b62\u7684 Flink job\uff0c\u5e76\u4e14\u540e\u7eed\u6062\u590d Flink job \u81f3\u505c\u6b62\u524d\u7684\u72b6\u6001",id:"\u5982\u4f55\u624b\u52a8\u505c\u6b62\u7684-flink-job\u5e76\u4e14\u540e\u7eed\u6062\u590d-flink-job-\u81f3\u505c\u6b62\u524d\u7684\u72b6\u6001",level:3}];function d(n){const e=Object.assign({h1:"h1",h2:"h2",p:"p",strong:"strong",code:"code",a:"a",pre:"pre",blockquote:"blockquote",ul:"ul",li:"li",h3:"h3",ol:"ol"},(0,t.ah)(),n.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"mysql-\u5b9e\u65f6\u540c\u6b65\u81f3-starrocks-\u5e38\u89c1\u95ee\u9898",children:"MySQL \u5b9e\u65f6\u540c\u6b65\u81f3 StarRocks \u5e38\u89c1\u95ee\u9898"}),"\n",(0,i.jsx)(e.h2,{id:"1-\u6267\u884c-flink-job-\u62a5\u9519",children:"1. \u6267\u884c Flink job \u62a5\u9519"}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"\u62a5\u9519\u63d0\u793a"}),"\uff1a",(0,i.jsx)(e.code,{children:"Could not execute SQL statement. Reason:org.apache.flink.table.api.ValidationException: One or more required options are missing."})]}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"\u539f\u56e0\u5206\u6790"}),"\uff1a\u5728 SMT \u914d\u7f6e\u6587\u4ef6 ",(0,i.jsx)(e.strong,{children:"config_prod.conf"})," \u4e2d\u8bbe\u7f6e\u4e86\u591a\u7ec4\u89c4\u5219",(0,i.jsx)(e.code,{children:"[table-rule.1]"}),"\u3001",(0,i.jsx)(e.code,{children:"[table-rule.2]"}),"\u7b49\u4f46\u662f\u7f3a\u5931\u5fc5\u8981\u7684\u914d\u7f6e\u4fe1\u606f\u3002"]}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"\u89e3\u51b3\u65b9\u5f0f"}),"\uff1a\u68c0\u67e5\u662f\u5426\u7ed9\u6bcf\u7ec4\u89c4\u5219",(0,i.jsx)(e.code,{children:"[table-rule.1]"}),"\u3001",(0,i.jsx)(e.code,{children:"[table-rule.2]"}),"\u7b49\u914d\u7f6e database\uff0ctable\u548c flink connector \u4fe1\u606f\u3002"]}),"\n",(0,i.jsxs)(e.h2,{id:"2-flink-\u5982\u4f55\u81ea\u52a8\u91cd\u542f\u5931\u8d25\u7684-task",children:["2. ",(0,i.jsx)(e.strong,{children:"Flink \u5982\u4f55\u81ea\u52a8\u91cd\u542f\u5931\u8d25\u7684 Task"})]}),"\n",(0,i.jsxs)(e.p,{children:["Flink \u901a\u8fc7 ",(0,i.jsx)(e.a,{href:"https://nightlies.apache.org/flink/flink-docs-master/docs/dev/datastream/fault-tolerance/checkpointing/",children:"Checkpointing \u673a\u5236"}),"\u548c ",(0,i.jsx)(e.a,{href:"https://nightlies.apache.org/flink/flink-docs-release-1.15/docs/ops/state/task_failure_recovery/",children:"\u91cd\u542f\u7b56\u7565"}),"\uff0c\u81ea\u52a8\u91cd\u542f\u5931\u8d25\u7684 Task\u3002"]}),"\n",(0,i.jsxs)(e.p,{children:["\u4f8b\u5982\uff0c\u60a8\u9700\u8981\u542f\u7528 Checkpointing \u673a\u5236\uff0c\u5e76\u4e14\u4f7f\u7528\u9ed8\u8ba4\u7684\u91cd\u542f\u7b56\u7565\uff0c\u5373\u56fa\u5b9a\u5ef6\u65f6\u91cd\u542f\u7b56\u7565\uff0c\u5219\u53ef\u4ee5\u5728\u914d\u7f6e\u6587\u4ef6",(0,i.jsx)(e.code,{children:"flink-conf.yaml"}),"\u8fdb\u884c\u5982\u4e0b\u914d\u7f6e\u3002"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-YAML",children:"# unit: ms\nexecution.checkpointing.interval: 300000\nstate.backend: filesystem\nstate.checkpoints.dir: file:///tmp/flink-checkpoints-directory\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u53c2\u6570\u8bf4\u660e\uff1a"}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsxs)(e.p,{children:["Flink \u5b98\u7f51\u6587\u6863\u7684\u53c2\u6570\u8bf4\u660e\uff0c\u8bf7\u53c2\u89c1 ",(0,i.jsx)(e.a,{href:"https://nightlies.apache.org/flink/flink-docs-master/zh/docs/dev/datastream/fault-tolerance/checkpointing/",children:"Checkpointing"}),"\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"execution.checkpointing.interval"}),"\uff1a Checkpoint \u7684\u57fa\u672c\u65f6\u95f4\u95f4\u9694\uff0c\u5355\u4f4d\u4e3a ms\u3002\u5982\u679c\u9700\u8981\u542f\u7528 Checkpointing \u673a\u5236\uff0c\u5219\u60a8\u9700\u8981\u8bbe\u7f6e\u8be5\u503c\u4e3a\u5927\u4e8e 0\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"state.backend"}),"\uff1a\u542f\u52a8 Checkpointing \u673a\u5236\u540e\uff0c\u72b6\u6001\u4f1a\u968f\u7740 CheckPoint \u800c\u6301\u4e45\u5316\uff0c\u4ee5\u9632\u6b62\u6570\u636e\u4e22\u5931\u3001\u4fdd\u969c\u6062\u590d\u65f6\u7684\u4e00\u81f4\u6027\u3002 \u72b6\u6001\u5185\u90e8\u7684\u5b58\u50a8\u683c\u5f0f\u3001\u72b6\u6001\u5728 CheckPoint \u65f6\u5982\u4f55\u6301\u4e45\u5316\u4ee5\u53ca\u6301\u4e45\u5316\u5728\u54ea\u91cc\u5747\u53d6\u51b3\u4e8e\u9009\u62e9\u7684 State Backend\u3002\u72b6\u6001\u66f4\u591a\u4ecb\u7ecd\uff0c\u8bf7\u53c2\u89c1 ",(0,i.jsx)(e.a,{href:"https://nightlies.apache.org/flink/flink-docs-master/docs/ops/state/state_backends/",children:"State Backends"}),"\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"state.checkpoints.dir"}),"\uff1aCheckpoint \u6570\u636e\u5b58\u50a8\u76ee\u5f55\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"\u5982\u4f55\u624b\u52a8\u505c\u6b62\u7684-flink-job\u5e76\u4e14\u540e\u7eed\u6062\u590d-flink-job-\u81f3\u505c\u6b62\u524d\u7684\u72b6\u6001",children:"\u5982\u4f55\u624b\u52a8\u505c\u6b62\u7684 Flink job\uff0c\u5e76\u4e14\u540e\u7eed\u6062\u590d Flink job \u81f3\u505c\u6b62\u524d\u7684\u72b6\u6001"}),"\n",(0,i.jsxs)(e.p,{children:["\u53ef\u4ee5\u5728\u505c\u6b62 Flink job \u65f6\u624b\u52a8\u89e6\u53d1 ",(0,i.jsx)(e.a,{href:"https://nightlies.apache.org/flink/flink-docs-master/docs/ops/state/savepoints/",children:"savepoint"}),"\uff08savepoint\u662f\u4f9d\u636e Checkpointing \u673a\u5236\u6240\u521b\u5efa\u7684\u6d41\u4f5c\u4e1a\u6267\u884c\u72b6\u6001\u7684\u4e00\u81f4\u955c\u50cf\uff09\uff0c\u540e\u7eed\u53ef\u4ee5\u4ece\u6307\u5b9a savepoint \u4e2d\u6062\u590dflinkjob\u3002"]}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["\u4f7f\u7528 Savepoint \u505c\u6b62\u4f5c\u4e1a\u3002\u8fd9\u5c06\u81ea\u52a8\u89e6\u53d1  Flink job ",(0,i.jsx)(e.code,{children:"jobId"})," \u7684 savepoint\uff0c\u5e76\u505c\u6b62\u8be5 job\u3002\u6b64\u5916\uff0c\u4f60\u53ef\u4ee5\u6307\u5b9a\u4e00\u4e2a\u76ee\u6807\u6587\u4ef6\u7cfb\u7edf\u76ee\u5f55\u6765\u5b58\u50a8 Savepoint \u3002"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-Bash",children:"bin/flink stop --type [native/canonical] --savepointPath [:targetDirectory] :jobId\n"})}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsx)(e.p,{children:"\u8bf4\u660e"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"jobId"}),": \u60a8\u53ef\u4ee5\u901a\u8fc7 Flink  WebUI \u67e5\u770b Flink job ID\uff0c\u6216\u8005\u5728\u547d\u4ee4\u884c\u6267\u884c",(0,i.jsx)(e.code,{children:"flink list \u2013running"})," \u8fdb\u884c\u67e5\u770b\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"targetDirectory"}),": \u60a8\u4e5f\u53ef\u4ee5\u5728 Flink \u914d\u7f6e\u6587\u4ef6 ",(0,i.jsx)(e.strong,{children:"flink-conf.yml"})," \u4e2d ",(0,i.jsx)(e.code,{children:"state.savepoints.dir"})," \u914d\u7f6e savepoint \u7684\u9ed8\u8ba4\u76ee\u5f55\u3002 \u89e6\u53d1 savepoint \u65f6\uff0c\u5c06\u4f7f\u7528\u6b64\u76ee\u5f55\u6765\u5b58\u50a8 savepoint\uff0c\u65e0\u9700\u6307\u5b9a\u76ee\u5f55\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-Bash",children:"state.savepoints.dir: [file://\u6216hdfs://]/home/user/savepoints_dir\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u5982\u679c\u9700\u8981\u6062\u590d Flink job \u81f3\u505c\u6b62\u524d\u7684\u72b6\u6001\uff0c\u5219\u60a8\u9700\u8981\u5728\u91cd\u65b0\u63d0\u4ea4 Flink job \u65f6\u6307\u5b9asavepoint\u3002"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-Bash",children:"./flink run -c com.starrocks.connector.flink.tools.ExecuteSQL -s savepoints_dir/savepoints-xxxxxxxx flink-connector-starrocks-xxxx.jar -f flink-create.all.sql \n"})}),"\n"]}),"\n"]})]})}const h=function(n={}){const{wrapper:e}=Object.assign({},(0,t.ah)(),n.components);return e?(0,i.jsx)(e,Object.assign({},n,{children:(0,i.jsx)(d,n)})):d(n)}},11151:(n,e,s)=>{s.d(e,{Zo:()=>c,ah:()=>o});var i=s(67294);const t=i.createContext({});function o(n){const e=i.useContext(t);return i.useMemo((()=>"function"==typeof n?n(e):{...e,...n}),[e,n])}const l={};function c({components:n,children:e,disableParentContext:s}){let c;return c=s?"function"==typeof n?n({}):n||l:o(n),i.createElement(t.Provider,{value:c},e)}}}]);