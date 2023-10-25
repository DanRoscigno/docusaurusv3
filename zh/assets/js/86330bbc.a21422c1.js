"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[89304],{8358:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>l});var s=t(85893),i=t(11151);const a={displayed_sidebar:"Chinese"},c="bitmap_hash",r={id:"sql-reference/sql-functions/bitmap-functions/bitmap_hash",title:"bitmap_hash",description:"description",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.1/sql-reference/sql-functions/bitmap-functions/bitmap_hash.md",sourceDirName:"sql-reference/sql-functions/bitmap-functions",slug:"/sql-reference/sql-functions/bitmap-functions/bitmap_hash",permalink:"/zh/docs/2.1/sql-reference/sql-functions/bitmap-functions/bitmap_hash",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-functions/bitmap-functions/bitmap_hash.md",tags:[],version:"2.1",frontMatter:{displayed_sidebar:"Chinese"},sidebar:"Chinese",previous:{title:"bitmap_has_any",permalink:"/zh/docs/2.1/sql-reference/sql-functions/bitmap-functions/bitmap_has_any"},next:{title:"bitmap_intersect",permalink:"/zh/docs/2.1/sql-reference/sql-functions/bitmap-functions/bitmap_intersect"}},o={},l=[{value:"description",id:"description",level:2},{value:"Syntax",id:"syntax",level:3},{value:"example",id:"example",level:2},{value:"keyword",id:"keyword",level:2}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",h3:"h3",pre:"pre",code:"code",p:"p"},(0,i.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"bitmap_hash",children:"bitmap_hash"}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"description"}),"\n",(0,s.jsx)(n.h3,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Haskell",children:"BITMAP BITMAP_HASH(expr)\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u5bf9\u4efb\u610f\u7c7b\u578b\u7684\u8f93\u5165\u8ba1\u7b9732\u4f4d\u7684\u54c8\u5e0c\u503c\uff0c\u8fd4\u56de\u5305\u542b\u8be5\u54c8\u5e0c\u503c\u7684bitmap\u3002\u4e3b\u8981\u7528\u4e8estream load\u4efb\u52a1\u5c06\u975e\u6574\u578b\u5b57\u6bb5\u5bfc\u5165StarRocks\u8868\u7684bitmap\u5b57\u6bb5\u3002\u4f8b\u5982"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'cat data | curl --location-trusted -u user:passwd -T - \\\n    -H "columns: dt,page,device_id, device_id=bitmap_hash(device_id)" \\\n    http://host:8410/api/test/testDb/_stream_load\n'})}),"\n",(0,s.jsx)(n.h2,{id:"example",children:"example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"MySQL > select bitmap_count(bitmap_hash('hello'));\n+------------------------------------+\n| bitmap_count(bitmap_hash('hello')) |\n+------------------------------------+\n|                                  1 |\n+------------------------------------+\n"})}),"\n",(0,s.jsx)(n.h2,{id:"keyword",children:"keyword"}),"\n",(0,s.jsx)(n.p,{children:"BITMAP_HASH,BITMAP"})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(d,e)})):d(e)}},11151:(e,n,t)=>{t.d(n,{Zo:()=>r,ah:()=>a});var s=t(67294);const i=s.createContext({});function a(e){const n=s.useContext(i);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const c={};function r({components:e,children:n,disableParentContext:t}){let r;return r=t?"function"==typeof e?e({}):e||c:a(e),s.createElement(i.Provider,{value:r},n)}}}]);