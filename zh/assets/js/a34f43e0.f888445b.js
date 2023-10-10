"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[62621],{22643:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>i,contentTitle:()=>l,default:()=>h,frontMatter:()=>c,metadata:()=>d,toc:()=>o});var r=n(85893),t=n(11151);const c={},l="\u51c6\u5907\u90e8\u7f72\u6587\u4ef6",d={id:"deployment/prepare_deployment_files",title:"\u51c6\u5907\u90e8\u7f72\u6587\u4ef6",description:"\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u51c6\u5907 StarRocks \u90e8\u7f72\u6587\u4ef6\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.1/deployment/prepare_deployment_files.md",sourceDirName:"deployment",slug:"/deployment/prepare_deployment_files",permalink:"/docusaurusv3/zh/docs/latest/deployment/prepare_deployment_files",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/deployment/prepare_deployment_files.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"\u68c0\u67e5\u73af\u5883\u914d\u7f6e",permalink:"/docusaurusv3/zh/docs/latest/deployment/environment_configurations"},next:{title:"Shared-nothing deployment",permalink:"/docusaurusv3/zh/docs/latest/category/shared-nothing-deployment"}},i={},o=[{value:"\u4e3a x86 \u67b6\u6784 CentOS 7.9 \u5e73\u53f0\u51c6\u5907\u90e8\u7f72\u6587\u4ef6",id:"\u4e3a-x86-\u67b6\u6784-centos-79-\u5e73\u53f0\u51c6\u5907\u90e8\u7f72\u6587\u4ef6",level:2},{value:"\u6b65\u9aa4",id:"\u6b65\u9aa4",level:3},{value:"\u4e3a ARM \u67b6\u6784 CPU \u6216 Ubuntu 22.04 \u5e73\u53f0\u51c6\u5907\u90e8\u7f72\u6587\u4ef6",id:"\u4e3a-arm-\u67b6\u6784-cpu-\u6216-ubuntu-2204-\u5e73\u53f0\u51c6\u5907\u90e8\u7f72\u6587\u4ef6",level:2},{value:"\u524d\u63d0\u6761\u4ef6",id:"\u524d\u63d0\u6761\u4ef6",level:3},{value:"\u6b65\u9aa4",id:"\u6b65\u9aa4-1",level:3}];function a(e){const s=Object.assign({h1:"h1",p:"p",a:"a",h2:"h2",strong:"strong",h3:"h3",ol:"ol",li:"li",pre:"pre",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",ul:"ul"},(0,t.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h1,{id:"\u51c6\u5907\u90e8\u7f72\u6587\u4ef6",children:"\u51c6\u5907\u90e8\u7f72\u6587\u4ef6"}),"\n",(0,r.jsx)(s.p,{children:"\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u51c6\u5907 StarRocks \u90e8\u7f72\u6587\u4ef6\u3002"}),"\n",(0,r.jsxs)(s.p,{children:["\u76ee\u524d ",(0,r.jsx)(s.a,{href:"https://www.mirrorship.cn/zh-CN/download/community",children:"\u955c\u821f\u5b98\u7f51"}),"\u63d0\u4f9b\u7684 StarRocks \u8f6f\u4ef6\u5305\u4ec5\u652f\u6301\u5728 x86 \u67b6\u6784 CPU \u7684 CentOS 7.9 \u5e73\u53f0\u4e0a\u90e8\u7f72\u3002\u5982\u9700\u5728 ARM \u67b6\u6784 CPU \u6216 Ubuntu 22.04 \u64cd\u4f5c\u7cfb\u7edf\u4e0a\u90e8\u7f72 StarRocks\uff0c\u60a8\u9700\u8981\u901a\u8fc7 StarRocks Docker \u955c\u50cf\u83b7\u53d6\u90e8\u7f72\u6587\u4ef6\u3002"]}),"\n",(0,r.jsx)(s.h2,{id:"\u4e3a-x86-\u67b6\u6784-centos-79-\u5e73\u53f0\u51c6\u5907\u90e8\u7f72\u6587\u4ef6",children:"\u4e3a x86 \u67b6\u6784 CentOS 7.9 \u5e73\u53f0\u51c6\u5907\u90e8\u7f72\u6587\u4ef6"}),"\n",(0,r.jsxs)(s.p,{children:["StarRocks \u4e8c\u8fdb\u5236\u5305\u7684\u540d\u79f0\u683c\u5f0f\u4e3a ",(0,r.jsx)(s.strong,{children:"StarRocks-version.tar.gz"}),"\uff0c\u5176\u4e2d ",(0,r.jsx)(s.strong,{children:"version"})," \u662f\u4e00\u4e2a\u6570\u5b57\uff08\u4f8b\u5982 ",(0,r.jsx)(s.strong,{children:"2.5.2"}),"\uff09\uff0c\u8868\u793a\u4e8c\u8fdb\u5236\u5305\u7684\u7248\u672c\u4fe1\u606f\u3002\u8bf7\u786e\u4fdd\u60a8\u9009\u62e9\u4e86\u6b63\u786e\u7248\u672c\u7684\u4e8c\u8fdb\u5236\u5305\u3002"]}),"\n",(0,r.jsx)(s.h3,{id:"\u6b65\u9aa4",children:"\u6b65\u9aa4"}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["\u60a8\u53ef\u9009\u62e9\u4ece ",(0,r.jsx)(s.a,{href:"https://www.starrocks.io/download/community",children:"\u4e0b\u8f7d StarRocks"})," \u9875\u9762\u76f4\u63a5\u4e0b\u8f7d StarRocks \u4e8c\u8fdb\u5236\u5305\uff0c\u6216\u5728\u7ec8\u7aef\u4e2d\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u83b7\u53d6\uff1a"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-Bash",children:"# \u5c06 <version> \u66ff\u6362\u4e3a\u60a8\u60f3\u8981\u4e0b\u8f7d\u7684 StarRocks \u7248\u672c\uff0c\u4f8b\u5982 2.5.4\u3002\nwget https://releases.starrocks.io/starrocks/StarRocks-<version>.tar.gz\n"})}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"\u89e3\u538b\u4e8c\u8fdb\u5236\u5305\u3002"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-Bash",children:"# \u5c06 <version> \u66ff\u6362\u4e3a\u60a8\u5df2\u4e0b\u8f7d\u7684 StarRocks \u7248\u672c\uff0c\u4f8b\u5982 2.5.4\u3002\ntar -xzvf StarRocks-<version>.tar.gz\n"})}),"\n",(0,r.jsx)(s.p,{children:"\u4e8c\u8fdb\u5236\u5305\u4e2d\u5305\u542b\u4ee5\u4e0b\u8def\u5f84\u53ca\u6587\u4ef6\uff1a"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:(0,r.jsx)(s.strong,{children:"\u8def\u5f84/\u6587\u4ef6"})}),(0,r.jsx)(s.th,{children:(0,r.jsx)(s.strong,{children:"\u8bf4\u660e"})})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.strong,{children:"apache_hdfs_broker"})}),(0,r.jsxs)(s.td,{children:["Broker \u8282\u70b9\u7684\u90e8\u7f72\u8def\u5f84\u3002\u81ea StarRocks 2.5 \u8d77\uff0c\u60a8\u65e0\u9700\u5728\u4e00\u822c\u573a\u666f\u4e2d\u90e8\u7f72 Broker \u8282\u70b9\u3002\u5982\u679c\u60a8\u786e\u5b9e\u9700\u8981\u5728 StarRocks \u96c6\u7fa4\u4e2d\u90e8\u7f72 Broker \u8282\u70b9\uff0c\u8bf7\u53c2\u9605 ",(0,r.jsx)(s.a,{href:"/docusaurusv3/zh/docs/latest/deployment/deploy_broker",children:"\u90e8\u7f72 Broker \u8282\u70b9"})," \u4e86\u89e3\u8be6\u7ec6\u8bf4\u660e\u3002"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.strong,{children:"fe"})}),(0,r.jsx)(s.td,{children:"FE \u8282\u70b9\u7684\u90e8\u7f72\u8def\u5f84\u3002"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.strong,{children:"be"})}),(0,r.jsx)(s.td,{children:"BE \u8282\u70b9\u7684\u90e8\u7f72\u8def\u5f84\u3002"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.strong,{children:"LICENSE.txt"})}),(0,r.jsx)(s.td,{children:"StarRocks license \u6587\u4ef6\u3002"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.strong,{children:"NOTICE.txt"})}),(0,r.jsx)(s.td,{children:"StarRocks notice \u6587\u4ef6\u3002"})]})]})]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["\u5c06\u8def\u5f84 ",(0,r.jsx)(s.strong,{children:"fe"})," \u5206\u53d1\u81f3\u6240\u6709 FE \u5b9e\u4f8b\uff0c\u5c06\u8def\u5f84 ",(0,r.jsx)(s.strong,{children:"be"})," \u5206\u53d1\u81f3\u6240\u6709 BE \u6216 CN \u5b9e\u4f8b\u4ee5\u7528\u4e8e",(0,r.jsx)(s.a,{href:"/docusaurusv3/zh/docs/latest/deployment/deploy_manually",children:"\u624b\u52a8\u90e8\u7f72"}),"\u3002"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"\u4e3a-arm-\u67b6\u6784-cpu-\u6216-ubuntu-2204-\u5e73\u53f0\u51c6\u5907\u90e8\u7f72\u6587\u4ef6",children:"\u4e3a ARM \u67b6\u6784 CPU \u6216 Ubuntu 22.04 \u5e73\u53f0\u51c6\u5907\u90e8\u7f72\u6587\u4ef6"}),"\n",(0,r.jsx)(s.h3,{id:"\u524d\u63d0\u6761\u4ef6",children:"\u524d\u63d0\u6761\u4ef6"}),"\n",(0,r.jsxs)(s.p,{children:["\u60a8\u9700\u8981\u5728\u8ba1\u7b97\u673a\u4e0a\u5b89\u88c5 ",(0,r.jsx)(s.a,{href:"https://docs.docker.com/engine/install/",children:"Docker Engine"})," (17.06.0 \u4ee5\u4e0a)\u3002"]}),"\n",(0,r.jsx)(s.h3,{id:"\u6b65\u9aa4-1",children:"\u6b65\u9aa4"}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["\u4ece ",(0,r.jsx)(s.a,{href:"https://hub.docker.com/r/starrocks/artifacts-ubuntu/tags",children:"StarRocks Docker Hub"})," \u4e0b\u8f7d StarRocks Docker \u955c\u50cf\u3002 \u60a8\u53ef\u4ee5\u6839\u636e Tag \u9009\u62e9\u7279\u5b9a\u7248\u672c\u7684\u955c\u50cf\u3002"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"\u5982\u679c\u60a8\u4f7f\u7528 Ubuntu 22.04 \u5e73\u53f0\uff1a"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-Bash",children:"# \u5c06 <image_tag> \u66ff\u6362\u4e3a\u60a8\u8981\u4e0b\u8f7d\u7684\u955c\u50cf\u7684 Tag\uff0c\u4f8b\u5982 2.5.4\u3002\ndocker pull starrocks/artifacts-ubuntu:<image_tag>\n"})}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"\u5982\u679c\u60a8\u4f7f\u7528 ARM \u67b6\u6784 CentOS 7.9 \u5e73\u53f0\uff1a"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-Bash",children:"# \u5c06 <image_tag> \u66ff\u6362\u4e3a\u60a8\u8981\u4e0b\u8f7d\u7684\u955c\u50cf\u7684 Tag\uff0c\u4f8b\u5982 2.5.4\u3002\ndocker pull starrocks/artifacts-centos7:<image_tag>\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u5c06 StarRocks \u90e8\u7f72\u6587\u4ef6\u4ece Docker \u955c\u50cf\u590d\u5236\u5230\u60a8\u7684\u4e3b\u673a\uff1a"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"\u5982\u679c\u60a8\u4f7f\u7528 Ubuntu 22.04 \u5e73\u53f0\uff1a"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-Bash",children:"# \u5c06 <image_tag> \u66ff\u6362\u4e3a\u60a8\u4e0b\u8f7d\u7684\u955c\u50cf\u7684 Tag\uff0c\u4f8b\u5982 2.5.4\u3002\ndocker run --rm starrocks/artifacts-ubuntu:<image_tag> \\\n    tar -cf - -C /release . | tar -xvf -\n"})}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"\u5982\u679c\u60a8\u4f7f\u7528 ARM \u67b6\u6784 CentOS 7.9 \u5e73\u53f0\uff1a"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-Bash",children:"# \u5c06 <image_tag> \u66ff\u6362\u4e3a\u60a8\u4e0b\u8f7d\u7684\u955c\u50cf\u7684 Tag\uff0c\u4f8b\u5982 2.5.4\u3002\ndocker run --rm starrocks/artifacts-centos7:<image_tag> \\\n    tar -cf - -C /release . | tar -xvf -\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"\u90e8\u7f72\u6587\u4ef6\u5305\u62ec\u4ee5\u4e0b\u8def\u5f84\uff1a"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:(0,r.jsx)(s.strong,{children:"\u8def\u5f84"})}),(0,r.jsx)(s.th,{children:(0,r.jsx)(s.strong,{children:"\u8bf4\u660e"})})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.strong,{children:"be_artifacts"})}),(0,r.jsxs)(s.td,{children:["\u8be5\u8def\u5f84\u4e0b\u5305\u542b BE \u6216 CN \u8282\u70b9\u7684\u90e8\u7f72\u8def\u5f84 ",(0,r.jsx)(s.strong,{children:"be"}),"\u3001StarRocks License \u6587\u4ef6 ",(0,r.jsx)(s.strong,{children:"LICENSE.txt"})," \u4ee5\u53ca StarRocks notice \u6587\u4ef6 ",(0,r.jsx)(s.strong,{children:"NOTICE.txt\u3002"})]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.strong,{children:"broker_artifacts"})}),(0,r.jsxs)(s.td,{children:["\u8be5\u8def\u5f84\u4e0b\u5305\u542b Broker \u8282\u70b9\u7684\u90e8\u7f72\u8def\u5f84 ",(0,r.jsx)(s.strong,{children:"apache_hdfs_broker"}),"\u3002"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.strong,{children:"fe_artifacts"})}),(0,r.jsxs)(s.td,{children:["\u8be5\u8def\u5f84\u4e0b\u5305\u542b FE \u8282\u70b9\u7684\u90e8\u7f72\u8def\u5f84 ",(0,r.jsx)(s.strong,{children:"fe"}),"\u3001StarRocks License \u6587\u4ef6 ",(0,r.jsx)(s.strong,{children:"LICENSE.txt"})," \u4ee5\u53ca StarRocks notice \u6587\u4ef6 ",(0,r.jsx)(s.strong,{children:"NOTICE.txt\u3002"})]})]})]})]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["\u5c06\u8def\u5f84 ",(0,r.jsx)(s.strong,{children:"fe"})," \u5206\u53d1\u81f3\u6240\u6709 FE \u5b9e\u4f8b\uff0c\u5c06\u8def\u5f84 ",(0,r.jsx)(s.strong,{children:"be"})," \u5206\u53d1\u81f3\u6240\u6709 BE \u6216 CN \u5b9e\u4f8b\u4ee5\u7528\u4e8e",(0,r.jsx)(s.a,{href:"/docusaurusv3/zh/docs/latest/deployment/deploy_manually",children:"\u624b\u52a8\u90e8\u7f72"}),"\u3002"]}),"\n"]}),"\n"]})]})}const h=function(e={}){const{wrapper:s}=Object.assign({},(0,t.ah)(),e.components);return s?(0,r.jsx)(s,Object.assign({},e,{children:(0,r.jsx)(a,e)})):a(e)}},11151:(e,s,n)=>{n.d(s,{Zo:()=>d,ah:()=>c});var r=n(67294);const t=r.createContext({});function c(e){const s=r.useContext(t);return r.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const l={};function d({components:e,children:s,disableParentContext:n}){let d;return d=n?"function"==typeof e?e({}):e||l:c(e),r.createElement(t.Provider,{value:d},s)}}}]);