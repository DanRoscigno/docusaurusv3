"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[76268],{15061:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var t=s(85893),i=s(11151);const a={},r="bitmap_to_base64",c={id:"sql-reference/sql-functions/bitmap-functions/bitmap_to_base64",title:"bitmap_to_base64",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.1/sql-reference/sql-functions/bitmap-functions/bitmap_to_base64.md",sourceDirName:"sql-reference/sql-functions/bitmap-functions",slug:"/sql-reference/sql-functions/bitmap-functions/bitmap_to_base64",permalink:"/docusaurusv3/zh/docs/sql-reference/sql-functions/bitmap-functions/bitmap_to_base64",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-functions/bitmap-functions/bitmap_to_base64.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"bitmap_to_array",permalink:"/docusaurusv3/zh/docs/sql-reference/sql-functions/bitmap-functions/bitmap_to_array"},next:{title:"bitmap_to_string",permalink:"/docusaurusv3/zh/docs/sql-reference/sql-functions/bitmap-functions/bitmap_to_string"}},o={},l=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",ol:"ol",li:"li"},(0,i.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"bitmap_to_base64",children:"bitmap_to_base64"}),"\n",(0,t.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,t.jsx)(n.p,{children:"\u5c06 bitmap \u8f6c\u6362\u4e3a Base64 \u5b57\u7b26\u4e32\u3002\u8be5\u51fd\u6570\u4ece 2.5 \u7248\u672c\u5f00\u59cb\u652f\u6301\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Haskell",children:"VARCHAR bitmap_to_base64(BITMAP bitmap)\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"bitmap"}),": \u5f85\u8f6c\u6362\u7684 bitmap\uff0c\u5fc5\u586b\u3002\u5982\u679c\u8f93\u5165\u503c\u683c\u5f0f\u975e\u6cd5\uff0c\u8fd4\u56de\u62a5\u9519\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,t.jsx)(n.p,{children:"\u8fd4\u56de VARCHAR \u7c7b\u578b\u7684\u503c\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,t.jsx)(n.p,{children:"\u793a\u4f8b\u4e00\uff1a\u8be5\u51fd\u6570\u4e0e\u5176\u4ed6 bitmap \u51fd\u6570\u642d\u914d\u4f7f\u7528\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Plain",children:"select bitmap_to_base64(bitmap_from_string(\"0, 1, 2, 3\"));\n+----------------------------------------------------+\n| bitmap_to_base64(bitmap_from_string('0, 1, 2, 3')) |\n+----------------------------------------------------+\n| AjowAAABAAAAAAADABAAAAAAAAEAAgADAA==               |\n+----------------------------------------------------+\n1 row in set (0.00 sec)\n\nselect bitmap_to_base64(to_bitmap(1));\n+--------------------------------+\n| bitmap_to_base64(to_bitmap(1)) |\n+--------------------------------+\n| AQEAAAA=                       |\n+--------------------------------+\n1 row in set (0.00 sec)\n\nselect bitmap_to_base64(bitmap_empty());\n+----------------------------------+\n| bitmap_to_base64(bitmap_empty()) |\n+----------------------------------+\n| AA==                             |\n+----------------------------------+\n1 row in set (0.00 sec)\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u793a\u4f8b\u4e8c\uff1a\u5c06\u6570\u636e\u8868\u4e2d\u7684 BITMAP \u5217\u8f6c\u6362\u4e3a Base64 \u5b57\u7b26\u4e32\u3002"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["\u521b\u5efa\u4e00\u5f20\u542b\u6709 BITMAP \u5217\u7684\u805a\u5408\u8868\uff0c\u5176\u4e2d ",(0,t.jsx)(n.code,{children:"visit_users"})," \u5217\u4e3a\u805a\u5408\u5217\uff0c\u5217\u7c7b\u578b\u4e3a BITMAP\uff0c\u4f7f\u7528\u805a\u5408\u51fd\u6570 bitmap_union()\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:'CREATE TABLE `page_uv`\n    (`page_id` INT NOT NULL COMMENT \'\u9875\u9762id\',\n    `visit_date` datetime NOT NULL COMMENT \'\u8bbf\u95ee\u65f6\u95f4\',\n    `visit_users` BITMAP BITMAP_UNION NOT NULL COMMENT \'\u8bbf\u95ee\u7528\u6237id\'\n    ) ENGINE=OLAP\n    AGGREGATE KEY(`page_id`, `visit_date`)\n    DISTRIBUTED BY HASH(`page_id`)\n    PROPERTIES (\n    "replication_num" = "3",\n    "storage_format" = "DEFAULT"\n    );\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u5411\u8868\u4e2d\u5bfc\u5165\u6570\u636e\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:"    insert into page_uv values\n    (1, '2020-06-23 01:30:30', to_bitmap(13)),\n    (1, '2020-06-23 01:30:30', to_bitmap(23)),\n    (1, '2020-06-23 01:30:30', to_bitmap(33)),\n    (1, '2020-06-23 02:30:30', to_bitmap(13)),\n    (2, '2020-06-23 01:30:30', to_bitmap(23));\n  \n    select * from page_uv order by page_id;\n    +---------+---------------------+-------------+\n    | page_id | visit_date          | visit_users |\n    +---------+---------------------+-------------+\n    |       1 | 2020-06-23 01:30:30 | NULL        |\n    |       1 | 2020-06-23 02:30:30 | NULL        |\n    |       2 | 2020-06-23 01:30:30 | NULL        |\n    +---------+---------------------+-------------+\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["\u5c06 ",(0,t.jsx)(n.code,{children:"visit_users"})," \u5217\u7684\u6bcf\u884c ",(0,t.jsx)(n.code,{children:"bitmap"})," \u503c\u8f6c\u4e3a Base64 \u5b57\u7b26\u4e32\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Plain",children:"    select page_id, bitmap_to_base64(visit_users)\n    from page_uv;\n    +---------+------------------------------------------+\n    | page_id | bitmap_to_base64(visit_users)            |\n    +---------+------------------------------------------+\n    |       1 | CgMAAAANAAAAAAAAABcAAAAAAAAAIQAAAAAAAAA= |\n    |       1 | AQ0AAAA=                                 |\n    |       2 | ARcAAAA=                                 |\n    +---------+------------------------------------------+\n"})}),"\n"]}),"\n"]})]})}const p=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(d,e)})):d(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>c,ah:()=>a});var t=s(67294);const i=t.createContext({});function a(e){const n=t.useContext(i);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const r={};function c({components:e,children:n,disableParentContext:s}){let c;return c=s?"function"==typeof e?e({}):e||r:a(e),t.createElement(i.Provider,{value:c},n)}}}]);