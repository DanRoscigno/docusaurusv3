"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[30925],{57378:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>a});var t=n(85893),r=n(11151);const o={},i="Post-deployment setup",l={id:"deployment/post_deployment_setup",title:"Post-deployment setup",description:"This topic describes tasks that you should perform after deploying StarRocks.",source:"@site/versioned_docs/version-3.1/deployment/post_deployment_setup.md",sourceDirName:"deployment",slug:"/deployment/post_deployment_setup",permalink:"/docs/deployment/post_deployment_setup",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/deployment/post_deployment_setup.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"Manage your deployment",permalink:"/docs/category/manage-your-deployment"},next:{title:"Upgrade StarRocks",permalink:"/docs/deployment/upgrade"}},c={},a=[{value:"Secure initial account",id:"secure-initial-account",level:2},{value:"Set necessary system variables",id:"set-necessary-system-variables",level:2},{value:"Set user property",id:"set-user-property",level:2},{value:"What to do next",id:"what-to-do-next",level:2}];function d(e){const s=Object.assign({h1:"h1",p:"p",h2:"h2",code:"code",ol:"ol",li:"li",pre:"pre",blockquote:"blockquote",strong:"strong",ul:"ul",a:"a",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,r.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"post-deployment-setup",children:"Post-deployment setup"}),"\n",(0,t.jsx)(s.p,{children:"This topic describes tasks that you should perform after deploying StarRocks."}),"\n",(0,t.jsx)(s.p,{children:"Before getting your new StarRocks cluster into production, you must secure the initial account and set the necessary variables and properties to allow your cluster to run properly."}),"\n",(0,t.jsx)(s.h2,{id:"secure-initial-account",children:"Secure initial account"}),"\n",(0,t.jsxs)(s.p,{children:["Upon the creation of a StarRocks cluster, the initial ",(0,t.jsx)(s.code,{children:"root"})," user of the cluster is generated automatically. The ",(0,t.jsx)(s.code,{children:"root"})," user is granted the ",(0,t.jsx)(s.code,{children:"root"})," privileges, which are the collection of all privileges within the cluster. We recommend you secure this user account and avoid using it in production to prevent misuse."]}),"\n",(0,t.jsxs)(s.p,{children:["StarRocks automatically assigns an empty password to the ",(0,t.jsx)(s.code,{children:"root"})," user when the cluster is created. Follow these procedures to set a new password for the ",(0,t.jsx)(s.code,{children:"root"})," user:"]}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Connect to StarRocks via your MySQL client with the username ",(0,t.jsx)(s.code,{children:"root"})," and an empty password."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-Bash",children:"# Replace <fe_address> with the IP address (priority_networks) or FQDN \n# of the FE node you connect to, and replace <query_port> \n# with the query_port (Default: 9030) you specified in fe.conf.\nmysql -h <fe_address> -P<query_port> -uroot\n"})}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Reset the password of the ",(0,t.jsx)(s.code,{children:"root"})," user by executing the following SQL:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-SQL",children:"-- Replace <password> with the password you want to assign to the root user.\nSET PASSWORD = PASSWORD('<password>')\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"NOTE"})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Keep the password properly after resetting it. If you forgot the password, see ",(0,t.jsx)(s.a,{href:"/docs/administration/User_privilege#reset-lost-root-password",children:"Reset lost root password"})," for detailed instructions."]}),"\n",(0,t.jsxs)(s.li,{children:["After completing the post-deployment setup, you can create new users and roles to manage the privileges within your team. See ",(0,t.jsx)(s.a,{href:"/docs/administration/User_privilege",children:"Manage user privileges"})," for detailed instructions."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"set-necessary-system-variables",children:"Set necessary system variables"}),"\n",(0,t.jsx)(s.p,{children:"To allow your StarRocks cluster to work properly in production, you need to set the following system variables:"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:(0,t.jsx)(s.strong,{children:"Variable name"})}),(0,t.jsx)(s.th,{children:(0,t.jsx)(s.strong,{children:"StarRocks Version"})}),(0,t.jsx)(s.th,{children:(0,t.jsx)(s.strong,{children:"Recommended value"})}),(0,t.jsx)(s.th,{children:(0,t.jsx)(s.strong,{children:"Description"})})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"is_report_success"}),(0,t.jsx)(s.td,{children:"v2.4 or earlier"}),(0,t.jsx)(s.td,{children:"false"}),(0,t.jsxs)(s.td,{children:["The boolean switch that controls whether to send the profile of a query for analysis. The default value is ",(0,t.jsx)(s.code,{children:"false"}),", which means no profile is required. Setting this variable to ",(0,t.jsx)(s.code,{children:"true"})," can affect the concurrency of StarRocks."]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"enable_profile"}),(0,t.jsx)(s.td,{children:"v2.5 or later"}),(0,t.jsx)(s.td,{children:"false"}),(0,t.jsxs)(s.td,{children:["The boolean switch that controls whether to send the profile of a query for analysis. The default value is ",(0,t.jsx)(s.code,{children:"false"}),", which means no profile is required. Setting this variable to ",(0,t.jsx)(s.code,{children:"true"})," can affect the concurrency of StarRocks."]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"enable_pipeline_engine"}),(0,t.jsx)(s.td,{children:"v2.3 or later"}),(0,t.jsx)(s.td,{children:"true"}),(0,t.jsxs)(s.td,{children:["The boolean switch that controls whether to enable the pipeline execution engine. ",(0,t.jsx)(s.code,{children:"true"})," indicates enabled and ",(0,t.jsx)(s.code,{children:"false"})," indicates the opposite. Default value: ",(0,t.jsx)(s.code,{children:"true"}),"."]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"parallel_fragment_exec_instance_num"}),(0,t.jsx)(s.td,{children:"v2.3 or later"}),(0,t.jsxs)(s.td,{children:["If you have enabled the pipeline engine, you can set this variable to ",(0,t.jsx)(s.code,{children:"1"}),".If you have not enabled the pipeline engine, you should set it to half the number of CPU cores."]}),(0,t.jsxs)(s.td,{children:["The number of instances used to scan nodes on each BE. The default value is ",(0,t.jsx)(s.code,{children:"1"}),"."]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"pipeline_dop"}),(0,t.jsx)(s.td,{children:"v2.3, v2.4, and v2.5"}),(0,t.jsx)(s.td,{children:"0"}),(0,t.jsxs)(s.td,{children:["The parallelism of a pipeline instance, which is used to adjust the query concurrency. Default value: ",(0,t.jsx)(s.code,{children:"0"}),", indicating the system automatically adjusts the parallelism of each pipeline instance.",(0,t.jsx)("br",{}),"From v3.0 onwards, StarRocks adaptively adjusts this parameter based on query parallelism."]})]})]})]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Set ",(0,t.jsx)(s.code,{children:"is_report_success"})," to ",(0,t.jsx)(s.code,{children:"false"})," globally:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-SQL",children:"SET GLOBAL is_report_success = false;\n"})}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Set ",(0,t.jsx)(s.code,{children:"enable_profile"})," to ",(0,t.jsx)(s.code,{children:"false"})," globally:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-SQL",children:"SET GLOBAL enable_profile = false;\n"})}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Set ",(0,t.jsx)(s.code,{children:"enable_pipeline_engine"})," to ",(0,t.jsx)(s.code,{children:"true"})," globally:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-SQL",children:"SET GLOBAL enable_pipeline_engine = true;\n"})}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Set ",(0,t.jsx)(s.code,{children:"parallel_fragment_exec_instance_num"})," to ",(0,t.jsx)(s.code,{children:"1"})," globally:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-SQL",children:"SET GLOBAL parallel_fragment_exec_instance_num = 1;\n"})}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Set ",(0,t.jsx)(s.code,{children:"pipeline_dop"})," to ",(0,t.jsx)(s.code,{children:"0"})," globally:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-SQL",children:"SET GLOBAL pipeline_dop = 0;\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["For more information about system variables, see ",(0,t.jsx)(s.a,{href:"/docs/reference/System_variable",children:"System variables"}),"."]}),"\n",(0,t.jsx)(s.h2,{id:"set-user-property",children:"Set user property"}),"\n",(0,t.jsxs)(s.p,{children:["If you have created new users in your cluster, you need to enlarge their maximum connection number (to ",(0,t.jsx)(s.code,{children:"1000"}),", for example):"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-SQL",children:"-- Replace <username> with the username you want to enlarge the maximum connection number for.\nSET PROPERTY FOR '<username>' 'max_user_connections' = '1000';\n"})}),"\n",(0,t.jsx)(s.h2,{id:"what-to-do-next",children:"What to do next"}),"\n",(0,t.jsxs)(s.p,{children:["After deploying and setting up your StarRocks cluster, you can then proceed to design tables that best work for your scenarios. See ",(0,t.jsx)(s.a,{href:"/docs/table_design/",children:"Understand StarRocks table design"})," for detailed instructions on designing a table."]})]})}const h=function(e={}){const{wrapper:s}=Object.assign({},(0,r.ah)(),e.components);return s?(0,t.jsx)(s,Object.assign({},e,{children:(0,t.jsx)(d,e)})):d(e)}},11151:(e,s,n)=>{n.d(s,{Zo:()=>l,ah:()=>o});var t=n(67294);const r=t.createContext({});function o(e){const s=t.useContext(r);return t.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const i={};function l({components:e,children:s,disableParentContext:n}){let l;return l=n?"function"==typeof e?e({}):e||i:o(e),t.createElement(r.Provider,{value:l},s)}}}]);