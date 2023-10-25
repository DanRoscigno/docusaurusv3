"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[68702],{91503:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>o});var n=t(85893),i=t(11151);const r={displayed_sidebar:"English"},c="ST_AsText,ST_AsWKT",a={id:"sql-reference/sql-functions/spatial-functions/st_astext",title:"ST_AsText,ST_AsWKT",description:"description",source:"@site/versioned_docs/version-2.1/sql-reference/sql-functions/spatial-functions/st_astext.md",sourceDirName:"sql-reference/sql-functions/spatial-functions",slug:"/sql-reference/sql-functions/spatial-functions/st_astext",permalink:"/docs/2.1/sql-reference/sql-functions/spatial-functions/st_astext",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-functions/spatial-functions/st_astext.md",tags:[],version:"2.1",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"murmur_hash3_32",permalink:"/docs/2.1/sql-reference/sql-functions/hash-functions/murmur_hash3_32"},next:{title:"ST_Circle",permalink:"/docs/2.1/sql-reference/sql-functions/spatial-functions/st_circle"}},l={},o=[{value:"description",id:"description",level:2},{value:"Syntax",id:"syntax",level:3},{value:"example",id:"example",level:2},{value:"keyword",id:"keyword",level:2}];function d(e){const s=Object.assign({h1:"h1",h2:"h2",h3:"h3",pre:"pre",code:"code",p:"p"},(0,i.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"st_astextst_aswkt",children:"ST_AsText,ST_AsWKT"}),"\n",(0,n.jsx)(s.h2,{id:"description",children:"description"}),"\n",(0,n.jsx)(s.h3,{id:"syntax",children:"Syntax"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-Haskell",children:"VARCHAR ST_AsText(GEOMETRY geo)\n"})}),"\n",(0,n.jsx)(s.p,{children:"Convert a geometric figure to WKT (Well Known Text) format."}),"\n",(0,n.jsx)(s.h2,{id:"example",children:"example"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-Plain",metastring:"Text",children:"MySQL > SELECT ST_AsText(ST_Point(24.7, 56.7));\n+---------------------------------+\n| st_astext(st_point(24.7, 56.7)) |\n+---------------------------------+\n| POINT (24.7 56.7)               |\n+---------------------------------+\n"})}),"\n",(0,n.jsx)(s.h2,{id:"keyword",children:"keyword"}),"\n",(0,n.jsx)(s.p,{children:"ST_ASTEXT,ST_ASWKT,ST,ASTEXT,ASWKT"})]})}const u=function(e={}){const{wrapper:s}=Object.assign({},(0,i.ah)(),e.components);return s?(0,n.jsx)(s,Object.assign({},e,{children:(0,n.jsx)(d,e)})):d(e)}},11151:(e,s,t)=>{t.d(s,{Zo:()=>a,ah:()=>r});var n=t(67294);const i=n.createContext({});function r(e){const s=n.useContext(i);return n.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const c={};function a({components:e,children:s,disableParentContext:t}){let a;return a=t?"function"==typeof e?e({}):e||c:r(e),n.createElement(i.Provider,{value:a},s)}}}]);