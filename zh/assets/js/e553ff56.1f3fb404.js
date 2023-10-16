"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[81641],{46937:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>t,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>a});var c=s(85893),i=s(11151);const r={displayed_sidebar:"Chinese"},t="percentile_disc",l={id:"sql-reference/sql-functions/aggregate-functions/percentile_disc",title:"percentile_disc",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.1/sql-reference/sql-functions/aggregate-functions/percentile_disc.md",sourceDirName:"sql-reference/sql-functions/aggregate-functions",slug:"/sql-reference/sql-functions/aggregate-functions/percentile_disc",permalink:"/doc/zh/docs/sql-reference/sql-functions/aggregate-functions/percentile_disc",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-functions/aggregate-functions/percentile_disc.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"Chinese"},sidebar:"Chinese",previous:{title:"percentile_cont",permalink:"/doc/zh/docs/sql-reference/sql-functions/aggregate-functions/percentile_cont"},next:{title:"retention",permalink:"/doc/zh/docs/sql-reference/sql-functions/aggregate-functions/retention"}},d={},a=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u4f7f\u7528\u8bf4\u660e",id:"\u4f7f\u7528\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function o(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",ul:"ul",li:"li"},(0,i.ah)(),e.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.h1,{id:"percentile_disc",children:"percentile_disc"}),"\n",(0,c.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,c.jsx)(n.p,{children:"\u8ba1\u7b97\u767e\u5206\u4f4d\u6570\u3002\u548c percentile_cont \u4e0d\u540c\u7684\u662f\uff0c\u8be5\u51fd\u6570\u5982\u679c\u672a\u627e\u5230\u4e0e\u767e\u5206\u4f4d\u5b8c\u5168\u5339\u914d\u7684\u503c\uff0c\u5219\u9ed8\u8ba4\u8fd4\u56de\u4e34\u8fd1\u4e24\u4e2a\u503c\u4e2d\u8f83\u5927\u7684\u503c\u3002"}),"\n",(0,c.jsx)(n.p,{children:"\u8be5\u51fd\u6570\u4ece 2.5 \u7248\u672c\u5f00\u59cb\u652f\u6301\u3002"}),"\n",(0,c.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-SQL",children:"PERCENTILE_DISC (expr, percentile) \n"})}),"\n",(0,c.jsx)(n.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"expr"}),": \u8981\u8ba1\u7b97\u767e\u5206\u4f4d\u6570\u7684\u5217\uff0c\u5217\u503c\u652f\u6301\u4efb\u610f\u53ef\u6392\u5e8f\u7684\u7c7b\u578b\u3002"]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"percentile"}),": \u6307\u5b9a\u7684\u767e\u5206\u4f4d\uff0c\u4ecb\u4e8e 0 \u548c 1 \u4e4b\u95f4\u7684\u6d6e\u70b9\u5e38\u91cf\u3002\u5982\u679c\u8981\u8ba1\u7b97\u4e2d\u4f4d\u6570\uff0c\u5219\u8bbe\u7f6e\u4e3a 0.5\u3002"]}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(n.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,c.jsx)(n.p,{children:"\u8fd4\u56de\u6307\u5b9a\u7684\u767e\u5206\u4f4d\u5bf9\u5e94\u7684\u503c\u3002\u5982\u679c\u6ca1\u6709\u627e\u5230\u4e0e\u767e\u5206\u4f4d\u5b8c\u5168\u5339\u914d\u7684\u503c\uff0c\u5219\u8fd4\u56de\u4e34\u8fd1\u4e24\u4e2a\u6570\u503c\u4e2d\u8f83\u5927\u7684\u503c\u3002"}),"\n",(0,c.jsxs)(n.p,{children:["\u8fd4\u56de\u503c\u7c7b\u578b\u4e0e ",(0,c.jsx)(n.code,{children:"expr"})," \u5185\u7684\u6570\u636e\u7c7b\u578b\u76f8\u540c\u3002"]}),"\n",(0,c.jsx)(n.h2,{id:"\u4f7f\u7528\u8bf4\u660e",children:"\u4f7f\u7528\u8bf4\u660e"}),"\n",(0,c.jsx)(n.p,{children:"\u8be5\u51fd\u6570\u5ffd\u7565 Null \u503c\u3002"}),"\n",(0,c.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,c.jsxs)(n.p,{children:["\u521b\u5efa\u8868 ",(0,c.jsx)(n.code,{children:"exam"}),"\uff0c\u63d2\u5165\u6570\u636e\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE exam (\n    subject STRING,\n    exam_result INT\n) \nDISTRIBUTED BY HASH(`subject`);\n\ninsert into exam values\n('chemistry',80),\n('chemistry',100),\n('chemistry',null),\n('math',60),\n('math',70),\n('math',85),\n('physics',75),\n('physics',80),\n('physics',85),\n('physics',99);\n"})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-Plain",children:"select * from exam order by Subject;\n+-----------+-------+\n| Subject   | Score |\n+-----------+-------+\n| chemistry |    80 |\n| chemistry |   100 |\n| chemistry |  NULL |\n| math      |    60 |\n| math      |    70 |\n| math      |    85 |\n| physics   |    75 |\n| physics   |    80 |\n| physics   |    85 |\n| physics   |    99 |\n+-----------+-------+\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u8ba1\u7b97\u6bcf\u4e2a\u79d1\u76ee\u5f97\u5206\u7684\u4e2d\u4f4d\u6570\uff0c\u5ffd\u7565 Null \u503c\u3002"}),"\n",(0,c.jsx)(n.p,{children:"\u67e5\u8be2\u8bed\u53e5\uff1a"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-SQL",children:"SELECT Subject, PERCENTILE_DISC (Score, 0.5)\nFROM exam group by Subject;\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u8fd4\u56de\u7ed3\u679c\uff1a"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-Plain",children:"+-----------+-----------------------------+\n| Subject   | percentile_disc(Score, 0.5) |\n+-----------+-----------------------------+\n| chemistry |                         100 |\n| math      |                          70 |\n| physics   |                          85 |\n+-----------+-----------------------------+\n"})})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,c.jsx)(n,Object.assign({},e,{children:(0,c.jsx)(o,e)})):o(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>l,ah:()=>r});var c=s(67294);const i=c.createContext({});function r(e){const n=c.useContext(i);return c.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const t={};function l({components:e,children:n,disableParentContext:s}){let l;return l=s?"function"==typeof e?e({}):e||t:r(e),c.createElement(i.Provider,{value:l},n)}}}]);