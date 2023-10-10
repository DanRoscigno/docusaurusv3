"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[80572],{60791:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>t,toc:()=>a});var r=s(85893),o=s(11151);const i={},c="Check environment configurations",t={id:"deployment/environment_configurations",title:"Check environment configurations",description:"This topic lists all environment and system configuration items that you must check and set before deploying StarRocks. Setting these configuration items properly allows your StarRocks cluster to work with high availability and performance.",source:"@site/versioned_docs/version-3.1/deployment/environment_configurations.md",sourceDirName:"deployment",slug:"/deployment/environment_configurations",permalink:"/docusaurusv3/docs/deployment/environment_configurations",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/deployment/environment_configurations.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"Plan StarRocks cluster",permalink:"/docusaurusv3/docs/deployment/plan_cluster"},next:{title:"Prepare deployment files",permalink:"/docusaurusv3/docs/deployment/prepare_deployment_files"}},l={},a=[{value:"Ports",id:"ports",level:2},{value:"FE ports",id:"fe-ports",level:3},{value:"BE ports",id:"be-ports",level:3},{value:"CN ports",id:"cn-ports",level:3},{value:"Hostnames",id:"hostnames",level:2},{value:"JDK configuration",id:"jdk-configuration",level:2},{value:"CPU scaling governor",id:"cpu-scaling-governor",level:2},{value:"Memory configurations",id:"memory-configurations",level:2},{value:"Memory Overcommit",id:"memory-overcommit",level:3},{value:"Transparent Huge Pages",id:"transparent-huge-pages",level:3},{value:"Swap Space",id:"swap-space",level:3},{value:"Swappiness",id:"swappiness",level:3},{value:"Storage configurations",id:"storage-configurations",level:2},{value:"SATA",id:"sata",level:3},{value:"SSD and NVMe",id:"ssd-and-nvme",level:3},{value:"SELinux",id:"selinux",level:2},{value:"Firewall",id:"firewall",level:2},{value:"LANG variable",id:"lang-variable",level:2},{value:"Time zone",id:"time-zone",level:2},{value:"ulimit configurations",id:"ulimit-configurations",level:2},{value:"Max file descriptors",id:"max-file-descriptors",level:3},{value:"Max user processes",id:"max-user-processes",level:3},{value:"File system configuration",id:"file-system-configuration",level:2},{value:"Network configuration",id:"network-configuration",level:2},{value:"tcp_abort_on_overflow",id:"tcp_abort_on_overflow",level:3},{value:"somaxconn",id:"somaxconn",level:3},{value:"NTP configuration",id:"ntp-configuration",level:2},{value:"High concurrency configurations",id:"high-concurrency-configurations",level:2}];function d(e){const n=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",ul:"ul",li:"li",code:"code",pre:"pre",a:"a",strong:"strong",blockquote:"blockquote",ol:"ol"},(0,o.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"check-environment-configurations",children:"Check environment configurations"}),"\n",(0,r.jsx)(n.p,{children:"This topic lists all environment and system configuration items that you must check and set before deploying StarRocks. Setting these configuration items properly allows your StarRocks cluster to work with high availability and performance."}),"\n",(0,r.jsx)(n.h2,{id:"ports",children:"Ports"}),"\n",(0,r.jsx)(n.p,{children:"StarRocks uses specific ports for different services. Check whether these ports are occupied on each instance if you have deployed other services on these instances."}),"\n",(0,r.jsx)(n.h3,{id:"fe-ports",children:"FE ports"}),"\n",(0,r.jsx)(n.p,{children:"On the instances used for the FE deployment, you need to check the following ports:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"8030"}),": FE HTTP server port (",(0,r.jsx)(n.code,{children:"http_port"}),")"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"9020"}),": FE Thrift server port (",(0,r.jsx)(n.code,{children:"rpc_port"}),")"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"9030"}),": FE MySQL server port (",(0,r.jsx)(n.code,{children:"query_port"}),")"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"9010"}),": FE internal communication port (",(0,r.jsx)(n.code,{children:"edit_log_port"}),")"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Run the following commands on the FE instances to check whether these ports are occupied:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Bash",children:"netstat -tunlp | grep 8030\nnetstat -tunlp | grep 9020\nnetstat -tunlp | grep 9030\nnetstat -tunlp | grep 9010\n"})}),"\n",(0,r.jsxs)(n.p,{children:["If any of the above ports are occupied, you must find alternatives and specify them later when you deploy FE nodes. For detailed instructions, see ",(0,r.jsx)(n.a,{href:"/docusaurusv3/docs/deployment/deploy_manually#step-1-start-the-leader-fe-node",children:"Deploy StarRocks - Start the Leader FE node"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"be-ports",children:"BE ports"}),"\n",(0,r.jsx)(n.p,{children:"On the instances used for the BE deployment, you need to check the following ports:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"9060"}),": BE Thrift server port (",(0,r.jsx)(n.code,{children:"be_port"}),")"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"8040"}),": BE HTTP server port (",(0,r.jsx)(n.code,{children:"be_http_port"}),")"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"9050"}),": BE heartbeat service port (",(0,r.jsx)(n.code,{children:"heartbeat_service_port"}),")"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"8060"}),": BE BRPC port (",(0,r.jsx)(n.code,{children:"brpc_port"}),")"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Run the following commands on the BE instances to check whether these ports are occupied:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Bash",children:"netstat -tunlp | grep 9060\nnetstat -tunlp | grep 8040\nnetstat -tunlp | grep 9050\nnetstat -tunlp | grep 8060\n"})}),"\n",(0,r.jsxs)(n.p,{children:["If any of the above ports are occupied, you must find alternatives and specify them later when you deploy BE nodes. For detailed instructions, see ",(0,r.jsx)(n.a,{href:"/docusaurusv3/docs/deployment/deploy_manually#step-2-start-the-be-service",children:"Deploy StarRocks - Start the BE service"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"cn-ports",children:"CN ports"}),"\n",(0,r.jsx)(n.p,{children:"On the instances used for the CN deployment, you need to check the following ports:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"9060"}),": CN Thrift server port (",(0,r.jsx)(n.code,{children:"be_port"}),") (From v3.1 onwards, this configuration item is renamed from ",(0,r.jsx)(n.code,{children:"thrift_port"})," to ",(0,r.jsx)(n.code,{children:"be_port"}),".)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"8040"}),": CN HTTP server port (",(0,r.jsx)(n.code,{children:"be_http_port"}),")"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"9050"}),": CN heartbeat service port (",(0,r.jsx)(n.code,{children:"heartbeat_service_port"}),")"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"8060"}),": CN BRPC port (",(0,r.jsx)(n.code,{children:"brpc_port"}),")"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Run the following commands on the CN instances to check whether these ports are occupied:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Bash",children:"netstat -tunlp | grep 9060\nnetstat -tunlp | grep 8040\nnetstat -tunlp | grep 9050\nnetstat -tunlp | grep 8060\n"})}),"\n",(0,r.jsxs)(n.p,{children:["If any of the above ports are occupied, you must find alternatives and specify them later when you deploy CN nodes. For detailed instructions, see ",(0,r.jsx)(n.a,{href:"/docusaurusv3/docs/deployment/deploy_manually#step-3-optional-start-the-cn-service",children:"Deploy StarRocks - Start the CN service"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"hostnames",children:"Hostnames"}),"\n",(0,r.jsxs)(n.p,{children:["If you want to ",(0,r.jsx)(n.a,{href:"/docusaurusv3/docs/administration/enable_fqdn",children:"enable FQDN access"})," for your StarRocks cluster, you must assign a hostname to each instance."]}),"\n",(0,r.jsxs)(n.p,{children:["In the file ",(0,r.jsx)(n.strong,{children:"/etc/hosts"})," on each instance, you must specify the IP addresses and corresponding hostnames of all the other instances in the cluster."]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"CAUTION"})}),"\n",(0,r.jsxs)(n.p,{children:["All IP addresses in the file ",(0,r.jsx)(n.strong,{children:"/etc/hosts"})," must be unique."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"jdk-configuration",children:"JDK configuration"}),"\n",(0,r.jsxs)(n.p,{children:["StarRocks relies on the environment variable ",(0,r.jsx)(n.code,{children:"JAVA_HOME"})," to locate the Java dependency on the instance."]}),"\n",(0,r.jsxs)(n.p,{children:["Run the following command to check the environment variable ",(0,r.jsx)(n.code,{children:"JAVA_HOME"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Bash",children:"echo $JAVA_HOME\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Follow these steps to set ",(0,r.jsx)(n.code,{children:"JAVA_HOME"}),":"]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Set ",(0,r.jsx)(n.code,{children:"JAVA_HOME"})," in the file ",(0,r.jsx)(n.strong,{children:"/etc/profile"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Bash",children:"sudo vi /etc/profile\n# Replace <path_to_JDK> with the path where JDK is installed.\nexport JAVA_HOME=<path_to_JDK>\nexport PATH=$PATH:$JAVA_HOME/bin\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Bring the change into effect:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Bash",children:"source /etc/profile\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Run the following command to verify the change:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Bash",children:"java -version\n"})}),"\n",(0,r.jsx)(n.h2,{id:"cpu-scaling-governor",children:"CPU scaling governor"}),"\n",(0,r.jsxs)(n.p,{children:["This configuration item is ",(0,r.jsx)(n.strong,{children:"optional"}),". You can skip it if your CPU does not support the scaling governor."]}),"\n",(0,r.jsxs)(n.p,{children:["The CPU scaling governor controls the CPU power mode. If your CPU supports it, we recommend you set it to ",(0,r.jsx)(n.code,{children:"performance"})," for better CPU performance:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Bash",children:"echo 'performance' | sudo tee /sys/devices/system/cpu/cpu*/cpufreq/scaling_governor\n"})}),"\n",(0,r.jsx)(n.h2,{id:"memory-configurations",children:"Memory configurations"}),"\n",(0,r.jsx)(n.h3,{id:"memory-overcommit",children:"Memory Overcommit"}),"\n",(0,r.jsx)(n.p,{children:"Memory Overcommit allows the operating system to overcommit memory resources to processes. We recommend you enable Memory Overcommit."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Bash",children:"echo 1 | sudo tee /proc/sys/vm/overcommit_memory\n"})}),"\n",(0,r.jsx)(n.h3,{id:"transparent-huge-pages",children:"Transparent Huge Pages"}),"\n",(0,r.jsx)(n.p,{children:"Transparent Huge Pages are enabled by default. We recommend you disable this feature because it can interfere with the memory allocator, and thereby lead to a drop in performance."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Bash",children:"echo 'madvise' | sudo tee /sys/kernel/mm/transparent_hugepage/enabled\n"})}),"\n",(0,r.jsx)(n.h3,{id:"swap-space",children:"Swap Space"}),"\n",(0,r.jsx)(n.p,{children:"We recommend you disable Swap Space."}),"\n",(0,r.jsx)(n.p,{children:"Follow these steps to check and disable Swap Space:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Disable Swap Space."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:"swapoff /<path_to_swap_space>\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Delete the Swap Space information from the configuration file ",(0,r.jsx)(n.strong,{children:"/etc/fstab"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Bash",children:"/<path_to_swap_space> swap swap defaults 0 0\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Verify that Swap Space is disabled."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Bash",children:"free -m\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"swappiness",children:"Swappiness"}),"\n",(0,r.jsx)(n.p,{children:"We recommend you disable swappiness to eliminate its impact on performance."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Bash",children:"echo 0 | sudo tee /proc/sys/vm/swappiness\n"})}),"\n",(0,r.jsx)(n.h2,{id:"storage-configurations",children:"Storage configurations"}),"\n",(0,r.jsx)(n.p,{children:"We recommend that you choose your suitable scheduler algorithm in accordance with the storage medium you use."}),"\n",(0,r.jsx)(n.p,{children:"You can run the following command to check the scheduler algorithm that you are using:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Bash",children:"cat /sys/block/${disk}/queue/scheduler\n# For example, run cat /sys/block/vdb/queue/scheduler\n"})}),"\n",(0,r.jsx)(n.p,{children:"We recommend you use the mq-deadline scheduler for SATA disks and the kyber scheduler algorithm for SSD and NVMe disks."}),"\n",(0,r.jsx)(n.h3,{id:"sata",children:"SATA"}),"\n",(0,r.jsx)(n.p,{children:"The mq-deadline scheduler algorithm suits SATA disks."}),"\n",(0,r.jsx)(n.p,{children:"Modify this item temporarily:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Bash",children:"echo mq-deadline | sudo tee /sys/block/${disk}/queue/scheduler\n"})}),"\n",(0,r.jsx)(n.p,{children:"To make the change permanent, run the following command after you modify this item:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Bash",children:"chmod +x /etc/rc.d/rc.local\n"})}),"\n",(0,r.jsx)(n.h3,{id:"ssd-and-nvme",children:"SSD and NVMe"}),"\n",(0,r.jsx)(n.p,{children:"The kyber scheduler algorithm suits NVMe or SSD disks."}),"\n",(0,r.jsx)(n.p,{children:"Modify this item temporarily:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Bash",children:"echo kyber | sudo tee /sys/block/${disk}/queue/scheduler\n"})}),"\n",(0,r.jsx)(n.p,{children:"If your system does not support the kyber scheduler for SSD and NVMe, we recommend you use the none (or noop) scheduler."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Bash",children:"echo none | sudo tee /sys/block/${disk}/queue/scheduler\n"})}),"\n",(0,r.jsx)(n.p,{children:"To make the change permanent, run the following command after you modify this item:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Bash",children:"chmod +x /etc/rc.d/rc.local\n"})}),"\n",(0,r.jsx)(n.h2,{id:"selinux",children:"SELinux"}),"\n",(0,r.jsx)(n.p,{children:"We recommend you disable SELinux."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Bash",children:"sed -i 's/SELINUX=.*/SELINUX=disabled/' /etc/selinux/config\nsed -i 's/SELINUXTYPE/#SELINUXTYPE/' /etc/selinux/config\nsetenforce 0 \n"})}),"\n",(0,r.jsx)(n.h2,{id:"firewall",children:"Firewall"}),"\n",(0,r.jsx)(n.p,{children:"Open the internal ports for FE nodes, BE nodes, and Broker if your firewall is enabled."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Bash",children:"systemctl stop firewalld.service\nsystemctl disable firewalld.service\n"})}),"\n",(0,r.jsx)(n.h2,{id:"lang-variable",children:"LANG variable"}),"\n",(0,r.jsx)(n.p,{children:"Run the following command to check and configure the LANG variable manually:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Bash",children:'echo "export LANG=en_US.UTF8" >> /etc/profile\nsource /etc/profile\n'})}),"\n",(0,r.jsx)(n.h2,{id:"time-zone",children:"Time zone"}),"\n",(0,r.jsx)(n.p,{children:"Set this item in accordance with your actual time zone."}),"\n",(0,r.jsxs)(n.p,{children:["The following example sets the time zone to ",(0,r.jsx)(n.code,{children:"/Asia/Shanghai"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Bash",children:"cp -f /usr/share/zoneinfo/Asia/Shanghai /etc/localtime\nhwclock\n"})}),"\n",(0,r.jsx)(n.h2,{id:"ulimit-configurations",children:"ulimit configurations"}),"\n",(0,r.jsxs)(n.p,{children:["Problems can occur with StarRocks if the values of ",(0,r.jsx)(n.strong,{children:"max file descriptors"})," and ",(0,r.jsx)(n.strong,{children:"max user processes"})," are abnormally small."]}),"\n",(0,r.jsx)(n.h3,{id:"max-file-descriptors",children:"Max file descriptors"}),"\n",(0,r.jsx)(n.p,{children:"You can set the maximum number of file descriptors by running the following command:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Bash",children:"ulimit -n 65535\n"})}),"\n",(0,r.jsx)(n.h3,{id:"max-user-processes",children:"Max user processes"}),"\n",(0,r.jsx)(n.p,{children:"You can set the maximum number of user processes by running the following command:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Bash",children:"ulimit -u 40960\n"})}),"\n",(0,r.jsx)(n.h2,{id:"file-system-configuration",children:"File system configuration"}),"\n",(0,r.jsx)(n.p,{children:"We recommend you use the ext4 or xfs journaling file system. You can run the following command to check the mount type:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Bash",children:"df -Th\n"})}),"\n",(0,r.jsx)(n.h2,{id:"network-configuration",children:"Network configuration"}),"\n",(0,r.jsx)(n.h3,{id:"tcp_abort_on_overflow",children:"tcp_abort_on_overflow"}),"\n",(0,r.jsx)(n.p,{children:"Allow the system to reset new connections if the system is currently overflowed with new connection attempts that the daemon(s) can not handle:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Bash",children:"echo 1 | sudo tee /proc/sys/net/ipv4/tcp_abort_on_overflow\n"})}),"\n",(0,r.jsx)(n.h3,{id:"somaxconn",children:"somaxconn"}),"\n",(0,r.jsxs)(n.p,{children:["Specify the maximum number of connection requests queued for any listening socket to ",(0,r.jsx)(n.code,{children:"1024"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Bash",children:"echo 1024 | sudo tee /proc/sys/net/core/somaxconn\n"})}),"\n",(0,r.jsx)(n.h2,{id:"ntp-configuration",children:"NTP configuration"}),"\n",(0,r.jsx)(n.p,{children:"You must configure time synchronization between nodes within your StarRocks cluster to ensure linear consistency of transactions. You can either use the internet time service provided by pool.ntp.org, or use the NTP service built in an offline environment. For example, you can use the NTP service provided by your cloud service provider."}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Check if the NTP time server exists."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Bash",children:"rpm -qa | grep ntp\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Install the NTP service if there is not one."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Bash",children:"sudo yum install ntp ntpdate && \\\nsudo systemctl start ntpd.service && \\\nsudo systemctl enable ntpd.service\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Check the NTP service."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Bash",children:"systemctl list-unit-files | grep ntp\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Check the connectivity and monitoring status of the NTP service."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Bash",children:"netstat -tlunp | grep ntp\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Check if your application is synchronized with the NTP server."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Bash",children:"ntpstat\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Check the state of all the configured NTP servers in your network."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Bash",children:"ntpq -p\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"high-concurrency-configurations",children:"High concurrency configurations"}),"\n",(0,r.jsx)(n.p,{children:"If your StarRocks cluster has a high load concurrency, we recommend you set the following configurations:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Bash",children:"echo 120000 > /proc/sys/kernel/threads-max\necho 262144 > /proc/sys/vm/max_map_count\necho 200000 > /proc/sys/kernel/pid_max\n"})})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,o.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(d,e)})):d(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>t,ah:()=>i});var r=s(67294);const o=r.createContext({});function i(e){const n=r.useContext(o);return r.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const c={};function t({components:e,children:n,disableParentContext:s}){let t;return t=s?"function"==typeof e?e({}):e||c:i(e),r.createElement(o.Provider,{value:t},n)}}}]);