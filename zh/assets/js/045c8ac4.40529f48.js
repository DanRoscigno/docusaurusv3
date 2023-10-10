"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[17098],{8674:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>c,metadata:()=>t,toc:()=>o});var r=n(85893),a=n(11151);const c={},l="map_from_arrays",t={id:"sql-reference/sql-functions/map-functions/map_from_arrays",title:"map_from_arrays",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.1/sql-reference/sql-functions/map-functions/map_from_arrays.md",sourceDirName:"sql-reference/sql-functions/map-functions",slug:"/sql-reference/sql-functions/map-functions/map_from_arrays",permalink:"/docusaurusv3/zh/docs/latest/sql-reference/sql-functions/map-functions/map_from_arrays",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-functions/map-functions/map_from_arrays.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"map_filter",permalink:"/docusaurusv3/zh/docs/latest/sql-reference/sql-functions/map-functions/map_filter"},next:{title:"map_keys",permalink:"/docusaurusv3/zh/docs/latest/sql-reference/sql-functions/map-functions/map_keys"}},i={},o=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function d(e){const s=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",ul:"ul",li:"li"},(0,a.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h1,{id:"map_from_arrays",children:"map_from_arrays"}),"\n",(0,r.jsx)(s.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,r.jsx)(s.p,{children:"\u5c06\u4e24\u4e2a ARRAY \u6570\u7ec4\u4f5c\u4e3a Key \u548c Value \u7ec4\u5408\u6210\u4e00\u4e2a MAP \u5bf9\u8c61\u3002"}),"\n",(0,r.jsx)(s.p,{children:"\u8be5\u547d\u4ee4\u4ece 3.0 \u7248\u672c\u5f00\u59cb\u652f\u6301\u3002"}),"\n",(0,r.jsx)(s.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-Haskell",children:"MAP map_from_arrays(ARRAY keys, ARRAY values)\n"})}),"\n",(0,r.jsx)(s.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"keys"}),": \u7528\u4e8e\u751f\u6210 MAP \u4e2d\u7684 Key \u503c\u3002",(0,r.jsx)(s.code,{children:"keys"})," \u4e2d\u7684\u5143\u7d20\u5fc5\u987b\u552f\u4e00\u3002"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"values"}),": \u7528\u4e8e\u751f\u6210 MAP \u4e2d\u7684 Value \u503c."]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,r.jsxs)(s.p,{children:["\u8fd4\u56de\u4e00\u4e2a MAP \u503c\uff0cMap \u4e2d\u7684 Key \u4e3a ",(0,r.jsx)(s.code,{children:"keys"})," \u4e2d\u7684\u5143\u7d20\uff0cMap \u4e2d\u7684 Value \u4e3a ",(0,r.jsx)(s.code,{children:"values"})," \u4e2d\u7684\u5143\u7d20\u3002"]}),"\n",(0,r.jsx)(s.p,{children:"\u8fd4\u56de\u89c4\u5219\u5982\u4e0b\uff1a"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"keys"})," \u548c ",(0,r.jsx)(s.code,{children:"values"})," \u957f\u5ea6\uff08\u5143\u7d20\u4e2a\u6570\uff09\u5fc5\u987b\u76f8\u540c\uff0c\u5426\u5219\u8fd4\u56de\u62a5\u9519\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["\u5982\u679c ",(0,r.jsx)(s.code,{children:"keys"})," \u6216\u8005 ",(0,r.jsx)(s.code,{children:"values"})," \u4e3a NULL, \u5219\u8fd4\u56de NULL\u3002"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-Plaintext",children:"select map_from_arrays([1, 2], ['Star', 'Rocks']);\n+--------------------------------------------+\n| map_from_arrays([1, 2], ['Star', 'Rocks']) |\n+--------------------------------------------+\n| {1:\"Star\",2:\"Rocks\"}                       |\n+--------------------------------------------+\n"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-Plaintext",children:"select map_from_arrays([1, 2], NULL);\n+-------------------------------+\n| map_from_arrays([1, 2], NULL) |\n+-------------------------------+\n| NULL                          |\n+-------------------------------+\n"})})]})}const u=function(e={}){const{wrapper:s}=Object.assign({},(0,a.ah)(),e.components);return s?(0,r.jsx)(s,Object.assign({},e,{children:(0,r.jsx)(d,e)})):d(e)}},11151:(e,s,n)=>{n.d(s,{Zo:()=>t,ah:()=>c});var r=n(67294);const a=r.createContext({});function c(e){const s=r.useContext(a);return r.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const l={};function t({components:e,children:s,disableParentContext:n}){let t;return t=n?"function"==typeof e?e({}):e||l:c(e),r.createElement(a.Provider,{value:t},s)}}}]);