"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[68694],{8784:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>h,frontMatter:()=>t,metadata:()=>o,toc:()=>d});var c=s(85893),r=s(11151);const t={},l="\u90e8\u7f72\u524d\u63d0\u6761\u4ef6",o={id:"deployment/deployment_prerequisites",title:"\u90e8\u7f72\u524d\u63d0\u6761\u4ef6",description:"\u672c\u6587\u63cf\u8ff0\u4e86\u90e8\u7f72 StarRocks \u7684\u670d\u52a1\u5668\u5fc5\u987b\u6ee1\u8db3\u54ea\u4e9b\u8f6f\u786c\u4ef6\u8981\u6c42\u3002\u5173\u4e8e StarRocks \u96c6\u7fa4\u7684\u63a8\u8350\u786c\u4ef6\u89c4\u683c\uff0c\u8bf7\u53c2\u9605\u89c4\u5212\u60a8\u7684 StarRocks \u96c6\u7fa4\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.0/deployment/deployment_prerequisites.md",sourceDirName:"deployment",slug:"/deployment/deployment_prerequisites",permalink:"/doc/zh/docs/3.0/deployment/deployment_prerequisites",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/deployment/deployment_prerequisites.md",tags:[],version:"3.0",frontMatter:{},sidebar:"Chinese31",previous:{title:"\u90e8\u7f72\u603b\u89c8",permalink:"/doc/zh/docs/3.0/deployment/deployment_overview"},next:{title:"\u89c4\u5212 StarRocks \u96c6\u7fa4",permalink:"/doc/zh/docs/3.0/deployment/plan_cluster"}},i={},d=[{value:"\u786c\u4ef6",id:"\u786c\u4ef6",level:2},{value:"CPU",id:"cpu",level:3},{value:"\u5185\u5b58",id:"\u5185\u5b58",level:3},{value:"\u5b58\u50a8",id:"\u5b58\u50a8",level:3},{value:"\u7f51\u7edc",id:"\u7f51\u7edc",level:3},{value:"\u64cd\u4f5c\u7cfb\u7edf",id:"\u64cd\u4f5c\u7cfb\u7edf",level:2},{value:"\u8f6f\u4ef6",id:"\u8f6f\u4ef6",level:2}];function a(e){const n=Object.assign({h1:"h1",p:"p",a:"a",h2:"h2",h3:"h3",pre:"pre",code:"code",blockquote:"blockquote",strong:"strong",ul:"ul",li:"li",ol:"ol"},(0,r.ah)(),e.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.h1,{id:"\u90e8\u7f72\u524d\u63d0\u6761\u4ef6",children:"\u90e8\u7f72\u524d\u63d0\u6761\u4ef6"}),"\n",(0,c.jsxs)(n.p,{children:["\u672c\u6587\u63cf\u8ff0\u4e86\u90e8\u7f72 StarRocks \u7684\u670d\u52a1\u5668\u5fc5\u987b\u6ee1\u8db3\u54ea\u4e9b\u8f6f\u786c\u4ef6\u8981\u6c42\u3002\u5173\u4e8e StarRocks \u96c6\u7fa4\u7684\u63a8\u8350\u786c\u4ef6\u89c4\u683c\uff0c\u8bf7\u53c2\u9605",(0,c.jsx)(n.a,{href:"/doc/zh/docs/3.0/deployment/plan_cluster",children:"\u89c4\u5212\u60a8\u7684 StarRocks \u96c6\u7fa4"}),"\u3002"]}),"\n",(0,c.jsx)(n.h2,{id:"\u786c\u4ef6",children:"\u786c\u4ef6"}),"\n",(0,c.jsx)(n.h3,{id:"cpu",children:"CPU"}),"\n",(0,c.jsx)(n.p,{children:"StarRocks \u4f9d\u9760 AVX2 \u6307\u4ee4\u96c6\u5145\u5206\u53d1\u6325\u5176\u77e2\u91cf\u5316\u80fd\u529b\u3002\u56e0\u6b64\uff0c\u5728\u751f\u4ea7\u73af\u5883\u4e2d\uff0c\u5f3a\u70c8\u5efa\u8bae\u60a8\u5c06 StarRocks \u90e8\u7f72\u4e8e x86 \u67b6\u6784 CPU \u7684\u670d\u52a1\u5668\u4e0a\u3002"}),"\n",(0,c.jsx)(n.p,{children:"\u60a8\u53ef\u4ee5\u5728\u7ec8\u7aef\u4e2d\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u6765\u68c0\u67e5 CPU \u662f\u5426\u652f\u6301 AVX2 \u6307\u4ee4\u96c6\uff1a"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-Bash",children:"cat /proc/cpuinfo | grep avx2\n"})}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"\u8bf4\u660e"})}),"\n",(0,c.jsx)(n.p,{children:"ARM \u67b6\u6784\u4e0d\u652f\u6301 SIMD \u6307\u4ee4\u96c6\uff0c\u56e0\u6b64\u5728\u67d0\u4e9b\u573a\u666f\u4e0b\u7684\u6027\u80fd\u4e0d\u53ca x86 \u67b6\u6784\u3002\u6211\u4eec\u53ea\u63a8\u8350\u60a8\u5728\u5f00\u53d1\u73af\u5883\u4e2d\u90e8\u7f72 ARM \u67b6\u6784\u4e0b\u7684 StarRocks\u3002"}),"\n"]}),"\n",(0,c.jsx)(n.h3,{id:"\u5185\u5b58",children:"\u5185\u5b58"}),"\n",(0,c.jsxs)(n.p,{children:["StarRocks \u5bf9\u5185\u5b58\u6ca1\u6709\u7279\u5b9a\u8981\u6c42\u3002\u5173\u4e8e\u63a8\u8350\u7684\u5185\u5b58\u5927\u5c0f\uff0c\u8bf7\u53c2\u8003 ",(0,c.jsx)(n.a,{href:"/doc/zh/docs/3.0/deployment/plan_cluster#cpu-%E5%92%8C%E5%86%85%E5%AD%98",children:"\u89c4\u5212 StarRocks \u96c6\u7fa4 - CPU \u548c\u5185\u5b58"}),"\u3002"]}),"\n",(0,c.jsx)(n.h3,{id:"\u5b58\u50a8",children:"\u5b58\u50a8"}),"\n",(0,c.jsx)(n.p,{children:"StarRocks \u652f\u6301 HDD \u548c SSD \u4f5c\u4e3a\u5b58\u50a8\u4ecb\u8d28\u3002"}),"\n",(0,c.jsx)(n.p,{children:"\u5728\u5b9e\u65f6\u6570\u636e\u5206\u6790\u573a\u666f\u3001\u4ee5\u53ca\u6d89\u53ca\u5927\u91cf\u6570\u636e\u626b\u63cf\u6216\u968f\u673a\u78c1\u76d8\u8bbf\u95ee\u7684\u573a\u666f\u4e0b\uff0c\u5f3a\u70c8\u5efa\u8bae\u60a8\u9009\u62e9 SSD \u4f5c\u4e3a\u5b58\u50a8\u4ecb\u8d28\u3002"}),"\n",(0,c.jsxs)(n.p,{children:["\u5728\u6d89\u53ca ",(0,c.jsx)(n.a,{href:"/doc/zh/docs/3.0/table_design/table_types/primary_key_table",children:"\u4e3b\u952e\u6a21\u578b"})," \u6301\u4e45\u5316\u7d22\u5f15\u7684\u573a\u666f\u4e2d\uff0c\u60a8\u5fc5\u987b\u4f7f\u7528 SSD \u4f5c\u4e3a\u5b58\u50a8\u4ecb\u8d28\u3002"]}),"\n",(0,c.jsx)(n.h3,{id:"\u7f51\u7edc",children:"\u7f51\u7edc"}),"\n",(0,c.jsx)(n.p,{children:"\u5efa\u8bae\u4f7f\u7528\u4e07\u5146\u7f51\u7edc\u8fde\u63a5\uff0810 Gigabit Ethernet\uff0c\u7b80\u79f0 10 GE\uff09\u786e\u4fdd StarRocks \u96c6\u7fa4\u5185\u6570\u636e\u80fd\u591f\u8de8\u8282\u70b9\u9ad8\u6548\u4f20\u8f93\u3002"}),"\n",(0,c.jsx)(n.h2,{id:"\u64cd\u4f5c\u7cfb\u7edf",children:"\u64cd\u4f5c\u7cfb\u7edf"}),"\n",(0,c.jsx)(n.p,{children:"StarRocks \u652f\u6301\u5728 CentOS 7.9 \u548c Ubuntu 22.04 \u4e0a\u90e8\u7f72\u3002"}),"\n",(0,c.jsx)(n.h2,{id:"\u8f6f\u4ef6",children:"\u8f6f\u4ef6"}),"\n",(0,c.jsx)(n.p,{children:"\u60a8\u5fc5\u987b\u5728\u670d\u52a1\u5668\u4e0a\u5b89\u88c5 JDK 8 \u4ee5\u8fd0\u884c StarRocks\u3002v3.0.5 \u53ca\u4ee5\u4e0a\u7248\u672c\u5efa\u8bae\u5b89\u88c5 JDK 11\u3002"}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"\u6ce8\u610f"})}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"StarRocks \u4e0d\u652f\u6301 JRE\u3002"}),"\n",(0,c.jsx)(n.li,{children:"\u5982\u679c\u60a8\u9700\u8981\u5728 Ubuntu 22.04 \u4e0a\u90e8\u7f72 StarRocks\uff0c\u5219\u5fc5\u987b\u5b89\u88c5 JDK 11\u3002"}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:"\u6309\u7167\u4ee5\u4e0b\u6b65\u9aa4\u5b89\u88c5 JDK 8\uff1a"}),"\n",(0,c.jsxs)(n.ol,{children:["\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:"\u8fdb\u5165\u9700\u8981\u5b89\u88c5 JDK \u7684\u8def\u5f84\u3002"}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:"\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u4e0b\u8f7d JDK\uff1a"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-Bash",children:'wget --no-check-certificate --no-cookies \\\n    --header "Cookie: oraclelicense=accept-securebackup-cookie"  \\\n    http://download.oracle.com/otn-pub/java/jdk/8u131-b11/d54c1d3a095b4ff2b6607d096fa80163/jdk-8u131-linux-x64.tar.gz\n'})}),"\n"]}),"\n"]})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,c.jsx)(n,Object.assign({},e,{children:(0,c.jsx)(a,e)})):a(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>o,ah:()=>t});var c=s(67294);const r=c.createContext({});function t(e){const n=c.useContext(r);return c.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const l={};function o({components:e,children:n,disableParentContext:s}){let o;return o=s?"function"==typeof e?e({}):e||l:t(e),c.createElement(r.Provider,{value:o},n)}}}]);