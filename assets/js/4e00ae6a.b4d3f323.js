"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[20637],{84832:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>p,contentTitle:()=>t,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>i});var s=a(85893),r=a(11151);const l={},t="map_apply",c={id:"sql-reference/sql-functions/map-functions/map_apply",title:"map_apply",description:"Description",source:"@site/versioned_docs/version-3.1/sql-reference/sql-functions/map-functions/map_apply.md",sourceDirName:"sql-reference/sql-functions/map-functions",slug:"/sql-reference/sql-functions/map-functions/map_apply",permalink:"/docusaurusv3/docs/sql-reference/sql-functions/map-functions/map_apply",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-functions/map-functions/map_apply.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"element_at",permalink:"/docusaurusv3/docs/sql-reference/sql-functions/map-functions/element_at"},next:{title:"map_concat",permalink:"/docusaurusv3/docs/sql-reference/sql-functions/map-functions/map_concat"}},p={},i=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function o(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",pre:"pre",code:"code",ul:"ul",li:"li"},(0,r.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"map_apply",children:"map_apply"}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["Applies a ",(0,s.jsx)(n.a,{href:"/docusaurusv3/docs/sql-reference/sql-functions/Lambda_expression",children:"Lambda expression"})," to the keys and values of the original Map and generates a new Map. This function is supported from v3.0."]}),"\n",(0,s.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Haskell",children:"MAP map_apply(lambda_func, any_map)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"lambda_func"}),": the Lambda expression."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"any_map"}),": the map to which the Lambda expression is applied."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"return-value",children:"Return value"}),"\n",(0,s.jsx)(n.p,{children:"Returns a map value. The data types of keys and values in the result map are determined by the result of the Lambda expression."}),"\n",(0,s.jsx)(n.p,{children:"If any input parameter is NULL, NULL is returned."}),"\n",(0,s.jsx)(n.p,{children:"If a key or value in the original map is NULL, NULL is processed as a normal value."}),"\n",(0,s.jsx)(n.p,{children:"The Lambda expression must have two parameters. The first parameter represents the key. The second parameter represents the value."}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsxs)(n.p,{children:["The following example uses ",(0,s.jsx)(n.a,{href:"/docusaurusv3/docs/sql-reference/sql-functions/map-functions/map_from_arrays",children:"map_from_arrays()"})," to generate a map value ",(0,s.jsx)(n.code,{children:'{1:"ab",3:"cd"}'}),'. Then the Lambda expression increments each key by 1 and calculates the length of each value. For example, the length of "ab" is 2.']}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:'mysql> select map_apply((k,v)->(k+1,length(v)), col_map)\nfrom (select map_from_arrays([1,3],["ab","cd"]) as col_map)A;\n+--------------------------------------------------+\n| map_apply((k, v) -> (k + 1, length(v)), col_map) |\n+--------------------------------------------------+\n| {2:2,4:2}                                        |\n+--------------------------------------------------+\n1 row in set (0.01 sec)\n\nmysql> select map_apply((k,v)->(k+1,length(v)), col_map)\nfrom (select map_from_arrays(null,null) as col_map)A;\n+--------------------------------------------------+\n| map_apply((k, v) -> (k + 1, length(v)), col_map) |\n+--------------------------------------------------+\n| NULL                                             |\n+--------------------------------------------------+\n1 row in set (0.02 sec)\n\nmysql> select map_apply((k,v)->(k+1,length(v)), col_map)\nfrom (select map_from_arrays([1,null],["ab","cd"]) as col_map)A;\n+--------------------------------------------------+\n| map_apply((k, v) -> (k + 1, length(v)), col_map) |\n+--------------------------------------------------+\n| NULL                                             |\n+--------------------------------------------------+\n'})})]})}const m=function(e={}){const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(o,e)})):o(e)}},11151:(e,n,a)=>{a.d(n,{Zo:()=>c,ah:()=>l});var s=a(67294);const r=s.createContext({});function l(e){const n=s.useContext(r);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const t={};function c({components:e,children:n,disableParentContext:a}){let c;return c=a?"function"==typeof e?e({}):e||t:l(e),s.createElement(r.Provider,{value:c},n)}}}]);