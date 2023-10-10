"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[45800],{44806:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var r=n(85893),t=n(11151);const a={},l="CREATE STORAGE VOLUME",i={id:"sql-reference/sql-statements/Administration/CREATE STORAGE VOLUME",title:"CREATE STORAGE VOLUME",description:"Description",source:"@site/versioned_docs/version-3.1/sql-reference/sql-statements/Administration/CREATE STORAGE VOLUME.md",sourceDirName:"sql-reference/sql-statements/Administration",slug:"/sql-reference/sql-statements/Administration/CREATE STORAGE VOLUME",permalink:"/doc/docs/sql-reference/sql-statements/Administration/CREATE STORAGE VOLUME",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-statements/Administration/CREATE STORAGE VOLUME.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"CREATE RESOURCE GROUP",permalink:"/doc/docs/sql-reference/sql-statements/Administration/CREATE RESOURCE GROUP"},next:{title:"DELETE SQLBLACKLIST",permalink:"/doc/docs/sql-reference/sql-statements/Administration/DELETE SQLBLACKLIST"}},c={},d=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"PROPERTIES",id:"properties",level:3},{value:"Examples",id:"examples",level:2},{value:"Relevant SQL statements",id:"relevant-sql-statements",level:2}];function o(e){const s=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",blockquote:"blockquote",strong:"strong",pre:"pre",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",h3:"h3",ul:"ul",li:"li"},(0,t.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h1,{id:"create-storage-volume",children:"CREATE STORAGE VOLUME"}),"\n",(0,r.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(s.p,{children:"Creates a storage volume for a remote storage system. This feature is supported from v3.1."}),"\n",(0,r.jsxs)(s.p,{children:["A storage volume consists of the properties and credential information of the remote data storage. You can reference a storage volume when you create databases and cloud-native tables in a ",(0,r.jsx)(s.a,{href:"/doc/docs/deployment/shared_data/s3",children:"shared-data StarRocks cluster"}),"."]}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"CAUTION"})}),"\n",(0,r.jsx)(s.p,{children:"Only users with the CREATE STORAGE VOLUME privilege on the SYSTEM level can perform this operation."}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"syntax",children:"Syntax"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-SQL",children:"CREATE STORAGE VOLUME [IF NOT EXISTS] <storage_volume_name>\nTYPE = S3\nLOCATIONS = ('<s3_path>')\n[ COMMENT '<comment_string>' ]\nPROPERTIES\n(\"key\" = \"value\",...)\n"})}),"\n",(0,r.jsx)(s.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:(0,r.jsx)(s.strong,{children:"Parameter"})}),(0,r.jsx)(s.th,{children:(0,r.jsx)(s.strong,{children:"Description"})})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"storage_volume_name"}),(0,r.jsxs)(s.td,{children:["The name of the storage volume. Please note that you cannot create a storage volume named ",(0,r.jsx)(s.code,{children:"builtin_storage_volume"})," because it is used to create the builtin storage volume."]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"TYPE"}),(0,r.jsxs)(s.td,{children:["The type of the remote storage system. Valid values: ",(0,r.jsx)(s.code,{children:"S3"})," and ",(0,r.jsx)(s.code,{children:"AZBLOB"}),". ",(0,r.jsx)(s.code,{children:"S3"})," indicates AWS S3 or S3-compatible storage systems. ",(0,r.jsx)(s.code,{children:"AZBLOB"})," indicates Azure Blob Storage (supported from v3.1.1 onwards)."]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"LOCATIONS"}),(0,r.jsxs)(s.td,{children:["The storage locations. The format is as follows:",(0,r.jsxs)("ul",{children:[(0,r.jsxs)("li",{children:["For AWS S3 or S3 protocol-compatible storage systems: ",(0,r.jsx)(s.code,{children:"s3://<s3_path>"}),". ",(0,r.jsx)(s.code,{children:"<s3_path>"})," must be an absolute path, for example, ",(0,r.jsx)(s.code,{children:"s3://testbucket/subpath"}),"."]}),(0,r.jsxs)("li",{children:["For Azure Blob Storage: ",(0,r.jsx)(s.code,{children:"azblob://<azblob_path>"}),". ",(0,r.jsx)(s.code,{children:"<azblob_path>"})," must be an absolute path, for example, ",(0,r.jsx)(s.code,{children:"azblob://testcontainer/subpath"}),"."]})]})]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"COMMENT"}),(0,r.jsx)(s.td,{children:"The comment on the storage volume."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"PROPERTIES"}),(0,r.jsxs)(s.td,{children:["Parameters in the ",(0,r.jsx)(s.code,{children:'"key" = "value"'})," pairs used to specify the properties and credential information to access the remote storage system. For detailed information, see ",(0,r.jsx)(s.a,{href:"#properties",children:"PROPERTIES"}),"."]})]})]})]}),"\n",(0,r.jsx)(s.h3,{id:"properties",children:"PROPERTIES"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"If you use AWS S3:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"If you use the default authentication credential of AWS SDK to access S3, set the following properties:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-SQL",children:'"enabled" = "{ true | false }",\n"aws.s3.region" = "<region>",\n"aws.s3.endpoint" = "<endpoint_url>",\n"aws.s3.use_aws_sdk_default_behavior" = "true"\n'})}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"If you use IAM user-based credential (Access Key and Secret Key) to access S3, set the following properties:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-SQL",children:'"enabled" = "{ true | false }",\n"aws.s3.region" = "<region>",\n"aws.s3.endpoint" = "<endpoint_url>",\n"aws.s3.use_aws_sdk_default_behavior" = "false",\n"aws.s3.use_instance_profile" = "false",\n"aws.s3.access_key" = "<access_key>",\n"aws.s3.secret_key" = "<secrete_key>"\n'})}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"If you use Instance Profile to access S3, set the following properties:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-SQL",children:'"enabled" = "{ true | false }",\n"aws.s3.region" = "<region>",\n"aws.s3.endpoint" = "<endpoint_url>",\n"aws.s3.use_aws_sdk_default_behavior" = "false",\n"aws.s3.use_instance_profile" = "true"\n'})}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"If you use Assumed Role to access S3, set the following properties:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-SQL",children:'"enabled" = "{ true | false }",\n"aws.s3.region" = "<region>",\n"aws.s3.endpoint" = "<endpoint_url>",\n"aws.s3.use_aws_sdk_default_behavior" = "false",\n"aws.s3.use_instance_profile" = "true",\n"aws.s3.iam_role_arn" = "<role_arn>"\n'})}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"If you use Assumed Role to access S3 from an external AWS account, set the following properties:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-SQL",children:'"enabled" = "{ true | false }",\n"aws.s3.region" = "<region>",\n"aws.s3.endpoint" = "<endpoint_url>",\n"aws.s3.use_aws_sdk_default_behavior" = "false",\n"aws.s3.use_instance_profile" = "true",\n"aws.s3.iam_role_arn" = "<role_arn>",\n"aws.s3.external_id" = "<external_id>"\n'})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"If you use GCP Cloud Storage, set the following properties:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-SQL",children:'"enabled" = "{ true | false }",\n\n-- For example: us-east-1\n"aws.s3.region" = "<region>",\n\n-- For example: https://storage.googleapis.com\n"aws.s3.endpoint" = "<endpoint_url>",\n\n"aws.s3.access_key" = "<access_key>",\n"aws.s3.secret_key" = "<secrete_key>"\n'})}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"If you use MinIO, set the following properties:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-SQL",children:'"enabled" = "{ true | false }",\n\n-- For example: us-east-1\n"aws.s3.region" = "<region>",\n\n-- For example: http://172.26.xx.xxx:39000\n"aws.s3.endpoint" = "<endpoint_url>",\n\n"aws.s3.access_key" = "<access_key>",\n"aws.s3.secret_key" = "<secrete_key>"\n'})}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:(0,r.jsx)(s.strong,{children:"Property"})}),(0,r.jsx)(s.th,{children:(0,r.jsx)(s.strong,{children:"Description"})})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"enabled"}),(0,r.jsxs)(s.td,{children:["Whether to enable this storage volume. Default: ",(0,r.jsx)(s.code,{children:"false"}),". Disabled storage volume cannot be referenced."]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"aws.s3.region"}),(0,r.jsxs)(s.td,{children:["The region in which your S3 bucket resides, for example, ",(0,r.jsx)(s.code,{children:"us-west-2"}),"."]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"aws.s3.endpoint"}),(0,r.jsxs)(s.td,{children:["The endpoint URL used to access your S3 bucket, for example, ",(0,r.jsx)(s.code,{children:"https://s3.us-west-2.amazonaws.com"}),"."]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"aws.s3.use_aws_sdk_default_behavior"}),(0,r.jsxs)(s.td,{children:["Whether to use the default authentication credential of AWS SDK. Valid values: ",(0,r.jsx)(s.code,{children:"true"})," and ",(0,r.jsx)(s.code,{children:"false"})," (Default)."]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"aws.s3.use_instance_profile"}),(0,r.jsxs)(s.td,{children:["Whether to use Instance Profile and Assumed Role as credential methods for accessing S3. Valid values: ",(0,r.jsx)(s.code,{children:"true"})," and ",(0,r.jsx)(s.code,{children:"false"})," (Default).",(0,r.jsxs)("ul",{children:[(0,r.jsxs)("li",{children:["If you use IAM user-based credential (Access Key and Secret Key) to access S3, you must specify this item as ",(0,r.jsx)(s.code,{children:"false"}),", and specify ",(0,r.jsx)(s.code,{children:"aws.s3.access_key"})," and ",(0,r.jsx)(s.code,{children:"aws.s3.secret_key"}),"."]}),(0,r.jsxs)("li",{children:["If you use Instance Profile to access S3, you must specify this item as ",(0,r.jsx)(s.code,{children:"true"}),"."]}),(0,r.jsxs)("li",{children:["If you use Assumed Role to access S3, you must specify this item as ",(0,r.jsx)(s.code,{children:"true"}),", and specify ",(0,r.jsx)(s.code,{children:"aws.s3.iam_role_arn"}),"."]}),(0,r.jsxs)("li",{children:["And if you use an external AWS account, you must specify this item as ",(0,r.jsx)(s.code,{children:"true"}),", and specify ",(0,r.jsx)(s.code,{children:"aws.s3.iam_role_arn"})," and ",(0,r.jsx)(s.code,{children:"aws.s3.external_id"}),"."]})]})]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"aws.s3.access_key"}),(0,r.jsx)(s.td,{children:"The Access Key ID used to access your S3 bucket."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"aws.s3.secret_key"}),(0,r.jsx)(s.td,{children:"The Secret Access Key used to access your S3 bucket."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"aws.s3.iam_role_arn"}),(0,r.jsx)(s.td,{children:"The ARN of the IAM role that has privileges on your S3 bucket in which your data files are stored."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"aws.s3.external_id"}),(0,r.jsx)(s.td,{children:"The external ID of the AWS account that is used for cross-account access to your S3 bucket."})]})]})]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"If you use Azure Blob Storage (supported from v3.1.1 onwards):"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"If you use Shared Key to access Azure Blob Storage, set the following properties:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-SQL",children:'"enabled" = "{ true | false }",\n"azure.blob.endpoint" = "<endpoint_url>",\n"azure.blob.shared_key" = "<shared_key>"\n'})}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"If you use shared access signatures (SAS) to access Azure Blob Storage, set the following properties:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-SQL",children:'"enabled" = "{ true | false }",\n"azure.blob.endpoint" = "<endpoint_url>",\n"azure.blob.sas_token" = "<sas_token>"\n'})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"CAUTION"})}),"\n",(0,r.jsx)(s.p,{children:"The hierarchical namespace must be disabled when you create the Azure Blob Storage Account."}),"\n"]}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:(0,r.jsx)(s.strong,{children:"Property"})}),(0,r.jsx)(s.th,{children:(0,r.jsx)(s.strong,{children:"Description"})})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"enabled"}),(0,r.jsxs)(s.td,{children:["Whether to enable this storage volume. Default: ",(0,r.jsx)(s.code,{children:"false"}),". Disabled storage volume cannot be referenced."]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"azure.blob.endpoint"}),(0,r.jsxs)(s.td,{children:["The endpoint of your Azure Blob Storage Account, for example, ",(0,r.jsx)(s.code,{children:"https://test.blob.core.windows.net"}),"."]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"azure.blob.shared_key"}),(0,r.jsx)(s.td,{children:"The Shared Key used to authorize requests for your Azure Blob Storage."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"azure.blob.sas_token"}),(0,r.jsx)(s.td,{children:"The shared access signatures (SAS) used to authorize requests for your Azure Blob Storage."})]})]})]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsxs)(s.p,{children:["Example 1: Create a storage volume ",(0,r.jsx)(s.code,{children:"my_s3_volume"})," for the AWS S3 bucket ",(0,r.jsx)(s.code,{children:"defaultbucket"}),", use the IAM user-based credential (Access Key and Secret Key) to access S3, and enable it."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-SQL",children:'MySQL > CREATE STORAGE VOLUME my_s3_volume\n    -> TYPE = S3\n    -> LOCATIONS = ("s3://defaultbucket/test/")\n    -> PROPERTIES\n    -> (\n    ->     "enabled" = "true",\n    ->     "aws.s3.region" = "us-west-2",\n    ->     "aws.s3.endpoint" = "https://s3.us-west-2.amazonaws.com",\n    ->     "aws.s3.use_aws_sdk_default_behavior" = "false",\n    ->     "aws.s3.use_instance_profile" = "false",\n    ->     "aws.s3.access_key" = "xxxxxxxxxx",\n    ->     "aws.s3.secret_key" = "yyyyyyyyyy"\n    -> );\nQuery OK, 0 rows affected (0.05 sec)\n'})}),"\n",(0,r.jsx)(s.h2,{id:"relevant-sql-statements",children:"Relevant SQL statements"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"/doc/docs/sql-reference/sql-statements/Administration/ALTER%20STORAGE%20VOLUME",children:"ALTER STORAGE VOLUME"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"/doc/docs/sql-reference/sql-statements/Administration/DROP%20STORAGE%20VOLUME",children:"DROP STORAGE VOLUME"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"/doc/docs/sql-reference/sql-statements/Administration/SET%20DEFAULT%20STORAGE%20VOLUME",children:"SET DEFAULT STORAGE VOLUME"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"/doc/docs/sql-reference/sql-statements/Administration/DESC%20STORAGE%20VOLUME",children:"DESC STORAGE VOLUME"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"/doc/docs/sql-reference/sql-statements/Administration/SHOW%20STORAGE%20VOLUMES",children:"SHOW STORAGE VOLUMES"})}),"\n"]})]})}const h=function(e={}){const{wrapper:s}=Object.assign({},(0,t.ah)(),e.components);return s?(0,r.jsx)(s,Object.assign({},e,{children:(0,r.jsx)(o,e)})):o(e)}},11151:(e,s,n)=>{n.d(s,{Zo:()=>i,ah:()=>a});var r=n(67294);const t=r.createContext({});function a(e){const s=r.useContext(t);return r.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const l={};function i({components:e,children:s,disableParentContext:n}){let i;return i=n?"function"==typeof e?e({}):e||l:a(e),r.createElement(t.Provider,{value:i},s)}}}]);