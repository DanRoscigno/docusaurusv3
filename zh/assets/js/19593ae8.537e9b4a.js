"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[98628],{99857:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>a,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>o});var t=s(85893),r=s(11151);const i={displayed_sidebar:"Chinese"},c="str_to_map",l={id:"sql-reference/sql-functions/string-functions/str_to_map",title:"str_to_map",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.1/sql-reference/sql-functions/string-functions/str_to_map.md",sourceDirName:"sql-reference/sql-functions/string-functions",slug:"/sql-reference/sql-functions/string-functions/str_to_map",permalink:"/doc/zh/docs/sql-reference/sql-functions/string-functions/str_to_map",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-functions/string-functions/str_to_map.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"Chinese"},sidebar:"Chinese",previous:{title:"starts_with",permalink:"/doc/zh/docs/sql-reference/sql-functions/string-functions/starts_with"},next:{title:"strcmp",permalink:"/doc/zh/docs/sql-reference/sql-functions/string-functions/strcmp"}},a={},o=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"keywords",id:"keywords",level:2}];function d(n){const e=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",ul:"ul",li:"li"},(0,r.ah)(),n.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"str_to_map",children:"str_to_map"}),"\n",(0,t.jsx)(e.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,t.jsx)(e.p,{children:"\u5c06\u7ed9\u5b9a\u7684\u5b57\u7b26\u4e32\u5206\u5272\u6210\u952e\u503c\u5bf9 (Key-Value pair)\uff0c\u8fd4\u56de\u5305\u542b\u8fd9\u4e9b\u952e\u503c\u5bf9\u7684 Map\u3002"}),"\n",(0,t.jsx)(e.p,{children:"\u8be5\u51fd\u6570\u4ece 3.1 \u7248\u672c\u5f00\u59cb\u652f\u6301\u3002"}),"\n",(0,t.jsx)(e.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-Haskell",children:"MAP<VARCHAR, VARCHAR> str_to_map(VARCHAR content[, VARCHAR delimiter[, VARCHAR map_delimiter]])\n"})}),"\n",(0,t.jsx)(e.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"content"}),": \u5f85\u5206\u5272\u7684\u5b57\u7b26\u4e32\u8868\u8fbe\u5f0f\uff0c\u5fc5\u9009\u3002"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"delimiter"}),": \u7528\u4e8e\u5c06\u5b57\u7b26\u4e32\u5206\u5272\u6210\u952e\u503c\u5bf9\uff0c\u53ef\u9009\u3002\u5982\u679c\u4e0d\u6307\u5b9a\uff0c\u9ed8\u8ba4\u4e3a\u9017\u53f7 (",(0,t.jsx)(e.code,{children:","}),")\u3002"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"map_delimiter"}),": \u7528\u4e8e\u5c06\u6bcf\u4e2a\u952e\u503c\u5bf9\u5206\u5f00\uff0c\u53ef\u9009\u3002\u5982\u679c\u4e0d\u6307\u5b9a\uff0c\u9ed8\u8ba4\u4e3a\u5192\u53f7 (",(0,t.jsx)(e.code,{children:":"}),")\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,t.jsx)(e.p,{children:"\u8fd4\u56de\u5143\u7d20\u4e3a VARCHAR \u7684 MAP\u3002\u5982\u679c\u4efb\u4f55\u4e00\u4e2a\u8f93\u5165\u503c\u4e3a NULL\uff0c\u5219\u8fd4\u56de NULL\u3002"}),"\n",(0,t.jsx)(e.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-SQL",children:'mysql> SELECT str_to_map(\'a:1|b:2|c:3\', \'|\', \':\') as map;\n+---------------------------+\n| map                       |\n+---------------------------+\n| {"a":"1","b":"2","c":"3"} |\n+---------------------------+\n\nmysql> SELECT str_to_map(\'a:1;b:2;c:3\', \';\', \':\') as map;\n+---------------------------+\n| map                       |\n+---------------------------+\n| {"a":"1","b":"2","c":"3"} |\n+---------------------------+\n\nmysql> SELECT str_to_map(\'a:1,b:2,c:3\', \',\', \':\') as map;\n+---------------------------+\n| map                       |\n+---------------------------+\n| {"a":"1","b":"2","c":"3"} |\n+---------------------------+\n\nmysql> SELECT str_to_map(\'a\') as map;\n+------------+\n| map        |\n+------------+\n| {"a":null} |\n+------------+\n\nmysql> SELECT str_to_map(\'a:1,b:2,c:3\',null, \':\') as map;\n+------+\n| map  |\n+------+\n| NULL |\n+------+\n\nmysql> SELECT str_to_map(\'a:1,b:2,c:null\') as map;\n+------------------------------+\n| map                          |\n+------------------------------+\n| {"a":"1","b":"2","c":"null"} |\n+------------------------------+\n'})}),"\n",(0,t.jsx)(e.h2,{id:"keywords",children:"keywords"}),"\n",(0,t.jsx)(e.p,{children:"STR_TO_MAP"})]})}const p=function(n={}){const{wrapper:e}=Object.assign({},(0,r.ah)(),n.components);return e?(0,t.jsx)(e,Object.assign({},n,{children:(0,t.jsx)(d,n)})):d(n)}},11151:(n,e,s)=>{s.d(e,{Zo:()=>l,ah:()=>i});var t=s(67294);const r=t.createContext({});function i(n){const e=t.useContext(r);return t.useMemo((()=>"function"==typeof n?n(e):{...e,...n}),[e,n])}const c={};function l({components:n,children:e,disableParentContext:s}){let l;return l=s?"function"==typeof n?n({}):n||c:i(n),t.createElement(r.Provider,{value:l},e)}}}]);