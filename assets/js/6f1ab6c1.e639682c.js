"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[76381],{37610:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>t,metadata:()=>c,toc:()=>o});var r=s(85893),a=s(11151);const t={},l="map_from_arrays",c={id:"sql-reference/sql-functions/map-functions/map_from_arrays",title:"map_from_arrays",description:"Description",source:"@site/versioned_docs/version-3.1/sql-reference/sql-functions/map-functions/map_from_arrays.md",sourceDirName:"sql-reference/sql-functions/map-functions",slug:"/sql-reference/sql-functions/map-functions/map_from_arrays",permalink:"/docusaurusv3/docs/latest/sql-reference/sql-functions/map-functions/map_from_arrays",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-functions/map-functions/map_from_arrays.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"map_filter",permalink:"/docusaurusv3/docs/latest/sql-reference/sql-functions/map-functions/map_filter"},next:{title:"map_keys",permalink:"/docusaurusv3/docs/latest/sql-reference/sql-functions/map-functions/map_keys"}},i={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function u(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",ul:"ul",li:"li"},(0,a.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"map_from_arrays",children:"map_from_arrays"}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(n.p,{children:"Creates a MAP value from the given pair of key item array and value item array."}),"\n",(0,r.jsx)(n.p,{children:"This function is supported from v3.1 onwards."}),"\n",(0,r.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Haskell",children:"MAP map_from_arrays(ARRAY keys, ARRAY values)\n"})}),"\n",(0,r.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"keys"}),": uses to construct the keys of the result MAP. Make sure the elements of keys are unique."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"values"}),": used to construct the values of the result MAP."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"return-value",children:"Return value"}),"\n",(0,r.jsx)(n.p,{children:"Returns a MAP that is constructed from the input keys and values."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Keys and values must have the same length, otherwise it will return an error."}),"\n",(0,r.jsx)(n.li,{children:"If key or value is NULL, this function returns NULL."}),"\n",(0,r.jsx)(n.li,{children:"The returned MAP value has distinct keys."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Plaintext",children:"select map_from_arrays([1, 2], ['Star', 'Rocks']);\n+--------------------------------------------+\n| map_from_arrays([1, 2], ['Star', 'Rocks']) |\n+--------------------------------------------+\n| {1:\"Star\",2:\"Rocks\"}                       |\n+--------------------------------------------+\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Plaintext",children:"select map_from_arrays([1, 2], NULL);\n+-------------------------------+\n| map_from_arrays([1, 2], NULL) |\n+-------------------------------+\n| NULL                          |\n+-------------------------------+\n\nselect map_from_arrays([1,3,null,2,null],['ab','cdd',null,null,'abc']);\n+--------------------------------------------------------------------------+\n| map_from_arrays([1, 3, NULL, 2, NULL], ['ab', 'cdd', NULL, NULL, 'abc']) |\n+--------------------------------------------------------------------------+\n| {1:\"ab\",3:\"cdd\",2:null,null:\"abc\"}                                       |\n+--------------------------------------------------------------------------+\n"})})]})}const d=function(e={}){const{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(u,e)})):u(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>c,ah:()=>t});var r=s(67294);const a=r.createContext({});function t(e){const n=r.useContext(a);return r.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const l={};function c({components:e,children:n,disableParentContext:s}){let c;return c=s?"function"==typeof e?e({}):e||l:t(e),r.createElement(a.Provider,{value:c},n)}}}]);