"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[2381],{86423:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var s=n(85893),i=n(11151);const a={displayed_sidebar:"English"},r="bitmap_empty",c={id:"sql-reference/sql-functions/bitmap-functions/bitmap_empty",title:"bitmap_empty",description:"description",source:"@site/versioned_docs/version-2.2/sql-reference/sql-functions/bitmap-functions/bitmap_empty.md",sourceDirName:"sql-reference/sql-functions/bitmap-functions",slug:"/sql-reference/sql-functions/bitmap-functions/bitmap_empty",permalink:"/docs/2.2/sql-reference/sql-functions/bitmap-functions/bitmap_empty",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-functions/bitmap-functions/bitmap_empty.md",tags:[],version:"2.2",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"bitmap_contains",permalink:"/docs/2.2/sql-reference/sql-functions/bitmap-functions/bitmap_contains"},next:{title:"bitmap_from_string",permalink:"/docs/2.2/sql-reference/sql-functions/bitmap-functions/bitmap_from_string"}},o={},l=[{value:"description",id:"description",level:2},{value:"Syntax",id:"syntax",level:3},{value:"example",id:"example",level:2},{value:"keyword",id:"keyword",level:2}];function p(e){const t=Object.assign({h1:"h1",h2:"h2",h3:"h3",pre:"pre",code:"code",p:"p"},(0,i.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"bitmap_empty",children:"bitmap_empty"}),"\n",(0,s.jsx)(t.h2,{id:"description",children:"description"}),"\n",(0,s.jsx)(t.h3,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-Haskell",children:"BITMAP BITMAP_EMPTY()\n"})}),"\n",(0,s.jsx)(t.p,{children:"Returns an empty bitmap. It is mainly used to fill in the default value during insert or stream load. For example:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:'cat data | curl --location-trusted -u user:passwd -T - \\\n    -H "columns: dt,page,v1,v2=bitmap_empty()" \\\n    http://host:8410/api/test/testDb/_stream_load\n'})}),"\n",(0,s.jsx)(t.h2,{id:"example",children:"example"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-Plain",metastring:"Text",children:"MySQL > select bitmap_count(bitmap_empty());\n+------------------------------+\n| bitmap_count(bitmap_empty()) |\n+------------------------------+\n|                            0 |\n+------------------------------+\n"})}),"\n",(0,s.jsx)(t.h2,{id:"keyword",children:"keyword"}),"\n",(0,s.jsx)(t.p,{children:"BITMAP_EMPTY,BITMAP"})]})}const d=function(e={}){const{wrapper:t}=Object.assign({},(0,i.ah)(),e.components);return t?(0,s.jsx)(t,Object.assign({},e,{children:(0,s.jsx)(p,e)})):p(e)}},11151:(e,t,n)=>{n.d(t,{Zo:()=>c,ah:()=>a});var s=n(67294);const i=s.createContext({});function a(e){const t=s.useContext(i);return s.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const r={};function c({components:e,children:t,disableParentContext:n}){let c;return c=n?"function"==typeof e?e({}):e||r:a(e),s.createElement(i.Provider,{value:c},t)}}}]);