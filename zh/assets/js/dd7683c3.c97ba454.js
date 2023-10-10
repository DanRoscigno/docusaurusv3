"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[57235],{91863:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>r,contentTitle:()=>t,default:()=>j,frontMatter:()=>l,metadata:()=>c,toc:()=>h});var d=s(85893),i=s(11151);const l={},t="\u805a\u5408\u6a21\u578b",c={id:"table_design/table_types/aggregate_table",title:"\u805a\u5408\u6a21\u578b",description:"\u5efa\u8868\u65f6\uff0c\u652f\u6301\u5b9a\u4e49\u6392\u5e8f\u952e\u548c\u6307\u6807\u5217\uff0c\u5e76\u4e3a\u6307\u6807\u5217\u6307\u5b9a\u805a\u5408\u51fd\u6570\u3002\u5f53\u591a\u6761\u6570\u636e\u5177\u6709\u76f8\u540c\u7684\u6392\u5e8f\u952e\u65f6\uff0c\u6307\u6807\u5217\u4f1a\u8fdb\u884c\u805a\u5408\u3002\u5728\u5206\u6790\u7edf\u8ba1\u548c\u6c47\u603b\u6570\u636e\u65f6\uff0c\u805a\u5408\u6a21\u578b\u80fd\u591f\u51cf\u5c11\u67e5\u8be2\u65f6\u6240\u9700\u8981\u5904\u7406\u7684\u6570\u636e\uff0c\u63d0\u5347\u67e5\u8be2\u6548\u7387\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.0/table_design/table_types/aggregate_table.md",sourceDirName:"table_design/table_types",slug:"/table_design/table_types/aggregate_table",permalink:"/doc/zh/docs/3.0/table_design/table_types/aggregate_table",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/table_design/table_types/aggregate_table.md",tags:[],version:"3.0",frontMatter:{},sidebar:"documentation",previous:{title:"\u6570\u636e\u6a21\u578b",permalink:"/doc/zh/docs/3.0/table_design/table_types/"},next:{title:"\u660e\u7ec6\u6a21\u578b",permalink:"/doc/zh/docs/3.0/table_design/table_types/duplicate_key_table"}},r={},h=[{value:"\u9002\u7528\u573a\u666f",id:"\u9002\u7528\u573a\u666f",level:2},{value:"\u539f\u7406",id:"\u539f\u7406",level:2},{value:"\u521b\u5efa\u8868",id:"\u521b\u5efa\u8868",level:2},{value:"\u4f7f\u7528\u8bf4\u660e",id:"\u4f7f\u7528\u8bf4\u660e",level:2},{value:"\u4e0b\u4e00\u6b65",id:"\u4e0b\u4e00\u6b65",level:2}];function x(e){const n=Object.assign({h1:"h1",p:"p",h2:"h2",ul:"ul",li:"li",ol:"ol",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",code:"code",pre:"pre",blockquote:"blockquote",strong:"strong",a:"a"},(0,i.ah)(),e.components);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.h1,{id:"\u805a\u5408\u6a21\u578b",children:"\u805a\u5408\u6a21\u578b"}),"\n",(0,d.jsx)(n.p,{children:"\u5efa\u8868\u65f6\uff0c\u652f\u6301\u5b9a\u4e49\u6392\u5e8f\u952e\u548c\u6307\u6807\u5217\uff0c\u5e76\u4e3a\u6307\u6807\u5217\u6307\u5b9a\u805a\u5408\u51fd\u6570\u3002\u5f53\u591a\u6761\u6570\u636e\u5177\u6709\u76f8\u540c\u7684\u6392\u5e8f\u952e\u65f6\uff0c\u6307\u6807\u5217\u4f1a\u8fdb\u884c\u805a\u5408\u3002\u5728\u5206\u6790\u7edf\u8ba1\u548c\u6c47\u603b\u6570\u636e\u65f6\uff0c\u805a\u5408\u6a21\u578b\u80fd\u591f\u51cf\u5c11\u67e5\u8be2\u65f6\u6240\u9700\u8981\u5904\u7406\u7684\u6570\u636e\uff0c\u63d0\u5347\u67e5\u8be2\u6548\u7387\u3002"}),"\n",(0,d.jsx)(n.h2,{id:"\u9002\u7528\u573a\u666f",children:"\u9002\u7528\u573a\u666f"}),"\n",(0,d.jsx)(n.p,{children:"\u9002\u7528\u4e8e\u5206\u6790\u7edf\u8ba1\u548c\u6c47\u603b\u6570\u636e\u3002\u6bd4\u5982:"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:"\u901a\u8fc7\u5206\u6790\u7f51\u7ad9\u6216 APP \u7684\u8bbf\u95ee\u6d41\u91cf\uff0c\u7edf\u8ba1\u7528\u6237\u7684\u8bbf\u95ee\u603b\u65f6\u957f\u3001\u8bbf\u95ee\u603b\u6b21\u6570\u3002"}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:"\u5e7f\u544a\u5382\u5546\u4e3a\u5e7f\u544a\u4e3b\u63d0\u4f9b\u7684\u5e7f\u544a\u70b9\u51fb\u603b\u91cf\u3001\u5c55\u793a\u603b\u91cf\u3001\u6d88\u8d39\u7edf\u8ba1\u7b49\u3002"}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:"\u901a\u8fc7\u5206\u6790\u7535\u5546\u7684\u5168\u5e74\u4ea4\u6613\u6570\u636e\uff0c\u83b7\u5f97\u6307\u5b9a\u5b63\u5ea6\u6216\u8005\u6708\u4efd\u4e2d\uff0c\u5404\u7c7b\u6d88\u8d39\u4eba\u7fa4\u7684\u7206\u6b3e\u5546\u54c1\u3002"}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"\u5728\u8fd9\u4e9b\u573a\u666f\u4e2d\uff0c\u6570\u636e\u67e5\u8be2\u548c\u5bfc\u5165\uff0c\u5177\u6709\u4ee5\u4e0b\u7279\u70b9\uff1a"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:"\u591a\u4e3a\u6c47\u603b\u7c7b\u67e5\u8be2\uff0c\u6bd4\u5982 SUM\u3001MAX\u3001MIN\u7b49\u7c7b\u578b\u7684\u67e5\u8be2\u3002"}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:"\u4e0d\u9700\u8981\u67e5\u8be2\u539f\u59cb\u7684\u660e\u7ec6\u6570\u636e\u3002"}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:"\u65e7\u6570\u636e\u66f4\u65b0\u4e0d\u9891\u7e41\uff0c\u53ea\u4f1a\u8ffd\u52a0\u65b0\u7684\u6570\u636e\u3002"}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"\u539f\u7406",children:"\u539f\u7406"}),"\n",(0,d.jsx)(n.p,{children:"\u4ece\u6570\u636e\u5bfc\u5165\u81f3\u6570\u636e\u67e5\u8be2\u9636\u6bb5\uff0c\u805a\u5408\u6a21\u578b\u5185\u90e8\u540c\u4e00\u6392\u5e8f\u952e\u7684\u6570\u636e\u4f1a\u591a\u6b21\u805a\u5408\uff0c\u805a\u5408\u7684\u5177\u4f53\u65f6\u673a\u548c\u673a\u5236\u5982\u4e0b\uff1a"}),"\n",(0,d.jsxs)(n.ol,{children:["\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:"\u6570\u636e\u5bfc\u5165\u9636\u6bb5\uff1a\u6570\u636e\u6309\u6279\u6b21\u5bfc\u5165\u81f3\u805a\u5408\u6a21\u578b\u65f6\uff0c\u6bcf\u4e00\u4e2a\u6279\u6b21\u7684\u6570\u636e\u5f62\u6210\u4e00\u4e2a\u7248\u672c\u3002\u5728\u4e00\u4e2a\u7248\u672c\u4e2d\uff0c\u540c\u4e00\u6392\u5e8f\u952e\u7684\u6570\u636e\u4f1a\u8fdb\u884c\u4e00\u6b21\u805a\u5408\u3002"}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:"\u540e\u53f0\u6587\u4ef6\u5408\u5e76\u9636\u6bb5 (Compaction) \uff1a\u6570\u636e\u5206\u6279\u6b21\u591a\u6b21\u5bfc\u5165\u81f3\u805a\u5408\u6a21\u578b\u4e2d\uff0c\u4f1a\u751f\u6210\u591a\u4e2a\u7248\u672c\u7684\u6587\u4ef6\uff0c\u591a\u4e2a\u7248\u672c\u7684\u6587\u4ef6\u5b9a\u671f\u5408\u5e76\u6210\u4e00\u4e2a\u5927\u7248\u672c\u6587\u4ef6\u65f6\uff0c\u540c\u4e00\u6392\u5e8f\u952e\u7684\u6570\u636e\u4f1a\u8fdb\u884c\u4e00\u6b21\u805a\u5408\u3002"}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:"\u67e5\u8be2\u9636\u6bb5\uff1a\u6240\u6709\u7248\u672c\u4e2d\u540c\u4e00\u6392\u5e8f\u952e\u7684\u6570\u636e\u8fdb\u884c\u805a\u5408\uff0c\u7136\u540e\u8fd4\u56de\u67e5\u8be2\u7ed3\u679c\u3002"}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"\u56e0\u6b64\uff0c\u805a\u5408\u6a21\u578b\u4e2d\u6570\u636e\u591a\u6b21\u805a\u5408\uff0c\u80fd\u591f\u51cf\u5c11\u67e5\u8be2\u65f6\u6240\u9700\u8981\u7684\u5904\u7406\u7684\u6570\u636e\u91cf\uff0c\u8fdb\u800c\u63d0\u5347\u67e5\u8be2\u7684\u6548\u7387\u3002"}),"\n",(0,d.jsx)(n.p,{children:"\u4f8b\u5982\uff0c\u5bfc\u5165\u5982\u4e0b\u6570\u636e\u81f3\u805a\u5408\u6a21\u578b\u4e2d\uff0c\u6392\u5e8f\u952e\u4e3a Date\u3001Country\uff1a"}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Date"}),(0,d.jsx)(n.th,{children:"Country"}),(0,d.jsx)(n.th,{children:"PV"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"2020.05.01"}),(0,d.jsx)(n.td,{children:"CHN"}),(0,d.jsx)(n.td,{children:"1"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"2020.05.01"}),(0,d.jsx)(n.td,{children:"CHN"}),(0,d.jsx)(n.td,{children:"2"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"2020.05.01"}),(0,d.jsx)(n.td,{children:"USA"}),(0,d.jsx)(n.td,{children:"3"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"2020.05.01"}),(0,d.jsx)(n.td,{children:"USA"}),(0,d.jsx)(n.td,{children:"4"})]})]})]}),"\n",(0,d.jsx)(n.p,{children:"\u5728\u805a\u5408\u6a21\u578b\u4e2d\uff0c\u4ee5\u4e0a\u56db\u6761\u6570\u636e\u4f1a\u805a\u5408\u4e3a\u4e24\u6761\u6570\u636e\u3002\u8fd9\u6837\u5728\u540e\u7eed\u67e5\u8be2\u5904\u7406\u7684\u65f6\u5019\uff0c\u5904\u7406\u7684\u6570\u636e\u91cf\u5c31\u4f1a\u663e\u8457\u964d\u4f4e\u3002"}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Date"}),(0,d.jsx)(n.th,{children:"Country"}),(0,d.jsx)(n.th,{children:"PV"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"2020.05.01"}),(0,d.jsx)(n.td,{children:"CHN"}),(0,d.jsx)(n.td,{children:"3"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"2020.05.01"}),(0,d.jsx)(n.td,{children:"USA"}),(0,d.jsx)(n.td,{children:"7"})]})]})]}),"\n",(0,d.jsx)(n.h2,{id:"\u521b\u5efa\u8868",children:"\u521b\u5efa\u8868"}),"\n",(0,d.jsxs)(n.p,{children:["\u4f8b\u5982\u9700\u8981\u5206\u6790\u67d0\u4e00\u6bb5\u65f6\u95f4\u5185\uff0c\u6765\u81ea\u4e0d\u540c\u57ce\u5e02\u7684\u7528\u6237\uff0c\u8bbf\u95ee\u4e0d\u540c\u7f51\u9875\u7684\u603b\u6b21\u6570\u3002\u5219\u53ef\u4ee5\u5c06\u7f51\u9875\u5730\u5740 ",(0,d.jsx)(n.code,{children:"site_id"}),"\u3001\u65e5\u671f ",(0,d.jsx)(n.code,{children:"date"})," \u548c\u57ce\u5e02\u4ee3\u7801 ",(0,d.jsx)(n.code,{children:"city_code"})," \u4f5c\u4e3a\u6392\u5e8f\u952e\uff0c\u5c06\u8bbf\u95ee\u6b21\u6570 ",(0,d.jsx)(n.code,{children:"pv"})," \u4f5c\u4e3a\u6307\u6807\u5217\uff0c\u5e76\u4e3a\u6307\u6807\u5217 ",(0,d.jsx)(n.code,{children:"pv"})," \u6307\u5b9a\u805a\u5408\u51fd\u6570\u4e3a SUM\u3002"]}),"\n",(0,d.jsx)(n.p,{children:"\u5728\u8be5\u4e1a\u52a1\u573a\u666f\u4e0b\uff0c\u5efa\u8868\u8bed\u53e5\u5982\u4e0b\uff1a"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-SQL",children:'CREATE TABLE IF NOT EXISTS example_db.aggregate_tbl (\n    site_id LARGEINT NOT NULL COMMENT "id of site",\n    date DATE NOT NULL COMMENT "time of event",\n    city_code VARCHAR(20) COMMENT "city_code of user",\n    pv BIGINT SUM DEFAULT "0" COMMENT "total page views"\n)\nAGGREGATE KEY(site_id, date, city_code)\nDISTRIBUTED BY HASH(site_id)\nPROPERTIES (\n"replication_num" = "3"\n);\n'})}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"\u6ce8\u610f"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\u5efa\u8868\u65f6\u5fc5\u987b\u4f7f\u7528 ",(0,d.jsx)(n.code,{children:"DISTRIBUTED BY HASH"})," \u5b50\u53e5\u6307\u5b9a\u5206\u6876\u952e\u3002\u5206\u6876\u952e\u7684\u66f4\u591a\u8bf4\u660e\uff0c\u8bf7\u53c2\u89c1",(0,d.jsx)(n.a,{href:"../Data_distribution.md/#%E5%88%86%E6%A1%B6",children:"\u5206\u6876"}),"\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:["\u81ea 2.5.7 \u7248\u672c\u8d77\uff0cStarRocks \u652f\u6301\u5728\u5efa\u8868\u548c\u65b0\u589e\u5206\u533a\u65f6\u81ea\u52a8\u8bbe\u7f6e\u5206\u6876\u6570\u91cf (BUCKETS)\uff0c\u60a8\u65e0\u9700\u624b\u52a8\u8bbe\u7f6e\u5206\u6876\u6570\u91cf\u3002\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u89c1 ",(0,d.jsx)(n.a,{href:"/doc/zh/docs/3.0/table_design/Data_distribution#%E7%A1%AE%E5%AE%9A%E5%88%86%E6%A1%B6%E6%95%B0%E9%87%8F",children:"\u786e\u5b9a\u5206\u6876\u6570\u91cf"}),"\u3002"]}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"\u4f7f\u7528\u8bf4\u660e",children:"\u4f7f\u7528\u8bf4\u660e"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:"\u6392\u5e8f\u952e\u7684\u76f8\u5173\u8bf4\u660e\uff1a"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:["\u5728\u5efa\u8868\u8bed\u53e5\u4e2d\uff0c",(0,d.jsx)(n.strong,{children:"\u6392\u5e8f\u952e\u5fc5\u987b\u5b9a\u4e49\u5728\u5176\u4ed6\u5217\u4e4b\u524d"}),"\u3002"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:["\u6392\u5e8f\u952e\u53ef\u4ee5\u901a\u8fc7 ",(0,d.jsx)(n.code,{children:"AGGREGATE KEY"})," \u663e\u5f0f\u5b9a\u4e49\u3002"]}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\u5982\u679c ",(0,d.jsx)(n.code,{children:"AGGREGATE KEY"})," \u672a\u5305\u542b\u5168\u90e8\u7ef4\u5ea6\u5217\uff08\u9664\u6307\u6807\u5217\u4e4b\u5916\u7684\u5217\uff09\uff0c\u5219\u5efa\u8868\u4f1a\u5931\u8d25\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:["\u5982\u679c\u4e0d\u901a\u8fc7 ",(0,d.jsx)(n.code,{children:"AGGREGATE KEY"})," \u663e\u793a\u5b9a\u4e49\u6392\u5e8f\u952e\uff0c\u5219\u9ed8\u8ba4\u9664\u6307\u6807\u5217\u4e4b\u5916\u7684\u5217\u5747\u4e3a\u6392\u5e8f\u952e\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:"\u6392\u5e8f\u952e\u5fc5\u987b\u6ee1\u8db3\u552f\u4e00\u6027\u7ea6\u675f\uff0c\u5fc5\u987b\u5305\u542b\u5168\u90e8\u7ef4\u5ea6\u5217\uff0c\u5e76\u4e14\u5217\u7684\u503c\u4e0d\u4f1a\u66f4\u65b0\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:"\u6307\u6807\u5217\uff1a\u901a\u8fc7\u5728\u5217\u540d\u540e\u6307\u5b9a\u805a\u5408\u51fd\u6570\uff0c\u5b9a\u4e49\u8be5\u5217\u4e3a\u6307\u6807\u5217\u3002\u4e00\u822c\u4e3a\u9700\u8981\u6c47\u603b\u7edf\u8ba1\u7684\u6570\u636e\u3002"}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:["\u805a\u5408\u51fd\u6570\uff1a\u6307\u6807\u5217\u4f7f\u7528\u7684\u805a\u5408\u51fd\u6570\u3002\u805a\u5408\u6a21\u578b\u652f\u6301\u7684\u805a\u5408\u51fd\u6570\uff0c\u8bf7\u53c2\u89c1 ",(0,d.jsx)(n.a,{href:"/doc/zh/docs/3.0/sql-reference/sql-statements/data-definition/CREATE%20TABLE",children:"CREATE TABLE"}),"\u3002"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:"\u67e5\u8be2\u65f6\uff0c\u6392\u5e8f\u952e\u5728\u591a\u7248\u805a\u5408\u4e4b\u524d\u5c31\u80fd\u8fdb\u884c\u8fc7\u6ee4\uff0c\u800c\u6307\u6807\u5217\u7684\u8fc7\u6ee4\u5728\u591a\u7248\u672c\u805a\u5408\u4e4b\u540e\u3002\u56e0\u6b64\u5efa\u8bae\u5c06\u9891\u7e41\u4f7f\u7528\u7684\u8fc7\u6ee4\u5b57\u6bb5\u4f5c\u4e3a\u6392\u5e8f\u952e\uff0c\u5728\u805a\u5408\u524d\u5c31\u80fd\u8fc7\u6ee4\u6570\u636e\uff0c\u4ece\u800c\u63d0\u5347\u67e5\u8be2\u6027\u80fd\u3002"}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:"\u5efa\u8868\u65f6\uff0c\u4e0d\u652f\u6301\u4e3a\u6307\u6807\u5217\u521b\u5efa BITMAP\u3001Bloom Filter \u7b49\u7d22\u5f15\u3002"}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"\u4e0b\u4e00\u6b65",children:"\u4e0b\u4e00\u6b65"}),"\n",(0,d.jsxs)(n.p,{children:["\u5efa\u8868\u5b8c\u6210\u540e\uff0c\u60a8\u53ef\u4ee5\u521b\u5efa\u591a\u79cd\u5bfc\u5165\u4f5c\u4e1a\uff0c\u5bfc\u5165\u6570\u636e\u81f3\u8868\u4e2d\u3002\u5177\u4f53\u5bfc\u5165\u65b9\u5f0f\uff0c\u8bf7\u53c2\u89c1",(0,d.jsx)(n.a,{href:"/doc/zh/docs/3.0/loading/Loading_intro",children:"\u5bfc\u5165\u6982\u89c8"}),"\u3002"]}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsxs)(n.p,{children:["\u5bfc\u5165\u65f6\uff0c\u4ec5\u652f\u6301\u5168\u5b57\u6bb5\u5bfc\u5165\uff0c\u5373\u5bfc\u5165\u4efb\u52a1\u9700\u8981\u6db5\u76d6\u8868\u7684\u6240\u6709\u5217\uff0c\u4f8b\u5982\u793a\u4f8b\u4e2d\u7684 ",(0,d.jsx)(n.code,{children:"site_id"}),"\u3001",(0,d.jsx)(n.code,{children:"date"}),"\u3001",(0,d.jsx)(n.code,{children:"city_code"})," \u548c ",(0,d.jsx)(n.code,{children:"pv"})," \u56db\u4e2a\u5217\u3002"]}),"\n"]})]})}const j=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,d.jsx)(n,Object.assign({},e,{children:(0,d.jsx)(x,e)})):x(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>c,ah:()=>l});var d=s(67294);const i=d.createContext({});function l(e){const n=d.useContext(i);return d.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const t={};function c({components:e,children:n,disableParentContext:s}){let c;return c=s?"function"==typeof e?e({}):e||t:l(e),d.createElement(i.Provider,{value:c},n)}}}]);