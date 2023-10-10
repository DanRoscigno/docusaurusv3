"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[20947],{45822:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>t,contentTitle:()=>a,default:()=>E,frontMatter:()=>c,metadata:()=>i,toc:()=>o});var l=s(85893),r=s(11151);const c={},a="UPDATE",i={id:"sql-reference/sql-statements/data-manipulation/UPDATE",title:"UPDATE",description:"\u8be5\u8bed\u53e5\u7528\u4e8e\u66f4\u65b0\u4e00\u5f20\u4e3b\u952e\u6a21\u578b\u8868\u4e2d\u7684\u6570\u636e\u884c\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.1/sql-reference/sql-statements/data-manipulation/UPDATE.md",sourceDirName:"sql-reference/sql-statements/data-manipulation",slug:"/sql-reference/sql-statements/data-manipulation/UPDATE",permalink:"/docusaurusv3/zh/docs/sql-reference/sql-statements/data-manipulation/UPDATE",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-statements/data-manipulation/UPDATE.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"SUBMIT TASK",permalink:"/docusaurusv3/zh/docs/sql-reference/sql-statements/data-manipulation/SUBMIT TASK"},next:{title:"ALTER ROUTINE LOAD",permalink:"/docusaurusv3/zh/docs/sql-reference/sql-statements/data-manipulation/alter-routine-load"}},t={},o=[{value:"\u4f7f\u7528\u8bf4\u660e",id:"\u4f7f\u7528\u8bf4\u660e",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u5217\u6a21\u5f0f\u7684\u90e8\u5206\u66f4\u65b0\uff08\u81ea 3.1\uff09",id:"\u5217\u6a21\u5f0f\u7684\u90e8\u5206\u66f4\u65b0\u81ea-31",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u5355\u8868 UPDATE",id:"\u5355\u8868-update",level:3},{value:"\u591a\u8868 UPDATE",id:"\u591a\u8868-update",level:3}];function d(e){const n=Object.assign({h1:"h1",p:"p",h2:"h2",code:"code",strong:"strong",pre:"pre",a:"a",ul:"ul",li:"li",h3:"h3"},(0,r.ah)(),e.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h1,{id:"update",children:"UPDATE"}),"\n",(0,l.jsx)(n.p,{children:"\u8be5\u8bed\u53e5\u7528\u4e8e\u66f4\u65b0\u4e00\u5f20\u4e3b\u952e\u6a21\u578b\u8868\u4e2d\u7684\u6570\u636e\u884c\u3002"}),"\n",(0,l.jsx)(n.p,{children:"3.0 \u7248\u672c\u4e4b\u524d\uff0cUPDATE \u8bed\u53e5\u4ec5\u652f\u6301\u5355\u8868 UPDATE \u4e14\u4e0d\u652f\u6301\u516c\u7528\u8868\u8868\u8fbe\u5f0f\uff08CTE\uff09\u3002\u4ece 3.0 \u7248\u672c\u5f00\u59cb\uff0cStarRocks \u4e30\u5bcc\u4e86 UPDATE \u8bed\u6cd5\uff0c\u652f\u6301\u4f7f\u7528\u591a\u8868\u5173\u8054\u548c CTE\u3002\u5982\u679c\u9700\u8981\u5c06\u5f85\u66f4\u65b0\u7684\u8868\u4e0e\u6570\u636e\u5e93\u4e2d\u5176\u4ed6\u8868\u5173\u8054\uff0c\u5219\u53ef\u4ee5\u5728 FROM \u5b50\u53e5\u6216 CTE \u4e2d\u5f15\u7528\u5176\u4ed6\u7684\u8868\u3002\u4ece 3.1 \u7248\u672c\u5f00\u59cb\uff0c\u652f\u6301\u5217\u6a21\u5f0f\u7684\u90e8\u5206\u66f4\u65b0\uff0c\u9002\u7528\u4e8e\u6d89\u53ca\u5c11\u6570\u5217\u4f46\u662f\u5927\u91cf\u884c\u7684\u573a\u666f\uff0c\u52a0\u5feb\u66f4\u65b0\u901f\u5ea6\u3002"}),"\n",(0,l.jsx)(n.h2,{id:"\u4f7f\u7528\u8bf4\u660e",children:"\u4f7f\u7528\u8bf4\u660e"}),"\n",(0,l.jsxs)(n.p,{children:["\u5982\u679c\u4e3a\u591a\u8868 UPDATE\uff0c\u5219\u60a8\u9700\u8981\u786e\u4fdd UPDATE \u8bed\u53e5\u4e2d FROM \u5b50\u53e5\u7684\u8868\u8868\u8fbe\u5f0f\u53ef\u4ee5\u8f6c\u6362\u6210\u7b49\u4ef7\u7684 JOIN \u67e5\u8be2\u8bed\u53e5\u3002\u56e0\u4e3a StarRocks \u5b9e\u9645\u6267\u884c UPDATE \u8bed\u53e5\u65f6\uff0c\u5185\u90e8\u4f1a\u8fdb\u884c\u8fd9\u6837\u7684\u8f6c\u6362\u3002\u5047\u8bbe UPDATE \u8bed\u53e5\u4e3a ",(0,l.jsx)(n.code,{children:"UPDATE t0 SET v1=t1.v1 FROM t1 WHERE t0.pk = t1.pk;"}),"\uff0c\u8be5 FROM \u5b50\u53e5\u7684\u8868\u8868\u8fbe\u5f0f\u53ef\u4ee5\u8f6c\u6362\u4e3a ",(0,l.jsx)(n.code,{children:"t0 JOIN t1 ON t0.pk=t1.pk;"}),"\u3002\u5e76\u4e14 StarRocks \u6839\u636e JOIN \u67e5\u8be2\u7684\u7ed3\u679c\u96c6\uff0c\u5339\u914d\u5f85\u66f4\u65b0\u8868\u7684\u6570\u636e\u884c\uff0c\u66f4\u65b0\u5176\u6307\u5b9a\u5217\u7684\u503c\u3002\u5982\u679c\u7ed3\u679c\u96c6\u4e2d\u5b58\u5728\u591a\u884c\u6570\u636e\u548c\u5f85\u66f4\u65b0\u8868\u7684\u67d0\u4e00\u884c\u6570\u636e\u76f8\u5339\u914d\uff0c\u5219\u5f85\u66f4\u65b0\u8868\u4e2d\u8fd9\u884c\u6570\u636e\u6307\u5b9a\u5217\u66f4\u65b0\u540e\u7684\u503c\uff0c\u662f\u7ed3\u679c\u96c6\u591a\u884c\u6570\u636e\u4e2d\u968f\u673a\u4e00\u884c\u7684\u6307\u5b9a\u5217\u7684\u503c\u3002"]}),"\n",(0,l.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u5355\u8868 UPDATE"})}),"\n",(0,l.jsx)(n.p,{children:"\u5982\u679c\u5f85\u66f4\u65b0\u8868\u7684\u6570\u636e\u884c\u6ee1\u8db3 WHERE \u6761\u4ef6\uff0c\u5219\u5bf9\u8be5\u6570\u636e\u884c\u7684\u6307\u5b9a\u5217\u8d4b\u4e88\u65b0\u503c\u3002"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-SQL",children:"[ WITH <with_query> [, ...] ]\nUPDATE <table_name>\n    SET <column_name> = <expression> [, ...]\n    WHERE <where_condition>\n"})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u591a\u8868 UPDATE"})}),"\n",(0,l.jsx)(n.p,{children:"\u57fa\u4e8e\u591a\u8868\u5173\u8054\u67e5\u8be2\u7684\u7ed3\u679c\u96c6\u4e0e\u5f85\u66f4\u65b0\u7684\u8868\u8fdb\u884c\u5339\u914d\uff0c\u5982\u679c\u5f85\u66f4\u65b0\u8868\u7684\u6570\u636e\u884c\u5339\u914d\u7ed3\u679c\u96c6\u5e76\u4e14\u6ee1\u8db3 WHERE \u6761\u4ef6\uff0c\u5219\u5bf9\u8be5\u6570\u636e\u884c\u7684\u6307\u5b9a\u5217\u8d4b\u4e88\u65b0\u503c\u3002"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-SQL",children:"[ WITH <with_query> [, ...] ]\nUPDATE <table_name>\n    SET <column_name> = <expression> [, ...]\n    [ FROM <from_item> [, ...] ]\n    WHERE <where_condition>\n"})}),"\n",(0,l.jsx)(n.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"with_query"})}),"\n",(0,l.jsx)(n.p,{children:"\u4e00\u4e2a\u6216\u591a\u4e2a\u53ef\u4ee5\u5728 UPDATE \u8bed\u53e5\u4e2d\u901a\u8fc7\u540d\u5b57\u5f15\u7528\u7684 CTE\u3002CTE \u662f\u4e00\u4e2a\u4e34\u65f6\u7ed3\u679c\u96c6\uff0c\u53ef\u4ee5\u63d0\u9ad8\u590d\u6742\u8bed\u53e5\u7684\u6613\u8bfb\u6027\u3002"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"table_name"})}),"\n",(0,l.jsx)(n.p,{children:"\u5f85\u66f4\u65b0\u7684\u8868\u7684\u540d\u79f0\u3002"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"column_name"})}),"\n",(0,l.jsxs)(n.p,{children:["\u5f85\u66f4\u65b0\u7684\u5217\u7684\u540d\u79f0\u3002\u4e0d\u9700\u8981\u5305\u542b\u8868\u540d\uff0c\u4f8b\u5982 ",(0,l.jsx)(n.code,{children:"UPDATE t1 SET t1.col = 1"})," \u662f\u4e0d\u5408\u6cd5\u7684\u3002"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"expression"})}),"\n",(0,l.jsx)(n.p,{children:"\u7ed9\u5217\u8d4b\u503c\u7684\u8868\u8fbe\u5f0f\u3002"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"from_item"})}),"\n",(0,l.jsxs)(n.p,{children:["\u5f15\u7528\u6570\u636e\u5e93\u4e2d\u4e00\u4e2a\u6216\u8005\u591a\u4e2a\u5176\u4ed6\u7684\u8868\u3002\u8be5\u8868\u4e0e\u5f85\u66f4\u65b0\u7684\u8868\u8fdb\u884c\u8fde\u63a5\uff0cWHERE \u5b50\u53e5\u6307\u5b9a\u8fde\u63a5\u6761\u4ef6\uff0c\u6700\u7ec8\u57fa\u4e8e\u8fde\u63a5\u67e5\u8be2\u7684\u7ed3\u679c\u96c6\u7ed9\u5f85\u66f4\u65b0\u7684\u8868\u4e2d\u5339\u914d\u884c\u7684\u5217\u8d4b\u503c\u3002 \u4f8b\u5982 FROM \u5b50\u53e5\u4e3a ",(0,l.jsx)(n.code,{children:"FROM t1 WHERE t0.pk = t1.pk;"}),"\uff0cStarRocks \u5b9e\u9645\u6267\u884c UPDATE \u8bed\u53e5\u65f6\u4f1a\u5c06\u8be5 FROM \u5b50\u53e5\u7684\u8868\u8868\u8fbe\u5f0f\u4f1a\u8f6c\u6362\u4e3a ",(0,l.jsx)(n.code,{children:"t0 JOIN t1 ON t0.pk=t1.pk;"}),"\u3002"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"where_condition"})}),"\n",(0,l.jsxs)(n.p,{children:["\u53ea\u6709\u6ee1\u8db3 WHERE \u6761\u4ef6\u7684\u884c\u624d\u4f1a\u88ab\u66f4\u65b0\u3002\u8be5\u53c2\u6570\u4e3a\u5fc5\u9009\uff0c\u9632\u6b62\u8bef\u66f4\u65b0\u6574\u5f20\u8868\u3002\u5982\u9700\u66f4\u65b0\u6574\u5f20\u8868\uff0c\u8bf7\u4f7f\u7528 ",(0,l.jsx)(n.code,{children:"WHERE true"}),"\u3002\u5982\u679c\u4f7f\u7528",(0,l.jsx)(n.a,{href:"#%E5%88%97%E6%A8%A1%E5%BC%8F%E7%9A%84%E9%83%A8%E5%88%86%E6%9B%B4%E6%96%B0%E8%87%AA-31",children:"\u5217\u6a21\u5f0f\u7684\u90e8\u5206\u66f4\u65b0"}),"\uff0c\u5219\u8be5\u53c2\u6570\u4e0d\u662f\u5fc5\u9009\u3002"]}),"\n",(0,l.jsx)(n.h2,{id:"\u5217\u6a21\u5f0f\u7684\u90e8\u5206\u66f4\u65b0\u81ea-31",children:"\u5217\u6a21\u5f0f\u7684\u90e8\u5206\u66f4\u65b0\uff08\u81ea 3.1\uff09"}),"\n",(0,l.jsx)(n.p,{children:"\u5217\u6a21\u5f0f\u7684\u90e8\u5206\u66f4\u65b0\u9002\u7528\u4e8e\u6d89\u53ca\u5c11\u6570\u5217\u5e76\u4e14\u5927\u91cf\u884c\u7684\u573a\u666f\u3002\u5728\u8be5\u573a\u666f\uff0c\u5f00\u542f\u5217\u6a21\u5f0f\uff0c\u66f4\u65b0\u901f\u5ea6\u66f4\u5feb\u3002\u4f8b\u5982\uff0c\u5728\u4e00\u4e2a\u5305\u542b 100 \u5217\u7684\u8868\u4e2d\uff0c\u6bcf\u6b21\u66f4\u65b0 10 \u5217\uff08\u5360\u6bd4 10%\uff09\u5e76\u66f4\u65b0\u6240\u6709\u884c\uff0c\u5219\u5f00\u542f\u5217\u6a21\u5f0f\uff0c\u66f4\u65b0\u6027\u80fd\u5c06\u63d0\u9ad8 10 \u500d\u3002"}),"\n",(0,l.jsxs)(n.p,{children:["\u7cfb\u7edf\u53d8\u91cf ",(0,l.jsx)(n.code,{children:"partial_update_mode"})," \u7528\u4e8e\u63a7\u5236\u90e8\u5206\u66f4\u65b0\u7684\u6a21\u5f0f\uff0c\u652f\u6301\u53d6\u503c\u4e3a\uff1a"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"auto"}),"\uff08\u9ed8\u8ba4\u503c\uff09\uff0c\u8868\u793a\u7531\u7cfb\u7edf\u901a\u8fc7\u5206\u6790\u66f4\u65b0\u8bed\u53e5\u4ee5\u53ca\u5176\u6d89\u53ca\u7684\u5217\uff0c\u81ea\u52a8\u5224\u65ad\u6267\u884c\u90e8\u5206\u66f4\u65b0\u65f6\u4f7f\u7528\u7684\u6a21\u5f0f\u3002\u5982\u679c\u6ee1\u8db3\u5982\u4e0b\u6807\u51c6\uff0c\u5219\u7cfb\u7edf\u81ea\u52a8\u4f7f\u7528\u5217\u6a21\u5f0f\uff1a","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u66f4\u65b0\u7684\u5217\u6570\u5360\u6240\u6709\u5217\u6570\u7684\u767e\u5206\u6bd4\u5c0f\u4e8e 30%\uff0c\u5e76\u4e14\u66f4\u65b0\u7684\u5217\u6570\u5c11\u4e8e 4 \u4e2a\u3002"}),"\n",(0,l.jsx)(n.li,{children:"\u66f4\u65b0\u8bed\u53e5\u4e2d\u6ca1\u6709\u4f7f\u7528 WHERE \u6761\u4ef6\u3002\n\u53cd\u4e4b\uff0c\u5219\u7cfb\u7edf\u4e0d\u4f1a\u4f7f\u7528\u5217\u6a21\u5f0f\u3002"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"column"}),"\uff0c\u6307\u5b9a\u4f7f\u7528\u5217\u6a21\u5f0f\u6267\u884c\u90e8\u5206\u66f4\u65b0\uff0c\u6bd4\u8f83\u9002\u7528\u4e8e\u6d89\u53ca\u5c11\u6570\u5217\u5e76\u4e14\u5927\u91cf\u884c\u7684\u90e8\u5206\u5217\u66f4\u65b0\u573a\u666f\u3002"]}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["\u60a8\u53ef\u4ee5\u4f7f\u7528 ",(0,l.jsx)(n.code,{children:"EXPLAIN UPDATE xxx"})," \u67e5\u770b\u6267\u884c\u90e8\u5206\u5217\u66f4\u65b0\u7684\u6a21\u5f0f\u3002"]}),"\n",(0,l.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,l.jsx)(n.h3,{id:"\u5355\u8868-update",children:"\u5355\u8868 UPDATE"}),"\n",(0,l.jsxs)(n.p,{children:["\u521b\u5efa\u8868 ",(0,l.jsx)(n.code,{children:"Employees"})," \u6765\u8bb0\u5f55\u96c7\u5458\u4fe1\u606f\uff0c\u5411\u8868\u4e2d\u63d2\u5165\u4e94\u884c\u6570\u636e\u3002"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-SQL",children:"CREATE TABLE Employees (\n    EmployeeID INT,\n    Name VARCHAR(50),\n    Salary DECIMAL(10, 2)\n)\nPRIMARY KEY (EmployeeID) \nDISTRIBUTED BY HASH (EmployeeID)\nPROPERTIES (\"replication_num\" = \"3\");\n\nINSERT INTO Employees VALUES\n    (1, 'John Doe', 5000),\n    (2, 'Jane Smith', 6000),\n    (3, 'Robert Johnson', 5500),\n    (4, 'Emily Williams', 4500),\n    (5, 'Michael Brown', 7000);\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u5982\u679c\u9700\u8981\u5bf9\u6240\u6709\u5458\u5de5\u52a0\u85aa 10%\uff0c\u5219\u53ef\u4ee5\u6267\u884c\u5982\u4e0b\u8bed\u53e5\uff1a"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-SQL",children:"UPDATE Employees\nSET Salary = Salary * 1.1  -- \u5c06\u85aa\u6c34\u589e\u52a010%\nWHERE true;\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u5982\u679c\u9700\u8981\u5bf9\u85aa\u6c34\u4f4e\u4e8e\u5e73\u5747\u85aa\u6c34\u7684\u5458\u5de5\u52a0\u85aa 10%\uff0c\u5219\u53ef\u4ee5\u6267\u884c\u5982\u4e0b\u8bed\u53e5\uff0c"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-SQL",children:"UPDATE Employees\nSET Salary = Salary * 1.1  -- \u5c06\u85aa\u6c34\u589e\u52a010%\nWHERE Salary < (SELECT AVG(Salary) FROM Employees);\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u60a8\u4e5f\u53ef\u4ee5\u4f7f\u7528 CTE \u6539\u5199\u4e0a\u8ff0\u8bed\u53e5\uff0c\u589e\u52a0\u6613\u8bfb\u6027\u3002"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-SQL",children:"WITH AvgSalary AS (\n    SELECT AVG(Salary) AS AverageSalary\n    FROM Employees\n)\nUPDATE Employees\nSET Salary = Salary * 1.1  -- \u5c06\u85aa\u6c34\u589e\u52a010%\nFROM AvgSalary\nWHERE Employees.Salary < AvgSalary.AverageSalary;\n"})}),"\n",(0,l.jsx)(n.h3,{id:"\u591a\u8868-update",children:"\u591a\u8868 UPDATE"}),"\n",(0,l.jsxs)(n.p,{children:["\u521b\u5efa\u8868 ",(0,l.jsx)(n.code,{children:"Accounts"})," \u6765\u8bb0\u5f55\u8d26\u6237\u4fe1\u606f\uff0c\u5411\u8868\u4e2d\u63d2\u5165\u4e09\u884c\u6570\u636e\u3002"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-SQL",children:"CREATE TABLE Accounts (\n    Accounts_id BIGINT NOT NULL,\n    Name VARCHAR(26) NOT NULL,\n    Sales_person VARCHAR(50) NOT NULL\n) \nPRIMARY KEY (Accounts_id)\nDISTRIBUTED BY HASH (Accounts_id)\nPROPERTIES (\"replication_num\" = \"3\");\n\nINSERT INTO Accounts VALUES\n    (1,'Acme Corporation','John Doe'),\n    (2,'Acme Corporation','Robert Johnson'),\n    (3,'Acme Corporation','Lily Swift');\n"})}),"\n",(0,l.jsxs)(n.p,{children:["\u5982\u679c\u9700\u8981\u7ed9\u8868 ",(0,l.jsx)(n.code,{children:"Employees"})," \u4e2d Acme Corporation \u516c\u53f8\u7ba1\u7406\u5e10\u6237\u7684\u5458\u5de5\u52a0\u85aa 10%\uff0c\u5219\u53ef\u4ee5\u6267\u884c\u5982\u4e0b\u8bed\u53e5\uff1a"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-SQL",children:"UPDATE Employees\nSET Salary = Salary * 1.1  -- \u5c06\u85aa\u6c34\u589e\u52a010%\nFROM Accounts\nWHERE Accounts.name = 'Acme Corporation'\n    AND Employees.Name = Accounts.Sales_person;\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u60a8\u4e5f\u53ef\u4ee5\u4f7f\u7528 CTE \u6539\u5199\u4e0a\u8ff0\u8bed\u53e5\uff0c\u589e\u52a0\u6613\u8bfb\u6027\u3002"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-SQL",children:"WITH Acme_Accounts as (\n    SELECT * from Accounts\n    WHERE Accounts.name = 'Acme Corporation'\n)\nUPDATE Employees SET Salary = Salary * 1.1 -- \u5c06\u85aa\u6c34\u589e\u52a010%\nFROM Acme_Accounts\nWHERE Employees.Name = Acme_Accounts.Sales_person;\n"})})]})}const E=function(e={}){const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,l.jsx)(n,Object.assign({},e,{children:(0,l.jsx)(d,e)})):d(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>i,ah:()=>c});var l=s(67294);const r=l.createContext({});function c(e){const n=l.useContext(r);return l.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const a={};function i({components:e,children:n,disableParentContext:s}){let i;return i=s?"function"==typeof e?e({}):e||a:c(e),l.createElement(r.Provider,{value:i},n)}}}]);