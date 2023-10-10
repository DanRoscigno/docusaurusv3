"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[38073],{74982:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>t,metadata:()=>c,toc:()=>a});var s=i(85893),d=i(11151);const t={},r="List \u5206\u533a",c={id:"table_design/list_partitioning",title:"List \u5206\u533a",description:"\u81ea v3.1 \u8d77\uff0cStarRocks \u652f\u6301 List \u5206\u533a\uff0c\u6570\u636e\u6309\u7167\u60a8\u663e\u5f0f\u5b9a\u4e49\u7684\u679a\u4e3e\u503c\u5217\u8868\u8fdb\u884c\u5206\u533a\uff0c\u9002\u7528\u4e8e\u6309\u679a\u4e3e\u503c\u6765\u67e5\u8be2\u548c\u7ba1\u7406\u6570\u636e\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.1/table_design/list_partitioning.md",sourceDirName:"table_design",slug:"/table_design/list_partitioning",permalink:"/docusaurusv3/zh/docs/table_design/list_partitioning",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/table_design/list_partitioning.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"\u8868\u8fbe\u5f0f\u5206\u533a\uff08\u63a8\u8350\uff09",permalink:"/docusaurusv3/zh/docs/table_design/expression_partitioning"},next:{title:"\u52a8\u6001\u5206\u533a",permalink:"/docusaurusv3/zh/docs/table_design/dynamic_partitioning"}},l={},a=[{value:"\u529f\u80fd\u4ecb\u7ecd",id:"\u529f\u80fd\u4ecb\u7ecd",level:2},{value:"\u4f7f\u7528\u65b9\u5f0f",id:"\u4f7f\u7528\u65b9\u5f0f",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:3},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u4f7f\u7528\u9650\u5236",id:"\u4f7f\u7528\u9650\u5236",level:2}];function o(n){const e=Object.assign({h1:"h1",p:"p",h2:"h2",img:"img",strong:"strong",code:"code",a:"a",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",h3:"h3",pre:"pre",ul:"ul",li:"li"},(0,d.ah)(),n.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"list-\u5206\u533a",children:"List \u5206\u533a"}),"\n",(0,s.jsx)(e.p,{children:"\u81ea v3.1 \u8d77\uff0cStarRocks \u652f\u6301 List \u5206\u533a\uff0c\u6570\u636e\u6309\u7167\u60a8\u663e\u5f0f\u5b9a\u4e49\u7684\u679a\u4e3e\u503c\u5217\u8868\u8fdb\u884c\u5206\u533a\uff0c\u9002\u7528\u4e8e\u6309\u679a\u4e3e\u503c\u6765\u67e5\u8be2\u548c\u7ba1\u7406\u6570\u636e\u3002"}),"\n",(0,s.jsx)(e.h2,{id:"\u529f\u80fd\u4ecb\u7ecd",children:"\u529f\u80fd\u4ecb\u7ecd"}),"\n",(0,s.jsx)(e.p,{children:"\u60a8\u9700\u8981\u663e\u5f0f\u5217\u51fa\u6bcf\u4e2a List \u5206\u533a\u6240\u5305\u542b\u7684\u679a\u4e3e\u503c\u5217\u8868\uff0c\u5e76\u4e14\u503c\u4e0d\u9700\u8981\u8fde\u7eed\uff0c\u533a\u522b\u4e8e\u5305\u542b\u8fde\u7eed\u65e5\u671f\u6216\u8005\u6570\u503c\u8303\u56f4\u7684 Range \u5206\u533a\u3002\u5f53\u65b0\u6570\u636e\u5bfc\u5165\u8868\u4e2d\u65f6\uff0cStarRocks \u4f1a\u6839\u636e\u6570\u636e\u7684\u5206\u533a\u5217\u503c\u4e0e\u5206\u533a\u7684\u6620\u5c04\u5173\u7cfb\u5c06\u6570\u636e\u5206\u914d\u5230\u76f8\u5e94\u7684\u5206\u533a\u4e2d\u3002"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{alt:"list_partitioning",src:i(62745).Z+"",width:"463",height:"440"})}),"\n",(0,s.jsx)(e.p,{children:"List \u5206\u533a\u9002\u7528\u4e8e\u5b58\u50a8\u5177\u6709\u5c11\u91cf\u679a\u4e3e\u503c\u5217\u7684\u6570\u636e\u3001\u5e76\u4e14\u7ecf\u5e38\u6309\u5217\u7684\u679a\u4e3e\u503c\u6765\u67e5\u8be2\u548c\u7ba1\u7406\u6570\u636e\u7684\u573a\u666f\u3002\u4f8b\u5982\u8868\u793a\u5730\u7406\u4f4d\u7f6e\u3001\u72b6\u6001\u3001\u7c7b\u522b\u7684\u5217\u3002\u5217\u7684\u6bcf\u4e2a\u503c\u90fd\u4ee3\u8868\u4e00\u79cd\u72ec\u7acb\u7684\u7c7b\u522b\u3002\u6309\u7167\u5217\u7684\u679a\u4e3e\u503c\u5bf9\u6570\u636e\u8fdb\u884c\u5206\u533a\uff0c\u53ef\u4ee5\u63d0\u9ad8\u67e5\u8be2\u6027\u80fd\u548c\u65b9\u4fbf\u6570\u636e\u7ba1\u7406\u3002"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"\u5c24\u5176\u9002\u7528\u4e8e\u4e00\u4e2a\u5206\u533a\u4e2d\u9700\u8981\u5305\u542b\u5404\u5206\u533a\u5217\u7684\u591a\u4e2a\u503c\u7684\u573a\u666f"}),"\u3002\u4f8b\u5982\u8868\u4e2d\u5b58\u5728 ",(0,s.jsx)(e.code,{children:"City"})," \u5217\u8868\u793a\u4e2a\u4f53\u6240\u5c5e\u7684\u57ce\u5e02\uff0c\u5e76\u4e14\u60a8\u7ecf\u5e38\u6309\u7167\u5dde\u548c\u57ce\u5e02\u67e5\u8be2\u548c\u7ba1\u7406\u6570\u636e\uff0c\u5219\u5efa\u8868\u65f6\u53ef\u4ee5\u4f7f\u7528 ",(0,s.jsx)(e.code,{children:"City"})," \u5217\u4f5c\u4e3a\u5206\u533a\u5217\u8fdb\u884c List \u5206\u533a\uff0c\u6307\u5b9a\u540c\u5c5e\u4e00\u4e2a\u5dde\u7684\u591a\u4e2a\u57ce\u5e02\u7684\u6570\u636e\u5206\u5728\u540c\u4e00\u5206\u533a ",(0,s.jsx)(e.code,{children:'PARTITION pCalifornia VALUES IN ("Los Angeles","San Francisco","San Diego")'}),"\uff0c\u53ef\u4ee5\u52a0\u901f\u67e5\u8be2\u548c\u65b9\u4fbf\u6570\u636e\u7ba1\u7406\u3002"]}),"\n",(0,s.jsxs)(e.p,{children:["\u5982\u679c\u4e00\u4e2a\u5206\u533a\u53ea\u9700\u8981\u5305\u542b\u5404\u5206\u533a\u5217\u7684\u4e00\u4e2a\u503c\uff0c\u5219\u63a8\u8350\u60a8\u4f7f\u7528",(0,s.jsx)(e.a,{href:"/docusaurusv3/zh/docs/table_design/expression_partitioning",children:"\u8868\u8fbe\u5f0f\u5206\u533a"}),"\u3002"]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsxs)(e.strong,{children:["List \u5206\u533a\u548c",(0,s.jsx)(e.a,{href:"/docusaurusv3/zh/docs/table_design/expression_partitioning",children:"\u8868\u8fbe\u5f0f\u5206\u533a"}),"\u7684\u533a\u522b"]})}),"\n",(0,s.jsx)(e.p,{children:"\u4e24\u8005\u4e3b\u8981\u533a\u522b\u5728\u4e8e List \u5206\u533a\u9700\u8981\u60a8\u624b\u52a8\u4e00\u4e2a\u4e00\u4e2a\u521b\u5efa\u5206\u533a\u3002\u800c\u8868\u8fbe\u5f0f\u5206\u533a\uff08\u63a8\u8350\uff09\u53ef\u4ee5\u5b9e\u73b0\u5bfc\u5165\u65f6\u81ea\u52a8\u521b\u5efa\u5206\u533a\uff0c\u6765\u7b80\u5316\u5206\u533a\u521b\u5efa\uff0c\u5e76\u4e14\u5927\u90e8\u5206\u60c5\u51b5\u4e0b\u53ef\u4ee5\u66ff\u4ee3 List \u5206\u533a\u3002\u4e24\u8005\u5177\u4f53\u5bf9\u6bd4\u5982\u4e0b\u8868\uff1a"}),"\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"\u5206\u533a\u65b9\u5f0f"}),(0,s.jsx)(e.th,{children:(0,s.jsx)(e.strong,{children:"List \u5206\u533a"})}),(0,s.jsx)(e.th,{children:(0,s.jsx)(e.strong,{children:"\u8868\u8fbe\u5f0f\u5206\u533a"})})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"\u8bed\u6cd5"}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"PARTITION BY LIST (partition_columns)\uff08    PARTITION <partition_name> VALUES IN (value_list)    [, ...] )"})}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"PARTITION BY <partition_columns>"})})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"\u4e00\u4e2a\u5206\u533a\u4e2d\u5305\u542b\u5404\u5206\u533a\u5217\u7684\u591a\u503c"}),(0,s.jsxs)(e.td,{children:["\u652f\u6301\u3002\u4e00\u4e2a\u5206\u533a\u4e2d\u53ef\u4ee5\u5305\u542b\u5404\u5206\u533a\u5217\u7684\u591a\u503c\u3002\u5982\u4e0b\u6240\u793a\uff0c\u5982\u679c\u5bfc\u5165\u6570\u636e\u7684 ",(0,s.jsx)(e.code,{children:"city"})," \u5217\u503c\u4e3a ",(0,s.jsx)(e.code,{children:"Los Angeles"}),"\u3001",(0,s.jsx)(e.code,{children:"San Francisco"})," \u6216 ",(0,s.jsx)(e.code,{children:"San Diego"}),"\uff0c\u5219\u90fd\u88ab\u5212\u5206\u5728\u4e00\u4e2a\u5206\u533a ",(0,s.jsx)(e.code,{children:"pCalifornia"})," \u4e2d\u3002",(0,s.jsx)("br",{}),(0,s.jsx)(e.code,{children:'PARTITION BY LIST (city) (    PARTITION pCalifornia VALUES IN ("Los Angeles","San Francisco","San Diego")    [, ...] )'})]}),(0,s.jsxs)(e.td,{children:["\u4e0d\u652f\u6301\u3002\u4e00\u4e2a\u5206\u533a\u4e2d\u53ea\u5305\u542b\u5728\u5404\u5206\u533a\u5217\u4e0a\u5e94\u7528\u8868\u8fbe\u5f0f\u6765\u8ba1\u7b97\u51fa\u4e00\u4e2a\u503c\u3002\u4f8b\u5982\u4f7f\u7528\u8868\u8fbe\u5f0f\u5206\u533a ",(0,s.jsx)(e.code,{children:"PARTITION BY (city)"})," \uff0c\u5e76\u4e14\u6240\u5bfc\u5165\u591a\u884c\u6570\u636e\u7684 ",(0,s.jsx)(e.code,{children:"city"})," \u5217\u503c\u5305\u542b ",(0,s.jsx)(e.code,{children:"Los Angeles"}),"\u3001",(0,s.jsx)(e.code,{children:"San Francisco"})," \u6216 ",(0,s.jsx)(e.code,{children:"San Diego"}),"\uff0c\u5219\u4f1a\u81ea\u52a8\u521b\u5efa\u4e09\u4e2a\u5206\u533a ",(0,s.jsx)(e.code,{children:"pLosAngeles"})," \u3001",(0,s.jsx)(e.code,{children:"pSanFrancisco"})," \u548c ",(0,s.jsx)(e.code,{children:"pSanDiego"})," \uff0c\u5206\u522b\u5305\u542b ",(0,s.jsx)(e.code,{children:"city"})," \u5217\u503c\u4e3a",(0,s.jsx)(e.code,{children:"Los Angeles"}),"\u3001",(0,s.jsx)(e.code,{children:"San Francisco"})," \u548c ",(0,s.jsx)(e.code,{children:"San Diego"})," \u7684\u6570\u636e\u3002"]})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"\u5bfc\u5165\u6570\u636e\u524d\u9700\u8981\u63d0\u524d\u5efa\u5206\u533a"}),(0,s.jsx)(e.td,{children:"\u5fc5\u987b\uff0c\u5e76\u4e14\u662f\u5728\u5efa\u8868\u65f6\u5c31\u521b\u5efa\u5206\u533a\u3002"}),(0,s.jsx)(e.td,{children:"\u4e0d\u9700\u8981\uff0c\u5bfc\u5165\u6570\u636e\u65f6\u81ea\u52a8\u521b\u5efa\u5206\u533a\u3002"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"\u5bfc\u5165\u6570\u636e\u65f6\u81ea\u52a8\u5efa\u5206\u533a"}),(0,s.jsx)(e.td,{children:"\u4e0d\u652f\u6301\u3002\u5bfc\u5165\u6570\u636e\u65f6\uff0c\u5982\u679c\u8868\u4e2d\u4e0d\u5b58\u5728\u6570\u636e\u5bf9\u5e94\u7684\u5206\u533a\uff0cStarRocks \u4e0d\u4f1a\u81ea\u52a8\u521b\u5efa\u5206\u533a\uff0c\u5e76\u4e14\u4f1a\u62a5\u9519\u3002"}),(0,s.jsx)(e.td,{children:"\u652f\u6301\u3002\u5bfc\u5165\u6570\u636e\u65f6\uff0c\u5982\u679c\u8868\u4e2d\u4e0d\u5b58\u5728\u6570\u636e\u5bf9\u5e94\u7684\u5206\u533a\uff0c\u5219 StarRocks \u81ea\u52a8\u521b\u5efa\u5206\u533a\u5e76\u5c06\u5bfc\u5165\u6570\u636e\uff0c\u5e76\u4e14\u4e00\u4e2a\u5206\u533a\u53ea\u5305\u542b\u5404\u5206\u533a\u5217\u7684\u4e00\u4e2a\u503c\u3002"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"SHOW CERATE TABLE"}),(0,s.jsx)(e.td,{children:"\u8fd4\u56de\u5efa\u8868\u8bed\u53e5\u5b9a\u4e49\u7684\u5206\u533a\u3002"}),(0,s.jsxs)(e.td,{children:["\u5bfc\u5165\u6570\u636e\u540e\uff0c\u6267\u884c\u8be5\u547d\u4ee4\uff0c\u8fd4\u56de\u7ed3\u679c\u4f1a\u5305\u542b\u5efa\u8868\u65f6\u5206\u533a\u5b50\u53e5\uff0c\u5373 ",(0,s.jsx)(e.code,{children:"PARTITION BY (partition_columns)"}),"\uff0c\u4f46\u662f\u4e0d\u4f1a\u8fd4\u56de\u81ea\u52a8\u521b\u5efa\u7684\u5206\u533a\u3002\u5982\u679c\u60a8\u9700\u8981\u67e5\u770b\u81ea\u52a8\u521b\u5efa\u7684\u5206\u533a\uff0c\u8bf7\u6267\u884c ",(0,s.jsx)(e.code,{children:"SHOW PARTITIONS FROM table_name;"})," \u3002"]})]})]})]}),"\n",(0,s.jsx)(e.h2,{id:"\u4f7f\u7528\u65b9\u5f0f",children:"\u4f7f\u7528\u65b9\u5f0f"}),"\n",(0,s.jsx)(e.h3,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bnf",children:"PARTITION BY LIST (partition_columns)\uff08\n    PARTITION <partition_name> VALUES IN (value_list)\n    [, ...]\n)\n\npartition_columns::= \n    <column> [,<column> [, ...] ]\n\nvalue_list ::=\n    value_item [, value_item [, ...] ]\n\nvalue_item ::=\n    { <value> | ( <value> [, <value>, [, ...] ] ) }    \n"})}),"\n",(0,s.jsx)(e.h3,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"\u53c2\u6570"}),(0,s.jsx)(e.th,{children:"\u662f\u5426\u5fc5\u586b"}),(0,s.jsx)(e.th,{children:"\u53c2\u6570"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"partition_columns"})}),(0,s.jsx)(e.td,{children:"\u662f"}),(0,s.jsxs)(e.td,{children:["\u5206\u533a\u5217\u3002",(0,s.jsx)("br",{}),"\u5206\u533a\u5217\u7684\u503c\u652f\u6301\u4e3a\u5b57\u7b26\u4e32\uff08\u9664 BINARY\uff09\u3001\u65e5\u671f\uff08DATE \u548c DATETIME\uff09\u3001\u6574\u6570\u548c\u5e03\u5c14\u503c\u3002\u5206\u533a\u5217\u7684\u503c\u4e0d\u652f\u6301\u4e3a ",(0,s.jsx)(e.code,{children:"NULL"}),"\u3002"]})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"partition_name"})}),(0,s.jsx)(e.td,{children:"\u662f"}),(0,s.jsx)(e.td,{children:"\u5206\u533a\u540d\u79f0\u3002\u5efa\u8bae\u60a8\u6309\u7167\u4e1a\u52a1\u573a\u666f\u8bbe\u7f6e\u5408\u7406\u7684\u5206\u533a\u540d\u79f0\uff0c\u4fbf\u4e8e\u533a\u522b\u4e0d\u540c\u5206\u533a\u5305\u542b\u7684\u6570\u636e\u5206\u7c7b\u3002"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"value_list"})}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"\u5206\u533a\u4e2d\u5206\u533a\u5217\u7684\u679a\u4e3e\u503c\u5217\u8868\u3002"})]})]})]}),"\n",(0,s.jsx)(e.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,s.jsxs)(e.p,{children:["\u793a\u4f8b\u4e00\uff1a\u5047\u8bbe\u7ecf\u5e38\u6309\u7167\u5dde\u6216\u57ce\u5e02\u67e5\u8be2\u673a\u623f\u6536\u8d39\u660e\u7ec6\uff0c\u5219\u5efa\u8868\u65f6\u53ef\u4ee5\u6307\u5b9a\u5206\u533a\u5217\u4e3a\u57ce\u5e02 ",(0,s.jsx)(e.code,{children:"city"})," \uff0c\u5e76\u4e14\u6307\u5b9a\u6bcf\u4e2a\u5206\u533a\u6240\u5305\u542b\u57ce\u5e02\u540c\u5c5e\u4e00\u4e2a\u5dde\uff0c\u8fd9\u6837\u53ef\u4ee5\u52a0\u901f\u67e5\u8be2\u7279\u5b9a\u5dde\u6216\u57ce\u5e02\u7684\u6570\u636e\uff0c\u5e76\u4e14\u65b9\u4fbf\u6309\u7167\u7279\u5b9a\u5dde\u6216\u57ce\u5e02\u8fdb\u884c\u6570\u636e\u7ba1\u7406\u3002"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-SQL",children:'CREATE TABLE t_recharge_detail2 (\n    id bigint,\n    user_id bigint,\n    recharge_money decimal(32,2), \n    city varchar(20) not null,\n    dt varchar(20) not null\n)\nDUPLICATE KEY(id)\nPARTITION BY LIST (city) (\n   PARTITION pCalifornia VALUES IN ("Los Angeles","San Francisco","San Diego"), -- \u8fd9\u4e9b\u57ce\u5e02\u540c\u5c5e\u4e00\u4e2a\u5dde\n   PARTITION pTexas VALUES IN ("Houston","Dallas","Austin")\n)\nDISTRIBUTED BY HASH(`id`);\n'})}),"\n",(0,s.jsxs)(e.p,{children:["\u793a\u4f8b\u4e8c\uff1a\u5047\u8bbe\u7ecf\u5e38\u6309\u65e5\u671f\u8303\u56f4\u548c\u7279\u5b9a\u5dde\u6216\u57ce\u5e02\u67e5\u8be2\u673a\u623f\u6536\u8d39\u660e\u7ec6\uff0c\u5219\u5efa\u8868\u65f6\u53ef\u4ee5\u6307\u5b9a\u5206\u533a\u5217\u4e3a\u65e5\u671f ",(0,s.jsx)(e.code,{children:"dt"})," \u548c\u57ce\u5e02 ",(0,s.jsx)(e.code,{children:"city"}),"\u3002\u8fd9\u6837\u5c5e\u4e8e\u7279\u5b9a\u65e5\u671f\u548c\u7279\u5b9a\u5dde\u6216\u57ce\u5e02\u7684\u6570\u636e\u5206\u7ec4\u5230\u540c\u4e00\u4e2a\u5206\u533a\u4e2d\uff0c\u4ee5\u52a0\u901f\u67e5\u8be2\u548c\u65b9\u4fbf\u6570\u636e\u7ba1\u7406\u3002"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-SQL",children:'CREATE TABLE t_recharge_detail4 (\n    id bigint,\n    user_id bigint,\n    recharge_money decimal(32,2), \n    city varchar(20) not null,\n    dt varchar(20) not null\n) ENGINE=OLAP\nDUPLICATE KEY(id)\nPARTITION BY LIST (dt,city) (\n   PARTITION p202204_California VALUES IN (\n       ("2022-04-01", "Los Angeles"),\n       ("2022-04-01", "San Francisco"),\n       ("2022-04-02", "Los Angeles"),\n       ("2022-04-02", "San Francisco")\n    ),\n   PARTITION p202204_Texas VALUES IN (\n       ("2022-04-01", "Houston"),\n       ("2022-04-01", "Dallas"),\n       ("2022-04-02", "Houston"),\n       ("2022-04-02", "Dallas")\n   )\n)\nDISTRIBUTED BY HASH(`id`);\n'})}),"\n",(0,s.jsx)(e.h2,{id:"\u4f7f\u7528\u9650\u5236",children:"\u4f7f\u7528\u9650\u5236"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\u4e0d\u652f\u6301",(0,s.jsx)(e.a,{href:"/docusaurusv3/zh/docs/table_design/dynamic_partitioning",children:"\u52a8\u6001"}),"\u548c",(0,s.jsx)(e.a,{href:"/docusaurusv3/zh/docs/table_design/Data_distribution#range-%E5%88%86%E5%8C%BA",children:"\u6279\u91cf\u521b\u5efa"})," List \u5206\u533a\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:["StarRocks ",(0,s.jsx)(e.a,{href:"../deployment/deploy_shared_data.md",children:"\u5b58\u7b97\u5206\u79bb\u6a21\u5f0f"}),"\u4ece 3.1.1 \u7248\u672c\u5f00\u59cb\u652f\u6301\u8be5\u529f\u80fd\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:["\u4f7f\u7528 ",(0,s.jsx)(e.code,{children:"ALTER TABLE <table_name> DROP PARTITION <partition_name>;"})," \u5206\u533a\u76f4\u63a5\u88ab\u5220\u9664\u5e76\u4e14\u4e0d\u80fd\u88ab\u6062\u590d\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:["List \u5206\u533a\u6682\u65f6\u4e0d\u652f\u6301",(0,s.jsx)(e.a,{href:"/docusaurusv3/zh/docs/administration/Backup_and_restore",children:"\u5907\u4efd\u4e0e\u6062\u590d"}),"\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.a,{href:"/docusaurusv3/zh/docs/using_starrocks/Materialized_view",children:"\u5f02\u6b65\u7269\u5316\u89c6\u56fe"}),"\u6682\u4e0d\u652f\u6301\u57fa\u4e8e\u4f7f\u7528 List \u5206\u533a\u7684\u57fa\u8868\u521b\u5efa\u3002"]}),"\n"]})]})}const h=function(n={}){const{wrapper:e}=Object.assign({},(0,d.ah)(),n.components);return e?(0,s.jsx)(e,Object.assign({},n,{children:(0,s.jsx)(o,n)})):o(n)}},62745:(n,e,i)=>{i.d(e,{Z:()=>s});const s=i.p+"assets/images/list_partitioning-dcc2197297db3ceafda8685498d963be.png"},11151:(n,e,i)=>{i.d(e,{Zo:()=>c,ah:()=>t});var s=i(67294);const d=s.createContext({});function t(n){const e=s.useContext(d);return s.useMemo((()=>"function"==typeof n?n(e):{...e,...n}),[e,n])}const r={};function c({components:n,children:e,disableParentContext:i}){let c;return c=i?"function"==typeof n?n({}):n||r:t(n),s.createElement(d.Provider,{value:c},e)}}}]);