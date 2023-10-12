"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[23115],{74854:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>f,frontMatter:()=>i,metadata:()=>c,toc:()=>a});var s=t(85893),r=t(11151);const i={},o="ST_LineFromText,ST_LineStringFromText",c={id:"sql-reference/sql-functions/spatial-functions/st_linefromtext",title:"ST_LineFromText,ST_LineStringFromText",description:"Description",source:"@site/versioned_docs/version-3.0/sql-reference/sql-functions/spatial-functions/st_linefromtext.md",sourceDirName:"sql-reference/sql-functions/spatial-functions",slug:"/sql-reference/sql-functions/spatial-functions/st_linefromtext",permalink:"/doc/docs/3.0/sql-reference/sql-functions/spatial-functions/st_linefromtext",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/sql-reference/sql-functions/spatial-functions/st_linefromtext.md",tags:[],version:"3.0",frontMatter:{},sidebar:"Chinese31",previous:{title:"ST_GeometryFromText,ST_GeomFromText",permalink:"/doc/docs/3.0/sql-reference/sql-functions/spatial-functions/st_geometryfromtext"},next:{title:"ST_Point",permalink:"/doc/docs/3.0/sql-reference/sql-functions/spatial-functions/st_point"}},l={},a=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Examples",id:"examples",level:2},{value:"keyword",id:"keyword",level:2}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code"},(0,r.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"st_linefromtextst_linestringfromtext",children:"ST_LineFromText,ST_LineStringFromText"}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"Converts a WKT (Well Known Text) to a memory representation in the form of Line."}),"\n",(0,s.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Haskell",children:"GEOMETRY ST_LineFromText(VARCHAR wkt)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"MySQL > SELECT ST_AsText(ST_LineFromText(\"LINESTRING (1 1, 2 2)\"));\n+---------------------------------------------------------+\n| st_astext(st_linefromtext('LINESTRING (1 1, 2 2)'))     |\n+---------------------------------------------------------+\n| LINESTRING (1 1, 2 2)                                   |\n+---------------------------------------------------------+\n"})}),"\n",(0,s.jsx)(n.h2,{id:"keyword",children:"keyword"}),"\n",(0,s.jsx)(n.p,{children:"ST_LINEFROMTEXT,ST_LINESTRINGFROMTEXT,ST,LINEFROMTEXT,LINESTRINGFROMTEXT"})]})}const f=function(e={}){const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(d,e)})):d(e)}},11151:(e,n,t)=>{t.d(n,{Zo:()=>c,ah:()=>i});var s=t(67294);const r=s.createContext({});function i(e){const n=s.useContext(r);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const o={};function c({components:e,children:n,disableParentContext:t}){let c;return c=t?"function"==typeof e?e({}):e||o:i(e),s.createElement(r.Provider,{value:c},n)}}}]);