"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[36140],{66007:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>l,contentTitle:()=>r,default:()=>a,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var c=s(85893),t=s(11151);const o={},r="get_json_string",i={id:"sql-reference/sql-functions/json-functions/json-query-and-processing-functions/get_json_string",title:"get_json_string",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.0/sql-reference/sql-functions/json-functions/json-query-and-processing-functions/get_json_string.md",sourceDirName:"sql-reference/sql-functions/json-functions/json-query-and-processing-functions",slug:"/sql-reference/sql-functions/json-functions/json-query-and-processing-functions/get_json_string",permalink:"/doc/zh/docs/3.0/sql-reference/sql-functions/json-functions/json-query-and-processing-functions/get_json_string",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/sql-reference/sql-functions/json-functions/json-query-and-processing-functions/get_json_string.md",tags:[],version:"3.0",frontMatter:{},sidebar:"Chinese31",previous:{title:"get_json_int",permalink:"/doc/zh/docs/3.0/sql-reference/sql-functions/json-functions/json-query-and-processing-functions/get_json_int"},next:{title:"JSON_EACH",permalink:"/doc/zh/docs/3.0/sql-reference/sql-functions/json-functions/json-query-and-processing-functions/json_each"}},l={},d=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function j(n){const e=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",pre:"pre",ul:"ul",li:"li"},(0,t.ah)(),n.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(e.h1,{id:"get_json_string",children:"get_json_string"}),"\n",(0,c.jsx)(e.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,c.jsxs)(e.p,{children:["\u89e3\u6790\u5e76\u83b7\u53d6 ",(0,c.jsx)(e.code,{children:"json_str"})," \u5185 ",(0,c.jsx)(e.code,{children:"json_path"})," \u6307\u5b9a\u7684\u5b57\u7b26\u4e32\u3002\u5982\u679c ",(0,c.jsx)(e.code,{children:"json_str"})," \u6216 ",(0,c.jsx)(e.code,{children:"json_path"})," \u683c\u5f0f\u4e0d\u6b63\u786e\uff0c\u6216\u8005\u65e0\u6cd5\u627e\u5230\u5339\u914d\u9879\uff0c\u5219\u8fd4\u56de NULL\u3002\u8be5\u51fd\u6570\u522b\u540d\u4e3a ",(0,c.jsx)(e.code,{children:"get_json_object"}),"."]}),"\n",(0,c.jsx)(e.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-Haskell",children:"VARCHAR get_json_string(VARCHAR json_str, VARCHAR json_path)\n"})}),"\n",(0,c.jsx)(e.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsxs)(e.p,{children:[(0,c.jsx)(e.code,{children:"json_str"}),": JSON \u5b57\u7b26\u4e32\uff0c\u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u4e3a VARCHAR\u3002"]}),"\n"]}),"\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsxs)(e.p,{children:[(0,c.jsx)(e.code,{children:"json_path"}),": \u6307\u5b9a\u7684\u89e3\u6790\u8def\u5f84\uff0c\u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u4e3a VARCHAR\u3002",(0,c.jsx)(e.code,{children:"json_path"}),"\u4e00\u822c\u4f7f\u7528",(0,c.jsx)(e.code,{children:"$"})," \u7b26\u53f7\u4f5c\u4e3a\u5f00\u5934\uff1b\u4f7f\u7528 ",(0,c.jsx)(e.code,{children:"."})," \u4f5c\u4e3a\u8def\u5f84\u5206\u5272\u7b26\uff1b\u4f7f\u7528 ",(0,c.jsx)(e.code,{children:"[]"})," \u8868\u793a\u6570\u7ec4\u4e0b\u6807\uff0c \u4ece 0 \u5f00\u59cb\u3002"]}),"\n",(0,c.jsxs)(e.p,{children:["\u4e3e\u4f8b\uff1a",(0,c.jsx)(e.code,{children:'$."my.key"[1]'}),"\u8868\u793a\u7684\u662f\u83b7\u53d6",(0,c.jsx)(e.code,{children:"my.key"}),"\u5bf9\u5e94\u7684\u6570\u636e\u4e2d\u7b2c 2 \u4e2a\u503c\u3002"]}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(e.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,c.jsx)(e.p,{children:"\u8fd4\u56de\u503c\u7684\u6570\u636e\u7c7b\u578b\u4e3a VARCHAR\u3002\u5982\u679c\u65e0\u6cd5\u627e\u5230\u5bf9\u8c61\uff0c\u5219\u8fd4\u56de NULL\u3002"}),"\n",(0,c.jsx)(e.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,c.jsx)(e.p,{children:'\u793a\u4f8b\u4e00\uff1a\u4ece\u5355\u4e2a\u5b57\u7b26\u4e32\u4e2d\uff0c\u83b7\u53d6 "k1" \u5bf9\u5e94\u7684value\u3002'}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-Plain",metastring:"Text",children:'MySQL > SELECT get_json_string(\'{"k1":"v1", "k2":"v2"}\', "$.k1");\n+---------------------------------------------------+\n| get_json_string(\'{"k1":"v1", "k2":"v2"}\', \'$.k1\') |\n +---------------------------------------------------+\n| v1                                                |\n+---------------------------------------------------+\n'})}),"\n",(0,c.jsxs)(e.p,{children:["\u793a\u4f8b\u4e8c\uff1a\u4ece\u591a\u4e2a\u5b57\u7b26\u4e32\u7684\u6570\u7ec4\u4e2d\uff0c\u83b7\u53d6\u7b2c\u4e00\u4e2a\u5b57\u7b26\u4e32\u5185",(0,c.jsx)(e.code,{children:"a"}),"\u5bf9\u5e94\u7684\u503c\u3002"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-Plain",metastring:"Text",children:'MySQL > SELECT get_json_object(\'[{"a":"123", "b": "456"},{"a":"23", "b": "56"}]\', \'$[0].a\');\n+------------------------------------------------------------------------------+\n| get_json_object(\'[{"a":"123", "b": "456"},{"a":"23", "b": "56"}]\', \'$[0].a\') |\n+------------------------------------------------------------------------------+\n| 123                                                                          |\n+------------------------------------------------------------------------------+\n'})}),"\n",(0,c.jsx)(e.p,{children:'\u793a\u4f8b\u4e09\uff1a\u83b7\u53d6 "my.key" \u5bf9\u5e94\u7684\u6570\u7ec4\u4e2d\u7b2c\u4e8c\u4e2a\u5143\u7d20\u3002'}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-Plain",metastring:"Text",children:'MySQL > SELECT get_json_string(\'{"k1":"v1", "my.key":["e1", "e2", "e3"]}\', \'$."my.key"[1]\');\n+------------------------------------------------------------------------------+\n| get_json_string(\'{"k1":"v1", "my.key":["e1", "e2", "e3"]}\', \'$."my.key"[1]\') |\n+------------------------------------------------------------------------------+\n| e2                                                                           |\n+------------------------------------------------------------------------------+\n'})}),"\n",(0,c.jsxs)(e.p,{children:["\u793a\u4f8b\u56db\uff1a\u83b7\u53d6\u4e8c\u7ea7\u8def\u5f84 ",(0,c.jsx)(e.code,{children:"k1.key"})," -> ",(0,c.jsx)(e.code,{children:"k2"})," \u7684\u6570\u7ec4\u4e2d\u7b2c\u4e00\u4e2a\u5143\u7d20\u3002"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-Plain",metastring:"Text",children:'MySQL > SELECT get_json_string(\'{"k1.key":{"k2":["v1", "v2"]}}\', \'$."k1.key".k2[0]\');\n+-----------------------------------------------------------------------+1\n| get_json_string(\'{"k1.key":{"k2":["v1", "v2"]}}\', \'$."k1.key".k2[0]\') |\n+-----------------------------------------------------------------------+\n| v1                                                                    |\n+-----------------------------------------------------------------------+\n'})})]})}const a=function(n={}){const{wrapper:e}=Object.assign({},(0,t.ah)(),n.components);return e?(0,c.jsx)(e,Object.assign({},n,{children:(0,c.jsx)(j,n)})):j(n)}},11151:(n,e,s)=>{s.d(e,{Zo:()=>i,ah:()=>o});var c=s(67294);const t=c.createContext({});function o(n){const e=c.useContext(t);return c.useMemo((()=>"function"==typeof n?n(e):{...e,...n}),[e,n])}const r={};function i({components:n,children:e,disableParentContext:s}){let i;return i=s?"function"==typeof n?n({}):n||r:o(n),c.createElement(t.Provider,{value:i},e)}}}]);