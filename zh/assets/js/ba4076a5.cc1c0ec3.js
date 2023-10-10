"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[79385],{39329:(e,d,s)=>{s.r(d),s.d(d,{assets:()=>i,contentTitle:()=>r,default:()=>o,frontMatter:()=>n,metadata:()=>c,toc:()=>l});var t=s(85893),a=s(11151);const n={},r="\u6570\u636e\u6e56\u76f8\u5173 FAQ",c={id:"data_source/datalake_faq",title:"\u6570\u636e\u6e56\u76f8\u5173 FAQ",description:"\u672c\u6587\u4ecb\u7ecd\u6570\u636e\u6e56\u76f8\u5173\u7684\u5e38\u89c1\u95ee\u9898\uff0c\u5e76\u7ed9\u51fa\u89e3\u51b3\u65b9\u6848\u3002\u6587\u4e2d\u4ecb\u7ecd\u7684\u5f88\u591a\u6307\u6807\uff0c\u9700\u8981\u60a8\u901a\u8fc7 set enable_profile=true \u8bbe\u7f6e\u6765\u91c7\u96c6 SQL \u67e5\u8be2\u7684 Profile \u5e76\u8fdb\u884c\u5206\u6790\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.1/data_source/datalake_faq.md",sourceDirName:"data_source",slug:"/data_source/datalake_faq",permalink:"/doc/zh/docs/data_source/datalake_faq",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/data_source/datalake_faq.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"Data Cache",permalink:"/doc/zh/docs/data_source/data_cache"},next:{title:"Query Acceleration",permalink:"/doc/zh/docs/category/query-acceleration"}},i={},l=[{value:"HDFS \u6162\u8282\u70b9\u95ee\u9898",id:"hdfs-\u6162\u8282\u70b9\u95ee\u9898",level:2},{value:"\u95ee\u9898\u63cf\u8ff0",id:"\u95ee\u9898\u63cf\u8ff0",level:3},{value:"\u89e3\u51b3\u65b9\u6848",id:"\u89e3\u51b3\u65b9\u6848",level:3},{value:"\u3010\u63a8\u8350\u3011Data Cache",id:"\u63a8\u8350data-cache",level:4},{value:"Hedged Read",id:"hedged-read",level:4}];function h(e){const d=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",h3:"h3",pre:"pre",ul:"ul",li:"li",a:"a",strong:"strong",h4:"h4",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,a.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(d.h1,{id:"\u6570\u636e\u6e56\u76f8\u5173-faq",children:"\u6570\u636e\u6e56\u76f8\u5173 FAQ"}),"\n",(0,t.jsxs)(d.p,{children:["\u672c\u6587\u4ecb\u7ecd\u6570\u636e\u6e56\u76f8\u5173\u7684\u5e38\u89c1\u95ee\u9898\uff0c\u5e76\u7ed9\u51fa\u89e3\u51b3\u65b9\u6848\u3002\u6587\u4e2d\u4ecb\u7ecd\u7684\u5f88\u591a\u6307\u6807\uff0c\u9700\u8981\u60a8\u901a\u8fc7 ",(0,t.jsx)(d.code,{children:"set enable_profile=true"})," \u8bbe\u7f6e\u6765\u91c7\u96c6 SQL \u67e5\u8be2\u7684 Profile \u5e76\u8fdb\u884c\u5206\u6790\u3002"]}),"\n",(0,t.jsx)(d.h2,{id:"hdfs-\u6162\u8282\u70b9\u95ee\u9898",children:"HDFS \u6162\u8282\u70b9\u95ee\u9898"}),"\n",(0,t.jsx)(d.h3,{id:"\u95ee\u9898\u63cf\u8ff0",children:"\u95ee\u9898\u63cf\u8ff0"}),"\n",(0,t.jsxs)(d.p,{children:["\u5728\u8bbf\u95ee HDFS \u4e0a\u5b58\u50a8\u7684\u6570\u636e\u6587\u4ef6\u65f6\uff0c\u5982\u679c\u53d1\u73b0 SQL \u67e5\u8be2\u7684 Profile \u4e2d ",(0,t.jsx)(d.code,{children:"__MAX_OF_FSIOTime"})," \u548c ",(0,t.jsx)(d.code,{children:"__MIN_OF_FSIOTime"})," \u4e24\u4e2a\u6307\u6807\u7684\u503c\u76f8\u5dee\u5f88\u5927\uff0c\u8bf4\u660e\u5f53\u524d\u73af\u5883\u5b58\u5728 HDFS \u6162\u8282\u70b9\u7684\u60c5\u51b5\u3002\u5982\u4e0b\u6240\u793a\u7684 Profile\uff0c\u5c31\u662f\u5178\u578b\u7684 HDFS \u6162\u8282\u70b9\u573a\u666f\uff1a"]}),"\n",(0,t.jsx)(d.pre,{children:(0,t.jsx)(d.code,{className:"language-plaintext",children:" - InputStream: 0\n   - AppIOBytesRead: 22.72 GB\n     - __MAX_OF_AppIOBytesRead: 187.99 MB\n     - __MIN_OF_AppIOBytesRead: 64.00 KB\n   - AppIOCounter: 964.862K (964862)\n     - __MAX_OF_AppIOCounter: 7.795K (7795)\n     - __MIN_OF_AppIOCounter: 1\n   - AppIOTime: 1s372ms\n     - __MAX_OF_AppIOTime: 4s358ms\n     - __MIN_OF_AppIOTime: 1.539ms\n   - FSBytesRead: 15.40 GB\n     - __MAX_OF_FSBytesRead: 127.41 MB\n     - __MIN_OF_FSBytesRead: 64.00 KB\n   - FSIOCounter: 1.637K (1637)\n     - __MAX_OF_FSIOCounter: 12\n     - __MIN_OF_FSIOCounter: 1\n   - FSIOTime: 9s357ms\n     - __MAX_OF_FSIOTime: 60s335ms\n     - __MIN_OF_FSIOTime: 1.536ms\n"})}),"\n",(0,t.jsx)(d.h3,{id:"\u89e3\u51b3\u65b9\u6848",children:"\u89e3\u51b3\u65b9\u6848"}),"\n",(0,t.jsx)(d.p,{children:"\u5f53\u524d\u6709\u4e24\u79cd\u89e3\u51b3\u65b9\u6848\uff1a"}),"\n",(0,t.jsxs)(d.ul,{children:["\n",(0,t.jsxs)(d.li,{children:["\u3010\u63a8\u8350\u3011\u5f00\u542f ",(0,t.jsx)(d.a,{href:"/doc/zh/docs/data_source/data_cache",children:"Data Cache"}),"\u3002\u901a\u8fc7\u81ea\u52a8\u7f13\u5b58\u8fdc\u7aef\u6570\u636e\u5230 BE \u8282\u70b9\uff0c\u6d88\u9664 HDFS \u6162\u8282\u70b9\u5bf9\u67e5\u8be2\u7684\u5f71\u54cd\u3002"]}),"\n",(0,t.jsxs)(d.li,{children:["\u5f00\u542f ",(0,t.jsx)(d.a,{href:"https://hadoop.apache.org/docs/r2.8.3/hadoop-project-dist/hadoop-common/release/2.4.0/RELEASENOTES.2.4.0.html",children:"Hedged Read"})," \u529f\u80fd\u3002\u5f00\u542f\u540e\uff0c\u5982\u679c\u5f53\u524d\u4ece\u67d0\u4e2a\u6570\u636e\u5757\u8bfb\u53d6\u6570\u636e\u6bd4\u8f83\u6162\uff0cStarRocks \u53d1\u8d77\u4e00\u4e2a\u65b0\u7684 Read \u4efb\u52a1\uff0c\u4e0e\u539f\u6765\u7684 Read \u4efb\u52a1\u5e76\u884c\uff0c\u7528\u4e8e\u4ece\u76ee\u6807\u6570\u636e\u5757\u7684\u526f\u672c\u4e0a\u8bfb\u53d6\u6570\u636e\u3002\u4e0d\u7ba1\u54ea\u4e2a Read \u4efb\u52a1\u5148\u8fd4\u56de\u7ed3\u679c\uff0c\u53e6\u5916\u4e00\u4e2a Read \u4efb\u52a1\u5219\u4f1a\u53d6\u6d88\u3002",(0,t.jsx)(d.strong,{children:"Hedged Read \u53ef\u4ee5\u52a0\u901f\u6570\u636e\u8bfb\u53d6\u901f\u5ea6\uff0c\u4f46\u662f\u4e5f\u4f1a\u5bfc\u81f4 Java \u865a\u62df\u673a\uff08\u7b80\u79f0\u201cJVM\u201d\uff09\u5806\u5185\u5b58\u7684\u6d88\u8017\u663e\u8457\u589e\u52a0\u3002\u56e0\u6b64\uff0c\u5728\u7269\u7406\u673a\u5185\u5b58\u6bd4\u8f83\u5c0f\u7684\u60c5\u51b5\u4e0b\uff0c\u4e0d\u5efa\u8bae\u5f00\u542f Hedged Read\u3002"})]}),"\n"]}),"\n",(0,t.jsx)(d.h4,{id:"\u63a8\u8350data-cache",children:"\u3010\u63a8\u8350\u3011Data Cache"}),"\n",(0,t.jsxs)(d.p,{children:["\u53c2\u89c1 ",(0,t.jsx)(d.a,{href:"/doc/zh/docs/data_source/data_cache",children:"Data Cache"}),"\u3002"]}),"\n",(0,t.jsx)(d.h4,{id:"hedged-read",children:"Hedged Read"}),"\n",(0,t.jsxs)(d.p,{children:["\u5728 BE \u914d\u7f6e\u6587\u4ef6 ",(0,t.jsx)(d.code,{children:"be.conf"})," \u4e2d\u901a\u8fc7\u5982\u4e0b\u53c2\u6570\uff08\u4ece 3.0 \u7248\u672c\u8d77\u652f\u6301\uff09\uff0c\u5f00\u542f\u5e76\u914d\u7f6e HDFS \u96c6\u7fa4\u7684 Hedged Read \u529f\u80fd\u3002"]}),"\n",(0,t.jsxs)(d.table,{children:[(0,t.jsx)(d.thead,{children:(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.th,{children:"\u53c2\u6570\u540d\u79f0"}),(0,t.jsx)(d.th,{children:"\u9ed8\u8ba4\u503c"}),(0,t.jsx)(d.th,{children:"\u8bf4\u660e"})]})}),(0,t.jsxs)(d.tbody,{children:[(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"hdfs_client_enable_hedged_read"}),(0,t.jsx)(d.td,{children:"false"}),(0,t.jsx)(d.td,{children:"\u6307\u5b9a\u662f\u5426\u5f00\u542f Hedged Read \u529f\u80fd\u3002"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"hdfs_client_hedged_read_threadpool_size"}),(0,t.jsx)(d.td,{children:"128"}),(0,t.jsxs)(d.td,{children:["\u6307\u5b9a HDFS \u5ba2\u6237\u7aef\u4fa7 Hedged Read \u7ebf\u7a0b\u6c60\u7684\u5927\u5c0f\uff0c\u5373 HDFS \u5ba2\u6237\u7aef\u4fa7\u5141\u8bb8\u6709\u591a\u5c11\u4e2a\u7ebf\u7a0b\u7528\u4e8e\u670d\u52a1 Hedged Read\u3002\u8be5\u53c2\u6570\u5bf9\u5e94 HDFS \u96c6\u7fa4\u914d\u7f6e\u6587\u4ef6 ",(0,t.jsx)(d.code,{children:"hdfs-site.xml"})," \u4e2d\u7684 ",(0,t.jsx)(d.code,{children:"dfs.client.hedged.read.threadpool.size"})," \u53c2\u6570\u3002"]})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"hdfs_client_hedged_read_threshold_millis"}),(0,t.jsx)(d.td,{children:"2500"}),(0,t.jsxs)(d.td,{children:["\u6307\u5b9a\u53d1\u8d77 Hedged Read \u8bf7\u6c42\u524d\u9700\u8981\u7b49\u5f85\u591a\u5c11\u6beb\u79d2\u3002\u4f8b\u5982\uff0c\u5047\u8bbe\u8be5\u53c2\u6570\u8bbe\u7f6e\u4e3a ",(0,t.jsx)(d.code,{children:"30"}),"\uff0c\u90a3\u4e48\u5982\u679c\u4e00\u4e2a Read \u4efb\u52a1\u672a\u80fd\u5728 30 \u6beb\u79d2\u5185\u8fd4\u56de\u7ed3\u679c\uff0c\u5219 HDFS \u5ba2\u6237\u7aef\u4f1a\u7acb\u5373\u53d1\u8d77\u4e00\u4e2a Hedged Read\uff0c\u4ece\u76ee\u6807\u6570\u636e\u5757\u7684\u526f\u672c\u4e0a\u8bfb\u53d6\u6570\u636e\u3002\u8be5\u53c2\u6570\u5bf9\u5e94 HDFS \u96c6\u7fa4\u914d\u7f6e\u6587\u4ef6 ",(0,t.jsx)(d.code,{children:"hdfs-site.xml"})," \u4e2d\u7684 ",(0,t.jsx)(d.code,{children:"dfs.client.hedged.read.threshold.millis"})," \u53c2\u6570\u3002"]})]})]})]}),"\n",(0,t.jsxs)(d.p,{children:["\u5982\u679c\u5728 Profile \u4e2d\u89c2\u6d4b\u5230\u5982\u4e0b\u4efb\u4e00\u6307\u6807\u7684\u503c\u5927\u4e8e ",(0,t.jsx)(d.code,{children:"0"}),"\uff0c\u5219\u4ee3\u8868 Hedged Read \u529f\u80fd\u5f00\u542f\u6210\u529f\u3002"]}),"\n",(0,t.jsxs)(d.table,{children:[(0,t.jsx)(d.thead,{children:(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.th,{children:"\u6307\u6807"}),(0,t.jsx)(d.th,{children:"\u8bf4\u660e"})]})}),(0,t.jsxs)(d.tbody,{children:[(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"TotalHedgedReadOps"}),(0,t.jsx)(d.td,{children:"\u53d1\u8d77 Hedged Read \u7684\u6b21\u6570\u3002"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"TotalHedgedReadOpsInCurThread"}),(0,t.jsxs)(d.td,{children:["\u7531\u4e8e Hedged Read \u7ebf\u7a0b\u6c60\u5927\u5c0f\u9650\u5236\uff08\u901a\u8fc7 ",(0,t.jsx)(d.code,{children:"hdfs_client_hedged_read_threadpool_size"})," \u914d\u7f6e\uff09\u800c\u65e0\u6cd5\u542f\u52a8\u65b0\u7ebf\u7a0b\u3001\u53ea\u80fd\u5728\u5f53\u524d\u7ebf\u7a0b\u5185\u89e6\u53d1 Hedged Read \u7684\u6b21\u6570\u3002"]})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"TotalHedgedReadOpsWin"}),(0,t.jsx)(d.td,{children:"Hedged Read \u6bd4\u539f Read \u66f4\u65e9\u8fd4\u56de\u7ed3\u679c\u7684\u6b21\u6570\u3002"})]})]})]})]})}const o=function(e={}){const{wrapper:d}=Object.assign({},(0,a.ah)(),e.components);return d?(0,t.jsx)(d,Object.assign({},e,{children:(0,t.jsx)(h,e)})):h(e)}},11151:(e,d,s)=>{s.d(d,{Zo:()=>c,ah:()=>n});var t=s(67294);const a=t.createContext({});function n(e){const d=t.useContext(a);return t.useMemo((()=>"function"==typeof e?e(d):{...d,...e}),[d,e])}const r={};function c({components:e,children:d,disableParentContext:s}){let c;return c=s?"function"==typeof e?e({}):e||r:n(e),t.createElement(a.Provider,{value:c},d)}}}]);