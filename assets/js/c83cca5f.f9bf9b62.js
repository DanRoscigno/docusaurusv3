"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[75355],{19763:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>m,frontMatter:()=>c,metadata:()=>o,toc:()=>i});var t=s(85893),a=s(11151);const c={},r="map_concat",o={id:"sql-reference/sql-functions/map-functions/map_concat",title:"map_concat",description:"Description",source:"@site/versioned_docs/version-3.1/sql-reference/sql-functions/map-functions/map_concat.md",sourceDirName:"sql-reference/sql-functions/map-functions",slug:"/sql-reference/sql-functions/map-functions/map_concat",permalink:"/docusaurusv3/docs/latest/sql-reference/sql-functions/map-functions/map_concat",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-functions/map-functions/map_concat.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"map_apply",permalink:"/docusaurusv3/docs/latest/sql-reference/sql-functions/map-functions/map_apply"},next:{title:"map_filter",permalink:"/docusaurusv3/docs/latest/sql-reference/sql-functions/map-functions/map_filter"}},l={},i=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function p(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",pre:"pre"},(0,a.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"map_concat",children:"map_concat"}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["Returns the union of the input maps. If a key is found in multiple maps, this function keeps only the last value among these maps, called LAST WIN. For example, ",(0,t.jsx)(n.code,{children:"SELECT map_concat(map{1:3},map{1:'4'});"})," returns ",(0,t.jsx)(n.code,{children:'{1:"4"}'}),"."]}),"\n",(0,t.jsx)(n.p,{children:"This function is supported from v3.1 onwards."}),"\n",(0,t.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Haskell",children:"ANY_MAP map_concat(any_map0, any_map1...)\n"})}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"any_mapN"}),": the map values you want to union. All maps must share a common type. If data types of the input maps are not the same, the return type is the common supertype of the input maps."]}),"\n",(0,t.jsx)(n.h2,{id:"return-value",children:"Return value"}),"\n",(0,t.jsx)(n.p,{children:"Returns a MAP of the common supertype of the input maps."}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Plain",children:"mysql> SELECT map_concat(map(1, 'a', 2, 'b'), map(3, 'c'));\n+------------------------------------------+\n| map_concat(map{1:'a',2:'b'}, map{3:'c'}) |\n+------------------------------------------+\n| {3:\"c\",1:\"a\",2:\"b\"}                      |\n+------------------------------------------+\n\nmysql> select map_concat(map{1:3},map{'3.323':3});\n+----------------------------------+\n| map_concat((1, 3), ('3.323', 3)) |\n+----------------------------------+\n| {\"3.323\":3,\"1\":3}                |\n+----------------------------------+\n1 row in set (0.19 sec)\n\n\nmysql> select map_concat(map{1:3},map{1:'4', 3:'5',null:null}, null);\n+--------------------------------------------------------+\n| map_concat((1, 3), (1, '4', 3, '5', NULL, NULL), NULL) |\n+--------------------------------------------------------+\n| {1:\"4\",3:\"5\",null:null}                                |\n+--------------------------------------------------------+\n1 row in set (0.01 sec)\n"})})]})}const m=function(e={}){const{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(p,e)})):p(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>o,ah:()=>c});var t=s(67294);const a=t.createContext({});function c(e){const n=t.useContext(a);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const r={};function o({components:e,children:n,disableParentContext:s}){let o;return o=s?"function"==typeof e?e({}):e||r:c(e),t.createElement(a.Provider,{value:o},n)}}}]);