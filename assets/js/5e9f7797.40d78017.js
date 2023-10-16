"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[81875],{42521:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var a=r(85893),i=r(11151),n=r(83698);const s={displayed_sidebar:"English"},o=void 0,c={id:"introduction/StarRocks_intro",title:"StarRocks_intro",description:"---",source:"@site/versioned_docs/version-2.5/introduction/StarRocks_intro.md",sourceDirName:"introduction",slug:"/introduction/StarRocks_intro",permalink:"/doc/docs/2.5/introduction/StarRocks_intro",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/introduction/StarRocks_intro.md",tags:[],version:"2.5",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"Features",permalink:"/doc/docs/2.5/introduction/Features"},next:{title:"What is StarRocks?",permalink:"/doc/docs/2.5/introduction/what_is_starrocks"}},l={},d=[{value:"sidebar_label: Intro\nsidebar_position: 1",id:"sidebar_label-introsidebar_position-1",level:2},{value:"Popular topics",id:"popular-topics",level:3}];function u(e){const t=Object.assign({hr:"hr",h2:"h2",h1:"h1",p:"p",a:"a",h3:"h3"},(0,i.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"sidebar_label-introsidebar_position-1",children:"sidebar_label: Intro\nsidebar_position: 1"}),"\n","\n","\n",(0,a.jsx)(t.h1,{id:"starrocks",children:"StarRocks"}),"\n",(0,a.jsx)(t.p,{children:"StarRocks is a next-gen, high-performance analytical data warehouse that enables real-time, multi-dimensional, and highly concurrent data analysis. StarRocks has an MPP architecture and is equipped with a fully vectorized execution engine, a columnar storage engine that supports real-time updates, and is powered by a rich set of features including a fully-customized cost-based optimizer (CBO), intelligent materialized view and more. StarRocks supports real-time and batch data ingestion from a variety of data sources. It also allows you to directly analyze data stored in data lakes with zero data migration."}),"\n",(0,a.jsx)(t.p,{children:"StarRocks is also compatible with MySQL protocols and can be easily connected using MySQL clients and popular BI tools. StarRocks is highly scalable, available, and easy to maintain. It is widely adopted in the industry, powering a variety of OLAP scenarios, such as real-time analytics, ad-hoc queries, data lake analytics and more."}),"\n",(0,a.jsxs)(t.p,{children:["Join our ",(0,a.jsx)(t.a,{href:"https://join.slack.com/t/starrocks/shared_invite/zt-z5zxqr0k-U5lrTVlgypRIV8RbnCIAzg",children:"Slack channel"})," for live support, discussion, or latest community news. You can also follow us on ",(0,a.jsx)(t.a,{href:"https://www.linkedin.com/company/starrocks",children:"LinkedIn"})," to get first-hand updates on new features, events, and sharing."]}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h3,{id:"popular-topics",children:"Popular topics"}),"\n",(0,a.jsx)(n.Z,{}),"\n",(0,a.jsx)(t.hr,{})]})}const h=function(e={}){const{wrapper:t}=Object.assign({},(0,i.ah)(),e.components);return t?(0,a.jsx)(t,Object.assign({},e,{children:(0,a.jsx)(u,e)})):u(e)}},83698:(e,t,r)=>{r.d(t,{Z:()=>d});var a=r(86010),i=r(92503);const n={features:"features_ez_S",featureSvg:"featureSvg_bdXF"};r(67294);var s=r(39960),o=(r(43827),r(85893));const c=[{title:"Introduction",url:"../category/introduction-to-starrocks",description:(0,o.jsx)(o.Fragment,{children:"OLAP, features, architecture"})},{title:"Quick Start",url:"../category/quick-start",description:(0,o.jsx)(o.Fragment,{children:"Get up and running quickly."})},{title:"Data Loading",url:"../loading/Loading_intro",description:(0,o.jsx)(o.Fragment,{children:"Clean, transform, and load"})},{title:"Table Design",url:"../table_design/StarRocks_table_design",description:(0,o.jsx)(o.Fragment,{children:"Tables, indexing, acceleration"})},{title:"Data Lakes",url:"../category/query-data-lakes",description:(0,o.jsx)(o.Fragment,{children:"Iceberg, Hive, Delta Lake, \u2026"})},{title:"Work with semi-structured data",url:"../category/semi-structured",description:(0,o.jsx)(o.Fragment,{children:"JSON, map, struct, array"})},{title:"Integrations",url:"../category/integrations",description:(0,o.jsx)(o.Fragment,{children:"BI tools, IDEs, Cloud authentication, \u2026"})},{title:"Administration",url:"../category/administration",description:(0,o.jsx)(o.Fragment,{children:"Scale, backups, roles and privileges, \u2026"})},{title:"Reference",url:"../category/reference",description:(0,o.jsx)(o.Fragment,{children:"SQL, functions, error codes, \u2026"})},{title:"FAQs",url:"../category/faq",description:(0,o.jsx)(o.Fragment,{children:"Frequently asked questions."})},{title:"Benchmarks",url:"../category/benchmarks",description:(0,o.jsx)(o.Fragment,{children:"DB performance comparison benchmarks."})}];function l(e){let{url:t,title:r,description:n}=e;return(0,o.jsx)("div",{className:(0,a.Z)("col col--6 margin-bottom--lg"),children:(0,o.jsx)(s.Z,{href:t,target:"_self",className:"card padding--lg cardContainer_fWXF",children:(0,o.jsxs)("div",{className:"text--center padding-horiz--md",children:[(0,o.jsx)(i.Z,{as:"h3",children:r}),(0,o.jsx)("p",{children:n})]})})})}function d(){return(0,o.jsx)("section",{className:n.features,children:(0,o.jsx)("div",{className:"container",children:(0,o.jsx)("div",{className:"row",children:c.map(((e,t)=>(0,o.jsx)(l,{...e},t)))})})})}},11151:(e,t,r)=>{r.d(t,{Zo:()=>o,ah:()=>n});var a=r(67294);const i=a.createContext({});function n(e){const t=a.useContext(i);return a.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const s={};function o({components:e,children:t,disableParentContext:r}){let o;return o=r?"function"==typeof e?e({}):e||s:n(e),a.createElement(i.Provider,{value:o},t)}}}]);