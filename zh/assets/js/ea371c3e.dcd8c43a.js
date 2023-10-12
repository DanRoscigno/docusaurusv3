"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[17542],{63528:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>i,contentTitle:()=>a,default:()=>u,frontMatter:()=>c,metadata:()=>r,toc:()=>o});var t=s(85893),l=s(11151);const c={},a="element_at",r={id:"sql-reference/sql-functions/map-functions/element_at",title:"element_at",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.1/sql-reference/sql-functions/map-functions/element_at.md",sourceDirName:"sql-reference/sql-functions/map-functions",slug:"/sql-reference/sql-functions/map-functions/element_at",permalink:"/doc/zh/docs/sql-reference/sql-functions/map-functions/element_at",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-functions/map-functions/element_at.md",tags:[],version:"3.1",frontMatter:{},sidebar:"Chinese31",previous:{title:"distinct_map_keys",permalink:"/doc/zh/docs/sql-reference/sql-functions/map-functions/distinct_map_keys"},next:{title:"map_apply",permalink:"/doc/zh/docs/sql-reference/sql-functions/map-functions/map_apply"}},i={},o=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"keywords",id:"keywords",level:2}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",pre:"pre",code:"code",ul:"ul",li:"li"},(0,l.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"element_at",children:"element_at"}),"\n",(0,t.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,t.jsx)(n.p,{children:"\u83b7\u53d6 Map \u4e2d\u6307\u5b9a\u952e (Key) \u5bf9\u5e94\u7684\u503c (Value)\u3002\u5982\u679c\u8f93\u5165\u503c\u4e3a NULL \u6216\u6307\u5b9a\u7684 Key \u4e0d\u5b58\u5728\uff0c\u5219\u8fd4\u56de NULL\u3002"}),"\n",(0,t.jsxs)(n.p,{children:["\u5982\u679c\u60a8\u60f3\u4ece Array \u6570\u636e\u4e2d\u83b7\u53d6\u6307\u5b9a\u4f4d\u7f6e\u7684\u5143\u7d20\uff0c\u53c2\u89c1 Array \u51fd\u6570\u4e2d\u7684 ",(0,t.jsx)(n.a,{href:"/doc/zh/docs/sql-reference/sql-functions/array-functions/element_at",children:"element_at"}),"\u3002"]}),"\n",(0,t.jsx)(n.p,{children:"\u8be5\u51fd\u6570\u4ece 3.0 \u7248\u672c\u5f00\u59cb\u652f\u6301\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Haskell",children:"element_at(any_map, any_key)\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"any_mao"}),": Map \u8868\u8fbe\u5f0f\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"key"}),": \u6307\u5b9a\u7684 key\u3002\u5982\u679c ",(0,t.jsx)(n.code,{children:"key"})," \u4e0d\u5b58\u5728\uff0c\u8fd4\u56de NULL\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,t.jsxs)(n.p,{children:["\u8fd4\u56de ",(0,t.jsx)(n.code,{children:"key"})," \u5bf9\u5e94\u7684 Value \u503c\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plain",metastring:"text",children:"mysql> select element_at(map{1:3,2:4},1);\n+-------------------------+\n| element_at({1:3,2:4},1) |\n+-------------------------+\n|                     3   |\n+-------------------------+\n\nmysql> select element_at(map{1:3,2:4},3);\n+-------------------------+\n| element_at({1:3,2:4},3) |\n+-------------------------+\n|                    NULL |\n+-------------------------+\n\nmysql> select element_at(map{'a':1,'b':2},'a');\n+-----------------------+\n| map{'a':1,'b':2}['a'] |\n+-----------------------+\n|                     1 |\n+-----------------------+\n"})}),"\n",(0,t.jsx)(n.h2,{id:"keywords",children:"keywords"}),"\n",(0,t.jsx)(n.p,{children:"ELEMENT_AT, MAP"})]})}const u=function(e={}){const{wrapper:n}=Object.assign({},(0,l.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(d,e)})):d(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>r,ah:()=>c});var t=s(67294);const l=t.createContext({});function c(e){const n=t.useContext(l);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const a={};function r({components:e,children:n,disableParentContext:s}){let r;return r=s?"function"==typeof e?e({}):e||a:c(e),t.createElement(l.Provider,{value:r},n)}}}]);