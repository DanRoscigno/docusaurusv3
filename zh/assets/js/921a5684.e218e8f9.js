"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[36521],{39483:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>c,contentTitle:()=>d,default:()=>x,frontMatter:()=>i,metadata:()=>l,toc:()=>h});var n=r(85893),t=r(11151);const i={},d="SHOW RESOURCE GROUP",l={id:"sql-reference/sql-statements/Administration/SHOW_RESOURCE_GROUP",title:"SHOW RESOURCE GROUP",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.5/sql-reference/sql-statements/Administration/SHOW_RESOURCE_GROUP.md",sourceDirName:"sql-reference/sql-statements/Administration",slug:"/sql-reference/sql-statements/Administration/SHOW_RESOURCE_GROUP",permalink:"/doc/zh/docs/2.5/sql-reference/sql-statements/Administration/SHOW_RESOURCE_GROUP",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-2.5/sql-reference/sql-statements/Administration/SHOW_RESOURCE_GROUP.md",tags:[],version:"2.5",frontMatter:{},sidebar:"Chinese31",previous:{title:"SHOW PROCESSLIST",permalink:"/doc/zh/docs/2.5/sql-reference/sql-statements/Administration/SHOW_PROCESSLIST"},next:{title:"SHOW SQLBLACKLIST",permalink:"/doc/zh/docs/2.5/sql-reference/sql-statements/Administration/SHOW_SQLBLACKLIST"}},c={},h=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de",id:"\u8fd4\u56de",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function o(e){const s=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",strong:"strong",tbody:"tbody",td:"td"},(0,t.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"show-resource-group",children:"SHOW RESOURCE GROUP"}),"\n",(0,n.jsx)(s.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,n.jsx)(s.p,{children:"\u67e5\u770b\u8d44\u6e90\u7ec4\u4fe1\u606f\u3002"}),"\n",(0,n.jsx)(s.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-SQL",children:"SHOW { RESOURCE GROUPS [ALL] | RESOURCE GROUP resource_group_name }\n"})}),"\n",(0,n.jsx)(s.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:(0,n.jsx)(s.strong,{children:"\u53c2\u6570"})}),(0,n.jsx)(s.th,{children:(0,n.jsx)(s.strong,{children:"\u8bf4\u660e"})})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"RESOURCE GROUPS"}),(0,n.jsx)(s.td,{children:"\u67e5\u770b\u4e0e\u5f53\u524d\u7528\u6237\u5339\u914d\u7684\u8d44\u6e90\u7ec4\u3002"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"ALL"}),(0,n.jsx)(s.td,{children:"\u5982\u679c\u8868\u660e\u6b64\u53c2\u6570\uff0c\u5219\u67e5\u770b\u5f53\u524d\u96c6\u7fa4\u6240\u6709\u8d44\u6e90\u7ec4\u3002"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"RESOURCE GROUP"}),(0,n.jsx)(s.td,{children:"\u67e5\u770b\u6307\u5b9a\u8d44\u6e90\u7ec4\u4fe1\u606f\u3002"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"resource_group_name"}),(0,n.jsx)(s.td,{children:"\u5f85\u67e5\u770b\u8d44\u6e90\u7ec4\u540d\u3002"})]})]})]}),"\n",(0,n.jsx)(s.h2,{id:"\u8fd4\u56de",children:"\u8fd4\u56de"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:(0,n.jsx)(s.strong,{children:"\u8fd4\u56de"})}),(0,n.jsx)(s.th,{children:(0,n.jsx)(s.strong,{children:"\u8bf4\u660e"})})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"name"}),(0,n.jsx)(s.td,{children:"\u8d44\u6e90\u7ec4\u540d\u3002"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"id"}),(0,n.jsx)(s.td,{children:"\u8d44\u6e90\u7ec4 ID\u3002"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"cpu_core_limit"}),(0,n.jsx)(s.td,{children:"\u8d44\u6e90\u7ec4 CPU \u6838\u6570\u4e0a\u9650\u3002"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"mem_limit"}),(0,n.jsx)(s.td,{children:"\u8d44\u6e90\u7ec4\u5185\u5b58\u8d44\u6e90\u4e0a\u9650\u3002"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"big_query_cpu_second_limit"}),(0,n.jsx)(s.td,{children:"\u5927\u67e5\u8be2\u4efb\u52a1\u53ef\u4ee5\u4f7f\u7528 CPU \u7684\u65f6\u95f4\u4e0a\u9650\u3002"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"big_query_scan_rows_limit"}),(0,n.jsx)(s.td,{children:"\u5927\u67e5\u8be2\u4efb\u52a1\u53ef\u4ee5\u626b\u63cf\u7684\u884c\u6570\u4e0a\u9650\u3002"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"big_query_mem_limit"}),(0,n.jsx)(s.td,{children:"\u5927\u67e5\u8be2\u4efb\u52a1\u53ef\u4ee5\u4f7f\u7528\u7684\u5185\u5b58\u4e0a\u9650\u3002"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"concurrency_limit"}),(0,n.jsx)(s.td,{children:"\u8d44\u6e90\u7ec4\u4e2d\u5e76\u53d1\u67e5\u8be2\u6570\u7684\u4e0a\u9650\u3002"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"type"}),(0,n.jsx)(s.td,{children:"\u8d44\u6e90\u7ec4\u7c7b\u578b\u3002"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"classifiers"}),(0,n.jsxs)(s.td,{children:["\u8d44\u6e90\u7ec4\u5173\u8054\u7684\u5206\u7c7b\u5668\u4fe1\u606f\u3002\u5176\u4e2d\uff0c",(0,n.jsx)(s.code,{children:"id"})," \u4e3a\u5206\u7c7b\u5668 ID\uff0c",(0,n.jsx)(s.code,{children:"weight"})," \u4e3a\u5206\u7c7b\u5668\u5339\u914d\u5ea6\u3002"]})]})]})]}),"\n",(0,n.jsx)(s.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,n.jsx)(s.p,{children:"\u793a\u4f8b\u4e00\uff1a\u67e5\u770b\u5f53\u524d\u96c6\u7fa4\u5185\u6240\u6709\u8d44\u6e90\u7ec4\u7684\u4fe1\u606f\u3002"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-Plain",children:"mysql> SHOW RESOURCE GROUPS ALL;\n+-------+--------+----------------+-----------+----------------------------+---------------------------+---------------------+-------------------+--------+------------------------------------------------------------------------------------------------------------------+\n| name  | id     | cpu_core_limit | mem_limit | big_query_cpu_second_limit | big_query_scan_rows_limit | big_query_mem_limit | concurrency_limit | type   | classifiers                                                                                                      |\n+-------+--------+----------------+-----------+----------------------------+---------------------------+---------------------+-------------------+--------+------------------------------------------------------------------------------------------------------------------+\n| rg1   | 625126 | 10             | 20.0%     | 100                        | 100000                    | 1073741824          | null              | NORMAL | (id=625127, weight=4.459375, user=rg1_user1, role=rg1_role1, query_type in (SELECT), source_ip=172.26.xxx.xx/24) |\n| rg1   | 625126 | 10             | 20.0%     | 100                        | 100000                    | 1073741824          | null              | NORMAL | (id=625128, weight=3.459375, user=rg1_user2, query_type in (SELECT), source_ip=172.26.xxx.xx/24)                 |\n| rg1   | 625126 | 10             | 20.0%     | 100                        | 100000                    | 1073741824          | null              | NORMAL | (id=625129, weight=2.359375, user=rg1_user3, source_ip=172.26.xxx.xx/24)                                         |\n| rg1   | 625126 | 10             | 20.0%     | 100                        | 100000                    | 1073741824          | null              | NORMAL | (id=625130, weight=1.0, user=rg1_user4)                                                                          |\n| rg1   | 625126 | 10             | 20.0%     | 100                        | 100000                    | 1073741824          | null              | NORMAL | (id=625131, weight=10.0, db='db1')                                                                                |\n+-------+--------+----------------+-----------+----------------------------+---------------------------+---------------------+-------------------+--------+------------------------------------------------------------------------------------------------------------------+\n"})})]})}const x=function(e={}){const{wrapper:s}=Object.assign({},(0,t.ah)(),e.components);return s?(0,n.jsx)(s,Object.assign({},e,{children:(0,n.jsx)(o,e)})):o(e)}},11151:(e,s,r)=>{r.d(s,{Zo:()=>l,ah:()=>i});var n=r(67294);const t=n.createContext({});function i(e){const s=n.useContext(t);return n.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const d={};function l({components:e,children:s,disableParentContext:r}){let l;return l=r?"function"==typeof e?e({}):e||d:i(e),n.createElement(t.Provider,{value:l},s)}}}]);