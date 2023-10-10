"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[54218],{34946:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>p,frontMatter:()=>c,metadata:()=>l,toc:()=>o});var t=s(85893),r=s(11151);const c={},i="percentile_hash",l={id:"sql-reference/sql-functions/percentile-functions/percentile_hash",title:"percentile_hash",description:"Description",source:"@site/versioned_docs/version-3.1/sql-reference/sql-functions/percentile-functions/percentile_hash.md",sourceDirName:"sql-reference/sql-functions/percentile-functions",slug:"/sql-reference/sql-functions/percentile-functions/percentile_hash",permalink:"/docusaurusv3/docs/sql-reference/sql-functions/percentile-functions/percentile_hash",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-functions/percentile-functions/percentile_hash.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"percentile_empty",permalink:"/docusaurusv3/docs/sql-reference/sql-functions/percentile-functions/percentile_empty"},next:{title:"percentile_union",permalink:"/docusaurusv3/docs/sql-reference/sql-functions/percentile-functions/percentile_union"}},a={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function u(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code"},(0,r.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"percentile_hash",children:"percentile_hash"}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(n.p,{children:"Constructs DOUBLE values as PERCENTILE values."}),"\n",(0,t.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Haskell",children:"PERCENTILE_HASH(x);\n"})}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"x"}),": The supported data type is DOUBLE."]}),"\n",(0,t.jsx)(n.h2,{id:"return-value",children:"Return value"}),"\n",(0,t.jsx)(n.p,{children:"Returns a PERCENTILE value."}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"mysql> select percentile_approx_raw(percentile_hash(234.234), 0.99);\n+-------------------------------------------------------+\n| percentile_approx_raw(percentile_hash(234.234), 0.99) |\n+-------------------------------------------------------+\n|                                    234.23399353027344 |\n+-------------------------------------------------------+\n1 row in set (0.00 sec)\n"})})]})}const p=function(e={}){const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(u,e)})):u(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>l,ah:()=>c});var t=s(67294);const r=t.createContext({});function c(e){const n=t.useContext(r);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const i={};function l({components:e,children:n,disableParentContext:s}){let l;return l=s?"function"==typeof e?e({}):e||i:c(e),t.createElement(r.Provider,{value:l},n)}}}]);