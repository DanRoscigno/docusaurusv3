"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[27530],{16244:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>l,metadata:()=>d,toc:()=>i});var t=n(85893),r=n(11151);const l={},a="ALTER LOAD",d={id:"sql-reference/sql-statements/data-manipulation/ALTER LOAD",title:"ALTER LOAD",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.1/sql-reference/sql-statements/data-manipulation/ALTER LOAD.md",sourceDirName:"sql-reference/sql-statements/data-manipulation",slug:"/sql-reference/sql-statements/data-manipulation/ALTER LOAD",permalink:"/docusaurusv3/zh/docs/latest/sql-reference/sql-statements/data-manipulation/ALTER LOAD",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-statements/data-manipulation/ALTER LOAD.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"SHOW FUNCTIONS",permalink:"/docusaurusv3/zh/docs/latest/sql-reference/sql-statements/data-definition/show-functions"},next:{title:"BROKER LOAD",permalink:"/docusaurusv3/zh/docs/latest/sql-reference/sql-statements/data-manipulation/BROKER LOAD"}},c={},i=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function o(e){const s=Object.assign({h1:"h1",h2:"h2",p:"p",strong:"strong",blockquote:"blockquote",pre:"pre",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",a:"a"},(0,r.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"alter-load",children:"ALTER LOAD"}),"\n",(0,t.jsx)(s.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,t.jsxs)(s.p,{children:["\u4fee\u6539 ",(0,t.jsx)(s.strong,{children:"QUEUEING"})," \u6216\u8005 ",(0,t.jsx)(s.strong,{children:"LOADING"})," \u72b6\u6001\u7684 Broker Load \u4f5c\u4e1a\u7684\u4f18\u5148\u7ea7\u3002StarRocks \u81ea v2.5 \u7248\u672c\u8d77\u652f\u6301\u8be5\u547d\u4ee4\u3002"]}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"\u8bf4\u660e"})}),"\n",(0,t.jsxs)(s.p,{children:["\u4fee\u6539\u5904\u4e8e ",(0,t.jsx)(s.strong,{children:"LOADING"})," \u72b6\u6001\u7684 Broker Load \u4f5c\u4e1a\u7684\u4f18\u5148\u7ea7\u4e0d\u4f1a\u5bf9\u4f5c\u4e1a\u4ea7\u751f\u4efb\u4f55\u5f71\u54cd\u3002"]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-SQL",children:"ALTER LOAD FOR <label_name>\nproperties\n(\n    'priority'='{LOWEST | LOW | NORMAL | HIGH | HIGHEST}'\n)\n"})}),"\n",(0,t.jsx)(s.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:(0,t.jsx)(s.strong,{children:"\u53c2\u6570"})}),(0,t.jsx)(s.th,{children:(0,t.jsx)(s.strong,{children:"\u662f\u5426\u5fc5\u9009"})}),(0,t.jsx)(s.th,{children:(0,t.jsx)(s.strong,{children:"\u8bf4\u660e"})})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"label_name"}),(0,t.jsx)(s.td,{children:"\u662f"}),(0,t.jsxs)(s.td,{children:["\u6307\u5b9a\u5bfc\u5165\u4f5c\u4e1a\u7684\u6807\u7b7e\u3002\u683c\u5f0f\uff1a",(0,t.jsx)(s.code,{children:"[<database_name>.]<label_name>"}),"\u3002\u53c2\u89c1 ",(0,t.jsx)(s.a,{href:"/docusaurusv3/zh/docs/latest/sql-reference/sql-statements/data-manipulation/BROKER%20LOAD#label",children:"BROKER LOAD"}),"\u3002"]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"priority"}),(0,t.jsx)(s.td,{children:"\u662f"}),(0,t.jsxs)(s.td,{children:["\u6307\u5b9a\u5bfc\u5165\u4f5c\u4e1a\u7684\u4f18\u5148\u7ea7\u3002\u53d6\u503c\u8303\u56f4\uff1a",(0,t.jsx)(s.code,{children:"LOWEST"}),"\u3001",(0,t.jsx)(s.code,{children:"LOW"}),"\u3001",(0,t.jsx)(s.code,{children:"NORMAL"}),"\u3001",(0,t.jsx)(s.code,{children:"HIGH"})," \u548c ",(0,t.jsx)(s.code,{children:"HIGHEST"}),"\u3002\u53c2\u89c1 ",(0,t.jsx)(s.a,{href:"/docusaurusv3/zh/docs/latest/sql-reference/sql-statements/data-manipulation/BROKER%20LOAD#opt_properties",children:"BROKER LOAD"}),"\u3002"]})]})]})]}),"\n",(0,t.jsx)(s.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,t.jsxs)(s.p,{children:["\u5047\u8bbe\u60a8\u6709\u4e00\u4e2a\u6807\u7b7e\u4e3a ",(0,t.jsx)(s.code,{children:"test_db.label1"})," \u7684 Broker Load \u4f5c\u4e1a\uff0c\u4e14\u4f5c\u4e1a\u5f53\u524d\u5904\u4e8e ",(0,t.jsx)(s.strong,{children:"QUEUEING"})," \u72b6\u6001\u6216\u8005 ",(0,t.jsx)(s.strong,{children:"LOADING"})," \u72b6\u6001\u3002\u5982\u679c\u60a8\u60f3\u5c3d\u5feb\u6267\u884c\u8be5\u4f5c\u4e1a\uff0c\u53ef\u4ee5\u901a\u8fc7\u5982\u4e0b\u547d\u4ee4\uff0c\u628a\u8be5\u4f5c\u4e1a\u7684\u4f18\u5148\u7ea7\u6539\u4e3a ",(0,t.jsx)(s.code,{children:"HIGHEST"}),"\uff1a"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-SQL",children:"ALTER LOAD FOR test_db.label1\nproperties\n(\n    'priority'='HIGHEST'\n);\n"})})]})}const h=function(e={}){const{wrapper:s}=Object.assign({},(0,r.ah)(),e.components);return s?(0,t.jsx)(s,Object.assign({},e,{children:(0,t.jsx)(o,e)})):o(e)}},11151:(e,s,n)=>{n.d(s,{Zo:()=>d,ah:()=>l});var t=n(67294);const r=t.createContext({});function l(e){const s=t.useContext(r);return t.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const a={};function d({components:e,children:s,disableParentContext:n}){let d;return d=n?"function"==typeof e?e({}):e||a:l(e),t.createElement(r.Provider,{value:d},s)}}}]);