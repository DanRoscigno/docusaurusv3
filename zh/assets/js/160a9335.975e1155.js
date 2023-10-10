"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[18132],{58965:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>j,frontMatter:()=>r,metadata:()=>d,toc:()=>t});var c=s(85893),o=s(11151);const r={},i="json_keys",d={id:"sql-reference/sql-functions/json-functions/json-query-and-processing-functions/json_keys",title:"json_keys",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.1/sql-reference/sql-functions/json-functions/json-query-and-processing-functions/json_keys.md",sourceDirName:"sql-reference/sql-functions/json-functions/json-query-and-processing-functions",slug:"/sql-reference/sql-functions/json-functions/json-query-and-processing-functions/json_keys",permalink:"/docusaurusv3/zh/docs/sql-reference/sql-functions/json-functions/json-query-and-processing-functions/json_keys",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-functions/json-functions/json-query-and-processing-functions/json_keys.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"JSON_EXISTS",permalink:"/docusaurusv3/zh/docs/sql-reference/sql-functions/json-functions/json-query-and-processing-functions/json_exists"},next:{title:"json_length",permalink:"/docusaurusv3/zh/docs/sql-reference/sql-functions/json-functions/json-query-and-processing-functions/json_length"}},l={},t=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function a(n){const e=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",pre:"pre",ul:"ul",li:"li"},(0,o.ah)(),n.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(e.h1,{id:"json_keys",children:"json_keys"}),"\n",(0,c.jsx)(e.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,c.jsxs)(e.p,{children:["\u8fd4\u56de JSON \u5bf9\u8c61\u4e2d\u6240\u6709\u6700\u4e0a\u5c42\u6210\u5458 (key) \u7ec4\u6210\u7684\u6570\u7ec4\u3002\u5982\u679c\u6307\u5b9a\u4e86",(0,c.jsx)(e.code,{children:"path"}),"\uff0c\u5219\u8fd4\u56de\u4e0e",(0,c.jsx)(e.code,{children:"path"}),"\u5339\u914d\u7684\u6700\u4e0a\u5c42\u6210\u5458\u7ec4\u6210\u7684\u6570\u7ec4\u3002"]}),"\n",(0,c.jsx)(e.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-SQL",children:"json_keys(json_doc[, path])\n"})}),"\n",(0,c.jsx)(e.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsxs)(e.p,{children:[(0,c.jsx)(e.code,{children:"json_doc"}),"\uff1a JSON \u5b57\u7b26\u4e32\uff0c\u5fc5\u9009\u3002\u5fc5\u987b\u4e3a JSON \u5bf9\u8c61 (object)\u3002"]}),"\n"]}),"\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsxs)(e.p,{children:[(0,c.jsx)(e.code,{children:"path"}),"\uff1a\u8def\u5f84\u8868\u8fbe\u5f0f\uff0c\u53ef\u9009\u3002\u53d6\u503c\u7c7b\u578b\u4e3a VARCHAR\u3002",(0,c.jsx)(e.code,{children:"path"})," \u4e00\u822c\u4ee5 ",(0,c.jsx)(e.code,{children:"$"})," \u7b26\u53f7\u4f5c\u4e3a\u5f00\u5934\uff1b\u4f7f\u7528 ",(0,c.jsx)(e.code,{children:"."})," \u4f5c\u4e3a\u8def\u5f84\u5206\u9694\u7b26\uff1b\u4f7f\u7528 ",(0,c.jsx)(e.code,{children:"[]"})," \u8868\u793a\u6570\u7ec4\u4e0b\u6807\uff0c \u4ece 0 \u5f00\u59cb\u3002"]}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(e.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,c.jsx)(e.p,{children:"\u8fd4\u56de JSON ARRAY \u7c7b\u578b\u7684\u503c\u3002"}),"\n",(0,c.jsx)(e.p,{children:"\u5982\u679c\u8f93\u5165\u7684 JSON \u5bf9\u8c61\u4e3a\u7a7a\uff0c\u5219\u8fd4\u56de\u7a7a\u6570\u7ec4\u3002"}),"\n",(0,c.jsxs)(e.p,{children:["\u5982\u679c",(0,c.jsx)(e.code,{children:"json_doc"}),"\u4e0d\u662f JSON \u5bf9\u8c61\u6216\u8005\u6307\u5b9a\u7684\u8def\u5f84\u4e0d\u5b58\u5728\uff0c\u5219\u8fd4\u56de ",(0,c.jsx)(e.code,{children:"NULL"}),"\u3002"]}),"\n",(0,c.jsxs)(e.p,{children:["\u5982\u679c",(0,c.jsx)(e.code,{children:"json_doc"}),"\u4e3a\u5305\u542b JSON \u5bf9\u8c61\u7684\u6570\u7ec4\uff0c\u53ef\u4ee5\u4f7f\u7528",(0,c.jsx)(e.code,{children:"path"}),"\u6307\u5411\u8be5\u5bf9\u8c61\uff0c\u6b63\u5e38\u8fd4\u56de\u503c\uff0c\u89c1\u793a\u4f8b\u4e94\u3002"]}),"\n",(0,c.jsx)(e.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,c.jsx)(e.p,{children:"\u793a\u4f8b\u4e00: JSON \u5bf9\u8c61\u4e3a\u7a7a\u5bf9\u8c61\uff0c\u8fd4\u56de\u7a7a\u6570\u7ec4\u3002"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-Plain",children:"SELECT JSON_KEYS('{}');\n+-----------------+\n| json_keys('{}') |\n+-----------------+\n| []              |\n+-----------------+\n"})}),"\n",(0,c.jsx)(e.p,{children:"\u793a\u4f8b\u4e8c: \u8fd4\u56de JSON \u5bf9\u8c61\u7684\u6240\u6709\u6700\u4e0a\u5c42 key \u7ec4\u6210\u7684\u6570\u7ec4\u3002"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-Plain",children:'SELECT JSON_KEYS(\'{"a": 1, "b": 2, "c": 3}\');\n+---------------------------------------+\n| json_keys(\'{"a": 1, "b": 2, "c": 3}\') |\n+---------------------------------------+\n| ["a", "b", "c"]                       |\n+---------------------------------------+\n'})}),"\n",(0,c.jsx)(e.p,{children:"\u793a\u4f8b\u4e09\uff1a\u8fd4\u56de\u6307\u5b9a\u8def\u5f84\u4e0b\u6240\u6709\u6700\u4e0a\u5c42 key \u7ec4\u6210\u7684\u6570\u7ec4\u3002"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-Plain",children:'SELECT JSON_KEYS(\'{"a": 1, "b": 2, "c": {"d": 3, "e": 4, "f": 5}}\', \'$.c\');\n+---------------------------------------------------------------------+\n| json_keys(\'{"a": 1, "b": 2, "c": {"d": 3, "e": 4, "f": 5}}\', \'$.c\') |\n+---------------------------------------------------------------------+\n| ["d", "e", "f"]                                                     |\n+---------------------------------------------------------------------+\n'})}),"\n",(0,c.jsx)(e.p,{children:"\u793a\u4f8b\u56db\uff1a\u6307\u5b9a\u7684\u8def\u5f84\u4e0d\u5b58\u5728\uff0c\u8fd4\u56de NULL\u3002"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-JSON",children:'SELECT JSON_KEYS(\'{"a": 1, "b": 2, "c": {"d": 3, "e": 4, "f": 5}}\', \'$.e\');\n+---------------------------------------------------------------------+\n| json_keys(\'{"a": 1, "b": 2, "c": {"d": 3, "e": 4, "f": 5}}\', \'$.e\') |\n+---------------------------------------------------------------------+\n| NULL                                                                |\n+---------------------------------------------------------------------+\n'})}),"\n",(0,c.jsxs)(e.p,{children:["\u793a\u4f8b\u4e94\uff1a\u8f93\u5165\u7684\u5b57\u7b26\u4e32\u975e JSON \u5bf9\u8c61\uff0c\u4e14\u672a\u6307\u5b9a",(0,c.jsx)(e.code,{children:"path"}),"\uff0c\u8fd4\u56de NULL\u3002"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-JSON",children:'SELECT JSON_KEYS(\'[1, 2, {"a": 1, "b": 2}]\');\n+---------------------------------------+\n| json_keys(\'[1, 2, {"a": 1, "b": 2}]\') |\n+---------------------------------------+\n| NULL                                  |\n+---------------------------------------+\n'})}),"\n",(0,c.jsx)(e.p,{children:"\u793a\u4f8b\u516d\uff1a\u8f93\u5165\u7684\u5b57\u7b26\u4e32\u4e3a\u5305\u542b JSON \u5bf9\u8c61\u7684\u6570\u7ec4\uff0c\u4e14 JSON \u5bf9\u8c61\u4e0e\u8def\u5f84\u5339\u914d\uff0c\u6b63\u5e38\u8fd4\u56de\u503c\u3002"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-JSON",children:'SELECT JSON_KEYS(\'[0, 1, {"a": 1, "b": 2}]\', \'$[2]\');\n+-----------------------------------------------+\n| json_keys(\'[0, 1, {"a": 1, "b": 2}]\', \'$[2]\') |\n+-----------------------------------------------+\n| ["a", "b"]                                    |\n+-----------------------------------------------+\n'})})]})}const j=function(n={}){const{wrapper:e}=Object.assign({},(0,o.ah)(),n.components);return e?(0,c.jsx)(e,Object.assign({},n,{children:(0,c.jsx)(a,n)})):a(n)}},11151:(n,e,s)=>{s.d(e,{Zo:()=>d,ah:()=>r});var c=s(67294);const o=c.createContext({});function r(n){const e=c.useContext(o);return c.useMemo((()=>"function"==typeof n?n(e):{...e,...n}),[e,n])}const i={};function d({components:n,children:e,disableParentContext:s}){let d;return d=s?"function"==typeof n?n({}):n||i:r(n),c.createElement(o.Provider,{value:d},e)}}}]);