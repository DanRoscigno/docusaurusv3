"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[59161],{87562:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>t,default:()=>o,frontMatter:()=>c,metadata:()=>d,toc:()=>h});var r=n(85893),i=n(11151);const c={},t="\u7ba1\u7406\u5185\u5b58",d={id:"administration/Memory_management",title:"\u7ba1\u7406\u5185\u5b58",description:"\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u7ba1\u7406\u5e76\u8c03\u4f18\u5185\u5b58\u8d44\u6e90\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.1/administration/Memory_management.md",sourceDirName:"administration",slug:"/administration/Memory_management",permalink:"/docusaurusv3/zh/docs/latest/administration/Memory_management",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/administration/Memory_management.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"\u7ba1\u7406\u67e5\u8be2",permalink:"/docusaurusv3/zh/docs/latest/administration/Query_management"},next:{title:"\u4e2d\u95f4\u7ed3\u679c\u843d\u76d8",permalink:"/docusaurusv3/zh/docs/latest/administration/spill_to_disk"}},l={},h=[{value:"\u67e5\u770b\u5185\u5b58\u4f7f\u7528",id:"\u67e5\u770b\u5185\u5b58\u4f7f\u7528",level:2},{value:"\u5185\u5b58\u5206\u7c7b",id:"\u5185\u5b58\u5206\u7c7b",level:2},{value:"\u5185\u5b58\u76f8\u5173\u914d\u7f6e\u9879",id:"\u5185\u5b58\u76f8\u5173\u914d\u7f6e\u9879",level:2},{value:"BE \u914d\u7f6e\u9879",id:"be-\u914d\u7f6e\u9879",level:3},{value:"Session \u53d8\u91cf",id:"session-\u53d8\u91cf",level:3}];function a(e){const s=Object.assign({h1:"h1",p:"p",h2:"h2",ul:"ul",li:"li",strong:"strong",pre:"pre",code:"code",blockquote:"blockquote",a:"a",img:"img",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",h3:"h3"},(0,i.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h1,{id:"\u7ba1\u7406\u5185\u5b58",children:"\u7ba1\u7406\u5185\u5b58"}),"\n",(0,r.jsx)(s.p,{children:"\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u7ba1\u7406\u5e76\u8c03\u4f18\u5185\u5b58\u8d44\u6e90\u3002"}),"\n",(0,r.jsx)(s.h2,{id:"\u67e5\u770b\u5185\u5b58\u4f7f\u7528",children:"\u67e5\u770b\u5185\u5b58\u4f7f\u7528"}),"\n",(0,r.jsx)(s.p,{children:"\u60a8\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u65b9\u6cd5\u67e5\u770b\u5206\u6790 BE \u5185\u5b58\u4f7f\u7528\u3002"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.strong,{children:"\u901a\u8fc7\u6d4f\u89c8\u5668\u6216 curl \u547d\u4ee4\u8bbf\u95ee Metrics \u63a5\u53e3\u5206\u6790\u5185\u5b58\u4f7f\u7528\u3002"})}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"Metrics \u7edf\u8ba1\u6bcf 10 \u79d2\u66f4\u65b0\u4e00\u6b21\u3002"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:'curl -XGET -s http://be_ip:8040/metrics | grep "^starrocks_be_.*_mem_bytes\\|^starrocks_be_tcmalloc_bytes_in_use" \n'})}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsx)(s.p,{children:"\u8bf4\u660e\uff1a"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\u5c06\u4ee5\u4e0a ",(0,r.jsx)(s.code,{children:"be_ip"})," \u6539\u4e3a BE \u8282\u70b9\u5b9e\u9645\u7684 IP \u5730\u5740\u3002"]}),"\n",(0,r.jsxs)(s.li,{children:["BE ",(0,r.jsx)(s.code,{children:"be_http_port"})," \u9ed8\u8ba4\u4e3a ",(0,r.jsx)(s.code,{children:"8040"}),"\u3002"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["\u5bf9\u5e94\u6307\u6807\u7684\u542b\u4e49\u53c2\u8003 ",(0,r.jsx)(s.a,{href:"#%E5%86%85%E5%AD%98%E5%88%86%E7%B1%BB",children:"\u5185\u5b58\u5206\u7c7b"}),"\u3002"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.strong,{children:"\u901a\u8fc7\u6d4f\u89c8\u5668\u6216 curl \u547d\u4ee4\u8bbf\u95ee mem_tracker \u63a5\u53e3\u5206\u6790 BE \u5185\u5b58\u4f7f\u7528\u3002"})}),"\n"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"http://be_ip:8040/mem_tracker\n"})}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsx)(s.p,{children:"\u8bf4\u660e\uff1a"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\u5c06\u4ee5\u4e0a ",(0,r.jsx)(s.code,{children:"be_ip"})," \u6539\u4e3a BE \u8282\u70b9\u5b9e\u9645\u7684 IP \u5730\u5740\u3002"]}),"\n",(0,r.jsxs)(s.li,{children:["BE ",(0,r.jsx)(s.code,{children:"be_http_port"})," \u9ed8\u8ba4\u4e3a ",(0,r.jsx)(s.code,{children:"8040"}),"\u3002"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{alt:"MemTracker",src:n(62200).Z+"",width:"1312",height:"654"})}),"\n",(0,r.jsx)(s.p,{children:"\u6307\u6807\u8bf4\u660e\uff1a"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"level"}),": MemTracker \u4e3a\u6811\u578b\u7ed3\u6784\uff0c\u7b2c\u4e00\u7ea7\u4e3a BE \u4f7f\u7528\u603b\u5185\u5b58\uff0c\u7b2c\u4e8c\u7ea7\u4e3a\u5206\u7c7b\u5185\u5b58\u4f7f\u7528\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"Label"}),": \u6807\u8bc6\u5185\u5b58\u5206\u7c7b\uff0c\u5bf9\u5e94\u6307\u6807\u7684\u542b\u4e49\u53c2\u8003 ",(0,r.jsx)(s.a,{href:"#%E5%86%85%E5%AD%98%E5%88%86%E7%B1%BB",children:"\u5185\u5b58\u5206\u7c7b"}),"\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"Parent"}),": \u7236\u7ed3\u70b9 Label\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"Limit"}),": \u5185\u5b58\u4f7f\u7528\u9650\u5236\uff0c",(0,r.jsx)(s.code,{children:"-1"})," \u8868\u793a\u6ca1\u6709\u9650\u5236\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"Current Consumption"}),": \u5f53\u524d\u5185\u5b58\u4f7f\u7528\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"Peak Consumption"}),": \u5cf0\u503c\u5185\u5b58\u4f7f\u7528\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"\u901a\u8fc7\u6d4f\u89c8\u5668\u6216 curl \u547d\u4ee4\u8bbf\u95ee TCmalloc \u63a5\u53e3\u5206\u6790 BE \u5185\u5b58\u4f7f\u7528\u3002"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"http://be_ip:8040/memz\n"})}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsx)(s.p,{children:"\u8bf4\u660e\uff1a"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\u5c06\u4ee5\u4e0a ",(0,r.jsx)(s.code,{children:"be_ip"})," \u6539\u4e3a BE \u8282\u70b9\u5b9e\u9645\u7684 IP \u5730\u5740\u3002"]}),"\n",(0,r.jsxs)(s.li,{children:["BE ",(0,r.jsx)(s.code,{children:"be_http_port"})," \u9ed8\u8ba4\u4e3a ",(0,r.jsx)(s.code,{children:"8040"}),"\u3002"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"\u793a\u4f8b\uff1a"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-plain",metastring:"text",children:"------------------------------------------------\r\nMALLOC:      777276768 (  741.3 MiB) Bytes in use by application\r\nMALLOC: +   8851890176 ( 8441.8 MiB) Bytes in page heap freelist\r\nMALLOC: +    143722232 (  137.1 MiB) Bytes in central cache freelist\r\nMALLOC: +     21869824 (   20.9 MiB) Bytes in transfer cache freelist\r\nMALLOC: +    832509608 (  793.9 MiB) Bytes in thread cache freelists\r\nMALLOC: +     58195968 (   55.5 MiB) Bytes in malloc metadata\r\nMALLOC:   ------------\r\nMALLOC: =  10685464576 (10190.5 MiB) Actual memory used (physical + swap)\r\nMALLOC: +  25231564800 (24062.7 MiB) Bytes released to OS (aka unmapped)\r\nMALLOC:   ------------\r\nMALLOC: =  35917029376 (34253.1 MiB) Virtual address space used\r\nMALLOC:\r\nMALLOC:         112388              Spans in use\r\nMALLOC:            335              Thread heaps in use\r\nMALLOC:           8192              Tcmalloc page size\r\n------------------------------------------------\r\nCall ReleaseFreeMemory() to release freelist memory to the OS (via madvise()).\r\nBytes released to the OS take up virtual address space but no physical memory.\n"})}),"\n",(0,r.jsx)(s.p,{children:"\u6307\u6807\u8bf4\u660e\uff1a"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"Bytes in use by application"}),": BE \u5b9e\u9645\u4f7f\u7528\u7684\u5185\u5b58\u3002"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"Bytes in page heap freelist"}),": BE \u5df2\u4e0d\u518d\u4f7f\u7528\uff0c\u4f46\u662f\u5c1a\u672a\u5f52\u8fd8\u7ed9\u64cd\u4f5c\u7cfb\u7edf\u7684\u5185\u5b58\u3002"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"Actual memory used"}),": \u64cd\u4f5c\u7cfb\u7edf\u76d1\u6d4b\u5230 BE \u5b9e\u9645\u5185\u5b58\u4f7f\u7528\uff08BE \u4f1a\u9884\u7559\u4e00\u4e9b\u7a7a\u95f2\u5185\u5b58\uff0c\u4e0d\u8fd8\u7ed9\u64cd\u4f5c\u7cfb\u7edf\u6216\u662f\u7f13\u6162\u8fd4\u8fd8\u7ed9\u64cd\u4f5c\u7cfb\u7edf\uff09\u3002"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"Bytes released to OS"}),": BE \u5df2\u8bbe\u7f6e\u4e3a\u53ef\u56de\u6536\u72b6\u6001\uff0c\u4f46\u662f\u64cd\u4f5c\u7cfb\u7edf\u5c1a\u672a\u56de\u6536\u7684\u5185\u5b58\u3002"]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"\u5185\u5b58\u5206\u7c7b",children:"\u5185\u5b58\u5206\u7c7b"}),"\n",(0,r.jsx)(s.p,{children:"StarRocks BE \u4e2d\u7684\u5185\u5b58\u5206\u4e3a\u4ee5\u4e0b\u51e0\u7c7b\u3002"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"\u6807\u8bc6"}),(0,r.jsx)(s.th,{children:"Metric \u540d\u79f0"}),(0,r.jsx)(s.th,{children:"\u8bf4\u660e"}),(0,r.jsx)(s.th,{children:"BE \u76f8\u5173\u914d\u7f6e"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"process"}),(0,r.jsx)(s.td,{children:"starrocks_be_process_mem_bytes"}),(0,r.jsx)(s.td,{children:"BE \u8fdb\u7a0b\u5b9e\u9645\u4f7f\u7528\u7684\u5185\u5b58\uff08\u4e0d\u5305\u542b\u9884\u7559\u7684\u7a7a\u95f2\u5185\u5b58\uff09\u3002"}),(0,r.jsx)(s.td,{children:"mem_limit"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"query_pool"}),(0,r.jsx)(s.td,{children:"starrocks_be_query_mem_bytes"}),(0,r.jsx)(s.td,{children:"BE \u67e5\u8be2\u5c42\u4f7f\u7528\u603b\u5185\u5b58\u3002"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"load"}),(0,r.jsx)(s.td,{children:"starrocks_be_load_mem_bytes"}),(0,r.jsx)(s.td,{children:"\u5bfc\u5165\u4f7f\u7528\u7684\u603b\u5185\u5b58\u3002"}),(0,r.jsx)(s.td,{children:"load_process_max_memory_limit_bytes, load_process_max_memory_limit_percent"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"table_meta"}),(0,r.jsx)(s.td,{children:"starrocks_be_tablet_meta_mem_bytes"}),(0,r.jsx)(s.td,{children:"\u5143\u6570\u636e\u603b\u5185\u5b58\u3002"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"compaction"}),(0,r.jsx)(s.td,{children:"starrocks_be_compaction_mem_bytes"}),(0,r.jsx)(s.td,{children:"\u7248\u672c\u5408\u5e76\u603b\u5185\u5b58\u3002"}),(0,r.jsx)(s.td,{children:"compaction_max_memory_limit, compaction_max_memory_limit_percent"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"column_pool"}),(0,r.jsx)(s.td,{children:"starrocks_be_column_pool_mem_bytes"}),(0,r.jsx)(s.td,{children:"column pool \u5185\u5b58\u6c60\uff0c\u7528\u4e8e\u52a0\u901f\u5b58\u50a8\u5c42\u6570\u636e\u8bfb\u53d6\u7684 Column Cache\u3002"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"page_cache"}),(0,r.jsx)(s.td,{children:"starrocks_be_storage_page_cache_mem_bytes"}),(0,r.jsx)(s.td,{children:"BE \u5b58\u50a8\u5c42 page \u7f13\u5b58\u3002"}),(0,r.jsx)(s.td,{children:"disable_storage_page_cache, storage_page_cache_limit"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"chunk_allocator"}),(0,r.jsx)(s.td,{children:"starrocks_be_chunk_allocator_mem_bytes"}),(0,r.jsx)(s.td,{children:"CPU per core \u7f13\u5b58\uff0c\u7528\u4e8e\u52a0\u901f\u5c0f\u5757\u5185\u5b58\u7533\u8bf7\u7684 Cache\u3002"}),(0,r.jsx)(s.td,{children:"chunk_reserved_bytes_limit"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"consistency"}),(0,r.jsx)(s.td,{children:"starrocks_be_consistency_mem_bytes"}),(0,r.jsx)(s.td,{children:"\u5b9a\u671f\u4e00\u81f4\u6027\u6821\u9a8c\u4f7f\u7528\u7684\u5185\u5b58\u3002"}),(0,r.jsx)(s.td,{children:"consistency_max_memory_limit_percent, consistency_max_memory_limit"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"schema_change"}),(0,r.jsx)(s.td,{children:"starrocks_be_schema_change_mem_bytes"}),(0,r.jsx)(s.td,{children:"Schema Change \u4efb\u52a1\u4f7f\u7528\u7684\u603b\u5185\u5b58\u3002"}),(0,r.jsx)(s.td,{children:"memory_limitation_per_thread_for_schema_change"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"clone"}),(0,r.jsx)(s.td,{children:"starrocks_be_clone_mem_bytes"}),(0,r.jsx)(s.td,{children:"Tablet Clone \u4efb\u52a1\u4f7f\u7528\u7684\u603b\u5185\u5b58\u3002"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"update"}),(0,r.jsx)(s.td,{children:"starrocks_be_update_mem_bytes"}),(0,r.jsx)(s.td,{children:"\u4e3b\u952e\u6a21\u578b\u4f7f\u7528\u7684\u603b\u5185\u5b58\u3002"}),(0,r.jsx)(s.td,{})]})]})]}),"\n",(0,r.jsx)(s.h2,{id:"\u5185\u5b58\u76f8\u5173\u914d\u7f6e\u9879",children:"\u5185\u5b58\u76f8\u5173\u914d\u7f6e\u9879"}),"\n",(0,r.jsx)(s.h3,{id:"be-\u914d\u7f6e\u9879",children:"BE \u914d\u7f6e\u9879"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"\u540d\u79f0"}),(0,r.jsx)(s.th,{children:"\u9ed8\u8ba4\u503c"}),(0,r.jsx)(s.th,{children:"\u8bf4\u660e"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"mem_limit"}),(0,r.jsx)(s.td,{children:"90%"}),(0,r.jsx)(s.td,{children:"BE \u8fdb\u7a0b\u5185\u5b58\u4e0a\u9650\uff0c\u9ed8\u8ba4\u786c\u4e0a\u9650\u4e3a BE \u6240\u5728\u673a\u5668\u5185\u5b58\u7684 90%\uff0c\u8f6f\u4e0a\u9650\u4e3a BE \u6240\u5728\u673a\u5668\u5185\u5b58\u7684 80%\u3002\u5982\u679c BE \u4e3a\u72ec\u7acb\u90e8\u7f72\uff0c\u5219\u65e0\u9700\u914d\u7f6e\uff0c\u5982\u679c BE \u4e0e\u5176\u5b83\u5360\u7528\u5185\u5b58\u8f83\u591a\u7684\u670d\u52a1\u6df7\u5408\u90e8\u7f72\uff0c\u5219\u9700\u8981\u5408\u7406\u914d\u7f6e\u3002"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"load_process_max_memory_limit_bytes"}),(0,r.jsx)(s.td,{children:"107374182400"}),(0,r.jsx)(s.td,{children:"\u5355\u8282\u70b9\u4e0a\u6240\u6709\u7684\u5bfc\u5165\u7ebf\u7a0b\u5360\u636e\u7684\u5185\u5b58\u4e0a\u9650\uff0c\u53d6 mem_limit * load_process_max_memory_limit_percent / 100 \u548c load_process_max_memory_limit_bytes \u4e2d\u8f83\u5c0f\u7684\u503c\u3002\u5982\u5bfc\u5165\u5185\u5b58\u5230\u8fbe\u9650\u5236\uff0c\u5219\u4f1a\u89e6\u53d1\u5237\u76d8\u548c\u53cd\u538b\u903b\u8f91\u3002"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"load_process_max_memory_limit_percent"}),(0,r.jsx)(s.td,{children:"30"}),(0,r.jsx)(s.td,{children:"\u5355\u8282\u70b9\u4e0a\u6240\u6709\u7684\u5bfc\u5165\u7ebf\u7a0b\u5360\u636e\u7684\u5185\u5b58\u4e0a\u9650\u6bd4\u4f8b\uff0c\u53d6 mem_limit * load_process_max_memory_limit_percent / 100 \u548c load_process_max_memory_limit_bytes \u4e2d\u8f83\u5c0f\u7684\u503c\uff0c\u5bfc\u5165\u5185\u5b58\u5230\u8fbe\u9650\u5236\uff0c\u4f1a\u89e6\u53d1\u5237\u76d8\u548c\u53cd\u538b\u903b\u8f91\u3002"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"compaction_max_memory_limit"}),(0,r.jsx)(s.td,{children:"-1"}),(0,r.jsx)(s.td,{children:"Compaction \u5185\u5b58\u4e0a\u9650\uff0c\u53d6 mem_limit * compaction_max_memory_limit_percent / 100 \u548c compaction_max_memory_limit \u4e2d\u8f83\u5c0f\u7684\u503c\uff0c-1 \u8868\u793a\u6ca1\u6709\u9650\u5236\u3002\u5f53\u524d\u4e0d\u5efa\u8bae\u4fee\u6539\u9ed8\u8ba4\u914d\u7f6e\u3002Compaction \u5185\u5b58\u5230\u8fbe\u9650\u5236\uff0c\u4f1a\u5bfc\u81f4 Compaction \u4efb\u52a1\u5931\u8d25\u3002"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"compaction_max_memory_limit_percent"}),(0,r.jsx)(s.td,{children:"100"}),(0,r.jsx)(s.td,{children:"Compaction \u5185\u5b58\u767e\u5206\u6bd4\u4e0a\u9650\uff0c\u53d6 mem_limit * compaction_max_memory_limit_percent / 100 \u548c compaction_max_memory_limit \u4e2d\u8f83\u5c0f\u7684\u503c\uff0c-1 \u8868\u793a\u6ca1\u6709\u9650\u5236\u3002\u5f53\u524d\u4e0d\u5efa\u8bae\u4fee\u6539\u9ed8\u8ba4\u914d\u7f6e\u3002Compaction \u5185\u5b58\u5230\u8fbe\u9650\u5236\uff0c\u4f1a\u5bfc\u81f4 Compaction \u4efb\u52a1\u5931\u8d25\u3002"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"disable_storage_page_cache"}),(0,r.jsx)(s.td,{children:"false"}),(0,r.jsxs)(s.td,{children:["\u662f\u5426\u5f00\u542f PageCache\u3002\u5f00\u542f PageCache \u540e\uff0cStarRocks \u4f1a\u7f13\u5b58\u6700\u8fd1\u626b\u63cf\u8fc7\u7684\u6570\u636e\uff0c\u5bf9\u4e8e\u67e5\u8be2\u91cd\u590d\u6027\u9ad8\u7684\u573a\u666f\uff0c\u4f1a\u5927\u5e45\u63d0\u5347\u67e5\u8be2\u6548\u7387\u3002",(0,r.jsx)(s.code,{children:"true"})," \u8868\u793a\u4e0d\u5f00\u542f\u3002\u8be5\u914d\u7f6e\u9879\u4e0e storage_page_cache_limit \u914d\u5408\u4f7f\u7528\uff0c\u5728\u5185\u5b58\u8d44\u6e90\u5145\u8db3\u548c\u6709\u5927\u6570\u636e\u91cf Scan \u7684\u573a\u666f\u4e2d\u542f\u7528\u80fd\u591f\u52a0\u901f\u67e5\u8be2\u6027\u80fd\u3002\u81ea 2.4 \u7248\u672c\u8d77\uff0c\u8be5\u53c2\u6570\u9ed8\u8ba4\u503c\u7531 ",(0,r.jsx)(s.code,{children:"TRUE"})," \u53d8\u66f4\u4e3a ",(0,r.jsx)(s.code,{children:"FALSE"}),"\u3002 \u81ea 3.1 \u7248\u672c\u5f00\u59cb\uff0c\u8be5\u53c2\u6570\u7531\u9759\u6001\u53d8\u4e3a\u52a8\u6001\u3002"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"storage_page_cache_limit"}),(0,r.jsx)(s.td,{children:"20%"}),(0,r.jsx)(s.td,{children:"BE \u5b58\u50a8\u5c42 page \u7f13\u5b58\u53ef\u4ee5\u4f7f\u7528\u7684\u5185\u5b58\u4e0a\u9650\u3002"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"chunk_reserved_bytes_limit"}),(0,r.jsx)(s.td,{children:"2147483648"}),(0,r.jsx)(s.td,{children:"\u7528\u4e8e\u52a0\u901f\u5c0f\u5757\u5185\u5b58\u5206\u914d\u7684 Cache\uff0c\u9ed8\u8ba4\u4e0a\u9650\u4e3a 2GB\u3002\u60a8\u53ef\u4ee5\u5728\u5185\u5b58\u8d44\u6e90\u5145\u8db3\u7684\u60c5\u51b5\u4e0b\u6253\u5f00\u3002"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"consistency_max_memory_limit_percent"}),(0,r.jsx)(s.td,{children:"20"}),(0,r.jsx)(s.td,{children:"\u4e00\u81f4\u6027\u6821\u9a8c\u4efb\u52a1\u4f7f\u7528\u7684\u5185\u5b58\u4e0a\u9650\uff0c\u53d6 mem_limit * consistency_max_memory_limit_percent / 100 \u548c consistency_max_memory_limit \u4e2d\u8f83\u5c0f\u7684\u503c\u3002\u5185\u5b58\u4f7f\u7528\u8d85\u9650\uff0c\u4f1a\u5bfc\u81f4\u4e00\u81f4\u6027\u6821\u9a8c\u4efb\u52a1\u5931\u8d25\u3002"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"consistency_max_memory_limit"}),(0,r.jsx)(s.td,{children:"10G"}),(0,r.jsx)(s.td,{children:"\u4e00\u81f4\u6027\u6821\u9a8c\u4efb\u52a1\u4f7f\u7528\u7684\u5185\u5b58\u4e0a\u9650\uff0c\u53d6 mem_limit * consistency_max_memory_limit_percent / 100 \u548c consistency_max_memory_limit \u4e2d\u8f83\u5c0f\u7684\u503c\u3002\u5185\u5b58\u4f7f\u7528\u8d85\u9650\uff0c\u4f1a\u5bfc\u81f4\u4e00\u81f4\u6027\u6821\u9a8c\u4efb\u52a1\u5931\u8d25\u3002"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"memory_limitation_per_thread_for_schema_change"}),(0,r.jsx)(s.td,{children:"2"}),(0,r.jsx)(s.td,{children:"\u5355\u4e2a Schema Change \u4efb\u52a1\u7684\u5185\u5b58\u4f7f\u7528\u4e0a\u9650\uff0c\u5185\u5b58\u4f7f\u7528\u8d85\u9650\uff0c\u4f1a\u5bfc\u81f4 Schema Change \u4efb\u52a1\u5931\u8d25\u3002"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"max_compaction_concurrency"}),(0,r.jsx)(s.td,{children:"-1"}),(0,r.jsx)(s.td,{children:"Compaction \u7ebf\u7a0b\u6570\u4e0a\u9650\uff08\u5373 BaseCompaction + CumulativeCompaction \u7684\u6700\u5927\u5e76\u53d1\uff09\u3002\u8be5\u53c2\u6570\u9632\u6b62 Compaction \u5360\u7528\u8fc7\u591a\u5185\u5b58\u3002 -1 \u4ee3\u8868\u6ca1\u6709\u9650\u5236\u30020 \u8868\u793a\u4e0d\u5141\u8bb8 compaction\u3002"})]})]})]}),"\n",(0,r.jsx)(s.h3,{id:"session-\u53d8\u91cf",children:"Session \u53d8\u91cf"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"\u540d\u79f0"}),(0,r.jsx)(s.th,{children:"\u9ed8\u8ba4\u503c"}),(0,r.jsx)(s.th,{children:"\u8bf4\u660e"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"query_mem_limit"}),(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{children:"\u5404 BE \u8282\u70b9\u4e0a\u5355\u4e2a\u67e5\u8be2\u7684\u5185\u5b58\u9650\u5236\uff0c\u5355\u4f4d\u662f Byte\u3002\u5efa\u8bae\u8bbe\u7f6e\u4e3a 17179869184\uff0816GB\uff09\u4ee5\u4e0a\u3002"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"load_mem_limit"}),(0,r.jsx)(s.td,{children:"0"}),(0,r.jsxs)(s.td,{children:["\u5404 BE \u8282\u70b9\u4e0a\u5355\u4e2a\u5bfc\u5165\u4efb\u52a1\u7684\u5185\u5b58\u9650\u5236\uff0c\u5355\u4f4d\u662f Byte\u3002\u5982\u679c\u8bbe\u7f6e\u4e3a ",(0,r.jsx)(s.code,{children:"0"}),"\uff0cStarRocks \u91c7\u7528 ",(0,r.jsx)(s.code,{children:"exec_mem_limit"})," \u4f5c\u4e3a\u5185\u5b58\u9650\u5236\u3002"]})]})]})]})]})}const o=function(e={}){const{wrapper:s}=Object.assign({},(0,i.ah)(),e.components);return s?(0,r.jsx)(s,Object.assign({},e,{children:(0,r.jsx)(a,e)})):a(e)}},62200:(e,s,n)=>{n.d(s,{Z:()=>r});const r=n.p+"assets/images/memory_management_1-ebb466291a4956b60da63bb5c321314b.png"},11151:(e,s,n)=>{n.d(s,{Zo:()=>d,ah:()=>c});var r=n(67294);const i=r.createContext({});function c(e){const s=r.useContext(i);return r.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const t={};function d({components:e,children:s,disableParentContext:n}){let d;return d=n?"function"==typeof e?e({}):e||t:c(e),r.createElement(i.Provider,{value:d},s)}}}]);