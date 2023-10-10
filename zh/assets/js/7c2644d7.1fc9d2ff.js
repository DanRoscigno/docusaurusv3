"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[41615],{26325:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>d});var l=s(85893),t=s(11151);const a={},i="SHOW ALTER TABLE",r={id:"sql-reference/sql-statements/data-manipulation/SHOW ALTER",title:"SHOW ALTER TABLE",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.1/sql-reference/sql-statements/data-manipulation/SHOW ALTER.md",sourceDirName:"sql-reference/sql-statements/data-manipulation",slug:"/sql-reference/sql-statements/data-manipulation/SHOW ALTER",permalink:"/docusaurusv3/zh/docs/sql-reference/sql-statements/data-manipulation/SHOW ALTER",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-statements/data-manipulation/SHOW ALTER.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"SHOW ALTER MATERIALIZED VIEW",permalink:"/docusaurusv3/zh/docs/sql-reference/sql-statements/data-manipulation/SHOW ALTER MATERIALIZED VIEW"},next:{title:"SHOW BACKUP",permalink:"/docusaurusv3/zh/docs/sql-reference/sql-statements/data-manipulation/SHOW BACKUP"}},c={},d=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u76f8\u5173\u53c2\u8003",id:"\u76f8\u5173\u53c2\u8003",level:2}];function o(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",ul:"ul",li:"li",ol:"ol",a:"a"},(0,t.ah)(),e.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h1,{id:"show-alter-table",children:"SHOW ALTER TABLE"}),"\n",(0,l.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,l.jsx)(n.p,{children:"\u67e5\u8be2\u5f53\u524d\u6b63\u5728\u8fdb\u884c\u7684\u5404\u7c7b\u4fee\u6539\u4efb\u52a1\u7684\u6267\u884c\u60c5\u51b5\u3002"}),"\n",(0,l.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"SHOW ALTER TABLE {COLUMN | ROLLUP} [FROM db_name]\n"})}),"\n",(0,l.jsx)(n.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"COLUMN \uff5c ROLLUP"}),"\uff1a\u8868\u793a\u4ece COLUMN \u548c ROLLUP \u4e2d\u5fc5\u9009\u5176\u4e2d\u4e00\u4e2a\u3002","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\u5982\u679c\u6307\u5b9a\u4e86 COLUMN\uff0c\u8be5\u8bed\u53e5\u7528\u4e8e\u67e5\u8be2\u4fee\u6539\u5217\u7684\u4efb\u52a1\u3002\u5982\u679c\u9700\u8981\u5d4c\u5957WHERE\u5b50\u53e5\uff0c\u652f\u6301\u7684\u8bed\u6cd5\u4e3a ",(0,l.jsx)(n.code,{children:"[WHERE TableName|CreateTime|FinishTime|State] [ORDER BY] [LIMIT]"}),"\u3002"]}),"\n",(0,l.jsx)(n.li,{children:"\u5982\u679c\u6307\u5b9a\u4e86 ROLLUP\uff0c\u8be5\u8bed\u53e5\u7528\u4e8e\u67e5\u8be2\u521b\u5efa\u6216\u5220\u9664 ROLLUP index \u7684\u4efb\u52a1\u3002"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"db_name"}),"\uff1a\u53ef\u9009\u3002\u5982\u679c\u4e0d\u6307\u5b9a\uff0c\u5219\u9ed8\u8ba4\u4f7f\u7528\u5f53\u524d\u6570\u636e\u5e93\u3002"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u67e5\u8be2\u9ed8\u8ba4\u6570\u636e\u5e93\u7684\u6240\u6709\u4fee\u6539\u5217\u4efb\u52a1\u7684\u6267\u884c\u60c5\u51b5\u3002"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"SHOW ALTER TABLE COLUMN;\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u67e5\u8be2\u67d0\u4e2a\u8868\u6700\u8fd1\u4e00\u6b21\u4fee\u6539\u5217\u4efb\u52a1\u7684\u6267\u884c\u60c5\u51b5\u3002"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'SHOW ALTER TABLE COLUMN WHERE TableName = "table1" ORDER BY CreateTime DESC LIMIT 1;\n'})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u67e5\u8be2\u6307\u5b9a\u6570\u636e\u5e93\u7684\u521b\u5efa\u6216\u5220\u9664 ROLLUP index \u7684\u4efb\u52a1\u6267\u884c\u60c5\u51b5\u3002"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"SHOW ALTER TABLE ROLLUP FROM example_db;\n"})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\u76f8\u5173\u53c2\u8003",children:"\u76f8\u5173\u53c2\u8003"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/docusaurusv3/zh/docs/sql-reference/sql-statements/data-definition/CREATE%20TABLE",children:"CREATE TABLE"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/docusaurusv3/zh/docs/sql-reference/sql-statements/data-definition/ALTER%20TABLE",children:"ALTER TABLE"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/docusaurusv3/zh/docs/sql-reference/sql-statements/data-manipulation/SHOW%20TABLES",children:"SHOW TABLES"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/docusaurusv3/zh/docs/sql-reference/sql-statements/data-manipulation/SHOW%20CREATE%20TABLE",children:"SHOW CREATE TABLE"})}),"\n"]})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?(0,l.jsx)(n,Object.assign({},e,{children:(0,l.jsx)(o,e)})):o(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>r,ah:()=>a});var l=s(67294);const t=l.createContext({});function a(e){const n=l.useContext(t);return l.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const i={};function r({components:e,children:n,disableParentContext:s}){let r;return r=s?"function"==typeof e?e({}):e||i:a(e),l.createElement(t.Provider,{value:r},n)}}}]);