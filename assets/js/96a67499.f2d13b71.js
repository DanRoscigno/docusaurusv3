"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[79405],{78889:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>o});var s=t(85893),a=t(11151);const r={},i="DROP CATALOG",c={id:"sql-reference/sql-statements/data-definition/DROP CATALOG",title:"DROP CATALOG",description:"Description",source:"@site/versioned_docs/version-3.0/sql-reference/sql-statements/data-definition/DROP CATALOG.md",sourceDirName:"sql-reference/sql-statements/data-definition",slug:"/sql-reference/sql-statements/data-definition/DROP CATALOG",permalink:"/docusaurusv3/docs/3.0/sql-reference/sql-statements/data-definition/DROP CATALOG",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/sql-reference/sql-statements/data-definition/DROP CATALOG.md",tags:[],version:"3.0",frontMatter:{},sidebar:"documentation",previous:{title:"DROP ANALYZE",permalink:"/docusaurusv3/docs/3.0/sql-reference/sql-statements/data-definition/DROP ANALYZE"},next:{title:"DROP DATABASE",permalink:"/docusaurusv3/docs/3.0/sql-reference/sql-statements/data-definition/DROP DATABASE"}},l={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",pre:"pre"},(0,a.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"drop-catalog",children:"DROP CATALOG"}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["Deletes an external catalog. The internal catalog cannot be deleted. A StarRocks cluster has only one internal catalog named ",(0,s.jsx)(n.code,{children:"default_catalog"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"DROP CATALOG <catalog_name>\n"})}),"\n",(0,s.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"catalog_name"}),": The name of an external catalog."]}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsxs)(n.p,{children:["Create a Hive catalog named ",(0,s.jsx)(n.code,{children:"hive1"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:'CREATE EXTERNAL CATALOG hive1\nPROPERTIES(\n  "type"="hive", \n  "hive.metastore.uris"="thrift://x.x.x.x:9083"\n);\n'})}),"\n",(0,s.jsx)(n.p,{children:"Delete the Hive catalog."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"DROP CATALOG hive1;\n"})})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(d,e)})):d(e)}},11151:(e,n,t)=>{t.d(n,{Zo:()=>c,ah:()=>r});var s=t(67294);const a=s.createContext({});function r(e){const n=s.useContext(a);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const i={};function c({components:e,children:n,disableParentContext:t}){let c;return c=t?"function"==typeof e?e({}):e||i:r(e),s.createElement(a.Provider,{value:c},n)}}}]);