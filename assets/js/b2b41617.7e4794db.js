"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[98180],{59142:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var s=n(85893),i=n(11151);const r={},c="intersect_count",o={id:"sql-reference/sql-functions/bitmap-functions/intersect_count",title:"intersect_count",description:"Description",source:"@site/versioned_docs/version-3.0/sql-reference/sql-functions/bitmap-functions/intersect_count.md",sourceDirName:"sql-reference/sql-functions/bitmap-functions",slug:"/sql-reference/sql-functions/bitmap-functions/intersect_count",permalink:"/docusaurusv3/docs/3.0/sql-reference/sql-functions/bitmap-functions/intersect_count",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/sql-reference/sql-functions/bitmap-functions/intersect_count.md",tags:[],version:"3.0",frontMatter:{},sidebar:"documentation",previous:{title:"bitmap_xor",permalink:"/docusaurusv3/docs/3.0/sql-reference/sql-functions/bitmap-functions/bitmap_xor"},next:{title:"sub_bitmap",permalink:"/docusaurusv3/docs/3.0/sql-reference/sql-functions/bitmap-functions/sub_bitmap"}},a={},l=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Example",id:"example",level:2}];function u(e){const t=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code"},(0,i.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"intersect_count",children:"intersect_count"}),"\n",(0,s.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(t.p,{children:"A function to find the intersection size of a bitmap, without requiring the data distribution to be orthogonal. The first parameter is the Bitmap column, the second parameter is the dimension column used for filtering, and the third parameter is a variable-length parameter, meaning that different values of the filtering dimension column are taken."}),"\n",(0,s.jsx)(t.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-Haskell",children:"BITMAP INTERSECT_COUNT(bitmap_column, column_to_filter, filter_values)\n"})}),"\n",(0,s.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"bitmap_column"}),": the bitmap column to be computed..\n",(0,s.jsx)(t.code,{children:"column_to_filter"}),": the name of the column to be intersected.\n",(0,s.jsx)(t.code,{children:"filter_values"}),": the different values of the filtered dimension columns."]}),"\n",(0,s.jsx)(t.h2,{id:"return-value",children:"Return value"}),"\n",(0,s.jsx)(t.p,{children:"Returns a value of the bigint type."}),"\n",(0,s.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-SQL",children:"mysql>  select intersect_count(user_id, dt, '2020-10-01', '2020-10-02'), intersect_count(user_id, dt, '2020-10-01') from tbl where dt in ('2020-10-01', '2020-10-02');\n+--------------------------------------------------------------+------------------------------------------------+\n| intersect_count(`user_id`, `dt`, '2020-10-01', '2020-10-02') | intersect_count(`user_id`, `dt`, '2020-10-01') |\n+--------------------------------------------------------------+------------------------------------------------+\n|                                                            3 |                                              7 |\n+--------------------------------------------------------------+------------------------------------------------+\n"})})]})}const d=function(e={}){const{wrapper:t}=Object.assign({},(0,i.ah)(),e.components);return t?(0,s.jsx)(t,Object.assign({},e,{children:(0,s.jsx)(u,e)})):u(e)}},11151:(e,t,n)=>{n.d(t,{Zo:()=>o,ah:()=>r});var s=n(67294);const i=s.createContext({});function r(e){const t=s.useContext(i);return s.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const c={};function o({components:e,children:t,disableParentContext:n}){let o;return o=n?"function"==typeof e?e({}):e||c:r(e),s.createElement(i.Provider,{value:o},t)}}}]);