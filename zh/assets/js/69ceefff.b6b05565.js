"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[59620],{32556:(n,e,c)=>{c.r(e),c.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>t,metadata:()=>r,toc:()=>i});var s=c(85893),a=c(11151);const t={},o="map_concat",r={id:"sql-reference/sql-functions/map-functions/map_concat",title:"map_concat",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.1/sql-reference/sql-functions/map-functions/map_concat.md",sourceDirName:"sql-reference/sql-functions/map-functions",slug:"/sql-reference/sql-functions/map-functions/map_concat",permalink:"/docusaurusv3/zh/docs/sql-reference/sql-functions/map-functions/map_concat",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-functions/map-functions/map_concat.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"map_apply",permalink:"/docusaurusv3/zh/docs/sql-reference/sql-functions/map-functions/map_apply"},next:{title:"map_filter",permalink:"/docusaurusv3/zh/docs/sql-reference/sql-functions/map-functions/map_filter"}},l={},i=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function p(n){const e=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",pre:"pre"},(0,a.ah)(),n.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"map_concat",children:"map_concat"}),"\n",(0,s.jsx)(e.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,s.jsxs)(e.p,{children:["\u5c06\u591a\u4e2a Map \u5408\u5e76\u6210\u4e00\u4e2a Map\u3002\u5982\u679c\u591a\u4e2a Map \u4e2d\u90fd\u5b58\u5728 Key \u503c\u76f8\u540c\u7684\u952e\u503c\u5bf9\uff0c\u8be5\u51fd\u6570\u4ec5\u4fdd\u7559\u6700\u540e\u4e00\u4e2a\u51fa\u73b0\u7684\u952e\u503c\u5bf9\uff08LAST WIN \u539f\u5219\uff09\u3002\u6bd4\u5982\uff0c",(0,s.jsx)(e.code,{children:"SELECT map_concat(map{1:3},map{1:'4'});"})," \u8fd4\u56de ",(0,s.jsx)(e.code,{children:'{1:"4"}'}),"\u3002"]}),"\n",(0,s.jsx)(e.p,{children:"\u8be5\u51fd\u6570\u4ece 3.1 \u7248\u672c\u5f00\u59cb\u652f\u6301\u3002"}),"\n",(0,s.jsx)(e.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-Haskell",children:"ANY_MAP map_concat(any_map0, any_map1...)\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"any_mapN"}),": \u5f85\u5408\u5e76\u7684 Map\u3002\u591a\u4e2a Map \u7684\u6570\u636e\u7c7b\u578b\u5fc5\u987b\u517c\u5bb9\u3002\u5982\u679c Map \u7684\u6570\u636e\u7c7b\u578b\u4e0d\u540c\uff0c\u8be5\u51fd\u6570\u4f1a\u8fd4\u56de\u4e00\u4e2a\u901a\u7528\u7c7b\u578b (supertype)\u3002"]}),"\n",(0,s.jsx)(e.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,s.jsx)(e.p,{children:"\u8fd4\u56de\u4e00\u4e2a Map\uff0c\u5305\u542b\u6240\u6709\u5408\u5e76\u540e\u7684\u952e\u548c\u503c\u3002"}),"\n",(0,s.jsx)(e.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-Plain",children:"mysql> SELECT map_concat(map('a',1\uff0c'b',2), map('c',3));\n+------------------------------------------+\n| map_concat(map{1:'a',2:'b'}, map{3:'c'}) |\n+------------------------------------------+\n| {3:\"c\",1:\"a\",2:\"b\"}                      |\n+------------------------------------------+\n\nmysql> select map_concat(map{1:3},map{'3.323':3});\n+----------------------------------+\n| map_concat((1, 3), ('3.323', 3)) |\n+----------------------------------+\n| {\"3.323\":3,\"1\":3}                |\n+----------------------------------+\n1 row in set (0.19 sec)\n\n\nmysql> select map_concat(map{1:3},map{1:'4', 3:'5',null:null}, null);\n+--------------------------------------------------------+\n| map_concat((1, 3), (1, '4', 3, '5', NULL, NULL), NULL) |\n+--------------------------------------------------------+\n| {1:\"4\",3:\"5\",null:null}                                |\n+--------------------------------------------------------+\n1 row in set (0.01 sec)\n"})})]})}const u=function(n={}){const{wrapper:e}=Object.assign({},(0,a.ah)(),n.components);return e?(0,s.jsx)(e,Object.assign({},n,{children:(0,s.jsx)(p,n)})):p(n)}},11151:(n,e,c)=>{c.d(e,{Zo:()=>r,ah:()=>t});var s=c(67294);const a=s.createContext({});function t(n){const e=s.useContext(a);return s.useMemo((()=>"function"==typeof n?n(e):{...e,...n}),[e,n])}const o={};function r({components:n,children:e,disableParentContext:c}){let r;return r=c?"function"==typeof n?n({}):n||o:t(n),s.createElement(a.Provider,{value:r},e)}}}]);