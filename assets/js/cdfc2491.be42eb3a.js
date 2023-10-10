"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[37979],{85323:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>o,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var n=t(85893),i=t(11151);const r={},a="ST_Distance_Sphere",c={id:"sql-reference/sql-functions/spatial-functions/st_distance_sphere",title:"ST_Distance_Sphere",description:"Description",source:"@site/versioned_docs/version-3.1/sql-reference/sql-functions/spatial-functions/st_distance_sphere.md",sourceDirName:"sql-reference/sql-functions/spatial-functions",slug:"/sql-reference/sql-functions/spatial-functions/st_distance_sphere",permalink:"/docusaurusv3/docs/latest/sql-reference/sql-functions/spatial-functions/st_distance_sphere",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-functions/spatial-functions/st_distance_sphere.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"ST_Contains",permalink:"/docusaurusv3/docs/latest/sql-reference/sql-functions/spatial-functions/st_contains"},next:{title:"ST_GeometryFromText,ST_GeomFromText",permalink:"/docusaurusv3/docs/latest/sql-reference/sql-functions/spatial-functions/st_geometryfromtext"}},o={},l=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Examples",id:"examples",level:2},{value:"keyword",id:"keyword",level:2}];function d(e){const s=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code"},(0,i.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"st_distance_sphere",children:"ST_Distance_Sphere"}),"\n",(0,n.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,n.jsx)(s.p,{children:'Calculates the spherical distance between two points on the Earth in "meters". The parameters inputted are longitude at X, latitude at X, longitude at Y, latitude at Y.'}),"\n",(0,n.jsx)(s.h2,{id:"syntax",children:"Syntax"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-Haskell",children:"DOUBLE ST_Distance_Sphere(DOUBLE x_lng, DOUBLE x_lat, DOUBLE y_lng, DOUBLE x_lat)\n"})}),"\n",(0,n.jsx)(s.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-Plain",metastring:"Text",children:"MySQL > select st_distance_sphere(116.35620117, 39.939093, 116.4274406433, 39.9020987219);\n+----------------------------------------------------------------------------+\n| st_distance_sphere(116.35620117, 39.939093, 116.4274406433, 39.9020987219) |\n+----------------------------------------------------------------------------+\n|                                                         7336.9135549995917 |\n+----------------------------------------------------------------------------+\n"})}),"\n",(0,n.jsx)(s.h2,{id:"keyword",children:"keyword"}),"\n",(0,n.jsx)(s.p,{children:"ST_DISTANCE_SPHERE,ST,DISTANCE,SPHERE"})]})}const u=function(e={}){const{wrapper:s}=Object.assign({},(0,i.ah)(),e.components);return s?(0,n.jsx)(s,Object.assign({},e,{children:(0,n.jsx)(d,e)})):d(e)}},11151:(e,s,t)=>{t.d(s,{Zo:()=>c,ah:()=>r});var n=t(67294);const i=n.createContext({});function r(e){const s=n.useContext(i);return n.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const a={};function c({components:e,children:s,disableParentContext:t}){let c;return c=t?"function"==typeof e?e({}):e||a:r(e),n.createElement(i.Provider,{value:c},s)}}}]);