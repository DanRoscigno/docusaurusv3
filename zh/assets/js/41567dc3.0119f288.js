"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[8095],{21057:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var s=t(85893),i=t(11151);const r={},a="bitmap_intersect",c={id:"sql-reference/sql-functions/bitmap-functions/bitmap_intersect",title:"bitmap_intersect",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.0/sql-reference/sql-functions/bitmap-functions/bitmap_intersect.md",sourceDirName:"sql-reference/sql-functions/bitmap-functions",slug:"/sql-reference/sql-functions/bitmap-functions/bitmap_intersect",permalink:"/docusaurusv3/zh/docs/3.0/sql-reference/sql-functions/bitmap-functions/bitmap_intersect",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/sql-reference/sql-functions/bitmap-functions/bitmap_intersect.md",tags:[],version:"3.0",frontMatter:{},sidebar:"documentation",previous:{title:"bitmap_hash",permalink:"/docusaurusv3/zh/docs/3.0/sql-reference/sql-functions/bitmap-functions/bitmap_hash"},next:{title:"bitmap_max",permalink:"/docusaurusv3/zh/docs/3.0/sql-reference/sql-functions/bitmap-functions/bitmap_max"}},o={},l=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code"},(0,i.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"bitmap_intersect",children:"bitmap_intersect"}),"\n",(0,s.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,s.jsx)(n.p,{children:"\u8f93\u5165\u4e00\u7ec4 bitmap \u503c\uff0c\u6c42\u8fd9\u4e00\u7ec4 bitmap \u503c\u7684\u4ea4\u96c6\uff0c\u5e76\u8fd4\u56de\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Haskell",children:"BITMAP_INTERSECT(value)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"value"}),": \u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u4e3a BITMAP\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,s.jsx)(n.p,{children:"\u8fd4\u56de\u503c\u7684\u6570\u636e\u7c7b\u578b\u4e3a BITMAP\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,s.jsx)(n.p,{children:"\u8868\u7ed3\u6784"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yml",children:"KeysType: AGG_KEY\nColumns: tag varchar, date datetime, user_id bitmap bitmap_union\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"-- \u6c42\u4eca\u5929\u548c\u6628\u5929\u4e0d\u540c tag \u4e0b\u7684\u7528\u6237\u7559\u5b58\u3002\nselect tag, bitmap_intersect(user_id)\nfrom (\n    select tag, date, bitmap_union(user_id) user_id\n    from table\n    where date in ('2020-05-18', '2020-05-19')\n    group by tag, date) a\ngroup by tag;\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u548c bitmap_to_string \u51fd\u6570\u7ec4\u5408\u4f7f\u7528\u53ef\u4ee5\u83b7\u53d6\u4ea4\u96c6\u7684\u5177\u4f53\u6570\u636e"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"--\u6c42\u4eca\u5929\u548c\u6628\u5929\u4e0d\u540c tag \u4e0b\u7559\u5b58\u7684\u7528\u6237\u90fd\u662f\u54ea\u4e9b\u3002\nselect tag, bitmap_to_string(bitmap_intersect(user_id))\nfrom (\n    select tag, date, bitmap_union(user_id) user_id\n    from table where date in ('2020-05-18', '2020-05-19')\n    group by tag, date) a\ngroup by tag;\n"})})]})}const u=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(d,e)})):d(e)}},11151:(e,n,t)=>{t.d(n,{Zo:()=>c,ah:()=>r});var s=t(67294);const i=s.createContext({});function r(e){const n=s.useContext(i);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const a={};function c({components:e,children:n,disableParentContext:t}){let c;return c=t?"function"==typeof e?e({}):e||a:r(e),s.createElement(i.Provider,{value:c},n)}}}]);