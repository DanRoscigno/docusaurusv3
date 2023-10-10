"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[73402],{84649:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>a});var n=t(85893),r=t(11151);const i={},c="strright",o={id:"sql-reference/sql-functions/string-functions/strright",title:"strright",description:"Description",source:"@site/versioned_docs/version-3.1/sql-reference/sql-functions/string-functions/strright.md",sourceDirName:"sql-reference/sql-functions/string-functions",slug:"/sql-reference/sql-functions/string-functions/strright",permalink:"/docusaurusv3/docs/latest/sql-reference/sql-functions/string-functions/strright",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-functions/string-functions/strright.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"strleft",permalink:"/docusaurusv3/docs/latest/sql-reference/sql-functions/string-functions/strleft"},next:{title:"substring, substr",permalink:"/docusaurusv3/docs/latest/sql-reference/sql-functions/string-functions/substring"}},l={},a=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Examples",id:"examples",level:2},{value:"keyword",id:"keyword",level:2}];function u(e){const s=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",pre:"pre",code:"code"},(0,r.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"strright",children:"strright"}),"\n",(0,n.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,n.jsxs)(s.p,{children:["This function extracts a number of characters from a string with specified length (starting from right). The unit for length: utf-8 character.\nNote: This function is also named as ",(0,n.jsx)(s.a,{href:"/docusaurusv3/docs/latest/sql-reference/sql-functions/string-functions/right",children:"right"}),"."]}),"\n",(0,n.jsx)(s.h2,{id:"syntax",children:"Syntax"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-SQL",children:"VARCHAR strright(VARCHAR str,INT len)\n"})}),"\n",(0,n.jsx)(s.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-SQL",children:"MySQL > select strright(\"Hello starrocks\",9);\n+--------------------------------+\n| strright('Hello starrocks', 9) |\n+--------------------------------+\n| starrocks                      |\n+--------------------------------+\n"})}),"\n",(0,n.jsx)(s.h2,{id:"keyword",children:"keyword"}),"\n",(0,n.jsx)(s.p,{children:"STRRIGHT"})]})}const d=function(e={}){const{wrapper:s}=Object.assign({},(0,r.ah)(),e.components);return s?(0,n.jsx)(s,Object.assign({},e,{children:(0,n.jsx)(u,e)})):u(e)}},11151:(e,s,t)=>{t.d(s,{Zo:()=>o,ah:()=>i});var n=t(67294);const r=n.createContext({});function i(e){const s=n.useContext(r);return n.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const c={};function o({components:e,children:s,disableParentContext:t}){let o;return o=t?"function"==typeof e?e({}):e||c:i(e),n.createElement(r.Provider,{value:o},s)}}}]);