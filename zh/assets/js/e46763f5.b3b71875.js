"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[41391],{40823:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>u});var c=s(85893),t=s(11151);const r={},l="row",o={id:"sql-reference/sql-functions/struct-functions/row",title:"row",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.1/sql-reference/sql-functions/struct-functions/row.md",sourceDirName:"sql-reference/sql-functions/struct-functions",slug:"/sql-reference/sql-functions/struct-functions/row",permalink:"/docusaurusv3/zh/docs/sql-reference/sql-functions/struct-functions/row",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-functions/struct-functions/row.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"named_struct",permalink:"/docusaurusv3/zh/docs/sql-reference/sql-functions/struct-functions/named_struct"},next:{title:"Table Functions",permalink:"/docusaurusv3/zh/docs/category/table-functions"}},i={},u=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u76f8\u5173\u6587\u6863",id:"\u76f8\u5173\u6587\u6863",level:2}];function a(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",pre:"pre",ul:"ul",li:"li",a:"a"},(0,t.ah)(),e.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.h1,{id:"row",children:"row"}),"\n",(0,c.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,c.jsxs)(n.p,{children:["\u6839\u636e\u7ed9\u5b9a\u7684\u4e00\u4e2a\u6216\u591a\u4e2a\u503c\u6765\u6784\u5efa STRUCT\u3002\u8be5\u51fd\u6570\u652f\u6301 unnamed struct\uff0c\u4f7f\u7528\u8be5\u51fd\u6570\u65f6\u65e0\u9700\u6307\u5b9a\u5b57\u6bb5\u540d\uff0cStarRocks \u4f1a\u81ea\u52a8\u751f\u6210\u5b57\u6bb5\u540d\uff0c\u4f8b\u5982 ",(0,c.jsx)(n.code,{children:"col1, col2,..."}),"\u3002"]}),"\n",(0,c.jsx)(n.p,{children:"\u8be5\u51fd\u6570\u4ece 3.1 \u7248\u672c\u5f00\u59cb\u652f\u6301\u3002struct() \u662f row() \u7684\u522b\u540d\u3002"}),"\n",(0,c.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-Haskell",children:"STRUCT row(ANY val, ...)\n"})}),"\n",(0,c.jsx)(n.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"val"}),": \u652f\u6301\u4efb\u610f\u7c7b\u578b\u3002\u5fc5\u987b\u81f3\u5c11\u4f20\u5165\u4e00\u4e2a\u53c2\u6570\u3002\u53d6\u503c\u53ef\u4ee5\u4e3a NULL\u3002\u591a\u4e2a\u53d6\u503c\u4ee5\u9017\u53f7\u5206\u9694\u3002"]}),"\n",(0,c.jsx)(n.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,c.jsx)(n.p,{children:"\u8fd4\u56de\u4e00\u4e2a\u5305\u542b\u6240\u6709\u8f93\u5165\u503c\u7684 STRUCT\u3002"}),"\n",(0,c.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-Plaintext",children:'select row(1,"Apple","Pear");\n+-----------------------------------------+\n| row(1, \'Apple\', \'Pear\')                 |\n+-----------------------------------------+\n| {"col1":1,"col2":"Apple","col3":"Pear"} |\n+-----------------------------------------+\n\nselect row("Apple", NULL);\n+------------------------------+\n| row(\'Apple\', NULL)           |\n+------------------------------+\n| {"col1":"Apple","col2":null} |\n+------------------------------+\n\nselect struct(1,2,3);\n+------------------------------+\n| row(1, 2, 3)                 |\n+------------------------------+\n| {"col1":1,"col2":2,"col3":3} |\n+------------------------------+\n'})}),"\n",(0,c.jsx)(n.h2,{id:"\u76f8\u5173\u6587\u6863",children:"\u76f8\u5173\u6587\u6863"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.a,{href:"/docusaurusv3/zh/docs/sql-reference/sql-statements/data-types/STRUCT",children:"STRUCT \u6570\u636e\u7c7b\u578b"})}),"\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.a,{href:"/docusaurusv3/zh/docs/sql-reference/sql-functions/struct-functions/named_struct",children:"named_struct"})}),"\n"]})]})}const d=function(e={}){const{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?(0,c.jsx)(n,Object.assign({},e,{children:(0,c.jsx)(a,e)})):a(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>o,ah:()=>r});var c=s(67294);const t=c.createContext({});function r(e){const n=c.useContext(t);return c.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const l={};function o({components:e,children:n,disableParentContext:s}){let o;return o=s?"function"==typeof e?e({}):e||l:r(e),c.createElement(t.Provider,{value:o},n)}}}]);