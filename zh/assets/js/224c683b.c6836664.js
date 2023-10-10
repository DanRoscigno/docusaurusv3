"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[8582],{46413:(n,e,c)=>{c.r(e),c.d(e,{assets:()=>a,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>d,toc:()=>o});var r=c(85893),s=c(11151);const l={},i="array_contains_all",d={id:"sql-reference/sql-functions/array-functions/array_contains_all",title:"array_contains_all",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.1/sql-reference/sql-functions/array-functions/array_contains_all.md",sourceDirName:"sql-reference/sql-functions/array-functions",slug:"/sql-reference/sql-functions/array-functions/array_contains_all",permalink:"/docusaurusv3/zh/docs/sql-reference/sql-functions/array-functions/array_contains_all",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-functions/array-functions/array_contains_all.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"array_contains",permalink:"/docusaurusv3/zh/docs/sql-reference/sql-functions/array-functions/array_contains"},next:{title:"array_cum_sum",permalink:"/docusaurusv3/zh/docs/sql-reference/sql-functions/array-functions/array_cum_sum"}},a={},o=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u4f7f\u7528\u8bf4\u660e",id:"\u4f7f\u7528\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function t(n){const e=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",pre:"pre",a:"a",ul:"ul",li:"li",ol:"ol"},(0,s.ah)(),n.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"array_contains_all",children:"array_contains_all"}),"\n",(0,r.jsx)(e.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,r.jsxs)(e.p,{children:["\u68c0\u67e5\u6570\u7ec4",(0,r.jsx)(e.code,{children:"arr1"}),"\u662f\u5426\u5305\u542b\u6570\u7ec4",(0,r.jsx)(e.code,{children:"arr2"}),"\u4e2d\u7684\u6240\u6709\u5143\u7d20\uff0c\u5373",(0,r.jsx)(e.code,{children:"arr2"}),"\u662f\u5426\u4e3a",(0,r.jsx)(e.code,{children:"arr1"}),"\u7684\u5b50\u96c6\u3002\u662f\u7684\u8bdd\u8fd4\u56de",(0,r.jsx)(e.code,{children:"1"}),"\uff0c\u5426\u5219\u8fd4\u56de",(0,r.jsx)(e.code,{children:"0"}),"\u3002"]}),"\n",(0,r.jsx)(e.p,{children:"\u8be5\u51fd\u6570\u4ece 2.4 \u7248\u672c\u5f00\u59cb\u652f\u6301\u3002"}),"\n",(0,r.jsx)(e.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-Haskell",children:"BOOLEAN array_contains_all(arr1, arr2)\n"})}),"\n",(0,r.jsx)(e.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"arr"}),": \u7528\u6765\u6bd4\u8f83\u7684\u4e24\u4e2a\u6570\u7ec4\u3002\u4e0a\u8ff0\u8bed\u6cd5\u68c0\u67e5",(0,r.jsx)(e.code,{children:"arr2"}),"\u662f\u5426\u4e3a",(0,r.jsx)(e.code,{children:"arr1"}),"\u7684\u5b50\u96c6\u3002"]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"arr1"}),"\u548c",(0,r.jsx)(e.code,{children:"arr2"}),"\u5185\u5143\u7d20\u7684\u6570\u636e\u7c7b\u578b\u5fc5\u987b\u4e00\u81f4\u3002\u5173\u4e8e StarRocks \u652f\u6301\u7684\u6570\u7ec4\u5143\u7d20\u6570\u636e\u7c7b\u578b\uff0c\u8bf7\u53c2\u89c1",(0,r.jsx)(e.a,{href:"/docusaurusv3/zh/docs/sql-reference/sql-statements/data-types/Array",children:"ARRAY"}),"\u3002"]}),"\n",(0,r.jsx)(e.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,r.jsx)(e.p,{children:"\u8fd4\u56de BOOLEAN \u7c7b\u578b\u7684\u503c\u3002"}),"\n",(0,r.jsxs)(e.p,{children:["\u5982\u679c",(0,r.jsx)(e.code,{children:"arr2"}),"\u662f",(0,r.jsx)(e.code,{children:"arr1"}),"\u7684\u5b50\u96c6\uff0c\u5219\u8fd4\u56de",(0,r.jsx)(e.code,{children:"1"}),"\u3002\u5426\u5219\uff0c\u8fd4\u56de",(0,r.jsx)(e.code,{children:"0"}),"\u3002"]}),"\n",(0,r.jsxs)(e.p,{children:["\u5982\u679c",(0,r.jsx)(e.code,{children:"arr1"}),"\u6216",(0,r.jsx)(e.code,{children:"arr2"}),"\u4e3aNULL\uff0c\u5219\u8fd4\u56deNULL\u3002"]}),"\n",(0,r.jsx)(e.h2,{id:"\u4f7f\u7528\u8bf4\u660e",children:"\u4f7f\u7528\u8bf4\u660e"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["\u5982\u679c\u6570\u7ec4\u5143\u7d20\u5305\u542b",(0,r.jsx)(e.code,{children:"null"}),"\uff0c\u7cfb\u7edf\u4f1a\u6309\u7167\u6b63\u5e38\u503c\u5904\u7406\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u7a7a\u6570\u7ec4\u9ed8\u8ba4\u4e3a\u6240\u6709\u6570\u7ec4\u7684\u5b50\u96c6\u3002"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u4e24\u4e2a\u6570\u7ec4\u4e2d\u7684\u5143\u7d20\u987a\u5e8f\u65e0\u9700\u4fdd\u6301\u4e00\u81f4\u3002"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["\u521b\u5efa\u8868",(0,r.jsx)(e.code,{children:"t1"}),"\uff0c\u5e76\u5411\u8868\u4e2d\u63d2\u5165\u6570\u636e\u3002"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-SQL",children:"CREATE TABLE t1 (\n    c0 INT,\n    c1 ARRAY<INT>,\n    c2 ARRAY<INT>\n) ENGINE=OLAP\nDUPLICATE KEY(c0)\nDISTRIBUTED BY HASH(c0);\n\nINSERT INTO t1 VALUES\n    (1,[1,2,3],[1,2]),\n    (2,[1,2,3],[1,4]),\n    (3,NULL,[1]),\n    (4,[1,2,null],NULL),\n    (5,[1,2,null],[null]),\n    (6,[2,3],[]);\n"})}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u67e5\u8be2\u8868\u4e2d\u6570\u636e\u3002"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-Plain",children:"SELECT * FROM t1 ORDER BY c0;\n+------+------------+----------+\n| c0   | c1         | c2       |\n+------+------------+----------+\n|    1 | [1,2,3]    | [1,2]    |\n|    2 | [1,2,3]    | [1,4]    |\n|    3 | NULL       | [1]      |\n|    4 | [1,2,null] | NULL     |\n|    5 | [1,2,null] | [null]   |\n|    6 | [2,3]      | []       |\n+------+------------+----------+\n"})}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["\u68c0\u67e5",(0,r.jsx)(e.code,{children:"c2"}),"\u7684\u6bcf\u884c\u6570\u636e\u662f\u5426\u4e3a",(0,r.jsx)(e.code,{children:"c1"}),"\u7684\u5b50\u96c6\u3002"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-Plaintext",children:"SELECT c0, c1, c2, array_contains_all(c1, c2) FROM t1 ORDER BY c0;\n+------+------------+----------+----------------------------+\n| c0   | c1         | c2       | array_contains_all(c1, c2) |\n+------+------------+----------+----------------------------+\n|    1 | [1,2,3]    | [1,2]    |                          1 |\n|    2 | [1,2,3]    | [1,4]    |                          0 |\n|    3 | NULL       | [1]      |                       NULL |\n|    4 | [1,2,null] | NULL     |                       NULL |\n|    5 | [1,2,null] | [null]   |                          1 |\n|    6 | [2,3]      | []       |                          1 |\n+------+------------+----------+----------------------------+\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u5728\u8fd4\u56de\u7ed3\u679c\u4e2d\uff1a"}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"c0"}),"\u4e3a1\u65f6\uff0c",(0,r.jsx)(e.code,{children:"c2"}),"\u4e3a",(0,r.jsx)(e.code,{children:"c1"}),"\u7684\u5b50\u96c6\uff0c\u8fd4\u56de1\uff1b"]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"c0"}),"\u4e3a2\u65f6\uff0c",(0,r.jsx)(e.code,{children:"c2"}),"\u4e0d\u662f",(0,r.jsx)(e.code,{children:"c1"}),"\u7684\u5b50\u96c6\uff0c\u8fd4\u56de0\uff1b"]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"c0"}),"\u4e3a3\u65f6\uff0c",(0,r.jsx)(e.code,{children:"c``1"}),"\u4e3aNULL\uff0c",(0,r.jsx)(e.code,{children:"c0"}),"\u4e3a4\u65f6\uff0c",(0,r.jsx)(e.code,{children:"c2"}),"\u4e3aNULL\uff0c\u6545\u5747\u8fd4\u56deNULL\uff1b"]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"c0"}),"\u4e3a5\u65f6\uff0c\u4e24\u4e2a\u6570\u7ec4\u5305\u542b\u6570\u7ec4\u5143\u7d20",(0,r.jsx)(e.code,{children:"null"}),"\uff0c\u7cfb\u7edf\u4f1a\u6309\u7167\u6b63\u5e38\u503c\u5904\u7406\uff0c\u8fd4\u56de",(0,r.jsx)(e.code,{children:"1"}),"\uff1b"]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"c0"}),"\u4e3a6\u65f6\uff0c",(0,r.jsx)(e.code,{children:"c2"}),"\u4e3a\u7a7a\u6570\u7ec4\uff0c\u9ed8\u8ba4\u4e3a\u6240\u6709\u6570\u7ec4\u7684\u5b50\u96c6\uff0c\u8fd4\u56de",(0,r.jsx)(e.code,{children:"1"}),"\u3002"]}),"\n"]}),"\n"]})]})}const h=function(n={}){const{wrapper:e}=Object.assign({},(0,s.ah)(),n.components);return e?(0,r.jsx)(e,Object.assign({},n,{children:(0,r.jsx)(t,n)})):t(n)}},11151:(n,e,c)=>{c.d(e,{Zo:()=>d,ah:()=>l});var r=c(67294);const s=r.createContext({});function l(n){const e=r.useContext(s);return r.useMemo((()=>"function"==typeof n?n(e):{...e,...n}),[e,n])}const i={};function d({components:n,children:e,disableParentContext:c}){let d;return d=c?"function"==typeof n?n({}):n||i:l(n),r.createElement(s.Provider,{value:d},e)}}}]);