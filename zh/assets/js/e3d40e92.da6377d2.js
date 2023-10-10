"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[2080],{34520:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>h,contentTitle:()=>l,default:()=>x,frontMatter:()=>c,metadata:()=>d,toc:()=>o});var s=r(85893),i=r(11151);const c={},l="\u8d44\u6e90\u9694\u79bb",d={id:"administration/resource_group",title:"\u8d44\u6e90\u9694\u79bb",description:"\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528\u8d44\u6e90\u9694\u79bb\u529f\u80fd\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.1/administration/resource_group.md",sourceDirName:"administration",slug:"/administration/resource_group",permalink:"/docusaurusv3/zh/docs/latest/administration/resource_group",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/administration/resource_group.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"Resource management",permalink:"/docusaurusv3/zh/docs/latest/category/resource-management"},next:{title:"\u67e5\u8be2\u961f\u5217",permalink:"/docusaurusv3/zh/docs/latest/administration/query_queues"}},h={},o=[{value:"\u57fa\u672c\u6982\u5ff5",id:"\u57fa\u672c\u6982\u5ff5",level:2},{value:"\u8d44\u6e90\u7ec4",id:"\u8d44\u6e90\u7ec4",level:3},{value:"\u5206\u7c7b\u5668",id:"\u5206\u7c7b\u5668",level:3},{value:"\u9694\u79bb\u8ba1\u7b97\u8d44\u6e90",id:"\u9694\u79bb\u8ba1\u7b97\u8d44\u6e90",level:2},{value:"\u5f00\u542f\u8d44\u6e90\u7ec4",id:"\u5f00\u542f\u8d44\u6e90\u7ec4",level:3},{value:"\u521b\u5efa\u8d44\u6e90\u7ec4\u548c\u5206\u7c7b\u5668",id:"\u521b\u5efa\u8d44\u6e90\u7ec4\u548c\u5206\u7c7b\u5668",level:3},{value:"\u6307\u5b9a\u8d44\u6e90\u7ec4\uff08\u53ef\u9009\uff09",id:"\u6307\u5b9a\u8d44\u6e90\u7ec4\u53ef\u9009",level:3},{value:"\u67e5\u770b\u8d44\u6e90\u7ec4\u548c\u5206\u7c7b\u5668",id:"\u67e5\u770b\u8d44\u6e90\u7ec4\u548c\u5206\u7c7b\u5668",level:3},{value:"\u7ba1\u7406\u8d44\u6e90\u7ec4\u914d\u989d\u548c\u5206\u7c7b\u5668",id:"\u7ba1\u7406\u8d44\u6e90\u7ec4\u914d\u989d\u548c\u5206\u7c7b\u5668",level:3},{value:"\u76d1\u63a7\u8d44\u6e90\u7ec4",id:"\u76d1\u63a7\u8d44\u6e90\u7ec4",level:2},{value:"\u4e0b\u4e00\u6b65",id:"\u4e0b\u4e00\u6b65",level:2}];function t(e){const n=Object.assign({h1:"h1",p:"p",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",h2:"h2",h3:"h3",ul:"ul",li:"li",code:"code",blockquote:"blockquote",a:"a",strong:"strong",pre:"pre"},(0,i.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"\u8d44\u6e90\u9694\u79bb",children:"\u8d44\u6e90\u9694\u79bb"}),"\n",(0,s.jsx)(n.p,{children:"\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528\u8d44\u6e90\u9694\u79bb\u529f\u80fd\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u81ea 2.2 \u7248\u672c\u8d77\uff0cStarRocks \u652f\u6301\u8d44\u6e90\u7ec4\u7ba1\u7406\uff0c\u96c6\u7fa4\u53ef\u4ee5\u901a\u8fc7\u8bbe\u7f6e\u8d44\u6e90\u7ec4\uff08Resource Group\uff09\u7684\u65b9\u5f0f\u9650\u5236\u67e5\u8be2\u5bf9\u8d44\u6e90\u7684\u6d88\u8017\uff0c\u5b9e\u73b0\u591a\u79df\u6237\u4e4b\u95f4\u7684\u8d44\u6e90\u9694\u79bb\u4e0e\u5408\u7406\u5229\u7528\u3002\u5728 2.3 \u7248\u672c\u4e2d\uff0cStarRocks \u652f\u6301\u9650\u5236\u5927\u67e5\u8be2\uff0c\u96c6\u7fa4\u53ef\u4ee5\u8fdb\u4e00\u6b65\u63a7\u5236\u5927\u67e5\u8be2\u5bf9\u8d44\u6e90\u7684\u6d88\u8017\uff0c\u907f\u514d\u5c11\u6570\u7684\u5927\u67e5\u8be2\u8017\u5c3d\u7cfb\u7edf\u8d44\u6e90\uff0c\u8fdb\u800c\u5f71\u54cd\u7cfb\u7edf\u7a33\u5b9a\u6027\u3002StarRocks 2.5 \u7248\u672c\u652f\u6301\u901a\u8fc7\u8d44\u6e90\u7ec4\u5bf9\u5bfc\u5165\u8ba1\u7b97\u8fdb\u884c\u8d44\u6e90\u9694\u79bb\uff0c\u4ece\u800c\u95f4\u63a5\u63a7\u5236\u5bfc\u5165\u4efb\u52a1\u5bf9\u96c6\u7fa4\u8d44\u6e90\u7684\u6d88\u8017\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u901a\u8fc7\u8d44\u6e90\u9694\u79bb\u529f\u80fd\uff0c\u60a8\u53ef\u4ee5\u5c06 BE \u8282\u70b9\u7684\u8ba1\u7b97\u8d44\u6e90\u5212\u5206\u6210\u82e5\u5e72\u4e2a\u8d44\u6e90\u7ec4\uff0c\u5e76\u4e14\u4e3a\u6bcf\u4e2a\u8d44\u6e90\u7ec4\u5173\u8054\u4e00\u4e2a\u6216\u591a\u4e2a\u5206\u7c7b\u5668\uff08Classifier\uff09\u3002\u6839\u636e\u5728\u5206\u7c7b\u5668\u4e2d\u8bbe\u7f6e\u7684\u6761\u4ef6\uff0c\u7cfb\u7edf\u5c06\u5339\u914d\u67e5\u8be2\u4efb\u52a1\u7684\u5bf9\u5e94\u4fe1\u606f\u3002\u5f53\u60a8\u53d1\u8d77\u67e5\u8be2\u4efb\u52a1\u65f6\uff0c\u5206\u7c7b\u5668\u4f1a\u6839\u636e\u67e5\u8be2\u4efb\u52a1\u7684\u76f8\u5173\u4fe1\u606f\u8fdb\u884c\u5339\u914d\u3002\u5176\u4e2d\u5339\u914d\u5ea6\u6700\u9ad8\u7684\u5206\u7c7b\u5668\u624d\u4f1a\u751f\u6548\uff0c\u7cfb\u7edf\u5219\u4f1a\u6839\u636e\u751f\u6548\u7684\u5206\u7c7b\u5668\u6240\u5c5e\u7684\u8d44\u6e90\u7ec4\u4e3a\u67e5\u8be2\u4efb\u52a1\u5206\u914d\u8d44\u6e90\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u5728\u540e\u7eed\u7248\u672c\u4e2d\uff0c\u6211\u4eec\u5c06\u4f1a\u6301\u7eed\u5f3a\u5316\u8d44\u6e90\u9694\u79bb\u529f\u80fd\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u8d44\u6e90\u9694\u79bb\u529f\u80fd\u652f\u6301\u8ba1\u5212"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"\u5185\u90e8\u8868"}),(0,s.jsx)(n.th,{children:"\u5916\u90e8\u8868"}),(0,s.jsx)(n.th,{children:"\u5927\u5c0f\u67e5\u8be2\u9694\u79bb"}),(0,s.jsx)(n.th,{children:"Short query \u8d44\u6e90\u7ec4"}),(0,s.jsx)(n.th,{children:"\u5bfc\u5165\u8ba1\u7b97\u8d44\u6e90\u9694\u79bb"}),(0,s.jsx)(n.th,{children:"Schema Change \u8d44\u6e90\u9694\u79bb"}),(0,s.jsx)(n.th,{children:"INSERT \u8ba1\u7b97\u8d44\u6e90\u9694\u79bb"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"2.2"}),(0,s.jsx)(n.td,{children:"\u221a"}),(0,s.jsx)(n.td,{children:"\xd7"}),(0,s.jsx)(n.td,{children:"\xd7"}),(0,s.jsx)(n.td,{children:"\xd7"}),(0,s.jsx)(n.td,{children:"\xd7"}),(0,s.jsx)(n.td,{children:"\xd7"}),(0,s.jsx)(n.td,{children:"\xd7"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"2.3"}),(0,s.jsx)(n.td,{children:"\u221a"}),(0,s.jsx)(n.td,{children:"\u221a"}),(0,s.jsx)(n.td,{children:"\u221a"}),(0,s.jsx)(n.td,{children:"\u221a"}),(0,s.jsx)(n.td,{children:"\xd7"}),(0,s.jsx)(n.td,{children:"\xd7"}),(0,s.jsx)(n.td,{children:"\xd7"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"2.4"}),(0,s.jsx)(n.td,{children:"\u221a"}),(0,s.jsx)(n.td,{children:"\u221a"}),(0,s.jsx)(n.td,{children:"\u221a"}),(0,s.jsx)(n.td,{children:"\u221a"}),(0,s.jsx)(n.td,{children:"\xd7"}),(0,s.jsx)(n.td,{children:"\xd7"}),(0,s.jsx)(n.td,{children:"\xd7"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"2.5"}),(0,s.jsx)(n.td,{children:"\u221a"}),(0,s.jsx)(n.td,{children:"\u221a"}),(0,s.jsx)(n.td,{children:"\u221a"}),(0,s.jsx)(n.td,{children:"\u221a"}),(0,s.jsx)(n.td,{children:"\u221a"}),(0,s.jsx)(n.td,{children:"\xd7"}),(0,s.jsx)(n.td,{children:"\u221a"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"\u57fa\u672c\u6982\u5ff5",children:"\u57fa\u672c\u6982\u5ff5"}),"\n",(0,s.jsx)(n.p,{children:"\u672c\u5c0f\u8282\u4ecb\u7ecd\u8d44\u6e90\u9694\u79bb\u529f\u80fd\u76f8\u5173\u7684\u57fa\u672c\u6982\u5ff5\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"\u8d44\u6e90\u7ec4",children:"\u8d44\u6e90\u7ec4"}),"\n",(0,s.jsx)(n.p,{children:"\u901a\u8fc7\u5c06 BE \u8282\u70b9\u5212\u5206\u4e3a\u82e5\u5e72\u4e2a\u8d44\u6e90\u7ec4 (resource group)\uff0c\u7cfb\u7edf\u5728\u6267\u884c\u76f8\u5e94\u8d44\u6e90\u7ec4\u7684\u67e5\u8be2\u4efb\u52a1\u65f6\uff0c\u4f1a\u6309\u7167\u4e3a\u8be5\u8d44\u6e90\u7ec4\u5212\u5206\u7684\u8d44\u6e90\u914d\u989d\uff08CPU \u53ca\u5185\u5b58\uff09\u5206\u914d\u67e5\u8be2\u8d44\u6e90\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u60a8\u53ef\u4ee5\u4e3a\u8d44\u6e90\u7ec4\u8bbe\u7f6e\u4ee5\u4e0b\u8d44\u6e90\u9650\u5236\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"cpu_core_limit"}),"\uff1a\u8be5\u8d44\u6e90\u7ec4\u5728\u5f53\u524d BE \u8282\u70b9\u53ef\u4f7f\u7528\u7684 CPU \u6838\u6570\u8f6f\u4e0a\u9650\uff0c\u5b9e\u9645\u4f7f\u7528\u7684 CPU \u6838\u6570\u4f1a\u6839\u636e\u8282\u70b9\u8d44\u6e90\u7a7a\u95f2\u7a0b\u5ea6\u6309\u6bd4\u4f8b\u5f39\u6027\u4f38\u7f29\u3002\u53d6\u503c\u4e3a\u6b63\u6574\u6570\u3002","\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\u8bf4\u660e\uff1a\u4f8b\u5982\uff0c\u5728 16 \u6838\u7684 BE \u8282\u70b9\u4e2d\u8bbe\u7f6e\u4e09\u4e2a\u8d44\u6e90\u7ec4 rg1\u3001rg2\u3001rg3\uff0c",(0,s.jsx)(n.code,{children:"cpu_core_limit"})," \u5206\u522b\u8bbe\u7f6e\u4e3a ",(0,s.jsx)(n.code,{children:"2"}),"\u3001",(0,s.jsx)(n.code,{children:"6"}),"\u3001",(0,s.jsx)(n.code,{children:"8"}),"\u3002\u5f53\u5728\u8be5 BE \u8282\u70b9\u6ee1\u8f7d\u65f6\uff0c\u8d44\u6e90\u7ec4 rg1\u3001rg2\u3001rg3 \u80fd\u5206\u914d\u5230\u7684 CPU \u6838\u6570\u5206\u522b\u4e3a BE \u8282\u70b9\u603b CPU \u6838\u6570 \xd7\uff082/16\uff09= 2\u3001 BE \u8282\u70b9\u603b CPU \u6838\u6570 \xd7\uff086/16\uff09= 6\u3001BE \u8282\u70b9\u603b CPU \u6838\u6570 \xd7\uff088/16\uff09= 8\u3002\u5982\u679c\u5f53\u524d BE \u8282\u70b9\u8d44\u6e90\u975e\u6ee1\u8f7d\uff0crg1\u3001rg2 \u6709\u8d1f\u8f7d\uff0crg3 \u65e0\u8d1f\u8f7d\uff0c\u5219 rg1\u3001rg2 \u5206\u914d\u5230\u7684 CPU \u6838\u6570\u5206\u522b\u4e3a BE \u8282\u70b9\u603b CPU \u6838\u6570 \xd7\uff082/8\uff09= 4\u3001 BE \u8282\u70b9\u603b CPU \u6838\u6570 \xd7\uff086/8\uff09= 12\u3002"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"mem_limit"}),"\uff1a\u8be5\u8d44\u6e90\u7ec4\u5728\u5f53\u524d BE \u8282\u70b9\u53ef\u4f7f\u7528\u4e8e\u67e5\u8be2\u7684\u5185\u5b58\uff08query_pool\uff09\u5360\u603b\u5185\u5b58\u7684\u767e\u5206\u6bd4\uff08%\uff09\u3002\u53d6\u503c\u8303\u56f4\u4e3a (0,1)\u3002","\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\u8bf4\u660e\uff1aquery_pool \u7684\u67e5\u770b\u65b9\u5f0f\uff0c\u53c2\u89c1 ",(0,s.jsx)(n.a,{href:"/docusaurusv3/zh/docs/latest/administration/Memory_management",children:"\u5185\u5b58\u7ba1\u7406"}),"\u3002"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"concurrency_limit"}),"\uff1a\u8d44\u6e90\u7ec4\u4e2d\u5e76\u53d1\u67e5\u8be2\u6570\u7684\u4e0a\u9650\uff0c\u7528\u4ee5\u9632\u6b62\u5e76\u53d1\u67e5\u8be2\u63d0\u4ea4\u8fc7\u591a\u800c\u5bfc\u81f4\u7684\u8fc7\u8f7d\u3002\u53ea\u6709\u5927\u4e8e 0 \u65f6\u624d\u751f\u6548\uff0c\u9ed8\u8ba4\u503c\u4e3a 0\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u5728\u4ee5\u4e0a\u8d44\u6e90\u9650\u5236\u7684\u57fa\u7840\u4e0a\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u5927\u67e5\u8be2\u9650\u5236\u8fdb\u4e00\u6b65\u5bf9\u8d44\u6e90\u7ec4\u8fdb\u884c\u5982\u4e0b\u7684\u914d\u7f6e\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"big_query_cpu_second_limit"}),"\uff1a\u5927\u67e5\u8be2\u4efb\u52a1\u53ef\u4ee5\u4f7f\u7528 CPU \u7684\u65f6\u95f4\u4e0a\u9650\uff0c\u5176\u4e2d\u7684\u5e76\u884c\u4efb\u52a1\u5c06\u7d2f\u52a0 CPU \u4f7f\u7528\u65f6\u95f4\u3002\u5355\u4f4d\u4e3a\u79d2\u3002\u53ea\u6709\u5927\u4e8e 0 \u65f6\u624d\u751f\u6548\uff0c\u9ed8\u8ba4\u503c\u4e3a 0\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"big_query_scan_rows_limit"}),"\uff1a\u5927\u67e5\u8be2\u4efb\u52a1\u53ef\u4ee5\u626b\u63cf\u7684\u884c\u6570\u4e0a\u9650\u3002\u53ea\u6709\u5927\u4e8e 0 \u65f6\u624d\u751f\u6548\uff0c\u9ed8\u8ba4\u503c\u4e3a 0\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"big_query_mem_limit"}),"\uff1a\u5927\u67e5\u8be2\u4efb\u52a1\u53ef\u4ee5\u4f7f\u7528\u7684\u5185\u5b58\u4e0a\u9650\u3002\u5355\u4f4d\u4e3a Byte\u3002\u53ea\u6709\u5927\u4e8e 0 \u65f6\u624d\u751f\u6548\uff0c\u9ed8\u8ba4\u503c\u4e3a 0\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u8bf4\u660e"})}),"\n",(0,s.jsxs)(n.p,{children:["\u5f53\u8d44\u6e90\u7ec4\u4e2d\u8fd0\u884c\u7684\u67e5\u8be2\u8d85\u8fc7\u4ee5\u4e0a\u5927\u67e5\u8be2\u9650\u5236\u65f6\uff0c\u67e5\u8be2\u5c06\u4f1a\u7ec8\u6b62\uff0c\u5e76\u8fd4\u56de\u9519\u8bef\u3002\u60a8\u4e5f\u53ef\u4ee5\u5728 FE \u8282\u70b9 ",(0,s.jsx)(n.strong,{children:"fe.audit.log"})," \u7684 ",(0,s.jsx)(n.code,{children:"ErrorCode"})," \u5217\u4e2d\u67e5\u770b\u9519\u8bef\u4fe1\u606f\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["\u8d44\u6e90\u7ec4\u7684\u7c7b\u578b ",(0,s.jsx)(n.code,{children:"type"})," \u652f\u6301 ",(0,s.jsx)(n.code,{children:"short_query"})," \u4e0e ",(0,s.jsx)(n.code,{children:"normal"}),"\u3002"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\u9ed8\u8ba4\u4e3a ",(0,s.jsx)(n.code,{children:"normal"})," \u8d44\u6e90\u7ec4\uff0c\u65e0\u9700\u901a\u8fc7 ",(0,s.jsx)(n.code,{children:"type"})," \u53c2\u6570\u6307\u5b9a\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:["\u5f53 ",(0,s.jsx)(n.code,{children:"short_query"})," \u8d44\u6e90\u7ec4\u6709\u67e5\u8be2\u6b63\u5728\u8fd0\u884c\u65f6\uff0c\u5f53\u524d BE \u8282\u70b9\u4f1a\u4e3a\u5176\u9884\u7559 ",(0,s.jsx)(n.code,{children:"short_query.cpu_core_limit"})," \u7684 CPU \u8d44\u6e90\uff0c\u5373\u6240\u6709 ",(0,s.jsx)(n.code,{children:"normal"})," \u8d44\u6e90\u7ec4\u7684\u603b CPU \u6838\u6570\u4f7f\u7528\u4e0a\u9650\u4f1a\u88ab\u786c\u9650\u5236\u4e3a BE \u8282\u70b9\u6838\u6570 - ",(0,s.jsx)(n.code,{children:"short_query.cpu_core_limit"}),"\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:["\u5f53 ",(0,s.jsx)(n.code,{children:"short_query"})," \u8d44\u6e90\u7ec4\u6ca1\u6709\u67e5\u8be2\u6b63\u5728\u8fd0\u884c\u65f6\uff0c\u6240\u6709 ",(0,s.jsx)(n.code,{children:"normal"})," \u8d44\u6e90\u7ec4\u7684 CPU \u6838\u6570\u6ca1\u6709\u786c\u9650\u5236\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u6ce8\u610f"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\u60a8\u6700\u591a\u53ea\u80fd\u521b\u5efa\u4e00\u4e2a ",(0,s.jsx)(n.code,{children:"short_query"})," \u8d44\u6e90\u7ec4\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:["StarRocks \u4e0d\u4f1a\u786c\u9650\u5236 ",(0,s.jsx)(n.code,{children:"short_query"})," \u8d44\u6e90\u7ec4\u7684 CPU \u8d44\u6e90\u3002"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"\u5206\u7c7b\u5668",children:"\u5206\u7c7b\u5668"}),"\n",(0,s.jsx)(n.p,{children:"\u60a8\u53ef\u4ee5\u4e3a\u6bcf\u4e2a\u8d44\u6e90\u7ec4\u5173\u8054\u4e00\u4e2a\u6216\u591a\u4e2a\u5206\u7c7b\u5668\u3002\u7cfb\u7edf\u5c06\u4f1a\u6839\u636e\u6240\u6709\u5206\u7c7b\u5668\u4e2d\u8bbe\u7f6e\u7684\u6761\u4ef6\uff0c\u4e3a\u6bcf\u4e2a\u67e5\u8be2\u4efb\u52a1\u9009\u62e9\u4e00\u4e2a\u5339\u914d\u5ea6\u6700\u9ad8\u7684\u5206\u7c7b\u5668\uff0c\u5e76\u6839\u636e\u751f\u6548\u7684\u5206\u7c7b\u5668\u6240\u5c5e\u7684\u8d44\u6e90\u7ec4\u4e3a\u8be5\u67e5\u8be2\u4efb\u52a1\u5206\u914d\u8d44\u6e90\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u5206\u7c7b\u5668\u53ef\u4ee5\u5305\u542b\u4ee5\u4e0b\u6761\u4ef6\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"user"}),"\uff1a\u7528\u6237\u540d\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"role"}),"\uff1a\u7528\u6237\u6240\u5c5e\u7684 Role\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"query_type"}),": \u67e5\u8be2\u7c7b\u578b\uff0c\u76ee\u524d\u652f\u6301 ",(0,s.jsx)(n.code,{children:"SELECT"})," \u4e0e ",(0,s.jsx)(n.code,{children:"INSERT"})," (2.5\u53ca\u4ee5\u540e)\u3002\u5f53 ",(0,s.jsx)(n.code,{children:"query_type"})," \u4e3a ",(0,s.jsx)(n.code,{children:"insert"})," \u7684\u8d44\u6e90\u7ec4\u6709\u5bfc\u5165\u4efb\u52a1\u6b63\u5728\u8fd0\u884c\u65f6\uff0c\u5f53\u524d BE \u8282\u70b9\u4f1a\u4e3a\u5176\u9884\u7559\u76f8\u5e94\u7684\u8ba1\u7b97\u8d44\u6e90\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"source_ip"}),"\uff1a\u53d1\u8d77\u67e5\u8be2\u7684 IP \u5730\u5740\uff0c\u7c7b\u578b\u4e3a CIDR\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"db"}),"\uff1a\u67e5\u8be2\u6240\u8bbf\u95ee\u7684 Database\uff0c\u53ef\u4ee5\u4e3a ",(0,s.jsx)(n.code,{children:","})," \u5206\u5272\u7684\u5b57\u7b26\u4e32\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u7cfb\u7edf\u5728\u4e3a\u67e5\u8be2\u4efb\u52a1\u5339\u914d\u5206\u7c7b\u5668\u65f6\uff0c\u67e5\u8be2\u4efb\u52a1\u7684\u4fe1\u606f\u4e0e\u5206\u7c7b\u5668\u7684\u6761\u4ef6\u5b8c\u5168\u76f8\u540c\uff0c\u624d\u80fd\u89c6\u4e3a\u5339\u914d\u3002\u5982\u679c\u5b58\u5728\u591a\u4e2a\u5206\u7c7b\u5668\u7684\u6761\u4ef6\u4e0e\u67e5\u8be2\u4efb\u52a1\u5b8c\u5168\u5339\u914d\uff0c\u5219\u9700\u8981\u8ba1\u7b97\u4e0d\u540c\u5206\u7c7b\u5668\u7684\u5339\u914d\u5ea6\u3002\u5176\u4e2d\u53ea\u6709\u5339\u914d\u5ea6\u6700\u9ad8\u7684\u5206\u7c7b\u5668\u624d\u4f1a\u751f\u6548\u3002"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u8bf4\u660e"})}),"\n",(0,s.jsxs)(n.p,{children:["\u60a8\u53ef\u4ee5\u5728 FE \u8282\u70b9 ",(0,s.jsx)(n.strong,{children:"fe.audit.log"})," \u7684 ",(0,s.jsx)(n.code,{children:"ResourceGroup"})," \u5217\u4e2d\u67e5\u770b\u7279\u5b9a\u67e5\u8be2\u4efb\u52a1\u6700\u7ec8\u6240\u5339\u914d\u7684\u8d44\u6e90\u7ec4\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u5982\u679c\u6ca1\u6709\u5339\u914d\u5230\u5206\u7c7b\u5668\uff0c\u90a3\u4e48\u4f1a\u4f7f\u7528\u9ed8\u8ba4\u8d44\u6e90\u7ec4 ",(0,s.jsx)(n.code,{children:"default_wg"}),"\uff0c\u5b83\u7684\u8d44\u6e90\u914d\u7f6e\u5982\u4e0b\uff1a"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"cpu_core_limit"}),"\uff1a1 (\u22642.3.7 \u7248\u672c) \u6216 BE \u7684 CPU \u6838\u6570\uff08>2.3.7\u7248\u672c\uff09\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"mem_limit"}),"\uff1a100%\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"concurrency_limit"}),"\uff1a0\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"big_query_cpu_second_limit"}),"\uff1a0\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"big_query_scan_rows_limit"}),"\uff1a0\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"big_query_mem_limit"}),"\uff1a0\u3002"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u5339\u914d\u5ea6\u7684\u8ba1\u7b97\u65b9\u5f0f\u5982\u4e0b\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\u5982\u679c ",(0,s.jsx)(n.code,{children:"user"})," \u4e00\u81f4\uff0c\u5219\u8be5\u5206\u7c7b\u5668\u5339\u914d\u5ea6\u589e\u52a0 1\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:["\u5982\u679c ",(0,s.jsx)(n.code,{children:"role"})," \u4e00\u81f4\uff0c\u5219\u8be5\u5206\u7c7b\u5668\u5339\u914d\u5ea6\u589e\u52a0 1\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:["\u5982\u679c ",(0,s.jsx)(n.code,{children:"query_type"})," \u4e00\u81f4\uff0c\u5219\u8be5\u5206\u7c7b\u5668\u5339\u914d\u5ea6\u589e\u52a0 1 + 1/\u5206\u7c7b\u5668\u7684 ",(0,s.jsx)(n.code,{children:"query_type"})," \u6570\u91cf\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:["\u5982\u679c ",(0,s.jsx)(n.code,{children:"source_ip"})," \u4e00\u81f4\uff0c\u5219\u8be5\u5206\u7c7b\u5668\u5339\u914d\u5ea6\u589e\u52a0 1 + (32 - cidr_prefix)/64\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:["\u5982\u679c\u67e5\u8be2\u7684 ",(0,s.jsx)(n.code,{children:"db"})," \u5339\u914d\uff0c\u5219\u5339\u914d\u5ea6\u52a0 10\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u4f8b\u5982\uff0c\u591a\u4e2a\u4e0e\u67e5\u8be2\u4efb\u52a1\u5339\u914d\u7684\u5206\u7c7b\u5668\u4e2d\uff0c\u5206\u7c7b\u5668\u7684\u6761\u4ef6\u6570\u91cf\u8d8a\u591a\uff0c\u5219\u5176\u5339\u914d\u5ea6\u8d8a\u9ad8\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plain%20Text",children:"-- \u56e0\u4e3a\u5206\u7c7b\u5668 B \u7684\u6761\u4ef6\u6570\u91cf\u6bd4 A \u591a\uff0c\u6240\u4ee5 B \u7684\u5339\u914d\u5ea6\u6bd4 A \u9ad8\u3002\nclassifier A (user='Alice')\nclassifier B (user='Alice', source_ip = '192.168.1.0/24')\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u5982\u679c\u5206\u7c7b\u5668\u7684\u6761\u4ef6\u6570\u91cf\u76f8\u7b49\uff0c\u5219\u5206\u7c7b\u5668\u7684\u6761\u4ef6\u63cf\u8ff0\u8d8a\u7cbe\u786e\uff0c\u5176\u5339\u914d\u5ea6\u8d8a\u9ad8\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plain%20Text",children:"-- \u56e0\u4e3a\u5206\u7c7b\u5668 B \u9650\u5b9a\u7684 `source_ip` \u5730\u5740\u8303\u56f4\u66f4\u5c0f\uff0c\u6240\u4ee5 B \u7684\u5339\u914d\u5ea6\u6bd4 A \u9ad8\u3002\nclassifier A (user='Alice', source_ip = '192.168.1.0/16')\nclassifier B (user='Alice', source_ip = '192.168.1.0/24')\n\n-- \u56e0\u4e3a\u5206\u7c7b\u5668 C \u9650\u5b9a\u7684\u67e5\u8be2\u7c7b\u578b\u6570\u91cf\u66f4\u5c11\uff0c\u6240\u4ee5 C \u7684\u5339\u914d\u5ea6\u6bd4 D \u9ad8\u3002\nclassifier C (user='Alice', query_type in ('select'))\nclassifier D (user='Alice', query_type in ('insert','select')\uff09\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u9694\u79bb\u8ba1\u7b97\u8d44\u6e90",children:"\u9694\u79bb\u8ba1\u7b97\u8d44\u6e90"}),"\n",(0,s.jsx)(n.p,{children:"\u60a8\u53ef\u4ee5\u901a\u8fc7\u521b\u5efa\u8d44\u6e90\u7ec4\u5e76\u8bbe\u7f6e\u76f8\u5e94\u5206\u7c7b\u5668\u4e3a\u4e0d\u540c\u67e5\u8be2\u4efb\u52a1\u9694\u79bb\u8ba1\u7b97\u8d44\u6e90\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"\u5f00\u542f\u8d44\u6e90\u7ec4",children:"\u5f00\u542f\u8d44\u6e90\u7ec4"}),"\n",(0,s.jsx)(n.p,{children:"\u8981\u4f7f\u7528\u8d44\u6e90\u7ec4\uff0c\u9700\u901a\u8fc7\u8bbe\u7f6e\u76f8\u5e94\u4f1a\u8bdd\u53d8\u91cf\u542f\u7528 Pipeline \u5f15\u64ce\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"-- \u5728\u5f53\u524d Session \u542f\u7528 Pipeline \u5f15\u64ce\u3002\nSET enable_pipeline_engine = true;\n-- \u5168\u5c40\u542f\u7528 Pipeline \u5f15\u64ce\u3002\nSET GLOBAL enable_pipeline_engine = true;\n"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u8bf4\u660e"})}),"\n",(0,s.jsxs)(n.p,{children:["\u81ea v3.1.0 \u8d77\uff0c\u9ed8\u8ba4\u542f\u7528\u8d44\u6e90\u7ec4\u529f\u80fd\u3002\u4f1a\u8bdd\u53d8\u91cf ",(0,s.jsx)(n.code,{children:"enable_resource_group"})," \u5f03\u7528\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"\u521b\u5efa\u8d44\u6e90\u7ec4\u548c\u5206\u7c7b\u5668",children:"\u521b\u5efa\u8d44\u6e90\u7ec4\u548c\u5206\u7c7b\u5668"}),"\n",(0,s.jsx)(n.p,{children:"\u521b\u5efa\u8d44\u6e90\u7ec4\uff0c\u5173\u8054\u5206\u7c7b\u5668\uff0c\u5e76\u5206\u914d\u8d44\u6e90\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:'CREATE RESOURCE GROUP group_name \nTO (\n    user=\'string\', \n    role=\'string\', \n    query_type in (\'select\'), \n    source_ip=\'cidr\'\n) -- \u521b\u5efa\u5206\u7c7b\u5668\uff0c\u591a\u4e2a\u5206\u7c7b\u5668\u95f4\u7528\u82f1\u6587\u9017\u53f7\uff08,\uff09\u5206\u9694\u3002\nWITH (\n    "cpu_core_limit" = "INT",\n    "mem_limit" = "m%",\n    "concurrency_limit" = "INT",\n    "type" = "str" -- \u8d44\u6e90\u7ec4\u7684\u7c7b\u578b\uff0c\u53d6\u503c\u4e3a normal \u6216 short_query\u3002\n);\n'})}),"\n",(0,s.jsx)(n.p,{children:"\u793a\u4f8b\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"CREATE RESOURCE GROUP rg1\nTO \n    (user='rg1_user1', role='rg1_role1', query_type in ('select'), source_ip='192.168.x.x/24'),\n    (user='rg1_user2', query_type in ('select'), source_ip='192.168.x.x/24'),\n    (user='rg1_user3', source_ip='192.168.x.x/24'),\n    (user='rg1_user4'),\n    (db='db1')\nWITH (\n    'cpu_core_limit' = '10',\n    'mem_limit' = '20%',\n    'big_query_cpu_second_limit' = '100',\n    'big_query_scan_rows_limit' = '100000',\n    'big_query_mem_limit' = '1073741824'\n);\n"})}),"\n",(0,s.jsx)(n.h3,{id:"\u6307\u5b9a\u8d44\u6e90\u7ec4\u53ef\u9009",children:"\u6307\u5b9a\u8d44\u6e90\u7ec4\uff08\u53ef\u9009\uff09"}),"\n",(0,s.jsx)(n.p,{children:"\u9664\u901a\u8fc7\u5206\u7c7b\u5668\u81ea\u52a8\u6307\u5b9a\u8d44\u6e90\u7ec4\u5916\uff0c\u60a8\u4e5f\u53ef\u4ee5\u901a\u8fc7\u4f1a\u8bdd\u53d8\u91cf\u76f4\u63a5\u6307\u5b9a\u8d44\u6e90\u7ec4\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"SET resource_group = 'group_name';\n"})}),"\n",(0,s.jsx)(n.h3,{id:"\u67e5\u770b\u8d44\u6e90\u7ec4\u548c\u5206\u7c7b\u5668",children:"\u67e5\u770b\u8d44\u6e90\u7ec4\u548c\u5206\u7c7b\u5668"}),"\n",(0,s.jsx)(n.p,{children:"\u67e5\u8be2\u6240\u6709\u7684\u8d44\u6e90\u7ec4\u548c\u5206\u7c7b\u5668\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"SHOW RESOURCE GROUPS ALL;\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u67e5\u8be2\u548c\u5f53\u524d\u7528\u6237\u5339\u914d\u7684\u8d44\u6e90\u7ec4\u548c\u5206\u7c7b\u5668\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"SHOW RESOURCE GROUPS;\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u67e5\u8be2\u6307\u5b9a\u7684\u8d44\u6e90\u7ec4\u548c\u5206\u7c7b\u5668\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"SHOW RESOURCE GROUP group_name;\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u793a\u4f8b\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plain%20Text",children:"mysql> SHOW RESOURCE GROUPS ALL;\n\n+------+--------+--------------+----------+------------------+--------+------------------------------------------------------------------------------------------------------------------------+\n| Name | Id     | CPUCoreLimit | MemLimit | ConcurrencyLimit | Type   | Classifiers                                                                                                            |\n+------+--------+--------------+----------+------------------+--------+------------------------------------------------------------------------------------------------------------------------+\n| rg1  | 300039 | 10           | 20.0%    | 11               | NORMAL | (id=300040, weight=4.409375, user=rg1_user1, role=rg1_role1, query_type in (SELECT), source_ip=192.168.2.1/24)         |\n| rg1  | 300039 | 10           | 20.0%    | 11               | NORMAL | (id=300041, weight=3.459375, user=rg1_user2, query_type in (SELECT), source_ip=192.168.3.1/24)                         |\n| rg1  | 300039 | 10           | 20.0%    | 11               | NORMAL | (id=300042, weight=2.359375, user=rg1_user3, source_ip=192.168.4.1/24)                                                 |\n| rg1  | 300039 | 10           | 20.0%    | 11               | NORMAL | (id=300043, weight=1.0, user=rg1_user4)                                                                                |\n+------+--------+--------------+----------+------------------+--------+------------------------------------------------------------------------------------------------------------------------+\n"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u8bf4\u660e"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"weight"})," \u4ee3\u8868\u5206\u7c7b\u5668\u7684\u5339\u914d\u5ea6\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"\u7ba1\u7406\u8d44\u6e90\u7ec4\u914d\u989d\u548c\u5206\u7c7b\u5668",children:"\u7ba1\u7406\u8d44\u6e90\u7ec4\u914d\u989d\u548c\u5206\u7c7b\u5668"}),"\n",(0,s.jsx)(n.p,{children:"\u60a8\u53ef\u4ee5\u4fee\u6539\u8d44\u6e90\u7ec4\u7684\u914d\u989d\uff0c\u4ee5\u53ca\u589e\u52a0\u6216\u5220\u9664\u8d44\u6e90\u7ec4\u7684\u5206\u7c7b\u5668\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u4e3a\u5df2\u6709\u7684\u8d44\u6e90\u7ec4\u4fee\u6539\u8d44\u6e90\u914d\u989d\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"ALTER RESOURCE GROUP group_name WITH (\n    'cpu_core_limit' = 'INT',\n    'mem_limit' = 'm%'\n);\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u5220\u9664\u6307\u5b9a\u8d44\u6e90\u7ec4\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"DROP RESOURCE GROUP <group_name>;\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u6dfb\u52a0\u65b0\u7684\u5206\u7c7b\u5668\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"ALTER RESOURCE GROUP <group_name> ADD (user='string', role='string', query_type in ('select'), source_ip='cidr');\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u5220\u9664\u6307\u5b9a\u7684\u5206\u7c7b\u5668\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"ALTER RESOURCE GROUP <group_name> DROP (CLASSIFIER_ID_1, CLASSIFIER_ID_2, ...);\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u5220\u9664\u6240\u6709\u7684\u5206\u7c7b\u5668\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"ALTER RESOURCE GROUP <group_name> DROP ALL;\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u76d1\u63a7\u8d44\u6e90\u7ec4",children:"\u76d1\u63a7\u8d44\u6e90\u7ec4"}),"\n",(0,s.jsxs)(n.p,{children:["\u60a8\u53ef\u4ee5\u4e3a\u8d44\u6e90\u7ec4\u8bbe\u7f6e",(0,s.jsx)(n.a,{href:"/docusaurusv3/zh/docs/latest/administration/Monitor_and_Alert",children:"\u76d1\u63a7\u4e0e\u62a5\u8b66"}),"\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u53ef\u76d1\u63a7\u7684\u8d44\u6e90\u7ec4\u76f8\u5173 Metrics \u5305\u62ec\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["FE \u8282\u70b9","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"starrocks_fe_query_resource_group\uff1a\u8be5\u8d44\u6e90\u7ec4\u4e2d\u67e5\u8be2\u4efb\u52a1\u7684\u6570\u91cf\u3002"}),"\n",(0,s.jsx)(n.li,{children:"starrocks_fe_query_resource_group_latency\uff1a\u8be5\u8d44\u6e90\u7ec4\u7684\u67e5\u8be2\u5ef6\u8fdf\u767e\u5206\u4f4d\u6570\u3002"}),"\n",(0,s.jsx)(n.li,{children:"starrocks_fe_query_resource_group_err\uff1a\u8be5\u8d44\u6e90\u7ec4\u4e2d\u62a5\u9519\u7684\u67e5\u8be2\u4efb\u52a1\u7684\u6570\u91cf\u3002"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["BE \u8282\u70b9","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"starrocks_be_resource_group_cpu_limit_ratio\uff1a\u8be5\u8d44\u6e90\u7ec4 CPU \u914d\u989d\u6bd4\u7387\u7684\u77ac\u65f6\u503c\u3002"}),"\n",(0,s.jsx)(n.li,{children:"starrocks_be_resource_group_cpu_use_ratio\uff1a\u8be5\u8d44\u6e90\u7ec4 CPU \u4f7f\u7528\u7387\u77ac\u65f6\u503c\u3002"}),"\n",(0,s.jsx)(n.li,{children:"starrocks_be_resource_group_mem_limit_bytes\uff1a\u8be5\u8d44\u6e90\u7ec4\u5185\u5b58\u914d\u989d\u6bd4\u7387\u7684\u77ac\u65f6\u503c\u3002"}),"\n",(0,s.jsx)(n.li,{children:"starrocks_be_resource_group_mem_allocated_bytes\uff1a\u8be5\u8d44\u6e90\u7ec4\u5185\u5b58\u4f7f\u7528\u7387\u77ac\u65f6\u503c\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u4e0b\u4e00\u6b65",children:"\u4e0b\u4e00\u6b65"}),"\n",(0,s.jsx)(n.p,{children:"\u6210\u529f\u8bbe\u7f6e\u8d44\u6e90\u7ec4\u540e\uff0c\u60a8\u53ef\u4ee5\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/docusaurusv3/zh/docs/latest/administration/Memory_management",children:"\u7ba1\u7406\u5185\u5b58"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/docusaurusv3/zh/docs/latest/administration/Query_management",children:"\u7ba1\u7406\u67e5\u8be2"})}),"\n"]})]})}const x=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(t,e)})):t(e)}},11151:(e,n,r)=>{r.d(n,{Zo:()=>d,ah:()=>c});var s=r(67294);const i=s.createContext({});function c(e){const n=s.useContext(i);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const l={};function d({components:e,children:n,disableParentContext:r}){let d;return d=r?"function"==typeof e?e({}):e||l:c(e),s.createElement(i.Provider,{value:d},n)}}}]);