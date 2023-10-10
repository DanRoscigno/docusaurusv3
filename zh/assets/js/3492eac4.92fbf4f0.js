"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[26075],{40997:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>l,contentTitle:()=>i,default:()=>o,frontMatter:()=>d,metadata:()=>c,toc:()=>h});var n=t(85893),r=t(11151);const d={},i="SHOW META",c={id:"sql-reference/sql-statements/data-definition/SHOW META",title:"SHOW META",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.0/sql-reference/sql-statements/data-definition/SHOW META.md",sourceDirName:"sql-reference/sql-statements/data-definition",slug:"/sql-reference/sql-statements/data-definition/SHOW META",permalink:"/docusaurusv3/zh/docs/3.0/sql-reference/sql-statements/data-definition/SHOW META",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/sql-reference/sql-statements/data-definition/SHOW META.md",tags:[],version:"3.0",frontMatter:{},sidebar:"documentation",previous:{title:"SHOW ANALYZE STATUS",permalink:"/docusaurusv3/zh/docs/3.0/sql-reference/sql-statements/data-definition/SHOW ANALYZE STATUS"},next:{title:"SHOW RESOURCES",permalink:"/docusaurusv3/zh/docs/3.0/sql-reference/sql-statements/data-definition/SHOW RESOURCES"}},l={},h=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u57fa\u7840\u7edf\u8ba1\u4fe1\u606f\u5143\u6570\u636e",id:"\u57fa\u7840\u7edf\u8ba1\u4fe1\u606f\u5143\u6570\u636e",level:3},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:4},{value:"\u76f4\u65b9\u56fe\u7edf\u8ba1\u4fe1\u606f\u5143\u6570\u636e",id:"\u76f4\u65b9\u56fe\u7edf\u8ba1\u4fe1\u606f\u5143\u6570\u636e",level:3},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5-1",level:4},{value:"\u76f8\u5173\u6587\u6863",id:"\u76f8\u5173\u6587\u6863",level:2}];function a(e){const s=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",h3:"h3",h4:"h4",pre:"pre",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",strong:"strong",tbody:"tbody",td:"td"},(0,r.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"show-meta",children:"SHOW META"}),"\n",(0,n.jsx)(s.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,n.jsx)(s.p,{children:"\u67e5\u770b\u7edf\u8ba1\u4fe1\u606f\u5143\u6570\u636e\u3002\u8be5\u547d\u4ee4\u652f\u6301\u67e5\u770b\u57fa\u7840\u7edf\u8ba1\u4fe1\u606f\u548c\u76f4\u65b9\u56fe\u7edf\u8ba1\u4fe1\u606f\u7684\u5143\u6570\u636e\u3002\u8be5\u8bed\u53e5\u4ece 2.4 \u7248\u672c\u5f00\u59cb\u652f\u6301\u3002"}),"\n",(0,n.jsxs)(s.p,{children:["\u66f4\u591a CBO \u7edf\u8ba1\u4fe1\u606f\u91c7\u96c6\u7684\u5185\u5bb9\uff0c\u53c2\u89c1 ",(0,n.jsx)(s.a,{href:"/docusaurusv3/zh/docs/3.0/using_starrocks/Cost_based_optimizer",children:"CBO \u7edf\u8ba1\u4fe1\u606f"}),"\u3002"]}),"\n",(0,n.jsx)(s.h3,{id:"\u57fa\u7840\u7edf\u8ba1\u4fe1\u606f\u5143\u6570\u636e",children:"\u57fa\u7840\u7edf\u8ba1\u4fe1\u606f\u5143\u6570\u636e"}),"\n",(0,n.jsx)(s.h4,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-SQL",children:"SHOW STATS META [WHERE predicate]\n"})}),"\n",(0,n.jsx)(s.p,{children:"\u8be5\u8bed\u53e5\u8fd4\u56de\u5982\u4e0b\u5217\u3002"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:(0,n.jsx)(s.strong,{children:"\u5217\u540d"})}),(0,n.jsx)(s.th,{children:(0,n.jsx)(s.strong,{children:"\u8bf4\u660e"})})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Database"}),(0,n.jsx)(s.td,{children:"\u6570\u636e\u5e93\u540d\u3002"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Table"}),(0,n.jsx)(s.td,{children:"\u8868\u540d\u3002"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Columns"}),(0,n.jsx)(s.td,{children:"\u5217\u540d\u3002"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Type"}),(0,n.jsxs)(s.td,{children:["\u7edf\u8ba1\u4fe1\u606f\u7684\u7c7b\u578b\uff0c",(0,n.jsx)(s.code,{children:"FULL"})," \u8868\u793a\u5168\u91cf\uff0c",(0,n.jsx)(s.code,{children:"SAMPLE"})," \u8868\u793a\u62bd\u6837\u3002"]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"UpdateTime"}),(0,n.jsx)(s.td,{children:"\u5f53\u524d\u8868\u7684\u6700\u65b0\u7edf\u8ba1\u4fe1\u606f\u66f4\u65b0\u65f6\u95f4\u3002"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Properties"}),(0,n.jsx)(s.td,{children:"\u81ea\u5b9a\u4e49\u53c2\u6570\u4fe1\u606f\u3002"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Healthy"}),(0,n.jsx)(s.td,{children:"\u7edf\u8ba1\u4fe1\u606f\u5065\u5eb7\u5ea6\u3002"})]})]})]}),"\n",(0,n.jsx)(s.h3,{id:"\u76f4\u65b9\u56fe\u7edf\u8ba1\u4fe1\u606f\u5143\u6570\u636e",children:"\u76f4\u65b9\u56fe\u7edf\u8ba1\u4fe1\u606f\u5143\u6570\u636e"}),"\n",(0,n.jsx)(s.h4,{id:"\u8bed\u6cd5-1",children:"\u8bed\u6cd5"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-SQL",children:"SHOW HISTOGRAM META [WHERE predicate];\n"})}),"\n",(0,n.jsx)(s.p,{children:"\u8be5\u8bed\u53e5\u8fd4\u56de\u5982\u4e0b\u5217\u3002"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:(0,n.jsx)(s.strong,{children:"\u5217\u540d"})}),(0,n.jsx)(s.th,{children:(0,n.jsx)(s.strong,{children:"\u8bf4\u660e"})})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Database"}),(0,n.jsx)(s.td,{children:"\u6570\u636e\u5e93\u540d\u3002"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Table"}),(0,n.jsx)(s.td,{children:"\u8868\u540d\u3002"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Column"}),(0,n.jsx)(s.td,{children:"\u5217\u540d\u3002"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Type"}),(0,n.jsxs)(s.td,{children:["\u7edf\u8ba1\u4fe1\u606f\u7684\u7c7b\u578b\uff0c\u76f4\u65b9\u56fe\u56fa\u5b9a\u4e3a ",(0,n.jsx)(s.code,{children:"HISTOGRAM"}),"\u3002"]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"UpdateTime"}),(0,n.jsx)(s.td,{children:"\u5f53\u524d\u8868\u7684\u6700\u65b0\u7edf\u8ba1\u4fe1\u606f\u66f4\u65b0\u65f6\u95f4\u3002"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Properties"}),(0,n.jsx)(s.td,{children:"\u81ea\u5b9a\u4e49\u53c2\u6570\u4fe1\u606f\u3002"})]})]})]}),"\n",(0,n.jsx)(s.h2,{id:"\u76f8\u5173\u6587\u6863",children:"\u76f8\u5173\u6587\u6863"}),"\n",(0,n.jsxs)(s.p,{children:["\u60f3\u4e86\u89e3\u66f4\u591a CBO \u7edf\u8ba1\u4fe1\u606f\u91c7\u96c6\u7684\u5185\u5bb9\uff0c\u53c2\u89c1 ",(0,n.jsx)(s.a,{href:"/docusaurusv3/zh/docs/3.0/using_starrocks/Cost_based_optimizer",children:"CBO \u7edf\u8ba1\u4fe1\u606f"}),"\u3002"]})]})}const o=function(e={}){const{wrapper:s}=Object.assign({},(0,r.ah)(),e.components);return s?(0,n.jsx)(s,Object.assign({},e,{children:(0,n.jsx)(a,e)})):a(e)}},11151:(e,s,t)=>{t.d(s,{Zo:()=>c,ah:()=>d});var n=t(67294);const r=n.createContext({});function d(e){const s=n.useContext(r);return n.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const i={};function c({components:e,children:s,disableParentContext:t}){let c;return c=t?"function"==typeof e?e({}):e||i:d(e),n.createElement(r.Provider,{value:c},s)}}}]);