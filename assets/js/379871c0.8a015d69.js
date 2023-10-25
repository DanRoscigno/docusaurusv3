"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[84993],{68129:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var a=t(85893),r=t(11151);const s={displayed_sidebar:"English"},i="ROUTINE LOAD",o={id:"sql-reference/sql-statements/data-manipulation/ROUTINE_LOAD",title:"ROUTINE LOAD",description:"Description",source:"@site/versioned_docs/version-2.1/sql-reference/sql-statements/data-manipulation/ROUTINE_LOAD.md",sourceDirName:"sql-reference/sql-statements/data-manipulation",slug:"/sql-reference/sql-statements/data-manipulation/ROUTINE_LOAD",permalink:"/docs/2.1/sql-reference/sql-statements/data-manipulation/ROUTINE_LOAD",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-statements/data-manipulation/ROUTINE_LOAD.md",tags:[],version:"2.1",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"RESUME ROUTINE LOAD",permalink:"/docs/2.1/sql-reference/sql-statements/data-manipulation/RESUME_ROUTINE_LOAD"},next:{title:"SELECT",permalink:"/docs/2.1/sql-reference/sql-statements/data-manipulation/SELECT"}},l={},c=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"[db.]job_name",id:"dbjob_name",level:3},{value:"tbl_name",id:"tbl_name",level:3},{value:"load_properties",id:"load_properties",level:3},{value:"job_properties",id:"job_properties",level:3},{value:"data_source",id:"data_source",level:3},{value:"data_source_properties",id:"data_source_properties",level:3},{value:"Examples",id:"examples",level:2},{value:"Keywords",id:"keywords",level:2}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",h3:"h3",ul:"ul",li:"li",em:"em"},(0,r.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"routine-load",children:"ROUTINE LOAD"}),"\n",(0,a.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,a.jsx)(n.p,{children:"Routine Load allows you to submit a permanent import task to import data into StarRocks by constantly reading from a specified data source. Currently only support importing text format (CSV) data from Kafka without authentication or SSL authentication."}),"\n",(0,a.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-SQL",children:"CREATE ROUTINE LOAD [db.]job_name ON tbl_name\n\n[load_properties]\n\n[job_properties]\n\nFROM data_source\n\n[data_source_properties]\n"})}),"\n",(0,a.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,a.jsx)(n.h3,{id:"dbjob_name",children:"[db.]job_name"}),"\n",(0,a.jsx)(n.p,{children:"The name of the import job, within the same database, can only have one job running with the same name."}),"\n",(0,a.jsx)(n.h3,{id:"tbl_name",children:"tbl_name"}),"\n",(0,a.jsx)(n.p,{children:"This specify the name of the table you want to import."}),"\n",(0,a.jsx)(n.h3,{id:"load_properties",children:"load_properties"}),"\n",(0,a.jsx)(n.p,{children:"It is used to describe imported data. Syntax\uff1a"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-SQL",children:"[COLUMNS TERMINATED BY '<terminator>'],\n\n[COLUMNS ([<column_name> [, ...] ] [, column_assignment [, ...] ] )],\n\n[WHERE <expr>],\n\n[PARTITION ([ <partition_name> [, ...] ])]\n\n\n\ncolumn_assignment:\n\n<column_name> = column_expression\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"column_separator:"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"You can specify a column separator for the data in the CSV format. For example, specify a comma (,) as a column separator. Default to: \\t."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-SQL",children:'COLUMNS TERMINATED BY ","\n'})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"columns_mapping:"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Specifies the mapping relationships of columns in the source data and define how derived columns are generated."}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Mapped column:"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"It specifies in order which columns in the source data correspond to which columns in the destination table. For columns you want to skip, you can specify a column name that does not exist. Suppose the destination table has three columns, k1, k2, v1. Source data has four columns, of which columns 1, 2, and 4 correspond to k2, k1, and v1, respectively. Write as follows:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-Plain_Text",children:"COLUMNS (k2, k1, xxx, v1)\n"})}),"\n",(0,a.jsx)(n.p,{children:"Here, xxx s a non-existent column used to skip the third column in the source data."}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Derived columns:"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"A column in the form of col_name = expr, we call a derived column. That is, expr is used to calculate the values of the corresponding columns in the destination table. Derived columns are usually queued after mapped columns, although this is not mandatory, StarRocks always parses the mapped columns before the derived columns. In the next example, suppose the destination table also has column 4, v2, which is generated by the sum of K1 and k2. Can be written as follows:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-Plain_Text",children:"COLUMNS (k2, k1, xxx, v1, v2 = k1 + k2);\n"})}),"\n",(0,a.jsxs)(n.p,{children:["For the data in the CSV format, the number of mapping columns in ",(0,a.jsx)(n.code,{children:"COLUMNS"})," must be consistent with the number of columns in the source data."]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"where_predicates"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"It is used to specify filter conditions to filter out unnecessary columns. Filter columns can be mapped or derived columns. For example, if we only want to import columns with k1 greater than 100 and k2 equal to 1000, write as follows:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-Plain_Text",children:"WHERE k1 > 100 and k2 = 1000\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"partitions"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"It specifies which partitions to import into the destination table. If not specified, it is automatically imported into the corresponding partition.Example:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-Plain_Text",children:"PARTITION(p1, p2, p3)\n"})}),"\n",(0,a.jsx)(n.h3,{id:"job_properties",children:"job_properties"}),"\n",(0,a.jsx)(n.p,{children:"General parameters used to specify routine import jobs."}),"\n",(0,a.jsx)(n.p,{children:"Syntax:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-SQL",children:'PROPERTIES (\n\n    "key1" = "val1",\n\n    "key2" = "val2"\n\n)\n'})}),"\n",(0,a.jsx)(n.p,{children:"We currently support the following parameters:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"desired_concurrent_number"})}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Expected concurrency. A routine import job is divided into subtasks to execute. This parameter specifies the maximum number of tasks a job can perform simultaneously. Must be greater than 0. Default is 3. This concurrency degree is not the actual concurrency degree. The actual concurrency degree is considered by the number of nodes in the cluster, the load, and the data source. Example:"}),"\n",(0,a.jsx)(n.p,{children:'"desired_concurrent_number" = "3"'}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"max_batch_interval"})}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["Task scheduling time, which is how often a task executes, defaults to 10s. Task consumption data time is routine",(0,a.jsx)(n.em,{children:"in fe.conf Load_Task_Consume_Second, defaults to 3s. Task execution timeout is routine_in fe.conf Load"})," Task_Timeout_Second, defaults to 15s. Example:"]}),"\n",(0,a.jsx)(n.p,{children:'"max_batch_interval" = "20"'}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"max_error_number/max_batch_rows"})}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["Maximum number of error rows allowed in the sampling window. Must be greater than or equal to 0. The default is 0, which means no error lines are allowed. Sampling window is max",(0,a.jsxs)(n.em,{children:["Batch_Rows 10, defaulted to ",(0,a.jsx)(n.code,{children:"(200000 10 = 2000000)"}),". That is, if the number of error rows is greater than max_within the sampling window Error"]})," Number causes routine operations to be suspended and requires manual intervention to check for data quality issues. Rows filtered by where criteria are not erroneous rows."]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"strict_mode"})}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:'Whether strict mode is on or off by default. If turned on, column type transformations for non-empty raw data are filtered if the result is NULL. Specify "strict_mode" = "true"'}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"timezone"})}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Specify the time zone used by the import job. The default is to use the timezone parameter of Session. This parameter affects the results of all time zone related functions involved in importing."}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"format"})}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Specify the time zone used by the import job. The default is to use the timezone parameter of Session. This parameter affects the results of all time zone related functions involved in importing."}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"jsonpaths"})}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Jsonpaths: There are two ways to import json: simple mode and matching mode. If jsonpath is set, it is a matching mode import, otherwise it is a simple mode import, you can refer to an example."}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"strip_outer_array"})}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Boolean type, true, indicates that the JSON data starts with an array object and flattens it in the array object, defaulting to false."}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"json_root"})}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Json_ Root is a legal jsonpath string that specifies the root node of the JSON document with a default value of''."}),"\n",(0,a.jsx)(n.h3,{id:"data_source",children:"data_source"}),"\n",(0,a.jsx)(n.p,{children:"Type of data source. It currently supports: Apache Kafka"}),"\n",(0,a.jsx)(n.h3,{id:"data_source_properties",children:"data_source_properties"}),"\n",(0,a.jsx)(n.p,{children:"It specifies information about the data source."}),"\n",(0,a.jsx)(n.p,{children:"Syntax\uff1a"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-SQL",children:'(\n\n"key1" = "val1",\n\n"key2" = "val2"\n\n)\n'})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Apache Kafka","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"kafka_broker_list"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-Plain_Text",children:'kafka\'s broker connection information. The format is ip:host. Multiple brokers are separated by commas.\n\nExample:\n\n\n\n"kafka_broker_list" = "broker1:9092,broker2:9092"\n'})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"kafka_topic"})}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-Plain_Text",children:'Specify a topic for Kafka to subscribe to.\n\nExample:\n\n\n\n"kafka_topic" = "my_topic"\n'})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"kafka_partitions/kafka_offsets"})}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-Plain_Text",children:'Specify the kafka partition you want to subscribe to, and the starting offset for each of the corresponding partitions.\n\noffset can specify a specific offset greater than or equal to 0, or:\n\n\n\n1. OFFSET_BEGINNING: Subscribe from a location with data.\n\n2. OFFSET_END: Subscribe from the end.\n\n\n\nDefault from OFFSET_if not specified END starts subscribing to all partitions under top.\n\nExample:\n\n\n\n"kafka_partitions" = "0,1,2,3",\n\n"kafka_offsets" = "101,0,OFFSET_BEGINNING,OFFSET_END"\n'})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"property"})}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-Plain_Text",children:'specify custom kafka parameters.\n\nThe function is equivalent to the"--property" parameter in the kafka shell.\n\nWhen the value of a parameter is a file, the keyword "FILE:" needs to be added before the value.\n\nFor information on how to create a file, see "HELP CREATE FILE;"\n\nFor more supported custom parameters, see the client-side configuration item in librdkafka\'s official CONFIGURATION document.\n\nExample:\n\n"property.client.id" = "12345",\n\n"property.ssl.ca.location" = "FILE:ca-cert"\n\n\n\n1.When connecting to Kafka using SSL, the following parameters need to be specified:\n\n"property.security.protocol" = "ssl",\n\n"property.ssl.ca.location" = "FILE:ca-cert",\n\n\n\nWhere:\n\n"property.security.protocol" is used to indicate that the connection is SSL.\n\n"property.ssl.ca.location" is used when be accesses kafka, specifying the location of the CA certificate.\n\nIf client authentication is turned on on at the Kafka server side, settings are also required:\n\n"property.ssl.certificate.location" = "FILE:client.pem",\n\n"property.ssl.key.location" = "FILE:client.key",\n\n"property.ssl.key.password" = "abcdefg",\n\n\n\nWhere:\n\n"property.ssl.certificate.location" specifies the location of public key of client.\n\n"property.ssl.key.location" specifies the location of private key of client.\n\n"property.ssl.key.password" specifies the password of private key of client.\n\n\n\n2.When connecting Kafka using SASL, the following parameters need to be specified:\n\n"property.security.protocol"="SASL_PLAINTEXT",\n\n"property.sasl.mechanism"="PLAIN",\n\n"property.sasl.username"="admin",\n\n"property.sasl.password"="admin"\n\n\n\nWhere:\n\n"property.security.protocol" specifies that the protocol is SASL_ PLAINTEXT.\n\n"property.sasl.mechanism" specifies that the authentication method for SASL is PLAIN.\n\n"property.sasl.username" specifies the user name of sasl.\n\n"property.sasl.password" specifies the password for sasl.\n\n\n\n3.Specify the default starting offset for Kafka partition\n\nIf kafka_is not specified Partitions/kafka_ Offsets, consumes all partitions by default, at which point kafka_can be specified Default_ Offsets specify the starting offset. Default to OFFSET_ END, subscribe from the end.\n\nValue is: \n\n1.OFFSET_BEGINNING: Subscribe from a location with data.\n\n2.OFFSET_END: Subscribe from the end.\n\nExample:\n\n"property.kafka_default_offsets" = "OFFSET_BEGINNING\n'})}),"\n",(0,a.jsx)(n.p,{children:"Sample Import Data Format"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Integer Type (TINYINT/SMALLINT/INT/BIGINT/LARGEINT): 1, 1000, 1234"}),"\n",(0,a.jsx)(n.li,{children:"Floating Point Type (FLOAT/DOUBLE/DECIMAL): 1.1, 0.23, .356"}),"\n",(0,a.jsx)(n.li,{children:"Date and Time Type (DATE/DATETIME): 2017-10-03, 2017-06-13 12:34:03"}),"\n",(0,a.jsx)(n.li,{children:"String Type (CHAR/VARCHAR) without quotation marks: I am a student, a"}),"\n",(0,a.jsx)(n.li,{children:"NULL Value: \\N"}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Create a kafka routine import task named test1 for example_tbl in example_db. Specify the column separator, group.id and client.id, automatically consume all partitions by default, and subscribe from a location with data (OFFSET_BEGINNING)."}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-SQL",children:'CREATE ROUTINE LOAD example_db.test1 ON example_tbl\n\nCOLUMNS TERMINATED BY ",",\n\nCOLUMNS(k1, k2, k3, v1, v2, v3 = k1 * 100)\n\nPROPERTIES\n\n(\n\n    "desired_concurrent_number"="3",\n\n    "max_batch_interval" = "20",\n\n    "strict_mode" = "false"\n\n)\n\nFROM KAFKA\n\n(\n\n    "kafka_broker_list" = "broker1:9092,broker2:9092,broker3:9092",\n\n    "kafka_topic" = "my_topic",\n\n    "property.group.id" = "xxx",\n\n    "property.client.id" = "xxx",\n\n    "property.kafka_default_offsets" = "OFFSET_BEGINNING"\n\n);\n'})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Create a kafka routine import task named test1 for example_tbl in example_db. The import task is in strict mode."}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-SQL",children:'CREATE ROUTINE LOAD example_db.test1 ON example_tbl\n\nCOLUMNS(k1, k2, k3, v1, v2, v3 = k1 * 100),\n\nWHERE k1 > 100 and k2 like "%starrocks%"\n\nPROPERTIES\n\n(\n\n    "desired_concurrent_number"="3",\n\n    "max_batch_interval" = "20",\n\n    "strict_mode" = "true"\n\n)\n\nFROM KAFKA\n\n(\n\n    "kafka_broker_list" = "broker1:9092,broker2:9092,broker3:9092",\n\n    "kafka_topic" = "my_topic",\n\n    "kafka_partitions" = "0,1,2,3",\n\n    "kafka_offsets" = "101,0,0,200"\n\n);\n'})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Import data from the Kafka cluster using SSL authentication. The client.id parameter is also set. Import task is in non-strict mode and time zone is Africa/Abidjan."}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-SQL",children:'CREATE ROUTINE LOAD example_db.test1 ON example_tbl\n\nCOLUMNS(k1, k2, k3, v1, v2, v3 = k1 * 100),\n\nWHERE k1 > 100 and k2 like "%starrocks%"\n\nPROPERTIES\n\n(\n\n    "desired_concurrent_number"="3",\n\n    "max_batch_interval" = "20",\n\n    "strict_mode" = "false",\n\n    "timezone" = "Africa/Abidjan"\n\n)\n\nFROM KAFKA\n\n(\n\n    "kafka_broker_list" = "broker1:9092,broker2:9092,broker3:9092",\n\n    "kafka_topic" = "my_topic",\n\n    "property.security.protocol" = "ssl",\n\n    "property.ssl.ca.location" = "FILE:ca.pem",\n\n    "property.ssl.certificate.location" = "FILE:client.pem",\n\n    "property.ssl.key.location" = "FILE:client.key",\n\n    "property.ssl.key.password" = "abcdefg",\n\n    "property.client.id" = "my_client_id"\n\n);\n'})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Import JSON in simple mode."}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-SQL",children:'CREATE ROUTINE LOAD example_db.test_json_label_1 ON table1\n\nCOLUMNS(category,price,author)\n\nPROPERTIES\n\n(\n\n    "desired_concurrent_number"="3",\n\n    "max_batch_interval" = "20",\n\n    "strict_mode" = "false",\n\n    "format" = "json"\n\n)\n\nFROM KAFKA\n\n(\n\n    "kafka_broker_list" = "broker1:9092,broker2:9092,broker3:9092",\n\n    "kafka_topic" = "my_topic",\n\n    "kafka_partitions" = "0,1,2",\n\n    "kafka_offsets" = "0,0,0"\n\n);\n\nTwo JSON data formats are supported:\n\n1\uff09{"category":"a9jadhx","author":"test","price":895}\n\n2\uff09[\n\n{"category":"a9jadhx","author":"test","price":895},\n\n{"category":"axdfa1","author":"EvelynWaugh","price":1299}\n\n]\n'})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Precise import of JSON data format:"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-SQL",children:'CREATE TABLE `example_tbl` (\n\n`category` varchar(24) NULL COMMENT "",\n\n`author` varchar(24) NULL COMMENT "",\n\n`timestamp` bigint(20) NULL COMMENT "",\n\n`dt` int(11) NULL COMMENT "",\n\n`price` double REPLACE\n\n) ENGINE=OLAP\n\nAGGREGATE KEY(`category`,`author`,`timestamp`,`dt`)\n\nCOMMENT "OLAP"\n\nPARTITION BY RANGE(`dt`)\n\n(PARTITION p0 VALUES [("-2147483648"), ("20200509")),\n\nPARTITION p20200509 VALUES [("20200509"), ("20200510")),\n\nPARTITION p20200510 VALUES [("20200510"), ("20200511")),\n\nPARTITION p20200511 VALUES [("20200511"), ("20200512")))\n\nDISTRIBUTED BY HASH(`category`,`author`,`timestamp`) BUCKETS 4\n\nPROPERTIES (\n\n    "storage_type" = "COLUMN",\n\n    "replication_num" = "1"\n\n);\n\n\n\nCREATE ROUTINE LOAD example_db.test1 ON example_tbl\n\nCOLUMNS(category, author, price, timestamp, dt=from_unixtime(timestamp, \'%Y%m%d\'))\n\nPROPERTIES\n\n(\n\n    "desired_concurrent_number"="3",\n\n    "max_batch_interval" = "20",\n\n    "strict_mode" = "false",\n\n    "format" = "json",\n\n    "jsonpaths" = "[\\"$.category\\",\\"$.author\\",\\"$.price\\",\\"$.timestamp\\"]",\n\n    "strip_outer_array" = "true"\n\n)\n\nFROM KAFKA\n\n(\n\n    "kafka_broker_list" = "broker1:9092,broker2:9092,broker3:9092",\n\n    "kafka_topic" = "my_topic",\n\n    "kafka_partitions" = "0,1,2",\n\n    "kafka_offsets" = "0,0,0"\n\n);\n\nJSON data format:\n\n[\n\n{"category":"11","title":"SayingsoftheCentury","price":895,"timestamp":1589191587},\n\n{"category":"22","author":"2avc","price":895,"timestamp":1589191487},\n\n{"category":"33","author":"3avc","title":"SayingsoftheCentury","timestamp":1589191387}\n\n]\n'})}),"\n",(0,a.jsx)(n.p,{children:"Note:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["If the JSON data starts with an array and each object in the array is a record, strip",(0,a.jsx)(n.em,{children:"is required Outer"})," Array is set to true to flatten the array."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"If the JSON data starts with an array and each object in the array is a record, our ROOT node is actually an object in the array when setting jsonpath."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Users specify root node json_ root."}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-SQL",children:'CREATE ROUTINE LOAD example_db.test1 ON example_tbl\n\nCOLUMNS(category, author, price, timestamp, dt=from_unixtime(timestamp, \'%Y%m%d\'))\n\nPROPERTIES\n\n(\n\n    "desired_concurrent_number"="3",\n\n    "max_batch_interval" = "20",\n\n    "strict_mode" = "false",\n\n    "format" = "json",\n\n    "jsonpaths" = "[\\"$.category\\",\\"$.author\\",\\"$.price\\",\\"$.timestamp\\"]",\n\n    "strip_outer_array" = "true",\n\n    "json_root" = "$.RECORDS"\n\n)\n\nFROM KAFKA\n\n(\n\n    "kafka_broker_list" = "broker1:9092,broker2:9092,broker3:9092",\n\n    "kafka_topic" = "my_topic",\n\n    "kafka_partitions" = "0,1,2",\n\n    "kafka_offsets" = "0,0,0"\n\n);\n\nJSON data format:\n\n{\n\n"RECORDS":[\n\n{"category":"11","title":"SayingsoftheCentury","price":895,"timestamp":1589191587},\n\n{"category":"22","author":"2avc","price":895,"timestamp":1589191487},\n\n{"category":"33","author":"3avc","title":"SayingsoftheCentury","timestamp":1589191387}\n\n]\n\n}\n'})}),"\n",(0,a.jsx)(n.h2,{id:"keywords",children:"Keywords"}),"\n",(0,a.jsx)(n.p,{children:"CREATE, ROUTINE, LOAD"})]})}const p=function(e={}){const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,a.jsx)(n,Object.assign({},e,{children:(0,a.jsx)(d,e)})):d(e)}},11151:(e,n,t)=>{t.d(n,{Zo:()=>o,ah:()=>s});var a=t(67294);const r=a.createContext({});function s(e){const n=a.useContext(r);return a.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const i={};function o({components:e,children:n,disableParentContext:t}){let o;return o=t?"function"==typeof e?e({}):e||i:s(e),a.createElement(r.Provider,{value:o},n)}}}]);