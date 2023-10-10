"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[88578],{65894:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var r=s(85893),t=s(11151);const i={},c="\u7cfb\u7edf\u9650\u5236",l={id:"reference/System_limit",title:"\u7cfb\u7edf\u9650\u5236",description:"\u672c\u6587\u4ecb\u7ecd\u4f7f\u7528 StarRocks \u7cfb\u7edf\u65f6\u9700\u8981\u6ce8\u610f\u7684\u4e8b\u9879\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.0/reference/System_limit.md",sourceDirName:"reference",slug:"/reference/System_limit",permalink:"/docusaurusv3/zh/docs/3.0/reference/System_limit",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/reference/System_limit.md",tags:[],version:"3.0",frontMatter:{},sidebar:"documentation",previous:{title:"\u9519\u8bef\u7801",permalink:"/docusaurusv3/zh/docs/3.0/reference/Error_code"},next:{title:"\u7cfb\u7edf\u53d8\u91cf",permalink:"/docusaurusv3/zh/docs/3.0/reference/System_variable"}},o={},d=[];function a(n){const e=Object.assign({h1:"h1",p:"p",ul:"ul",li:"li",strong:"strong"},(0,t.ah)(),n.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"\u7cfb\u7edf\u9650\u5236",children:"\u7cfb\u7edf\u9650\u5236"}),"\n",(0,r.jsx)(e.p,{children:"\u672c\u6587\u4ecb\u7ecd\u4f7f\u7528 StarRocks \u7cfb\u7edf\u65f6\u9700\u8981\u6ce8\u610f\u7684\u4e8b\u9879\u3002"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"StarRocks \u91c7\u7528 MySQL \u534f\u8bae\u8fdb\u884c\u901a\u4fe1\uff0c\u7528\u6237\u53ef\u901a\u8fc7 MySQL Client \u6216\u8005 JDBC \u8fde\u63a5\u5230 StarRocks \u96c6\u7fa4\u3002\u9009\u62e9 MySQL Client \u7248\u672c\u65f6\u5efa\u8bae\u91c7\u7528 5.1 \u53ca\u4e4b\u540e\u7684\u7248\u672c\uff0c5.1 \u4e4b\u524d\u7248\u672c\u4e0d\u652f\u6301\u957f\u5ea6\u8d85\u8fc7 16 \u4e2a\u5b57\u7b26\u7684\u7528\u6237\u540d\u3002"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u5bf9\u6570\u636e\u76ee\u5f55\u540d (Catalog)\u3001\u6570\u636e\u5e93\u540d\u3001\u8868\u540d\u3001\u89c6\u56fe\u540d\u3001\u5206\u533a\u540d\u3001\u5217\u540d\u3001\u7528\u6237\u540d\u3001\u89d2\u8272\u540d\u7684\u8981\u6c42\uff1a"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\u53ea\u80fd\u7531\u6570\u5b57 (0-9)\u3001\u5b57\u6bcd (a-z\u6216A-Z)\uff0c\u4ee5\u53ca\u4e0b\u5212\u7ebf (_) \u7ec4\u6210\u3002",(0,r.jsx)(e.strong,{children:"\u7528\u6237\u540d (username) \u53ef\u4ee5\u4f7f\u7528\u7eaf\u6570\u5b57\u547d\u540d\u3002"})]}),"\n",(0,r.jsxs)(e.li,{children:["\u957f\u5ea6\u4e0d\u80fd\u8d85\u8fc7 64 \u4e2a\u5b57\u7b26\u3002",(0,r.jsx)(e.strong,{children:"\u5176\u4e2d\uff0c\u6570\u636e\u76ee\u5f55\u540d\u3001\u6570\u636e\u5e93\u540d\u3001\u8868\u540d\u3001\u5217\u540d\u4e0d\u80fd\u8d85\u8fc7 1023 \u5b57\u7b26 (\u2264 1023)\u3002"})]}),"\n",(0,r.jsx)(e.li,{children:"\u6570\u636e\u76ee\u5f55\u540d\u3001\u6570\u636e\u5e93\u540d\u3001\u8868\u540d\u3001\u89c6\u56fe\u540d\u3001\u5206\u533a\u540d\u3001\u4ee5\u53ca\u89d2\u8272\u540d\u5747\u53ea\u80fd\u4ee5\u5c0f\u5199\u6216\u5927\u5199\u5b57\u6bcd\u5f00\u5934\u3002"}),"\n",(0,r.jsx)(e.li,{children:"\u5217\u540d\u53ef\u4ee5\u4e0b\u5212\u7ebf\u5f00\u5934\u3002"}),"\n",(0,r.jsxs)(e.li,{children:["\u6570\u636e\u76ee\u5f55\u540d\u3001\u6570\u636e\u5e93\u540d\u3001\u8868\u540d\u3001\u89c6\u56fe\u540d\u3001\u7528\u6237\u540d\u3001\u89d2\u8272\u540d",(0,r.jsx)(e.strong,{children:"\u5927\u5c0f\u5199\u654f\u611f"}),"\uff0c\u5217\u540d\u548c\u5206\u533a\u540d",(0,r.jsx)(e.strong,{children:"\u5927\u5c0f\u5199\u4e0d\u654f\u611f"}),"\u3002"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u5bf9\u6807\u7b7e\uff08Label\uff09\u540d\u7684\u8981\u6c42\uff1a\n\u5bfc\u5165\u6570\u636e\u65f6\u53ef\u6307\u5b9a\u4efb\u52a1\u7684\u6807\u7b7e\uff08Label\uff09\u3002\u6807\u7b7e\u540d\u53ef\u7531\u6570\u5b57 (0-9)\u3001\u5927\u5c0f\u5199\u5b57\u6bcd\uff08a-z\u6216A-Z\uff09\uff0c\u4ee5\u53ca\u4e0b\u5212\u7ebf(_)\u7ec4\u6210\uff0c\u4e14\u957f\u5ea6\u4e0d\u80fd\u8d85\u8fc7 128 \u4e2a\u5b57\u7b26\u3002\u6807\u7b7e\u540d\u5bf9\u8d77\u59cb\u5b57\u7b26\u65e0\u8981\u6c42\u3002"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u5efa\u8868\u65f6\uff0cKey \u5217\u4e0d\u80fd\u4f7f\u7528 FLOAT \u6216\u8005 DOUBLE \u7c7b\u578b\uff0c\u53ef\u7528 DECIMAL \u7c7b\u578b\u8868\u793a\u5c0f\u6570\u3002"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"VARCHAR \u6700\u5927\u957f\u5ea6\uff1a"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u5bf9\u4e8e StarRocks 2.1 \u4e4b\u524d\u7684\u7248\u672c\uff0c\u957f\u5ea6\u8303\u56f4\u4e3a 1~65533 \u5b57\u8282\u3002"}),"\n",(0,r.jsx)(e.li,{children:"\u3010\u516c\u6d4b\u4e2d\u3011\u81ea StarRocks 2.1 \u7248\u672c\u5f00\u59cb\uff0c\u957f\u5ea6\u8303\u56f4\u4e3a 1~1048576 \u5b57\u8282\u30021048578\uff08\u884c\u6700\u5927\u503c\uff09- 2\uff08\u957f\u5ea6\u6807\u8bc6\u4f4d\uff0c\u8bb0\u5f55\u5b9e\u9645\u6570\u636e\u957f\u5ea6\uff09= 1048576\u3002"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"StarRocks \u4ec5\u652f\u6301 UTF8 \u7f16\u7801\uff0c\u4e0d\u652f\u6301 GB \u7b49\u7f16\u7801\u3002"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"StarRocks \u4e0d\u652f\u6301\u4fee\u6539\u8868\u4e2d\u7684\u5217\u540d\u3002"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u4e00\u4e2a\u67e5\u8be2\u4e2d\u5b50\u67e5\u8be2\u7684\u6700\u5927\u4e2a\u6570\u9ed8\u8ba4\u4e3a 10000\u3002"}),"\n"]}),"\n"]})]})}const h=function(n={}){const{wrapper:e}=Object.assign({},(0,t.ah)(),n.components);return e?(0,r.jsx)(e,Object.assign({},n,{children:(0,r.jsx)(a,n)})):a(n)}},11151:(n,e,s)=>{s.d(e,{Zo:()=>l,ah:()=>i});var r=s(67294);const t=r.createContext({});function i(n){const e=r.useContext(t);return r.useMemo((()=>"function"==typeof n?n(e):{...e,...n}),[e,n])}const c={};function l({components:n,children:e,disableParentContext:s}){let l;return l=s?"function"==typeof n?n({}):n||c:i(n),r.createElement(t.Provider,{value:l},e)}}}]);