"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[16077],{86678:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>t,contentTitle:()=>l,default:()=>h,frontMatter:()=>c,metadata:()=>d,toc:()=>o});var r=n(85893),i=n(11151);const c={},l="\u6743\u9650\u7cfb\u7edf\u603b\u89c8",d={id:"administration/privilege_overview",title:"\u6743\u9650\u7cfb\u7edf\u603b\u89c8",description:"\u672c\u6587\u4ecb\u7ecd StarRocks \u4e2d\u6743\u9650\u7cfb\u7edf\u7684\u57fa\u672c\u6982\u5ff5\u3002\u6743\u9650\u51b3\u5b9a\u4e86\u54ea\u4e9b\u7528\u6237\u53ef\u4ee5\u5bf9\u54ea\u4e9b\u7279\u5b9a\u5bf9\u8c61\u6267\u884c\u54ea\u4e9b\u7279\u5b9a\u7684\u64cd\u4f5c\uff0c\u4ece\u800c\u65b9\u4fbf\u60a8\u66f4\u52a0\u5b89\u5168\u5730\u7ba1\u63a7\u6570\u636e\u548c\u8d44\u6e90\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.1/administration/privilege_overview.md",sourceDirName:"administration",slug:"/administration/privilege_overview",permalink:"/docusaurusv3/zh/docs/latest/administration/privilege_overview",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/administration/privilege_overview.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"\u6062\u590d\u6570\u636e",permalink:"/docusaurusv3/zh/docs/latest/administration/Data_recovery"},next:{title:"\u6743\u9650\u9879",permalink:"/docusaurusv3/zh/docs/latest/administration/privilege_item"}},t={},o=[{value:"\u5bf9\u8c61\u4e0e\u6743\u9650",id:"\u5bf9\u8c61\u4e0e\u6743\u9650",level:2},{value:"\u7528\u6237",id:"\u7528\u6237",level:2},{value:"\u7528\u6237\u6807\u8bc6",id:"\u7528\u6237\u6807\u8bc6",level:3},{value:"\u4e3a\u7528\u6237\u6388\u6743",id:"\u4e3a\u7528\u6237\u6388\u6743",level:3},{value:"\u89d2\u8272",id:"\u89d2\u8272",level:2},{value:"\u7cfb\u7edf\u9884\u7f6e\u89d2\u8272",id:"\u7cfb\u7edf\u9884\u7f6e\u89d2\u8272",level:3},{value:"\u7528\u6237\u81ea\u5b9a\u4e49\u89d2\u8272",id:"\u7528\u6237\u81ea\u5b9a\u4e49\u89d2\u8272",level:3},{value:"\u89d2\u8272\u7684\u7ee7\u627f\u5173\u7cfb",id:"\u89d2\u8272\u7684\u7ee7\u627f\u5173\u7cfb",level:4},{value:"\u6fc0\u6d3b\u89d2\u8272",id:"\u6fc0\u6d3b\u89d2\u8272",level:3},{value:"\u9ed8\u8ba4\u6fc0\u6d3b\u89d2\u8272",id:"\u9ed8\u8ba4\u6fc0\u6d3b\u89d2\u8272",level:4},{value:"\u624b\u52a8\u6fc0\u6d3b\u89d2\u8272",id:"\u624b\u52a8\u6fc0\u6d3b\u89d2\u8272",level:4},{value:"\u76f8\u5173\u6587\u6863",id:"\u76f8\u5173\u6587\u6863",level:2}];function a(e){const s=Object.assign({h1:"h1",p:"p",blockquote:"blockquote",strong:"strong",a:"a",ul:"ul",li:"li",code:"code",img:"img",h2:"h2",h3:"h3",h4:"h4"},(0,i.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h1,{id:"\u6743\u9650\u7cfb\u7edf\u603b\u89c8",children:"\u6743\u9650\u7cfb\u7edf\u603b\u89c8"}),"\n",(0,r.jsx)(s.p,{children:"\u672c\u6587\u4ecb\u7ecd StarRocks \u4e2d\u6743\u9650\u7cfb\u7edf\u7684\u57fa\u672c\u6982\u5ff5\u3002\u6743\u9650\u51b3\u5b9a\u4e86\u54ea\u4e9b\u7528\u6237\u53ef\u4ee5\u5bf9\u54ea\u4e9b\u7279\u5b9a\u5bf9\u8c61\u6267\u884c\u54ea\u4e9b\u7279\u5b9a\u7684\u64cd\u4f5c\uff0c\u4ece\u800c\u65b9\u4fbf\u60a8\u66f4\u52a0\u5b89\u5168\u5730\u7ba1\u63a7\u6570\u636e\u548c\u8d44\u6e90\u3002"}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"\u7248\u672c\u63d0\u793a"}),"\uff1a\u672c\u6587\u4ecb\u7ecd\u7684\u6743\u9650\u7ba1\u7406\u7cfb\u7edf\u4ece 3.0 \u7248\u672c\u5f00\u59cb\u63d0\u4f9b\u3002\u5347\u7ea7\u540e\u7684\u6743\u9650\u6846\u67b6\u3001\u8bed\u6cd5\u4e0e\u65e7\u7684\u7cfb\u7edf\u65e0\u6cd5\u517c\u5bb9\uff0c\u8bf7\u4ee5 3.0 \u7248\u672c\u7684\u64cd\u4f5c\u8bf4\u660e\u4e3a\u51c6\u3002\u5347\u7ea7\u540e\uff0c\u9664\u4e2a\u522b\u64cd\u4f5c\u5916\uff0c\u60a8\u5728\u539f\u6709\u7cfb\u7edf\u4e0a\u7684\u5927\u90e8\u5206\u64cd\u4f5c\u6743\u9650\u4ecd\u7136\u4fdd\u7559\u3002\u5177\u4f53\u5dee\u5f02\u8bf7\u89c1\u6743\u9650\u9879\u6587\u6863\u7684",(0,r.jsx)(s.a,{href:"/docusaurusv3/zh/docs/latest/administration/privilege_item#%E5%8D%87%E7%BA%A7%E6%B3%A8%E6%84%8F%E4%BA%8B%E9%A1%B9",children:"\u5347\u7ea7\u6ce8\u610f\u4e8b\u9879"}),"\u3002"]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"StarRocks \u91c7\u7528\u4e86\u4e24\u79cd\u6743\u9650\u6a21\u578b\uff1a"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"\u57fa\u4e8e\u89d2\u8272\u7684\u8bbf\u95ee\u63a7\u5236 (RBAC: role-based access control)\uff1a\u6743\u9650\u901a\u8fc7\u89d2\u8272\u6765\u8fdb\u884c\u7ba1\u7406\uff0c\u5373\u53ef\u4ee5\u5c06\u6743\u9650\u8d4b\u4e88\u7ed9\u89d2\u8272\uff0c\u4ece\u800c\u901a\u8fc7\u89d2\u8272\u4f20\u9012\u7ed9\u7528\u6237\u3002"}),"\n",(0,r.jsx)(s.li,{children:"\u57fa\u4e8e\u7528\u6237\u6807\u8bc6\u7684\u8bbf\u95ee\u63a7\u5236 (IBAC: identity-based access control)\uff1a\u6743\u9650\u53ef\u4ee5\u76f4\u63a5\u8d4b\u4e88\u7ed9\u7528\u6237\u6807\u8bc6\u3002"}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"\u56e0\u6b64\uff0c\u6bcf\u4e2a\u7528\u6237\u6807\u8bc6\u62e5\u6709\u7684\u6700\u5927\u6743\u9650\u8303\u56f4\u4e3a\uff1a\u5b83\u6240\u62e5\u6709\u7684\u89d2\u8272\u6743\u9650\u53ca\u81ea\u8eab\u6743\u9650\u7684\u5e76\u96c6\u3002"}),"\n",(0,r.jsx)(s.p,{children:"\u57fa\u7840\u6982\u5ff5\uff1a"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"\u5bf9\u8c61 (Object) \u662f\u4e00\u4e2a\u53ef\u4ee5\u88ab\u6388\u6743\u8bbf\u95ee\u7684\u5b9e\u4f53\u3002\u9664\u975e\u8fdb\u884c\u6388\u6743\uff0c\u5426\u5219\u62d2\u7edd\u8bbf\u95ee\u3002\u4f8b\u5982 CATALOG\u3001DATABASE\u3001TABLE\u3001VIEW \u7b49\u3002"}),"\n",(0,r.jsxs)(s.li,{children:["\u6743\u9650\u9879 (Privilege) \u662f\u4e00\u4e2a\u5bf9\u8c61\u7684\u8bbf\u95ee\u7ea7\u522b\u3002\u4e0d\u540c\u7684\u6743\u9650\u9879\u4ee3\u8868\u7740\u5bf9\u76ee\u6807\u5bf9\u8c61\u7684\u4e0d\u540c\u64cd\u4f5c\u3002\u4f8b\u5982 SELECT\u3001ALTER\u3001DROP \u7b49\u3002\u6709\u5173 StarRocks \u652f\u6301\u7684\u5bf9\u8c61\u548c\u6743\u9650\u9879\uff0c\u53c2\u89c1 ",(0,r.jsx)(s.a,{href:"/docusaurusv3/zh/docs/latest/administration/privilege_item",children:"\u6743\u9650\u9879"}),"\u3002"]}),"\n",(0,r.jsxs)(s.li,{children:["\u7528\u6237\u6807\u8bc6 (User Identity)\uff1a\u7528\u6237\u7684\u552f\u4e00\u6807\u8bc6\uff0c\u540c\u65f6\u4e5f\u662f\u53ef\u4ee5\u88ab\u6388\u6743\u7684\u5b9e\u4f53\u3002\u7528\u6237\u6807\u8bc6\u4ee5 ",(0,r.jsx)(s.code,{children:"username@'userhost'"})," \u7684\u65b9\u5f0f\u5448\u73b0\uff0c\u7531\u6307\u5b9a\u7684\u7528\u6237\u540d\u548c\u7528\u6237\u767b\u5f55\u7684 IP \u7ec4\u6210\u3002\u7528\u6237\u6807\u8bc6\u7b80\u5316\u4e86\u5c5e\u6027\u914d\u7f6e\uff0c\u76f8\u540c\u7528\u6237\u540d\u7684\u7528\u6237\u6807\u8bc6\u5171\u4eab\u4e00\u4e2a\u5c5e\u6027\u3002\u53ea\u9700\u5c06\u5c5e\u6027\u914d\u7f6e\u7ed9\u7528\u6237\u540d\uff0c\u8be5\u5c5e\u6027\u4f1a\u5bf9\u6240\u6709\u5305\u542b\u8be5\u7528\u6237\u540d\u7684\u7528\u6237\u6807\u8bc6\u751f\u6548\u3002"]}),"\n",(0,r.jsx)(s.li,{children:"\u89d2\u8272 (Role)\uff1a\u6743\u9650\u7684\u62bd\u8c61\u5408\u96c6\uff0c\u540c\u65f6\u4e5f\u662f\u53ef\u4ee5\u88ab\u6388\u6743\u7684\u5b9e\u4f53\u3002\u53ef\u4ee5\u5c06\u89d2\u8272\u6388\u4e88\u7ed9\u7528\u6237\uff0c\u4e5f\u53ef\u4ee5\u5c06\u89d2\u8272\u6388\u4e88\u7ed9\u5176\u4ed6\u89d2\u8272\u4ea7\u751f\u5d4c\u5957\uff0c\u4ece\u800c\u5c06\u5176\u6743\u9650\u5411\u4e0b\u4f20\u9012\u3002StarRocks \u63d0\u4f9b\u7cfb\u7edf\u9884\u7f6e\u89d2\u8272\uff0c\u60a8\u4e5f\u53ef\u4ee5\u6839\u636e\u4e1a\u52a1\u9700\u6c42\u521b\u5efa\u81ea\u5b9a\u4e49\u89d2\u8272\u3002"}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"\u4e0b\u56fe\u5c55\u793a\u4e86\u5728 RBAC \u548c IBAC \u4e24\u79cd\u6743\u9650\u6a21\u578b\u4e0b\u7684\u6743\u9650\u7ba1\u7406\u793a\u4f8b\u3002"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{alt:"privilege management",src:n(32528).Z+"",width:"1666",height:"664"})}),"\n",(0,r.jsx)(s.h2,{id:"\u5bf9\u8c61\u4e0e\u6743\u9650",children:"\u5bf9\u8c61\u4e0e\u6743\u9650"}),"\n",(0,r.jsx)(s.p,{children:"\u5bf9\u8c61\u5728\u903b\u8f91\u4e0a\u5b58\u5728\u5c42\u7ea7\uff0c\u8fd9\u4e0e\u4ed6\u4eec\u6240\u4ee3\u8868\u7684\u6982\u5ff5\u6709\u5173\u3002\u4f8b\u5982 Database \u5305\u542b\u5728 Catalog \u4e2d\uff0c\u800c Table\u3001View\u3001Materialized View\u3001Function \u53c8\u5305\u542b\u5728 Database \u4e2d\u3002\u4e0b\u56fe\u5c55\u793a\u4e86 StarRocks \u7cfb\u7edf\u4e2d\u7684\u5bf9\u8c61\u5c42\u7ea7\u5173\u7cfb\u3002"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{alt:"privilege objects",src:n(70176).Z+"",width:"1464",height:"944"})}),"\n",(0,r.jsxs)(s.p,{children:["\u5bf9\u4e8e\u6bcf\u4e2a\u5bf9\u8c61\uff0c\u90fd\u6709\u4e00\u7ec4\u53ef\u4ee5\u88ab\u6388\u6743\u7684\u6743\u9650\u9879\uff0c\u66f4\u591a\u7ec6\u8282\u8bf7\u67e5\u9605",(0,r.jsx)(s.a,{href:"/docusaurusv3/zh/docs/latest/administration/privilege_item",children:"\u6743\u9650\u9879\u6587\u6863"}),"\u3002\u60a8\u53ef\u4ee5\u901a\u8fc7 ",(0,r.jsx)(s.a,{href:"/docusaurusv3/zh/docs/latest/sql-reference/sql-statements/account-management/GRANT",children:"GRANT"})," \u548c ",(0,r.jsx)(s.a,{href:"/docusaurusv3/zh/docs/latest/sql-reference/sql-statements/account-management/REVOKE",children:"REVOKE"})," \u547d\u4ee4\u6765\u5bf9\u89d2\u8272\u6216\u7528\u6237\u8fdb\u884c\u6743\u9650\u7684\u53d1\u653e\u548c\u6536\u56de\u3002"]}),"\n",(0,r.jsx)(s.h2,{id:"\u7528\u6237",children:"\u7528\u6237"}),"\n",(0,r.jsx)(s.h3,{id:"\u7528\u6237\u6807\u8bc6",children:"\u7528\u6237\u6807\u8bc6"}),"\n",(0,r.jsxs)(s.p,{children:["\u5728 StarRocks \u4e2d\uff0c\u6bcf\u4e2a\u7528\u6237\u90fd\u62e5\u6709\u552f\u4e00\u7684\u7528\u6237\u6807\u8bc6\u3002\u7531\u7528\u6237\u767b\u5f55\u7684 IP\uff08userhost\uff09 \u548c\u7528\u6237\u540d\uff08username\uff09\u7ec4\u6210\uff0c\u5199\u505a\uff1a",(0,r.jsx)(s.code,{children:"username@'userhost'"}),"\u3002StarRocks \u4f1a\u5c06\u62e5\u6709\u76f8\u540c\u7528\u6237\u540d\uff0c\u4f46\u6765\u81ea\u4e0d\u540c IP \u7684\u7528\u6237\u8bc6\u522b\u4e3a\u4e0d\u540c\u7684\u7528\u6237\u6807\u8bc6\uff0c\u5373 ",(0,r.jsx)(s.code,{children:"user1@'starrocks.com'"})," \u548c ",(0,r.jsx)(s.code,{children:"user1@'mirrorship.com'"})," \u662f\u4e24\u4e2a\u7528\u6237\u6807\u8bc6\u3002"]}),"\n",(0,r.jsxs)(s.p,{children:["\u7528\u6237\u6807\u8bc6\u7684\u53e6\u4e00\u79cd\u8868\u73b0\u65b9\u5f0f\u4e3a ",(0,r.jsx)(s.code,{children:"username@['domain']"}),"\uff0c\u5176\u4e2d ",(0,r.jsx)(s.code,{children:"domain"})," \u4e3a\u57df\u540d\uff0c\u53ef\u4ee5\u901a\u8fc7 DNS \u89e3\u6790\u4e3a\u4e00\u7ec4 IP\u3002\u6700\u7ec8\u8868\u73b0\u4e3a\u4e00\u7ec4 ",(0,r.jsx)(s.code,{children:"username@'userhost'"}),"\u3002\u5176\u4e2d\uff0c",(0,r.jsx)(s.code,{children:"userhost"})," \u7684\u90e8\u5206\u53ef\u4ee5\u4f7f\u7528 ",(0,r.jsx)(s.code,{children:"%"})," \u6765\u8fdb\u884c\u6a21\u7cca\u5339\u914d\u3002\u5982\u679c\u4e0d\u6307\u5b9a ",(0,r.jsx)(s.code,{children:"userhost"}),"\uff0c\u9ed8\u8ba4\u4e3a ",(0,r.jsx)(s.code,{children:"'%'"}),"\uff0c\u5373\u8868\u793a\u4ece\u4efb\u610f host \u8fde\u63a5\u5230 StarRocks \u7684\u540c\u540d\u7528\u6237\u3002"]}),"\n",(0,r.jsx)(s.h3,{id:"\u4e3a\u7528\u6237\u6388\u6743",children:"\u4e3a\u7528\u6237\u6388\u6743"}),"\n",(0,r.jsx)(s.p,{children:"\u7528\u6237\u662f\u53ef\u4ee5\u88ab\u6388\u6743\u7684\u5b9e\u4f53\uff0c\u6743\u9650\u548c\u89d2\u8272\u5747\u53ef\u4ee5\u88ab\u8d4b\u4e88\u7ed9\u7528\u6237\u3002\u7528\u6237\u62e5\u6709\u7684\u6700\u5927\u6743\u9650\u5408\u96c6\u4e3a\u81ea\u8eab\u6743\u9650\u4e0e\u6240\u62e5\u6709\u89d2\u8272\u6743\u9650\u7684\u5e76\u96c6\u3002StarRocks \u4fdd\u8bc1\u6bcf\u4e2a\u7528\u6237\u53ea\u80fd\u6267\u884c\u88ab\u6388\u6743\u7684\u64cd\u4f5c\u3002"}),"\n",(0,r.jsxs)(s.p,{children:["StarRocks \u5efa\u8bae\u60a8\u5728\u5927\u90e8\u5206\u60c5\u51b5\u4e0b\u4f7f\u7528",(0,r.jsx)(s.strong,{children:"\u89d2\u8272"}),"\u6765\u5206\u53d1\u6743\u9650\u3002\u5373\uff0c\u6839\u636e\u4e1a\u52a1\u573a\u666f\u521b\u5efa\u89d2\u8272\uff0c\u5c06\u6743\u9650\u8d4b\u4e88\u7ed9\u89d2\u8272\u540e\uff0c\u518d\u5c06\u89d2\u8272\u8d4b\u4e88\u7ed9\u7528\u6237\u3002\u5bf9\u4e8e\u7279\u5b9a\u7528\u6237\u62e5\u6709\u7684\u4e34\u65f6\u3001\u6216\u7279\u6b8a\u6743\u9650\uff0c\u901a\u8fc7\u5c06\u6743\u9650\u76f4\u63a5\u8d4b\u4e88\u7ed9\u7528\u6237\u7684\u65b9\u5f0f\u8fdb\u884c\u7ba1\u7406\u3002\u8fd9\u6837\u53ef\u4ee5\u6700\u5927\u7a0b\u5ea6\u7b80\u5316\u6743\u9650\u7ba1\u7406\u6d41\u7a0b\uff0c\u5e76\u63d0\u4f9b\u4e00\u5b9a\u7684\u7075\u6d3b\u6027\u3002"]}),"\n",(0,r.jsx)(s.h2,{id:"\u89d2\u8272",children:"\u89d2\u8272"}),"\n",(0,r.jsxs)(s.p,{children:["\u89d2\u8272\u53ef\u4ee5\u770b\u505a\u662f\u4e00\u7ec4\u6743\u9650\u7684\u96c6\u5408\u3002\u4e3a\u8fbe\u5230\u7ba1\u7406\u7684\u7b80\u6d01\u6027\uff0cStarRocks \u5efa\u8bae\u60a8\u5c06\u7edd\u5927\u90e8\u5206\u65e5\u5e38\u6743\u9650\u5c3d\u91cf",(0,r.jsx)(s.strong,{children:"\u901a\u8fc7\u89d2\u8272\u6765\u8fdb\u884c\u7ba1\u7406"}),"\uff0c\u4ee5\u907f\u514d\u91cd\u590d\u6027\u64cd\u4f5c\uff0c\u4fdd\u8bc1\u4e00\u81f4\u6027\u3002\u5bf9\u4e8e\u7279\u6b8a\u3001\u4e34\u65f6\u7684\u6743\u9650\uff0c\u53ef\u4ee5\u76f4\u63a5\u8d4b\u4e88\u7ed9\u7528\u6237\u3002"]}),"\n",(0,r.jsx)(s.p,{children:"\u4e3a\u4e86\u65b9\u4fbf\u7ba1\u7406\uff0cStarRocks \u9884\u7f6e\u4e86\u51e0\u7c7b\u5177\u6709\u7279\u5b9a\u6743\u9650\u7684\u89d2\u8272\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u6b64\u7c7b\u89d2\u8272\u6765\u6ee1\u8db3\u65e5\u5e38\u7ba1\u7406\u9700\u6c42\u3002\u60a8\u4e5f\u53ef\u4ee5\u6839\u636e\u5b9e\u9645\u9700\u6c42\uff0c\u7075\u6d3b\u914d\u7f6e\u81ea\u5b9a\u4e49\u89d2\u8272\u3002"}),"\n",(0,r.jsx)(s.p,{children:"\u89d2\u8272\u6fc0\u6d3b\u540e\uff0c\u7528\u6237\u53ef\u4ee5\u6267\u884c\u5bf9\u5e94\u89d2\u8272\u62e5\u6709\u6743\u9650\u7684\u64cd\u4f5c\u3002\u60a8\u53ef\u4ee5\u4e3a\u6bcf\u4e2a\u7528\u6237\u8bbe\u7f6e\u767b\u5f55\u65f6\u81ea\u52a8\u6fc0\u6d3b\u7684\u9ed8\u8ba4\u89d2\u8272 (default role)\uff0c\u7528\u6237\u4e5f\u53ef\u4ee5\u5728\u5f53\u524d\u4f1a\u8bdd\u4e2d\u624b\u52a8\u6fc0\u6d3b\u62e5\u6709\u7684\u89d2\u8272 (active role)\u3002"}),"\n",(0,r.jsx)(s.h3,{id:"\u7cfb\u7edf\u9884\u7f6e\u89d2\u8272",children:"\u7cfb\u7edf\u9884\u7f6e\u89d2\u8272"}),"\n",(0,r.jsx)(s.p,{children:"StarRocks \u63d0\u4f9b\u4e86\u51e0\u7c7b\u9884\u7f6e\u89d2\u8272\uff08system-defined roles\uff09\uff1a"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{alt:"roles",src:n(2800).Z+"",width:"856",height:"548"})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"root"}),"\uff1a\u62e5\u6709\u5168\u5c40\u6743\u9650\u3002root \u7528\u6237\u9ed8\u8ba4\u62e5\u6709 ",(0,r.jsx)(s.code,{children:"root"})," \u89d2\u8272\u3002\nStarRocks \u96c6\u7fa4\u6700\u521d\u521b\u5efa\u65f6\uff0c\u7cfb\u7edf\u4f1a\u81ea\u52a8\u751f\u6210 root \u7528\u6237\uff0c\u8be5\u7528\u6237\u62e5\u6709 root \u6743\u9650\u3002\u7531\u4e8e root \u7528\u6237\u3001\u89d2\u8272\u7684\u6743\u9650\u8303\u56f4\u8fc7\u5927\uff0c\u5efa\u8bae\u60a8\u5728\u540e\u7eed\u4f7f\u7528\u548c\u7ef4\u62a4\u96c6\u7fa4\u65f6\u521b\u5efa\u65b0\u7684\u7528\u6237\u548c\u89d2\u8272\uff0c\u907f\u514d\u76f4\u63a5\u4f7f\u7528\u6b64\u7528\u6237\u548c\u89d2\u8272\u3002root \u7528\u6237\u7684\u5bc6\u7801\u8bf7\u60a8\u59a5\u5584\u4fdd\u7ba1\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"cluster_admin"}),"\uff1a\u62e5\u6709\u96c6\u7fa4\u7684\u7ba1\u7406\u6743\u9650\u3002\u5305\u542b\u5bf9\u8282\u70b9\u7684\u64cd\u4f5c\u6743\u9650\uff0c\u5982\u589e\u52a0\u3001\u51cf\u5c11\u8282\u70b9\u3002\n",(0,r.jsx)(s.code,{children:"cluster_admin"})," \u89d2\u8272\u62e5\u6709\u5bf9\u96c6\u7fa4\u8282\u70b9\u7684\u4e0a\u3001\u4e0b\u7ebf\u6743\u9650\uff0c\u8bf7\u59a5\u5584\u8d4b\u6743\u3002\u5efa\u8bae\u60a8\u4e0d\u8981\u5c06 ",(0,r.jsx)(s.code,{children:"cluster_admin"})," \u6216\u4efb\u4f55\u5305\u542b\u6b64\u89d2\u8272\u7684\u81ea\u5b9a\u4e49\u89d2\u8272\u8bbe\u7f6e\u4e3a\u7528\u6237\u7684\u9ed8\u8ba4\u89d2\u8272\uff0c\u9632\u6b62\u56e0\u8bef\u64cd\u4f5c\u800c\u5bfc\u81f4\u7684\u8282\u70b9\u53d8\u66f4\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"db_admin"}),"\uff1a\u62e5\u6709\u6570\u636e\u5e93\u7684\u7ba1\u7406\u6743\u9650\u3002\u5305\u542b\u6240\u6709 CATALOG\u3001\u6570\u636e\u5e93\u3001\u8868\u3001\u89c6\u56fe\u3001\u7269\u5316\u89c6\u56fe\u3001\u51fd\u6570\u53ca\u5168\u5c40\u51fd\u6570\u3001\u8d44\u6e90\u7ec4\u3001\u63d2\u4ef6\u7b49\u5bf9\u8c61\u7684\u6240\u6709\u64cd\u4f5c\u6743\u9650\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"user_admin"}),"\uff1a\u62e5\u6709\u7528\u6237\u548c\u89d2\u8272\u7684\u7ba1\u7406\u6743\u9650\u3002\u5305\u542b\u521b\u5efa\u7528\u6237\u3001\u89d2\u8272\u3001\u8d4b\u6743\u7b49\u6743\u9650\u3002"]}),"\n",(0,r.jsxs)(s.p,{children:["\u4e0a\u8ff0\u7cfb\u7edf\u9884\u7f6e\u89d2\u8272\u65e8\u5728\u5c06\u590d\u6742\u7684\u6570\u636e\u5e93\u6743\u9650\u8fdb\u884c\u9ad8\u5ea6\u96c6\u5408\uff0c\u4ee5\u65b9\u4fbf\u60a8\u7684\u65e5\u5e38\u7ba1\u7406\uff0c",(0,r.jsx)(s.strong,{children:"\u4e0a\u8ff0\u89d2\u8272\u7684\u6743\u9650\u8303\u56f4\u4e0d\u53ef\u4ee5\u4fee\u6539\u3002"})]}),"\n",(0,r.jsxs)(s.p,{children:["\u9664\u6b64\u4e4b\u5916\uff0c\u5982\u679c\u60a8\u9700\u8981\u5c06\u67d0\u4e9b\u6743\u9650\u8d4b\u4e88\u7ed9\u6240\u6709\u7528\u6237\uff0cStarRocks \u8fd8\u63d0\u4f9b\u4e00\u4e2a\u9884\u7f6e\u89d2\u8272 ",(0,r.jsx)(s.code,{children:"public"}),"\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"public"}),"\uff1a\u4efb\u4f55\u7528\u6237\u90fd\u62e5\u6709\u3001\u5e76\u5728\u4efb\u4f55\u4f1a\u8bdd\u4e0b\u90fd\u9ed8\u8ba4\u6fc0\u6d3b\u6b64\u89d2\u8272\uff0c\u5305\u542b\u65b0\u589e\u7528\u6237\u3002",(0,r.jsx)(s.code,{children:"public"})," \u89d2\u8272\u9ed8\u8ba4\u4e0d\u62e5\u6709\u4efb\u4f55\u6743\u9650\uff0c\u60a8\u53ef\u4ee5\u5bf9\u6b64\u89d2\u8272\u7684\u6743\u9650\u8303\u56f4\u8fdb\u884c\u4fee\u6539\u3002"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"\u7528\u6237\u81ea\u5b9a\u4e49\u89d2\u8272",children:"\u7528\u6237\u81ea\u5b9a\u4e49\u89d2\u8272"}),"\n",(0,r.jsx)(s.p,{children:"\u60a8\u53ef\u4ee5\u6839\u636e\u4e1a\u52a1\u573a\u666f\u521b\u5efa\u81ea\u5b9a\u4e49\u89d2\u8272\uff0c\u5e76\u4fee\u6539\u5176\u6743\u9650\u8303\u56f4\u3002\u540c\u65f6\uff0c\u4e3a\u4e86\u65b9\u4fbf\u7ba1\u7406\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7\u5c06\u89d2\u8272\u8d4b\u4e88\u7ed9\u89d2\u8272\u6765\u4ea7\u751f\u6743\u9650\u7684\u7ee7\u627f\u3002"}),"\n",(0,r.jsx)(s.h4,{id:"\u89d2\u8272\u7684\u7ee7\u627f\u5173\u7cfb",children:"\u89d2\u8272\u7684\u7ee7\u627f\u5173\u7cfb"}),"\n",(0,r.jsx)(s.p,{children:"\u4e0b\u56fe\u5c55\u793a\u4e86\u6743\u9650\u7ee7\u627f\u7684\u4f8b\u5b50\u3002"}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsx)(s.p,{children:"\u6ce8\u610f\uff1a\u4e00\u4e2a\u89d2\u8272\u7684\u6700\u591a\u7ee7\u627f\u5c42\u6570\u4e3a 16\u3002\u89d2\u8272\u7684\u7ee7\u627f\u5173\u7cfb\u4e0d\u80fd\u662f\u53cc\u5411\u7684\uff0c\u6bd4\u5982\u5c06\u89d2\u8272 A \u8d4b\u4e88\u7ed9 B\uff0c\u4e0d\u80fd\u540c\u65f6\u53c8\u628a B \u8d4b\u4e88\u7ed9 A\uff0c\u53ef\u80fd\u4f1a\u9020\u6210\u7ee7\u627f\u5173\u7cfb\u4e0d\u6e05\u695a\u3002"}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{alt:"role inheritance",src:n(7336).Z+"",width:"1888",height:"722"})}),"\n",(0,r.jsx)(s.p,{children:"\u5982\u56fe\u6240\u793a\uff0c\u5c06\u89d2\u8272\u8d4b\u4e88\u7ed9\u7528\u6237\uff0c\u7528\u6237\u4e5f\u5bf9\u5e94\u62e5\u6709\u4e86\u89d2\u8272\u7684\u6743\u9650\u3002"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\u56e0 ",(0,r.jsx)(s.code,{children:"role_s"})," \u88ab\u8d4b\u4e88\u7ed9\u4e86 ",(0,r.jsx)(s.code,{children:"role_p"}),"\uff0c\u56e0\u6b64 ",(0,r.jsx)(s.code,{children:"role_p"})," \u9690\u542b\u7ee7\u627f\u4e86 ",(0,r.jsx)(s.code,{children:"role_s"})," \u7684 ",(0,r.jsx)(s.code,{children:"priv_1"}),"\uff1b"]}),"\n",(0,r.jsxs)(s.li,{children:["\u56e0 ",(0,r.jsx)(s.code,{children:"role_p"})," \u88ab\u8d4b\u4e88\u7ed9\u4e86 ",(0,r.jsx)(s.code,{children:"role_g"}),"\uff0c\u56e0\u6b64 ",(0,r.jsx)(s.code,{children:"role_g"})," \u9690\u542b\u7ee7\u627f\u4e86 ",(0,r.jsx)(s.code,{children:"role_p"})," \u7684 ",(0,r.jsx)(s.code,{children:"priv_2"})," \u548c ",(0,r.jsx)(s.code,{children:"role_s"})," \u7684 ",(0,r.jsx)(s.code,{children:"priv_1"}),"\u3002"]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"\u6fc0\u6d3b\u89d2\u8272",children:"\u6fc0\u6d3b\u89d2\u8272"}),"\n",(0,r.jsxs)(s.p,{children:["\u901a\u8fc7\u6fc0\u6d3b\u89d2\u8272 (Active Role)\uff0c\u7528\u6237\u53ef\u4ee5\u5c06\u8be5\u89d2\u8272\u7684\u6743\u9650\u5e94\u7528\u5728\u5f53\u524d\u4f1a\u8bdd\u4e0b\u3002\u60a8\u53ef\u4ee5\u901a\u8fc7 ",(0,r.jsx)(s.a,{href:"/docusaurusv3/zh/docs/latest/sql-reference/sql-functions/utility-functions/current_role",children:"SELECT CURRENT_ROLE()"})," \u6765\u67e5\u770b\u5f53\u524d\u4f1a\u8bdd\u5185\u6fc0\u6d3b\u7684\u89d2\u8272\u3002"]}),"\n",(0,r.jsx)(s.h4,{id:"\u9ed8\u8ba4\u6fc0\u6d3b\u89d2\u8272",children:"\u9ed8\u8ba4\u6fc0\u6d3b\u89d2\u8272"}),"\n",(0,r.jsxs)(s.p,{children:["\u9ed8\u8ba4\u89d2\u8272\uff08Default Role\uff09\u5373\u4e3a\u7528\u6237\u767b\u5f55\u96c6\u7fa4\u65f6\u81ea\u52a8\u6fc0\u6d3b\u7684\u89d2\u8272\uff0c\u53ef\u4ee5\u662f 1 \u4e2a\u6216\u591a\u4e2a\u7528\u6237\u62e5\u6709\u7684\u89d2\u8272\u3002\u7ba1\u7406\u5458\u53ef\u4ee5\u5728\u521b\u5efa\u7528\u6237\u65f6\u901a\u8fc7 CREATE USER \u7684 ",(0,r.jsx)(s.code,{children:"DEFAULT ROLE"})," \u5173\u952e\u5b57\u8fdb\u884c\u8bbe\u7f6e\uff0c\u4e5f\u53ef\u4ee5\u5728\u540e\u7eed\u901a\u8fc7 ALTER USER \u8fdb\u884c\u66f4\u6539\u3002"]}),"\n",(0,r.jsxs)(s.p,{children:["\u540c\u65f6\u7528\u6237\u4e5f\u53ef\u4ee5\u901a\u8fc7 ",(0,r.jsx)(s.a,{href:"/docusaurusv3/zh/docs/latest/sql-reference/sql-statements/account-management/SET_DEFAULT_ROLE",children:"SET DEFAULT ROLE"})," \u66f4\u6539\u81ea\u5df1\u7684\u9ed8\u8ba4\u89d2\u8272\u3002"]}),"\n",(0,r.jsx)(s.p,{children:"\u9ed8\u8ba4\u89d2\u8272\u4e3a\u7528\u6237\u63d0\u4f9b\u4e86\u4e00\u9053\u57fa\u7840\u7684\u6743\u9650\u5c4f\u969c\u3002\u4f8b\u5982\uff0c\u7528\u6237 A \u62e5\u6709 role_query \u548c role_delete \u4e24\u4e2a\u89d2\u8272\uff0c\u5206\u522b\u5305\u542b\u4e86\u67e5\u8be2\u548c\u5220\u9664\u7684\u6743\u9650\u3002StarRocks \u5efa\u8bae\u60a8\u4ec5\u5c06 role_query \u4f5c\u4e3a\u9ed8\u8ba4\u89d2\u8272\uff0c\u4ee5\u9632\u6b62\u8bef\u6267\u884c DELETE \u6216 TRUNCATE \u7b49\u9ad8\u5371\u64cd\u4f5c\u800c\u5bfc\u81f4\u6570\u636e\u4e22\u5931\u3002\u5f53\u60a8\u786e\u8ba4\u9700\u8981\u6267\u884c\u4e0a\u8ff0\u64cd\u4f5c\u65f6\uff0c\u53ef\u4ee5\u5728\u624b\u52a8\u8bbe\u7f6e\u6fc0\u6d3b\u89d2\u8272\u540e\u6267\u884c\u3002"}),"\n",(0,r.jsxs)(s.p,{children:["\u5f53\u7528\u6237\u6ca1\u6709\u9ed8\u8ba4\u89d2\u8272\u65f6\uff0c\u5728\u767b\u5f55\u96c6\u7fa4\u540e\u81ea\u52a8\u6fc0\u6d3b\u7cfb\u7edf\u9884\u7f6e\u7684 ",(0,r.jsx)(s.code,{children:"public"})," \u89d2\u8272\u3002"]}),"\n",(0,r.jsx)(s.h4,{id:"\u624b\u52a8\u6fc0\u6d3b\u89d2\u8272",children:"\u624b\u52a8\u6fc0\u6d3b\u89d2\u8272"}),"\n",(0,r.jsxs)(s.p,{children:["\u9664\u4e86\u9ed8\u8ba4\u89d2\u8272\uff0c\u7528\u6237\u4e5f\u53ef\u4ee5\u5728\u4f1a\u8bdd\u5185\u624b\u52a8\u9009\u62e9\u6fc0\u6d3b\u4e00\u4e2a\u6216\u591a\u4e2a\u5df2\u62e5\u6709\u7684\u89d2\u8272\u3002\u60a8\u53ef\u4ee5\u901a\u8fc7 ",(0,r.jsx)(s.a,{href:"/docusaurusv3/zh/docs/latest/sql-reference/sql-statements/account-management/SHOW%20GRANTS",children:"SHOW GRANTS"})," \u547d\u4ee4\u67e5\u770b\u5f53\u524d\u7528\u6237\u62e5\u6709\u7684\u6743\u9650\u548c\u53ef\u4ee5\u6fc0\u6d3b\u7684\u89d2\u8272\uff0c\u5e76\u901a\u8fc7 ",(0,r.jsx)(s.a,{href:"/docusaurusv3/zh/docs/latest/sql-reference/sql-statements/account-management/SET%20ROLE",children:"SET ROLE"})," \u547d\u4ee4\u6765\u8bbe\u7f6e\u5f53\u524d\u7684\u6fc0\u6d3b\u89d2\u8272\uff0c\u751f\u6548\u8303\u56f4\u4e3a\u5f53\u524d\u4f1a\u8bdd\u3002"]}),"\n",(0,r.jsxs)(s.p,{children:["SET ROLE \u547d\u4ee4\u662f\u8986\u76d6\u7684\u3002\u4f8b\u5982\uff0c\u7528\u6237\u767b\u5f55\u65f6\u662f\u9ed8\u8ba4\u6fc0\u6d3b\u4e86 default_role\uff0c\u6267\u884c ",(0,r.jsx)(s.code,{children:"SET ROLE role_s"}),"\u4e4b\u540e\uff0c\u7528\u6237\u6b64\u65f6\u62e5\u6709\u7684\u662f role_s \u7684\u6743\u9650\u548c\u81ea\u8eab\u6743\u9650\u3002"]}),"\n",(0,r.jsx)(s.h2,{id:"\u76f8\u5173\u6587\u6863",children:"\u76f8\u5173\u6587\u6863"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"/docusaurusv3/zh/docs/latest/administration/User_privilege",children:"\u7ba1\u7406\u7528\u6237\u6743\u9650"})})]})}const h=function(e={}){const{wrapper:s}=Object.assign({},(0,i.ah)(),e.components);return s?(0,r.jsx)(s,Object.assign({},e,{children:(0,r.jsx)(a,e)})):a(e)}},32528:(e,s,n)=>{n.d(s,{Z:()=>r});const r=n.p+"assets/images/privilege-manage-a14ee8540acca96c0bd82bf715fd0bf2.png"},70176:(e,s,n)=>{n.d(s,{Z:()=>r});const r=n.p+"assets/images/privilege-object-d96d98d9ae40611b7284915429751b3d.png"},2800:(e,s,n)=>{n.d(s,{Z:()=>r});const r=n.p+"assets/images/privilege-role-99f0408f80bfa72d3db5782c3a1c7259.png"},7336:(e,s,n)=>{n.d(s,{Z:()=>r});const r=n.p+"assets/images/privilege-role_inheri-5defbbe01c0a2800781249354c0166ab.png"},11151:(e,s,n)=>{n.d(s,{Zo:()=>d,ah:()=>c});var r=n(67294);const i=r.createContext({});function c(e){const s=r.useContext(i);return r.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const l={};function d({components:e,children:s,disableParentContext:n}){let d;return d=n?"function"==typeof e?e({}):e||l:c(e),r.createElement(i.Provider,{value:d},s)}}}]);