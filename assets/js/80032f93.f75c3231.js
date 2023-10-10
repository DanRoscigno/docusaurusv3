"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[50405],{15689:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>o});var t=s(85893),a=s(11151);const i={},c="distinct_map_keys",r={id:"sql-reference/sql-functions/map-functions/distinct_map_keys",title:"distinct_map_keys",description:"Description",source:"@site/versioned_docs/version-3.1/sql-reference/sql-functions/map-functions/distinct_map_keys.md",sourceDirName:"sql-reference/sql-functions/map-functions",slug:"/sql-reference/sql-functions/map-functions/distinct_map_keys",permalink:"/docusaurusv3/docs/sql-reference/sql-functions/map-functions/distinct_map_keys",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-functions/map-functions/distinct_map_keys.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"cardinality",permalink:"/docusaurusv3/docs/sql-reference/sql-functions/map-functions/cardinality"},next:{title:"element_at",permalink:"/docusaurusv3/docs/sql-reference/sql-functions/map-functions/element_at"}},l={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code"},(0,a.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"distinct_map_keys",children:"distinct_map_keys"}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(n.p,{children:"Removes duplicate keys from a map, because keys in a map must be unique in terms of semantics. This function keeps only the last value for identical keys, called LAST WIN. This function is used when querying MAP data from external tables if there are duplicate keys in maps. StarRocks internal tables natively remove duplicate keys in maps."}),"\n",(0,t.jsx)(n.p,{children:"This function is supported from v3.1 onwards."}),"\n",(0,t.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Haskell",children:"distinct_map_keys(any_map)\n"})}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"any_map"}),": the MAP value from which you want to remove duplicate keys."]}),"\n",(0,t.jsx)(n.h2,{id:"return-value",children:"Return value"}),"\n",(0,t.jsx)(n.p,{children:"Returns a new map without duplicate keys in each map."}),"\n",(0,t.jsx)(n.p,{children:"If the input is NULL, NULL is returned."}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.p,{children:"Example 1: Simple usage."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plain",children:'select distinct_map_keys(map{"a":1,"a":2});\n+-------------------------------------+\n| distinct_map_keys(map{\'a\':1,\'a\':2}) |\n+-------------------------------------+\n| {"a":2}                             |\n+-------------------------------------+\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Example 2: Query MAP data from external tables and remove duplicate keys from the ",(0,t.jsx)(n.code,{children:"col_map"})," column."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plain",children:'select distinct_map_keys(col_map) as unique, col_map from external_table;\n+---------------+---------------+\n|      unique   | col_map       |\n+---------------+---------------+\n|       {"c":2} | {"c":1,"c":2} |\n|           NULL|          NULL |\n| {"e":4,"d":5} | {"e":4,"d":5} |\n+---------------+---------------+\n3 rows in set (0.05 sec)\n'})})]})}const u=function(e={}){const{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(d,e)})):d(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>r,ah:()=>i});var t=s(67294);const a=t.createContext({});function i(e){const n=t.useContext(a);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const c={};function r({components:e,children:n,disableParentContext:s}){let r;return r=s?"function"==typeof e?e({}):e||c:i(e),t.createElement(a.Provider,{value:r},n)}}}]);