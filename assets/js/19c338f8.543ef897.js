"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[80897],{94019:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var t=s(85893),i=s(11151);const r={},a="SHOW TABLE STATUS",o={id:"sql-reference/sql-statements/Administration/SHOW TABLE STATUS",title:"SHOW TABLE STATUS",description:"Description",source:"@site/versioned_docs/version-3.0/sql-reference/sql-statements/Administration/SHOW TABLE STATUS.md",sourceDirName:"sql-reference/sql-statements/Administration",slug:"/sql-reference/sql-statements/Administration/SHOW TABLE STATUS",permalink:"/docusaurusv3/docs/3.0/sql-reference/sql-statements/Administration/SHOW TABLE STATUS",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/sql-reference/sql-statements/Administration/SHOW TABLE STATUS.md",tags:[],version:"3.0",frontMatter:{},sidebar:"documentation",previous:{title:"SHOW SQLBLACKLIST",permalink:"/docusaurusv3/docs/3.0/sql-reference/sql-statements/Administration/SHOW SQLBLACKLIST"},next:{title:"SHOW VARIABLES",permalink:"/docusaurusv3/docs/3.0/sql-reference/sql-statements/Administration/SHOW VARIABLES"}},l={},c=[{value:"Description",id:"description",level:2},{value:"Examples",id:"examples",level:2}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",blockquote:"blockquote",ol:"ol",li:"li"},(0,i.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"show-table-status",children:"SHOW TABLE STATUS"}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(n.p,{children:"This statement is used to view some of the information in Table."}),"\n",(0,t.jsx)(n.p,{children:"Syntax:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:'SHOW TABLE STATUS\n[FROM db] [LIKE "pattern"]\n'})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"Note"}),"\n",(0,t.jsx)(n.p,{children:"This statement is mainly compatible with MySQL syntax. At present, it only shows a few information, such as Comment."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"View all the information of tables under the current database."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:"SHOW TABLE STATUS;\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"View all the information of tables whose names contain example and who are under specified databases."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:'SHOW TABLE STATUS FROM db LIKE "%example%";\n'})}),"\n"]}),"\n"]})]})}const m=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(d,e)})):d(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>o,ah:()=>r});var t=s(67294);const i=t.createContext({});function r(e){const n=t.useContext(i);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const a={};function o({components:e,children:n,disableParentContext:s}){let o;return o=s?"function"==typeof e?e({}):e||a:r(e),t.createElement(i.Provider,{value:o},n)}}}]);