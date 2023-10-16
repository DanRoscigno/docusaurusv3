"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[95719],{50943:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>l});var n=s(85893),a=s(11151);const r={displayed_sidebar:"English"},i="CREATE FILE",d={id:"sql-reference/sql-statements/Administration/CREATE_FILE",title:"CREATE FILE",description:"You can execute the CREATE FILE statement to create a file. After a file is created, the file is uploaded and persisted in StarRocks. In a database, only an admin user can create and delete files, and all users who have permission to access the database can use the files that belong to the database.",source:"@site/versioned_docs/version-2.5/sql-reference/sql-statements/Administration/CREATE_FILE.md",sourceDirName:"sql-reference/sql-statements/Administration",slug:"/sql-reference/sql-statements/Administration/CREATE_FILE",permalink:"/doc/docs/2.5/sql-reference/sql-statements/Administration/CREATE_FILE",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-statements/Administration/CREATE_FILE.md",tags:[],version:"2.5",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"CANCEL DECOMMISSION",permalink:"/doc/docs/2.5/sql-reference/sql-statements/Administration/CANCEL_DECOMMISSION"},next:{title:"CREATE RESOURCE GROUP",permalink:"/doc/docs/2.5/sql-reference/sql-statements/Administration/CREATE_RESOURCE_GROUP"}},c={},l=[{value:"Basic concepts",id:"basic-concepts",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}];function o(e){const t=Object.assign({h1:"h1",p:"p",h2:"h2",strong:"strong",pre:"pre",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",ul:"ul",li:"li"},(0,a.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"create-file",children:"CREATE FILE"}),"\n",(0,n.jsx)(t.p,{children:"You can execute the CREATE FILE statement to create a file. After a file is created, the file is uploaded and persisted in StarRocks. In a database, only an admin user can create and delete files, and all users who have permission to access the database can use the files that belong to the database."}),"\n",(0,n.jsx)(t.h2,{id:"basic-concepts",children:"Basic concepts"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"File"}),": refers to the file that is created and saved in StarRocks. After a file is created and stored in StarRocks, StarRocks assigns a unique ID to the file. You can find a file based on the database name, catalog, and file name."]}),"\n",(0,n.jsx)(t.h2,{id:"syntax",children:"Syntax"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-SQL",children:'CREATE FILE "file_name" [IN database]\n[properties]\n'})}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:(0,n.jsx)(t.strong,{children:"Parameter"})}),(0,n.jsx)(t.th,{children:(0,n.jsx)(t.strong,{children:"Required"})}),(0,n.jsx)(t.th,{children:(0,n.jsx)(t.strong,{children:"Description"})})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"file_name"}),(0,n.jsx)(t.td,{children:"Yes"}),(0,n.jsx)(t.td,{children:"The name of the file."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"database"}),(0,n.jsx)(t.td,{children:"No"}),(0,n.jsx)(t.td,{children:"The database to which the file belongs. If you do not specify this parameter, this parameter defaults to the name of the database that you access in the current session."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"properties"}),(0,n.jsx)(t.td,{children:"Yes"}),(0,n.jsx)(t.td,{children:"The properties of the file. The following table describes the configuration items of properties."})]})]})]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Configuration items of"})," ",(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"properties"})})]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:(0,n.jsx)(t.strong,{children:"Configuration item"})}),(0,n.jsx)(t.th,{children:(0,n.jsx)(t.strong,{children:"Required"})}),(0,n.jsx)(t.th,{children:(0,n.jsx)(t.strong,{children:"Description"})})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"url"}),(0,n.jsx)(t.td,{children:"Yes"}),(0,n.jsx)(t.td,{children:"The URL from which you can download the file. Only an unauthenticated HTTP URL is supported. After the file is stored in StarRocks, the URL is no longer needed."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"catalog"}),(0,n.jsx)(t.td,{children:"Yes"}),(0,n.jsx)(t.td,{children:"The category to which the file belongs. You can specify a catalog based on your business requirements. However, in some situations, you must set this parameter to a specific catalog. For example, if you load data from Kafka, StarRocks searches for files in the catalog from the Kafka data source."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"MD5"}),(0,n.jsx)(t.td,{children:"No"}),(0,n.jsx)(t.td,{children:"The message-digest algorithm that is used to check a file. If you specify this parameter, StarRocks checks the file after the file is downloaded."})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Create a file named  ",(0,n.jsx)(t.strong,{children:"test.pem"})," under the category named kafka."]}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-SQL",children:'CREATE FILE "test.pem"\nPROPERTIES\n(\n    "url" = "https://starrocks-public.oss-cn-xxxx.aliyuncs.com/key/test.pem",\n    "catalog" = "kafka"\n);\n'})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Create a file named ",(0,n.jsx)(t.strong,{children:"client.key"})," under the category named my_catalog."]}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-SQL",children:'CREATE FILE "client.key"\nIN my_database\nPROPERTIES\n(\n    "url" = "http://test.bj.bcebos.com/kafka-key/client.key",\n    "catalog" = "my_catalog",\n    "md5" = "b5bb901bf10f99205b39a46ac3557dd9"\n);\n'})})]})}const h=function(e={}){const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(o,e)})):o(e)}},11151:(e,t,s)=>{s.d(t,{Zo:()=>d,ah:()=>r});var n=s(67294);const a=n.createContext({});function r(e){const t=n.useContext(a);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const i={};function d({components:e,children:t,disableParentContext:s}){let d;return d=s?"function"==typeof e?e({}):e||i:r(e),n.createElement(a.Provider,{value:d},t)}}}]);