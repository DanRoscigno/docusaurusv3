"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[1283],{61438:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>o});var t=s(85893),i=s(11151);const r={},a="ADMIN SHOW CONFIG",l={id:"sql-reference/sql-statements/Administration/ADMIN_SHOW_CONFIG",title:"ADMIN SHOW CONFIG",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.5/sql-reference/sql-statements/Administration/ADMIN_SHOW_CONFIG.md",sourceDirName:"sql-reference/sql-statements/Administration",slug:"/sql-reference/sql-statements/Administration/ADMIN_SHOW_CONFIG",permalink:"/doc/zh/docs/2.5/sql-reference/sql-statements/Administration/ADMIN_SHOW_CONFIG",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-2.5/sql-reference/sql-statements/Administration/ADMIN_SHOW_CONFIG.md",tags:[],version:"2.5",frontMatter:{},sidebar:"Chinese31",previous:{title:"ADMIN SET REPLICA STATUS",permalink:"/doc/zh/docs/2.5/sql-reference/sql-statements/Administration/ADMIN_SET_REPLICA_STATUS"},next:{title:"ADMIN SHOW REPLICA DISTRIBUTION",permalink:"/doc/zh/docs/2.5/sql-reference/sql-statements/Administration/ADMIN_SHOW_REPLICA_DISTRIBUTION"}},c={},o=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",pre:"pre",code:"code",ol:"ol",li:"li"},(0,i.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"admin-show-config",children:"ADMIN SHOW CONFIG"}),"\n",(0,t.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,t.jsx)(n.p,{children:"\u8be5\u8bed\u53e5\u7528\u4e8e\u5c55\u793a\u5f53\u524d\u96c6\u7fa4\u7684\u914d\u7f6e\uff08\u5f53\u524d\u4ec5\u652f\u6301\u5c55\u793a FE \u7684\u914d\u7f6e\u9879\uff09\u3002"}),"\n",(0,t.jsxs)(n.p,{children:["\u5173\u4e8e\u6bcf\u4e2a\u914d\u7f6e\u9879\u7684\u542b\u4e49\uff0c\u53c2\u89c1",(0,t.jsx)(n.a,{href:"/doc/zh/docs/2.5/administration/Configuration#fe-%E9%85%8D%E7%BD%AE%E9%A1%B9",children:"FE \u914d\u7f6e\u9879"}),"\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u5982\u679c\u8981\u52a8\u6001\u8bbe\u7f6e\u6216\u4fee\u6539\u96c6\u7fa4\u7684\u914d\u7f6e\u9879\uff0c\u53c2\u89c1 ",(0,t.jsx)(n.a,{href:"/doc/zh/docs/2.5/sql-reference/sql-statements/Administration/ADMIN_SET_CONFIG",children:"ADMIN SET CONFIG"}),"\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:'ADMIN SHOW FRONTEND CONFIG [LIKE "pattern"]\n'})}),"\n",(0,t.jsx)(n.p,{children:"\u8bf4\u660e\uff1a"}),"\n",(0,t.jsx)(n.p,{children:"\u7ed3\u679c\u4e2d\u7684\u5404\u5217\u542b\u4e49\u5982\u4e0b\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plain",metastring:"text",children:"1. Key         \u914d\u7f6e\u9879\u540d\u79f0\n2. AliasNames  \u914d\u7f6e\u9879\u522b\u540d\n2. Value       \u914d\u7f6e\u9879\u53d6\u503c\n3. Type        \u914d\u7f6e\u9879\u6570\u636e\u7c7b\u578b\n4. IsMutable   \u662f\u5426\u53ef\u4ee5\u901a\u8fc7 ADMIN SET CONFIG \u547d\u4ee4\u52a8\u6001\u8bbe\u7f6e\n5. Comment     \u914d\u7f6e\u9879\u8bf4\u660e\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u67e5\u770b\u5f53\u524d FE \u8282\u70b9\u7684\u914d\u7f6e\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"ADMIN SHOW FRONTEND CONFIG;\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u4f7f\u7528 like \u8c13\u8bcd\u641c\u7d22\u5f53\u524d FE \u8282\u70b9\u7684\u914d\u7f6e\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plain",metastring:"text",children:"mysql> ADMIN SHOW FRONTEND CONFIG LIKE '%check_java_version%';\n+--------------------+------------+-------+---------+-----------+---------+\n| Key                | AliasNames | Value | Type    | IsMutable | Comment |\n+--------------------+------------+-------+---------+-----------+---------+\n| check_java_version | []         | true  | boolean | false     |         |\n+--------------------+------------+-------+---------+-----------+---------+\n1 row in set (0.00 sec)\n\n"})}),"\n"]}),"\n"]})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(d,e)})):d(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>l,ah:()=>r});var t=s(67294);const i=t.createContext({});function r(e){const n=t.useContext(i);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const a={};function l({components:e,children:n,disableParentContext:s}){let l;return l=s?"function"==typeof e?e({}):e||a:r(e),t.createElement(i.Provider,{value:l},n)}}}]);