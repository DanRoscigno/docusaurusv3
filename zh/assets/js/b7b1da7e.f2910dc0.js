"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[23876],{1917:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>d,metadata:()=>a,toc:()=>i});var t=s(85893),r=s(11151);const d={},c="CANCEL EXPORT",a={id:"sql-reference/sql-statements/data-manipulation/CANCEL EXPORT",title:"CANCEL EXPORT",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.1/sql-reference/sql-statements/data-manipulation/CANCEL EXPORT.md",sourceDirName:"sql-reference/sql-statements/data-manipulation",slug:"/sql-reference/sql-statements/data-manipulation/CANCEL EXPORT",permalink:"/docusaurusv3/zh/docs/sql-reference/sql-statements/data-manipulation/CANCEL EXPORT",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-statements/data-manipulation/CANCEL EXPORT.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"BROKER LOAD",permalink:"/docusaurusv3/zh/docs/sql-reference/sql-statements/data-manipulation/BROKER LOAD"},next:{title:"CANCEL LOAD",permalink:"/docusaurusv3/zh/docs/sql-reference/sql-statements/data-manipulation/CANCEL LOAD"}},l={},i=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function o(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",a:"a",blockquote:"blockquote",strong:"strong",pre:"pre",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,r.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"cancel-export",children:"CANCEL EXPORT"}),"\n",(0,t.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,t.jsxs)(n.p,{children:["\u53d6\u6d88\u6307\u5b9a\u7684\u6570\u636e\u5bfc\u51fa\u4f5c\u4e1a\uff0c\u72b6\u6001\u4e3a ",(0,t.jsx)(n.code,{children:"CANCELLED"})," \u6216 ",(0,t.jsx)(n.code,{children:"FINISHED"})," \u7684\u5bfc\u51fa\u4f5c\u4e1a\u4e0d\u80fd\u53d6\u6d88\u3002CANCEL EXPORT \u662f\u4e00\u4e2a\u5f02\u6b65\u64cd\u4f5c\uff0c\u6267\u884c\u540e\u53ef\u4f7f\u7528 ",(0,t.jsx)(n.a,{href:"/docusaurusv3/zh/docs/sql-reference/sql-statements/data-manipulation/SHOW%20EXPORT",children:"SHOW EXPORT"})," \u8bed\u53e5\u67e5\u770b\u662f\u5426\u53d6\u6d88\u6210\u529f\u3002\u5f53\u72b6\u6001 (",(0,t.jsx)(n.code,{children:"State"}),") \u4e3a ",(0,t.jsx)(n.code,{children:"CANCELLED"})," \u65f6\uff0c\u4ee3\u8868\u6210\u529f\u53d6\u6d88\u4e86\u5bfc\u5165\u4f5c\u4e1a\u3002"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u6ce8\u610f"})}),"\n",(0,t.jsx)(n.p,{children:"\u8981\u6267\u884c\u8be5\u64cd\u4f5c\uff0c\u9700\u8981\u6709\u5bf9\u5e94\u8868\u7684 EXPORT \u6743\u9650\u3002"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:'CANCEL EXPORT\n[FROM db_name]\nWHERE QUERYID = "query_id"\n'})}),"\n",(0,t.jsx)(n.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"\u53c2\u6570"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"\u5fc5\u9009"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"\u8bf4\u660e"})})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"db_name"}),(0,t.jsx)(n.td,{children:"\u5426"}),(0,t.jsx)(n.td,{children:"\u6570\u636e\u5e93\u540d\u79f0\u3002\u5982\u4e0d\u6307\u5b9a\uff0c\u5219\u9ed8\u8ba4\u53d6\u6d88\u5f53\u524d\u6570\u636e\u5e93\u4e2d\u7684\u6307\u5b9a\u5bfc\u51fa\u4f5c\u4e1a\u3002"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"query_id"}),(0,t.jsx)(n.td,{children:"\u662f"}),(0,t.jsxs)(n.td,{children:["\u5bfc\u51fa\u4f5c\u4e1a\u7684\u67e5\u8be2 ID\uff0c\u53ef\u4f7f\u7528 ",(0,t.jsx)(n.a,{href:"/docusaurusv3/zh/docs/sql-reference/sql-functions/utility-functions/last_query_id",children:"LAST_QUERY_ID()"})," \u51fd\u6570\u83b7\u53d6\u3002\u6ce8\u610f\u4f7f\u7528\u8be5\u51fd\u6570\u53ea\u80fd\u83b7\u53d6\u5230\u6700\u8fd1\u4e00\u6b21\u7684\u67e5\u8be2 ID\u3002"]})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,t.jsxs)(n.p,{children:["\u793a\u4f8b\u4e00\uff1a\u53d6\u6d88\u5f53\u524d\u6570\u636e\u5e93\u4e2d\uff0c\u67e5\u8be2 ID \u4e3a ",(0,t.jsx)(n.code,{children:"921d8f80-7c9d-11eb-9342-acde48001121"})," \u7684\u5bfc\u51fa\u4f5c\u4e1a\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:'CANCEL EXPORT\nWHERE queryid = "921d8f80-7c9d-11eb-9342-acde48001121";\n'})}),"\n",(0,t.jsxs)(n.p,{children:["\u793a\u4f8b\u4e8c\uff1a\u53d6\u6d88\u6570\u636e\u5e93 ",(0,t.jsx)(n.code,{children:"example_db"})," \u4e2d\uff0c\u67e5\u8be2 ID \u4e3a ",(0,t.jsx)(n.code,{children:"921d8f80-7c9d-11eb-9342-acde48001122"})," \u7684\u5bfc\u51fa\u4f5c\u4e1a\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:'CANCEL EXPORT \nFROM example_db \nWHERE queryid = "921d8f80-7c9d-11eb-9342-acde48001122";\n'})})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(o,e)})):o(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>a,ah:()=>d});var t=s(67294);const r=t.createContext({});function d(e){const n=t.useContext(r);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const c={};function a({components:e,children:n,disableParentContext:s}){let a;return a=s?"function"==typeof e?e({}):e||c:d(e),t.createElement(r.Provider,{value:a},n)}}}]);