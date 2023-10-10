"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[45656],{86894:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var t=s(85893),a=s(11151);const r={},i="DROP TASK",c={id:"sql-reference/sql-statements/data-manipulation/DROP TASK",title:"DROP TASK",description:"Description",source:"@site/versioned_docs/version-3.1/sql-reference/sql-statements/data-manipulation/DROP TASK.md",sourceDirName:"sql-reference/sql-statements/data-manipulation",slug:"/sql-reference/sql-statements/data-manipulation/DROP TASK",permalink:"/doc/docs/sql-reference/sql-statements/data-manipulation/DROP TASK",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-statements/data-manipulation/DROP TASK.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"DELETE",permalink:"/doc/docs/sql-reference/sql-statements/data-manipulation/DELETE"},next:{title:"EXPORT",permalink:"/doc/docs/sql-reference/sql-statements/data-manipulation/EXPORT"}},o={},l=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Usage notes",id:"usage-notes",level:2},{value:"Examples",id:"examples",level:2}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",blockquote:"blockquote",strong:"strong",pre:"pre",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,a.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"drop-task",children:"DROP TASK"}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["Drops an asynchronous ETL task submitted using ",(0,t.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/data-manipulation/SUBMIT%20TASK",children:"SUBMIT TASK"}),". This feature has been supported since StarRocks v2.5.7."]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"NOTE"})}),"\n",(0,t.jsx)(n.p,{children:"Dropping a task with DROP TASK simultaneously cancels the corresponding TaskRun."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:"DROP TASK '<task_name>'\n"})}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Parameter"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Description"})})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"task_name"}),(0,t.jsx)(n.td,{children:"The name of the task to drop."})]})})]}),"\n",(0,t.jsx)(n.h2,{id:"usage-notes",children:"Usage notes"}),"\n",(0,t.jsxs)(n.p,{children:["You can check the information of asynchronous tasks by querying the metadata tables ",(0,t.jsx)(n.code,{children:"tasks"})," and ",(0,t.jsx)(n.code,{children:"task_runs"})," in Information Schema."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:"SELECT * FROM INFORMATION_SCHEMA.tasks;\nSELECT * FROM information_schema.tasks WHERE task_name = '<task_name>';\nSELECT * FROM information_schema.task_runs;\nSELECT * FROM information_schema.task_runs WHERE task_name = '<task_name>';\n"})}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Plain",children:"MySQL > SUBMIT /*+set_var(query_timeout=100000)*/ TASK ctas AS\n    -> CREATE TABLE insert_wiki_edit_new\n    -> AS SELECT * FROM source_wiki_edit;\n+----------+-----------+\n| TaskName | Status    |\n+----------+-----------+\n| ctas     | SUBMITTED |\n+----------+-----------+\n1 row in set (1.19 sec)\n\nMySQL > DROP TASK 'ctas';\nQuery OK, 0 rows affected (0.35 sec)\n"})})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(d,e)})):d(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>c,ah:()=>r});var t=s(67294);const a=t.createContext({});function r(e){const n=t.useContext(a);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const i={};function c({components:e,children:n,disableParentContext:s}){let c;return c=s?"function"==typeof e?e({}):e||i:r(e),t.createElement(a.Provider,{value:c},n)}}}]);