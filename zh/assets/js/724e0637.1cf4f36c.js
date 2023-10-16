"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[14675],{52170:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>d,metadata:()=>l,toc:()=>a});var r=s(85893),t=s(11151);const d={displayed_sidebar:"Chinese"},i="DROP MATERIALIZED VIEW",l={id:"sql-reference/sql-statements/data-definition/DROP_MATERIALIZED_VIEW",title:"DROP MATERIALIZED VIEW",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.1/sql-reference/sql-statements/data-definition/DROP_MATERIALIZED_VIEW.md",sourceDirName:"sql-reference/sql-statements/data-definition",slug:"/sql-reference/sql-statements/data-definition/DROP_MATERIALIZED_VIEW",permalink:"/doc/zh/docs/sql-reference/sql-statements/data-definition/DROP_MATERIALIZED_VIEW",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-statements/data-definition/DROP_MATERIALIZED_VIEW.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"Chinese"},sidebar:"Chinese",previous:{title:"ALTER MATERIALIZED VIEW",permalink:"/doc/zh/docs/sql-reference/sql-statements/data-definition/ALTER_MATERIALIZED_VIEW"},next:{title:"SHOW MATERIALIZED VIEWS",permalink:"/doc/zh/docs/sql-reference/sql-statements/data-manipulation/SHOW_MATERIALIZED_VIEW"}},c={},a=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function o(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",blockquote:"blockquote",strong:"strong",pre:"pre",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",ol:"ol",li:"li",ul:"ul"},(0,t.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"drop-materialized-view",children:"DROP MATERIALIZED VIEW"}),"\n",(0,r.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,r.jsx)(n.p,{children:"\u5220\u9664\u7269\u5316\u89c6\u56fe\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["\u6b64\u547d\u4ee4\u65e0\u6cd5\u7528\u4e8e\u5220\u9664\u6b63\u5728\u521b\u5efa\u4e2d\u7684\u540c\u6b65\u7269\u5316\u89c6\u56fe\u3002\u5982\u8981\u5220\u9664\u521b\u5efa\u4e2d\u7684\u540c\u6b65\u7269\u5316\u89c6\u56fe\uff0c\u8bf7\u53c2\u8003 ",(0,r.jsx)(n.a,{href:"/doc/zh/docs/using_starrocks/Materialized_view-single_table#%E5%88%A0%E9%99%A4%E7%89%A9%E5%8C%96%E8%A7%86%E5%9B%BE",children:"\u540c\u6b65\u7269\u5316\u89c6\u56fe - \u5220\u9664\u7269\u5316\u89c6\u56fe"}),"\u3002"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u6ce8\u610f"})}),"\n",(0,r.jsx)(n.p,{children:"\u53ea\u6709\u62e5\u6709\u5bf9\u5e94\u7269\u5316\u89c6\u56fe DROP \u6743\u9650\u7684\u7528\u6237\u624d\u53ef\u4ee5\u5220\u9664\u7269\u5316\u89c6\u56fe\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:"DROP MATERIALIZED VIEW [IF EXISTS] [database.]mv_name\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u53c2\u6570",children:"\u53c2\u6570"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"\u53c2\u6570"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"\u5fc5\u9009"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"\u8bf4\u660e"})})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"IF EXISTS"}),(0,r.jsx)(n.td,{children:"\u5426"}),(0,r.jsx)(n.td,{children:"\u5982\u679c\u58f0\u660e\u8be5\u53c2\u6570\uff0c\u5220\u9664\u4e0d\u5b58\u5728\u7684\u7269\u5316\u89c6\u56fe\u7cfb\u7edf\u4e0d\u4f1a\u62a5\u9519\u3002\u5982\u679c\u4e0d\u58f0\u660e\u8be5\u53c2\u6570\uff0c\u5220\u9664\u4e0d\u5b58\u5728\u7684\u7269\u5316\u89c6\u56fe\u7cfb\u7edf\u4f1a\u62a5\u9519\u3002"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"mv_name"}),(0,r.jsx)(n.td,{children:"\u662f"}),(0,r.jsx)(n.td,{children:"\u5f85\u5220\u9664\u7684\u7269\u5316\u89c6\u56fe\u7684\u540d\u79f0\u3002"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,r.jsx)(n.p,{children:"\u793a\u4f8b\u4e00\uff1a\u5220\u9664\u5b58\u5728\u7684\u7269\u5316\u89c6\u56fe"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u67e5\u770b\u5f53\u524d\u6570\u636e\u5e93\u4e2d\u5b58\u5728\u7684\u7269\u5316\u89c6\u56fe\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Plain",children:"MySQL > SHOW MATERIALIZED VIEWS\\G\n*************************** 1. row ***************************\n          id: 470740\n        name: order_mv1\ndatabase_name: default_cluster:sr_hub\n        text: SELECT `sr_hub`.`orders`.`dt` AS `dt`, `sr_hub`.`orders`.`order_id` AS `order_id`, `sr_hub`.`orders`.`user_id` AS `user_id`, sum(`sr_hub`.`orders`.`cnt`) AS `total_cnt`, sum(`sr_hub`.`orders`.`revenue`) AS `total_revenue`, count(`sr_hub`.`orders`.`state`) AS `state_count` FROM `sr_hub`.`orders` GROUP BY `sr_hub`.`orders`.`dt`, `sr_hub`.`orders`.`order_id`, `sr_hub`.`orders`.`user_id`\n        rows: 0\n1 rows in set (0.00 sec)\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u5220\u9664\u7269\u5316\u89c6\u56fe ",(0,r.jsx)(n.code,{children:"order_mv1"}),"\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Plain",children:"DROP MATERIALIZED VIEW order_mv1;\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u5220\u9664\u540e\u91cd\u65b0\u67e5\u770b\u5f53\u524d\u6570\u636e\u5e93\u4e2d\u5b58\u5728\u7684\u7269\u5316\u89c6\u56fe\u5c06\u4e0d\u4f1a\u663e\u793a\u8be5\u7269\u5316\u89c6\u56fe\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Plain",children:"MySQL > SHOW MATERIALIZED VIEWS;\nEmpty set (0.01 sec)\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u793a\u4f8b\u4e8c\uff1a\u5220\u9664\u4e0d\u5b58\u5728\u7684\u7269\u5316\u89c6\u56fe"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u5f53\u672a\u58f0\u660e ",(0,r.jsx)(n.code,{children:"IF EXISTS"})," \u53c2\u6570\u65f6\uff0c\u5220\u9664\u4e00\u4e2a\u4e0d\u5c5e\u4e8e\u5f53\u524d\u6570\u636e\u5e93\u7684\u7269\u5316\u89c6\u56fe ",(0,r.jsx)(n.code,{children:"k1_k2"})," \u4f1a\u62a5\u9519\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Plain",children:"MySQL > DROP MATERIALIZED VIEW k1_k2;\nERROR 1064 (HY000): Materialized view k1_k2 is not find\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u5f53\u58f0\u660e ",(0,r.jsx)(n.code,{children:"IF EXISTS"})," \u53c2\u6570\u65f6\uff0c\u5220\u9664\u4e00\u4e2a\u4e0d\u5c5e\u4e8e\u5f53\u524d\u6570\u636e\u5e93\u7684\u7269\u5316\u89c6\u56fe ",(0,r.jsx)(n.code,{children:"k1_k2"})," \u4e0d\u4f1a\u62a5\u9519\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Plain",children:"MySQL > DROP MATERIALIZED VIEW IF EXISTS k1_k2;\nQuery OK, 0 rows affected (0.00 sec)\n"})})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(o,e)})):o(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>l,ah:()=>d});var r=s(67294);const t=r.createContext({});function d(e){const n=r.useContext(t);return r.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const i={};function l({components:e,children:n,disableParentContext:s}){let l;return l=s?"function"==typeof e?e({}):e||i:d(e),r.createElement(t.Provider,{value:l},n)}}}]);