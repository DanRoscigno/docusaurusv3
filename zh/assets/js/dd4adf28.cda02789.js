"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[50263],{8437:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var n=s(85893),r=s(11151);const a={},c="CHAR",o={id:"sql-reference/sql-statements/data-types/CHAR",title:"CHAR",description:"\u63cf\u8ff0",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.0/sql-reference/sql-statements/data-types/CHAR.md",sourceDirName:"sql-reference/sql-statements/data-types",slug:"/sql-reference/sql-statements/data-types/CHAR",permalink:"/doc/zh/docs/3.0/sql-reference/sql-statements/data-types/CHAR",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/sql-reference/sql-statements/data-types/CHAR.md",tags:[],version:"3.0",frontMatter:{},sidebar:"documentation",previous:{title:"BOOLEAN",permalink:"/doc/zh/docs/3.0/sql-reference/sql-statements/data-types/BOOLEAN"},next:{title:"DATE",permalink:"/doc/zh/docs/3.0/sql-reference/sql-statements/data-types/DATE"}},i={},l=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function d(e){const t=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code"},(0,r.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"char",children:"CHAR"}),"\n",(0,n.jsx)(t.h2,{id:"\u63cf\u8ff0",children:"\u63cf\u8ff0"}),"\n",(0,n.jsx)(t.p,{children:"CHAR(M)"}),"\n",(0,n.jsx)(t.p,{children:"\u5b9a\u957f\u5b57\u7b26\u4e32\uff0cM \u4ee3\u8868\u7684\u662f\u5b9a\u957f\u5b57\u7b26\u4e32\u7684\u957f\u5ea6\u3002M \u7684\u8303\u56f4\u662f 1~255\u3002"}),"\n",(0,n.jsx)(t.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,n.jsx)(t.p,{children:"\u521b\u5efa\u8868\u65f6\u6307\u5b9a\u5b57\u6bb5\u7c7b\u578b\u4e3a CHAR\u3002"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:'CREATE TABLE charDemo (\n    pk INT COMMENT "range [-2147483648, 2147483647]",\n    pd_type CHAR(20) NOT NULL COMMENT "range char(m),m in (1-255) "\n) ENGINE=OLAP \nDUPLICATE KEY(pk)\nCOMMENT "OLAP"\nDISTRIBUTED BY HASH(pk);\n'})})]})}const p=function(e={}){const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(d,e)})):d(e)}},11151:(e,t,s)=>{s.d(t,{Zo:()=>o,ah:()=>a});var n=s(67294);const r=n.createContext({});function a(e){const t=n.useContext(r);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const c={};function o({components:e,children:t,disableParentContext:s}){let o;return o=s?"function"==typeof e?e({}):e||c:a(e),n.createElement(r.Provider,{value:o},t)}}}]);