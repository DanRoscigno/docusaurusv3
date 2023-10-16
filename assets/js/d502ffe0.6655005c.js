"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[61918],{48332:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>o});var t=s(85893),a=s(11151);const r={displayed_sidebar:"English"},i="element_at",l={id:"sql-reference/sql-functions/map-functions/element_at",title:"element_at",description:"Description",source:"@site/versioned_docs/version-3.1/sql-reference/sql-functions/map-functions/element_at.md",sourceDirName:"sql-reference/sql-functions/map-functions",slug:"/sql-reference/sql-functions/map-functions/element_at",permalink:"/doc/docs/sql-reference/sql-functions/map-functions/element_at",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-functions/map-functions/element_at.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"distinct_map_keys",permalink:"/doc/docs/sql-reference/sql-functions/map-functions/distinct_map_keys"},next:{title:"map_apply",permalink:"/doc/docs/sql-reference/sql-functions/map-functions/map_apply"}},c={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2},{value:"keywords",id:"keywords",level:2}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",pre:"pre",code:"code",ul:"ul",li:"li"},(0,a.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"element_at",children:"element_at"}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(n.p,{children:"Returns the value for the specified key from a key-value pair of a map. If any input parameter is NULL or if the key does not exist in the map, the result is NULL."}),"\n",(0,t.jsxs)(n.p,{children:["If you want to retrieve an element from an array, see ",(0,t.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-functions/array-functions/element_at",children:"element_at"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"This function is supported from v3.0 onwards."}),"\n",(0,t.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Haskell",children:"element_at(any_map, any_key)\n"})}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"any_map"}),": a MAP expression from which to retrieve values."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"any_key"}),": a key in the map."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"return-value",children:"Return value"}),"\n",(0,t.jsxs)(n.p,{children:["If ",(0,t.jsx)(n.code,{children:"any_key"})," exists in ",(0,t.jsx)(n.code,{children:"any_map"}),", the value corresponding to the key will be returned. Otherwise, NULL is returned."]}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plain",metastring:"text",children:"mysql> select element_at(map{1:3,2:4},1);\n+-------------------------+\n| element_at({1:3,2:4},1) |\n+-------------------------+\n|                     3   |\n+-------------------------+\n\nmysql> select element_at(map{1:3,2:4},3);\n+-------------------------+\n| element_at({1:3,2:4},3) |\n+-------------------------+\n|                    NULL |\n+-------------------------+\n\nmysql> select element_at(map{'a':1,'b':2},'a');\n+-----------------------+\n| map{'a':1,'b':2}['a'] |\n+-----------------------+\n|                     1 |\n+-----------------------+\n"})}),"\n",(0,t.jsx)(n.h2,{id:"keywords",children:"keywords"}),"\n",(0,t.jsx)(n.p,{children:"ELEMENT_AT, MAP"})]})}const p=function(e={}){const{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(d,e)})):d(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>l,ah:()=>r});var t=s(67294);const a=t.createContext({});function r(e){const n=t.useContext(a);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const i={};function l({components:e,children:n,disableParentContext:s}){let l;return l=s?"function"==typeof e?e({}):e||i:r(e),t.createElement(a.Provider,{value:l},n)}}}]);