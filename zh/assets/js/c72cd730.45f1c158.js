"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[57260],{14744:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>i,contentTitle:()=>a,default:()=>h,frontMatter:()=>t,metadata:()=>l,toc:()=>o});var c=s(85893),r=s(11151);const t={displayed_sidebar:"Chinese"},a="SET PROPERTY",l={id:"sql-reference/sql-statements/account-management/SET_PROPERTY",title:"SET PROPERTY",description:"\u63cf\u8ff0",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.2/sql-reference/sql-statements/account-management/SET_PROPERTY.md",sourceDirName:"sql-reference/sql-statements/account-management",slug:"/sql-reference/sql-statements/account-management/SET_PROPERTY",permalink:"/zh/docs/2.2/sql-reference/sql-statements/account-management/SET_PROPERTY",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-statements/account-management/SET_PROPERTY.md",tags:[],version:"2.2",frontMatter:{displayed_sidebar:"Chinese"},sidebar:"Chinese",previous:{title:"SET PASSWORD",permalink:"/zh/docs/2.2/sql-reference/sql-statements/account-management/SET_PASSWORD"},next:{title:"SHOW GRANTS",permalink:"/zh/docs/2.2/sql-reference/sql-statements/account-management/SHOW_GRANTS"}},i={},o=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u5173\u952e\u5b57(keywords)",id:"\u5173\u952e\u5b57keywords",level:2}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",strong:"strong",ol:"ol",li:"li"},(0,r.ah)(),e.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.h1,{id:"set-property",children:"SET PROPERTY"}),"\n",(0,c.jsx)(n.h2,{id:"\u63cf\u8ff0",children:"\u63cf\u8ff0"}),"\n",(0,c.jsx)(n.p,{children:"\u8bbe\u7f6e\u7528\u6237\u7684\u5c5e\u6027\uff0c\u5305\u62ec\u5206\u914d\u7ed9\u7528\u6237\u7684\u8d44\u6e90\u7b49\u3002"}),"\n",(0,c.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,c.jsx)(n.p,{children:"\u6ce8\uff1a\u65b9\u62ec\u53f7 [] \u4e2d\u5185\u5bb9\u53ef\u7701\u7565\u4e0d\u5199\u3002"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-SQL",children:"SET PROPERTY [FOR 'user'] 'key' = 'value' [, 'key' = 'value'];\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u8fd9\u91cc\u8bbe\u7f6e\u7684\u7528\u6237\u5c5e\u6027\uff0c\u662f\u9488\u5bf9 user \u7684\uff0c\u800c\u4e0d\u662f user_identity\u3002\u5373\u5047\u8bbe\u901a\u8fc7 CREATE USER \u8bed\u53e5\u521b\u5efa\u4e86\u4e24\u4e2a\u7528\u6237 ",(0,c.jsx)(n.code,{children:"'jack'@'%'"})," \u548c ",(0,c.jsx)(n.code,{children:"'jack'@'192.%'"}),"\uff0c\u5219\u4f7f\u7528 ",(0,c.jsx)(n.code,{children:"SET PROPERTY"})," \u8bed\u53e5\uff0c\u53ea\u80fd\u9488\u5bf9 jack \u8fd9\u4e2a\u7528\u6237\uff0c\u800c\u4e0d\u662f ",(0,c.jsx)(n.code,{children:"'jack'@'%'"})," \u6216 ",(0,c.jsx)(n.code,{children:"'jack'@'192.%'"}),"\u3002"]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"key:"})}),"\n",(0,c.jsx)(n.p,{children:"\u8d85\u7ea7\u7528\u6237\u6743\u9650:"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-plain",metastring:"text",children:"max_user_connections: \u6700\u5927\u8fde\u63a5\u6570\u3002\nresource.cpu_share: cpu\u8d44\u6e90\u5206\u914d\u3002\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u666e\u901a\u7528\u6237\u6743\u9650\uff1a"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-plain",metastring:"text",children:"quota.normal: normal\u7ea7\u522b\u7684\u8d44\u6e90\u5206\u914d\u3002\nquota.high: high\u7ea7\u522b\u7684\u8d44\u6e90\u5206\u914d\u3002\nquota.low: low\u7ea7\u522b\u7684\u8d44\u6e90\u5206\u914d\u3002\n"})}),"\n",(0,c.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,c.jsxs)(n.ol,{children:["\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:"\u4fee\u6539\u7528\u6237 jack \u6700\u5927\u8fde\u63a5\u6570\u4e3a 1000\u3002"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-SQL",children:"SET PROPERTY FOR 'jack' 'max_user_connections' = '1000';\n"})}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:"\u4fee\u6539\u7528\u6237 jack \u7684 cpu_share \u4e3a 1000\u3002"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-SQL",children:"SET PROPERTY FOR 'jack' 'resource.cpu_share' = '1000';\n"})}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:"\u4fee\u6539 jack \u7528\u6237\u7684 normal \u7ec4\u7684\u6743\u91cd\u3002"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-SQL",children:"SET PROPERTY FOR 'jack' 'quota.normal' = '400';\n"})}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(n.h2,{id:"\u5173\u952e\u5b57keywords",children:"\u5173\u952e\u5b57(keywords)"}),"\n",(0,c.jsx)(n.p,{children:"SET, PROPERTY"})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,c.jsx)(n,Object.assign({},e,{children:(0,c.jsx)(d,e)})):d(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>l,ah:()=>t});var c=s(67294);const r=c.createContext({});function t(e){const n=c.useContext(r);return c.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const a={};function l({components:e,children:n,disableParentContext:s}){let l;return l=s?"function"==typeof e?e({}):e||a:t(e),c.createElement(r.Provider,{value:l},n)}}}]);