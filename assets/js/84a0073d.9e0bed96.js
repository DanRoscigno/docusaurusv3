"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[81061],{27821:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>p,frontMatter:()=>c,metadata:()=>a,toc:()=>l});var r=n(85893),s=n(11151);const c={displayed_sidebar:"English"},i="regexp_extract",a={id:"sql-reference/sql-functions/string-functions/regexp_extract",title:"regexp_extract",description:"description",source:"@site/versioned_docs/version-2.1/sql-reference/sql-functions/string-functions/regexp_extract.md",sourceDirName:"sql-reference/sql-functions/string-functions",slug:"/sql-reference/sql-functions/string-functions/regexp_extract",permalink:"/docs/2.1/sql-reference/sql-functions/string-functions/regexp_extract",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-functions/string-functions/regexp_extract.md",tags:[],version:"2.1",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"null_or_empty",permalink:"/docs/2.1/sql-reference/sql-functions/string-functions/null_or_empty"},next:{title:"regexp_replace",permalink:"/docs/2.1/sql-reference/sql-functions/string-functions/regexp_replace"}},o={},l=[{value:"description",id:"description",level:2},{value:"Syntax",id:"syntax",level:3},{value:"example",id:"example",level:2},{value:"keyword",id:"keyword",level:2}];function d(e){const t=Object.assign({h1:"h1",h2:"h2",h3:"h3",pre:"pre",code:"code",p:"p"},(0,s.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"regexp_extract",children:"regexp_extract"}),"\n",(0,r.jsx)(t.h2,{id:"description",children:"description"}),"\n",(0,r.jsx)(t.h3,{id:"syntax",children:"Syntax"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-Haskell",children:"VARCHAR regexp_extract(VARCHAR str, VARCHAR pattern, int pos)\n"})}),"\n",(0,r.jsx)(t.p,{children:"This function returns the first matching substring in the target value which matches the regular expression pattern. It extracts the item in pos that matches the pattern. The pattern must completely match some parts of str so that the function can return parts needed to be matched in the pattern. If no matches are found, it will return an empty string."}),"\n",(0,r.jsx)(t.h2,{id:"example",children:"example"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-Plain",metastring:"Text",children:"MySQL > SELECT regexp_extract('AbCdE', '([[:lower:]]+)C([[:lower:]]+)', 1);\n+-------------------------------------------------------------+\n| regexp_extract('AbCdE', '([[:lower:]]+)C([[:lower:]]+)', 1) |\n+-------------------------------------------------------------+\n| b                                                           |\n+-------------------------------------------------------------+\n\nMySQL > SELECT regexp_extract('AbCdE', '([[:lower:]]+)C([[:lower:]]+)', 2);\n+-------------------------------------------------------------+\n| regexp_extract('AbCdE', '([[:lower:]]+)C([[:lower:]]+)', 2) |\n+-------------------------------------------------------------+\n| d                                                           |\n+-------------------------------------------------------------+\n"})}),"\n",(0,r.jsx)(t.h2,{id:"keyword",children:"keyword"}),"\n",(0,r.jsx)(t.p,{children:"REGEXP_EXTRACT,REGEXP,EXTRACT"})]})}const p=function(e={}){const{wrapper:t}=Object.assign({},(0,s.ah)(),e.components);return t?(0,r.jsx)(t,Object.assign({},e,{children:(0,r.jsx)(d,e)})):d(e)}},11151:(e,t,n)=>{n.d(t,{Zo:()=>a,ah:()=>c});var r=n(67294);const s=r.createContext({});function c(e){const t=r.useContext(s);return r.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const i={};function a({components:e,children:t,disableParentContext:n}){let a;return a=n?"function"==typeof e?e({}):e||i:c(e),r.createElement(s.Provider,{value:a},t)}}}]);