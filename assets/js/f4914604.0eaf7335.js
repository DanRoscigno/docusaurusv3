"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[42279],{25171:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var t=a(85893),s=a(11151);const r={},o="Introduction",i={id:"loading/Json_loading",title:"Introduction",description:"You can import semi-structured data (for example, JSON) by using stream load or routine load.",source:"@site/versioned_docs/version-2.5/loading/Json_loading.md",sourceDirName:"loading",slug:"/loading/Json_loading",permalink:"/doc/docs/2.5/loading/Json_loading",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-2.5/loading/Json_loading.md",tags:[],version:"2.5",frontMatter:{}},l={},c=[{value:"Use Scenarios",id:"use-scenarios",level:2},{value:"Stream Load Import",id:"stream-load-import",level:3},{value:"Routine Load Import",id:"routine-load-import",level:3},{value:"Use Canal to import StarRocks from MySQL with incremental sync binlogs",id:"use-canal-to-import-starrocks-from-mysql-with-incremental-sync-binlogs",level:3}];function d(e){const n=Object.assign({h1:"h1",p:"p",h2:"h2",ul:"ul",li:"li",h3:"h3",pre:"pre",code:"code",ol:"ol",a:"a"},(0,s.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"introduction",children:"Introduction"}),"\n",(0,t.jsx)(n.p,{children:"You can import semi-structured data (for example, JSON) by using stream load or routine load."}),"\n",(0,t.jsx)(n.h2,{id:"use-scenarios",children:"Use Scenarios"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Stream Load: For JSON data stored in text files, use stream load to import."}),"\n",(0,t.jsx)(n.li,{children:"Routine Load: For JSON data in Kafka, use routine load to import."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"stream-load-import",children:"Stream Load Import"}),"\n",(0,t.jsx)(n.p,{children:"Sample data:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{ "id": 123, "city" : "beijing"},\n{ "id": 456, "city" : "shanghai"},\n    ...\n'})}),"\n",(0,t.jsx)(n.p,{children:"Example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:'curl -v --location-trusted -u <username>:<password> \\\n    -H "format: json" -H "jsonpaths: [\\"$.id\\", \\"$.city\\"]" \\\n    -T example.json \\\n    http://FE_HOST:HTTP_PORT/api/DATABASE/TABLE/_stream_load\n'})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"format: json"})," parameter allows you to execute the format of the imported data. ",(0,t.jsx)(n.code,{children:"jsonpaths"})," is used to execute the corresponding data import path."]}),"\n",(0,t.jsx)(n.p,{children:"Related parameters:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"jsonpaths: Select the JSON path for each column"}),"\n",(0,t.jsx)(n.li,{children:"json_root: Select the column where the JSON starts to be parsed"}),"\n",(0,t.jsx)(n.li,{children:"strip_outer_array: Crop the outermost array field"}),"\n",(0,t.jsx)(n.li,{children:"strict_mode: Strictly filter for column type conversion during import"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["When the JSON data schema and StarRocks data schema are not exactly the same, modify the ",(0,t.jsx)(n.code,{children:"Jsonpath"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Sample data:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{"k1": 1, "k2": 2}\n'})}),"\n",(0,t.jsx)(n.p,{children:"Import example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'curl -v --location-trusted -u <username>:<password> \\\n    -H "format: json" -H "jsonpaths: [\\"$.k2\\", \\"$.k1\\"]" \\\n    -H "columns: k2, tmp_k1, k1 = tmp_k1 * 100" \\\n    -T example.json \\\n    http://127.0.0.1:8030/api/db1/tbl1/_stream_load\n'})}),"\n",(0,t.jsxs)(n.p,{children:["The ETL operation of multiplying k1 by 100 is performed during the import, and the column is matched with the original data by ",(0,t.jsx)(n.code,{children:"Jsonpath"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"The import results are as follows:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plain",metastring:"text",children:"+------+------+\n| k1   | k2   |\n+------+------+\n|  100 |    2 |\n+------+------+\n"})}),"\n",(0,t.jsxs)(n.p,{children:["For missing columns, if the column definition is nullable, then ",(0,t.jsx)(n.code,{children:"NULL"})," will be added, or the default value can be added by ",(0,t.jsx)(n.code,{children:"ifnull"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Sample data:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'[\n    {"k1": 1, "k2": "a"},\n    {"k1": 2},\n    {"k1": 3, "k2": "c"},\n]\n'})}),"\n",(0,t.jsx)(n.p,{children:"Import Example-1:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:'curl -v --location-trusted -u <username>:<password> \\\n    -H "format: json" -H "strip_outer_array: true" \\\n    -T example.json \\\n    http://127.0.0.1:8030/api/db1/tbl1/_stream_load\n'})}),"\n",(0,t.jsx)(n.p,{children:"The import results are as follows:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plain",metastring:"text",children:"+------+------+\n| k1   | k2   |\n+------+------+\n|    1 | a    |\n+------+------+\n|    2 | NULL |\n+------+------+\n|    3 | c    |\n+------+------+\n"})}),"\n",(0,t.jsx)(n.p,{children:"Import Example-2:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:'curl -v --location-trusted -u <username>:<password> \\\n    -H "format: json" -H "strip_outer_array: true" \\\n    -H "jsonpaths: [\\"$.k1\\", \\"$.k2\\"]" \\\n    -H "columns: k1, tmp_k2, k2 = ifnull(tmp_k2, \'x\')" \\\n    -T example.json \\\n    http://127.0.0.1:8030/api/db1/tbl1/_stream_load\n'})}),"\n",(0,t.jsx)(n.p,{children:"The import results are as follows:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plain",metastring:"text",children:"+------+------+\n| k1   | k2   |\n+------+------+\n|    1 | a    |\n+------+------+\n|    2 | x    |\n+------+------+\n|    3 | c    |\n+------+------+\n"})}),"\n",(0,t.jsx)(n.h3,{id:"routine-load-import",children:"Routine Load Import"}),"\n",(0,t.jsx)(n.p,{children:"Similar to stream load, the message content of Kafka data sources is treated as a complete JSON data."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"If a message contains multiple rows of data in array format, all rows will be imported and Kafka's offset will only be incremented by 1."}),"\n",(0,t.jsx)(n.li,{children:"If a JSON in Array format represents multiple rows of data, but the parsing of the JSON fails due to a JSON format error, the error row will only be incremented by 1 (given that the parsing fails, StarRocks cannot actually determine how many rows of data it contains, and can only record the error data as one row)."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"use-canal-to-import-starrocks-from-mysql-with-incremental-sync-binlogs",children:"Use Canal to import StarRocks from MySQL with incremental sync binlogs"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://github.com/alibaba/canal",children:"Canal"})," is an open-source MySQL binlog synchronization tool from Alibaba, through which we can synchronize MySQL data to Kafka. The data is generated in JSON format in Kafka. Here is a demonstration of how to use routine load to synchronize data in Kafka for incremental data synchronization with MySQL."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"In MySQL we have a data table with the following table creation statement."}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE `query_record` (\n  `query_id` varchar(64) NOT NULL,\n  `conn_id` int(11) DEFAULT NULL,\n  `fe_host` varchar(32) DEFAULT NULL,\n  `user` varchar(32) DEFAULT NULL,\n  `start_time` datetime NOT NULL,\n  `end_time` datetime DEFAULT NULL,\n  `time_used` double DEFAULT NULL,\n  `state` varchar(16) NOT NULL,\n  `error_message` text,\n  `sql` text NOT NULL,\n  `database` varchar(128) NOT NULL,\n  `profile` longtext,\n  `plan` longtext,\n  PRIMARY KEY (`query_id`),\n  KEY `idx_start_time` (`start_time`) USING BTREE\n) ENGINE=InnoDB DEFAULT CHARSET=utf8\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Prerequisite: Make sure MySQL has binlog enabled and the format is ROW."}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"[mysqld]\nlog-bin=mysql-bin # Enable binlog\nbinlog-format=ROW # Select ROW mode\nserver_id=1 # MySQL replication need to be defined, and do not duplicate canal's slaveId\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Create an account and grant privileges to the secondary MySQL server:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"CREATE USER canal IDENTIFIED BY 'canal';\nGRANT SELECT, REPLICATION SLAVE, REPLICATION CLIENT ON *.* TO 'canal'@'%';\n-- GRANT ALL PRIVILEGES ON *.* TO 'canal'@'%';\nFLUSH PRIVILEGES;\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Then download and install Canal."}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"wget https://github.com/alibaba/canal/releases/download/canal-1.0.17/canal.deployer-1.0.17.tar.gz\n\nmkdir /tmp/canal\ntar zxvf canal.deployer-$version.tar.gz -C /tmp/canal\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Modify the configuration (MySQL related)."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"$ vi conf/example/instance.properties"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"## mysql serverId\ncanal.instance.mysql.slaveId = 1234\n#position info, need to change to your own database information\ncanal.instance.master.address = 127.0.0.1:3306\ncanal.instance.master.journal.name =\ncanal.instance.master.position =\ncanal.instance.master.timestamp =\n#canal.instance.standby.address =\n#canal.instance.standby.journal.name =\n#canal.instance.standby.position =\n#canal.instance.standby.timestamp =\n#username/password, need to change to your own database information\ncanal.instance.dbUsername = canal  \ncanal.instance.dbPassword = canal\ncanal.instance.defaultDatabaseName =\ncanal.instance.connectionCharset = UTF-8\n#table regex\ncanal.instance.filter.regex = .\\*\\\\\\\\..\\*\n# Select the name of the table to be synchronized and the partition name of the kafka target.\ncanal.mq.dynamicTopic=databasename.query_record\ncanal.mq.partitionHash= databasename.query_record:query_id\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Modify the configuration (Kafka related)."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"$ vi /usr/local/canal/conf/canal.properties"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"# Available options: tcp(by default), kafka, RocketMQ\ncanal.serverMode = kafka\n# ...\n# kafka/rocketmq Cluster Configuration: 192.168.1.117:9092,192.168.1.118:9092,192.168.1.119:9092\ncanal.mq.servers = 127.0.0.1:6667\ncanal.mq.retries = 0\n# This value can be increased in flagMessage mode, but do not exceed the maximum size of the MQ message.\ncanal.mq.batchSize = 16384\ncanal.mq.maxRequestSize = 1048576\n# In flatMessage mode, please change this value to a larger value, 50-200 is recommended.\ncanal.mq.lingerMs = 1\ncanal.mq.bufferMemory = 33554432\n# Canal's batch size with a default value of 50K. Please do not exceed 1M due to Kafka's maximum message size limit (under 900K)\ncanal.mq.canalBatchSize = 50\n# Timeout of `Canal get`, in milliseconds. Empty indicates unlimited timeout.\ncanal.mq.canalGetTimeout = 100\n# Whether the object is in flat json format\ncanal.mq.flatMessage = false\ncanal.mq.compressionType = none\ncanal.mq.acks = all\n# Whether Kafka message delivery uses transactions\ncanal.mq.transaction = false\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Initiation"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"bin/startup.sh"})}),"\n",(0,t.jsxs)(n.p,{children:["The corresponding synchronization log is shown in ",(0,t.jsx)(n.code,{children:"logs/example/example.log"})," and in Kafka, with the following format:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n    "data": [{\n        "query_id": "3c7ebee321e94773-b4d79cc3f08ca2ac",\n        "conn_id": "34434",\n        "fe_host": "172.26.34.139",\n        "user": "zhaoheng",\n        "start_time": "2020-10-19 20:40:10.578",\n        "end_time": "2020-10-19 20:40:10",\n        "time_used": "1.0",\n        "state": "FINISHED",\n        "error_message": "",\n        "sql": "COMMIT",\n        "database": "",\n        "profile": "",\n        "plan": ""\n    }, {\n        "query_id": "7ff2df7551d64f8e-804004341bfa63ad",\n        "conn_id": "34432",\n        "fe_host": "172.26.34.139",\n        "user": "zhaoheng",\n        "start_time": "2020-10-19 20:40:10.566",\n        "end_time": "2020-10-19 20:40:10",\n        "time_used": "0.0",\n        "state": "FINISHED",\n        "error_message": "",\n        "sql": "COMMIT",\n        "database": "",\n        "profile": "",\n        "plan": ""\n    }, {\n        "query_id": "3a4b35d1c1914748-be385f5067759134",\n        "conn_id": "34440",\n        "fe_host": "172.26.34.139",\n        "user": "zhaoheng",\n        "start_time": "2020-10-19 20:40:10.601",\n        "end_time": "1970-01-01 08:00:00",\n        "time_used": "-1.0",\n        "state": "RUNNING",\n        "error_message": "",\n        "sql": " SELECT SUM(length(lo_custkey)), SUM(length(c_custkey)) FROM lineorder_str INNER JOIN customer_str ON lo_custkey=c_custkey;",\n        "database": "ssb",\n        "profile": "",\n        "plan": ""\n    }],\n    "database": "center_service_lihailei",\n    "es": 1603111211000,\n    "id": 122,\n    "isDdl": false,\n    "mysqlType": {\n        "query_id": "varchar(64)",\n        "conn_id": "int(11)",\n        "fe_host": "varchar(32)",\n        "user": "varchar(32)",\n        "start_time": "datetime(3)",\n        "end_time": "datetime",\n        "time_used": "double",\n        "state": "varchar(16)",\n        "error_message": "text",\n        "sql": "text",\n        "database": "varchar(128)",\n        "profile": "longtext",\n        "plan": "longtext"\n    },\n    "old": null,\n    "pkNames": ["query_id"],\n    "sql": "",\n    "sqlType": {\n        "query_id": 12,\n        "conn_id": 4,\n        "fe_host": 12,\n        "user": 12,\n        "start_time": 93,\n        "end_time": 93,\n        "time_used": 8,\n        "state": 12,\n        "error_message": 2005,\n        "sql": 2005,\n        "database": 12,\n        "profile": 2005,\n        "plan": 2005\n    },\n    "table": "query_record",\n    "ts": 1603111212015,\n    "type": "INSERT"\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Add ",(0,t.jsx)(n.code,{children:"json_root"})," and ",(0,t.jsx)(n.code,{children:"strip_outer_array = true"})," to import data from ",(0,t.jsx)(n.code,{children:"data"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:'create routine load manual.query_job on query_record   \ncolumns (query_id,conn_id,fe_host,user,start_time,end_time,time_used,state,error_message,`sql`,`database`,profile,plan)  \nPROPERTIES (  \n    "format"="json",  \n    "json_root"="$.data",\n    "desired_concurrent_number"="1",  \n    "strip_outer_array" ="true",    \n    "max_error_number"="1000" \n) \nFROM KAFKA (     \n    "kafka_broker_list"= "172.26.92.141:9092",     \n    "kafka_topic" = "databasename.query_record" \n);\n'})}),"\n",(0,t.jsx)(n.p,{children:"This completes the near real-time synchronization of data from MySQL to StarRocks."}),"\n",(0,t.jsxs)(n.p,{children:["View status and error messages of the import job by ",(0,t.jsx)(n.code,{children:"show routine load"}),"."]})]})}const m=function(e={}){const{wrapper:n}=Object.assign({},(0,s.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(d,e)})):d(e)}},11151:(e,n,a)=>{a.d(n,{Zo:()=>i,ah:()=>r});var t=a(67294);const s=t.createContext({});function r(e){const n=t.useContext(s);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const o={};function i({components:e,children:n,disableParentContext:a}){let i;return i=a?"function"==typeof e?e({}):e||o:r(e),t.createElement(s.Provider,{value:i},n)}}}]);