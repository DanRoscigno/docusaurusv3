"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[74983],{22617:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var t=n(85893),r=n(11151);const a={},i="SET PASSWORD",c={id:"sql-reference/sql-statements/account-management/SET PASSWORD",title:"SET PASSWORD",description:"Description",source:"@site/versioned_docs/version-3.1/sql-reference/sql-statements/account-management/SET PASSWORD.md",sourceDirName:"sql-reference/sql-statements/account-management",slug:"/sql-reference/sql-statements/account-management/SET PASSWORD",permalink:"/doc/docs/sql-reference/sql-statements/account-management/SET PASSWORD",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-statements/account-management/SET PASSWORD.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"REVOKE",permalink:"/doc/docs/sql-reference/sql-statements/account-management/REVOKE"},next:{title:"SET PROPERTY",permalink:"/doc/docs/sql-reference/sql-statements/account-management/SET PROPERTY"}},o={},d=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:3},{value:"Examples",id:"examples",level:2}];function l(e){const s=Object.assign({h1:"h1",h2:"h2",h3:"h3",pre:"pre",code:"code",p:"p",ol:"ol",li:"li"},(0,r.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"set-password",children:"SET PASSWORD"}),"\n",(0,t.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(s.h3,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-SQL",children:"SET PASSWORD [FOR user_identity] =\n[PASSWORD('plain password')]|['hashed password']\n"})}),"\n",(0,t.jsx)(s.p,{children:"SET PASSWORD command can be used to change user's login password. If the field, [FOR user_identity], does not exist, the current user's password shall be modified."}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-plain",metastring:"text",children:"Please note that the user_identity must match exactly the user_identity specified when creating a user by using CREATE USER. Otherwise, the user will be reported as non-existent. If user_identity is not specified, the current user is 'username'@'ip, which may not match any user_identity. The current user can be viewed through SHOW GRANTS. \n"})}),"\n",(0,t.jsx)(s.p,{children:"PASSWORD() inputs plaintext passwords, while the direct usage of strings requires the transmission of encrypted password."}),"\n",(0,t.jsx)(s.p,{children:"Modifying passwords of other users requires administrator privileges."}),"\n",(0,t.jsx)(s.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Modify the password of the current user"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-SQL",children:"SET PASSWORD = PASSWORD('123456')\nSET PASSWORD = '*6BB4837EB74329105EE4568DDA7DC67ED2CA2AD9'\n"})}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Modify the password of the specified user"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-SQL",children:"SET PASSWORD FOR 'jack'@'192.%' = PASSWORD('123456')\nSET PASSWORD FOR 'jack'@['domain'] = '*6BB4837EB74329105EE4568DDA7DC67ED2CA2AD9'\n"})}),"\n"]}),"\n"]})]})}const h=function(e={}){const{wrapper:s}=Object.assign({},(0,r.ah)(),e.components);return s?(0,t.jsx)(s,Object.assign({},e,{children:(0,t.jsx)(l,e)})):l(e)}},11151:(e,s,n)=>{n.d(s,{Zo:()=>c,ah:()=>a});var t=n(67294);const r=t.createContext({});function a(e){const s=t.useContext(r);return t.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const i={};function c({components:e,children:s,disableParentContext:n}){let c;return c=n?"function"==typeof e?e({}):e||i:a(e),t.createElement(r.Provider,{value:c},s)}}}]);