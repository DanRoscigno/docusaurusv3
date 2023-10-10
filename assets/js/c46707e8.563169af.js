"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[8856],{50237:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>d,contentTitle:()=>n,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var a=t(85893),i=t(11151);const r={},n="[Preview] Continuously load data from Apache\xae Pulsar\u2122",o={id:"loading/load_from_pulsar",title:"[Preview] Continuously load data from Apache\xae Pulsar\u2122",description:"As of StarRocks version 2.5, Routine Load supports continuously loading data from Apache\xae Pulsar\u2122. Pulsar is distributed, open source pub-sub messaging and streaming platform with a store-compute separation architecture. Loading data from Pulsar via Routine Load is similar to loading data from Apache Kafka. This topic uses CSV-formatted data as an example to introduce how to load data from Apache Pulsar via Routine Load.",source:"@site/versioned_docs/version-3.1/loading/load_from_pulsar.md",sourceDirName:"loading",slug:"/loading/load_from_pulsar",permalink:"/docusaurusv3/docs/latest/loading/load_from_pulsar",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/loading/load_from_pulsar.md",tags:[],version:"3.1",frontMatter:{}},d={},l=[{value:"Supported data file formats",id:"supported-data-file-formats",level:2},{value:"Pulsar-related concepts",id:"pulsar-related-concepts",level:2},{value:"Create a Routine Load job",id:"create-a-routine-load-job",level:2},{value:"Check a load job and task",id:"check-a-load-job-and-task",level:2},{value:"Check a load job",id:"check-a-load-job",level:3},{value:"Check a load task",id:"check-a-load-task",level:3},{value:"Alter a load job",id:"alter-a-load-job",level:2}];function c(e){const s=Object.assign({h1:"h1",p:"p",h2:"h2",blockquote:"blockquote",strong:"strong",a:"a",ul:"ul",li:"li",em:"em",code:"code",pre:"pre",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",div:"div",h3:"h3"},(0,i.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.h1,{id:"preview-continuously-load-data-from-apache-pulsar",children:"[Preview] Continuously load data from Apache\xae Pulsar\u2122"}),"\n",(0,a.jsx)(s.p,{children:"As of StarRocks version 2.5, Routine Load supports continuously loading data from Apache\xae Pulsar\u2122. Pulsar is distributed, open source pub-sub messaging and streaming platform with a store-compute separation architecture. Loading data from Pulsar via Routine Load is similar to loading data from Apache Kafka. This topic uses CSV-formatted data as an example to introduce how to load data from Apache Pulsar via Routine Load."}),"\n",(0,a.jsx)(s.h2,{id:"supported-data-file-formats",children:"Supported data file formats"}),"\n",(0,a.jsx)(s.p,{children:"Routine Load supports consuming CSV and JSON formatted data from a Pulsar cluster."}),"\n",(0,a.jsxs)(s.blockquote,{children:["\n",(0,a.jsx)(s.p,{children:"NOTE"}),"\n",(0,a.jsx)(s.p,{children:"As for data in CSV format, StarRocks supports UTF-8 encoded strings within 50 bytes as column separators. Commonly used column separators include comma (,), tab and pipe (|)."}),"\n"]}),"\n",(0,a.jsx)(s.h2,{id:"pulsar-related-concepts",children:"Pulsar-related concepts"}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.strong,{children:(0,a.jsx)(s.a,{href:"https://pulsar.apache.org/docs/2.10.x/concepts-messaging/#topics",children:"Topic"})})}),"\n",(0,a.jsx)(s.p,{children:"Topics in Pulsar are named channels for transmitting messages from producers to consumers. Topics in Pulsar are divided into partitioned topics and non-partitioned topics."}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.strong,{children:(0,a.jsx)(s.a,{href:"https://pulsar.apache.org/docs/2.10.x/concepts-messaging/#partitioned-topics",children:"Partitioned topics"})})," are a special type of topic that are handled by multiple brokers, thus allowing for higher throughput. A partitioned topic is actually implemented as N internal topics, where N is the number of partitions."]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.strong,{children:"Non-partitioned topics"})," are a normal type of topic that are served only by a single broker, which limits the maximum throughput of the topic."]}),"\n"]}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.strong,{children:(0,a.jsx)(s.a,{href:"https://pulsar.apache.org/docs/2.10.x/concepts-messaging/#messages",children:"Message ID"})})}),"\n",(0,a.jsxs)(s.p,{children:["The message ID of a message is assigned by ",(0,a.jsx)(s.a,{href:"https://pulsar.apache.org/docs/2.10.x/concepts-architecture-overview/#apache-bookkeeper",children:"BookKeeper instances"})," as soon as the message is persistently stored. Message ID indicates a message' s specific position in a ledger and is unique within a Pulsar cluster."]}),"\n",(0,a.jsxs)(s.p,{children:["Pulsar supports consumers specifying the initial position through consumer.",(0,a.jsx)(s.em,{children:"seek"}),"(",(0,a.jsx)(s.em,{children:"messageId"}),"). But compared to the Kafka consumer offset which is a long integer value, the message ID consists of four parts: ",(0,a.jsx)(s.code,{children:"ledgerId:entryID:partition-index:batch-index"}),"."]}),"\n",(0,a.jsxs)(s.p,{children:["Therefore, you can't get the Message ID directly from the message. As a result, at present, ",(0,a.jsx)(s.strong,{children:"Routine Load does not support specifying initial position when loading data from Pulsar, but only supports consuming data from the beginning or end of a partition."})]}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.strong,{children:(0,a.jsx)(s.a,{href:"https://pulsar.apache.org/docs/2.10.x/concepts-messaging/#subscriptions",children:"Subscription"})})}),"\n",(0,a.jsx)(s.p,{children:"A subscription is a named configuration rule that determines how messages are delivered to consumers. Pulsar also supports consumers simultaneously subscribing to multiple topics. A topic can have multiple subscriptions."}),"\n",(0,a.jsx)(s.p,{children:"The type of a subscription is defined when a consumer connects to it, and the type can be changed by restarting all consumers with a different configuration. Four subscription types are available in Pulsar:"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.code,{children:"exclusive"})," (default)",(0,a.jsx)(s.em,{children:":"})," Only a single consumer is allowed to attach to the subscription. Only one customer is allowed to consume messages."]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.code,{children:"shared"}),": Multiple consumers can attach to the same subscription. Messages are delivered in a round robin distribution across consumers, and any given message is delivered to only one consumer."]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.code,{children:"failover"}),": Multiple consumers can attach to the same subscription. A master consumer is picked for a non-partitioned topic or each partition of a partitioned topic and receives messages. When the master consumer disconnects, all (non-acknowledged and subsequent) messages are delivered to the next consumer in line."]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.code,{children:"key_shared"}),": Multiple consumers can attach to the same subscription. Messages are delivered in a distribution across consumers and message with same key or same ordering key are delivered to only one consumer."]}),"\n"]}),"\n",(0,a.jsxs)(s.blockquote,{children:["\n",(0,a.jsx)(s.p,{children:"Note:"}),"\n",(0,a.jsx)(s.p,{children:"Currently Routine Load uses exclusive type."}),"\n"]}),"\n",(0,a.jsx)(s.h2,{id:"create-a-routine-load-job",children:"Create a Routine Load job"}),"\n",(0,a.jsxs)(s.p,{children:["The following examples describe how to consume CSV-formatted messages in Pulsar, and load the data into StarRocks by creating a Routine Load job. For detailed instruction and reference, see ",(0,a.jsx)(s.a,{href:"/docusaurusv3/docs/latest/sql-reference/sql-statements/data-manipulation/CREATE%20ROUTINE%20LOAD",children:"CREATE ROUTINE LOAD"}),"."]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-SQL",children:'CREATE ROUTINE LOAD load_test.routine_wiki_edit_1 ON routine_wiki_edit\nCOLUMNS TERMINATED BY ",",\nROWS TERMINATED BY "\\n",\nCOLUMNS (order_id, pay_dt, customer_name, nationality, temp_gender, price)\nWHERE event_time > "2022-01-01 00:00:00",\nPROPERTIES\n(\n    "desired_concurrent_number" = "1",\n    "max_batch_interval" = "15000",\n    "max_error_number" = "1000"\n)\nFROM PULSAR\n(\n    "pulsar_service_url" = "pulsar://localhost:6650",\n    "pulsar_topic" = "persistent://tenant/namespace/topic-name",\n    "pulsar_subscription" = "load-test",\n    "pulsar_partitions" = "load-partition-0,load-partition-1",\n    "pulsar_initial_positions" = "POSITION_EARLIEST,POSITION_LATEST",\n    "property.auth.token" = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUJzdWIiOiJqaXV0aWFuY2hlbiJ9.lulGngOC72vE70OW54zcbyw7XdKSOxET94WT_hIqD5Y"\n);\n'})}),"\n",(0,a.jsxs)(s.p,{children:["When Routine Load is created to consume data from Pulsar, most input parameters except for ",(0,a.jsx)(s.code,{children:"data_source_properties"})," are the same as consuming data from Kafka . For descriptions about parameters except data_source_properties ",(0,a.jsx)(s.code,{children:"data_source_properties"})," , see ",(0,a.jsx)(s.a,{href:"/docusaurusv3/docs/latest/sql-reference/sql-statements/data-manipulation/CREATE%20ROUTINE%20LOAD",children:"CREATE ROUTINE LOAD"}),"."]}),"\n",(0,a.jsxs)(s.p,{children:["The parameters related to ",(0,a.jsx)(s.code,{children:"data_source_properties"})," and their descriptions are as follows:"]}),"\n",(0,a.jsxs)(s.table,{children:[(0,a.jsx)(s.thead,{children:(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.th,{children:(0,a.jsx)(s.strong,{children:"Parameter"})}),(0,a.jsx)(s.th,{children:(0,a.jsx)(s.strong,{children:"Required"})}),(0,a.jsx)(s.th,{children:(0,a.jsx)(s.strong,{children:"Description"})})]})}),(0,a.jsxs)(s.tbody,{children:[(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"pulsar_service_url"}),(0,a.jsx)(s.td,{children:"Yes"}),(0,a.jsxs)(s.td,{children:["The URL that is used to connect to the Pulsar cluster.  Format: ",(0,a.jsx)(s.code,{children:'"pulsar://ip:port"'})," or ",(0,a.jsx)(s.code,{children:'"pulsar://service:port"'}),".Example: ",(0,a.jsx)(s.code,{children:'"pulsar_service_url" = "pulsar://``localhost:6650``"'})]})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"pulsar_topic"}),(0,a.jsx)(s.td,{children:"Yes"}),(0,a.jsx)(s.td,{children:'Subscribed topic. Example: "pulsar_topic" = "persistent://tenant/namespace/topic-name"'})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"pulsar_subscription"}),(0,a.jsx)(s.td,{children:"Yes"}),(0,a.jsxs)(s.td,{children:["Subscription configured for the topic.Example: ",(0,a.jsx)(s.code,{children:'"pulsar_subscription" = "my_subscription"'})]})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"pulsar_partitions, pulsar_initial_positions"}),(0,a.jsx)(s.td,{children:"No"}),(0,a.jsxs)(s.td,{children:[(0,a.jsx)(s.code,{children:"pulsar_partitions"})," :  Subscribed partitions in the topic.",(0,a.jsx)(s.code,{children:"pulsar_initial_positions"}),": initial positions of partitions specified by ",(0,a.jsx)(s.code,{children:"pulsar_partitions"}),". The initial positions must correspond to the partitions in ",(0,a.jsx)(s.code,{children:"pulsar_partitions"}),". Valid values:",(0,a.jsx)(s.code,{children:"POSITION_EARLIEST"})," (Default value): Subscription starts from the earliest available message in the partition. ",(0,a.jsx)(s.code,{children:"POSITION_LATEST"}),": Subscription starts from the latest available message in the partition.Note",(0,a.jsx)(s.div,{})," ",(0,a.jsx)(s.code,{children:"pulsar_partitions"})," is not specified, the topic's all partitions are subscribed.If both ",(0,a.jsx)(s.code,{children:"pulsar_partitions"})," and ",(0,a.jsx)(s.code,{children:"property.pulsar_default_initial_position"})," are specified, the ",(0,a.jsx)(s.code,{children:"pulsar_partitions"})," value overrides ",(0,a.jsx)(s.code,{children:"property.pulsar_default_initial_position"})," value.If neither ",(0,a.jsx)(s.code,{children:"pulsar_partitions"})," nor ",(0,a.jsx)(s.code,{children:"property.pulsar_default_initial_position"})," is specified, subscription starts from the latest available message in the partition.Example:",(0,a.jsx)(s.code,{children:'"pulsar_partitions" = "my-partition-0,my-partition-1,my-partition-2,my-partition-3", "pulsar_initial_positions" = "POSITION_EARLIEST,POSITION_EARLIEST,POSITION_LATEST,POSITION_LATEST"'})]})]})]})]}),"\n",(0,a.jsx)(s.p,{children:"Routine Load supports the following custom parameters for Pulsar."}),"\n",(0,a.jsxs)(s.table,{children:[(0,a.jsx)(s.thead,{children:(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.th,{children:"Parameter"}),(0,a.jsx)(s.th,{children:"Required"}),(0,a.jsx)(s.th,{children:"Description"})]})}),(0,a.jsxs)(s.tbody,{children:[(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"property.pulsar_default_initial_position"}),(0,a.jsx)(s.td,{children:"No"}),(0,a.jsxs)(s.td,{children:["The default initial positions when the topic's partitions are subscribed. The parameter takes effect when ",(0,a.jsx)(s.code,{children:"pulsar_initial_positions"})," is not specified. Its valid values are the same as the valid values of ",(0,a.jsx)(s.code,{children:"pulsar_initial_positions"}),".Example: ",(0,a.jsx)(s.code,{children:'"``property.pulsar_default_initial_position" = "POSITION_EARLIEST"'})]})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"property.auth.token"}),(0,a.jsx)(s.td,{children:"No"}),(0,a.jsxs)(s.td,{children:["If Pulsar enables authenticating clients using security tokens, you need the token string to verify your identity.Example: ",(0,a.jsx)(s.code,{children:'"p``roperty.auth.token" = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUJzdWIiOiJqaXV0aWFuY2hlbiJ9.lulGngOC72vE70OW54zcbyw7XdKSOxET94WT_hIqD"'})]})]})]})]}),"\n",(0,a.jsx)(s.h2,{id:"check-a-load-job-and-task",children:"Check a load job and task"}),"\n",(0,a.jsx)(s.h3,{id:"check-a-load-job",children:"Check a load job"}),"\n",(0,a.jsxs)(s.p,{children:["Execute the ",(0,a.jsx)(s.a,{href:"/docusaurusv3/docs/latest/sql-reference/sql-statements/data-manipulation/SHOW%20ROUTINE%20LOAD",children:"SHOW ROUTINE LOAD"})," statement to check the status of the load job ",(0,a.jsx)(s.code,{children:"routine_wiki_edit_1"}),". StarRocks returns the execution state ",(0,a.jsx)(s.code,{children:"State"}),", the statistical information (including the total rows consumed and the total rows loaded) ",(0,a.jsx)(s.code,{children:"Statistics"}),", and the progress of the load job ",(0,a.jsx)(s.code,{children:"progress"}),"."]}),"\n",(0,a.jsxs)(s.p,{children:["When you check a Routine Load job that consumes data from Pulsar, most returned parameters except for ",(0,a.jsx)(s.code,{children:"progress"})," are the same as consuming data from Kafka.  ",(0,a.jsx)(s.code,{children:"progress"})," refers to backlog, that is the number of unacked messages in a partition."]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-Plaintext",children:'MySQL [load_test] > SHOW ROUTINE LOAD for routine_wiki_edit_1 \\G\n*************************** 1. row ***************************\n                  Id: 10142\n                Name: routine_wiki_edit_1\n          CreateTime: 2022-06-29 14:52:55\n           PauseTime: 2022-06-29 17:33:53\n             EndTime: NULL\n              DbName: default_cluster:test_pulsar\n           TableName: test1\n               State: PAUSED\n      DataSourceType: PULSAR\n      CurrentTaskNum: 0\n       JobProperties: {"partitions":"*","rowDelimiter":"\'\\n\'","partial_update":"false","columnToColumnExpr":"*","maxBatchIntervalS":"10","whereExpr":"*","timezone":"Asia/Shanghai","format":"csv","columnSeparator":"\',\'","json_root":"","strict_mode":"false","jsonpaths":"","desireTaskConcurrentNum":"3","maxErrorNum":"10","strip_outer_array":"false","currentTaskConcurrentNum":"0","maxBatchRows":"200000"}\nDataSourceProperties: {"serviceUrl":"pulsar://localhost:6650","currentPulsarPartitions":"my-partition-0,my-partition-1","topic":"persistent://tenant/namespace/topic-name","subscription":"load-test"}\n    CustomProperties: {"auth.token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUJzdWIiOiJqaXV0aWFuY2hlbiJ9.lulGngOC72vE70OW54zcbyw7XdKSOxET94WT_hIqD"}\n           Statistic: {"receivedBytes":5480943882,"errorRows":0,"committedTaskNum":696,"loadedRows":66243440,"loadRowsRate":29000,"abortedTaskNum":0,"totalRows":66243440,"unselectedRows":0,"receivedBytesRate":2400000,"taskExecuteTimeMs":2283166}\n            Progress: {"my-partition-0(backlog): 100","my-partition-1(backlog): 0"}\nReasonOfStateChanged: \n        ErrorLogUrls: \n            OtherMsg:\n1 row in set (0.00 sec)\n'})}),"\n",(0,a.jsx)(s.h3,{id:"check-a-load-task",children:"Check a load task"}),"\n",(0,a.jsxs)(s.p,{children:["Execute the ",(0,a.jsx)(s.a,{href:"/docusaurusv3/docs/latest/sql-reference/sql-statements/data-manipulation/SHOW%20ROUTINE%20LOAD%20TASK",children:"SHOW ROUTINE LOAD TASK"})," statement to check the load tasks of the load job ",(0,a.jsx)(s.code,{children:"routine_wiki_edit_1"}),", such as how many tasks are running, the Kafka topic partitions that are consumed and the consumption progress ",(0,a.jsx)(s.code,{children:"DataSourceProperties"}),", and the corresponding Coordinator BE node ",(0,a.jsx)(s.code,{children:"BeId"}),"."]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-SQL",children:'MySQL [example_db]> SHOW ROUTINE LOAD TASK WHERE JobName = "routine_wiki_edit_1" \\G\n'})}),"\n",(0,a.jsx)(s.h2,{id:"alter-a-load-job",children:"Alter a load job"}),"\n",(0,a.jsxs)(s.p,{children:["Before altering a load job, you must pause it by using the ",(0,a.jsx)(s.a,{href:"/docusaurusv3/docs/latest/sql-reference/sql-statements/data-manipulation/PAUSE%20ROUTINE%20LOAD",children:"PAUSE ROUTINE LOAD"})," statement. Then you can execute the ",(0,a.jsx)(s.a,{href:"/docusaurusv3/docs/latest/sql-reference/sql-statements/data-manipulation/alter-routine-load",children:"ALTER ROUTINE LOAD"}),". After altering it, you can execute the ",(0,a.jsx)(s.a,{href:"/docusaurusv3/docs/latest/sql-reference/sql-statements/data-manipulation/RESUME%20ROUTINE%20LOAD",children:"RESUME ROUTINE LOAD"})," statement to resume it, and check its status by using the ",(0,a.jsx)(s.a,{href:"/docusaurusv3/docs/latest/sql-reference/sql-statements/data-manipulation/SHOW%20ROUTINE%20LOAD",children:"SHOW ROUTINE LOAD"})," statement."]}),"\n",(0,a.jsxs)(s.p,{children:["When Routine Load is used to consume data from Pulsar, most returned parameters except for ",(0,a.jsx)(s.code,{children:"data_source_properties"})," are the same as consuming data from Kafka."]}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.strong,{children:"Take note of the following points"}),":"]}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:["Among the ",(0,a.jsx)(s.code,{children:"data_source_properties"})," related parameters, only ",(0,a.jsx)(s.code,{children:"pulsar_partitions"}),", ",(0,a.jsx)(s.code,{children:"pulsar_initial_positions"}),", and custom Pulsar parameters ",(0,a.jsx)(s.code,{children:"property.pulsar_default_initial_position"})," and ",(0,a.jsx)(s.code,{children:"property.auth.token"})," are currently supported to be modified.  The parameters ",(0,a.jsx)(s.code,{children:"pulsar_service_url"}),", ",(0,a.jsx)(s.code,{children:"pulsar_topic"}),", and ",(0,a.jsx)(s.code,{children:"pulsar_subscription"})," cannot be modified."]}),"\n",(0,a.jsxs)(s.li,{children:["If you need to modify the partition to be consumed and the matched initilal position, you need to make sure that you specify the partition using ",(0,a.jsx)(s.code,{children:"pulsar_partitions"})," when you create the Routine Load job, and only the intial position ",(0,a.jsx)(s.code,{children:"pulsar_initial_positions"})," of the specified partition can be modified."]}),"\n",(0,a.jsxs)(s.li,{children:["If you specify only Topic ",(0,a.jsx)(s.code,{children:"pulsar_topic"})," when creating a Routine Load job, but not partitions ",(0,a.jsx)(s.code,{children:"pulsar_partitions"}),", you can modify the starting position of all partitions under topic via ",(0,a.jsx)(s.code,{children:"pulsar_default_initial_position"}),"."]}),"\n"]})]})}const u=function(e={}){const{wrapper:s}=Object.assign({},(0,i.ah)(),e.components);return s?(0,a.jsx)(s,Object.assign({},e,{children:(0,a.jsx)(c,e)})):c(e)}},11151:(e,s,t)=>{t.d(s,{Zo:()=>o,ah:()=>r});var a=t(67294);const i=a.createContext({});function r(e){const s=a.useContext(i);return a.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const n={};function o({components:e,children:s,disableParentContext:t}){let o;return o=t?"function"==typeof e?e({}):e||n:r(e),a.createElement(i.Provider,{value:o},s)}}}]);