"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[11191],{76977:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>t,default:()=>h,frontMatter:()=>c,metadata:()=>l,toc:()=>a});var s=r(85893),i=r(11151);const c={},t="from_binary",l={id:"sql-reference/sql-functions/binary-functions/from_binary",title:"from_binary",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.1/sql-reference/sql-functions/binary-functions/from_binary.md",sourceDirName:"sql-reference/sql-functions/binary-functions",slug:"/sql-reference/sql-functions/binary-functions/from_binary",permalink:"/doc/zh/docs/sql-reference/sql-functions/binary-functions/from_binary",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-functions/binary-functions/from_binary.md",tags:[],version:"3.1",frontMatter:{},sidebar:"Chinese31",previous:{title:"Binary Functions",permalink:"/doc/zh/docs/category/binary-functions-1"},next:{title:"to_binary",permalink:"/doc/zh/docs/sql-reference/sql-functions/binary-functions/to_binary"}},o={},a=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2},{value:"References",id:"references",level:2}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",ul:"ul",li:"li",a:"a"},(0,i.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"from_binary",children:"from_binary"}),"\n",(0,s.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,s.jsx)(n.p,{children:"\u6839\u636e\u6307\u5b9a\u7684\u683c\u5f0f\uff0c\u5c06\u4e8c\u8fdb\u5236\u6570\u636e\u8f6c\u5316\u4e3a VARCHAR \u7c7b\u578b\u7684\u5b57\u7b26\u4e32\u3002\u652f\u6301\u7684\u4e8c\u8fdb\u5236\u683c\u5f0f\u5305\u62ec Hex, Base64\uff0c\u548c UTF-8\u3002\u5982\u679c\u672a\u6307\u5b9a\uff0c\u9ed8\u8ba4\u4e3a Hex\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u8be5\u51fd\u6570\u4ece 3.0 \u7248\u672c\u5f00\u59cb\u652f\u6301\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Haskell",children:"from_binary(binary[, binary_type])\n"})}),"\n",(0,s.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"binary"}),": \u5fc5\u9009\uff0c\u5f85\u8f6c\u6362\u7684\u4e8c\u8fdb\u5236\u6570\u503c\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"binary_type"}),": \u53ef\u9009\uff0c\u6307\u5b9a\u7684\u4e8c\u8fdb\u5236\u683c\u5f0f\u3002\u6709\u6548\u503c\uff1a",(0,s.jsx)(n.code,{children:"hex"}),"\uff0c",(0,s.jsx)(n.code,{children:"encode64"}),"\uff0c",(0,s.jsx)(n.code,{children:"utf8"}),"\u3002"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"hex"})," (\u9ed8\u8ba4\u503c): \u8be5\u51fd\u6570\u4f7f\u7528\u5341\u516d\u8fdb\u5236\u7f16\u7801\u5c06\u4e8c\u8fdb\u5236\u6570\u503c\u8f6c\u6362\u4e3a VARCHAR \u5b57\u7b26\u4e32\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"encode64"}),": \u8be5\u51fd\u6570\u4f7f\u7528 Base64 \u7f16\u7801\u5c06\u4e8c\u8fdb\u5236\u6570\u503c\u8f6c\u6362\u4e3a VARCHAR \u5b57\u7b26\u4e32\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"utf8"}),": \u8be5\u51fd\u6570\u76f4\u63a5\u5c06\u4e8c\u8fdb\u5236\u6570\u503c\u8f6c\u6362\u4e3a VARCHAR \u5b57\u7b26\u4e32\uff0c\u4e0d\u505a\u4efb\u4f55\u8f6c\u6362\u5904\u7406\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"return-value",children:"Return value"}),"\n",(0,s.jsx)(n.p,{children:"\u6839\u636e\u6307\u5b9a\u7684\u683c\u5f0f\uff0c\u8fd4\u56de VARCHAR \u5b57\u7b26\u4e32\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plain",children:"mysql> select from_binary(to_binary('ABAB', 'hex'), 'hex');\n+----------------------------------------------+\n| from_binary(to_binary('ABAB', 'hex'), 'hex') |\n+----------------------------------------------+\n| ABAB                                         |\n+----------------------------------------------+\n1 row in set (0.02 sec)\n\nmysql> select from_base64(from_binary(to_binary('U1RBUlJPQ0tT', 'encode64'), 'encode64'));\n+-----------------------------------------------------------------------------+\n| from_base64(from_binary(to_binary('U1RBUlJPQ0tT', 'encode64'), 'encode64')) |\n+-----------------------------------------------------------------------------+\n| STARROCKS                                                                   |\n+-----------------------------------------------------------------------------+\n1 row in set (0.01 sec)\n\nmysql> select from_binary(to_binary('STARROCKS', 'utf8'), 'utf8');\n+-----------------------------------------------------+\n| from_binary(to_binary('STARROCKS', 'utf8'), 'utf8') |\n+-----------------------------------------------------+\n| STARROCKS                                           |\n+-----------------------------------------------------+\n1 row in set (0.01 sec)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"references",children:"References"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/doc/zh/docs/sql-reference/sql-functions/binary-functions/to_binary",children:"to_binary"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/doc/zh/docs/sql-reference/sql-statements/data-types/BINARY",children:"BINARY/VARBINARY"})}),"\n"]})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(d,e)})):d(e)}},11151:(e,n,r)=>{r.d(n,{Zo:()=>l,ah:()=>c});var s=r(67294);const i=s.createContext({});function c(e){const n=s.useContext(i);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const t={};function l({components:e,children:n,disableParentContext:r}){let l;return l=r?"function"==typeof e?e({}):e||t:c(e),s.createElement(i.Provider,{value:l},n)}}}]);