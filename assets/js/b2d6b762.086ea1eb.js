"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[54115],{61207:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var r=s(85893),t=s(11151);const i={},o="GROUPING",c={id:"sql-reference/sql-functions/aggregate-functions/grouping",title:"GROUPING",description:"Description",source:"@site/versioned_docs/version-3.0/sql-reference/sql-functions/aggregate-functions/grouping.md",sourceDirName:"sql-reference/sql-functions/aggregate-functions",slug:"/sql-reference/sql-functions/aggregate-functions/grouping",permalink:"/docusaurusv3/docs/3.0/sql-reference/sql-functions/aggregate-functions/grouping",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/sql-reference/sql-functions/aggregate-functions/grouping.md",tags:[],version:"3.0",frontMatter:{},sidebar:"documentation",previous:{title:"COVAR_SAMP",permalink:"/docusaurusv3/docs/3.0/sql-reference/sql-functions/aggregate-functions/covar_samp"},next:{title:"GROUPING_ID",permalink:"/docusaurusv3/docs/3.0/sql-reference/sql-functions/aggregate-functions/grouping_id"}},a={},l=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}];function u(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code"},(0,t.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"grouping",children:"GROUPING"}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(n.p,{children:"Indicates whether a column is an aggregate column. If it is an aggregate column, 0 is returned. Otherwise, 1 is returned."}),"\n",(0,r.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Haskell",children:"GROUPING(col_expr)\n"})}),"\n",(0,r.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"col_expr"}),": An expression for a dimension column specified in the expression-list of the ROLLUP, CUBE, or GROUPING SETS expansion of the GROUP BY clause."]}),"\n",(0,r.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-plain",metastring:"text",children:"MySQL > select * from t;\n+------+------+\n| k1   | k2   |\n+------+------+\n| NULL | B    |\n| NULL | b    |\n| A    | NULL |\n| A    | B    |\n| A    | b    |\n| a    | NULL |\n| a    | B    |\n| a    | b    |\n+------+------+\n8 rows in set (0.12 sec)\n\nMySQL > SELECT k1, k2, GROUPING(k1), GROUPING(k2), COUNT(*) FROM t GROUP BY ROLLUP(k1, k2);\n+------+------+--------------+--------------+----------+\n| k1   | k2   | grouping(k1) | grouping(k2) | count(*) |\n+------+------+--------------+--------------+----------+\n| NULL | NULL |            1 |            1 |        8 |\n| NULL | NULL |            0 |            1 |        2 |\n| NULL | B    |            0 |            0 |        1 |\n| NULL | b    |            0 |            0 |        1 |\n| A    | NULL |            0 |            1 |        3 |\n| a    | NULL |            0 |            1 |        3 |\n| A    | NULL |            0 |            0 |        1 |\n| A    | B    |            0 |            0 |        1 |\n| A    | b    |            0 |            0 |        1 |\n| a    | NULL |            0 |            0 |        1 |\n| a    | B    |            0 |            0 |        1 |\n| a    | b    |            0 |            0 |        1 |\n+------+------+--------------+--------------+----------+\n12 rows in set (0.12 sec)\n"})})]})}const d=function(e={}){const{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(u,e)})):u(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>c,ah:()=>i});var r=s(67294);const t=r.createContext({});function i(e){const n=r.useContext(t);return r.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const o={};function c({components:e,children:n,disableParentContext:s}){let c;return c=s?"function"==typeof e?e({}):e||o:i(e),r.createElement(t.Provider,{value:c},n)}}}]);