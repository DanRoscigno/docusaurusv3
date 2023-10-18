"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[99656],{69321:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>a});var t=n(85893),i=n(11151);const r={displayed_sidebar:"Chinese"},d="SHOW PARTITIONS",c={id:"sql-reference/sql-statements/data-manipulation/SHOW_PARTITIONS",title:"SHOW PARTITIONS",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.5/sql-reference/sql-statements/data-manipulation/SHOW_PARTITIONS.md",sourceDirName:"sql-reference/sql-statements/data-manipulation",slug:"/sql-reference/sql-statements/data-manipulation/SHOW_PARTITIONS",permalink:"/doc/zh/docs/2.5/sql-reference/sql-statements/data-manipulation/SHOW_PARTITIONS",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-statements/data-manipulation/SHOW_PARTITIONS.md",tags:[],version:"2.5",frontMatter:{displayed_sidebar:"Chinese"},sidebar:"Chinese",previous:{title:"SHOW MATERIALIZED VIEW",permalink:"/doc/zh/docs/2.5/sql-reference/sql-statements/data-manipulation/SHOW_MATERIALIZED_VIEW"},next:{title:"SHOW REPOSITORIES",permalink:"/doc/zh/docs/2.5/sql-reference/sql-statements/data-manipulation/SHOW_REPOSITORIES"}},l={},a=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u8fd4\u56de\u7ed3\u679c\u8bf4\u660e",id:"\u8fd4\u56de\u7ed3\u679c\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function o(e){const s=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",blockquote:"blockquote",ul:"ul",li:"li",table:"table",thead:"thead",tr:"tr",th:"th",strong:"strong",tbody:"tbody",td:"td",div:"div",ol:"ol"},(0,i.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"show-partitions",children:"SHOW PARTITIONS"}),"\n",(0,t.jsx)(s.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,t.jsx)(s.p,{children:"\u8be5\u8bed\u53e5\u7528\u4e8e\u5c55\u793a\u6b63\u5e38\u5206\u533a\u6216\u4e34\u65f6\u5206\u533a\u4fe1\u606f\u3002"}),"\n",(0,t.jsx)(s.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sql",children:"SHOW [TEMPORARY] PARTITIONS FROM [db_name.]table_name [WHERE] [ORDER BY] [LIMIT]\n"})}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsx)(s.p,{children:"\u8bf4\u660e"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"\u652f\u6301 PartitionId\uff0cPartitionName\uff0cState\uff0cBuckets\uff0cReplicationNum\uff0cLastConsistencyCheckTime \u7b49\u5217\u7684\u8fc7\u6ee4\u3002"}),"\n",(0,t.jsxs)(s.li,{children:["\u8be5\u8bed\u6cd5\u53ea\u652f\u6301 StarRocks \u8868 (\u5373\u5efa\u8868\u65f6 ",(0,t.jsx)(s.code,{children:'"ENGINE" = "OLAP"'}),")\u3002"]}),"\n",(0,t.jsx)(s.li,{children:"\u8be5\u64cd\u4f5c\u9700\u8981\u5bf9\u5e94\u6570\u636e\u5e93\u548c\u8868\u7684 SELECT_PRIV \u6743\u9650\u3002"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"\u8fd4\u56de\u7ed3\u679c\u8bf4\u660e",children:"\u8fd4\u56de\u7ed3\u679c\u8bf4\u660e"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-SQL",children:"+-------------+---------------+----------------+---------------------+--------------------+--------+--------------+-------+--------------------+---------+----------------+---------------+---------------------+--------------------------+----------+------------+----------+\n| PartitionId | PartitionName | VisibleVersion | VisibleVersionTime  | VisibleVersionHash | State  | PartitionKey | Range | DistributionKey    | Buckets | ReplicationNum | StorageMedium | CooldownTime        | LastConsistencyCheckTime | DataSize | IsInMemory | RowCount |\n+-------------+---------------+----------------+---------------------+--------------------+--------+--------------+-------+--------------------+---------+----------------+---------------+---------------------+--------------------------+----------+------------+----------+\n"})}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:(0,t.jsx)(s.strong,{children:"\u5b57\u6bb5"})}),(0,t.jsx)(s.th,{children:(0,t.jsx)(s.strong,{children:"\u8bf4\u660e"})})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"PartitionId"}),(0,t.jsx)(s.td,{children:"\u5206\u533a ID\u3002"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"PartitionName"}),(0,t.jsx)(s.td,{children:"\u5206\u533a\u540d\u3002"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"VisibleVersion"}),(0,t.jsx)(s.td,{children:"\u6700\u540e\u4e00\u6b21\u6210\u529f\u5bfc\u5165\u7684\u7248\u672c\u53f7\u3002\u6bcf\u6b21\u6210\u529f\u5bfc\u5165\uff0c\u5219\u7248\u672c\u53f7\u52a0 1\u3002"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"VisibleVersionTime"}),(0,t.jsx)(s.td,{children:"\u6700\u540e\u4e00\u6b21\u6210\u529f\u5bfc\u5165\u7684\u65f6\u95f4\u3002"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"VisibleVersionHash"}),(0,t.jsx)(s.td,{children:"\u6700\u540e\u4e00\u6b21\u6210\u529f\u5bfc\u5165\u7684\u7248\u672c\u53f7\u7684\u54c8\u5e0c\u503c\u3002"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"State"}),(0,t.jsxs)(s.td,{children:["\u5206\u533a\u7684\u72b6\u6001\u3002\u56fa\u5b9a\u4e3a ",(0,t.jsx)(s.code,{children:"Normal"}),"\u3002"]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"PartitionKey"}),(0,t.jsx)(s.td,{children:"\u5206\u533a\u952e\uff0c\u7531\u4e00\u4e2a\u6216\u591a\u4e2a\u5206\u533a\u5217\u7ec4\u6210\u3002"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Range"}),(0,t.jsx)(s.td,{children:"Range \u5206\u533a\u7684\u8303\u56f4\uff0c\u4e3a\u5de6\u95ed\u53f3\u5f00\u533a\u95f4\u3002"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"DistributionKey"}),(0,t.jsx)(s.td,{children:"\u5206\u533a\u4e2d\u6570\u636e\u8fdb\u884c\u54c8\u5e0c\u5206\u6876\u65f6\u7684\u5206\u6876\u952e\u3002"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Buckets"}),(0,t.jsx)(s.td,{children:"\u5206\u533a\u4e2d\u7684\u5206\u6876\u6570\u91cf\u3002"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"ReplicationNum"}),(0,t.jsx)(s.td,{children:"\u5206\u533a\u4e2d\u6bcf\u4e2a Tablet \u7684\u526f\u672c\u6570\u91cf\u3002"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"StorageMedium"}),(0,t.jsxs)(s.td,{children:["\u6570\u636e\u5b58\u50a8\u4ecb\u8d28\u3002\u8fd4\u56de\u503c\u4e3a ",(0,t.jsx)(s.code,{children:"HDD"})," \u8868\u793a\u673a\u68b0\u786c\u76d8\uff0c\u8fd4\u56de\u503c\u4e3a ",(0,t.jsx)(s.code,{children:"SSD"})," \u8868\u793a\u56fa\u6001\u786c\u76d8\u3002"]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"CooldownTime"}),(0,t.jsxs)(s.td,{children:['\u6570\u636e\u964d\u51b7\u65f6\u95f4\u3002\u5982\u679c\u4e00\u5f00\u59cb\u6570\u636e\u7684\u5b58\u50a8\u4ecb\u8d28\u4e3a SSD \uff0c\u5728\u8be5\u65f6\u95f4\u70b9\u4e4b\u540e\uff0c\u6570\u636e\u5b58\u50a8\u4ecb\u8d28\u4f1a\u4ece SSD \u5207\u6362\u4e3a HDD\u3002 \u683c\u5f0f\uff1a"yyyy-MM-dd HH:mm',(0,t.jsx)(s.div,{}),'"\u3002']})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"LastConsistencyCheckTime"}),(0,t.jsxs)(s.td,{children:["\u6700\u540e\u4e00\u6b21\u4e00\u81f4\u6027\u68c0\u67e5\u7684\u65f6\u95f4\u3002",(0,t.jsx)(s.code,{children:"NULL"})," \u8868\u793a\u6ca1\u6709\u8fdb\u884c\u4e00\u81f4\u6027\u68c0\u67e5\u3002"]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"DataSize"}),(0,t.jsx)(s.td,{children:"\u5206\u533a\u4e2d\u6570\u636e\u5927\u5c0f\u3002"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"IsInMemory"}),(0,t.jsx)(s.td,{children:"\u8be5\u5206\u533a\u6570\u636e\u662f\u5426\u5168\u90e8\u5b58\u50a8\u5728\u5185\u5b58\u4e2d\u3002"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"RowCount"}),(0,t.jsx)(s.td,{children:"\u8be5\u5206\u533a\u6570\u636e\u884c\u6570\u3002"})]})]})]}),"\n",(0,t.jsx)(s.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["\u67e5\u8be2\u6307\u5b9a\u6570\u636e\u5e93\uff08\u4f8b\u5982 ",(0,t.jsx)(s.code,{children:"test"}),"\uff09\u4e0b\u6307\u5b9a\u8868\uff08\u4f8b\u5982 ",(0,t.jsx)(s.code,{children:"site_access"}),"\uff09\u7684\u6240\u6709\u6b63\u5f0f\u5206\u533a\u4fe1\u606f\uff1a"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-SQL",children:"MySQL > show partitions from test.site_access\\G\n*************************** 1. row ***************************\n            PartitionId: 20990\n        PartitionName: p2019 \n        VisibleVersion: 1\n    VisibleVersionTime: 2023-08-08 15:45:13\n    VisibleVersionHash: 0\n                State: NORMAL\n            PartitionKey: datekey\n                Range: [types: [DATE]; keys: [2019-01-01]; ..types: [DATE]; keys: [2020-01-01]; )\n        DistributionKey: site_id\n                Buckets: 6\n        ReplicationNum: 3\n        StorageMedium: HDD\n            CooldownTime: 9999-12-31 23:59:59\nLastConsistencyCheckTime: NULL\n                DataSize:  4KB   \n            IsInMemory: false\n                RowCount: 3 \n1 row in set (0.00 sec)\n"})}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["\u67e5\u8be2\u6307\u5b9a\u6570\u636e\u5e93\uff08\u4f8b\u5982 ",(0,t.jsx)(s.code,{children:"test"}),"\uff09\u4e0b\u6307\u5b9a\u8868\uff08\u4f8b\u5982 ",(0,t.jsx)(s.code,{children:"site_access"}),"\uff09\u7684\u6240\u6709\u4e34\u65f6\u5206\u533a\u4fe1\u606f\uff1a"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sql",children:"SHOW TEMPORARY PARTITIONS FROM test.site_access;\n"})}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["\u67e5\u8be2\u6307\u5b9a\u6570\u636e\u5e93\uff08\u4f8b\u5982 ",(0,t.jsx)(s.code,{children:"test"}),"\uff09\u4e0b\u6307\u5b9a\u8868\uff08\u4f8b\u5982 ",(0,t.jsx)(s.code,{children:"site_access"}),"\uff09\u7684\u6307\u5b9a\u5206\u533a\uff08\u4f8b\u5982 ",(0,t.jsx)(s.code,{children:"p1"}),"\uff09\u7684\u4fe1\u606f\u3002"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sql",children:'-- \u6b63\u5e38\u5206\u533a\nSHOW PARTITIONS FROM test.site_access WHERE PartitionName = "p1";\n-- \u4e34\u65f6\u5206\u533a\nSHOW TEMPORARY PARTITIONS FROM test.site_access WHERE PartitionName = "p1";\n'})}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["\u67e5\u8be2\u6307\u5b9a\u6570\u636e\u5e93\uff08\u4f8b\u5982 ",(0,t.jsx)(s.code,{children:"test"}),"\uff09\u4e0b\u6307\u5b9a\u8868\uff08\u4f8b\u5982 ",(0,t.jsx)(s.code,{children:"site_access"}),"\uff09\u7684\u6700\u65b0\u5206\u533a\u7684\u4fe1\u606f\u3002"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sql",children:"-- \u6b63\u5e38\u5206\u533a\nSHOW PARTITIONS FROM test.site_access ORDER BY PartitionId DESC LIMIT 1;\n-- \u4e34\u65f6\u5206\u533a\nSHOW TEMPORARY PARTITIONS FROM test.site_access ORDER BY PartitionId DESC LIMIT 1;\n"})}),"\n"]}),"\n"]})]})}const h=function(e={}){const{wrapper:s}=Object.assign({},(0,i.ah)(),e.components);return s?(0,t.jsx)(s,Object.assign({},e,{children:(0,t.jsx)(o,e)})):o(e)}},11151:(e,s,n)=>{n.d(s,{Zo:()=>c,ah:()=>r});var t=n(67294);const i=t.createContext({});function r(e){const s=t.useContext(i);return t.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const d={};function c({components:e,children:s,disableParentContext:n}){let c;return c=n?"function"==typeof e?e({}):e||d:r(e),t.createElement(i.Provider,{value:c},s)}}}]);