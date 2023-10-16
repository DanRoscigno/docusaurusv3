"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[87060],{62251:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>t,default:()=>h,frontMatter:()=>c,metadata:()=>i,toc:()=>o});var r=s(85893),l=s(11151);const c={displayed_sidebar:"Chinese"},t="\u89c4\u5212 StarRocks \u96c6\u7fa4",i={id:"deployment/plan_cluster",title:"\u89c4\u5212 StarRocks \u96c6\u7fa4",description:"\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u4e3a\u90e8\u7f72 StarRocks \u751f\u4ea7\u96c6\u7fa4\u89c4\u5212\u8d44\u6e90\u3002\u60a8\u9700\u8981\u4ece\u8282\u70b9\u6570\u3001CPU \u5185\u6838\u6570\u3001\u5185\u5b58\u5927\u5c0f\u548c\u5b58\u50a8\u5927\u5c0f\u7684\u89d2\u5ea6\u89c4\u5212\u60a8\u7684 StarRocks \u96c6\u7fa4\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.1/deployment/plan_cluster.md",sourceDirName:"deployment",slug:"/deployment/plan_cluster",permalink:"/doc/zh/docs/deployment/plan_cluster",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/deployment/plan_cluster.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"Chinese"},sidebar:"Chinese",previous:{title:"\u90e8\u7f72\u524d\u63d0\u6761\u4ef6",permalink:"/doc/zh/docs/deployment/deployment_prerequisites"},next:{title:"\u68c0\u67e5\u73af\u5883\u914d\u7f6e",permalink:"/doc/zh/docs/deployment/environment_configurations"}},d={},o=[{value:"\u8282\u70b9\u6570\u91cf",id:"\u8282\u70b9\u6570\u91cf",level:2},{value:"FE \u8282\u70b9\u6570\u91cf",id:"fe-\u8282\u70b9\u6570\u91cf",level:3},{value:"BE \u8282\u70b9\u6570\u91cf",id:"be-\u8282\u70b9\u6570\u91cf",level:3},{value:"CN \u8282\u70b9\u6570\u91cf",id:"cn-\u8282\u70b9\u6570\u91cf",level:3},{value:"CPU \u548c\u5185\u5b58",id:"cpu-\u548c\u5185\u5b58",level:2},{value:"\u5b58\u50a8\u7a7a\u95f4",id:"\u5b58\u50a8\u7a7a\u95f4",level:2},{value:"FE \u5b58\u50a8",id:"fe-\u5b58\u50a8",level:3},{value:"BE \u5b58\u50a8",id:"be-\u5b58\u50a8",level:3},{value:"\u9884\u4f30 BE \u521d\u59cb\u5b58\u50a8\u7a7a\u95f4",id:"\u9884\u4f30-be-\u521d\u59cb\u5b58\u50a8\u7a7a\u95f4",level:4},{value:"\u968f\u65f6\u6dfb\u52a0\u989d\u5916\u5b58\u50a8\u7a7a\u95f4",id:"\u968f\u65f6\u6dfb\u52a0\u989d\u5916\u5b58\u50a8\u7a7a\u95f4",level:4}];function a(e){const n=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",strong:"strong",h4:"h4",pre:"pre",code:"code",ul:"ul",li:"li",a:"a"},(0,l.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"\u89c4\u5212-starrocks-\u96c6\u7fa4",children:"\u89c4\u5212 StarRocks \u96c6\u7fa4"}),"\n",(0,r.jsx)(n.p,{children:"\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u4e3a\u90e8\u7f72 StarRocks \u751f\u4ea7\u96c6\u7fa4\u89c4\u5212\u8d44\u6e90\u3002\u60a8\u9700\u8981\u4ece\u8282\u70b9\u6570\u3001CPU \u5185\u6838\u6570\u3001\u5185\u5b58\u5927\u5c0f\u548c\u5b58\u50a8\u5927\u5c0f\u7684\u89d2\u5ea6\u89c4\u5212\u60a8\u7684 StarRocks \u96c6\u7fa4\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u8282\u70b9\u6570\u91cf",children:"\u8282\u70b9\u6570\u91cf"}),"\n",(0,r.jsx)(n.p,{children:"StarRocks \u4e3b\u8981\u7531\u4e24\u79cd\u7c7b\u578b\u7684\u7ec4\u4ef6\u7ec4\u6210\uff1aFE \u8282\u70b9\u548c BE \u8282\u70b9\u3002\u6bcf\u4e2a\u8282\u70b9\u5fc5\u987b\u5355\u72ec\u90e8\u7f72\u5728\u7269\u7406\u673a\u6216\u865a\u62df\u673a\u4e0a\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"fe-\u8282\u70b9\u6570\u91cf",children:"FE \u8282\u70b9\u6570\u91cf"}),"\n",(0,r.jsx)(n.p,{children:"FE \u8282\u70b9\u4e3b\u8981\u8d1f\u8d23\u5143\u6570\u636e\u7ba1\u7406\u3001\u5ba2\u6237\u7aef\u8fde\u63a5\u7ba1\u7406\u3001\u67e5\u8be2\u8ba1\u5212\u548c\u67e5\u8be2\u8c03\u5ea6\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["\u5bf9\u4e8e StarRocks \u751f\u4ea7\u96c6\u7fa4\uff0c\u5efa\u8bae\u60a8\u81f3\u5c11\u90e8\u7f72",(0,r.jsx)(n.strong,{children:"\u4e09\u4e2a"})," Follower FE \u8282\u70b9\uff0c\u4ee5\u9632\u6b62\u5355\u70b9\u6545\u969c\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"StarRocks \u901a\u8fc7 BDB JE \u534f\u8bae\u8de8 FE \u8282\u70b9\u7ba1\u7406\u5143\u6570\u636e\u3002StarRocks \u4ece\u6240\u6709 Follower FE \u8282\u70b9\u4e2d\u9009\u51fa\u4e00\u4e2a Leader FE \u8282\u70b9\u3002\u53ea\u6709 Leader FE \u8282\u70b9\u53ef\u4ee5\u5199\u5165\u5143\u6570\u636e\uff0c\u5176\u4ed6 Follower FE \u8282\u70b9\u53ea\u80fd\u6839\u636e Leader FE \u8282\u70b9\u7684\u65e5\u5fd7\u66f4\u65b0\u5143\u6570\u636e\u3002\u5982\u679c Leader FE \u8282\u70b9\u6389\u7ebf\uff0c\u53ea\u8981\u8d85\u8fc7\u534a\u6570\u7684 Follower FE \u8282\u70b9\u5b58\u6d3b\uff0cStarRocks \u5c31\u4f1a\u91cd\u65b0\u9009\u4e3e\u51fa\u4e00\u4e2a\u65b0\u7684 Leader FE \u8282\u70b9\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u5982\u679c\u60a8\u7684\u5e94\u7528\u7a0b\u5e8f\u4f1a\u4ea7\u751f\u9ad8\u5e76\u53d1\u67e5\u8be2\u8bf7\u6c42\uff0c\u60a8\u53ef\u4ee5\u5728\u96c6\u7fa4\u4e2d\u6dfb\u52a0 Observer FE \u8282\u70b9\u3002Observer FE \u8282\u70b9\u53ea\u8d1f\u8d23\u5904\u7406\u67e5\u8be2\u8bf7\u6c42\uff0c\u4e0d\u4f1a\u53c2\u4e0e Leader FE \u8282\u70b9\u7684\u9009\u4e3e\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"be-\u8282\u70b9\u6570\u91cf",children:"BE \u8282\u70b9\u6570\u91cf"}),"\n",(0,r.jsx)(n.p,{children:"BE \u8282\u70b9\u8d1f\u8d23\u6570\u636e\u5b58\u50a8\u548c SQL \u6267\u884c\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u5bf9\u4e8e StarRocks \u751f\u4ea7\u96c6\u7fa4\uff0c\u5efa\u8bae\u60a8\u81f3\u5c11\u90e8\u7f72\u4e09\u4e2a BE \u8282\u70b9\uff0c\u8fd9\u4e9b\u8282\u70b9\u4f1a\u81ea\u52a8\u5f62\u6210\u4e00\u4e2a BE \u9ad8\u53ef\u7528\u96c6\u7fa4\uff0c\u907f\u514d\u7531\u4e8e\u53d1\u751f\u5355\u70b9\u6545\u969c\u800c\u5f71\u54cd\u6570\u636e\u53ef\u9760\u6027\u548c\u670d\u52a1\u53ef\u7528\u6027\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u60a8\u53ef\u4ee5\u901a\u8fc7\u589e\u52a0 BE \u8282\u70b9\u7684\u6570\u91cf\u6765\u5b9e\u73b0\u67e5\u8be2\u7684\u9ad8\u5e76\u53d1\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"cn-\u8282\u70b9\u6570\u91cf",children:"CN \u8282\u70b9\u6570\u91cf"}),"\n",(0,r.jsx)(n.p,{children:"CN \u8282\u70b9\u662f StarRocks \u7684\u53ef\u9009\u7ec4\u4ef6\uff0c\u4ec5\u8d1f\u8d23 SQL \u6267\u884c\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u60a8\u53ef\u4ee5\u901a\u8fc7\u589e\u52a0 CN \u8282\u70b9\u6570\u91cf\u4ee5\u5f39\u6027\u6269\u5c55\u8ba1\u7b97\u8d44\u6e90\uff0c\u800c\u65e0\u9700\u6539\u53d8\u96c6\u7fa4\u4e2d\u7684\u6570\u636e\u5206\u5e03\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"cpu-\u548c\u5185\u5b58",children:"CPU \u548c\u5185\u5b58"}),"\n",(0,r.jsx)(n.p,{children:"\u901a\u5e38\uff0cFE \u670d\u52a1\u4e0d\u4f1a\u6d88\u8017\u5927\u91cf\u7684 CPU \u548c\u5185\u5b58\u8d44\u6e90\u3002\u5efa\u8bae\u60a8\u4e3a\u6bcf\u4e2a FE \u8282\u70b9\u5206\u914d 8 \u4e2a CPU \u5185\u6838\u548c 16 GB RAM\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u4e0e FE \u670d\u52a1\u4e0d\u540c\uff0c\u5982\u679c\u60a8\u7684\u5e94\u7528\u7a0b\u5e8f\u9700\u8981\u5728\u5927\u578b\u6570\u636e\u96c6\u4e0a\u5904\u7406\u9ad8\u5ea6\u5e76\u53d1\u6216\u590d\u6742\u7684\u67e5\u8be2\uff0cBE \u670d\u52a1\u53ef\u80fd\u4f1a\u4f7f\u7528\u5927\u91cf CPU \u548c\u5185\u5b58\u8d44\u6e90\u3002\u56e0\u6b64\uff0c\u5efa\u8bae\u60a8\u4e3a\u6bcf\u4e2a BE \u8282\u70b9\u5206\u914d 16 \u4e2a CPU \u5185\u6838\u548c 64 GB RAM\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u5b58\u50a8\u7a7a\u95f4",children:"\u5b58\u50a8\u7a7a\u95f4"}),"\n",(0,r.jsx)(n.h3,{id:"fe-\u5b58\u50a8",children:"FE \u5b58\u50a8"}),"\n",(0,r.jsx)(n.p,{children:"\u7531\u4e8e FE \u8282\u70b9\u4ec5\u5728\u5176\u5b58\u50a8\u4e2d\u7ef4\u62a4 StarRocks \u7684\u5143\u6570\u636e\uff0c\u56e0\u6b64\u5728\u5927\u591a\u6570\u573a\u666f\u4e0b\uff0c\u6bcf\u4e2a FE \u8282\u70b9\u53ea\u9700\u8981 100 GB \u7684 HDD \u5b58\u50a8\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"be-\u5b58\u50a8",children:"BE \u5b58\u50a8"}),"\n",(0,r.jsx)(n.h4,{id:"\u9884\u4f30-be-\u521d\u59cb\u5b58\u50a8\u7a7a\u95f4",children:"\u9884\u4f30 BE \u521d\u59cb\u5b58\u50a8\u7a7a\u95f4"}),"\n",(0,r.jsx)(n.p,{children:"StarRocks \u96c6\u7fa4\u9700\u8981\u7684\u603b\u5b58\u50a8\u7a7a\u95f4\u540c\u65f6\u53d7\u5230\u539f\u59cb\u6570\u636e\u5927\u5c0f\u3001\u6570\u636e\u526f\u672c\u6570\u4ee5\u53ca\u4f7f\u7528\u7684\u6570\u636e\u538b\u7f29\u7b97\u6cd5\u7684\u538b\u7f29\u6bd4\u7684\u5f71\u54cd\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u60a8\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u516c\u5f0f\u4f30\u7b97\u6240\u6709 BE \u8282\u70b9\u6240\u9700\u7684\u603b\u5b58\u50a8\u7a7a\u95f4\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Plain",children:"BE \u8282\u70b9\u6240\u9700\u7684\u603b\u5b58\u50a8\u7a7a\u95f4 = \u539f\u59cb\u6570\u636e\u5927\u5c0f * \u6570\u636e\u526f\u672c\u6570/\u6570\u636e\u538b\u7f29\u7b97\u6cd5\u538b\u7f29\u6bd4\n\n\u539f\u59cb\u6570\u636e\u5927\u5c0f = \u5355\u884c\u6570\u636e\u5927\u5c0f * \u603b\u6570\u636e\u884c\u6570\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u5728 StarRocks \u4e2d\uff0c\u4e00\u4e2a\u8868\u4e2d\u7684\u6570\u636e\u9996\u5148\u88ab\u5212\u5206\u4e3a\u591a\u4e2a\u5206\u533a\uff08Partition\uff09\uff0c\u7136\u540e\u8fdb\u4e00\u6b65\u88ab\u5212\u5206\u4e3a\u591a\u4e2a Tablet\u3002Tablet \u662f StarRocks \u4e2d\u57fa\u672c\u6570\u636e\u7ba1\u7406\u903b\u8f91\u5355\u5143\u3002\u4e3a\u4fdd\u8bc1\u6570\u636e\u7684\u9ad8\u53ef\u9760\u6027\uff0c\u60a8\u53ef\u4ee5\u4e3a\u6bcf\u4e2a Tablet \u7ef4\u62a4\u591a\u4e2a\u526f\u672c\uff0c\u5b58\u50a8\u4e8e\u4e0d\u540c\u7684 BE \u8282\u70b9\u3002StarRocks \u9ed8\u8ba4\u7ef4\u62a4\u4e09\u4e2a\u526f\u672c\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u76ee\u524d\uff0cStarRocks \u652f\u6301\u56db\u79cd\u6570\u636e\u538b\u7f29\u7b97\u6cd5\uff1azlib\u3001Zstandard\uff08\u6216 zstd\uff09\u3001LZ4 \u548c Snappy\uff08\u6309\u538b\u7f29\u6bd4\u4ece\u9ad8\u81f3\u4f4e\u6392\u5217\uff09\u3002\u8fd9\u4e9b\u6570\u636e\u538b\u7f29\u7b97\u6cd5\u53ef\u4ee5\u63d0\u4f9b 3:1 \u5230 5:1 \u7684\u538b\u7f29\u6bd4\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u901a\u8fc7\u8ba1\u7b97\u5f97\u5230\u603b\u5b58\u50a8\u7a7a\u95f4\u540e\uff0c\u4f60\u53ef\u4ee5\u7b80\u5355\u5730\u5c06\u4e4b\u9664\u4ee5\u96c6\u7fa4\u4e2d\u7684 BE \u8282\u70b9\u6570\uff0c\u4f30\u7b97\u51fa\u6bcf\u4e2a BE \u8282\u70b9\u6240\u9700\u7684\u5e73\u5747\u5b58\u50a8\u7a7a\u95f4\u3002"}),"\n",(0,r.jsx)(n.h4,{id:"\u968f\u65f6\u6dfb\u52a0\u989d\u5916\u5b58\u50a8\u7a7a\u95f4",children:"\u968f\u65f6\u6dfb\u52a0\u989d\u5916\u5b58\u50a8\u7a7a\u95f4"}),"\n",(0,r.jsx)(n.p,{children:"\u5982\u679c BE \u5b58\u50a8\u7a7a\u95f4\u968f\u7740\u539f\u59cb\u6570\u636e\u7684\u589e\u957f\u800c\u8017\u5c3d\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7\u5782\u76f4\u6216\u6c34\u5e73\u6269\u5c55\u96c6\u7fa4\u6216\u6269\u5c55\u4e91\u5b58\u50a8\u4ee5\u8865\u5145\u5b58\u50a8\u7a7a\u95f4\u3002"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u5728 StarRocks \u96c6\u7fa4\u4e2d\u6dfb\u52a0\u65b0\u7684 BE \u8282\u70b9"}),"\n",(0,r.jsxs)(n.p,{children:["\u60a8\u53ef\u4ee5\u5728 StarRocks \u96c6\u7fa4\u4e2d\u6dfb\u52a0\u65b0\u7684 BE \u8282\u70b9\uff0c\u4ece\u800c\u5c06\u6570\u636e\u91cd\u65b0\u5e73\u5206\u81f3\u66f4\u591a\u8282\u70b9\u4e0a\u3002\u6709\u5173\u8be6\u7ec6\u8bf4\u660e\uff0c\u8bf7\u53c2\u9605 ",(0,r.jsx)(n.a,{href:"/doc/zh/docs/administration/Scale_up_down",children:"\u6269\u5bb9 StarRocks - \u6269\u5bb9 BE \u96c6\u7fa4"}),"\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u6dfb\u52a0\u65b0\u7684 BE \u8282\u70b9\u540e\uff0cStarRocks \u4f1a\u81ea\u52a8\u91cd\u65b0\u5e73\u8861\u6570\u636e\u5728\u6240\u6709 BE \u8282\u70b9\u4e4b\u95f4\u7684\u5206\u5e03\u3002\u6240\u6709\u6570\u636e\u6a21\u578b\u5747\u652f\u6301\u8fd9\u79cd\u81ea\u52a8\u5e73\u8861\u3002"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u5728 BE \u8282\u70b9\u4e0a\u6dfb\u52a0\u989d\u5916\u7684\u5b58\u50a8\u5377"}),"\n",(0,r.jsxs)(n.p,{children:["\u60a8\u8fd8\u53ef\u4ee5\u5728\u5df2\u6709 BE \u8282\u70b9\u4e0a\u6dfb\u52a0\u989d\u5916\u7684\u5b58\u50a8\u5377\u3002\u6709\u5173\u8be6\u7ec6\u8bf4\u660e\uff0c\u8bf7\u53c2\u9605 ",(0,r.jsx)(n.a,{href:"/doc/zh/docs/administration/Scale_up_down",children:"\u6269\u5bb9 StarRocks - \u6269\u5bb9 BE \u96c6\u7fa4"}),"\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u6dfb\u52a0\u989d\u5916\u7684\u5b58\u50a8\u5377\u540e\uff0cStarRocks \u4f1a\u81ea\u52a8\u91cd\u65b0\u5e73\u8861\u9664\u4e3b\u952e\u6a21\u578b\u8868\u5916\u6240\u6709\u6570\u636e\u6a21\u578b\u8868\u4e2d\u7684\u6570\u636e\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u4e3b\u952e\u6a21\u578b\u8868\u7684\u6570\u636e\u5728\u8282\u70b9\u4e4b\u95f4\u7684\u5206\u5e03\u53ef\u80fd\u4e0d\u5e73\u8861\uff0c\u8fdb\u800c\u5bfc\u81f4\u67e5\u8be2\u7f13\u6162\u3002\u56e0\u6b64\uff0c\u5982\u679c\u60a8\u7684 StarRocks \u96c6\u7fa4\u5305\u542b\u4e3b\u952e\u8868\uff0c\u5219\u4e0d\u5efa\u8bae\u5411\u5df2\u6709 BE \u8282\u70b9\u6dfb\u52a0\u989d\u5916\u7684\u5b58\u50a8\u5377\u3002"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u6dfb\u52a0\u4e91\u5b58\u50a8\u7a7a\u95f4"}),"\n",(0,r.jsx)(n.p,{children:"\u5982\u679c\u60a8\u7684 StarRocks \u96c6\u7fa4\u90e8\u7f72\u5728\u4e91\u7aef\uff0c\u60a8\u53ef\u4ee5\u6309\u9700\u6269\u5c55\u60a8\u7684\u4e91\u5b58\u50a8\u3002\u8bf7\u8054\u7cfb\u60a8\u7684\u4e91\u63d0\u4f9b\u5546\u4ee5\u83b7\u53d6\u8be6\u7ec6\u8bf4\u660e\u3002"}),"\n"]}),"\n"]})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,l.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(a,e)})):a(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>i,ah:()=>c});var r=s(67294);const l=r.createContext({});function c(e){const n=r.useContext(l);return r.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const t={};function i({components:e,children:n,disableParentContext:s}){let i;return i=s?"function"==typeof e?e({}):e||t:c(e),r.createElement(l.Provider,{value:i},n)}}}]);