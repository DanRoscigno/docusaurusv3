"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[62193],{97734:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>t,metadata:()=>l,toc:()=>o});var s=i(85893),a=i(11151);const t={},r="What is StarRocks?",l={id:"introduction/what_is_starrocks",title:"What is StarRocks?",description:"StarRocks is a next-generation, blazing-fast massively parallel processing (MPP) database designed to make real-time analytics easy for enterprises. It is built to power sub-second queries at scale.",source:"@site/versioned_docs/version-3.0/introduction/what_is_starrocks.md",sourceDirName:"introduction",slug:"/introduction/what_is_starrocks",permalink:"/doc/docs/3.0/introduction/what_is_starrocks",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/introduction/what_is_starrocks.md",tags:[],version:"3.0",frontMatter:{},sidebar:"Chinese31",previous:{title:"\u4ea7\u54c1\u7b80\u4ecb",permalink:"/doc/docs/3.0/category/\u4ea7\u54c1\u7b80\u4ecb"},next:{title:"Architecture",permalink:"/doc/docs/3.0/introduction/Architecture"}},c={},o=[{value:"Scenarios",id:"scenarios",level:2},{value:"OLAP multi-dimensional analytics",id:"olap-multi-dimensional-analytics",level:3},{value:"Real-time analytics",id:"real-time-analytics",level:3},{value:"High-concurrency analytics",id:"high-concurrency-analytics",level:3},{value:"Unified analytics",id:"unified-analytics",level:3}];function d(e){const n=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",ul:"ul",li:"li"},(0,a.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"what-is-starrocks",children:"What is StarRocks?"}),"\n",(0,s.jsx)(n.p,{children:"StarRocks is a next-generation, blazing-fast massively parallel processing (MPP) database designed to make real-time analytics easy for enterprises. It is built to power sub-second queries at scale."}),"\n",(0,s.jsx)(n.p,{children:"StarRocks has an elegant design. It encompasses a rich set of features including fully vectorized engine, newly designed cost-based optimizer (CBO), and intelligent materialized view. As such, StarRocks can deliver a query speed far exceeding database products of its kind, especially for multi-table joins."}),"\n",(0,s.jsx)(n.p,{children:"StarRocks is ideal for real-time analytics on fresh data. Data can be ingested at a high speed and updated and deleted in real time. StarRocks empowers users to create tables that use various schemas, such as flat, star, and snowflake schemas."}),"\n",(0,s.jsx)(n.p,{children:"Compatible with MySQL protocols and standard SQL, StarRocks has out-of-the-box support for all major BI tools, such as Tableau and Power BI. StarRocks does not rely on any external components. It is an integrated data analytics platform that allows for high scalability, high availability, and simplified management and maintenance."}),"\n",(0,s.jsx)(n.h2,{id:"scenarios",children:"Scenarios"}),"\n",(0,s.jsx)(n.p,{children:"StarRocks meets varied enterprise analytics requirements, including OLAP multi-dimensional analytics, real-time analytics, high-concurrency analytics, customized reporting, ad-hoc queries, and unified analytics."}),"\n",(0,s.jsx)(n.h3,{id:"olap-multi-dimensional-analytics",children:"OLAP multi-dimensional analytics"}),"\n",(0,s.jsx)(n.p,{children:"The MPP framework and vectorized execution engine enable users to choose between various schemas to develop multi-dimensional analytical reports. Scenarios:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"User behavior analysis"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"User profiling, label analysis, user tagging"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"High-dimensional metrics report"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Self-service dashboard"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Service anomaly probing and analysis"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Cross-theme analysis"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Financial data analysis"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"System monitoring analysis"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"real-time-analytics",children:"Real-time analytics"}),"\n",(0,s.jsx)(n.p,{children:"StarRocks uses the Primary Key table to implement real-time updates. Data changes in a TP database can be synchronized to StarRocks in a matter of seconds to build a real-time warehouse."}),"\n",(0,s.jsx)(n.p,{children:"Scenarios:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Online promotion analysis"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Logistics tracking and analysis"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Performance analysis and metrics computation for the financial industry"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Quality analysis for livestreaming"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Ad placement analysis"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Cockpit management"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Application Performance Management (APM)"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"high-concurrency-analytics",children:"High-concurrency analytics"}),"\n",(0,s.jsx)(n.p,{children:"StarRocks leverages performant data distribution, flexible indexing, and intelligent materialized views to facilitate user-facing analytics at high concurrency:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Advertiser report analysis"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Channel analysis for the retail industry"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"User-facing analysis for SaaS"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Multi-tabbed dashboard analysis"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"unified-analytics",children:"Unified analytics"}),"\n",(0,s.jsx)(n.p,{children:"StarRocks provides a unified data analytics experience."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"One system can power various analytical scenarios, reducing system complexity and lowering TCO."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"StarRocks unifies data lakes and data warehouses. Data in a lakehouse can be managed all in StarRocks. Latency-sensitive queries that require high concurrency can run on StarRocks. Data in data lakes can be accessed by using external catalogs or external tables provided by StarRocks."}),"\n"]}),"\n"]})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(d,e)})):d(e)}},11151:(e,n,i)=>{i.d(n,{Zo:()=>l,ah:()=>t});var s=i(67294);const a=s.createContext({});function t(e){const n=s.useContext(a);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const r={};function l({components:e,children:n,disableParentContext:i}){let l;return l=i?"function"==typeof e?e({}):e||r:t(e),s.createElement(a.Provider,{value:l},n)}}}]);