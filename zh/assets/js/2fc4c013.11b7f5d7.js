"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[73721],{621:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>x,frontMatter:()=>i,metadata:()=>t,toc:()=>d});var l=s(85893),r=s(11151);const i={displayed_sidebar:"Chinese"},a="CREATE MATERIALIZED VIEW",t={id:"sql-reference/sql-statements/data-definition/CREATE_MATERIALIZED_VIEW",title:"CREATE MATERIALIZED VIEW",description:"description",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.1/sql-reference/sql-statements/data-definition/CREATE_MATERIALIZED_VIEW.md",sourceDirName:"sql-reference/sql-statements/data-definition",slug:"/sql-reference/sql-statements/data-definition/CREATE_MATERIALIZED_VIEW",permalink:"/zh/docs/2.1/sql-reference/sql-statements/data-definition/CREATE_MATERIALIZED_VIEW",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-statements/data-definition/CREATE_MATERIALIZED_VIEW.md",tags:[],version:"2.1",frontMatter:{displayed_sidebar:"Chinese"},sidebar:"Chinese",previous:{title:"CREATE INDEX",permalink:"/zh/docs/2.1/sql-reference/sql-statements/data-definition/CREATE_INDEX"},next:{title:"CREATE REPOSITORY",permalink:"/zh/docs/2.1/sql-reference/sql-statements/data-definition/CREATE_REPOSITORY"}},c={},d=[{value:"description",id:"description",level:2},{value:"example",id:"example",level:2},{value:"keyword",id:"keyword",level:2}];function h(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",pre:"pre",ol:"ol",li:"li",ul:"ul"},(0,r.ah)(),e.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h1,{id:"create-materialized-view",children:"CREATE MATERIALIZED VIEW"}),"\n",(0,l.jsx)(n.h2,{id:"description",children:"description"}),"\n",(0,l.jsx)(n.p,{children:"\u8be5\u8bed\u53e5\u7528\u4e8e\u521b\u5efa\u7269\u5316\u89c6\u56fe\u3002"}),"\n",(0,l.jsx)(n.p,{children:"\u8bf4\u660e:"}),"\n",(0,l.jsxs)(n.p,{children:["\u5f02\u6b65\u8bed\u6cd5\uff0c\u8c03\u7528\u6210\u529f\u540e\u4ec5\u8868\u793a\u521b\u5efa\u7269\u5316\u89c6\u56fe\u7684\u4efb\u52a1\u63d0\u4ea4\u6210\u529f\uff0c\u7528\u6237\u9700\u8981\u5148\u901a\u8fc7 ",(0,l.jsx)(n.code,{children:"show alter table rollup"})," \u6765\u67e5\u770b\u7269\u5316\u89c6\u56fe\u7684\u521b\u5efa\u8fdb\u5ea6\u3002\n\u5728\u663e\u793a FINISHED \u540e\u65e2\u53ef\u901a\u8fc7 ",(0,l.jsx)(n.code,{children:"desc [table_name] all"})," \u547d\u4ee4\u6765\u67e5\u770b\u7269\u5316\u89c6\u56fe\u7684 schema \u4e86\u3002"]}),"\n",(0,l.jsx)(n.p,{children:"\u8bed\u6cd5\uff1a"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'CREATE MATERIALIZED VIEW [MV name] as [query]\n[PROPERTIES ("key" = "value")]\n'})}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"MV name"}),"\n",(0,l.jsx)(n.p,{children:"\u7269\u5316\u89c6\u56fe\u7684\u540d\u79f0\uff0c\u5fc5\u586b\u9879\u3002"}),"\n",(0,l.jsx)(n.p,{children:"\u76f8\u540c\u8868\u7684\u7269\u5316\u89c6\u56fe\u540d\u79f0\u4e0d\u53ef\u91cd\u590d\u3002"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"query"}),"\n",(0,l.jsx)(n.p,{children:"\u7528\u4e8e\u6784\u5efa\u7269\u5316\u89c6\u56fe\u7684\u67e5\u8be2\u8bed\u53e5\uff0c\u67e5\u8be2\u8bed\u53e5\u7684\u7ed3\u679c\u65e2\u7269\u5316\u89c6\u56fe\u7684\u6570\u636e\u3002\u76ee\u524d\u652f\u6301\u7684 query \u683c\u5f0f\u4e3a:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"SELECT select_expr[, select_expr ...]\nFROM [Base view name]\nGROUP BY column_name[, column_name ...]\nORDER BY column_name[, column_name ...]\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u8bed\u6cd5\u548c\u67e5\u8be2\u8bed\u53e5\u8bed\u6cd5\u4e00\u81f4\u3002"}),"\n",(0,l.jsx)(n.p,{children:"select_expr: \u7269\u5316\u89c6\u56fe\u7684 schema \u4e2d\u6240\u6709\u7684\u5217\u3002"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u4ec5\u652f\u6301\u4e0d\u5e26\u8868\u8fbe\u5f0f\u8ba1\u7b97\u7684\u5355\u5217\uff0c\u805a\u5408\u5217\u3002"}),"\n",(0,l.jsx)(n.li,{children:"\u5176\u4e2d\u805a\u5408\u51fd\u6570\u76ee\u524d\u4ec5\u652f\u6301 SUM, MIN, MAX \u4e09\u79cd\uff0c\u4e14\u805a\u5408\u51fd\u6570\u7684\u53c2\u6570\u53ea\u80fd\u662f\u4e0d\u5e26\u8868\u8fbe\u5f0f\u8ba1\u7b97\u7684\u5355\u5217\u3002"}),"\n",(0,l.jsx)(n.li,{children:"\u81f3\u5c11\u5305\u542b\u4e00\u4e2a\u5355\u5217\u3002"}),"\n",(0,l.jsx)(n.li,{children:"\u6240\u6709\u6d89\u53ca\u5230\u7684\u5217\uff0c\u5747\u53ea\u80fd\u51fa\u73b0\u4e00\u6b21\u3002"}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"base view name: \u7269\u5316\u89c6\u56fe\u7684\u539f\u59cb\u8868\u540d\uff0c\u5fc5\u586b\u9879\u3002"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u5fc5\u987b\u662f\u5355\u8868\uff0c\u4e14\u975e\u5b50\u67e5\u8be2"}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"group by: \u7269\u5316\u89c6\u56fe\u7684\u5206\u7ec4\u5217\uff0c\u9009\u586b\u9879\u3002"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u4e0d\u586b\u5219\u6570\u636e\u4e0d\u8fdb\u884c\u5206\u7ec4\u3002"}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"order by: \u7269\u5316\u89c6\u56fe\u7684\u6392\u5e8f\u5217\uff0c\u9009\u586b\u9879\u3002"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u6392\u5e8f\u5217\u7684\u58f0\u660e\u987a\u5e8f\u5fc5\u987b\u548c select_expr \u4e2d\u5217\u58f0\u660e\u987a\u5e8f\u4e00\u81f4\u3002"}),"\n",(0,l.jsx)(n.li,{children:"\u5982\u679c\u4e0d\u58f0\u660e order by\uff0c\u5219\u6839\u636e\u89c4\u5219\u81ea\u52a8\u8865\u5145\u6392\u5e8f\u5217\u3002\n\u5982\u679c\u7269\u5316\u89c6\u56fe\u662f\u805a\u5408\u7c7b\u578b\uff0c\u5219\u6240\u6709\u7684\u5206\u7ec4\u5217\u81ea\u52a8\u8865\u5145\u4e3a\u6392\u5e8f\u5217\u3002\n\u5982\u679c\u7269\u5316\u89c6\u56fe\u662f\u975e\u805a\u5408\u7c7b\u578b\uff0c\u5219\u524d 36 \u4e2a\u5b57\u8282\u81ea\u52a8\u8865\u5145\u4e3a\u6392\u5e8f\u5217\u3002\u5982\u679c\u81ea\u52a8\u8865\u5145\u7684\u6392\u5e8f\u4e2a\u6570\u5c0f\u4e8e3\u4e2a\uff0c\u5219\u524d\u4e09\u4e2a\u4f5c\u4e3a\u6392\u5e8f\u5217\u3002"}),"\n",(0,l.jsx)(n.li,{children:"\u5982\u679c query \u4e2d\u5305\u542b\u5206\u7ec4\u5217\u7684\u8bdd\uff0c\u5219\u6392\u5e8f\u5217\u5fc5\u987b\u548c\u5206\u7ec4\u5217\u4e00\u81f4\u3002"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"properties"}),"\n",(0,l.jsx)(n.p,{children:"\u58f0\u660e\u7269\u5316\u89c6\u56fe\u7684\u4e00\u4e9b\u914d\u7f6e\uff0c\u9009\u586b\u9879\u3002"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'\nPROPERTIES ("key" = "value", "key" = "value" ...)\n'})}),"\n",(0,l.jsx)(n.p,{children:"\u4ee5\u4e0b\u51e0\u4e2a\u914d\u7f6e\uff0c\u5747\u53ef\u58f0\u660e\u5728\u6b64\u5904\uff1a"}),"\n",(0,l.jsx)(n.p,{children:"short_key: \u6392\u5e8f\u5217\u7684\u4e2a\u6570\u3002\ntimeout: \u7269\u5316\u89c6\u56fe\u6784\u5efa\u7684\u8d85\u65f6\u65f6\u95f4\u3002"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"example",children:"example"}),"\n",(0,l.jsx)(n.p,{children:"Base \u8868\u7ed3\u6784\u4e3a"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"mysql> desc duplicate_table;\n+-------+--------+------+------+---------+-------+\n| Field | Type   | Null | Key  | Default | Extra |\n+-------+--------+------+------+---------+-------+\n| k1    | INT    | Yes  | true | N/A     |       |\n| k2    | INT    | Yes  | true | N/A     |       |\n| k3    | BIGINT | Yes  | true | N/A     |       |\n| k4    | BIGINT | Yes  | true | N/A     |       |\n+-------+--------+------+------+---------+-------+\n"})}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u521b\u5efa\u4e00\u4e2a\u4ec5\u5305\u542b\u539f\u59cb\u8868 \uff08k1, k2\uff09\u5217\u7684\u7269\u5316\u89c6\u56fe"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"create materialized view k1_k2 as\nselect k1, k2 from duplicate_table;\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u7269\u5316\u89c6\u56fe\u7684 schema \u5982\u4e0b\u56fe\uff0c\u7269\u5316\u89c6\u56fe\u4ec5\u5305\u542b\u4e24\u5217 k1, k2 \u4e14\u4e0d\u5e26\u4efb\u4f55\u805a\u5408"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-plain",metastring:"text",children:"+-----------------+-------+--------+------+------+---------+-------+\n| IndexName       | Field | Type   | Null | Key  | Default | Extra |\n+-----------------+-------+--------+------+------+---------+-------+\n| k1_k2           | k1    | INT    | Yes  | true | N/A     |       |\n|                 | k2    | INT    | Yes  | true | N/A     |       |\n+-----------------+-------+--------+------+------+---------+-------+\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u521b\u5efa\u4e00\u4e2a\u4ee5 k2 \u4e3a\u6392\u5e8f\u5217\u7684\u7269\u5316\u89c6\u56fe"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"create materialized view k2_order as\nselect k2, k1 from duplicate_table order by k2;\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u7269\u5316\u89c6\u56fe\u7684 schema \u5982\u4e0b\u56fe\uff0c\u7269\u5316\u89c6\u56fe\u4ec5\u5305\u542b\u4e24\u5217 k2, k1\uff0c\u5176\u4e2d k2 \u5217\u4e3a\u6392\u5e8f\u5217\uff0c\u4e0d\u5e26\u4efb\u4f55\u805a\u5408\u3002"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-plain",metastring:"text",children:"+-----------------+-------+--------+------+-------+---------+-------+\n| IndexName       | Field | Type   | Null | Key   | Default | Extra |\n+-----------------+-------+--------+------+-------+---------+-------+\n| k2_order        | k2    | INT    | Yes  | true  | N/A     |       |\n|                 | k1    | INT    | Yes  | false | N/A     | NONE  |\n+-----------------+-------+--------+------+-------+---------+-------+\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u521b\u5efa\u4e00\u4e2a\u4ee5 k1, k2 \u5206\u7ec4\uff0ck3 \u5217\u4e3a SUM \u805a\u5408\u7684\u7269\u5316\u89c6\u56fe"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"create materialized view k1_k2_sumk3 as\nselect k1, k2, sum(k3) from duplicate_table group by k1, k2;\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u7269\u5316\u89c6\u56fe\u7684 schema \u5982\u4e0b\u56fe\uff0c\u7269\u5316\u89c6\u56fe\u5305\u542b\u4e24\u5217 k1, k2\uff0csum(k3) \u5176\u4e2d k1, k2 \u4e3a\u5206\u7ec4\u5217\uff0csum(k3) \u4e3a\u6839\u636e k1, k2 \u5206\u7ec4\u540e\u7684 k3 \u5217\u7684\u6c42\u548c\u503c\u3002"}),"\n",(0,l.jsx)(n.p,{children:"\u7531\u4e8e\u7269\u5316\u89c6\u56fe\u6ca1\u6709\u58f0\u660e\u6392\u5e8f\u5217\uff0c\u4e14\u7269\u5316\u89c6\u56fe\u5e26\u805a\u5408\u6570\u636e\uff0c\u7cfb\u7edf\u9ed8\u8ba4\u8865\u5145\u5206\u7ec4\u5217 k1, k2 \u4e3a\u6392\u5e8f\u5217\u3002"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-plain",metastring:"text",children:"+-----------------+-------+--------+------+-------+---------+-------+\n| IndexName       | Field | Type   | Null | Key   | Default | Extra |\n+-----------------+-------+--------+------+-------+---------+-------+\n| k1_k2_sumk3     | k1    | INT    | Yes  | true  | N/A     |       |\n|                 | k2    | INT    | Yes  | true  | N/A     |       |\n|                 | k3    | BIGINT | Yes  | false | N/A     | SUM   |\n+-----------------+-------+--------+------+-------+---------+-------+\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u521b\u5efa\u4e00\u4e2a\u53bb\u9664\u91cd\u590d\u884c\u7684\u7269\u5316\u89c6\u56fe"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"create materialized view deduplicate as\nselect k1, k2, k3, k4 from duplicate_table group by k1, k2, k3, k4;\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u7269\u5316\u89c6\u56fe schema \u5982\u4e0b\u56fe\uff0c\u7269\u5316\u89c6\u56fe\u5305\u542b k1, k2, k3, k4\u5217\uff0c\u4e14\u4e0d\u5b58\u5728\u91cd\u590d\u884c\u3002"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-plain",metastring:"text",children:"+-----------------+-------+--------+------+-------+---------+-------+\n| IndexName       | Field | Type   | Null | Key   | Default | Extra |\n+-----------------+-------+--------+------+-------+---------+-------+\n| deduplicate     | k1    | INT    | Yes  | true  | N/A     |       |\n|                 | k2    | INT    | Yes  | true  | N/A     |       |\n|                 | k3    | BIGINT | Yes  | true  | N/A     |       |\n|                 | k4    | BIGINT | Yes  | true  | N/A     |       |\n+-----------------+-------+--------+------+-------+---------+-------+\n\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u521b\u5efa\u4e00\u4e2a\u4e0d\u58f0\u660e\u6392\u5e8f\u5217\u7684\u975e\u805a\u5408\u578b\u7269\u5316\u89c6\u56fe"}),"\n",(0,l.jsx)(n.p,{children:"all_type_table \u7684 schema \u5982\u4e0b\uff1a"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-plain",metastring:"text",children:"+-------+--------------+------+-------+---------+-------+\n| Field | Type         | Null | Key   | Default | Extra |\n+-------+--------------+------+-------+---------+-------+\n| k1    | TINYINT      | Yes  | true  | N/A     |       |\n| k2    | SMALLINT     | Yes  | true  | N/A     |       |\n| k3    | INT          | Yes  | true  | N/A     |       |\n| k4    | BIGINT       | Yes  | true  | N/A     |       |\n| k5    | DECIMAL(9,0) | Yes  | true  | N/A     |       |\n| k6    | DOUBLE       | Yes  | false | N/A     | NONE  |\n| k7    | VARCHAR(20)  | Yes  | false | N/A     | NONE  |\n+-------+--------------+------+-------+---------+-------+\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u7269\u5316\u89c6\u56fe\u5305\u542b k3, k4, k5, k6, k7 \u5217\uff0c\u4e14\u4e0d\u58f0\u660e\u6392\u5e8f\u5217\uff0c\u5219\u521b\u5efa\u8bed\u53e5\u5982\u4e0b\uff1a"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"create materialized view mv_1 as\nselect k3, k4, k5, k6, k7 from all_type_table;\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u7cfb\u7edf\u9ed8\u8ba4\u8865\u5145\u7684\u6392\u5e8f\u5217\u4e3a k3, k4, k5 \u4e09\u5217\u3002\u8fd9\u4e09\u5217\u7c7b\u578b\u7684\u5b57\u8282\u6570\u4e4b\u548c\u4e3a 4(INT) + 8(BIGINT) + 16(DECIMAL) = 28 < 36\u3002\u6240\u4ee5\u8865\u5145\u7684\u662f\u8fd9\u4e09\u5217\u4f5c\u4e3a\u6392\u5e8f\u5217\u3002\n\u7269\u5316\u89c6\u56fe\u7684 schema \u5982\u4e0b\uff0c\u53ef\u4ee5\u770b\u5230\u5176\u4e2d k3, k4, k5 \u5217\u7684 key \u5b57\u6bb5\u4e3a true\uff0c\u4e5f\u5c31\u662f\u6392\u5e8f\u5217\u3002k6, k7 \u5217\u7684 key \u5b57\u6bb5\u4e3a false\uff0c\u4e5f\u5c31\u662f\u975e\u6392\u5e8f\u5217\u3002"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-plain",metastring:"text",children:"+----------------+-------+--------------+------+-------+---------+-------+\n| IndexName      | Field | Type         | Null | Key   | Default | Extra |\n+----------------+-------+--------------+------+-------+---------+-------+\n| mv_1           | k3    | INT          | Yes  | true  | N/A     |       |\n|                | k4    | BIGINT       | Yes  | true  | N/A     |       |\n|                | k5    | DECIMAL(9,0) | Yes  | true  | N/A     |       |\n|                | k6    | DOUBLE       | Yes  | false | N/A     | NONE  |\n|                | k7    | VARCHAR(20)  | Yes  | false | N/A     | NONE  |\n+----------------+-------+--------------+------+-------+---------+-------+\n"})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"keyword",children:"keyword"}),"\n",(0,l.jsx)(n.p,{children:"CREATE, MATERIALIZED, VIEW"})]})}const x=function(e={}){const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,l.jsx)(n,Object.assign({},e,{children:(0,l.jsx)(h,e)})):h(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>t,ah:()=>i});var l=s(67294);const r=l.createContext({});function i(e){const n=l.useContext(r);return l.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const a={};function t({components:e,children:n,disableParentContext:s}){let t;return t=s?"function"==typeof e?e({}):e||a:i(e),l.createElement(r.Provider,{value:t},n)}}}]);