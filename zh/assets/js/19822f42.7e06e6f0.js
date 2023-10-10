"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[80982],{43018:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>i});var t=n(85893),a=n(11151);const r={},l="CANCEL LOAD",d={id:"sql-reference/sql-statements/data-manipulation/CANCEL LOAD",title:"CANCEL LOAD",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.1/sql-reference/sql-statements/data-manipulation/CANCEL LOAD.md",sourceDirName:"sql-reference/sql-statements/data-manipulation",slug:"/sql-reference/sql-statements/data-manipulation/CANCEL LOAD",permalink:"/docusaurusv3/zh/docs/sql-reference/sql-statements/data-manipulation/CANCEL LOAD",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-statements/data-manipulation/CANCEL LOAD.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"CANCEL EXPORT",permalink:"/docusaurusv3/zh/docs/sql-reference/sql-statements/data-manipulation/CANCEL EXPORT"},next:{title:"CANCEL REFRESH MATERIALIZED VIEW",permalink:"/docusaurusv3/zh/docs/sql-reference/sql-statements/data-manipulation/CANCEL REFRESH MATERIALIZED VIEW"}},c={},i=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function o(e){const s=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",code:"code",pre:"pre",table:"table",thead:"thead",tr:"tr",th:"th",strong:"strong",tbody:"tbody",td:"td"},(0,a.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"cancel-load",children:"CANCEL LOAD"}),"\n",(0,t.jsx)(s.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,t.jsxs)(s.p,{children:["\u53d6\u6d88\u6307\u5b9a\u7684 ",(0,t.jsx)(s.a,{href:"/docusaurusv3/zh/docs/sql-reference/sql-statements/data-manipulation/BROKER%20LOAD",children:"Broker Load"}),"\u3001",(0,t.jsx)(s.a,{href:"/docusaurusv3/zh/docs/sql-reference/sql-statements/data-manipulation/SPARK%20LOAD",children:"Spark Load"})," \u6216 ",(0,t.jsx)(s.a,{href:"/docusaurusv3/zh/docs/sql-reference/sql-statements/data-manipulation/insert",children:"INSERT"})," \u5bfc\u5165\u4f5c\u4e1a\uff0c\u72b6\u6001\u4e3a PREPARED\u3001CANCELLED \u6216 FINISHED \u7684\u5bfc\u5165\u4f5c\u4e1a\u4e0d\u80fd\u53d6\u6d88\u3002"]}),"\n",(0,t.jsxs)(s.p,{children:["CANCEL LOAD \u662f\u4e00\u4e2a\u5f02\u6b65\u64cd\u4f5c\uff0c\u6267\u884c\u540e\u53ef\u4f7f\u7528 ",(0,t.jsx)(s.a,{href:"/docusaurusv3/zh/docs/sql-reference/sql-statements/data-manipulation/SHOW%20LOAD",children:"SHOW LOAD"})," \u8bed\u53e5\u67e5\u770b\u662f\u5426\u53d6\u6d88\u6210\u529f\u3002\u5f53\u72b6\u6001 (",(0,t.jsx)(s.code,{children:"State"}),") \u4e3a ",(0,t.jsx)(s.code,{children:"CANCELLED"})," \u4e14\u5bfc\u5165\u4f5c\u4e1a\u5931\u8d25\u539f\u56e0 (",(0,t.jsx)(s.code,{children:"ErrorMsg"}),") \u4e2d\u7684\u5931\u8d25\u7c7b\u578b (",(0,t.jsx)(s.code,{children:"type"}),") \u4e3a ",(0,t.jsx)(s.code,{children:"USER_CANCEL"})," \u65f6\uff0c\u4ee3\u8868\u6210\u529f\u53d6\u6d88\u4e86\u5bfc\u5165\u4f5c\u4e1a\u3002"]}),"\n",(0,t.jsx)(s.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-SQL",children:'CANCEL LOAD\n[FROM db_name]\nWHERE LABEL = "label_name"\n'})}),"\n",(0,t.jsx)(s.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:(0,t.jsx)(s.strong,{children:"\u53c2\u6570"})}),(0,t.jsx)(s.th,{children:(0,t.jsx)(s.strong,{children:"\u5fc5\u9009"})}),(0,t.jsx)(s.th,{children:(0,t.jsx)(s.strong,{children:"\u8bf4\u660e"})})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"db_name"}),(0,t.jsx)(s.td,{children:"\u5426"}),(0,t.jsx)(s.td,{children:"\u5bfc\u5165\u4f5c\u4e1a\u6240\u5728\u7684\u6570\u636e\u5e93\u7684\u540d\u79f0\u3002\u9ed8\u8ba4\u4e3a\u5f53\u524d\u6570\u636e\u5e93\u3002"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"label_name"}),(0,t.jsx)(s.td,{children:"\u662f"}),(0,t.jsx)(s.td,{children:"\u5bfc\u5165\u4f5c\u4e1a\u7684\u6807\u7b7e\u3002"})]})]})]}),"\n",(0,t.jsx)(s.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,t.jsxs)(s.p,{children:["\u793a\u4f8b\u4e00\uff1a\u53d6\u6d88\u5f53\u524d\u6570\u636e\u5e93\u4e2d\u6807\u7b7e\u4e3a",(0,t.jsx)(s.code,{children:"example_label"}),"\u7684\u5bfc\u5165\u4f5c\u4e1a\u3002"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-SQL",children:'CANCEL LOAD\nWHERE LABEL = "example_label";\n'})}),"\n",(0,t.jsxs)(s.p,{children:["\u793a\u4f8b\u4e8c\uff1a\u53d6\u6d88\u6570\u636e\u5e93",(0,t.jsx)(s.code,{children:"example_db"}),"\u4e2d\u6807\u7b7e\u4e3a",(0,t.jsx)(s.code,{children:"example_label"}),"\u7684\u5bfc\u5165\u4f5c\u4e1a\u3002"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-SQL",children:'CANCEL LOAD\nFROM example_db\nWHERE LABEL = "example_label";\n'})})]})}const h=function(e={}){const{wrapper:s}=Object.assign({},(0,a.ah)(),e.components);return s?(0,t.jsx)(s,Object.assign({},e,{children:(0,t.jsx)(o,e)})):o(e)}},11151:(e,s,n)=>{n.d(s,{Zo:()=>d,ah:()=>r});var t=n(67294);const a=t.createContext({});function r(e){const s=t.useContext(a);return t.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const l={};function d({components:e,children:s,disableParentContext:n}){let d;return d=n?"function"==typeof e?e({}):e||l:r(e),t.createElement(a.Provider,{value:d},s)}}}]);