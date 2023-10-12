"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[16353],{17791:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>d,contentTitle:()=>l,default:()=>a,frontMatter:()=>c,metadata:()=>r,toc:()=>o});var t=s(85893),i=s(11151);const c={},l="multi_distinct_sum",r={id:"sql-reference/sql-functions/aggregate-functions/multi_distinct_sum",title:"multi_distinct_sum",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.1/sql-reference/sql-functions/aggregate-functions/multi_distinct_sum.md",sourceDirName:"sql-reference/sql-functions/aggregate-functions",slug:"/sql-reference/sql-functions/aggregate-functions/multi_distinct_sum",permalink:"/doc/zh/docs/sql-reference/sql-functions/aggregate-functions/multi_distinct_sum",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-functions/aggregate-functions/multi_distinct_sum.md",tags:[],version:"3.1",frontMatter:{},sidebar:"Chinese31",previous:{title:"multi_distinct_count",permalink:"/doc/zh/docs/sql-reference/sql-functions/aggregate-functions/multi_distinct_count"},next:{title:"PERCENTILE_APPROX",permalink:"/doc/zh/docs/sql-reference/sql-functions/aggregate-functions/percentile_approx"}},d={},o=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function u(n){const e=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",pre:"pre",ul:"ul",li:"li"},(0,i.ah)(),n.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"multi_distinct_sum",children:"multi_distinct_sum"}),"\n",(0,t.jsx)(e.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,t.jsxs)(e.p,{children:["\u8fd4\u56de ",(0,t.jsx)(e.code,{children:"expr"})," \u4e2d\u53bb\u9664\u91cd\u590d\u503c\u540e\u7684\u603b\u548c\uff0c\u529f\u80fd\u7b49\u540c\u4e8e sum(distinct expr)\u3002"]}),"\n",(0,t.jsx)(e.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-Haskell",children:"multi_distinct_sum(expr)\n"})}),"\n",(0,t.jsx)(e.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"epxr"}),": \u7528\u4e8e\u6307\u5b9a\u53c2\u4e0e\u8fd0\u7b97\u7684\u5217\u3002\u5217\u503c\u53ef\u4ee5\u4e3a TINYINT\uff0cSMALLINT\uff0cINT\uff0cLARGEINT, FLOAT\uff0cDOUBLE\uff0c\u6216 DECIMAL \u7c7b\u578b\u3002"]}),"\n",(0,t.jsx)(e.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,t.jsx)(e.p,{children:"\u5217\u503c\u548c\u8fd4\u56de\u503c\u7c7b\u578b\u7684\u6620\u5c04\u5173\u7cfb\u5982\u4e0b\uff1a"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"BOOLEAN -> BIGINT"}),"\n",(0,t.jsx)(e.li,{children:"TINYINT -> BIGINT"}),"\n",(0,t.jsx)(e.li,{children:"SMALLINT -> BIGINT"}),"\n",(0,t.jsx)(e.li,{children:"INT -> BIGINT"}),"\n",(0,t.jsx)(e.li,{children:"BIGINT -> BIGINT"}),"\n",(0,t.jsx)(e.li,{children:"FLOAT -> DOUBLE"}),"\n",(0,t.jsx)(e.li,{children:"DOUBLE -> DOUBLE"}),"\n",(0,t.jsx)(e.li,{children:"LARGEINT -> LARGEINT"}),"\n",(0,t.jsx)(e.li,{children:"DECIMALV2 -> DECIMALV2"}),"\n",(0,t.jsx)(e.li,{children:"DECIMAL32 -> DECIMAL128"}),"\n",(0,t.jsx)(e.li,{children:"DECIMAL64 -> DECIMAL128"}),"\n",(0,t.jsx)(e.li,{children:"DECIMAL128 -> DECIMAL128"}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-plain",metastring:"text",children:"-- \u521b\u5efa\u4e00\u5f20\u8868\uff0c\u8be5\u8868\u53ea\u6709\u4e00\u4e2a int \u57df\u3002\nCREATE TABLE tabl\n(k0 BIGINT NOT NULL) ENGINE=OLAP\nDUPLICATE KEY(`k0`)\nCOMMENT \"OLAP\"\nDISTRIBUTED BY HASH(`k0`)\nPROPERTIES(\n    \"replication_num\" = \"3\",\n    \"storage_format\" = \"DEFAULT\"\n);\nQuery OK, 0 rows affected (0.01 sec)\n\n-- \u63d2\u5165\u503c 0,1,1,1,2,2\u3002\nMySQL > INSERT INTO tabl VALUES ('0'), ('1'), ('1'), ('1'), ('2'), ('2');\nQuery OK, 6 rows affected (0.15 sec)\n\n-- k0 \u7684\u503c\u53bb\u9664\u91cd\u590d\u540e\u4e3a 0,1,2, \u5c06\u5176\u76f8\u52a0\u5f97\u5230 3\u3002\nMySQL > select multi_distinct_sum(k0) from tabl;\n+------------------------+\n| multi_distinct_sum(k0) |\n+------------------------+\n|                      3 |\n+------------------------+\n1 row in set (0.03 sec)\n"})})]})}const a=function(n={}){const{wrapper:e}=Object.assign({},(0,i.ah)(),n.components);return e?(0,t.jsx)(e,Object.assign({},n,{children:(0,t.jsx)(u,n)})):u(n)}},11151:(n,e,s)=>{s.d(e,{Zo:()=>r,ah:()=>c});var t=s(67294);const i=t.createContext({});function c(n){const e=t.useContext(i);return t.useMemo((()=>"function"==typeof n?n(e):{...e,...n}),[e,n])}const l={};function r({components:n,children:e,disableParentContext:s}){let r;return r=s?"function"==typeof n?n({}):n||l:c(n),t.createElement(i.Provider,{value:r},e)}}}]);