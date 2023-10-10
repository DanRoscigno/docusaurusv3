"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[82405],{68661:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>r,contentTitle:()=>l,default:()=>h,frontMatter:()=>t,metadata:()=>i,toc:()=>a});var o=s(85893),c=s(11151);const t={},l="\u5bfc\u5165\u901a\u7528\u5e38\u89c1\u95ee\u9898",i={id:"faq/loading/Loading_faq",title:"\u5bfc\u5165\u901a\u7528\u5e38\u89c1\u95ee\u9898",description:'1. \u53d1\u751f "close index channel failed" \u548c "too many tablet versions" \u9519\u8bef\u5e94\u8be5\u5982\u4f55\u5904\u7406\uff1f',source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.1/faq/loading/Loading_faq.md",sourceDirName:"faq/loading",slug:"/faq/loading/Loading_faq",permalink:"/doc/zh/docs/faq/loading/Loading_faq",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/faq/loading/Loading_faq.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"INSERT INTO \u5bfc\u5165\u5e38\u89c1\u95ee\u9898",permalink:"/doc/zh/docs/faq/loading/Insert_into_faq"},next:{title:"Routine Load\u5e38\u89c1\u95ee\u9898",permalink:"/doc/zh/docs/faq/loading/Routine_load_faq"}},r={},a=[{value:"1. \u53d1\u751f &quot;close index channel failed&quot; \u548c &quot;too many tablet versions&quot; \u9519\u8bef\u5e94\u8be5\u5982\u4f55\u5904\u7406\uff1f",id:"1-\u53d1\u751f-close-index-channel-failed-\u548c-too-many-tablet-versions-\u9519\u8bef\u5e94\u8be5\u5982\u4f55\u5904\u7406",level:2},{value:"2. \u53d1\u751f &quot;Label Already Exists&quot; \u9519\u8bef\u5e94\u8be5\u5982\u4f55\u5904\u7406\uff1f",id:"2-\u53d1\u751f-label-already-exists-\u9519\u8bef\u5e94\u8be5\u5982\u4f55\u5904\u7406",level:2},{value:"3. \u53d1\u751f\u6570\u636e\u8d28\u91cf\u9519\u8bef &quot;ETL_QUALITY_UNSATISFIED; msg not good enough to cancel&quot; \u5e94\u8be5\u5982\u4f55\u5904\u7406\uff1f",id:"3-\u53d1\u751f\u6570\u636e\u8d28\u91cf\u9519\u8bef-etl_quality_unsatisfied-msg-not-good-enough-to-cancel-\u5e94\u8be5\u5982\u4f55\u5904\u7406",level:2},{value:"4. \u5bfc\u5165\u8fc7\u7a0b\u4e2d\uff0c\u53d1\u751f RPC \u8d85\u65f6\u5e94\u8be5\u5982\u4f55\u5904\u7406\uff1f",id:"4-\u5bfc\u5165\u8fc7\u7a0b\u4e2d\u53d1\u751f-rpc-\u8d85\u65f6\u5e94\u8be5\u5982\u4f55\u5904\u7406",level:2},{value:"5. \u5bfc\u5165\u4f5c\u4e1a\u62a5\u9519 &quot;Value count does not match column count&quot; \u5e94\u8be5\u600e\u4e48\u5904\u7406\uff1f",id:"5-\u5bfc\u5165\u4f5c\u4e1a\u62a5\u9519-value-count-does-not-match-column-count-\u5e94\u8be5\u600e\u4e48\u5904\u7406",level:2}];function d(n){const e=Object.assign({h1:"h1",h2:"h2",p:"p",ul:"ul",li:"li",strong:"strong",pre:"pre",code:"code",blockquote:"blockquote",div:"div",a:"a"},(0,c.ah)(),n.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h1,{id:"\u5bfc\u5165\u901a\u7528\u5e38\u89c1\u95ee\u9898",children:"\u5bfc\u5165\u901a\u7528\u5e38\u89c1\u95ee\u9898"}),"\n",(0,o.jsx)(e.h2,{id:"1-\u53d1\u751f-close-index-channel-failed-\u548c-too-many-tablet-versions-\u9519\u8bef\u5e94\u8be5\u5982\u4f55\u5904\u7406",children:'1. \u53d1\u751f "close index channel failed" \u548c "too many tablet versions" \u9519\u8bef\u5e94\u8be5\u5982\u4f55\u5904\u7406\uff1f'}),"\n",(0,o.jsx)(e.p,{children:"\u4e0a\u8ff0\u62a5\u9519\u662f\u56e0\u4e3a\u5bfc\u5165\u9891\u7387\u592a\u5feb\uff0c\u6570\u636e\u6ca1\u80fd\u53ca\u65f6\u5408\u5e76 (Compaction) \uff0c\u4ece\u800c\u5bfc\u81f4\u7248\u672c\u6570\u8d85\u8fc7\u652f\u6301\u7684\u6700\u5927\u672a\u5408\u5e76\u7248\u672c\u6570\u3002\u9ed8\u8ba4\u652f\u6301\u7684\u6700\u5927\u672a\u5408\u5e76\u7248\u672c\u6570\u4e3a 1000\u3002\u53ef\u4ee5\u901a\u8fc7\u5982\u4e0b\u65b9\u6cd5\u89e3\u51b3\u4e0a\u8ff0\u62a5\u9519\uff1a"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsx)(e.p,{children:"\u589e\u5927\u5355\u6b21\u5bfc\u5165\u7684\u6570\u636e\u91cf\uff0c\u964d\u4f4e\u5bfc\u5165\u9891\u7387\u3002"}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsxs)(e.p,{children:["\u5728 BE \u7684\u914d\u7f6e\u6587\u4ef6 ",(0,o.jsx)(e.strong,{children:"be.conf"})," \u4e2d\u4fee\u6539\u4ee5\u4e0b\u914d\u7f6e\uff0c\u901a\u8fc7\u8c03\u6574\u5408\u5e76\u7b56\u7565\u5b9e\u73b0\u52a0\u5feb\u5408\u5e76\u7684\u76ee\u7684\uff1a"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-Plain",children:"cumulative_compaction_num_threads_per_disk = 4\nbase_compaction_num_threads_per_disk = 2\ncumulative_compaction_check_interval_seconds = 2\n"})}),"\n",(0,o.jsx)(e.p,{children:"\u4fee\u6539\u5b8c\u6210\u540e\uff0c\u9700\u8981\u89c2\u5bdf\u5185\u5b58\u548c I/O\uff0c\u786e\u4fdd\u5185\u5b58\u548c I/O \u6b63\u5e38\u3002"}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(e.h2,{id:"2-\u53d1\u751f-label-already-exists-\u9519\u8bef\u5e94\u8be5\u5982\u4f55\u5904\u7406",children:'2. \u53d1\u751f "Label Already Exists" \u9519\u8bef\u5e94\u8be5\u5982\u4f55\u5904\u7406\uff1f'}),"\n",(0,o.jsx)(e.p,{children:"StarRocks \u96c6\u7fa4\u4e2d\u540c\u4e00\u4e2a\u6570\u636e\u5e93\u5185\u5df2\u7ecf\u6709\u4e00\u4e2a\u5177\u6709\u76f8\u540c\u6807\u7b7e\u7684\u5bfc\u5165\u4f5c\u4e1a\u6267\u884c\u6210\u529f\u6216\u6b63\u5728\u6267\u884c\u3002\u539f\u56e0\u5982\u4e0b\uff1a"}),"\n",(0,o.jsxs)(e.p,{children:["\u7531\u4e8e Stream Load \u662f\u91c7\u7528 HTTP \u534f\u8bae\u63d0\u4ea4\u5bfc\u5165\u4f5c\u4e1a\u7684\u8bf7\u6c42\uff0c\u4e00\u822c\u5404\u4e2a\u8bed\u8a00\u7684 HTTP \u5ba2\u6237\u7aef\u5747\u4f1a\u81ea\u5e26\u8bf7\u6c42\u91cd\u8bd5\u903b\u8f91\u3002StarRocks \u96c6\u7fa4\u5728\u63a5\u53d7\u5230\u7b2c\u4e00\u4e2a\u8bf7\u6c42\u540e\uff0c\u5df2\u7ecf\u5f00\u59cb\u64cd\u4f5c Stream Load\uff0c\u4f46\u662f\u7531\u4e8e\u6ca1\u6709\u53ca\u65f6\u5411\u5ba2\u6237\u7aef\u8fd4\u56de\u7ed3\u679c\uff0c\u5ba2\u6237\u7aef\u4f1a\u53d1\u751f\u518d\u6b21\u91cd\u8bd5\u53d1\u9001\u76f8\u540c\u8bf7\u6c42\u7684\u60c5\u51b5\u3002\u8fd9\u65f6\u5019 StarRocks \u96c6\u7fa4\u7531\u4e8e\u5df2\u7ecf\u5728\u64cd\u4f5c\u7b2c\u4e00\u4e2a\u8bf7\u6c42\uff0c\u6240\u4ee5\u7b2c\u4e8c\u4e2a\u8bf7\u6c42\u4f1a\u8fd4\u56de ",(0,o.jsx)(e.code,{children:"Label Already Exists"})," \u7684\u72b6\u6001\u63d0\u793a\u3002"]}),"\n",(0,o.jsx)(e.p,{children:"\u9700\u8981\u68c0\u67e5\u4e0d\u540c\u5bfc\u5165\u65b9\u5f0f\u4e4b\u95f4\u662f\u5426\u6709\u6807\u7b7e\u51b2\u7a81\u3001\u6216\u662f\u6709\u91cd\u590d\u63d0\u4ea4\u7684\u5bfc\u5165\u4f5c\u4e1a\u3002\u6392\u67e5\u65b9\u6cd5\u5982\u4e0b\uff1a"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsx)(e.p,{children:"\u4f7f\u7528\u6807\u7b7e\u641c\u7d22\u4e3b FE \u7684\u65e5\u5fd7\uff0c\u770b\u662f\u5426\u5b58\u5728\u540c\u4e00\u4e2a\u6807\u7b7e\u51fa\u73b0\u4e86\u4e24\u6b21\u7684\u60c5\u51b5\u3002\u5982\u679c\u6709\uff0c\u5c31\u8bf4\u660e\u5ba2\u6237\u7aef\u91cd\u590d\u63d0\u4ea4\u4e86\u8be5\u8bf7\u6c42\u3002"}),"\n",(0,o.jsxs)(e.blockquote,{children:["\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.strong,{children:"\u8bf4\u660e"})}),"\n",(0,o.jsx)(e.p,{children:"StarRocks \u96c6\u7fa4\u4e2d\u5bfc\u5165\u4f5c\u4e1a\u7684\u6807\u7b7e\u4e0d\u533a\u5206\u5bfc\u5165\u65b9\u5f0f\u3002\u56e0\u6b64\uff0c\u53ef\u80fd\u5b58\u5728\u4e0d\u540c\u7684\u5bfc\u5165\u4f5c\u4e1a\u4f7f\u7528\u4e86\u76f8\u540c\u6807\u7b7e\u7684\u95ee\u9898\u3002"}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsxs)(e.p,{children:['\u8fd0\u884c SHOW LOAD WHERE LABEL = "xxx" \u8bed\u53e5\uff0c\u67e5\u770b\u662f\u5426\u5df2\u7ecf\u5b58\u5728\u5177\u6709\u6807\u7b7e\u76f8\u540c\u3001\u4e14\u5904\u4e8e ',(0,o.jsx)(e.strong,{children:"FINISHED"})," \u72b6\u6001\u7684\u5bfc\u5165\u4f5c\u4e1a\u3002"]}),"\n",(0,o.jsxs)(e.blockquote,{children:["\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.strong,{children:"\u8bf4\u660e"})}),"\n",(0,o.jsxs)(e.p,{children:["\u5176\u4e2d ",(0,o.jsx)(e.code,{children:"xxx"})," \u4e3a\u5f85\u68c0\u67e5\u7684\u6807\u7b7e\u5b57\u7b26\u4e32\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(e.p,{children:"\u5efa\u8bae\u6839\u636e\u5f53\u524d\u8bf7\u6c42\u5bfc\u5165\u7684\u6570\u636e\u91cf\uff0c\u8ba1\u7b97\u51fa\u5927\u81f4\u7684\u5bfc\u5165\u8017\u65f6\uff0c\u5e76\u6839\u636e\u5bfc\u5165\u8d85\u65f6\u65f6\u95f4\u6765\u9002\u5f53\u5730\u8c03\u5927\u5ba2\u6237\u7aef\u7684\u8bf7\u6c42\u8d85\u65f6\u65f6\u95f4\uff0c\u4ece\u800c\u907f\u514d\u5ba2\u6237\u7aef\u591a\u6b21\u63d0\u4ea4\u8be5\u8bf7\u6c42\u3002"}),"\n",(0,o.jsxs)(e.h2,{id:"3-\u53d1\u751f\u6570\u636e\u8d28\u91cf\u9519\u8bef-etl_quality_unsatisfied-msg-not-good-enough-to-cancel-\u5e94\u8be5\u5982\u4f55\u5904\u7406",children:['3. \u53d1\u751f\u6570\u636e\u8d28\u91cf\u9519\u8bef "ETL_QUALITY_UNSATISFIED; msg',(0,o.jsx)(e.div,{}),' not good enough to cancel" \u5e94\u8be5\u5982\u4f55\u5904\u7406\uff1f']}),"\n",(0,o.jsxs)(e.p,{children:["\u8fd0\u884c ",(0,o.jsx)(e.a,{href:"/doc/zh/docs/sql-reference/sql-statements/data-manipulation/SHOW%20LOAD",children:"SHOW LOAD"})," \u8bed\u53e5\u3002\u5728\u8bed\u53e5\u8fd4\u56de\u7684\u4fe1\u606f\u4e2d\uff0c\u627e\u5230 URL\uff0c\u7136\u540e\u67e5\u770b\u9519\u8bef\u6570\u636e\u3002"]}),"\n",(0,o.jsx)(e.p,{children:"\u5e38\u89c1\u7684\u6570\u636e\u8d28\u91cf\u9519\u8bef\u6709\uff1a"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsx)(e.p,{children:'"convert csv string to INT failed."'}),"\n",(0,o.jsxs)(e.p,{children:["\u6e90\u6570\u636e\u6587\u4ef6\u4e2d\u67d0\u5217\u7684\u5b57\u7b26\u4e32\u5728\u8f6c\u5316\u4e3a\u5bf9\u5e94\u7c7b\u578b\u7684\u6570\u636e\u65f6\u51fa\u9519\u3002\u6bd4\u5982\uff0c\u5c06 ",(0,o.jsx)(e.code,{children:"abc"})," \u8f6c\u5316\u4e3a\u6570\u5b57\u65f6\u5931\u8d25\u3002"]}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsx)(e.p,{children:'"the length of input is too long than schema."'}),"\n",(0,o.jsx)(e.p,{children:"\u6e90\u6570\u636e\u6587\u4ef6\u4e2d\u67d0\u5217\u7684\u957f\u5ea6\u4e0d\u6b63\u786e\u3002\u6bd4\u5982\u5b9a\u957f\u5b57\u7b26\u4e32\u8d85\u8fc7\u5efa\u8868\u8bbe\u7f6e\u7684\u957f\u5ea6\uff0c\u6216 INT \u7c7b\u578b\u7684\u5b57\u6bb5\u8d85\u8fc7 4 \u4e2a\u5b57\u8282\u3002"}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsx)(e.p,{children:'"actual column number is less than schema column number."'}),"\n",(0,o.jsx)(e.p,{children:"\u6e90\u6570\u636e\u6587\u4ef6\u4e2d\u67d0\u4e00\u884c\u6309\u7167\u6307\u5b9a\u7684\u5206\u9694\u7b26\u5207\u5206\u540e\uff0c\u5217\u6570\u5c0f\u4e8e\u6307\u5b9a\u7684\u5217\u6570\u3002\u53ef\u80fd\u539f\u56e0\u662f\u5206\u9694\u7b26\u4e0d\u6b63\u786e\u3002"}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsx)(e.p,{children:'"actual column number is more than schema column number."'}),"\n",(0,o.jsx)(e.p,{children:"\u6e90\u6570\u636e\u6587\u4ef6\u4e2d\u67d0\u4e00\u884c\u6309\u7167\u6307\u5b9a\u7684\u5206\u9694\u7b26\u5207\u5206\u540e\uff0c\u5217\u6570\u5927\u4e8e\u6307\u5b9a\u7684\u5217\u6570\u3002"}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsx)(e.p,{children:'"the frac part length longer than schema scale."'}),"\n",(0,o.jsx)(e.p,{children:"\u6e90\u6570\u636e\u6587\u4ef6\u4e2d\u67d0 DECIMAL \u7c7b\u578b\u7684\u5217\u7684\u5c0f\u6570\u90e8\u5206\u8d85\u8fc7\u6307\u5b9a\u7684\u957f\u5ea6\u3002"}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsx)(e.p,{children:'"the int part length longer than schema precision."'}),"\n",(0,o.jsx)(e.p,{children:"\u6e90\u6570\u636e\u6587\u4ef6\u4e2d\u67d0 DECIMAL \u7c7b\u578b\u7684\u5217\u7684\u6574\u6570\u90e8\u5206\u8d85\u8fc7\u6307\u5b9a\u7684\u957f\u5ea6\u3002"}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsx)(e.p,{children:'"there is no corresponding partition for this key."'}),"\n",(0,o.jsx)(e.p,{children:"\u6e90\u6570\u636e\u6587\u4ef6\u4e2d\u67d0\u884c\u7684\u5206\u533a\u5217\u7684\u503c\u4e0d\u5728\u5206\u533a\u8303\u56f4\u5185\u3002"}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(e.h2,{id:"4-\u5bfc\u5165\u8fc7\u7a0b\u4e2d\u53d1\u751f-rpc-\u8d85\u65f6\u5e94\u8be5\u5982\u4f55\u5904\u7406",children:"4. \u5bfc\u5165\u8fc7\u7a0b\u4e2d\uff0c\u53d1\u751f RPC \u8d85\u65f6\u5e94\u8be5\u5982\u4f55\u5904\u7406\uff1f"}),"\n",(0,o.jsxs)(e.p,{children:["\u68c0\u67e5 BE \u914d\u7f6e\u6587\u4ef6 ",(0,o.jsx)(e.strong,{children:"be.conf"})," \u4e2d ",(0,o.jsx)(e.code,{children:"write_buffer_size"})," \u53c2\u6570\u7684\u8bbe\u7f6e\u3002\u8be5\u53c2\u6570\u7528\u4e8e\u63a7\u5236 BE \u4e0a\u5185\u5b58\u5757\u7684\u5927\u5c0f\u9608\u503c\uff0c\u9ed8\u8ba4\u9608\u503c\u4e3a 100 MB\u3002\u5982\u679c\u9608\u503c\u8fc7\u5927\uff0c\u53ef\u80fd\u4f1a\u5bfc\u81f4\u8fdc\u7a0b\u8fc7\u7a0b\u8c03\u7528\uff08Remote Procedure Call\uff0c\u7b80\u79f0 RPC\uff09\u8d85\u65f6\uff0c\u8fd9\u65f6\u5019\u9700\u8981\u914d\u5408 BE \u914d\u7f6e\u6587\u4ef6\u4e2d\u7684 ",(0,o.jsx)(e.code,{children:"tablet_writer_rpc_timeout_sec"})," \u53c2\u6570\u6765\u9002\u5f53\u5730\u8c03\u6574 ",(0,o.jsx)(e.code,{children:"write_buffer_size"})," \u53c2\u6570\u7684\u53d6\u503c\u3002\u8bf7\u53c2\u89c1 ",(0,o.jsx)(e.a,{href:"/doc/zh/docs/loading/Loading_intro#be-%E9%85%8D%E7%BD%AE",children:"BE \u914d\u7f6e"}),"\u3002"]}),"\n",(0,o.jsx)(e.h2,{id:"5-\u5bfc\u5165\u4f5c\u4e1a\u62a5\u9519-value-count-does-not-match-column-count-\u5e94\u8be5\u600e\u4e48\u5904\u7406",children:'5. \u5bfc\u5165\u4f5c\u4e1a\u62a5\u9519 "Value count does not match column count" \u5e94\u8be5\u600e\u4e48\u5904\u7406\uff1f'}),"\n",(0,o.jsx)(e.p,{children:'\u5bfc\u5165\u4f5c\u4e1a\u5931\u8d25\uff0c\u901a\u8fc7\u67e5\u770b\u9519\u8bef\u8be6\u60c5 URL \u53d1\u73b0\u8fd4\u56de "Value count does not match column count" \u9519\u8bef\uff0c\u63d0\u793a\u89e3\u6790\u6e90\u6570\u636e\u5f97\u5230\u7684\u5217\u6570\u4e0e\u76ee\u6807\u8868\u7684\u5217\u6570\u4e0d\u5339\u914d\uff1a'}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-Java",children:"Error: Value count does not match column count. Expect 3, but got 1. Row: 2023-01-01T18:29:00Z,cpu0,80.99\nError: Value count does not match column count. Expect 3, but got 1. Row: 2023-01-01T18:29:10Z,cpu1,75.23\nError: Value count does not match column count. Expect 3, but got 1. Row: 2023-01-01T18:29:20Z,cpu2,59.44\n"})}),"\n",(0,o.jsxs)(e.p,{children:["\u53d1\u751f\u8be5\u9519\u8bef\u7684\u539f\u56e0\u662f\u5bfc\u5165\u547d\u4ee4\u6216\u5bfc\u5165\u8bed\u53e5\u4e2d\u6307\u5b9a\u7684\u5217\u5206\u9694\u7b26\u4e0e\u6e90\u6570\u636e\u4e2d\u7684\u5217\u5206\u9694\u7b26\u4e0d\u4e00\u81f4\u3002\u4f8b\u5982\u4e0a\u9762\u793a\u4f8b\u4e2d\uff0c\u6e90\u6570\u636e\u4e3a CSV \u683c\u5f0f\uff0c\u5305\u62ec\u4e09\u5217\uff0c\u5217\u5206\u9694\u7b26\u4e3a\u9017\u53f7 (",(0,o.jsx)(e.code,{children:","}),")\uff0c\u4f46\u662f\u5bfc\u5165\u547d\u4ee4\u6216\u5bfc\u5165\u8bed\u53e5\u4e2d\u5374\u6307\u5b9a\u5236\u8868\u7b26 (",(0,o.jsx)(e.code,{children:"\\t"}),") \u4f5c\u4e3a\u5217\u5206\u9694\u7b26\uff0c\u6700\u7ec8\u5bfc\u81f4\u6e90\u6570\u636e\u7684\u4e09\u5217\u6570\u636e\u89e3\u6790\u6210\u4e86\u4e00\u5217\u6570\u636e\u3002"]}),"\n",(0,o.jsxs)(e.p,{children:["\u4fee\u6539\u5bfc\u5165\u547d\u4ee4\u6216\u5bfc\u5165\u8bed\u53e5\u4e2d\u7684\u5217\u5206\u9694\u7b26\u4e3a\u9017\u53f7 (",(0,o.jsx)(e.code,{children:","}),")\uff0c\u7136\u540e\u518d\u6b21\u5c1d\u8bd5\u6267\u884c\u5bfc\u5165\u3002"]})]})}const h=function(n={}){const{wrapper:e}=Object.assign({},(0,c.ah)(),n.components);return e?(0,o.jsx)(e,Object.assign({},n,{children:(0,o.jsx)(d,n)})):d(n)}},11151:(n,e,s)=>{s.d(e,{Zo:()=>i,ah:()=>t});var o=s(67294);const c=o.createContext({});function t(n){const e=o.useContext(c);return o.useMemo((()=>"function"==typeof n?n(e):{...e,...n}),[e,n])}const l={};function i({components:n,children:e,disableParentContext:s}){let i;return i=s?"function"==typeof n?n({}):n||l:t(n),o.createElement(c.Provider,{value:i},e)}}}]);