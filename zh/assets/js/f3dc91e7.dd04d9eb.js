"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[683],{18948:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>o,frontMatter:()=>t,metadata:()=>c,toc:()=>h});var r=s(85893),i=s(11151);const t={},d="ALTER MATERIALIZED VIEW",c={id:"sql-reference/sql-statements/data-definition/ALTER MATERIALIZED VIEW",title:"ALTER MATERIALIZED VIEW",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.0/sql-reference/sql-statements/data-definition/ALTER MATERIALIZED VIEW.md",sourceDirName:"sql-reference/sql-statements/data-definition",slug:"/sql-reference/sql-statements/data-definition/ALTER MATERIALIZED VIEW",permalink:"/zh/docs/3.0/sql-reference/sql-statements/data-definition/ALTER MATERIALIZED VIEW",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/sql-reference/sql-statements/data-definition/ALTER MATERIALIZED VIEW.md",tags:[],version:"3.0",frontMatter:{},sidebar:"documentation",previous:{title:"ALTER DATABASE",permalink:"/zh/docs/3.0/sql-reference/sql-statements/data-definition/ALTER DATABASE"},next:{title:"ALTER RESOURCE",permalink:"/zh/docs/3.0/sql-reference/sql-statements/data-definition/ALTER RESOURCE"}},l={},h=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function a(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",ul:"ul",li:"li",code:"code",a:"a",pre:"pre",table:"table",thead:"thead",tr:"tr",th:"th",strong:"strong",tbody:"tbody",td:"td"},(0,i.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"alter-materialized-view",children:"ALTER MATERIALIZED VIEW"}),"\n",(0,r.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,r.jsx)(n.p,{children:"\u6b64 SQL \u8bed\u53e5\u53ef\u4ee5\uff1a"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u53d8\u66f4\u5f02\u6b65\u7269\u5316\u89c6\u56fe\u7684\u540d\u79f0"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u53d8\u66f4\u5f02\u6b65\u7269\u5316\u89c6\u56fe\u7684\u5237\u65b0\u7b56\u7565"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u53d8\u66f4\u5f02\u6b65\u7269\u5316\u89c6\u56fe\u7684\u72b6\u6001\u4e3a Active \u6216 Inactive"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u53d8\u66f4\u5f02\u6b65\u7269\u5316\u89c6\u56fe\u7684\u5c5e\u6027"}),"\n",(0,r.jsx)(n.p,{children:"\u60a8\u53ef\u4ee5\u4f7f\u7528\u6b64 SQL \u8bed\u53e5\u53d8\u66f4\u5f02\u6b65\u7269\u5316\u89c6\u56fe\u7684\u4ee5\u4e0b\u5c5e\u6027\uff1a"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"partition_ttl_number"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"partition_refresh_number"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"resource_group"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"auto_refresh_partitions_limit"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"excluded_trigger_tables"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"mv_rewrite_staleness_second"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"unique_constraints"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"foreign_key_constraints"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"colocate_with"})}),"\n",(0,r.jsxs)(n.li,{children:["\u6240\u6709 Session \u53d8\u91cf\u5c5e\u6027\u3002\u6709\u5173 Session \u53d8\u91cf\uff0c\u8be6\u7ec6\u4fe1\u606f\u8bf7\u89c1 ",(0,r.jsx)(n.a,{href:"/zh/docs/3.0/reference/System_variable",children:"\u7cfb\u7edf\u53d8\u91cf"}),"\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:'ALTER MATERIALIZED VIEW [db_name.]<mv_name> \n    { RENAME [db_name.]<new_mv_name> \n    | REFRESH <new_refresh_scheme_desc> \n    | ACTIVE | INACTIVE \n    | SET ( "<key>" = "<value>"[,...]) }\n'})}),"\n",(0,r.jsx)(n.h2,{id:"\u53c2\u6570",children:"\u53c2\u6570"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"\u53c2\u6570"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"\u5fc5\u9009"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"\u8bf4\u660e"})})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"mv_name"}),(0,r.jsx)(n.td,{children:"\u662f"}),(0,r.jsx)(n.td,{children:"\u5f85\u53d8\u66f4\u7684\u7269\u5316\u89c6\u56fe\u7684\u540d\u79f0\u3002"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"new_refresh_scheme_desc"}),(0,r.jsx)(n.td,{children:"\u5426"}),(0,r.jsxs)(n.td,{children:["\u65b0\u7684\u5237\u65b0\u673a\u5236\uff0c\u8be6\u7ec6\u4fe1\u606f\u8bf7\u89c1 ",(0,r.jsx)(n.a,{href:"/zh/docs/3.0/sql-reference/sql-statements/data-definition/CREATE%20MATERIALIZED%20VIEW#%E5%8F%82%E6%95%B0",children:"SQL \u53c2\u8003 - CREATE MATERIALIZED VIEW - \u53c2\u6570"}),"\u3002"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"new_mv_name"}),(0,r.jsx)(n.td,{children:"\u5426"}),(0,r.jsx)(n.td,{children:"\u65b0\u7684\u7269\u5316\u89c6\u56fe\u7684\u540d\u79f0\u3002"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ACTIVE"}),(0,r.jsx)(n.td,{children:"\u5426"}),(0,r.jsx)(n.td,{children:"\u5c06\u7269\u5316\u89c6\u56fe\u7684\u72b6\u6001\u8bbe\u7f6e\u4e3a Active\u3002\u5982\u679c\u7269\u5316\u89c6\u56fe\u7684\u57fa\u8868\u53d1\u751f\u66f4\u6539\uff0c\u4f8b\u5982\u88ab\u5220\u9664\u540e\u91cd\u65b0\u521b\u5efa\uff0cStarRocks \u4f1a\u81ea\u52a8\u5c06\u8be5\u7269\u5316\u89c6\u56fe\u7684\u72b6\u6001\u8bbe\u7f6e\u4e3a Inactive\uff0c\u4ee5\u907f\u514d\u539f\u59cb\u5143\u6570\u636e\u4e0e\u66f4\u6539\u540e\u7684\u57fa\u8868\u4e0d\u5339\u914d\u7684\u60c5\u51b5\u3002\u72b6\u6001\u4e3a Inactive \u7684\u7269\u5316\u89c6\u56fe\u65e0\u6cd5\u7528\u4e8e\u67e5\u8be2\u52a0\u901f\u6216\u6539\u5199\u3002\u66f4\u6539\u57fa\u8868\u540e\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528\u6b64 SQL \u5c06\u8be5\u7269\u5316\u89c6\u56fe\u7684\u72b6\u6001\u8bbe\u7f6e\u4e3a Active\u3002"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"INACTIVE"}),(0,r.jsx)(n.td,{children:"\u5426"}),(0,r.jsx)(n.td,{children:"\u5c06\u7269\u5316\u89c6\u56fe\u7684\u72b6\u6001\u8bbe\u7f6e\u4e3a Inactive\u3002Inactive \u72b6\u6001\u7684\u7269\u5316\u89c6\u56fe\u65e0\u6cd5\u88ab\u5237\u65b0\uff0c\u4f46\u60a8\u4ecd\u7136\u53ef\u4ee5\u5c06\u5176\u4f5c\u4e3a\u8868\u76f4\u63a5\u67e5\u8be2\u3002"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"key"}),(0,r.jsx)(n.td,{children:"\u5426"}),(0,r.jsxs)(n.td,{children:["\u5f85\u53d8\u66f4\u7684\u5c5e\u6027\u7684\u540d\u79f0\uff0c\u8be6\u7ec6\u4fe1\u606f\u8bf7\u89c1 ",(0,r.jsx)(n.a,{href:"/zh/docs/3.0/sql-reference/sql-statements/data-definition/CREATE%20MATERIALIZED%20VIEW#%E5%8F%82%E6%95%B0",children:"SQL \u53c2\u8003 - CREATE MATERIALIZED VIEW - \u53c2\u6570"}),"\u3002",(0,r.jsx)("br",{}),(0,r.jsx)(n.strong,{children:"\u8bf4\u660e"}),(0,r.jsx)("br",{}),"\u5982\u9700\u66f4\u6539\u7269\u5316\u89c6\u56fe\u7684 Session \u53d8\u91cf\u5c5e\u6027\uff0c\u5219\u5fc5\u987b\u4e3a Session \u5c5e\u6027\u6dfb\u52a0 ",(0,r.jsx)(n.code,{children:"session."})," \u524d\u7f00\uff0c\u4f8b\u5982\uff0c",(0,r.jsx)(n.code,{children:"session.query_timeout"}),"\u3002\u60a8\u65e0\u9700\u4e3a\u975e Session \u5c5e\u6027\u6307\u5b9a\u524d\u7f00\uff0c\u4f8b\u5982\uff0c",(0,r.jsx)(n.code,{children:"mv_rewrite_staleness_second"}),"\u3002"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"value"}),(0,r.jsx)(n.td,{children:"\u5426"}),(0,r.jsx)(n.td,{children:"\u5f85\u53d8\u66f4\u7684\u5c5e\u6027\u7684\u503c\u3002"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,r.jsx)(n.p,{children:"\u793a\u4f8b\u4e00\uff1a\u4fee\u6539\u7269\u5316\u89c6\u56fe\u540d\u79f0"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:"ALTER MATERIALIZED VIEW lo_mv1 RENAME lo_mv1_new_name;\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u793a\u4f8b\u4e8c\uff1a\u4fee\u6539\u7269\u5316\u89c6\u56fe\u5237\u65b0\u95f4\u9694"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:"ALTER MATERIALIZED VIEW lo_mv2 REFRESH ASYNC EVERY(INTERVAL 1 DAY);\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u793a\u4f8b\u4e09\uff1a\u4fee\u6539\u7269\u5316\u89c6\u56fe\u5c5e\u6027"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:'-- \u4fee\u6539 mv1 \u7684 query_timeout \u4e3a 40000 \u79d2\u3002\nALTER MATERIALIZED VIEW mv1 SET ("session.query_timeout" = "40000");\n-- \u4fee\u6539 mv1 \u7684 mv_rewrite_staleness_second \u4e3a 600 \u79d2\u3002\nALTER MATERIALIZED VIEW mv1 SET ("mv_rewrite_staleness_second" = "600");\n'})}),"\n",(0,r.jsx)(n.p,{children:"\u793a\u4f8b\u56db\uff1a\u4fee\u6539\u7269\u5316\u89c6\u56fe\u72b6\u6001\u4e3a Active\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:"ALTER MATERIALIZED VIEW order_mv ACTIVE;\n"})})]})}const o=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(a,e)})):a(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>c,ah:()=>t});var r=s(67294);const i=r.createContext({});function t(e){const n=r.useContext(i);return r.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const d={};function c({components:e,children:n,disableParentContext:s}){let c;return c=s?"function"==typeof e?e({}):e||d:t(e),r.createElement(i.Provider,{value:c},n)}}}]);