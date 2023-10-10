"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[72906],{58644:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>i,default:()=>f,frontMatter:()=>c,metadata:()=>o,toc:()=>a});var t=n(85893),r=n(11151);const c={},i="strleft",o={id:"sql-reference/sql-functions/string-functions/strleft",title:"strleft",description:"Description",source:"@site/versioned_docs/version-3.1/sql-reference/sql-functions/string-functions/strleft.md",sourceDirName:"sql-reference/sql-functions/string-functions",slug:"/sql-reference/sql-functions/string-functions/strleft",permalink:"/docusaurusv3/docs/sql-reference/sql-functions/string-functions/strleft",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-functions/string-functions/strleft.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"strcmp",permalink:"/docusaurusv3/docs/sql-reference/sql-functions/string-functions/strcmp"},next:{title:"strright",permalink:"/docusaurusv3/docs/sql-reference/sql-functions/string-functions/strright"}},l={},a=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Examples",id:"examples",level:2},{value:"keyword",id:"keyword",level:2}];function u(e){const s=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",pre:"pre",code:"code"},(0,r.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"strleft",children:"strleft"}),"\n",(0,t.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(s.p,{children:["This function extracts a number of characters from a string with specified length (starting from left). The unit for length: utf8 character.\nNote: This function is also named as ",(0,t.jsx)(s.a,{href:"/docusaurusv3/docs/sql-reference/sql-functions/string-functions/left",children:"left"}),"."]}),"\n",(0,t.jsx)(s.h2,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-SQL",children:"VARCHAR strleft(VARCHAR str,INT len)\n"})}),"\n",(0,t.jsx)(s.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-SQL",children:"MySQL > select strleft(\"Hello starrocks\",5);\n+-------------------------------+\n| strleft('Hello starrocks', 5) |\n+-------------------------------+\n| Hello                         |\n+-------------------------------+\n"})}),"\n",(0,t.jsx)(s.h2,{id:"keyword",children:"keyword"}),"\n",(0,t.jsx)(s.p,{children:"STRLEFT"})]})}const f=function(e={}){const{wrapper:s}=Object.assign({},(0,r.ah)(),e.components);return s?(0,t.jsx)(s,Object.assign({},e,{children:(0,t.jsx)(u,e)})):u(e)}},11151:(e,s,n)=>{n.d(s,{Zo:()=>o,ah:()=>c});var t=n(67294);const r=t.createContext({});function c(e){const s=t.useContext(r);return t.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const i={};function o({components:e,children:s,disableParentContext:n}){let o;return o=n?"function"==typeof e?e({}):e||i:c(e),t.createElement(r.Provider,{value:o},s)}}}]);