"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[45307],{45829:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var n=s(85893),r=s(11151);const a={displayed_sidebar:"Chinese"},c="INT",i={id:"sql-reference/sql-statements/data-types/INT",title:"INT",description:"\u63cf\u8ff0",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.0/sql-reference/sql-statements/data-types/INT.md",sourceDirName:"sql-reference/sql-statements/data-types",slug:"/sql-reference/sql-statements/data-types/INT",permalink:"/doc/zh/docs/3.0/sql-reference/sql-statements/data-types/INT",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-statements/data-types/INT.md",tags:[],version:"3.0",frontMatter:{displayed_sidebar:"Chinese"},sidebar:"Chinese",previous:{title:"HLL(HyperLogLog)",permalink:"/doc/zh/docs/3.0/sql-reference/sql-statements/data-types/HLL"},next:{title:"JSON",permalink:"/doc/zh/docs/3.0/sql-reference/sql-statements/data-types/JSON"}},o={},d=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function l(e){const t=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code"},(0,r.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"int",children:"INT"}),"\n",(0,n.jsx)(t.h2,{id:"\u63cf\u8ff0",children:"\u63cf\u8ff0"}),"\n",(0,n.jsx)(t.p,{children:"4 \u5b57\u8282\u6709\u7b26\u53f7\u6574\u6570\uff0c\u8303\u56f4 [-2147483648, 2147483647]\u3002"}),"\n",(0,n.jsx)(t.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,n.jsx)(t.p,{children:"\u521b\u5efa\u8868\u65f6\u6307\u5b9a\u5b57\u6bb5\u7c7b\u578b\u4e3a INT\u3002"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:'CREATE TABLE intDemo (\n    pk INT COMMENT "range [-2147483648, 2147483647]"\n) ENGINE=OLAP \nDUPLICATE KEY(pk)\nCOMMENT "OLAP"\nDISTRIBUTED BY HASH(pk);\n'})})]})}const p=function(e={}){const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(l,e)})):l(e)}},11151:(e,t,s)=>{s.d(t,{Zo:()=>i,ah:()=>a});var n=s(67294);const r=n.createContext({});function a(e){const t=n.useContext(r);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const c={};function i({components:e,children:t,disableParentContext:s}){let i;return i=s?"function"==typeof e?e({}):e||c:a(e),n.createElement(r.Provider,{value:i},t)}}}]);