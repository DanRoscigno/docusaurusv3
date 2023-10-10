"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[3966],{39431:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>t,default:()=>h,frontMatter:()=>d,metadata:()=>r,toc:()=>a});var s=i(85893),c=i(11151);const d={},t="\u52a8\u6001\u5206\u533a",r={id:"table_design/dynamic_partitioning",title:"\u52a8\u6001\u5206\u533a",description:"\u52a8\u6001\u5206\u533a\u529f\u80fd\u5f00\u542f\u540e\uff0c\u60a8\u53ef\u4ee5\u6309\u9700\u4e3a\u65b0\u6570\u636e\u52a8\u6001\u5730\u521b\u5efa\u5206\u533a\uff0c\u540c\u65f6 StarRocks \u4f1a\u2f83\u52a8\u5220\u9664\u8fc7\u671f\u5206\u533a\uff0c\u4ece\u800c\u786e\u4fdd\u6570\u636e\u7684\u65f6\u6548\u6027\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.0/table_design/dynamic_partitioning.md",sourceDirName:"table_design",slug:"/table_design/dynamic_partitioning",permalink:"/doc/zh/docs/3.0/table_design/dynamic_partitioning",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/table_design/dynamic_partitioning.md",tags:[],version:"3.0",frontMatter:{},sidebar:"documentation",previous:{title:"\u6570\u636e\u538b\u7f29",permalink:"/doc/zh/docs/3.0/table_design/data_compression"},next:{title:"\u6570\u636e\u6a21\u578b",permalink:"/doc/zh/docs/3.0/table_design/table_types/"}},o={},a=[{value:"\u521b\u5efa\u652f\u6301\u52a8\u6001\u5206\u533a\u7684\u8868",id:"\u521b\u5efa\u652f\u6301\u52a8\u6001\u5206\u533a\u7684\u8868",level:2},{value:"\u67e5\u770b\u8868\u5f53\u524d\u7684\u5206\u533a\u60c5\u51b5",id:"\u67e5\u770b\u8868\u5f53\u524d\u7684\u5206\u533a\u60c5\u51b5",level:2},{value:"\u4fee\u6539\u8868\u7684\u52a8\u6001\u5206\u533a\u5c5e\u6027",id:"\u4fee\u6539\u8868\u7684\u52a8\u6001\u5206\u533a\u5c5e\u6027",level:2}];function l(e){const n=Object.assign({h1:"h1",p:"p",h2:"h2",code:"code",pre:"pre",strong:"strong",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",blockquote:"blockquote",ul:"ul",li:"li"},(0,c.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"\u52a8\u6001\u5206\u533a",children:"\u52a8\u6001\u5206\u533a"}),"\n",(0,s.jsx)(n.p,{children:"\u52a8\u6001\u5206\u533a\u529f\u80fd\u5f00\u542f\u540e\uff0c\u60a8\u53ef\u4ee5\u6309\u9700\u4e3a\u65b0\u6570\u636e\u52a8\u6001\u5730\u521b\u5efa\u5206\u533a\uff0c\u540c\u65f6 StarRocks \u4f1a\u2f83\u52a8\u5220\u9664\u8fc7\u671f\u5206\u533a\uff0c\u4ece\u800c\u786e\u4fdd\u6570\u636e\u7684\u65f6\u6548\u6027\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u521b\u5efa\u652f\u6301\u52a8\u6001\u5206\u533a\u7684\u8868",children:"\u521b\u5efa\u652f\u6301\u52a8\u6001\u5206\u533a\u7684\u8868"}),"\n",(0,s.jsxs)(n.p,{children:["\u5982\u4e0b\u793a\u4f8b\uff0c\u521b\u5efa\u4e00\u5f20\u652f\u6301\u52a8\u6001\u5206\u533a\u7684\u8868\uff0c\u8868\u540d\u4e3a ",(0,s.jsx)(n.code,{children:"site_access"}),"\uff0c\u52a8\u6001\u5206\u533a\u901a\u8fc7 ",(0,s.jsx)(n.code,{children:"PROPERTIES"})," \u8fdb\u884c\u914d\u7f6e\u3002\u5206\u533a\u7684\u533a\u95f4\u4e3a\u5f53\u524d\u65f6\u95f4\u7684\u524d\u540e 3 \u5929\uff0c\u603b\u5171 6 \u5929\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:'CREATE TABLE site_access(\nevent_day DATE,\nsite_id INT DEFAULT \'10\',\ncity_code VARCHAR(100),\nuser_name VARCHAR(32) DEFAULT \'\',\npv BIGINT DEFAULT \'0\'\n)\nDUPLICATE KEY(event_day, site_id, city_code, user_name)\nPARTITION BY RANGE(event_day)(\nPARTITION p20200321 VALUES LESS THAN ("2020-03-22"),\nPARTITION p20200322 VALUES LESS THAN ("2020-03-23"),\nPARTITION p20200323 VALUES LESS THAN ("2020-03-24"),\nPARTITION p20200324 VALUES LESS THAN ("2020-03-25")\n)\nDISTRIBUTED BY HASH(event_day, site_id)\nPROPERTIES(\n    "dynamic_partition.enable" = "true",\n    "dynamic_partition.time_unit" = "DAY",\n    "dynamic_partition.start" = "-3",\n    "dynamic_partition.end" = "3",\n    "dynamic_partition.prefix" = "p",\n    "dynamic_partition.history_partition_num" = "0"\n);\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.strong,{children:["\u52a8\u6001\u5206\u533a\u76f8\u5173\u5c5e\u6027 ",(0,s.jsx)(n.code,{children:"PROPERTIES"}),"\uff1a"]})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"\u53c2\u6570"}),(0,s.jsx)(n.th,{children:"\u662f\u5426\u5fc5\u586b"}),(0,s.jsx)(n.th,{children:"\u8bf4\u660e"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"dynamic_partition.enable"}),(0,s.jsx)(n.td,{children:"\u5426"}),(0,s.jsxs)(n.td,{children:["\u5f00\u542f\u52a8\u6001\u5206\u533a\u7279\u6027\uff0c\u53d6\u503c\u4e3a ",(0,s.jsx)(n.code,{children:"true"}),"\uff08\u9ed8\u8ba4\uff09\u6216 ",(0,s.jsx)(n.code,{children:"false"}),"\u3002"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"dynamic_partition.time_unit"}),(0,s.jsx)(n.td,{children:"\u662f"}),(0,s.jsxs)(n.td,{children:["\u52a8\u6001\u5206\u533a\u7684\u65f6\u95f4\u7c92\u5ea6\uff0c\u53d6\u503c\u4e3a ",(0,s.jsx)(n.code,{children:"HOUR"}),"\u3001",(0,s.jsx)(n.code,{children:"DAY"}),"\u3001",(0,s.jsx)(n.code,{children:"WEEK"}),"\u3001",(0,s.jsx)(n.code,{children:"MONTH"})," \u6216 ",(0,s.jsx)(n.code,{children:"YEAR"})," (\u81ea v3.0.5 \u8d77)\u3002\u65f6\u95f4\u7c92\u5ea6\u4f1a\u51b3\u5b9a\u52a8\u6001\u521b\u5efa\u7684\u5206\u533a\u540d\u540e\u7f00\u683c\u5f0f\u3002  ",(0,s.jsx)("br",{}),"\u53d6\u503c\u4e3a ",(0,s.jsx)(n.code,{children:"HOUR"})," \u65f6\uff0c\u4ec5\u652f\u6301Datetime\u7c7b\u578b\uff0c\u52a8\u6001\u521b\u5efa\u7684\u5206\u533a\u540d\u540e\u7f00\u683c\u5f0f\u4e3a yyyyMMddHH\uff0c\u4f8b\u5982 ",(0,s.jsx)(n.code,{children:"2020032101"}),"\u3002",(0,s.jsx)("br",{}),"\u53d6\u503c\u4e3a ",(0,s.jsx)(n.code,{children:"DAY"})," \u65f6\uff0c\u52a8\u6001\u521b\u5efa\u7684\u5206\u533a\u540d\u540e\u7f00\u683c\u5f0f\u4e3a yyyyMMdd\uff0c\u4f8b\u5982 ",(0,s.jsx)(n.code,{children:"20200321"}),"\u3002",(0,s.jsx)("br",{}),"\u53d6\u503c\u4e3a ",(0,s.jsx)(n.code,{children:"WEEK"})," \u65f6\uff0c\u52a8\u6001\u521b\u5efa\u7684\u5206\u533a\u540d\u540e\u7f00\u683c\u5f0f\u4e3a yyyy_ww\uff0c\u4f8b\u5982 ",(0,s.jsx)(n.code,{children:"2020_13"})," \u4ee3\u8868 2020 \u5e74\u7b2c 13 \u5468\u3002",(0,s.jsx)("br",{}),"\u53d6\u503c\u4e3a ",(0,s.jsx)(n.code,{children:"MONTH"})," \u65f6\uff0c\u52a8\u6001\u521b\u5efa\u7684\u5206\u533a\u540d\u540e\u7f00\u683c\u5f0f\u4e3a yyyyMM\uff0c\u4f8b\u5982 ",(0,s.jsx)(n.code,{children:"202003"}),"\u3002 ",(0,s.jsx)("br",{}),"\u53d6\u503c\u4e3a ",(0,s.jsx)(n.code,{children:"YEAR"})," \u65f6 (\u81ea v3.0.5 \u8d77)\uff0c\u52a8\u6001\u521b\u5efa\u7684\u5206\u533a\u540d\u540e\u7f00\u683c\u5f0f\u4e3a yyyy\uff0c\u4f8b\u5982 ",(0,s.jsx)(n.code,{children:"2020"}),"\u3002",(0,s.jsx)("br",{}),(0,s.jsx)(n.strong,{children:"\u6ce8\u610f"}),(0,s.jsx)("br",{}),"\u5728 v3.0.5 \u4e4b\u524d\u7684\u7248\u672c\uff0c\u52a8\u6001\u5206\u533a\u4e0d\u652f\u6301\u65f6\u95f4\u7c92\u5ea6\u4e3a ",(0,s.jsx)(n.code,{children:"YEAR"}),"\uff0c\u624b\u52a8\u548c\u81ea\u52a8\u521b\u5efa\u5206\u533a\u652f\u6301\u65f6\u95f4\u7c92\u5ea6\u4e3a ",(0,s.jsx)(n.code,{children:"YEAR"}),"\u3002"]})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:["| dynamic_partition.time_zone |  \u5426   | \u52a8\u6001\u5206\u533a\u7684\u65f6\u533a\u3002\u9ed8\u8ba4\u4e0e\u7cfb\u7edf\u65f6\u533a\u4e00\u81f4\u3002                                                                                                                                                                                                                                                                                            |\n| dynamic_partition.start | \u5426   | \u4fdd\u7559\u7684\u52a8\u6001\u5206\u533a\u7684\u8d77\u59cb\u504f\u79fb\uff0c\u53d6\u503c\u8303\u56f4\u4e3a\u8d1f\u6574\u6570\u3002\u6839\u636e ",(0,s.jsx)(n.code,{children:"dynamic_partition.time_unit"})," \u5c5e\u6027\u7684\u4e0d\u540c\uff0c\u4ee5\u5f53\u5929\uff08\u5468/\u6708\uff09\u4e3a\u57fa\u51c6\uff0c\u5206\u533a\u8303\u56f4\u5728\u6b64\u504f\u79fb\u4e4b\u524d\u7684\u5206\u533a\u5c06\u4f1a\u88ab\u5220\u9664\u3002\u6bd4\u5982\u8bbe\u7f6e\u4e3a",(0,s.jsx)(n.code,{children:"-3"}),"\uff0c\u5e76\u4e14",(0,s.jsx)(n.code,{children:"dynamic_partition.time_unit"}),"\u4e3a",(0,s.jsx)(n.code,{children:"day"}),"\uff0c\u5219\u8868\u793a 3 \u5929\u524d\u7684\u5206\u533a\u4f1a\u88ab\u5220\u6389\u3002",(0,s.jsx)("br",{}),"\u5982\u679c\u4e0d\u586b\u5199\uff0c\u5219\u9ed8\u8ba4\u4e3a ",(0,s.jsx)(n.code,{children:"Integer.MIN_VALUE"}),"\uff0c\u5373 ",(0,s.jsx)(n.code,{children:"-2147483648"}),"\uff0c\u8868\u793a\u4e0d\u5220\u9664\u5386\u53f2\u5206\u533a\u3002                                                                                             |\n| dynamic_partition.end   | \u662f   | \u63d0\u524d\u521b\u5efa\u7684\u5206\u533a\u6570\u91cf\uff0c\u53d6\u503c\u8303\u56f4\u4e3a\u6b63\u6574\u6570\u3002\u6839\u636e ",(0,s.jsx)(n.code,{children:"dynamic_partition.time_unit"})," \u5c5e\u6027\u7684\u4e0d\u540c\uff0c\u4ee5\u5f53\u5929\uff08\u5468/\u6708\uff09\u4e3a\u57fa\u51c6\uff0c\u63d0\u524d\u521b\u5efa\u5bf9\u5e94\u8303\u56f4\u7684\u5206\u533a\u3002                                                                                                                                                                                                                                    |\n| dynamic_partition.prefix | \u5426   | \u52a8\u6001\u5206\u533a\u7684\u524d\u7f00\u540d\uff0c\u9ed8\u8ba4\u503c\u4e3a ",(0,s.jsx)(n.code,{children:"p"}),"\u3002                                                                                                                                                                                                                                                                                                    |\n| dynamic_partition.buckets | \u5426   | \u52a8\u6001\u5206\u533a\u7684\u5206\u6876\u6570\u91cf\u3002\u9ed8\u8ba4\u4e0e BUCKETS \u4fdd\u7559\u5b57\u6307\u5b9a\u7684\u5206\u6876\u6570\u91cf\u3001\u6216\u8005 StarRocks \u81ea\u52a8\u8bbe\u7f6e\u7684\u5206\u6876\u6570\u91cf\u4fdd\u6301\u4e00\u81f4\u3002                                                                                                                                                                                                                                                          |\n| dynamic_partition.history_partition_num | \u5426   | \u52a8\u6001\u5206\u533a\u7684\u521b\u5efa\u5386\u53f2\u5206\u533a\u7684\u4e2a\u6570\uff0c\u9ed8\u8ba4\u503c\u4e3a ",(0,s.jsx)(n.code,{children:"0"}),"\u3002\u5f53\u503c>0\u65f6\u4f1a\u63d0\u524d\u521b\u5efa\u5386\u53f2\u5206\u533a\u3002\u81ea 2.5.2 \u7248\u672c\u8d77\uff0cStarRocks \u652f\u6301\u914d\u7f6e\u8be5\u53c2\u6570\u3002                                                                                                                                                                                                                                                                              |\n| dynamic_partition.start_day_of_week     | \u5426   |      \u5f53 ",(0,s.jsx)(n.code,{children:"dynamic_partition.time_unit"})," \u4e3a ",(0,s.jsx)(n.code,{children:"WEEK"})," \u65f6\uff0c\u8be5\u53c2\u6570\u6307\u5b9a\u6bcf\u5468\u7684\u7b2c\u4e00\u5929\u3002\u6709\u6548\u503c\u4e3a ",(0,s.jsx)(n.code,{children:"1"})," \u5230 ",(0,s.jsx)(n.code,{children:"7"}),"\u3002",(0,s.jsx)(n.code,{children:"1"})," \u8868\u793a\u661f\u671f\u4e00\uff0c",(0,s.jsx)(n.code,{children:"7"})," \u8868\u793a\u661f\u671f\u65e5\u3002\u9ed8\u8ba4\u503c\u4e3a ",(0,s.jsx)(n.code,{children:"1"}),"\uff0c\u8868\u793a\u6bcf\u5468\u4ece\u661f\u671f\u4e00\u5f00\u59cb\u3002  |\n| dynamic_partition.start_day_of_month     | \u5426   |     \u5f53 ",(0,s.jsx)(n.code,{children:"dynamic_partition.time_unit"})," \u4e3a ",(0,s.jsx)(n.code,{children:"MONTH"})," \u65f6\uff0c\u8be5\u53c2\u6570\u6307\u5b9a\u6bcf\u6708\u7684\u7b2c\u4e00\u5929\u3002\u6709\u6548\u503c\u4e3a ",(0,s.jsx)(n.code,{children:"1"})," \u5230 ",(0,s.jsx)(n.code,{children:"28"}),"\u3002",(0,s.jsx)(n.code,{children:"1"})," \u8868\u793a\u6bcf\u6708\u7684\u7b2c\u4e00\u5929\uff0c",(0,s.jsx)(n.code,{children:"28"})," \u8868\u793a\u6bcf\u6708\u7684\u7b2c ",(0,s.jsx)(n.code,{children:"28"})," \u5929\u3002\u9ed8\u8ba4\u503c\u4e3a ",(0,s.jsx)(n.code,{children:"1"}),"\uff0c\u8868\u793a\u6bcf\u6708\u4ece\u7b2c\u4e00\u5929\u5f00\u59cb\u3002\u6bcf\u6708\u7684\u7b2c\u4e00\u5929\u4e0d\u652f\u6301\u4e3a 29 \u65e5\u300130 \u65e5\u6216 31 \u65e5\u3002   |\n| dynamic_partition.replication_num     | \u5426   |  \u5728\u52a8\u6001\u521b\u5efa\u7684\u5206\u533a\u4e2d\uff0c\u6bcf\u4e2a tablet \u526f\u672c\u7684\u6570\u91cf\u3002\u9ed8\u8ba4\u503c\u4e0e\u5efa\u8868\u65f6\u914d\u7f6e\u7684\u526f\u672c\u6570\u91cf\u76f8\u540c\u3002      |"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u52a8\u6001\u5206\u533a\u76f8\u5173 FE \u914d\u7f6e\u9879\uff1a"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"dynamic_partition_check_interval_seconds"}),"\uff1aFE \u914d\u7f6e\u9879\uff0c\u52a8\u6001\u5206\u533a\u68c0\u67e5\u7684\u65f6\u95f4\u5468\u671f\uff0c\u9ed8\u8ba4\u4e3a 600\uff0c\u5355\u4f4d\u4e3a s\uff0c\u5373\u6bcf10\u5206\u949f\u68c0\u67e5\u4e00\u6b21\u5206\u533a\u60c5\u51b5\u662f\u5426\u6ee1\u8db3",(0,s.jsx)(n.code,{children:"PROPERTIES"}),"\u4e2d\u52a8\u6001\u5206\u533a\u5c5e\u6027\uff0c\u5982\u4e0d\u6ee1\u8db3\uff0c\u5219\u4f1a\u81ea\u52a8\u521b\u5efa\u548c\u5220\u9664\u5206\u533a\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u67e5\u770b\u8868\u5f53\u524d\u7684\u5206\u533a\u60c5\u51b5",children:"\u67e5\u770b\u8868\u5f53\u524d\u7684\u5206\u533a\u60c5\u51b5"}),"\n",(0,s.jsx)(n.p,{children:"\u5f00\u542f\u52a8\u6001\u5206\u533a\u7279\u6027\u540e\uff0c\u4f1a\u4e0d\u65ad\u5730\u81ea\u52a8\u589e\u51cf\u5206\u533a\u3002\u60a8\u53ef\u4ee5\u6267\u884c\u5982\u4e0b\u8bed\u53e5\uff0c\u67e5\u770b\u8868\u5f53\u524d\u7684\u5206\u533a\u60c5\u51b5\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"SHOW PARTITIONS FROM site_access;\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u5047\u8bbe\u5f53\u524d\u65f6\u95f4\u4e3a 2020-03-25\uff0c\u5728\u8c03\u5ea6\u52a8\u6001\u5206\u533a\u65f6\uff0c\u4f1a\u5220\u9664\u5206\u533a\u4e0a\u754c\u5c0f\u4e8e 2020-03-22 \u7684\u5206\u533a\uff0c\u540c\u65f6\u5728\u8c03\u5ea6\u65f6\u4f1a\u521b\u5efa\u4eca\u540e 3 \u5929\u7684\u5206\u533a\u3002\u5219\u5982\u4e0a\u8bed\u53e5\u7684\u8fd4\u56de\u7ed3\u679c\u4e2d\uff0c",(0,s.jsx)(n.code,{children:"Range"})," \u5217\u663e\u793a\u5f53\u524d\u5206\u533a\u7684\u4fe1\u606f\u5982\u4e0b\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"[types: [DATE]; keys: [2020-03-22]; \u2025types: [DATE]; keys: [2020-03-23]; )\n[types: [DATE]; keys: [2020-03-23]; \u2025types: [DATE]; keys: [2020-03-24]; )\n[types: [DATE]; keys: [2020-03-24]; \u2025types: [DATE]; keys: [2020-03-25]; )\n[types: [DATE]; keys: [2020-03-25]; \u2025types: [DATE]; keys: [2020-03-26]; )\n[types: [DATE]; keys: [2020-03-26]; \u2025types: [DATE]; keys: [2020-03-27]; )\n[types: [DATE]; keys: [2020-03-27]; \u2025types: [DATE]; keys: [2020-03-28]; )\n[types: [DATE]; keys: [2020-03-28]; \u2025types: [DATE]; keys: [2020-03-29]; )\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u4fee\u6539\u8868\u7684\u52a8\u6001\u5206\u533a\u5c5e\u6027",children:"\u4fee\u6539\u8868\u7684\u52a8\u6001\u5206\u533a\u5c5e\u6027"}),"\n",(0,s.jsx)(n.p,{children:"\u6267\u884c ALTER TABLE\uff0c\u4fee\u6539\u52a8\u6001\u5206\u533a\u7684\u5c5e\u6027\uff0c\u4f8b\u5982\u6682\u505c\u6216\u8005\u5f00\u542f\u52a8\u6001\u5206\u533a\u7279\u6027\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:'ALTER TABLE site_access SET("dynamic_partition.enable"="false");\nALTER TABLE site_access SET("dynamic_partition.enable"="true");\n'})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"\u8bf4\u660e\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u53ef\u4ee5\u6267\u884c SHOW CREATE TABLE \u547d\u4ee4\uff0c\u67e5\u770b\u8868\u7684\u52a8\u6001\u5206\u533a\u5c5e\u6027\u3002"}),"\n",(0,s.jsxs)(n.li,{children:["ALTER TABLE \u4e5f\u9002\u7528\u4e8e\u4fee\u6539 ",(0,s.jsx)(n.code,{children:"PROPERTIES"})," \u4e2d\u7684\u5176\u4ed6\u914d\u7f6e\u9879\u3002"]}),"\n"]}),"\n"]})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,c.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(l,e)})):l(e)}},11151:(e,n,i)=>{i.d(n,{Zo:()=>r,ah:()=>d});var s=i(67294);const c=s.createContext({});function d(e){const n=s.useContext(c);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const t={};function r({components:e,children:n,disableParentContext:i}){let r;return r=i?"function"==typeof e?e({}):e||t:d(e),s.createElement(c.Provider,{value:r},n)}}}]);