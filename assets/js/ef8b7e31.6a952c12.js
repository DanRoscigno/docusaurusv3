"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[60246],{18760:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>o});var s=t(85893),c=t(11151);const r={},i="percentile_disc",a={id:"sql-reference/sql-functions/aggregate-functions/percentile_disc",title:"percentile_disc",description:"Description",source:"@site/versioned_docs/version-3.1/sql-reference/sql-functions/aggregate-functions/percentile_disc.md",sourceDirName:"sql-reference/sql-functions/aggregate-functions",slug:"/sql-reference/sql-functions/aggregate-functions/percentile_disc",permalink:"/doc/docs/sql-reference/sql-functions/aggregate-functions/percentile_disc",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-functions/aggregate-functions/percentile_disc.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"percentile_cont",permalink:"/doc/docs/sql-reference/sql-functions/aggregate-functions/percentile_cont"},next:{title:"retention",permalink:"/doc/docs/sql-reference/sql-functions/aggregate-functions/retention"}},l={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Usage notes",id:"usage-notes",level:2},{value:"Examples",id:"examples",level:2}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",pre:"pre",ul:"ul",li:"li"},(0,c.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"percentile_disc",children:"percentile_disc"}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["Returns a percentile value based on a discrete distribution of the input column ",(0,s.jsx)(n.code,{children:"expr"}),". If the exact percentile value cannot be found, this function returns the larger value between the two closest values."]}),"\n",(0,s.jsx)(n.p,{children:"This function is supported from v2.5 onwards."}),"\n",(0,s.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"PERCENTILE_DISC (expr, percentile) \n"})}),"\n",(0,s.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"expr"}),": the column for which you want to calculate the percentile value. The column can be of any data type that is sortable."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"percentile"}),": the percentile of the value you want to find. It must be a constant floating-point number between 0 and 1. For example, if you want to find the median value, set this parameter to ",(0,s.jsx)(n.code,{children:"0.5"}),". If you want to find the value at the 70th percentile, specify 0.7."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"return-value",children:"Return value"}),"\n",(0,s.jsxs)(n.p,{children:["The data type of the return value is the same as ",(0,s.jsx)(n.code,{children:"expr"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"usage-notes",children:"Usage notes"}),"\n",(0,s.jsx)(n.p,{children:"NULL values are ignored in the calculation."}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsxs)(n.p,{children:["Create table ",(0,s.jsx)(n.code,{children:"exam"})," and insert data into this table."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE exam (\n    subject STRING,\n    exam_result INT\n) \nDISTRIBUTED BY HASH(`subject`);\n\ninsert into exam values\n('chemistry',80),\n('chemistry',100),\n('chemistry',null),\n('math',60),\n('math',70),\n('math',85),\n('physics',75),\n('physics',80),\n('physics',85),\n('physics',99);\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plain",children:"select * from exam order by Subject;\n+-----------+-------+\n| Subject   | Score |\n+-----------+-------+\n| chemistry |    80 |\n| chemistry |   100 |\n| chemistry |  NULL |\n| math      |    60 |\n| math      |    70 |\n| math      |    85 |\n| physics   |    75 |\n| physics   |    80 |\n| physics   |    85 |\n| physics   |    99 |\n+-----------+-------+\n"})}),"\n",(0,s.jsx)(n.p,{children:"Calculate the median of each subject."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"SELECT Subject, PERCENTILE_DISC (Score, 0.5)\nFROM exam group by Subject;\n"})}),"\n",(0,s.jsx)(n.p,{children:"Output"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plain",children:"+-----------+-----------------------------+\n| Subject   | percentile_disc(Score, 0.5) |\n+-----------+-----------------------------+\n| chemistry |                         100 |\n| math      |                          70 |\n| physics   |                          85 |\n+-----------+-----------------------------+\n"})})]})}const u=function(e={}){const{wrapper:n}=Object.assign({},(0,c.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(d,e)})):d(e)}},11151:(e,n,t)=>{t.d(n,{Zo:()=>a,ah:()=>r});var s=t(67294);const c=s.createContext({});function r(e){const n=s.useContext(c);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const i={};function a({components:e,children:n,disableParentContext:t}){let a;return a=t?"function"==typeof e?e({}):e||i:r(e),s.createElement(c.Provider,{value:a},n)}}}]);