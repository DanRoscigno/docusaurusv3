"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[40559],{50336:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>o});var a=s(85893),t=s(11151);const r={},l="GROUP BY",i={id:"sql-reference/sql-statements/data-manipulation/GROUP BY",title:"GROUP BY",description:"Description",source:"@site/versioned_docs/version-3.0/sql-reference/sql-statements/data-manipulation/GROUP BY.md",sourceDirName:"sql-reference/sql-statements/data-manipulation",slug:"/sql-reference/sql-statements/data-manipulation/GROUP BY",permalink:"/doc/docs/3.0/sql-reference/sql-statements/data-manipulation/GROUP BY",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/sql-reference/sql-statements/data-manipulation/GROUP BY.md",tags:[],version:"3.0",frontMatter:{},sidebar:"Chinese31",previous:{title:"EXPORT",permalink:"/doc/docs/3.0/sql-reference/sql-statements/data-manipulation/EXPORT"},next:{title:"PAUSE ROUTINE LOAD",permalink:"/doc/docs/3.0/sql-reference/sql-statements/data-manipulation/PAUSE ROUTINE LOAD"}},c={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Note",id:"note",level:3},{value:"Examples",id:"examples",level:2}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",pre:"pre",h3:"h3"},(0,t.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"group-by",children:"GROUP BY"}),"\n",(0,a.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,a.jsxs)(n.p,{children:["GROUP BY ",(0,a.jsx)(n.code,{children:"GROUPING SETS"})," \uff5c ",(0,a.jsx)(n.code,{children:"CUBE"})," \uff5c ",(0,a.jsx)(n.code,{children:"ROLLUP"})," is an extension of the GROUP BY clause. It can realize the aggregation of groups of multiple sets in a GROUP BY clause. The result is equivalent to the UNION operation of multiple corresponding GROUP BY clauses."]}),"\n",(0,a.jsx)(n.p,{children:"GROUP BY clause is a special case of GROUP BY GROUPING SETS containing only one element. For example, the GROUPING SETS statement:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"SELECT a, b, SUM( c ) FROM tab1 GROUP BY GROUPING SETS ( (a, b), (a), (b), ( ) );\n"})}),"\n",(0,a.jsx)(n.p,{children:"The query result is equivalent to:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"SELECT a, b, SUM( c ) FROM tab1 GROUP BY a, b\nUNION\nSELECT a, null, SUM( c ) FROM tab1 GROUP BY a\nUNION\nSELECT null, b, SUM( c ) FROM tab1 GROUP BY b\nUNION\nSELECT null, null, SUM( c ) FROM tab1\n"})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"GROUPING(expr)"})," indicates whether a column is an aggregate column. If it is an aggregate column, it is 0, otherwise it is 1."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"GROUPING_ID(expr  [ , expr [ , ... ] ])"})," is similar to GROUPING. GROUPING_ ID calculates the bitmap value of a column list according to the specified column order, and each bit is the value of GROUPING."]}),"\n",(0,a.jsx)(n.p,{children:"GROUPING_ID() function returns the decimal value of the bit vector."}),"\n",(0,a.jsx)(n.h3,{id:"syntax",children:"Syntax"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"SELECT ...\nFROM ...\n[ ... ]\nGROUP BY [\n    , ... |\n    GROUPING SETS [, ...] (  groupSet [ , groupSet [ , ... ] ] ) |\n    ROLLUP(expr  [ , expr [ , ... ] ]) |\n    expr  [ , expr [ , ... ] ] WITH ROLLUP |\n    CUBE(expr  [ , expr [ , ... ] ]) |\n    expr  [ , expr [ , ... ] ] WITH CUBE\n    ]\n[ ... ]\n"})}),"\n",(0,a.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"groupSet"})," represents a set composed of columns, aliases or expressions in the select list.  ",(0,a.jsx)(n.code,{children:"groupSet ::= { ( expr  [ , expr [ , ... ] ] )}"})]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"expr"}),"  indicates the column, alias or expression in the select list."]}),"\n",(0,a.jsx)(n.h3,{id:"note",children:"Note"}),"\n",(0,a.jsx)(n.p,{children:"starrocks supports syntax like PostgreSQL. The syntax examples are as follows:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"SELECT a, b, SUM( c ) FROM tab1 GROUP BY GROUPING SETS ( (a, b), (a), (b), ( ) );\nSELECT a, b,c, SUM( d ) FROM tab1 GROUP BY ROLLUP(a,b,c)\nSELECT a, b,c, SUM( d ) FROM tab1 GROUP BY CUBE(a,b,c)\n"})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"ROLLUP(a,b,c)"})," is equivalent to the following",(0,a.jsx)(n.code,{children:"GROUPING SETS"})," statement:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"GROUPING SETS (\n(a,b,c),\n( a, b ),\n( a),\n( )\n)\n"})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"CUBE ( a, b, c )"}),"  is equivalent to the following",(0,a.jsx)(n.code,{children:"GROUPING SETS"})," statement:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"GROUPING SETS (\n( a, b, c ),\n( a, b ),\n( a,    c ),\n( a       ),\n(    b, c ),\n(    b    ),\n(       c ),\n(         )\n)\n"})}),"\n",(0,a.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(n.p,{children:"The following is an example of actual data:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-plain",metastring:"text",children:"> SELECT * FROM t;\n+------+------+------+\n| k1   | k2   | k3   |\n+------+------+------+\n| a    | A    |    1 |\n| a    | A    |    2 |\n| a    | B    |    1 |\n| a    | B    |    3 |\n| b    | A    |    1 |\n| b    | A    |    4 |\n| b    | B    |    1 |\n| b    | B    |    5 |\n+------+------+------+\n8 rows in set (0.01 sec)\n\n> SELECT k1, k2, SUM(k3) FROM t GROUP BY GROUPING SETS ( (k1, k2), (k2), (k1), ( ) );\n+------+------+-----------+\n| k1   | k2   | sum(`k3`) |\n+------+------+-----------+\n| b    | B    |         6 |\n| a    | B    |         4 |\n| a    | A    |         3 |\n| b    | A    |         5 |\n| NULL | B    |        10 |\n| NULL | A    |         8 |\n| a    | NULL |         7 |\n| b    | NULL |        11 |\n| NULL | NULL |        18 |\n+------+------+-----------+\n9 rows in set (0.06 sec)\n\n> SELECT k1, k2, GROUPING_ID(k1,k2), SUM(k3) FROM t GROUP BY GROUPING SETS ((k1, k2), (k1), (k2), ());\n+------+------+---------------+----------------+\n| k1   | k2   | grouping_id(k1,k2) | sum(`k3`) |\n+------+------+---------------+----------------+\n| a    | A    |             0 |              3 |\n| a    | B    |             0 |              4 |\n| a    | NULL |             1 |              7 |\n| b    | A    |             0 |              5 |\n| b    | B    |             0 |              6 |\n| b    | NULL |             1 |             11 |\n| NULL | A    |             2 |              8 |\n| NULL | B    |             2 |             10 |\n| NULL | NULL |             3 |             18 |\n+------+------+---------------+----------------+\n9 rows in set (0.02 sec)\n"})})]})}const p=function(e={}){const{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?(0,a.jsx)(n,Object.assign({},e,{children:(0,a.jsx)(d,e)})):d(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>i,ah:()=>r});var a=s(67294);const t=a.createContext({});function r(e){const n=a.useContext(t);return a.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const l={};function i({components:e,children:n,disableParentContext:s}){let i;return i=s?"function"==typeof e?e({}):e||l:r(e),a.createElement(t.Provider,{value:i},n)}}}]);