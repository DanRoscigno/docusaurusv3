"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[95329],{23403:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>t,toc:()=>a});var n=s(85893),i=s(11151);const o={},c="Resource group",t={id:"administration/resource_group",title:"Resource group",description:"This topic describes the resource group feature of StarRocks.",source:"@site/versioned_docs/version-3.0/administration/resource_group.md",sourceDirName:"administration",slug:"/administration/resource_group",permalink:"/docs/3.0/administration/resource_group",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/administration/resource_group.md",tags:[],version:"3.0",frontMatter:{},sidebar:"documentation",previous:{title:"Query queues",permalink:"/docs/3.0/administration/query_queues"},next:{title:"[Preview] Spill to disk",permalink:"/docs/3.0/administration/spill_to_disk"}},l={},a=[{value:"Terms",id:"terms",level:2},{value:"resource group",id:"resource-group-1",level:3},{value:"classifier",id:"classifier",level:3},{value:"Isolate computing resources",id:"isolate-computing-resources",level:2},{value:"Enable resource groups",id:"enable-resource-groups",level:3},{value:"Create resource groups and classifiers",id:"create-resource-groups-and-classifiers",level:3},{value:"Specify resource group (Optional)",id:"specify-resource-group-optional",level:3},{value:"View resource groups and classifiers",id:"view-resource-groups-and-classifiers",level:3},{value:"Manage resource groups and classifiers",id:"manage-resource-groups-and-classifiers",level:3},{value:"Monitor resource group",id:"monitor-resource-group",level:2},{value:"What to do next",id:"what-to-do-next",level:2}];function u(e){const r=Object.assign({h1:"h1",p:"p",img:"img",ul:"ul",li:"li",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",h2:"h2",h3:"h3",code:"code",blockquote:"blockquote",strong:"strong",a:"a",pre:"pre"},(0,i.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:"resource-group",children:"Resource group"}),"\n",(0,n.jsx)(r.p,{children:"This topic describes the resource group feature of StarRocks."}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{alt:"resource group",src:s(73892).Z+"",width:"1178",height:"732"})}),"\n",(0,n.jsx)(r.p,{children:"With this feature, you could simultaneously run several workloads in a single cluster, including short query, ad-hoc query, ETL jobs, to save extra cost of deploying multiple clusters. From technical perspective, the execution engine would schedule concurrent workloads according to users' specification and isolate the interference among them."}),"\n",(0,n.jsx)(r.p,{children:"The roadmap of Resource Group:"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"Since v2.2, StarRocks supports limiting resource consumption for queries and implementing isolation and efficient use of resources among tenants in the same cluster."}),"\n",(0,n.jsx)(r.li,{children:"In StarRocks v2.3, you can further restrict the resource consumption for big queries, and prevent the cluster resources from getting exhausted by oversized query requests, to guarantee the system stability."}),"\n",(0,n.jsx)(r.li,{children:"StarRocks v2.5 supports limiting computation resource consumption for data loading (INSERT)."}),"\n"]}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{}),(0,n.jsx)(r.th,{children:"Internal Table"}),(0,n.jsx)(r.th,{children:"External Table"}),(0,n.jsx)(r.th,{children:"Big Query Restriction"}),(0,n.jsx)(r.th,{children:"Short Query"}),(0,n.jsx)(r.th,{children:"Data Ingestion"}),(0,n.jsx)(r.th,{children:"Schema Change"}),(0,n.jsx)(r.th,{children:"INSERT"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"2.2"}),(0,n.jsx)(r.td,{children:"\u221a"}),(0,n.jsx)(r.td,{children:"\xd7"}),(0,n.jsx)(r.td,{children:"\xd7"}),(0,n.jsx)(r.td,{children:"\xd7"}),(0,n.jsx)(r.td,{children:"\xd7"}),(0,n.jsx)(r.td,{children:"\xd7"}),(0,n.jsx)(r.td,{children:"\xd7"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"2.3"}),(0,n.jsx)(r.td,{children:"\u221a"}),(0,n.jsx)(r.td,{children:"\u221a"}),(0,n.jsx)(r.td,{children:"\u221a"}),(0,n.jsx)(r.td,{children:"\u221a"}),(0,n.jsx)(r.td,{children:"\xd7"}),(0,n.jsx)(r.td,{children:"\xd7"}),(0,n.jsx)(r.td,{children:"\xd7"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"2.4"}),(0,n.jsx)(r.td,{children:"\u221a"}),(0,n.jsx)(r.td,{children:"\u221a"}),(0,n.jsx)(r.td,{children:"\u221a"}),(0,n.jsx)(r.td,{children:"\u221a"}),(0,n.jsx)(r.td,{children:"\xd7"}),(0,n.jsx)(r.td,{children:"\xd7"}),(0,n.jsx)(r.td,{children:"\xd7"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"2.5"}),(0,n.jsx)(r.td,{children:"\u221a"}),(0,n.jsx)(r.td,{children:"\u221a"}),(0,n.jsx)(r.td,{children:"\u221a"}),(0,n.jsx)(r.td,{children:"\u221a"}),(0,n.jsx)(r.td,{children:"\u221a"}),(0,n.jsx)(r.td,{children:"\xd7"}),(0,n.jsx)(r.td,{children:"\u221a"})]})]})]}),"\n",(0,n.jsx)(r.h2,{id:"terms",children:"Terms"}),"\n",(0,n.jsx)(r.p,{children:"This section describes the terms that you must understand before you use the resource group feature."}),"\n",(0,n.jsx)(r.h3,{id:"resource-group-1",children:"resource group"}),"\n",(0,n.jsx)(r.p,{children:"Each resource group is a set of computing resources from a specific BE. You can divide each BE of your cluster into multiple resource groups. When a query is assigned to a resource group, StarRocks allocates CPU and memory resources to the resource group based on the resource quotas that you specified for the resource group."}),"\n",(0,n.jsx)(r.p,{children:"You can specify CPU and memory resource quotas for a resource group on a BE by using the following parameters:"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.code,{children:"cpu_core_limit"})}),"\n",(0,n.jsx)(r.p,{children:"This parameter specifies the soft limit for the number of CPU cores that can be allocated to the resource group on the BE. Valid values: any non-zero positive integer."}),"\n",(0,n.jsx)(r.p,{children:"In actual business scenarios, CPU cores that are allocated to the resource group proportionally scale based on the availability of CPU cores on the BE."}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"NOTE"})}),"\n",(0,n.jsxs)(r.p,{children:["For example, you configure three resource groups on a BE that provides 16 CPU cores: rg1, rg2, and rg3. The values of ",(0,n.jsx)(r.code,{children:"cpu_core_limit"})," for the three resource groups are ",(0,n.jsx)(r.code,{children:"2"}),", ",(0,n.jsx)(r.code,{children:"6"}),", and ",(0,n.jsx)(r.code,{children:"8"}),", respectively."]}),"\n",(0,n.jsx)(r.p,{children:"If all CPU cores of the BE are occupied, the number of CPU cores that can be allocated to each of the three resource groups are 2, 6, and 8, respectively, based on the following calculations:"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"Number of CPU cores for rg1 = Total number of CPU cores on the BE \xd7 (2/16) = 2"}),"\n",(0,n.jsx)(r.li,{children:"Number of CPU cores for rg2 = Total number of CPU cores on the BE \xd7 (6/16) = 6"}),"\n",(0,n.jsx)(r.li,{children:"Number of CPU cores for rg3 = Total number of CPU cores on the BE \xd7 (8/16) = 8"}),"\n"]}),"\n",(0,n.jsx)(r.p,{children:"If not all CPU cores of the BE are occupied, as when rg1 and rg2 are loaded but rg3 is not, the number of CPU cores that can be allocated to rg1 and rg2 are 4 and 12, respectively, based on the following calculations:"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"Number of CPU cores for rg1 = Total number of CPU cores on the BE \xd7 (2/8) = 4"}),"\n",(0,n.jsx)(r.li,{children:"Number of CPU cores for rg2 = Total number of CPU cores on the BE \xd7 (6/8) = 12"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.code,{children:"mem_limit"})}),"\n",(0,n.jsx)(r.p,{children:"This parameter specifies the percentage of memory that can be used for queries in the total memory that is provided by the BE. Valid values: (0, 1)."}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"NOTE"})}),"\n",(0,n.jsxs)(r.p,{children:["The amount of memory that can be used for queries is indicated by the ",(0,n.jsx)(r.code,{children:"query_pool"})," parameter. For more information about the parameter, see ",(0,n.jsx)(r.a,{href:"/docs/3.0/administration/Memory_management",children:"Memory management"}),"."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.code,{children:"concurrency_limit"})}),"\n",(0,n.jsx)(r.p,{children:"This parameter specifies the upper limit of concurrent queries in a resource group. It is used to avoid system overload caused by too many concurrent queries. This parameter takes effect only when it is set greater than 0. Default: 0."}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(r.p,{children:"On the basis of the above resource consumption restrictions, you can further restrict the resource consumption for big queries with the following parameters:"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"big_query_cpu_second_limit"}),": This parameter specifies the upper time limit of CPU occupation for a big query. Concurrent queries add up the time. The unit is second. This parameter takes effect only when it is set greater than 0. Default: 0."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"big_query_scan_rows_limit"}),": This parameter specifies the upper limit of row count that a big query can scan. This parameter takes effect only when it is set greater than 0. Default: 0."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"big_query_mem_limit"}),": This parameter specifies the upper limit of memory usage of a big query. The unit is byte. This parameter takes effect only when it is set greater than 0. Default: 0."]}),"\n"]}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"NOTE"})}),"\n",(0,n.jsxs)(r.p,{children:["When a query running in a resource group exceeds the above big query limit, the query will be terminated with an error. You can also view error messages in the ",(0,n.jsx)(r.code,{children:"ErrorCode"})," column of the FE node ",(0,n.jsx)(r.strong,{children:"fe.audit.log"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(r.p,{children:["You can set the resource group ",(0,n.jsx)(r.code,{children:"type"})," to ",(0,n.jsx)(r.code,{children:"short_query"}),", or ",(0,n.jsx)(r.code,{children:"normal"}),"."]}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["The default value is ",(0,n.jsx)(r.code,{children:"normal"}),". You do not need specify ",(0,n.jsx)(r.code,{children:"normal"})," in the parameter ",(0,n.jsx)(r.code,{children:"type"}),"."]}),"\n",(0,n.jsxs)(r.li,{children:["When queries hit a ",(0,n.jsx)(r.code,{children:"short_query"})," resource group, the BE node reserves the CPU resource specified in ",(0,n.jsx)(r.code,{children:"short_query.cpu_core_limit"}),". The CPU resource reserved for queries that hit ",(0,n.jsx)(r.code,{children:"normal"})," resource group is limited to ",(0,n.jsx)(r.code,{children:"BE core - short_query.cpu_core_limit"}),"."]}),"\n",(0,n.jsxs)(r.li,{children:["When no query hits the ",(0,n.jsx)(r.code,{children:"short_query"})," resource group, no limit is imposed to the resource of ",(0,n.jsx)(r.code,{children:"normal"})," resource group."]}),"\n"]}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"CAUTION"})}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"You can create at most ONE short query resource group in a StarRocks Cluster."}),"\n",(0,n.jsxs)(r.li,{children:["StarRocks does not set set a hard upper limit of CPU resource for ",(0,n.jsx)(r.code,{children:"short_query"})," resource group."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(r.h3,{id:"classifier",children:"classifier"}),"\n",(0,n.jsx)(r.p,{children:"Each classifier holds one or more conditions that can be matched to the properties of queries. StarRocks identifies the classifier that best matches each query based on the match conditions and assigns resources for running the query."}),"\n",(0,n.jsx)(r.p,{children:"Classifiers support the following conditions:"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"user"}),": the name of the user."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"role"}),": the role of the user."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"query_type"}),": the type of the query. ",(0,n.jsx)(r.code,{children:"SELECT"})," and ",(0,n.jsx)(r.code,{children:"INSERT"})," (from v2.5) are supported. When INSERT tasks hit a resource group with ",(0,n.jsx)(r.code,{children:"query_type"})," as ",(0,n.jsx)(r.code,{children:"insert"}),", the BE node reserves the specified CPU resources for the tasks."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"source_ip"}),": the CIDR block from which the query is initiated."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"db"}),": the database which the query accesses. It can be specified by strings separated by commas ",(0,n.jsx)(r.code,{children:","}),"."]}),"\n"]}),"\n",(0,n.jsx)(r.p,{children:"A classifier matches a query only when one or all conditions of the classifier match the information about the query. If multiple classifiers match a query, StarRocks calculates the degree of matching between the query and each classifier and identifies the classifier with the highest degree of matching."}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"NOTE"})}),"\n",(0,n.jsxs)(r.p,{children:["You can view the resource group to which a query belongs in the ",(0,n.jsx)(r.code,{children:"ResourceGroup"})," column of the FE node ",(0,n.jsx)(r.strong,{children:"fe.audit.log"}),"."]}),"\n",(0,n.jsxs)(r.p,{children:["If a query does not hit any classifiers, the default resource group ",(0,n.jsx)(r.code,{children:"default_wg"})," is used. The resource limits of ",(0,n.jsx)(r.code,{children:"default_wg"})," are as follows:"]}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"cpu_core_limit"}),": 1 (",(0,n.jsx)(r.code,{children:"<="})," v2.3.7) or the number of CPU cores in BE (",(0,n.jsx)(r.code,{children:">"})," v2.3.7)"]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"mem_limit"}),": 100%"]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"concurrency_limit"}),": 0"]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"big_query_cpu_second_limit"}),": 0"]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"big_query_scan_rows_limit"}),": 0"]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"big_query_mem_limit"}),": 0"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(r.p,{children:"StarRocks calculates the degree of matching between a query and a classifier by using the following rules:"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["If the classifier has the same value of ",(0,n.jsx)(r.code,{children:"user"})," as the query, the degree of matching of the classifier increases by 1."]}),"\n",(0,n.jsxs)(r.li,{children:["If the classifier has the same value of ",(0,n.jsx)(r.code,{children:"role"})," as the query, the degree of matching of the classifier increases by 1."]}),"\n",(0,n.jsxs)(r.li,{children:["If the classifier has the same value of ",(0,n.jsx)(r.code,{children:"query_type"})," as the query, the degree of matching of the classifier increases by 1 plus the number obtained from the following calculation: 1/Number of ",(0,n.jsx)(r.code,{children:"query_type"})," fields in the classifier."]}),"\n",(0,n.jsxs)(r.li,{children:["If the classifier has the same value of ",(0,n.jsx)(r.code,{children:"source_ip"})," as the query, the degree of matching of the classifier increases by 1 plus the number obtained from the following calculation: (32 - ",(0,n.jsx)(r.code,{children:"cidr_prefix"}),")/64."]}),"\n",(0,n.jsxs)(r.li,{children:["If the classifier has the same value of ",(0,n.jsx)(r.code,{children:"db"})," as the query, the degree of matching of the classifier increases by 10."]}),"\n"]}),"\n",(0,n.jsx)(r.p,{children:"If multiple classifiers match a query, the classifier with a larger number of conditions has a higher degree of matching."}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-plaintext",children:"-- Classifier B has more conditions than Classifier A. Therefore, Classifier B has a higher degree of matching than Classifier A.\n\n\nclassifier A (user='Alice')\n\n\nclassifier B (user='Alice', source_ip = '192.168.1.0/24')\n"})}),"\n",(0,n.jsx)(r.p,{children:"If multiple matching classifiers have the same number of conditions, the classifier whose conditions are described more accurately has a higher degree of matching."}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-plaintext",children:"-- The CIDR block that is specified in Classifier B is smaller in range than Classifier A. Therefore, Classifier B has a higher degree of matching than Classifier A.\nclassifier A (user='Alice', source_ip = '192.168.1.0/16')\nclassifier B (user='Alice', source_ip = '192.168.1.0/24')\n\n-- Classifier C has fewer query types specified in it than Classifier D. Therefore, Classifier C has a higher degree of matching than Classifier D.\nclassifier C (user='Alice', query_type in ('select'))\nclassifier D (user='Alice', query_type in ('insert','select'))\n"})}),"\n",(0,n.jsx)(r.h2,{id:"isolate-computing-resources",children:"Isolate computing resources"}),"\n",(0,n.jsx)(r.p,{children:"You can isolate computing resources among queries by configuring resource groups and classifiers."}),"\n",(0,n.jsx)(r.h3,{id:"enable-resource-groups",children:"Enable resource groups"}),"\n",(0,n.jsx)(r.p,{children:"Execute the following statement to enable resource groups:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-SQL",children:"SET enable_resource_group = true;\n"})}),"\n",(0,n.jsx)(r.p,{children:"If you want to globally enable resource groups, execute the following statement:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-SQL",children:"SET GLOBAL enable_resource_group = true;\n"})}),"\n",(0,n.jsx)(r.h3,{id:"create-resource-groups-and-classifiers",children:"Create resource groups and classifiers"}),"\n",(0,n.jsx)(r.p,{children:"Execute the following statement to create a resource group, associate the resource group with a classifier, and allocate computing resources to the resource group:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-SQL",children:'CREATE RESOURCE GROUP <group_name> \nTO (\n    user=\'string\', \n    role=\'string\', \n    query_type in (\'select\'), \n    source_ip=\'cidr\'\n) --Create a classifier. If you create more than one classifier, separate the classifiers with commas (`,`).\nWITH (\n    "cpu_core_limit" = "INT",\n    "mem_limit" = "m%",\n    "concurrency_limit" = "INT",\n    "type" = "str" --The type of the resource group. Set the value to normal.\n);\n'})}),"\n",(0,n.jsx)(r.p,{children:"Example:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-SQL",children:"CREATE RESOURCE GROUP rg1\nTO \n    (user='rg1_user1', role='rg1_role1', query_type in ('select'), source_ip='192.168.x.x/24'),\n    (user='rg1_user2', query_type in ('select'), source_ip='192.168.x.x/24'),\n    (user='rg1_user3', source_ip='192.168.x.x/24'),\n    (user='rg1_user4'),\n    (db='db1')\nWITH (\n    'cpu_core_limit' = '10',\n    'mem_limit' = '20%',\n    'big_query_cpu_second_limit' = '100',\n    'big_query_scan_rows_limit' = '100000',\n    'big_query_mem_limit' = '1073741824'\n);\n"})}),"\n",(0,n.jsx)(r.h3,{id:"specify-resource-group-optional",children:"Specify resource group (Optional)"}),"\n",(0,n.jsx)(r.p,{children:"You can specify resource group for the current session directly."}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-SQL",children:"SET resource_group = 'group_name';\n"})}),"\n",(0,n.jsx)(r.h3,{id:"view-resource-groups-and-classifiers",children:"View resource groups and classifiers"}),"\n",(0,n.jsx)(r.p,{children:"Execute the following statement to query all resource groups and classifiers:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-SQL",children:"SHOW RESOURCE GROUPS ALL;\n"})}),"\n",(0,n.jsx)(r.p,{children:"Execute the following statement to query the resource groups and classifiers of the logged-in user:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-SQL",children:"SHOW RESOURCE GROUPS;\n"})}),"\n",(0,n.jsx)(r.p,{children:"Execute the following statement to query a specified resource group and its classifiers:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-SQL",children:"SHOW RESOURCE GROUP group_name;\n"})}),"\n",(0,n.jsx)(r.p,{children:"Example:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-plain",children:"mysql> SHOW RESOURCE GROUPS ALL;\n+------+--------+--------------+----------+------------------+--------+------------------------------------------------------------------------------------------------------------------------+\n| Name | Id     | CPUCoreLimit | MemLimit | ConcurrencyLimit | Type   | Classifiers                                                                                                            |\n+------+--------+--------------+----------+------------------+--------+------------------------------------------------------------------------------------------------------------------------+\n| rg1  | 300039 | 10           | 20.0%    | 11               | NORMAL | (id=300040, weight=4.409375, user=rg1_user1, role=rg1_role1, query_type in (SELECT), source_ip=192.168.2.1/24)         |\n| rg1  | 300039 | 10           | 20.0%    | 11               | NORMAL | (id=300041, weight=3.459375, user=rg1_user2, query_type in (SELECT), source_ip=192.168.3.1/24)                         |\n| rg1  | 300039 | 10           | 20.0%    | 11               | NORMAL | (id=300042, weight=2.359375, user=rg1_user3, source_ip=192.168.4.1/24)                                                 |\n| rg1  | 300039 | 10           | 20.0%    | 11               | NORMAL | (id=300043, weight=1.0, user=rg1_user4)                                                                                |\n+------+--------+--------------+----------+------------------+--------+------------------------------------------------------------------------------------------------------------------------+\n"})}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"NOTE"})}),"\n",(0,n.jsxs)(r.p,{children:["In the preceding example, ",(0,n.jsx)(r.code,{children:"weight"})," indicates the degree of matching."]}),"\n"]}),"\n",(0,n.jsx)(r.h3,{id:"manage-resource-groups-and-classifiers",children:"Manage resource groups and classifiers"}),"\n",(0,n.jsx)(r.p,{children:"You can modify the resource quotas for each resource group. You can also add or delete classifiers from resource groups."}),"\n",(0,n.jsx)(r.p,{children:"Execute the following statement to modify the resource quotas for an existing resource group:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-SQL",children:"ALTER RESOURCE GROUP group_name WITH (\n    'cpu_core_limit' = 'INT',\n    'mem_limit' = 'm%'\n);\n"})}),"\n",(0,n.jsx)(r.p,{children:"Execute the following statement to delete a resource group:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-SQL",children:"DROP RESOURCE GROUP group_name;\n"})}),"\n",(0,n.jsx)(r.p,{children:"Execute the following statement to add a classifier to a resource group:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-SQL",children:"ALTER RESOURCE GROUP <group_name> ADD (user='string', role='string', query_type in ('select'), source_ip='cidr');\n"})}),"\n",(0,n.jsx)(r.p,{children:"Execute the following statement to delete a classifier from a resource group:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-SQL",children:"ALTER RESOURCE GROUP <group_name> DROP (CLASSIFIER_ID_1, CLASSIFIER_ID_2, ...);\n"})}),"\n",(0,n.jsx)(r.p,{children:"Execute the following statement to delete all classifiers of a resource group:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-SQL",children:"ALTER RESOURCE GROUP <group_name> DROP ALL;\n"})}),"\n",(0,n.jsx)(r.h2,{id:"monitor-resource-group",children:"Monitor resource group"}),"\n",(0,n.jsxs)(r.p,{children:["You can set ",(0,n.jsx)(r.a,{href:"Monitor_and_alert.md",children:"monitor and alert"})," for your resource groups."]}),"\n",(0,n.jsx)(r.p,{children:"Metrics you can monitor regarding resource groups include:"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["FE","\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"starrocks_fe_query_resource_group"}),": The number of queries in each resource group."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"starrocks_fe_query_resource_group_latency"}),": The query latency percentile for each resource group."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"starrocks_fe_query_resource_group_err"}),": The number of terminated-with-error queries in each resource group."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["BE","\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"starrocks_be_resource_group_cpu_limit_ratio"}),": Instantaneous value of resource group CPU quota ratio."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"starrocks_be_resource_group_cpu_use_ratio"}),": Instantaneous value of resource group CPU usage ratio."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"starrocks_be_resource_group_mem_limit_bytes"}),": Instantaneous value of resource group memory quota."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"starrocks_be_resource_group_mem_allocated_bytes"}),": Instantaneous value of resource group memory usage."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"what-to-do-next",children:"What to do next"}),"\n",(0,n.jsx)(r.p,{children:"After you configure resource groups, you can manage memory resources and queries. For more information, see the following topics:"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"/docs/3.0/administration/Memory_management",children:"Memory management"})}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"/docs/3.0/administration/Query_management",children:"Query management"})}),"\n"]}),"\n"]})]})}const d=function(e={}){const{wrapper:r}=Object.assign({},(0,i.ah)(),e.components);return r?(0,n.jsx)(r,Object.assign({},e,{children:(0,n.jsx)(u,e)})):u(e)}},73892:(e,r,s)=>{s.d(r,{Z:()=>n});const n=s.p+"assets/images/resource_group-46f08f79f9e99ff2616e142ebd699e2c.png"},11151:(e,r,s)=>{s.d(r,{Zo:()=>t,ah:()=>o});var n=s(67294);const i=n.createContext({});function o(e){const r=n.useContext(i);return n.useMemo((()=>"function"==typeof e?e(r):{...r,...e}),[r,e])}const c={};function t({components:e,children:r,disableParentContext:s}){let t;return t=s?"function"==typeof e?e({}):e||c:o(e),n.createElement(i.Provider,{value:t},r)}}}]);