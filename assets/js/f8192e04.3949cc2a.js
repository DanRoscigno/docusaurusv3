"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[52038],{48612:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var n=s(85893),i=s(11151);const a={displayed_sidebar:"English"},r="StarRocks System Architecture",o={id:"quick_start/Architecture",title:"StarRocks System Architecture",description:"System Architecture Diagram",source:"@site/versioned_docs/version-2.0/quick_start/Architecture.md",sourceDirName:"quick_start",slug:"/quick_start/Architecture",permalink:"/docs/2.0/quick_start/Architecture",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/quick_start/Architecture.md",tags:[],version:"2.0",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"quick_start",permalink:"/docs/2.0/quick_start/"},next:{title:"Basic Concepts of StarRocks",permalink:"/docs/2.0/quick_start/Concepts"}},c={},l=[{value:"System Architecture Diagram",id:"system-architecture-diagram",level:2},{value:"Components",id:"components",level:2},{value:"FE",id:"fe",level:3},{value:"BE",id:"be",level:3},{value:"Other Components",id:"other-components",level:3}];function d(e){const t=Object.assign({h1:"h1",h2:"h2",p:"p",img:"img",h3:"h3",ul:"ul",li:"li",a:"a"},(0,i.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"starrocks-system-architecture",children:"StarRocks System Architecture"}),"\n",(0,n.jsx)(t.h2,{id:"system-architecture-diagram",children:"System Architecture Diagram"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"architecture",src:s(6221).Z+"",width:"759",height:"575"})}),"\n",(0,n.jsx)(t.h2,{id:"components",children:"Components"}),"\n",(0,n.jsx)(t.p,{children:"The StarRocks cluster is composed of FE and BE, and can be accessed via MySQL client."}),"\n",(0,n.jsx)(t.h3,{id:"fe",children:"FE"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Connects to the MySQL client, parses and executes SQL statements."}),"\n",(0,n.jsx)(t.li,{children:"Manages metadata, executes SQL DDL commands, and uses Catalog to record information about databases, tables, partitions, and tablet replications."}),"\n",(0,n.jsx)(t.li,{children:"High-availability deployment. Use unique replication protocol to select leader and synchronize metadata."}),"\n",(0,n.jsx)(t.li,{children:"FE leader node modifies metadata; FE follower node performs read operations. Metadata read and write satisfies sequential consistency."}),"\n",(0,n.jsx)(t.li,{children:"The number of FE nodes is 2n+1, which can tolerate n node failures. If the FE leader node fails, one of the follower nodes gets selected as the new leader node to complete the failover."}),"\n",(0,n.jsx)(t.li,{children:"FE's SQL layer parses, analyzes, and rewrites users\u2019 SQL statements. It also performs semantic analysis and relational algebra optimization, and produces logical execution plans."}),"\n",(0,n.jsx)(t.li,{children:"FE Planner is responsible for transforming logical plans into physical plans that can be distributed to BE."}),"\n",(0,n.jsx)(t.li,{children:"FE supervises BE, manages BE's online and offline, and maintains the number of tablet copies based on BE's health status."}),"\n",(0,n.jsx)(t.li,{children:"FE coordinates data import to ensure data consistency."}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"be",children:"BE"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Manages tablet copies. Tablets are sub-tables with columnar storage, formed by table partitioning and hashing."}),"\n",(0,n.jsx)(t.li,{children:"Creates or deletes sub-tables, instructed by FE."}),"\n",(0,n.jsx)(t.li,{children:"Receives physical execution plans distributed by FE. The BE coordinator cooperates with other BE workers to complete executions."}),"\n",(0,n.jsx)(t.li,{children:"Obtains data from the local column storage engine, and quickly filters it through indexing and predicate pushdown."}),"\n",(0,n.jsx)(t.li,{children:"Executes compact tasks in the background to reduce read amplification during queries."}),"\n",(0,n.jsx)(t.li,{children:"During data import, FE designates the BE coordinator to write fanout-form data to the BE where the multiple copies of the tablet are located."}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"other-components",children:"Other Components"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Hdfs Broker: used for importing data from Hdfs to StarRocks cluster, see ",(0,n.jsx)(t.a,{href:"/docs/2.0/loading/Loading_intro",children:"Data Import section"}),"."]}),"\n"]})]})}const h=function(e={}){const{wrapper:t}=Object.assign({},(0,i.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(d,e)})):d(e)}},6221:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/2.1-1-def505bbba20ac9d826863273641e50b.png"},11151:(e,t,s)=>{s.d(t,{Zo:()=>o,ah:()=>a});var n=s(67294);const i=n.createContext({});function a(e){const t=n.useContext(i);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const r={};function o({components:e,children:t,disableParentContext:s}){let o;return o=s?"function"==typeof e?e({}):e||r:a(e),n.createElement(i.Provider,{value:o},t)}}}]);