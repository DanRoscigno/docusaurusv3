"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[95422],{1784:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var s=n(85893),i=n(11151);const a={displayed_sidebar:"Chinese"},r="to_bitmap",c={id:"sql-reference/sql-functions/bitmap-functions/to_bitmap",title:"to_bitmap",description:"description",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.1/sql-reference/sql-functions/bitmap-functions/to_bitmap.md",sourceDirName:"sql-reference/sql-functions/bitmap-functions",slug:"/sql-reference/sql-functions/bitmap-functions/to_bitmap",permalink:"/zh/docs/2.1/sql-reference/sql-functions/bitmap-functions/to_bitmap",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-functions/bitmap-functions/to_bitmap.md",tags:[],version:"2.1",frontMatter:{displayed_sidebar:"Chinese"},sidebar:"Chinese",previous:{title:"bitmap_xor",permalink:"/zh/docs/2.1/sql-reference/sql-functions/bitmap-functions/bitmap_xor"},next:{title:"CAST",permalink:"/zh/docs/2.1/sql-reference/sql-functions/cast"}},o={},l=[{value:"description",id:"description",level:2},{value:"Syntax",id:"syntax",level:3},{value:"example",id:"example",level:2},{value:"keyword",id:"keyword",level:2}];function d(e){const t=Object.assign({h1:"h1",h2:"h2",h3:"h3",pre:"pre",code:"code",p:"p"},(0,i.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"to_bitmap",children:"to_bitmap"}),"\n",(0,s.jsx)(t.h2,{id:"description",children:"description"}),"\n",(0,s.jsx)(t.h3,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-Haskell",children:"BITMAP TO_BITMAP(expr)\n"})}),"\n",(0,s.jsx)(t.p,{children:"\u8f93\u5165\u4e3a\u53d6\u503c\u5728 0 ~ 18446744073709551615 \u533a\u95f4\u7684 unsigned bigint \uff0c\u8f93\u51fa\u4e3a\u5305\u542b\u8be5\u5143\u7d20\u7684bitmap\u3002\n\u8be5\u51fd\u6570\u4e3b\u8981\u7528\u4e8estream load\u4efb\u52a1\u5c06\u6574\u578b\u5b57\u6bb5\u5bfc\u5165StarRocks\u8868\u7684bitmap\u5b57\u6bb5\u3002\u4f8b\u5982"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:'cat data | curl --location-trusted -u user:passwd -T - \\\n    -H "columns: dt,page,user_id, user_id=to_bitmap(user_id)" \\\n    http://host:8410/api/test/testDb/_stream_load\n'})}),"\n",(0,s.jsx)(t.h2,{id:"example",children:"example"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-Plain",metastring:"Text",children:"MySQL > select bitmap_count(to_bitmap(10));\n+-----------------------------+\n| bitmap_count(to_bitmap(10)) |\n+-----------------------------+\n|                           1 |\n+-----------------------------+\n"})}),"\n",(0,s.jsx)(t.h2,{id:"keyword",children:"keyword"}),"\n",(0,s.jsx)(t.p,{children:"TO_BITMAP,BITMAP"})]})}const p=function(e={}){const{wrapper:t}=Object.assign({},(0,i.ah)(),e.components);return t?(0,s.jsx)(t,Object.assign({},e,{children:(0,s.jsx)(d,e)})):d(e)}},11151:(e,t,n)=>{n.d(t,{Zo:()=>c,ah:()=>a});var s=n(67294);const i=s.createContext({});function a(e){const t=s.useContext(i);return s.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const r={};function c({components:e,children:t,disableParentContext:n}){let c;return c=n?"function"==typeof e?e({}):e||r:a(e),s.createElement(i.Provider,{value:c},t)}}}]);