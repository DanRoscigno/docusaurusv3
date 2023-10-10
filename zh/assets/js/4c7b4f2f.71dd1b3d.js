"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[39075],{30317:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>l,contentTitle:()=>i,default:()=>o,frontMatter:()=>d,metadata:()=>c,toc:()=>a});var r=t(85893),n=t(11151);const d={},i="SHOW BACKENDS",c={id:"sql-reference/sql-statements/Administration/SHOW BACKENDS",title:"SHOW BACKENDS",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.1/sql-reference/sql-statements/Administration/SHOW BACKENDS.md",sourceDirName:"sql-reference/sql-statements/Administration",slug:"/sql-reference/sql-statements/Administration/SHOW BACKENDS",permalink:"/docusaurusv3/zh/docs/sql-reference/sql-statements/Administration/SHOW BACKENDS",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-statements/Administration/SHOW BACKENDS.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"SET",permalink:"/docusaurusv3/zh/docs/sql-reference/sql-statements/Administration/SET"},next:{title:"SHOW BROKER",permalink:"/docusaurusv3/zh/docs/sql-reference/sql-statements/Administration/SHOW BROKER"}},l={},a=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u8fd4\u56de\u4fe1\u606f\u8bf4\u660e",id:"\u8fd4\u56de\u4fe1\u606f\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function h(e){const s=Object.assign({h1:"h1",h2:"h2",p:"p",blockquote:"blockquote",strong:"strong",pre:"pre",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,n.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h1,{id:"show-backends",children:"SHOW BACKENDS"}),"\n",(0,r.jsx)(s.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,r.jsx)(s.p,{children:"\u67e5\u770b\u5f53\u524d\u96c6\u7fa4\u4e2d\u6240\u6709 BE \u8282\u70b9\u7684\u76f8\u5173\u4fe1\u606f\u3002"}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"\u6ce8\u610f"})}),"\n",(0,r.jsx)(s.p,{children:"\u6b64\u64cd\u4f5c\u9700\u8981 SYSTEM \u5c42\u7684 NODE \u6216\u8005 OPERATE \u6743\u9650\u3002"}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-SQL",children:"SHOW BACKENDS\n"})}),"\n",(0,r.jsx)(s.h2,{id:"\u8fd4\u56de\u4fe1\u606f\u8bf4\u660e",children:"\u8fd4\u56de\u4fe1\u606f\u8bf4\u660e"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-SQL",children:"+-----------+-----+---------------+--------+----------+----------+---------------+---------------+-------+----------------------+-----------------------+-----------+------------------+---------------+---------------+---------+----------------+--------+----------+--------+-------------------+-------------+----------+\n| BackendId | IP  | HeartbeatPort | BePort | HttpPort | BrpcPort | LastStartTime | LastHeartbeat | Alive | SystemDecommissioned | ClusterDecommissioned | TabletNum | DataUsedCapacity | AvailCapacity | TotalCapacity | UsedPct | MaxDiskUsedPct | ErrMsg | Version  | Status | DataTotalCapacity | DataUsedPct | CpuCores |\n+-----------+-----+---------------+--------+----------+----------+---------------+---------------+-------+----------------------+-----------------------+-----------+------------------+---------------+---------------+---------+----------------+--------+----------+--------+-------------------+-------------+----------+\n"})}),"\n",(0,r.jsx)(s.p,{children:"\u8fd4\u56de\u4fe1\u606f\u4e2d\u7684\u53c2\u6570\u8bf4\u660e\u5982\u4e0b\uff1a"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:(0,r.jsx)(s.strong,{children:"\u53c2\u6570"})}),(0,r.jsx)(s.th,{children:(0,r.jsx)(s.strong,{children:"\u8bf4\u660e"})})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"BackendId"}),(0,r.jsx)(s.td,{children:"BE \u7684 ID\u3002"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"IP"}),(0,r.jsx)(s.td,{children:"BE \u7684 IP \u5730\u5740\u3002"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"HeartbeatPort"}),(0,r.jsx)(s.td,{children:"BE \u4e0a\u7684\u5fc3\u8df3\u7aef\u53e3\uff0c\u7528\u4e8e\u63a5\u6536\u6765\u81ea FE \u7684\u5fc3\u8df3\u3002"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"BePort"}),(0,r.jsx)(s.td,{children:"BE \u4e0a\u7684 Thrift server \u7aef\u53e3\uff0c \u7528\u4e8e\u63a5\u6536\u6765\u81ea FE \u7684\u8bf7\u6c42\u3002"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"HttpPort"}),(0,r.jsx)(s.td,{children:"BE \u4e0a\u7684 HTTP server \u7aef\u53e3\uff0c\u7528\u4e8e\u7f51\u9875\u8bbf\u95ee BE\u3002"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"BrpcPort"}),(0,r.jsx)(s.td,{children:"BE \u4e0a\u7684 brpc \u7aef\u53e3\uff0c\u7528\u4e8e BE \u4e4b\u95f4\u901a\u8baf\u3002"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"LastStartTime"}),(0,r.jsx)(s.td,{children:"BE \u6700\u540e\u4e00\u6b21\u542f\u52a8\u7684\u65f6\u95f4\u3002"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"LastHeartbeat"}),(0,r.jsx)(s.td,{children:"FE \u6700\u540e\u4e00\u6b21\u53d1\u5fc3\u8df3\u7ed9 BE\uff0c\u4e14 BE \u6210\u529f\u56de\u590d\u7684\u65f6\u95f4\u3002"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Alive"}),(0,r.jsxs)(s.td,{children:["BE \u662f\u5426\u5b58\u6d3b\u3002",(0,r.jsxs)("ul",{children:[(0,r.jsxs)("li",{children:[(0,r.jsx)(s.code,{children:"true"}),"\uff1a\u8868\u793a\u5b58\u6d3b\u3002"]}),(0,r.jsxs)("li",{children:[(0,r.jsx)(s.code,{children:"false"}),"\uff1a\u8868\u793a\u6ca1\u6709\u5b58\u6d3b\u3002 "]})]})]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"SystemDecommissioned"}),(0,r.jsxs)(s.td,{children:["BE \u662f\u5426\u5df2\u4e0b\u7ebf\u3002\u4e0b\u7ebf\u524d\uff0c\u8be5 BE \u8282\u70b9\u7684\u6570\u636e\u4f1a\u8fc1\u79fb\u5230\u5176\u4ed6 BE \u8282\u70b9\u4e0a\uff0c\u671f\u95f4\u4e0d\u5f71\u54cd\u6570\u636e\u5bfc\u5165\u548c\u67e5\u8be2\u3002",(0,r.jsxs)("ul",{children:[(0,r.jsxs)("li",{children:[(0,r.jsx)(s.code,{children:"true"}),"\uff1a\u8868\u793a\u96c6\u7fa4\u5df2\u7ecf\u6807\u8bb0\u8be5 BE \u4e0b\u7ebf\uff08\u6570\u636e\u53ef\u80fd\u5df2\u7ecf\u5b8c\u6210\u8fc1\u79fb\uff0c\u6216\u8fd8\u5728\u8fc1\u79fb\u4e2d\uff09\u3002"]}),(0,r.jsxs)("li",{children:[(0,r.jsx)(s.code,{children:"false"}),"\uff1a\u8868\u793a\u96c6\u7fa4\u6b63\u5e38\u4f7f\u7528\u8be5 BE\uff08\u672a\u6267\u884c\u4e0b\u7ebf\u64cd\u4f5c\uff09\u3002"]})]})]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"ClusterDecommissioned"}),(0,r.jsx)(s.td,{children:"\u8be5\u53c2\u6570\u7528\u4e8e\u7cfb\u7edf\u517c\u5bb9\u3002"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"TabletNum"}),(0,r.jsx)(s.td,{children:"BE \u4e0a tablet \u7684\u6570\u91cf\u3002"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"DataUsedCapacity"}),(0,r.jsx)(s.td,{children:"\u6570\u636e\u6587\u4ef6\u5360\u7528\u7684\u78c1\u76d8\u7a7a\u95f4\u3002"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"AvailCapacity"}),(0,r.jsx)(s.td,{children:"\u53ef\u4f7f\u7528\u7684\u78c1\u76d8\u7a7a\u95f4\u3002"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"TotalCapacity"}),(0,r.jsxs)(s.td,{children:["\u603b\u78c1\u76d8\u7a7a\u95f4\uff0c\u5373\u4e3a ",(0,r.jsx)(s.code,{children:"DataUsedCapacity"})," + ",(0,r.jsx)(s.code,{children:"AvailCapacity"})," + \u975e\u6570\u636e\u6587\u4ef6\u5360\u7528\u7684\u7a7a\u95f4\u3002"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"UsedPct"}),(0,r.jsx)(s.td,{children:"\u78c1\u76d8\u4f7f\u7528\u91cf\u767e\u5206\u6bd4\u3002"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"MaxDiskUsedPct"}),(0,r.jsx)(s.td,{children:"\u4e00\u4e2a BE \u8282\u70b9\u5982\u679c\u6709\u591a\u4e2a\u5b58\u50a8\u6570\u636e\u7684\u8def\u5f84\uff0c\u8be5\u53c2\u6570\u4e3a\u5b58\u50a8\u6570\u636e\u6700\u591a\u7684\u8def\u5f84\u5360\u7528\u78c1\u76d8\u7684\u767e\u5206\u6bd4\u3002"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"ErrMsg"}),(0,r.jsx)(s.td,{children:"\u63a5\u6536 FE \u5fc3\u8df3\u5931\u8d25\u65f6\u7684\u9519\u8bef\u4fe1\u606f\u3002"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Version"}),(0,r.jsx)(s.td,{children:"\u5f53\u524d\u96c6\u7fa4\u7684\u7248\u672c\u3002"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Status"}),(0,r.jsx)(s.td,{children:"BE \u6700\u540e\u4e00\u6b21\u5411 FE \u62a5\u544a tablet \u6570\u91cf\u7684\u65f6\u95f4\uff0c\u4ee5 JSON \u683c\u5f0f\u663e\u793a \u3002"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"DataTotalCapacity"}),(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.code,{children:"DataUsedCapacity"})," + ",(0,r.jsx)(s.code,{children:"AvailCapacity"}),"\uff0c\u5373\u6570\u636e\u6587\u4ef6\u6240\u5360\u7528\u7684\u78c1\u76d8\u7a7a\u95f4 + \u53ef\u4f7f\u7528\u7684\u78c1\u76d8\u7a7a\u95f4\u3002"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"DataUsedPct"}),(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.code,{children:"DataUsedCapacity"}),"/",(0,r.jsx)(s.code,{children:"DataTotalCapacity"}),"\uff0c\u5373\u6570\u636e\u6587\u4ef6\u6240\u5360\u7528\u7684\u78c1\u76d8\u7a7a\u95f4/\uff08\u6570\u636e\u6587\u4ef6\u6240\u5360\u7528\u7684\u78c1\u76d8\u7a7a\u95f4 + \u53ef\u4f7f\u7528\u7684\u78c1\u76d8\u7a7a\u95f4\uff09\u3002"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"CpuCores"}),(0,r.jsx)(s.td,{children:"BE \u673a\u5668\u7684 CPU \u6838\u6570\u3002"})]})]})]}),"\n",(0,r.jsx)(s.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,r.jsx)(s.p,{children:"\u67e5\u770b\u5f53\u524d\u96c6\u7fa4\u4e2d\u7684\u6240\u6709 BE \u8282\u70b9\u7684\u76f8\u5173\u4fe1\u606f\u3002"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-Plain",children:'SHOW BACKENDS;\n\n+-----------+---------+---------------+--------+----------+----------+---------------------+---------------------+-------+----------------------+-----------------------+-----------+------------------+---------------+---------------+---------+----------------+--------+----------------------+--------------------------------------------------------+-------------------+-------------+----------+\n| BackendId | IP      | HeartbeatPort | BePort | HttpPort | BrpcPort | LastStartTime       | LastHeartbeat       | Alive | SystemDecommissioned | ClusterDecommissioned | TabletNum | DataUsedCapacity | AvailCapacity | TotalCapacity | UsedPct | MaxDiskUsedPct | ErrMsg | Version              | Status                                                 | DataTotalCapacity | DataUsedPct | CpuCores |\n+-----------+---------+---------------+--------+----------+----------+---------------------+---------------------+-------+----------------------+-----------------------+-----------+------------------+---------------+---------------+---------+----------------+--------+----------------------+--------------------------------------------------------+-------------------+-------------+----------+\n| 10002     | x.x.x.x | 9254          | 9260   | 8238     | 8260     | 2022-09-08 14:37:10 | 2022-09-08 15:14:21 | true  | false                | false                 | 21753     | 25.122 GB        | 1.088 TB      | 1.968 TB      | 44.72 % | 44.72 %        |        | MAIN-RELEASE-d094052 | {"lastSuccessReportTabletsTime":"2022-09-08 15:14:13"} | 1.113 TB          | 2.20 %      | 16       |\n| 10003     | x.x.x.x | 9254          | 9260   | 8238     | 8260     | 2022-09-08 14:37:20 | 2022-09-08 15:14:21 | true  | false                | false                 | 21754     | 25.121 GB        | 1.169 TB      | 1.968 TB      | 40.61 % | 40.61 %        |        | MAIN-RELEASE-d094052 | {"lastSuccessReportTabletsTime":"2022-09-08 15:14:22"} | 1.194 TB          | 2.06 %      | 16       |\n| 10004     | x.x.x.x | 9254          | 9260   | 8238     | 8260     | 2022-09-08 14:37:39 | 2022-09-08 15:14:21 | true  | false                | false                 | 21754     | 25.112 GB        | 1.172 TB      | 1.968 TB      | 40.46 % | 40.46 %        |        | MAIN-RELEASE-d094052 | {"lastSuccessReportTabletsTime":"2022-09-08 15:13:42"} | 1.197 TB          | 2.05 %      | 16       |\n+-----------+---------+---------------+--------+----------+----------+---------------------+---------------------+-------+----------------------+-----------------------+-----------+------------------+---------------+---------------+---------+----------------+--------+----------------------+--------------------------------------------------------+-------------------+-------------+----------+\n'})})]})}const o=function(e={}){const{wrapper:s}=Object.assign({},(0,n.ah)(),e.components);return s?(0,r.jsx)(s,Object.assign({},e,{children:(0,r.jsx)(h,e)})):h(e)}},11151:(e,s,t)=>{t.d(s,{Zo:()=>c,ah:()=>d});var r=t(67294);const n=r.createContext({});function d(e){const s=r.useContext(n);return r.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const i={};function c({components:e,children:s,disableParentContext:t}){let c;return c=t?"function"==typeof e?e({}):e||i:d(e),r.createElement(n.Provider,{value:c},s)}}}]);