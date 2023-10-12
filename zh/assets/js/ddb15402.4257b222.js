"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[47494],{71136:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>a});var s=n(85893),r=n(11151);const o={},i="ST_GeometryFromText, ST_GeomFromText",c={id:"sql-reference/sql-functions/spatial-functions/st_geometryfromtext",title:"ST_GeometryFromText, ST_GeomFromText",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.0/sql-reference/sql-functions/spatial-functions/st_geometryfromtext.md",sourceDirName:"sql-reference/sql-functions/spatial-functions",slug:"/sql-reference/sql-functions/spatial-functions/st_geometryfromtext",permalink:"/doc/zh/docs/3.0/sql-reference/sql-functions/spatial-functions/st_geometryfromtext",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/sql-reference/sql-functions/spatial-functions/st_geometryfromtext.md",tags:[],version:"3.0",frontMatter:{},sidebar:"Chinese31",previous:{title:"ST_Distance_Sphere",permalink:"/doc/zh/docs/3.0/sql-reference/sql-functions/spatial-functions/st_distance_sphere"},next:{title:"ST_LineFromText, ST_LineStringFromText",permalink:"/doc/zh/docs/3.0/sql-reference/sql-functions/spatial-functions/st_linefromtext"}},l={},a=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function d(e){const t=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code"},(0,r.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"st_geometryfromtext-st_geomfromtext",children:"ST_GeometryFromText, ST_GeomFromText"}),"\n",(0,s.jsx)(t.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,s.jsx)(t.p,{children:"\u5c06\u4e00\u4e2a WKT\uff08Well Known Text\uff09\u8f6c\u5316\u4e3a\u5bf9\u5e94\u7684\u5185\u5b58\u7684\u51e0\u4f55\u5f62\u5f0f\u3002"}),"\n",(0,s.jsx)(t.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-Haskell",children:"ST_GeometryFromText(wkt)\n"})}),"\n",(0,s.jsx)(t.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"wkt"}),": \u5f85\u8f6c\u5316\u7684 WKT\uff0c\u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u4e3a VARCHAR\u3002"]}),"\n",(0,s.jsx)(t.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,s.jsx)(t.p,{children:"\u8fd4\u56de\u503c\u7684\u6570\u636e\u7c7b\u578b\u4e3a GEOMETRY\u3002"}),"\n",(0,s.jsx)(t.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-Plain",metastring:"Text",children:"MySQL > SELECT ST_AsText(ST_GeometryFromText(\"LINESTRING (1 1, 2 2)\"));\n+---------------------------------------------------------+\n| st_astext(st_geometryfromtext('LINESTRING (1 1, 2 2)')) |\n+---------------------------------------------------------+\n| LINESTRING (1 1, 2 2)                                   |\n+---------------------------------------------------------+\n"})})]})}const m=function(e={}){const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?(0,s.jsx)(t,Object.assign({},e,{children:(0,s.jsx)(d,e)})):d(e)}},11151:(e,t,n)=>{n.d(t,{Zo:()=>c,ah:()=>o});var s=n(67294);const r=s.createContext({});function o(e){const t=s.useContext(r);return s.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const i={};function c({components:e,children:t,disableParentContext:n}){let c;return c=n?"function"==typeof e?e({}):e||i:o(e),s.createElement(r.Provider,{value:c},t)}}}]);