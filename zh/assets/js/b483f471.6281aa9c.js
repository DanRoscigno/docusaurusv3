"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[37466],{16408:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>d,toc:()=>a});var s=r(85893),c=r(11151);const t={},o="\u4f7f\u7528 Docker \u90e8\u7f72 StarRocks",d={id:"quick_start/deploy_with_docker",title:"\u4f7f\u7528 Docker \u90e8\u7f72 StarRocks",description:"\u672c\u5feb\u901f\u5165\u95e8\u6559\u7a0b\u5c06\u6307\u5bfc\u60a8\u4f7f\u7528 Docker \u5728\u672c\u5730\u8ba1\u7b97\u673a\u4e0a\u90e8\u7f72 StarRocks\u3002\u5728\u5f00\u59cb\u4e4b\u524d\uff0c\u60a8\u53ef\u4ee5\u9605\u8bfb \u7cfb\u7edf\u67b6\u6784 \u4e86\u89e3\u66f4\u591a\u6982\u5ff5\u7ec6\u8282\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.1/quick_start/deploy_with_docker.md",sourceDirName:"quick_start",slug:"/quick_start/deploy_with_docker",permalink:"/doc/zh/docs/quick_start/deploy_with_docker",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/quick_start/deploy_with_docker.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"Quick Start",permalink:"/doc/zh/docs/category/quick-start"},next:{title:"\u521b\u5efa\u8868",permalink:"/doc/zh/docs/quick_start/Create_table"}},i={},a=[{value:"\u524d\u63d0\u6761\u4ef6",id:"\u524d\u63d0\u6761\u4ef6",level:2},{value:"\u7b2c\u4e00\u6b65\uff1a\u901a\u8fc7 Docker \u955c\u50cf\u90e8\u7f72 StarRocks",id:"\u7b2c\u4e00\u6b65\u901a\u8fc7-docker-\u955c\u50cf\u90e8\u7f72-starrocks",level:2},{value:"\u7b2c\u4e8c\u6b65\uff1a\u8fde\u63a5 StarRocks",id:"\u7b2c\u4e8c\u6b65\u8fde\u63a5-starrocks",level:2},{value:"\u505c\u6b62\u5e76\u79fb\u9664 Docker \u5bb9\u5668",id:"\u505c\u6b62\u5e76\u79fb\u9664-docker-\u5bb9\u5668",level:2},{value:"\u4e0b\u4e00\u6b65",id:"\u4e0b\u4e00\u6b65",level:2}];function l(e){const n=Object.assign({h1:"h1",p:"p",a:"a",strong:"strong",blockquote:"blockquote",h2:"h2",ul:"ul",li:"li",pre:"pre",code:"code",div:"div"},(0,c.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"\u4f7f\u7528-docker-\u90e8\u7f72-starrocks",children:"\u4f7f\u7528 Docker \u90e8\u7f72 StarRocks"}),"\n",(0,s.jsxs)(n.p,{children:["\u672c\u5feb\u901f\u5165\u95e8\u6559\u7a0b\u5c06\u6307\u5bfc\u60a8\u4f7f\u7528 Docker \u5728\u672c\u5730\u8ba1\u7b97\u673a\u4e0a\u90e8\u7f72 StarRocks\u3002\u5728\u5f00\u59cb\u4e4b\u524d\uff0c\u60a8\u53ef\u4ee5\u9605\u8bfb ",(0,s.jsx)(n.a,{href:"/doc/zh/docs/introduction/Architecture",children:"\u7cfb\u7edf\u67b6\u6784"})," \u4e86\u89e3\u66f4\u591a\u6982\u5ff5\u7ec6\u8282\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u60a8\u53ef\u4ee5\u4f9d\u7167\u4ee5\u4e0b\u6b65\u9aa4\u90e8\u7f72\u4e00\u4e2a\u7b80\u5355\u7684 StarRocks \u96c6\u7fa4\uff0c\u5176\u4e2d\u5305\u542b",(0,s.jsx)(n.strong,{children:"\u4e00\u4e2a FE \u8282\u70b9"}),"\u548c",(0,s.jsx)(n.strong,{children:"\u4e00\u4e2a BE \u8282\u70b9"}),"\u3002\u60a8\u53ef\u4ee5\u57fa\u4e8e\u8be5\u96c6\u7fa4\u5b8c\u6210\u540e\u7eed\u7684 ",(0,s.jsx)(n.a,{href:"/doc/zh/docs/quick_start/Create_table",children:"\u521b\u5efa\u8868"})," \u548c ",(0,s.jsx)(n.a,{href:"/doc/zh/docs/quick_start/Import_and_query",children:"\u5bfc\u5165\u548c\u67e5\u8be2\u6570\u636e"})," \u7684\u5feb\u901f\u5165\u95e8\u6559\u7a0b\uff0c\u4ece\u800c\u719f\u6089 StarRocks \u7684\u57fa\u672c\u64cd\u4f5c\u3002"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u6ce8\u610f"})}),"\n",(0,s.jsxs)(n.p,{children:["\u4f7f\u7528\u4ee5\u4e0b Docker \u955c\u50cf\u90e8\u7f72\u7684 StarRocks \u96c6\u7fa4\u4ec5\u9002\u7528\u4e8e\u5c0f\u6570\u636e\u96c6\u9a8c\u8bc1 DEMO \u7684\u60c5\u51b5\u3002\u4e0d\u5efa\u8bae\u60a8\u5c06\u5176\u7528\u4e8e\u5927\u89c4\u6a21\u6d4b\u8bd5\u6216\u751f\u4ea7\u73af\u5883\u3002\u5982\u9700\u90e8\u7f72\u9ad8\u53ef\u7528 StarRocks \u96c6\u7fa4\uff0c\u8bf7\u53c2\u89c1",(0,s.jsx)(n.a,{href:"/doc/zh/docs/deployment/deployment_overview",children:"\u90e8\u7f72\u6982\u89c8"}),"\u4e86\u89e3\u5176\u4ed6\u9002\u5408\u60a8\u573a\u666f\u7684\u90e8\u7f72\u65b9\u5f0f\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u524d\u63d0\u6761\u4ef6",children:"\u524d\u63d0\u6761\u4ef6"}),"\n",(0,s.jsx)(n.p,{children:"\u5728 Docker \u5bb9\u5668\u4e2d\u90e8\u7f72 StarRocks \u4e4b\u524d\uff0c\u8bf7\u786e\u4fdd\u5982\u4e0b\u73af\u5883\u8981\u6c42\u5df2\u6ee1\u8db3\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u786c\u4ef6\u8981\u6c42"})}),"\n",(0,s.jsx)(n.p,{children:"\u5efa\u8bae\u5728\u5177\u6709 8 \u6838 CPU \u548c 16 GB \u5185\u5b58\u4ee5\u4e0a\u7684\u8ba1\u7b97\u673a\u4e0a\u90e8\u7f72 StarRocks\u3002"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u8f6f\u4ef6\u8981\u6c42"})}),"\n",(0,s.jsx)(n.p,{children:"\u60a8\u9700\u8981\u5728\u8ba1\u7b97\u673a\u4e0a\u5b89\u88c5\u4ee5\u4e0b\u8f6f\u4ef6\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://docs.docker.com/engine/install/",children:"Docker Engine"})," (17.06.0 \u4ee5\u4e0a)"]}),"\n",(0,s.jsx)(n.li,{children:"MySQL \u5ba2\u6237\u7aef (5.5 \u4ee5\u4e0a)"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u7b2c\u4e00\u6b65\u901a\u8fc7-docker-\u955c\u50cf\u90e8\u7f72-starrocks",children:"\u7b2c\u4e00\u6b65\uff1a\u901a\u8fc7 Docker \u955c\u50cf\u90e8\u7f72 StarRocks"}),"\n",(0,s.jsxs)(n.p,{children:["\u4ece ",(0,s.jsx)(n.a,{href:"https://hub.docker.com/r/starrocks/allin1-ubuntu/tags",children:"StarRocks Docker Hub"})," \u4e0b\u8f7d StarRocks Docker \u955c\u50cf\u3002\u60a8\u53ef\u4ee5\u6839\u636e Tag \u9009\u62e9\u7279\u5b9a\u7248\u672c\u7684\u955c\u50cf\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Bash",children:"sudo docker run -p 9030:9030 -p 8030:8030 -p 8040:8040 \\\n    -itd starrocks.docker.scarf.sh/starrocks/allin1-ubuntu\n"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u6545\u969c\u6392\u9664"})}),"\n",(0,s.jsxs)(n.p,{children:["\u5982\u679c\u4e0a\u8ff0\u4efb\u4f55\u7aef\u53e3\u88ab\u5360\u7528\uff0c\u7cfb\u7edf\u4f1a\u6253\u5370\u9519\u8bef\u65e5\u5fd7 \u201cdocker: Error response from daemon: driver failed programming external connectivity on endpoint tender_torvalds (): Bind for 0.0.0.0",(0,s.jsx)(n.div,{})," failed: port is already allocated\u201d\u3002\u60a8\u53ef\u4ee5\u901a\u8fc7\u66f4\u6539\u547d\u4ee4\u4e2d\u5192\u53f7\uff08:\uff09\u4e4b\u524d\u7684\u7aef\u53e3\u5c06\u5176\u4fee\u6539\u4e3a\u4e3b\u673a\u4e0a\u7684\u5176\u4ed6\u53ef\u7528\u7aef\u53e3\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u60a8\u53ef\u4ee5\u901a\u8fc7\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u6765\u68c0\u67e5\u5bb9\u5668\u662f\u5426\u5df2\u521b\u5efa\u5e76\u6b63\u5e38\u8fd0\u884c\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Bash",children:"sudo docker ps\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u5982\u4e0b\u6240\u793a\uff0c\u5982\u679c StarRocks \u5bb9\u5668\u7684 ",(0,s.jsx)(n.code,{children:"STATUS"})," \u4e3a ",(0,s.jsx)(n.code,{children:"Up"}),"\uff0c\u90a3\u4e48\u60a8\u5df2\u6210\u529f\u5728 Docker \u5bb9\u5668\u4e2d\u90e8\u7f72 StarRocks\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plain",children:'CONTAINER ID   IMAGE                                          COMMAND                  CREATED         STATUS                 PORTS                                                                                                                             NAMES\n8962368f9208   starrocks/allin1-ubuntu:branch-3.0-0afb97bbf   "/bin/sh -c ./start_\u2026"   4 minutes ago   Up 4 minutes           0.0.0.0:8037->8030/tcp, :::8037->8030/tcp, 0.0.0.0:8047->8040/tcp, :::8047->8040/tcp, 0.0.0.0:9037->9030/tcp, :::9037->9030/tcp   xxxxx\n'})}),"\n",(0,s.jsx)(n.h2,{id:"\u7b2c\u4e8c\u6b65\u8fde\u63a5-starrocks",children:"\u7b2c\u4e8c\u6b65\uff1a\u8fde\u63a5 StarRocks"}),"\n",(0,s.jsx)(n.p,{children:"\u6210\u529f\u90e8\u7f72\u540e\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7 MySQL \u5ba2\u6237\u7aef\u8fde\u63a5\u8be5 StarRocks \u96c6\u7fa4\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Bash",children:'mysql -P9030 -h127.0.0.1 -uroot --prompt="StarRocks > "\n'})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u6ce8\u610f"})}),"\n",(0,s.jsxs)(n.p,{children:["\u5982\u679c\u60a8\u5728 ",(0,s.jsx)(n.code,{children:"docker run"})," \u547d\u4ee4\u4e2d\u4e3a ",(0,s.jsx)(n.code,{children:"9030"})," \u7aef\u53e3\u5206\u914d\u4e86\u5176\u4ed6\u7aef\u53e3\uff0c\u5219\u5fc5\u987b\u5c06\u4e0a\u8ff0\u547d\u4ee4\u4e2d\u7684 ",(0,s.jsx)(n.code,{children:"9030"})," \u66ff\u6362\u4e3a\u60a8\u6240\u5206\u914d\u7684\u7aef\u53e3\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u60a8\u53ef\u4ee5\u901a\u8fc7\u6267\u884c\u4ee5\u4e0b SQL \u67e5\u770b FE \u8282\u70b9\u7684\u72b6\u6001\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"SHOW PROC '/frontends'\\G\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u793a\u4f8b\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plain",children:"StarRocks > SHOW PROC '/frontends'\\G\n*************************** 1. row ***************************\n             Name: 8962368f9208_9010_1681370634632\n               IP: 8962368f9208\n      EditLogPort: 9010\n         HttpPort: 8030\n        QueryPort: 9030\n          RpcPort: 9020\n             Role: LEADER\n        ClusterId: 555505802\n             Join: true\n            Alive: true\nReplayedJournalId: 99\n    LastHeartbeat: 2023-04-13 07:28:50\n         IsHelper: true\n           ErrMsg: \n        StartTime: 2023-04-13 07:24:11\n          Version: BRANCH-3.0-0afb97bbf\n1 row in set (0.02 sec)\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\u5982\u679c ",(0,s.jsx)(n.code,{children:"Alive"})," \u5b57\u6bb5\u4e3a ",(0,s.jsx)(n.code,{children:"true"}),"\uff0c\u5219\u8be5 FE \u8282\u70b9\u6b63\u5e38\u542f\u52a8\u5e76\u52a0\u5165\u96c6\u7fa4\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:["\u5982\u679c\u5b57\u6bb5 ",(0,s.jsx)(n.code,{children:"Role"})," \u4e3a ",(0,s.jsx)(n.code,{children:"FOLLOWER"}),"\uff0c\u5219\u8be5 FE \u8282\u70b9\u6709\u8d44\u683c\u88ab\u9009\u4e3e\u4e3a Leader FE \u8282\u70b9\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:["\u5982\u679c\u5b57\u6bb5 ",(0,s.jsx)(n.code,{children:"Role"})," \u4e3a ",(0,s.jsx)(n.code,{children:"LEADER"}),"\uff0c\u5219\u8be5 FE \u8282\u70b9\u4e3a Leader FE \u8282\u70b9\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u60a8\u53ef\u4ee5\u901a\u8fc7\u6267\u884c\u4ee5\u4e0b SQL \u67e5\u770b BE \u8282\u70b9\u7684\u72b6\u6001\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"SHOW PROC '/backends'\\G\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u793a\u4f8b\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plain",children:'StarRocks > SHOW PROC \'/backends\'\\G\n*************************** 1. row ***************************\n            BackendId: 10004\n                   IP: 8962368f9208\n        HeartbeatPort: 9050\n               BePort: 9060\n             HttpPort: 8040\n             BrpcPort: 8060\n        LastStartTime: 2023-04-13 07:24:25\n        LastHeartbeat: 2023-04-13 07:29:05\n                Alive: true\n SystemDecommissioned: false\nClusterDecommissioned: false\n            TabletNum: 30\n     DataUsedCapacity: 0.000 \n        AvailCapacity: 527.437 GB\n        TotalCapacity: 1.968 TB\n              UsedPct: 73.83 %\n       MaxDiskUsedPct: 73.83 %\n               ErrMsg: \n              Version: BRANCH-3.0-0afb97bbf\n               Status: {"lastSuccessReportTabletsTime":"2023-04-13 07:28:26"}\n    DataTotalCapacity: 527.437 GB\n          DataUsedPct: 0.00 %\n             CpuCores: 16\n    NumRunningQueries: 0\n           MemUsedPct: 0.02 %\n           CpuUsedPct: 0.1 %\n1 row in set (0.00 sec)\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u5982\u679c ",(0,s.jsx)(n.code,{children:"Alive"})," \u5b57\u6bb5\u4e3a ",(0,s.jsx)(n.code,{children:"true"}),"\uff0c\u5219\u8be5 BE \u8282\u70b9\u6b63\u5e38\u542f\u52a8\u5e76\u52a0\u5165\u96c6\u7fa4\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u505c\u6b62\u5e76\u79fb\u9664-docker-\u5bb9\u5668",children:"\u505c\u6b62\u5e76\u79fb\u9664 Docker \u5bb9\u5668"}),"\n",(0,s.jsx)(n.p,{children:"\u5b8c\u6210\u6574\u4e2a\u5feb\u901f\u5165\u95e8\u6559\u7a0b\u540e\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7 StarRocks \u5bb9\u5668\u7684 ID \u505c\u6b62\u5e76\u5220\u9664\u8be5\u5bb9\u5668\u3002"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u8bf4\u660e"})}),"\n",(0,s.jsxs)(n.p,{children:["\u60a8\u53ef\u4ee5\u901a\u8fc7\u8fd0\u884c ",(0,s.jsx)(n.code,{children:"sudo docker ps"})," \u83b7\u53d6 Docker \u5bb9\u5668\u7684 ",(0,s.jsx)(n.code,{children:"container_id"}),"\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u505c\u6b62\u5bb9\u5668\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Bash",children:"# \u5c06 <container_id> \u66ff\u6362\u4e3a\u60a8 StarRocks \u96c6\u7fa4\u7684\u5bb9\u5668 ID\u3002\nsudo docker stop <container_id>\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u5982\u679c\u60a8\u4e0d\u518d\u9700\u8981\u8be5\u5bb9\u5668\uff0c\u53ef\u4ee5\u901a\u8fc7\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u5c06\u5176\u5220\u9664\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Bash",children:"# \u5c06 <container_id> \u66ff\u6362\u4e3a\u60a8 StarRocks \u96c6\u7fa4\u7684\u5bb9\u5668 ID\u3002\nsudo docker rm <container_id>\n"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u6ce8\u610f"})}),"\n",(0,s.jsx)(n.p,{children:"\u5220\u9664\u5bb9\u5668\u7684\u64cd\u4f5c\u4e0d\u53ef\u9006\u3002\u5220\u9664\u524d\uff0c\u8bf7\u786e\u4fdd\u60a8\u5df2\u5907\u4efd\u4e86\u5bb9\u5668\u4e2d\u7684\u91cd\u8981\u6570\u636e\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u4e0b\u4e00\u6b65",children:"\u4e0b\u4e00\u6b65"}),"\n",(0,s.jsxs)(n.p,{children:["\u6210\u529f\u90e8\u7f72 StarRocks \u540e\uff0c\u60a8\u53ef\u4ee5\u7ee7\u7eed\u5b8c\u6210\u6709\u5173 ",(0,s.jsx)(n.a,{href:"/doc/zh/docs/quick_start/Create_table",children:"\u521b\u5efa\u8868"})," \u548c ",(0,s.jsx)(n.a,{href:"/doc/zh/docs/quick_start/Import_and_query",children:"\u5bfc\u5165\u548c\u67e5\u8be2\u6570\u636e"})," \u7684\u5feb\u901f\u5165\u95e8\u6559\u7a0b\u3002"]})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,c.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(l,e)})):l(e)}},11151:(e,n,r)=>{r.d(n,{Zo:()=>d,ah:()=>t});var s=r(67294);const c=s.createContext({});function t(e){const n=s.useContext(c);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const o={};function d({components:e,children:n,disableParentContext:r}){let d;return d=r?"function"==typeof e?e({}):e||o:t(e),s.createElement(c.Provider,{value:d},n)}}}]);