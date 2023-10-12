"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[34601],{36728:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>i,contentTitle:()=>d,default:()=>p,frontMatter:()=>t,metadata:()=>a,toc:()=>l});var r=o(85893),s=o(11151);const t={},d="Deployment overview",a={id:"deployment/deployment_overview",title:"Deployment overview",description:"This chapter describes how to deploy, upgrade, and downgrade a StarRocks cluster in a production environment.",source:"@site/versioned_docs/version-2.5/deployment/deployment_overview.md",sourceDirName:"deployment",slug:"/deployment/deployment_overview",permalink:"/doc/docs/2.5/deployment/deployment_overview",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-2.5/deployment/deployment_overview.md",tags:[],version:"2.5",frontMatter:{},sidebar:"Chinese31",previous:{title:"Load and query data",permalink:"/doc/docs/2.5/quick_start/Import_and_query"},next:{title:"Deployment prerequisites",permalink:"/doc/docs/2.5/deployment/deployment_prerequisites"}},i={},l=[{value:"Deployment procedure",id:"deployment-procedure",level:2},{value:"Upgrade and downgrade",id:"upgrade-and-downgrade",level:2}];function c(e){const n=Object.assign({h1:"h1",p:"p",h2:"h2",ol:"ol",li:"li",a:"a",ul:"ul"},(0,s.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"deployment-overview",children:"Deployment overview"}),"\n",(0,r.jsx)(n.p,{children:"This chapter describes how to deploy, upgrade, and downgrade a StarRocks cluster in a production environment."}),"\n",(0,r.jsx)(n.h2,{id:"deployment-procedure",children:"Deployment procedure"}),"\n",(0,r.jsx)(n.p,{children:"A summary of the deployment procedure is as follows and later topics provide the details."}),"\n",(0,r.jsx)(n.p,{children:"The deployment of StarRocks generally follows the steps outlined here:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Confirm the ",(0,r.jsx)(n.a,{href:"/doc/docs/2.5/deployment/deployment_prerequisites",children:"hardware and software requirements"})," for your StarRocks deployment."]}),"\n",(0,r.jsx)(n.p,{children:"Check the prerequisites that your servers must meet before deploying StarRocks, including CPU, memory, storage, network, operating system, and dependencies."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/doc/docs/2.5/deployment/plan_cluster",children:"Plan your cluster size"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"Plan the number of FE nodes and BE nodes in your cluster, and the hardware specifications of the servers."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/doc/docs/2.5/deployment/environment_configurations",children:"Check environment configurations"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"When your servers are ready, you need to check and modify some environment configurations before deploying StarRocks on them."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/doc/docs/2.5/deployment/prepare_deployment_files",children:"Prepare deployment files"}),"."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"If you want to deploy StarRocks on x86-based CentOS 7.9, you can directly download and extract the software package provided on our official website."}),"\n",(0,r.jsx)(n.li,{children:"If you want to deploy StarRocks with ARM architecture CPUs or on Ubuntu 22.04, you need to prepare the deployment files from the StarRocks Docker image."}),"\n",(0,r.jsx)(n.li,{children:"If you want to deploy StarRocks on Kubernetes, you can skip this step."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Deploy StarRocks."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["If you want to deploy a shared-data StarRocks cluster, which features a disaggregated storage and compute architecture, see ",(0,r.jsx)(n.a,{href:"/doc/docs/2.5/deployment/deploy_shared_data",children:"Deploy and use shared-data StarRocks"})," for instructions."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"If you want to deploy a classic StarRocks cluster, which uses local storage, you have the following options:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/doc/docs/2.5/deployment/deploy_manually",children:"Deploy StarRocks manually"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/doc/docs/2.5/deployment/sr_operator",children:"Deploy StarRocks on Kubernetes with operator"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/doc/docs/2.5/deployment/helm",children:"Deploy StarRocks on Kubernetes with Helm"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/doc/docs/2.5/deployment/starrocks_on_aws",children:"Deploy StarRocks on AWS"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Perform necessary ",(0,r.jsx)(n.a,{href:"/doc/docs/2.5/deployment/post_deployment_setup",children:"post-deployment setup"})," measures."]}),"\n",(0,r.jsx)(n.p,{children:"Further setup measures are needed before your StarRocks cluster is put into production. These measures include securing the initial account and setting some performance-related system variables."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"upgrade-and-downgrade",children:"Upgrade and downgrade"}),"\n",(0,r.jsxs)(n.p,{children:["If you plan to upgrade an existing StarRocks cluster to a later version rather than install StarRocks for the first time, see ",(0,r.jsx)(n.a,{href:"/doc/docs/2.5/deployment/upgrade",children:"Upgrade StarRocks"})," for information about upgrade procedures and issues that you should consider before upgrading."]}),"\n",(0,r.jsxs)(n.p,{children:["For instructions to downgrade your StarRocks cluster, see ",(0,r.jsx)(n.a,{href:"/doc/docs/2.5/deployment/downgrade",children:"Downgrade StarRocks"}),"."]})]})}const p=function(e={}){const{wrapper:n}=Object.assign({},(0,s.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(c,e)})):c(e)}},11151:(e,n,o)=>{o.d(n,{Zo:()=>a,ah:()=>t});var r=o(67294);const s=r.createContext({});function t(e){const n=r.useContext(s);return r.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const d={};function a({components:e,children:n,disableParentContext:o}){let a;return a=o?"function"==typeof e?e({}):e||d:t(e),r.createElement(s.Provider,{value:a},n)}}}]);