"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[99063],{65817:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>c,metadata:()=>t,toc:()=>a});var s=i(85893),d=i(11151);const c={displayed_sidebar:"Chinese"},r="\u8868\u8fbe\u5f0f\u5206\u533a\uff08\u63a8\u8350\uff09",t={id:"table_design/expression_partitioning",title:"\u8868\u8fbe\u5f0f\u5206\u533a\uff08\u63a8\u8350\uff09",description:"\u81ea v3.0 \u8d77\uff0cStarRocks \u652f\u6301\u8868\u8fbe\u5f0f\u5206\u533a\uff08\u539f\u79f0\u81ea\u52a8\u521b\u5efa\u5206\u533a\uff09\uff0c\u66f4\u52a0\u7075\u6d3b\u6613\u7528\uff0c\u9002\u7528\u4e8e\u5927\u591a\u6570\u573a\u666f\uff0c\u6bd4\u5982\u6309\u7167\u8fde\u7eed\u65e5\u671f\u8303\u56f4\u6216\u8005\u679a\u4e3e\u503c\u6765\u67e5\u8be2\u548c\u7ba1\u7406\u6570\u636e\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.1/table_design/expression_partitioning.md",sourceDirName:"table_design",slug:"/table_design/expression_partitioning",permalink:"/doc/zh/docs/table_design/expression_partitioning",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/table_design/expression_partitioning.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"Chinese"},sidebar:"Chinese",previous:{title:"\u6570\u636e\u5206\u5e03",permalink:"/doc/zh/docs/table_design/Data_distribution"},next:{title:"List \u5206\u533a",permalink:"/doc/zh/docs/table_design/list_partitioning"}},l={},a=[{value:"\u65f6\u95f4\u51fd\u6570\u8868\u8fbe\u5f0f\u5206\u533a",id:"\u65f6\u95f4\u51fd\u6570\u8868\u8fbe\u5f0f\u5206\u533a",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:3},{value:"\u53c2\u6570\u89e3\u91ca",id:"\u53c2\u6570\u89e3\u91ca",level:3},{value:"\u4f7f\u7528\u8bf4\u660e",id:"\u4f7f\u7528\u8bf4\u660e",level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:3},{value:"\u5217\u8868\u8fbe\u5f0f\u5206\u533a\uff08\u81ea v3.1\uff09",id:"\u5217\u8868\u8fbe\u5f0f\u5206\u533a\u81ea-v31",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5-1",level:3},{value:"\u53c2\u6570\u89e3\u91ca",id:"\u53c2\u6570\u89e3\u91ca-1",level:3},{value:"\u4f7f\u7528\u8bf4\u660e",id:"\u4f7f\u7528\u8bf4\u660e-1",level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b-1",level:3},{value:"\u7ba1\u7406\u5206\u533a",id:"\u7ba1\u7406\u5206\u533a",level:2},{value:"\u5bfc\u5165\u6570\u636e\u81f3\u5206\u533a",id:"\u5bfc\u5165\u6570\u636e\u81f3\u5206\u533a",level:3},{value:"\u67e5\u770b\u5206\u533a",id:"\u67e5\u770b\u5206\u533a",level:3},{value:"\u4f7f\u7528\u9650\u5236",id:"\u4f7f\u7528\u9650\u5236",level:2}];function o(e){const n=Object.assign({h1:"h1",p:"p",h2:"h2",a:"a",h3:"h3",pre:"pre",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",strong:"strong",ul:"ul",li:"li",blockquote:"blockquote"},(0,d.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"\u8868\u8fbe\u5f0f\u5206\u533a\u63a8\u8350",children:"\u8868\u8fbe\u5f0f\u5206\u533a\uff08\u63a8\u8350\uff09"}),"\n",(0,s.jsx)(n.p,{children:"\u81ea v3.0 \u8d77\uff0cStarRocks \u652f\u6301\u8868\u8fbe\u5f0f\u5206\u533a\uff08\u539f\u79f0\u81ea\u52a8\u521b\u5efa\u5206\u533a\uff09\uff0c\u66f4\u52a0\u7075\u6d3b\u6613\u7528\uff0c\u9002\u7528\u4e8e\u5927\u591a\u6570\u573a\u666f\uff0c\u6bd4\u5982\u6309\u7167\u8fde\u7eed\u65e5\u671f\u8303\u56f4\u6216\u8005\u679a\u4e3e\u503c\u6765\u67e5\u8be2\u548c\u7ba1\u7406\u6570\u636e\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u60a8\u4ec5\u9700\u8981\u5728\u5efa\u8868\u65f6\u8bbe\u7f6e\u5206\u533a\u8868\u8fbe\u5f0f \uff08\u65f6\u95f4\u51fd\u6570\u8868\u8fbe\u5f0f\u6216\u5217\u8868\u8fbe\u5f0f\uff09\u3002\u5728\u6570\u636e\u5bfc\u5165\u65f6\uff0cStarRocks \u4f1a\u6839\u636e\u6570\u636e\u548c\u5206\u533a\u8868\u8fbe\u5f0f\u7684\u5b9a\u4e49\u89c4\u5219\u81ea\u52a8\u521b\u5efa\u5206\u533a\uff0c\u60a8\u65e0\u9700\u5728\u5efa\u8868\u65f6\u9884\u5148\u624b\u52a8/\u6279\u91cf\u521b\u5efa\u5927\u91cf\u5206\u533a\uff0c\u6216\u8005\u914d\u7f6e\u52a8\u6001\u5206\u533a\u5c5e\u6027\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u65f6\u95f4\u51fd\u6570\u8868\u8fbe\u5f0f\u5206\u533a",children:"\u65f6\u95f4\u51fd\u6570\u8868\u8fbe\u5f0f\u5206\u533a"}),"\n",(0,s.jsx)(n.p,{children:"\u5982\u679c\u60a8\u7ecf\u5e38\u6309\u7167\u8fde\u7eed\u65e5\u671f\u8303\u56f4\u6765\u67e5\u8be2\u548c\u7ba1\u7406\u6570\u636e\uff0c\u5219\u53ea\u9700\u8981\u5728\u65f6\u95f4\u51fd\u6570\u5206\u533a\u8868\u8fbe\u5f0f\u4e2d\uff0c\u6307\u5b9a\u4e00\u4e2a\u65e5\u671f\u7c7b\u578b\uff08DATE \u6216\u8005 DATETIME \uff09\u7684\u5206\u533a\u5217\uff0c\u4ee5\u53ca\u6307\u5b9a\u5206\u533a\u7c92\u5ea6\uff08\u5e74\u3001\u6708\u3001\u65e5\u6216\u5c0f\u65f6\uff09\u3002StarRocks \u4f1a\u6839\u636e\u5bfc\u5165\u7684\u6570\u636e\u548c\u5206\u533a\u8868\u8fbe\u5f0f\uff0c\u81ea\u52a8\u521b\u5efa\u5206\u533a\u5e76\u4e14\u8bbe\u7f6e\u5206\u533a\u7684\u8d77\u6b62\u65f6\u95f4\u3002"}),"\n",(0,s.jsxs)(n.p,{children:["\u4e0d\u8fc7\u5728\u4e00\u4e9b\u7279\u6b8a\u573a\u666f\u4e0b\uff0c\u6bd4\u5982\u5386\u53f2\u6570\u636e\u6309\u6708\u5212\u5206\u5206\u533a\u3001\u6700\u8fd1\u6570\u636e\u6309\u5929\u5212\u5206\u5206\u533a\uff0c\u5219\u9700\u8981\u91c7\u7528 ",(0,s.jsx)(n.a,{href:"/doc/zh/docs/table_design/Data_distribution#range-%E5%88%86%E5%8C%BA",children:"Range \u5206\u533a"}),"\u521b\u5efa\u5206\u533a\u3002"]}),"\n",(0,s.jsx)(n.h3,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"PARTITION BY expression\n...\n[ PROPERTIES( 'partition_live_number' = 'xxx' ) ]\n\nexpression ::=\n    { date_trunc ( <time_unit> , <partition_column> ) |\n      time_slice ( <partition_column> , INTERVAL <N> <time_unit> [ , boundary ] ) }\n"})}),"\n",(0,s.jsx)(n.h3,{id:"\u53c2\u6570\u89e3\u91ca",children:"\u53c2\u6570\u89e3\u91ca"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"\u53c2\u6570"}),(0,s.jsx)(n.th,{children:"\u662f\u5426\u5fc5\u586b"}),(0,s.jsx)(n.th,{children:"\u8bf4\u660e"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"expression"})}),(0,s.jsx)(n.td,{children:"\u662f"}),(0,s.jsxs)(n.td,{children:["\u76ee\u524d\u4ec5\u652f\u6301 ",(0,s.jsx)(n.a,{href:"../sql-reference/sql-functions/date-time-functions/date_trunc",children:"date_trunc"})," \u548c ",(0,s.jsx)(n.a,{href:"../sql-reference/sql-functions/date-time-functions/time_slice",children:"time_slice"})," \u51fd\u6570\u3002\u5e76\u4e14\u5982\u679c\u60a8\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"time_slice"})," \u51fd\u6570\uff0c\u5219\u53ef\u4ee5\u4e0d\u4f20\u5165\u53c2\u6570 ",(0,s.jsx)(n.code,{children:"boundary"}),"\uff0c\u56e0\u4e3a\u5728\u8be5\u573a\u666f\u4e2d\u8be5\u53c2\u6570\u9ed8\u8ba4\u4e14\u4ec5\u652f\u6301\u4e3a ",(0,s.jsx)(n.code,{children:"floor"}),"\uff0c\u4e0d\u652f\u6301\u4e3a ",(0,s.jsx)(n.code,{children:"ceil"}),"\u3002"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"time_unit"})}),(0,s.jsx)(n.td,{children:"\u662f"}),(0,s.jsxs)(n.td,{children:["\u5206\u533a\u7c92\u5ea6\uff0c\u76ee\u524d\u4ec5\u652f\u6301\u4e3a ",(0,s.jsx)(n.code,{children:"hour"}),"\u3001",(0,s.jsx)(n.code,{children:"day"}),"\u3001",(0,s.jsx)(n.code,{children:"month"})," \u6216 ",(0,s.jsx)(n.code,{children:"year"}),"\uff0c\u6682\u65f6\u4e0d\u652f\u6301\u4e3a ",(0,s.jsx)(n.code,{children:"week"}),"\u3002\u5982\u679c\u5206\u533a\u7c92\u5ea6\u4e3a ",(0,s.jsx)(n.code,{children:"hour"}),"\uff0c\u5219\u4ec5\u652f\u6301\u5206\u533a\u5217\u4e3a DATETIME \u7c7b\u578b\uff0c\u4e0d\u652f\u6301\u4e3a DATE \u7c7b\u578b\u3002"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"partition_column"})}),(0,s.jsx)(n.td,{children:"\u662f"}),(0,s.jsxs)(n.td,{children:["\u5206\u533a\u5217\u3002  ",(0,s.jsx)("br",{})," ",(0,s.jsxs)("ul",{children:[(0,s.jsxs)("li",{children:["\u4ec5\u652f\u6301\u4e3a\u65e5\u671f\u7c7b\u578b\uff08DATE \u6216 DATETIME\uff09\uff0c\u4e0d\u652f\u6301\u4e3a\u5176\u5b83\u7c7b\u578b\u3002\u5982\u679c\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"date_trunc"})," \u51fd\u6570\uff0c\u5219\u5206\u533a\u5217\u652f\u6301\u4e3a DATE \u6216 DATETIME \u7c7b\u578b\u3002\u5982\u679c\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"time_slice"})," \u51fd\u6570\uff0c\u5219\u5206\u533a\u5217\u4ec5\u652f\u6301\u4e3a DATETIME \u7c7b\u578b\u3002\u5206\u533a\u5217\u7684\u503c\u652f\u6301\u4e3a ",(0,s.jsx)(n.code,{children:"NULL"}),"\u3002"]}),(0,s.jsx)("li",{children:" \u5982\u679c\u5206\u533a\u5217\u662f DATE \u7c7b\u578b\uff0c\u5219\u8303\u56f4\u652f\u6301\u4e3a [0000-01-01 ~ 9999-12-31]\u3002\u5982\u679c\u5206\u533a\u5217\u662f DATETIME \u7c7b\u578b\uff0c\u5219\u8303\u56f4\u652f\u6301\u4e3a [0000-01-01 01:01:01 ~ 9999-12-31 23:59:59]\u3002"}),(0,s.jsx)("li",{children:" \u76ee\u524d\u4ec5\u652f\u6301\u6307\u5b9a\u4e00\u4e2a\u5206\u533a\u5217\uff0c\u4e0d\u652f\u6301\u6307\u5b9a\u591a\u4e2a\u5206\u533a\u5217\u3002"})]})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"partition_live_number"})}),(0,s.jsx)(n.td,{children:"\u5426"}),(0,s.jsxs)(n.td,{children:["\u4fdd\u7559\u6700\u8fd1\u591a\u5c11\u6570\u91cf\u7684\u5206\u533a\u3002\u6700\u8fd1\u662f\u6307\u5206\u533a\u6309\u65f6\u95f4\u7684\u5148\u540e\u987a\u5e8f\u8fdb\u884c\u6392\u5e8f\uff0c\u4ee5",(0,s.jsx)(n.strong,{children:"\u5f53\u524d\u65f6\u95f4"}),"\u4e3a\u57fa\u51c6\uff0c\u7136\u540e\u4ece\u540e\u5f80\u524d\u6570\u6307\u5b9a\u4e2a\u6570\u7684\u5206\u533a\u8fdb\u884c\u4fdd\u7559\uff0c\u5176\u4f59\uff08\u66f4\u65e9\u7684\uff09\u5206\u533a\u4f1a\u88ab\u5220\u9664\u3002\u540e\u53f0\u4f1a\u5b9a\u65f6\u8c03\u5ea6\u4efb\u52a1\u6765\u7ba1\u7406\u5206\u533a\u6570\u91cf\uff0c\u8c03\u5ea6\u95f4\u9694\u53ef\u4ee5\u901a\u8fc7 FE \u52a8\u6001\u53c2\u6570 ",(0,s.jsx)(n.code,{children:"dynamic_partition_check_interval_seconds"})," \u914d\u7f6e\uff0c\u9ed8\u8ba4\u4e3a 600 \u79d2\uff0c\u5373 10 \u5206\u949f\u3002\u5047\u8bbe\u5f53\u524d\u4e3a 2023 \u5e74 4 \u6708 4 \u65e5\uff0c",(0,s.jsx)(n.code,{children:"partition_live_number"})," \u8bbe\u7f6e\u4e3a ",(0,s.jsx)(n.code,{children:"2"}),"\uff0c\u5206\u533a\u5305\u542b ",(0,s.jsx)(n.code,{children:"p20230401"}),"\u3001",(0,s.jsx)(n.code,{children:"p20230402"}),"\u3001",(0,s.jsx)(n.code,{children:"p20230403"}),"\u3001",(0,s.jsx)(n.code,{children:"p20230404"}),"\uff0c\u5219\u5206\u533a ",(0,s.jsx)(n.code,{children:"p20230403"}),"\u3001",(0,s.jsx)(n.code,{children:"p20230404"})," \u4f1a\u4fdd\u7559\uff0c\u5176\u4ed6\u5206\u533a\u4f1a\u5220\u9664\u3002\u5982\u679c\u5bfc\u5165\u4e86\u810f\u6570\u636e\uff0c\u6bd4\u5982\u672a\u6765\u65f6\u95f4 4 \u6708 5 \u65e5\u548c 6 \u65e5\u7684\u6570\u636e\uff0c\u5bfc\u81f4\u5206\u533a\u5305\u542b ",(0,s.jsx)(n.code,{children:"p20230401"}),"\u3001",(0,s.jsx)(n.code,{children:"p20230402"}),"\u3001",(0,s.jsx)(n.code,{children:"p20230403"}),"\u3001",(0,s.jsx)(n.code,{children:"p20230404"}),"\u3001",(0,s.jsx)(n.code,{children:"p20230405"}),"\u3001",(0,s.jsx)(n.code,{children:"p20230406"}),"\uff0c\u5219\u5206\u533a ",(0,s.jsx)(n.code,{children:"p20230403"}),"\u3001",(0,s.jsx)(n.code,{children:"p20230404"}),"\u3001",(0,s.jsx)(n.code,{children:"p20230405"}),"\u3001",(0,s.jsx)(n.code,{children:"p20230406"})," \u4f1a\u4fdd\u7559\uff0c\u5176\u4ed6\u5206\u533a\u4f1a\u5220\u9664\u3002"]})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"\u4f7f\u7528\u8bf4\u660e",children:"\u4f7f\u7528\u8bf4\u660e"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u5728\u5bfc\u5165\u7684\u8fc7\u7a0b\u4e2d StarRocks \u6839\u636e\u5bfc\u5165\u6570\u636e\u5df2\u7ecf\u81ea\u52a8\u521b\u5efa\u4e86\u4e00\u4e9b\u5206\u533a\uff0c\u4f46\u662f\u7531\u4e8e\u67d0\u4e9b\u539f\u56e0\u5bfc\u5165\u4f5c\u4e1a\u6700\u7ec8\u5931\u8d25\uff0c\u5219\u5728\u5f53\u524d\u7248\u672c\u4e2d\uff0c\u5df2\u7ecf\u81ea\u52a8\u521b\u5efa\u7684\u5206\u533a\u5e76\u4e0d\u4f1a\u7531\u4e8e\u5bfc\u5165\u5931\u8d25\u800c\u81ea\u52a8\u5220\u9664\u3002"}),"\n",(0,s.jsxs)(n.li,{children:["StarRocks \u81ea\u52a8\u521b\u5efa\u5206\u533a\u6570\u91cf\u4e0a\u9650\u9ed8\u8ba4\u4e3a 4096\uff0c\u7531 FE \u914d\u7f6e\u53c2\u6570 ",(0,s.jsx)(n.code,{children:"max_automatic_partition_number"})," \u51b3\u5b9a\u3002\u8be5\u53c2\u6570\u53ef\u4ee5\u9632\u6b62\u60a8\u7531\u4e8e\u8bef\u64cd\u4f5c\u800c\u521b\u5efa\u5927\u91cf\u5206\u533a\u3002"]}),"\n",(0,s.jsx)(n.li,{children:"\u5206\u533a\u547d\u540d\u89c4\u5219\u4e0e\u52a8\u6001\u5206\u533a\u7684\u547d\u540d\u89c4\u5219\u4e00\u81f4\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,s.jsxs)(n.p,{children:["\u793a\u4f8b\u4e00\uff1a\u5047\u8bbe\u60a8\u7ecf\u5e38\u6309\u5929\u67e5\u8be2\u6570\u636e\uff0c\u5219\u5efa\u8868\u65f6\u53ef\u4ee5\u4f7f\u7528\u5206\u533a\u8868\u8fbe\u5f0f ",(0,s.jsx)(n.code,{children:"date_trunc()"})," \uff0c\u5e76\u4e14\u8bbe\u7f6e\u5206\u533a\u5217\u4e3a ",(0,s.jsx)(n.code,{children:"event_day"})," \uff0c\u5206\u533a\u7c92\u5ea6\u4e3a ",(0,s.jsx)(n.code,{children:"day"}),"\uff0c\u5b9e\u73b0\u5bfc\u5165\u6570\u636e\u65f6\u81ea\u52a8\u6309\u7167\u6570\u636e\u6240\u5c5e\u65e5\u671f\u5212\u5206\u5206\u533a\u3002\u5c06\u540c\u4e00\u5929\u7684\u6570\u636e\u5b58\u50a8\u5728\u4e00\u4e2a\u5206\u533a\u4e2d\uff0c\u5229\u7528\u5206\u533a\u88c1\u526a\u53ef\u4ee5\u663e\u8457\u63d0\u9ad8\u67e5\u8be2\u6548\u7387\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"CREATE TABLE site_access1 (\n    event_day DATETIME NOT NULL,\n    site_id INT DEFAULT '10',\n    city_code VARCHAR(100),\n    user_name VARCHAR(32) DEFAULT '',\n    pv BIGINT DEFAULT '0'\n)\nDUPLICATE KEY(event_day, site_id, city_code, user_name)\nPARTITION BY date_trunc('day', event_day)\nDISTRIBUTED BY HASH(event_day, site_id);\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u5bfc\u5165\u5982\u4e0b\u4e24\u884c\u6570\u636e\uff0c\u5219 StarRocks \u4f1a\u6839\u636e\u5bfc\u5165\u6570\u636e\u7684\u65e5\u671f\u8303\u56f4\u81ea\u52a8\u521b\u5efa\u4e24\u4e2a\u5206\u533a  ",(0,s.jsx)(n.code,{children:"p20230226"}),"\u3001",(0,s.jsx)(n.code,{children:"p20230227"}),"\uff0c\u8303\u56f4\u5206\u522b\u4e3a [2023-02-26 00:00:00,2023-02-27 00:00:00)\u3001[2023-02-27 00:00:00,2023-02-28 00:00:00)\u3002\u5982\u679c\u540e\u7eed\u5bfc\u5165\u6570\u636e\u7684\u65e5\u671f\u5c5e\u4e8e\u8fd9\u4e24\u4e2a\u8303\u56f4\uff0c\u5219\u90fd\u4f1a\u81ea\u52a8\u5212\u5206\u81f3\u5bf9\u5e94\u5206\u533a\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:'-- \u5bfc\u5165\u4e24\u884c\u6570\u636e\nINSERT INTO site_access1 \n    VALUES ("2023-02-26 20:12:04",002,"New York","Sam Smith",1),\n           ("2023-02-27 21:06:54",001,"Los Angeles","Taylor Swift",1);\n\n-- \u67e5\u8be2\u5206\u533a\nmysql > SHOW PARTITIONS FROM site_access1;\n+-------------+---------------+----------------+---------------------+--------------------+--------+--------------+------------------------------------------------------------------------------------------------------+--------------------+---------+----------------+---------------+---------------------+--------------------------+----------+------------+----------+\n| PartitionId | PartitionName | VisibleVersion | VisibleVersionTime  | VisibleVersionHash | State  | PartitionKey | Range                                                                                                | DistributionKey    | Buckets | ReplicationNum | StorageMedium | CooldownTime        | LastConsistencyCheckTime | DataSize | IsInMemory | RowCount |\n+-------------+---------------+----------------+---------------------+--------------------+--------+--------------+------------------------------------------------------------------------------------------------------+--------------------+---------+----------------+---------------+---------------------+--------------------------+----------+------------+----------+\n| 17138       | p20230226     | 2              | 2023-07-19 17:53:59 | 0                  | NORMAL | event_day    | [types: [DATETIME]; keys: [2023-02-26 00:00:00]; ..types: [DATETIME]; keys: [2023-02-27 00:00:00]; ) | event_day, site_id | 6       | 3              | HDD           | 9999-12-31 23:59:59 | NULL                     | 0B       | false      | 0        |\n| 17113       | p20230227     | 2              | 2023-07-19 17:53:59 | 0                  | NORMAL | event_day    | [types: [DATETIME]; keys: [2023-02-27 00:00:00]; ..types: [DATETIME]; keys: [2023-02-28 00:00:00]; ) | event_day, site_id | 6       | 3              | HDD           | 9999-12-31 23:59:59 | NULL                     | 0B       | false      | 0        |\n+-------------+---------------+----------------+---------------------+--------------------+--------+--------------+------------------------------------------------------------------------------------------------------+--------------------+---------+----------------+---------------+---------------------+--------------------------+----------+------------+----------+\n2 rows in set (0.00 sec)\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u793a\u4f8b\u4e8c\uff1a\u5982\u679c\u60a8\u5e0c\u671b\u5f15\u5165\u5206\u533a\u751f\u547d\u5468\u671f\u7ba1\u7406\uff0c\u5373\u4ec5\u4fdd\u7559\u6700\u8fd1\u4e00\u6bb5\u65f6\u95f4\u7684\u5206\u533a\uff0c\u5220\u9664\u5386\u53f2\u5206\u533a\uff0c\u5219\u53ef\u4ee5\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"partition_live_number"})," \u8bbe\u7f6e\u53ea\u4fdd\u7559\u6700\u8fd1\u591a\u5c11\u6570\u91cf\u7684\u5206\u533a\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"CREATE TABLE site_access2 (\n    event_day DATETIME NOT NULL,\n    site_id INT DEFAULT '10',\n    city_code VARCHAR(100),\n    user_name VARCHAR(32) DEFAULT '',\n    pv BIGINT DEFAULT '0'\n) \nDUPLICATE KEY(event_day, site_id, city_code, user_name)\nPARTITION BY date_trunc('month', event_day)\nDISTRIBUTED BY HASH(event_day, site_id)\nPROPERTIES(\n    \"partition_live_number\" = \"3\" -- \u53ea\u4fdd\u7559\u6700\u8fd1 3 \u4e2a\u5206\u533a\n);\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u793a\u4f8b\u4e09\uff1a\u5047\u8bbe\u60a8\u7ecf\u5e38\u6309\u5468\u67e5\u8be2\u6570\u636e\uff0c\u5219\u5efa\u8868\u65f6\u53ef\u4ee5\u4f7f\u7528\u5206\u533a\u8868\u8fbe\u5f0f ",(0,s.jsx)(n.code,{children:"time_slice()"}),"\uff0c\u8bbe\u7f6e\u5206\u533a\u5217\u4e3a ",(0,s.jsx)(n.code,{children:"event_day"}),"\uff0c\u5206\u533a\u7c92\u5ea6\u4e3a\u4e03\u5929\u3002\u5c06\u4e00\u5468\u7684\u6570\u636e\u5b58\u50a8\u5728\u4e00\u4e2a\u5206\u533a\u4e2d\uff0c\u5229\u7528\u5206\u533a\u88c1\u526a\u53ef\u4ee5\u663e\u8457\u63d0\u9ad8\u67e5\u8be2\u6548\u7387\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"CREATE TABLE site_access3 (\n    event_day DATETIME NOT NULL,\n    site_id INT DEFAULT '10',\n    city_code VARCHAR(100),\n    user_name VARCHAR(32) DEFAULT '',\n    pv BIGINT DEFAULT '0'\n)\nDUPLICATE KEY(event_day, site_id, city_code, user_name)\nPARTITION BY time_slice(event_day, INTERVAL 7 day)\nDISTRIBUTED BY HASH(event_day, site_id);\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u5217\u8868\u8fbe\u5f0f\u5206\u533a\u81ea-v31",children:"\u5217\u8868\u8fbe\u5f0f\u5206\u533a\uff08\u81ea v3.1\uff09"}),"\n",(0,s.jsx)(n.p,{children:"\u5982\u679c\u60a8\u7ecf\u5e38\u6309\u7167\u679a\u4e3e\u503c\u6765\u67e5\u8be2\u548c\u7ba1\u7406\u6570\u636e\uff0c\u5219\u60a8\u53ea\u9700\u8981\u6307\u5b9a\u8868\u793a\u7c7b\u578b\u7684\u5217\u4e3a\u5206\u533a\u5217\uff0cStarRocks \u4f1a\u6839\u636e\u5bfc\u5165\u7684\u6570\u636e\u7684\u5206\u533a\u5217\u503c\uff0c\u6765\u81ea\u52a8\u5212\u5206\u5e76\u521b\u5efa\u5206\u533a\u3002"}),"\n",(0,s.jsxs)(n.p,{children:["\u4e0d\u8fc7\u5728\u4e00\u4e9b\u7279\u6b8a\u573a\u666f\u4e0b\uff0c\u6bd4\u5982\u8868\u4e2d\u5305\u542b\u8868\u793a\u57ce\u5e02\u7684\u5217\uff0c\u60a8\u7ecf\u5e38\u6309\u7167\u56fd\u5bb6\u548c\u57ce\u5e02\u6765\u67e5\u8be2\u548c\u7ba1\u7406\u6570\u636e\uff0c\u5e0c\u671b\u5c06\u540c\u5c5e\u4e8e\u4e00\u4e2a\u56fd\u5bb6\u7684\u591a\u4e2a\u57ce\u5e02\u7684\u6570\u636e\u5b58\u50a8\u5728\u4e00\u4e2a\u5206\u533a\u4e2d\uff0c\u5219\u9700\u8981\u4f7f\u7528 ",(0,s.jsx)(n.a,{href:"/doc/zh/docs/table_design/list_partitioning",children:"List \u5206\u533a"}),"\u3002"]}),"\n",(0,s.jsx)(n.h3,{id:"\u8bed\u6cd5-1",children:"\u8bed\u6cd5"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bnf",children:"PARTITION BY expression\n...\n[ PROPERTIES( 'partition_live_number' = 'xxx' ) ]\n\nexpression ::=\n    ( <partition_columns> )\n    \npartition_columns ::=\n    <column>, [ <column> [,...] ]\n"})}),"\n",(0,s.jsx)(n.h3,{id:"\u53c2\u6570\u89e3\u91ca-1",children:"\u53c2\u6570\u89e3\u91ca"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"\u53c2\u6570"}),(0,s.jsx)(n.th,{children:"\u662f\u5426\u5fc5\u586b"}),(0,s.jsx)(n.th,{children:"\u53c2\u6570"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"partition_columns"})}),(0,s.jsx)(n.td,{children:"\u662f"}),(0,s.jsxs)(n.td,{children:["\u5206\u533a\u5217\u3002",(0,s.jsx)("br",{}),(0,s.jsxs)("ul",{children:[(0,s.jsxs)("li",{children:["\u652f\u6301\u4e3a\u5b57\u7b26\u4e32\uff08\u4e0d\u652f\u6301 BINARY\uff09\u3001\u65e5\u671f\u3001\u6574\u6570\u548c\u5e03\u5c14\u503c\u3002\u4e0d\u652f\u6301\u5206\u533a\u5217\u7684\u503c\u4e3a ",(0,s.jsx)(n.code,{children:"NULL"}),"\u3002"]}),(0,s.jsxs)("li",{children:[" \u5bfc\u5165\u540e\u81ea\u52a8\u521b\u5efa\u7684\u4e00\u4e2a\u5206\u533a\u4e2d\u53ea\u80fd\u5305\u542b\u5404\u5206\u533a\u5217\u7684\u4e00\u4e2a\u503c\uff0c\u5982\u679c\u9700\u8981\u5305\u542b\u5404\u5206\u533a\u5217\u7684\u591a\u503c\uff0c\u8bf7\u4f7f\u7528 ",(0,s.jsx)(n.a,{href:"/doc/zh/docs/table_design/list_partitioning",children:"List \u5206\u533a"}),"\u3002"]})]})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"partition_live_number"})}),(0,s.jsx)(n.td,{children:"\u5426"}),(0,s.jsxs)(n.td,{children:["\u4fdd\u7559\u591a\u5c11\u6570\u91cf\u7684\u5206\u533a\u3002\u6bd4\u8f83\u8fd9\u4e9b\u5206\u533a\u5305\u542b\u7684\u503c\uff0c\u5b9a\u671f\u5220\u9664\u503c\u5c0f\u7684\u5206\u533a\uff0c\u4fdd\u7559\u503c\u5927\u7684\u3002\u540e\u53f0\u4f1a\u5b9a\u65f6\u8c03\u5ea6\u4efb\u52a1\u6765\u7ba1\u7406\u5206\u533a\u6570\u91cf\uff0c\u8c03\u5ea6\u95f4\u9694\u53ef\u4ee5\u901a\u8fc7 FE \u52a8\u6001\u53c2\u6570 ",(0,s.jsx)(n.code,{children:"dynamic_partition_check_interval_seconds"})," \u914d\u7f6e\uff0c\u9ed8\u8ba4\u4e3a 600 \u79d2\uff0c\u5373 10 \u5206\u949f\u3002",(0,s.jsx)("br",{}),(0,s.jsx)(n.strong,{children:"\u8bf4\u660e"}),(0,s.jsx)("br",{}),"\u5982\u679c\u5206\u533a\u5217\u91cc\u662f\u5b57\u7b26\u4e32\u7c7b\u578b\u7684\u503c\uff0c\u5219\u6bd4\u8f83\u5206\u533a\u540d\u79f0\u7684\u5b57\u5178\u5e8f\uff0c\u5b9a\u671f\u4fdd\u7559\u6392\u5728\u524d\u9762\u7684\u5206\u533a\uff0c\u5220\u9664\u6392\u5728\u540e\u9762\u7684\u5206\u533a\u3002"]})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"\u4f7f\u7528\u8bf4\u660e-1",children:"\u4f7f\u7528\u8bf4\u660e"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u5728\u5bfc\u5165\u7684\u8fc7\u7a0b\u4e2d StarRocks \u6839\u636e\u5bfc\u5165\u6570\u636e\u5df2\u7ecf\u81ea\u52a8\u521b\u5efa\u4e86\u4e00\u4e9b\u5206\u533a\uff0c\u4f46\u662f\u7531\u4e8e\u67d0\u4e9b\u539f\u56e0\u5bfc\u5165\u4f5c\u4e1a\u6700\u7ec8\u5931\u8d25\uff0c\u5219\u5728\u5f53\u524d\u7248\u672c\u4e2d\uff0c\u5df2\u7ecf\u81ea\u52a8\u521b\u5efa\u7684\u5206\u533a\u5e76\u4e0d\u4f1a\u7531\u4e8e\u5bfc\u5165\u5931\u8d25\u800c\u81ea\u52a8\u5220\u9664\u3002"}),"\n",(0,s.jsxs)(n.li,{children:["StarRocks \u81ea\u52a8\u521b\u5efa\u5206\u533a\u6570\u91cf\u4e0a\u9650\u9ed8\u8ba4\u4e3a 4096\uff0c\u7531 FE \u914d\u7f6e\u53c2\u6570 ",(0,s.jsx)(n.code,{children:"max_automatic_partition_number"})," \u51b3\u5b9a\u3002\u8be5\u53c2\u6570\u53ef\u4ee5\u9632\u6b62\u60a8\u7531\u4e8e\u8bef\u64cd\u4f5c\u800c\u521b\u5efa\u5927\u91cf\u5206\u533a\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:["\u5206\u533a\u547d\u540d\u89c4\u5219\uff1a\u5982\u679c\u5b58\u5728\u591a\u4e2a\u5206\u533a\u5217\uff0c\u5219\u4e0d\u540c\u5206\u533a\u5217\u7684\u503c\u4ee5\u4e0b\u5212\u7ebf\uff08_\uff09\u8fde\u63a5\u3002\u4f8b\u5982\uff1a\u5b58\u5728\u6709\u4e24\u4e2a\u5206\u533a\u5217 ",(0,s.jsx)(n.code,{children:"dt"})," \u548c ",(0,s.jsx)(n.code,{children:"city"}),"\uff0c\u5747\u4e3a\u5b57\u7b26\u4e32\u7c7b\u578b\uff0c\u5bfc\u5165\u4e00\u6761\u6570\u636e ",(0,s.jsx)(n.code,{children:"2022-04-01"}),", ",(0,s.jsx)(n.code,{children:"beijing"}),"\uff0c\u5219\u81ea\u52a8\u521b\u5efa\u7684\u5206\u533a\u540d\u79f0\u4e3a ",(0,s.jsx)(n.code,{children:"p20220401_beijing"}),"\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"\u793a\u4f8b-1",children:"\u793a\u4f8b"}),"\n",(0,s.jsxs)(n.p,{children:["\u793a\u4f8b\u4e00\uff1a\u5047\u8bbe\u7ecf\u5e38\u6309\u65e5\u671f\u8303\u56f4\u548c\u7279\u5b9a\u57ce\u5e02\u67e5\u8be2\u673a\u623f\u6536\u8d39\u660e\u7ec6\uff0c\u5219\u5efa\u8868\u65f6\u53ef\u4ee5\u4f7f\u7528\u5206\u533a\u8868\u8fbe\u5f0f\u6307\u5b9a\u5206\u533a\u5217\u4e3a\u65e5\u671f ",(0,s.jsx)(n.code,{children:"dt"})," \u548c\u57ce\u5e02 ",(0,s.jsx)(n.code,{children:"city"}),"\u3002\u8fd9\u6837\u5c5e\u4e8e\u76f8\u540c\u65e5\u671f\u548c\u57ce\u5e02\u7684\u6570\u636e\u5206\u7ec4\u5230\u540c\u4e00\u4e2a\u5206\u533a\u4e2d\uff0c\u5229\u7528\u5206\u533a\u88c1\u526a\u53ef\u4ee5\u663e\u8457\u63d0\u9ad8\u67e5\u8be2\u6548\u7387\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"CREATE TABLE t_recharge_detail1 (\n    id bigint,\n    user_id bigint,\n    recharge_money decimal(32,2), \n    city varchar(20) not null,\n    dt varchar(20) not null\n)\nDUPLICATE KEY(id)\nPARTITION BY (dt,city)\nDISTRIBUTED BY HASH(`id`);\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u5bfc\u5165\u4e00\u6761\u6570\u636e\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"INSERT INTO t_recharge_detail1 \n    VALUES (1, 1, 1, 'Houston', '2022-04-01');\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u67e5\u770b\u5177\u4f53\u5206\u533a\u3002\u8fd4\u56de\u7ed3\u679c\u663e\u793a\uff0cStarRocks \u6839\u636e\u5bfc\u5165\u6570\u636e\u7684\u5206\u533a\u5217\u503c\u81ea\u52a8\u521b\u5efa\u4e00\u4e2a\u5206\u533a ",(0,s.jsx)(n.code,{children:"p20220401_Houston"})," \uff0c\u5982\u679c\u540e\u7eed\u5bfc\u5165\u6570\u636e\u7684\u5206\u533a\u5217 ",(0,s.jsx)(n.code,{children:"dt"})," \u548c ",(0,s.jsx)(n.code,{children:"city"})," \u7684\u503c\u662f ",(0,s.jsx)(n.code,{children:"2022-04-01"}),"\u548c ",(0,s.jsx)(n.code,{children:"Houston"}),"\uff0c\u5219\u90fd\u4f1a\u88ab\u5212\u5206\u81f3\u8be5\u5206\u533a\u3002"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u8bf4\u660e"})}),"\n",(0,s.jsxs)(n.p,{children:["\u5206\u533a\u4e2d\u53ea\u80fd\u5305\u542b\u5404\u5206\u533a\u5217\u7684\u4e00\u4e2a\u503c\uff0c\u5982\u679c\u9700\u8981\u4e00\u4e2a\u5206\u533a\u4e2d\u5305\u542b\u5404\u5206\u533a\u5217\u7684\u591a\u503c\uff0c\u8bf7\u4f7f\u7528 ",(0,s.jsx)(n.a,{href:"/doc/zh/docs/table_design/list_partitioning",children:"List \u5206\u533a"}),"\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"MySQL > SHOW PARTITIONS from t_recharge_detail1\\G\n*************************** 1. row ***************************\n             PartitionId: 16890\n           PartitionName: p20220401_Houston\n          VisibleVersion: 2\n      VisibleVersionTime: 2023-07-19 17:24:53\n      VisibleVersionHash: 0\n                   State: NORMAL\n            PartitionKey: dt, city\n                    List: (('2022-04-01', 'Houston'))\n         DistributionKey: id\n                 Buckets: 6\n          ReplicationNum: 3\n           StorageMedium: HDD\n            CooldownTime: 9999-12-31 23:59:59\nLastConsistencyCheckTime: NULL\n                DataSize: 2.5KB\n              IsInMemory: false\n                RowCount: 1\n1 row in set (0.00 sec)\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u793a\u4f8b\u4e8c\uff1a\u60a8\u4e5f\u53ef\u4ee5\u5728\u5efa\u8868\u65f6\u914d\u7f6e\u53c2\u6570 ",(0,s.jsx)(n.code,{children:"partition_live_number"})," \u8fdb\u884c\u5206\u533a\u751f\u547d\u5468\u671f\u7ba1\u7406\uff0c\u4f8b\u5982\u6307\u5b9a\u8be5\u8868\u53ea\u4fdd\u7559\u6700\u8fd1 3 \u4e2a\u5206\u533a\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:'CREATE TABLE t_recharge_detail2 (\n    id bigint,\n    user_id bigint,\n    recharge_money decimal(32,2), \n    city varchar(20) not null,\n    dt varchar(20) not null\n)\nDUPLICATE KEY(id)\nPARTITION BY (dt,city)\nDISTRIBUTED BY HASH(`id`) \nPROPERTIES(\n    "partition_live_number" = "3" -- \u53ea\u4fdd\u7559\u6700\u8fd1 3 \u4e2a\u5206\u533a\u3002\n);\n'})}),"\n",(0,s.jsx)(n.h2,{id:"\u7ba1\u7406\u5206\u533a",children:"\u7ba1\u7406\u5206\u533a"}),"\n",(0,s.jsx)(n.h3,{id:"\u5bfc\u5165\u6570\u636e\u81f3\u5206\u533a",children:"\u5bfc\u5165\u6570\u636e\u81f3\u5206\u533a"}),"\n",(0,s.jsx)(n.p,{children:"\u5bfc\u5165\u6570\u636e\u65f6\uff0cStarRocks \u4f1a\u6839\u636e\u6570\u636e\u548c\u5206\u533a\u8868\u8fbe\u5f0f\u5b9a\u4e49\u7684\u5206\u533a\u89c4\u5219\uff0c\u81ea\u52a8\u521b\u5efa\u5206\u533a\u3002"}),"\n",(0,s.jsxs)(n.p,{children:["\u503c\u5f97\u6ce8\u610f\u7684\u662f\uff0c\u5982\u679c\u60a8\u5efa\u8868\u65f6\u4f7f\u7528\u8868\u8fbe\u5f0f\u5206\u533a\uff0c\u5e76\u4e14\u9700\u8981\u4f7f\u7528 ",(0,s.jsx)(n.a,{href:"/doc/zh/docs/loading/InsertInto#%E9%80%9A%E8%BF%87-insert-overwrite-select-%E8%AF%AD%E5%8F%A5%E8%A6%86%E7%9B%96%E5%86%99%E5%85%A5%E6%95%B0%E6%8D%AE",children:"INSERT OVERWRITE"})," \u8986\u76d6\u5199\u5165",(0,s.jsx)(n.strong,{children:"\u6307\u5b9a\u5206\u533a"}),"\u7684\u6570\u636e\uff0c\u4e0d\u8bba\u8be5\u5206\u533a\u662f\u5426\u5df2\u7ecf\u521b\u5efa\uff0c\u76ee\u524d\u60a8\u90fd\u9700\u8981\u5728 ",(0,s.jsx)(n.code,{children:"PARTITION()"})," \u63d0\u4f9b\u660e\u786e\u7684\u5206\u533a\u8303\u56f4\u3002\u800c\u4e0d\u662f\u540c Range \u5206\u533a\u6216 List \u5206\u533a\u4e00\u6837\uff0c\u53ea\u9700\u8981\u5728",(0,s.jsx)(n.code,{children:"PARTITION (partition_name)"})," \u4e2d\u63d0\u4f9b\u5206\u533a\u540d\u79f0\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u5982\u679c\u5efa\u8868\u65f6\u60a8\u4f7f\u7528\u65f6\u95f4\u51fd\u6570\u8868\u8fbe\u5f0f\u5206\u533a\uff0c\u5219\u6b64\u65f6\u8986\u76d6\u5199\u5165\u6307\u5b9a\u5206\u533a\uff0c\u60a8\u9700\u8981\u63d0\u4f9b\u8be5\u5206\u533a\u7684\u8d77\u59cb\u8303\u56f4\uff08\u5206\u533a\u7c92\u5ea6\u4e0e\u5efa\u8868\u65f6\u914d\u7f6e\u5206\u533a\u7c92\u5ea6\u4e00\u81f4\uff09\u3002\u5982\u679c\u8be5\u5206\u533a\u4e0d\u5b58\u5728\uff0c\u5219\u5bfc\u5165\u6570\u636e\u65f6\u4f1a\u81ea\u52a8\u521b\u5efa\u8be5\u5206\u533a\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"INSERT OVERWRITE site_access1 PARTITION(event_day='2022-06-08 20:12:04')\n    SELECT * FROM site_access2 PARTITION(p20220608);\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u5982\u679c\u5efa\u8868\u65f6\u60a8\u4f7f\u7528\u5217\u8868\u8fbe\u5f0f\u5206\u533a\uff0c\u5219\u8986\u76d6\u5199\u5165\u6307\u5b9a\u5206\u533a\u65f6\uff0c\u60a8\u9700\u8981\u63d0\u4f9b\u8be5\u5206\u533a\u5305\u542b\u7684\u5206\u533a\u5217\u503c\u3002\u5982\u679c\u8be5\u5206\u533a\u4e0d\u5b58\u5728\uff0c\u5219\u5bfc\u5165\u6570\u636e\u65f6\u4f1a\u81ea\u52a8\u521b\u5efa\u8be5\u5206\u533a\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"INSERT OVERWRITE t_recharge_detail1 PARTITION(dt='2022-04-02',city='texas')\n    SELECT * FROM t_recharge_detail2 PARTITION(p20220402_texas);\n"})}),"\n",(0,s.jsx)(n.h3,{id:"\u67e5\u770b\u5206\u533a",children:"\u67e5\u770b\u5206\u533a"}),"\n",(0,s.jsxs)(n.p,{children:["\u67e5\u770b\u81ea\u52a8\u521b\u5efa\u7684\u5206\u533a\u7684\u5177\u4f53\u4fe1\u606f\u65f6\uff0c\u60a8\u9700\u8981\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"SHOW PARTITIONS FROM <table_name>"})," \u8bed\u53e5\u3002\u800c",(0,s.jsx)(n.code,{children:"SHOW CREATE TABLE <table_name>"})," \u8bed\u53e5\u8fd4\u56de\u7684\u7ed3\u679c\u4e2d\u4ec5\u5305\u542b\u5efa\u8868\u65f6\u914d\u7f6e\u7684\u8868\u8fbe\u5f0f\u5206\u533a\u8bed\u6cd5\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"MySQL > SHOW PARTITIONS FROM t_recharge_detail1;\n+-------------+-------------------+----------------+---------------------+--------------------+--------+--------------+-----------------------------+-----------------+---------+----------------+---------------+---------------------+--------------------------+----------+------------+----------+\n| PartitionId | PartitionName     | VisibleVersion | VisibleVersionTime  | VisibleVersionHash | State  | PartitionKey | List                        | DistributionKey | Buckets | ReplicationNum | StorageMedium | CooldownTime        | LastConsistencyCheckTime | DataSize | IsInMemory | RowCount |\n+-------------+-------------------+----------------+---------------------+--------------------+--------+--------------+-----------------------------+-----------------+---------+----------------+---------------+---------------------+--------------------------+----------+------------+----------+\n| 16890       | p20220401_Houston | 2              | 2023-07-19 17:24:53 | 0                  | NORMAL | dt, city     | (('2022-04-01', 'Houston')) | id              | 6       | 3              | HDD           | 9999-12-31 23:59:59 | NULL                     | 2.5KB    | false      | 1        |\n| 17056       | p20220402_texas   | 2              | 2023-07-19 17:27:42 | 0                  | NORMAL | dt, city     | (('2022-04-02', 'texas'))   | id              | 6       | 3              | HDD           | 9999-12-31 23:59:59 | NULL                     | 2.5KB    | false      | 1        |\n+-------------+-------------------+----------------+---------------------+--------------------+--------+--------------+-----------------------------+-----------------+---------+----------------+---------------+---------------------+--------------------------+----------+------------+----------+\n2 rows in set (0.00 sec)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u4f7f\u7528\u9650\u5236",children:"\u4f7f\u7528\u9650\u5236"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u81ea v3.1 \u8d77\uff0cStarRocks \u5b58\u7b97\u5206\u79bb\u6a21\u5f0f\u652f\u6301\u65f6\u95f4\u51fd\u6570\u8868\u8fbe\u5f0f\u5206\u533a\uff0c\u6682\u65f6\u4e0d\u652f\u6301\u5217\u8868\u8fbe\u5f0f\u5206\u533a\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u4f7f\u7528 CTAS \u5efa\u8868\u65f6\u6682\u65f6\u4e0d\u652f\u6301\u8868\u8fbe\u5f0f\u5206\u533a\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u6682\u65f6\u4e0d\u652f\u6301\u4f7f\u7528 Spark Load \u5bfc\u5165\u6570\u636e\u81f3\u8868\u8fbe\u5f0f\u5206\u533a\u7684\u8868\u3002"}),"\n",(0,s.jsxs)(n.li,{children:["\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"ALTER TABLE <table_name> DROP PARTITION <partition_name>"})," \u5220\u9664\u5217\u8868\u8fbe\u5f0f\u5206\u533a\u65f6\uff0c\u5206\u533a\u76f4\u63a5\u88ab\u5220\u9664\u5e76\u4e14\u4e0d\u80fd\u88ab\u6062\u590d\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:["\u5217\u8868\u8fbe\u5f0f\u5206\u533a\u6682\u65f6\u4e0d\u652f\u6301",(0,s.jsx)(n.a,{href:"/doc/zh/docs/administration/Backup_and_restore",children:"\u5907\u4efd\u4e0e\u6062\u590d"}),"\u3002"]}),"\n",(0,s.jsx)(n.li,{children:"\u5982\u679c\u4f7f\u7528\u8868\u8fbe\u5f0f\u5206\u533a\uff0c\u5219\u4ec5\u652f\u6301\u56de\u6eda\u5230 2.5.4 \u53ca\u4ee5\u540e\u7684\u7248\u672c\u3002"}),"\n"]})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,d.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(o,e)})):o(e)}},11151:(e,n,i)=>{i.d(n,{Zo:()=>t,ah:()=>c});var s=i(67294);const d=s.createContext({});function c(e){const n=s.useContext(d);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const r={};function t({components:e,children:n,disableParentContext:i}){let t;return t=i?"function"==typeof e?e({}):e||r:c(e),s.createElement(d.Provider,{value:t},n)}}}]);