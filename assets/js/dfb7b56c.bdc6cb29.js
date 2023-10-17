"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[23115],{74854:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>f,frontMatter:()=>r,metadata:()=>l,toc:()=>a});var s=t(85893),i=t(11151);const r={displayed_sidebar:"English"},o="ST_LineFromText,ST_LineStringFromText",l={id:"sql-reference/sql-functions/spatial-functions/st_linefromtext",title:"ST_LineFromText,ST_LineStringFromText",description:"Description",source:"@site/versioned_docs/version-3.0/sql-reference/sql-functions/spatial-functions/st_linefromtext.md",sourceDirName:"sql-reference/sql-functions/spatial-functions",slug:"/sql-reference/sql-functions/spatial-functions/st_linefromtext",permalink:"/doc/docs/3.0/sql-reference/sql-functions/spatial-functions/st_linefromtext",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-functions/spatial-functions/st_linefromtext.md",tags:[],version:"3.0",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"ST_GeometryFromText,ST_GeomFromText",permalink:"/doc/docs/3.0/sql-reference/sql-functions/spatial-functions/st_geometryfromtext"},next:{title:"ST_Point",permalink:"/doc/docs/3.0/sql-reference/sql-functions/spatial-functions/st_point"}},c={},a=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Examples",id:"examples",level:2},{value:"keyword",id:"keyword",level:2}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code"},(0,i.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"st_linefromtextst_linestringfromtext",children:"ST_LineFromText,ST_LineStringFromText"}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"Converts a WKT (Well Known Text) to a memory representation in the form of Line."}),"\n",(0,s.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Haskell",children:"GEOMETRY ST_LineFromText(VARCHAR wkt)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"MySQL > SELECT ST_AsText(ST_LineFromText(\"LINESTRING (1 1, 2 2)\"));\n+---------------------------------------------------------+\n| st_astext(st_linefromtext('LINESTRING (1 1, 2 2)'))     |\n+---------------------------------------------------------+\n| LINESTRING (1 1, 2 2)                                   |\n+---------------------------------------------------------+\n"})}),"\n",(0,s.jsx)(n.h2,{id:"keyword",children:"keyword"}),"\n",(0,s.jsx)(n.p,{children:"ST_LINEFROMTEXT,ST_LINESTRINGFROMTEXT,ST,LINEFROMTEXT,LINESTRINGFROMTEXT"})]})}const f=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(d,e)})):d(e)}},11151:(e,n,t)=>{t.d(n,{Zo:()=>l,ah:()=>r});var s=t(67294);const i=s.createContext({});function r(e){const n=s.useContext(i);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const o={};function l({components:e,children:n,disableParentContext:t}){let l;return l=t?"function"==typeof e?e({}):e||o:r(e),s.createElement(i.Provider,{value:l},n)}}}]);