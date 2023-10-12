"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[10630],{12134:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>c,metadata:()=>d,toc:()=>t});var r=s(85893),l=s(11151);const c={},i="\u90e8\u7f72 FE \u9ad8\u53ef\u7528\u96c6\u7fa4",d={id:"administration/Deployment",title:"\u90e8\u7f72 FE \u9ad8\u53ef\u7528\u96c6\u7fa4",description:"\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u90e8\u7f72 StarRocks \u96c6\u7fa4 FE \u8282\u70b9\u9ad8\u53ef\u7528\u96c6\u7fa4\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.0/administration/Deployment.md",sourceDirName:"administration",slug:"/administration/Deployment",permalink:"/doc/zh/docs/3.0/administration/Deployment",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/administration/Deployment.md",tags:[],version:"3.0",frontMatter:{}},o={},t=[{value:"\u4e0b\u8f7d\u5e76\u914d\u7f6e\u65b0 FE \u8282\u70b9",id:"\u4e0b\u8f7d\u5e76\u914d\u7f6e\u65b0-fe-\u8282\u70b9",level:2},{value:"\u6dfb\u52a0\u65b0 FE \u8282\u70b9",id:"\u6dfb\u52a0\u65b0-fe-\u8282\u70b9",level:2},{value:"\u8fde\u63a5 FE \u8282\u70b9",id:"\u8fde\u63a5-fe-\u8282\u70b9",level:2},{value:"\u786e\u8ba4 FE \u96c6\u7fa4\u90e8\u7f72\u6210\u529f",id:"\u786e\u8ba4-fe-\u96c6\u7fa4\u90e8\u7f72\u6210\u529f",level:2}];function a(e){const n=Object.assign({h1:"h1",p:"p",blockquote:"blockquote",ul:"ul",li:"li",strong:"strong",code:"code",h2:"h2",a:"a",pre:"pre"},(0,l.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"\u90e8\u7f72-fe-\u9ad8\u53ef\u7528\u96c6\u7fa4",children:"\u90e8\u7f72 FE \u9ad8\u53ef\u7528\u96c6\u7fa4"}),"\n",(0,r.jsx)(n.p,{children:"\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u90e8\u7f72 StarRocks \u96c6\u7fa4 FE \u8282\u70b9\u9ad8\u53ef\u7528\u96c6\u7fa4\u3002"}),"\n",(0,r.jsx)(n.p,{children:"FE \u7684\u9ad8\u53ef\u7528\u96c6\u7fa4\u91c7\u7528\u4e3b\u4ece\u590d\u5236\u67b6\u6784\uff0c\u53ef\u907f\u514d FE \u5355\u70b9\u6545\u969c\u3002FE \u91c7\u7528\u4e86\u7c7b Paxos \u7684 Berkeley DB Java Edition\uff08BDBJE\uff09\u534f\u8bae\u5b8c\u6210\u9009\u4e3b\uff0c\u65e5\u5fd7\u590d\u5236\u548c\u6545\u969c\u5207\u6362\u3002\u5728 FE \u96c6\u7fa4\u4e2d\uff0c\u591a\u5b9e\u4f8b\u5206\u4e3a\u4e24\u79cd\u89d2\u8272\uff1aFollower \u548c Observer\u3002\u524d\u8005\u4e3a\u590d\u5236\u534f\u8bae\u7684\u53ef\u6295\u7968\u6210\u5458\uff0c\u53c2\u4e0e\u9009\u4e3b\u548c\u63d0\u4ea4\u65e5\u5fd7\uff0c\u4e00\u822c\u6570\u91cf\u4e3a\u5947\u6570\uff082n+1\uff09\uff0c\u4f7f\u7528\u591a\u6570\u6d3e\uff08n+1\uff09\u786e\u8ba4\uff0c\u53ef\u5bb9\u5fcd\u5c11\u6570\u6d3e\uff08n\uff09\u6545\u969c\uff1b\u540e\u8005\u5c5e\u4e8e\u975e\u6295\u7968\u6210\u5458\uff0c\u7528\u4e8e\u5f02\u6b65\u8ba2\u9605\u590d\u5236\u65e5\u5fd7\uff0cObserver \u7684\u72b6\u6001\u843d\u540e\u4e8e Follower\uff0c\u7c7b\u4f3c\u5176\u4ed6\u590d\u5236\u534f\u8bae\u4e2d\u7684 Learner \u89d2\u8272\u3002"}),"\n",(0,r.jsx)(n.p,{children:"FE \u96c6\u7fa4\u4ece Follower \u4e2d\u81ea\u52a8\u9009\u51fa Leader \u8282\u70b9\uff0c\u6240\u6709\u66f4\u6539\u72b6\u6001\u64cd\u4f5c\u90fd\u7531 Leader \u8282\u70b9\u6267\u884c\u3002\u6700\u65b0\u72b6\u6001\u53ef\u4ee5\u4ece Leader FE \u8282\u70b9\u8bfb\u53d6\u3002\u66f4\u6539\u64cd\u4f5c\u53ef\u4ee5\u7531\u975e Leader \u8282\u70b9\u53d1\u8d77\uff0c\u7ee7\u800c\u8f6c\u53d1\u7ed9 Leader \u8282\u70b9\u6267\u884c\uff0c\u975e Leader \u8282\u70b9\u5728\u590d\u5236\u65e5\u5fd7\u4e2d\u7684 LSN \u8bb0\u5f55\u6700\u8fd1\u4e00\u6b21\u66f4\u6539\u64cd\u4f5c\u3002\u8bfb\u64cd\u4f5c\u53ef\u4ee5\u76f4\u63a5\u5728\u975e Leader \u8282\u70b9\u4e0a\u6267\u884c\uff0c\u4f46\u9700\u8981\u7b49\u5f85\u975e Leader \u8282\u70b9\u7684\u72b6\u6001\u5df2\u7ecf\u540c\u6b65\u5230\u6700\u8fd1\u4e00\u6b21\u66f4\u6539\u64cd\u4f5c\u7684 LSN\uff0c\u56e0\u6b64\u975e Leader \u8282\u70b9\u7684\u8bfb\u5199\u64cd\u4f5c\u6ee1\u8db3\u987a\u5e8f\u4e00\u81f4\u6027\u3002Observer \u8282\u70b9\u80fd\u591f\u589e\u52a0 FE \u96c6\u7fa4\u7684\u8bfb\u8d1f\u8f7d\u80fd\u529b\uff0c\u5bf9\u65f6\u6548\u6027\u8981\u6c42\u653e\u5bbd\u7684\u975e\u7d27\u8981\u7528\u6237\u53ef\u4ee5\u9009\u62e9\u8bfb Observer \u8282\u70b9\u3002"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"\u6ce8\u610f"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["FE \u8282\u70b9\u4e4b\u95f4\u7684\u65f6\u949f\u76f8\u5dee",(0,r.jsx)(n.strong,{children:"\u4e0d\u80fd\u8d85\u8fc7 5s"}),"\u3002\u5982\u679c\u8282\u70b9\u4e4b\u95f4\u5b58\u5728\u8f83\u5927\u65f6\u949f\u5dee\uff0c\u8bf7\u4f7f\u7528 NTP \u534f\u8bae\u6821\u51c6\u65f6\u95f4\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:["\u6240\u6709 FE \u8282\u70b9\u7684 ",(0,r.jsx)(n.code,{children:"http_port"})," \u9700\u4fdd\u6301\u76f8\u540c\uff0c\u56e0\u6b64\u4e00\u53f0\u673a\u5668\u65e0\u6cd5\u9519\u5f00\u7aef\u53e3\u90e8\u7f72\u67d0\u4e2a\u96c6\u7fa4\u7684\u591a\u4e2a FE \u8282\u70b9\u3002"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u4e0b\u8f7d\u5e76\u914d\u7f6e\u65b0-fe-\u8282\u70b9",children:"\u4e0b\u8f7d\u5e76\u914d\u7f6e\u65b0 FE \u8282\u70b9"}),"\n",(0,r.jsxs)(n.p,{children:["\u8be6\u7ec6\u64cd\u4f5c\u8bf7\u53c2\u8003 ",(0,r.jsx)(n.a,{href:"/doc/zh/docs/3.0/deployment/deploy_manually",children:"\u624b\u52a8\u90e8\u7f72 StarRocks FE \u8282\u70b9"}),"\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u6dfb\u52a0\u65b0-fe-\u8282\u70b9",children:"\u6dfb\u52a0\u65b0 FE \u8282\u70b9"}),"\n",(0,r.jsx)(n.p,{children:"\u4f7f\u7528 MySQL \u5ba2\u6237\u7aef\u8fde\u63a5\u5df2\u6709 FE \u8282\u70b9\uff0c\u6dfb\u52a0\u65b0 FE \u8282\u70b9\u7684\u4fe1\u606f\uff0c\u5305\u62ec\u89d2\u8272\u3001IP \u5730\u5740\u3001\u4ee5\u53ca Port\u3002"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u6dfb\u52a0 Follower FE \u8282\u70b9\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:'ALTER SYSTEM ADD FOLLOWER "host:port";\n'})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u6dfb\u52a0 Observer FE  \u8282\u70b9\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:'ALTER SYSTEM ADD OBSERVER "host:port";\n'})}),"\n",(0,r.jsx)(n.p,{children:"\u53c2\u6570\uff1a"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"host"}),"\uff1a\u673a\u5668\u7684 IP \u5730\u5740\u3002\u5982\u679c\u673a\u5668\u5b58\u5728\u591a\u4e2a IP \u5730\u5740\uff0c\u5219\u8be5\u9879\u4e3a ",(0,r.jsx)(n.code,{children:"priority_networks"})," \u8bbe\u7f6e\u9879\u4e0b\u8bbe\u5b9a\u7684\u552f\u4e00\u901a\u4fe1 IP \u5730\u5740\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"port"}),"\uff1a",(0,r.jsx)(n.code,{children:"edit_log_port"})," \u8bbe\u7f6e\u9879\u4e0b\u8bbe\u5b9a\u7684\u7aef\u53e3\uff0c\u9ed8\u8ba4\u4e3a ",(0,r.jsx)(n.code,{children:"9010"}),"\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["\u51fa\u4e8e\u5b89\u5168\u8003\u8651\uff0cStarRocks \u7684 FE \u8282\u70b9\u548c BE \u8282\u70b9\u53ea\u4f1a\u76d1\u542c\u4e00\u4e2a IP \u5730\u5740\u8fdb\u884c\u901a\u4fe1\u3002\u5982\u679c\u4e00\u53f0\u673a\u5668\u6709\u591a\u5757\u7f51\u5361\uff0cStarRocks \u6709\u53ef\u80fd\u65e0\u6cd5\u81ea\u52a8\u627e\u5230\u6b63\u786e\u7684 IP \u5730\u5740\u3002\u4f8b\u5982\uff0c\u901a\u8fc7 ",(0,r.jsx)(n.code,{children:"ifconfig"})," \u547d\u4ee4\u67e5\u770b\u5230 ",(0,r.jsx)(n.code,{children:"eth0"})," IP \u5730\u5740\u4e3a ",(0,r.jsx)(n.code,{children:"192.168.1.1"}),"\uff0c",(0,r.jsx)(n.code,{children:"docker0"})," IP \u5730\u5740\u4e3a ",(0,r.jsx)(n.code,{children:"172.17.0.1"}),"\uff0c\u60a8\u53ef\u4ee5\u8bbe\u7f6e ",(0,r.jsx)(n.code,{children:"192.168.1.0/24"})," \u5b50\u7f51\u4ee5\u6307\u5b9a\u4f7f\u7528 ",(0,r.jsx)(n.code,{children:"eth0"})," \u4f5c\u4e3a\u901a\u4fe1 IP\u3002\u6b64\u5904\u91c7\u7528 ",(0,r.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing",children:"CIDR"})," \u7684\u8868\u793a\u65b9\u6cd5\u6765\u6307\u5b9a IP \u6240\u5728\u5b50\u7f51\u8303\u56f4\uff0c\u4ee5\u4fbf\u5728\u6240\u6709\u7684 BE \u53ca FE \u8282\u70b9\u4e0a\u4f7f\u7528\u76f8\u540c\u7684\u914d\u7f6e\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u5982\u51fa\u73b0\u9519\u8bef\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7\u547d\u4ee4\u5220\u9664\u76f8\u5e94 FE \u8282\u70b9\u3002"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u5220\u9664 Follower FE \u8282\u70b9\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:'ALTER SYSTEM DROP FOLLOWER "host:port";\n'})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u5220\u9664 Observer FE  \u8282\u70b9\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:'ALTER SYSTEM drop OBSERVER "host:port";\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u5177\u4f53\u64cd\u4f5c\u53c2\u8003",(0,r.jsx)(n.a,{href:"/doc/zh/docs/3.0/administration/Scale_up_down",children:"\u6269\u5bb9\u7f29\u5bb9"}),"\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u8fde\u63a5-fe-\u8282\u70b9",children:"\u8fde\u63a5 FE \u8282\u70b9"}),"\n",(0,r.jsxs)(n.p,{children:["FE \u8282\u70b9\u9700\u4e24\u4e24\u4e4b\u95f4\u5efa\u7acb\u901a\u4fe1\u8fde\u63a5\u65b9\u53ef\u5b9e\u73b0\u590d\u5236\u534f\u8bae\u9009\u4e3b\uff0c\u6295\u7968\uff0c\u65e5\u5fd7\u63d0\u4ea4\u548c\u590d\u5236\u7b49\u529f\u80fd\u3002\u5f53\u65b0\u7684FE\u8282\u70b9",(0,r.jsx)(n.strong,{children:"\u9996\u6b21"}),"\u88ab\u6dfb\u52a0\u5230\u5df2\u6709\u96c6\u7fa4\u5e76\u542f\u52a8\u65f6\uff0c\u60a8\u9700\u8981\u6307\u5b9a\u96c6\u7fa4\u4e2d\u73b0\u6709\u7684\u4e00\u4e2a\u8282\u70b9\u4f5c\u4e3a helper \u8282\u70b9\uff0c\u5e76\u4ece\u8be5\u8282\u70b9\u83b7\u5f97\u96c6\u7fa4\u7684\u6240\u6709 FE \u8282\u70b9\u7684\u914d\u7f6e\u4fe1\u606f\uff0c\u624d\u80fd\u5efa\u7acb\u901a\u4fe1\u8fde\u63a5\u3002\u56e0\u6b64\uff0c\u5728\u9996\u6b21\u542f\u52a8\u65b0 FE \u8282\u70b9\u65f6\u5019\uff0c\u60a8\u9700\u8981\u901a\u8fc7\u547d\u4ee4\u884c\u6307\u5b9a ",(0,r.jsx)(n.code,{children:"--helper"})," \u53c2\u6570\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"./bin/start_fe.sh --helper host:port --daemon\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u53c2\u6570\uff1a"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"host"}),"\uff1a\u673a\u5668\u7684IP \u5730\u5740\u3002\u5982\u679c\u673a\u5668\u5b58\u5728\u591a\u4e2a IP \u5730\u5740\uff0c\u5219\u8be5\u9879\u4e3a ",(0,r.jsx)(n.code,{children:"priority_networks"})," \u8bbe\u7f6e\u9879\u4e0b\u8bbe\u5b9a\u7684\u552f\u4e00\u901a\u4fe1 IP \u5730\u5740\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"port"}),"\uff1a",(0,r.jsx)(n.code,{children:"edit_log_port"})," \u8bbe\u7f6e\u9879\u4e0b\u8bbe\u5b9a\u7684\u7aef\u53e3\uff0c\u9ed8\u8ba4\u4e3a ",(0,r.jsx)(n.code,{children:"9010"}),"\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u786e\u8ba4-fe-\u96c6\u7fa4\u90e8\u7f72\u6210\u529f",children:"\u786e\u8ba4 FE \u96c6\u7fa4\u90e8\u7f72\u6210\u529f"}),"\n",(0,r.jsx)(n.p,{children:"\u67e5\u770b\u96c6\u7fa4\u72b6\u6001\uff0c\u786e\u8ba4\u90e8\u7f72\u6210\u529f\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SHOW PROC '/frontends'\\G\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u4ee5\u4e0b\u793a\u4f8b\u4e2d\uff0c",(0,r.jsx)(n.code,{children:"172.26.108.172_9010_1584965098874"})," \u4e3a\u4e3b FE \u8282\u70b9\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"mysql> SHOW PROC '/frontends'\\G\n\n********************* 1. row **********************\n    Name: 172.26.108.172_9010_1584965098874\n      IP: 172.26.108.172\nHostName: starrocks-sandbox01\n......\n    Role: LEADER\n......\n   Alive: true\n......\n********************* 2. row **********************\n    Name: 172.26.108.174_9010_1584965098874\n      IP: 172.26.108.174\nHostName: starrocks-sandbox02\n......\n    Role: FOLLOWER\n......\n   Alive: true\n......\n********************* 3. row **********************\n    Name: 172.26.108.175_9010_1584965098874\n      IP: 172.26.108.175\nHostName: starrocks-sandbox03\n......\n    Role: FOLLOWER\n......\n   Alive: true\n......\n3 rows in set (0.05 sec)\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u8282\u70b9\u7684 ",(0,r.jsx)(n.code,{children:"Alive"})," \u9879\u4e3a ",(0,r.jsx)(n.code,{children:"true"})," \u65f6\uff0c\u6dfb\u52a0\u8282\u70b9\u6210\u529f\u3002"]})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,l.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(a,e)})):a(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>d,ah:()=>c});var r=s(67294);const l=r.createContext({});function c(e){const n=r.useContext(l);return r.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const i={};function d({components:e,children:n,disableParentContext:s}){let d;return d=s?"function"==typeof e?e({}):e||i:c(e),r.createElement(l.Provider,{value:d},n)}}}]);