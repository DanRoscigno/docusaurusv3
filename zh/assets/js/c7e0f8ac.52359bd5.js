"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[60217],{68657:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var t=s(85893),c=s(11151);const i={},a="distinct_map_keys",r={id:"sql-reference/sql-functions/map-functions/distinct_map_keys",title:"distinct_map_keys",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.1/sql-reference/sql-functions/map-functions/distinct_map_keys.md",sourceDirName:"sql-reference/sql-functions/map-functions",slug:"/sql-reference/sql-functions/map-functions/distinct_map_keys",permalink:"/docusaurusv3/zh/docs/latest/sql-reference/sql-functions/map-functions/distinct_map_keys",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-functions/map-functions/distinct_map_keys.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"cardinality",permalink:"/docusaurusv3/zh/docs/latest/sql-reference/sql-functions/map-functions/cardinality"},next:{title:"element_at",permalink:"/docusaurusv3/zh/docs/latest/sql-reference/sql-functions/map-functions/element_at"}},l={},d=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function o(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",pre:"pre"},(0,c.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"distinct_map_keys",children:"distinct_map_keys"}),"\n",(0,t.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,t.jsxs)(n.p,{children:["\u5220\u9664 Map \u4e2d\u91cd\u590d\u7684 Key\u3002\u4ece\u8bed\u4e49\u4e0a\u8bb2\uff0cMap \u4e2d\u7684 Key \u4e0d\u53ef\u4ee5\u91cd\u590d\uff0cValue \u53ef\u4ee5\u91cd\u590d\u3002\u5bf9\u4e8e Key \u76f8\u540c\u7684\u952e\u503c\u5bf9\uff0c\u8be5\u51fd\u6570\u4ec5\u4fdd\u7559\u6700\u540e\u4e00\u4e2a\u51fa\u73b0\u7684\u952e\u503c\u5bf9 (LAST WIN \u539f\u5219)\u3002\u6bd4\u5982\uff0c",(0,t.jsx)(n.code,{children:"SELECT distinct_map_keys(map{1:3,1:'4'});"})," \u8fd4\u56de ",(0,t.jsx)(n.code,{children:'{1:"4"}'}),"\u3002"]}),"\n",(0,t.jsx)(n.p,{children:"\u8be5\u51fd\u6570\u53ef\u7528\u4e8e\u5728\u67e5\u8be2\u5916\u90e8 MAP \u6570\u636e\u65f6\uff0c\u5bf9 Map \u4e2d\u7684 Key \u8fdb\u884c\u53bb\u91cd\u3002StarRocks \u539f\u751f\u8868\u4f1a\u81ea\u52a8\u5bf9 Map \u4e2d\u91cd\u590d\u7684 Key \u8fdb\u884c\u53bb\u91cd\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u8be5\u51fd\u6570\u4ece 3.1 \u7248\u672c\u5f00\u59cb\u652f\u6301\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Haskell",children:"distinct_map_keys(any_map)\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"any_map"}),": Map \u8868\u8fbe\u5f0f\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,t.jsx)(n.p,{children:"\u8fd4\u56de Key \u503c\u4e0d\u91cd\u590d\u7684\u65b0 Map\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u5982\u679c\u8f93\u5165\u503c\u4e3a NULL\uff0c\u5219\u8fd4\u56de NULL\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,t.jsx)(n.p,{children:"\u793a\u4f8b\u4e00\uff1a\u7b80\u5355\u7528\u6cd5\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plain",children:'select distinct_map_keys(map{"a":1,"a":2});\n+-------------------------------------+\n| distinct_map_keys(map{\'a\':1,\'a\':2}) |\n+-------------------------------------+\n| {"a":2}                             |\n+-------------------------------------+\n'})}),"\n",(0,t.jsxs)(n.p,{children:["\u793a\u4f8b\u4e8c\uff1a\u4ece\u5916\u8868\u4e2d\u67e5\u8be2 Map \u6570\u636e\u5e76\u5220\u9664 ",(0,t.jsx)(n.code,{children:"col_map"})," \u5217\u4e2d\u91cd\u590d\u7684 Key\u3002",(0,t.jsx)(n.code,{children:"unique"})," \u5217\u4e3a\u8fd4\u56de\u7684\u7ed3\u679c\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plain",children:'select distinct_map_keys(col_map) as unique, col_map from external_table;\n+---------------+---------------+\n|      unique   | col_map       |\n+---------------+---------------+\n|       {"c":2} | {"c":1,"c":2} |\n|           NULL|          NULL |\n| {"e":4,"d":5} | {"e":4,"d":5} |\n+---------------+---------------+\n3 rows in set (0.05 sec)\n'})})]})}const p=function(e={}){const{wrapper:n}=Object.assign({},(0,c.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(o,e)})):o(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>r,ah:()=>i});var t=s(67294);const c=t.createContext({});function i(e){const n=t.useContext(c);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const a={};function r({components:e,children:n,disableParentContext:s}){let r;return r=s?"function"==typeof e?e({}):e||a:i(e),t.createElement(c.Provider,{value:r},n)}}}]);