"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[58520],{72869:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>a,contentTitle:()=>i,default:()=>h,frontMatter:()=>t,metadata:()=>d,toc:()=>r});var c=n(85893),l=n(11151);const t={},i="DECIMAL",d={id:"sql-reference/sql-statements/data-types/DECIMAL",title:"DECIMAL",description:"\u63cf\u8ff0",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.1/sql-reference/sql-statements/data-types/DECIMAL.md",sourceDirName:"sql-reference/sql-statements/data-types",slug:"/sql-reference/sql-statements/data-types/DECIMAL",permalink:"/doc/zh/docs/sql-reference/sql-statements/data-types/DECIMAL",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-statements/data-types/DECIMAL.md",tags:[],version:"3.1",frontMatter:{},sidebar:"Chinese31",previous:{title:"LARGEINT",permalink:"/doc/zh/docs/sql-reference/sql-statements/data-types/LARGEINT"},next:{title:"DOUBLE",permalink:"/doc/zh/docs/sql-reference/sql-statements/data-types/DOUBLE"}},a={},r=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:2},{value:"Decimal V2",id:"decimal-v2",level:3},{value:"Fast Decimal (1.18 \u7248\u672c\u9ed8\u8ba4)",id:"fast-decimal-118-\u7248\u672c\u9ed8\u8ba4",level:3},{value:"\u4f7f\u7528\u9650\u5236",id:"\u4f7f\u7528\u9650\u5236",level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"keywords",id:"keywords",level:2}];function o(e){const s=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",ul:"ul",li:"li",h3:"h3",ol:"ol",a:"a",pre:"pre"},(0,l.ah)(),e.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(s.h1,{id:"decimal",children:"DECIMAL"}),"\n",(0,c.jsx)(s.h2,{id:"\u63cf\u8ff0",children:"\u63cf\u8ff0"}),"\n",(0,c.jsx)(s.p,{children:"DECIMAL(P [, S])"}),"\n",(0,c.jsxs)(s.p,{children:["\u9ad8\u7cbe\u5ea6\u5b9a\u70b9\u6570\uff0c",(0,c.jsx)(s.code,{children:"P"})," \u4ee3\u8868\u4e00\u5171\u6709\u591a\u5c11\u4e2a\u6709\u6548\u6570\u5b57 (precision)\uff0c",(0,c.jsx)(s.code,{children:"S"})," \u4ee3\u8868\u5c0f\u6570\u70b9\u540e\u6700\u591a\u6709\u591a\u5c11\u6570\u5b57 (scale)\u3002"]}),"\n",(0,c.jsx)(s.p,{children:"1.19.0 \u53ca\u4ee5\u540e\u7248\u672c\u5bf9 DECIMAL \u7c7b\u578b\u7684\uff08P\uff0cS\uff09\u6709\u9ed8\u8ba4\u503c\u8bbe\u7f6e\uff0c\u9ed8\u8ba4\u662f Decimal\uff0810\uff0c0\uff09\u3002"}),"\n",(0,c.jsx)(s.p,{children:"\u4f8b\u5982\uff1a"}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsxs)(s.li,{children:["\n",(0,c.jsxs)(s.p,{children:["1.19.0 \u7248\u672c\u53ef\u6210\u529f\u6267\u884c ",(0,c.jsx)(s.code,{children:"select cast\uff08\u201812.35\u2019 as decimal\uff09;"}),"\uff0c\u65e0\u9700\u6307\u5b9a P, S \u7684\u503c\u3002"]}),"\n"]}),"\n",(0,c.jsxs)(s.li,{children:["\n",(0,c.jsxs)(s.p,{children:["1.19 \u4e4b\u524d\u7248\u672c\u9700\u660e\u786e\u6307\u5b9a P, S \u7684\u503c\uff0c\u5982\uff1a",(0,c.jsx)(s.code,{children:"select cast\uff08\u201812.35\u2019 as decimal\uff085\uff0c1\uff09;"}),"\u3002\u5982\u679c\u4e0d\u6307\u5b9a\uff0c\u4f8b\u5982 ",(0,c.jsx)(s.code,{children:"select cast\uff08\u201812.35\u2019 as decimal\uff09;"})," \u6216 ",(0,c.jsx)(s.code,{children:"select cast\uff08\u201812.35\u2019 as decimal\uff085\uff09\uff09;"}),"\uff0c\u4f1a\u63d0\u793a failed\u3002"]}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(s.h3,{id:"decimal-v2",children:"Decimal V2"}),"\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.code,{children:"P"})," \u7684\u8303\u56f4\u662f [1,27]\uff0c",(0,c.jsx)(s.code,{children:"S"})," \u7684\u8303\u56f4 [0, 9]\u3002\u53e6\u5916\uff0c",(0,c.jsx)(s.code,{children:"P"})," \u5fc5\u987b\u8981\u5927\u4e8e\u7b49\u4e8e ",(0,c.jsx)(s.code,{children:"S"})," \u7684\u53d6\u503c\u3002\u9ed8\u8ba4\u7684 ",(0,c.jsx)(s.code,{children:"S"})," \u53d6\u503c\u4e3a 0\u3002"]}),"\n",(0,c.jsx)(s.h3,{id:"fast-decimal-118-\u7248\u672c\u9ed8\u8ba4",children:"Fast Decimal (1.18 \u7248\u672c\u9ed8\u8ba4)"}),"\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.code,{children:"P"})," \u7684\u8303\u56f4\u662f [1,38]\uff0c",(0,c.jsx)(s.code,{children:"S"})," \u7684\u8303\u56f4 [0, P]\u3002\u9ed8\u8ba4\u7684 ",(0,c.jsx)(s.code,{children:"S"})," \u53d6\u503c\u4e3a 0\u3002"]}),"\n",(0,c.jsx)(s.p,{children:"StarRocks 1.18 \u7248\u672c\u5f00\u59cb\u8d77\uff0cDecimal \u7c7b\u578b\u652f\u6301\u66f4\u9ad8\u7cbe\u5ea6\u7684 Fast Decimal (\u4e5f\u79f0 Decimal V3)\u3002"}),"\n",(0,c.jsx)(s.p,{children:"\u4e3b\u8981\u4f18\u5316\u6709\uff1a"}),"\n",(0,c.jsxs)(s.ol,{children:["\n",(0,c.jsxs)(s.li,{children:["\n",(0,c.jsx)(s.p,{children:"\u5185\u90e8\u91c7\u7528\u591a\u79cd\u5bbd\u5ea6\u7684\u6574\u6570\u6765\u8868\u793a Decimal\u3002\u6bd4\u5982\u4f7f\u7528 64-bit \u6574\u6570\u6765\u8868\u793a P \u2264 18 \u7684 Decimal \u6570\u503c\u3002\u76f8\u6bd4\u4e8e Decimal V2 \u7edf\u4e00\u91c7\u7528 128-bit \u6574\u6570\uff0c\u7b97\u6570\u8fd0\u7b97\u548c\u8f6c\u6362\u8fd0\u7b97\u5728 64-bit \u7684\u5904\u7406\u5668\u4e0a\u4f7f\u7528\u66f4\u5c11\u7684\u6307\u4ee4\uff0c\u56e0\u6b64\u6027\u80fd\u6709\u5927\u5e45\u63d0\u5347\u3002"}),"\n"]}),"\n",(0,c.jsxs)(s.li,{children:["\n",(0,c.jsx)(s.p,{children:"\u548c Decimal V2 \u76f8\u6bd4\uff0cFast Decimal \u7684\u7b97\u6cd5\u505a\u4e86\u6781\u81f4\u7684\u4f18\u5316\uff0c\u5c24\u5176\u662f\u4e58\u6cd5\u8fd0\u7b97\uff0c\u6027\u80fd\u63d0\u5347\u6709 4 \u500d\u5de6\u53f3\u3002"}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(s.p,{children:["Fast Decimal \u529f\u80fd\u7531 FE \u52a8\u6001\u53c2\u6570 ",(0,c.jsx)(s.code,{children:"enable_decimal_v3"})," \u63a7\u5236\uff0c\u9ed8\u8ba4\u503c\u4e3a ",(0,c.jsx)(s.code,{children:"true"}),"\uff0c\u8868\u793a\u5f00\u542f\u3002"]}),"\n",(0,c.jsxs)(s.p,{children:["\u4ece 3.1 \u7248\u672c\u5f00\u59cb\uff0c",(0,c.jsx)(s.a,{href:"/doc/zh/docs/sql-reference/sql-statements/data-types/Array",children:"ARRAY"}),"\u3001",(0,c.jsx)(s.a,{href:"/doc/zh/docs/sql-reference/sql-statements/data-types/Map",children:"MAP"}),"\u3001",(0,c.jsx)(s.a,{href:"/doc/zh/docs/sql-reference/sql-statements/data-types/STRUCT",children:"STRUCT"})," \u652f\u6301 Fast Decimal\u3002"]}),"\n",(0,c.jsx)(s.h3,{id:"\u4f7f\u7528\u9650\u5236",children:"\u4f7f\u7528\u9650\u5236"}),"\n",(0,c.jsx)(s.p,{children:"\u8bfb\u53d6\u5916\u90e8 Hive \u6570\u636e\u65f6\uff0c\u6682\u4e0d\u652f\u6301\u8bfb\u53d6 ORC \u548c Parquet \u6587\u4ef6\u4e2d\u7684 Decimal \u6570\u636e\uff0c\u4f1a\u6709\u7cbe\u5ea6\u4e22\u5931\u3002"}),"\n",(0,c.jsx)(s.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,c.jsx)(s.p,{children:"\u5efa\u8868\u65f6\u6307\u5b9a\u5b57\u6bb5\u7c7b\u578b\u4e3a DECIMAL\u3002"}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-sql",children:'CREATE TABLE decimalDemo (\n    pk BIGINT(20) NOT NULL COMMENT "",\n    account DECIMAL(20,10) COMMENT ""\n) ENGINE=OLAP \nDUPLICATE KEY(pk)\nCOMMENT "OLAP"\nDISTRIBUTED BY HASH(pk);\n\nINSERT INTO decimalDemo VALUES\n(1,3.141592656),\n(2,21.638378),\n(3,4873.6293048479);\n\nSELECT * FROM decimalDemo;\n+------+-----------------+\n| pk   | account         |\n+------+-----------------+\n|    1 |    3.1415926560 |\n|    3 | 4873.6293048479 |\n|    2 |   21.6383780000 |\n+------+-----------------+\n'})}),"\n",(0,c.jsx)(s.h2,{id:"keywords",children:"keywords"}),"\n",(0,c.jsx)(s.p,{children:"decimal, decimalv2, decimalv3, fast decimal"})]})}const h=function(e={}){const{wrapper:s}=Object.assign({},(0,l.ah)(),e.components);return s?(0,c.jsx)(s,Object.assign({},e,{children:(0,c.jsx)(o,e)})):o(e)}},11151:(e,s,n)=>{n.d(s,{Zo:()=>d,ah:()=>t});var c=n(67294);const l=c.createContext({});function t(e){const s=c.useContext(l);return c.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const i={};function d({components:e,children:s,disableParentContext:n}){let d;return d=n?"function"==typeof e?e({}):e||i:t(e),c.createElement(l.Provider,{value:d},s)}}}]);