"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[65717],{68276:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>i,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var t=n(85893),r=n(11151);const l={},s="Authenticate to Microsoft Azure Storage",o={id:"integrations/authenticate_to_azure_storage",title:"Authenticate to Microsoft Azure Storage",description:"From v3.0 onwards, StarRocks can integrate with Microsoft Azure Storage (Azure Blob Storage or Azure Data Lake Storage) in the following scenarios:",source:"@site/versioned_docs/version-3.0/integrations/authenticate_to_azure_storage.md",sourceDirName:"integrations",slug:"/integrations/authenticate_to_azure_storage",permalink:"/doc/docs/3.0/integrations/authenticate_to_azure_storage",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/integrations/authenticate_to_azure_storage.md",tags:[],version:"3.0",frontMatter:{},sidebar:"Chinese31",previous:{title:"Authenticate to AWS resources",permalink:"/doc/docs/3.0/integrations/authenticate_to_aws_resources"},next:{title:"Authenticate to Google Cloud Storage",permalink:"/doc/docs/3.0/integrations/authenticate_to_gcs"}},i={},c=[{value:"Blob Storage",id:"blob-storage",level:2},{value:"Shared Key",id:"shared-key",level:3},{value:"External catalog",id:"external-catalog",level:4},{value:"File external table",id:"file-external-table",level:4},{value:"Broker Load",id:"broker-load",level:4},{value:"SAS Token",id:"sas-token",level:3},{value:"External catalog",id:"external-catalog-1",level:4},{value:"File external table",id:"file-external-table-1",level:4},{value:"Broker load",id:"broker-load-1",level:4},{value:"Data Lake Storage Gen1",id:"data-lake-storage-gen1",level:2},{value:"Managed Service Identity",id:"managed-service-identity",level:3},{value:"External catalog",id:"external-catalog-2",level:4},{value:"File external table",id:"file-external-table-2",level:4},{value:"Broker Load",id:"broker-load-2",level:4},{value:"Service Principal",id:"service-principal",level:3},{value:"External catalog",id:"external-catalog-3",level:4},{value:"File external table",id:"file-external-table-3",level:4},{value:"Broker Load",id:"broker-load-3",level:4},{value:"Data Lake Storage Gen2",id:"data-lake-storage-gen2",level:2},{value:"Managed Identity",id:"managed-identity",level:3},{value:"External catalog",id:"external-catalog-4",level:4},{value:"File external table",id:"file-external-table-4",level:4},{value:"Broker Load",id:"broker-load-4",level:4},{value:"Shared Key",id:"shared-key-1",level:3},{value:"External catalog",id:"external-catalog-5",level:4},{value:"File external table",id:"file-external-table-5",level:4},{value:"Broker Load",id:"broker-load-5",level:4},{value:"Service Principal",id:"service-principal-1",level:3},{value:"External catalog",id:"external-catalog-6",level:4},{value:"File external table",id:"file-external-table-6",level:4},{value:"Broker Load",id:"broker-load-6",level:4}];function d(e){const a=Object.assign({h1:"h1",p:"p",ul:"ul",li:"li",a:"a",h2:"h2",blockquote:"blockquote",strong:"strong",code:"code",h3:"h3",h4:"h4",pre:"pre"},(0,r.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.h1,{id:"authenticate-to-microsoft-azure-storage",children:"Authenticate to Microsoft Azure Storage"}),"\n",(0,t.jsx)(a.p,{children:"From v3.0 onwards, StarRocks can integrate with Microsoft Azure Storage (Azure Blob Storage or Azure Data Lake Storage) in the following scenarios:"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:"Batch load data from Azure Storage."}),"\n",(0,t.jsx)(a.li,{children:"Back up data from and restore data to Azure Storage."}),"\n",(0,t.jsx)(a.li,{children:"Query Parquet and ORC files in Azure Storage."}),"\n",(0,t.jsxs)(a.li,{children:["Query ",(0,t.jsx)(a.a,{href:"/doc/docs/3.0/data_source/catalog/hive_catalog",children:"Hive"}),", ",(0,t.jsx)(a.a,{href:"/doc/docs/3.0/data_source/catalog/iceberg_catalog",children:"Iceberg"}),", ",(0,t.jsx)(a.a,{href:"/doc/docs/3.0/data_source/catalog/hudi_catalog",children:"Hudi"}),", and ",(0,t.jsx)(a.a,{href:"/doc/docs/3.0/data_source/catalog/deltalake_catalog",children:"Delta Lake"})," tables in Azure Storage."]}),"\n"]}),"\n",(0,t.jsx)(a.p,{children:"StarRocks supports the following types of Azure Storage accounts:"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:"Azure Blob Storage"}),"\n",(0,t.jsx)(a.li,{children:"Azure Data Lake Storage Gen1"}),"\n",(0,t.jsx)(a.li,{children:"Azure Data Lake Storagee Gen2"}),"\n"]}),"\n",(0,t.jsxs)(a.p,{children:["In this topic, Hive catalog, file external table, and Broker Load are used as examples to show how StarRocks integrates with Azure Storage by using these types of Azure Storage accounts. For information about the parameters in the examples, see ",(0,t.jsx)(a.a,{href:"/doc/docs/3.0/data_source/catalog/hive_catalog",children:"Hive catalog"}),", ",(0,t.jsx)(a.a,{href:"/doc/docs/3.0/data_source/file_external_table",children:"File external table"}),", and ",(0,t.jsx)(a.a,{href:"/doc/docs/3.0/loading/BrokerLoad",children:"Broker Load"}),"."]}),"\n",(0,t.jsx)(a.h2,{id:"blob-storage",children:"Blob Storage"}),"\n",(0,t.jsx)(a.p,{children:"StarRocks supports using one of the following authentication methods to access Blob Storage:"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:"Shared Key"}),"\n",(0,t.jsx)(a.li,{children:"SAS Token"}),"\n"]}),"\n",(0,t.jsxs)(a.blockquote,{children:["\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.strong,{children:"NOTE"})}),"\n",(0,t.jsx)(a.p,{children:"When you load data or directly query files from Blob Storage, you must use the wasb or wasbs protocol to access your data:"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:["If your storage account allows access over HTTP, use the wasb protocol and write the file path as ",(0,t.jsx)(a.code,{children:"wasb://<container>@<storage_account>.blob.core.windows.net/<path>/<file_name>/*"}),"."]}),"\n",(0,t.jsxs)(a.li,{children:["If your storage account allows access over HTTPS, use the wasbs protocol and write the file path as ",(0,t.jsx)(a.code,{children:"wasbs://<container>@<storage_account>.blob.core.windows.net/<path>/<file_name>/*"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(a.h3,{id:"shared-key",children:"Shared Key"}),"\n",(0,t.jsx)(a.h4,{id:"external-catalog",children:"External catalog"}),"\n",(0,t.jsxs)(a.p,{children:["Configure ",(0,t.jsx)(a.code,{children:"azure.blob.storage_account"})," and ",(0,t.jsx)(a.code,{children:"azure.blob.shared_key"})," as follows in the ",(0,t.jsx)(a.a,{href:"/doc/docs/3.0/sql-reference/sql-statements/data-definition/CREATE%20EXTERNAL%20CATALOG",children:"CREATE EXTERNAL CATALOG"})," statement:"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-SQL",children:'CREATE EXTERNAL CATALOG hive_catalog_azure\nPROPERTIES\n(\n    "type" = "hive", \n    "hive.metastore.uris" = "thrift://10.1.0.18:9083",\n    "azure.blob.storage_account" = "<blob_storage_account_name>",\n    "azure.blob.shared_key" = "<blob_storage_account_shared_key>"\n);\n'})}),"\n",(0,t.jsx)(a.h4,{id:"file-external-table",children:"File external table"}),"\n",(0,t.jsxs)(a.p,{children:["Configure ",(0,t.jsx)(a.code,{children:"azure.blob.storage_account"}),", ",(0,t.jsx)(a.code,{children:"azure.blob.shared_key"}),", and the file path (",(0,t.jsx)(a.code,{children:"path"}),") as follows in the ",(0,t.jsx)(a.a,{href:"/doc/docs/3.0/sql-reference/sql-statements/data-definition/CREATE%20TABLE",children:"CREATE EXTERNAL TABLE"})," statement:"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-SQL",children:'CREATE EXTERNAL TABLE external_table_azure\n(\n    id varchar(65500),\n    attributes map<varchar(100), varchar(2000)>\n) \nENGINE=FILE\nPROPERTIES\n(\n    "path" = "wasb[s]://<container>@<storage_account>.blob.core.windows.net/<path>/<file_name>",\n    "format" = "ORC",\n    "azure.blob.storage_account" = "<blob_storage_account_name>",\n    "azure.blob.shared_key" = "<blob_storage_account_shared_key>"\n);\n'})}),"\n",(0,t.jsx)(a.h4,{id:"broker-load",children:"Broker Load"}),"\n",(0,t.jsxs)(a.p,{children:["Configure ",(0,t.jsx)(a.code,{children:"azure.blob.storage_account"}),", ",(0,t.jsx)(a.code,{children:"azure.blob.shared_key"}),", and the file path (",(0,t.jsx)(a.code,{children:"DATA INFILE"}),") as follows in the ",(0,t.jsx)(a.a,{href:"/doc/docs/3.0/sql-reference/sql-statements/data-manipulation/BROKER%20LOAD",children:"LOAD LABEL"})," statement:"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-SQL",children:'LOAD LABEL test_db.label000\n(\n    DATA INFILE("wasb[s]://<container>@<storage_account>.blob.core.windows.net/<path>/<file_name>/*")\n    INTO TABLE test_ingestion_2\n    FORMAT AS "parquet"\n)\nWITH BROKER\n(\n    "azure.blob.storage_account" = "<blob_storage_account_name>",\n    "azure.blob.shared_key" = "<blob_storage_account_shared_key>"\n);\n'})}),"\n",(0,t.jsx)(a.h3,{id:"sas-token",children:"SAS Token"}),"\n",(0,t.jsx)(a.h4,{id:"external-catalog-1",children:"External catalog"}),"\n",(0,t.jsxs)(a.p,{children:["Configure ",(0,t.jsx)(a.code,{children:"azure.blob.account_name"}),", ",(0,t.jsx)(a.code,{children:"azure.blob.container_name"}),", and ",(0,t.jsx)(a.code,{children:"azure.blob.sas_token"})," as follows in the ",(0,t.jsx)(a.a,{href:"/doc/docs/3.0/sql-reference/sql-statements/data-definition/CREATE%20EXTERNAL%20CATALOG",children:"CREATE EXTERNAL CATALOG"})," statement:"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-SQL",children:'CREATE EXTERNAL CATALOG hive_catalog_azure\nPROPERTIES\n(\n    "type" = "hive", \n    "hive.metastore.uris" = "thrift://10.1.0.18:9083",\n    "azure.blob.account_name" = "<blob_storage_account_name>",\n    "azure.blob.container_name" = "<blob_container_name>",\n    "azure.blob.sas_token" = "<blob_storage_account_SAS_token>"\n);\n'})}),"\n",(0,t.jsx)(a.h4,{id:"file-external-table-1",children:"File external table"}),"\n",(0,t.jsxs)(a.p,{children:["Configure ",(0,t.jsx)(a.code,{children:"azure.blob.account_name"}),", ",(0,t.jsx)(a.code,{children:"azure.blob.container_name"}),", ",(0,t.jsx)(a.code,{children:"azure.blob.sas_token"}),", and the file path (",(0,t.jsx)(a.code,{children:"path"}),") as follows in the ",(0,t.jsx)(a.a,{href:"/doc/docs/3.0/sql-reference/sql-statements/data-definition/CREATE%20TABLE",children:"CREATE EXTERNAL TABLE"})," statement:"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-SQL",children:'CREATE EXTERNAL TABLE external_table_azure\n(\n    id varchar(65500),\n    attributes map<varchar(100), varchar(2000)>\n) \nENGINE=FILE\nPROPERTIES\n(\n    "path" = "wasb[s]://<container>@<storage_account>.blob.core.windows.net/<path>/<file_name>",\n    "format" = "ORC",\n    "azure.blob.account_name" = "<blob_storage_account_name>",\n    "azure.blob.container_name" = "<blob_container_name>",\n    "azure.blob.sas_token" = "<blob_storage_account_SAS_token>"\n);\n'})}),"\n",(0,t.jsx)(a.h4,{id:"broker-load-1",children:"Broker load"}),"\n",(0,t.jsxs)(a.p,{children:["Configure ",(0,t.jsx)(a.code,{children:"azure.blob.account_name"}),", ",(0,t.jsx)(a.code,{children:"azure.blob.container_name"}),", ",(0,t.jsx)(a.code,{children:"azure.blob.sas_token"}),", and the file path (",(0,t.jsx)(a.code,{children:"DATA INFILE"}),") as follows in the ",(0,t.jsx)(a.a,{href:"/doc/docs/3.0/sql-reference/sql-statements/data-manipulation/BROKER%20LOAD",children:"LOAD LABEL"})," statement:"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-SQL",children:'LOAD LABEL test_db.label000\n(\n    DATA INFILE("wasb[s]://<container>@<storage_account>.blob.core.windows.net/<path>/<file_name>/*")\n    INTO TABLE target_table\n    FORMAT AS "parquet"\n)\nWITH BROKER\n(\n    "azure.blob.account_name" = "<blob_storage_account_name>",\n    "azure.blob.container_name" = "<blob_container_name>",\n    "azure.blob.sas_token" = "<blob_storage_account_SAS_token>"\n);\n'})}),"\n",(0,t.jsx)(a.h2,{id:"data-lake-storage-gen1",children:"Data Lake Storage Gen1"}),"\n",(0,t.jsx)(a.p,{children:"StarRocks supports using one of the following authentication methods to access Data Lake Storage Gen1:"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:"Managed Service Identity"}),"\n",(0,t.jsx)(a.li,{children:"Service Principal"}),"\n"]}),"\n",(0,t.jsxs)(a.blockquote,{children:["\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.strong,{children:"NOTE"})}),"\n",(0,t.jsxs)(a.p,{children:["When you load data or query files from Data Lake Storage Gen1, you must use the adl protocol to access your data and write the file path as ",(0,t.jsx)(a.code,{children:"adl://<data_lake_storage_gen1_name>.azuredatalakestore.net/<path>/<file_name>"}),"."]}),"\n"]}),"\n",(0,t.jsx)(a.h3,{id:"managed-service-identity",children:"Managed Service Identity"}),"\n",(0,t.jsx)(a.h4,{id:"external-catalog-2",children:"External catalog"}),"\n",(0,t.jsxs)(a.p,{children:["Configure ",(0,t.jsx)(a.code,{children:"azure.adls1.use_managed_service_identity"})," as follows in the ",(0,t.jsx)(a.a,{href:"/doc/docs/3.0/sql-reference/sql-statements/data-definition/CREATE%20EXTERNAL%20CATALOG",children:"CREATE EXTERNAL CATALOG"})," statement:"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-SQL",children:'CREATE EXTERNAL CATALOG hive_catalog_azure\nPROPERTIES\n(\n    "type" = "hive", \n    "hive.metastore.uris" = "thrift://10.1.0.18:9083",\n    "azure.adls1.use_managed_service_identity" = "true"\n);\n'})}),"\n",(0,t.jsx)(a.h4,{id:"file-external-table-2",children:"File external table"}),"\n",(0,t.jsxs)(a.p,{children:["Configure ",(0,t.jsx)(a.code,{children:"azure.adls1.use_managed_service_identity"})," and the file path (",(0,t.jsx)(a.code,{children:"path"}),") as follows in the ",(0,t.jsx)(a.a,{href:"/doc/docs/3.0/sql-reference/sql-statements/data-definition/CREATE%20TABLE",children:"CREATE EXTERNAL TABLE"})," statement:"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-SQL",children:'CREATE EXTERNAL TABLE external_table_azure\n(\n    id varchar(65500),\n    attributes map<varchar(100), varchar(2000)>\n) \nENGINE=FILE\nPROPERTIES\n(\n    "path" = "adl://<data_lake_storage_gen1_name>.azuredatalakestore.net/<path>/<file_name>",\n    "format" = "ORC",\n    "azure.adls1.use_managed_service_identity" = "true"\n);\n'})}),"\n",(0,t.jsx)(a.h4,{id:"broker-load-2",children:"Broker Load"}),"\n",(0,t.jsxs)(a.p,{children:["Configure ",(0,t.jsx)(a.code,{children:"azure.adls1.use_managed_service_identity"})," and the file path (",(0,t.jsx)(a.code,{children:"DATA INFILE"}),") as follows in the ",(0,t.jsx)(a.a,{href:"/doc/docs/3.0/sql-reference/sql-statements/data-manipulation/BROKER%20LOAD",children:"LOAD LABEL"})," statement:"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-SQL",children:'LOAD LABEL test_db.label000\n(\n    DATA INFILE("adl://<data_lake_storage_gen1_name>.azuredatalakestore.net/<path>/<file_name>")\n    INTO TABLE target_table\n    FORMAT AS "parquet"\n)\nWITH BROKER\n(\n    "azure.adls1.use_managed_service_identity" = "true"\n);\n'})}),"\n",(0,t.jsx)(a.h3,{id:"service-principal",children:"Service Principal"}),"\n",(0,t.jsx)(a.h4,{id:"external-catalog-3",children:"External catalog"}),"\n",(0,t.jsxs)(a.p,{children:["Configure ",(0,t.jsx)(a.code,{children:"azure.adls1.oauth2_client_id"}),", ",(0,t.jsx)(a.code,{children:"azure.adls1.oauth2_credential"}),", and ",(0,t.jsx)(a.code,{children:"azure.adls1.oauth2_endpoint"})," as follows in the ",(0,t.jsx)(a.a,{href:"/doc/docs/3.0/sql-reference/sql-statements/data-definition/CREATE%20EXTERNAL%20CATALOG",children:"CREATE EXTERNAL CATALOG"})," statement:"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-SQL",children:'CREATE EXTERNAL CATALOG hive_catalog_azure\nPROPERTIES\n(\n    "type" = "hive", \n    "hive.metastore.uris" = "thrift://10.1.0.18:9083",\n    "azure.adls1.oauth2_client_id" = "<application_client_id>",\n    "azure.adls1.oauth2_credential" = "<application_client_credential>",\n    "azure.adls1.oauth2_endpoint" = "<OAuth_2.0_authorization_endpoint_v2>"\n);\n'})}),"\n",(0,t.jsx)(a.h4,{id:"file-external-table-3",children:"File external table"}),"\n",(0,t.jsxs)(a.p,{children:["Configure ",(0,t.jsx)(a.code,{children:"azure.adls1.oauth2_client_id"}),", ",(0,t.jsx)(a.code,{children:"azure.adls1.oauth2_credential"}),", ",(0,t.jsx)(a.code,{children:"azure.adls1.oauth2_endpoint"}),", and the file path (",(0,t.jsx)(a.code,{children:"path"}),") as follows in the ",(0,t.jsx)(a.a,{href:"/doc/docs/3.0/sql-reference/sql-statements/data-definition/CREATE%20TABLE",children:"CREATE EXTERNAL TABLE"})," statement:"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-SQL",children:'CREATE EXTERNAL TABLE external_table_azure\n(\n    id varchar(65500),\n    attributes map<varchar(100), varchar(2000)>\n) \nENGINE=FILE\nPROPERTIES\n(\n    "path" = "adl://<data_lake_storage_gen1_name>.azuredatalakestore.net/<path>/<file_name>",\n    "format" = "ORC",\n    "azure.adls1.oauth2_client_id" = "<application_client_id>",\n    "azure.adls1.oauth2_credential" = "<application_client_credential>",\n    "azure.adls1.oauth2_endpoint" = "<OAuth_2.0_authorization_endpoint_v2>"\n);\n'})}),"\n",(0,t.jsx)(a.h4,{id:"broker-load-3",children:"Broker Load"}),"\n",(0,t.jsxs)(a.p,{children:["Configure ",(0,t.jsx)(a.code,{children:"azure.adls1.oauth2_client_id"}),", ",(0,t.jsx)(a.code,{children:"azure.adls1.oauth2_credential"}),", ",(0,t.jsx)(a.code,{children:"azure.adls1.oauth2_endpoint"}),", and the file path (",(0,t.jsx)(a.code,{children:"DATA INFILE"}),") as follows in the ",(0,t.jsx)(a.a,{href:"/doc/docs/3.0/sql-reference/sql-statements/data-manipulation/BROKER%20LOAD",children:"LOAD LABEL"})," statement:"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-SQL",children:'LOAD LABEL test_db.label000\n(\n    DATA INFILE("adl://<data_lake_storage_gen1_name>.azuredatalakestore.net/<path>/<file_name>")\n    INTO TABLE target_table\n    FORMAT AS "parquet"\n)\nWITH BROKER\n(\n    "azure.adls1.oauth2_client_id" = "<application_client_id>",\n    "azure.adls1.oauth2_credential" = "<application_client_credential>",\n    "azure.adls1.oauth2_endpoint" = "<OAuth_2.0_authorization_endpoint_v2>"\n);\n'})}),"\n",(0,t.jsx)(a.h2,{id:"data-lake-storage-gen2",children:"Data Lake Storage Gen2"}),"\n",(0,t.jsx)(a.p,{children:"StarRocks supports using one of the following authentication methods to access Data Lake Storage Gen2:"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:"Managed Identity"}),"\n",(0,t.jsx)(a.li,{children:"Shared Key"}),"\n",(0,t.jsx)(a.li,{children:"Service Principal"}),"\n"]}),"\n",(0,t.jsxs)(a.blockquote,{children:["\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.strong,{children:"NOTE"})}),"\n",(0,t.jsx)(a.p,{children:"When you load data or query files from Data Lake Storage Gen2, you must use the abfs or abfss protocol to access your data:"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:["If your storage account allows access over HTTP, use the abfs protocol and write the file path as ",(0,t.jsx)(a.code,{children:"abfs://<container>@<storage_account>.dfs.core.windows.net/<file_name>"}),"."]}),"\n",(0,t.jsxs)(a.li,{children:["If your storage account allows access over HTTPS, use the abfss protocol and write the file path as ",(0,t.jsx)(a.code,{children:"abfss://<container>@<storage_account>.dfs.core.windows.net/<file_name>"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(a.h3,{id:"managed-identity",children:"Managed Identity"}),"\n",(0,t.jsx)(a.p,{children:"Before you start, you need to make the following preparations:"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:"Edit the virtual machines (VMs) on which your StarRocks cluster is deployed."}),"\n",(0,t.jsx)(a.li,{children:"Add the managed identities to these VMs."}),"\n",(0,t.jsxs)(a.li,{children:["Make sure that the managed identities are associated with the role (",(0,t.jsx)(a.strong,{children:"Storage Blob Data Reader"}),") authorized to read data in your storage account."]}),"\n"]}),"\n",(0,t.jsx)(a.h4,{id:"external-catalog-4",children:"External catalog"}),"\n",(0,t.jsxs)(a.p,{children:["Configure ",(0,t.jsx)(a.code,{children:"azure.adls2.oauth2_use_managed_identity"}),", ",(0,t.jsx)(a.code,{children:"azure.adls2.oauth2_tenant_id"}),", and ",(0,t.jsx)(a.code,{children:"azure.adls2.oauth2_client_id"})," as follows in the ",(0,t.jsx)(a.a,{href:"/doc/docs/3.0/sql-reference/sql-statements/data-definition/CREATE%20EXTERNAL%20CATALOG",children:"CREATE EXTERNAL CATALOG"})," statement:"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-SQL",children:'CREATE EXTERNAL CATALOG hive_catalog_azure\nPROPERTIES\n(\n    "type" = "hive", \n    "hive.metastore.uris" = "thrift://10.1.0.18:9083",\n    "azure.adls2.oauth2_use_managed_identity" = "true",\n    "azure.adls2.oauth2_tenant_id" = "<service_principal_tenant_id>",\n    "azure.adls2.oauth2_client_id" = "<service_client_id>"\n);\n'})}),"\n",(0,t.jsx)(a.h4,{id:"file-external-table-4",children:"File external table"}),"\n",(0,t.jsxs)(a.p,{children:["Configure ",(0,t.jsx)(a.code,{children:"azure.adls2.oauth2_use_managed_identity"}),", ",(0,t.jsx)(a.code,{children:"azure.adls2.oauth2_tenant_id"}),", ",(0,t.jsx)(a.code,{children:"azure.adls2.oauth2_client_id"}),", and the file path (",(0,t.jsx)(a.code,{children:"path"}),") as follows in the ",(0,t.jsx)(a.a,{href:"/doc/docs/3.0/sql-reference/sql-statements/data-definition/CREATE%20TABLE",children:"CREATE EXTERNAL TABLE"})," statement:"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-SQL",children:'CREATE EXTERNAL TABLE external_table_azure\n(\n    id varchar(65500),\n    attributes map<varchar(100), varchar(2000)>\n) \nENGINE=FILE\nPROPERTIES\n(\n    "path" = "abfs[s]://<container>@<storage_account>.dfs.core.windows.net/<file_name>",\n    "format" = "ORC",\n    "azure.adls2.oauth2_use_managed_identity" = "true",\n    "azure.adls2.oauth2_tenant_id" = "<service_principal_tenant_id>",\n    "azure.adls2.oauth2_client_id" = "<service_client_id>"\n);\n'})}),"\n",(0,t.jsx)(a.h4,{id:"broker-load-4",children:"Broker Load"}),"\n",(0,t.jsxs)(a.p,{children:["Configure ",(0,t.jsx)(a.code,{children:"azure.adls2.oauth2_use_managed_identity"}),", ",(0,t.jsx)(a.code,{children:"azure.adls2.oauth2_tenant_id"}),", ",(0,t.jsx)(a.code,{children:"azure.adls2.oauth2_client_id"}),", and the file path (",(0,t.jsx)(a.code,{children:"DATA INFILE"}),") as follows in the ",(0,t.jsx)(a.a,{href:"/doc/docs/3.0/sql-reference/sql-statements/data-manipulation/BROKER%20LOAD",children:"LOAD LABEL"})," statement:"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-SQL",children:'LOAD LABEL test_db.label000\n(\n    DATA INFILE("adfs[s]://<container>@<storage_account>.dfs.core.windows.net/<file_name>")\n    INTO TABLE target_table\n    FORMAT AS "parquet"\n)\nWITH BROKER\n(\n    "azure.adls2.oauth2_use_managed_identity" = "true",\n    "azure.adls2.oauth2_tenant_id" = "<service_principal_tenant_id>",\n    "azure.adls2.oauth2_client_id" = "<service_client_id>"\n);\n'})}),"\n",(0,t.jsx)(a.h3,{id:"shared-key-1",children:"Shared Key"}),"\n",(0,t.jsx)(a.h4,{id:"external-catalog-5",children:"External catalog"}),"\n",(0,t.jsxs)(a.p,{children:["Configure ",(0,t.jsx)(a.code,{children:"azure.adls2.storage_account"})," and ",(0,t.jsx)(a.code,{children:"azure.adls2.shared_key"})," as follows in the ",(0,t.jsx)(a.a,{href:"/doc/docs/3.0/sql-reference/sql-statements/data-definition/CREATE%20EXTERNAL%20CATALOG",children:"CREATE EXTERNAL CATALOG"})," statement:"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-SQL",children:'CREATE EXTERNAL CATALOG hive_catalog_azure\nPROPERTIES\n(\n    "type" = "hive", \n    "hive.metastore.uris" = "thrift://10.1.0.18:9083",\n    "azure.adls2.storage_account" = "<storage_account_name>",\n    "azure.adls2.shared_key" = "<shared_key>"\n);\n'})}),"\n",(0,t.jsx)(a.h4,{id:"file-external-table-5",children:"File external table"}),"\n",(0,t.jsxs)(a.p,{children:["Configure ",(0,t.jsx)(a.code,{children:"azure.adls2.storage_account"}),", ",(0,t.jsx)(a.code,{children:"azure.adls2.shared_key"}),", and the file path (",(0,t.jsx)(a.code,{children:"path"}),") as follows in the ",(0,t.jsx)(a.a,{href:"/doc/docs/3.0/sql-reference/sql-statements/data-definition/CREATE%20TABLE",children:"CREATE EXTERNAL TABLE"})," statement:"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-SQL",children:'CREATE EXTERNAL TABLE external_table_azure\n(\n    id varchar(65500),\n    attributes map<varchar(100), varchar(2000)>\n) \nENGINE=FILE\nPROPERTIES\n(\n    "path" = "abfs[s]://<container>@<storage_account>.dfs.core.windows.net/<file_name>",\n    "format" = "ORC",\n    "azure.adls2.storage_account" = "<storage_account_name>",\n    "azure.adls2.shared_key" = "<shared_key>"\n);\n'})}),"\n",(0,t.jsx)(a.h4,{id:"broker-load-5",children:"Broker Load"}),"\n",(0,t.jsxs)(a.p,{children:["Configure ",(0,t.jsx)(a.code,{children:"azure.adls2.storage_account"}),", ",(0,t.jsx)(a.code,{children:"azure.adls2.shared_key"}),", and the file path (",(0,t.jsx)(a.code,{children:"DATA INFILE"}),") as follows in the ",(0,t.jsx)(a.a,{href:"/doc/docs/3.0/sql-reference/sql-statements/data-manipulation/BROKER%20LOAD",children:"LOAD LABEL"})," statement:"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-SQL",children:'LOAD LABEL test_db.label000\n(\n    DATA INFILE("adfs[s]://<container>@<storage_account>.dfs.core.windows.net/<file_name>")\n    INTO TABLE target_table\n    FORMAT AS "parquet"\n)\nWITH BROKER\n(\n    "azure.adls2.storage_account" = "<storage_account_name>",\n    "azure.adls2.shared_key" = "<shared_key>"\n);\n'})}),"\n",(0,t.jsx)(a.h3,{id:"service-principal-1",children:"Service Principal"}),"\n",(0,t.jsx)(a.p,{children:"Before you start, you need to create a service principal, create a role assignment to assign a role to the service principal, and then add the role assignment to your storage account. As such, you can make sure that this service principal can successfully access the data in your storage account."}),"\n",(0,t.jsx)(a.h4,{id:"external-catalog-6",children:"External catalog"}),"\n",(0,t.jsxs)(a.p,{children:["Configure ",(0,t.jsx)(a.code,{children:"azure.adls2.oauth2_client_id"}),", ",(0,t.jsx)(a.code,{children:"azure.adls2.oauth2_client_secret"}),", and ",(0,t.jsx)(a.code,{children:"azure.adls2.oauth2_client_endpoint"})," as follows in the ",(0,t.jsx)(a.a,{href:"/doc/docs/3.0/sql-reference/sql-statements/data-definition/CREATE%20EXTERNAL%20CATALOG",children:"CREATE EXTERNAL CATALOG"})," statement:"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-SQL",children:'CREATE EXTERNAL CATALOG hive_catalog_azure\nPROPERTIES\n(\n    "type" = "hive", \n    "hive.metastore.uris" = "thrift://10.1.0.18:9083",\n    "azure.adls2.oauth2_client_id" = "<service_client_id>",\n    "azure.adls2.oauth2_client_secret" = "<service_principal_client_secret>",\n    "azure.adls2.oauth2_client_endpoint" = "<service_principal_client_endpoint>"\n);\n'})}),"\n",(0,t.jsx)(a.h4,{id:"file-external-table-6",children:"File external table"}),"\n",(0,t.jsxs)(a.p,{children:["Configure ",(0,t.jsx)(a.code,{children:"azure.adls2.oauth2_client_id"}),", ",(0,t.jsx)(a.code,{children:"azure.adls2.oauth2_client_secret"}),", ",(0,t.jsx)(a.code,{children:"azure.adls2.oauth2_client_endpoint"}),", and the file path (",(0,t.jsx)(a.code,{children:"path"}),") as follows in the ",(0,t.jsx)(a.a,{href:"/doc/docs/3.0/sql-reference/sql-statements/data-definition/CREATE%20TABLE",children:"CREATE EXTERNAL TABLE"})," statement:"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-SQL",children:'CREATE EXTERNAL TABLE external_table_azure\n(\n    id varchar(65500),\n    attributes map<varchar(100), varchar(2000)>\n) \nENGINE=FILE\nPROPERTIES\n(\n    "path" = "abfs[s]://<container>@<storage_account>.dfs.core.windows.net/<file_name>",\n    "format" = "ORC",\n    "azure.adls2.oauth2_client_id" = "<service_client_id>",\n    "azure.adls2.oauth2_client_secret" = "<service_principal_client_secret>",\n    "azure.adls2.oauth2_client_endpoint" = "<service_principal_client_endpoint>"\n);\n'})}),"\n",(0,t.jsx)(a.h4,{id:"broker-load-6",children:"Broker Load"}),"\n",(0,t.jsxs)(a.p,{children:["Configure ",(0,t.jsx)(a.code,{children:"azure.adls2.oauth2_client_id"}),", ",(0,t.jsx)(a.code,{children:"azure.adls2.oauth2_client_secret"}),", ",(0,t.jsx)(a.code,{children:"azure.adls2.oauth2_client_endpoint"}),", and the file path (",(0,t.jsx)(a.code,{children:"DATA INFILE"}),") as follows in the ",(0,t.jsx)(a.a,{href:"/doc/docs/3.0/sql-reference/sql-statements/data-manipulation/BROKER%20LOAD",children:"LOAD LABEL"})," statement:"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-SQL",children:'LOAD LABEL test_db.label000\n(\n    DATA INFILE("adfs[s]://<container>@<storage_account>.dfs.core.windows.net/<file_name>")\n    INTO TABLE target_table\n    FORMAT AS "parquet"\n)\nWITH BROKER\n(\n    "azure.adls2.oauth2_client_id" = "<service_client_id>",\n    "azure.adls2.oauth2_client_secret" = "<service_principal_client_secret>",\n    "azure.adls2.oauth2_client_endpoint" = "<service_principal_client_endpoint>"\n);\n'})})]})}const h=function(e={}){const{wrapper:a}=Object.assign({},(0,r.ah)(),e.components);return a?(0,t.jsx)(a,Object.assign({},e,{children:(0,t.jsx)(d,e)})):d(e)}},11151:(e,a,n)=>{n.d(a,{Zo:()=>o,ah:()=>l});var t=n(67294);const r=t.createContext({});function l(e){const a=t.useContext(r);return t.useMemo((()=>"function"==typeof e?e(a):{...a,...e}),[a,e])}const s={};function o({components:e,children:a,disableParentContext:n}){let o;return o=n?"function"==typeof e?e({}):e||s:l(e),t.createElement(r.Provider,{value:o},a)}}}]);