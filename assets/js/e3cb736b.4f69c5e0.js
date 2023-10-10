"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[32021],{87222:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var n=t(85893),i=t(11151);const r={},o="ADMIN SET CONFIG",a={id:"sql-reference/sql-statements/Administration/ADMIN SET CONFIG",title:"ADMIN SET CONFIG",description:"Description",source:"@site/versioned_docs/version-3.1/sql-reference/sql-statements/Administration/ADMIN SET CONFIG.md",sourceDirName:"sql-reference/sql-statements/Administration",slug:"/sql-reference/sql-statements/Administration/ADMIN SET CONFIG",permalink:"/docusaurusv3/docs/latest/sql-reference/sql-statements/Administration/ADMIN SET CONFIG",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-statements/Administration/ADMIN SET CONFIG.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"ADMIN REPAIR",permalink:"/docusaurusv3/docs/latest/sql-reference/sql-statements/Administration/ADMIN REPAIR"},next:{title:"ADMIN SET REPLICA STATUS",permalink:"/docusaurusv3/docs/latest/sql-reference/sql-statements/Administration/ADMIN SET REPLICA STATUS"}},c={},l=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Examples",id:"examples",level:2}];function d(e){const s=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",code:"code",pre:"pre",ol:"ol",li:"li"},(0,i.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"admin-set-config",children:"ADMIN SET CONFIG"}),"\n",(0,n.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,n.jsxs)(s.p,{children:["This statement is used to set configuration items for the cluster (Currently, only FE dynamic configuration items can be set using this command). You can view these configuration items using the ",(0,n.jsx)(s.a,{href:"/docusaurusv3/docs/latest/sql-reference/sql-statements/Administration/ADMIN%20SET%20CONFIG",children:"ADMIN SHOW FRONTEND CONFIG"})," command."]}),"\n",(0,n.jsxs)(s.p,{children:["The configurations will be restored to the default values in the ",(0,n.jsx)(s.code,{children:"fe.conf"})," file after the FE restarts. Therefore, we recommend that you also modify the configuration items in ",(0,n.jsx)(s.code,{children:"fe.conf"})," to prevent the loss of modifications."]}),"\n",(0,n.jsx)(s.h2,{id:"syntax",children:"Syntax"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sql",children:'ADMIN SET FRONTEND CONFIG ("key" = "value")\n'})}),"\n",(0,n.jsx)(s.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["Set ",(0,n.jsx)(s.code,{children:"disable_balance"})," to ",(0,n.jsx)(s.code,{children:"true"}),"."]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sql",children:'ADMIN SET FRONTEND CONFIG ("disable_balance" = "true");\n'})}),"\n"]}),"\n"]})]})}const u=function(e={}){const{wrapper:s}=Object.assign({},(0,i.ah)(),e.components);return s?(0,n.jsx)(s,Object.assign({},e,{children:(0,n.jsx)(d,e)})):d(e)}},11151:(e,s,t)=>{t.d(s,{Zo:()=>a,ah:()=>r});var n=t(67294);const i=n.createContext({});function r(e){const s=n.useContext(i);return n.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const o={};function a({components:e,children:s,disableParentContext:t}){let a;return a=t?"function"==typeof e?e({}):e||o:r(e),n.createElement(i.Provider,{value:a},s)}}}]);