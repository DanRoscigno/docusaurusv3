"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[63639],{82813:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>o});var t=s(85893),r=s(11151);const i={displayed_sidebar:"English"},c="max_by",a={id:"sql-reference/sql-functions/aggregate-functions/max_by",title:"max_by",description:"Description",source:"@site/versioned_docs/version-2.5/sql-reference/sql-functions/aggregate-functions/max_by.md",sourceDirName:"sql-reference/sql-functions/aggregate-functions",slug:"/sql-reference/sql-functions/aggregate-functions/max_by",permalink:"/doc/docs/2.5/sql-reference/sql-functions/aggregate-functions/max_by",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-functions/aggregate-functions/max_by.md",tags:[],version:"2.5",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"MAX",permalink:"/doc/docs/2.5/sql-reference/sql-functions/aggregate-functions/max"},next:{title:"MIN",permalink:"/doc/docs/2.5/sql-reference/sql-functions/aggregate-functions/min"}},l={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Usage notes",id:"usage-notes",level:2},{value:"Examples",id:"examples",level:2}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",pre:"pre",ul:"ul",li:"li",ol:"ol"},(0,r.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"max_by",children:"max_by"}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["Returns the value of ",(0,t.jsx)(n.code,{children:"x"})," associated with the maximum value of ",(0,t.jsx)(n.code,{children:"y"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["For example, ",(0,t.jsx)(n.code,{children:"SELECT max_by(subject, exam_result) FROM exam;"})," is to return the subject that has the highest exam score."]}),"\n",(0,t.jsx)(n.p,{children:"This function is supported from v2.5."}),"\n",(0,t.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Haskell",children:"max_by(x,y)\n"})}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"x"}),": an expression of any type."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"y"}),": an expression of a type that can be ordered."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"return-value",children:"Return value"}),"\n",(0,t.jsxs)(n.p,{children:["Returns a value that has the same type as ",(0,t.jsx)(n.code,{children:"x"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"usage-notes",children:"Usage notes"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"y"})," must be a sortable type. If you use an unsortable type of ",(0,t.jsx)(n.code,{children:"y"}),", such as ",(0,t.jsx)(n.code,{children:"bitmap"})," or ",(0,t.jsx)(n.code,{children:"hll"}),", an error is returned."]}),"\n",(0,t.jsxs)(n.li,{children:["If ",(0,t.jsx)(n.code,{children:"y"})," contains a null value, the row that corresponds to the null value is ignored."]}),"\n",(0,t.jsxs)(n.li,{children:["If more than one value of ",(0,t.jsx)(n.code,{children:"x"})," has the same maximum value of ",(0,t.jsx)(n.code,{children:"y"}),", this function returns the first value of ",(0,t.jsx)(n.code,{children:"x"})," encountered."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Create a table ",(0,t.jsx)(n.code,{children:"exam"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:"CREATE TABLE exam (\n    subject_id INT,\n    subject STRING,\n    exam_result INT\n) DISTRIBUTED BY HASH(`subject_id`) BUCKETS 1;\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Insert values into this table and query data from this table."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:"insert into exam values\n(1,'math',90),\n(2,'english',70),\n(3,'physics',95),\n(4,'chemistry',85),\n(5,'music',95),\n(6,'biology',null);\n\nselect * from exam order by subject_id;\n+------------+-----------+-------------+\n| subject_id | subject   | exam_result |\n+------------+-----------+-------------+\n|          1 | math      |          90 |\n|          2 | english   |          70 |\n|          3 | physics   |          95 |\n|          4 | chemistry |          85 |\n|          5 | music     |          95 |\n|          6 | biology   |        null |\n+------------+-----------+-------------+\n6 rows in set (0.03 sec)\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Obtain the subject that has the highest score.\nTwo subjects ",(0,t.jsx)(n.code,{children:"physics"})," and ",(0,t.jsx)(n.code,{children:"music"})," have the same highest score ",(0,t.jsx)(n.code,{children:"95"})," and the first subject encountered (",(0,t.jsx)(n.code,{children:"physics"}),") is returned."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Plain",children:"SELECT max_by(subject, exam_result) FROM exam;\n+------------------------------+\n| max_by(subject, exam_result) |\n+------------------------------+\n| physics                      |\n+------------------------------+\n1 row in set (0.01 sec)\n"})}),"\n"]}),"\n"]})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(d,e)})):d(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>a,ah:()=>i});var t=s(67294);const r=t.createContext({});function i(e){const n=t.useContext(r);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const c={};function a({components:e,children:n,disableParentContext:s}){let a;return a=s?"function"==typeof e?e({}):e||c:i(e),t.createElement(r.Provider,{value:a},n)}}}]);