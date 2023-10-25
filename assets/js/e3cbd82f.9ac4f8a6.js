"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[77357],{1074:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>c,metadata:()=>l,toc:()=>a});var r=s(85893),t=s(11151);const c={displayed_sidebar:"English"},i="COUNT",l={id:"sql-reference/sql-functions/aggregate-functions/count",title:"COUNT",description:"Description",source:"@site/versioned_docs/version-2.3/sql-reference/sql-functions/aggregate-functions/count.md",sourceDirName:"sql-reference/sql-functions/aggregate-functions",slug:"/sql-reference/sql-functions/aggregate-functions/count",permalink:"/docs/2.3/sql-reference/sql-functions/aggregate-functions/count",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-functions/aggregate-functions/count.md",tags:[],version:"2.3",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"BITMAP",permalink:"/docs/2.3/sql-reference/sql-functions/aggregate-functions/bitmap"},next:{title:"GROUPING",permalink:"/docs/2.3/sql-reference/sql-functions/aggregate-functions/grouping"}},o={},a=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",ul:"ul",li:"li",code:"code",a:"a",pre:"pre"},(0,t.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"count",children:"COUNT"}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(n.p,{children:"Returns the total number of rows specified by an expression."}),"\n",(0,r.jsx)(n.p,{children:"This function has three variations:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"COUNT(*)"})," counts all rows in a table, no matter whether they contain NULL values."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"COUNT(expr)"})," counts the number of rows with non-NULL values in a specific column."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"COUNT(DISTINCT expr)"})," counts the number of distinct non-NULL values in a column."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"This function can be used with WHERE and GROUP BY."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"COUNT(DISTINCT expr)"})," is used for exact count distinct. If you require higher count distinct performance, see ",(0,r.jsx)(n.a,{href:"/docs/2.3/using_starrocks/Using_bitmap",children:"Use bitmap for exact count discount"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Haskell",children:"COUNT(expr)\nCOUNT(DISTINCT expr)`\n"})}),"\n",(0,r.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"expr"}),": the column or expression based on which ",(0,r.jsx)(n.code,{children:"count()"})," is performed. If ",(0,r.jsx)(n.code,{children:"expr"})," is a column name, the column can be of any data type."]}),"\n",(0,r.jsx)(n.h2,{id:"return-value",children:"Return value"}),"\n",(0,r.jsx)(n.p,{children:"Returns a numeric value. If no rows can be found, 0 is returned. This function ignores NULL values."}),"\n",(0,r.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsxs)(n.p,{children:["Suppose there is a table named ",(0,r.jsx)(n.code,{children:"test"}),". Query the country, category, and supplier of each order by ",(0,r.jsx)(n.code,{children:"id"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Plain",children:"select * from test order by id;\n+------+----------+----------+------------+\n| id   | country  | category | supplier   |\n+------+----------+----------+------------+\n| 1001 | US       | A        | supplier_1 |\n| 1002 | Thailand | A        | supplier_2 |\n| 1003 | Turkey   | B        | supplier_3 |\n| 1004 | US       | A        | supplier_2 |\n| 1005 | China    | C        | supplier_4 |\n| 1006 | Japan    | D        | supplier_3 |\n| 1007 | Japan    | NULL     | supplier_5 |\n+------+----------+----------+------------+\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Example 1: Count the number of rows in table ",(0,r.jsx)(n.code,{children:"test"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Plain",children:"    select count(*) from test;\n    +----------+\n    | count(*) |\n    +----------+\n    |        7 |\n    +----------+\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Example 2: Count the number of values in the ",(0,r.jsx)(n.code,{children:"id"})," column."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Plain",children:"    select count(id) from test;\n    +-----------+\n    | count(id) |\n    +-----------+\n    |         7 |\n    +-----------+\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Example 3: Count the number of values in the ",(0,r.jsx)(n.code,{children:"category"})," column while ignoring NULL values."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Plain",children:"select count(category) from test;\n  +-----------------+\n  | count(category) |\n  +-----------------+\n  |         6       |\n  +-----------------+\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Example 4: Count the number of distinct values in the ",(0,r.jsx)(n.code,{children:"category"})," column."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Plain",children:"select count(distinct category) from test;\n+-------------------------+\n| count(DISTINCT category) |\n+-------------------------+\n|                       4 |\n+-------------------------+\n"})})]})}const u=function(e={}){const{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(d,e)})):d(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>l,ah:()=>c});var r=s(67294);const t=r.createContext({});function c(e){const n=r.useContext(t);return r.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const i={};function l({components:e,children:n,disableParentContext:s}){let l;return l=s?"function"==typeof e?e({}):e||i:c(e),r.createElement(t.Provider,{value:l},n)}}}]);