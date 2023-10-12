"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[98042],{66358:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>a,contentTitle:()=>i,default:()=>o,frontMatter:()=>c,metadata:()=>d,toc:()=>h});var l=s(85893),r=s(11151);const c={},i="\u964d\u7ea7 StarRocks",d={id:"deployment/downgrade",title:"\u964d\u7ea7 StarRocks",description:"\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u964d\u7ea7\u60a8\u7684 StarRocks \u96c6\u7fa4\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.5/deployment/downgrade.md",sourceDirName:"deployment",slug:"/deployment/downgrade",permalink:"/doc/zh/docs/2.5/deployment/downgrade",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-2.5/deployment/downgrade.md",tags:[],version:"2.5",frontMatter:{},sidebar:"Chinese31",previous:{title:"\u5347\u7ea7 StarRocks",permalink:"/doc/zh/docs/2.5/deployment/upgrade"},next:{title:"\u7406\u89e3 StarRocks \u8868\u8bbe\u8ba1",permalink:"/doc/zh/docs/2.5/table_design/StarRocks_table_design"}},a={},h=[{value:"\u6982\u8ff0",id:"\u6982\u8ff0",level:2},{value:"\u964d\u7ea7\u8def\u5f84",id:"\u964d\u7ea7\u8def\u5f84",level:3},{value:"\u964d\u7ea7\u6d41\u7a0b",id:"\u964d\u7ea7\u6d41\u7a0b",level:3},{value:"\u51c6\u5907\u5de5\u4f5c",id:"\u51c6\u5907\u5de5\u4f5c",level:2},{value:"\u517c\u5bb9\u6027\u914d\u7f6e",id:"\u517c\u5bb9\u6027\u914d\u7f6e",level:3},{value:"\u964d\u7ea7 FE",id:"\u964d\u7ea7-fe",level:2},{value:"\u964d\u7ea7 BE",id:"\u964d\u7ea7-be",level:2},{value:"\u964d\u7ea7 CN",id:"\u964d\u7ea7-cn",level:2}];function x(n){const e=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",ul:"ul",li:"li",strong:"strong",a:"a",pre:"pre",code:"code",ol:"ol",blockquote:"blockquote"},(0,r.ah)(),n.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h1,{id:"\u964d\u7ea7-starrocks",children:"\u964d\u7ea7 StarRocks"}),"\n",(0,l.jsx)(e.p,{children:"\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u964d\u7ea7\u60a8\u7684 StarRocks \u96c6\u7fa4\u3002"}),"\n",(0,l.jsx)(e.p,{children:"\u5982\u679c\u5347\u7ea7 StarRocks \u96c6\u7fa4\u540e\u51fa\u73b0\u5f02\u5e38\uff0c\u60a8\u53ef\u4ee5\u5c06\u5176\u964d\u7ea7\u5230\u4e4b\u524d\u7684\u7248\u672c\uff0c\u4ee5\u5feb\u901f\u6062\u590d\u96c6\u7fa4\u3002"}),"\n",(0,l.jsx)(e.h2,{id:"\u6982\u8ff0",children:"\u6982\u8ff0"}),"\n",(0,l.jsx)(e.p,{children:"\u8bf7\u5728\u964d\u7ea7\u524d\u67e5\u770b\u672c\u8282\u4e2d\u7684\u4fe1\u606f\u3002\u5efa\u8bae\u60a8\u6309\u7167\u6587\u4e2d\u63a8\u8350\u7684\u64cd\u4f5c\u964d\u7ea7\u96c6\u7fa4\u3002"}),"\n",(0,l.jsx)(e.h3,{id:"\u964d\u7ea7\u8def\u5f84",children:"\u964d\u7ea7\u8def\u5f84"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"\u5c0f\u7248\u672c\u964d\u7ea7"})}),"\n",(0,l.jsx)(e.p,{children:"\u60a8\u53ef\u4ee5\u8de8\u5c0f\u7248\u672c\u964d\u7ea7\u60a8\u7684 StarRocks \u96c6\u7fa4\uff0c\u4f8b\u5982\uff0c\u4ece v2.2.11 \u76f4\u63a5\u964d\u7ea7\u5230 v2.2.6\u3002"}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"\u5927\u7248\u672c\u964d\u7ea7"})}),"\n",(0,l.jsxs)(e.p,{children:["\u51fa\u4e8e\u517c\u5bb9\u6027\u548c\u5b89\u5168\u539f\u56e0\uff0c\u6211\u4eec\u5f3a\u70c8\u5efa\u8bae\u60a8\u5c06 StarRocks \u96c6\u7fa4\u6309",(0,l.jsx)(e.strong,{children:"\u5927\u7248\u672c\u9010\u7ea7\u964d\u7ea7"}),"\u3002\u4f8b\u5982\uff0c\u8981\u5c06 StarRocks v2.5 \u96c6\u7fa4\u964d\u7ea7\u5230 v2.2\uff0c\u9700\u8981\u6309\u7167\u4ee5\u4e0b\u987a\u5e8f\u964d\u7ea7\uff1av2.5.x --\x3e v2.4.x --\x3e v2.3.x --\x3e v2.2.x\u3002"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"\u91cd\u5927\u7248\u672c\u964d\u7ea7"})}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u60a8\u65e0\u6cd5\u8de8\u7248\u672c\u964d\u7ea7\u81f3 v1.19\uff0c\u5fc5\u987b\u5148\u964d\u7ea7\u81f3 v2.0\u3002"}),"\n",(0,l.jsxs)(e.li,{children:["\u60a8\u53ea\u80fd\u5c06\u96c6\u7fa4\u4ece v3.0 \u964d\u7ea7\u5230 v2.5.3 \u4ee5\u4e0a\u7248\u672c\u3002","\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"StarRocks \u5728 v3.0 \u7248\u672c\u4e2d\u5347\u7ea7\u4e86 BDB \u5e93\u3002\u7531\u4e8e BDB JE \u65e0\u6cd5\u56de\u6eda\uff0c\u6240\u4ee5\u964d\u7ea7\u540e\u60a8\u5fc5\u987b\u7ee7\u7eed\u4f7f\u7528 v3.0 \u7684 BDB \u5e93\u3002"}),"\n",(0,l.jsx)(e.li,{children:"\u5347\u7ea7\u81f3 v3.0 \u540e\uff0c\u96c6\u7fa4\u9ed8\u8ba4\u4f7f\u7528\u65b0\u7684 RBAC \u6743\u9650\u7cfb\u7edf\u3002\u964d\u7ea7\u540e\u60a8\u53ea\u80fd\u4f7f\u7528 RBAC \u6743\u9650\u7cfb\u7edf\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.h3,{id:"\u964d\u7ea7\u6d41\u7a0b",children:"\u964d\u7ea7\u6d41\u7a0b"}),"\n",(0,l.jsxs)(e.p,{children:["StarRocks \u7684\u964d\u7ea7\u6d41\u7a0b\u4e0e ",(0,l.jsx)(e.a,{href:"/doc/zh/docs/2.5/deployment/upgrade#%E5%8D%87%E7%BA%A7%E6%B5%81%E7%A8%8B",children:"\u5347\u7ea7\u6d41\u7a0b"})," \u76f8\u53cd\u3002\u6240\u4ee5",(0,l.jsx)(e.strong,{children:"\u60a8\u9700\u8981\u5148\u964d\u7ea7 FE\uff0c\u518d\u964d\u7ea7 BE \u548cCN"}),"\u3002\u9519\u8bef\u7684\u964d\u7ea7\u987a\u5e8f\u53ef\u80fd\u4f1a\u5bfc\u81f4 FE \u4e0e BE/CN \u4e0d\u517c\u5bb9\uff0c\u8fdb\u800c\u5bfc\u81f4\u670d\u52a1\u5d29\u6e83\u3002\u5bf9\u4e8e FE \u8282\u70b9\uff0c\u60a8\u5fc5\u987b\u5148\u964d\u7ea7\u6240\u6709 Follower FE \u8282\u70b9\uff0c\u6700\u540e\u964d\u7ea7 Leader FE \u8282\u70b9\u3002"]}),"\n",(0,l.jsx)(e.h2,{id:"\u51c6\u5907\u5de5\u4f5c",children:"\u51c6\u5907\u5de5\u4f5c"}),"\n",(0,l.jsx)(e.p,{children:"\u51c6\u5907\u8fc7\u7a0b\u4e2d\uff0c\u5982\u679c\u60a8\u9700\u8981\u8fdb\u884c\u5927\u7248\u672c\u6216\u91cd\u5927\u7248\u672c\u964d\u7ea7\uff0c\u5219\u5fc5\u987b\u8fdb\u884c\u517c\u5bb9\u6027\u914d\u7f6e\u3002\u5728\u5168\u9762\u964d\u7ea7\u96c6\u7fa4\u6240\u6709\u8282\u70b9\u4e4b\u524d\uff0c\u60a8\u8fd8\u9700\u8981\u5bf9\u5176\u4e2d\u4e00\u4e2a FE \u548c BE \u8282\u70b9\u8fdb\u884c\u964d\u7ea7\u6b63\u786e\u6027\u6d4b\u8bd5\u3002"}),"\n",(0,l.jsx)(e.h3,{id:"\u517c\u5bb9\u6027\u914d\u7f6e",children:"\u517c\u5bb9\u6027\u914d\u7f6e"}),"\n",(0,l.jsx)(e.p,{children:"\u5982\u9700\u8fdb\u884c\u5927\u7248\u672c\u6216\u91cd\u5927\u7248\u672c\u964d\u7ea7\uff0c\u5219\u5fc5\u987b\u8fdb\u884c\u517c\u5bb9\u6027\u914d\u7f6e\u3002\u9664\u4e86\u901a\u7528\u7684\u517c\u5bb9\u6027\u914d\u7f6e\u5916\uff0c\u8fd8\u9700\u6839\u636e\u964d\u7ea7\u524d\u7248\u672c\u8fdb\u884c\u5177\u4f53\u914d\u7f6e\u3002"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.strong,{children:"\u901a\u7528\u517c\u5bb9\u6027\u914d\u7f6e"})}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:"\u964d\u7ea7\u524d\uff0c\u8bf7\u5173\u95ed Tablet Clone\u3002"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-SQL",children:'ADMIN SET FRONTEND CONFIG ("max_scheduling_tablets" = "0");\nADMIN SET FRONTEND CONFIG ("max_balancing_tablets" = "0");\nADMIN SET FRONTEND CONFIG ("disable_balance"="true");\nADMIN SET FRONTEND CONFIG ("disable_colocate_balance"="true");\n'})}),"\n",(0,l.jsxs)(e.p,{children:["\u5b8c\u6210\u964d\u7ea7\uff0c\u5e76\u4e14\u6240\u6709 BE \u8282\u70b9\u72b6\u6001\u53d8\u4e3a ",(0,l.jsx)(e.code,{children:"Alive"})," \u540e\uff0c\u60a8\u53ef\u4ee5\u91cd\u65b0\u5f00\u542f Tablet Clone\u3002"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-SQL",children:'ADMIN SET FRONTEND CONFIG ("max_scheduling_tablets" = "2000");\nADMIN SET FRONTEND CONFIG ("max_balancing_tablets" = "100");\nADMIN SET FRONTEND CONFIG ("disable_balance"="false");\nADMIN SET FRONTEND CONFIG ("disable_colocate_balance"="false");\n'})}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.strong,{children:"\u5982\u679c\u60a8\u81ea v2.2 \u53ca\u4ee5\u540e\u7248\u672c\u964d\u7ea7"})}),"\n"]}),"\n",(0,l.jsxs)(e.p,{children:["\u8bbe\u7f6e FE \u914d\u7f6e\u9879 ",(0,l.jsx)(e.code,{children:"ignore_unknown_log_id"})," \u4e3a ",(0,l.jsx)(e.code,{children:"true"}),"\u3002\u7531\u4e8e\u8be5\u914d\u7f6e\u9879\u4e3a\u9759\u6001\u53c2\u6570\uff0c\u6240\u4ee5\u5fc5\u987b\u5728 FE \u914d\u7f6e\u6587\u4ef6 ",(0,l.jsx)(e.strong,{children:"fe.conf"})," \u4e2d\u4fee\u6539\uff0c\u5e76\u4e14\u5728\u4fee\u6539\u5b8c\u6210\u540e\u91cd\u542f\u8282\u70b9\u4f7f\u4fee\u6539\u751f\u6548\u3002\u964d\u7ea7\u7ed3\u675f\u4e14\u7b2c\u4e00\u6b21 Checkpoint \u5b8c\u6210\u540e\uff0c\u60a8\u53ef\u4ee5\u5c06\u5176\u91cd\u7f6e\u4e3a ",(0,l.jsx)(e.code,{children:"false"})," \u5e76\u91cd\u65b0\u542f\u52a8\u8282\u70b9\u3002"]}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.strong,{children:"\u5982\u679c\u60a8\u542f\u7528\u4e86 FQDN \u8bbf\u95ee"})}),"\n"]}),"\n",(0,l.jsxs)(e.p,{children:["\u5982\u679c\u60a8\u542f\u7528\u4e86 FQDN \u8bbf\u95ee\uff08\u81ea v2.4 \u8d77\u652f\u6301\uff09\uff0c\u9700\u8981\u964d\u7ea7\u81f3 v2.4 \u4e4b\u524d\u7248\u672c\uff0c\u5219\u5fc5\u987b\u5728\u964d\u7ea7\u4e4b\u524d\u5207\u6362\u5230 IP \u5730\u5740\u8bbf\u95ee\u3002\u6709\u5173\u8be6\u7ec6\u8bf4\u660e\uff0c\u8bf7\u53c2\u8003 ",(0,l.jsx)(e.a,{href:"/doc/zh/docs/2.5/administration/enable_fqdn#%E5%9B%9E%E6%BB%9A",children:"\u56de\u6eda FQDN"}),"\u3002"]}),"\n",(0,l.jsx)(e.h2,{id:"\u964d\u7ea7-fe",children:"\u964d\u7ea7 FE"}),"\n",(0,l.jsx)(e.p,{children:"\u901a\u8fc7\u964d\u7ea7\u6b63\u786e\u6027\u6d4b\u8bd5\u540e\uff0c\u60a8\u53ef\u4ee5\u5148\u964d\u7ea7 FE \u8282\u70b9\u3002\u60a8\u5fc5\u987b\u5148\u964d\u7ea7 Follower FE \u8282\u70b9\uff0c\u7136\u540e\u518d\u964d\u7ea7 Leader FE \u8282\u70b9\u3002"}),"\n",(0,l.jsxs)(e.ol,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"\u8fdb\u5165 FE \u8282\u70b9\u5de5\u4f5c\u8def\u5f84\uff0c\u5e76\u505c\u6b62\u8be5\u8282\u70b9\u3002"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-Bash",children:"# \u5c06 <fe_dir> \u66ff\u6362\u4e3a FE \u8282\u70b9\u7684\u90e8\u7f72\u76ee\u5f55\u3002\ncd <fe_dir>/fe\n./bin/stop_fe.sh\n"})}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:["\u66ff\u6362\u90e8\u7f72\u6587\u4ef6\u539f\u6709\u8def\u5f84 ",(0,l.jsx)(e.strong,{children:"bin"}),"\u3001",(0,l.jsx)(e.strong,{children:"lib"})," \u4ee5\u53ca ",(0,l.jsx)(e.strong,{children:"spark-dpp"})," \u4e3a\u65e7\u7248\u672c\u7684\u90e8\u7f72\u6587\u4ef6\u3002"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-Bash",children:"mv lib lib.bak \nmv bin bin.bak\nmv spark-dpp spark-dpp.bak\ncp -r /tmp/StarRocks-x.x.x/fe/lib  .   \ncp -r /tmp/StarRocks-x.x.x/fe/bin  .\ncp -r /tmp/StarRocks-x.x.x/fe/spark-dpp  .\n"})}),"\n",(0,l.jsxs)(e.blockquote,{children:["\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"\u6ce8\u610f"})}),"\n",(0,l.jsx)(e.p,{children:"\u5982\u9700\u5c06 StarRocks v3.0 \u964d\u7ea7\u81f3 v2.5\uff0c\u5219\u5fc5\u987b\u5728\u66ff\u6362\u90e8\u7f72\u6587\u4ef6\u540e\u6267\u884c\u4ee5\u4e0b\u6b65\u9aa4\uff1a"}),"\n",(0,l.jsxs)(e.ol,{children:["\n",(0,l.jsxs)(e.li,{children:["\u5c06 v3.0 \u90e8\u7f72\u6587\u4ef6\u4e2d\u7684",(0,l.jsx)(e.strong,{children:"fe/lib/starrocks-bdb-je-18.3.13.jar"})," \u590d\u5236\u5230 v2.5 \u90e8\u7f72\u6587\u4ef6\u7684 ",(0,l.jsx)(e.strong,{children:"fe/lib"})," \u8def\u5f84\u4e0b\u3002"]}),"\n",(0,l.jsxs)(e.li,{children:["\u5220\u9664\u6587\u4ef6 ",(0,l.jsx)(e.strong,{children:"fe/lib/je-7.*.jar"}),"\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"\u542f\u52a8\u8be5 FE \u8282\u70b9\u3002"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-Bash",children:"sh bin/start_fe.sh --daemon\n"})}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"\u67e5\u770b\u8282\u70b9\u662f\u5426\u542f\u52a8\u6210\u529f\u3002"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-Bash",children:"ps aux | grep StarRocksFE\n"})}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"\u91cd\u590d\u4ee5\u4e0a\u6b65\u9aa4\u964d\u7ea7\u5176\u4ed6 Follower FE \u8282\u70b9\uff0c\u6700\u540e\u964d\u7ea7 Leader FE \u8282\u70b9\u3002"}),"\n",(0,l.jsxs)(e.blockquote,{children:["\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"\u6ce8\u610f"})}),"\n",(0,l.jsx)(e.p,{children:"\u5982\u9700\u5c06 StarRocks v3.0 \u964d\u7ea7\u81f3 v2.5\uff0c\u5219\u5fc5\u987b\u5728\u964d\u7ea7\u5b8c\u6210\u540e\u6267\u884c\u4ee5\u4e0b\u6b65\u9aa4\uff1a"}),"\n",(0,l.jsxs)(e.ol,{children:["\n",(0,l.jsxs)(e.li,{children:["\u6267\u884c ",(0,l.jsx)(e.a,{href:"/doc/zh/docs/2.5/sql-reference/sql-statements/Administration/ALTER_SYSTEM",children:"ALTER SYSTEM CREATE IMAGE"})," \u521b\u5efa\u65b0\u7684\u5143\u6570\u636e\u5feb\u7167\u6587\u4ef6\u3002"]}),"\n",(0,l.jsx)(e.li,{children:"\u7b49\u5f85\u5143\u6570\u636e\u5feb\u7167\u6587\u4ef6\u540c\u6b65\u81f3\u5176\u4ed6 FE \u8282\u70b9\u3002"}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:"\u5982\u679c\u4e0d\u8fd0\u884c\u8be5\u547d\u4ee4\uff0c\u90e8\u5206\u964d\u7ea7\u64cd\u4f5c\u53ef\u80fd\u4f1a\u5931\u8d25\u3002ALTER SYSTEM CREATE IMAGE \u547d\u4ee4\u4ec5\u5728 v2.5.3 \u53ca\u66f4\u9ad8\u7248\u672c\u652f\u6301\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"\u964d\u7ea7-be",children:"\u964d\u7ea7 BE"}),"\n",(0,l.jsx)(e.p,{children:"\u964d\u7ea7\u6240\u6709 FE \u8282\u70b9\u540e\uff0c\u60a8\u53ef\u4ee5\u7ee7\u7eed\u964d\u7ea7 BE \u8282\u70b9\u3002"}),"\n",(0,l.jsxs)(e.ol,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"\u8fdb\u5165 BE \u8282\u70b9\u5de5\u4f5c\u8def\u5f84\uff0c\u5e76\u505c\u6b62\u8be5\u8282\u70b9\u3002"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-Bash",children:"# \u5c06 <be_dir> \u66ff\u6362\u4e3a BE \u8282\u70b9\u7684\u90e8\u7f72\u76ee\u5f55\u3002\ncd <be_dir>/be\n./bin/stop_be.sh\n"})}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:["\u66ff\u6362\u90e8\u7f72\u6587\u4ef6\u539f\u6709\u8def\u5f84 ",(0,l.jsx)(e.strong,{children:"bin"})," \u548c ",(0,l.jsx)(e.strong,{children:"lib"})," \u4e3a\u65e7\u7248\u672c\u7684\u90e8\u7f72\u6587\u4ef6\u3002"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-Bash",children:"mv lib lib.bak \nmv bin bin.bak\ncp -r /tmp/StarRocks-x.x.x/be/lib  .\ncp -r /tmp/StarRocks-x.x.x/be/bin  .\n"})}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"\u542f\u52a8\u8be5 BE \u8282\u70b9\u3002"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-Bash",children:"sh bin/start_be.sh --daemon\n"})}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"\u67e5\u770b\u8282\u70b9\u662f\u5426\u542f\u52a8\u6210\u529f\u3002"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-Bash",children:"ps aux | grep starrocks_be\n"})}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"\u91cd\u590d\u4ee5\u4e0a\u6b65\u9aa4\u964d\u7ea7\u5176\u4ed6 BE \u8282\u70b9\u3002"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"\u964d\u7ea7-cn",children:"\u964d\u7ea7 CN"}),"\n",(0,l.jsxs)(e.ol,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"\u8fdb\u5165 CN \u8282\u70b9\u5de5\u4f5c\u8def\u5f84\uff0c\u5e76\u4f18\u96c5\u505c\u6b62\u8be5\u8282\u70b9\u3002"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-Bash",children:"# \u5c06 <cn_dir> \u66ff\u6362\u4e3a CN \u8282\u70b9\u7684\u90e8\u7f72\u76ee\u5f55\u3002\ncd <cn_dir>/be\n./bin/stop_cn.sh --graceful\n"})}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:["\u66ff\u6362\u90e8\u7f72\u6587\u4ef6\u539f\u6709\u8def\u5f84 ",(0,l.jsx)(e.strong,{children:"bin"})," \u548c ",(0,l.jsx)(e.strong,{children:"lib"})," \u4e3a\u65b0\u7248\u672c\u7684\u90e8\u7f72\u6587\u4ef6\u3002"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-Bash",children:"mv lib lib.bak \nmv bin bin.bak\ncp -r /tmp/StarRocks-x.x.x/be/lib  .\ncp -r /tmp/StarRocks-x.x.x/be/bin  .\n"})}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"\u542f\u52a8\u8be5 CN \u8282\u70b9\u3002"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-Bash",children:"sh bin/start_cn.sh --daemon\n"})}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"\u67e5\u770b\u8282\u70b9\u662f\u5426\u542f\u52a8\u6210\u529f\u3002"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-Bash",children:"ps aux | grep starrocks_be\n"})}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"\u91cd\u590d\u4ee5\u4e0a\u6b65\u9aa4\u964d\u7ea7\u5176\u4ed6 CN \u8282\u70b9\u3002"}),"\n"]}),"\n"]})]})}const o=function(n={}){const{wrapper:e}=Object.assign({},(0,r.ah)(),n.components);return e?(0,l.jsx)(e,Object.assign({},n,{children:(0,l.jsx)(x,n)})):x(n)}},11151:(n,e,s)=>{s.d(e,{Zo:()=>d,ah:()=>c});var l=s(67294);const r=l.createContext({});function c(n){const e=l.useContext(r);return l.useMemo((()=>"function"==typeof n?n(e):{...e,...n}),[e,n])}const i={};function d({components:n,children:e,disableParentContext:s}){let d;return d=s?"function"==typeof n?n({}):n||i:c(n),l.createElement(r.Provider,{value:d},e)}}}]);