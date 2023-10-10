"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[9149],{92799:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>t,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var a=o(85893),r=o(11151);const l={},s="Load Balancing",i={id:"administration/Load_balance",title:"Load Balancing",description:"When deploying multiple FE nodes, users can deploy a load balancing layer on top of the  FEs to achieve high availability.",source:"@site/versioned_docs/version-3.1/administration/Load_balance.md",sourceDirName:"administration",slug:"/administration/Load_balance",permalink:"/doc/docs/administration/Load_balance",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/administration/Load_balance.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"Spill to disk",permalink:"/doc/docs/administration/spill_to_disk"},next:{title:"Replica management",permalink:"/doc/docs/administration/Replica"}},t={},d=[{value:"Code approach",id:"code-approach",level:2},{value:"JDBC Connector",id:"jdbc-connector",level:2},{value:"ProxySQL",id:"proxysql",level:2},{value:"1. Install relevant dependencies",id:"1-install-relevant-dependencies",level:3},{value:"2. Download the installation package",id:"2-download-the-installation-package",level:3},{value:"3. Decompress to the current directory",id:"3-decompress-to-the-current-directory",level:3},{value:"4. Modify the configuration file",id:"4-modify-the-configuration-file",level:3},{value:"5. Start",id:"5-start",level:3},{value:"6. Log in",id:"6-log-in",level:3},{value:"7. Configure the global log",id:"7-configure-the-global-log",level:3},{value:"8. Insert into the leader node",id:"8-insert-into-the-leader-node",level:3},{value:"9. Insert the observer nodes",id:"9-insert-the-observer-nodes",level:3},{value:"10. Load the configuration",id:"10-load-the-configuration",level:3},{value:"11. Configure the username and password",id:"11-configure-the-username-and-password",level:3},{value:"12. Load the configuration",id:"12-load-the-configuration",level:3},{value:"13. Write to the proxy rules",id:"13-write-to-the-proxy-rules",level:3},{value:"14. Load the configuration",id:"14-load-the-configuration",level:3}];function c(e){const n=Object.assign({h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code",h3:"h3"},(0,r.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"load-balancing",children:"Load Balancing"}),"\n",(0,a.jsx)(n.p,{children:"When deploying multiple FE nodes, users can deploy a load balancing layer on top of the  FEs to achieve high availability."}),"\n",(0,a.jsx)(n.p,{children:"The following are some high availability options:"}),"\n",(0,a.jsx)(n.h2,{id:"code-approach",children:"Code approach"}),"\n",(0,a.jsx)(n.p,{children:"One way is to implement code at the application layer to perform retry and load balancing . For example, if a connection is broken, it will automatically retry on other connections. This approach requires users to configure multiple FE node addresses."}),"\n",(0,a.jsx)(n.h2,{id:"jdbc-connector",children:"JDBC Connector"}),"\n",(0,a.jsx)(n.p,{children:"JDBC connector supports automatic retry:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"jdbc:mysql:loadbalance://[host1][:port],[host2][:port][,[host3][:port]]...[/[database]][?propertyName1=propertyValue1[&propertyName2=propertyValue2]...]\n"})}),"\n",(0,a.jsx)(n.h2,{id:"proxysql",children:"ProxySQL"}),"\n",(0,a.jsx)(n.p,{children:"ProxySQL is a MySQL proxy layer that supports read/write separation, query routing, SQL caching, dynamic load configuration, failover, and SQL filtering."}),"\n",(0,a.jsx)(n.p,{children:"StarRocks FE is responsible for receiving connection and query requests, and it\u2019s horizontally scalable and highly available. However FE requires users to set up a proxy layer on top of it to achieve automatic load balancing. See the following steps for setup:"}),"\n",(0,a.jsx)(n.h3,{id:"1-install-relevant-dependencies",children:"1. Install relevant dependencies"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"yum install -y gnutls perl-DBD-MySQL perl-DBI perl-devel\n"})}),"\n",(0,a.jsx)(n.h3,{id:"2-download-the-installation-package",children:"2. Download the installation package"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"wget https://github.com/sysown/proxysql/releases/download/v2.0.14/proxysql-2.0.14-1-centos7.x86_64.rpm\n"})}),"\n",(0,a.jsx)(n.h3,{id:"3-decompress-to-the-current-directory",children:"3. Decompress to the current directory"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"rpm2cpio proxysql-2.0.14-1-centos7.x86_64.rpm | cpio -ivdm\n"})}),"\n",(0,a.jsx)(n.h3,{id:"4-modify-the-configuration-file",children:"4. Modify the configuration file"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"vim ./etc/proxysql.cnf \n"})}),"\n",(0,a.jsx)(n.p,{children:"Direct to a directory that the user has privilege to access (absolute path):"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-vim",children:'datadir="/var/lib/proxysql"\nerrorlog="/var/lib/proxysql/proxysql.log"\n'})}),"\n",(0,a.jsx)(n.h3,{id:"5-start",children:"5. Start"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"./usr/bin/proxysql -c ./etc/proxysql.cnf --no-monitor\n"})}),"\n",(0,a.jsx)(n.h3,{id:"6-log-in",children:"6. Log in"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"mysql -u admin -padmin -h 127.0.0.1 -P6032\n"})}),"\n",(0,a.jsx)(n.h3,{id:"7-configure-the-global-log",children:"7. Configure the global log"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"SET mysql-eventslog_filename='proxysql_queries.log';\nSET mysql-eventslog_default_log=1;\nSET mysql-eventslog_format=2;\nLOAD MYSQL VARIABLES TO RUNTIME;\nSAVE MYSQL VARIABLES TO DISK;\n"})}),"\n",(0,a.jsx)(n.h3,{id:"8-insert-into-the-leader-node",children:"8. Insert into the leader node"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"insert into mysql_servers(hostgroup_id, hostname, port) values(1, '172.26.92.139', 8533);\n"})}),"\n",(0,a.jsx)(n.h3,{id:"9-insert-the-observer-nodes",children:"9. Insert the observer nodes"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"insert into mysql_servers(hostgroup_id, hostname, port) values(2, '172.26.34.139', 9931);\ninsert into mysql_servers(hostgroup_id, hostname, port) values(2, '172.26.34.140', 9931);\n"})}),"\n",(0,a.jsx)(n.h3,{id:"10-load-the-configuration",children:"10. Load the configuration"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"load mysql servers to runtime;\nsave mysql servers to disk;\n"})}),"\n",(0,a.jsx)(n.h3,{id:"11-configure-the-username-and-password",children:"11. Configure the username and password"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"insert into mysql_users(username, password, active, default_hostgroup, backend, frontend) values('root', '*94BDCEBE19083CE2A1F959FD02F964C7AF4CFC29', 1, 1, 1, 1);\n"})}),"\n",(0,a.jsx)(n.h3,{id:"12-load-the-configuration",children:"12. Load the configuration"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"load mysql users to runtime; \nsave mysql users to disk;\n"})}),"\n",(0,a.jsx)(n.h3,{id:"13-write-to-the-proxy-rules",children:"13. Write to the proxy rules"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"insert into mysql_query_rules(rule_id, active, match_digest, destination_hostgroup, mirror_hostgroup, apply) values(1, 1, '.', 1, 2, 1);\n"})}),"\n",(0,a.jsx)(n.h3,{id:"14-load-the-configuration",children:"14. Load the configuration"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"load mysql query rules to runtime; \nsave mysql query rules to disk;\n"})})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,a.jsx)(n,Object.assign({},e,{children:(0,a.jsx)(c,e)})):c(e)}},11151:(e,n,o)=>{o.d(n,{Zo:()=>i,ah:()=>l});var a=o(67294);const r=a.createContext({});function l(e){const n=a.useContext(r);return a.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const s={};function i({components:e,children:n,disableParentContext:o}){let i;return i=o?"function"==typeof e?e({}):e||s:l(e),a.createElement(r.Provider,{value:i},n)}}}]);