"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[49231],{35775:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var n=t(85893),r=t(11151);const a={},i="FILES",c={id:"sql-reference/sql-functions/table-functions/files",title:"FILES",description:"Description",source:"@site/versioned_docs/version-3.1/sql-reference/sql-functions/table-functions/files.md",sourceDirName:"sql-reference/sql-functions/table-functions",slug:"/sql-reference/sql-functions/table-functions/files",permalink:"/doc/docs/sql-reference/sql-functions/table-functions/files",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-functions/table-functions/files.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"Table Functions",permalink:"/doc/docs/category/table-functions"},next:{title:"generate_series",permalink:"/doc/docs/sql-reference/sql-functions/table-functions/generate_series"}},d={},l=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"StorageCredentialParams",id:"storagecredentialparams",level:3},{value:"Examples",id:"examples",level:2}];function o(e){const s=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",ul:"ul",li:"li",strong:"strong",pre:"pre",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",h3:"h3"},(0,r.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"files",children:"FILES"}),"\n",(0,n.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,n.jsxs)(s.p,{children:["Reads a data file from cloud storage. FILES() accesses cloud storage with the path-related properties of the file, infers the table schema of the data in the file, and returns the data rows. You can directly query the data rows using ",(0,n.jsx)(s.a,{href:"/doc/docs/sql-reference/sql-statements/data-manipulation/SELECT",children:"SELECT"}),", load the data rows into an existing table using ",(0,n.jsx)(s.a,{href:"/doc/docs/sql-reference/sql-statements/data-manipulation/insert",children:"INSERT"}),", or create a new table and load the data rows into it using ",(0,n.jsx)(s.a,{href:"/doc/docs/sql-reference/sql-statements/data-definition/CREATE%20TABLE%20AS%20SELECT",children:"CREATE TABLE AS SELECT"}),". This feature is supported from v3.1.0 onwards."]}),"\n",(0,n.jsx)(s.p,{children:"Currently, the FILES() function supports the following data sources and file formats:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Data sources:"})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"AWS S3"}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"File formats:"})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Parquet"}),"\n",(0,n.jsx)(s.li,{children:"ORC"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"syntax",children:"Syntax"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-SQL",children:'FILES( data_location , data_format [, StorageCredentialParams ] )\n\ndata_location ::=\n    "path" = "s3://<s3_path>"\n\ndata_format ::=\n    "format" = "{parquet | orc}"\n'})}),"\n",(0,n.jsx)(s.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(s.p,{children:["All parameters are in the ",(0,n.jsx)(s.code,{children:'"key" = "value"'})," pairs."]}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:(0,n.jsx)(s.strong,{children:"Key"})}),(0,n.jsx)(s.th,{children:(0,n.jsx)(s.strong,{children:"Required"})}),(0,n.jsx)(s.th,{children:(0,n.jsx)(s.strong,{children:"Description"})})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"path"}),(0,n.jsx)(s.td,{children:"Yes"}),(0,n.jsxs)(s.td,{children:["The URI used to access the file. Example: ",(0,n.jsx)(s.code,{children:"s3://testbucket/parquet/test.parquet"}),"."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"format"}),(0,n.jsx)(s.td,{children:"Yes"}),(0,n.jsxs)(s.td,{children:["The format of the data file. Valid values: ",(0,n.jsx)(s.code,{children:"parquet"})," and ",(0,n.jsx)(s.code,{children:"orc"}),"."]})]})]})]}),"\n",(0,n.jsx)(s.h3,{id:"storagecredentialparams",children:"StorageCredentialParams"}),"\n",(0,n.jsx)(s.p,{children:"The authentication information used by StarRocks to access your storage system."}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"Use the IAM user-based authentication to access AWS S3:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-SQL",children:'"aws.s3.access_key" = "xxxxxxxxxx",\n"aws.s3.secret_key" = "yyyyyyyyyy",\n"aws.s3.region" = "<s3_region>"\n'})}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:(0,n.jsx)(s.strong,{children:"Key"})}),(0,n.jsx)(s.th,{children:(0,n.jsx)(s.strong,{children:"Required"})}),(0,n.jsx)(s.th,{children:(0,n.jsx)(s.strong,{children:"Description"})})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"aws.s3.access_key"}),(0,n.jsx)(s.td,{children:"Yes"}),(0,n.jsx)(s.td,{children:"The Access Key ID that you can use to access the Amazon S3 bucket."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"aws.s3.secret_key"}),(0,n.jsx)(s.td,{children:"Yes"}),(0,n.jsx)(s.td,{children:"The Secret Access Key that you can use to access the Amazon S3 bucket."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"aws.s3.region"}),(0,n.jsx)(s.td,{children:"Yes"}),(0,n.jsxs)(s.td,{children:["The region in which your AWS S3 bucket resides. Example: ",(0,n.jsx)(s.code,{children:"us-west-2"}),"."]})]})]})]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsxs)(s.p,{children:["Example 1: Query the data from the Parquet file ",(0,n.jsx)(s.strong,{children:"parquet/par-dup.parquet"})," within the AWS S3 bucket ",(0,n.jsx)(s.code,{children:"inserttest"}),":"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-Plain",children:'MySQL > SELECT * FROM FILES(\n     "path" = "s3://inserttest/parquet/par-dup.parquet",\n     "format" = "parquet",\n     "aws.s3.access_key" = "XXXXXXXXXX",\n     "aws.s3.secret_key" = "YYYYYYYYYY",\n     "aws.s3.region" = "us-west-2"\n);\n+------+---------------------------------------------------------+\n| c1   | c2                                                      |\n+------+---------------------------------------------------------+\n|    1 | {"1": "key", "1": "1", "111": "1111", "111": "aaaa"}    |\n|    2 | {"2": "key", "2": "NULL", "222": "2222", "222": "bbbb"} |\n+------+---------------------------------------------------------+\n2 rows in set (22.335 sec)\n'})}),"\n",(0,n.jsxs)(s.p,{children:["Example 2: Insert the data rows from the Parquet file ",(0,n.jsx)(s.strong,{children:"parquet/insert_wiki_edit_append.parquet"})," within the AWS S3 bucket ",(0,n.jsx)(s.code,{children:"inserttest"})," into the table ",(0,n.jsx)(s.code,{children:"insert_wiki_edit"}),":"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-Plain",children:'MySQL > INSERT INTO insert_wiki_edit\n    SELECT * FROM FILES(\n        "path" = "s3://inserttest/parquet/insert_wiki_edit_append.parquet",\n        "format" = "parquet",\n        "aws.s3.access_key" = "XXXXXXXXXX",\n        "aws.s3.secret_key" = "YYYYYYYYYY",\n        "aws.s3.region" = "us-west-2"\n);\nQuery OK, 2 rows affected (23.03 sec)\n{\'label\':\'insert_d8d4b2ee-ac5c-11ed-a2cf-4e1110a8f63b\', \'status\':\'VISIBLE\', \'txnId\':\'2440\'}\n'})}),"\n",(0,n.jsxs)(s.p,{children:["Example 3: Create a table named ",(0,n.jsx)(s.code,{children:"ctas_wiki_edit"})," and insert the data rows from the Parquet file ",(0,n.jsx)(s.strong,{children:"parquet/insert_wiki_edit_append.parquet"})," within the AWS S3 bucket ",(0,n.jsx)(s.code,{children:"inserttest"})," into the table:"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-Plain",children:'MySQL > CREATE TABLE ctas_wiki_edit AS\n    SELECT * FROM FILES(\n        "path" = "s3://inserttest/parquet/insert_wiki_edit_append.parquet",\n        "format" = "parquet",\n        "aws.s3.access_key" = "XXXXXXXXXX",\n        "aws.s3.secret_key" = "YYYYYYYYYY",\n        "aws.s3.region" = "us-west-2"\n);\nQuery OK, 2 rows affected (22.09 sec)\n{\'label\':\'insert_1a217d70-2f52-11ee-9e4a-7a563fb695da\', \'status\':\'VISIBLE\', \'txnId\':\'3248\'}\n'})})]})}const h=function(e={}){const{wrapper:s}=Object.assign({},(0,r.ah)(),e.components);return s?(0,n.jsx)(s,Object.assign({},e,{children:(0,n.jsx)(o,e)})):o(e)}},11151:(e,s,t)=>{t.d(s,{Zo:()=>c,ah:()=>a});var n=t(67294);const r=n.createContext({});function a(e){const s=n.useContext(r);return n.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const i={};function c({components:e,children:s,disableParentContext:t}){let c;return c=t?"function"==typeof e?e({}):e||i:a(e),n.createElement(r.Provider,{value:c},s)}}}]);