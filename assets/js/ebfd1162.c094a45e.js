"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[21507],{50173:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>o});var n=t(85893),i=t(11151);const r={},l="ADMIN CANCEL REPAIR",a={id:"sql-reference/sql-statements/Administration/ADMIN_CANCEL_REPAIR",title:"ADMIN CANCEL REPAIR",description:"Description",source:"@site/versioned_docs/version-2.5/sql-reference/sql-statements/Administration/ADMIN_CANCEL_REPAIR.md",sourceDirName:"sql-reference/sql-statements/Administration",slug:"/sql-reference/sql-statements/Administration/ADMIN_CANCEL_REPAIR",permalink:"/doc/docs/2.5/sql-reference/sql-statements/Administration/ADMIN_CANCEL_REPAIR",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-2.5/sql-reference/sql-statements/Administration/ADMIN_CANCEL_REPAIR.md",tags:[],version:"2.5",frontMatter:{},sidebar:"Chinese31",previous:{title:"ADD SQLBLACKLIST",permalink:"/doc/docs/2.5/sql-reference/sql-statements/Administration/ADD_SQLBLACKLIST"},next:{title:"ADMIN CHECK TABLET",permalink:"/doc/docs/2.5/sql-reference/sql-statements/Administration/ADMIN_CHECK_TABLET"}},c={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Examples",id:"examples",level:2}];function d(e){const s=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",blockquote:"blockquote",ol:"ol",li:"li"},(0,i.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"admin-cancel-repair",children:"ADMIN CANCEL REPAIR"}),"\n",(0,n.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,n.jsx)(s.p,{children:"This statement is used to cancel repairing specified tables or partitions with high priority."}),"\n",(0,n.jsx)(s.h2,{id:"syntax",children:"Syntax"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sql",children:"ADMIN CANCEL REPAIR TABLE table_name[ PARTITION (p1,...)]\n"})}),"\n",(0,n.jsx)(s.p,{children:"Note"}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsx)(s.p,{children:"This statement only indicates that the system will no longer repair sharding replicas of specified tables or partitions with high priority. It still repairs these copies by default scheduling."}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"Cancel high priority repair"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sql",children:"ADMIN CANCEL REPAIR TABLE tbl PARTITION(p1);\n"})}),"\n"]}),"\n"]})]})}const p=function(e={}){const{wrapper:s}=Object.assign({},(0,i.ah)(),e.components);return s?(0,n.jsx)(s,Object.assign({},e,{children:(0,n.jsx)(d,e)})):d(e)}},11151:(e,s,t)=>{t.d(s,{Zo:()=>a,ah:()=>r});var n=t(67294);const i=n.createContext({});function r(e){const s=n.useContext(i);return n.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const l={};function a({components:e,children:s,disableParentContext:t}){let a;return a=t?"function"==typeof e?e({}):e||l:r(e),n.createElement(i.Provider,{value:a},s)}}}]);