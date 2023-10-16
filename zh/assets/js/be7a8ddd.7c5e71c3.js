"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[677],{49028:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var n=s(85893),r=s(11151);const a={displayed_sidebar:"Chinese"},i="\u4ea7\u54c1\u7279\u6027",c={id:"introduction/Features",title:"\u4ea7\u54c1\u7279\u6027",description:"MPP \u5206\u5e03\u5f0f\u6267\u884c\u6846\u67b6",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.5/introduction/Features.md",sourceDirName:"introduction",slug:"/introduction/Features",permalink:"/doc/zh/docs/2.5/introduction/Features",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/introduction/Features.md",tags:[],version:"2.5",frontMatter:{displayed_sidebar:"Chinese"},sidebar:"Chinese",previous:{title:"\u7cfb\u7edf\u67b6\u6784",permalink:"/doc/zh/docs/2.5/introduction/Architecture"},next:{title:"StarRocks_intro",permalink:"/doc/zh/docs/2.5/introduction/StarRocks_intro"}},o={},d=[{value:"MPP \u5206\u5e03\u5f0f\u6267\u884c\u6846\u67b6",id:"mpp-\u5206\u5e03\u5f0f\u6267\u884c\u6846\u67b6",level:2},{value:"\u5168\u9762\u5411\u91cf\u5316\u6267\u884c\u5f15\u64ce",id:"\u5168\u9762\u5411\u91cf\u5316\u6267\u884c\u5f15\u64ce",level:2},{value:"CBO \u4f18\u5316\u5668",id:"cbo-\u4f18\u5316\u5668",level:2},{value:"\u53ef\u5b9e\u65f6\u66f4\u65b0\u7684\u5217\u5f0f\u5b58\u50a8\u5f15\u64ce",id:"\u53ef\u5b9e\u65f6\u66f4\u65b0\u7684\u5217\u5f0f\u5b58\u50a8\u5f15\u64ce",level:2},{value:"\u667a\u80fd\u7684\u7269\u5316\u89c6\u56fe",id:"\u667a\u80fd\u7684\u7269\u5316\u89c6\u56fe",level:2},{value:"\u6570\u636e\u6e56\u5206\u6790",id:"\u6570\u636e\u6e56\u5206\u6790",level:2}];function l(e){const t=Object.assign({h1:"h1",h2:"h2",p:"p",img:"img",strong:"strong"},(0,r.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"\u4ea7\u54c1\u7279\u6027",children:"\u4ea7\u54c1\u7279\u6027"}),"\n",(0,n.jsx)(t.h2,{id:"mpp-\u5206\u5e03\u5f0f\u6267\u884c\u6846\u67b6",children:"MPP \u5206\u5e03\u5f0f\u6267\u884c\u6846\u67b6"}),"\n",(0,n.jsx)(t.p,{children:"StarRocks \u91c7\u7528 MPP (Massively Parallel Processing) \u5206\u5e03\u5f0f\u6267\u884c\u6846\u67b6\u3002\u5728 MPP \u6267\u884c\u6846\u67b6\u4e2d\uff0c\u4e00\u6761\u67e5\u8be2\u8bf7\u6c42\u4f1a\u88ab\u62c6\u5206\u6210\u591a\u4e2a\u7269\u7406\u8ba1\u7b97\u5355\u5143\uff0c\u5728\u591a\u673a\u5e76\u884c\u6267\u884c\u3002\u6bcf\u4e2a\u6267\u884c\u8282\u70b9\u62e5\u6709\u72ec\u4eab\u7684\u8d44\u6e90\uff08CPU\u3001\u5185\u5b58\uff09\u3002MPP \u6267\u884c\u6846\u67b6\u80fd\u591f\u4f7f\u5f97\u5355\u4e2a\u67e5\u8be2\u8bf7\u6c42\u53ef\u4ee5\u5145\u5206\u5229\u7528\u6240\u6709\u6267\u884c\u8282\u70b9\u7684\u8d44\u6e90\uff0c\u6240\u4ee5\u5355\u4e2a\u67e5\u8be2\u7684\u6027\u80fd\u53ef\u4ee5\u968f\u7740\u96c6\u7fa4\u7684\u6c34\u5e73\u6269\u5c55\u800c\u4e0d\u65ad\u63d0\u5347\u3002"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"MPP1",src:s(82515).Z+"",width:"1170",height:"610"})}),"\n",(0,n.jsxs)(t.p,{children:["\u5982\u4e0a\u56fe\u6240\u793a\uff0cStarRocks \u4f1a\u5c06\u4e00\u4e2a\u67e5\u8be2\u5728\u903b\u8f91\u4e0a\u5207\u5206\u4e3a\u591a\u4e2a\u903b\u8f91\u6267\u884c\u5355\u5143\uff08Query Fragment\uff09\u3002\u6309\u7167\u6bcf\u4e2a\u903b\u8f91\u6267\u884c\u5355\u5143\u9700\u8981\u5904\u7406\u7684\u8ba1\u7b97\u91cf\uff0c\u6bcf\u4e2a\u903b\u8f91\u6267\u884c\u5355\u5143\u4f1a\u7531\u4e00\u4e2a\u6216\u8005\u591a\u4e2a\u7269\u7406\u6267\u884c\u5355\u5143\u6765\u5177\u4f53\u5b9e\u73b0\u3002\u7269\u7406\u6267\u884c\u5355\u5143\u662f\u6700\u5c0f\u7684\u8c03\u5ea6\u5355\u4f4d\u3002\u4e00\u4e2a\u7269\u7406\u6267\u884c\u5355\u5143\u4f1a\u88ab\u8c03\u5ea6\u5230\u96c6\u7fa4\u67d0\u4e2a BE \u4e0a\u6267\u884c\u3002\u4e00\u4e2a\u903b\u8f91\u6267\u884c\u5355\u5143\u53ef\u4ee5\u5305\u62ec\u4e00\u4e2a\u6216\u8005\u591a\u4e2a\u6267\u884c\u7b97\u5b50\uff0c\u5982\u56fe\u4e2d\u7684 Fragment \u5305\u62ec\u4e86 Scan\uff0cProject\uff0cAggregate\u3002\u6bcf\u4e2a\u7269\u7406\u6267\u884c\u5355\u5143\u53ea\u5904\u7406\u90e8\u5206\u6570\u636e\u3002\u7531\u4e8e\u6bcf\u4e2a\u903b\u8f91\u6267\u884c\u5355\u5143\u5904\u7406\u7684\u590d\u6742\u5ea6\u4e0d\u4e00\u6837\uff0c\u6240\u4ee5\u6bcf\u4e2a\u903b\u8f91\u6267\u884c\u5355\u5143\u7684\u5e76\u884c\u5ea6\u662f\u4e0d\u4e00\u6837\u7684\uff0c\u5373\uff0c",(0,n.jsx)(t.strong,{children:"\u4e0d\u540c\u903b\u8f91\u6267\u884c\u5355\u5143\u53ef\u4ee5\u7531\u4e0d\u540c\u6570\u76ee\u7684\u7269\u7406\u6267\u884c\u5355\u5143\u6765\u5177\u4f53\u6267\u884c\uff0c\u4ee5\u63d0\u9ad8\u8d44\u6e90\u4f7f\u7528\u7387\uff0c\u63d0\u5347\u67e5\u8be2\u901f\u5ea6\u3002"})]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"MPP1",src:s(9479).Z+"",width:"1200",height:"855"})}),"\n",(0,n.jsxs)(t.p,{children:["\u4e0e\u5f88\u591a\u6570\u636e\u5206\u6790\u7cfb\u7edf\u91c7\u7528\u7684 Scatter-Gather \u5206\u5e03\u5f0f\u6267\u884c\u6846\u67b6\u4e0d\u540c\uff0cMPP\u5206\u5e03\u5f0f\u6267\u884c\u6846\u67b6\u53ef\u4ee5\u5229\u7528\u66f4\u591a\u7684\u8d44\u6e90\u5904\u7406\u67e5\u8be2\u8bf7\u6c42**\u3002**\u5728 Scatter-Gather \u6846\u67b6\u4e2d\uff0c\u53ea\u6709 Gather \u8282\u70b9\u80fd\u5904\u7406\u6700\u540e\u4e00\u7ea7\u7684\u6c47\u603b\u8ba1\u7b97\u3002",(0,n.jsx)(t.strong,{children:"\u800c\u5728 MPP \u6846\u67b6\u4e2d\uff0c\u6570\u636e\u4f1a\u88ab Shuffle \u5230\u591a\u4e2a\u8282\u70b9\uff0c\u5e76\u4e14\u7531\u591a\u4e2a\u8282\u70b9\u6765\u5b8c\u6210\u6700\u540e\u7684\u6c47\u603b\u8ba1\u7b97"}),"\u3002\u5728\u590d\u6742\u8ba1\u7b97\u65f6\uff08\u6bd4\u5982\u9ad8\u57fa\u6570 Group By\uff0c\u5927\u8868 Join \u7b49\u64cd\u4f5c\uff09\uff0cStarRocks \u7684 MPP \u6846\u67b6\u76f8\u5bf9\u4e8e Scatter-Gather \u6a21\u5f0f\u7684\u4ea7\u54c1\u6709\u660e\u663e\u7684\u6027\u80fd\u4f18\u52bf\u3002"]}),"\n",(0,n.jsx)(t.h2,{id:"\u5168\u9762\u5411\u91cf\u5316\u6267\u884c\u5f15\u64ce",children:"\u5168\u9762\u5411\u91cf\u5316\u6267\u884c\u5f15\u64ce"}),"\n",(0,n.jsx)(t.p,{children:"StarRocks \u901a\u8fc7\u5b9e\u73b0\u5168\u9762\u5411\u91cf\u5316\u5f15\u64ce\uff0c\u5145\u5206\u53d1\u6325\u4e86 CPU \u7684\u5904\u7406\u80fd\u529b\u3002\u5168\u9762\u5411\u91cf\u5316\u5f15\u64ce\u6309\u7167\u5217\u5f0f\u7684\u65b9\u5f0f\u7ec4\u7ec7\u548c\u5904\u7406\u6570\u636e\u3002StarRocks \u7684\u6570\u636e\u5b58\u50a8\u3001\u5185\u5b58\u4e2d\u6570\u636e\u7684\u7ec4\u7ec7\u65b9\u5f0f\uff0c\u4ee5\u53ca SQL \u7b97\u5b50\u7684\u8ba1\u7b97\u65b9\u5f0f\uff0c\u90fd\u662f\u5217\u5f0f\u5b9e\u73b0\u7684\u3002\u6309\u5217\u7684\u6570\u636e\u7ec4\u7ec7\u4e5f\u4f1a\u66f4\u52a0\u5145\u5206\u7684\u5229\u7528 CPU \u7684 Cache\uff0c\u6309\u5217\u8ba1\u7b97\u4f1a\u6709\u66f4\u5c11\u7684\u865a\u51fd\u6570\u8c03\u7528\u4ee5\u53ca\u66f4\u5c11\u7684\u5206\u652f\u5224\u65ad\u4ece\u800c\u83b7\u5f97\u66f4\u52a0\u5145\u5206\u7684 CPU \u6307\u4ee4\u6d41\u6c34\u3002"}),"\n",(0,n.jsx)(t.p,{children:"\u53e6\u4e00\u65b9\u9762\uff0cStarRocks \u7684\u5168\u9762\u5411\u91cf\u5316\u5f15\u64ce\u901a\u8fc7\u5411\u91cf\u5316\u7b97\u6cd5\u5145\u5206\u7684\u5229\u7528 CPU \u63d0\u4f9b\u7684 SIMD\uff08Single Instruction Multiple Data\uff09\u6307\u4ee4\u3002\u8fd9\u6837 StarRocks \u53ef\u4ee5\u7528\u66f4\u5c11\u7684\u6307\u4ee4\u6570\u76ee\uff0c\u5b8c\u6210\u66f4\u591a\u7684\u6570\u636e\u64cd\u4f5c\u3002\u7ecf\u8fc7\u6807\u51c6\u6d4b\u8bd5\u96c6\u7684\u9a8c\u8bc1\uff0cStarRocks\u7684\u5168\u9762\u5411\u91cf\u5316\u5f15\u64ce\u53ef\u4ee5\u5c06\u6267\u884c\u7b97\u5b50\u7684\u6027\u80fd\uff0c\u6574\u4f53\u63d0\u5347 3~10 \u500d\u3002"}),"\n",(0,n.jsx)(t.p,{children:"\u9664\u4e86\u4f7f\u7528\u5411\u91cf\u5316\u6280\u672f\u5b9e\u73b0\u6240\u6709\u7b97\u5b50\u5916\uff0cStarRocks \u8fd8\u5728\u6267\u884c\u5f15\u64ce\u4e2d\u5b9e\u73b0\u4e86\u5176\u4ed6\u7684\u4f18\u5316\u3002\u6bd4\u5982 StarRocks \u5b9e\u73b0\u4e86 Operation on Encoded Data \u7684\u6280\u672f\u3002\u5bf9\u4e8e\u5b57\u7b26\u4e32\u5b57\u6bb5\u7684\u64cd\u4f5c\uff0cStarRocks \u5728\u65e0\u9700\u89e3\u7801\u60c5\u51b5\u4e0b\u5c31\u53ef\u4ee5\u76f4\u63a5\u57fa\u4e8e\u7f16\u7801\u5b57\u6bb5\u5b8c\u6210\u7b97\u5b50\u6267\u884c\uff0c\u6bd4\u5982\u5b9e\u73b0\u5173\u8054\u7b97\u5b50\u3001\u805a\u5408\u7b97\u5b50\u3001\u8868\u8fbe\u5f0f\u7b97\u5b50\u8ba1\u7b97\u7b49\u3002\u8fd9\u53ef\u4ee5\u6781\u5927\u7684\u964d\u4f4e SQL \u5728\u6267\u884c\u8fc7\u7a0b\u4e2d\u7684\u8ba1\u7b97\u590d\u6742\u5ea6\u3002\u901a\u8fc7\u8fd9\u4e2a\u4f18\u5316\u624b\u6bb5\uff0c\u76f8\u5173\u67e5\u8be2\u901f\u5ea6\u53ef\u4ee5\u63d0\u5347 2 \u500d\u4ee5\u4e0a\u3002"}),"\n",(0,n.jsx)(t.h2,{id:"cbo-\u4f18\u5316\u5668",children:"CBO \u4f18\u5316\u5668"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"CBO",src:s(93498).Z+"",width:"1280",height:"523"})}),"\n",(0,n.jsx)(t.p,{children:"\u5728\u591a\u8868\u5173\u8054\u67e5\u8be2\u573a\u666f\u4e0b\uff0c\u4ec5\u9760\u4f18\u79c0\u7684\u6267\u884c\u5f15\u64ce\u6ca1\u6709\u529e\u6cd5\u83b7\u5f97\u6700\u6781\u81f4\u7684\u6267\u884c\u6027\u80fd\u3002\u56e0\u4e3a\u8fd9\u7c7b\u573a\u666f\u4e0b\uff0c\u4e0d\u540c\u6267\u884c\u8ba1\u5212\u7684\u590d\u6742\u5ea6\u53ef\u80fd\u4f1a\u76f8\u5dee\u51e0\u4e2a\u6570\u91cf\u7ea7\u3002\u67e5\u8be2\u4e2d\u5173\u8054\u8868\u7684\u6570\u76ee\u8d8a\u5927\uff0c\u53ef\u80fd\u7684\u6267\u884c\u8ba1\u5212\u5c31\u8d8a\u591a\uff0c\u5728\u4f17\u591a\u7684\u53ef\u80fd\u4e2d\u9009\u62e9\u4e00\u4e2a\u6700\u4f18\u7684\u8ba1\u5212\uff0c\u8fd9\u662f\u4e00\u4e2a NP-Hard \u7684\u95ee\u9898\u3002\u53ea\u6709\u4f18\u79c0\u7684\u67e5\u8be2\u4f18\u5316\u5668\uff0c\u624d\u80fd\u9009\u62e9\u51fa\u76f8\u5bf9\u6700\u4f18\u7684\u67e5\u8be2\u8ba1\u5212\uff0c\u4ece\u800c\u5b9e\u73b0\u6781\u81f4\u7684\u591a\u8868\u5206\u6790\u6027\u80fd\u3002"}),"\n",(0,n.jsx)(t.p,{children:"StarRocks \u4ece\u96f6\u8bbe\u8ba1\u5e76\u5b9e\u73b0\u4e86\u4e00\u6b3e\u5168\u65b0\u7684\uff0c\u57fa\u4e8e\u4ee3\u4ef7\u7684\u4f18\u5316\u5668 CBO\uff08Cost Based Optimizer\uff09\u3002\u8be5\u4f18\u5316\u5668\u662f Cascades Like \u7684\uff0c\u5728\u8bbe\u8ba1\u65f6\uff0c\u9488\u5bf9 StarRocks \u7684\u5168\u9762\u5411\u91cf\u5316\u6267\u884c\u5f15\u64ce\u8fdb\u884c\u4e86\u6df1\u5ea6\u5b9a\u5236\uff0c\u5e76\u8fdb\u884c\u4e86\u591a\u9879\u4f18\u5316\u548c\u521b\u65b0\u3002\u8be5\u4f18\u5316\u5668\u5185\u90e8\u5b9e\u73b0\u4e86\u516c\u5171\u8868\u8fbe\u5f0f\u590d\u7528\uff0c\u76f8\u5173\u5b50\u67e5\u8be2\u91cd\u5199\uff0cLateral Join\uff0cJoin Reorder\uff0cJoin \u5206\u5e03\u5f0f\u6267\u884c\u7b56\u7565\u9009\u62e9\uff0c\u4f4e\u57fa\u6570\u5b57\u5178\u4f18\u5316\u7b49\u91cd\u8981\u529f\u80fd\u548c\u4f18\u5316\u3002\u76ee\u524d\uff0c\u8be5\u4f18\u5316\u5668\u5df2\u53ef\u4ee5\u5b8c\u6574\u652f\u6301 TPC-DS 99 \u6761 SQL \u8bed\u53e5\u3002"}),"\n",(0,n.jsx)(t.p,{children:"\u7531\u4e8e\u5168\u65b0 CBO \u7684\u652f\u6301\uff0cStarRocks \u80fd\u6bd4\u540c\u7c7b\u4ea7\u54c1\u66f4\u597d\u5730\u652f\u6301\u591a\u8868\u5173\u8054\u67e5\u8be2\uff0c\u7279\u522b\u662f\u590d\u6742\u7684\u591a\u8868\u5173\u8054\u67e5\u8be2\uff0c\u8ba9\u5168\u9762\u5411\u91cf\u5316\u5f15\u64ce\u80fd\u591f\u53d1\u6325\u6781\u81f4\u7684\u6027\u80fd\u3002"}),"\n",(0,n.jsx)(t.h2,{id:"\u53ef\u5b9e\u65f6\u66f4\u65b0\u7684\u5217\u5f0f\u5b58\u50a8\u5f15\u64ce",children:"\u53ef\u5b9e\u65f6\u66f4\u65b0\u7684\u5217\u5f0f\u5b58\u50a8\u5f15\u64ce"}),"\n",(0,n.jsx)(t.p,{children:"StarRocks \u5b9e\u73b0\u4e86\u5217\u5f0f\u5b58\u50a8\u5f15\u64ce\uff0c\u6570\u636e\u4ee5\u6309\u5217\u7684\u65b9\u5f0f\u8fdb\u884c\u5b58\u50a8\u3002\u901a\u8fc7\u8fd9\u6837\u7684\u65b9\u5f0f\uff0c\u76f8\u540c\u7c7b\u578b\u7684\u6570\u636e\u8fde\u7eed\u5b58\u653e\u3002\u4e00\u65b9\u9762\uff0c\u6570\u636e\u53ef\u4ee5\u4f7f\u7528\u66f4\u52a0\u9ad8\u6548\u7684\u7f16\u7801\u65b9\u5f0f\uff0c\u83b7\u5f97\u66f4\u9ad8\u7684\u538b\u7f29\u6bd4\uff0c\u964d\u4f4e\u5b58\u50a8\u6210\u672c\u3002\u53e6\u4e00\u65b9\u9762\uff0c\u4e5f\u964d\u4f4e\u4e86\u7cfb\u7edf\u8bfb\u53d6\u6570\u636e\u7684 I/O \u603b\u91cf\uff0c\u63d0\u5347\u4e86\u67e5\u8be2\u6027\u80fd\u3002\u6b64\u5916\uff0c\u5728\u5927\u90e8\u5206 OLAP \u573a\u666f\u4e2d\uff0c\u67e5\u8be2\u53ea\u4f1a\u6d89\u53ca\u90e8\u5206\u5217\u3002\u76f8\u5bf9\u4e8e\u884c\u5b58\uff0c\u5217\u5b58\u53ea\u9700\u8981\u8bfb\u53d6\u90e8\u5206\u5217\u7684\u6570\u636e\uff0c\u80fd\u591f\u6781\u5927\u5730\u964d\u4f4e\u78c1\u76d8 I/O \u541e\u5410\u3002"}),"\n",(0,n.jsx)(t.p,{children:"StarRocks \u80fd\u591f\u652f\u6301\u79d2\u7ea7\u7684\u5bfc\u5165\u5ef6\u8fdf\uff0c\u63d0\u4f9b\u51c6\u5b9e\u65f6\u7684\u670d\u52a1\u80fd\u529b\u3002StarRocks \u7684\u5b58\u50a8\u5f15\u64ce\u5728\u6570\u636e\u5bfc\u5165\u65f6\u80fd\u591f\u4fdd\u8bc1\u6bcf\u4e00\u6b21\u64cd\u4f5c\u7684 ACID\u3002\u4e00\u4e2a\u6279\u6b21\u7684\u5bfc\u5165\u6570\u636e\u751f\u6548\u662f\u539f\u5b50\u6027\u7684\uff0c\u8981\u4e48\u5168\u90e8\u5bfc\u5165\u6210\u529f\uff0c\u8981\u4e48\u5168\u90e8\u5931\u8d25\u3002\u5e76\u53d1\u8fdb\u884c\u7684\u5404\u4e2a\u4e8b\u52a1\u76f8\u4e92\u4e4b\u95f4\u4e92\u4e0d\u5f71\u54cd\uff0c\u5bf9\u5916\u63d0\u4f9b Snapshot Isolation \u7684\u4e8b\u52a1\u9694\u79bb\u7ea7\u522b\u3002"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"columnar_storage_engine",src:s(57584).Z+"",width:"1280",height:"364"})}),"\n",(0,n.jsx)(t.p,{children:"StarRocks \u5b58\u50a8\u5f15\u64ce\u4e0d\u4ec5\u80fd\u591f\u63d0\u4f9b\u9ad8\u6548\u7684 Partial Update \u64cd\u4f5c\uff0c\u4e5f\u80fd\u9ad8\u6548\u5904\u7406 Upsert \u7c7b\u64cd\u4f5c\u3002\u4f7f\u7528 Delete-and-insert \u7684\u5b9e\u73b0\u65b9\u5f0f\uff0c\u901a\u8fc7\u4e3b\u952e\u7d22\u5f15\u5feb\u901f\u8fc7\u6ee4\u6570\u636e\uff0c\u907f\u514d\u8bfb\u53d6\u65f6\u7684 Sort \u548c Merge \u64cd\u4f5c\uff0c\u540c\u65f6\u8fd8\u53ef\u4ee5\u5145\u5206\u5229\u7528\u5176\u4ed6\u4e8c\u7ea7\u7d22\u5f15\uff0c\u5728\u5927\u91cf\u66f4\u65b0\u7684\u573a\u666f\u4e0b\uff0c\u4ecd\u7136\u53ef\u4ee5\u4fdd\u8bc1\u67e5\u8be2\u7684\u6781\u901f\u6027\u80fd\u3002"}),"\n",(0,n.jsx)(t.h2,{id:"\u667a\u80fd\u7684\u7269\u5316\u89c6\u56fe",children:"\u667a\u80fd\u7684\u7269\u5316\u89c6\u56fe"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"materialized_view",src:s(39370).Z+"",width:"1234",height:"866"})}),"\n",(0,n.jsx)(t.p,{children:"StarRocks \u652f\u6301\u7528\u6237\u4f7f\u7528\u7269\u5316\u89c6\u56fe\uff08materialized view\uff09\u8fdb\u884c\u67e5\u8be2\u52a0\u901f\u548c\u6570\u4ed3\u5206\u5c42\u3002\u4e0d\u540c\u4e8e\u4e00\u4e9b\u540c\u7c7b\u4ea7\u54c1\u7684\u7269\u5316\u89c6\u56fe\u9700\u8981\u624b\u52a8\u548c\u539f\u8868\u505a\u6570\u636e\u540c\u6b65\uff0cStarRocks \u7684\u7269\u5316\u89c6\u56fe\u53ef\u4ee5\u81ea\u52a8\u6839\u636e\u539f\u59cb\u8868\u66f4\u65b0\u6570\u636e\u3002\u53ea\u8981\u539f\u59cb\u8868\u6570\u636e\u53d1\u751f\u53d8\u66f4\uff0c\u7269\u5316\u89c6\u56fe\u7684\u66f4\u65b0\u4e5f\u540c\u6b65\u5b8c\u6210\uff0c\u4e0d\u9700\u8981\u989d\u5916\u7684\u7ef4\u62a4\u64cd\u4f5c\u5c31\u53ef\u4ee5\u4fdd\u8bc1\u7269\u5316\u89c6\u56fe\u80fd\u591f\u7ef4\u6301\u4e0e\u539f\u8868\u4e00\u81f4\u3002\u4e0d\u4ec5\u5982\u6b64\uff0c\u7269\u5316\u89c6\u56fe\u7684\u9009\u62e9\u4e5f\u662f\u81ea\u52a8\u8fdb\u884c\u7684\u3002StarRocks \u5728\u8fdb\u884c\u67e5\u8be2\u89c4\u5212\u65f6\uff0c\u5982\u679c\u6709\u5408\u9002\u7684\u7269\u5316\u89c6\u56fe\u80fd\u591f\u52a0\u901f\u67e5\u8be2\uff0cStarRocks \u81ea\u52a8\u8fdb\u884c\u67e5\u8be2\u6539\u5199(query rewrite)\uff0c\u5c06\u67e5\u8be2\u81ea\u52a8\u5b9a\u4f4d\u5230\u6700\u9002\u5408\u7684\u7269\u5316\u89c6\u56fe\u4e0a\u8fdb\u884c\u67e5\u8be2\u52a0\u901f\u3002"}),"\n",(0,n.jsx)(t.p,{children:"StarRocks \u7684\u7269\u5316\u89c6\u56fe\u53ef\u4ee5\u6309\u9700\u7075\u6d3b\u521b\u5efa\u548c\u5220\u9664\u3002\u7528\u6237\u53ef\u4ee5\u5728\u4f7f\u7528\u8fc7\u7a0b\u4e2d\u89c6\u5b9e\u9645\u4f7f\u7528\u60c5\u51b5\u6765\u5224\u65ad\u662f\u5426\u9700\u8981\u521b\u5efa\u6216\u5220\u9664\u7269\u5316\u89c6\u56fe\u3002StarRocks \u4f1a\u5728\u540e\u53f0\u81ea\u52a8\u5b8c\u6210\u7269\u5316\u89c6\u56fe\u7684\u76f8\u5173\u8c03\u6574\u3002"}),"\n",(0,n.jsx)(t.p,{children:"StarRocks \u7684\u7269\u5316\u89c6\u56fe\u53ef\u4ee5\u66ff\u4ee3\u4f20\u7edf\u7684 ETL \u5efa\u6a21\u6d41\u7a0b\uff0c\u7528\u6237\u65e0\u9700\u5728\u4e0a\u6e38\u5e94\u7528\u5904\u505a\u6570\u636e\u8f6c\u6362\uff0c\u53ef\u4ee5\u5728\u4f7f\u7528\u7269\u5316\u89c6\u56fe\u65f6\u5b8c\u6210\u6570\u636e\u8f6c\u6362\uff0c\u7b80\u5316\u4e86\u6570\u636e\u5904\u7406\u6d41\u7a0b\u3002"}),"\n",(0,n.jsx)(t.p,{children:"\u4f8b\u5982\u56fe\u4e2d\uff0c\u6700\u5e95\u5c42 ODS \u7684\u6e56\u4e0a\u6570\u636e\u53ef\u4ee5\u901a\u8fc7 External Catalog MV \u6765\u6784\u5efa DWD \u5c42\u7684 normalized table\uff1b\u5e76\u4e14\u53ef\u4ee5\u901a\u8fc7\u591a\u8868\u5173\u8054\u7684\u7269\u5316\u89c6\u56fe\u6765\u6784\u5efa DWS \u5c42\u7684\u5bbd\u8868 (denormalized table)\uff1b\u6700\u4e0a\u5c42\u53ef\u4ee5\u8fdb\u4e00\u6b65\u6784\u5efa\u5b9e\u65f6\u7684\u7269\u5316\u89c6\u56fe\u6765\u652f\u6491\u9ad8\u5e76\u53d1\u7684\u67e5\u8be2\uff0c\u63d0\u4f9b\u66f4\u52a0\u4f18\u5f02\u7684\u67e5\u8be2\u6027\u80fd\u3002"}),"\n",(0,n.jsx)(t.h2,{id:"\u6570\u636e\u6e56\u5206\u6790",children:"\u6570\u636e\u6e56\u5206\u6790"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"datalake_analytics",src:s(55889).Z+"",width:"724",height:"693"})}),"\n",(0,n.jsx)(t.p,{children:"StarRocks \u4e0d\u4ec5\u80fd\u9ad8\u6548\u7684\u5206\u6790\u672c\u5730\u5b58\u50a8\u7684\u6570\u636e\uff0c\u4e5f\u53ef\u4ee5\u4f5c\u4e3a\u8ba1\u7b97\u5f15\u64ce\u76f4\u63a5\u5206\u6790\u6570\u636e\u6e56\u4e2d\u7684\u6570\u636e\u3002\u7528\u6237\u53ef\u4ee5\u901a\u8fc7 StarRocks \u63d0\u4f9b\u7684 External Catalog\uff0c\u8f7b\u677e\u67e5\u8be2\u5b58\u50a8\u5728 Apache Hive\u3001Apache Iceberg\u3001Apache Hudi\u3001Delta Lake \u7b49\u6570\u636e\u6e56\u4e0a\u7684\u6570\u636e\uff0c\u65e0\u9700\u8fdb\u884c\u6570\u636e\u8fc1\u79fb\u3002\u652f\u6301\u7684\u5b58\u50a8\u7cfb\u7edf\u5305\u62ec HDFS\u3001S3\u3001OSS\uff0c\u652f\u6301\u7684\u6587\u4ef6\u683c\u5f0f\u5305\u62ec Parquet\u3001ORC\u3001CSV\u3002"}),"\n",(0,n.jsx)(t.p,{children:"\u5982\u4e0a\u56fe\u6240\u793a\uff0c\u5728\u6570\u636e\u6e56\u5206\u6790\u573a\u666f\u4e2d\uff0cStarRocks \u4e3b\u8981\u8d1f\u8d23\u6570\u636e\u7684\u8ba1\u7b97\u5206\u6790\uff0c\u800c\u6570\u636e\u6e56\u5219\u4e3b\u8981\u8d1f\u8d23\u6570\u636e\u7684\u5b58\u50a8\u3001\u7ec4\u7ec7\u548c\u7ef4\u62a4\u3002\u4f7f\u7528\u6570\u636e\u6e56\u7684\u4f18\u52bf\u5728\u4e8e\u53ef\u4ee5\u4f7f\u7528\u5f00\u653e\u7684\u5b58\u50a8\u683c\u5f0f\u548c\u7075\u6d3b\u591a\u53d8\u7684 schema \u5b9a\u4e49\u65b9\u5f0f\uff0c\u53ef\u4ee5\u8ba9 BI/AI/Adhoc/\u62a5\u8868\u7b49\u4e1a\u52a1\u6709\u7edf\u4e00\u7684 single source of truth\u3002\u800c StarRocks \u4f5c\u4e3a\u6570\u636e\u6e56\u7684\u8ba1\u7b97\u5f15\u64ce\uff0c\u53ef\u4ee5\u5145\u5206\u53d1\u6325\u5411\u91cf\u5316\u5f15\u64ce\u548c CBO \u7684\u4f18\u52bf\uff0c\u5927\u5927\u63d0\u5347\u4e86\u6570\u636e\u6e56\u5206\u6790\u7684\u6027\u80fd\u3002"})]})}const h=function(e={}){const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(l,e)})):l(e)}},82515:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/1.2-3-70ba4de6e02c732d41144f1536ba54dd.png"},9479:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/1.2-4-4b5bfbf21aad4f84fa46b8da25b92768.png"},93498:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/1.2-5-f9ffc68ee19250a8d8f61cf18db475b6.png"},57584:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/1.2-6-688d27ffb2985720b35ee114d12f49e8.png"},39370:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/1.2-7-mv-7fb0ae6f680ae698965d29b4a7a6911d.png"},55889:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/1.2-8-95291c5af159fccb5fb1250866be5b29.png"},11151:(e,t,s)=>{s.d(t,{Zo:()=>c,ah:()=>a});var n=s(67294);const r=n.createContext({});function a(e){const t=n.useContext(r);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const i={};function c({components:e,children:t,disableParentContext:s}){let c;return c=s?"function"==typeof e?e({}):e||i:a(e),n.createElement(r.Provider,{value:c},t)}}}]);