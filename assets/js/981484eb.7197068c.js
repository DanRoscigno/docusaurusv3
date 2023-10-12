"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[44579],{52613:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>a,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var t=n(85893),i=n(11151);const r={},o="ADMIN SET CONFIG",c={id:"sql-reference/sql-statements/Administration/ADMIN_SET_CONFIG",title:"ADMIN SET CONFIG",description:"Description",source:"@site/versioned_docs/version-3.1/sql-reference/sql-statements/Administration/ADMIN_SET_CONFIG.md",sourceDirName:"sql-reference/sql-statements/Administration",slug:"/sql-reference/sql-statements/Administration/ADMIN_SET_CONFIG",permalink:"/doc/docs/sql-reference/sql-statements/Administration/ADMIN_SET_CONFIG",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-statements/Administration/ADMIN_SET_CONFIG.md",tags:[],version:"3.1",frontMatter:{},sidebar:"Chinese31",previous:{title:"ADMIN REPAIR",permalink:"/doc/docs/sql-reference/sql-statements/Administration/ADMIN_REPAIR"},next:{title:"ADMIN SET REPLICA STATUS",permalink:"/doc/docs/sql-reference/sql-statements/Administration/ADMIN_SET_REPLICA_STATUS"}},a={},l=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Examples",id:"examples",level:2}];function d(e){const s=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",code:"code",pre:"pre",ol:"ol",li:"li"},(0,i.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"admin-set-config",children:"ADMIN SET CONFIG"}),"\n",(0,t.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(s.p,{children:["This statement is used to set configuration items for the cluster (Currently, only FE dynamic configuration items can be set using this command). You can view these configuration items using the ",(0,t.jsx)(s.a,{href:"/doc/docs/sql-reference/sql-statements/Administration/ADMIN_SET_CONFIG",children:"ADMIN SHOW FRONTEND CONFIG"})," command."]}),"\n",(0,t.jsxs)(s.p,{children:["The configurations will be restored to the default values in the ",(0,t.jsx)(s.code,{children:"fe.conf"})," file after the FE restarts. Therefore, we recommend that you also modify the configuration items in ",(0,t.jsx)(s.code,{children:"fe.conf"})," to prevent the loss of modifications."]}),"\n",(0,t.jsx)(s.h2,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sql",children:'ADMIN SET FRONTEND CONFIG ("key" = "value")\n'})}),"\n",(0,t.jsx)(s.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Set ",(0,t.jsx)(s.code,{children:"disable_balance"})," to ",(0,t.jsx)(s.code,{children:"true"}),"."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sql",children:'ADMIN SET FRONTEND CONFIG ("disable_balance" = "true");\n'})}),"\n"]}),"\n"]})]})}const m=function(e={}){const{wrapper:s}=Object.assign({},(0,i.ah)(),e.components);return s?(0,t.jsx)(s,Object.assign({},e,{children:(0,t.jsx)(d,e)})):d(e)}},11151:(e,s,n)=>{n.d(s,{Zo:()=>c,ah:()=>r});var t=n(67294);const i=t.createContext({});function r(e){const s=t.useContext(i);return t.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const o={};function c({components:e,children:s,disableParentContext:n}){let c;return c=n?"function"==typeof e?e({}):e||o:r(e),t.createElement(i.Provider,{value:c},s)}}}]);