"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[98016],{59306:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var i=n(85893),s=n(11151);const a={},r="SHOW DYNAMIC PARTITION TABLES",l={id:"sql-reference/sql-statements/data-manipulation/SHOW_DYNAMIC_PARTITION_TABLES",title:"SHOW DYNAMIC PARTITION TABLES",description:"Description",source:"@site/versioned_docs/version-2.5/sql-reference/sql-statements/data-manipulation/SHOW_DYNAMIC_PARTITION_TABLES.md",sourceDirName:"sql-reference/sql-statements/data-manipulation",slug:"/sql-reference/sql-statements/data-manipulation/SHOW_DYNAMIC_PARTITION_TABLES",permalink:"/doc/docs/2.5/sql-reference/sql-statements/data-manipulation/SHOW_DYNAMIC_PARTITION_TABLES",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-2.5/sql-reference/sql-statements/data-manipulation/SHOW_DYNAMIC_PARTITION_TABLES.md",tags:[],version:"2.5",frontMatter:{},sidebar:"Chinese31",previous:{title:"SHOW DELETE",permalink:"/doc/docs/2.5/sql-reference/sql-statements/data-manipulation/SHOW_DELETE"},next:{title:"SHOW EXPORT",permalink:"/doc/docs/2.5/sql-reference/sql-statements/data-manipulation/SHOW_EXPORT"}},o={},c=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Examples",id:"examples",level:2}];function d(e){const t=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",ul:"ul",li:"li"},(0,s.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"show-dynamic-partition-tables",children:"SHOW DYNAMIC PARTITION TABLES"}),"\n",(0,i.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(t.p,{children:"This statement is used to display the status of all the partitioned tables for which dynamic partitioning properties are configured in a database."}),"\n",(0,i.jsx)(t.h2,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sql",children:"SHOW DYNAMIC PARTITION TABLES FROM <db_name>\n"})}),"\n",(0,i.jsx)(t.p,{children:"This statement returns the following fields:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"TableName: the name of the table."}),"\n",(0,i.jsx)(t.li,{children:"Enable: whether dynamic partitioning is enabled."}),"\n",(0,i.jsx)(t.li,{children:"TimeUnit: the time granularity for the partitions."}),"\n",(0,i.jsx)(t.li,{children:"Start: the starting offset of dynamic partitioning."}),"\n",(0,i.jsx)(t.li,{children:"End: the end offset of dynamic partitioning."}),"\n",(0,i.jsx)(t.li,{children:"Prefix: the prefix of the partition name."}),"\n",(0,i.jsx)(t.li,{children:"Buckets: the number of buckets per partition."}),"\n",(0,i.jsx)(t.li,{children:"ReplicationNum: the number of replicas for the table."}),"\n",(0,i.jsx)(t.li,{children:"StartOf"}),"\n",(0,i.jsx)(t.li,{children:"LastUpdateTime: the time when the table was last updated."}),"\n",(0,i.jsx)(t.li,{children:"LastSchedulerTime: the time when data in the table was last scheduled."}),"\n",(0,i.jsx)(t.li,{children:"State: the status of the table."}),"\n",(0,i.jsx)(t.li,{children:"LastCreatePartitionMsg: the message for the latest partition creation operation."}),"\n",(0,i.jsx)(t.li,{children:"LastDropPartitionMsg: the message for the latest partition dropping operation."}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsxs)(t.p,{children:["Display the status of all the partitioned tables for which dynamic partitioning properties are configured in ",(0,i.jsx)(t.code,{children:"db_test"}),"."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sql",children:"SHOW DYNAMIC PARTITION TABLES FROM db_test;\n"})})]})}const h=function(e={}){const{wrapper:t}=Object.assign({},(0,s.ah)(),e.components);return t?(0,i.jsx)(t,Object.assign({},e,{children:(0,i.jsx)(d,e)})):d(e)}},11151:(e,t,n)=>{n.d(t,{Zo:()=>l,ah:()=>a});var i=n(67294);const s=i.createContext({});function a(e){const t=i.useContext(s);return i.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const r={};function l({components:e,children:t,disableParentContext:n}){let l;return l=n?"function"==typeof e?e({}):e||r:a(e),i.createElement(s.Provider,{value:l},t)}}}]);