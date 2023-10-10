"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[19838],{73897:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>c,metadata:()=>o,toc:()=>d});var s=n(85893),i=n(11151);const c={},r="time_to_sec",o={id:"sql-reference/sql-functions/date-time-functions/time_to_sec",title:"time_to_sec",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.1/sql-reference/sql-functions/date-time-functions/time_to_sec.md",sourceDirName:"sql-reference/sql-functions/date-time-functions",slug:"/sql-reference/sql-functions/date-time-functions/time_to_sec",permalink:"/docusaurusv3/zh/docs/sql-reference/sql-functions/date-time-functions/time_to_sec",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-functions/date-time-functions/time_to_sec.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"time_slice",permalink:"/docusaurusv3/zh/docs/sql-reference/sql-functions/date-time-functions/time_slice"},next:{title:"timediff",permalink:"/docusaurusv3/zh/docs/sql-reference/sql-functions/date-time-functions/timediff"}},l={},d=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function a(e){const t=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",pre:"pre"},(0,i.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"time_to_sec",children:"time_to_sec"}),"\n",(0,s.jsx)(t.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,s.jsxs)(t.p,{children:["\u5c06 ",(0,s.jsx)(t.code,{children:"time"})," \u65f6\u95f4\u503c\u8f6c\u6362\u4e3a\u79d2\u6570\uff0c\u8f6c\u6362\u516c\u5f0f\u4e3a:"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:"${\u5c0f\u65f6}\\times{3600} + {\u5206\u949f}\\times{60} + \u79d2$"})}),"\n",(0,s.jsx)(t.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-Haskell",children:"BIGINT time_to_sec(TIME time)\n"})}),"\n",(0,s.jsx)(t.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"time"}),"\uff1a\u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u4e3a TIME\u3002"]}),"\n",(0,s.jsx)(t.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,s.jsx)(t.p,{children:"\u8fd4\u56de BIGINT \u7c7b\u578b\u7684\u503c\u3002\u5982\u679c\u8f93\u5165\u503c\u683c\u5f0f\u975e\u6cd5\uff0c\u8fd4\u56de NULL\u3002"}),"\n",(0,s.jsx)(t.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-plain",metastring:"text",children:"select time_to_sec('12:13:14');\n+-----------------------------+\n| time_to_sec('12:13:14')     |\n+-----------------------------+\n|                        43994|\n+-----------------------------+\n"})})]})}const u=function(e={}){const{wrapper:t}=Object.assign({},(0,i.ah)(),e.components);return t?(0,s.jsx)(t,Object.assign({},e,{children:(0,s.jsx)(a,e)})):a(e)}},11151:(e,t,n)=>{n.d(t,{Zo:()=>o,ah:()=>c});var s=n(67294);const i=s.createContext({});function c(e){const t=s.useContext(i);return s.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const r={};function o({components:e,children:t,disableParentContext:n}){let o;return o=n?"function"==typeof e?e({}):e||r:c(e),s.createElement(i.Provider,{value:o},t)}}}]);