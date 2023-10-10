"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[75809],{87552:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>u,frontMatter:()=>c,metadata:()=>o,toc:()=>l});var s=n(85893),r=n(11151);const c={},a="EXECUTE AS",o={id:"sql-reference/sql-statements/account-management/EXECUTE AS",title:"EXECUTE AS",description:"Description",source:"@site/versioned_docs/version-3.1/sql-reference/sql-statements/account-management/EXECUTE AS.md",sourceDirName:"sql-reference/sql-statements/account-management",slug:"/sql-reference/sql-statements/account-management/EXECUTE AS",permalink:"/doc/docs/sql-reference/sql-statements/account-management/EXECUTE AS",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-statements/account-management/EXECUTE AS.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"DROP USER",permalink:"/doc/docs/sql-reference/sql-statements/account-management/DROP USER"},next:{title:"GRANT",permalink:"/doc/docs/sql-reference/sql-statements/account-management/GRANT"}},i={},l=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Usage notes",id:"usage-notes",level:2},{value:"Examples",id:"examples",level:2}];function d(e){const t=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",ul:"ul",li:"li",a:"a"},(0,r.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"execute-as",children:"EXECUTE AS"}),"\n",(0,s.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(t.p,{children:"After you obtain the privilege to impersonate a user, you can use the EXECUTE AS statement to switch the execution context of the current session to the user."}),"\n",(0,s.jsx)(t.p,{children:"This command is supported from v2.4."}),"\n",(0,s.jsx)(t.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-SQL",children:"EXECUTE AS user WITH NO REVERT\n"})}),"\n",(0,s.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"user"}),": The user must already exist."]}),"\n",(0,s.jsx)(t.h2,{id:"usage-notes",children:"Usage notes"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["The current login user (who calls the EXECUTE AS statement) must be granted the privilege to impersonate another user. For more information, see ",(0,s.jsx)(t.a,{href:"/doc/docs/sql-reference/sql-statements/account-management/GRANT",children:"GRANT"}),"."]}),"\n",(0,s.jsx)(t.li,{children:"The EXECUTE AS statement must contain the WITH NO REVERT clause, which means the execution context of the current session cannot be switched back to the original login user before the current session ends."}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsxs)(t.p,{children:["Switch the execution context of the current session to the user ",(0,s.jsx)(t.code,{children:"test2"}),"."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-SQL",children:"EXECUTE AS test2 WITH NO REVERT;\n"})}),"\n",(0,s.jsxs)(t.p,{children:["After the switch succeeds, you can run the ",(0,s.jsx)(t.code,{children:"select current_user()"})," command to obtain the current user."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-SQL",children:"select current_user();\n+-----------------------------+\n| CURRENT_USER()              |\n+-----------------------------+\n| 'default_cluster:test2'@'%' |\n+-----------------------------+\n"})})]})}const u=function(e={}){const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?(0,s.jsx)(t,Object.assign({},e,{children:(0,s.jsx)(d,e)})):d(e)}},11151:(e,t,n)=>{n.d(t,{Zo:()=>o,ah:()=>c});var s=n(67294);const r=s.createContext({});function c(e){const t=s.useContext(r);return s.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const a={};function o({components:e,children:t,disableParentContext:n}){let o;return o=n?"function"==typeof e?e({}):e||a:c(e),s.createElement(r.Provider,{value:o},t)}}}]);