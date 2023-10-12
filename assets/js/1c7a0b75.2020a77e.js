"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[37328,75525],{5251:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var t=a(85893),s=a(11151);const r={},i=void 0,l={id:"assets/commonMarkdown/insertPrivNote",title:"insertPrivNote",description:"NOTICE",source:"@site/versioned_docs/version-3.1/assets/commonMarkdown/insertPrivNote.md",sourceDirName:"assets/commonMarkdown",slug:"/assets/commonMarkdown/insertPrivNote",permalink:"/doc/docs/assets/commonMarkdown/insertPrivNote",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/assets/commonMarkdown/insertPrivNote.md",tags:[],version:"3.1",frontMatter:{}},o={},c=[];function d(e){const n=Object.assign({blockquote:"blockquote",p:"p",strong:"strong",a:"a"},(0,s.ah)(),e.components);return(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"NOTICE"})}),"\n",(0,t.jsxs)(n.p,{children:["You can load data into StarRocks tables only as a user who has the INSERT privilege on those StarRocks tables. If you do not have the INSERT privilege, follow the instructions provided in ",(0,t.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/account-management/GRANT",children:"GRANT"})," to grant the INSERT privilege to the user that you use to connect to your StarRocks cluster."]}),"\n"]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,s.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(d,e)})):d(e)}},12827:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var t=a(85893),s=a(11151),r=a(5251);const i={},l="Load data using Stream Load transaction interface",o={id:"loading/Stream_Load_transaction_interface",title:"Load data using Stream Load transaction interface",description:"From v2.4 onwards, StarRocks provides a Stream Load transaction interface to implement two-phase commit (2PC) for transactions that are run to load data from external systems such as Apache Flink\xae and Apache Kafka\xae. The Stream Load transaction interface helps improve the performance of highly concurrent stream loads.",source:"@site/versioned_docs/version-3.1/loading/Stream_Load_transaction_interface.md",sourceDirName:"loading",slug:"/loading/Stream_Load_transaction_interface",permalink:"/doc/docs/loading/Stream_Load_transaction_interface",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/loading/Stream_Load_transaction_interface.md",tags:[],version:"3.1",frontMatter:{},sidebar:"Chinese31",previous:{title:"Load data using INSERT",permalink:"/doc/docs/loading/InsertInto"},next:{title:"Realtime synchronization from MySQL",permalink:"/doc/docs/loading/Flink_cdc_load"}},c={},d=[{value:"Description",id:"description",level:2},{value:"Transaction management",id:"transaction-management",level:3},{value:"Transaction pre-commit",id:"transaction-pre-commit",level:3},{value:"Data write",id:"data-write",level:3},{value:"Transaction deduplication",id:"transaction-deduplication",level:3},{value:"Transaction timeout management",id:"transaction-timeout-management",level:3},{value:"Benefits",id:"benefits",level:2},{value:"Limits",id:"limits",level:2},{value:"Precautions",id:"precautions",level:2},{value:"Basic operations",id:"basic-operations",level:2},{value:"Prepare sample data",id:"prepare-sample-data",level:3},{value:"Start a transaction",id:"start-a-transaction",level:3},{value:"Syntax",id:"syntax",level:4},{value:"Example",id:"example",level:4},{value:"Return result",id:"return-result",level:4},{value:"Write data",id:"write-data",level:3},{value:"Syntax",id:"syntax-1",level:4},{value:"Example",id:"example-1",level:4},{value:"Return result",id:"return-result-1",level:4},{value:"Pre-commit a transaction",id:"pre-commit-a-transaction",level:3},{value:"Syntax",id:"syntax-2",level:4},{value:"Example",id:"example-2",level:4},{value:"Return result",id:"return-result-2",level:4},{value:"Commit a transaction",id:"commit-a-transaction",level:3},{value:"Syntax",id:"syntax-3",level:4},{value:"Example",id:"example-3",level:4},{value:"Return result",id:"return-result-3",level:4},{value:"Roll back a transaction",id:"roll-back-a-transaction",level:3},{value:"Syntax",id:"syntax-4",level:4},{value:"Example",id:"example-4",level:4},{value:"Return result",id:"return-result-4",level:4},{value:"References",id:"references",level:2}];function h(e){const n=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",ul:"ul",li:"li",code:"code",blockquote:"blockquote",strong:"strong",ol:"ol",pre:"pre",h4:"h4",a:"a"},(0,s.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"load-data-using-stream-load-transaction-interface",children:"Load data using Stream Load transaction interface"}),"\n","\n","\n",(0,t.jsx)(n.p,{children:"From v2.4 onwards, StarRocks provides a Stream Load transaction interface to implement two-phase commit (2PC) for transactions that are run to load data from external systems such as Apache Flink\xae and Apache Kafka\xae. The Stream Load transaction interface helps improve the performance of highly concurrent stream loads."}),"\n",(0,t.jsx)(n.p,{children:"This topic describes the Stream Load transaction interface and how to load data into StarRocks by using this interface."}),"\n",(0,t.jsx)(r.default,{}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(n.p,{children:"The Stream Load transaction interface supports using an HTTP protocol-compatible tool or language to call API operations. This topic uses curl as an example to explain how to use this interface. This interface provides various features, such as transaction management, data write, transaction pre-commit, transaction deduplication, and transaction timeout management."}),"\n",(0,t.jsx)(n.h3,{id:"transaction-management",children:"Transaction management"}),"\n",(0,t.jsx)(n.p,{children:"The Stream Load transaction interface provides the following API operations, which are used to manage transactions:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"/api/transaction/begin"}),": starts a new transaction."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"/api/transaction/commit"}),": commits the current transaction to make data changes persistent."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"/api/transaction/rollback"}),": rolls back the current transaction to abort data changes."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"transaction-pre-commit",children:"Transaction pre-commit"}),"\n",(0,t.jsxs)(n.p,{children:["The Stream Load transaction interface provides the ",(0,t.jsx)(n.code,{children:"/api/transaction/prepare"})," operation, which is used to pre-commit the current transaction and make data changes temporarily persistent. After you pre-commit a transaction, you can proceed to commit or roll back the transaction. If your StarRocks cluster breaks down after a transaction is pre-committed, you can still proceed to commit the transaction after your StarRocks cluster is restored to normal."]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"NOTE"})}),"\n",(0,t.jsx)(n.p,{children:"After the transaction is pre-committed, do not continue to write data using the transaction. If you continue to write data using the transaction, your write request returns errors."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"data-write",children:"Data write"}),"\n",(0,t.jsxs)(n.p,{children:["The Stream Load transaction interface provides the ",(0,t.jsx)(n.code,{children:"/api/transaction/load"})," operation, which is used to write data. You can call this operation multiple times within one transaction."]}),"\n",(0,t.jsx)(n.h3,{id:"transaction-deduplication",children:"Transaction deduplication"}),"\n",(0,t.jsx)(n.p,{children:"The Stream Load transaction interface carries over the labeling mechanism of StarRocks. You can bind a unique label to each transaction to achieve at-most-once guarantees for transactions."}),"\n",(0,t.jsx)(n.h3,{id:"transaction-timeout-management",children:"Transaction timeout management"}),"\n",(0,t.jsxs)(n.p,{children:["You can use the ",(0,t.jsx)(n.code,{children:"stream_load_default_timeout_second"})," parameter in the configuration file of each FE to specify a default transaction timeout period for that FE."]}),"\n",(0,t.jsxs)(n.p,{children:["When you create a transaction, you can use the ",(0,t.jsx)(n.code,{children:"timeout"})," field in the HTTP request header to specify a timeout period for the transaction."]}),"\n",(0,t.jsxs)(n.p,{children:["When you create a transaction, you can also use the ",(0,t.jsx)(n.code,{children:"idle_transaction_timeout"})," field in the HTTP request header to specify a timeout period within which the transaction can stay idle. If no data is written within the timeout period, the transaction automatically rolls back."]}),"\n",(0,t.jsx)(n.h2,{id:"benefits",children:"Benefits"}),"\n",(0,t.jsx)(n.p,{children:"The Stream Load transaction interface brings the following benefits:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Exactly-once semantics"})}),"\n",(0,t.jsx)(n.p,{children:"A transaction is split into two phases, pre-commit and commit, which make it easy to load data across systems. For example, this interface can guarantee exactly-once semantics for data loads from Flink."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Improved load performance"})}),"\n",(0,t.jsxs)(n.p,{children:["If you run a load job by using a program, the Stream Load transaction interface allows you to merge multiple mini-batches of data on demand and then send them all at once within one transaction by calling the ",(0,t.jsx)(n.code,{children:"/api/transaction/commit"})," operation. As such, fewer data versions need to be loaded, and load performance is improved."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"limits",children:"Limits"}),"\n",(0,t.jsx)(n.p,{children:"The Stream Load transaction interface has the following limits:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Only ",(0,t.jsx)(n.strong,{children:"single-database single-table"})," transactions are supported. Support for ",(0,t.jsx)(n.strong,{children:"multi-database multi-table"})," transactions is in development."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Only ",(0,t.jsx)(n.strong,{children:"concurrent data writes from one client"})," are supported. Support for ",(0,t.jsx)(n.strong,{children:"concurrent data writes from multiple clients"})," is in development."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"/api/transaction/load"})," operation can be called multiple times within one transaction. In this case, the parameter settings specified for all of the ",(0,t.jsx)(n.code,{children:"/api/transaction/load"})," operations that are called must be the same."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"When you load CSV-formatted data by using the Stream Load transaction interface, make sure that each data record in your data file ends with a row delimiter."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"precautions",children:"Precautions"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["If the ",(0,t.jsx)(n.code,{children:"/api/transaction/begin"}),", ",(0,t.jsx)(n.code,{children:"/api/transaction/load"}),", or ",(0,t.jsx)(n.code,{children:"/api/transaction/prepare"})," operation that you have called returns errors, the transaction fails and is automatically rolled back."]}),"\n",(0,t.jsxs)(n.li,{children:["When calling the ",(0,t.jsx)(n.code,{children:"/api/transaction/begin"})," operation to start a new transaction, you have the option to specify a label. If you do not specify a label, StarRocks will generate a label for the transaction. Note that the subsequent ",(0,t.jsx)(n.code,{children:"/api/transaction/load"}),", ",(0,t.jsx)(n.code,{children:"/api/transaction/prepare"}),", and ",(0,t.jsx)(n.code,{children:"/api/transaction/commit"})," operations must use the same label as the ",(0,t.jsx)(n.code,{children:"/api/transaction/begin"})," operation."]}),"\n",(0,t.jsxs)(n.li,{children:["If you the label of a previous transaction to call the ",(0,t.jsx)(n.code,{children:"/api/transaction/begin"})," operation to start a new transaction, the previous transaction will fail and be rolled back."]}),"\n",(0,t.jsxs)(n.li,{children:["The default column separator and row delimiter that StarRocks supports for CSV-formatted data are ",(0,t.jsx)(n.code,{children:"\\t"})," and ",(0,t.jsx)(n.code,{children:"\\n"}),". If your data file does not use the default column separator or row delimiter, you must use ",(0,t.jsx)(n.code,{children:'"column_separator: <column_separator>"'})," or ",(0,t.jsx)(n.code,{children:'"row_delimiter: <row_delimiter>"'})," to specify the column separator or row delimiter that is actually used in your data file when calling the ",(0,t.jsx)(n.code,{children:"/api/transaction/load"})," operation."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"basic-operations",children:"Basic operations"}),"\n",(0,t.jsx)(n.h3,{id:"prepare-sample-data",children:"Prepare sample data"}),"\n",(0,t.jsx)(n.p,{children:"This topic uses CSV-formatted data as an example."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["In the ",(0,t.jsx)(n.code,{children:"/home/disk1/"})," path of your local file system, create a CSV file named ",(0,t.jsx)(n.code,{children:"example1.csv"}),". The file consists of three columns, which represent the user ID, user name, and user score in sequence."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Plain",children:"1,Lily,23\n2,Rose,23\n3,Alice,24\n4,Julia,25\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["In your StarRocks database ",(0,t.jsx)(n.code,{children:"test_db"}),", create a Primary Key table named ",(0,t.jsx)(n.code,{children:"table1"}),". The table consists of three columns: ",(0,t.jsx)(n.code,{children:"id"}),", ",(0,t.jsx)(n.code,{children:"name"}),", and ",(0,t.jsx)(n.code,{children:"score"}),", of which ",(0,t.jsx)(n.code,{children:"id"})," is the primary key."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:'CREATE TABLE `table1`\n(\n    `id` int(11) NOT NULL COMMENT "user ID",\n    `name` varchar(65533) NULL COMMENT "user name",\n    `score` int(11) NOT NULL COMMENT "user score"\n)\nENGINE=OLAP\nPRIMARY KEY(`id`)\nDISTRIBUTED BY HASH(`id`) BUCKETS 10;\n'})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"start-a-transaction",children:"Start a transaction"}),"\n",(0,t.jsx)(n.h4,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Bash",children:'curl --location-trusted -u <username>:<password> -H "label:<label_name>" \\\n    -H "Expect:100-continue" \\\n    -H "db:<database_name>" -H "table:<table_name>" \\\n    -XPOST http://<fe_host>:<fe_http_port>/api/transaction/begin\n'})}),"\n",(0,t.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Bash",children:'curl --location-trusted -u <jack>:<123456> -H "label:streamload_txn_example1_table1" \\\n    -H "Expect:100-continue" \\\n    -H "db:test_db" -H "table:table1" \\\n    -XPOST http://<fe_host>:<fe_http_port>/api/transaction/begin\n'})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"NOTE"})}),"\n",(0,t.jsxs)(n.p,{children:["For this example, ",(0,t.jsx)(n.code,{children:"streamload_txn_example1_table1"})," is specified as the label of the transaction."]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"return-result",children:"Return result"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"If the transaction is successfully started, the following result is returned:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Bash",children:'{\n    "Status": "OK",\n    "Message": "",\n    "Label": "streamload_txn_example1_table1",\n    "TxnId": 9032,\n    "BeginTxnTimeMs": 0\n}\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"If the transaction is bound to a duplicate label, the following result is returned:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Bash",children:'{\n    "Status": "LABEL_ALREADY_EXISTS",\n    "ExistingJobStatus": "RUNNING",\n    "Message": "Label [streamload_txn_example1_table1] has already been used."\n}\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"If errors other than duplicate label occur, the following result is returned:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Bash",children:'{\n    "Status": "FAILED",\n    "Message": ""\n}\n'})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"write-data",children:"Write data"}),"\n",(0,t.jsx)(n.h4,{id:"syntax-1",children:"Syntax"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Bash",children:'curl --location-trusted -u <username>:<password> -H "label:<label_name>" \\\n    -H "Expect:100-continue" \\\n    -H "db:<database_name>" -H "table:<table_name>" \\\n    -T <file_path> \\\n    -XPUT http://<fe_host>:<fe_http_port>/api/transaction/load\n'})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"NOTE"})}),"\n",(0,t.jsxs)(n.p,{children:["When calling the ",(0,t.jsx)(n.code,{children:"/api/transaction/load"})," operation, you must use ",(0,t.jsx)(n.code,{children:"<file_path>"})," to specify the save path of the data file you want to load."]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"example-1",children:"Example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Bash",children:'curl --location-trusted -u <jack>:<123456> -H "label:streamload_txn_example1_table1" \\\n    -H "Expect:100-continue" \\\n    -H "db:test_db" -H "table:table1" \\\n    -T /home/disk1/example1.csv \\\n    -H "column_separator: ," \\\n    -XPUT http://<fe_host>:<fe_http_port>/api/transaction/load\n'})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"NOTE"})}),"\n",(0,t.jsxs)(n.p,{children:["For this example, the column separator used in the data file ",(0,t.jsx)(n.code,{children:"example1.csv"})," is commas (",(0,t.jsx)(n.code,{children:","}),") instead of StarRocks\u2018s default column separator (",(0,t.jsx)(n.code,{children:"\\t"}),"). Therefore, when calling the ",(0,t.jsx)(n.code,{children:"/api/transaction/load"})," operation, you must use ",(0,t.jsx)(n.code,{children:'"column_separator: <column_separator>"'})," to specify commas (",(0,t.jsx)(n.code,{children:","}),") as the column separator."]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"return-result-1",children:"Return result"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"If the data write is successful, the following result is returned:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Bash",children:'{\n    "TxnId": 1,\n    "Seq": 0,\n    "Label": "streamload_txn_example1_table1",\n    "Status": "OK",\n    "Message": "",\n    "NumberTotalRows": 5265644,\n    "NumberLoadedRows": 5265644,\n    "NumberFilteredRows": 0,\n    "NumberUnselectedRows": 0,\n    "LoadBytes": 10737418067,\n    "LoadTimeMs": 418778,\n    "StreamLoadPutTimeMs": 68,\n    "ReceivedDataTimeMs": 38964,\n}\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"If the transaction is considered unknown, the following result is returned:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Bash",children:'{\n    "TxnId": 1,\n    "Label": "streamload_txn_example1_table1",\n    "Status": "FAILED",\n    "Message": "TXN_NOT_EXISTS"\n}\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"If the transaction is considered in an invalid state, the following result is returned:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Bash",children:'{\n    "TxnId": 1,\n    "Label": "streamload_txn_example1_table1",\n    "Status": "FAILED",\n    "Message": "Transcation State Invalid"\n}\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"If errors other than unknown transaction and invalid status occur, the following result is returned:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Bash",children:'{\n    "TxnId": 1,\n    "Label": "streamload_txn_example1_table1",\n    "Status": "FAILED",\n    "Message": ""\n}\n'})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"pre-commit-a-transaction",children:"Pre-commit a transaction"}),"\n",(0,t.jsx)(n.h4,{id:"syntax-2",children:"Syntax"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Bash",children:'curl --location-trusted -u <username>:<password> -H "label:<label_name>" \\\n    -H "Expect:100-continue" \\\n    -H "db:<database_name>" \\\n    -XPOST http://<fe_host>:<fe_http_port>/api/transaction/prepare\n'})}),"\n",(0,t.jsx)(n.h4,{id:"example-2",children:"Example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Bash",children:'curl --location-trusted -u <jack>:<123456> -H "label:streamload_txn_example1_table1" \\\n    -H "Expect:100-continue" \\\n    -H "db:test_db" \\\n    -XPOST http://<fe_host>:<fe_http_port>/api/transaction/prepare\n'})}),"\n",(0,t.jsx)(n.h4,{id:"return-result-2",children:"Return result"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"If the pre-commit is successful, the following result is returned:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Bash",children:'{\n    "TxnId": 1,\n    "Label": "streamload_txn_example1_table1",\n    "Status": "OK",\n    "Message": "",\n    "NumberTotalRows": 5265644,\n    "NumberLoadedRows": 5265644,\n    "NumberFilteredRows": 0,\n    "NumberUnselectedRows": 0,\n    "LoadBytes": 10737418067,\n    "LoadTimeMs": 418778,\n    "StreamLoadPutTimeMs": 68,\n    "ReceivedDataTimeMs": 38964,\n    "WriteDataTimeMs": 417851\n    "CommitAndPublishTimeMs": 1393\n}\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"If the transaction is considered not existent, the following result is returned:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Bash",children:'{\n    "TxnId": 1,\n    "Label": "streamload_txn_example1_table1",\n    "Status": "FAILED",\n    "Message": "Transcation Not Exist"\n}\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"If the pre-commit times out, the following result is returned:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Bash",children:'{\n    "TxnId": 1,\n    "Label": "streamload_txn_example1_table1",\n    "Status": "FAILED",\n    "Message": "commit timeout",\n}\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"If errors other than non-existent transaction and pre-commit timeout occur, the following result is returned:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Bash",children:'{\n    "TxnId": 1,\n    "Label": "streamload_txn_example1_table1",\n    "Status": "FAILED",\n    "Message": "publish timeout"\n}\n'})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"commit-a-transaction",children:"Commit a transaction"}),"\n",(0,t.jsx)(n.h4,{id:"syntax-3",children:"Syntax"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Bash",children:'curl --location-trusted -u <username>:<password> -H "label:<label_name>" \\\n    -H "Expect:100-continue" \\\n    -H "db:<database_name>" \\\n    -XPOST http://<fe_host>:<fe_http_port>/api/transaction/commit\n'})}),"\n",(0,t.jsx)(n.h4,{id:"example-3",children:"Example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Bash",children:'curl --location-trusted -u <jack>:<123456> -H "label:streamload_txn_example1_table1" \\\n    -H "Expect:100-continue" \\\n    -H "db:test_db" \\\n    -XPOST http://<fe_host>:<fe_http_port>/api/transaction/commit\n'})}),"\n",(0,t.jsx)(n.h4,{id:"return-result-3",children:"Return result"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"If the commit is successful, the following result is returned:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Bash",children:'{\n    "TxnId": 1,\n    "Label": "streamload_txn_example1_table1",\n    "Status": "OK",\n    "Message": "",\n    "NumberTotalRows": 5265644,\n    "NumberLoadedRows": 5265644,\n    "NumberFilteredRows": 0,\n    "NumberUnselectedRows": 0,\n    "LoadBytes": 10737418067,\n    "LoadTimeMs": 418778,\n    "StreamLoadPutTimeMs": 68,\n    "ReceivedDataTimeMs": 38964,\n    "WriteDataTimeMs": 417851\n    "CommitAndPublishTimeMs": 1393\n}\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"If the transaction has already been committed, the following result is returned:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Bash",children:'{\n    "TxnId": 1,\n    "Label": "streamload_txn_example1_table1",\n    "Status": "OK",\n    "Message": "Transaction already commited",\n}\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"If the transaction is considered not existent, the following result is returned:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Bash",children:'{\n    "TxnId": 1,\n    "Label": "streamload_txn_example1_table1",\n    "Status": "FAILED",\n    "Message": "Transcation Not Exist"\n}\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"If the commit times out, the following result is returned:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Bash",children:'{\n    "TxnId": 1,\n    "Label": "streamload_txn_example1_table1",\n    "Status": "FAILED",\n    "Message": "commit timeout",\n}\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"If the data publish times out, the following result is returned:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Bash",children:'{\n    "TxnId": 1,\n    "Label": "streamload_txn_example1_table1",\n    "Status": "FAILED",\n    "Message": "publish timeout",\n    "CommitAndPublishTimeMs": 1393\n}\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"If errors other than non-existent transaction and timeout occur, the following result is returned:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Bash",children:'{\n    "TxnId": 1,\n    "Label": "streamload_txn_example1_table1",\n    "Status": "FAILED",\n    "Message": ""\n}\n'})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"roll-back-a-transaction",children:"Roll back a transaction"}),"\n",(0,t.jsx)(n.h4,{id:"syntax-4",children:"Syntax"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Bash",children:'curl --location-trusted -u <username>:<password> -H "label:<label_name>" \\\n    -H "Expect:100-continue" \\\n    -H "db:<database_name>" \\\n    -XPOST http://<fe_host>:<fe_http_port>/api/transaction/rollback\n'})}),"\n",(0,t.jsx)(n.h4,{id:"example-4",children:"Example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Bash",children:'curl --location-trusted -u <jack>:<123456> -H "label:streamload_txn_example1_table1" \\\n    -H "Expect:100-continue" \\\n    -H "db:test_db" \\\n    -XPOST http://<fe_host>:<fe_http_port>/api/transaction/rollback\n'})}),"\n",(0,t.jsx)(n.h4,{id:"return-result-4",children:"Return result"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"If the rollback is successful, the following result is returned:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Bash",children:'{\n    "TxnId": 1,\n    "Label": "streamload_txn_example1_table1",\n    "Status": "OK",\n    "Message": ""\n}\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"If the transaction is considered not existent, the following result is returned:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Bash",children:'{\n    "TxnId": 1,\n    "Label": "streamload_txn_example1_table1",\n    "Status": "FAILED",\n    "Message": "Transcation Not Exist"\n}\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"If errors other than not existent transaction occur, the following result is returned:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Bash",children:'{\n    "TxnId": 1,\n    "Label": "streamload_txn_example1_table1",\n    "Status": "FAILED",\n    "Message": ""\n}\n'})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"references",children:"References"}),"\n",(0,t.jsxs)(n.p,{children:["For information about the suitable application scenarios and supported data file formats of Stream Load and about how Stream Load works, see ",(0,t.jsx)(n.a,{href:"/doc/docs/loading/StreamLoad",children:"Load data from a local file system or a streaming data source using HTTP PUT"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["For information about the syntax and parameters for creating Stream Load jobs, see ",(0,t.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/data-manipulation/STREAM_LOAD",children:"STREAM LOAD"}),"."]})]})}const u=function(e={}){const{wrapper:n}=Object.assign({},(0,s.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(h,e)})):h(e)}},11151:(e,n,a)=>{a.d(n,{Zo:()=>l,ah:()=>r});var t=a(67294);const s=t.createContext({});function r(e){const n=t.useContext(s);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const i={};function l({components:e,children:n,disableParentContext:a}){let l;return l=a?"function"==typeof e?e({}):e||i:r(e),t.createElement(s.Provider,{value:l},n)}}}]);