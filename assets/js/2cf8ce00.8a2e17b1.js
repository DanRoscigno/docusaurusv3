"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[52412],{11579:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>c,contentTitle:()=>l,default:()=>I,frontMatter:()=>r,metadata:()=>a,toc:()=>o});var n=t(85893),i=t(11151);const r={displayed_sidebar:"English"},l="ADMIN SHOW REPLICA DISTRIBUTION",a={id:"sql-reference/sql-statements/Administration/ADMIN_SHOW_REPLICA_DISTRIBUTION",title:"ADMIN SHOW REPLICA DISTRIBUTION",description:"Description",source:"@site/versioned_docs/version-2.5/sql-reference/sql-statements/Administration/ADMIN_SHOW_REPLICA_DISTRIBUTION.md",sourceDirName:"sql-reference/sql-statements/Administration",slug:"/sql-reference/sql-statements/Administration/ADMIN_SHOW_REPLICA_DISTRIBUTION",permalink:"/doc/docs/2.5/sql-reference/sql-statements/Administration/ADMIN_SHOW_REPLICA_DISTRIBUTION",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-statements/Administration/ADMIN_SHOW_REPLICA_DISTRIBUTION.md",tags:[],version:"2.5",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"ADMIN SHOW CONFIG",permalink:"/doc/docs/2.5/sql-reference/sql-statements/Administration/ADMIN_SHOW_CONFIG"},next:{title:"ADMIN SHOW REPLICA STATUS",permalink:"/doc/docs/2.5/sql-reference/sql-statements/Administration/ADMIN_SHOW_REPLICA_STATUS"}},c={},o=[{value:"Description",id:"description",level:2},{value:"Examples",id:"examples",level:2}];function d(e){const s=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",ol:"ol",li:"li"},(0,i.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"admin-show-replica-distribution",children:"ADMIN SHOW REPLICA DISTRIBUTION"}),"\n",(0,n.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,n.jsx)(s.p,{children:"This statement is used to show the distribution status of a table or a partition replica."}),"\n",(0,n.jsx)(s.p,{children:"Syntax:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sql",children:"ADMIN SHOW REPLICA DISTRIBUTION FROM [db_name.]tbl_name [PARTITION (p1, ...)]\n"})}),"\n",(0,n.jsx)(s.p,{children:"Note:"}),"\n",(0,n.jsx)(s.p,{children:"The Graph column in the result shows the distribution ratio of replicas graphically."}),"\n",(0,n.jsx)(s.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"View the replica distribution of tables"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sql",children:"ADMIN SHOW REPLICA DISTRIBUTION FROM tbl1;\n"})}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"View the replica distribution of partitions in the table"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sql",children:"ADMIN SHOW REPLICA DISTRIBUTION FROM db1.tbl1 PARTITION(p1, p2);\n"})}),"\n"]}),"\n"]})]})}const I=function(e={}){const{wrapper:s}=Object.assign({},(0,i.ah)(),e.components);return s?(0,n.jsx)(s,Object.assign({},e,{children:(0,n.jsx)(d,e)})):d(e)}},11151:(e,s,t)=>{t.d(s,{Zo:()=>a,ah:()=>r});var n=t(67294);const i=n.createContext({});function r(e){const s=n.useContext(i);return n.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const l={};function a({components:e,children:s,disableParentContext:t}){let a;return a=t?"function"==typeof e?e({}):e||l:r(e),n.createElement(i.Provider,{value:a},s)}}}]);