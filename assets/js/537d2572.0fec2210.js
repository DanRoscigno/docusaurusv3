"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[26284],{65011:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>f,frontMatter:()=>i,metadata:()=>o,toc:()=>a});var s=n(85893),r=n(11151);const i={displayed_sidebar:"documentation"},c="strleft",o={id:"sql-reference/sql-functions/string-functions/strleft",title:"strleft",description:"Description",source:"@site/versioned_docs/version-2.5/sql-reference/sql-functions/string-functions/strleft.md",sourceDirName:"sql-reference/sql-functions/string-functions",slug:"/sql-reference/sql-functions/string-functions/strleft",permalink:"/doc/docs/2.5/sql-reference/sql-functions/string-functions/strleft",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-2.5/sql-reference/sql-functions/string-functions/strleft.md",tags:[],version:"2.5",frontMatter:{displayed_sidebar:"documentation"},sidebar:"documentation",previous:{title:"starts_with",permalink:"/doc/docs/2.5/sql-reference/sql-functions/string-functions/starts_with"},next:{title:"strright",permalink:"/doc/docs/2.5/sql-reference/sql-functions/string-functions/strright"}},l={},a=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Examples",id:"examples",level:2},{value:"keyword",id:"keyword",level:2}];function d(e){const t=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",pre:"pre",code:"code"},(0,r.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"strleft",children:"strleft"}),"\n",(0,s.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(t.p,{children:["This function extracts a number of characters from a string with specified length (starting from left). The unit for length: utf8 character.\nNote: This function is also named as ",(0,s.jsx)(t.a,{href:"/doc/docs/2.5/sql-reference/sql-functions/string-functions/left",children:"left"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-SQL",children:"VARCHAR strleft(VARCHAR str,INT len)\n"})}),"\n",(0,s.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-SQL",children:"MySQL > select strleft(\"Hello starrocks\",5);\n+-------------------------------+\n| strleft('Hello starrocks', 5) |\n+-------------------------------+\n| Hello                         |\n+-------------------------------+\n"})}),"\n",(0,s.jsx)(t.h2,{id:"keyword",children:"keyword"}),"\n",(0,s.jsx)(t.p,{children:"STRLEFT"})]})}const f=function(e={}){const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?(0,s.jsx)(t,Object.assign({},e,{children:(0,s.jsx)(d,e)})):d(e)}},11151:(e,t,n)=>{n.d(t,{Zo:()=>o,ah:()=>i});var s=n(67294);const r=s.createContext({});function i(e){const t=s.useContext(r);return s.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const c={};function o({components:e,children:t,disableParentContext:n}){let o;return o=n?"function"==typeof e?e({}):e||c:i(e),s.createElement(r.Provider,{value:o},t)}}}]);