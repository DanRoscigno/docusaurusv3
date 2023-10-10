"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[65588],{62766:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var s=t(85893),o=t(11151);const i={},a="Scale in and out",r={id:"administration/Scale_up_down",title:"Scale in and out",description:"This topic describes how to scale in and out the node of StarRocks.",source:"@site/versioned_docs/version-3.0/administration/Scale_up_down.md",sourceDirName:"administration",slug:"/administration/Scale_up_down",permalink:"/docusaurusv3/docs/3.0/administration/Scale_up_down",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/administration/Scale_up_down.md",tags:[],version:"3.0",frontMatter:{},sidebar:"documentation",previous:{title:"Replica management",permalink:"/docusaurusv3/docs/3.0/administration/Replica"},next:{title:"Manage user privileges",permalink:"/docusaurusv3/docs/3.0/administration/User_privilege"}},l={},c=[{value:"Scale FE in and out",id:"scale-fe-in-and-out",level:2},{value:"Scale FE out",id:"scale-fe-out",level:3},{value:"Scale FE in",id:"scale-fe-in",level:3},{value:"Scale BE in and out",id:"scale-be-in-and-out",level:2},{value:"Scale BE out",id:"scale-be-out",level:3},{value:"Scale BE in",id:"scale-be-in",level:3}];function d(e){const n=Object.assign({h1:"h1",p:"p",h2:"h2",blockquote:"blockquote",ul:"ul",li:"li",h3:"h3",pre:"pre",code:"code",a:"a"},(0,o.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"scale-in-and-out",children:"Scale in and out"}),"\n",(0,s.jsx)(n.p,{children:"This topic describes how to scale in and out the node of StarRocks."}),"\n",(0,s.jsx)(n.h2,{id:"scale-fe-in-and-out",children:"Scale FE in and out"}),"\n",(0,s.jsx)(n.p,{children:"StarRocks has two types of FE nodes: Follower and Observer. Followers are involved in election voting and writing. Observers are only used to synchronize logs and extend read performance."}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The number of follower FEs (including leader) must be odd, and it is recommended to deploy 3 of them to form a High Availability (HA) mode."}),"\n",(0,s.jsx)(n.li,{children:"When the FE is in high availability deployment (1 leader, 2 followers), it is recommended to add Observer FEs for better read performance. * Typically one FE node can work with 10-20 BE nodes. It is recommended that the total number of FE nodes be less than 10. Three is sufficient in most cases."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"scale-fe-out",children:"Scale FE out"}),"\n",(0,s.jsx)(n.p,{children:"After deploying the FE node and starting the service, run the following command to scale FE out."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'alter system add follower "fe_host:edit_log_port";\nalter system add observer "fe_host:edit_log_port";\n'})}),"\n",(0,s.jsx)(n.h3,{id:"scale-fe-in",children:"Scale FE in"}),"\n",(0,s.jsx)(n.p,{children:"FE scale-in is similar to the scale-out. Run the following command to scale FE in."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'alter system drop follower "fe_host:edit_log_port";\nalter system drop observer "fe_host:edit_log_port";\n'})}),"\n",(0,s.jsxs)(n.p,{children:["After the expansion and contraction, you can view the node information by running ",(0,s.jsx)(n.code,{children:"show proc '/frontends';"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"scale-be-in-and-out",children:"Scale BE in and out"}),"\n",(0,s.jsx)(n.p,{children:"After BE is scaled in or out, StarRocks will automatically perform load-balancing without affecting the overall performance."}),"\n",(0,s.jsx)(n.h3,{id:"scale-be-out",children:"Scale BE out"}),"\n",(0,s.jsx)(n.p,{children:"Run the following command to scale BE out."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"alter system add backend 'be_host:be_heartbeat_service_port';\n"})}),"\n",(0,s.jsx)(n.p,{children:"Run the following command to check the BE status."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"show proc '/backends';\n"})}),"\n",(0,s.jsx)(n.h3,{id:"scale-be-in",children:"Scale BE in"}),"\n",(0,s.jsxs)(n.p,{children:["There are two ways to scale in a BE node \u2013  ",(0,s.jsx)(n.code,{children:"DROP"})," and ",(0,s.jsx)(n.code,{children:"DECOMMISSION"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"DROP"})," will delete the BE node immediately, and the lost duplicates will be made up by FE scheduling. ",(0,s.jsx)(n.code,{children:"DECOMMISSION"})," will make sure the duplicates are made up first, and then drop the BE node. ",(0,s.jsx)(n.code,{children:"DECOMMISSION"})," is a bit more friendly and is recommended for BE scale-in."]}),"\n",(0,s.jsx)(n.p,{children:"The commands of both methods are similar:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:'alter system decommission backend "be_host:be_heartbeat_service_port";'})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:'alter system drop backend "be_host:be_heartbeat_service_port";'})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Drop backend is a dangerous operation, so you need to confirm it twice before executing it"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:'alter system drop backend "be_host:be_heartbeat_service_port";'})}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["After the scale-out or scale-in, you can check the status of FE and BE by referring to ",(0,s.jsx)(n.a,{href:"/docusaurusv3/docs/3.0/administration/Cluster_administration#confirm-cluster-health-status",children:"Cluster Status"}),"."]})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,o.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(d,e)})):d(e)}},11151:(e,n,t)=>{t.d(n,{Zo:()=>r,ah:()=>i});var s=t(67294);const o=s.createContext({});function i(e){const n=s.useContext(o);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const a={};function r({components:e,children:n,disableParentContext:t}){let r;return r=t?"function"==typeof e?e({}):e||a:i(e),s.createElement(o.Provider,{value:r},n)}}}]);