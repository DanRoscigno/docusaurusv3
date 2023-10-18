"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[65179],{82716:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var t=n(85893),i=n(11151);const r={displayed_sidebar:"Chinese"},c="ALTER RESOURCE",a={id:"sql-reference/sql-statements/data-definition/ALTER_RESOURCE",title:"ALTER RESOURCE",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.0/sql-reference/sql-statements/data-definition/ALTER_RESOURCE.md",sourceDirName:"sql-reference/sql-statements/data-definition",slug:"/sql-reference/sql-statements/data-definition/ALTER_RESOURCE",permalink:"/doc/zh/docs/3.0/sql-reference/sql-statements/data-definition/ALTER_RESOURCE",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-statements/data-definition/ALTER_RESOURCE.md",tags:[],version:"3.0",frontMatter:{displayed_sidebar:"Chinese"},sidebar:"Chinese",previous:{title:"ALTER MATERIALIZED VIEW",permalink:"/doc/zh/docs/3.0/sql-reference/sql-statements/data-definition/ALTER_MATERIALIZED_VIEW"},next:{title:"ALTER TABLE",permalink:"/doc/zh/docs/3.0/sql-reference/sql-statements/data-definition/ALTER_TABLE"}},l={},d=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function o(e){const s=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",ul:"ul",li:"li",a:"a"},(0,i.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"alter-resource",children:"ALTER RESOURCE"}),"\n",(0,t.jsx)(s.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,t.jsx)(s.p,{children:"\u4fee\u6539\u8d44\u6e90\u7684\u5c5e\u6027\u3002\u4ec5 StarRocks 2.3 \u53ca\u4ee5\u4e0a\u7248\u672c\u652f\u6301\u4fee\u6539\u8d44\u6e90\u5c5e\u6027\u3002"}),"\n",(0,t.jsx)(s.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-SQL",children:'ALTER RESOURCE \'resource_name\' SET PROPERTIES ("key"="value", ...)\n'})}),"\n",(0,t.jsx)(s.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"resource_name"}),"\uff1a\u5f85\u4fee\u6539\u7684\u8d44\u6e90\u540d\u79f0\u3002"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:'PROPERTIES ("key"="value", ...)'}),"\uff1a\u8d44\u6e90\u5c5e\u6027\u3002\u4e0d\u540c\u7c7b\u578b\u7684\u8d44\u6e90\u652f\u6301\u4fee\u6539\u4e0d\u540c\u7684\u5c5e\u6027\uff0c\u5f53\u524d\u652f\u6301\u4fee\u6539\u4ee5\u4e0b\u8d44\u6e90\u7684 Hive metastore \u5730\u5740\u3002","\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Apache Iceberg \u8d44\u6e90\u652f\u6301\u4fee\u6539\u4ee5\u4e0b\u5c5e\u6027\uff1a","\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"iceberg.catalog-impl"}),"\uff1a",(0,t.jsx)(s.a,{href:"/doc/zh/docs/3.0/data_source/External_table#%E6%AD%A5%E9%AA%A4%E4%B8%80%E5%88%9B%E5%BB%BA-iceberg-%E8%B5%84%E6%BA%90",children:"custom catalog"})," \u7684\u5168\u9650\u5b9a\u7c7b\u540d\u3002"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"iceberg.catalog.hive.metastore.uris"}),"\uff1aHive metastore \u5730\u5740\u3002"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["Apache Hive\u2122 \u548c Apache Hudi \u8d44\u6e90\u652f\u6301\u4fee\u6539 ",(0,t.jsx)(s.code,{children:"hive.metastore.uris"}),"\uff0c\u5373 Hive metastore \u5730\u5740\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"\u6ce8\u610f\u4e8b\u9879",children:"\u6ce8\u610f\u4e8b\u9879"}),"\n",(0,t.jsx)(s.p,{children:"\u5f15\u7528\u4e00\u4e2a\u8d44\u6e90\u521b\u5efa\u5916\u90e8\u8868\u540e\uff0c\u5982\u679c\u4fee\u6539\u4e86\u8be5\u8d44\u6e90\u7684 Hive metastore \u5730\u5740\u4f1a\u5bfc\u81f4\u8be5\u5916\u90e8\u8868\u4e0d\u53ef\u7528\u3002\u82e5\u4ecd\u60f3\u4f7f\u7528\u8be5\u5916\u90e8\u8868\u67e5\u8be2\u6570\u636e\uff0c\u9700\u4fdd\u8bc1\u65b0 Hive metastore \u4e2d\u5b58\u5728\u4e0e\u539f Hive metastore \u4e2d\u540d\u79f0\u548c\u8868\u7ed3\u6784\u76f8\u540c\u7684\u6570\u636e\u8868\u3002"}),"\n",(0,t.jsx)(s.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,t.jsxs)(s.p,{children:["\u4fee\u6539 Apache Hive\u2122 \u8d44\u6e90 ",(0,t.jsx)(s.code,{children:"hive0"})," \u7684 Hive metastore \u5730\u5740\u3002"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-SQL",children:'ALTER RESOURCE \'hive0\' SET PROPERTIES ("hive.metastore.uris" = "thrift://10.10.44.91:9083")\n'})})]})}const h=function(e={}){const{wrapper:s}=Object.assign({},(0,i.ah)(),e.components);return s?(0,t.jsx)(s,Object.assign({},e,{children:(0,t.jsx)(o,e)})):o(e)}},11151:(e,s,n)=>{n.d(s,{Zo:()=>a,ah:()=>r});var t=n(67294);const i=t.createContext({});function r(e){const s=t.useContext(i);return t.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const c={};function a({components:e,children:s,disableParentContext:n}){let a;return a=n?"function"==typeof e?e({}):e||c:r(e),t.createElement(i.Provider,{value:a},s)}}}]);