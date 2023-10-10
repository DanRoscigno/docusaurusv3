"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[33146],{44922:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>u,frontMatter:()=>t,metadata:()=>d,toc:()=>l});var r=s(85893),o=s(11151);const t={},c="\u4f7f\u7528 debuginfo \u6587\u4ef6\u8fdb\u884c\u8c03\u8bd5",d={id:"developers/debuginfo",title:"\u4f7f\u7528 debuginfo \u6587\u4ef6\u8fdb\u884c\u8c03\u8bd5",description:"\u4e3a\u4e86\u964d\u4f4e StarRocks \u4e8c\u8fdb\u5236\u5305\u7684\u7a7a\u95f4\u5360\u7528\uff0c\u81ea 2.5 \u7248\u672c\u5f00\u59cb\uff0c\u6211\u4eec\u5c06 StarRocks BE \u4e8c\u8fdb\u5236\u4e2d\u7684\u8c03\u8bd5\u4fe1\u606f debuginfo \u6587\u4ef6\u5355\u72ec\u5206\u79bb\u5e76\u6253\u5305\u63d0\u4f9b\u4e0b\u8f7d\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.0/developers/debuginfo.md",sourceDirName:"developers",slug:"/developers/debuginfo",permalink:"/doc/zh/docs/3.0/developers/debuginfo",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/developers/debuginfo.md",tags:[],version:"3.0",frontMatter:{},sidebar:"documentation",previous:{title:"How to build StarRocks",permalink:"/doc/zh/docs/3.0/developers/build-starrocks/handbook"},next:{title:"Setup StarRocks FE development environment on IDEA",permalink:"/doc/zh/docs/3.0/developers/development-environment/IDEA"}},i={},l=[{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:2},{value:"\u4f7f\u7528\u65b9\u6cd5",id:"\u4f7f\u7528\u65b9\u6cd5",level:2}];function a(e){const n=Object.assign({h1:"h1",p:"p",a:"a",img:"img",h2:"h2",ol:"ol",li:"li",pre:"pre",code:"code",blockquote:"blockquote",strong:"strong",ul:"ul"},(0,o.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"\u4f7f\u7528-debuginfo-\u6587\u4ef6\u8fdb\u884c\u8c03\u8bd5",children:"\u4f7f\u7528 debuginfo \u6587\u4ef6\u8fdb\u884c\u8c03\u8bd5"}),"\n",(0,r.jsx)(n.p,{children:"\u4e3a\u4e86\u964d\u4f4e StarRocks \u4e8c\u8fdb\u5236\u5305\u7684\u7a7a\u95f4\u5360\u7528\uff0c\u81ea 2.5 \u7248\u672c\u5f00\u59cb\uff0c\u6211\u4eec\u5c06 StarRocks BE \u4e8c\u8fdb\u5236\u4e2d\u7684\u8c03\u8bd5\u4fe1\u606f debuginfo \u6587\u4ef6\u5355\u72ec\u5206\u79bb\u5e76\u6253\u5305\u63d0\u4f9b\u4e0b\u8f7d\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["\u5bf9\u4e8e\u666e\u901a\u7528\u6237\uff0c\u5f53\u524d\u6539\u52a8\u5bf9\u65e5\u5e38\u4f7f\u7528\u6ca1\u6709\u4efb\u4f55\u5f71\u54cd\uff0c\u60a8\u4f9d\u65e7\u53ef\u4ee5\u53ea\u4e0b\u8f7d\u4e8c\u8fdb\u5236\u5305\u6765\u8fdb\u884c\u90e8\u7f72\u548c\u5347\u7ea7\u64cd\u4f5c\u3002debuginfo \u5305\u4ec5\u9002\u7528\u4e8e\u5f00\u53d1\u8005\u4f7f\u7528 GDB \u5bf9\u7a0b\u5e8f\u8fdb\u884c\u8c03\u8bd5\u65f6\u4f7f\u7528\u3002\u60a8\u53ef\u4ee5\u5728",(0,r.jsx)(n.a,{href:"https://www.starrocks.io/download/community",children:"StarRocks \u5b98\u7f51"}),"\u4e0b\u8f7d\u5bf9\u5e94\u7248\u672c\u7684 debuginfo \u5305\u3002"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"debuginfo",src:s(20378).Z+"",width:"1778",height:"600"})}),"\n",(0,r.jsx)(n.h2,{id:"\u6ce8\u610f\u4e8b\u9879",children:"\u6ce8\u610f\u4e8b\u9879"}),"\n",(0,r.jsx)(n.p,{children:"\u63a8\u8350\u4f7f\u7528 GDB 12.1 \u53ca\u4ee5\u4e0a\u7248\u672c\u8fdb\u884c\u8c03\u8bd5\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u4f7f\u7528\u65b9\u6cd5",children:"\u4f7f\u7528\u65b9\u6cd5"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u4e0b\u8f7d\u5e76\u89e3\u538b debuginfo \u5305\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:"wget https://releases.starrocks.io/starrocks/StarRocks-<sr_ver>.debuginfo.tar.gz\n\ntar -xzvf StarRocks-<sr_ver>.debuginfo.tar.gz\n"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u8bf4\u660e"})}),"\n",(0,r.jsxs)(n.p,{children:["\u8bf7\u4f7f\u7528 StarRocks \u5bf9\u5e94\u7248\u672c\u53f7\u66ff\u6362\u4ee5\u4e0a\u547d\u4ee4\u884c\u4e2d\u7684 ",(0,r.jsx)(n.code,{children:"<sr_ver>"}),"\u3002"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u5728\u8fdb\u884c GDB debug \u65f6\u5bfc\u5165 debug info\u3002"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u65b9\u6cd5\u4e00"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Shell",children:"objcopy --add-gnu-debuglink=starrocks_be.debug starrocks_be\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u4ee5\u4e0a\u64cd\u4f5c\u4f1a\u81ea\u52a8\u628a debug info \u548c\u6267\u884c\u6587\u4ef6\u5173\u8054\u8d77\u6765\uff0cGDB debug \u65f6\u4f1a\u81ea\u52a8\u5173\u8054\u5e76\u52a0\u8f7d\u3002"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u65b9\u6cd5\u4e8c"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Shell",children:"gdb -s starrocks_be.debug -e starrocks_be -c `core_file`\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u5bf9\u4e8e perf \u548c pstack\uff0c\u60a8\u65e0\u9700\u989d\u5916\u64cd\u4f5c\u5373\u53ef\u76f4\u63a5\u4f7f\u7528\u3002"})]})}const u=function(e={}){const{wrapper:n}=Object.assign({},(0,o.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(a,e)})):a(e)}},20378:(e,n,s)=>{s.d(n,{Z:()=>r});const r=s.p+"assets/images/debug_info-5791bd74c1be19fa504931d9c8491749.png"},11151:(e,n,s)=>{s.d(n,{Zo:()=>d,ah:()=>t});var r=s(67294);const o=r.createContext({});function t(e){const n=r.useContext(o);return r.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const c={};function d({components:e,children:n,disableParentContext:s}){let d;return d=s?"function"==typeof e?e({}):e||c:t(e),r.createElement(o.Provider,{value:d},n)}}}]);