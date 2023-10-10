"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[5459],{8930:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>r,toc:()=>o});var s=n(85893),i=n(11151);const a={},c="timestampadd",r={id:"sql-reference/sql-functions/date-time-functions/timestampadd",title:"timestampadd",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.1/sql-reference/sql-functions/date-time-functions/timestampadd.md",sourceDirName:"sql-reference/sql-functions/date-time-functions",slug:"/sql-reference/sql-functions/date-time-functions/timestampadd",permalink:"/docusaurusv3/zh/docs/latest/sql-reference/sql-functions/date-time-functions/timestampadd",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-functions/date-time-functions/timestampadd.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"timestamp",permalink:"/docusaurusv3/zh/docs/latest/sql-reference/sql-functions/date-time-functions/timestamp"},next:{title:"timestampdiff",permalink:"/docusaurusv3/zh/docs/latest/sql-reference/sql-functions/date-time-functions/timestampdiff"}},d={},o=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function l(e){const t=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",pre:"pre"},(0,i.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"timestampadd",children:"timestampadd"}),"\n",(0,s.jsx)(t.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,s.jsxs)(t.p,{children:["\u5c06\u6574\u6570\u8868\u8fbe\u5f0f\u95f4\u9694\u6dfb\u52a0\u5230\u65e5\u671f\u6216\u65e5\u671f\u65f6\u95f4\u8868\u8fbe\u5f0f ",(0,s.jsx)(t.code,{children:"datetime_expr"})," \u4e2d\u3002"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"interval"})," \u7684\u5355\u4f4d\u7531 ",(0,s.jsx)(t.code,{children:"unit"})," \u53c2\u6570\u7ed9\u51fa\uff0c\u5e94\u8be5\u662f\u4e0b\u5217\u503c\u4e4b\u4e00:"]}),"\n",(0,s.jsx)(t.p,{children:"SECOND\uff0cMINUTE\uff0cHOUR\uff0cDAY\uff0cWEEK\uff0cMONTH\uff0cYEAR\u3002"}),"\n",(0,s.jsx)(t.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-Haskell",children:"DATETIME TIMESTAMPADD(unit, interval, DATETIME datetime_expr)\n"})}),"\n",(0,s.jsx)(t.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-plain",metastring:"text",children:"\nSELECT TIMESTAMPADD(MINUTE,1,'2019-01-02');\n+------------------------------------------------+\n| timestampadd(MINUTE, 1, '2019-01-02 00:00:00') |\n+------------------------------------------------+\n| 2019-01-02 00:01:00                            |\n+------------------------------------------------+\n\nSELECT TIMESTAMPADD(WEEK,1,'2019-01-02');\n+----------------------------------------------+\n| timestampadd(WEEK, 1, '2019-01-02 00:00:00') |\n+----------------------------------------------+\n| 2019-01-09 00:00:00                          |\n+----------------------------------------------+\n"})})]})}const u=function(e={}){const{wrapper:t}=Object.assign({},(0,i.ah)(),e.components);return t?(0,s.jsx)(t,Object.assign({},e,{children:(0,s.jsx)(l,e)})):l(e)}},11151:(e,t,n)=>{n.d(t,{Zo:()=>r,ah:()=>a});var s=n(67294);const i=s.createContext({});function a(e){const t=s.useContext(i);return s.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const c={};function r({components:e,children:t,disableParentContext:n}){let r;return r=n?"function"==typeof e?e({}):e||c:a(e),s.createElement(i.Provider,{value:r},t)}}}]);