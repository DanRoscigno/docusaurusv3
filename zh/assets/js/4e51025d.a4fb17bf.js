"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[89762],{62491:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>o,frontMatter:()=>i,metadata:()=>r,toc:()=>h});var s=l(85893),c=l(11151);const i={displayed_sidebar:"Chinese"},d="DELETE",r={id:"sql-reference/sql-statements/data-manipulation/DELETE",title:"DELETE",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.2/sql-reference/sql-statements/data-manipulation/DELETE.md",sourceDirName:"sql-reference/sql-statements/data-manipulation",slug:"/sql-reference/sql-statements/data-manipulation/DELETE",permalink:"/zh/docs/2.2/sql-reference/sql-statements/data-manipulation/DELETE",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-statements/data-manipulation/DELETE.md",tags:[],version:"2.2",frontMatter:{displayed_sidebar:"Chinese"},sidebar:"Chinese",previous:{title:"CANCEL LOAD",permalink:"/zh/docs/2.2/sql-reference/sql-statements/data-manipulation/CANCEL_LOAD"},next:{title:"EXPORT",permalink:"/zh/docs/2.2/sql-reference/sql-statements/data-manipulation/EXPORT"}},a={},h=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:3},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:3},{value:"\u4f7f\u7528\u9650\u5236",id:"\u4f7f\u7528\u9650\u5236",level:3},{value:"\u5f71\u54cd",id:"\u5f71\u54cd",level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:3},{value:"DELETE \u4e0e\u4e3b\u952e\u6a21\u578b",id:"delete-\u4e0e\u4e3b\u952e\u6a21\u578b",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:3},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e-1",level:3},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879-1",level:3},{value:"\u4f7f\u7528\u9650\u5236",id:"\u4f7f\u7528\u9650\u5236-1",level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b-1",level:2},{value:"\u5173\u952e\u5b57(keywords)",id:"\u5173\u952e\u5b57keywords",level:2}];function t(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",h3:"h3",ul:"ul",li:"li",blockquote:"blockquote",ol:"ol"},(0,c.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"delete",children:"DELETE"}),"\n",(0,s.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,s.jsx)(n.p,{children:"\u8be5\u8bed\u53e5\u7528\u4e8e\u6309\u6761\u4ef6\u5220\u9664\u8868\u4e2d\u7684\u6570\u636e\u3002\u6ce8\u610f\u8be5\u64cd\u4f5c\u4f1a\u540c\u65f6\u5220\u9664\u548c\u8be5\u8868\u76f8\u5173\u7684\u7269\u5316\u89c6\u56fe\u7684\u6570\u636e\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u5bf9\u4e8e\u660e\u7ec6\u6a21\u578b\u3001\u805a\u5408\u6a21\u578b\u3001\u66f4\u65b0\u6a21\u578b\u8868\uff0c\u652f\u6301\u5220\u9664\u8868\u4e2d\u6307\u5b9a\u5206\u533a\u7684\u6570\u636e\u3002\u4e3b\u952e\u6a21\u578b\u76ee\u524d\u8fd8\u4e0d\u652f\u6301\u5220\u9664\u6307\u5b9a\u5206\u533a\u4e2d\u7684\u6570\u636e\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"DELETE FROM table_name [PARTITION partition_name]\nWHERE\ncolumn_name1 op { value | value_list } [ AND column_name2 op { value | value_list } ...];\n"})}),"\n",(0,s.jsx)(n.h3,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"table_name"}),"\uff1a\u8981\u64cd\u4f5c\u7684\u8868\u540d\uff0c\u5fc5\u9009\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"PARTITION"}),"\uff1a\u8981\u64cd\u4f5c\u7684\u5206\u533a\u540d\uff0c\u5fc5\u9009\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"column_name"}),"\uff1a\u4f5c\u4e3a\u5220\u9664\u6761\u4ef6\u7684\u5217\u3002\u53ef\u4ee5\u6307\u5b9a\u4e00\u4e2a\u6216\u591a\u4e2a\u5217\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"op"}),"\uff1a\u6307\u5b9a\u7b97\u5b50\u3002\u652f\u6301 ",(0,s.jsx)(n.code,{children:"="}),"\u3001",(0,s.jsx)(n.code,{children:">"}),"\u3001",(0,s.jsx)(n.code,{children:"<"}),"\u3001",(0,s.jsx)(n.code,{children:">="}),"\u3001",(0,s.jsx)(n.code,{children:"<="}),"\u3001",(0,s.jsx)(n.code,{children:"!="}),"\u3001",(0,s.jsx)(n.code,{children:"IN"})," \u548c ",(0,s.jsx)(n.code,{children:"NOT IN"}),"\u3002"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"\u8bf4\u660e\uff1a\u65b9\u62ec\u53f7 ([]) \u4e2d\u53c2\u6570\u5982\u65e0\u9700\u6307\u5b9a\u7684\u8bdd\u53ef\u7701\u7565\u4e0d\u5199\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"\u6ce8\u610f\u4e8b\u9879",children:"\u6ce8\u610f\u4e8b\u9879"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u805a\u5408\u6a21\u578b\u548c\u66f4\u65b0\u6a21\u578b\u8868\u4ec5\u652f\u6301 Key \u5217\u4f5c\u4e3a\u5220\u9664\u6761\u4ef6\u3002\u660e\u7ec6\u6a21\u578b\u8868\u652f\u6301\u4efb\u610f\u5217\u4f5c\u4e3a\u5220\u9664\u6761\u4ef6\u3002"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u5f53\u6307\u5b9a\u7684 Key \u5217\u4e0d\u5b58\u5728\u4e8e\u67d0\u4e2a\u7269\u5316\u89c6\u56fe\u4e2d\u65f6\uff0c\u65e0\u6cd5\u6267\u884c DELETE \u8bed\u53e5\u3002"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u6761\u4ef6\u4e4b\u95f4\u53ea\u80fd\u662f\u201c\u4e0e\u201d\u7684\u5173\u7cfb\u3002 \u82e5\u5e0c\u671b\u8fbe\u6210\u201c\u6216\u201d\u7684\u5173\u7cfb\uff0c\u9700\u8981\u5c06\u6761\u4ef6\u5206\u522b\u5199\u5728\u4e24\u4e2a DELETE \u8bed\u53e5\u4e2d\u3002"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"\u4f7f\u7528\u9650\u5236",children:"\u4f7f\u7528\u9650\u5236"}),"\n",(0,s.jsx)(n.p,{children:"\u660e\u7ec6\u6a21\u578b\u3001\u805a\u5408\u6a21\u578b\u548c\u66f4\u65b0\u6a21\u578b\u4e0b\uff0cDELETE \u8bed\u53e5\u76ee\u524d\u4e0d\u652f\u6301\u4ee5\u5b50\u67e5\u8be2\u7ed3\u679c\u4f5c\u4e3a\u5220\u9664\u6761\u4ef6\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"\u5f71\u54cd",children:"\u5f71\u54cd"}),"\n",(0,s.jsx)(n.p,{children:"\u6267\u884c DELETE \u8bed\u53e5\u540e\uff0c\u53ef\u80fd\u4f1a\u5bfc\u81f4\u63a5\u4e0b\u6765\u4e00\u6bb5\u65f6\u95f4\u5185\u7684\u67e5\u8be2\u6548\u7387\u964d\u4f4e\u3002\u5f71\u54cd\u7a0b\u5ea6\u53d6\u51b3\u4e8e\u8bed\u53e5\u4e2d\u6307\u5b9a\u7684\u5220\u9664\u6761\u4ef6\u7684\u6570\u91cf\u3002\u6307\u5b9a\u7684\u6761\u4ef6\u8d8a\u591a\uff0c\u5f71\u54cd\u8d8a\u5927\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,s.jsxs)(n.p,{children:["\u793a\u4f8b 1\uff1a\u5220\u9664 ",(0,s.jsx)(n.code,{children:"my_table"})," \u8868 ",(0,s.jsx)(n.code,{children:"p1"})," \u5206\u533a\u4e2d ",(0,s.jsx)(n.code,{children:"k1"})," \u5217\u503c\u4e3a ",(0,s.jsx)(n.code,{children:"3"})," \u7684\u6570\u636e\u884c\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"DELETE FROM my_table PARTITION p1\nWHERE k1 = 3;\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u793a\u4f8b 2\uff1a\u5220\u9664 ",(0,s.jsx)(n.code,{children:"my_table"})," \u8868 ",(0,s.jsx)(n.code,{children:"p1"})," \u5206\u533a\u4e2d ",(0,s.jsx)(n.code,{children:"k1"})," \u5217\u503c\u5927\u4e8e\u7b49\u4e8e ",(0,s.jsx)(n.code,{children:"3"})," \u4e14 ",(0,s.jsx)(n.code,{children:"k2"})," \u5217\u503c\u4e3a ",(0,s.jsx)(n.code,{children:'"abc"'})," \u7684\u6570\u636e\u884c\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:'DELETE FROM my_table PARTITION p1\nWHERE k1 >= 3 AND k2 = "abc";\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u793a\u4f8b 3\uff1a\u5220\u9664 ",(0,s.jsx)(n.code,{children:"my_table"})," \u8868\u6240\u6709\u5206\u533a\u4e2d ",(0,s.jsx)(n.code,{children:"k2"})," \u5217\u503c\u4e3a ",(0,s.jsx)(n.code,{children:'"abc"'})," \u6216 ",(0,s.jsx)(n.code,{children:'"cba"'})," \u7684\u6570\u636e\u884c\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:'DELETE FROM my_table\nWHERE  k2 in ("abc", "cba");\n'})}),"\n",(0,s.jsx)(n.h2,{id:"delete-\u4e0e\u4e3b\u952e\u6a21\u578b",children:"DELETE \u4e0e\u4e3b\u952e\u6a21\u578b"}),"\n",(0,s.jsx)(n.h3,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"DELETE FROM table_name WHERE condition;\n"})}),"\n",(0,s.jsx)(n.h3,{id:"\u53c2\u6570\u8bf4\u660e-1",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"table_name"}),"\uff1a\u8981\u64cd\u4f5c\u7684\u8868\u540d\uff0c\u5fc5\u9009\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"condition"}),"\uff1a\u5220\u9664\u6761\u4ef6\uff0c\u53ef\u4ee5\u6307\u5b9a\u4e00\u4e2a\u6216\u591a\u4e2a\u6761\u4ef6\u3002\u8be5\u53c2\u6570\u4e3a\u5fc5\u9009\uff0c\u9632\u6b62\u5220\u9664\u6574\u5f20\u8868\u3002"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"\u6ce8\u610f\u4e8b\u9879-1",children:"\u6ce8\u610f\u4e8b\u9879"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\u652f\u6301\u5982\u4e0b\u6bd4\u8f83\u8fd0\u7b97\u7b26\uff1a",(0,s.jsx)(n.code,{children:"="}),"\u3001",(0,s.jsx)(n.code,{children:">"}),"\u3001",(0,s.jsx)(n.code,{children:"<"}),"\u3001",(0,s.jsx)(n.code,{children:">="}),"\u3001",(0,s.jsx)(n.code,{children:"<="}),"\u3001",(0,s.jsx)(n.code,{children:"!="}),"\u3001",(0,s.jsx)(n.code,{children:"IN"})," \u548c ",(0,s.jsx)(n.code,{children:"NOT IN"}),"\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\u652f\u6301\u5982\u4e0b\u903b\u8f91\u8fd0\u7b97\u7b26\uff1a",(0,s.jsx)(n.code,{children:"AND"})," \u548c ",(0,s.jsx)(n.code,{children:"OR"}),"\u3002"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"\u4f7f\u7528\u9650\u5236-1",children:"\u4f7f\u7528\u9650\u5236"}),"\n",(0,s.jsx)(n.p,{children:"\u6ce8\uff1a\u65b9\u62ec\u53f7 [] \u4e2d\u5185\u5bb9\u5982\u65e0\u9700\u6307\u5b9a\u53ef\u7701\u7565\u4e0d\u5199\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"DELETE FROM table_name [PARTITION partition_name]\nWHERE\ncolumn_name1 op { value | value_list } [ AND column_name2 op { value | value_list } ...];\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u8bf4\u660e\uff1a"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["op \u7684\u53ef\u9009\u7c7b\u578b\u5305\u62ec\uff1a",(0,s.jsx)(n.code,{children:"=, >, <, > =, <=, !=, in, not in"})]}),"\n",(0,s.jsx)(n.li,{children:"\u975e Duplicate \u8868\u53ea\u80fd\u6307\u5b9a key \u5217\u4e0a\u7684\u6761\u4ef6\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u5f53\u9009\u5b9a\u7684 key \u5217\u4e0d\u5b58\u5728\u4e8e\u67d0\u4e2a rollup \u4e2d\u65f6\uff0c\u65e0\u6cd5\u8fdb\u884c delete\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u6761\u4ef6\u4e4b\u95f4\u53ea\u80fd\u662f\u201c\u4e0e\u201d\u7684\u5173\u7cfb\u3002\n\u82e5\u5e0c\u671b\u8fbe\u6210\u201c\u6216\u201d\u7684\u5173\u7cfb\uff0c\u9700\u8981\u5c06\u6761\u4ef6\u5206\u5199\u5728\u4e24\u4e2a DELETE \u8bed\u53e5\u4e2d\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u6ce8\u610f\uff1a"}),"\n",(0,s.jsx)(n.p,{children:"1.\u8be5\u8bed\u53e5\u53ef\u80fd\u4f1a\u964d\u4f4e\u6267\u884c\u540e\u4e00\u6bb5\u65f6\u95f4\u5185\u7684\u67e5\u8be2\u6548\u7387\u3002\n\u5f71\u54cd\u7a0b\u5ea6\u53d6\u51b3\u4e8e\u8bed\u53e5\u4e2d\u6307\u5b9a\u7684\u5220\u9664\u6761\u4ef6\u7684\u6570\u91cf\u3002\n\u6307\u5b9a\u7684\u6761\u4ef6\u8d8a\u591a\uff0c\u5f71\u54cd\u8d8a\u5927\u3002\n2.delete \u8bed\u53e5\u5220\u9664\u6761\u4ef6\u76ee\u524d\u4e0d\u652f\u6301\u662f\u5b50\u67e5\u8be2\u7ed3\u679c\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u793a\u4f8b-1",children:"\u793a\u4f8b"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u5220\u9664 my_table partition p1 \u4e2d k1 \u5217\u503c\u4e3a 3 \u7684\u6570\u636e\u884c"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"DELETE FROM my_table PARTITION p1\nWHERE k1 = 3;\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:'\u5220\u9664 my_table partition p1 \u4e2d k1 \u5217\u503c\u5927\u4e8e\u7b49\u4e8e 3 \u4e14 k2 \u5217\u503c\u4e3a "abc" \u7684\u6570\u636e\u884c'}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'DELETE FROM my_table PARTITION p1\nWHERE k1 >= 3 AND k2 = "abc";\n'})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:'\u5220\u9664 my_table \u6240\u6709\u5206\u533a\u4e2d k2 \u5217\u503c\u4e3a "abc" \u6216\u8005 "cba" \u7684\u6570\u636e\u884c'}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'DELETE FROM my_table\nWHERE  k2 in ("abc", "cba");\n'})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u5173\u952e\u5b57keywords",children:"\u5173\u952e\u5b57(keywords)"}),"\n",(0,s.jsx)(n.p,{children:"DELETE"})]})}const o=function(e={}){const{wrapper:n}=Object.assign({},(0,c.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(t,e)})):t(e)}},11151:(e,n,l)=>{l.d(n,{Zo:()=>r,ah:()=>i});var s=l(67294);const c=s.createContext({});function i(e){const n=s.useContext(c);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const d={};function r({components:e,children:n,disableParentContext:l}){let r;return r=l?"function"==typeof e?e({}):e||d:i(e),s.createElement(c.Provider,{value:r},n)}}}]);