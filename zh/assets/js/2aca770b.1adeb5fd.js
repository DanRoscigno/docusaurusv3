"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[25203],{52757:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>t,toc:()=>o});var i=s(85893),c=s(11151);const l={},r="min_by",t={id:"sql-reference/sql-functions/aggregate-functions/min_by",title:"min_by",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.1/sql-reference/sql-functions/aggregate-functions/min_by.md",sourceDirName:"sql-reference/sql-functions/aggregate-functions",slug:"/sql-reference/sql-functions/aggregate-functions/min_by",permalink:"/docusaurusv3/zh/docs/sql-reference/sql-functions/aggregate-functions/min_by",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-functions/aggregate-functions/min_by.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"MIN",permalink:"/docusaurusv3/zh/docs/sql-reference/sql-functions/aggregate-functions/min"},next:{title:"multi_distinct_count",permalink:"/docusaurusv3/zh/docs/sql-reference/sql-functions/aggregate-functions/multi_distinct_count"}},d={},o=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u4f7f\u7528\u8bf4\u660e",id:"\u4f7f\u7528\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function a(n){const e=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",pre:"pre",ul:"ul",li:"li",ol:"ol"},(0,c.ah)(),n.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"min_by",children:"min_by"}),"\n",(0,i.jsx)(e.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,i.jsxs)(e.p,{children:["\u8fd4\u56de\u4e0e ",(0,i.jsx)(e.code,{children:"y"})," \u7684\u6700\u5c0f\u503c\u5173\u8054\u7684 ",(0,i.jsx)(e.code,{children:"x"})," \u503c\u3002\u6bd4\u5982 ",(0,i.jsx)(e.code,{children:"SELECT min_by(subject, exam_result) FROM exam;"})," \u8868\u793a\u8fd4\u56de ",(0,i.jsx)(e.code,{children:"exam"})," \u8868\u4e2d\u8003\u8bd5\u5f97\u5206\u6700\u4f4e\u7684\u79d1\u76ee\u3002"]}),"\n",(0,i.jsx)(e.p,{children:"\u8be5\u51fd\u6570\u4ece 3.1 \u7248\u672c\u5f00\u59cb\u652f\u6301\u3002"}),"\n",(0,i.jsx)(e.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-Haskell",children:"min_by(x,y)\n"})}),"\n",(0,i.jsx)(e.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"x"}),": \u4e00\u4e2a\u4efb\u610f\u7c7b\u578b\u7684\u8868\u8fbe\u5f0f\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"y"}),": \u53ef\u4ee5\u6392\u5e8f\u7684\u67d0\u4e2a\u7c7b\u578b\u7684\u8868\u8fbe\u5f0f\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,i.jsxs)(e.p,{children:["\u8fd4\u56de\u503c\u7684\u7c7b\u578b\u4e0e ",(0,i.jsx)(e.code,{children:"x"})," \u76f8\u540c\u3002"]}),"\n",(0,i.jsx)(e.h2,{id:"\u4f7f\u7528\u8bf4\u660e",children:"\u4f7f\u7528\u8bf4\u660e"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"y"})," \u5fc5\u987b\u662f\u53ef\u6392\u5e8f\u7684\u6570\u636e\u7c7b\u578b\u3002\u5982\u679c ",(0,i.jsx)(e.code,{children:"y"})," \u4e0d\u53ef\u6392\u5e8f\uff0c\u6bd4\u5982\u662f BITMAP \u6216\u8005 HLL \u7c7b\u578b\uff0c\u8fd4\u56de\u62a5\u9519\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"y"})," \u503c\u5305\u542b NULL \u65f6\uff0cNULL \u5bf9\u5e94\u7684\u884c\u4e0d\u53c2\u4e0e\u8ba1\u7b97\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["\u5982\u679c\u5b58\u5728\u591a\u884c\u90fd\u6709\u6700\u5c0f\u503c\uff0c\u5219\u8fd4\u56de\u6700\u5148\u51fa\u73b0\u7684\u90a3\u4e2a ",(0,i.jsx)(e.code,{children:"x"})," \u503c\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["\u521b\u5efa\u8868 ",(0,i.jsx)(e.code,{children:"exam"}),"\u3002"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-SQL",children:"CREATE TABLE exam (\n    subject_id INT,\n    subject STRING,\n    exam_result INT\n) DISTRIBUTED BY HASH(`subject_id`);\n"})}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u5411\u8868\u63d2\u5165\u6570\u636e\u5e76\u67e5\u8be2\u8868\u4e2d\u6570\u636e\u3002"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-SQL",children:"insert into exam values\n(1,'math',90),\n(2,'english',70),\n(3,'physics',95),\n(4,'chemistry',85),\n(5,'music',95),\n(6,'biology',null);\n\nselect * from exam order by subject_id;\n+------------+-----------+-------------+\n| subject_id | subject   | exam_result |\n+------------+-----------+-------------+\n|          1 | math      |          90 |\n|          2 | english   |          70 |\n|          3 | physics   |          95 |\n|          4 | chemistry |          85 |\n|          5 | music     |          95 |\n|          6 | biology   |        null |\n+------------+-----------+-------------+\n6 rows in set (0.03 sec)\n"})}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u8fd4\u56de\u5f97\u5206\u6700\u4f4e\u7684 1 \u4e2a\u79d1\u76ee\u3002"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-Plain",children:"SELECT min_by(subject, exam_result) FROM exam;\n+------------------------------+\n| min_by(subject, exam_result) |\n+------------------------------+\n| english                      |\n+------------------------------+\n1 row in set (0.01 sec)\n"})}),"\n"]}),"\n"]})]})}const u=function(n={}){const{wrapper:e}=Object.assign({},(0,c.ah)(),n.components);return e?(0,i.jsx)(e,Object.assign({},n,{children:(0,i.jsx)(a,n)})):a(n)}},11151:(n,e,s)=>{s.d(e,{Zo:()=>t,ah:()=>l});var i=s(67294);const c=i.createContext({});function l(n){const e=i.useContext(c);return i.useMemo((()=>"function"==typeof n?n(e):{...e,...n}),[e,n])}const r={};function t({components:n,children:e,disableParentContext:s}){let t;return t=s?"function"==typeof n?n({}):n||r:l(n),i.createElement(c.Provider,{value:t},e)}}}]);