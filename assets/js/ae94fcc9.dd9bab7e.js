"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[72015],{23863:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>h});var n=r(85893),s=r(11151);const o={displayed_sidebar:"English"},i="Manage a cluster",a={id:"administration/Cluster_administration",title:"Manage a cluster",description:"This topic explains how to manage a cluster.",source:"@site/versioned_docs/version-2.1/administration/Cluster_administration.md",sourceDirName:"administration",slug:"/administration/Cluster_administration",permalink:"/docs/2.1/administration/Cluster_administration",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/administration/Cluster_administration.md",tags:[],version:"2.1",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"Introduction of the dev-env image",permalink:"/docs/2.1/administration/Build_in_docker"},next:{title:"Parameter Configuration",permalink:"/docs/2.1/administration/Configuration"}},l={},h=[{value:"Start and stop a cluster",id:"start-and-stop-a-cluster",level:2},{value:"Start an FE",id:"start-an-fe",level:3},{value:"Start a BE",id:"start-a-be",level:3},{value:"Check the health status of a cluster",id:"check-the-health-status-of-a-cluster",level:3},{value:"Stop a cluster",id:"stop-a-cluster",level:3},{value:"Upgrade a cluster",id:"upgrade-a-cluster",level:3},{value:"Before you begin",id:"before-you-begin",level:4},{value:"Procedure",id:"procedure",level:4},{value:"Upgrade a  BE",id:"upgrade-a--be",level:5},{value:"Upgrade an FE",id:"upgrade-an-fe",level:5},{value:"Upgrade a Broker",id:"upgrade-a-broker",level:5},{value:"Roll back a cluster",id:"roll-back-a-cluster",level:2},{value:"Before you begin",id:"before-you-begin-1",level:3},{value:"Procedure",id:"procedure-1",level:3},{value:"Roll back an FE",id:"roll-back-an-fe",level:4},{value:"Roll back a BE",id:"roll-back-a-be",level:4},{value:"Roll back a Broker",id:"roll-back-a-broker",level:4},{value:"Usage notes for grayscale upgrade from StarRocks 2.0 to StarRocks 2.1",id:"usage-notes-for-grayscale-upgrade-from-starrocks-20-to-starrocks-21",level:3},{value:"Test the upgrade of a cluster (Optional)",id:"test-the-upgrade-of-a-cluster-optional",level:2},{value:"Test the upgrade of BEs",id:"test-the-upgrade-of-bes",level:3},{value:"Test the upgrade of FEs",id:"test-the-upgrade-of-fes",level:3}];function c(e){const t=Object.assign({h1:"h1",p:"p",h2:"h2",ul:"ul",li:"li",h3:"h3",code:"code",strong:"strong",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",ol:"ol",h4:"h4",h5:"h5",pre:"pre",blockquote:"blockquote"},(0,s.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"manage-a-cluster",children:"Manage a cluster"}),"\n",(0,n.jsx)(t.p,{children:"This topic explains how to manage a cluster."}),"\n",(0,n.jsx)(t.h2,{id:"start-and-stop-a-cluster",children:"Start and stop a cluster"}),"\n",(0,n.jsx)(t.p,{children:"We recommend that your machines in the cluster are equipped with the following configurations:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"The machines used as frontends (FEs) are equipped with an 8-core CPU and 16 GB of RAM or higher configurations."}),"\n",(0,n.jsx)(t.li,{children:"The machines used as backends (BEs) are equipped with a 16-core CPU and 64 GB of RAM or higher configurations."}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"start-an-fe",children:"Start an FE"}),"\n",(0,n.jsxs)(t.p,{children:["Before you set up an FE, configure the ",(0,n.jsx)(t.code,{children:"meta_dir"})," parameter and the communication ports:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"meta_dir"}),": the directory in which the FE stores metadata. By default, set the ",(0,n.jsx)(t.code,{children:"meta_dir"})," parameter to ",(0,n.jsx)(t.code,{children:"${STARROCKS_HOME}/meta"}),". If you want to specify the directory, define it in the ",(0,n.jsx)(t.strong,{children:"fe/conf/fe.conf"})," file. You must create the directory before you configure the ",(0,n.jsx)(t.code,{children:"meta_dir"})," parameter. The metadata stored in the FE is the metadata of the whole system, we recommend that you put the metadata directory in a separate folder."]}),"\n",(0,n.jsx)(t.li,{children:"Communication ports: there are four communication ports available for the BE."}),"\n"]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:(0,n.jsx)(t.strong,{children:"Port name"})}),(0,n.jsx)(t.th,{children:(0,n.jsx)(t.strong,{children:"Default port number"})}),(0,n.jsx)(t.th,{children:(0,n.jsx)(t.strong,{children:"Description"})})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"http_port"}),(0,n.jsx)(t.td,{children:"8030"}),(0,n.jsx)(t.td,{children:"The port that is used by the FE to communicate with an HTTP protocol."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"rpc_port"}),(0,n.jsx)(t.td,{children:"9020"}),(0,n.jsx)(t.td,{children:"The port that is used by the FE to communicate with a thrift server."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"query_port"}),(0,n.jsx)(t.td,{children:"9030"}),(0,n.jsx)(t.td,{children:"The port that is used by the FE to communicate with a MySQL protocol."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"edit_log_port"}),(0,n.jsx)(t.td,{children:"9010"}),(0,n.jsx)(t.td,{children:"The port that is used for communication between the FEs in a cluster"})]})]})]}),"\n",(0,n.jsx)(t.p,{children:"After you complete the previous configurations, perform the following steps to start the FE:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"Navigate to the deployment directory of the FE."}),"\n",(0,n.jsxs)(t.li,{children:["Run ",(0,n.jsx)(t.code,{children:"sh bin/start_fe.sh --daemon"})," to start the FE."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"You can deploy multiple FEs to ensure high availability. Typically, you can deploy three FEs: one leader FE and two follower FEs."}),"\n",(0,n.jsx)(t.p,{children:"When you start multiple FEs, start the follower FE one by one. When you upgrade a cluster, upgrade the follower FEs and then upgrade the leader FE. By doing so, you can detect errors that may occur during the upgrades of the follower FEs and make sure that the cluster can continue to properly process queries."}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Note"}),":"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"If you configured multiple follower FEs, the cluster can select one follower FE as the leader FE to process queries only when more than half of configured follower FEs are available."}),"\n",(0,n.jsx)(t.li,{children:"We recommend that you verify every FE that you want to start. You can send a query to an FE to verify the FE."}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"start-a-be",children:"Start a BE"}),"\n",(0,n.jsxs)(t.p,{children:["Before you set up the BE, configure the  ",(0,n.jsx)(t.code,{children:"storage_root_path"})," parameter and the communication ports:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"storage_root_path"}),": indicates the directory for the BE to store the storage files. The directory needs to be created in advance. We recommend creating one directory per disk."]}),"\n",(0,n.jsx)(t.li,{children:"Communication ports: there are four communication ports available for the BE."}),"\n"]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.th,{children:[(0,n.jsx)(t.strong,{children:"Port"})," ",(0,n.jsx)(t.strong,{children:"name"})]}),(0,n.jsxs)(t.th,{children:[(0,n.jsx)(t.strong,{children:"Default"})," ",(0,n.jsx)(t.strong,{children:"port"})," ",(0,n.jsx)(t.strong,{children:"number"})]}),(0,n.jsx)(t.th,{children:(0,n.jsx)(t.strong,{children:"Description"})})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"be_port"}),(0,n.jsx)(t.td,{children:"9060"}),(0,n.jsx)(t.td,{children:"The port that is used by the BE to communicate with an FE."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"webserver_port"}),(0,n.jsx)(t.td,{children:"8040"}),(0,n.jsx)(t.td,{children:"The port that is used by the BE to communicate with an HTTP protocol."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"heartbeat_service_port"}),(0,n.jsx)(t.td,{children:"9050"}),(0,n.jsx)(t.td,{children:"The port that is used by the BE to receive heartbeats from an FE."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"brpc"}),(0,n.jsx)(t.td,{children:"8060"}),(0,n.jsx)(t.td,{children:"The port that is used for communication between the BEs in a cluster."})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"check-the-health-status-of-a-cluster",children:"Check the health status of a cluster"}),"\n",(0,n.jsx)(t.p,{children:"After you set up the BEs and FEs of a cluster, you need to check the statuses of FEs and BEs to ensure the FEs and BEs are started normally:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Run ",(0,n.jsx)(t.code,{children:"http://be_host:be_http_port/api/health"})," to check the statuses of BEs. If ",(0,n.jsx)(t.code,{children:'{"status": "OK", "msg": "To Be Added"}'})," is returned, the BEs have properly started."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Run ",(0,n.jsx)(t.code,{children:"http://fe_host:fe_http_port/api/bootstrap"})," to check the statuses of FEs. If ",(0,n.jsx)(t.code,{children:'{"status": "OK", "msg": "Success"}'})," is returned, the FEs have properly started."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"stop-a-cluster",children:"Stop a cluster"}),"\n",(0,n.jsx)(t.p,{children:"To stop a cluster, you need to stop all the FEs and BEs in the cluster:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Go to the deployment directory of each FE and run ",(0,n.jsx)(t.code,{children:"sh bin/stop_fe.sh"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Go to the deployment directory of each BE and run ",(0,n.jsx)(t.code,{children:"sh bin/stop_be.sh"}),"."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"upgrade-a-cluster",children:"Upgrade a cluster"}),"\n",(0,n.jsx)(t.p,{children:"StarRocks can perform a rolling upgrade, which allows you to first upgrade the BEs, then the FEs, and finally the Brokers in a cluster. StarRocks ensures that the BEs are backward compatible with the FEs."}),"\n",(0,n.jsx)(t.h4,{id:"before-you-begin",children:"Before you begin"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"(Optional) Test whether the cluster after the upgrade affects your current data."}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Distribute the BE and FE binary files for new versions of BE and FE to the deployment directory of BE and FE."}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["For a minor version update (for example, from 2.0.x to 2.0.y), you only need to upgrade ",(0,n.jsx)(t.code,{children:"starrocks_be"})," for the BEs and ",(0,n.jsx)(t.code,{children:"starrocks-fe.jar"})," for the FEs."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"For a major version upgrade (for example, from 2.0.x to 2.x.x), you need to replace the bin and lib folders of the FEs and BEs."}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h4,{id:"procedure",children:"Procedure"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"Confirm that the files of the previous version are replaced with the files of the new version."}),"\n",(0,n.jsx)(t.li,{children:"Restart the BEs one by one and then restart the FEs one by one. Start the next BE or FE only after the previous BE or FE has successfully started."}),"\n"]}),"\n",(0,n.jsx)(t.h5,{id:"upgrade-a--be",children:"Upgrade a  BE"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-Plain_Text",children:"cd be_work_dir\n\nsh bin/stop_be.sh\n\nmv lib lib.bak \n\nmv bin bin.bak\n\ncp -r /tmp/StarRocks-SE-x.x.x/be/lib  .   \n\ncp -r /tmp/StarRocks-SE-x.x.x/be/bin  .  \n\nsh bin/start_be.sh --daemon\n\nps aux | grep starrocks_be\n"})}),"\n",(0,n.jsx)(t.h5,{id:"upgrade-an-fe",children:"Upgrade an FE"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-Plain_Text",children:"cd fe_work_dir\n\nsh bin/stop_fe.sh\n\nmv lib lib.bak \n\nmv bin bin.bak\n\ncp -r /tmp/StarRocks-SE-x.x.x/fe/lib  .   \n\ncp -r /tmp/StarRocks-SE-x.x.x/fe/bin  .\n\nsh bin/start_fe.sh --daemon\n\nps aux | grep StarRocksFE\n"})}),"\n",(0,n.jsx)(t.h5,{id:"upgrade-a-broker",children:"Upgrade a Broker"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-Plain_Text",children:"cd broker_work_dir \n\nmv lib lib.bak \n\nmv bin bin.bak\n\ncp -r /tmp/StarRocks-SE-x.x.x/apache_hdfs_broker/lib  .   \n\ncp -r /tmp/StarRocks-SE-x.x.x/apache_hdfs_broker/bin  .\n\nsh bin/stop_broker.sh\n\nsh bin/start_broker.sh --daemon\n\nps aux | grep broker\n"})}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Note"}),": You must update the BEs before you upgrade the FEs. If you upgrade the FEs before the BEs, the FEs of the new version may be incompatible with the BEs of the previous version. As a result, the commands that are issued by the FEs may cause the BEs not to work properly."]}),"\n",(0,n.jsx)(t.h2,{id:"roll-back-a-cluster",children:"Roll back a cluster"}),"\n",(0,n.jsx)(t.p,{children:"All StarRocks versions, which are named StarRocks-xx, support rollbacks. You need to first roll back the FEs, then the BEs, and finally the Brokers in a cluster. If an exception occurs after you upgrade a cluster, you can perform the following steps to roll back the cluster to the previous version. This way, you can quickly recover the cluster."}),"\n",(0,n.jsx)(t.h3,{id:"before-you-begin-1",children:"Before you begin"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["For a minor version rollback (for example, from 2.0.x to 2.0.x), you need to replace ",(0,n.jsx)(t.code,{children:"starrocks_be"})," for the BEs and ",(0,n.jsx)(t.code,{children:"starrocks-fe.jar"})," for the FEs."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"To a major version rollback (for example, from 2.x.x to 2.0.x), you need to replace the bin and lib folders of the FEs and BEs."}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"procedure-1",children:"Procedure"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"Confirm that the files of the previous version are replaced with the files of the new version."}),"\n",(0,n.jsx)(t.li,{children:"Restart the FEs one by one and then restart the BEs one by one."}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Note"}),": Start the next FE or BE only after the previous FE or BE has successfully started."]}),"\n",(0,n.jsx)(t.h4,{id:"roll-back-an-fe",children:"Roll back an FE"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-Plain_Text",children:"cd fe_work_dir \n\nmv lib libtmp.bak \n\nmv bin bintmp.bak \n\nmv lib.bak lib   \n\nmv bin.bak bin \n\nsh bin/stop_fe.sh\n\nsh bin/start_fe.sh --daemon\n\nps aux | grep StarRocksFe\n"})}),"\n",(0,n.jsx)(t.h4,{id:"roll-back-a-be",children:"Roll back a BE"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-Plain_Text",children:"cd be_work_dir \n\nmv lib libtmp.bak \n\nmv bin bintmp.bak \n\nmv lib.bak lib\n\nmv bin.bak bin\n\nsh bin/stop_be.sh\n\nsh bin/start_be.sh --daemon\n\nps aux | grep starrocks_be\n"})}),"\n",(0,n.jsx)(t.h4,{id:"roll-back-a-broker",children:"Roll back a Broker"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-Plain_Text",children:"cd broker_work_dir \n\nmv lib libtmp.bak \n\nmv bin bintmp.bak\n\nmv lib.bak lib\n\nmv bin.bak bin\n\nsh bin/stop_broker.sh\n\nsh bin/start_broker.sh --daemon\n\nps aux | grep broker\n"})}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Note"}),": You must roll back the FEs before you roll back the BEs. If you rollback the BEs before the FEs, the FEs of the new version may be incompatible with the BEs of the previous version. As a result, the commands that are issued by the FEs may cause the BEs to break down."]}),"\n",(0,n.jsx)(t.h3,{id:"usage-notes-for-grayscale-upgrade-from-starrocks-20-to-starrocks-21",children:"Usage notes for grayscale upgrade from StarRocks 2.0 to StarRocks 2.1"}),"\n",(0,n.jsx)(t.p,{children:"If you need to perform a grayscale upgrade from StarRocks 2.0 to StarRocks 2.1, set the following configuration items to ensure that the chunk size (which indicates the number of rows of data that can be processed by a BE at a time) is the same for all BEs."}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"vector_chunk_size"}),": set this configuration item to 4096 for all BEs. Default value: 4096. Unit: rows."]}),"\n"]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:["You must set the ",(0,n.jsx)(t.code,{children:"vector_chunk_size"})," configuration item in the ",(0,n.jsx)(t.strong,{children:"be.conf"})," file of each BE. After you set the ",(0,n.jsx)(t.code,{children:"vector_chunk_size"})," configuration item for a BE, you must restart the BE to make the setting take effect."]}),"\n"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"batch_size"}),": set this configuration item less than or equal to 4096 for all FEs. Default value: 4096. Unit: rows. This option is a global variable in the cluster. If you modified this configuration item in the current session, this configuration item in other sessions also changes."]}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-Lua",children:"-- check batch_size\n\nmysql> show variables like '%batch_size%';\n\n+---------------+-------+\n\n| Variable_name | Value |\n\n+---------------+-------+\n\n| batch_size    | 1024  |\n\n+---------------+-------+\n\n1 row in set (0.00 sec)\n\n\n\n-- set batch_size\n\nmysql> set global batch_size = 4096;\n"})}),"\n",(0,n.jsx)(t.h2,{id:"test-the-upgrade-of-a-cluster-optional",children:"Test the upgrade of a cluster (Optional)"}),"\n",(0,n.jsx)(t.p,{children:"Before you upgrade a cluster, you can perform the following steps to test whether the cluster after the upgrade affects your current data."}),"\n",(0,n.jsx)(t.h3,{id:"test-the-upgrade-of-bes",children:"Test the upgrade of BEs"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["Select a BE and deploy the ",(0,n.jsx)(t.strong,{children:"starrocks_be"})," binary file of the new version on the BE."]}),"\n",(0,n.jsxs)(t.li,{children:["Restart the BE. Then view the ",(0,n.jsx)(t.strong,{children:"be.INFO"})," log file of BE to check whether the restart is successful."]}),"\n",(0,n.jsx)(t.li,{children:"If the restart fails, troubleshoot the failure."}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"test-the-upgrade-of-fes",children:"Test the upgrade of FEs"}),"\n",(0,n.jsx)(t.p,{children:"The FE metadata is critical and an abnormal upgrade may cause data loss. We recommend that you test the upgrade of FEs in your test environment (If you do not have a test environment, you can first upgrade a follower FE or an observer FE and then check whether it runs as expected). Proceed with caution when you perform the following steps."}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"Deploy an FE of the new version in your testing environment, such as your local development machine."}),"\n",(0,n.jsxs)(t.li,{children:["Modify the ",(0,n.jsx)(t.strong,{children:"fe.conf"})," file. Configure the ports of the test FE to be different from the ports of the online FEs."]}),"\n",(0,n.jsxs)(t.li,{children:["Set ",(0,n.jsx)(t.code,{children:"cluster_id"})," in the ",(0,n.jsx)(t.strong,{children:"fe.conf"})," file to ",(0,n.jsx)(t.code,{children:"123456"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:["Set ",(0,n.jsx)(t.code,{children:"metadata_failure_recovery"})," in the ",(0,n.jsx)(t.strong,{children:"fe.conf"})," file to ",(0,n.jsx)(t.code,{children:"true"}),"."]}),"\n",(0,n.jsx)(t.li,{children:"Copy the metadata directory of the leader FE in the production environment to your test environment."}),"\n",(0,n.jsxs)(t.li,{children:["Set the ",(0,n.jsx)(t.code,{children:"cluster_id"})," configuration item in the ",(0,n.jsx)(t.strong,{children:"meta/image/VERSION"})," file to 123456."]}),"\n",(0,n.jsxs)(t.li,{children:["In your test environment, run ",(0,n.jsx)(t.code,{children:"sh bin/start_fe.sh"})," to start the test FE."]}),"\n",(0,n.jsxs)(t.li,{children:["View the ",(0,n.jsx)(t.strong,{children:"fe.log"})," file of the test FE to check whether the restart is successful."]}),"\n",(0,n.jsxs)(t.li,{children:["If the restart is successful, run ",(0,n.jsx)(t.code,{children:"sh bin/stop_fe.sh"})," to stop the test FE."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"The step 2 through 6 aim to prevent the test FE from connecting to the production environment after a restart."})]})}const d=function(e={}){const{wrapper:t}=Object.assign({},(0,s.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(c,e)})):c(e)}},11151:(e,t,r)=>{r.d(t,{Zo:()=>a,ah:()=>o});var n=r(67294);const s=n.createContext({});function o(e){const t=n.useContext(s);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const i={};function a({components:e,children:t,disableParentContext:r}){let a;return a=r?"function"==typeof e?e({}):e||i:o(e),n.createElement(s.Provider,{value:a},t)}}}]);