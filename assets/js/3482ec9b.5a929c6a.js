"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[38567],{67337:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var a=n(85893),t=n(11151);const r={},l="SHOW DATABASES",i={id:"sql-reference/sql-statements/data-manipulation/SHOW DATABASES",title:"SHOW DATABASES",description:"Description",source:"@site/versioned_docs/version-3.0/sql-reference/sql-statements/data-manipulation/SHOW DATABASES.md",sourceDirName:"sql-reference/sql-statements/data-manipulation",slug:"/sql-reference/sql-statements/data-manipulation/SHOW DATABASES",permalink:"/docusaurusv3/docs/3.0/sql-reference/sql-statements/data-manipulation/SHOW DATABASES",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/sql-reference/sql-statements/data-manipulation/SHOW DATABASES.md",tags:[],version:"3.0",frontMatter:{},sidebar:"documentation",previous:{title:"SHOW DATA",permalink:"/docusaurusv3/docs/3.0/sql-reference/sql-statements/data-manipulation/SHOW DATA"},next:{title:"SHOW DELETE",permalink:"/docusaurusv3/docs/3.0/sql-reference/sql-statements/data-manipulation/SHOW DELETE"}},c={},d=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2},{value:"References",id:"references",level:2}];function o(e){const s=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",strong:"strong",tbody:"tbody",td:"td",a:"a",ul:"ul",li:"li"},(0,t.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.h1,{id:"show-databases",children:"SHOW DATABASES"}),"\n",(0,a.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,a.jsx)(s.p,{children:"Views databases in your current StarRocks cluster or an external data source. StarRocks supports viewing databases of an external data source from v2.3 onwards."}),"\n",(0,a.jsx)(s.h2,{id:"syntax",children:"Syntax"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-SQL",children:"SHOW DATABASES [FROM <catalog_name>]\n"})}),"\n",(0,a.jsx)(s.h2,{id:"parameters",children:"Parameters"}),"\n",(0,a.jsxs)(s.table,{children:[(0,a.jsx)(s.thead,{children:(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.th,{children:(0,a.jsx)(s.strong,{children:"Parameter"})}),(0,a.jsx)(s.th,{children:(0,a.jsx)(s.strong,{children:"Required"})}),(0,a.jsx)(s.th,{children:(0,a.jsx)(s.strong,{children:"Description"})})]})}),(0,a.jsx)(s.tbody,{children:(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"catalog_name"}),(0,a.jsx)(s.td,{children:"No"}),(0,a.jsxs)(s.td,{children:["The name of the internal catalog or an external catalog.",(0,a.jsxs)("ul",{children:[(0,a.jsxs)("li",{children:["If you do not specify the parameter or specify the name of the internal catalog, which is ",(0,a.jsx)(s.code,{children:"default_catalog"}),", you can view databases in your current StarRocks cluster."]}),(0,a.jsxs)("li",{children:["If you set the value of the parameter to the name of an external catalog, you can view databases in the corresponding external data source. You can run ",(0,a.jsx)(s.a,{href:"/docusaurusv3/docs/3.0/sql-reference/sql-statements/data-manipulation/SHOW%20CATALOGS",children:"SHOW CATALOGS"})," to view internal and external catalogs."]})]})]})]})})]}),"\n",(0,a.jsx)(s.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(s.p,{children:"Example 1: View databases in your current StarRocks cluster."}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-SQL",children:"SHOW DATABASES;\n"})}),"\n",(0,a.jsx)(s.p,{children:"Or"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-SQL",children:"SHOW DATABASES FROM default_catalog;\n"})}),"\n",(0,a.jsx)(s.p,{children:"The output of the preceding statements is as follows."}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-SQL",children:"+----------+\n| Database |\n+----------+\n| db1      |\n| db2      |\n| db3      |\n+----------+\n"})}),"\n",(0,a.jsxs)(s.p,{children:["Example 2: View databases in a Hive cluster by using the ",(0,a.jsx)(s.code,{children:"Hive1"})," external catalog."]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-SQL",children:"SHOW DATABASES FROM hive1;\n\n+-----------+\n| Database  |\n+-----------+\n| hive_db1  |\n| hive_db2  |\n| hive_db3  |\n+-----------+\n"})}),"\n",(0,a.jsx)(s.h2,{id:"references",children:"References"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.a,{href:"/docusaurusv3/docs/3.0/sql-reference/sql-statements/data-definition/CREATE%20DATABASE",children:"CREATE DATABASE"})}),"\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.a,{href:"/docusaurusv3/docs/3.0/sql-reference/sql-statements/data-manipulation/SHOW%20CREATE%20DATABASE",children:"SHOW CREATE DATABASE"})}),"\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.a,{href:"/docusaurusv3/docs/3.0/sql-reference/sql-statements/data-definition/USE",children:"USE"})}),"\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.a,{href:"/docusaurusv3/docs/3.0/sql-reference/sql-statements/Utility/DESCRIBE",children:"DESC"})}),"\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.a,{href:"/docusaurusv3/docs/3.0/sql-reference/sql-statements/data-definition/DROP%20DATABASE",children:"DROP DATABASE"})}),"\n"]})]})}const h=function(e={}){const{wrapper:s}=Object.assign({},(0,t.ah)(),e.components);return s?(0,a.jsx)(s,Object.assign({},e,{children:(0,a.jsx)(o,e)})):o(e)}},11151:(e,s,n)=>{n.d(s,{Zo:()=>i,ah:()=>r});var a=n(67294);const t=a.createContext({});function r(e){const s=a.useContext(t);return a.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const l={};function i({components:e,children:s,disableParentContext:n}){let i;return i=n?"function"==typeof e?e({}):e||l:r(e),a.createElement(t.Provider,{value:i},s)}}}]);