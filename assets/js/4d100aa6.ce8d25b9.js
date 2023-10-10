"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[65706],{39464:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var a=t(85893),s=t(11151);const r={},o="Load and query data",i={id:"quick_start/Import_and_query",title:"Load and query data",description:"This QuickStart tutorial will lead you step by step in loading data into the table you created (see Create a table for more instruction), and running a query on the data.",source:"@site/versioned_docs/version-3.1/quick_start/Import_and_query.md",sourceDirName:"quick_start",slug:"/quick_start/Import_and_query",permalink:"/docusaurusv3/docs/quick_start/Import_and_query",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/quick_start/Import_and_query.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"Create a table",permalink:"/docusaurusv3/docs/quick_start/Create_table"},next:{title:"Deployment overview",permalink:"/docusaurusv3/docs/deployment/deployment_overview"}},d={},l=[{value:"Step 1: Load data with INSERT",id:"step-1-load-data-with-insert",level:2},{value:"Step 2: Query the data",id:"step-2-query-the-data",level:2},{value:"What to do next",id:"what-to-do-next",level:2}];function c(e){const n=Object.assign({h1:"h1",p:"p",a:"a",blockquote:"blockquote",strong:"strong",h2:"h2",code:"code",pre:"pre",ul:"ul",li:"li"},(0,s.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"load-and-query-data",children:"Load and query data"}),"\n",(0,a.jsxs)(n.p,{children:["This QuickStart tutorial will lead you step by step in loading data into the table you created (see ",(0,a.jsx)(n.a,{href:"/docusaurusv3/docs/quick_start/Create_table",children:"Create a table"})," for more instruction), and running a query on the data."]}),"\n",(0,a.jsxs)(n.p,{children:["StarRocks supports loading data from a rich wealth of data sources, including some major cloud services, local files, or a streaming data system. You can see ",(0,a.jsx)(n.a,{href:"/docusaurusv3/docs/loading/Loading_intro",children:"Ingestion Overview"})," for more information. The following steps will show you how to insert data into StarRocks by using the INSERT INTO statement, and run queries on the data."]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"NOTE"})}),"\n",(0,a.jsx)(n.p,{children:"You can complete this tutorial by using an existing StarRocks instance, database, table, user, and your own data. However, for simplicity, we recommend that you use the schema and data the tutorial provides."}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"step-1-load-data-with-insert",children:"Step 1: Load data with INSERT"}),"\n",(0,a.jsxs)(n.p,{children:["You can insert additional rows of data using INSERT. See ",(0,a.jsx)(n.a,{href:"/docusaurusv3/docs/sql-reference/sql-statements/data-manipulation/insert",children:"INSERT"})," for detailed instruction."]}),"\n",(0,a.jsxs)(n.p,{children:["Log in to StarRocks via your MySQL client, and execute the following statements to insert the following rows of data into the ",(0,a.jsx)(n.code,{children:"sr_member"})," table you have created."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-SQL",children:'use sr_hub\nINSERT INTO sr_member\nWITH LABEL insertDemo\nVALUES\n    (001,"tom",100000,"2022-03-13",true),\n    (002,"johndoe",210000,"2022-03-14",false),\n    (003,"maruko",200000,"2022-03-14",true),\n    (004,"ronaldo",100000,"2022-03-15",false),\n    (005,"pavlov",210000,"2022-03-16",false),\n    (006,"mohammed",300000,"2022-03-17",true);\n'})}),"\n",(0,a.jsx)(n.p,{children:"If the loading transaction succeeds, the following message will be returned."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-Plain",children:"Query OK, 6 rows affected (0.07 sec)\n{'label':'insertDemo', 'status':'VISIBLE', 'txnId':'5'}\n"})}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"NOTE"})}),"\n",(0,a.jsxs)(n.p,{children:["Loading data via INSERT INTO VALUES merely applies to the situation when you need to verify a DEMO with a small dataset. It is not recommended for a massive testing or production environment. To load mass data into StarRocks, see ",(0,a.jsx)(n.a,{href:"/docusaurusv3/docs/loading/Loading_intro",children:"Ingestion Overview"})," for other options that suit your scenarios."]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"step-2-query-the-data",children:"Step 2: Query the data"}),"\n",(0,a.jsx)(n.p,{children:"StarRocks is compatible with SQL-92."}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Run a simple query to list all rows of data in the table."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-SQL",children:"SELECT * FROM sr_member;\n"})}),"\n",(0,a.jsx)(n.p,{children:"The returned results are as follows:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-Plain",children:"+-------+----------+-----------+------------+----------+\n| sr_id | name     | city_code | reg_date   | verified |\n+-------+----------+-----------+------------+----------+\n|     3 | maruko   |    200000 | 2022-03-14 |        1 |\n|     1 | tom      |    100000 | 2022-03-13 |        1 |\n|     4 | ronaldo  |    100000 | 2022-03-15 |        0 |\n|     6 | mohammed |    300000 | 2022-03-17 |        1 |\n|     5 | pavlov   |    210000 | 2022-03-16 |        0 |\n|     2 | johndoe  |    210000 | 2022-03-14 |        0 |\n+-------+----------+-----------+------------+----------+\n6 rows in set (0.05 sec)\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Run a standard query with a specified condition."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-SQL",children:'SELECT sr_id, name \nFROM sr_member\nWHERE reg_date <= "2022-03-14";\n'})}),"\n",(0,a.jsx)(n.p,{children:"The returned results are as follows:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-Plain",children:"+-------+----------+\n| sr_id | name     |\n+-------+----------+\n|     1 | tom      |\n|     3 | maruko   |\n|     2 | johndoe  |\n+-------+----------+\n3 rows in set (0.01 sec)\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Run a query on a specified partition."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-SQL",children:"SELECT sr_id, name \nFROM sr_member \nPARTITION (p2);\n"})}),"\n",(0,a.jsx)(n.p,{children:"The returned results are as follows:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-Plain",children:"+-------+---------+\n| sr_id | name    |\n+-------+---------+\n|     3 | maruko  |\n|     2 | johndoe |\n+-------+---------+\n2 rows in set (0.01 sec)\n"})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"what-to-do-next",children:"What to do next"}),"\n",(0,a.jsxs)(n.p,{children:["To learn more about the data ingestion methods of StarRocks, see ",(0,a.jsx)(n.a,{href:"/docusaurusv3/docs/loading/Loading_intro",children:"Ingestion Overview"}),". In addition to a huge number of built-in functions, StarRocks also supports ",(0,a.jsx)(n.a,{href:"/docusaurusv3/docs/sql-reference/sql-functions/JAVA_UDF",children:"Java UDFs"}),", which allows you to create your own data processing functions that suit your business scenarios."]}),"\n",(0,a.jsx)(n.p,{children:"You can also learn how to:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Perform ",(0,a.jsx)(n.a,{href:"/docusaurusv3/docs/loading/Etl_in_loading",children:"ETL when loading"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:["Create an ",(0,a.jsx)(n.a,{href:"/docusaurusv3/docs/data_source/External_table",children:"external table"})," to access external data sources."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"/docusaurusv3/docs/administration/Query_planning",children:"Analyze the query plan"})," to learn how to optimize the query performance."]}),"\n"]})]})}const u=function(e={}){const{wrapper:n}=Object.assign({},(0,s.ah)(),e.components);return n?(0,a.jsx)(n,Object.assign({},e,{children:(0,a.jsx)(c,e)})):c(e)}},11151:(e,n,t)=>{t.d(n,{Zo:()=>i,ah:()=>r});var a=t(67294);const s=a.createContext({});function r(e){const n=a.useContext(s);return a.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const o={};function i({components:e,children:n,disableParentContext:t}){let i;return i=t?"function"==typeof e?e({}):e||o:r(e),a.createElement(s.Provider,{value:i},n)}}}]);