"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[3567],{75479:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>c,metadata:()=>i,toc:()=>o});var t=s(85893),r=s(11151);const c={},d="CREATE FUNCTION",i={id:"sql-reference/sql-statements/data-definition/create-function",title:"CREATE FUNCTION",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.1/sql-reference/sql-statements/data-definition/create-function.md",sourceDirName:"sql-reference/sql-statements/data-definition",slug:"/sql-reference/sql-statements/data-definition/create-function",permalink:"/doc/zh/docs/sql-reference/sql-statements/data-definition/create-function",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-statements/data-definition/create-function.md",tags:[],version:"3.1",frontMatter:{},sidebar:"Chinese31",previous:{title:"USE",permalink:"/doc/zh/docs/sql-reference/sql-statements/data-definition/USE"},next:{title:"DROP FUNCTION",permalink:"/doc/zh/docs/sql-reference/sql-statements/data-definition/drop-function"}},l={},o=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2}];function a(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",ul:"ul",li:"li",strong:"strong",a:"a",blockquote:"blockquote",pre:"pre",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,r.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"create-function",children:"CREATE FUNCTION"}),"\n",(0,t.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,t.jsx)(n.p,{children:"\u521b\u5efa UDF\uff08\u7528\u6237\u81ea\u5b9a\u4e49\u51fd\u6570\uff09\u3002\u5f53\u524d\u4ec5\u652f\u6301\u521b\u5efa Java UDF\uff0c\u5373 Java \u8bed\u8a00\u7f16\u5199\u7684\u81ea\u5b9a\u4e49\u51fd\u6570\uff0c\u5177\u4f53\u5305\u62ec\uff1a"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Scalar UDF\uff1a\u81ea\u5b9a\u4e49\u6807\u91cf\u51fd\u6570\u3002"}),"\n",(0,t.jsx)(n.li,{children:"UDAF\uff1a\u81ea\u5b9a\u4e49\u805a\u5408\u51fd\u6570\u3002"}),"\n",(0,t.jsx)(n.li,{children:"UDWF\uff1a\u81ea\u5b9a\u4e49\u7a97\u53e3\u51fd\u6570\u3002"}),"\n",(0,t.jsx)(n.li,{children:"UDTF\uff1a\u81ea\u5b9a\u4e49\u8868\u503c\u51fd\u6570\u3002"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.strong,{children:["\u66f4\u591a\u521b\u5efa\u548c\u4f7f\u7528 UDF \u7684\u4fe1\u606f\uff0c\u63a8\u8350\u53c2\u8003 ",(0,t.jsx)(n.a,{href:"/doc/zh/docs/sql-reference/sql-functions/JAVA_UDF",children:"Java UDF"}),"\u3002"]})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u6ce8\u610f"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u8981\u521b\u5efa\u5168\u5c40 UDF\uff0c\u9700\u8981\u62e5\u6709 SYSTEM \u7ea7 CREATE GLOBAL FUNCTION \u6743\u9650\u3002"}),"\n",(0,t.jsx)(n.li,{children:"\u8981\u521b\u5efa\u6570\u636e\u5e93\u7ea7\u522b\u7684 UDF\uff0c\u9700\u8981\u62e5\u6709 DATABASE \u7ea7 CREATE FUNCTION \u6743\u9650\u3002"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:'CREATE [GLOBAL][AGGREGATE | TABLE] FUNCTION function_name(arg_type [, ...])\nRETURNS return_type\n[PROPERTIES ("key" = "value" [, ...]) ]\n'})}),"\n",(0,t.jsx)(n.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"\u53c2\u6570"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"\u5fc5\u9009"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"\u8bf4\u660e"})})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"GLOBAL"}),(0,t.jsx)(n.td,{children:"\u5426"}),(0,t.jsx)(n.td,{children:"\u5982\u9700\u521b\u5efa\u5168\u5c40 UDF\uff0c\u9700\u6307\u5b9a\u8be5\u5173\u952e\u5b57\u3002\u4ece 3.0 \u7248\u672c\u5f00\u59cb\u652f\u6301\u3002"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"AGGREGATE"}),(0,t.jsx)(n.td,{children:"\u5426"}),(0,t.jsx)(n.td,{children:"\u5982\u8981\u521b\u5efa UDAF \u548c UDWF\uff0c\u9700\u6307\u5b9a\u8be5\u5173\u952e\u5b57\u3002"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"TABLE"}),(0,t.jsx)(n.td,{children:"\u5426"}),(0,t.jsx)(n.td,{children:"\u5982\u8981\u521b\u5efa UDTF\uff0c\u9700\u6307\u5b9a\u8be5\u5173\u952e\u5b57\u3002"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"function_name"}),(0,t.jsx)(n.td,{children:"\u662f"}),(0,t.jsxs)(n.td,{children:["\u51fd\u6570\u540d\uff0c\u53ef\u4ee5\u5305\u542b\u6570\u636e\u5e93\u540d\u79f0\uff0c\u6bd4\u5982\uff0c",(0,t.jsx)(n.code,{children:"db1.my_func"}),"\u3002\u5982\u679c ",(0,t.jsx)(n.code,{children:"function_name"})," \u4e2d\u5305\u542b\u4e86\u6570\u636e\u5e93\u540d\u79f0\uff0c\u90a3\u4e48\u8be5 UDF \u4f1a\u521b\u5efa\u5728\u5bf9\u5e94\u7684\u6570\u636e\u5e93\u4e2d\uff0c\u5426\u5219\u8be5 UDF \u4f1a\u521b\u5efa\u5728\u5f53\u524d\u6570\u636e\u5e93\u3002\u65b0\u51fd\u6570\u540d\u548c\u53c2\u6570\u4e0d\u80fd\u4e0e\u76ee\u6807\u6570\u636e\u5e93\u4e2d\u5df2\u6709\u7684\u51fd\u6570\u76f8\u540c\uff0c\u5426\u5219\u4f1a\u521b\u5efa\u5931\u8d25\uff1b\u5982\u53ea\u6709\u51fd\u6570\u540d\u76f8\u540c\uff0c\u53c2\u6570\u4e0d\u540c\uff0c\u5219\u53ef\u4ee5\u521b\u5efa\u6210\u529f\u3002"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"arg_type"}),(0,t.jsx)(n.td,{children:"\u662f"}),(0,t.jsxs)(n.td,{children:["\u51fd\u6570\u7684\u53c2\u6570\u7c7b\u578b\u3002\u5177\u4f53\u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\uff0c\u8bf7\u53c2\u89c1 ",(0,t.jsx)(n.a,{href:"/doc/zh/docs/sql-reference/sql-functions/JAVA_UDF#%E7%B1%BB%E5%9E%8B%E6%98%A0%E5%B0%84%E5%85%B3%E7%B3%BB",children:"Java UDF"}),"\u3002"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"return_type"}),(0,t.jsx)(n.td,{children:"\u662f"}),(0,t.jsxs)(n.td,{children:["\u51fd\u6570\u7684\u8fd4\u56de\u503c\u7c7b\u578b\u3002\u5177\u4f53\u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\uff0c\u8bf7\u53c2\u89c1 ",(0,t.jsx)(n.a,{href:"/doc/zh/docs/sql-reference/sql-functions/JAVA_UDF#%E7%B1%BB%E5%9E%8B%E6%98%A0%E5%B0%84%E5%85%B3%E7%B3%BB",children:"Java UDF"}),"\u3002"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"properties"}),(0,t.jsx)(n.td,{children:"\u662f"}),(0,t.jsxs)(n.td,{children:["\u51fd\u6570\u76f8\u5173\u5c5e\u6027\u3002\u521b\u5efa\u4e0d\u540c\u7c7b\u578b\u7684 UDF \u9700\u914d\u7f6e\u4e0d\u540c\u7684\u5c5e\u6027\uff0c\u8be6\u60c5\u548c\u793a\u4f8b\u8bf7\u53c2\u8003 ",(0,t.jsx)(n.a,{href:"/doc/zh/docs/sql-reference/sql-functions/JAVA_UDF#%E6%AD%A5%E9%AA%A4%E5%85%AD%E5%9C%A8-starrocks-%E4%B8%AD%E5%88%9B%E5%BB%BA-udf",children:"Java UDF"}),"\u3002"]})]})]})]})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(a,e)})):a(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>i,ah:()=>c});var t=s(67294);const r=t.createContext({});function c(e){const n=t.useContext(r);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const d={};function i({components:e,children:n,disableParentContext:s}){let i;return i=s?"function"==typeof e?e({}):e||d:c(e),t.createElement(r.Provider,{value:i},n)}}}]);