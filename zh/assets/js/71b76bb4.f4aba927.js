"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[25251],{77284:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>h,frontMatter:()=>c,metadata:()=>a,toc:()=>d});var t=s(85893),r=s(11151);const c={displayed_sidebar:"Chinese"},l="SHOW USERS",a={id:"sql-reference/sql-statements/account-management/SHOW_USERS",title:"SHOW USERS",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.1/sql-reference/sql-statements/account-management/SHOW_USERS.md",sourceDirName:"sql-reference/sql-statements/account-management",slug:"/sql-reference/sql-statements/account-management/SHOW_USERS",permalink:"/zh/docs/sql-reference/sql-statements/account-management/SHOW_USERS",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-statements/account-management/SHOW_USERS.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"Chinese"},sidebar:"Chinese",previous:{title:"SHOW ROLES",permalink:"/zh/docs/sql-reference/sql-statements/account-management/SHOW_ROLES"},next:{title:"ADD SQLBLACKLIST",permalink:"/zh/docs/sql-reference/sql-statements/Administration/ADD_SQLBLACKLIST"}},i={},d=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u76f8\u5173\u6587\u6863",id:"\u76f8\u5173\u6587\u6863",level:2}];function o(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",code:"code",blockquote:"blockquote",pre:"pre",table:"table",thead:"thead",tr:"tr",th:"th",strong:"strong",tbody:"tbody",td:"td",ul:"ul",li:"li"},(0,r.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"show-users",children:"SHOW USERS"}),"\n",(0,t.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,t.jsxs)(n.p,{children:["\u67e5\u770b\u5f53\u524d\u7cfb\u7edf\u4e2d\u7684\u6240\u6709\u7528\u6237\u3002\u6ce8\u610f\u8fd9\u91cc\u7684\u7528\u6237\u4e0d\u662f\u7528\u6237\u540d\uff0c\u800c\u662f\u7528\u6237\u6807\u8bc6 (user identity)\u3002\u66f4\u591a\u4fe1\u606f\uff0c\u53c2\u89c1 ",(0,t.jsx)(n.a,{href:"/zh/docs/sql-reference/sql-statements/account-management/CREATE_USER",children:"CREATE USER"}),"\u3002\u8be5\u547d\u4ee4\u4ece 3.0 \u7248\u672c\u5f00\u59cb\u652f\u6301\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u60a8\u53ef\u4ee5\u901a\u8fc7 ",(0,t.jsx)(n.code,{children:"SHOW GRANTS FOR <user_identity>;"})," \u6765\u67e5\u770b\u67d0\u4e2a\u7528\u6237\u7684\u6743\u9650\uff0c\u53c2\u89c1 ",(0,t.jsx)(n.a,{href:"/zh/docs/sql-reference/sql-statements/account-management/SHOW_GRANTS",children:"SHOW GRANTS"}),"\u3002"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["\u8bf4\u660e\uff1a\u53ea\u6709 ",(0,t.jsx)(n.code,{children:"user_admin"})," \u89d2\u8272\u6709\u6743\u9650\u6267\u884c\u8be5\u8bed\u53e5\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:"SHOW USERS\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u8fd4\u56de\u5b57\u6bb5\u8bf4\u660e\uff1a"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"\u5b57\u6bb5\u540d\u79f0"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"\u63cf\u8ff0"})})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"User"}),(0,t.jsx)(n.td,{children:"\u7528\u6237\u6807\u8bc6\u3002"})]})})]}),"\n",(0,t.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,t.jsx)(n.p,{children:"\u67e5\u770b\u5f53\u524d\u7cfb\u7edf\u4e2d\u7684\u6240\u6709\u7528\u6237\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:"mysql> SHOW USERS;\n+-----------------+\n| User            |\n+-----------------+\n| 'lily'@'%'      |\n| 'root'@'%'      |\n| 'admin'@'%'     |\n| 'jack'@'%'      |\n| 'tom'@'%'       |\n+-----------------+\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u76f8\u5173\u6587\u6863",children:"\u76f8\u5173\u6587\u6863"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/zh/docs/sql-reference/sql-statements/account-management/CREATE_USER",children:"CREATE USER"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/zh/docs/sql-reference/sql-statements/account-management/ALTER_USER",children:"ALTER USER"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/zh/docs/sql-reference/sql-statements/account-management/DROP_USER",children:"DROP USER"})}),"\n"]})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(o,e)})):o(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>a,ah:()=>c});var t=s(67294);const r=t.createContext({});function c(e){const n=t.useContext(r);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const l={};function a({components:e,children:n,disableParentContext:s}){let a;return a=s?"function"==typeof e?e({}):e||l:c(e),t.createElement(r.Provider,{value:a},n)}}}]);