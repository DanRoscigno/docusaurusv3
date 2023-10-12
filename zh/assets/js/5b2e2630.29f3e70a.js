"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[22445],{2065:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>a,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var s=t(85893),c=t(11151);const i={},r="intersect_count",o={id:"sql-reference/sql-functions/bitmap-functions/intersect_count",title:"intersect_count",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.0/sql-reference/sql-functions/bitmap-functions/intersect_count.md",sourceDirName:"sql-reference/sql-functions/bitmap-functions",slug:"/sql-reference/sql-functions/bitmap-functions/intersect_count",permalink:"/doc/zh/docs/3.0/sql-reference/sql-functions/bitmap-functions/intersect_count",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/sql-reference/sql-functions/bitmap-functions/intersect_count.md",tags:[],version:"3.0",frontMatter:{},sidebar:"Chinese31",previous:{title:"bitmap_xor",permalink:"/doc/zh/docs/3.0/sql-reference/sql-functions/bitmap-functions/bitmap_xor"},next:{title:"sub_bitmap",permalink:"/doc/zh/docs/3.0/sql-reference/sql-functions/bitmap-functions/sub_bitmap"}},l={},u=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",ul:"ul",li:"li"},(0,c.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"intersect_count",children:"intersect_count"}),"\n",(0,s.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,s.jsx)(n.p,{children:"\u8ba1\u7b97\u4e24\u4e2a bitmap \u4e4b\u95f4\u76f8\u540c\u5143\u7d20\u7684\u4e2a\u6570, \u4e0d\u8981\u6c42\u6570\u636e\u5206\u5e03\u6b63\u4ea4\u3002\u7b2c\u4e00\u4e2a\u53c2\u6570\u662f Bitmap \u5217\uff0c\u7b2c\u4e8c\u4e2a\u53c2\u6570\u662f\u7528\u6765\u8fc7\u6ee4\u7684\u7ef4\u5ea6\u5217\uff0c\u7b2c\u4e09\u4e2a\u53c2\u6570\u662f\u53d8\u957f\u53c2\u6570\uff0c\u542b\u4e49\u662f\u8fc7\u6ee4\u7ef4\u5ea6\u5217\u7684\u4e0d\u540c\u53d6\u503c\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Haskell",children:"BITMAP INTERSECT_COUNT(bitmap_column, column_to_filter, filter_values)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"bitmap_column"}),": \u8fdb\u884c\u8ba1\u7b97\u7684 bitmap \u5217\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"column_to_filter"}),": \u9700\u8981\u8fdb\u884c\u4ea4\u96c6\u8ba1\u7b97\u7684\u5217\u540d\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"filter_values"}),": \u8fc7\u6ee4\u7ef4\u5ea6\u5217\u7684\u4e0d\u540c\u53d6\u503c\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,s.jsx)(n.p,{children:"\u8fd4\u56de\u503c\u7684\u6570\u636e\u7c7b\u578b\u4e3a BITMAP\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"mysql>  select intersect_count(user_id, dt, '2020-10-01', '2020-10-02'), intersect_count(user_id, dt, '2020-10-01')\n        from tbl\n        where dt in ('2020-10-01', '2020-10-02');\n+--------------------------------------------------------------+------------------------------------------------+\n| intersect_count(`user_id`, `dt`, '2020-10-01', '2020-10-02') | intersect_count(`user_id`, `dt`, '2020-10-01') |\n+--------------------------------------------------------------+------------------------------------------------+\n|                                                            3 |                                              7 |\n+--------------------------------------------------------------+------------------------------------------------+\n"})})]})}const a=function(e={}){const{wrapper:n}=Object.assign({},(0,c.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(d,e)})):d(e)}},11151:(e,n,t)=>{t.d(n,{Zo:()=>o,ah:()=>i});var s=t(67294);const c=s.createContext({});function i(e){const n=s.useContext(c);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const r={};function o({components:e,children:n,disableParentContext:t}){let o;return o=t?"function"==typeof e?e({}):e||r:i(e),s.createElement(c.Provider,{value:o},n)}}}]);