"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[61092],{74328:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>a,contentTitle:()=>c,default:()=>g,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var r=s(85893),t=s(11151);const i={},c="grouping",o={id:"sql-reference/sql-functions/aggregate-functions/grouping",title:"grouping",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.0/sql-reference/sql-functions/aggregate-functions/grouping.md",sourceDirName:"sql-reference/sql-functions/aggregate-functions",slug:"/sql-reference/sql-functions/aggregate-functions/grouping",permalink:"/doc/zh/docs/3.0/sql-reference/sql-functions/aggregate-functions/grouping",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/sql-reference/sql-functions/aggregate-functions/grouping.md",tags:[],version:"3.0",frontMatter:{},sidebar:"Chinese31",previous:{title:"COVAR_SAMP",permalink:"/doc/zh/docs/3.0/sql-reference/sql-functions/aggregate-functions/covar_samp"},next:{title:"grouping_id",permalink:"/doc/zh/docs/3.0/sql-reference/sql-functions/aggregate-functions/grouping_id"}},a={},l=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function u(n){const e=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code"},(0,t.ah)(),n.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"grouping",children:"grouping"}),"\n",(0,r.jsx)(e.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,r.jsx)(e.p,{children:"\u5224\u65ad\u4e00\u4e2a\u5217\u662f\u5426\u4e3a\u805a\u5408\u5217\uff0c\u5982\u679c\u662f\u805a\u5408\u5217\u5219\u8fd4\u56de 0\uff0c\u5426\u5219\u8fd4\u56de 1\u3002"}),"\n",(0,r.jsx)(e.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-Haskell",children:"GROUPING(col_expr)\n"})}),"\n",(0,r.jsx)(e.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"col_expr"}),": GROUP BY \u5b50\u53e5\u7684 ROLLUP\u3001CUBE \u6216 GROUPING SETS \u6269\u5c55\u7684\u8868\u8fbe\u5f0f\u5217\u8868\u4e2d\u6307\u5b9a\u7684\u7ef4\u5ea6\u5217\u7684\u8868\u8fbe\u5f0f\u3002"]}),"\n",(0,r.jsx)(e.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,r.jsx)(e.p,{children:"\u8fd4\u56de\u503c\u4e3a\u6570\u503c\u7c7b\u578b\u3002"}),"\n",(0,r.jsx)(e.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-plain",metastring:"text",children:"MySQL > select * from t;\n+------+------+\n| k1   | k2   |\n+------+------+\n| NULL | B    |\n| NULL | b    |\n| A    | NULL |\n| A    | B    |\n| A    | b    |\n| a    | NULL |\n| a    | B    |\n| a    | b    |\n+------+------+\n8 rows in set (0.12 sec)\n\nMySQL > SELECT k1, k2, GROUPING(k1), GROUPING(k2), COUNT(*) FROM t GROUP BY ROLLUP(k1, k2);\n+------+------+--------------+--------------+----------+\n| k1   | k2   | grouping(k1) | grouping(k2) | count(*) |\n+------+------+--------------+--------------+----------+\n| NULL | NULL |            1 |            1 |        8 |\n| NULL | NULL |            0 |            1 |        2 |\n| NULL | B    |            0 |            0 |        1 |\n| NULL | b    |            0 |            0 |        1 |\n| A    | NULL |            0 |            1 |        3 |\n| a    | NULL |            0 |            1 |        3 |\n| A    | NULL |            0 |            0 |        1 |\n| A    | B    |            0 |            0 |        1 |\n| A    | b    |            0 |            0 |        1 |\n| a    | NULL |            0 |            0 |        1 |\n| a    | B    |            0 |            0 |        1 |\n| a    | b    |            0 |            0 |        1 |\n+------+------+--------------+--------------+----------+\n12 rows in set (0.12 sec)\n"})})]})}const g=function(n={}){const{wrapper:e}=Object.assign({},(0,t.ah)(),n.components);return e?(0,r.jsx)(e,Object.assign({},n,{children:(0,r.jsx)(u,n)})):u(n)}},11151:(n,e,s)=>{s.d(e,{Zo:()=>o,ah:()=>i});var r=s(67294);const t=r.createContext({});function i(n){const e=r.useContext(t);return r.useMemo((()=>"function"==typeof n?n(e):{...e,...n}),[e,n])}const c={};function o({components:n,children:e,disableParentContext:s}){let o;return o=s?"function"==typeof n?n({}):n||c:i(n),r.createElement(t.Provider,{value:o},e)}}}]);