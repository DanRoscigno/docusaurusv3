"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[23217],{13721:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>t,metadata:()=>l,toc:()=>a});var i=s(85893),r=s(11151);const t={},c="cosine_similarity_norm",l={id:"sql-reference/sql-functions/math-functions/cos_similarity_norm",title:"cosine_similarity_norm",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.5/sql-reference/sql-functions/math-functions/cos_similarity_norm.md",sourceDirName:"sql-reference/sql-functions/math-functions",slug:"/sql-reference/sql-functions/math-functions/cos_similarity_norm",permalink:"/doc/zh/docs/2.5/sql-reference/sql-functions/math-functions/cos_similarity_norm",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-2.5/sql-reference/sql-functions/math-functions/cos_similarity_norm.md",tags:[],version:"2.5",frontMatter:{},sidebar:"Chinese31",previous:{title:"cosine_similarity",permalink:"/doc/zh/docs/2.5/sql-reference/sql-functions/math-functions/cos_similarity"},next:{title:"cot",permalink:"/doc/zh/docs/2.5/sql-reference/sql-functions/math-functions/cot"}},o={},a=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function d(n){const e=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",pre:"pre",code:"code",ol:"ol",li:"li"},(0,r.ah)(),n.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"cosine_similarity_norm",children:"cosine_similarity_norm"}),"\n",(0,i.jsx)(e.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,i.jsxs)(e.p,{children:["\u8ba1\u7b97\u4e24\u4e2a\u5f52\u4e00\u5316\u5411\u91cf\u7684\u4f59\u5f26\u5939\u89d2\u6765\u8bc4\u4f30\u5411\u91cf\u4e4b\u95f4\u7684\u76f8\u4f3c\u5ea6\u3002\u8be5\u51fd\u6570\u5047\u8bbe\u5411\u91cf\u5df2\u7ecf\u505a\u8fc7\u5f52\u4e00\u5316\u3002\u5982\u679c\u60a8\u9700\u8981\u5728\u8ba1\u7b97\u524d\u5bf9\u5411\u91cf\u505a\u5f52\u4e00\u5316\u5904\u7406\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,i.jsx)(e.a,{href:"/doc/zh/docs/2.5/sql-reference/sql-functions/math-functions/cos_similarity",children:"cosine_similarity"})," \u51fd\u6570\u3002"]}),"\n",(0,i.jsx)(e.p,{children:"\u76f8\u4f3c\u5ea6\u53d6\u503c\u5728 -1 \u5230 1 \u4e4b\u95f4\u3002\u5982\u679c\u4e24\u4e2a\u5411\u91cf\u7684\u5939\u89d2\u4e3a 0\xb0\uff0c\u5373\u4e24\u4e2a\u5411\u91cf\u65b9\u5411\u91cd\u5408\u65f6\uff0c\u76f8\u4f3c\u5ea6\u4e3a 1\uff1b\u5982\u679c\u5939\u89d2\u4e3a 180\xb0\uff0c\u5373\u4e24\u4e2a\u5411\u91cf\u65b9\u5411\u76f8\u53cd\u65f6\uff0c\u76f8\u4f3c\u5ea6\u4e3a -1\uff1b\u5982\u679c\u5939\u89d2\u4e3a 90\xb0\uff0c\u5373\u4e24\u4e2a\u5411\u91cf\u65b9\u5411\u5782\u76f4\u65f6\uff0c\u76f8\u4f3c\u5ea6\u4e3a 0\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u503c\u8d8a\u8d8b\u8fd1\u4e8e 1\uff0c\u4ee3\u8868\u4e24\u4e2a\u5411\u91cf\u7684\u65b9\u5411\u8d8a\u63a5\u8fd1\uff1b\u8d8a\u8d8b\u8fd1\u4e8e -1\uff0c\u65b9\u5411\u8d8a\u76f8\u53cd\uff1b\u8d8a\u8d8b\u8fd1\u4e8e 0\uff0c\u8868\u793a\u4e24\u4e2a\u5411\u91cf\u8fd1\u4e4e\u4e8e\u6b63\u4ea4\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u4f59\u5f26\u76f8\u4f3c\u5ea6\u5728\u5ea6\u91cf\u6587\u672c\u3001\u89c6\u9891\u7b49\u76f8\u4f3c\u5ea6\u65f6\u90fd\u8f83\u4e3a\u5e38\u7528\u3002"}),"\n",(0,i.jsx)(e.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-Haskell",children:"cosine_similarity_norm(a, b)\n"})}),"\n",(0,i.jsx)(e.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"a"})," \u548c ",(0,i.jsx)(e.code,{children:"b"})," \u662f\u8fdb\u884c\u6bd4\u8f83\u7684\u4e24\u4e2a\u5411\u91cf\uff0c\u7ef4\u5ea6\u5fc5\u987b\u76f8\u540c\u3002\u53d6\u503c\u5fc5\u987b\u662f",(0,i.jsx)(e.code,{children:"Array<float>"})," \u7c7b\u578b\uff0c\u5373 Array \u4e2d\u7684\u5143\u7d20\u4ec5\u652f\u6301 FLOAT \u7c7b\u578b\u3002\u6ce8\u610f\u4e24\u4e2a\u6570\u7ec4\u7684\u5143\u7d20\u4e2a\u6570\u5fc5\u987b\u76f8\u540c\uff0c\u5426\u5219\u8fd4\u56de\u62a5\u9519\u3002"]}),"\n",(0,i.jsx)(e.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,i.jsx)(e.p,{children:"\u8fd4\u56de FLOAT \u7c7b\u578b\u7684\u503c\uff0c\u53d6\u503c\u8303\u56f4 [-1, 1]\u3002\u5982\u679c\u8f93\u5165\u53c2\u6570\u4e3a NULL \u6216\u8005\u7c7b\u578b\u65e0\u6548\u65f6\uff0c\u8fd4\u56de\u62a5\u9519\u3002"}),"\n",(0,i.jsx)(e.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u521b\u5efa\u8868\u6765\u5b58\u50a8\u5411\u91cf\uff0c\u5e76\u5411\u8868\u4e2d\u63d2\u5165\u6570\u636e\u3002"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-SQL",children:"  CREATE TABLE t1_similarity \n  (id int, data array<float>)\n  DISTRIBUTED BY HASH(id);\n  \n  INSERT INTO t1_similarity VALUES\n  (1, array<float>[0.1, 0.2, 0.3]), \n  (2, array<float>[0.2, 0.1, 0.3]), \n  (3, array<float>[0.3, 0.2, 0.1]);\n"})}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["\u4f7f\u7528 ",(0,i.jsx)(e.code,{children:"cosine_similarity_norm"})," \u51fd\u6570\u6765\u8ba1\u7b97 ",(0,i.jsx)(e.code,{children:"data"})," \u5217\u6bcf\u884c\u7684\u503c\u76f8\u5bf9\u4e8e\u6570\u7ec4 ",(0,i.jsx)(e.code,{children:"[0.1, 0.2, 0.3]"})," \u7684\u76f8\u4f3c\u5ea6\uff0c\u5e76\u4ee5\u964d\u5e8f\u6392\u5217\u7ed3\u679c\u3002"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-Plain",children:"  SELECT id, data, cosine_similarity_norm([0.1, 0.2, 0.3], data) as dist\n  FROM t1_similarity \n  ORDER BY dist DESC;\n  \n  +------+---------------+------------+\n  | id   | data          | dist       |\n  +------+---------------+------------+\n  |    1 | [0.1,0.2,0.3] | 0.14000002 |\n  |    2 | [0.2,0.1,0.3] | 0.13000001 |\n  |    3 | [0.3,0.2,0.1] | 0.10000001 |\n  +------+---------------+------------+\n"})}),"\n"]}),"\n"]})]})}const h=function(n={}){const{wrapper:e}=Object.assign({},(0,r.ah)(),n.components);return e?(0,i.jsx)(e,Object.assign({},n,{children:(0,i.jsx)(d,n)})):d(n)}},11151:(n,e,s)=>{s.d(e,{Zo:()=>l,ah:()=>t});var i=s(67294);const r=i.createContext({});function t(n){const e=i.useContext(r);return i.useMemo((()=>"function"==typeof n?n(e):{...e,...n}),[e,n])}const c={};function l({components:n,children:e,disableParentContext:s}){let l;return l=s?"function"==typeof n?n({}):n||c:t(n),i.createElement(r.Provider,{value:l},e)}}}]);