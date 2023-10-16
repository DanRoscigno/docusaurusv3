"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[82401],{91345:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>c,metadata:()=>r,toc:()=>d});var s=t(85893),i=t(11151);const c={displayed_sidebar:"Chinese"},o="month",r={id:"sql-reference/sql-functions/date-time-functions/month",title:"month",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.5/sql-reference/sql-functions/date-time-functions/month.md",sourceDirName:"sql-reference/sql-functions/date-time-functions",slug:"/sql-reference/sql-functions/date-time-functions/month",permalink:"/doc/zh/docs/2.5/sql-reference/sql-functions/date-time-functions/month",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-functions/date-time-functions/month.md",tags:[],version:"2.5",frontMatter:{displayed_sidebar:"Chinese"},sidebar:"Chinese",previous:{title:"minutes_sub",permalink:"/doc/zh/docs/2.5/sql-reference/sql-functions/date-time-functions/minutes_sub"},next:{title:"monthname",permalink:"/doc/zh/docs/2.5/sql-reference/sql-functions/date-time-functions/monthname"}},l={},d=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function a(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code"},(0,i.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"month",children:"month"}),"\n",(0,s.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,s.jsx)(n.p,{children:"\u8fd4\u56de\u6307\u5b9a\u65e5\u671f\u4e2d\u7684\u6708\u4efd\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Haskell",children:"INT MONTH(DATE|DATETIME date)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"date"}),"\uff1a\u5fc5\u586b\u3002\u652f\u6301DATE\u548cDATETIME\u7c7b\u578b\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,s.jsxs)(n.p,{children:["\u8fd4\u56de INT \u7c7b\u578b\u7684\u503c\uff0c\u8303\u56f4 1~12\u3002\u6b64\u51fd\u6570\u4f1a\u5bf9\u6574\u6570\u548c\u5b57\u7b26\u4e32\u7c7b\u578b\u7684\u8f93\u5165\u8fdb\u884c\u9690\u5f0f\u8f6c\u6362\uff0c\u5982\u679c\u672a\u80fd\u4ece\u8f93\u5165\u4e2d\u89e3\u6790\u51fa\u5408\u6cd5\u6708\u4efd\uff0c\u5982 ",(0,s.jsx)(n.code,{children:"month('string')"}),"\uff0c\u5219\u8fd4\u56de NULL\u3002\u5982\u679c\u8f93\u5165\u6570\u636e\u7c7b\u578b\u975e\u6cd5\uff0c\u5982 ",(0,s.jsx)(n.code,{children:"month(3.1415)"}),"\uff0c\u5219\u8fd4\u56de\u62a5\u9519\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,s.jsxs)(n.p,{children:["\u793a\u4f8b\u4e00\uff1a\u8fd4\u56de '1987-01-01' \u4e2d\u7684\u6708\u4efd ",(0,s.jsx)(n.code,{children:"1"}),"\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"select month('1987-01-01');\n+---------------------+\n| month('1987-01-01') |\n+---------------------+\n|                   1 |\n+---------------------+\n1 row in set (0.01 sec)\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u793a\u4f8b\u4e8c\uff1a\u8fd4\u56de\u5f53\u524d\u6708\u4efd\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"select month(now());\n+--------------+\n| month(now()) |\n+--------------+\n|            7 |\n+--------------+\n1 row in set (0.01 sec)\n"})})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(a,e)})):a(e)}},11151:(e,n,t)=>{t.d(n,{Zo:()=>r,ah:()=>c});var s=t(67294);const i=s.createContext({});function c(e){const n=s.useContext(i);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const o={};function r({components:e,children:n,disableParentContext:t}){let r;return r=t?"function"==typeof e?e({}):e||o:c(e),s.createElement(i.Provider,{value:r},n)}}}]);