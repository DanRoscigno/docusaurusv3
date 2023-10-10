"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[54284],{87312:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var t=n(85893),r=n(11151);const i={},d="DROP REPOSITORY",c={id:"sql-reference/sql-statements/data-definition/DROP REPOSITORY",title:"DROP REPOSITORY",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.0/sql-reference/sql-statements/data-definition/DROP REPOSITORY.md",sourceDirName:"sql-reference/sql-statements/data-definition",slug:"/sql-reference/sql-statements/data-definition/DROP REPOSITORY",permalink:"/docusaurusv3/zh/docs/3.0/sql-reference/sql-statements/data-definition/DROP REPOSITORY",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/sql-reference/sql-statements/data-definition/DROP REPOSITORY.md",tags:[],version:"3.0",frontMatter:{},sidebar:"documentation",previous:{title:"DROP MATERIALIZED VIEW",permalink:"/docusaurusv3/zh/docs/3.0/sql-reference/sql-statements/data-definition/DROP MATERIALIZED VIEW"},next:{title:"DROP RESOURCE",permalink:"/docusaurusv3/zh/docs/3.0/sql-reference/sql-statements/data-definition/DROP RESOURCE"}},o={},l=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function a(e){const s=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",blockquote:"blockquote",strong:"strong",ul:"ul",li:"li",pre:"pre",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,r.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"drop-repository",children:"DROP REPOSITORY"}),"\n",(0,t.jsx)(s.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,t.jsxs)(s.p,{children:["\u5220\u9664\u4e00\u4e2a\u4ed3\u5e93\u3002\u4ed3\u5e93\u7528\u4e8e ",(0,t.jsx)(s.a,{href:"/docusaurusv3/zh/docs/3.0/administration/Backup_and_restore",children:"\u5907\u4efd\u548c\u6062\u590d"})," \u6570\u636e\u5e93\u6570\u636e\u3002"]}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"\u6ce8\u610f"})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"\u53ea\u6709\u62e5\u6709 System \u7ea7 REPOSITORY \u6743\u9650\u7684\u7528\u6237\u624d\u53ef\u4ee5\u5220\u9664\u4ed3\u5e93\u3002"}),"\n",(0,t.jsx)(s.li,{children:"\u8be5\u64cd\u4f5c\u4ec5\u5220\u9664\u4ed3\u5e93\u5728 StarRocks \u4e2d\u7684\u6620\u5c04\uff0c\u4e0d\u4f1a\u5220\u9664\u5b9e\u9645\u7684\u4ed3\u5e93\u6570\u636e\u3002\u5982\u9700\u5220\u9664\u5907\u4efd\u6570\u636e\uff0c\u60a8\u9700\u8981\u624b\u52a8\u5220\u9664\u5907\u4efd\u5728\u8fdc\u7aef\u5b58\u50a8\u7cfb\u7edf\u7684\u5feb\u7167\u8def\u5f84\u3002\u5220\u9664\u540e\uff0c\u60a8\u53ef\u4ee5\u518d\u6b21\u901a\u8fc7\u6307\u5b9a\u76f8\u540c\u7684\u8fdc\u7aef\u5b58\u50a8\u7cfb\u7edf\u8def\u5f84\u6620\u5c04\u5230\u8be5\u4ed3\u5e93\u3002"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-SQL",children:"DROP REPOSITORY <repository_name>\n"})}),"\n",(0,t.jsx)(s.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:(0,t.jsx)(s.strong,{children:"\u53c2\u6570"})}),(0,t.jsx)(s.th,{children:(0,t.jsx)(s.strong,{children:"\u8bf4\u660e"})})]})}),(0,t.jsx)(s.tbody,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"repository_name"}),(0,t.jsx)(s.td,{children:"\u8981\u5220\u9664\u7684\u4ed3\u5e93\u540d\u3002"})]})})]}),"\n",(0,t.jsx)(s.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,t.jsxs)(s.p,{children:["\u793a\u4f8b\u4e00\uff1a\u5220\u9664\u540d\u4e3a ",(0,t.jsx)(s.code,{children:"oss_repo"})," \u7684\u4ed3\u5e93\u3002"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-SQL",children:"DROP REPOSITORY `oss_repo`;\n"})})]})}const h=function(e={}){const{wrapper:s}=Object.assign({},(0,r.ah)(),e.components);return s?(0,t.jsx)(s,Object.assign({},e,{children:(0,t.jsx)(a,e)})):a(e)}},11151:(e,s,n)=>{n.d(s,{Zo:()=>c,ah:()=>i});var t=n(67294);const r=t.createContext({});function i(e){const s=t.useContext(r);return t.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const d={};function c({components:e,children:s,disableParentContext:n}){let c;return c=n?"function"==typeof e?e({}):e||d:i(e),t.createElement(r.Provider,{value:c},s)}}}]);