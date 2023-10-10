"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[6366],{17261:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var n=s(85893),r=s(11151);const i={},l="SHOW SQLBLACKLIST",a={id:"sql-reference/sql-statements/Administration/SHOW SQLBLACKLIST",title:"SHOW SQLBLACKLIST",description:"Description",source:"@site/versioned_docs/version-3.1/sql-reference/sql-statements/Administration/SHOW SQLBLACKLIST.md",sourceDirName:"sql-reference/sql-statements/Administration",slug:"/sql-reference/sql-statements/Administration/SHOW SQLBLACKLIST",permalink:"/docusaurusv3/docs/sql-reference/sql-statements/Administration/SHOW SQLBLACKLIST",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-statements/Administration/SHOW SQLBLACKLIST.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"SHOW RESOURCE GROUP",permalink:"/docusaurusv3/docs/sql-reference/sql-statements/Administration/SHOW RESOURCE GROUP"},next:{title:"SHOW STORAGE VOLUMES",permalink:"/docusaurusv3/docs/sql-reference/sql-statements/Administration/SHOW STORAGE VOLUMES"}},c={},d=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Return value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function o(e){const t=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",pre:"pre",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",strong:"strong",tbody:"tbody",td:"td"},(0,r.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"show-sqlblacklist",children:"SHOW SQLBLACKLIST"}),"\n",(0,n.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,n.jsx)(t.p,{children:"Shows the SQL regular expressions in the SQL blacklist."}),"\n",(0,n.jsxs)(t.p,{children:["For more about SQL Blacklist, see ",(0,n.jsx)(t.a,{href:"/docusaurusv3/docs/administration/Blacklist",children:"Manage SQL Blacklist"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"syntax",children:"Syntax"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-SQL",children:"SHOW SQLBLACKLIST\n"})}),"\n",(0,n.jsx)(t.h2,{id:"return-value",children:"Return value"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:(0,n.jsx)(t.strong,{children:"Return"})}),(0,n.jsx)(t.th,{children:(0,n.jsx)(t.strong,{children:"Description"})})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Index"}),(0,n.jsx)(t.td,{children:"The index number of the SQL regular expression that has been added to the blacklist."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Forbidden SQL"}),(0,n.jsx)(t.td,{children:"The SQL regular expression that has been added to the blacklist."})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-Plain",children:"mysql> SHOW SQLBLACKLIST;\n+-------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+\n| Index | Forbidden SQL                                                                                                                                                                                                                                                                                          |\n+-------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+\n| 1     | select count\\(\\*\\) from .+                                                                                                                                                                                                                                                                             |\n| 2     | select id_int \\* 4, id_tinyint, id_varchar from test_all_type_nullable except select id_int, id_tinyint, id_varchar from test_basic except select \\(id_int \\* 9 \\- 8\\) \\/ 2, id_tinyint, id_varchar from test_all_type_nullable2 except select id_int, id_tinyint, id_varchar from test_basic_nullable |\n| 3     | select id_int from test_all_type_select1 order by id_int limit [1-7], [5-7]                                                                                                                                                                                                                            |\n| 4     | select count\\(distinct .+\\) from .+                                                                                                                                                                                                                                                                    |\n+-------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+\n"})})]})}const h=function(e={}){const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(o,e)})):o(e)}},11151:(e,t,s)=>{s.d(t,{Zo:()=>a,ah:()=>i});var n=s(67294);const r=n.createContext({});function i(e){const t=n.useContext(r);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const l={};function a({components:e,children:t,disableParentContext:s}){let a;return a=s?"function"==typeof e?e({}):e||l:i(e),n.createElement(r.Provider,{value:a},t)}}}]);