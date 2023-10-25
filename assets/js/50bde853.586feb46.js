"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[26080],{45703:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var o=t(85893),s=t(11151);const r={displayed_sidebar:"English"},i="Broker Load",a={id:"loading/BrokerLoad",title:"Broker Load",description:"StarRocks supports importing data from external storage systems such as Apache HDFS, Amazon S3, etc. The supported file formats are CSV, ORC File, Parquet, etc. The data volume is in the range of tens to hundreds of GB.",source:"@site/versioned_docs/version-2.0/loading/BrokerLoad.md",sourceDirName:"loading",slug:"/loading/BrokerLoad",permalink:"/docs/2.0/loading/BrokerLoad",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/loading/BrokerLoad.md",tags:[],version:"2.0",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"StarRocks",permalink:"/docs/2.0/introduction/StarRocks_intro"},next:{title:"Introduction",permalink:"/docs/2.0/loading/DataX-starrocks-writer"}},d={},l=[{value:"Terminology Explanation",id:"terminology-explanation",level:2},{value:"Fundamentals",id:"fundamentals",level:2},{value:"Supported Remote File Systems",id:"supported-remote-file-systems",level:2},{value:"Import Example",id:"import-example",level:2},{value:"Broker build",id:"broker-build",level:3},{value:"Create import job",id:"create-import-job",level:3},{value:"Checking import job status",id:"checking-import-job-status",level:3},{value:"Cancel import job",id:"cancel-import-job",level:3},{value:"Related Configuration",id:"related-configuration",level:2},{value:"Parallelism",id:"parallelism",level:3},{value:"Frequently Asked Questions",id:"frequently-asked-questions",level:2}];function c(e){const n=Object.assign({h1:"h1",p:"p",strong:"strong",h2:"h2",ul:"ul",li:"li",img:"img",h3:"h3",a:"a",pre:"pre",code:"code",blockquote:"blockquote",ol:"ol",div:"div"},(0,s.ah)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"broker-load",children:"Broker Load"}),"\n",(0,o.jsx)(n.p,{children:"StarRocks supports importing data from external storage systems such as Apache HDFS, Amazon S3, etc. The supported file formats are CSV, ORC File, Parquet, etc. The data volume is in the range of tens to hundreds of GB."}),"\n",(0,o.jsxs)(n.p,{children:["In broker load, StarRocks reads data from the corresponding data sources (e.g. HDFS, S3) through the deployed broker program, and uses its own computing resources to pre-process and import the data. This is an ",(0,o.jsx)(n.strong,{children:"asynchronous"})," import method that the user needs to create the import job via the MySQL protocol and view the import result by command."]}),"\n",(0,o.jsx)(n.p,{children:"This section introduces broker load basics, examples, best practices, and frequently asked questions."}),"\n",(0,o.jsx)(n.h2,{id:"terminology-explanation",children:"Terminology Explanation"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Broker: Broker is a standalone stateless process that encapsulates the file system interface and provides StarRocks with the ability to read files from remote storage systems."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Plan: Import execution plan. BE executes an import execution plan to import data into the StarRocks system."}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"fundamentals",children:"Fundamentals"}),"\n",(0,o.jsx)(n.p,{children:"After the user submits the import job, the FE generates and distributes the corresponding plan to multiple BEs based on the data volume. Each BE executes a part of the import job. Once all the BEs finish importing, the FE will determine whether the import is successful or not."}),"\n",(0,o.jsx)(n.p,{children:"The following diagram shows the main flow of broker load."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"brokerload",src:t(78816).Z+"",width:"1331",height:"1673"})}),"\n",(0,o.jsx)(n.h2,{id:"supported-remote-file-systems",children:"Supported Remote File Systems"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Apache HDFS"}),"\n",(0,o.jsx)(n.li,{children:"Amazon S3"}),"\n",(0,o.jsx)(n.li,{children:"Alibaba Cloud OSS"}),"\n",(0,o.jsx)(n.li,{children:"Tencent COS"}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"import-example",children:"Import Example"}),"\n",(0,o.jsx)(n.h3,{id:"broker-build",children:"Broker build"}),"\n",(0,o.jsx)(n.p,{children:"Broker Load needs a broker to access the remote storage, so a broker needs to be built first."}),"\n",(0,o.jsxs)(n.p,{children:["You can refer to the manual deployment (",(0,o.jsx)(n.a,{href:"/docs/2.0/quick_start/Deploy",children:"Deploy Broker"}),")."]}),"\n",(0,o.jsx)(n.h3,{id:"create-import-job",children:"Create import job"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-SQL",children:"LOAD LABEL db_name.label_name \n    (data_desc, ...)\nWITH BROKER broker_name broker_properties\n    [PROPERTIES (key1=value1, ... )]\n\ndata_desc:\n    DATA INFILE ('file_path', ...)\n    [NEGATIVE]\n    INTO TABLE tbl_name\n    [PARTITION (p1, p2)]\n    [COLUMNS TERMINATED BY column_separator ]\n    [FORMAT AS file_type]\n    [(col1, ...)]\n    [COLUMNS FROM PATH AS (colx, ...)]\n    [SET (k1=f1(xx), k2=f2(xx))]\n    [WHERE predicate]\n\nbroker_properties: \n    (key2=value2, ...)\n"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Example 1 import from Apache HDFS:"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sql",children:'LOAD LABEL db1.label1\n(\n    DATA INFILE("hdfs://abc.com:8888/user/palo/test/ml/file1")\n    INTO TABLE tbl1\n    COLUMNS TERMINATED BY ","\n    (tmp_c1, tmp_c2)\n    SET\n    (\n        id=tmp_c2,\n        name=tmp_c1\n    ),\n\n    DATA INFILE("hdfs://abc.com:8888/user/palo/test/ml/file2")\n    INTO TABLE tbl2\n    COLUMNS TERMINATED BY ","\n    (col1, col2)\n    where col1 > 1\n)\nWITH BROKER \'broker\'\n(\n    "username" = "hdfs_username",\n    "password" = "hdfs_password"\n)\nPROPERTIES\n(\n    "timeout" = "3600"\n);\n'})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Example 2 import from Alibaba Cloud OSS:"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-SQL",children:'LOAD LABEL example_db.label12\n(\n    DATA INFILE("oss://my_bucket/input/file.csv")\n    INTO TABLE `my_table`\n    (k1, k2, k3)\n)\nWITH BROKER my_broker\n(\n    "fs.oss.accessKeyId" = "xxxxxxxxxxxxxxxxxxxxxxxxxx",\n    "fs.oss.accessKeySecret" = "yyyyyyyyyyyyyyyyyyyy",\n    "fs.oss.endpoint" = "oss-cn-zhangjiakou-internal.aliyuncs.com"\n)\n'})}),"\n",(0,o.jsx)(n.p,{children:"Here we introduce the parameters shown in the command."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Label:"})}),"\n",(0,o.jsxs)(n.p,{children:["The label of the import job. Each import job has ",(0,o.jsx)(n.strong,{children:"a unique label inside the database"}),". A label is a user-defined name in the import command. It allows the user to view the execution of the corresponding import job and it can be used to prevent the same data from being imported repeatedly. When the status of the import job is ",(0,o.jsx)(n.code,{children:"FINISHED"}),", the corresponding label cannot be used again. When the status of the import job is ",(0,o.jsx)(n.code,{children:"CANCELLED"}),", ",(0,o.jsx)(n.strong,{children:"the Label can be used again"}),"."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Data Description Parameters:"})}),"\n",(0,o.jsxs)(n.p,{children:["Data description parameters refer to the parameters of the ",(0,o.jsx)(n.code,{children:"data_desc"})," section in the statement. The ",(0,o.jsx)(n.code,{children:"data_desc"})," statement declares the information including data source address, ETL function, target table, and partition involved in this import job. Detailed description of data description parameters are as follows:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Multi-Table Import"}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Broker load supports multiple tables involved in one import job, which can be achieved by declaring multiple tables with multiple ",(0,o.jsx)(n.code,{children:"data_desc"}),". Each ",(0,o.jsx)(n.code,{children:"data-desc"})," shows the address of a data source belonging to ",(0,o.jsx)(n.strong,{children:"that table"}),". Multiple file-paths can be declared for importing the same table. Broker load guarantees the atomicity of imports."]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"file_path"}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["The file path can be specified to a single file or to all files in a directory using ",(0,o.jsx)(n.code,{children:"*"}),". Intermediate directories can also be matched with wildcards."]}),"\n",(0,o.jsxs)(n.p,{children:["The wildcards that can be used are ",(0,o.jsx)(n.code,{children:"? * [] {} ^"}),", ",(0,o.jsx)(n.a,{href:"https://hadoop.apache.org/docs/stable/api/org/apache/hadoop/fs/FileSystem.html#globStatus-org.apache.hadoop.fs.Path-",children:"wildcard usage rules reference"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["For example:\nUsers can match all files in all partitions under ",(0,o.jsx)(n.code,{children:"tablename"})," by ",(0,o.jsx)(n.code,{children:"hdfs://hdfs_host:hdfs_port/user/data/tablename/*/*"})," .\nUsers can match all files in all ",(0,o.jsx)(n.code,{children:"April"})," partitions under ",(0,o.jsx)(n.code,{children:"tablename"}),"by ",(0,o.jsx)(n.code,{children:"hdfs://hdfs_host:hdfs_port/user/data/tablename/dt=202104*/*"}),"."]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"negative"}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"Data_desc"})," also allows you to reverse the imported data. This function is applicable when the aggregated columns in the data table are all of the ",(0,o.jsx)(n.code,{children:"SUM"})," type. If you want to undo a batch of imported data, you can import the same batch of data with the ",(0,o.jsx)(n.code,{children:"negative"})," parameter. StarRocks will automatically invert the data on the aggregated columns, and yet remove the imported data."]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"partition"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"data_desc"}),' allows you to specify the partition of the table to where data is imported. If the data to be imported does not belong to the specified partition, it will not be imported and considered as "wrong data". For data that you do not want to import nor to record as "wrong data", you can use ',(0,o.jsx)(n.code,{children:"where predicate"})," to filter it."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"column separator"}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Specify the column separator in the import file. The default is ",(0,o.jsx)(n.code,{children:"t"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["If it is an invisible character, you need to add ",(0,o.jsx)(n.code,{children:"x"})," as a prefix and use hexadecimal to represent the separator. For example, the separator ",(0,o.jsx)(n.code,{children:"x01"})," of the hive file is specified as ",(0,o.jsx)(n.code,{children:"\\x01"}),"."]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"file type"}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Specify the type of the imported file (e.g. parquet, orc, csv). The default is csv."}),"\n",(0,o.jsxs)(n.p,{children:["The parquet type can also be recognized by the file suffix ",(0,o.jsx)(n.strong,{children:".parquet"})," or ",(0,o.jsx)(n.strong,{children:".parq"}),"."]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"COLUMNS FROM PATH AS"}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Extracts the partition fields in the file path."}),"\n",(0,o.jsxs)(n.p,{children:["Example: If the imported file is ",(0,o.jsx)(n.code,{children:"/path/col_name=col_value/dt=20210101/file1"}),", and ",(0,o.jsx)(n.code,{children:"col_name/dt"})," is a column in the table, set the following statement to import ",(0,o.jsx)(n.code,{children:"col_value"})," and ",(0,o.jsx)(n.code,{children:"20210101"})," into the columns ",(0,o.jsx)(n.code,{children:"col_name"})," and ",(0,o.jsx)(n.code,{children:"dt"})," respectively."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-SQL",children:"...\n(col1, col2)\nCOLUMNS FROM PATH AS (col_name, dt)\n"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"set column mapping"}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"SET"})," statement in ",(0,o.jsx)(n.code,{children:"data_desc"})," is responsible for setting a column\u2019s ",(0,o.jsx)(n.strong,{children:"conversion function"}),", which supports all equivalent functions. This statement is needed if the columns of the original data do not correspond to the columns in the table."]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"where predicate"}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"WHERE"})," statement in ",(0,o.jsx)(n.code,{children:"data_desc"})," is responsible for filtering the data that has been transformed. The filtered data is not counted in the tolerance rate. If multiple conditions about the same table are declared in multiple ",(0,o.jsx)(n.code,{children:"data-desc"}),", they are merged with ",(0,o.jsx)(n.code,{children:"AND"}),"."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Import job parameters:"})}),"\n",(0,o.jsxs)(n.p,{children:["Import job parameters are parameters that belong to the ",(0,o.jsx)(n.code,{children:"opt_properties"})," section, and are applied to the entire import job. See the following for parameter details."]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"timeout"}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["The timeout value (in seconds) for importing jobs. You can set the timeout value for each import in ",(0,o.jsx)(n.code,{children:"opt_properties"}),". The import job will be ",(0,o.jsx)(n.code,{children:"CANCELLED"})," if it is not completed within the set time limit. The default import timeout for broker load is 4 hours."]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"Note: Normally, users do not need to set this parameter unless the import cannot be completed within the default time."}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"The recommended timeout value is calculated as follows."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.code,{children:"Timeout value > ((Total file size (MB) * Number of tables to be imported and related Roll up tables) / (10 * Number of import concurrency))"})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"number of import concurrency"})," is described in the import system configuration at the end of the document. ",(0,o.jsx)(n.code,{children:"10"})," indicates the current default speed limit for BE import (i.e. 10MB/s)."]}),"\n",(0,o.jsx)(n.p,{children:"For example, for a 1GB data to be imported to a table which contains 2 rollup tables, with a import concurrency of 3, the minimum value of timeout is (1 * 1024 * 3 ) / (10 * 3) = 102 seconds."}),"\n",(0,o.jsx)(n.p,{children:"Since each StarRocks cluster has its unique machine environment and different concurrent query tasks, the slowest import speed of a StarRocks cluster needs to be speculated by the user based on the historical import job speed."}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"max_filter_ratio"}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"The maximum fault tolerance rate of the import job with a default value of 0 and a range of 0 to 1. When the error rate of the import job exceeds this value, the job will fail."}),"\n",(0,o.jsx)(n.p,{children:"Users can set this value greater than 0 to ensure data import despite erroneous rows."}),"\n",(0,o.jsx)(n.p,{children:"The calculation formula is"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.code,{children:"max_filter_ratio = (dpp.abnorm.ALL / (dpp.abnorm.ALL + dpp.norm.ALL ) )"})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"dpp.abnorm.ALL"})," is the number of rows with unqualified data quality, such as type mismatch, column mismatch, length mismatch, etc."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"dpp.norm.ALL"})," is the number of rows with correct data during the import. Users can use the ",(0,o.jsx)(n.code,{children:"SHOW LOAD"})," command to check the correct amount of data for the import job."]}),"\n",(0,o.jsx)(n.p,{children:"Number of rows in the original file = dpp.abnorm.ALL + dpp.norm.ALL"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"exec_mem_limit"}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Import memory limit (in bytes), with a default value of 2GB."}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"strict_mode"}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"strict_mode"}),' of broker load can be turned on by setting      "strict_mode" = "true". The default is off.']}),"\n",(0,o.jsx)(n.p,{children:"Strict mode means to strictly filter column type conversion during import. The strict filtering policy is as follows."}),"\n",(0,o.jsx)(n.p,{children:"1.For column type conversion, the wrong data will be filtered out under strict mode. Here the wrong data refers to data which is not null originally but turned into null after being converted."}),"\n",(0,o.jsx)(n.p,{children:"However, this policy does not apply to the following scenarios     :"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["For an imported column ",(0,o.jsx)(n.strong,{children:"generated by a conversion function"}),", strict mode has no effect on it."]}),"\n",(0,o.jsxs)(n.li,{children:["An imported column containing a range restriction can be converted to a target type regardless of its range restriction. The strict mode will have no effect on it. For example, if the data type of the target column is ",(0,o.jsx)(n.code,{children:"decimal(1,0)"}),", but the original data being imported is ",(0,o.jsx)(n.code,{children:"10"}),", the import can satisfythe type conversion but not the range restriction. In this case, strict mode has no effect on the import."]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"checking-import-job-status",children:"Checking import job status"}),"\n",(0,o.jsxs)(n.p,{children:["Broker load is asynchronous, and users can specify labels in the ",(0,o.jsx)(n.code,{children:"SHOW LOAD"})," command to check execution status. It should be noted that the ",(0,o.jsx)(n.code,{children:"SHOW LOAD"})," command can only be used to view load jobs being asynchronously imported. Synchronous load jobs, such as stream load, cannot be viewed with the ",(0,o.jsx)(n.code,{children:"SHOW LOAD"})," command."]}),"\n",(0,o.jsx)(n.p,{children:"Example:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sql",children:'mysql> show load where label = \'label1\'\\G\n*************************** 1. row ***************************\n         JobId: 76391\n         Label: label1\n         State: FINISHED\n      Progress: ETL:N/A; LOAD:100%\n          Type: BROKER\n       EtlInfo: unselected.rows=4; dpp.abnorm.ALL=15; dpp.norm.ALL=28133376\n      TaskInfo: cluster:N/A; timeout(s):10800; max_filter_ratio:5.0E-5\n      ErrorMsg: N/A\n    CreateTime: 2019-07-27 11:46:42\n  EtlStartTime: 2019-07-27 11:46:44\n EtlFinishTime: 2019-07-27 11:46:44\n LoadStartTime: 2019-07-27 11:46:44\nLoadFinishTime: 2019-07-27 11:50:16\n           URL: http://192.168.1.1:8040/api/_load_error_log?file=__shard_4/error_log_insert_stmt_4bb00753932c491a-a6da6e2725415317_4bb00753932c491a_a6da6e2725415317\n    JobDetails: {"Unfinished backends":{"9c3441027ff948a0-8287923329a2b6a7":[10002]},"ScannedRows":2390016,"TaskNumber":1,"All backends":{"9c3441027ff948a0-8287923329a2b6a7":[10002]},"FileNumber":1,"FileSize":1073741824}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["The following describes the parameters returned by the ",(0,o.jsx)(n.code,{children:"SHOW LOAD"})," command."]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["JobId: The unique ID of the imported job. The JobId is different for each imported job and is automatically generated by the system. Unlike labels, JobId ",(0,o.jsx)(n.strong,{children:"will never be the same"}),", while labels can be reused after the import job fails."]}),"\n",(0,o.jsx)(n.li,{children:"Label: Identifier of the imported job."}),"\n",(0,o.jsxs)(n.li,{children:["State: The current state of the import job. The two main states of an import \u2013-",(0,o.jsx)(n.code,{children:"PENDING"})," and ",(0,o.jsx)(n.code,{children:"LOADING"}),"-- occur during the broker load. ",(0,o.jsx)(n.code,{children:"PENDING"})," indicates the import job is waiting to be executed, while ",(0,o.jsx)(n.code,{children:"LOADING"})," indicates the job is being executed."]}),"\n",(0,o.jsxs)(n.li,{children:["There are two final stages of an import job \u2013",(0,o.jsx)(n.code,{children:"CANCELLED"})," and ",(0,o.jsx)(n.code,{children:"FINISHED"}),"; both indicate the import job is completed. ",(0,o.jsx)(n.code,{children:"CANCELLED"})," indicates an import failure, while ",(0,o.jsx)(n.code,{children:"FINISHED"})," indicates an import success."]}),"\n",(0,o.jsxs)(n.li,{children:["Progress: The progress description of the import job. There are two types of progress \u2013",(0,o.jsx)(n.code,{children:"ETL"})," and ",(0,o.jsx)(n.code,{children:"LOAD"}),", both of which      correspond to the two phases of the import process. ",(0,o.jsx)(n.code,{children:"ETL"})," is fixed to ",(0,o.jsx)(n.code,{children:"N/A"})," since the broker load does not have this stage presently, while the progress range of ",(0,o.jsx)(n.code,{children:"load"})," is 0~100%. ",(0,o.jsx)(n.code,{children:"Load progress = (the number of tables currently completed import / the total number of tables designed for this import job) * 100%"})]}),"\n",(0,o.jsx)(n.li,{children:"The load progress will be 99% after all data have been imported and changed to 100% after the import takes effect."}),"\n"]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"Note: The import progress is not linear, so if the progress does not change for a period of time, it does not mean that the import is not executing."}),"\n"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Type: The type of the imported job. Type for broker load takes the value ",(0,o.jsx)(n.code,{children:"BROKER"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["EtlInfo: Contains parameters of the imported data volume, such as ",(0,o.jsx)(n.code,{children:"unselected.rows"}),", ",(0,o.jsx)(n.code,{children:"dpp.norm.ALL"})," and ",(0,o.jsx)(n.code,{children:"dpp.abnorm.ALL"}),". The first parameter can be used to determine how many rows are filtered by the ",(0,o.jsx)(n.code,{children:"where"})," condition, and the last two parameters verify that the error rate of the current import job does not exceed      ",(0,o.jsx)(n.code,{children:"max-filter-ratio"}),". The sum of the three parameters is the total number of rows in the original data volume."]}),"\n",(0,o.jsx)(n.li,{children:"TaskInfo: Mainly shows parameters of the current import job, that is, the parameters specified by the user when creating the Broker Load import job. Those include cluster, timeout and max-filter-ratio."}),"\n",(0,o.jsxs)(n.li,{children:["ErrorMsg: If the status of the import job is ",(0,o.jsx)(n.code,{children:"CANCELLED"}),", the reason for failure is displayed by ErrorMsg. Each ErrorMsg includes type and msg. N/A is displayed if the import job is successful."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["The meaning of the values of ",(0,o.jsx)(n.strong,{children:"type"})," :"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"USER-CANCEL: The job that is cancelled by the user."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"ETL-RUN-FAIL: The job that failed in the ETL phase."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"ETL-QUALITY-UNSATISFIED: Data quality failed, i.e. the error data rate exceeded max-filter-ratio."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"LOAD-RUN-FAIL: The job that failed in the LOADING phase."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"TIMEOUT: The job that failed to complete within the timeout period."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"UNKNOWN: Unknown import error."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"CreateTime/EtlStartTime/EtlFinishTime/LoadStartTime/LoadFinishTime: This value represents the import creation time, ETL phase start time, ETL phase completion time, Loading phase start time and the entire import job completion time."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Broker Load import has no ETL phase, so its ",(0,o.jsx)(n.code,{children:"EtlStartTime"}),", ",(0,o.jsx)(n.code,{children:"EtlFinishTime"}),", ",(0,o.jsx)(n.code,{children:"LoadStartTime"})," are set to the same value."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["If the import job stays at ",(0,o.jsx)(n.code,{children:"CreateTime"})," for a long time and ",(0,o.jsx)(n.code,{children:"LoadStartTime"})," is N/A, the import job is currently heavily stacked and the user should reduce the frequency of import commits."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.code,{children:"LoadFinishTime - CreateTime = time consumed by the entire import task"})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"LoadFinishTime - LoadStartTime = execution time of the entire Broker load import job = time consumed by the entire import job - wait time of the import job"}),"."]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"URL: Sample error data for the import job, which can be obtained by accessing the URL address. When no error data exists for this import, the URL field is N/A."}),"\n",(0,o.jsx)(n.li,{children:"JobDetails: Shows the detailed status of the job, including the number of imported files, the total size (bytes), the number of subtasks, the number of raw rows processed, the BE node Id of running subtasks, and the BE node id of incomplete jobs."}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.code,{children:'{"Unfinished backends":{"9c3441027ff948a0-8287923329a2b6a7":[10002]},"ScannedRows":2390016,"TaskNumber":1,"All backends":{"9c3441027ff948a0-8287923329a2b6a7":[10002]},"FileNumber":1,"FileSize":1073741824}'})}),"\n",(0,o.jsx)(n.p,{children:"The original number of rows processed is updated every 5 seconds. This number of rows is only used to show the current progress, and does not represent the actual number of rows processed in total. The total number of rows processed is displayed in EtlInfo."}),"\n",(0,o.jsx)(n.h3,{id:"cancel-import-job",children:"Cancel import job"}),"\n",(0,o.jsxs)(n.p,{children:["When the status of the broker load job is not ",(0,o.jsx)(n.code,{children:"CANCELLED"})," or ",(0,o.jsx)(n.code,{children:"FINISHED"}),", it can be cancelled manually by the user. To cancel, specify the label of the import job."]}),"\n",(0,o.jsx)(n.h2,{id:"related-configuration",children:"Related Configuration"}),"\n",(0,o.jsx)(n.h3,{id:"parallelism",children:"Parallelism"}),"\n",(0,o.jsxs)(n.p,{children:["A job can be split into one or more subtasks, and the subtasks are executed in parallel. The splitting is determined by the DataDescription in the ",(0,o.jsx)(n.code,{children:"LOAD"})," statement. For example,"]}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["When multiple ",(0,o.jsx)(n.code,{children:"DataDescriptions"})," correspond to the import of multiple different tables, each will be split into one subtask."]}),"\n",(0,o.jsxs)(n.li,{children:["When multiple ",(0,o.jsx)(n.code,{children:"DataDescriptions"})," correspond to the import of different partitions of the same table, each will also be split into one subtask."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Each task is also split into one or more instances, which are then equally distributed to BEs for parallel execution. The splitting =is determined by the following FE configuration.\n",(0,o.jsx)(n.code,{children:"min_bytes_per_broker_scanner"}),": The minimum amount of data to be processed by a single instance, with a default value of 64MB.\n",(0,o.jsx)(n.code,{children:"max_broker_concurrency"}),": The maximum number of concurrent instances for a single job, with a default value of 100.\n",(0,o.jsx)(n.code,{children:"load_parallel_instance_num"}),": The number of concurrent instances on a single BE, with a default value of 1.\n",(0,o.jsx)(n.code,{children:"Total number of instances = min(total import file size / minimum amount of data handled by a single instance, maximum number of concurrent instances for a single job, number of concurrent instances on a single BE * number of BEs)"})]}),"\n",(0,o.jsxs)(n.p,{children:["In general, a job has only one ",(0,o.jsx)(n.code,{children:"DataDescription"})," and will be split into only one task. The task will be split into instances equal to the number of BEs and then assigned to those BEs for parallel execution."]}),"\n",(0,o.jsx)(n.h2,{id:"frequently-asked-questions",children:"Frequently Asked Questions"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Q: Error reported for data quality issue: ",(0,o.jsx)(n.code,{children:"ETL_QUALITY_UNSATISFIED; msg:quality not good enough to cancel"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"A: Please refer to Import Overview/FAQ`."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Q: Import error: ",(0,o.jsx)(n.code,{children:"failed to send batch"})," or ",(0,o.jsx)(n.code,{children:"TabletWriter add batch with unknown id"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["A: Modify ",(0,o.jsx)(n.code,{children:"query_timeout"})," and ",(0,o.jsx)(n.code,{children:"streaming_load_rpc_max_alive_time_sec"})," appropriately. Please refer to Import Overview/Common System Configuration/BE Configuration      ."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Q\uff1aImport error: ",(0,o.jsx)(n.code,{children:"LOAD-RUN-FAIL; msg:Invalid Column Name:xxx"})]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"A\uff1aIf the data is in parquet or ORC format, keep the column name in the file header consistent with the one in the StarRocks table, for example:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sql",children:"(tmp_c1,tmp_c2)\nSET\n(\n   id=tmp_c2,\n   name=tmp_c1\n)\n"})}),"\n",(0,o.jsxs)(n.p,{children:["This means the column with (tmp_c1, tmp_c2) as column name in parquet or ORC file is mapped to (id, name) column in the StarRocks table. If ",(0,o.jsx)(n.code,{children:"SET"})," is not declared, the columns are imported in order."]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:["Note: If you use ORC files generated directly from some versions of Hive, the table header in the ORC file is not Hive meta data but ",(0,o.jsx)(n.code,{children:"(_col0, _col1, _col2, ...)"}),", which may lead to ",(0,o.jsx)(n.code,{children:"Invalid Column Name error"}),". In that case, use ",(0,o.jsx)(n.code,{children:"set"})," for mapping."]}),"\n"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Q\uff1aOther errors."}),"\n",(0,o.jsxs)(n.p,{children:["A: For other issues such as jobs that take a long time to complete, you can go to ",(0,o.jsx)(n.code,{children:"log/be.INFO"})," in BE and search for ",(0,o.jsx)(n.code,{children:"kafka error"})," for specific reasons."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Q: How to configure Hadoop HA"}),"\n",(0,o.jsx)(n.p,{children:"A: The following configuration is used to access an HDFS cluster deployed in HA mode."}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"dfs.nameservices"}),": Customized name of the HDFS service, e.g. ",(0,o.jsx)(n.code,{children:"dfs.nameservices"})," = ",(0,o.jsx)(n.code,{children:"my_ha"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"dfs.ha.namenodes.xxx"}),": Customized name of the namenode as the ",(0,o.jsx)(n.code,{children:"xxx"}),', multiple names can be separated by commas, e.g. "dfs.ha.namenodes.my_ha" = "my_nn".']}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"dfs.namenode.rpc-address.xxx.nn"}),": The rpc address for the namenode where nn indicates the name of the configured namenode in ",(0,o.jsx)(n.code,{children:"dfs.ha.namenodes.xxx"}),'. e.g. "dfs.namenode.rpc-address.my_ha.my_nn" = "host',(0,o.jsx)(n.div,{}),'".']}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"dfs.client.failover.proxy.provider"}),": The provider of the client to connect to the namenode with a default value of ",(0,o.jsx)(n.code,{children:"org.apache.hadoop.hdfs.server.namenode.ha. ConfiguredFailoverProxyProvider"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"For example:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sql",children:'(\n   "dfs.nameservices" = "my-ha",\n   "dfs.ha.namenodes.my-ha" = "my-namenode1, my-namenode2",\n   "dfs.namenode.rpc-address.my-ha.my-namenode1" = "nn1-host:rpc_port",\n   "dfs.namenode.rpc-address.my-ha.my-namenode2" = "nn2-host:rpc_port",\n   "dfs.client.failover.proxy.provider" = "org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider"\n)\n\n'})}),"\n",(0,o.jsx)(n.p,{children:"HA mode can be combined with the previous two authentication methods for cluster access. For example, accessing HA HDFS through simple authentication:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sql",children:'(\n    "username"="user",\n    "password"="passwd",\n    "dfs.nameservices" = "my-ha",\n    "dfs.ha.namenodes.my-ha" = "my_namenode1, my_namenode2",\n    "dfs.namenode.rpc-address.my-ha.my-namenode1" = "nn1-host:rpc_port",\n    "dfs.namenode.rpc-address.my-ha.my-namenode2" = "nn2-host:rpc_port",\n    "dfs.client.failover.proxy.provider" = "org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider"\n)\n\n'})}),"\n",(0,o.jsxs)(n.p,{children:["HDFS cluster configuration can be written in the ",(0,o.jsx)(n.code,{children:"hdfs-site.xml file"}),". When using the Broker process to read information of an HDFS cluster, fill in the file path name and authentication information of the cluster."]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Q: How to configure Hadoop ViewFS (federation)"}),"\n",(0,o.jsxs)(n.p,{children:["A: Copy the ViewFS related configuration ",(0,o.jsx)(n.code,{children:"core-site.xml"})," and ",(0,o.jsx)(n.code,{children:"hdfs-site.xml"})," to ",(0,o.jsx)(n.code,{children:"broker/conf"}),"."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["If there is a custom FileSystem, copy the relevant jar to      ",(0,o.jsx)(n.code,{children:"broker/lib"}),"."]})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,s.ah)(),e.components);return n?(0,o.jsx)(n,Object.assign({},e,{children:(0,o.jsx)(c,e)})):c(e)}},78816:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/4.2.2-1-3f28545c160c67e87bc0d8e454d67dda.png"},11151:(e,n,t)=>{t.d(n,{Zo:()=>a,ah:()=>r});var o=t(67294);const s=o.createContext({});function r(e){const n=o.useContext(s);return o.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const i={};function a({components:e,children:n,disableParentContext:t}){let a;return a=t?"function"==typeof e?e({}):e||i:r(e),o.createElement(s.Provider,{value:a},n)}}}]);