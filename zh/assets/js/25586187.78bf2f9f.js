"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[21422],{36212:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var c=s(85893),t=s(11151);const r={},l="ALTER USER",a={id:"sql-reference/sql-statements/account-management/ALTER_USER",title:"ALTER USER",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.5/sql-reference/sql-statements/account-management/ALTER_USER.md",sourceDirName:"sql-reference/sql-statements/account-management",slug:"/sql-reference/sql-statements/account-management/ALTER_USER",permalink:"/doc/zh/docs/2.5/sql-reference/sql-statements/account-management/ALTER_USER",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-2.5/sql-reference/sql-statements/account-management/ALTER_USER.md",tags:[],version:"2.5",frontMatter:{},sidebar:"Chinese31",previous:{title:"SQL\u53c2\u8003",permalink:"/doc/zh/docs/2.5/category/sql\u53c2\u8003"},next:{title:"CREATE ROLE",permalink:"/doc/zh/docs/2.5/sql-reference/sql-statements/account-management/CREATE_ROLE"}},i={},d=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function o(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",ol:"ol",li:"li",strong:"strong"},(0,t.ah)(),e.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.h1,{id:"alter-user",children:"ALTER USER"}),"\n",(0,c.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,c.jsx)(n.p,{children:"ALTER USER \u547d\u4ee4\u7528\u4e8e\u66f4\u6539\u7528\u6237\u4fe1\u606f\u3002"}),"\n",(0,c.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-SQL",children:"-- \u547d\u4ee4\nALTER USER user_identity [auth_option]\n\n-- \u53c2\u6570\u8bf4\u660e\nuser_identity:'user_name'@'host'\n\nauth_option: {\nIDENTIFIED BY 'auth_string'\nIDENTIFIED WITH auth_plugin\nIDENTIFIED WITH auth_plugin BY 'auth_string'\nIDENTIFIED WITH auth_plugin AS 'auth_string'\n}\n"})}),"\n",(0,c.jsxs)(n.ol,{children:["\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"user_identity"})}),"\n",(0,c.jsxs)(n.p,{children:["\u7531\u4e24\u90e8\u5206\u7ec4\u6210\uff0c",(0,c.jsx)(n.code,{children:"user_name"})," \u548c ",(0,c.jsx)(n.code,{children:"host"}),"\uff0c\u5176\u4e2d ",(0,c.jsx)(n.code,{children:"user_name"})," \u4e3a\u7528\u6237\u540d\u3002",(0,c.jsx)(n.code,{children:"host"})," \u6807\u8bc6\u7528\u6237\u7aef\u8fde\u63a5\u6240\u5728\u7684\u4e3b\u673a\u5730\u5740\u3002",(0,c.jsx)(n.code,{children:"host"})," \u90e8\u5206\u53ef\u4ee5\u4f7f\u7528 ",(0,c.jsx)(n.code,{children:"%"})," \u8fdb\u884c\u6a21\u7cca\u5339\u914d\u3002\u5982\u679c\u4e0d\u6307\u5b9a ",(0,c.jsx)(n.code,{children:"host"}),"\uff0c\u9ed8\u8ba4\u4e3a '%'\uff0c\u5373\u8868\u793a\u8be5\u7528\u6237\u53ef\u4ee5\u4ece\u4efb\u610f host \u8fde\u63a5\u5230 StarRocks\u3002"]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"auth_option"})}),"\n",(0,c.jsxs)(n.p,{children:["\u6307\u5b9a\u7528\u6237\u7684\u8ba4\u8bc1\u65b9\u5f0f\uff0c\u76ee\u524d\u652f\u6301 ",(0,c.jsx)(n.code,{children:"mysql_native_password"})," \u548c ",(0,c.jsx)(n.code,{children:"authentication_ldap_simple"}),"\u3002"]}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,c.jsxs)(n.ol,{children:["\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:"\u4fee\u6539\u7528\u6237\u5728 mysql \u4e2d\u7684\u5bc6\u7801\u3002"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-sql",children:"ALTER USER 'jack' IDENTIFIED BY '123456';\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u6216\u8005"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-sql",children:"ALTER USER 'jack' IDENTIFIED WITH mysql_native_password BY '123456';\n"})}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:"\u4e3a\u4e86\u907f\u514d\u4f20\u9012\u660e\u6587\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528\u4e0b\u9762\u7684\u65b9\u5f0f\u6765\u4fee\u6539\u5bc6\u7801\u3002"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-SQL",children:"ALTER USER 'jack' IDENTIFIED BY PASSWORD '*6BB4837EB74329105EE4568DDA7DC67ED2CA2AD9';\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u6216\u8005"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-SQL",children:"ALTER USER 'jack' IDENTIFIED WITH mysql_native_password AS '*6BB4837EB74329105EE4568DDA7DC67ED2CA2AD9';\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u540e\u9762\u52a0\u5bc6\u7684\u5185\u5bb9\u53ef\u4ee5\u901a\u8fc7 PASSWORD()\u83b7\u5f97\u5230\uff0c\u4f8b\u5982\uff1a"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-sql",children:"SELECT PASSWORD('123456');\n"})}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:"\u4fee\u6539\u7528\u6237\u4e3a LDAP \u8ba4\u8bc1\u3002"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-SQL",children:"ALTER USER 'jack' IDENTIFIED WITH authentication_ldap_simple;\n"})}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:"\u4fee\u6539\u7528\u6237\u4e3a LDAP \u8ba4\u8bc1\uff0c\u5e76\u6307\u5b9a\u7528\u6237\u5728 LDAP \u4e2d\u7684 DN (Distinguished Name)\u3002"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-SQL",children:"ALTER USER 'jack' IDENTIFIED WITH authentication_ldap_simple AS 'uid=jack,ou=company,dc=example,dc=com';\n"})}),"\n"]}),"\n"]})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?(0,c.jsx)(n,Object.assign({},e,{children:(0,c.jsx)(o,e)})):o(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>a,ah:()=>r});var c=s(67294);const t=c.createContext({});function r(e){const n=c.useContext(t);return c.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const l={};function a({components:e,children:n,disableParentContext:s}){let a;return a=s?"function"==typeof e?e({}):e||l:r(e),c.createElement(t.Provider,{value:a},n)}}}]);