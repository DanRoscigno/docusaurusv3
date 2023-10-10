"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[981],{27607:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var i=t(85893),s=t(11151);const o={},r="bitmap_union_count",a={id:"sql-reference/sql-functions/bitmap-functions/bitmap_union_count",title:"bitmap_union_count",description:"Description",source:"@site/versioned_docs/version-3.1/sql-reference/sql-functions/bitmap-functions/bitmap_union_count.md",sourceDirName:"sql-reference/sql-functions/bitmap-functions",slug:"/sql-reference/sql-functions/bitmap-functions/bitmap_union_count",permalink:"/docusaurusv3/docs/sql-reference/sql-functions/bitmap-functions/bitmap_union_count",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-functions/bitmap-functions/bitmap_union_count.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"bitmap_union",permalink:"/docusaurusv3/docs/sql-reference/sql-functions/bitmap-functions/bitmap_union"},next:{title:"bitmap_union_int",permalink:"/docusaurusv3/docs/sql-reference/sql-functions/bitmap-functions/bitmap_union_int"}},u={},c=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Return value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function l(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",h3:"h3"},(0,s.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"bitmap_union_count",children:"bitmap_union_count"}),"\n",(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(n.p,{children:"Returns the union of a set of bitmap values and returns the cardinality of the union. This function is supported from v2.3."}),"\n",(0,i.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Haskell",children:"BIGINT bitmap_union_count(BITMAP value)\n"})}),"\n",(0,i.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"value"}),": a set of bitmap values. The supported data type is BITMAP."]}),"\n",(0,i.jsx)(n.h2,{id:"return-value",children:"Return value"}),"\n",(0,i.jsx)(n.p,{children:"Returns a value of the BIGINT type."}),"\n",(0,i.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsxs)(n.p,{children:["Calculate the unique views (UVs) of a web page. If ",(0,i.jsx)(n.code,{children:"user_id"})," is of the INT type, the latter two queries are equivalent."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Plaintext",children:"mysql> select * from test\n+---------+---------+\n| page_id | user_id |\n+---------+---------+\n|       1 |       1 |\n|       1 |       2 |\n|       2 |       1 |\n+---------+---------+\n\nmysql> select page_id,count(distinct user_id) from test group by page_id;\n+---------+-------------------------+\n| page_id | count(DISTINCT user_id) |\n+---------+-------------------------+\n|       1 |                       2 |\n|       2 |                       1 |\n+---------+-------------------------+\n\nmysql> select page_id,bitmap_union_count(to_bitmap(user_id)) from test group by page_id;\n+---------+----------------------------------------+\n| page_id | bitmap_union_count(to_bitmap(user_id)) |\n+---------+----------------------------------------+\n|       1 |                                      2 |\n|       2 |                                      1 |\n+---------+----------------------------------------+\n"})})]})}const d=function(e={}){const{wrapper:n}=Object.assign({},(0,s.ah)(),e.components);return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(l,e)})):l(e)}},11151:(e,n,t)=>{t.d(n,{Zo:()=>a,ah:()=>o});var i=t(67294);const s=i.createContext({});function o(e){const n=i.useContext(s);return i.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const r={};function a({components:e,children:n,disableParentContext:t}){let a;return a=t?"function"==typeof e?e({}):e||r:o(e),i.createElement(s.Provider,{value:a},n)}}}]);