"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[55351],{72838:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var s=n(85893),a=n(11151);const r={},i="bitmap_to_array",o={id:"sql-reference/sql-functions/bitmap-functions/bitmap_to_array",title:"bitmap_to_array",description:"Description",source:"@site/versioned_docs/version-3.1/sql-reference/sql-functions/bitmap-functions/bitmap_to_array.md",sourceDirName:"sql-reference/sql-functions/bitmap-functions",slug:"/sql-reference/sql-functions/bitmap-functions/bitmap_to_array",permalink:"/docusaurusv3/docs/latest/sql-reference/sql-functions/bitmap-functions/bitmap_to_array",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-functions/bitmap-functions/bitmap_to_array.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"bitmap_subset_limit",permalink:"/docusaurusv3/docs/latest/sql-reference/sql-functions/bitmap-functions/bitmap_subset_limit"},next:{title:"bitmap_to_base64",permalink:"/docusaurusv3/docs/latest/sql-reference/sql-functions/bitmap-functions/bitmap_to_base64"}},c={},l=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function u(e){const t=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code"},(0,a.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"bitmap_to_array",children:"bitmap_to_array"}),"\n",(0,s.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(t.p,{children:"Converts a BITMAP into a BIGINT array."}),"\n",(0,s.jsx)(t.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-Haskell",children:" ARRAY<BIGINT> BITMAP_TO_ARRAY (bitmap)\n"})}),"\n",(0,s.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"bitmap"}),": the bitmap you want to convert."]}),"\n",(0,s.jsx)(t.h2,{id:"return-value",children:"Return value"}),"\n",(0,s.jsx)(t.p,{children:"Returns a BIGINT array."}),"\n",(0,s.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-Plain",children:"select bitmap_to_array(bitmap_from_string(\"1, 7\"));\n+----------------------------------------------+\n| bitmap_to_array(bitmap_from_string('1, 7'))  |\n+----------------------------------------------+\n| [1,7]                                        |\n+----------------------------------------------+\n\nselect bitmap_to_array(NULL);\n+-----------------------+\n| bitmap_to_array(NULL) |\n+-----------------------+\n| NULL                  |\n+-----------------------+\n"})})]})}const p=function(e={}){const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?(0,s.jsx)(t,Object.assign({},e,{children:(0,s.jsx)(u,e)})):u(e)}},11151:(e,t,n)=>{n.d(t,{Zo:()=>o,ah:()=>r});var s=n(67294);const a=s.createContext({});function r(e){const t=s.useContext(a);return s.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const i={};function o({components:e,children:t,disableParentContext:n}){let o;return o=n?"function"==typeof e?e({}):e||i:r(e),s.createElement(a.Provider,{value:o},t)}}}]);