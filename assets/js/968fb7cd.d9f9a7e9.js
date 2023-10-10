"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[54394],{5674:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>d,frontMatter:()=>c,metadata:()=>l,toc:()=>i});var a=n(85893),s=n(11151);const c={},r="catalog",l={id:"sql-reference/sql-functions/utility-functions/catalog",title:"catalog",description:"Description",source:"@site/versioned_docs/version-3.0/sql-reference/sql-functions/utility-functions/catalog.md",sourceDirName:"sql-reference/sql-functions/utility-functions",slug:"/sql-reference/sql-functions/utility-functions/catalog",permalink:"/docusaurusv3/docs/3.0/sql-reference/sql-functions/utility-functions/catalog",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/sql-reference/sql-functions/utility-functions/catalog.md",tags:[],version:"3.0",frontMatter:{},sidebar:"documentation",previous:{title:"row",permalink:"/docusaurusv3/docs/3.0/sql-reference/sql-functions/struct-functions/row"},next:{title:"current_role",permalink:"/docusaurusv3/docs/3.0/sql-reference/sql-functions/utility-functions/current_role"}},o={},i=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2},{value:"See also",id:"see-also",level:2}];function u(e){const t=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",code:"code",pre:"pre"},(0,s.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"catalog",children:"catalog"}),"\n",(0,a.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,a.jsxs)(t.p,{children:["Returns the name of the current catalog. The catalog can be a StarRocks internal catalog or an external catalog that is mapped to an external data source. For more information about catalogs, see ",(0,a.jsx)(t.a,{href:"/docusaurusv3/docs/3.0/data_source/catalog/catalog_overview",children:"Catalog overview"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["If no catalog is selected, the StarRocks internal catalog ",(0,a.jsx)(t.code,{children:"default_catalog"})," is returned."]}),"\n",(0,a.jsx)(t.h2,{id:"syntax",children:"Syntax"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-Haskell",children:"catalog()\n"})}),"\n",(0,a.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,a.jsx)(t.p,{children:"This function does not require parameters."}),"\n",(0,a.jsx)(t.h2,{id:"return-value",children:"Return value"}),"\n",(0,a.jsx)(t.p,{children:"Returns the name of the current catalog as a string."}),"\n",(0,a.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsxs)(t.p,{children:["Example 1: The current catalog is StarRocks internal catalog ",(0,a.jsx)(t.code,{children:"default_catalog"}),"."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-plaintext",children:"select catalog();\n+-----------------+\n| CATALOG()       |\n+-----------------+\n| default_catalog |\n+-----------------+\n1 row in set (0.01 sec)\n"})}),"\n",(0,a.jsxs)(t.p,{children:["Example 2: The current catalog is an external catalog ",(0,a.jsx)(t.code,{children:"hudi_catalog"}),"."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sql",children:"-- Switch to an external catalog.\nset catalog hudi_catalog;\n\n-- Return the name of the current catalog.\nselect catalog();\n+--------------+\n| CATALOG()    |\n+--------------+\n| hudi_catalog |\n+--------------+\n"})}),"\n",(0,a.jsx)(t.h2,{id:"see-also",children:"See also"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"/docusaurusv3/docs/3.0/sql-reference/sql-statements/data-definition/SET%20CATALOG",children:"SET CATALOG"}),": Switches to a destination catalog."]})]})}const d=function(e={}){const{wrapper:t}=Object.assign({},(0,s.ah)(),e.components);return t?(0,a.jsx)(t,Object.assign({},e,{children:(0,a.jsx)(u,e)})):u(e)}},11151:(e,t,n)=>{n.d(t,{Zo:()=>l,ah:()=>c});var a=n(67294);const s=a.createContext({});function c(e){const t=a.useContext(s);return a.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const r={};function l({components:e,children:t,disableParentContext:n}){let l;return l=n?"function"==typeof e?e({}):e||r:c(e),a.createElement(s.Provider,{value:l},t)}}}]);