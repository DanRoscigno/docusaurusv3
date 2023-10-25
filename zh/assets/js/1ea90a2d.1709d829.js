"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[14062],{19293:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>a,metadata:()=>r,toc:()=>o});var t=s(85893),i=s(11151);const a={displayed_sidebar:"Chinese"},c="bitmap_hash",r={id:"sql-reference/sql-functions/bitmap-functions/bitmap_hash",title:"bitmap_hash",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.5/sql-reference/sql-functions/bitmap-functions/bitmap_hash.md",sourceDirName:"sql-reference/sql-functions/bitmap-functions",slug:"/sql-reference/sql-functions/bitmap-functions/bitmap_hash",permalink:"/zh/docs/2.5/sql-reference/sql-functions/bitmap-functions/bitmap_hash",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-functions/bitmap-functions/bitmap_hash.md",tags:[],version:"2.5",frontMatter:{displayed_sidebar:"Chinese"},sidebar:"Chinese",previous:{title:"bitmap_has_any",permalink:"/zh/docs/2.5/sql-reference/sql-functions/bitmap-functions/bitmap_has_any"},next:{title:"bitmap_intersect",permalink:"/zh/docs/2.5/sql-reference/sql-functions/bitmap-functions/bitmap_intersect"}},l={},o=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function h(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code"},(0,i.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"bitmap_hash",children:"bitmap_hash"}),"\n",(0,t.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,t.jsx)(n.p,{children:"\u5bf9\u4efb\u610f\u7c7b\u578b\u7684\u8f93\u5165\u8ba1\u7b97 32 \u4f4d\u7684\u54c8\u5e0c\u503c\uff0c\u8fd4\u56de\u5305\u542b\u8be5\u54c8\u5e0c\u503c\u7684 bitmap\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u4e3b\u8981\u7528\u4e8e stream load \u5bfc\u5165\u4e2d\u5c06\u975e\u6574\u578b\u5b57\u6bb5\u5bfc\u5165\u5230 StarRocks \u8868\u4e2d\u7684 bitmap \u5b57\u6bb5\uff0c\u5982\u4e0b\u4f8b:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'cat data | curl --location-trusted -u user:passwd -T - \\\n    -H "columns: dt,page,device_id, device_id=bitmap_hash(device_id)" \\\n    http://host:8410/api/test/testDb/_stream_load\n'})}),"\n",(0,t.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Haskell",children:"BITMAP_HASH(expr)\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"expr"}),": \u53ef\u4ee5\u662f\u4efb\u610f\u6570\u636e\u7c7b\u578b\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,t.jsx)(n.p,{children:"\u8fd4\u56de\u503c\u7684\u6570\u636e\u7c7b\u578b\u4e3a BITMAP\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"MySQL > select bitmap_count(bitmap_hash('hello'));\n+------------------------------------+\n| bitmap_count(bitmap_hash('hello')) |\n+------------------------------------+\n|                                  1 |\n+------------------------------------+\n\nselect bitmap_to_string(bitmap_hash('hello'));\n+----------------------------------------+\n| bitmap_to_string(bitmap_hash('hello')) |\n+----------------------------------------+\n| 1321743225                             |\n+----------------------------------------+\n"})})]})}const d=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(h,e)})):h(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>r,ah:()=>a});var t=s(67294);const i=t.createContext({});function a(e){const n=t.useContext(i);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const c={};function r({components:e,children:n,disableParentContext:s}){let r;return r=s?"function"==typeof e?e({}):e||c:a(e),t.createElement(i.Provider,{value:r},n)}}}]);