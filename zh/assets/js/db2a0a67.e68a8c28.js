"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[85014],{52098:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var s=a(85893),t=a(11151);const i={displayed_sidebar:"Chinese"},r="\u6570\u636e\u5220\u9664\u6062\u590d",l={id:"administration/Data_recovery",title:"\u6570\u636e\u5220\u9664\u6062\u590d",description:"StarRocks\u652f\u6301\u5bf9\u8bef\u5220\u9664\u7684\u6570\u636e\u5e93/\u8868/\u5206\u533a\u8fdb\u884c\u6570\u636e\u6062\u590d\uff0c\u5728drop table\u6216\u8005 drop database\u4e4b\u540e\uff0cStarRocks\u4e0d\u4f1a\u7acb\u523b\u5bf9\u6570\u636e\u8fdb\u884c\u7269\u7406\u5220\u9664\uff0c\u800c\u662f\u5728Trash\u4e2d\u4fdd\u7559\u4e00\u6bb5\u65f6\u95f4\uff08\u9ed8\u8ba41\u5929\uff09\uff0c\u7ba1\u7406\u5458\u53ef\u4ee5\u901a\u8fc7RECOVER\u547d\u4ee4\u5bf9\u8bef\u5220\u9664\u7684\u6570\u636e\u8fdb\u884c\u6062\u590d",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.1/administration/Data_recovery.md",sourceDirName:"administration",slug:"/administration/Data_recovery",permalink:"/zh/docs/2.1/administration/Data_recovery",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/administration/Data_recovery.md",tags:[],version:"2.1",frontMatter:{displayed_sidebar:"Chinese"},sidebar:"Chinese",previous:{title:"\u53c2\u6570\u914d\u7f6e",permalink:"/zh/docs/2.1/administration/Configuration"},next:{title:"\u8d1f\u8f7d\u5747\u8861",permalink:"/zh/docs/2.1/administration/Load_balance"}},c={},d=[{value:"\u76f8\u5173\u547d\u4ee4",id:"\u76f8\u5173\u547d\u4ee4",level:2},{value:"\u91cd\u70b9\u8bf4\u660e",id:"\u91cd\u70b9\u8bf4\u660e",level:2},{value:"\u6837\u4f8b",id:"\u6837\u4f8b",level:2}];function o(e){const n=Object.assign({h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code",ol:"ol",li:"li"},(0,t.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"\u6570\u636e\u5220\u9664\u6062\u590d",children:"\u6570\u636e\u5220\u9664\u6062\u590d"}),"\n",(0,s.jsx)(n.p,{children:"StarRocks\u652f\u6301\u5bf9\u8bef\u5220\u9664\u7684\u6570\u636e\u5e93/\u8868/\u5206\u533a\u8fdb\u884c\u6570\u636e\u6062\u590d\uff0c\u5728drop table\u6216\u8005 drop database\u4e4b\u540e\uff0cStarRocks\u4e0d\u4f1a\u7acb\u523b\u5bf9\u6570\u636e\u8fdb\u884c\u7269\u7406\u5220\u9664\uff0c\u800c\u662f\u5728Trash\u4e2d\u4fdd\u7559\u4e00\u6bb5\u65f6\u95f4\uff08\u9ed8\u8ba41\u5929\uff09\uff0c\u7ba1\u7406\u5458\u53ef\u4ee5\u901a\u8fc7RECOVER\u547d\u4ee4\u5bf9\u8bef\u5220\u9664\u7684\u6570\u636e\u8fdb\u884c\u6062\u590d"}),"\n",(0,s.jsx)(n.h2,{id:"\u76f8\u5173\u547d\u4ee4",children:"\u76f8\u5173\u547d\u4ee4"}),"\n",(0,s.jsx)(n.p,{children:"\u8bed\u6cd5\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"-- 1) \u6062\u590d database\nRECOVER DATABASE db_name;\n-- 2) \u6062\u590d table\nRECOVER TABLE [db_name.]table_name;\n-- 3) \u6062\u590d partition\nRECOVER PARTITION partition_name FROM [db_name.]table_name;\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u91cd\u70b9\u8bf4\u660e",children:"\u91cd\u70b9\u8bf4\u660e"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"\u8be5\u64cd\u4f5c\u4ec5\u80fd\u6062\u590d\u4e4b\u524d\u4e00\u6bb5\u65f6\u95f4\u5185\u5220\u9664\u7684\u5143\u4fe1\u606f\u3002\u9ed8\u8ba4\u4e3a 1 \u5929\u3002\uff08\u53ef\u901a\u8fc7fe.conf\u4e2dcatalog_trash_expire_second\u53c2\u6570\u914d\u7f6e\uff09"}),"\n",(0,s.jsx)(n.li,{children:"\u5982\u679c\u5220\u9664\u5143\u4fe1\u606f\u540e\u65b0\u5efa\u7acb\u4e86\u540c\u540d\u540c\u7c7b\u578b\u7684\u5143\u4fe1\u606f\uff0c\u5219\u4e4b\u524d\u5220\u9664\u7684\u5143\u4fe1\u606f\u4e0d\u80fd\u88ab\u6062\u590d"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u6837\u4f8b",children:"\u6837\u4f8b"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u6062\u590d\u540d\u4e3a example_db \u7684 database"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"RECOVER DATABASE example_db;\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u6062\u590d\u540d\u4e3a example_tbl \u7684 table"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"RECOVER TABLE example_db.example_tbl;\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u6062\u590d\u8868 example_tbl \u4e2d\u540d\u4e3a p1 \u7684 partition"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"RECOVER PARTITION p1 FROM example_tbl;\n"})}),"\n"]}),"\n"]})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(o,e)})):o(e)}},11151:(e,n,a)=>{a.d(n,{Zo:()=>l,ah:()=>i});var s=a(67294);const t=s.createContext({});function i(e){const n=s.useContext(t);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const r={};function l({components:e,children:n,disableParentContext:a}){let l;return l=a?"function"==typeof e?e({}):e||r:i(e),s.createElement(t.Provider,{value:l},n)}}}]);