"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[19049],{97086:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>i,default:()=>a,frontMatter:()=>d,metadata:()=>c,toc:()=>h});var t=n(85893),r=n(11151);const d={displayed_sidebar:"Chinese"},i="SHOW PROCESSLIST",c={id:"sql-reference/sql-statements/Administration/SHOW_PROCESSLIST",title:"SHOW PROCESSLIST",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.1/sql-reference/sql-statements/Administration/SHOW_PROCESSLIST.md",sourceDirName:"sql-reference/sql-statements/Administration",slug:"/sql-reference/sql-statements/Administration/SHOW_PROCESSLIST",permalink:"/doc/zh/docs/sql-reference/sql-statements/Administration/SHOW_PROCESSLIST",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-statements/Administration/SHOW_PROCESSLIST.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"Chinese"},sidebar:"Chinese",previous:{title:"SHOW PROC",permalink:"/doc/zh/docs/sql-reference/sql-statements/Administration/SHOW_PROC"},next:{title:"SHOW RESOURCE GROUP",permalink:"/doc/zh/docs/sql-reference/sql-statements/Administration/SHOW_RESOURCE_GROUP"}},l={},h=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de",id:"\u8fd4\u56de",level:2},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function o(e){const s=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,r.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"show-processlist",children:"SHOW PROCESSLIST"}),"\n",(0,t.jsx)(s.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,t.jsx)(s.p,{children:"\u5c55\u793a\u5f53\u524d\u670d\u52a1\u5668\u5185\u8fd0\u884c\u7ebf\u7a0b\u6267\u884c\u7684\u64cd\u4f5c\u3002\u5f53\u524d\u7248\u672c\u4ec5\u652f\u6301\u5c55\u793a\u67e5\u8be2\u4efb\u52a1\u3002"}),"\n",(0,t.jsx)(s.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-SQL",children:"SHOW [FULL] PROCESSLIST\n"})}),"\n",(0,t.jsx)(s.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"\u53c2\u6570"}),(0,t.jsx)(s.th,{children:"\u5fc5\u9009"}),(0,t.jsx)(s.th,{children:"\u8bf4\u660e"})]})}),(0,t.jsx)(s.tbody,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"FULL"}),(0,t.jsx)(s.td,{children:"\u5426"}),(0,t.jsx)(s.td,{children:"\u5982\u679c\u4e0d\u6307\u5b9a\u8be5\u53c2\u6570\uff0c\u5219\u4ec5\u5217\u51fa\u524d 100 \u6761\u7ebf\u7a0b\u8fd0\u884c\u72b6\u51b5\u3002\u5982\u679c\u6307\u5b9a\u8be5\u53c2\u6570\uff0c\u5219\u5217\u51fa\u6240\u6709\u7ebf\u7a0b\u8fd0\u884c\u72b6\u51b5\u3002"})]})})]}),"\n",(0,t.jsx)(s.h2,{id:"\u8fd4\u56de",children:"\u8fd4\u56de"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"\u8fd4\u56de"}),(0,t.jsx)(s.th,{children:"\u8bf4\u660e"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Id"}),(0,t.jsx)(s.td,{children:"\u8fde\u63a5ID"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"User"}),(0,t.jsx)(s.td,{children:"\u7ebf\u7a0b\u6240\u5c5e\u7528\u6237\u540d"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Host"}),(0,t.jsx)(s.td,{children:"\u53d1\u51fa\u8bed\u53e5\u7684\u5ba2\u6237\u7aef\u7684\u4e3b\u673a\u540d"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Db"}),(0,t.jsx)(s.td,{children:"\u7ebf\u7a0b\u6240\u5c5e\u6570\u636e\u5e93\u540d"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Command"}),(0,t.jsx)(s.td,{children:"\u7ebf\u7a0b\u6267\u884c\u7684\u547d\u4ee4\u7c7b\u578b"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"ConnectionStartTime"}),(0,t.jsx)(s.td,{children:"\u8fde\u63a5\u5f00\u59cb\u65f6\u95f4"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Time"}),(0,t.jsx)(s.td,{children:"\u7ebf\u7a0b\u5904\u4e8e\u5176\u5f53\u524d\u72b6\u6001\u7684\u65f6\u95f4\uff08\u5355\u4f4d\uff1a\u79d2\uff09"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"State"}),(0,t.jsx)(s.td,{children:"\u7ebf\u7a0b\u8fd0\u884c\u72b6\u6001"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Info"}),(0,t.jsx)(s.td,{children:"\u7ebf\u7a0b\u6b63\u5728\u6267\u884c\u7684\u8bed\u53e5"})]})]})]}),"\n",(0,t.jsx)(s.h2,{id:"\u6ce8\u610f\u4e8b\u9879",children:"\u6ce8\u610f\u4e8b\u9879"}),"\n",(0,t.jsxs)(s.p,{children:["\u5982\u679c\u5f53\u524d\u7528\u6237\u4e3a ",(0,t.jsx)(s.code,{children:"root"}),"\uff0c\u5219\u5217\u51fa\u6240\u6709\u7528\u6237\u6b63\u5728\u8fd0\u884c\u7684\u7ebf\u7a0b\uff1b\u5426\u5219\uff0c\u4ec5\u5217\u51fa\u5f53\u524d\u7528\u6237\u8fd0\u884c\u7684\u7ebf\u7a0b\u3002"]}),"\n",(0,t.jsx)(s.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,t.jsxs)(s.p,{children:["\u793a\u4f8b\u4e00\uff1a\u901a\u8fc7 ",(0,t.jsx)(s.code,{children:"root"})," \u7528\u6237\u67e5\u770b\u6b63\u5728\u8fd0\u884c\u7684\u7ebf\u7a0b\u3002"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-Plain",children:"SHOW PROCESSLIST;\n\n+------+------+---------------------+-------+---------+---------------------+------+-------+------------------+\n| Id   | User | Host                | Db    | Command | ConnectionStartTime | Time | State | Info             |\n+------+------+---------------------+-------+---------+---------------------+------+-------+------------------+\n|  0   | root | x.x.x.x:xxxx        | tpcds | Query   | 2022-10-09 19:58:25 |    0 | OK    | SHOW PROCESSLIST |\n+------+------+---------------------+-------+---------+---------------------+------+-------+------------------+\n"})})]})}const a=function(e={}){const{wrapper:s}=Object.assign({},(0,r.ah)(),e.components);return s?(0,t.jsx)(s,Object.assign({},e,{children:(0,t.jsx)(o,e)})):o(e)}},11151:(e,s,n)=>{n.d(s,{Zo:()=>c,ah:()=>d});var t=n(67294);const r=t.createContext({});function d(e){const s=t.useContext(r);return t.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const i={};function c({components:e,children:s,disableParentContext:n}){let c;return c=n?"function"==typeof e?e({}):e||i:d(e),t.createElement(r.Provider,{value:c},s)}}}]);