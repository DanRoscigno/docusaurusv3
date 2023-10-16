"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[44456],{25833:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>t,metadata:()=>a,toc:()=>o});var s=r(85893),c=r(11151);const t={displayed_sidebar:"English"},i="regexp_replace",a={id:"sql-reference/sql-functions/like_predicate-functions/regexp_replace",title:"regexp_replace",description:"Description",source:"@site/versioned_docs/version-3.1/sql-reference/sql-functions/like_predicate-functions/regexp_replace.md",sourceDirName:"sql-reference/sql-functions/like_predicate-functions",slug:"/sql-reference/sql-functions/like_predicate-functions/regexp_replace",permalink:"/doc/zh/docs/sql-reference/sql-functions/like_predicate-functions/regexp_replace",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-functions/like_predicate-functions/regexp_replace.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"regexp_extract",permalink:"/doc/zh/docs/sql-reference/sql-functions/like_predicate-functions/regexp_extract"},next:{title:"Percentile Functions",permalink:"/doc/zh/docs/category/percentile-functions"}},l={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Examples",id:"examples",level:2},{value:"keyword",id:"keyword",level:2}];function p(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code"},(0,c.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"regexp_replace",children:"regexp_replace"}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"This function uses repl to replace a sequence of characters in str that matches a regular expression pattern."}),"\n",(0,s.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Haskell",children:"VARCHAR regexp_replace(VARCHAR str, VARCHAR pattern, VARCHAR repl)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"MySQL > SELECT regexp_replace('a b c', \" \", \"-\");\n+-----------------------------------+\n| regexp_replace('a b c', ' ', '-') |\n+-----------------------------------+\n| a-b-c                             |\n+-----------------------------------+\n\nMySQL > SELECT regexp_replace('a b c','(b)','<\\\\1>');\n+----------------------------------------+\n| regexp_replace('a b c', '(b)', '<\\1>') |\n+----------------------------------------+\n| a <b> c                                |\n+----------------------------------------+\n"})}),"\n",(0,s.jsx)(n.h2,{id:"keyword",children:"keyword"}),"\n",(0,s.jsx)(n.p,{children:"REGEXP_REPLACE,REGEXP,REPLACE"})]})}const d=function(e={}){const{wrapper:n}=Object.assign({},(0,c.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(p,e)})):p(e)}},11151:(e,n,r)=>{r.d(n,{Zo:()=>a,ah:()=>t});var s=r(67294);const c=s.createContext({});function t(e){const n=s.useContext(c);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const i={};function a({components:e,children:n,disableParentContext:r}){let a;return a=r?"function"==typeof e?e({}):e||i:t(e),s.createElement(c.Provider,{value:a},n)}}}]);