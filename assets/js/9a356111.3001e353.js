"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[46875],{53201:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>t,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>a});var l=s(85893),i=s(11151);const r={},t="SUM",c={id:"sql-reference/sql-functions/aggregate-functions/sum",title:"SUM",description:"Description",source:"@site/versioned_docs/version-3.1/sql-reference/sql-functions/aggregate-functions/sum.md",sourceDirName:"sql-reference/sql-functions/aggregate-functions",slug:"/sql-reference/sql-functions/aggregate-functions/sum",permalink:"/docusaurusv3/docs/latest/sql-reference/sql-functions/aggregate-functions/sum",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-functions/aggregate-functions/sum.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"STDDEV_SAMP",permalink:"/docusaurusv3/docs/latest/sql-reference/sql-functions/aggregate-functions/stddev_samp"},next:{title:"VAR_SAMP,VARIANCE_SAMP",permalink:"/docusaurusv3/docs/latest/sql-reference/sql-functions/aggregate-functions/var_samp"}},o={},a=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Usage notes",id:"usage-notes",level:2},{value:"Examples",id:"examples",level:2},{value:"keyword",id:"keyword",level:2}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",pre:"pre",ul:"ul",li:"li",ol:"ol"},(0,i.ah)(),e.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h1,{id:"sum",children:"SUM"}),"\n",(0,l.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,l.jsxs)(n.p,{children:["Returns the sum of non-null values for ",(0,l.jsx)(n.code,{children:"expr"}),". You can use the DISTINCT keyword to compute the sum of distinct non-null values."]}),"\n",(0,l.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-Haskell",children:"SUM([DISTINCT] expr)\n"})}),"\n",(0,l.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"expr"}),": the expression that evaluates to a numeric value. Supported data types are TINYINT, SMALLINT, INT, FLOAT, DOUBLE, or DECIMAL."]}),"\n",(0,l.jsx)(n.h2,{id:"return-value",children:"Return value"}),"\n",(0,l.jsx)(n.p,{children:"Data type mapping between input value and return value:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"TINYINT -> BIGINT"}),"\n",(0,l.jsx)(n.li,{children:"SMALLINT -> BIGINT"}),"\n",(0,l.jsx)(n.li,{children:"INT -> BIGINT"}),"\n",(0,l.jsx)(n.li,{children:"FLOAT -> DOUBLE"}),"\n",(0,l.jsx)(n.li,{children:"DOUBLE -> DOUBLE"}),"\n",(0,l.jsx)(n.li,{children:"DECIMAL -> DECIMAL"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"usage-notes",children:"Usage notes"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"This function ignores nulls."}),"\n",(0,l.jsxs)(n.li,{children:["An error is returned if ",(0,l.jsx)(n.code,{children:"expr"})," does not exist."]}),"\n",(0,l.jsx)(n.li,{children:"If a VARCHAR expression is passed, this function implicitly casts the input into DOUBLE values. If the cast fails, an error is returned."}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Create a table named ",(0,l.jsx)(n.code,{children:"employees"}),"."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-SQL",children:'CREATE TABLE IF NOT EXISTS employees (\n    region_num    TINYINT        COMMENT "range [-128, 127]",\n    id            BIGINT         COMMENT "range [-2^63 + 1 ~ 2^63 - 1]",\n    hobby         STRING         NOT NULL COMMENT "upper limit value 65533 bytes",\n    income        DOUBLE         COMMENT "8 bytes",\n    sales       DECIMAL(12,4)  COMMENT ""\n    )\n    DISTRIBUTED BY HASH(region_num);\n'})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Insert data into ",(0,l.jsx)(n.code,{children:"employees"}),"."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-SQL",children:"INSERT INTO employees VALUES\n(3,432175,'3',25600,1250.23),\n(4,567832,'3',37932,2564.33),\n(3,777326,'2',null,1932.99),\n(5,342611,'6',43727,45235.1),\n(2,403882,'4',36789,52872.4);\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Query data from ",(0,l.jsx)(n.code,{children:"employees"}),"."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"MySQL > select * from employees;\n+------------+--------+-------+--------+------------+\n| region_num | id     | hobby | income | sales      |\n+------------+--------+-------+--------+------------+\n|          5 | 342611 | 6     |  43727 | 45235.1000 |\n|          2 | 403882 | 4     |  36789 | 52872.4000 |\n|          4 | 567832 | 3     |  37932 |  2564.3300 |\n|          3 | 432175 | 3     |  25600 |  1250.2300 |\n|          3 | 777326 | 2     |   NULL |  1932.9900 |\n+------------+--------+-------+--------+------------+\n5 rows in set (0.01 sec)\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Use this function to compute sum."}),"\n",(0,l.jsx)(n.p,{children:"Example 1: Calculate the total sales of each region."}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"MySQL > SELECT region_num, sum(sales) from employees\ngroup by region_num;\n\n+------------+------------+\n| region_num | sum(sales) |\n+------------+------------+\n|          2 | 52872.4000 |\n|          5 | 45235.1000 |\n|          4 |  2564.3300 |\n|          3 |  3183.2200 |\n+------------+------------+\n4 rows in set (0.01 sec)\n"})}),"\n",(0,l.jsxs)(n.p,{children:["Example 2: Calculate the total employee income of each region. This function ignores nulls and the income of employee id ",(0,l.jsx)(n.code,{children:"777326"})," is not counted."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"MySQL > select region_num, sum(income) from employees\ngroup by region_num;\n\n+------------+-------------+\n| region_num | sum(income) |\n+------------+-------------+\n|          2 |       36789 |\n|          5 |       43727 |\n|          4 |       37932 |\n|          3 |       25600 |\n+------------+-------------+\n4 rows in set (0.01 sec)\n"})}),"\n",(0,l.jsxs)(n.p,{children:["Example 3: Calculate the total number of hobbies. The ",(0,l.jsx)(n.code,{children:"hobby"})," column is of the STRING type and will be implicitly converted to DOUBLE during computation."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"MySQL > select sum(DISTINCT hobby) from employees;\n\n+---------------------+\n| sum(DISTINCT hobby) |\n+---------------------+\n|                  15 |\n+---------------------+\n1 row in set (0.01 sec)\n"})}),"\n",(0,l.jsxs)(n.p,{children:["Example 4: Use ",(0,l.jsx)(n.code,{children:"sum"})," with the WHERE clause to calculate the total income of employees whose monthly income is higher than 30000."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"MySQL > select sum(income) from employees\nWHERE income > 30000;\n\n+-------------+\n| sum(income) |\n+-------------+\n|      118448 |\n+-------------+\n1 row in set (0.00 sec)\n"})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"keyword",children:"keyword"}),"\n",(0,l.jsx)(n.p,{children:"SUM, sum"})]})}const u=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,l.jsx)(n,Object.assign({},e,{children:(0,l.jsx)(d,e)})):d(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>c,ah:()=>r});var l=s(67294);const i=l.createContext({});function r(e){const n=l.useContext(i);return l.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const t={};function c({components:e,children:n,disableParentContext:s}){let c;return c=s?"function"==typeof e?e({}):e||t:r(e),l.createElement(i.Provider,{value:c},n)}}}]);