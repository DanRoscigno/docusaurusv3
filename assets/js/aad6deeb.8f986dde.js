"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[98254],{28696:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=n(85893),s=n(11151);const i={},r="SPARK LOAD",o={id:"sql-reference/sql-statements/data-manipulation/SPARK_LOAD",title:"SPARK LOAD",description:"Description",source:"@site/versioned_docs/version-2.5/sql-reference/sql-statements/data-manipulation/SPARK_LOAD.md",sourceDirName:"sql-reference/sql-statements/data-manipulation",slug:"/sql-reference/sql-statements/data-manipulation/SPARK_LOAD",permalink:"/doc/docs/2.5/sql-reference/sql-statements/data-manipulation/SPARK_LOAD",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-2.5/sql-reference/sql-statements/data-manipulation/SPARK_LOAD.md",tags:[],version:"2.5",frontMatter:{},sidebar:"Chinese31",previous:{title:"SHOW TRANSACTION",permalink:"/doc/docs/2.5/sql-reference/sql-statements/data-manipulation/SHOW_TRANSACTION"},next:{title:"STOP ROUTINE LOAD",permalink:"/doc/docs/2.5/sql-reference/sql-statements/data-manipulation/STOP_ROUTINE_LOAD"}},l={},c=[{value:"Description",id:"description",level:2},{value:"Examples",id:"examples",level:2}];function d(e){const t=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",pre:"pre",div:"div",ol:"ol",li:"li"},(0,s.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"spark-load",children:"SPARK LOAD"}),"\n",(0,a.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,a.jsx)(t.p,{children:"Spark load preprocesses the imported data through external spark resources, improves the import performance of a large amount of StarRocks data, and saves the computing resources of StarRocks cluster. It is mainly used in the scenario of initial migration and large amount of data import into StarRocks."}),"\n",(0,a.jsxs)(t.p,{children:["Spark load is an asynchronous import method. Users need to create Spark type import tasks through MySQL protocol and view the import results through",(0,a.jsx)(t.code,{children:"SHOW LOAD"}),"."]}),"\n",(0,a.jsx)(t.p,{children:"Syntax"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sql",children:"LOAD LABEL load_label\n(\ndata_desc1[, data_desc2, ...]\n)\nWITH RESOURCE resource_name\n[resource_properties]\n[opt_properties]\n"})}),"\n",(0,a.jsx)(t.p,{children:"1.load_label"}),"\n",(0,a.jsx)(t.p,{children:"Label of the currently imported batch. Unique within a database."}),"\n",(0,a.jsx)(t.p,{children:"Syntax:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sql",children:"[database_name.]your_label\n"})}),"\n",(0,a.jsx)(t.p,{children:"2.data_desc"}),"\n",(0,a.jsx)(t.p,{children:"Used to describe a batch of imported data."}),"\n",(0,a.jsx)(t.p,{children:"Syntax:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sql",children:'DATA INFILE\n(\n"file_path1"[, file_path2, ...]\n)\n[NEGATIVE]\nINTO TABLE `table_name`\n[PARTITION (p1, p2)]\n[COLUMNS TERMINATED BY "column_separator"]\n[FORMAT AS "file_type"]\n[(column_list)]\n[COLUMNS FROM PATH AS (col2, ...)]\n[SET (k1 = func(k2))]\n[WHERE predicate]\n\nDATA FROM TABLE hive_external_tbl\n[NEGATIVE]\nINTO TABLE tbl_name\n[PARTITION (p1, p2)]\n[SET (k1=f1(xx), k2=f2(xx))]\n[WHERE predicate]\n'})}),"\n",(0,a.jsx)(t.p,{children:"Note"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-plain",metastring:"text",children:'file_path:\n\nThe file path can be specified to one file, or the * wildcard can be used to specify all files in a directory. Wildcards must match files, not directories.\n\nhive_external_tbl:\n\nhive external table name.\nIt is required that the columns in the imported starrocks table must exist in the hive external table.\nEach load task only supports loading from one Hive external table.\nCannot be used with file_ path mode at the same time.\n\nPARTITION:\n\nIf this parameter is specified, only the specified partition will be imported, and the data outside the imported partition will be filtered out.\nIf not specified, all partitions of table will be imported by default.\n\nNEGATIVE:\n\nIf this parameter is specified, it is equivalent to loading a batch of "negative" data. Used to offset the same batch of previously imported data.\nThis parameter is only applicable when the value column exists and the aggregation type of the value column is SUM only.\n\ncolumn_separator:\n\nSpecifies the column separator in the import file. Default is \\ t\nIf it is an invisible character, you need to prefix it with \\ \\ x and use hexadecimal to represent the separator.\nFor example, the separator of hive file \\ x01 is specified as "\\ \\ x01"\n\nfile_type:\n\nUsed to specify the type of imported file. Currently, supported file types are csv, orc, and parquet.\n\ncolumn_list:\n\nUsed to specify the correspondence between the columns in the import file and the columns in the table.\nWhen you need to skip a column in the import file, specify the column as a column name that does not exist in the table.\n\nSyntax:\n(col_name1, col_name2, ...)\n\nSET:\n\nIf specify this parameter, you can convert a column of the source file according to the function, and then import the converted results into table. Syntax is column_name = expression.\nOnly Spark SQL build_in functions are supported. Please refer to https://spark.apache.org/docs/2.4.6/api/sql/index.html.\nGive a few examples to help understand.\nExample 1: there are three columns "c1, c2, c3" in the table, and the first two columns in the source file correspond to (c1, c2), and the sum of the last two columns corresponds to C3; then columns (c1, c2, tmp_c3, tmp_c4) set (c3 = tmp_c3 + tmp_c4) needs to be specified;\nExample 2: there are three columns "year, month and day" in the table, and there is only one time column in the source file in the format of "2018-06-01 01:02:03".\nThen you can specify columns (tmp_time) set (year = year (tmp_time), month = month (tmp_time), day = day (tmp_time)) to complete the import.\n\nWHERE:\n\nFilter the transformed data, and only the data that meets the where condition can be imported. Only the column names in the table can be referenced in the WHERE statement\n'})}),"\n",(0,a.jsx)(t.p,{children:"3.resource_name"}),"\n",(0,a.jsxs)(t.p,{children:["The name of the spark resource used can be viewed through ",(0,a.jsx)(t.code,{children:"SHOW RESOURCES"})," command."]}),"\n",(0,a.jsx)(t.p,{children:"4.resource_properties"}),"\n",(0,a.jsx)(t.p,{children:"When you have a temporary need, such as modifying the Spark and HDFS configurations, you can set the parameters here, which takes effect only in this specific spark loading job and not to affect the existing configurations in the StarRocks cluster."}),"\n",(0,a.jsx)(t.p,{children:"5.opt_properties"}),"\n",(0,a.jsx)(t.p,{children:"Used to specify some special parameters."}),"\n",(0,a.jsx)(t.p,{children:"Syntax:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sql",children:'[PROPERTIES ("key"="value", ...)]\n'})}),"\n",(0,a.jsxs)(t.p,{children:["You can specify the following parameters:\ntimeout:         specifies the timeout of the import operation. The default timeout is 4 hours. In seconds.\nmax_filter_ratio",(0,a.jsx)(t.div,{}),' maximum allowable data proportion that can be filtered (for reasons such as non-standard data). The default is zero tolerance.\nstrict mode:     whether to strictly restrict the data. The default is false.\ntimezone:         specifies the time zone of some functions affected by the time zone, such as strftime / alignment_timestamp/from_unixtime, etc. Please refer to the [time zone] document for details. If not specified, the "Asia / Shanghai" time zone is used.']}),"\n",(0,a.jsx)(t.p,{children:"6.Import data format example"}),"\n",(0,a.jsx)(t.p,{children:'int (TINYINT/SMALLINT/INT/BIGINT/LARGEINT): 1, 1000, 1234\nfloat (FLOAT/DOUBLE/DECIMAL): 1.1, 0.23, .356\ndate (DATE/DATETIME) :2017-10-03, 2017-06-13 12:34:03.\n(Note: for other date formats, you can use strftime or time_format function to convert in the Import command) string class (CHAR/VARCHAR): "I am a student", "a"'}),"\n",(0,a.jsx)(t.p,{children:"NULL value: \\ N"}),"\n",(0,a.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Import a batch of data from HDFS, and specify the timeout time and filtering ratio. Use the name my_ spark resources for spark."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sql",children:'LOAD LABEL example_db.label1\n(\nDATA INFILE("hdfs://hdfs_host:hdfs_port/user/starRocks/data/input/file")\nINTO TABLE `my_table`\n)\nWITH RESOURCE \'my_spark\'\nPROPERTIES\n(\n    "timeout" = "3600",\n    "max_filter_ratio" = "0.1"\n);\n'})}),"\n",(0,a.jsx)(t.p,{children:"Where hdfs_host is the host of namenode, hdfs_port is fs.defaultfs port (default 9000)"}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:'Import a batch of "negative" data from HDFS, specify the separator as comma, use the wildcard * to specify all files in the directory, and specify the temporary parameters of spark resources.'}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sql",children:'LOAD LABEL example_db.label3\n(\nDATA INFILE("hdfs://hdfs_host:hdfs_port/user/starRocks/data/input/*")\nNEGATIVE\nINTO TABLE `my_table`\nCOLUMNS TERMINATED BY ","\n)\nWITH RESOURCE \'my_spark\'\n(\n    "spark.executor.memory" = "3g",\n    "broker.username" = "hdfs_user",\n    "broker.password" = "hdfs_passwd"\n);\n'})}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Import a batch of data from HDFS, specify the partition, and do some conversion on the columns of the imported file, as follows:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-plain",metastring:"text",children:'The table structure is:\nk1 varchar(20)\nk2 int\n\nAssume that the data file has only one line of data:\n\nAdele,1,1\n\nEach column in the data file corresponds to each column specified in the import statement:\nk1,tmp_k2,tmp_k3\n\nThe conversion is as follows:\n\n1. k1: no conversion\n2. k2:is the sum of tmp_ k2 and tmp_k3\n\nLOAD LABEL example_db.label6\n(\nDATA INFILE("hdfs://hdfs_host:hdfs_port/user/starRocks/data/input/file")\nINTO TABLE `my_table`\nPARTITION (p1, p2)\nCOLUMNS TERMINATED BY ","\n(k1, tmp_k2, tmp_k3)\nSET (\nk2 = tmp_k2 + tmp_k3\n)\n)\nWITH RESOURCE \'my_spark\';\n'})}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Extract the partition field in the file path"}),"\n",(0,a.jsx)(t.p,{children:"If necessary, the partitioned fields in the file path will be resolved according to the field types defined in the table, similar to the function of Partition Discovery in Spark"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sql",children:"LOAD LABEL example_db.label10\n(\nDATA INFILE(\"hdfs://hdfs_host:hdfs_port/user/starRocks/data/input/dir/city=beijing/*/*\")\nINTO TABLE `my_table`\n(k1, k2, k3)\nCOLUMNS FROM PATH AS (city, utc_date)\nSET (uniq_id = md5sum(k1, city))\n)\nWITH RESOURCE 'my_spark';\n"})}),"\n",(0,a.jsxs)(t.p,{children:["hdfs://hdfs_host",(0,a.jsx)(t.div,{}),"/user/starRocks/data/input/dir/city=beijing  The directory includes the following files:"]}),"\n",(0,a.jsxs)(t.p,{children:["[hdfs://hdfs_host",(0,a.jsx)(t.div,{}),"/user/starRocks/data/input/dir/city=beijing/utc_date=2019-06-26/0000.csv, hdfs://hdfs_host",(0,a.jsx)(t.div,{}),"/user/starRocks/data/input/dir/city=beijing/utc_date=2019-06-26/0001.csv, ...]"]}),"\n",(0,a.jsx)(t.p,{children:"The city and utc_date field in the file path are extracted"}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Filter the data to be imported. Only columns with k1 value greater than 10 can be imported."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sql",children:"LOAD LABEL example_db.label10\n(\nDATA INFILE(\"hdfs://hdfs_host:hdfs_port/user/starRocks/data/input/file\")\nINTO TABLE `my_table`\nWHERE k1 > 10\n)\nWITH RESOURCE 'my_spark';\n"})}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Import from the hive external table and convert the uuid column in the source table to the bitmap type through the global dictionary."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sql",children:"LOAD LABEL db1.label1\n(\nDATA FROM TABLE hive_t1\nINTO TABLE tbl1\nSET\n(\nuuid=bitmap_dict(uuid)\n)\n)\nWITH RESOURCE 'my_spark';\n"})}),"\n"]}),"\n"]})]})}const h=function(e={}){const{wrapper:t}=Object.assign({},(0,s.ah)(),e.components);return t?(0,a.jsx)(t,Object.assign({},e,{children:(0,a.jsx)(d,e)})):d(e)}},11151:(e,t,n)=>{n.d(t,{Zo:()=>o,ah:()=>i});var a=n(67294);const s=a.createContext({});function i(e){const t=a.useContext(s);return a.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const r={};function o({components:e,children:t,disableParentContext:n}){let o;return o=n?"function"==typeof e?e({}):e||r:i(e),a.createElement(s.Provider,{value:o},t)}}}]);