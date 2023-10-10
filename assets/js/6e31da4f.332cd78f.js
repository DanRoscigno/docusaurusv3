"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[93746],{73537:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>a});var t=s(85893),c=s(11151);const r={},i="count",o={id:"sql-reference/sql-functions/aggregate-functions/count",title:"count",description:"Description",source:"@site/versioned_docs/version-3.0/sql-reference/sql-functions/aggregate-functions/count.md",sourceDirName:"sql-reference/sql-functions/aggregate-functions",slug:"/sql-reference/sql-functions/aggregate-functions/count",permalink:"/doc/docs/3.0/sql-reference/sql-functions/aggregate-functions/count",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/sql-reference/sql-functions/aggregate-functions/count.md",tags:[],version:"3.0",frontMatter:{},sidebar:"documentation",previous:{title:"CORR",permalink:"/doc/docs/3.0/sql-reference/sql-functions/aggregate-functions/corr"},next:{title:"COVAR_POP",permalink:"/doc/docs/3.0/sql-reference/sql-functions/aggregate-functions/covar_pop"}},l={},a=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",ul:"ul",li:"li",code:"code",a:"a",pre:"pre"},(0,c.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"count",children:"count"}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(n.p,{children:"Returns the total number of rows specified by an expression."}),"\n",(0,t.jsx)(n.p,{children:"This function has three variations:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"COUNT(*)"})," counts all rows in a table, no matter whether they contain NULL values."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"COUNT(expr)"})," counts the number of rows with non-NULL values in a specific column."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"COUNT(DISTINCT expr)"})," counts the number of distinct non-NULL values in a column."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"COUNT(DISTINCT expr)"})," is used for exact count distinct. If you require higher count distinct performance, see ",(0,t.jsx)(n.a,{href:"/doc/docs/3.0/using_starrocks/Using_bitmap",children:"Use bitmap for exact count discount"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"From StarRocks 2.4 onwards, you can use multiple COUNT(DISTINCT) in one statement."}),"\n",(0,t.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Haskell",children:"COUNT(expr)\nCOUNT(DISTINCT expr [,expr,...])`\n"})}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"expr"}),": the column or expression based on which ",(0,t.jsx)(n.code,{children:"count()"})," is performed. If ",(0,t.jsx)(n.code,{children:"expr"})," is a column name, the column can be of any data type."]}),"\n",(0,t.jsx)(n.h2,{id:"return-value",children:"Return value"}),"\n",(0,t.jsx)(n.p,{children:"Returns a numeric value. If no rows can be found, 0 is returned. This function ignores NULL values."}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsxs)(n.p,{children:["Suppose there is a table named ",(0,t.jsx)(n.code,{children:"test"}),". Query the country, category, and supplier of each order by ",(0,t.jsx)(n.code,{children:"id"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Plain",children:"select * from test order by id;\n+------+----------+----------+------------+\n| id   | country  | category | supplier   |\n+------+----------+----------+------------+\n| 1001 | US       | A        | supplier_1 |\n| 1002 | Thailand | A        | supplier_2 |\n| 1003 | Turkey   | B        | supplier_3 |\n| 1004 | US       | A        | supplier_2 |\n| 1005 | China    | C        | supplier_4 |\n| 1006 | Japan    | D        | supplier_3 |\n| 1007 | Japan    | NULL     | supplier_5 |\n+------+----------+----------+------------+\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Example 1: Count the number of rows in table ",(0,t.jsx)(n.code,{children:"test"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Plain",children:"    select count(*) from test;\n    +----------+\n    | count(*) |\n    +----------+\n    |        7 |\n    +----------+\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Example 2: Count the number of values in the ",(0,t.jsx)(n.code,{children:"id"})," column."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Plain",children:"    select count(id) from test;\n    +-----------+\n    | count(id) |\n    +-----------+\n    |         7 |\n    +-----------+\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Example 3: Count the number of values in the ",(0,t.jsx)(n.code,{children:"category"})," column while ignoring NULL values."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Plain",children:"select count(category) from test;\n  +-----------------+\n  | count(category) |\n  +-----------------+\n  |         6       |\n  +-----------------+\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Example 4: Count the number of distinct values in the ",(0,t.jsx)(n.code,{children:"category"})," column."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Plain",children:"select count(distinct category) from test;\n+-------------------------+\n| count(DISTINCT category) |\n+-------------------------+\n|                       4 |\n+-------------------------+\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Example 5: Count the number of combinations that can be formed by ",(0,t.jsx)(n.code,{children:"category"})," and ",(0,t.jsx)(n.code,{children:"supplier"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Plain",children:"select count(distinct category, supplier) from test;\n+------------------------------------+\n| count(DISTINCT category, supplier) |\n+------------------------------------+\n|                                  5 |\n+------------------------------------+\n"})}),"\n",(0,t.jsxs)(n.p,{children:["In the output, the combination with ",(0,t.jsx)(n.code,{children:"id"})," 1004 duplicates with the combination with ",(0,t.jsx)(n.code,{children:"id"})," 1002. They are counted only once. The combination with ",(0,t.jsx)(n.code,{children:"id"})," 1007 has a NULL value and is not counted."]}),"\n",(0,t.jsx)(n.p,{children:"Example 6: Use multiple COUNT(DISTINCT) in one statement."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Plain",children:"select count(distinct country, category), count(distinct country,supplier) from test;\n+-----------------------------------+-----------------------------------+\n| count(DISTINCT country, category) | count(DISTINCT country, supplier) |\n+-----------------------------------+-----------------------------------+\n|                                 6 |                                 7 |\n+-----------------------------------+-----------------------------------+\n"})})]})}const u=function(e={}){const{wrapper:n}=Object.assign({},(0,c.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(d,e)})):d(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>o,ah:()=>r});var t=s(67294);const c=t.createContext({});function r(e){const n=t.useContext(c);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const i={};function o({components:e,children:n,disableParentContext:s}){let o;return o=s?"function"==typeof e?e({}):e||i:r(e),t.createElement(c.Provider,{value:o},n)}}}]);