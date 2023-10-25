"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[69416],{21027:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>u,frontMatter:()=>l,metadata:()=>r,toc:()=>d});var i=s(85893),t=s(11151);const l={displayed_sidebar:"English"},c="multi_distinct_sum",r={id:"sql-reference/sql-functions/aggregate-functions/multi_distinct_sum",title:"multi_distinct_sum",description:"Description",source:"@site/versioned_docs/version-2.3/sql-reference/sql-functions/aggregate-functions/multi_distinct_sum.md",sourceDirName:"sql-reference/sql-functions/aggregate-functions",slug:"/sql-reference/sql-functions/aggregate-functions/multi_distinct_sum",permalink:"/docs/2.3/sql-reference/sql-functions/aggregate-functions/multi_distinct_sum",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-functions/aggregate-functions/multi_distinct_sum.md",tags:[],version:"2.3",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"multi_distinct_count",permalink:"/docs/2.3/sql-reference/sql-functions/aggregate-functions/multi_distinct_count"},next:{title:"PERCENTILE_APPROX",permalink:"/docs/2.3/sql-reference/sql-functions/aggregate-functions/percentile_approx"}},a={},d=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function o(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",pre:"pre",ul:"ul",li:"li",ol:"ol"},(0,t.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"multi_distinct_sum",children:"multi_distinct_sum"}),"\n",(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["Returns the sum of distinct values in ",(0,i.jsx)(n.code,{children:"expr"}),", equivalent to sum(distinct expr)."]}),"\n",(0,i.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Haskell",children:"multi_distinct_sum(expr)\n"})}),"\n",(0,i.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"expr"}),": the columns involved in the calculation. Column values can be of the following types: TINYINT, SMALLINT, INT, LARGEINT, FLOAT, DOUBLE, or DECIMAL."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"return-value",children:"Return value"}),"\n",(0,i.jsx)(n.p,{children:"The mapping between column values and return value types is as follows:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"BOOLEAN -> BIGINT"}),"\n",(0,i.jsx)(n.li,{children:"TINYINT -> BIGINT"}),"\n",(0,i.jsx)(n.li,{children:"SMALLINT -> BIGINT"}),"\n",(0,i.jsx)(n.li,{children:"INT -> BIGINT"}),"\n",(0,i.jsx)(n.li,{children:"BIGINT -> BIGINT"}),"\n",(0,i.jsx)(n.li,{children:"FLOAT -> DOUBLE"}),"\n",(0,i.jsx)(n.li,{children:"DOUBLE -> DOUBLE"}),"\n",(0,i.jsx)(n.li,{children:"LARGEINT -> LARGEINT"}),"\n",(0,i.jsx)(n.li,{children:"DECIMALV2 -> DECIMALV2"}),"\n",(0,i.jsx)(n.li,{children:"DECIMAL32 -> DECIMAL128"}),"\n",(0,i.jsx)(n.li,{children:"DECIMAL64 -> DECIMAL128"}),"\n",(0,i.jsx)(n.li,{children:"DECIMAL128 -> DECIMAL128"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Create a table with ",(0,i.jsx)(n.code,{children:"k0"})," as the INT field."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'CREATE TABLE tabl\n(k0 BIGINT NOT NULL) ENGINE=OLAP\nDUPLICATE KEY(`k0`)\nCOMMENT "OLAP"\nDISTRIBUTED BY HASH(`k0`) BUCKETS 1\nPROPERTIES(\n    "replication_num" = "1",\n    "in_memory" = "false",\n    "storage_format" = "DEFAULT"\n);\n'})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Insert values into the table."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"-- \nINSERT INTO tabl VALUES ('0'), ('1'), ('1'), ('1'), ('2'), ('2');\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Use multi_distinct_sum() to calculate the sum of distinct values in the ",(0,i.jsx)(n.code,{children:"k0"})," column."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-plain",metastring:"text",children:"MySQL > select multi_distinct_sum(k0) from tabl;\n+------------------------+\n| multi_distinct_sum(k0) |\n+------------------------+\n|                      3 |\n+------------------------+\n1 row in set (0.03 sec)\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The distinct values of ",(0,i.jsx)(n.code,{children:"k0"})," is 0, 1, 2 and we can get 3 after adding them together."]}),"\n"]}),"\n"]})]})}const u=function(e={}){const{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(o,e)})):o(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>r,ah:()=>l});var i=s(67294);const t=i.createContext({});function l(e){const n=i.useContext(t);return i.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const c={};function r({components:e,children:n,disableParentContext:s}){let r;return r=s?"function"==typeof e?e({}):e||c:l(e),i.createElement(t.Provider,{value:r},n)}}}]);