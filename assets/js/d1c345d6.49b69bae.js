"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[37482],{79702:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>o,contentTitle:()=>a,default:()=>I,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var n=t(85893),i=t(11151);const r={},a="ADMIN SHOW REPLICA DISTRIBUTION",l={id:"sql-reference/sql-statements/Administration/ADMIN SHOW REPLICA DISTRIBUTION",title:"ADMIN SHOW REPLICA DISTRIBUTION",description:"Description",source:"@site/versioned_docs/version-3.1/sql-reference/sql-statements/Administration/ADMIN SHOW REPLICA DISTRIBUTION.md",sourceDirName:"sql-reference/sql-statements/Administration",slug:"/sql-reference/sql-statements/Administration/ADMIN SHOW REPLICA DISTRIBUTION",permalink:"/docusaurusv3/docs/sql-reference/sql-statements/Administration/ADMIN SHOW REPLICA DISTRIBUTION",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-statements/Administration/ADMIN SHOW REPLICA DISTRIBUTION.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"ADMIN SHOW CONFIG",permalink:"/docusaurusv3/docs/sql-reference/sql-statements/Administration/ADMIN SHOW CONFIG"},next:{title:"ADMIN SHOW REPLICA STATUS",permalink:"/docusaurusv3/docs/sql-reference/sql-statements/Administration/ADMIN SHOW REPLICA STATUS"}},o={},c=[{value:"Description",id:"description",level:2},{value:"Examples",id:"examples",level:2}];function d(e){const s=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",ol:"ol",li:"li"},(0,i.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"admin-show-replica-distribution",children:"ADMIN SHOW REPLICA DISTRIBUTION"}),"\n",(0,n.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,n.jsx)(s.p,{children:"This statement is used to show the distribution status of a table or a partition replica."}),"\n",(0,n.jsx)(s.p,{children:"Syntax:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sql",children:"ADMIN SHOW REPLICA DISTRIBUTION FROM [db_name.]tbl_name [PARTITION (p1, ...)]\n"})}),"\n",(0,n.jsx)(s.p,{children:"Note:"}),"\n",(0,n.jsx)(s.p,{children:"The Graph column in the result shows the distribution ratio of replicas graphically."}),"\n",(0,n.jsx)(s.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"View the replica distribution of tables"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sql",children:"ADMIN SHOW REPLICA DISTRIBUTION FROM tbl1;\n"})}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"View the replica distribution of partitions in the table"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sql",children:"ADMIN SHOW REPLICA DISTRIBUTION FROM db1.tbl1 PARTITION(p1, p2);\n"})}),"\n"]}),"\n"]})]})}const I=function(e={}){const{wrapper:s}=Object.assign({},(0,i.ah)(),e.components);return s?(0,n.jsx)(s,Object.assign({},e,{children:(0,n.jsx)(d,e)})):d(e)}},11151:(e,s,t)=>{t.d(s,{Zo:()=>l,ah:()=>r});var n=t(67294);const i=n.createContext({});function r(e){const s=n.useContext(i);return n.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const a={};function l({components:e,children:s,disableParentContext:t}){let l;return l=t?"function"==typeof e?e({}):e||a:r(e),n.createElement(i.Provider,{value:l},s)}}}]);