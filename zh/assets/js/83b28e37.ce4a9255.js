"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[40691],{70828:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>t,contentTitle:()=>d,default:()=>o,frontMatter:()=>c,metadata:()=>i,toc:()=>a});var s=r(85893),l=r(11151);const c={},d="\u7528\u6237\u81ea\u5b9a\u4e49\u53d8\u91cf",i={id:"reference/user_defined_variables",title:"\u7528\u6237\u81ea\u5b9a\u4e49\u53d8\u91cf",description:"\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u58f0\u660e\u548c\u4f7f\u7528\u7528\u6237\u81ea\u5b9a\u4e49\u53d8\u91cf\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.1/reference/user_defined_variables.md",sourceDirName:"reference",slug:"/reference/user_defined_variables",permalink:"/docusaurusv3/zh/docs/reference/user_defined_variables",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/reference/user_defined_variables.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"\u7cfb\u7edf\u53d8\u91cf",permalink:"/docusaurusv3/zh/docs/reference/System_variable"},next:{title:"\u9519\u8bef\u7801",permalink:"/docusaurusv3/zh/docs/reference/Error_code"}},t={},a=[{value:"\u4f7f\u7528\u8bf4\u660e",id:"\u4f7f\u7528\u8bf4\u660e",level:2},{value:"\u58f0\u660e\u81ea\u5b9a\u4e49\u53d8\u91cf",id:"\u58f0\u660e\u81ea\u5b9a\u4e49\u53d8\u91cf",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:3},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:3},{value:"<strong>\u4f7f\u7528\u573a\u666f</strong>",id:"\u4f7f\u7528\u573a\u666f",level:2}];function h(e){const n=Object.assign({h1:"h1",p:"p",h2:"h2",ul:"ul",li:"li",h3:"h3",pre:"pre",code:"code",blockquote:"blockquote",strong:"strong",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,l.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"\u7528\u6237\u81ea\u5b9a\u4e49\u53d8\u91cf",children:"\u7528\u6237\u81ea\u5b9a\u4e49\u53d8\u91cf"}),"\n",(0,s.jsx)(n.p,{children:"\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u58f0\u660e\u548c\u4f7f\u7528\u7528\u6237\u81ea\u5b9a\u4e49\u53d8\u91cf\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u81ea 2.5 \u7248\u672c\u8d77\uff0c StarRocks \u652f\u6301\u7528\u6237\u58f0\u660e\u81ea\u5b9a\u4e49\u53d8\u91cf (user-defined variables)\u3002\u81ea\u5b9a\u4e49\u53d8\u91cf\u7528\u4e8e\u5b58\u50a8\u7279\u5b9a\u7684\u503c\uff0c\u540e\u7eed\u5f15\u7528\u5728 SQL \u8bed\u53e5\u4e2d\uff0c\u7b80\u5316 SQL \u8bed\u53e5\u7684\u7f16\u5199\u548c\u907f\u514d\u91cd\u590d\u8ba1\u7b97\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u4f7f\u7528\u8bf4\u660e",children:"\u4f7f\u7528\u8bf4\u660e"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u5f53\u524d\u4ec5\u652f\u6301\u58f0\u660e\u4f1a\u8bdd\u7ea7\u522b\u7684\u81ea\u5b9a\u4e49\u53d8\u91cf\uff0c\u5373\u7528\u6237\u53ea\u80fd\u4f7f\u7528\u81ea\u5df1\u58f0\u660e\u7684\u81ea\u5b9a\u4e49\u53d8\u91cf\uff0c\u4e14\u5982\u5ba2\u6237\u7aef\u65ad\u5f00\uff0c\u90a3\u4e48\u5f53\u524d\u4f1a\u8bdd\u4e2d\u6240\u6709\u81ea\u5b9a\u4e49\u53d8\u91cf\u5c06\u5931\u6548\u3002"}),"\n",(0,s.jsx)(n.li,{children:"StarRocks \u6682\u4e0d\u652f\u6301\u4f7f\u7528 SHOW \u8bed\u53e5\u67e5\u770b\u5df2\u6709\u7684\u81ea\u5b9a\u4e49\u53d8\u91cf\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u4e0d\u652f\u6301\u58f0\u660e BITMAP\u3001HLL\u3001PERCENTILE \u548c ARRAY \u7c7b\u578b\u7684\u81ea\u5b9a\u4e49\u53d8\u91cf\uff0cJSON \u7c7b\u578b\u7684\u81ea\u5b9a\u4e49\u53d8\u91cf\u4f1a\u8f6c\u6362\u4e3a STRING \u7c7b\u578b\u8fdb\u884c\u5b58\u50a8\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u58f0\u660e\u81ea\u5b9a\u4e49\u53d8\u91cf",children:"\u58f0\u660e\u81ea\u5b9a\u4e49\u53d8\u91cf"}),"\n",(0,s.jsx)(n.h3,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plain",children:"SET @var_name = expr [, ...];\n"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u8bf4\u660e"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\u58f0\u660e\u81ea\u5b9a\u4e49\u53d8\u91cf\u65f6\uff0c\u5fc5\u987b\u52a0\u524d\u7f00 ",(0,s.jsx)(n.code,{children:"@"}),"\u3002"]}),"\n",(0,s.jsx)(n.li,{children:"\u53ef\u540c\u65f6\u58f0\u660e\u591a\u4e2a\u81ea\u5b9a\u4e49\u53d8\u91cf\uff0c\u591a\u4e2a\u53d8\u91cf\u4e4b\u95f4\u7528\u9017\u53f7 (,) \u9694\u5f00\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u652f\u6301\u591a\u6b21\u58f0\u660e\u540c\u4e00\u81ea\u5b9a\u4e49\u53d8\u91cf\uff0c\u65b0\u58f0\u660e\u7684\u503c\u4f1a\u8986\u76d6\u539f\u6709\u503c\u3002"}),"\n",(0,s.jsxs)(n.li,{children:["\u5982\u5728\u4e00\u4e2a SQL \u8bed\u53e5\u4e2d\u5f15\u7528\u4e86\u6ca1\u6709\u58f0\u660e\u8fc7\u7684\u53d8\u91cf\uff0c\u8be5\u53d8\u91cf\u503c\u9ed8\u8ba4\u4e3a ",(0,s.jsx)(n.code,{children:"NULL"})," \u4e14\u4e3a STRING \u7c7b\u578b\u3002"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"\u53c2\u6570"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"\u5fc5\u586b"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"\u8bf4\u660e"})})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"var_name"}),(0,s.jsx)(n.td,{children:"\u662f"}),(0,s.jsxs)(n.td,{children:["\u81ea\u5b9a\u4e49\u53d8\u91cf\u540d\u79f0\uff0c\u547d\u540d\u89c4\u5219\u5982\u4e0b\uff1a",(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:"\u5fc5\u987b\u7531\u5b57\u6bcd (a-z \u6216 A-Z)\u3001\u6570\u5b57 (0-9) \u6216\u4e0b\u5212\u7ebf (_) \u7ec4\u6210\u3002"}),(0,s.jsx)("li",{children:"\u603b\u957f\u5ea6\u4e0d\u80fd\u8d85\u8fc7 64 \u4e2a\u5b57\u7b26\u3002"})]})," \u4f8b\u5982\uff0c@'my-var'\u3001@\"my-var\" \u548c @`my-var`\u3002\u5b57\u7b26\u4e32\u7c7b\u578b\u7684\u53d8\u91cf\u540d\u79f0\u53ef\u4ee5\u5305\u542b\u9664\u5b57\u6bcd\u3001\u6570\u5b57\u548c\u4e0b\u5212\u7ebf (_) \u4ee5\u5916\u7684\u5176\u4ed6\u5b57\u7b26\uff0c\u4f8b\u5982\u53e5\u70b9 (.)\u3002"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"expr"}),(0,s.jsx)(n.td,{children:"\u662f"}),(0,s.jsxs)(n.td,{children:["\u81ea\u5b9a\u4e49\u53d8\u91cf\u5b58\u50a8\u7684\u503c\u3002\u652f\u6301\u7b80\u5355\u503c\uff0c\u4f8b\u5982 ",(0,s.jsx)(n.code,{children:"43"}),"\uff1b\u4e5f\u652f\u6301\u590d\u6742\u8868\u8fbe\u5f0f\uff0c\u5982 SELECT \u67e5\u8be2\u8fd4\u56de\u7684\u503c\u3002\u8868\u8fbe\u5f0f\u8ba1\u7b97\u7ed3\u679c\u7684\u6570\u636e\u7c7b\u578b\u5373\u4e3a\u53d8\u91cf\u7684\u6570\u636e\u7c7b\u578b\u3002"]})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,s.jsx)(n.p,{children:"\u793a\u4f8b\u4e00\uff1a\u58f0\u660e\u4e00\u4e2a\u6570\u503c\u4e3a\u81ea\u5b9a\u4e49\u53d8\u91cf\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"SET @var = 43;\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u793a\u4f8b\u4e8c\uff1a\u58f0\u660e SELECT \u8bed\u53e5\u8fd4\u56de\u7684\u503c\u4e3a\u81ea\u5b9a\u4e49\u53d8\u91cf\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"SET @var = (SELECT SUM(v1) FROM test);\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u793a\u4f8b\u4e09\uff1a\u4e00\u6b21\u6027\u58f0\u660e\u591a\u4e2a\u53d8\u91cf\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"SET @v1=1, @v2=2;\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u4f7f\u7528\u573a\u666f",children:(0,s.jsx)(n.strong,{children:"\u4f7f\u7528\u573a\u666f"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\u7b80\u5316 SQL \u8bed\u53e5\u7684\u7f16\u5199\u3002\u793a\u4f8b\u5982\u4e0b\uff0c\u6267\u884c SELECT \u8bed\u53e5\u65f6\uff0c",(0,s.jsx)(n.code,{children:"@var"})," \u4f1a\u88ab ",(0,s.jsx)(n.code,{children:"1"})," \u66ff\u6362\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plain",children:"SET @var = 1;\nSELECT @var, v1 from test;\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\u907f\u514d\u91cd\u590d\u8ba1\u7b97\u3002\u793a\u4f8b\u5982\u4e0b\uff0c\u6267\u884c SELECT \u8bed\u53e5\u65f6\uff0c",(0,s.jsx)(n.code,{children:"@var"})," \u4f1a\u88ab ",(0,s.jsx)(n.code,{children:"select sum(c1) from tbl"})," \u547d\u4ee4\u7684\u8ba1\u7b97\u7ed3\u679c\u66ff\u6362\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plain",children:"SET @var = (select sum(c1) from tbl);\nSELECT @var, v1 from test;\n"})}),"\n"]}),"\n"]})]})}const o=function(e={}){const{wrapper:n}=Object.assign({},(0,l.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(h,e)})):h(e)}},11151:(e,n,r)=>{r.d(n,{Zo:()=>i,ah:()=>c});var s=r(67294);const l=s.createContext({});function c(e){const n=s.useContext(l);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const d={};function i({components:e,children:n,disableParentContext:r}){let i;return i=r?"function"==typeof e?e({}):e||d:c(e),s.createElement(l.Provider,{value:i},n)}}}]);