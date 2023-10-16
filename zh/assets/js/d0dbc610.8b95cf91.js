"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[98469],{94444:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>i,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>a,toc:()=>d});var c=s(85893),t=s(11151);const l={displayed_sidebar:"Chinese"},r="SET ROLE",a={id:"sql-reference/sql-statements/account-management/SET_ROLE",title:"SET ROLE",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.0/sql-reference/sql-statements/account-management/SET_ROLE.md",sourceDirName:"sql-reference/sql-statements/account-management",slug:"/sql-reference/sql-statements/account-management/SET_ROLE",permalink:"/doc/zh/docs/3.0/sql-reference/sql-statements/account-management/SET_ROLE",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-statements/account-management/SET_ROLE.md",tags:[],version:"3.0",frontMatter:{displayed_sidebar:"Chinese"},sidebar:"Chinese",previous:{title:"SET PROPERTY",permalink:"/doc/zh/docs/3.0/sql-reference/sql-statements/account-management/SET_PROPERTY"},next:{title:"SHOW AUTHENTICATION",permalink:"/doc/zh/docs/3.0/sql-reference/sql-statements/account-management/SHOW_AUTHENTICATION"}},i={},d=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u76f8\u5173\u6587\u6863",id:"\u76f8\u5173\u6587\u6863",level:2}];function o(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",ul:"ul",li:"li",a:"a",pre:"pre",code:"code",ol:"ol"},(0,t.ah)(),e.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.h1,{id:"set-role",children:"SET ROLE"}),"\n",(0,c.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,c.jsx)(n.p,{children:"\u5728\u5f53\u524d\u4f1a\u8bdd\u4e0b\uff0c\u6fc0\u6d3b\u5f53\u524d\u7528\u6237\u62e5\u6709\u6743\u9650\u7684\u89d2\u8272\u3002\u6fc0\u6d3b\u540e\uff0c\u7528\u6237\u53ef\u4ee5\u4f7f\u7528\u8be5\u89d2\u8272\u8fdb\u884c\u76f8\u5173\u64cd\u4f5c\u3002"}),"\n",(0,c.jsx)(n.p,{children:"\u8be5\u547d\u4ee4\u4ece 3.0 \u7248\u672c\u5f00\u59cb\u652f\u6301\u3002"}),"\n",(0,c.jsx)(n.h2,{id:"\u6ce8\u610f\u4e8b\u9879",children:"\u6ce8\u610f\u4e8b\u9879"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:"\u7528\u6237\u53ea\u80fd\u6fc0\u6d3b\u81ea\u5df1\u5df2\u6709\u6743\u9650\u7684\u89d2\u8272\u3002"}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:["\u7528\u6237\u53ef\u4ee5\u901a\u8fc7 ",(0,c.jsx)(n.a,{href:"/doc/zh/docs/3.0/sql-reference/sql-statements/account-management/SHOW_GRANTS",children:"SHOW GRANTS"})," \u67e5\u770b\u62e5\u6709\u7684\u89d2\u8272\uff0c\u53ef\u4ee5\u901a\u8fc7",(0,c.jsx)(n.a,{href:"/doc/zh/docs/3.0/sql-reference/sql-functions/utility-functions/current_role",children:"SELECT CURRENT_ROLE"})," \u67e5\u770b\u5f53\u524d\u6fc0\u6d3b\u7684\u89d2\u8272\u3002"]}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-SQL",children:"-- \u6fc0\u6d3b\u7279\u5b9a\u89d2\u8272\uff0c\u4f7f\u7528\u8fd9\u4e2a\u89d2\u8272\u8fdb\u884c\u64cd\u4f5c\u3002\nSET ROLE <role_name>[,<role_name>,..];\n-- \u6fc0\u6d3b\u9664\u6307\u5b9a\u89d2\u8272\u4e4b\u5916\uff0c\u7528\u6237\u62e5\u6709\u7684\u6240\u6709\u89d2\u8272\u3002\nSET ROLE ALL EXCEPT <role_name>[,<role_name>,..]; \n-- \u6fc0\u6d3b\u7528\u6237\u62e5\u6709\u7684\u6240\u6709\u89d2\u8272\u3002\nSET ROLE ALL;\n"})}),"\n",(0,c.jsx)(n.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"role_name"}),": \u7528\u6237\u62e5\u6709\u7684\u89d2\u8272\u540d\u3002"]}),"\n",(0,c.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,c.jsxs)(n.ol,{children:["\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:"\u67e5\u770b\u5f53\u524d\u7528\u6237\u62e5\u6709\u7684\u89d2\u8272\u3002"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-SQL",children:"SHOW GRANTS;\n+--------------+---------+----------------------------------------------+\n| UserIdentity | Catalog | Grants                                       |\n+--------------+---------+----------------------------------------------+\n| 'test'@'%'   | NULL    | GRANT 'db_admin', 'user_admin' TO 'test'@'%' |\n+--------------+---------+----------------------------------------------+\n"})}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:["\u6fc0\u6d3b ",(0,c.jsx)(n.code,{children:"db_admin"})," \u89d2\u8272\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-undefined",children:"SET ROLE db_admin;\n"})}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:"\u67e5\u770b\u5f53\u524d\u751f\u6548\u7684\u89d2\u8272\u3002"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-SQL",children:"SELECT CURRENT_ROLE();\n+--------------------+\n| CURRENT_ROLE()     |\n+--------------------+\n| db_admin           |\n+--------------------+\n"})}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(n.h2,{id:"\u76f8\u5173\u6587\u6863",children:"\u76f8\u5173\u6587\u6863"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.a,{href:"/doc/zh/docs/3.0/sql-reference/sql-statements/account-management/CREATE_ROLE",children:"CREATE ROLE"}),": \u521b\u5efa\u89d2\u8272\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.a,{href:"/doc/zh/docs/3.0/sql-reference/sql-statements/account-management/GRANT",children:"GRANT"}),": \u5c06\u89d2\u8272\u5206\u914d\u7ed9\u7528\u6237\u6216\u5176\u4ed6\u89d2\u8272\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.a,{href:"/doc/zh/docs/3.0/sql-reference/sql-statements/account-management/ALTER_USER",children:"ALTER USER"}),": \u4fee\u6539\u89d2\u8272\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.a,{href:"/doc/zh/docs/3.0/sql-reference/sql-statements/account-management/SHOW_ROLES",children:"SHOW ROLES"}),": \u67e5\u770b\u5f53\u524d\u7cfb\u7edf\u6240\u6709\u89d2\u8272\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.a,{href:"/doc/zh/docs/3.0/sql-reference/sql-functions/utility-functions/current_role",children:"current_role"}),": \u67e5\u770b\u5f53\u524d\u7528\u6237\u62e5\u6709\u7684\u89d2\u8272\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.a,{href:"/doc/zh/docs/3.0/sql-reference/sql-statements/account-management/DROP_ROLE",children:"DROP ROLE"}),": \u5220\u9664\u89d2\u8272\u3002"]}),"\n"]})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?(0,c.jsx)(n,Object.assign({},e,{children:(0,c.jsx)(o,e)})):o(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>a,ah:()=>l});var c=s(67294);const t=c.createContext({});function l(e){const n=c.useContext(t);return c.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const r={};function a({components:e,children:n,disableParentContext:s}){let a;return a=s?"function"==typeof e?e({}):e||r:l(e),c.createElement(t.Provider,{value:a},n)}}}]);