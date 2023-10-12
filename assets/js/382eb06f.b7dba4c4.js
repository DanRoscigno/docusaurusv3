"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[52790],{53159:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>h,frontMatter:()=>t,metadata:()=>d,toc:()=>l});var s=r(85893),o=r(11151);const t={},i="Upgrade StarRocks",d={id:"deployment/upgrade",title:"Upgrade StarRocks",description:"This topic describes how to upgrade your StarRocks cluster.",source:"@site/versioned_docs/version-3.0/deployment/upgrade.md",sourceDirName:"deployment",slug:"/deployment/upgrade",permalink:"/doc/docs/3.0/deployment/upgrade",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/deployment/upgrade.md",tags:[],version:"3.0",frontMatter:{},sidebar:"Chinese31",previous:{title:"Post-deployment setup",permalink:"/doc/docs/3.0/deployment/post_deployment_setup"},next:{title:"Downgrade StarRocks",permalink:"/doc/docs/3.0/deployment/downgrade"}},a={},l=[{value:"Overview",id:"overview",level:2},{value:"StarRocks versions",id:"starrocks-versions",level:3},{value:"Upgrade paths",id:"upgrade-paths",level:3},{value:"Upgrade procedure",id:"upgrade-procedure",level:3},{value:"Before you begin",id:"before-you-begin",level:2},{value:"Perform compatibility configuration",id:"perform-compatibility-configuration",level:3},{value:"Upgrade BE",id:"upgrade-be",level:2},{value:"Upgrade CN",id:"upgrade-cn",level:2},{value:"Upgrade FE",id:"upgrade-fe",level:2}];function c(e){const n=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",strong:"strong",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",ul:"ul",li:"li",pre:"pre",ol:"ol",blockquote:"blockquote",a:"a"},(0,o.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"upgrade-starrocks",children:"Upgrade StarRocks"}),"\n",(0,s.jsx)(n.p,{children:"This topic describes how to upgrade your StarRocks cluster."}),"\n",(0,s.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,s.jsx)(n.p,{children:"Review the information in this section before upgrading, and perform any recommended actions."}),"\n",(0,s.jsx)(n.h3,{id:"starrocks-versions",children:"StarRocks versions"}),"\n",(0,s.jsxs)(n.p,{children:["The version of StarRocks is represented by three numbers in the form ",(0,s.jsx)(n.strong,{children:"Major.Minor.Patch"}),", for example, ",(0,s.jsx)(n.code,{children:"2.5.4"}),". The first number represents the major version of StarRocks, the second number represents the minor version, and the third number represents the patch version. StarRocks provides Long-term Support (LTS) for certain versions. Their support duration lasts more than half a year."]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"StarRocks version"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Is the LTS version"})})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"v2.0.x"}),(0,s.jsx)(n.td,{children:"No"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"v2.1.x"}),(0,s.jsx)(n.td,{children:"No"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"v2.2.x"}),(0,s.jsx)(n.td,{children:"No"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"v2.3.x"}),(0,s.jsx)(n.td,{children:"No"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"v2.4.x"}),(0,s.jsx)(n.td,{children:"No"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"v2.5.x"}),(0,s.jsx)(n.td,{children:"Yes"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"v3.0.x"}),(0,s.jsx)(n.td,{children:"No"})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"upgrade-paths",children:"Upgrade paths"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"For patch version upgrade"})}),"\n",(0,s.jsx)(n.p,{children:"You can upgrade your StarRocks cluster across patch versions, for example, from v2.2.6 directly to v2.2.11."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"For minor version upgrade"})}),"\n",(0,s.jsxs)(n.p,{children:["From StarRocks v2.0 onwards, you can upgrade a StarRocks cluster across minor versions, for example, from v2.2.x directly to v2.5.x. However, for compatibility and safety reasons, we strongly recommend you upgrade your StarRocks cluster ",(0,s.jsx)(n.strong,{children:"consecutively from one minor version to another"}),". For example, to upgrade a StarRocks v2.2 cluster to v2.5, you need to upgrade it in the following order: v2.2.x --\x3e v2.3.x --\x3e v2.4.x --\x3e v2.5.x."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"For major version upgrade"})}),"\n",(0,s.jsx)(n.p,{children:"To upgrade your StarRocks cluster to v3.0, you must first upgrade it to v2.5."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"upgrade-procedure",children:"Upgrade procedure"}),"\n",(0,s.jsxs)(n.p,{children:["StarRocks supports ",(0,s.jsx)(n.strong,{children:"rolling upgrades"}),", which allow you to upgrade your cluster without stopping the service. By design, BEs and CNs are backward compatible with the FEs. Therefore, you need to ",(0,s.jsx)(n.strong,{children:"upgrade BEs and CNs first and then FEs"})," to allow your cluster to run properly while being upgraded. Upgrading them in an inverted order may lead to incompatibility between FEs and BEs/CNs, and thereby cause the service to crash. For FE nodes, you must first upgrade all Follower FE nodes before upgrading the Leader FE node."]}),"\n",(0,s.jsx)(n.h2,{id:"before-you-begin",children:"Before you begin"}),"\n",(0,s.jsx)(n.p,{children:"During preparation, you must perform the compatibility configuration if you are up for a minor or major version upgrade. You also need to perform the upgrade availability test on one of the FEs and BEs before upgrading all nodes in the cluster."}),"\n",(0,s.jsx)(n.h3,{id:"perform-compatibility-configuration",children:"Perform compatibility configuration"}),"\n",(0,s.jsx)(n.p,{children:"If you want to upgrade your StarRocks cluster to a later minor or major version, you must perform the compatibility configuration. In addition to the universal compatibility configuration, detailed configurations vary depending on the version of the StarRocks cluster you upgrade from."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Universal compatibility configuration"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Before upgrading your StarRocks cluster, you must disable tablet clone."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:'ADMIN SET FRONTEND CONFIG ("max_scheduling_tablets" = "0");\nADMIN SET FRONTEND CONFIG ("max_balancing_tablets" = "0");\nADMIN SET FRONTEND CONFIG ("disable_balance"="true");\nADMIN SET FRONTEND CONFIG ("disable_colocate_balance"="true");\n'})}),"\n",(0,s.jsxs)(n.p,{children:["After the upgrade, and the status of all BE nodes is ",(0,s.jsx)(n.code,{children:"Alive"}),", you can re-enable tablet clone."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:'ADMIN SET FRONTEND CONFIG ("max_scheduling_tablets" = "2000");\nADMIN SET FRONTEND CONFIG ("max_balancing_tablets" = "100");\nADMIN SET FRONTEND CONFIG ("disable_balance"="false");\nADMIN SET FRONTEND CONFIG ("disable_colocate_balance"="false");\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"If you upgrade from v2.0 to later versions"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Before upgrading your StarRocks v2.0 cluster, you must set the following BE configuration and system variable."}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["If you have modified the BE configuration item ",(0,s.jsx)(n.code,{children:"vector_chunk_size"}),", you must set it to ",(0,s.jsx)(n.code,{children:"4096"})," before upgrading. Because it is a static parameter, you must modify it in the BE configuration file ",(0,s.jsx)(n.strong,{children:"be.conf"})," and restart the node to allow the modification to take effect."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Set the system variable ",(0,s.jsx)(n.code,{children:"batch_size"})," to less than or equal to ",(0,s.jsx)(n.code,{children:"4096"})," globally."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"SET GLOBAL batch_size = 4096;\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"upgrade-be",children:"Upgrade BE"}),"\n",(0,s.jsx)(n.p,{children:"Having passed the upgrade availability test, you can first upgrade the BE nodes in the cluster."}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Navigate to the working directory of the BE node and stop the node."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Bash",children:"# Replace <be_dir> with the deployment directory of the BE node.\ncd <be_dir>/be\n./bin/stop_be.sh\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Replace the original deployment files under ",(0,s.jsx)(n.strong,{children:"bin"})," and ",(0,s.jsx)(n.strong,{children:"lib"})," with the ones of the new version."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Bash",children:"mv lib lib.bak \nmv bin bin.bak\ncp -r /tmp/StarRocks-x.x.x/be/lib  .\ncp -r /tmp/StarRocks-x.x.x/be/bin  .\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Start the BE node."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Bash",children:"sh bin/start_be.sh --daemon\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Check if the BE node is started successfully."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Bash",children:"ps aux | grep starrocks_be\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Repeat the above procedures to upgrade other BE nodes."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"upgrade-cn",children:"Upgrade CN"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Navigate to the working directory of the CN node and stop the node gracefully."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Bash",children:"# Replace <cn_dir> with the deployment directory of the CN node.\ncd <cn_dir>/be\n./bin/stop_cn.sh --graceful\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Replace the original deployment files under ",(0,s.jsx)(n.strong,{children:"bin"})," and ",(0,s.jsx)(n.strong,{children:"lib"})," with the ones of the new version."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Bash",children:"mv lib lib.bak \nmv bin bin.bak\ncp -r /tmp/StarRocks-x.x.x/be/lib  .\ncp -r /tmp/StarRocks-x.x.x/be/bin  .\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Start the CN node."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Bash",children:"sh bin/start_cn.sh --daemon\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Check if the CN node is started successfully."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Bash",children:"ps aux | grep starrocks_be\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Repeat the above procedures to upgrade other CN nodes."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"upgrade-fe",children:"Upgrade FE"}),"\n",(0,s.jsx)(n.p,{children:"After upgrading all BE and CN nodes, you can then upgrade the FE nodes. You must first upgrade the Follower FE nodes and then the Leader FE node."}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Navigate to the working directory of the FE node and stop the node."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Bash",children:"# Replace <fe_dir> with the deployment directory of the FE node.\ncd <fe_dir>/fe\n./bin/stop_fe.sh\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Replace the original deployment files under ",(0,s.jsx)(n.strong,{children:"bin"}),", ",(0,s.jsx)(n.strong,{children:"lib"}),", and ",(0,s.jsx)(n.strong,{children:"spark-dpp"})," with the ones of the new version."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Bash",children:"mv lib lib.bak \nmv bin bin.bak\nmv spark-dpp spark-dpp.bak\ncp -r /tmp/StarRocks-x.x.x/fe/lib  .   \ncp -r /tmp/StarRocks-x.x.x/fe/bin  .\ncp -r /tmp/StarRocks-x.x.x/fe/spark-dpp  .\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Start the FE node."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Bash",children:"sh bin/start_fe.sh --daemon\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Check if the FE node is started successfully."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Bash",children:"ps aux | grep StarRocksFE\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Repeat the above procedures to upgrade other Follower FE nodes, and finally the Leader FE node."}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"CAUTION"})}),"\n",(0,s.jsx)(n.p,{children:"If you have downgraded your StarRocks cluster after upgrading it from v2.5 to v3.0, and again you upgrade it to v3.0, you must follow these steps in order to avoid metadata upgrade failure for some Follower FEs:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Run ",(0,s.jsx)(n.a,{href:"/doc/docs/3.0/sql-reference/sql-statements/Administration/ALTER%20SYSTEM",children:"ALTER SYSTEM CREATE IMAGE"})," to create a new image."]}),"\n",(0,s.jsx)(n.li,{children:"Wait for the new image to be synchronized to all Follower FEs."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["You can check whether the image file has been synchronized by viewing the log file ",(0,s.jsx)(n.strong,{children:"fe.log"}),' of the Leader FE. A record of log like "push image.* from subdir [] to other nodes. totally xx nodes, push successful xx nodes" suggests that the image file has been successfully synchronized.']}),"\n"]}),"\n"]}),"\n"]})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,o.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(c,e)})):c(e)}},11151:(e,n,r)=>{r.d(n,{Zo:()=>d,ah:()=>t});var s=r(67294);const o=s.createContext({});function t(e){const n=s.useContext(o);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const i={};function d({components:e,children:n,disableParentContext:r}){let d;return d=r?"function"==typeof e?e({}):e||i:t(e),s.createElement(o.Provider,{value:d},n)}}}]);