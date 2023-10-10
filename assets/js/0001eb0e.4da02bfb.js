"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[13848],{7014:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var s=n(85893),i=n(11151);const o={},a="to_bitmap",r={id:"sql-reference/sql-functions/bitmap-functions/to_bitmap",title:"to_bitmap",description:"Description",source:"@site/versioned_docs/version-3.1/sql-reference/sql-functions/bitmap-functions/to_bitmap.md",sourceDirName:"sql-reference/sql-functions/bitmap-functions",slug:"/sql-reference/sql-functions/bitmap-functions/to_bitmap",permalink:"/doc/docs/sql-reference/sql-functions/bitmap-functions/to_bitmap",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-functions/bitmap-functions/to_bitmap.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"sub_bitmap",permalink:"/doc/docs/sql-reference/sql-functions/bitmap-functions/sub_bitmap"},next:{title:"Overview of JSON functions and operators",permalink:"/doc/docs/sql-reference/sql-functions/json-functions/overview-of-json-functions-and-operators"}},c={},l=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Examples",id:"examples",level:2},{value:"keyword",id:"keyword",level:2}];function p(t){const e=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code"},(0,i.ah)(),t.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"to_bitmap",children:"to_bitmap"}),"\n",(0,s.jsx)(e.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(e.p,{children:"The input is unsigned bigint with the value ranging from 0 to 18446744073709551615, and the output is bitmap containing this element. This function is mainly used for the stream load task to import integer fields into the bitmap field of the StarRocks table. For example:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:'cat data | curl --location-trusted -u user:passwd -T - \\\n    -H "columns: dt,page,user_id, user_id=to_bitmap(user_id)" \\\n    http://host:8410/api/test/testDb/_stream_load\n'})}),"\n",(0,s.jsx)(e.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-Haskell",children:"BITMAP TO_BITMAP(expr)\n"})}),"\n",(0,s.jsx)(e.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-Plain",metastring:"Text",children:"MySQL > select bitmap_count(to_bitmap(10));\n+-----------------------------+\n| bitmap_count(to_bitmap(10)) |\n+-----------------------------+\n|                           1 |\n+-----------------------------+\n\nselect bitmap_to_string(to_bitmap(10));\n+---------------------------------+\n| bitmap_to_string(to_bitmap(10)) |\n+---------------------------------+\n| 10                              |\n+---------------------------------+\n\nselect bitmap_to_string(to_bitmap(-5));\n+---------------------------------+\n| bitmap_to_string(to_bitmap(-5)) |\n+---------------------------------+\n| NULL                            |\n+---------------------------------+\n\nselect bitmap_to_string(to_bitmap(null));\n+-----------------------------------+\n| bitmap_to_string(to_bitmap(NULL)) |\n+-----------------------------------+\n| NULL                              |\n+-----------------------------------+\n"})}),"\n",(0,s.jsx)(e.h2,{id:"keyword",children:"keyword"}),"\n",(0,s.jsx)(e.p,{children:"TO_BITMAP,BITMAP"})]})}const d=function(t={}){const{wrapper:e}=Object.assign({},(0,i.ah)(),t.components);return e?(0,s.jsx)(e,Object.assign({},t,{children:(0,s.jsx)(p,t)})):p(t)}},11151:(t,e,n)=>{n.d(e,{Zo:()=>r,ah:()=>o});var s=n(67294);const i=s.createContext({});function o(t){const e=s.useContext(i);return s.useMemo((()=>"function"==typeof t?t(e):{...e,...t}),[e,t])}const a={};function r({components:t,children:e,disableParentContext:n}){let r;return r=n?"function"==typeof t?t({}):t||a:o(t),s.createElement(i.Provider,{value:r},e)}}}]);