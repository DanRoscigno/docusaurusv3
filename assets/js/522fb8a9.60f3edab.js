"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[54614],{90296:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>t,metadata:()=>i,toc:()=>o});var a=s(85893),r=s(11151);const t={},c="any_value",i={id:"sql-reference/sql-functions/aggregate-functions/any_value",title:"any_value",description:"Description",source:"@site/versioned_docs/version-3.0/sql-reference/sql-functions/aggregate-functions/any_value.md",sourceDirName:"sql-reference/sql-functions/aggregate-functions",slug:"/sql-reference/sql-functions/aggregate-functions/any_value",permalink:"/doc/docs/3.0/sql-reference/sql-functions/aggregate-functions/any_value",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/sql-reference/sql-functions/aggregate-functions/any_value.md",tags:[],version:"3.0",frontMatter:{},sidebar:"Chinese31",previous:{title:"Lambda expression",permalink:"/doc/docs/3.0/sql-reference/sql-functions/Lambda_expression"},next:{title:"APPROX_COUNT_DISTINCT",permalink:"/doc/docs/3.0/sql-reference/sql-functions/aggregate-functions/approx_count_distinct"}},l={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2},{value:"Keywords",id:"keywords",level:2}];function u(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",pre:"pre"},(0,r.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"any_value",children:"any_value"}),"\n",(0,a.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,a.jsxs)(n.p,{children:["Obtains an arbitrary row from each aggregated group. You can use this function to optimize a query that has a ",(0,a.jsx)(n.code,{children:"GROUP BY"})," clause."]}),"\n",(0,a.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-Haskell",children:"ANY_VALUE(expr)\n"})}),"\n",(0,a.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"expr"}),": the expression that gets aggregated."]}),"\n",(0,a.jsx)(n.h2,{id:"return-value",children:"Return value"}),"\n",(0,a.jsx)(n.p,{children:"Returns an arbitrary row from each aggregated group. The return value is non-deterministic."}),"\n",(0,a.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-plaintext",children:"// Original data\nmysql> select * from any_value_test;\n+------+------+------+\n| a    | b    | c    |\n+------+------+------+\n|    1 |    1 |    1 |\n|    1 |    2 |    1 |\n|    2 |    1 |    1 |\n|    2 |    2 |    2 |\n|    3 |    1 |    1 |\n+------+------+------+\n5 rows in set (0.01 sec)\n\n// After ANY_VALUE is used\nmysql> select a,any_value(b),sum(c) from any_value_test group by a;\n+------+----------------+----------+\n| a    | any_value(`b`) | sum(`c`) |\n+------+----------------+----------+\n|    1 |              1 |        2 |\n|    2 |              1 |        3 |\n|    3 |              1 |        1 |\n+------+----------------+----------+\n3 rows in set (0.01 sec)\n\nmysql> select c,any_value(a),sum(b) from any_value_test group by c;\n+------+----------------+----------+\n| c    | any_value(`a`) | sum(`b`) |\n+------+----------------+----------+\n|    1 |              1 |        5 |\n|    2 |              2 |        2 |\n+------+----------------+----------+\n2 rows in set (0.01 sec)\n"})}),"\n",(0,a.jsx)(n.h2,{id:"keywords",children:"Keywords"}),"\n",(0,a.jsx)(n.p,{children:"ANY_VALUE"})]})}const d=function(e={}){const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,a.jsx)(n,Object.assign({},e,{children:(0,a.jsx)(u,e)})):u(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>i,ah:()=>t});var a=s(67294);const r=a.createContext({});function t(e){const n=a.useContext(r);return a.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const c={};function i({components:e,children:n,disableParentContext:s}){let i;return i=s?"function"==typeof e?e({}):e||c:t(e),a.createElement(r.Provider,{value:i},n)}}}]);