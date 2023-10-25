"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[63319],{35768:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>o});var l=s(85893),t=s(11151);const i={displayed_sidebar:"Chinese"},r="Insert Into \u5bfc\u5165",a={id:"loading/InsertInto",title:"Insert Into \u5bfc\u5165",description:"Insert Into \u8bed\u53e5\u7684\u4f7f\u7528\u65b9\u5f0f\u548c MySQL \u7b49\u6570\u636e\u5e93\u4e2d Insert Into \u8bed\u53e5\u7684\u4f7f\u7528\u65b9\u5f0f\u7c7b\u4f3c\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.0/loading/InsertInto.md",sourceDirName:"loading",slug:"/loading/InsertInto",permalink:"/zh/docs/2.0/loading/InsertInto",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/loading/InsertInto.md",tags:[],version:"2.0",frontMatter:{displayed_sidebar:"Chinese"},sidebar:"Chinese",previous:{title:"Synchronize data from MySQL",permalink:"/zh/docs/2.0/loading/Flink_cdc_load"},next:{title:"\u4ecb\u7ecd",permalink:"/zh/docs/2.0/loading/Json_loading"}},d={},o=[{value:"\u4f7f\u7528\u573a\u666f",id:"\u4f7f\u7528\u573a\u666f",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:3},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:3},{value:"\u5bfc\u5165\u7ed3\u679c",id:"\u5bfc\u5165\u7ed3\u679c",level:3},{value:"\u76f8\u5173\u914d\u7f6e",id:"\u76f8\u5173\u914d\u7f6e",level:2},{value:"FE \u914d\u7f6e",id:"fe-\u914d\u7f6e",level:3},{value:"Session \u53d8\u91cf",id:"session-\u53d8\u91cf",level:3},{value:"\u5bfc\u5165\u793a\u4f8b",id:"\u5bfc\u5165\u793a\u4f8b",level:2},{value:"\u521b\u5efa\u6570\u636e\u5e93\u4e0e\u6570\u636e\u8868",id:"\u521b\u5efa\u6570\u636e\u5e93\u4e0e\u6570\u636e\u8868",level:3},{value:"\u901a\u8fc7values\u5bfc\u5165\u6570\u636e",id:"\u901a\u8fc7values\u5bfc\u5165\u6570\u636e",level:3},{value:"\u901a\u8fc7select\u5bfc\u5165\u6570\u636e",id:"\u901a\u8fc7select\u5bfc\u5165\u6570\u636e",level:3},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:2}];function c(e){const n=Object.assign({h1:"h1",p:"p",strong:"strong",hr:"hr",h2:"h2",ul:"ul",li:"li",h3:"h3",pre:"pre",code:"code",blockquote:"blockquote"},(0,t.ah)(),e.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h1,{id:"insert-into-\u5bfc\u5165",children:"Insert Into \u5bfc\u5165"}),"\n",(0,l.jsxs)(n.p,{children:["Insert Into \u8bed\u53e5\u7684\u4f7f\u7528\u65b9\u5f0f\u548c MySQL \u7b49\u6570\u636e\u5e93\u4e2d Insert Into \u8bed\u53e5\u7684\u4f7f\u7528\u65b9\u5f0f\u7c7b\u4f3c\u3002\n\u4f46\u5728 StarRocks \u4e2d\uff0c\u6240\u6709\u7684\u6570\u636e\u5199\u5165\u90fd\u662f ",(0,l.jsx)(n.strong,{children:"\u4e00\u4e2a\u72ec\u7acb\u7684\u5bfc\u5165\u4f5c\u4e1a"})," \uff0c\u6240\u4ee5\u8fd9\u91cc\u5c06 Insert Into \u4e5f\u4f5c\u4e3a\u4e00\u79cd\u5bfc\u5165\u65b9\u5f0f\u4ecb\u7ecd\u3002"]}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h2,{id:"\u4f7f\u7528\u573a\u666f",children:"\u4f7f\u7528\u573a\u666f"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Insert Into \u5bfc\u5165\u547d\u4ee4\u4f1a\u540c\u6b65\u8fd4\u56de\u5bfc\u5165\u6d41\u7a0b\u7684\u8fd0\u884c\u7ed3\u679c\u3002"}),"\n",(0,l.jsx)(n.li,{children:"\u4ec5\u5bfc\u5165\u51e0\u6761\u6d4b\u8bd5\u6570\u636e\uff0c\u9a8c\u8bc1\u4e00\u4e0b StarRocks \u7cfb\u7edf\u7684\u529f\u80fd\u3002\u6b64\u65f6\u9002\u5408\u4f7f\u7528 INSERT INTO VALUES \u7684\u8bed\u6cd5\u3002"}),"\n",(0,l.jsx)(n.li,{children:"\u7528\u6237\u5e0c\u671b\u5c06\u5df2\u7ecf\u5728 StarRocks \u8868\u4e2d\u7684\u6570\u636e\u8fdb\u884c ETL \u8f6c\u6362\u5e76\u5bfc\u5165\u5230\u4e00\u4e2a\u65b0\u7684 StarRocks \u8868\u4e2d\uff0c\u6b64\u65f6\u9002\u5408\u4f7f\u7528 INSERT INTO SELECT \u8bed\u6cd5\u3002"}),"\n",(0,l.jsx)(n.li,{children:"\u7528\u6237\u53ef\u4ee5\u521b\u5efa\u4e00\u79cd\u5916\u90e8\u8868\uff0c\u5982 MySQL \u5916\u90e8\u8868\u6620\u5c04\u4e00\u5f20 MySQL \u7cfb\u7edf\u4e2d\u7684\u8868\u3002\u7136\u540e\u901a\u8fc7 INSERT INTO SELECT \u8bed\u6cd5\u5c06\u5916\u90e8\u8868\u4e2d\u7684\u6570\u636e\u5bfc\u5165\u5230 StarRocks \u8868\u4e2d\u5b58\u50a8\u3002"}),"\n"]}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"INSERT INTO table_name\n[ PARTITION (p1, ...) ]\n[ WITH LABEL label]\n[ (column [, ...]) ]\n[ [ hint [, ...] ] ]\n{ VALUES ( { expression | DEFAULT } [, ...] ) [, ...] | query }\n"})}),"\n",(0,l.jsx)(n.h3,{id:"\u53c2\u6570",children:"\u53c2\u6570"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"tablet_name: \u5bfc\u5165\u6570\u636e\u7684\u76ee\u7684\u8868\u3002\u53ef\u4ee5\u662f db_name.table_name \u5f62\u5f0f\u3002"}),"\n",(0,l.jsx)(n.li,{children:"partitions: \u6307\u5b9a\u5f85\u5bfc\u5165\u7684\u5206\u533a\uff0c\u5fc5\u987b\u662f table_name \u4e2d\u5b58\u5728\u7684\u5206\u533a\uff0c\u591a\u4e2a\u5206\u533a\u540d\u79f0\u7528\u9017\u53f7\u5206\u9694\u3002\u5982\u679c\u6307\u5b9a\u76ee\u6807\u5206\u533a\uff0c\u5219\u53ea\u4f1a\u5bfc\u5165\u7b26\u5408\u76ee\u6807\u5206\u533a\u7684\u6570\u636e\u3002\u5982\u679c\u6ca1\u6709\u6307\u5b9a\uff0c\u5219\u9ed8\u8ba4\u503c\u4e3a\u8fd9\u5f20\u8868\u7684\u6240\u6709\u5206\u533a\u3002"}),"\n",(0,l.jsx)(n.li,{children:"label: \u4e3a insert \u4f5c\u4e1a\u6307\u5b9a\u4e00\u4e2a Label\uff0cLabel \u662f\u8be5 Insert Into \u5bfc\u5165\u4f5c\u4e1a\u7684\u6807\u8bc6\u3002\u6bcf\u4e2a\u5bfc\u5165\u4f5c\u4e1a\uff0c\u90fd\u6709\u4e00\u4e2a\u5728\u5355 database \u5185\u90e8\u552f\u4e00\u7684 Label\u3002"}),"\n"]}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"\u6ce8\u610f"}),"\uff1a\u5efa\u8bae\u6307\u5b9a Label \u800c\u4e0d\u662f\u7531\u7cfb\u7edf\u81ea\u52a8\u5206\u914d\u3002\u5982\u679c\u7531\u7cfb\u7edf\u81ea\u52a8\u5206\u914d\uff0c\u4f46\u5728 Insert Into \u8bed\u53e5\u6267\u884c\u8fc7\u7a0b\u4e2d\uff0c\u56e0\u7f51\u7edc\u9519\u8bef\u5bfc\u81f4\u8fde\u63a5\u65ad\u5f00\u7b49\uff0c\u5219\u65e0\u6cd5\u5f97\u77e5 Insert Into \u662f\u5426\u6210\u529f\u3002\u800c\u5982\u679c\u6307\u5b9a Label\uff0c\u5219\u53ef\u4ee5\u518d\u6b21\u901a\u8fc7 Label \u67e5\u770b\u4efb\u52a1\u7ed3\u679c\u3002"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"column_name: \u6307\u5b9a\u7684\u76ee\u7684\u5217\uff0c\u5fc5\u987b\u662f table_name \u4e2d\u5b58\u5728\u7684\u5217\u3002\u5bfc\u5165\u8868\u7684\u76ee\u6807\u5217\uff0c\u53ef\u4ee5\u4ee5\u4efb\u610f\u7684\u987a\u5e8f\u5b58\u5728\u3002\u5982\u679c\u6ca1\u6709\u6307\u5b9a\u76ee\u6807\u5217\uff0c\u90a3\u4e48\u9ed8\u8ba4\u503c\u662f\u8fd9\u5f20\u8868\u7684\u6240\u6709\u5217\u3002\u5982\u679c\u5bfc\u5165\u8868\u4e2d\u7684\u67d0\u4e2a\u5217\u4e0d\u5728\u76ee\u6807\u5217\u4e2d\uff0c\u90a3\u4e48\u8fd9\u4e2a\u5217\u9700\u8981\u6709\u9ed8\u8ba4\u503c\uff0c\u5426\u5219 Insert Into \u4f1a\u5931\u8d25\u3002\u5982\u679c\u67e5\u8be2\u8bed\u53e5\u7684\u7ed3\u679c\u5217\u7c7b\u578b\u4e0e\u76ee\u6807\u5217\u7684\u7c7b\u578b\u4e0d\u4e00\u81f4\uff0c\u90a3\u4e48\u4f1a\u8c03\u7528\u9690\u5f0f\u7c7b\u578b\u8f6c\u5316\uff0c\u5982\u679c\u4e0d\u80fd\u8fdb\u884c\u8f6c\u5316\uff0c\u90a3\u4e48 Insert Into \u8bed\u53e5\u4f1a\u62a5\u8bed\u6cd5\u89e3\u6790\u9519\u8bef\u3002"}),"\n",(0,l.jsx)(n.li,{children:"expression\uff1a\u9700\u8981\u8d4b\u503c\u7ed9\u67d0\u4e2a\u5217\u7684\u5bf9\u5e94\u8868\u8fbe\u5f0f\u3002"}),"\n",(0,l.jsx)(n.li,{children:"default\uff1a\u8ba9\u5bf9\u5e94\u5217\u4f7f\u7528\u9ed8\u8ba4\u503c\u3002"}),"\n",(0,l.jsx)(n.li,{children:"query\uff1a\u4e00\u4e2a\u666e\u901a\u67e5\u8be2\uff0c\u67e5\u8be2\u7684\u7ed3\u679c\u4f1a\u5199\u5165\u5230\u76ee\u6807\u4e2d\u3002\u67e5\u8be2\u8bed\u53e5\u652f\u6301\u4efb\u610f StarRocks \u652f\u6301\u7684 SQL \u67e5\u8be2\u8bed\u6cd5\u3002"}),"\n",(0,l.jsx)(n.li,{children:"values\uff1a\u7528\u6237\u53ef\u4ee5\u901a\u8fc7 VALUES \u8bed\u6cd5\u63d2\u5165\u4e00\u6761\u6216\u8005\u591a\u6761\u6570\u636e\u3002"}),"\n"]}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"\u6ce8\u610f"}),"\uff1aVALUES \u65b9\u5f0f\u4ec5\u9002\u7528\u4e8e\u5bfc\u5165\u51e0\u6761\u6570\u636e\u4f5c\u4e3a DEMO \u7684\u60c5\u51b5\uff0c\u5b8c\u5168\u4e0d\u9002\u7528\u4e8e\u4efb\u4f55\u6d4b\u8bd5\u548c\u751f\u4ea7\u73af\u5883\u3002StarRocks \u7cfb\u7edf\u672c\u8eab\u4e5f\u4e0d\u9002\u5408\u5355\u6761\u6570\u636e\u5bfc\u5165\u7684\u573a\u666f\u3002\u5efa\u8bae\u4f7f\u7528 INSERT INTO SELECT \u7684\u65b9\u5f0f\u8fdb\u884c\u6279\u91cf\u5bfc\u5165\u3002"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"\u5bfc\u5165\u7ed3\u679c",children:"\u5bfc\u5165\u7ed3\u679c"}),"\n",(0,l.jsx)(n.p,{children:"Insert Into \u672c\u8eab\u5c31\u662f\u4e00\u4e2a SQL \u547d\u4ee4\uff0c\u5176\u8fd4\u56de\u7ed3\u679c\u4f1a\u6839\u636e\u6267\u884c\u7ed3\u679c\u7684\u4e0d\u540c\uff0c\u5206\u4e3a\u4ee5\u4e0b\u51e0\u79cd\uff1a"}),"\n",(0,l.jsx)(n.p,{children:"\u6267\u884c\u6210\u529f"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"mysql> insert into tbl1 select * from empty_tbl;\nQuery OK, 0 rows affected (0.02 sec)\n\nmysql> insert into tbl1 select * from tbl2;\nQuery OK, 4 rows affected (0.38 sec)\n{'label':'insert_8510c568-9eda-4173-9e36-6adc7d35291c', 'status':'visible', 'txnId':'4005'}\n\nmysql> insert into tbl1 with label my_label1 select * from tbl2;\nQuery OK, 4 rows affected (0.38 sec)\n{'label':'my_label1', 'status':'visible', 'txnId':'4005'}\n\nmysql> insert into tbl1 select * from tbl2;\nQuery OK, 2 rows affected, 2 warnings (0.31 sec)\n{'label':'insert_f0747f0e-7a35-46e2-affa-13a235f4020d', 'status':'visible', 'txnId':'4005'}\n\nmysql> insert into tbl1 select * from tbl2;\nQuery OK, 2 rows affected, 2 warnings (0.31 sec)\n{'label':'insert_f0747f0e-7a35-46e2-affa-13a235f4020d', 'status':'committed', 'txnId':'4005'}\n\n"})}),"\n",(0,l.jsx)(n.p,{children:"rows affected \u8868\u793a\u603b\u5171\u6709\u591a\u5c11\u884c\u6570\u636e\u88ab\u5bfc\u5165\u3002warnings \u8868\u793a\u88ab\u8fc7\u6ee4\u7684\u884c\u6570\u3002"}),"\n",(0,l.jsx)(n.p,{children:"label \u4e3a\u7528\u6237\u6307\u5b9a\u7684 label \u6216\u81ea\u52a8\u751f\u6210\u7684 label\u3002Label \u662f\u8be5 Insert Into \u5bfc\u5165\u4f5c\u4e1a\u7684\u6807\u8bc6\u3002\u6bcf\u4e2a\u5bfc\u5165\u4f5c\u4e1a\uff0c\u90fd\u6709\u4e00\u4e2a\u5728\u5355 database \u5185\u90e8\u552f\u4e00\u7684 Label\u3002"}),"\n",(0,l.jsx)(n.p,{children:"status \u8868\u793a\u5bfc\u5165\u6570\u636e\u662f\u5426\u53ef\u89c1\u3002\u5982\u679c\u53ef\u89c1\uff0c\u663e\u793a visible\uff0c\u5982\u679c\u4e0d\u53ef\u89c1\uff0c\u663e\u793a committed\u3002\ntxnId \u4e3a\u8fd9\u4e2a insert \u5bf9\u5e94\u7684\u5bfc\u5165\u4e8b\u52a1\u7684 id\u3002"}),"\n",(0,l.jsx)(n.p,{children:"err \u5b57\u6bb5\u4f1a\u663e\u793a\u4e00\u4e9b\u5176\u4ed6\u975e\u9884\u671f\u9519\u8bef\u3002\u5f53\u9700\u8981\u67e5\u770b\u88ab\u8fc7\u6ee4\u7684\u884c\u65f6\uff0c\u7528\u6237\u53ef\u4ee5\u4f7f\u7528\u5982\u4e0b\u8bed\u53e5\u3002\u8fd4\u56de\u7ed3\u679c\u4e2d\u7684 URL \u53ef\u4ee5\u7528\u4e8e\u67e5\u8be2\u9519\u8bef\u7684\u6570\u636e\u3002"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'SHOW LOAD WHERE label="xxx";\n'})}),"\n",(0,l.jsx)(n.p,{children:"\u6267\u884c\u5931\u8d25"}),"\n",(0,l.jsx)(n.p,{children:"\u6267\u884c\u5931\u8d25\u8868\u793a\u6ca1\u6709\u4efb\u4f55\u6570\u636e\u88ab\u6210\u529f\u5bfc\u5165\uff0c\u5e76\u8fd4\u56de\u5982\u4e0b\uff1a"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'mysql> insert into tbl1 select * from tbl2 where k1 = "a";\n\nERROR 1064 (HY000): all partitions have no load data. url: [http://10.74.167.16:8042/api/_load_error_log?file=__shard_2/error_log_insert_stmt_ba8bb9e158e4879-ae8de8507c0bf8a2_ba8bb9e158e4879_ae8de8507c0bf8a2](http://10.74.167.16:8042/api/_load_error_log?file=__shard_2/error_log_insert_stmt_ba8bb9e158e4879-ae8de8507c0bf8a2_ba8bb9e158e4879_ae8de8507c0bf8a2)\n\n'})}),"\n",(0,l.jsx)(n.p,{children:"\u5176\u4e2d ERROR 1064 (HY000): all partitions have no load data \u663e\u793a\u5931\u8d25\u539f\u56e0\u3002\u540e\u9762\u7684 url \u53ef\u4ee5\u7528\u4e8e\u67e5\u8be2\u9519\u8bef\u7684\u6570\u636e\u3002"}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h2,{id:"\u76f8\u5173\u914d\u7f6e",children:"\u76f8\u5173\u914d\u7f6e"}),"\n",(0,l.jsx)(n.h3,{id:"fe-\u914d\u7f6e",children:"FE \u914d\u7f6e"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"timeout\uff1a\u5bfc\u5165\u4efb\u52a1\u7684\u8d85\u65f6\u65f6\u95f4(\u4ee5\u79d2\u4e3a\u5355\u4f4d)\u3002\u5bfc\u5165\u4efb\u52a1\u5728\u8bbe\u5b9a\u7684 timeout \u65f6\u95f4\u5185\u672a\u5b8c\u6210\u5219\u4f1a\u88ab\u7cfb\u7edf\u53d6\u6d88\uff0c\u53d8\u6210 CANCELLED\u3002\u76ee\u524d Insert Into \u5e76\u4e0d\u652f\u6301\u81ea\u5b9a\u4e49\u5bfc\u5165\u7684 timeout \u65f6\u95f4\uff0c\u6240\u6709 Insert Into \u5bfc\u5165\u7684\u8d85\u65f6\u65f6\u95f4\u662f\u7edf\u4e00\u7684\uff0c\u9ed8\u8ba4\u7684 timeout \u65f6\u95f4\u4e3a1\u5c0f\u65f6\u3002\u5982\u679c\u5bfc\u5165\u4efb\u52a1\u65e0\u6cd5\u5728\u89c4\u5b9a\u65f6\u95f4\u5185\u5b8c\u6210\uff0c\u5219\u9700\u8981\u8c03\u6574FE\u7684\u53c2\u6570insert_load_default_timeout_second\u3002"}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"session-\u53d8\u91cf",children:"Session \u53d8\u91cf"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"enable_insert_strict\uff1aInsert Into \u5bfc\u5165\u672c\u8eab\u4e0d\u80fd\u63a7\u5236\u5bfc\u5165\u53ef\u5bb9\u5fcd\u7684\u9519\u8bef\u7387\u3002\u7528\u6237\u53ea\u80fd\u901a\u8fc7 enable_insert_strict \u8fd9\u4e2a Session \u53c2\u6570\u7528\u6765\u63a7\u5236\u3002\u5f53\u8be5\u53c2\u6570\u8bbe\u7f6e\u4e3a false \u65f6\uff0c\u8868\u793a\u81f3\u5c11\u6709\u4e00\u6761\u6570\u636e\u88ab\u6b63\u786e\u5bfc\u5165\uff0c\u5219\u8fd4\u56de\u6210\u529f\u3002\u5982\u679c\u6709\u5931\u8d25\u6570\u636e\uff0c\u5219\u8fd8\u4f1a\u8fd4\u56de\u4e00\u4e2a Label\u3002\u5f53\u8be5\u53c2\u6570\u8bbe\u7f6e\u4e3a true \u65f6\uff0c\u8868\u793a\u5982\u679c\u6709\u4e00\u6761\u6570\u636e\u9519\u8bef\uff0c\u5219\u5bfc\u5165\u5931\u8d25\u3002\u8be5\u53c2\u6570\u9ed8\u8ba4\u4e3a true\u3002\u53ef\u901a\u8fc7 SET enable_insert_strict = false; \u6765\u8bbe\u7f6e\u3002"}),"\n",(0,l.jsx)(n.li,{children:"query_timeout\uff1aInsert Into \u672c\u8eab\u4e5f\u662f\u4e00\u4e2a SQL \u547d\u4ee4\uff0c\u56e0\u6b64 Insert Into \u8bed\u53e5\u4e5f\u53d7\u5230 Session \u53d8\u91cf query_timeout \u7684\u9650\u5236\u3002\u53ef\u4ee5\u901a\u8fc7 SET query_timeout = xxx; \u6765\u589e\u52a0\u8d85\u65f6\u65f6\u95f4\uff0c\u5355\u4f4d\u662f\u300c\u79d2\u300d\u3002"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\u5bfc\u5165\u793a\u4f8b",children:"\u5bfc\u5165\u793a\u4f8b"}),"\n",(0,l.jsx)(n.h3,{id:"\u521b\u5efa\u6570\u636e\u5e93\u4e0e\u6570\u636e\u8868",children:"\u521b\u5efa\u6570\u636e\u5e93\u4e0e\u6570\u636e\u8868"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"mysql> CREATE DATABASE IF NOT EXISTS load_test;\nmysql> USE load_test;\nmysql> CREATE TABLE insert_wiki_edit\n(\n    event_time DATETIME,\n    channel VARCHAR(32) DEFAULT '',\n    user VARCHAR(128) DEFAULT '',\n    is_anonymous TINYINT DEFAULT '0',\n    is_minor TINYINT DEFAULT '0',\n    is_new TINYINT DEFAULT '0',\n    is_robot TINYINT DEFAULT '0',\n    is_unpatrolled TINYINT DEFAULT '0',\n    delta INT SUM DEFAULT '0',\n    added INT SUM DEFAULT '0',\n    deleted INT SUM DEFAULT '0'\n)\nAGGREGATE KEY(event_time, channel, user, is_anonymous, is_minor, is_new, is_robot, is_unpatrolled)\nPARTITION BY RANGE(event_time)\n(\n    PARTITION p06 VALUES LESS THAN ('2015-09-12 06:00:00'),\n    PARTITION p12 VALUES LESS THAN ('2015-09-12 12:00:00'),\n    PARTITION p18 VALUES LESS THAN ('2015-09-12 18:00:00'),\n    PARTITION p24 VALUES LESS THAN ('2015-09-13 00:00:00')\n)\nDISTRIBUTED BY HASH(user) BUCKETS 10\nPROPERTIES(\"replication_num\" = \"1\");\n\n"})}),"\n",(0,l.jsx)(n.h3,{id:"\u901a\u8fc7values\u5bfc\u5165\u6570\u636e",children:"\u901a\u8fc7values\u5bfc\u5165\u6570\u636e"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"mysql> INSERT INTO insert_wiki_edit VALUES(\"2015-09-12 00:00:00\",\"#en.wikipedia\",\"GELongstreet\",0,0,0,0,0,36,36,0),(\"2015-09-12 00:00:00\",\"#ca.wikipedia\",\"PereBot\",0,1,0,1,0,17,17,0);\nQuery OK, 2 rows affected (0.29 sec)\n{'label':'insert_1f12c916-5ff8-4ba9-8452-6fc37fac2e75', 'status':'VISIBLE', 'txnId':'601'}\n\n"})}),"\n",(0,l.jsx)(n.h3,{id:"\u901a\u8fc7select\u5bfc\u5165\u6570\u636e",children:"\u901a\u8fc7select\u5bfc\u5165\u6570\u636e"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"mysql> INSERT INTO insert_wiki_edit WITH LABEL insert_load_wikipedia SELECT * FROM routine_wiki_edit; \nQuery OK, 18203 rows affected (0.40 sec)\n{'label':'insert_load_wikipedia', 'status':'VISIBLE', 'txnId':'618'}\n\n"})}),"\n",(0,l.jsx)(n.h2,{id:"\u6ce8\u610f\u4e8b\u9879",children:"\u6ce8\u610f\u4e8b\u9879"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u5f53\u524d\u6267\u884c INSERT \u8bed\u53e5\u65f6\uff0c\u5bf9\u4e8e\u6709\u4e0d\u7b26\u5408\u76ee\u6807\u8868\u683c\u5f0f\u7684\u6570\u636e\uff0c\u9ed8\u8ba4\u7684\u884c\u4e3a\u662f\u8fc7\u6ee4\uff0c\u6bd4\u5982\u5b57\u7b26\u4e32\u8d85\u957f\u7b49\u3002\u4f46\u662f\u5bf9\u4e8e\u8981\u6c42\u6570\u636e\u4e0d\u80fd\u591f\u88ab\u8fc7\u6ee4\u7684\u4e1a\u52a1\u573a\u666f\uff0c\u53ef\u4ee5\u901a\u8fc7\u8bbe\u7f6e\u4f1a\u8bdd\u53d8\u91cf enable_insert_strict \u4e3a true \u6765\u786e\u4fdd\u5f53\u6709\u6570\u636e\u88ab\u8fc7\u6ee4\u6389\u7684\u65f6\u5019\uff0cINSERT \u4e0d\u4f1a\u6210\u529f\u6267\u884c\u3002"}),"\n",(0,l.jsx)(n.li,{children:"\u56e0\u4e3aStarRocks\u7684insert\u590d\u7528\u5bfc\u5165\u6570\u636e\u7684\u903b\u8f91\uff0c\u6240\u4ee5\u6bcf\u4e00\u6b21insert\u8bed\u53e5\u90fd\u4f1a\u4ea7\u751f\u4e00\u4e2a\u65b0\u7684\u6570\u636e\u7248\u672c\u3002\u9891\u7e41\u5c0f\u6279\u91cf\u5bfc\u5165\u64cd\u4f5c\u4f1a\u4ea7\u751f\u8fc7\u591a\u7684\u6570\u636e\u7248\u672c\uff0c\u800c\u8fc7\u591a\u7684\u5c0f\u7248\u672c\u4f1a\u5f71\u54cd\u67e5\u8be2\u7684\u6027\u80fd\u3002\u6240\u4ee5\u5e76\u4e0d\u5efa\u8bae\u9891\u7e41\u7684\u4f7f\u7528insert\u8bed\u6cd5\u5bfc\u5165\u6570\u636e\u6216\u4f5c\u4e3a\u751f\u4ea7\u73af\u5883\u7684\u65e5\u5e38\u4f8b\u884c\u5bfc\u5165\u4efb\u52a1\u3002\u5982\u679c\u6709\u6d41\u5f0f\u5bfc\u5165\u6216\u8005\u5c0f\u6279\u91cf\u5bfc\u5165\u4efb\u52a1\u7684\u9700\u6c42\uff0c\u53ef\u4ee5\u4f7f\u7528Stream Load\u6216\u8005Routine Load\u7684\u65b9\u5f0f\u8fdb\u884c\u5bfc\u5165\u3002"}),"\n"]})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?(0,l.jsx)(n,Object.assign({},e,{children:(0,l.jsx)(c,e)})):c(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>a,ah:()=>i});var l=s(67294);const t=l.createContext({});function i(e){const n=l.useContext(t);return l.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const r={};function a({components:e,children:n,disableParentContext:s}){let a;return a=s?"function"==typeof e?e({}):e||r:i(e),l.createElement(t.Provider,{value:a},n)}}}]);