"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[67810],{52689:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>o,frontMatter:()=>l,metadata:()=>r,toc:()=>a});var i=s(85893),d=s(11151);const l={},t="REFRESH EXTERNAL TABLE",r={id:"sql-reference/sql-statements/data-definition/REFRESH EXTERNAL TABLE",title:"REFRESH EXTERNAL TABLE",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.1/sql-reference/sql-statements/data-definition/REFRESH EXTERNAL TABLE.md",sourceDirName:"sql-reference/sql-statements/data-definition",slug:"/sql-reference/sql-statements/data-definition/REFRESH EXTERNAL TABLE",permalink:"/docusaurusv3/zh/docs/sql-reference/sql-statements/data-definition/REFRESH EXTERNAL TABLE",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-statements/data-definition/REFRESH EXTERNAL TABLE.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"RECOVER",permalink:"/docusaurusv3/zh/docs/sql-reference/sql-statements/data-definition/RECOVER"},next:{title:"RESTORE",permalink:"/docusaurusv3/zh/docs/sql-reference/sql-statements/data-definition/RESTORE"}},c={},a=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u57fa\u672c\u6982\u5ff5",id:"\u57fa\u672c\u6982\u5ff5",level:2},{value:"\u8bed\u6cd5\u548c\u53c2\u6570\u8bf4\u660e",id:"\u8bed\u6cd5\u548c\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u5916\u90e8\u8868",id:"\u5916\u90e8\u8868",level:3},{value:"External catalog",id:"external-catalog",level:3}];function h(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",ul:"ul",li:"li",strong:"strong",a:"a",blockquote:"blockquote",pre:"pre",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",h3:"h3"},(0,d.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"refresh-external-table",children:"REFRESH EXTERNAL TABLE"}),"\n",(0,i.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,i.jsx)(n.p,{children:"\u8be5\u8bed\u53e5\u7528\u4e8e\u66f4\u65b0\u7f13\u5b58\u5728 StarRocks \u4e2d\u7684 Apache Hive\u2122 \u548c Apache Hudi \u5143\u6570\u636e\uff0c\u5176\u4e3b\u8981\u6709\u4ee5\u4e0b\u4e24\u4e2a\u4f7f\u7528\u573a\u666f\uff1a"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"\u5916\u90e8\u8868"}),"\uff1a\u4f7f\u7528 Hive \u5916\u90e8\u8868\u548c Hudi \u5916\u90e8\u8868\u67e5\u8be2 Hive \u548c Hudi \u6570\u636e\u65f6\uff0c \u53ef\u4f7f\u7528\u8be5\u8bed\u53e5\u66f4\u65b0\u7f13\u5b58\u7684 Hive \u548c Hudi \u5143\u6570\u636e\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"External catalog"}),"\uff1a\u4f7f\u7528 ",(0,i.jsx)(n.a,{href:"/docusaurusv3/zh/docs/data_source/catalog/hive_catalog",children:"Hive catalog"})," \u548c ",(0,i.jsx)(n.a,{href:"/docusaurusv3/zh/docs/data_source/catalog/hudi_catalog",children:"Hudi catalog"})," \u67e5\u8be2 Hive \u548c Hudi \u6570\u636e\u65f6\uff0c\u53ef\u4f7f\u7528\u8be5\u8bed\u53e5\u66f4\u65b0\u7f13\u5b58\u7684 Hive \u548c Hudi \u5143\u6570\u636e\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"\u6ce8\u610f"})}),"\n",(0,i.jsx)(n.p,{children:"\u53ea\u6709\u62e5\u6709\u5bf9\u5e94\u5916\u8868 ALTER \u6743\u9650\u7684\u7528\u6237\u624d\u53ef\u4ee5\u6267\u884c\u8be5\u64cd\u4f5c\u3002"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u57fa\u672c\u6982\u5ff5",children:"\u57fa\u672c\u6982\u5ff5"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Hive \u5916\u90e8\u8868"}),"\uff1a\u5728 StarRocks \u4e2d\u521b\u5efa\u5e76\u4fdd\u5b58\u7684\u8868\uff0c\u7528\u4e8e\u67e5\u8be2 Hive \u96c6\u7fa4\u4e2d\u7684\u6570\u636e\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Hudi \u5916\u90e8\u8868"}),"\uff1a\u5728 StarRocks \u4e2d\u521b\u5efa\u5e76\u4fdd\u5b58\u7684\u8868\uff0c\u7528\u4e8e\u67e5\u8be2 Hudi \u96c6\u7fa4\u4e2d\u7684\u6570\u636e\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Hive \u8868"}),"\uff1a\u5728 Hive \u4e2d\u521b\u5efa\u5e76\u4fdd\u5b58\u7684\u8868\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Hudi \u8868"}),"\uff1a\u5728 Hudi \u4e2d\u521b\u5efa\u5e76\u4fdd\u5b58\u7684\u8868\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u8bed\u6cd5\u548c\u53c2\u6570\u8bf4\u660e",children:"\u8bed\u6cd5\u548c\u53c2\u6570\u8bf4\u660e"}),"\n",(0,i.jsx)(n.p,{children:"\u5728\u4e0d\u540c\u7684\u4f7f\u7528\u573a\u666f\u4e0b\uff0c\u5bf9\u5e94\u8bed\u6cd5\u548c\u53c2\u6570\u8bf4\u660e\u5982\u4e0b\uff1a"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u5916\u90e8\u8868"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-SQL",children:"REFRESH EXTERNAL TABLE <table_name>\n[PARTITION ('partition_name', ...)]\n"})}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:(0,i.jsx)(n.strong,{children:"\u53c2\u6570"})}),(0,i.jsx)(n.th,{children:(0,i.jsx)(n.strong,{children:"\u5fc5\u9009"})}),(0,i.jsx)(n.th,{children:(0,i.jsx)(n.strong,{children:"\u8bf4\u660e"})})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"table_name"}),(0,i.jsx)(n.td,{children:"\u662f"}),(0,i.jsx)(n.td,{children:"Hive \u5916\u90e8\u8868\u6216 Hudi \u5916\u90e8\u8868\u540d\u3002"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"partition_name"}),(0,i.jsx)(n.td,{children:"\u5426"}),(0,i.jsx)(n.td,{children:"Hive \u8868\u6216 Hudi \u8868\u4e2d\u7684\u5206\u533a\u540d\u3002\u5982\u6307\u5b9a\uff0c\u5219\u66f4\u65b0\u7f13\u5b58\u7684 Hive \u8868\u6216 Hudi \u8868\u6307\u5b9a\u5206\u533a\u7684\u5143\u6570\u636e\u3002"})]})]})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"External catalog"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-SQL",children:"REFRESH EXTERNAL TABLE [external_catalog.][db_name.]<table_name>\n[PARTITION ('partition_name', ...)]\n"})}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:(0,i.jsx)(n.strong,{children:"\u53c2\u6570"})}),(0,i.jsx)(n.th,{children:(0,i.jsx)(n.strong,{children:"\u5fc5\u9009"})}),(0,i.jsx)(n.th,{children:(0,i.jsx)(n.strong,{children:"\u8bf4\u660e"})})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"external_catalog"}),(0,i.jsx)(n.td,{children:"\u5426"}),(0,i.jsx)(n.td,{children:"Hive catalog \u6216 Hudi catalog \u540d\u79f0\u3002"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"db_name"}),(0,i.jsx)(n.td,{children:"\u5426"}),(0,i.jsx)(n.td,{children:"Hive \u8868\u6216 Hudi \u8868\u6240\u5728\u7684\u6570\u636e\u5e93\u540d\u3002"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"table_name"}),(0,i.jsx)(n.td,{children:"\u662f"}),(0,i.jsx)(n.td,{children:"Hive \u8868\u6216 Hudi \u8868\u540d\u3002"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"partition_name"}),(0,i.jsx)(n.td,{children:"\u5426"}),(0,i.jsx)(n.td,{children:"Hive \u8868\u6216 Hudi \u8868\u4e2d\u7684\u5206\u533a\u540d\u3002\u5982\u6307\u5b9a\uff0c\u5219\u66f4\u65b0\u7f13\u5b58\u7684 Hive \u8868\u6216 Hudi \u8868\u6307\u5b9a\u5206\u533a\u7684\u5143\u6570\u636e\u3002"})]})]})]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u6ce8\u610f\u4e8b\u9879",children:"\u6ce8\u610f\u4e8b\u9879"}),"\n",(0,i.jsx)(n.p,{children:"\u53ea\u6709\u62e5\u6709\u5916\u8868 ALTER \u6743\u9650\u7684\u7528\u6237\u624d\u53ef\u4ee5\u6267\u884c\u8be5\u8bed\u53e5\u66f4\u65b0\u7f13\u5b58\u7684\u5143\u6570\u636e\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,i.jsx)(n.p,{children:"\u5728\u4e0d\u540c\u4f7f\u7528\u573a\u666f\u4e0b\uff0c \u5bf9\u5e94\u7684\u793a\u4f8b\u5982\u4e0b\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"\u5916\u90e8\u8868",children:"\u5916\u90e8\u8868"}),"\n",(0,i.jsxs)(n.p,{children:["\u793a\u4f8b\u4e00\uff1a\u66f4\u65b0\u5916\u90e8\u8868 ",(0,i.jsx)(n.code,{children:"hive1"})," \u5bf9\u5e94\u7684 Hive \u8868\u5143\u6570\u636e\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-SQL",children:"REFRESH EXTERNAL TABLE hive1;\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u793a\u4f8b\u4e8c\uff1a\u66f4\u65b0\u5916\u90e8\u8868 ",(0,i.jsx)(n.code,{children:"hudi1"})," \u5bf9\u5e94\u7684 Hudi \u8868 ",(0,i.jsx)(n.code,{children:"p1"})," \u548c ",(0,i.jsx)(n.code,{children:"p2"})," \u5206\u533a\u5143\u6570\u636e\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-SQL",children:"REFRESH EXTERNAL TABLE hudi1\nPARTITION ('p1', 'p2');\n"})}),"\n",(0,i.jsx)(n.h3,{id:"external-catalog",children:"External catalog"}),"\n",(0,i.jsxs)(n.p,{children:["\u793a\u4f8b\u4e00\uff1a\u66f4\u65b0\u7f13\u5b58\u7684 Hive \u8868 ",(0,i.jsx)(n.code,{children:"hive_table"})," \u7684\u5143\u6570\u636e\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-SQL",children:"REFRESH EXTERNAL TABLE hive_catalog.hive_db.hive_table;\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u6216"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-SQL",children:"USE hive_catalog.hive_db;\nREFRESH EXTERNAL TABLE hive_table;\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u793a\u4f8b\u4e8c\uff1a\u66f4\u65b0\u7f13\u5b58\u7684 Hudi \u8868 ",(0,i.jsx)(n.code,{children:"hudi_table"})," \u5206\u533a ",(0,i.jsx)(n.code,{children:"p1"})," \u548c ",(0,i.jsx)(n.code,{children:"p2"})," \u7684\u5143\u6570\u636e\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-SQL",children:"REFRESH EXTERNAL TABLE hudi_catalog.hudi_db.hudi_table\nPARTITION ('p1', 'p2');\n"})})]})}const o=function(e={}){const{wrapper:n}=Object.assign({},(0,d.ah)(),e.components);return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(h,e)})):h(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>r,ah:()=>l});var i=s(67294);const d=i.createContext({});function l(e){const n=i.useContext(d);return i.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const t={};function r({components:e,children:n,disableParentContext:s}){let r;return r=s?"function"==typeof e?e({}):e||t:l(e),i.createElement(d.Provider,{value:r},n)}}}]);