"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[29116],{195:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>d,toc:()=>a});var s=r(85893),t=r(11151);const o={},i="Manage a cluster",d={id:"administration/Cluster_administration",title:"Manage a cluster",description:"This topic explains how to manage a cluster.",source:"@site/versioned_docs/version-2.5/administration/Cluster_administration.md",sourceDirName:"administration",slug:"/administration/Cluster_administration",permalink:"/doc/docs/2.5/administration/Cluster_administration",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-2.5/administration/Cluster_administration.md",tags:[],version:"2.5",frontMatter:{}},l={},a=[{value:"Start and stop StarRocks",id:"start-and-stop-starrocks",level:2},{value:"Start FE",id:"start-fe",level:3},{value:"Start BE",id:"start-be",level:3},{value:"Start a Compute Node (Optional)",id:"start-a-compute-node-optional",level:3},{value:"Check the configuration of the Compute Node",id:"check-the-configuration-of-the-compute-node",level:4},{value:"Start the Compute Node process",id:"start-the-compute-node-process",level:4},{value:"Check the health status of a cluster",id:"check-the-health-status-of-a-cluster",level:3},{value:"Stop a cluster",id:"stop-a-cluster",level:3},{value:"Stop a Compute Node",id:"stop-a-compute-node",level:4},{value:"Upgrade StarRocks",id:"upgrade-starrocks",level:2},{value:"Before you begin",id:"before-you-begin",level:3},{value:"Upgrade BE",id:"upgrade-be",level:3},{value:"Upgrade FE",id:"upgrade-fe",level:3},{value:"Upgrade CN",id:"upgrade-cn",level:3},{value:"Upgrade Broker",id:"upgrade-broker",level:3},{value:"Downgrade StarRocks",id:"downgrade-starrocks",level:2},{value:"Before you begin",id:"before-you-begin-1",level:3},{value:"Downgrade FE",id:"downgrade-fe",level:3},{value:"Downgrade BE",id:"downgrade-be",level:3},{value:"Downgrade Broker",id:"downgrade-broker",level:4},{value:"Usage notes for grayscale upgrade from StarRocks 2.0 to StarRocks 2.1",id:"usage-notes-for-grayscale-upgrade-from-starrocks-20-to-starrocks-21",level:3},{value:"Troubleshooting",id:"troubleshooting",level:4}];function c(e){const n=Object.assign({h1:"h1",p:"p",h2:"h2",ul:"ul",li:"li",h3:"h3",code:"code",strong:"strong",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",ol:"ol",h4:"h4",pre:"pre",a:"a",blockquote:"blockquote"},(0,t.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"manage-a-cluster",children:"Manage a cluster"}),"\n",(0,s.jsx)(n.p,{children:"This topic explains how to manage a cluster."}),"\n",(0,s.jsx)(n.h2,{id:"start-and-stop-starrocks",children:"Start and stop StarRocks"}),"\n",(0,s.jsx)(n.p,{children:"We recommend that your machines in the cluster are equipped with the following configurations:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The machines used as frontends (FEs) are equipped with an 8-core CPU and 16 GB of RAM or higher configurations."}),"\n",(0,s.jsx)(n.li,{children:"The machines used as backends (BEs) are equipped with a 16-core CPU and 64 GB of RAM or higher configurations."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"start-fe",children:"Start FE"}),"\n",(0,s.jsxs)(n.p,{children:["Before you set up an FE, configure the ",(0,s.jsx)(n.code,{children:"meta_dir"})," parameter and the communication ports:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"meta_dir"}),": the directory in which the FE stores metadata. By default, set the ",(0,s.jsx)(n.code,{children:"meta_dir"})," parameter to ",(0,s.jsx)(n.code,{children:"${STARROCKS_HOME}/meta"}),". If you want to specify the directory, define it in the ",(0,s.jsx)(n.strong,{children:"fe/conf/fe.conf"})," file. You must create the directory before you configure the ",(0,s.jsx)(n.code,{children:"meta_dir"})," parameter. The metadata stored in the FE is the metadata of the whole system, we recommend that you put the metadata directory in a separate folder."]}),"\n",(0,s.jsx)(n.li,{children:"Communication ports: there are four communication ports available for the BE."}),"\n"]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Port name"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Default port number"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Description"})})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"http_port"}),(0,s.jsx)(n.td,{children:"8030"}),(0,s.jsx)(n.td,{children:"The port that is used by the FE to communicate with an HTTP protocol."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"rpc_port"}),(0,s.jsx)(n.td,{children:"9020"}),(0,s.jsx)(n.td,{children:"The port that is used by the FE to communicate with a thrift server."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"query_port"}),(0,s.jsx)(n.td,{children:"9030"}),(0,s.jsx)(n.td,{children:"The port that is used by the FE to communicate with a MySQL protocol."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"edit_log_port"}),(0,s.jsx)(n.td,{children:"9010"}),(0,s.jsx)(n.td,{children:"The port that is used for communication between the FEs in a cluster"})]})]})]}),"\n",(0,s.jsx)(n.p,{children:"After you complete the previous configurations, perform the following steps to start the FE:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Navigate to the deployment directory of the FE."}),"\n",(0,s.jsxs)(n.li,{children:["Run ",(0,s.jsx)(n.code,{children:"./bin/start_fe.sh --daemon"})," to start the FE."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"You can deploy multiple FEs to ensure high availability. Typically, you can deploy three FEs: one leader FE and two follower FEs."}),"\n",(0,s.jsx)(n.p,{children:"When you start multiple FEs, start the follower FE one by one. When you upgrade a cluster, upgrade the follower FEs and then upgrade the leader FE. By doing so, you can detect errors that may occur during the upgrades of the follower FEs and make sure that the cluster can continue to properly process queries."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"If you configured multiple follower FEs, the cluster can select one follower FE as the leader FE to process queries only when more than half of configured follower FEs are available."}),"\n",(0,s.jsx)(n.li,{children:"We recommend that you verify every FE that you want to start. You can send a query to an FE to verify the FE."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"start-be",children:"Start BE"}),"\n",(0,s.jsxs)(n.p,{children:["Before you set up the BE, configure the  ",(0,s.jsx)(n.code,{children:"storage_root_path"})," parameter and the communication ports:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"storage_root_path"}),": indicates the directory for the BE to store the storage files. The directory needs to be created in advance. We recommend creating one directory per disk."]}),"\n",(0,s.jsx)(n.li,{children:"Communication ports: there are four communication ports available for the BE."}),"\n"]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.th,{children:[(0,s.jsx)(n.strong,{children:"Port"})," ",(0,s.jsx)(n.strong,{children:"name"})]}),(0,s.jsxs)(n.th,{children:[(0,s.jsx)(n.strong,{children:"Default"})," ",(0,s.jsx)(n.strong,{children:"port"})," ",(0,s.jsx)(n.strong,{children:"number"})]}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Description"})})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"be_port"}),(0,s.jsx)(n.td,{children:"9060"}),(0,s.jsx)(n.td,{children:"The port that is used by the BE to communicate with an FE."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"webserver_port"}),(0,s.jsx)(n.td,{children:"8040"}),(0,s.jsx)(n.td,{children:"The port that is used by the BE to communicate with an HTTP protocol."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"heartbeat_service_port"}),(0,s.jsx)(n.td,{children:"9050"}),(0,s.jsx)(n.td,{children:"The port that is used by the BE to receive heartbeats from an FE."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"brpc"}),(0,s.jsx)(n.td,{children:"8060"}),(0,s.jsx)(n.td,{children:"The port that is used for communication between the BEs in a cluster."})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"start-a-compute-node-optional",children:"Start a Compute Node (Optional)"}),"\n",(0,s.jsx)(n.h4,{id:"check-the-configuration-of-the-compute-node",children:"Check the configuration of the Compute Node"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Configuration"}),(0,s.jsx)(n.th,{children:"Description"}),(0,s.jsx)(n.th,{children:"Default"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"thrift_port"}),(0,s.jsx)(n.td,{children:"Thrift Server port of the Compute Node. The port is used to receive requests from FE."}),(0,s.jsx)(n.td,{children:"9060"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"webserver_port"}),(0,s.jsx)(n.td,{children:"HTTP Server port of the Compute Node."}),(0,s.jsx)(n.td,{children:"8040"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"heartbeat_service_port"}),(0,s.jsx)(n.td,{children:"Thrift server port of the Compute Node. The port is used to receive requests from FE."}),(0,s.jsx)(n.td,{children:"9050"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"brpc_port"}),(0,s.jsx)(n.td,{children:"RPC port between BE and the Compute Node."}),(0,s.jsx)(n.td,{children:"8060"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"start-the-compute-node-process",children:"Start the Compute Node process"}),"\n",(0,s.jsx)(n.p,{children:"Navigate to the deployment directory of the Compute Node and start the Compute Node process."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"cd StarRocks-x.x.x/be\n./bin/start_cn.sh --daemon\n"})}),"\n",(0,s.jsx)(n.h3,{id:"check-the-health-status-of-a-cluster",children:"Check the health status of a cluster"}),"\n",(0,s.jsx)(n.p,{children:"After you set up the FEs, BEs, and CNs of a cluster, you need to check their statuses to ensure they are started normally:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Run ",(0,s.jsx)(n.code,{children:"http://be_host:be_http_port/api/health"})," to check the statuses of BEs. If ",(0,s.jsx)(n.code,{children:'{"status": "OK", "msg": "To Be Added"}'})," is returned, the BEs are properly started."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Run ",(0,s.jsx)(n.code,{children:"http://fe_host:fe_http_port/api/bootstrap"})," to check the statuses of FEs. If ",(0,s.jsx)(n.code,{children:'{"status": "OK", "msg": "Success"}'})," is returned, the FEs are properly started."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Run ",(0,s.jsx)(n.code,{children:"http://cn_host:cn_http_port/api/health"})," to check the statuses of Compute Nodes. If ",(0,s.jsx)(n.code,{children:'{"status": "OK", "msg": "To Be Added"}'})," is returned, the Compute Nodes are properly started."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["After the Compute Nodes are started properly, you need to set the system variables ",(0,s.jsx)(n.code,{children:"prefer_compute_node"}),", and ",(0,s.jsx)(n.code,{children:"use_compute_nodes"})," to allow them to scale the computing resources out during queries. See ",(0,s.jsx)(n.a,{href:"/doc/docs/2.5/reference/System_variable",children:"System Variables"})," for more information."]}),"\n",(0,s.jsx)(n.h3,{id:"stop-a-cluster",children:"Stop a cluster"}),"\n",(0,s.jsx)(n.p,{children:"To stop a cluster, you need to stop all the FEs and BEs in the cluster:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Go to the deployment directory of each FE and run ",(0,s.jsx)(n.code,{children:"./bin/stop_fe.sh"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Go to the deployment directory of each BE and run ",(0,s.jsx)(n.code,{children:"./bin/stop_be.sh"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"stop-a-compute-node",children:"Stop a Compute Node"}),"\n",(0,s.jsx)(n.p,{children:"Navigate to the deployment directory of the Compute Node and stop the Compute Node process."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"cd StarRocks-x.x.x/be\n./bin/stop_cn.sh\n"})}),"\n",(0,s.jsx)(n.h2,{id:"upgrade-starrocks",children:"Upgrade StarRocks"}),"\n",(0,s.jsx)(n.p,{children:"StarRocks can perform a rolling upgrade, which allows you to first upgrade the BEs, then the FEs, and finally the Brokers in a cluster. StarRocks ensures that the BEs are backward compatible with the FEs."}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"CAUTION"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["StarRocks ensures that BE is backward compatible with FE. Therefore, you need to ",(0,s.jsx)(n.strong,{children:"upgrade BE nodes first, and then upgrade FE nodes"}),". Upgrading them in a wrong order may lead to the incompatibility between FE and BE nodes, which will cause the BE node to stop."]}),"\n",(0,s.jsxs)(n.li,{children:["When upgrading your StarRocks cluster to a major version from a version earlier than v2.0, you must upgrade it ",(0,s.jsx)(n.strong,{children:"consecutively from one major version to another"}),". When upgrading your StarRocks cluster from a version that is later than v2.0, you can upgrade it across major versions. For safety purpose, we recommended upgrading consecutively from one major version to another, for example, 1.19->2.0->2.1->2.2->2.3->2.4. Currently, StarRocks v2.2 and v2.5 are the Long-term Support (LTS) versions. Their support duration lasts more than half a year."]}),"\n"]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"StarRocks version"}),(0,s.jsx)(n.th,{children:"Upgrade from"}),(0,s.jsx)(n.th,{children:"Notice"}),(0,s.jsx)(n.th,{children:"LTS version"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"v1.19.x"}),(0,s.jsx)(n.td,{children:"N/A"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"No"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"v2.0.x"}),(0,s.jsx)(n.td,{children:"Must be upgraded from v1.19.x"}),(0,s.jsx)(n.td,{children:"Disable clone before upgrading."}),(0,s.jsx)(n.td,{children:"No"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"v2.1.x"}),(0,s.jsx)(n.td,{children:"Must be upgraded from v2.0.x"}),(0,s.jsxs)(n.td,{children:["Modify ",(0,s.jsx)("code",{children:"vector_chunk_size"})," and ",(0,s.jsx)("code",{children:"batch_size"})," before grayscale upgrade."]}),(0,s.jsx)(n.td,{children:"No"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"v2.2.x"}),(0,s.jsx)(n.td,{children:"Can be upgraded from v2.1.x and v2.0.x"}),(0,s.jsxs)(n.td,{children:["Set ",(0,s.jsx)("code",{children:"ignore_unknown_log_id"})," to ",(0,s.jsx)("code",{children:"true"})," before downgrading."]}),(0,s.jsx)(n.td,{children:"Yes"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"v2.3.x"}),(0,s.jsx)(n.td,{children:"Can be upgraded from v2.2.x, v2.1.x, and v2.0.x"}),(0,s.jsxs)(n.td,{children:["We do not recommend downgrading across major versions. Set ",(0,s.jsx)("code",{children:"ignore_unknown_log_id"})," to ",(0,s.jsx)("code",{children:"true"})," before downgrading."]}),(0,s.jsx)(n.td,{children:"No"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"v2.4.x"}),(0,s.jsx)(n.td,{children:"Can be upgraded from v2.3.x, v2.2.x, v2.1.x, and v2.0.x"}),(0,s.jsxs)(n.td,{children:["We do not recommend downgrading across major versions. Switch to IP address access before downgrading if you enabled ",(0,s.jsx)(n.a,{href:"/doc/docs/2.5/administration/enable_fqdn",children:"FQDN access"}),"."]}),(0,s.jsx)(n.td,{children:"No"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"v2.5.x"}),(0,s.jsx)(n.td,{children:"Can be upgraded from v2.4.x, v2.3.x, v2.2.x, v2.1.x, and v2.0.x"}),(0,s.jsx)(n.td,{children:"We do not recommend downgrading across major versions."}),(0,s.jsx)(n.td,{children:"Yes"})]})]})]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"before-you-begin",children:"Before you begin"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Test whether the cluster after the upgrade affects your current data."}),"\n",(0,s.jsx)(n.p,{children:"For BE:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Stop a random BE node."}),"\n",(0,s.jsxs)(n.li,{children:["Replace files under ",(0,s.jsx)(n.strong,{children:"bin"})," and ",(0,s.jsx)(n.strong,{children:"lib"})," of this BE node."]}),"\n",(0,s.jsxs)(n.li,{children:["Start this BE node. Check if it is started successfully in the BE log file ",(0,s.jsx)(n.strong,{children:"be.INFO"}),"."]}),"\n",(0,s.jsx)(n.li,{children:"Check the causes of the failure if the start fails. if the problem is irresolvable, you can drop this BE node, clean the data, restart the BE node with deployment files of the previous version, and add the BE node back to the cluster."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"For FE:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Deploy a new FE node in DEV environment with deployment files of new version."}),"\n",(0,s.jsxs)(n.li,{children:["Modify the FE configuration file ",(0,s.jsx)(n.strong,{children:"fe.conf"}),". Assign different ports to this FE node."]}),"\n",(0,s.jsxs)(n.li,{children:["Add ",(0,s.jsx)(n.code,{children:"cluster_id = 123456"})," in ",(0,s.jsx)(n.strong,{children:"fe.conf"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Add ",(0,s.jsx)(n.code,{children:"metadata_failure_recovery = true"})," in ",(0,s.jsx)(n.strong,{children:"fe.conf"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Copy the ",(0,s.jsx)(n.strong,{children:"meta"})," directory of the Leader FE node in PRD environment and paste it into that of the DEV environment."]}),"\n",(0,s.jsxs)(n.li,{children:["Modify ",(0,s.jsx)(n.strong,{children:"meta/image/VERSION"})," in DEV environment. Set ",(0,s.jsx)(n.code,{children:"cluster_id"})," to ",(0,s.jsx)(n.code,{children:"123456"}),"."]}),"\n",(0,s.jsx)(n.li,{children:"Start the FE node in DEV environment."}),"\n",(0,s.jsxs)(n.li,{children:["Check if it is started successfully in the FE log file ",(0,s.jsx)(n.strong,{children:"fe.log"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Distribute the BE and FE binary files for new versions of BE and FE to the deployment directory of BE and FE."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["For a minor version update (for example, from 2.0.x to 2.0.y), you only need to replace ",(0,s.jsx)(n.strong,{children:"starrocks_be"})," for the BEs and ",(0,s.jsx)(n.strong,{children:"starrocks-fe.jar"})," for the FEs."]}),"\n",(0,s.jsxs)(n.li,{children:["For a major version upgrade (for example, from 2.0.x to 2.x.x), you need to replace the ",(0,s.jsx)(n.strong,{children:"bin"})," and ",(0,s.jsx)(n.strong,{children:"lib"})," folders of the BEs and replace the ",(0,s.jsx)(n.strong,{children:"bin"}),", ",(0,s.jsx)(n.strong,{children:"lib"}),", and ",(0,s.jsx)(n.strong,{children:"spark-dpp"})," for FEs."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"upgrade-be",children:"Upgrade BE"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Navigate to the BE working directory and stop the BE node."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"cd StarRocks-x.x.x/be\nsh bin/stop_be.sh\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Replace the deployment files of BE."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"mv lib lib.bak \nmv bin bin.bak\ncp -r /tmp/StarRocks-x.x.x/be/lib  .\ncp -r /tmp/StarRocks-x.x.x/be/bin  .\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Start the BE node."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"sh bin/start_be.sh --daemon\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Check if the node is started successfully."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"ps aux | grep starrocks_be\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Repeat the above procedures to upgrade other BE nodes."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"upgrade-fe",children:"Upgrade FE"}),"\n",(0,s.jsx)(n.p,{children:"You must upgrade all Follower FE nodes first and then the Leader FE node."}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Navigate to the FE working directory and stop the FE node."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"cd StarRocks-x.x.x/fe\nsh bin/stop_fe.sh\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Replace the deployment files of FE."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"mv lib lib.bak \nmv bin bin.bak\ncp -r /tmp/StarRocks-x.x.x/fe/lib  .   \ncp -r /tmp/StarRocks-x.x.x/fe/bin  .\ncp -r /tmp/StarRocks-x.x.x/fe/spark-dpp  .\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Start the FE node."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"sh bin/start_fe.sh --daemon\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Check if the node is started successfully."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"ps aux | grep StarRocksFE\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Repeat the above procedures to upgrade other Follower FE nodes, and finally the Leader FE node."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"upgrade-cn",children:"Upgrade CN"}),"\n",(0,s.jsx)(n.p,{children:"Since the Compute Node node is stateless, you only need to replace the binary file and restart the process. We recommend to stop it gracefully."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"./bin/stop_cn.sh --graceful\n"})}),"\n",(0,s.jsx)(n.p,{children:"By using this method, the Compute Node waits until the currently running task finishes before exiting the process."}),"\n",(0,s.jsx)(n.h3,{id:"upgrade-broker",children:"Upgrade Broker"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Navigate to the Broker working directory and stop the Broker node."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"cd StarRocks-x.x.x/apache_hdfs_broker\nsh bin/stop_broker.sh\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Replace the deployment files of Broker."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"mv lib lib.bak \nmv bin bin.bak\ncp -r /tmp/StarRocks-x.x.x/apache_hdfs_broker/lib  .   \ncp -r /tmp/StarRocks-x.x.x/apache_hdfs_broker/bin  .\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Start the Broker node."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"sh bin/start_broker.sh --daemon\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Check if the node is started successfully."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"ps aux | grep broker\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Repeat the above procedures to upgrade other Broker nodes."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"downgrade-starrocks",children:"Downgrade StarRocks"}),"\n",(0,s.jsx)(n.p,{children:"All StarRocks versions support downgrading. You need to first downgrade the FEs, then the BEs, and finally the Brokers in a cluster. If an exception occurs after you upgrade a cluster, you can perform the following steps to downgrade the cluster to the previous version. This way, you can quickly recover the cluster."}),"\n",(0,s.jsx)(n.h3,{id:"before-you-begin-1",children:"Before you begin"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Distribute the BE and FE binary files for old versions of BE and FE to the deployment directory of BE and FE."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["For a minor version downgrading (for example, from 2.0.y to 2.0.x), you only need to replace ",(0,s.jsx)(n.strong,{children:"starrocks_be"})," for the BEs and ",(0,s.jsx)(n.strong,{children:"starrocks-fe.jar"})," for the FEs."]}),"\n",(0,s.jsxs)(n.li,{children:["For a major version downgrading (for example, from 2.x.x to 2.0.x), you need to replace the ",(0,s.jsx)(n.strong,{children:"bin"})," and ",(0,s.jsx)(n.strong,{children:"lib"})," folders of the BEs and replace the ",(0,s.jsx)(n.strong,{children:"bin"}),", ",(0,s.jsx)(n.strong,{children:"lib"}),", and ",(0,s.jsx)(n.strong,{children:"spark-dpp"})," for FEs."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Before downgrading StarRocks v2.2 and later versions, you must add the item ",(0,s.jsx)(n.code,{children:"ignore_unknown_log_id=true"})," to the FE configuration files ",(0,s.jsx)(n.strong,{children:"fe.conf"})," on all FE nodes. Otherwise, StarRocks may fail to restart. When CheckPoint is completed after StarRocks is restarted, you can then set ",(0,s.jsx)(n.code,{children:"ignore_unknown_log_id"})," to ",(0,s.jsx)(n.code,{children:"false"}),", and restart all FE nodes to allow the change to take effect."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"downgrade-fe",children:"Downgrade FE"}),"\n",(0,s.jsx)(n.p,{children:"You must downgrade all Follower FE nodes first and then the Leader FE node."}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Navigate to the FE working directory and stop the FE node."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"cd StarRocks-x.x.x/fe\nsh bin/stop_fe.sh\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Replace the deployment files of FE."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"mv lib lib.bak \nmv bin bin.bak\ncp -r /tmp/StarRocks-x.x.x/fe/lib  .   \ncp -r /tmp/StarRocks-x.x.x/fe/bin  .\ncp -r /tmp/StarRocks-x.x.x/fe/spark-dpp  .\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Start the FE node."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"sh bin/start_fe.sh --daemon\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Check if the node is started successfully."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"ps aux | grep StarRocksFE\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Repeat the above procedures to downgrade other Follower FE nodes, and finally the Leader FE node."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"downgrade-be",children:"Downgrade BE"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Navigate to the BE working directory and stop the BE node."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"cd StarRocks-x.x.x/be\nsh bin/stop_be.sh\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Replace the deployment files of BE."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"mv lib lib.bak \nmv bin bin.bak\ncp -r /tmp/StarRocks-x.x.x/be/lib  .\ncp -r /tmp/StarRocks-x.x.x/be/bin  .\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Start the BE node."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"sh bin/start_be.sh --daemon\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Check if the node is started successfully."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"ps aux | grep starrocks_be\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Repeat the above procedures to downgrade other BE nodes."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"downgrade-broker",children:"Downgrade Broker"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Navigate to the Broker working directory and stop the Broker node."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"cd StarRocks-x.x.x/apache_hdfs_broker\nsh bin/stop_broker.sh\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Replace the deployment files of Broker."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"mv lib lib.bak \nmv bin bin.bak\ncp -r /tmp/StarRocks-x.x.x/apache_hdfs_broker/lib  .   \ncp -r /tmp/StarRocks-x.x.x/apache_hdfs_broker/bin  .\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Start the Broker node."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"sh bin/start_broker.sh --daemon\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Check if the node is started successfully."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"ps aux | grep broker\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Repeat the above procedures to downgrade other Broker nodes."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"usage-notes-for-grayscale-upgrade-from-starrocks-20-to-starrocks-21",children:"Usage notes for grayscale upgrade from StarRocks 2.0 to StarRocks 2.1"}),"\n",(0,s.jsx)(n.p,{children:"If you need to perform a grayscale upgrade from StarRocks 2.0 to StarRocks 2.1, set the following configuration items to ensure that the chunk size (which indicates the number of rows of data that can be processed by a BE at a time) is the same for all BEs."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"vector_chunk_size"}),": set this configuration item to 4096 for all BEs. Default value: 4096. Unit: rows."]}),"\n"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["You must set the ",(0,s.jsx)(n.code,{children:"vector_chunk_size"})," configuration item in the ",(0,s.jsx)(n.strong,{children:"be.conf"})," file of each BE. After you set the ",(0,s.jsx)(n.code,{children:"vector_chunk_size"})," configuration item for a BE, you must restart the BE to make the setting take effect."]}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"batch_size"}),": set this configuration item less than or equal to 4096 for all FEs. Default value: 4096. Unit: rows. This option is a global variable in the cluster. If you modified this configuration item in the current session, this configuration item in other sessions also changes."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-plain",children:"-- check batch_size\n\nmysql> show variables like '%batch_size%';\n\n+---------------+-------+\n\n| Variable_name | Value |\n\n+---------------+-------+\n\n| batch_size    | 1024  |\n\n+---------------+-------+\n\n1 row in set (0.00 sec)\n\n\n\n-- set batch_size\n\nmysql> set global batch_size = 4096;\n"})}),"\n",(0,s.jsx)(n.h4,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,s.jsx)(n.p,{children:"Q: I have recently upgraded StarRocks v2.0 to v2.1 or later versions. When I load JSON-format BOOLEAN type data into an integer column using Stream Load, StarRocks returns NULL. How can I solve it?"}),"\n",(0,s.jsxs)(n.p,{children:["A: StarRocks v2.0 parses all columns as strings and then performs type conversion for loading. When you load BOOLEAN type data (",(0,s.jsx)(n.code,{children:"true"})," and ",(0,s.jsx)(n.code,{children:"false"}),") in JSON format into an integer column, StarRocks v2.0 converts the data into ",(0,s.jsx)(n.code,{children:"0"})," and ",(0,s.jsx)(n.code,{children:"1"})," for loading. StarRocks v2.1 refactored its JSON Paerser, which directly extracts the JSON fields according to the target column type, resulting in this problem."]}),"\n",(0,s.jsxs)(n.p,{children:["You can solve this problem by adding the expression ",(0,s.jsx)(n.code,{children:"tmp, target=if(tmp,1,0)"})," to the ",(0,s.jsx)(n.code,{children:"columns"})," parameter of the ",(0,s.jsx)(n.a,{href:"/doc/docs/2.5/sql-reference/sql-statements/data-manipulation/STREAM_LOAD",children:"Stream Load"})," command. The complete command is as follows:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:'curl --location-trusted -u <username>:<password> \\\n-H "columns: <col_name_1>, <col_name_2>, <tmp>, <col_name_3>=if(<tmp>,1,0)" \\\n-T demo.csv -XPUT \\\nhttp://<fe_ip>:<fe_http_port>/api/<db_name>/<table_name>/_stream_load\n'})})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(c,e)})):c(e)}},11151:(e,n,r)=>{r.d(n,{Zo:()=>d,ah:()=>o});var s=r(67294);const t=s.createContext({});function o(e){const n=s.useContext(t);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const i={};function d({components:e,children:n,disableParentContext:r}){let d;return d=r?"function"==typeof e?e({}):e||i:o(e),s.createElement(t.Provider,{value:d},n)}}}]);