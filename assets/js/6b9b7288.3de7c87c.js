"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[86877],{71895:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var s=n(85893),i=n(11151);const r={},a="DELETE SQLBLACKLIST",l={id:"sql-reference/sql-statements/Administration/DELETE_SQLBLACKLIST",title:"DELETE SQLBLACKLIST",description:"Description",source:"@site/versioned_docs/version-3.1/sql-reference/sql-statements/Administration/DELETE_SQLBLACKLIST.md",sourceDirName:"sql-reference/sql-statements/Administration",slug:"/sql-reference/sql-statements/Administration/DELETE_SQLBLACKLIST",permalink:"/doc/docs/sql-reference/sql-statements/Administration/DELETE_SQLBLACKLIST",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-statements/Administration/DELETE_SQLBLACKLIST.md",tags:[],version:"3.1",frontMatter:{},sidebar:"Chinese31",previous:{title:"CREATE STORAGE VOLUME",permalink:"/doc/docs/sql-reference/sql-statements/Administration/CREATE_STORAGE_VOLUME"},next:{title:"DESC STORAGE VOLUME",permalink:"/doc/docs/sql-reference/sql-statements/Administration/DESC_STORAGE_VOLUME"}},c={},d=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameter",id:"parameter",level:2},{value:"Examples",id:"examples",level:2}];function o(e){const t=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",pre:"pre",code:"code"},(0,i.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"delete-sqlblacklist",children:"DELETE SQLBLACKLIST"}),"\n",(0,s.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(t.p,{children:"Deletes an SQL regular expression from the SQL blacklist."}),"\n",(0,s.jsxs)(t.p,{children:["For more about SQL Blacklist, see ",(0,s.jsx)(t.a,{href:"/doc/docs/administration/Blacklist",children:"Manage SQL Blacklist"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-SQL",children:"DELETE SQLBLACKLIST <sql_index_number>\n"})}),"\n",(0,s.jsx)(t.h2,{id:"parameter",children:"Parameter"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"sql_index_number"}),": the index number of the SQL regular expression in the blacklist. Separate multiple index numbers with a comma (,) and a space. You can obtain the index number using ",(0,s.jsx)(t.a,{href:"/doc/docs/sql-reference/sql-statements/Administration/SHOW_SQLBLACKLIST",children:"SHOW SQLBLACKLIST"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-Plain",children:"mysql> DELETE SQLBLACKLIST 3, 4;\n\nmysql> SHOW SQLBLACKLIST;\n+-------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+\n| Index | Forbidden SQL                                                                                                                                                                                                                                                                                          |\n+-------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+\n| 1     | select count\\(\\*\\) from .+                                                                                                                                                                                                                                                                             |\n| 2     | select id_int \\* 4, id_tinyint, id_varchar from test_all_type_nullable except select id_int, id_tinyint, id_varchar from test_basic except select \\(id_int \\* 9 \\- 8\\) \\/ 2, id_tinyint, id_varchar from test_all_type_nullable2 except select id_int, id_tinyint, id_varchar from test_basic_nullable |\n+-------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+\n"})})]})}const m=function(e={}){const{wrapper:t}=Object.assign({},(0,i.ah)(),e.components);return t?(0,s.jsx)(t,Object.assign({},e,{children:(0,s.jsx)(o,e)})):o(e)}},11151:(e,t,n)=>{n.d(t,{Zo:()=>l,ah:()=>r});var s=n(67294);const i=s.createContext({});function r(e){const t=s.useContext(i);return s.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const a={};function l({components:e,children:t,disableParentContext:n}){let l;return l=n?"function"==typeof e?e({}):e||a:r(e),s.createElement(i.Provider,{value:l},t)}}}]);