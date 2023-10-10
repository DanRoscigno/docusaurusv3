"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[82139],{1068:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var n=t(85893),o=t(11151);const r={},c="Deploy StarRocks on AWS",i={id:"deployment/starrocks_on_aws",title:"Deploy StarRocks on AWS",description:"StarRocks and AWS provide AWS Partner Solutions to quickly deploy StarRocks on AWS. This topic provides step-by-step instructions to help you deploy and access StarRocks.",source:"@site/versioned_docs/version-3.1/deployment/starrocks_on_aws.md",sourceDirName:"deployment",slug:"/deployment/starrocks_on_aws",permalink:"/doc/zh/docs/deployment/starrocks_on_aws",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/deployment/starrocks_on_aws.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"\u4f7f\u7528 Helm \u90e8\u7f72 StarRocks \u96c6\u7fa4",permalink:"/doc/zh/docs/deployment/helm"},next:{title:"Shared-data deployment",permalink:"/doc/zh/docs/category/shared-data-deployment"}},a={},l=[{value:"Basic concepts",id:"basic-concepts",level:2},{value:"Deploy StarRocks cluster",id:"deploy-starrocks-cluster",level:2},{value:"Access StarRocks cluster",id:"access-starrocks-cluster",level:2}];function d(e){const s=Object.assign({h1:"h1",p:"p",a:"a",h2:"h2",ol:"ol",li:"li",strong:"strong",ul:"ul",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",blockquote:"blockquote",img:"img",code:"code",pre:"pre"},(0,o.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"deploy-starrocks-on-aws",children:"Deploy StarRocks on AWS"}),"\n",(0,n.jsxs)(s.p,{children:["StarRocks and AWS provide ",(0,n.jsx)(s.a,{href:"https://aws.amazon.com/solutions/partners",children:"AWS Partner Solutions"})," to quickly deploy StarRocks on AWS. This topic provides step-by-step instructions to help you deploy and access StarRocks."]}),"\n",(0,n.jsx)(s.h2,{id:"basic-concepts",children:"Basic concepts"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"https://aws-ia.github.io/content/qs_info.html",children:"AWS Partner Solutions"})}),"\n",(0,n.jsxs)(s.p,{children:["AWS Partner Solutions are automated reference deployments built by AWS solutions architects and AWS Partners. AWS Partner Solutions uses ",(0,n.jsx)(s.a,{href:"https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/Welcome.html",children:"AWS CloudFormation"})," templates that automatically deploy AWS resources and third-party resources, such as StarRocks clusters, on the AWS Cloud."]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cfn-whatis-concepts.html#w2aab5c15b7",children:"Templates"})}),"\n",(0,n.jsx)(s.p,{children:"Templates are JSON or YAML formatted text files that describe AWS resources and third-party resources, as well as the properties of those resources."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cfn-whatis-concepts.html#w2ab1b5c15b9",children:"Stacks"})}),"\n",(0,n.jsx)(s.p,{children:"Stacks are used to create and manage the resources described in templates. You can create, update, and delete a set of resources by creating, updating, and deleting a stack."}),"\n",(0,n.jsx)(s.p,{children:"All resources in a stack are defined by a template. Suppose you have created a template that describes various resources. To configure these resources, you need to create a stack by submitting the template that you created, and AWS CloudFormation then configures all those resources for you."}),"\n",(0,n.jsx)(s.h2,{id:"deploy-starrocks-cluster",children:"Deploy StarRocks cluster"}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["Sign in to ",(0,n.jsx)(s.a,{href:"https://console.aws.amazon.com/console/home",children:"your AWS account"}),". If you don't have an account, sign up at ",(0,n.jsx)(s.a,{href:"https://aws.amazon.com/",children:"AWS"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"Choose the AWS Region from the top toolbar."}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["Choose a deployment option to launch this ",(0,n.jsx)(s.a,{href:"https://aws.amazon.com/quickstart/architecture/starrocks-starrocks/",children:"Partner Solution"}),". The AWS CloudFormation console opens with a prepopulated template which is used to deploy a StarRocks cluster with one FE and three BEs. Deployment takes about 30 minutes to complete."]}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"https://signin.aws.amazon.com/signin?redirect_uri=https%3A%2F%2Fus-east-1.console.aws.amazon.com%2Fcloudformation%2Fhome%3Fregion%3Dus-east-1%26state%3DhashArgs%2523%252Fstacks%252Fnew%253FstackName%253Dstarrocks-starrocks%2526templateURL%253Dhttps%253A%252F%252Faws-quickstart.s3.us-east-1.amazonaws.com%252Fquickstart-starrocks-starrocks%252Ftemplates%252Fstarrocks-entrypoint-new-vpc.template.yaml%26isauthcode%3Dtrue&client_id=arn%3Aaws%3Aiam%3A%3A015428540659%3Auser%2Fcloudformation&forceMobileApp=0&code_challenge=yo-6I1O2W0f0VcoqYOVvSwMmhRkC7Vod1M9vWbiMWUM&code_challenge_method=SHA-256",children:"Deploy StarRocks into a new VPC"}),". This option builds a new AWS environment that consists of a VPC, subnets, NAT gateways, security groups, bastion hosts, and other infrastructure components. It then deploys StarRocks into this new VPC."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"https://signin.aws.amazon.com/signin?redirect_uri=https%3A%2F%2Fus-east-1.console.aws.amazon.com%2Fcloudformation%2Fhome%3Fregion%3Dus-east-1%26state%3DhashArgs%2523%252Fstacks%252Fnew%253FstackName%253Dstarrocks-starrocks%2526templateURL%253Dhttps%253A%252F%252Faws-quickstart.s3.us-east-1.amazonaws.com%252Fquickstart-starrocks-starrocks%252Ftemplates%252Fstarrocks-entrypoint-existing-vpc.template.yaml%26isauthcode%3Dtrue&client_id=arn%3Aaws%3Aiam%3A%3A015428540659%3Auser%2Fcloudformation&forceMobileApp=0&code_challenge=dDa178BxB6UkFfrpADw5CIoZ4yDUNRTG7sNM1EO__eo&code_challenge_method=SHA-256",children:"Deploy StarRocks into an existing VPC"}),". This option provisions StarRocks in your existing AWS infrastructure."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"Choose the correct AWS Region."}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["On the ",(0,n.jsx)(s.strong,{children:"Create stack"})," page, keep the default setting for the template URL, and then choose ",(0,n.jsx)(s.strong,{children:"Next"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["On the ",(0,n.jsx)(s.strong,{children:"Specify stack details"})," page"]}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"Customize the stack name if needed."}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"Configure and review the parameters for the template."}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"Configure the required parameters."}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"When you choose to deploy StarRocks into a new VPC, pay attention to the following parameters\uff1a"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Type"}),(0,n.jsx)(s.th,{children:"Parameter"}),(0,n.jsx)(s.th,{children:"Required"}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Network configuration"}),(0,n.jsx)(s.td,{children:"Availability Zones"}),(0,n.jsx)(s.td,{children:"Yes"}),(0,n.jsxs)(s.td,{children:["Select two availability zones for deploying the StarRocks cluster. For more information, see ",(0,n.jsx)(s.a,{href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html#concepts-local-zones",children:"Regions and Zones"}),"."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"EC2 configuration"}),(0,n.jsx)(s.td,{children:"Key pair name"}),(0,n.jsx)(s.td,{children:"Yes"}),(0,n.jsxs)(s.td,{children:["Enter a key pair, consisting of a public key and a private key, is a set of security credentials that you use to prove your identity when you connect to EC2 instances. For more information, see ",(0,n.jsx)(s.a,{href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html",children:"key pairs"}),". > Note > > If you need to create a key pair, see ",(0,n.jsx)(s.a,{href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/create-key-pairs.html",children:"Create key pairs"}),"."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"StarRocks cluster configuration"}),(0,n.jsx)(s.td,{children:"Root Password of Starrock"}),(0,n.jsx)(s.td,{children:"Yes"}),(0,n.jsx)(s.td,{children:"Enter the password of your StarRocks root account. You need to provide the password when you connect to the StarRocks cluster by using the root account."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"Confirm Root Password"}),(0,n.jsx)(s.td,{children:"Yes"}),(0,n.jsx)(s.td,{children:"Confirm the password of your StarRocks root account."})]})]})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"When you choose to deploy StarRocks into an existing VPC, pay attention to the following parameters:"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Type"}),(0,n.jsx)(s.th,{children:"Parameter"}),(0,n.jsx)(s.th,{children:"Required"}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Network configuration"}),(0,n.jsx)(s.td,{children:"VPC ID"}),(0,n.jsx)(s.td,{children:"Yes"}),(0,n.jsxs)(s.td,{children:["Enter the ID of your existing VPC. Make sure that you ",(0,n.jsx)(s.a,{href:"https://docs.aws.amazon.com/vpc/latest/privatelink/vpc-endpoints-s3.html",children:"configure VPC endpoint for the AWS S3"}),"."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"Private subnet 1 ID"}),(0,n.jsx)(s.td,{children:"Yes"}),(0,n.jsx)(s.td,{children:"Enter the ID of the private subnet in Availability Zone 1 of your existing VPC (for example, subnet-fe9a8b32)."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"Public subnet 1 ID"}),(0,n.jsx)(s.td,{children:"Yes"}),(0,n.jsx)(s.td,{children:"Enter the ID of the public subnet in Availability Zone 1 of your existing VPC."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"Public subnet 2 ID"}),(0,n.jsx)(s.td,{children:"Yes"}),(0,n.jsx)(s.td,{children:"Enter the ID of the public subnet in Availability Zone 2 of your existing VPC."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"EC2 configuration"}),(0,n.jsx)(s.td,{children:"Key pair name"}),(0,n.jsx)(s.td,{children:"Yes"}),(0,n.jsxs)(s.td,{children:["Enter a key pair, consisting of a public key and a private key, is a set of security credentials that you use to prove your identity when you connect to EC2 instances. For more information, see ",(0,n.jsx)(s.a,{href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html",children:"key pairs"}),". ",(0,n.jsx)("br",{})," ",(0,n.jsx)(s.strong,{children:"NOTE"})," ",(0,n.jsx)("br",{})," If you need to create a key pair, see ",(0,n.jsx)(s.a,{href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/create-key-pairs.html",children:"Create key pairs"}),"."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"StarRocks cluster configuration"}),(0,n.jsx)(s.td,{children:"Root Password of Starrock"}),(0,n.jsx)(s.td,{children:"Yes"}),(0,n.jsx)(s.td,{children:"Enter the password of your StarRocks root account. You need to provide the password when you connect to the StarRocks cluster by using the root account."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"Confirm Root Password"}),(0,n.jsx)(s.td,{children:"Yes"}),(0,n.jsx)(s.td,{children:"Confirm the password of your StarRocks root account."})]})]})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"For other parameters, review the default settings and customize them as necessary."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["When you finish configuring and reviewing the parameters, choose ",(0,n.jsx)(s.strong,{children:"Next"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["On the ",(0,n.jsx)(s.strong,{children:"Configure stack options"})," page, keep the default settings and click ",(0,n.jsx)(s.strong,{children:"Next"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["On the ",(0,n.jsx)(s.strong,{children:"Review starrocks-starrocks"})," page, review the stack information configured above, including the template, details, and more options. For more information, see ",(0,n.jsx)(s.a,{href:"https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cfn-using-console-create-stack-review.html",children:"Reviewing your stack and estimating stack cost on the AWS CloudFormation console"}),"."]}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"NOTE"})}),"\n",(0,n.jsxs)(s.p,{children:["If you need to change any of the parameters, click ",(0,n.jsx)(s.strong,{children:"Edit"})," on the top right corner of the related section to go back to the relevant page."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["Select the following two check boxes and click ",(0,n.jsx)(s.strong,{children:"Create stack"}),"."]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"StarRocks_on_AWS_1",src:t(41769).Z+"",width:"1023",height:"388"})}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Note that you are responsible for the cost of the AWS services and any third-party licenses"})," used while running this Partner Solution. For cost estimates, refer to the pricing pages for each AWS service you use."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"access-starrocks-cluster",children:"Access StarRocks cluster"}),"\n",(0,n.jsx)(s.p,{children:"Because the StarRocks cluster is deployed into a private subnet, you need to first connect to an EC2 Bastion Host and then access the StarRocks cluster."}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"Connect to the EC2 Bastion Host that is used to access the StarRocks cluster."}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["From the AWS CloudFormation console, on the ",(0,n.jsx)(s.strong,{children:"Outputs"})," tab for ",(0,n.jsx)(s.code,{children:"BastionStack"}),", note the value for ",(0,n.jsx)(s.code,{children:"EIP1"})," down.\n",(0,n.jsx)(s.img,{alt:"StarRocks_on_AWS_2",src:t(23265).Z+"",width:"360",height:"303"})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["From the EC2 console, choose the EC2 Bastion Host.\n",(0,n.jsx)(s.img,{alt:"StarRocks_on_AWS_3",src:t(28186).Z+"",width:"1109",height:"326"})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"Edit the inbound rule for the security group associated with the EC2 Bastion Host, to allow traffic from your machine to the EC2 Bastion Host."}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"Connect to the EC2 Bastion Host."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"Access the StarRocks cluster"}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"Install MySQL on the EC2 Bastion Host."}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"Use the following command to connect the StarRocks cluster:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-Bash",children:"mysql -u root -h 10.0.xx.xx -P 9030 -p\n"})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"host:\nYou can find the FE's private IP address according to the following steps:"}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["From the AWS CloudFormation console, on the ",(0,n.jsx)(s.strong,{children:"Outputs"})," tab for ",(0,n.jsx)(s.code,{children:"StarRocksClusterStack"}),", click the value for ",(0,n.jsx)(s.code,{children:"FeLeaderInstance"}),".\n",(0,n.jsx)(s.img,{alt:"StarRocks_on_AWS_4",src:t(62148).Z+"",width:"1280",height:"930"})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["From the instance summary page, find the FE's private IP address.\n",(0,n.jsx)(s.img,{alt:"StarRocks_on_AWS_5",src:t(31617).Z+"",width:"1155",height:"242"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"password: enter the password you configure in step 5."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]})]})}const h=function(e={}){const{wrapper:s}=Object.assign({},(0,o.ah)(),e.components);return s?(0,n.jsx)(s,Object.assign({},e,{children:(0,n.jsx)(d,e)})):d(e)}},41769:(e,s,t)=>{t.d(s,{Z:()=>n});const n=t.p+"assets/images/StarRocks_on_AWS_1-f9a4525dc16ef0967aa0c578c3960183.png"},23265:(e,s,t)=>{t.d(s,{Z:()=>n});const n=t.p+"assets/images/StarRocks_on_AWS_2-5d7b808337b23aa7494d9992348bf770.png"},28186:(e,s,t)=>{t.d(s,{Z:()=>n});const n=t.p+"assets/images/StarRocks_on_AWS_3-54ca609bf8ca2bcb1caa247e77a8a41a.png"},62148:(e,s,t)=>{t.d(s,{Z:()=>n});const n=t.p+"assets/images/StarRocks_on_AWS_4-2c79c716d49b4cf3a2c53269dfa7329e.png"},31617:(e,s,t)=>{t.d(s,{Z:()=>n});const n=t.p+"assets/images/StarRocks_on_AWS_5-d309902b8c147b0048d05ff57c7fba6f.png"},11151:(e,s,t)=>{t.d(s,{Zo:()=>i,ah:()=>r});var n=t(67294);const o=n.createContext({});function r(e){const s=n.useContext(o);return n.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const c={};function i({components:e,children:s,disableParentContext:t}){let i;return i=t?"function"==typeof e?e({}):e||c:r(e),n.createElement(o.Provider,{value:i},s)}}}]);