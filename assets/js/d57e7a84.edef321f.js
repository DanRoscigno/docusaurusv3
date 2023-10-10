"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[64719],{8818:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var n=s(85893),a=s(11151);const r={},i="HLL (HyperLogLog)",o={id:"sql-reference/sql-statements/data-types/HLL",title:"HLL (HyperLogLog)",description:"Description",source:"@site/versioned_docs/version-3.0/sql-reference/sql-statements/data-types/HLL.md",sourceDirName:"sql-reference/sql-statements/data-types",slug:"/sql-reference/sql-statements/data-types/HLL",permalink:"/doc/docs/3.0/sql-reference/sql-statements/data-types/HLL",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/sql-reference/sql-statements/data-types/HLL.md",tags:[],version:"3.0",frontMatter:{},sidebar:"documentation",previous:{title:"FLOAT",permalink:"/doc/docs/3.0/sql-reference/sql-statements/data-types/FLOAT"},next:{title:"INT",permalink:"/doc/docs/3.0/sql-reference/sql-statements/data-types/INT"}},l={},c=[{value:"Description",id:"description",level:2},{value:"Examples",id:"examples",level:2}];function d(e){const t=Object.assign({h1:"h1",h2:"h2",p:"p",ul:"ul",li:"li",a:"a",pre:"pre",code:"code"},(0,a.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"hll-hyperloglog",children:"HLL (HyperLogLog)"}),"\n",(0,n.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,n.jsx)(t.p,{children:"HLL is used for approximate count distinct."}),"\n",(0,n.jsx)(t.p,{children:"The storage space used by HLL is determined by the distinct values in the hash value. The storage space varies depending on three conditions:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"HLL is empty. No value is inserted into HLL and the storage cost is the lowest, which is 80 bytes."}),"\n",(0,n.jsx)(t.li,{children:"The number of distinct hash values in HLL is less than or equal to 160. The highest storage cost is 1360 bytes (80 + 160 * 8 = 1360)."}),"\n",(0,n.jsx)(t.li,{children:"The number of distinct hash values in HLL is greater than 160. The storage cost is fixed at 16,464 bytes (80 + 16 * 1024 = 16464)."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"In actual business scenarios, data volume and data distribution affect the memory usage of queries and the accuracy of the approximate result. You need to consider these two factors:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Data volume: HLL returns an approximate value. A larger data volume results in a more accurate result. A smaller data volume results in larger deviation."}),"\n",(0,n.jsx)(t.li,{children:"Data distribution\uff1aIn the case of large data volume and high-cardinality dimension column for GROUP BY\uff0cdata computation will use more memory. HLL is not recommended in this situation. It is recommended when you perform no-group-by count distinct or GROUP BY on low-cardinality dimension columns."}),"\n",(0,n.jsx)(t.li,{children:"Query granularity: If you query data at a large query granularity, we recommend you use the Aggregate table or materialized view to pre-aggregate data to reduce data volume."}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["For details about using HLL, see ",(0,n.jsx)(t.a,{href:"/doc/docs/3.0/using_starrocks/Using_HLL",children:"Use HLL for approximate count distinct"})," and ",(0,n.jsx)(t.a,{href:"/doc/docs/3.0/sql-reference/sql-statements/data-definition/HLL",children:"HLL"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.p,{children:"Specify the column type as HLL when you create a table and use the hll_union() function to aggregate data."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:"CREATE TABLE hllDemo\n(\n    k1 TINYINT,\n    v1 HLL HLL_UNION\n)\nENGINE=olap\nAGGREGATE KEY(k1)\nDISTRIBUTED BY HASH(k1);\n"})})]})}const u=function(e={}){const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(d,e)})):d(e)}},11151:(e,t,s)=>{s.d(t,{Zo:()=>o,ah:()=>r});var n=s(67294);const a=n.createContext({});function r(e){const t=n.useContext(a);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const i={};function o({components:e,children:t,disableParentContext:s}){let o;return o=s?"function"==typeof e?e({}):e||i:r(e),n.createElement(a.Provider,{value:o},t)}}}]);