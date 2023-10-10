"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[56852],{77953:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>t,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var s=n(85893),d=n(11151);const o={},t="Deploy and manage Broker node",i={id:"deployment/deploy_broker",title:"Deploy and manage Broker node",description:"This topic describes how to deploy Broker nodes. With Broker nodes, StarRocks can read data from sources such as HDFS and S3, and pre-process, load, and backup the data with its own computing resources.",source:"@site/versioned_docs/version-3.0/deployment/deploy_broker.md",sourceDirName:"deployment",slug:"/deployment/deploy_broker",permalink:"/docusaurusv3/docs/3.0/deployment/deploy_broker",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/deployment/deploy_broker.md",tags:[],version:"3.0",frontMatter:{},sidebar:"documentation",previous:{title:"File external table",permalink:"/docusaurusv3/docs/3.0/data_source/file_external_table"},next:{title:"Deploy StarRocks manually",permalink:"/docusaurusv3/docs/3.0/deployment/deploy_manually"}},l={},c=[{value:"Before you begin",id:"before-you-begin",level:2},{value:"Start Broker service",id:"start-broker-service",level:2},{value:"Add Broker node to cluster",id:"add-broker-node-to-cluster",level:2},{value:"Stop Broker node",id:"stop-broker-node",level:2},{value:"Upgrade Broker node",id:"upgrade-broker-node",level:2},{value:"Downgrade Broker node",id:"downgrade-broker-node",level:2}];function a(e){const r=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",a:"a",ol:"ol",li:"li",strong:"strong",pre:"pre",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",blockquote:"blockquote",ul:"ul"},(0,d.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h1,{id:"deploy-and-manage-broker-node",children:"Deploy and manage Broker node"}),"\n",(0,s.jsx)(r.p,{children:"This topic describes how to deploy Broker nodes. With Broker nodes, StarRocks can read data from sources such as HDFS and S3, and pre-process, load, and backup the data with its own computing resources."}),"\n",(0,s.jsxs)(r.p,{children:["We recommend you deploy ONE Broker node on each instance that hosts a BE node, and add all Broker nodes using the same ",(0,s.jsx)(r.code,{children:"broker_name"}),". Broker nodes automatically balance the data transmission load when processing tasks."]}),"\n",(0,s.jsx)(r.p,{children:"Broker nodes use the network connection to transmit data to BE nodes. When a Broker node and a BE node are deployed on the same machine, the Broker node transmit the data to the local BE node."}),"\n",(0,s.jsx)(r.h2,{id:"before-you-begin",children:"Before you begin"}),"\n",(0,s.jsxs)(r.p,{children:["Make sure you have completed the required configurations by following the instructions provided in ",(0,s.jsx)(r.a,{href:"/docusaurusv3/docs/3.0/deployment/deployment_prerequisites",children:"Deployment prerequisites"}),", ",(0,s.jsx)(r.a,{href:"/docusaurusv3/docs/3.0/deployment/environment_configurations",children:"Check environment configurations"}),", and ",(0,s.jsx)(r.a,{href:"/docusaurusv3/docs/3.0/deployment/prepare_deployment_files",children:"Prepare deployment files"}),"."]}),"\n",(0,s.jsx)(r.h2,{id:"start-broker-service",children:"Start Broker service"}),"\n",(0,s.jsx)(r.p,{children:"The following procedures are performed on the BE instances."}),"\n",(0,s.jsxs)(r.ol,{children:["\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsxs)(r.p,{children:["Navigate to the directory that stores the ",(0,s.jsx)(r.a,{href:"/docusaurusv3/docs/3.0/deployment/prepare_deployment_files",children:"StarRocks Broker deployment files"})," you prepared earlier, and modify the Broker configuration file ",(0,s.jsx)(r.strong,{children:"apache_hdfs_broker/conf/apache_hdfs_broker.conf"}),"."]}),"\n",(0,s.jsxs)(r.p,{children:["If the HDFS Thrift RPC port (",(0,s.jsx)(r.code,{children:"broker_ipc_port"}),", Default: ",(0,s.jsx)(r.code,{children:"8000"}),") on the instance is occupied, you must assign a valid alternative in the Broker configuration file."]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-YAML",children:"broker_ipc_port = aaaa        # Default: 8000\n"})}),"\n",(0,s.jsx)(r.p,{children:"The following table lists the configuration items supported by Broker."}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Configuration item"}),(0,s.jsx)(r.th,{children:"Default"}),(0,s.jsx)(r.th,{children:"Unit"}),(0,s.jsx)(r.th,{children:"Description"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"hdfs_read_buffer_size_kb"}),(0,s.jsx)(r.td,{children:"8192"}),(0,s.jsx)(r.td,{children:"KB"}),(0,s.jsx)(r.td,{children:"Size of the buffer that is used to read data from HDFS."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"hdfs_write_buffer_size_kb"}),(0,s.jsx)(r.td,{children:"1024"}),(0,s.jsx)(r.td,{children:"KB"}),(0,s.jsx)(r.td,{children:"Size of the buffer that is used to write data into HDFS."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"client_expire_seconds"}),(0,s.jsx)(r.td,{children:"300"}),(0,s.jsx)(r.td,{children:"Second"}),(0,s.jsx)(r.td,{children:"Client sessions will be deleted if they do not receive any ping after the specified time."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"broker_ipc_port"}),(0,s.jsx)(r.td,{children:"8000"}),(0,s.jsx)(r.td,{children:"N/A"}),(0,s.jsx)(r.td,{children:"The HDFS thrift RPC port."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"disable_broker_client_expiration_checking"}),(0,s.jsx)(r.td,{children:"false"}),(0,s.jsx)(r.td,{children:"N/A"}),(0,s.jsxs)(r.td,{children:["Whether to disable the checking and clearing of the expired OSS file descriptors, which, in some cases, causes the broker to stuck when OSS is close. To avoid this situation, you can set this parameter to ",(0,s.jsx)(r.code,{children:"true"})," to disable the checking."]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"sys_log_dir"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"${BROKER_HOME}/log"})}),(0,s.jsx)(r.td,{children:"N/A"}),(0,s.jsx)(r.td,{children:"The directory used to store system logs (including INFO, WARNING, ERROR, and FATAL)."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"sys_log_level"}),(0,s.jsx)(r.td,{children:"INFO"}),(0,s.jsx)(r.td,{children:"N/A"}),(0,s.jsx)(r.td,{children:"The log level. Valid values include INFO, WARNING, ERROR, and FATAL."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"sys_log_roll_mode"}),(0,s.jsx)(r.td,{children:"SIZE-MB-1024"}),(0,s.jsx)(r.td,{children:"N/A"}),(0,s.jsx)(r.td,{children:"The mode how system logs are segmented into log rolls. Valid values include TIME-DAY, TIME-HOUR, and SIZE-MB-nnn. The default value indicates that logs are segmented into rolls which are 1 GB each."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"sys_log_roll_num"}),(0,s.jsx)(r.td,{children:"30"}),(0,s.jsx)(r.td,{children:"N/A"}),(0,s.jsx)(r.td,{children:"The number of log rolls to reserve."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"audit_log_dir"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"${BROKER_HOME}/log"})}),(0,s.jsx)(r.td,{children:"N/A"}),(0,s.jsx)(r.td,{children:"The directory that stores audit log files."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"audit_log_modules"}),(0,s.jsx)(r.td,{children:"Empty string"}),(0,s.jsx)(r.td,{children:"N/A"}),(0,s.jsx)(r.td,{children:"The modules for which StarRocks generates audit log entries. By default, StarRocks generates audit logs for the slow_query module and the query module. You can specify multiple modules, whose names must be separated by a comma (,) and a space."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"audit_log_roll_mode"}),(0,s.jsx)(r.td,{children:"TIME-DAY"}),(0,s.jsx)(r.td,{children:"N/A"}),(0,s.jsxs)(r.td,{children:["Valid values include ",(0,s.jsx)(r.code,{children:"TIME-DAY"}),", ",(0,s.jsx)(r.code,{children:"TIME-HOUR"}),", and ",(0,s.jsx)(r.code,{children:"SIZE-MB-<size>"}),"."]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"audit_log_roll_num"}),(0,s.jsx)(r.td,{children:"10"}),(0,s.jsx)(r.td,{children:"N/A"}),(0,s.jsxs)(r.td,{children:["This configuration does not work if the audit_log_roll_mode is set to ",(0,s.jsx)(r.code,{children:"SIZE-MB-<size>"}),"."]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"sys_log_verbose_modules"}),(0,s.jsx)(r.td,{children:"com.starrocks"}),(0,s.jsx)(r.td,{children:"N/A"}),(0,s.jsxs)(r.td,{children:["The modules for which StarRocks generates system logs. Valid values are namespaces in BE, including ",(0,s.jsx)(r.code,{children:"starrocks"}),", ",(0,s.jsx)(r.code,{children:"starrocks::debug"}),", ",(0,s.jsx)(r.code,{children:"starrocks::fs"}),", ",(0,s.jsx)(r.code,{children:"starrocks::io"}),", ",(0,s.jsx)(r.code,{children:"starrocks::lake"}),", ",(0,s.jsx)(r.code,{children:"starrocks::pipeline"}),", ",(0,s.jsx)(r.code,{children:"starrocks::query_cache"}),", ",(0,s.jsx)(r.code,{children:"starrocks::stream"}),", and ",(0,s.jsx)(r.code,{children:"starrocks::workgroup"}),"."]})]})]})]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:"Start the Broker node."}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-bash",children:"./apache_hdfs_broker/bin/start_broker.sh --daemon\n"})}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:"Check the Broker logs to verify if the Broker node is started successfully."}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-Bash",children:"cat apache_hdfs_broker/log/apache_hdfs_broker.log | grep thrift\n"})}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:"You can start new Broker nodes by repeating the above procedures on other instances."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"add-broker-node-to-cluster",children:"Add Broker node to cluster"}),"\n",(0,s.jsx)(r.p,{children:"The following procedures are performed on a MySQL client. You must have MySQL client 5.5.0 or later installed."}),"\n",(0,s.jsxs)(r.ol,{children:["\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsxs)(r.p,{children:["Connect to StarRocks via your MySQL client. You need to log in with the initial account ",(0,s.jsx)(r.code,{children:"root"}),", and the password is empty by default."]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-Bash",children:"# Replace <fe_address> with the IP address (priority_networks) or FQDN \n# of the FE node you connect to, and replace <query_port> (Default: 9030) \n# with the query_port you specified in fe.conf.\nmysql -h <fe_address> -P<query_port> -uroot\n"})}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:"Run the following command to add the Broker node to the cluster."}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-sql",children:'ALTER SYSTEM ADD BROKER <broker_name> "<broker_address>:<broker_ipc_port>";\n'})}),"\n",(0,s.jsxs)(r.blockquote,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"NOTE"})}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["You can use the preceding command to add multiple Broker nodes at a time. Each ",(0,s.jsx)(r.code,{children:"<broker_address>:<broker_ipc_port>"})," pair represents one Broker node."]}),"\n",(0,s.jsxs)(r.li,{children:["You can add multiple Brokers nodes with the same ",(0,s.jsx)(r.code,{children:"broker_name"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:"Verify if the Broker node is properly added to the via MySQL client."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-sql",children:'SHOW PROC "/brokers"\\G\n'})}),"\n",(0,s.jsx)(r.p,{children:"Example:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-plain",metastring:"text",children:'MySQL [(none)]> SHOW PROC "/brokers"\\G\n*************************** 1. row ***************************\n          Name: broker1\n            IP: x.x.x.x\n          Port: 8000\n         Alive: true\n LastStartTime: 2022-05-19 11:21:36\nLastUpdateTime: 2022-05-19 11:28:31\n        ErrMsg:\n1 row in set (0.00 sec)\n'})}),"\n",(0,s.jsxs)(r.p,{children:["When the field ",(0,s.jsx)(r.code,{children:"Alive"})," is ",(0,s.jsx)(r.code,{children:"true"}),", this Broker is properly started and added to the cluster."]}),"\n",(0,s.jsx)(r.h2,{id:"stop-broker-node",children:"Stop Broker node"}),"\n",(0,s.jsx)(r.p,{children:"Run the following command to stop the Broker node."}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-bash",children:"./bin/stop_broker.sh --daemon\n"})}),"\n",(0,s.jsx)(r.h2,{id:"upgrade-broker-node",children:"Upgrade Broker node"}),"\n",(0,s.jsxs)(r.ol,{children:["\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:"Navigate to the working directory of the Broker node and stop the node."}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-Bash",children:"# Replace <broker_dir> with the deployment directory of the Broker node.\ncd <broker_dir>/apache_hdfs_broker\nsh bin/stop_broker.sh\n"})}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsxs)(r.p,{children:["Replace the original deployment files under ",(0,s.jsx)(r.strong,{children:"bin"})," and ",(0,s.jsx)(r.strong,{children:"lib"})," with the ones of the new version."]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-Bash",children:"mv lib lib.bak \nmv bin bin.bak\ncp -r /tmp/StarRocks-x.x.x/apache_hdfs_broker/lib  .   \ncp -r /tmp/StarRocks-x.x.x/apache_hdfs_broker/bin  .\n"})}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:"Start the Broker node."}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-Bash",children:"sh bin/start_broker.sh --daemon\n"})}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:"Check if the Broker node is started successfully."}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-Bash",children:"ps aux | grep broker\n"})}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:"Repeat the above procedures to upgrade other Broker nodes."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"downgrade-broker-node",children:"Downgrade Broker node"}),"\n",(0,s.jsxs)(r.ol,{children:["\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:"Navigate to the working directory of the Broker node and stop the node."}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-Bash",children:"# Replace <broker_dir> with the deployment directory of the Broker node.\ncd <broker_dir>/apache_hdfs_broker\nsh bin/stop_broker.sh\n"})}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsxs)(r.p,{children:["Replace the original deployment files under ",(0,s.jsx)(r.strong,{children:"bin"})," and ",(0,s.jsx)(r.strong,{children:"lib"})," with the ones of the earlier version."]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-Bash",children:"mv lib lib.bak \nmv bin bin.bak\ncp -r /tmp/StarRocks-x.x.x/apache_hdfs_broker/lib  .   \ncp -r /tmp/StarRocks-x.x.x/apache_hdfs_broker/bin  .\n"})}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:"Start the Broker node."}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-Bash",children:"sh bin/start_broker.sh --daemon\n"})}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:"Check if the Broker node is started successfully."}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-Bash",children:"ps aux | grep broker\n"})}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:"Repeat the above procedures to downgrade other Broker nodes."}),"\n"]}),"\n"]})]})}const h=function(e={}){const{wrapper:r}=Object.assign({},(0,d.ah)(),e.components);return r?(0,s.jsx)(r,Object.assign({},e,{children:(0,s.jsx)(a,e)})):a(e)}},11151:(e,r,n)=>{n.d(r,{Zo:()=>i,ah:()=>o});var s=n(67294);const d=s.createContext({});function o(e){const r=s.useContext(d);return s.useMemo((()=>"function"==typeof e?e(r):{...r,...e}),[r,e])}const t={};function i({components:e,children:r,disableParentContext:n}){let i;return i=n?"function"==typeof e?e({}):e||t:o(e),s.createElement(d.Provider,{value:i},r)}}}]);