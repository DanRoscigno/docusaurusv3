"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[31104],{16370:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>o});var r=t(85893),c=t(11151);const s={},i="percentile_approx_raw",l={id:"sql-reference/sql-functions/percentile-functions/percentile_approx_raw",title:"percentile_approx_raw",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.1/sql-reference/sql-functions/percentile-functions/percentile_approx_raw.md",sourceDirName:"sql-reference/sql-functions/percentile-functions",slug:"/sql-reference/sql-functions/percentile-functions/percentile_approx_raw",permalink:"/zh/docs/sql-reference/sql-functions/percentile-functions/percentile_approx_raw",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-functions/percentile-functions/percentile_approx_raw.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"Percentile Functions",permalink:"/zh/docs/category/percentile-functions"},next:{title:"percentile_empty",permalink:"/zh/docs/sql-reference/sql-functions/percentile-functions/percentile_empty"}},a={},o=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",pre:"pre"},(0,c.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"percentile_approx_raw",children:"percentile_approx_raw"}),"\n",(0,r.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,r.jsxs)(n.p,{children:["\u8ba1\u7b97\u7ed9\u5b9a\u53c2\u6570 ",(0,r.jsx)(n.code,{children:"x"})," \u7684\u767e\u5206\u4f4d\u6570\u3002",(0,r.jsx)(n.code,{children:"x"})," \u53ef\u4ee5\u662f\u5217\u6216\u8005\u6570\u503c\u3002\u5982\u679c ",(0,r.jsx)(n.code,{children:"x"})," \u662f\u5217\uff0c\u5219\u5148\u5bf9\u8be5\u5217\u8fdb\u884c\u5347\u5e8f\u6392\u5e8f\uff0c\u7136\u540e\u53d6\u7cbe\u786e\u7684\u7b2c ",(0,r.jsx)(n.code,{children:"y"})," \u4f4d\u767e\u5206\u6570\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Haskell",children:"PERCENTILE_APPROX_RAW(x, y);\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"x"}),": \u53ef\u4ee5\u4e3a\u5217\u6216\u6570\u503c\u3002\u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u4e3a PERCENTILE\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"y"}),": \u6307\u5b9a\u7684\u767e\u5206\u4f4d\uff0c\u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u4e3a DOUBLE\uff0c\u53d6\u503c\u4e3a [0.0,1.0]\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,r.jsx)(n.p,{children:"\u8fd4\u56de\u503c\u7684\u6570\u636e\u7c7b\u578b\u4e3a DOUBLE\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,r.jsxs)(n.p,{children:["\u521b\u5efa\u4e00\u5f20\u8868 ",(0,r.jsx)(n.code,{children:"aggregate_tbl"}),"\u3002\u5176\u4e2d ",(0,r.jsx)(n.code,{children:"percent"})," \u5217\u4e3a percentile_approx_raw() \u51fd\u6570\u7684\u8f93\u5165\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:'CREATE TABLE `aggregate_tbl` (\n  `site_id` largeint(40) NOT NULL COMMENT "id of site",\n  `date` date NOT NULL COMMENT "time of event",\n  `city_code` varchar(20) NULL COMMENT "city_code of user",\n  `pv` bigint(20) SUM NULL DEFAULT "0" COMMENT "total page views",\n  `percent` PERCENTILE PERCENTILE_UNION COMMENT "others"\n) ENGINE=OLAP\nAGGREGATE KEY(`site_id`, `date`, `city_code`)\nCOMMENT "OLAP"\nDISTRIBUTED BY HASH(`site_id`)\nPROPERTIES ("replication_num" = "3");\n'})}),"\n",(0,r.jsx)(n.p,{children:"\u5411\u8868\u4e2d\u63d2\u5165\u6570\u636e\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"insert into aggregate_tbl values (5, '2020-02-23', 'city_code', 555, percentile_hash(1));\ninsert into aggregate_tbl values (5, '2020-02-23', 'city_code', 555, percentile_hash(2));\ninsert into aggregate_tbl values (5, '2020-02-23', 'city_code', 555, percentile_hash(3));\ninsert into aggregate_tbl values (5, '2020-02-23', 'city_code', 555, percentile_hash(4));\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u8ba1\u7b97\u7b2c 0.5 \u767e\u5206\u4f4d\u5bf9\u5e94\u7684\u503c\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"mysql> select percentile_approx_raw(percent, 0.5) from aggregate_tbl;\n+-------------------------------------+\n| percentile_approx_raw(percent, 0.5) |\n+-------------------------------------+\n|                                 2.5 |\n+-------------------------------------+\n1 row in set (0.03 sec)\n"})})]})}const p=function(e={}){const{wrapper:n}=Object.assign({},(0,c.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(d,e)})):d(e)}},11151:(e,n,t)=>{t.d(n,{Zo:()=>l,ah:()=>s});var r=t(67294);const c=r.createContext({});function s(e){const n=r.useContext(c);return r.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const i={};function l({components:e,children:n,disableParentContext:t}){let l;return l=t?"function"==typeof e?e({}):e||i:s(e),r.createElement(c.Provider,{value:l},n)}}}]);